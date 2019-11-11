package comp9323.group12.backend.support;

import java.util.List;

public class ProfileResponse {
  private String username;
  private String email;
  private String avatarUrl;
  private List<String> skill;

  public ProfileResponse() {}

  public ProfileResponse(String username) {
    this.username = username;
  }

  public ProfileResponse(String username, String email, String avatarUrl, List<String> skill) {
    this.username = username;
    this.email = email;
    this.avatarUrl = avatarUrl;
    this.skill = skill;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getAvatarUrl() {
    return avatarUrl;
  }

  public void setAvatarUrl(String avatarUrl) {
    this.avatarUrl = avatarUrl;
  }

  public List<String> getSkill() {
    return skill;
  }

  public void setSkill(List<String> skill) {
    this.skill = skill;
  }

}
