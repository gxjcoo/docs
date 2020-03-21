sudo docker stop docsnginx || true \
 && sudo docker rm docsnginx || true \
 && pwd \
 && sudo cd /root/docker/jenkins_home/workspace/docs  \
 && pwd \
 && sudo docker  build /root/docker/jenkins_home/workspace/docs  -t docsnginx   \
 && sudo docker run -d -p 80:80 --name docsnginx -v /root/docker/jenkins_home/workspace/docs/docs/.vuepress/dist:/usr/share/nginx/html -v /root/docker/jenkins_home/workspace/docs/nginx.conf:/etc/nginx/nginx.conf docsnginx