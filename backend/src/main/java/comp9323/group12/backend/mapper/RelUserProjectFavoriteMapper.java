package comp9323.group12.backend.mapper;

import comp9323.group12.backend.entities.Project;
import comp9323.group12.backend.entities.RelUserProjectFavorite;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface RelUserProjectFavoriteMapper {

  @Select("SELECT proj.* FROM `rel_user_project_favorite` as rel inner join " +
          "project as proj on proj.id = rel.project WHERE rel.username = #{username}")
  List<Project> retrieveFavoriteAllProjects(String username);

  @Select("SELECT * FROM rel_user_project_favorite WHERE username = #{username} AND project = #{project} ")
  RelUserProjectFavorite isLikedByUser(String username, Integer project);

  @Insert("INSERT INTO rel_user_project_favorite(username, project) VALUES (#{username}, #{project})")
  int likeProject(String username, Integer project);

  @Delete("DELETE FROM rel_user_project_favorite WHERE username = #{username} AND project = #{project}")
  int unlikeProject(String username, Integer project);

  @Select("SELECT proj.* FROM rel_user_project_favorite as rel INNER JOIN project as proj on " +
          "rel.project = proj.id GROUP BY rel.project ORDER BY count(DISTINCT rel.username) DESC LIMIT 5")
  List<Project> retrieveRecommendProjects();
}
