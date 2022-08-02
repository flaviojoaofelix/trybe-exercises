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
4. Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.
5. No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container.
6. Encerre o terminal.
7. Verifique na sua lista de containers qual container se refere ao exercício que acabou de praticar.
8. Inicie o mesmo container novamente, sem criar outro. Valide se ele está ativo na lista de containers.
9. Retome o container que foi criado anteriormente neste exercício.
10. Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container.
11. Encerre o terminal.
12. Remova somente o container criado para esse exercício.
[BÔNUS] Crie e rode de modo interativo em modo 'Cleanup', a imagem andrius/ascii-patrol.
[BÔNUS] **Encerre o container utilizando os botões [ctrl] + [c].