package comp9323.group12.backend.controller;

import comp9323.group12.backend.entities.AuthUser;
import comp9323.group12.backend.mapper.AuthUserMapper;
import comp9323.group12.backend.support.SimpleResponse;
import org.apache.ibatis.annotations.Options;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.List;
import java.util.Map;

@RestController
public class AuthController {

  @Autowired
  private JdbcTemplate jdbcTemplate;

  @Autowired
  private AuthUserMapper authUserMapper;

  @RequestMapping(value="/api/unauthorized")
  @ResponseStatus(HttpStatus.UNAUTHORIZED)
  public SimpleResponse loginFailure() {
    return new SimpleResponse("Authentication required");
  }

  @PostMapping("/api/signup")
  public SimpleResponse signup(@RequestParam("username") String username, @RequestParam("password") String password,
                               HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
    try {
      authUserMapper.insertUser(username, password);
    } catch (DataIntegrityViolationException e) {
      System.out.println(e.getMessage());
      response.setStatus(HttpServletResponse.SC_CONFLICT);
      return new SimpleResponse("The user already exists");
    }

//    UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, password);
//    request.getSession();
//    authRequest.setDetails(new WebAuthenticationDetails(request));
//    Authentication authenticatedUser = authenticationManager.authenticate(authRequest);
//
//    SecurityContextHolder.getContext().setAuthentication(authenticatedUser);
//
    response.setStatus(HttpServletResponse.SC_OK);
    return new SimpleResponse("sign up successfully");
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

  @RequestMapping(value = "/**", method = RequestMethod.OPTIONS)
  public ResponseEntity option() {
    return ResponseEntity.ok().build();
  }

}
