package comp9323.group12.backend.controller;

import comp9323.group12.backend.entities.Question;
import comp9323.group12.backend.entities.Quiz;
import comp9323.group12.backend.mapper.QuestionMapper;
import comp9323.group12.backend.mapper.QuizMapper;
import comp9323.group12.backend.mapper.RelUserSkillVerifiedMapper;
import comp9323.group12.backend.support.QuizQuestionResponse;
import comp9323.group12.backend.support.QuizResultResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
public class QuizController {

  @Value("${quiz.mark.unit}")
  private Integer unitMark;

  @Value("${quiz.mark.pass}")
  private Integer passMark;

  @Autowired
  private QuizMapper quizMapper;

  @Autowired
  private QuestionMapper questionMapper;

  @Autowired
  private RelUserSkillVerifiedMapper relUserSkillVerifiedMapper;

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

  @PostMapping("/api/quiz/{id}")
  public QuizResultResponse submitQuiz(@PathVariable("id") Integer id,
                                       @RequestBody List<Answer> answers, Principal principal) {

    Map<Integer, Integer> answersMap = answers.stream().collect(Collectors.toMap(Answer::getId, Answer::getAns));
    List<Question> solutions = quizMapper.getSolutionsByQuizId(id);
    Integer mark = solutions.stream().map(solution -> {
      Integer sid = solution.getId();
      if (solution.equals(answersMap.get(sid))) {
        return unitMark;
      }
      return 0;
    }).reduce(0, Integer::sum);

    if (mark >= passMark) {
      try {
        relUserSkillVerifiedMapper.verifySkill(principal.getName(), id);
      } catch (DataAccessException e) {
        System.out.println(e.getMessage());
      }
      return new QuizResultResponse(mark, "pass");
    }
    return new QuizResultResponse(mark, "fail");
  }

}

// Request body Support
class Answer {
  private Integer id;
  private Integer ans;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getAns() {
    return ans;
  }

  public void setAns(Integer ans) {
    this.ans = ans;
  }
}


