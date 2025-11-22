# sage-portfolio/Dockerfile
# 기본 이미지로 Nginx 공식 이미지 사용
FROM nginx

# 컨테이너 내부의 Nginx 기본 디렉토리로 index.html 파일 복사
COPY . .

# Nginx가 사용할 포트 80번을 외부에 노출
EXPOSE 3000

# 컨테이너가 실행될 때 Nginx 서버를 실행
CMD ["nginx", "-g", "daemon off;"]
