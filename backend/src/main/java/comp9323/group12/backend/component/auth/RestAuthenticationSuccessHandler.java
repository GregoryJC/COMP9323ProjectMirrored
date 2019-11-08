package comp9323.group12.backend.component.auth;

import com.fasterxml.jackson.databind.ObjectMapper;
import comp9323.group12.backend.support.SimpleResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Component
public class RestAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
  @Override
  public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
    SimpleResponse response = new SimpleResponse(authentication.getPrincipal());
    httpServletResponse.setStatus(HttpServletResponse.SC_OK);
    httpServletResponse.setContentType("application/json;charset=utf-8");
    PrintWriter out = httpServletResponse.getWriter();
    out.write(new ObjectMapper().writeValueAsString(response));
    out.flush();
    out.close();
  }
}
