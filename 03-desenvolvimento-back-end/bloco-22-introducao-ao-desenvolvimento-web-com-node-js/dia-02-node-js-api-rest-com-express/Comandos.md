# Comandos para Criação do Servidor Node.JS + Express

1. Iniciando Node
```
npm init -y
```

2. Instalando o Express
```
npm i express@4.17.1
```

3. Instalando o Linter
```
npm i eslint@6.8.0 eslint-config-trybe-backend@1.0.1 -D
```

4. Incluindo Arquivos de Configuração do Linter
__.eslintignore__
```
node_modules
```

__.eslintrc.json__
```
{
  "env": {
    "es2020": true
  },
  "extends": "trybe-backend",
  "rules": {
    "sonarjs/no-duplicate-string": ["error", 5]
  }
}
```

5. Git Ignore
__.gitignore__
```
node_modules
```

6.