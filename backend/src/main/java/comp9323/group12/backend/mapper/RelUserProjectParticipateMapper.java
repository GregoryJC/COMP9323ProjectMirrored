package comp9323.group12.backend.mapper;

import comp9323.group12.backend.entities.Project;
import comp9323.group12.backend.entities.RelUserProjectParticipate;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface RelUserProjectParticipateMapper {

  @Select("SELECT * FROM rel_user_project_participate WHERE username = #{username} AND " +
          "project = #{id}")
  RelUserProjectParticipate isJoining(String username, Integer id);

  @Insert("INSERT INTO rel_user_project_participate (username, project) VALUES (#{username}, #{project})")
  int join(String username, Integer project);

  @Select("SELECT proj.* FROM project as proj INNER JOIN rel_user_project_participate as rel ON " +
          "proj.id = rel.project WHERE username = #{username}")
  List<Project> retrieveJoiningProjects(String username);
}
