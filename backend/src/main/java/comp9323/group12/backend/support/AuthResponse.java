package comp9323.group12.backend.support;

public class AuthResponse {
  private Object principal;
  private Object jsessionid;

  public AuthResponse(Object principal, Object details) {
    this.principal = principal;
    this.jsessionid = details;
  }

  public Object getPrincipal() {
    return principal;
  }

  public void setPrincipal(Object principal) {
    this.principal = principal;
  }

  public Object getDetails() {
    return jsessionid;
  }

  public void setDetails(Object details) {
    this.jsessionid = details;
  }
}
