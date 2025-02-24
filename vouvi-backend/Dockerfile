FROM ubuntu:latest AS build

RUN apt-get update
RUN apt-get install openjdk-23-jdk -y
COPY . .

RUN apt-get install maven -y
RUN mvn clean install -DskipTests

FROM openjdk:23-jdk-slim

EXPOSE 3000

COPY --from=build ./api-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT [ "java", "-jar", "app.jar" ]