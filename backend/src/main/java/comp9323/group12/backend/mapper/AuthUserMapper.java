package comp9323.group12.backend.mapper;

import comp9323.group12.backend.entities.AuthUser;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface AuthUserMapper {

  @Select("select * from user where uid = #{uid}")
  public AuthUser getUserByUid(Integer uid);

  @Select("SELECT * FROM user WHERE username = #{username}")
  public AuthUser findUserByUsername(String username);

  @Insert("insert into user(username, password) VALUES (#{username}, #{password})")
  public int insertUser(AuthUser authUser);
}
