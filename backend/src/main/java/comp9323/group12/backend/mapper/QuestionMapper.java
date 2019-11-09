package comp9323.group12.backend.mapper;

import comp9323.group12.backend.entities.Question;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface QuestionMapper {

  @Select("SELECT * FROM question WHERE belong_quiz = #{belong_quiz}")
  List<Question> retrieveAllQuestionByQuizId(Integer belong_quiz);
}
