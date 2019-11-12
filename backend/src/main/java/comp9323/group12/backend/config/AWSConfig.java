package comp9323.group12.backend.config;

import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AWSConfig {

  @Value("${aws.accessKeyId}")
  private String accessKey;

  @Value("${aws.secretKey}")
  private String secretKey;

  @Value("${aws.region}")
  private String region;

  @Bean
  public AWSCredentialsProvider credentialsProvider() {
    return new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey));
  }

  @Bean
  public AmazonS3 amazonS3Client() {
    return AmazonS3ClientBuilder.standard().withRegion(Regions.AP_SOUTHEAST_2).withCredentials(credentialsProvider()).build();
  }
}

