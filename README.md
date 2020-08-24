# dashboard-pilot

Este repositório contém o código da dashboard que ficará dentro do veículo para que o piloto acompanhe as principais informações e mantenha contato com a equipe durante todo o percurso. 

### Pré-Requisitos

Para executar o projeto, você precisa ter instalado em sua máquina: NodeJS, Yarn, Expo CLI e o emulador do Android. Que podem ser instaladas pelos métodos a seguir:

#### NodeJS (v12.x.x)

- Ubuntu

  ```bash
  $ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
  $ sudo apt-get install -y nodejs
  ```

- Windows
  ```
  https://nodejs.org/dist/v12.13.1/node-v12.13.1-x86.msi
  ```

#### Yarn (v1.16.0)

- Ubuntu

  ```bash
  $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  $ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  $ sudo apt-get update && sudo apt-get install yarn
  ```

- Windows
  ```
  https://yarnpkg.com/latest.msi
  ```

#### Expo CLI 

- NPM
  ```bash
  $ npm install expo-cli --global
  ```
  
#### Emulador do Android

- Windows
  ```
  https://developer.android.com/studio
  ```


##Executando
Após organizar todo o ambiente de desenvolvimento, a aplicação pode ser executada via terminal pelo
comando:
- `react-native run android`

## Contribuindo
Siga os passos abaixo para realizar contribuições no projeto, 

- Faça um Fork do projeto
- Crie uma Branch para sua Feature (`git checkout -b feature/<nome_feature>`)
- Adicione suas mudanças (`git add .`)
- Comite suas mudanças (`git commit -m 'Adicionando feature`)
- Faça o Push da Branch (`git push origin feature/<nome_feature>`)
- Abra um Pull Request no Github
