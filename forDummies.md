# MySQL

Link download: https://dev.mysql.com/downloads/installer/

# Configurações

porta: 3306
senha: 1234
Windows Service Management: MySQL80

Para acessar o banco (cmd)
C:\Program Files\MySLQ\MySQL Server 8.0\bin> mysql -u root -p
Senha: 1234

Para iniciar o MySQL

w+r services.msc

# Comandos MySQL CMD

Listar Banco de Dados
* show databases;

Criar um Banco de Dados
* create database portal_noticias;

Selecionar um Banco de Dados
* use portal_noticias;

Exibi as tabelas de um Banco de dados
* show tables;

Selecionar um banco de dados
* use portal_noticias;

Verificar as tabelas criadas no banco de dados
* show tables;

Criar tabela
* create table noticias(
    -> id_noticia int not null primary key auto_increment,
    -> titulo varchar(100)
    -> noticia text,
    -> data_criacao timestamp default current_timestamp);

https://cursos.alura.com.br/forum/topico-erro-er_not_supported_auth_mode-client-does-not-support-authentication-protocol-requested-by-server-consider-upgrading-mysql-client-61991

https://stackoverflow.com/questions/41645309/mysql-error-access-denied-for-user-rootlocalhost

# CMD

Meu usuário
*  whoami

Diretório atual (Observação: 'pwd' significa 'print working directory' (imprima/mostre o diretório de trabalho).)
* pwd

Subir um nível de pasta (Observação: 'cd' significa 'change directory' em inglês, o que se traduz para 'mudar de diretório'. Com o PowerShell, você pode utilizar pwd da mesma forma como no Linux ou Mac OS X.)
* cd

CD + diretório entra em um diretório desejado, use aspas caso o nome do diretório tenha espaços ex: cd "guilherme alencar"
* cd 'diretório'

Lista os diretórios dentro do diretório atual
* dir

Criar um diretório
* mkdir practice




