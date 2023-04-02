# <img width="56" height="56" src="https://user-images.githubusercontent.com/99221221/229325827-65920be9-d275-41dc-a682-a1afbb7b6d74.png" alt="moken-logo"/> SmartTrans


## [Trailer]()
<img src="https://user-images.githubusercontent.com/99221221/229325626-232c180c-e069-40c1-ad65-29eb01350209.png" alt="app-screens-mockup"/>

## Problema
A queda constante dos sistemas de transporte nas grandes metrópoles brasileiras é um problema que afeta milhões de pessoas todos os dias. Os atrasos e interrupções no funcionamento dos transportes públicos são fonte de grande estresse e dificuldade para os cidadãos, que muitas vezes precisam se deslocar para trabalhar, estudar ou cumprir outras obrigações diárias. Além disso, os transtornos causados pelos problemas de transporte podem afetar a economia e a qualidade de vida de uma cidade, tornando-a menos produtiva e menos atraente para investimentos e turismo. 

## Nossa Solução
Uma alternativa promissora para solucionar o problema da queda constante dos sistemas de transporte público é a criação de um sistema que utilize a tecnologia blockchain. Através desse sistema, seria possível viabilizar transações rápidas e confiáveis, sem a necessidade de intermediação de terceiros, garantindo maior eficiência e segurança nas operações. Além disso, um sistema baseado em blockchain teria a capacidade de rastrear todas as transações e movimentações nas cidades, fornecendo informações precisas e em tempo real sobre a localização e o estado dos transportes públicos, permitindo que os usuários se programem e tomem decisões com maior precisão e efetividade. Essa solução não apenas melhoraria a qualidade de vida dos cidadãos, mas também ajudaria a aumentar a produtividade e a competitividade das cidades, atraindo investimentos e desenvolvimento econômico.


<strong>Esse é o projeto SmartTrans. </strong>



<img src="https://user-images.githubusercontent.com/99221221/229325685-33a633f6-4eca-4669-bb71-0d54391792de.png"/>

## Proposta de Valor
<b>Tarefas do usuário</b>
- Ir até o ponto de validação de recarga mais próximo
- Recargas utilizando dinheiro físico, por falta de possibilidades
- Problemas constantes de desmagentização dos cartões de transporte

<b>Dores do usuário</b>
- Servidores constantemente fora do ar
- Falta de agilidade nos processos do cotidiano
- Poucas plataformas confiáveis de recargas

<b>Ganhos do usuário</b>
- Sistema confiável
- Recarga com tempo de resposta extremamente baixo
- Agilidade e simplicidade no cotidiano
- 
## Documentação

A documentação com informações da visão geral do projeto, análise de negócio, requisitos do sistema e elaboração do sistema pode poder ser encontrada clicando [aqui](https://docs.google.com/document/d/1ri0ooG3A1cBvLzudbv26BW_Fm4kQmBbB6WtQr-WMI84/edit?usp=sharing)

## Árvore de arquivos

As pastas desse projeto foram organizadas conforme exemplo a seguir:

```
├── .vscode
├── backend
│    ├── controller
│    ├── db
│    ├── middlewares
│    ├── models
│    ├── router
├── frontend
│    ├── packages
│    │    ├── react
│    │    │    │── src
│    │    │    │    ├── components
│    │    │    │    ├── contexts
│    │    │    │    ├── HOC
│    │    │    │    ├── pages
│    │    │    │    ├── styles
│    │    ├── snap

├── IoT
├── truffle
│    ├── build
│    ├── contracts
│    ├── migrations
│    ├── test
├── README.md

```

##

## Arquitetura do sistema

<img src="" alt="arquitetura do sistema"/>

## Tecnologias

Esse projeto foi desenvolvido usando as seguintes tecnologias:

- React
- Styled Components
- Css
- TypeScript
- Ethers Js
- Node Js
- SQLite
- Metamask Snaps
- Truffle
- Solidity
- Celo Testnet ( Alfajores )


---

## Rodando a aplicação

Para rodar a aplicação há algumas dependências que precisam ser instaladas devido às tecnologias utilizadas, são elas:

-   Node Js
-   Extensão Metamask flask no navegador (IMPORTANTE)

### Variáveis de ambiente

Para que tudo funcione corretamente, o sistema depende de algumas variáveis de ambiente. 

Na pasta /backend, deve ser criado um arquivo .env que contém as seguintes variáveis:
```
JWT_SECRET="senha"
MQTT_HOST="host do mqtt"
MQTT_USERNAME="username do mqtt"
MQTT_PASSWORD="senha do mqtt"
MNEMONIC="mnemnic phrase"
SMART_TRANS_ADDRESS="endereço do contrato deployado"

```

Na pasta /truffle, deve ser criado um arquivo .env que contém a seguinte variável:
```
MNEMONIC="mnemonic phrase"
```

Na pasta /frontend/packages/react, deve ser criado um arquivo .env que contém as seguintes variáveis:
```
REACT_APP_SMART_TRANS_ADDRESS="endereço do contrato"
REACT_APP_SNAP_ORIGIN="local:http://localhost:8080"

```



### Rodando a blockchain e deployando os contratos

Para compilar e deployar os contratos, entre na pasta /truffle por meio do comando
```
cd truffle
```
Depois, execute o comando
```
npm install
```
Após tudo isso, basta apenas mais um comando e o contrato será deployado
```
truffle migrate --network testnet
```

### Rodando o backend
Para rodar o backend, execute os seguintes comandos
```
cd backend
npm install
npm run start
```


### Rodando o frontend
Para rodar o front, é necessário ter Yarn instalado na máquina. Caso você ainda não tenha realizado isso, segue o link com o processo:
<a href="https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable">Yarn install</a>

Para rodar o front, basta executar os seguintes comandos:
```
cd frontend
yarn install
yarn start
```

Após isso, você terá uma aplicação metamask snaps rodando no endereço http://localhost:8080 e o frontend do projeto no endereço http://localhost:3000.

---

## Licença

Distributed under the MIT License. See `LICENSE` for more information.

## Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/emanuele-morais/">
        <img src="https://avatars.githubusercontent.com/u/99221221?v=4" width="100px;" alt="Emanuele Morais profile image"/><br>
        <sub>
          <b>Emanuele Lacerda Morais Martins</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/henriquemarlon/">
        <img src="https://avatars.githubusercontent.com/u/89201795?v=4" width="100px;" alt="Henrique Marlon profile image"/><br>
        <sub>
          <b>Henrique Marlon Conceição Santos</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/alexandrefonseca00/">
        <img src="https://avatars.githubusercontent.com/u/80794067?v=4" width="100px;" alt="Alexandre Fonseca profile image"/><br>
        <sub>
          <b>Alexandre Fonseca de Souza</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/alberto-da-rocha-miranda-angrysine/">
        <img src="https://avatars.githubusercontent.com/u/99188421?v=4" width="100px;" alt="Alberto da Rocha Miranda profile image"/><br>
        <sub>
          <b>Alberto da Rocha Miranda</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/lyorrei/">
        <img src="https://avatars.githubusercontent.com/u/44589251?v=4" width="100px;" alt="Lyorrei Quintão profile image"/><br>
        <sub>
          <b>Lyorrei Shono Quintão</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
