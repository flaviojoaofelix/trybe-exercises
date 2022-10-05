# Trybe
## Módulo: Back-end
## Bloco 26 - dia 01 / Seção 08 - Dia 01
### Introdução a TypeScript
### Introdução ao TypeScript


### Conteúdos

01. Introdução - TypeScript
02. Introdução
03. Introdução (O que é TypeScript?)
04. Tipagem (dicas de tipo)
05. Diferença entre Compilador e Transpilador
06. TSC - TypeScript Compiler
07. Introdução ao TSConfig
08. TypeScript Playground
09. Tipos e Subtipos
10. Primeiro programa em TypeScript
11. Bônus - Enum ou enumeração
12. Exercícios - Agora, a prática

### Exercícios
#### Agora, a prática

Configuração Inicial
```
mkdir my-ts-scripts && cd my-ts-scripts
```
```
npm init -y
```
```
npm install -D @tsconfig/node16 @types/node typescript
```
```
touch tsconfig.json
```
__./tsconfig.json__
```
{
  "extends": "@tsconfig/node16/tsconfig.json", // estendemos a configuração base para o Node 16
  "compilerOptions": {
    "outDir": "./dist", // pasta onde nossos arquivos compilados serão salvos
  },
}
```

##

01. Temos um array characters que agrupa dados de jogadores em um MMORPG (“Jogo de representação de papéis online, multijogador em massa”) usado para manter o registro de uma guilda (grupo de jogadores) no acompanhamento da evolução do grupo. Esses dados foram adicionados sem se atentar para sua correta tipagem, o que pode ocasionar um bug no futuro. Faça a correta tipagem do array por meio do tipo Character e da função usada para imprimir as informações básicas de todos os jogadores.
```
type Character = any;

const characters: any = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1')
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2')
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15')
  },
]

function printCharacter(character: any, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);
```

##

02. Crie um script para converter unidades de medida de comprimento:
  - Esse script deverá se chamar length.ts;
  - Ele deverá possuir uma função chamada convert que recebe como parâmetro: 
    - valor - number 
    - unidade base - string 
    - unidade para a conversão - string

| Nome | Símbolo | Valor |
| ---- | :-----: | ----: |
| Quilômetro | km | 1000m |
| Hectômetro | hm | 100m |
| Decâmetro | dam | 10m |
| Metro | m | 1m |
| Decímetro | dm | 0,1m |
| Centímetro | cm | 0,01m |
| Milímetro | mm | 0,001m |

##

03. Crie um script para converter unidades de medida de massa:
  - Esse script deverá se chamar mass.ts; 
  - Ele deverá possuir uma função chamada convert que recebe como parâmetro:
    - valor - number
    - unidade base - string
    - unidade para a conversão - string 

| Nome | Símbolo | Valor |
| ---- | :-----: | ----: |
| Quilograma | kg | 1000g |
| Hectograma | hg | 100g |
| Decagrama | dag | 10g |
| Grama | g | 1g |
| Decigrama | dg | 0,1g |
| Miligrama | mg | 0,001g |

##

04. Crie um script para converter unidades de medida de capacidade:
  - Esse script deverá se chamar capacity.ts; 
  - Ele deverá possuir uma função chamada convert que recebe como parâmetro: 
    - valor - number
    - unidade base - string 
    - unidade para a conversão - string 

| Nome | Símbolo | Valor |
| ---- | :-----: | ----: |
| Quilolitro | kl | 1000l |
| Hectolitro | hl | 100l |
| Decalitro | dal | 10l |
| Litro | l | 1l |
| Decilitro | dl | 0,1l |
| Centilitro | cl | 0,01l |
| Mililitro | ml | 0,001l |

##

05. Crie um script para converter unidades de medida de área:
  - Esse script deverá se chamar area.ts; 
  - Ele script deverá possuir uma função chamada convert que recebe como parâmetro: 
    - valor - number
    - unidade base - string 
    - unidade para a conversão - string

__Obs:__ atente-se à conversão de metros quadrados, que deve ser realizada de 100 em 100. 

| Nome | Símbolo | Valor |
| ---- | :-----: | ----: |
| Quilômetro quadrado | km² | 10⁶m² |
| Hectômetro quadrado | hm² | 10⁴m² |
| Decâmetro quadrado | dam² | 10²m² |
| Metro quadrado | m² | 1m² |
| Decímetro quadrado | dm² | 10⁻² m² |
| Centímetro quadrado | cm² | 10⁻⁴ m² |
| Milímetro quadrado | mm² | 10⁻⁶ m² |

##

06. Crie um script para converter unidades de medida de volume:
  - Esse script deverá se chamar volume.ts;
  - Ele deverá possuir uma função chamada convert que recebe como parâmetro:
    - valor - number
    - unidade base - string
    - unidade para a conversão - string

__Obs:__ atente-se à conversão de metros cúbicos, que deve ser realizada de 1000 em 1000.

| Nome | Símbolo | Valor |
| ---- | :-----: | ----: |
| Quilômetro cúbico | km³ | 10⁹ m³ |
| Hectômetro cúbico | hm³ | 10⁶ m³ |
| Decâmetro cúbico | dam³ | 10³ m³ |
| Metro cúbico | m³ | 1m³ |
| Decímetro cúbico | dm³ | 10⁻³ m³ |
| Centímetro cúbico | cm³ | 10⁻⁶ m³ |
| Milímetro cúbico | mm³ | 10⁻⁹ m³ |

##

07. Vamos tornar nossos scripts de unidades de medida mais interativos! Vamos adicionar input de quem usa o script. Para isso, utilize o pacote _readline-sync_, [documentação](https://www.npmjs.com/package/readline-sync#utility_methods).

Em cada script, crie uma função chamada exec que:
  - Capta as entradas da pessoa usuária via terminal; 
  - Chama a função de conversão passando as entradas da pessoa usuária como parâmetro;
  - Exibe uma mensagem com o resultado. Ex: “1km é igual a 1000m.”; 
  - Não se esqueça de chamar a função exec ao final do script. _exec()_;

##

08. Crie um arquivo _index.ts_ que pergunta qual conversão a pessoa usuária deseja realizar, e chama o script correspondente:
  - O script deve ser acionado por meio do comando _npm start_ no _package.json_;
  - Utilize o _readline-sync_ para realizar o input de dados;
  - Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis;
  - Você pode utilizar o _require_ para executar o script em questão. 