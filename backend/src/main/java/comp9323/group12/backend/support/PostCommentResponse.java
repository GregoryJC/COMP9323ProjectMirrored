package comp9323.group12.backend.support;

import comp9323.group12.backend.entities.Comment;
import comp9323.group12.backend.entities.Post;

public class PostCommentResponse {

  private Post post;
  private Comment comment;

  public PostCommentResponse() { }

  public PostCommentResponse(Post post, Comment comment) {
    this.post = post;
    this.comment = comment;
  }

  public Post getPost() {
    return post;
  }

  public void setPost(Post post) {
    this.post = post;
  }

  public Comment getComment() {
    return comment;
  }

  public void setComment(Comment comment) {
    this.comment = comment;
  }
}
