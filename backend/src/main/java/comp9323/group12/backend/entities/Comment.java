package comp9323.group12.backend.entities;

import java.util.Date;

public class Comment {
  private Integer id;

  private Date created_time;

  private Integer creator;

  private Integer related_post;

  private String content;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Date getCreatedTime() {
    return created_time;
  }

  public void setCreatedTime(Date created_time) {
    this.created_time = created_time;
  }

  public Integer getCreator() {
    return creator;
  }

  public void setCreator(Integer creator) {
    this.creator = creator;
  }

  public Integer getRelatedPost() {
    return related_post;
  }

  public void setRelatedPost(Integer related_post) {
    this.related_post = related_post;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content == null ? null : content.trim();
  }
}
