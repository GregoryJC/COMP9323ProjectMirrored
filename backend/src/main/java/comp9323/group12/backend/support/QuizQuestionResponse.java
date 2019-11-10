package comp9323.group12.backend.support;

import com.fasterxml.jackson.annotation.JsonInclude;
import comp9323.group12.backend.entities.Question;
import comp9323.group12.backend.entities.Quiz;

import java.util.List;

public class QuizQuestionResponse {
  private Quiz quiz;
  private List<Question> questions;

  public QuizQuestionResponse(Quiz quiz, List<Question> questions) {
    this.quiz = quiz;
    this.questions = questions;
  }

  public Quiz getQuiz() {
    return quiz;
  }

  public void setQuiz(Quiz quiz) {
    this.quiz = quiz;
  }

  public List<Question> getQuestions() {
    return questions;
  }

  public void setQuestions(List<Question> questions) {
    this.questions = questions;
  }
}
