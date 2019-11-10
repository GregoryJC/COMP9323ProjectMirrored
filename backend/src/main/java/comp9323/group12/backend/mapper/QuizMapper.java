package comp9323.group12.backend.mapper;

import comp9323.group12.backend.entities.Question;
import comp9323.group12.backend.entities.Quiz;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface QuizMapper {

  @Select("SELECT * FROM quiz")
  List<Quiz> retrieveAllQuiz();

  @Select("SELECT * FROM quiz WHERE id = #{id}")
  Quiz retrieveQuizById(Integer id);

  @Select("SELECT id, solution FROM question WHERE belong_quiz = #{id}")
  List<Question> getSolutionsByQuizId(Integer id);
}
