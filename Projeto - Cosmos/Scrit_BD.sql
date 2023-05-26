CREATE DATABASE cosmos;

USE cosmos;

CREATE TABLE usuario (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
	nome_completo VARCHAR(100),
	nome_user VARCHAR(50),
	email VARCHAR(50),
    senha VARCHAR(30),
    fkPesquisa int, 
    foreign key (fkPesquisa) references pesquisa (id_pesquisa)
);

create table pesquisa (
/* em nossa regra de negócio, terá uma dashboard de comparação entre votos de users cadastrados e sem cadastro, para analitcs */
	id_pesquisa INT PRIMARY KEY AUTO_INCREMENT,
	resposta VARCHAR(3)
);

create table cep(
idcep int primary key auto_increment,
cep varchar(9),
fkUsuario int unique, 
foreign key (fkUsuario) references usuario (id_usuario)
);


insert into cep values (null, '09270-430', 1);

insert into usuario values (
null, 'Arthur Ciliberti de Oliveira', 'Arthurzinho', 'arthur.ciliberti@gmail.com', '12345678', 1
);

insert into pesquisa values (
null, 'sim'
);

select*from usuario;

select*from pesquisa;

select*from cep;

select*from usuario join cep on fkusuario = id_usuario JOIN pesquisa on id_usuario = fkUsuario where id_usuario = 1;
#${sessionStorage.NOME}

