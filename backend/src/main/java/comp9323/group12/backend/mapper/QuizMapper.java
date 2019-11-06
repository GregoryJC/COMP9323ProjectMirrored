package comp9323.group12.backend.mapper;

import comp9323.group12.backend.entities.Quiz;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface QuizMapper {

  @Select("SELECT * FROM quiz")
  List<Quiz> retrieveAllQuiz();

  @Select("SELECT * FROM quiz where id = #{id}")
  Quiz retrieveQuizById(Integer id);
}
