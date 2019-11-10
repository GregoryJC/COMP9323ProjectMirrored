package comp9323.group12.backend.controller;

import comp9323.group12.backend.entities.Comment;
import comp9323.group12.backend.mapper.CommentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Date;
import java.util.List;

@RestController
public class CommentController {

  @Autowired
  private CommentMapper commentMapper;

  @GetMapping("/api/post/{postId}/comment")
  public List<Comment> retrieveComments(@PathVariable("postId") Integer postId) {
    return commentMapper.retrieveCommentsByPostId(postId);
  }

  @PostMapping("/api/post/{postId}/comment")
  public Comment leaveComment(@PathVariable("postId") Integer postId, @RequestBody Comment comment,
                              Principal principal) {
    comment.setRelatedPost(postId);
    comment.setCreatedTime(new Date());
    comment.setCreator(principal.getName());

    commentMapper.insert(comment);
    return comment;
  }
}
