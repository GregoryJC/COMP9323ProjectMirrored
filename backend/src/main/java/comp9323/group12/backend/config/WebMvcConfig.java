package comp9323.group12.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Configuration
//public class WebMvcConfig {
//  @Bean
//  public WebMvcConfigurer allowCorsConfigurer() {
//    return new WebMvcConfigurer() {
//      @Override
//      public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOrigins("*")
//                .allowedHeaders("Access-Control-Allow-Origin")
//                .allowedMethods("PUT", "DELETE", "POST", "OPTIONS", "GET")
//                .allowCredentials(false)
//                .maxAge(3600);
//      }
//    };
//  }
//}
