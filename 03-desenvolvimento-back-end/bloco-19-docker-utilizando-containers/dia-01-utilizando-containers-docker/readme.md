# Trybe - Exercícios
## Bloco 19 - dia 01
### Docker: Utilizando Containers
### Utilizando Containers - Docker

### Exercícios

Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!
1. No Docker Hub, utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian.
```
No campo de busca do Docker Hub, você pode procurar por diversas imagens (incluindo softwares populares como o mysql, ou servidores da web, como o nginx), nesse caso, procuramos pela palavra chave debian.
```

2. Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um container para isso.
```
Ao acessar a página de detalhes, logo de cara, a página já indica o comando docker pull <imagem>, esse comando faz apenas o download da imagem, sem o processo de criação e execução do container.
```

3. Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.
```
Para executar esta ação, digite o comando docker pull:stable-slim. As tags também podem ser acessadas pela página de detalhes da imagem (onde também é fornecido o comando para executar).
```

4. Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.
```
Para criar e executar nosso container, usamos o comando docker container run -it debian:stable-slim, lembrando que a imagem pode ser chamada no formato <imagem>:<tag>.
  Outra solução também pode ser com o uso do comando create, que cria o container, mas não o inicia imediatamente.
  Primeiro utilizamos o comando docker container create -it debian:stable-slim, para criar um container. Como esse comando gera um CONTAINER ID, podemos utilizá-lo como referência para o segundo passo, com o comando start, como em docker container start -i <CONTAINER ID>, dessa forma, iniciamos o container no modo interativo.
```

5. No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container.
```
Ao rodar o comando cat /etc/*-release foram retornados os dados corretos da distribuição estável do Debian (versão 11, codinome bullseye).
```

6. Encerre o terminal.
```
Para encerrar o terminal interno do container, o comando exit foi utilizado.
```

7. Verifique na sua lista de containers qual container se refere ao exercício que acabou de praticar.
```
Para listar o container, podemos utilizar o comando abreviado docker ps -l, assim como docker container ls -l, (para mostrar qual foi o último container criado); ou se quisermos mostrar todos, usamos o comando docker ps -a.
```

8. Inicie o mesmo container novamente, sem criar outro. Valide se ele está ativo na lista de containers.
```
Na ilustração acima, foi utilizado o comando abreviado docker start <CONTAINER ID || NAMES> onde <CONTAINER ID || NAMES> foi o início do identificador único 07c0a580d818 (mostrando que não é preciso passar o valor inteiro), o container ficou ativo (campo STATUS) após isso.
```

9. Retome o container que foi criado anteriormente neste exercício.
```
Foi utilizado o comando abreviado docker attach <CONTAINER ID || NAMES>. Já que o container foi inicializado anteriormente de modo interativo, pudemos retomar seu terminal.
```

10. Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container.
```
Foi utilizado o comando cat /etc/debian_version, que retorna o número da atual versão estável do Debian (11.0).
```

11. Encerre o terminal.
```
Para encerrar o terminal interno do container, o comando exit foi utilizado.
```

12. Remova somente o container criado para esse exercício.
```
Foi utilizado o comando docker container rm <CONTAINER ID || NAMES>, validado em seguida.
```

13. [BÔNUS] Crie e rode de modo interativo em modo 'Cleanup', a imagem andrius/ascii-patrol.
```
⚠️ Você descobriu o jogo ASCII-PATROL! ⚠️ Para rodar o container e removê-lo logo em seguida (cleanup), foi utilizado o comando docker run -it --rm andrius/ascii-patrol, onde o -it permite a interação com o jogo pelo terminal e o --rm garante que o container será removido ao terminar o jogo.
```

14. [BÔNUS] **Encerre o container utilizando os botões [ctrl] + [c].
```
Após fechar o jogo, utilize o comando clear para limpar a tela. Você pode constatar que, rodando um docker container ls -a, o container do jogo não estará presente.
```