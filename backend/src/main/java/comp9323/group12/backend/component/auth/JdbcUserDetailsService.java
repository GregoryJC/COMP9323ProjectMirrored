package comp9323.group12.backend.component.auth;

import comp9323.group12.backend.entities.AuthUser;
import comp9323.group12.backend.mapper.AuthUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JdbcUserDetailsService implements UserDetailsService {

  @Autowired
  private AuthUserMapper authUserMapper;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    AuthUser authUser =  authUserMapper.findUserByUsername(username);

    if (authUser == null) {
      throw new UsernameNotFoundException("User not found");
    }

    UserBuilder userBuilder = User.withUsername(username)
            .password("{noop}" + authUser.getPassword())
            .roles("user");

    return userBuilder.build();
  }
}

