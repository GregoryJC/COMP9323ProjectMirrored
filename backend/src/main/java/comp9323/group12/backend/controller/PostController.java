package comp9323.group12.backend.controller;

import comp9323.group12.backend.entities.Post;
import comp9323.group12.backend.mapper.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PostController {

  @Autowired
  private PostMapper postMapper;

  @GetMapping("/api/post")
  public List<Post> retrieveAllPost() {
    return postMapper.selectAll();
  }

  @GetMapping("/api/post/{id}")
  public Post retrievePost(@PathVariable("id") Integer id) {
    postMapper.increaseViewByOne(id);
    return postMapper.retrievePost(id);
  }

  @GetMapping("/api/toppost")
  public List<Post> retrieveTopTenPost() {
    return postMapper.retrieveTopTenPosts();
  }

  @PostMapping("/api/post")
  public Post createNewPost(@RequestBody Post post, Principal principal) {
    post.setCreatedTime(new Date());
    post.setView(0);
    post.setAuthor(principal.getName());

    postMapper.insert(post);
    return post;
  }
}
