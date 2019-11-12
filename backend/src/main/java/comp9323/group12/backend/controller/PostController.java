package comp9323.group12.backend.controller;

import com.amazonaws.services.s3.AmazonS3;
import comp9323.group12.backend.entities.Post;
import comp9323.group12.backend.mapper.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.net.URL;
import java.security.Principal;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
public class PostController {

  @Autowired
  private PostMapper postMapper;

  @Autowired
  private AmazonS3 s3;

  @Value("${aws.s3.postBucket}")
  private String bucketName;

  @Value("${aws.s3.fileNameSuffix}")
  private String filenameSuffix;

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
    // store text into s3
    String filename = UUID.randomUUID().toString();
    s3.putObject(bucketName, filename + filenameSuffix, post.getContent());
    URL url = s3.getUrl(bucketName, filename + filenameSuffix);

    post.setContent(url.toString());
    post.setCreatedTime(new Date());
    post.setView(0);
    post.setAuthor(principal.getName());

    postMapper.insert(post);
    return post;
  }
}
