package comp9323.group12.backend.mapper;

import comp9323.group12.backend.entities.Comment;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface CommentMapper {

  @Select("SELECT * FROM comment WHERE related_post = #{postId}")
  List<Comment> retrieveCommentsByPostId(Integer postId);

  @Select("SELECT * FROM comment WHERE creator = #{username}")
  List<Comment> retrieveCommentsByUsername(String username);

  @Options(useGeneratedKeys = true, keyProperty = "id")
  @Insert("INSERT INTO comment(content, created_time, creator, related_post) VALUES (#{content}, #{createdTime}, #{creator}, #{relatedPost})")
  int insert(Comment comment);
}
