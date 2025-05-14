# Usando imagem base do Node
FROM node:18

# Criar e definir diretório de trabalho
WORKDIR /usr/src/app

# Copiar dependências e instalar
COPY package*.json ./
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Definir variáveis de ambiente (pode ser a URL do banco de dados, por exemplo)
ENV DATABASE_URL=""

# Expôr a porta para a aplicação
EXPOSE 3000

# Definir o comando de execução da aplicação
CMD ["npm", "run", "serve"]
