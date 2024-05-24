<h1>ABP</h1>
<p align="center">
  <img src="Images/logotipo_empresa_p.jpg" width="300" height="300">
</p>
<h1 align="center">DSG - DATA SOLUTIONS GROUP</h1>
 
 > Status: Developing ⚠️

<h1 align="center"> Projeto: 25/03/2024 a 13/06/2024 </h1>  

<h2>💡 Sobre o Projeto:</h2>

Desenvolver um programa de gestão de projetos eficiente e fácil de usar que permita aos usuários gerenciar, atualizar e colaborar em projetos de qualquer escala. Onde a principal função será monitorar e evidenciar em gráficos os relatorios de cada agente, da área percorrida e atividades realizadas dentro da geometria solicitada e demandada pelo Gestor de Projetos. Ou seja o principal objetivio é criar um sistema onde é possivel realizar relatorios diarios sobre atividades exercidas e realizadas separando elas pontualmente a cada usuario criado e utilizado no sistema, projeto desenvolvido justamente para resolver o problema de gestão em projetos de grande escala. 


## ⚙️ Instalação

Primeiro crie uma pasta em sua área de trabalho e abrindo ela com o `cmd` clone o repositório do github e abra-o no `VSCode` com os codigos na sequencia.
```
git clone https://github.com/DataSolutionsGroup2/API-2/ .

code .
```
Após abrir a pasta no `VSCode` abra o terminal e instale todas as dependências para rodar o projeto da pasta `front-end` e da pasta `back-end`, siga os passos de comandos à baixo:
```
cd .\front-end\
npm i
cd ..

cd .\back-end\
npm i
cd ..
```
Após realizar a instalação de dependências do projeto, é necessario subir o servidor do `front-end` e do `back-end` para que a aplicação funcione corretamente.
```
cd .\front-end\
npm run dev

abra outro terminal e repita o mesmo na pasta back-end.

cd .\back-end\
npm run dev
```
Não é necessario configurar o `Banco de Dados` pois ele se encontra em nuvem, utilizamos a plataforma `Heroku` para hospedar o servidor gratuitamente.

## 📝 Requisitos Funcionais
* O gestor deverá ser capaz de carregar o polígono que delimita a área do projeto
* O gestor deverá ser capaz de carregar a grade de polígonos especificando as dimensões de cada recorte (retângulo)
* O gestor deverá ser capaz de cadastrar editor e revisor
* O gestor deverá ser capaz de definir a área de trabalho do usuário. A área de trabalho é um retângulo na grade
* O gestor deverá ser capaz de gerar as estatísticas: número de polígonos, área total, quantidade de correções e quantidade de correções executadas
* O gestor deverá ser capaz de filtrar por revisor e por período para gerar as estatísticas;
* O gestor deverá ser capaz de gerar estatísticas de quantidade de polígonos mapeados, quantidade de correções e de área de polígonos mapeados por editor
* O gestor deverá ser capaz de visualizar e exportar relatórios com as estatísticas no formato PDF.

## 📚 Requisitos Não Funcionais
* Documentação no GitHub: repositório do código fonte de cada sprint, descrição do projeto, link para cada entrega de sprint, backlog do produto, backlog de cada sprint, requisitos do cliente (user stories), prints das telas ou link para o portal, burndown de cada sprint mostrando funcionalidades (quantidade de requisitos) implementadas versus tempo,tecnologias utilizadas e membros da equipe (link para o GitHub de cada membro)
* Utilizar o Trello para gerenciar o backlog do produto. Preferencialmente fazer a integração entre o Trello e GitHub
* No Trello, cada cartão representa uma tarefa ou uma história de usuário
* Os membros da equipe podem adicionar links para problemas do GitHub relevantes a cada cartão no Trello
* Quando um membro da equipe começa a trabalhar em uma tarefa, ele pode mover o cartão correspondente para a coluna "Em progresso"
* Quando o trabalho em uma tarefa estiver concluído e um pull request for aberto no GitHub, o membro da equipe pode adicionar o link do pull request ao cartão no Trello
* Os membros da equipe podem monitorar o progresso das tarefas no Trello e visualizar os links para os problemas e pull requests correspondentes no GitHub.
* Back-end: TypeScript e Node.js;
* Front-end: React TypeScript, HTML e CSS;
* Armazenamento: SGBD PostgreSQL;
* Autenticação de usuário.


### Entregas 
**Sprint**  | **Inicio / Fim** | **Status**         | **Link**
:---------: | :------:    | :-------:          | :-------:
01          | 25/03 - 17/04   | ✅                | <a href="#sprint1">Sprint 1</a>
02          | 22/04 - 15/05   | ✅                | <a href="#sprint2">Sprint 2</a>
03          | 20/05 - 12/06   | ⚠️                | <a href="#sprint3">Sprint 3</a>


## 🚀Ferramentas Utilizadas

* HTML  <img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" width="30" height="30" align="center" />
* CSS  <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" width="30" height="30" align="center" />
* Javascript  <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="Javascript" width="25" height="25" align="center" />
* Typescript  <img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="Typescript" width="25" height="25" align="center" />
* React  <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" width="25" height="25" align="center" />
* Tailwind  <img src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind" width="25" height="25" align="center" />
* Express  <img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" width="25" height="25" align="center" />
* PostgreSQL  <img src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" width="35" height="35" align="center" />
* Node.js  <img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" width="35" height="35" align="center" />
* Vite  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png" alt="Vite" width="25" height="25" align="center" />
* VS Code  <img src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="VS Code" width="25" height="25" align="center" />
* Git  <img src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" width="25" height="25" align="center" />

## 👩‍💻Equipe
<table>
  <thead>
    <tr>
      <th>Função</th>
      <th>Integrante</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Scrum Master</td>
      <td>
        <a href="https://github.com/FPBueno">
          <img src="https://github.com/FPBueno.png" width="50" height="50" style="border-radius: 50%;" alt="FPBueno">
        </a>
      </td>
    </tr>
    <tr>
      <td>Product Ownerr</td>
      <td>
        <a href="https://github.com/MingRenan">
          <img src="https://github.com/MingRenan.png" width="50" height="50" style="border-radius: 50%;" alt="MingRenan">
        </a>
      </td>
    </tr>
    <tr>
      <td>Dev Team</td>
      <td>
        <a href="https://github.com/Isaac-Exon">
          <img src="https://github.com/Isaac-Exon.png" width="50" height="50" style="border-radius: 50%;" alt="Isaac-Exon">
        </a>
      </td>
    </tr>
    <tr>
      <td>Dev Team</td>
      <td>
        <a href="https://github.com/rodrigoaslima">
          <img src="https://github.com/rodrigoaslima.png" width="50" height="50" style="border-radius: 50%;" alt="Isaac-Exon">
        </a>
      </td>
    </tr>
    <tr>
      <td>Dev Team</td>
      <td>
        <a href="https://github.com/TiagoSan23">
          <img src="https://github.com/TiagoSan23.png" width="50" height="50" style="border-radius: 50%;" alt="Isaac-Exon">
        </a>
      </td>
    </tr>
    <tr>
      <td>Dev Team</td>
      <td>
        <a href="https://github.com/evellsil">
          <img src="https://github.com/evellsil.png" width="50" height="50" style="border-radius: 50%;" alt="Isaac-Exon">
        </a>
      </td>
    </tr>
  </tbody>
</table>

 
<h1 id="sprint1"align="center"> Sprint 1: 25/03/2024 a 17/04/2024 </h1> > Status: Check ✅

<p align="center"> 
    <a href="#backlog">Backlog</a> |
    <a href="#burndown">Burndown</a> |
  <a href="#UML">UML</a> |
    <a href="#pbacklog">Product Backlog</a> | 
    <a href="#review">Sprint Review</a> |
    <a href="#entrega1">Video</a>

<span id="backlog"></span>
<h2>⚙️Backlog</h2>
<p>Tabela do backlog do projeto.</p>
<img src="/Images/Backlog.png" alt="backlog" width="1200">

<h2>Protótipo 🔧</h2>
Aqui temos o nosso prototipo implementado no projeto da tela de login.

<img src="/Images/LoginV1.jfif" alt="Prototipo" width="1200">
Após a ideia ser aceita pelo grupo decidimos então dar continuidade ao desenvolvimento da tela de login incrementando um pouco da personalidade do nosso cliente utilizando a paleta de cores deles, chegando na versão final até o momento.
<img src="/Images/LoginV2.png" alt="LoginV1" width="1200">
<span id="UML"></span>
<h1 id="UML">⚙️UML</h1>
<p>Aqui temos o UML de casos de uso do nosso projeto com uma visão do funcionamento de perspectiva externa.</p>
<img src="/Images/caso_de_uso.jpeg" alt="UML" width="1100" height="600">

<span id="burndown"></span>
<h2>⚙️Burndown</h2>
<p>Aqui temos o gráfico do burndown com a linha ideal e a linha do desempenho da nossa equipe nas conclusões das atividades introduzidas no product backlog</p>
<img src="/Images/GraficoBurndown.png" alt="burndown" width="1200" >

<span id="pbacklog"></span>
<h2>⚙️Product Backlog</h2>
<p>Product backlog feito pelo nosso Product Owner com as atividades que foram implementadas na aplicação nessa sprint com os seus niveis de prioridades.</p>
<img src="/Images/burndown.png" alt="product backlog">

<span id="review"></span>
<h2>Sprint review</h2>
<p>Aqui temos a Sprint Review que acordado com a equipe sobre coisas para parar, continuar e começar a fazer.</p>
<img src="/Images/SprintReview.png" alt="Sprint Review" width="1200" >


<h3 id="entrega1">Video do Projeto</h3>
<a href="https://youtu.be/TVE2tWdRy30" target="_blank">Video completo Sprint 1 </a>
