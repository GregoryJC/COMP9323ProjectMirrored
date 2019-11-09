package comp9323.group12.backend.entities;

public class Question {
    private Integer id;

    private String answer;

    private Integer belong_quiz;

    private String content;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer == null ? null : answer.trim();
    }

    public Integer getBelongQuiz() {
        return belong_quiz;
    }

    public void setBelongQuiz(Integer belong_quiz) {
        this.belong_quiz = belong_quiz;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }
}