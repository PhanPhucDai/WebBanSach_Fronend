package PPD.vn.WebBanhSach_backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.EntityType;

@Configuration
public class RepositoryRestConfig implements RepositoryRestConfigurer  {

    @Autowired
    private EntityManager entityManager;


    
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        // Tự động expose ID của các entity (bằng cách mở rộng đường dẫn URI)
        config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream()
                .map(EntityType::getJavaType)  // Sử dụng EntityType để lấy class của entity
                .toArray(Class[]::new));  // Expose the IDs of specific entities
    }
}
