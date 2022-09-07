# Exercícios de fixação - normalização de dados
## Exercícios
1. 🚀 Normalize a tabela a seguir para a 1ª Forma Normal.

![Tabela Exercício 01](./exercicio-01-tabela.png)


### 1ª Forma Normal
  - As colunas devem possuir apenas um valor
  - Os valores em uma coluna devem ser do mesmo tipo de dados
  - Cada coluna deve possuir um nome único
  - A ordem dos dados não deve afetar a integridade dos dados

### Solução: 

Tabela __Funcionario__

| funcionario_id | nome | sobrenome | contato | telefone | data_cadastro |
| :------------: | :--: | :-------: | :-----: | :------: | :-----------: |
| 12 | Joseph | Rodrigues | jo@gmail.com | (35)998552-1445 | 2020-05-05 08:50:25 |
| 13 | André | Freeman | andre1990@gmail.com | (47)99522-4996 | 2020-02-05 00:00:00 |
| 14 | Cíntia | Duval | cindy@outlook.com | (33)98855-4669 | 2020-05-05 10:55:35 |
| 15 | Fernanda | Mendes | fernandamendes@yahoo.com | (33)99200-1556 | 2020-05-05 11:45:40 |

Tabela __setor__

| setor_id | funcionario_id | setor |
| :------: | :------------: | :---: |
| 1 | 12 | Administração |
| 2 | 12 | Vendas |
| 3 | 13 | Operacional |
| 4 | 14 | Estratégico | 
| 5 | 14 | Vendas |
| 6 | 15 | Marketing |

2. 🚀 Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, transforme-a agora na 2ª Forma Normal.

### 2ª Forma Normal
  - A tabela deve estar na 1ª Forma Normal
  - A tabela não deve possuir dependências parciais

### Solução: 

Tabela __Funcionario__

| funcionario_id | nome | sobrenome | contato | telefone | data_cadastro |
| :------------: | :--: | :-------: | :-----: | :------: | :-----------: |
| 12 | Joseph | Rodrigues | jo@gmail.com | (35)998552-1445 | 2020-05-05 08:50:25 |
| 13 | André | Freeman | andre1990@gmail.com | (47)99522-4996 | 2020-02-05 00:00:00 |
| 14 | Cíntia | Duval | cindy@outlook.com | (33)98855-4669 | 2020-05-05 10:55:35 |
| 15 | Fernanda | Mendes | fernandamendes@yahoo.com | (33)99200-1556 | 2020-05-05 11:45:40 |

Tabela __setor__

| setor_id | nome |
| :------: | :--: |
| 1 | Administração |
| 2 | Vendas |
| 3 | Operacional |
| 4 | Estratégico | 
| 5 | Vendas |
| 6 | Marketing |

Tabela __setor_funcionario__

| funcionario_id | setor_id |
| :------------: | :------: |
| 12 | 1 |
| 12 | 2 |
| 13 | 3 |
| 14 | 4 |
| 14 | 2 |
| 15 | 5 |

3. 🚀 Monte uma query que:
  - Crie um banco de dados chamado normalization;
  - Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
  - Popule todas as tabelas com os dados fornecidos nos exercícios.

### Solução:

```
CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;
```

```
CREATE TABLE setor(
  setor_id INT primary key,
  nome VARCHAR(100)
) engine=InnoDB;
```

```
    INSERT INTO setor(setor_id, nome) VALUES(1, 'Administração');
    INSERT INTO setor(setor_id, nome) VALUES (2, 'Vendas');
    INSERT INTO setor(setor_id, nome) VALUES(3, 'Operacional');
    INSERT INTO setor(setor_id, nome) VALUES(4, 'Estratégico');
    INSERT INTO setor(setor_id, nome) VALUES(5, 'Marketing');
```

```
    CREATE TABLE funcionario(
        funcionario_id INT primary key,
        nome VARCHAR(100),
        sobrenome VARCHAR(100),
        contato VARCHAR(100),
        telefone VARCHAR(100),
        data_cadastro VARCHAR(100)
    ) engine=InnoDB;
```

```
    CREATE TABLE funcionario(
        funcionario_id INT primary key,
        nome VARCHAR(100),
        sobrenome VARCHAR(100),
        contato VARCHAR(100),
        telefone VARCHAR(100),
        data_cadastro VARCHAR(100)
    ) engine=InnoDB;
```

```
    INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25');
    INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00');
    INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35');
    INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');
```

```
    CREATE TABLE funcionario_setor(
        funcionario_id INT NOT NULL,
        setor_id INT NOT NULL,
        foreign key (funcionario_id) references funcionario(funcionario_id),
        foreign key (setor_id) references setor(setor_id)
    ) engine=InnoDB;
```

```
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(12, 1);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(12, 2);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(13, 3);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(14, 4);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(14, 2);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(15, 5);
```

### Hora de mexer os dedos

__Entidades__
| Entidade 01 | Entidade 02 | Entidade 03 | Entidade 04 |
| :---------: | :---------: | :---------: | :---------: |
| Álbum | Artista | Estilo Musical | Canção |

__Atributos__
| Álbum | Artista | Estilo Musical | Canção |
| :---: | :-----: | :------------: | :----: |
| album_id | artista_id | estilo_id | cancao_id |
| titulo | nome | nome | nome |
| preco | - | - | album_id |
| estilo_id | - | - | - |
| artista_id | - | - | - | - |

__Relacionamentos__
- Artista 1:N Albuns
  - Um artista pode possuir um ou mais álbuns;
- Estilo Musical 1:N Albuns
  - Um estilo musical pode estar contido em um ou mais álbuns;
- Álbum 1:N Canções
  - Um álbum pode possuir uma ou mais canções.