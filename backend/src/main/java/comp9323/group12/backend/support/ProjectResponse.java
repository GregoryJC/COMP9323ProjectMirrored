package comp9323.group12.backend.support;

import comp9323.group12.backend.entities.Project;

public class ProjectResponse {
  private Project project;
  private Integer isLike;

  public ProjectResponse(Project project, Integer isLike) {
    this.project = project;
    this.isLike = isLike;
  }

  public Project getProject() {
    return project;
  }

  public void setProject(Project project) {
    this.project = project;
  }

  public Integer getIsLike() {
    return isLike;
  }

  public void setIsLike(Integer isLike) {
    this.isLike = isLike;
  }
}
