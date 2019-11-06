package comp9323.group12.backend.controller;

import comp9323.group12.backend.entities.User;
import comp9323.group12.backend.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class AuthController {

  @Autowired
  JdbcTemplate jdbcTemplate;

//  @PostMapping(value="/api/login")
//  public String login(@RequestParam("username") String username, @RequestParam("password") String password,
//                      Map<String, Object> map, HttpSession session) {
//    if (!StringUtils.isEmpty(username) && "123456".equals(password)) {
//      session.setAttribute("user", username);
//      return "login successfully";
//    }
//    map.put("msg", "invalid username or password");
//    return "dashboard";
//  }

  @Autowired
  UserMapper userMapper;

  @GetMapping("/auth/{uid}")
  public User getUser(@PathVariable("uid") Integer uid) {
    return userMapper.getUserByUid(uid);
  }

  @GetMapping(value="/query")
  public Map<String, Object> map () {
    List<Map<String, Object>> list = jdbcTemplate.queryForList("SELECT * FROM user;");
    return list.get(0);

  }
}
