# Trybe
## Bloco 21 - dia 03
### Funções SQL, JOINs e Normalização
### Transformando ideias em um modelo de banco de dados

### Conteúdos

1. Data Design - Como modelar um banco de dados
2. O que é normalização?
3. 1ª Forma Normal
4. 2ª Forma Normal
5. 3ª Forma Normal
6. Exercícios de fixação - Normalização de dados
7. Bônus: Transformando ideias em um modelo de banco de dados - Parte 2
8. Exercícios
  - Agora a prática
  - Normalização
  - Bônus

Você pode conferir [aqui](https://docs.microsoft.com/pt-br/office/troubleshoot/access/database-normalization-description#normalizing-an-example-table) um resumo dos pontos mencionados nos vídeos sobre cada uma das Formas Normais, bem como sua aplicação na prática.

### Exercícios
#### Agora a prática

1. 🚀 Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:

- Nome;
- Espécie;
- Sexo;
- Idade;
- Localização.

#### Solução:

__Entidades__
| Entidade 01 | Entidade 02 | Entidade 03 | Entidade 04 |
| :---------: | :---------: | :---------: | :---------: |
| Animal | Cuidador | Gerente | Cuidador e Animal |


__Atributos__
| Animal | Cuidador | Gerente | Cuidador e Animal |
| :----: | :------: | :-----: | :---------------: |
| animal_id | cuidador_id | gerente_id | cuidador_id |
| nome | nome | nome | animal_id |
| especie | gerente_id | - | - |
| sexo | - | - | - |
| idade | - | - | - |
| localização | - | - | - |

__Relacionamentos__
- Animal 1:N Cuidadores
  - Um animal pode ter um ou mais cuidadores;
- Cuidador 1:N Animais
  - Um cuidador pode cuidar de um ou mais animais;
- Gerente 1:N Cuidadores
  - Um gerente pode gerenciar uma ou mais cuidadores;
- Cuidador 1:1 Gerente
  - Um cuidador possui um gerente.

__Criando tabelas:__
```
    DROP SCHEMA IF EXISTS zoologico;
    CREATE SCHEMA zoologico;
    USE zoologico;
```

Crie a tabela de animais
```
    CREATE TABLE animal(
	    animal_id INT PRIMARY KEY AUTO_INCREMENT,
	    nome VARCHAR(50) NOT NULL,
        especie VARCHAR(50) NOT NULL,
        sexo VARCHAR(50) NOT NULL,
        idade INT NOT NULL,
        localizacao VARCHAR(50) NOT NULL
    );
```

Crie a tabela de gerentes
```
     CREATE TABLE gerente(
	    gerente_id INT PRIMARY KEY AUTO_INCREMENT,
	    nome VARCHAR(50) NOT NULL
    );
```

Crie a tabela de cuidador relacionando cada cuidador a seu gerente usando uma chave estrangeira (foreign key)
```
    CREATE TABLE cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
        gerente_id INT NOT NULL,
	FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
    );
```

Crie a tabela de relação entre os animais e seus cuidadores
```
    CREATE TABLE animal_cuidador(
	    animal_id INT,
	    cuidador_id INT,
        CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
        FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
	    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
    );
```

#### Normalização

#### Bônus