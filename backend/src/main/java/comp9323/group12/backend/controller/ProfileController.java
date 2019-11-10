package comp9323.group12.backend.controller;

import comp9323.group12.backend.entities.AuthUser;
import comp9323.group12.backend.entities.Comment;
import comp9323.group12.backend.entities.Post;
import comp9323.group12.backend.mapper.AuthUserMapper;
import comp9323.group12.backend.mapper.CommentMapper;
import comp9323.group12.backend.mapper.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
public class ProfileController {

  @Autowired
  private AuthUserMapper authUserMapper;

  @Autowired
  private PostMapper postMapper;

  @Autowired
  private CommentMapper commentMapper;

  @GetMapping("/api/profile")
  public AuthUser me(Principal principal) {
    return authUserMapper.findUserByUsernameIgnoreSensitiveInfo(principal.getName());
  }

  @GetMapping("/api/profile/posts")
  public List<Post> retrieveSimplePost(Principal principal) {
    return postMapper.retrievePostByUsername(principal.getName());
  }

  @GetMapping("/api/profile/comments")
  public List<Comment> retrieveSimpleComment(Principal principal) {
    return commentMapper.retrieveCommentsByUsername(principal.getName());
  }

}
