package PPD.vn.WebBanhSach_backend.config;

import PPD.vn.WebBanhSach_backend.Entity.TheLoai;
import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.EntityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MethodRestConfig implements RepositoryRestConfigurer {
//
//    private String url= "http://localhost:8080";
//    @Autowired
//    private EntityManager entityManager;
//    //Cau hinh tuy cap ngan cac httpMetho
//    @Override
//    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
//        HttpMethod[] chanCacPhuongThuc = {
//                HttpMethod.DELETE,
//                HttpMethod.POST,
//                HttpMethod.PATCH,
//                HttpMethod.PUT
//        };
//        /*
//        -Expose ids
//        -cho phep id khi tra ve json
//        config.exposeIdsFor(TheLoai.class);
//         */
//        //disibleHttpMethods(TheLoai.class,config,chanCacPhuongThuc);
//
//
//
//
//
//            config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream()
//                    .map(EntityType::getJavaType)  // Sử dụng EntityType để lấy class của entity
//                    .toArray(Class[]::new));  // Expose the IDs of specific entities
//
//
//    }
//    private void disibleHttpMethods(Class c,
//                                 RepositoryRestConfiguration config
//                                 ,HttpMethod[] method
//    ){
//        config.getExposureConfiguration().forDomainType(c)
//                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(method))
//                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(method ));
//
//
//
//
//    }

}
