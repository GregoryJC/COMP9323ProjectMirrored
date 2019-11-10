package comp9323.group12.backend.config;


import comp9323.group12.backend.component.auth.RestAuthenticationFailureHandler;
import comp9323.group12.backend.component.auth.RestAuthenticationSuccessHandler;
import org.apache.catalina.filters.CorsFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;


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
              .antMatchers( "/api/unauthorized", "/api/signup", "/api/login", "/api/toppost").permitAll()
              .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
            .anyRequest().authenticated()
            .and().cors(Customizer.withDefaults());
  }

  @Bean
  CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    configuration.setAllowedOrigins(Arrays.asList("*"));
    configuration.setAllowedMethods(Arrays.asList("GET","POST", "OPTIONS", "PUT", "DELETE"));
//    configuration.setAllowedHeaders(Arrays.asList("X-Requested-With", "Origin", "Content-Type", "Accept",
//            "Authorization", "Access-Control-Allow-Credentials", "Access-Control-Allow-Headers", "Access-Control-Allow-Methods",
//            "Access-Control-Allow-Origin", "Access-Control-Expose-Headers", "Access-Control-Max-Age",
//            "Access-Control-Request-Headers", "Access-Control-Request-Method", "Age", "Allow", "Alternates",
//            "Content-Range", "Content-Disposition", "Content-Description"));
    configuration.setAllowedHeaders(Arrays.asList("*"));
    configuration.setAllowCredentials(true);
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", configuration);
    return source;
  }

//  @Bean
//  public FilterRegisterationBean conrsfileter() {
//    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//    CorsConfiguration config = new CorsConfiguration();
//    config.setAllowCredentials(true);
//    config.addAllowedOrigin("*");
//    config.addAllowedHeader("*");
//    config.addAllowedMethod("*");
//    source.registerCorsConfiguration("/**", config);
//    FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
//    bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
//  }
//@Bean
//public FilterRegistrationBean corsFilter() {
//  UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//  CorsConfiguration config = new CorsConfiguration();
//  config.setAllowCredentials(true);
//  config.addAllowedOrigin("*");
//  config.addAllowedHeader("*");
//  config.addAllowedMethod("*");
//  source.registerCorsConfiguration("/**", config);
//  FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
//  bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
//  return bean;
//}
}

