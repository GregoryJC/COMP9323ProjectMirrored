package comp9323.group12.backend.mapper;

import comp9323.group12.backend.entities.Post;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface PostMapper {

  @Select("SELECT * FROM post ORDER BY created_time DESC")
  List<Post> selectAll();

  @Select("SELECT * FROM post WHERE id = #{id}")
  Post retrievePost(Integer id);

  @Select("SELECT * FROM post WHERE author = #{username}")
  List<Post> retrievePostByUsername(String username);

  @Select("SELECT * FROM post ORDER BY view DESC LIMIT 10")
  List<Post> retrieveTopTenPosts();

  @Update("UPDATE post set view=view+1 WHERE id = #{id}")
  int increaseViewByOne(Integer id);

  @Options(useGeneratedKeys = true, keyProperty = "id")
  @Insert("INSERT INTO post(content, created_time, author) VALUES (#{content}, #{createdTime}, #{author})")
  int insert(Post post);


}
