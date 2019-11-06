package comp9323.group12.backend.controller;

import comp9323.group12.backend.entities.Post;
import comp9323.group12.backend.mapper.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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
  public Post createNewPost(@RequestBody Post post) {
    postMapper.insert(post);
    return post;
  }

}
