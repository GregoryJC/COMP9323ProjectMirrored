package comp9323.group12.backend.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import comp9323.group12.backend.entities.Project;
import comp9323.group12.backend.mapper.ProjectMapper;
import comp9323.group12.backend.mapper.RelUserProjectFavoriteMapper;
import comp9323.group12.backend.mapper.RelUserProjectParticipateMapper;
import comp9323.group12.backend.mapper.RelUserSkillVerifiedMapper;
import comp9323.group12.backend.support.ProjectResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
public class ProjectController {

  @Autowired
  private ProjectMapper projectMapper;

  @Autowired
  private RelUserProjectFavoriteMapper relUserProjectFavoriteMapper;

  @Autowired
  private RelUserProjectParticipateMapper relUserProjectParticipateMapper;

  @Autowired
  private RelUserSkillVerifiedMapper relUserSkillVerifiedMapper;

  @GetMapping("/api/project")
  public List<Project> retrieveAllProjects() {
    return projectMapper.retrieveAllProjects();
  }

  @GetMapping("/api/project/{id}")
  public ProjectResponse retrieveProject(@PathVariable("id") Integer id, Authentication authentication) {
    Integer isLike = 0;
    Project project = projectMapper.retrieveProjectById(id);

    if (authentication.isAuthenticated()) {
      String username = ((User)authentication.getPrincipal()).getUsername();
      isLike = relUserProjectFavoriteMapper.isLikedByUser(username, id) == null ? 0 : 1;
    }
    return new ProjectResponse(project, isLike);
  }

  @PostMapping("/api/project")
  public Project createNewProject(@RequestBody ProjectRequest projectRequest, Principal principal) {
    Project project = new Project();
    project.setCreatedTime(new Date());
    project.setCreator(principal.getName());

    project.setName(projectRequest.getName());
    project.setSummary(projectRequest.getSummary());
    project.setRequirement(projectRequest.getRequirement().stream().collect(Collectors.joining(", ")));

    projectMapper.createProject(project);

    return project;
  }

  @PostMapping("/api/project/{id}/favorite")
  @ResponseStatus(HttpStatus.OK)
  public void likeProject(@PathVariable("id") Integer id, Principal principal) {
    String username = principal.getName();
    if (relUserProjectFavoriteMapper.isLikedByUser(username, id) == null) {
      relUserProjectFavoriteMapper.likeProject(username, id);
    } else {
      relUserProjectFavoriteMapper.unlikeProject(username, id);
    }
  }

  @PostMapping("/api/project/{id}/join")
  public Project joinProject(@PathVariable("id") Integer id, HttpServletResponse response, Principal principal) {
    String username = principal.getName();

    if (relUserProjectParticipateMapper.isJoining(username, id) != null) {
      response.setStatus(HttpServletResponse.SC_CONFLICT);
      return projectMapper.retrieveProjectById(id);
    }

    List<String> verifiedSkills = relUserSkillVerifiedMapper.getSkillsByUsername(username);
    Project project = projectMapper.retrieveProjectById(id);
    String requirement = project.getRequirement();
    if (requirement != null && !"".equals(requirement)) {
      List<String> requiredSkills = Arrays.stream(requirement.split(",\\s*")).collect(Collectors.toList());

      if (!verifiedSkills.containsAll(requiredSkills)) {
        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        return project;
      }
    }
    response.setStatus(HttpServletResponse.SC_OK);
    relUserProjectParticipateMapper.join(username, id);
    return projectMapper.retrieveProjectById(id);
  }

  @GetMapping("/api/project/recommend")
  public List<Project> recommend() {
    return relUserProjectFavoriteMapper.retrieveRecommendProjects();
  }

}

class ProjectRequest {
  private String name;

  private String summary;

  private List<String> requirement;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getSummary() {
    return summary;
  }

  public void setSummary(String summary) {
    this.summary = summary;
  }

  public List<String> getRequirement() {
    return requirement;
  }

  public void setRequirement(List<String> requirement) {
    this.requirement = requirement;
  }

  @Override
  public String toString() {
    return this.requirement.toString();
  }
}

