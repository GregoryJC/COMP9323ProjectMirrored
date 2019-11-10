package comp9323.group12.backend.support;

public class QuizResultResponse {
  private Integer mark;
  private String result;

  public QuizResultResponse(Integer mark, String result) {
    this.mark = mark;
    this.result = result;
  }

  public Integer getMark() {
    return mark;
  }

  public void setMark(Integer mark) {
    this.mark = mark;
  }

  public String getResult() {
    return result;
  }

  public void setResult(String result) {
    this.result = result;
  }
}
