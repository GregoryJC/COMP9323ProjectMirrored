package comp9323.group12.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import comp9323.group12.backend.entities.Project;
import comp9323.group12.backend.mapper.ProjectMapper;
import comp9323.group12.backend.support.SimpleResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProjectController {

  @Autowired
  private ProjectMapper projectMapper;

  @GetMapping("/api/project")
  public List<Project> retrieveAllProjects() {
    return projectMapper.retrieveAllProjects();
  }

  @GetMapping("/api/project/{id}")
  public Project retrieveProject(@PathVariable("id") Integer id) {
    return projectMapper.retrieveProjectById(id);
  }

  @PostMapping("/api/project")
  public Project createNewProject(@RequestBody ProjectRequest projectRequest, Principal principal) {
    Project project = new Project();
    project.setCreatedTime(new Date());
    project.setCreator(principal.getName());

    project.setName(projectRequest.getName());
    project.setSummary(projectRequest.getSummary());
    project.setRequirement(projectRequest.getRequirement().toString());

    projectMapper.createProject(project);

    return project;
  }

//  @PostMapping("/api/project/{id}/favorite")
//  public SimpleResponse likeProject(@PathVariable("id") Integer id, HttpServletResponse response, Principal principal) {
//
//  }

}

class ProjectRequest {
  private String name;

  private String summary;

  @JsonProperty
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

