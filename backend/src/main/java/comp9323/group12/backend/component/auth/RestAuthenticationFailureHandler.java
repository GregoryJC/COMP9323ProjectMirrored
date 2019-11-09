package comp9323.group12.backend.component.auth;


import com.fasterxml.jackson.databind.ObjectMapper;
import comp9323.group12.backend.support.SimpleResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Component
public class RestAuthenticationFailureHandler implements AuthenticationFailureHandler {
  @Override
  public void onAuthenticationFailure(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
    SimpleResponse response = new SimpleResponse("invalid username/password");
    httpServletResponse.setContentType("application/json;charset=utf-8");
    httpServletResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    PrintWriter out = httpServletResponse.getWriter();
    out.write(new ObjectMapper().writeValueAsString(response));
    out.flush();
    out.close();
  }
}
