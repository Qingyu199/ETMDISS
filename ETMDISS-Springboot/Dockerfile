# 使用官方 OpenJDK 镜像
FROM eclipse-temurin:21-jdk

# 设置工作目录
WORKDIR /app

# 拷贝构建好的 jar 包到容器中
COPY target/*.jar app.jar

# 启动命令
ENTRYPOINT ["java", "-jar", "app.jar"]
