package comp9323.group12.backend.mapper;

import comp9323.group12.backend.entities.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

  @Select("select * from user where uid = #{uid}")
  public User getUserByUid(Integer uid);

  @Insert("insert into user(username, password) VALUES (#{username}, #{password})")
  public int insertUser(User user);
}
