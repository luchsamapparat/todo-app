package org.luchs.marvin.ssrtodo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry
            .addMapping("/api/**")
            .allowedOrigins(
                "capacitor://localhost", // iOS
                "http://localhost", // Android
                "https://todo-app.luchsamappar.at", // web
                "http://localhost:4200" // local
            )
            .allowedMethods("GET", "POST")
            .exposedHeaders("location");
    }

}
