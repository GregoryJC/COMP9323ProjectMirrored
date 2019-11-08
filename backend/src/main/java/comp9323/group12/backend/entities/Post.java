package comp9323.group12.backend.entities;


import java.util.Date;

public class Post {

  private Integer id;
  private String content;
  private Date created_time;
  private Integer author;
  private Integer view;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content == null ? null : content.trim();
  }

  public Date getCreated_time() {
    return created_time;
  }

  public void setCreated_time(Date created_time) {
    this.created_time = created_time;
  }

  public Integer getAuthor() {
    return author;
  }

  public void setAuthor(Integer author) {
    this.author = author;
  }

  public Integer getView() { return view; }

  public void setView(Integer view) {
    this.view = view;
  }
}
