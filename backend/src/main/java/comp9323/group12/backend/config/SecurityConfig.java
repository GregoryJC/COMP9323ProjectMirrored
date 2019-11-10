package comp9323.group12.backend.config;


import comp9323.group12.backend.component.auth.RestAuthenticationFailureHandler;
import comp9323.group12.backend.component.auth.RestAuthenticationSuccessHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.web.bind.annotation.CrossOrigin;


@EnableWebSecurity
@CrossOrigin(origins = "*")
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Autowired
  private RestAuthenticationSuccessHandler restAuthenticationSuccessHandler;

  @Autowired
  private RestAuthenticationFailureHandler restAuthenticationFailureHandler;

  @Autowired
  private LogoutSuccessHandler logoutSuccessHandler;

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.csrf().disable();
    http
            .formLogin()
              .loginProcessingUrl("/api/login")
              .loginPage("/api/unauthorized")
              .successHandler(restAuthenticationSuccessHandler)
              .failureHandler(restAuthenticationFailureHandler)
            .and()
            .logout()
              .logoutUrl("/api/logout")
              .logoutSuccessHandler(logoutSuccessHandler)
            .and()
            .authorizeRequests()
              .antMatchers( "/api/unauthorized", "/api/signup", "/api/login").permitAll()
              .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
            .anyRequest().authenticated();
  }
}

