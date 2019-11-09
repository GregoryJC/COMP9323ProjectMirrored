package comp9323.group12.backend.controller;

import comp9323.group12.backend.entities.Question;
import comp9323.group12.backend.entities.Quiz;
import comp9323.group12.backend.mapper.QuestionMapper;
import comp9323.group12.backend.mapper.QuizMapper;
import comp9323.group12.backend.support.QuizQuestionResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuizController {

  @Autowired
  private QuizMapper quizMapper;

  @Autowired
  private QuestionMapper questionMapper;

  @GetMapping("/api/quiz/{id}")
  public QuizQuestionResponse retrieveQuiz(@PathVariable("id") Integer id) {
    Quiz quizInfo = quizMapper.retrieveQuizById(id);
    List<Question> questionList = questionMapper.retrieveAllQuestionByQuizId(id);
    return new QuizQuestionResponse(quizInfo, questionList);
  }

  @GetMapping("/api/quiz")
  public List<Quiz> retrieveAllQuiz() {
    return quizMapper.retrieveAllQuiz();
  }
}
