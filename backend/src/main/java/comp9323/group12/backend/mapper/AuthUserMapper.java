package comp9323.group12.backend.mapper;

import comp9323.group12.backend.entities.AuthUser;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.dao.DataIntegrityViolationException;

@Mapper
public interface AuthUserMapper {

  @Select("select * from user where uid = #{uid}")
  AuthUser getUserByUid(Integer uid);

  @Select("SELECT * FROM user WHERE username = #{username}")
  AuthUser findUserByUsername(String username);

  @Select("SELECT username, email, avatar_url FROM user WHERE username = #{username}")
  AuthUser findUserByUsernameIgnoreSensitiveInfo(String username);

  @Insert("insert into user(username, password) VALUES (#{username}, #{password})")
  int insertUser(String username, String password) throws DataIntegrityViolationException;
}
