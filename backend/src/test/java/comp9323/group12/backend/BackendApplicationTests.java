package comp9323.group12.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@SpringBootTest
class BackendApplicationTests {

  @Autowired
  DataSource dataSource;

  @Test
  void contextLoads() throws SQLException {
    System.out.println(dataSource.getClass());

    Connection connection = dataSource.getConnection();
    System.out.println(connection);
    connection.close();

  }

}