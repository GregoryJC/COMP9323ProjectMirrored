package comp9323.group12.backend.support;

public class SimpleResponse {

  private Object message;

  public SimpleResponse() {}

  public SimpleResponse(Object message) {
    this.message = message;
  }

  public Object getMessage() {
    return message;
  }

  public void setMessage(Object message) {
    this.message = message;
  }

}
