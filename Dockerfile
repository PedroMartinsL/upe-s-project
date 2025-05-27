# Usando imagem base do Node
FROM node:24-alpine

# Criar e definir diretório de trabalho
WORKDIR /app

# Copiar dependências e instalar
COPY package*.json ./
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Permite injetar o argumento passado via --build-arg
ARG DATABASE_URL
ENV VUE_APP_DATABASE_URL=$DATABASE_URL

# Expôr a porta para a aplicação
EXPOSE 8080

# Definir o comando de execução da aplicação
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0"]

