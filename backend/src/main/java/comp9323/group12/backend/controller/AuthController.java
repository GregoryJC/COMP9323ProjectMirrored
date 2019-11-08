package comp9323.group12.backend.controller;

import comp9323.group12.backend.entities.AuthUser;
import comp9323.group12.backend.mapper.AuthUserMapper;
import comp9323.group12.backend.support.SimpleResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.Http403ForbiddenEntryPoint;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

@RestController
public class AuthController {

  @Autowired
  JdbcTemplate jdbcTemplate;

  @Autowired
  AuthUserMapper authUserMapper;

//  @RequestMapping(value="/api/unauthorized")
  @ResponseStatus(HttpStatus.UNAUTHORIZED)
  public SimpleResponse loginFailure() {
    return new SimpleResponse("Authentication required");
  }

  @GetMapping("/auth/{uid}")
  public AuthUser getUser(@PathVariable("uid") Integer uid) {
    return authUserMapper.getUserByUid(uid);
  }

  @GetMapping(value="/query")
  public Map<String, Object> map (Authentication authentication) {
    System.out.println(authentication);

    List<Map<String, Object>> list = jdbcTemplate.queryForList("SELECT * FROM user;");
    return list.get(0);

  }
}
