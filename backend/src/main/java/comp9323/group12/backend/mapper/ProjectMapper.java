package comp9323.group12.backend.mapper;

import comp9323.group12.backend.entities.Project;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ProjectMapper {

  @Select("SELECT * FROM project")
  List<Project> retrieveAllProjects();

  @Select("SELECT * FROM project WHERE id = #{id}")
  Project retrieveProjectById(Integer id);

  @Options(useGeneratedKeys = true, keyProperty = "id")
  @Insert("INSERT INTO project(name, creator, created_time, summary, requirement) " +
          "VALUES(#{name}, #{creator}, #{createdTime}, #{summary}, #{requirement})")
  int createProject(Project project);
}
