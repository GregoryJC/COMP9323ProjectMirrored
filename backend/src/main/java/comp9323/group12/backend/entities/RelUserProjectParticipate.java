package comp9323.group12.backend.entities;

public class RelUserProjectParticipate {
  private Integer id;

  private String username;

  private Integer project;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username == null ? null : username.trim();
  }

  public Integer getProject() {
    return project;
  }

  public void setProject(Integer project) {
    this.project = project;
  }
}
