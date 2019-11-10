package comp9323.group12.backend.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;

@Mapper
public interface RelUserSkillVerifiedMapper {

  @Insert("INSERT INTO rel_user_skill_verified(username, skill) SELECT #{username}, " +
          "related_skill FROM quiz WHERE quiz.id = #{quizId}")
  public int verifySkill(String username, Integer quizId) throws DataAccessException;

}
