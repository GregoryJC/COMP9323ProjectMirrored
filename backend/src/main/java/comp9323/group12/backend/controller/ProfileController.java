package comp9323.group12.backend.controller;

import comp9323.group12.backend.entities.AuthUser;
import comp9323.group12.backend.entities.Comment;
import comp9323.group12.backend.entities.Post;
import comp9323.group12.backend.entities.Project;
import comp9323.group12.backend.mapper.*;
import comp9323.group12.backend.support.ProfileResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProfileController {

  @Autowired
  private AuthUserMapper authUserMapper;

  @Autowired
  private PostMapper postMapper;

  @Autowired
  private CommentMapper commentMapper;

  @Autowired
  private RelUserSkillVerifiedMapper relUserSkillVerifiedMapper;

  @Autowired
  private RelUserProjectParticipateMapper relUserProjectParticipateMapper;

  @Autowired
  private RelUserProjectFavoriteMapper relUserProjectFavoriteMapper;

  @GetMapping("/api/profile")
  public ProfileResponse me(Principal principal) {
    ProfileResponse response = new ProfileResponse();

    String username = principal.getName();
    AuthUser user = authUserMapper.findUserByUsernameIgnoreSensitiveInfo(username);
    response.setUsername(user.getUsername());
    response.setEmail(user.getEmail());
    response.setAvatarUrl(user.getAvatarUrl());

    List<String> skills = relUserSkillVerifiedMapper.getSkillsByUsername(username);
    response.setSkill(skills);
    return response;
  }

  @GetMapping("/api/profile/posts")
  public List<Post> retrieveSimplePost(Principal principal) {
    return postMapper.retrievePostByUsername(principal.getName());
  }

  @GetMapping("/api/profile/comments")
  public List<Comment> retrieveSimpleComment(Principal principal) {
    return commentMapper.retrieveCommentsByUsername(principal.getName());
  }

  @GetMapping("/api/profile/projects")
  public List<Project> retrieveJoiningProjects(Principal principal) {
    return relUserProjectParticipateMapper.retrieveJoiningProjects(principal.getName());
  }

  @GetMapping("/api/profile/projects/favorite")
  public List<Project> retrieveFavoriteProjects(Principal principal) {
    return relUserProjectFavoriteMapper.retrieveFavoriteAllProjects(principal.getName());
  }
}
