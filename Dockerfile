# Use a imagem oficial do MySQL 8 como base
FROM mysql:8

# Defina variáveis de ambiente para configurar o MySQL
ENV MYSQL_DATABASE=mydatabase \
    MYSQL_USER=myuser \
    MYSQL_PASSWORD=mypassword \
    MYSQL_ROOT_PASSWORD=root

# Copie um script SQL para a pasta docker-entrypoint-initdb.d para ser executado na inicialização do container
COPY ./import.sql /docker-entrypoint-initdb.d/

# Exponha a porta que o MySQL está usando (padrão é 3306)
