#------------------------------------------------
#https://hub.docker.com/_/httpd
#------------------------------------------------
FROM httpd:2.4
RUN apt-get -y update
RUN apt-get -y install vim
WORKDIR /usr/local/apache2/htdocs
COPY index.html .
