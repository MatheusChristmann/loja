Olá, este projeto de CRUD foi desenvolvido pelo Youtuber Will Dev e pode ser encontrado o seu passo a passo no link abaixo:
- https://www.youtube.com/watch?v=voXTVTW73E8&t=2063s

ou pode ser baixado pelo GitHub através do link abaixo:
- https://github.com/WilliamDosSantos/CRUD-FullStack

----------------------------------------------------------------------------------------------------------------------------------------
Passo a passo para rodar o projeto:

OBS: Qualquer dúvida pode entrar em contato comigo ou assistir o vídeo no youtube com o Passo a Passo.

1 - Baixar o MYSQL na máqina

2 - Criar um banco de dados chamado "lojdb":
CREATE DATABASE lojadb

3- Criar a tabela "Cliente":
CREATE TABLE cliente (
	id int NOT NULL AUTO_INCREMENT,
	nome varchar(100) NOT NULL,
	data_nascimento varchar(12) NOT NULL,
	fone varchar(12) DEFAULT NULL,
	email varchar(50) DEFAULT NULL,
	PRIMARY KEY (id)
);

4- Rodar o seguinte comando de configuração no Banco de Dados:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'

5- Baixar a pasta "api" e "frontend" que se encontram no meu repositório do GitHub:
- https://github.com/MatheusChristmann/loja

6 - Criar uma pasta chamada "loja" na raiz do diretório do seu computador e adicionar as duas pastas("api" e "frontend") a essa nova pasta.

7 - Criar o projeto node pelo terminal com o comando:
npm init -y

8 - Baixar as bibliotecas para API no terminal:
npm add express nodemon mysql cors

9 - Entrar na pasta "api" e rodar os seguintes comandos para configuração da API:
npx create-react-app ./

10 - Ainda na pasta "api", rodar os seguintes comandos para baixar mais algumas bibliotecas que usaremos:
npm add styled-components axios react-icons react-toastify

11 - Para rodar a aplicação, primeiro vamos 'startar' o backend. Será necessário entrar na pasta "api" e rodar o seguinte comando:
npm start

12 - Por fim, abrir outro terminal e rodar o seguinte comando dentro da pasta "frontend":
npm start

PARABÉNS, DEVE TER COMEÇADO A RODAR NA POSTA 3000.
