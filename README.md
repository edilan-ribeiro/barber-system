### <div align="center">Escolha seu idioma | Choose your language </div>

<div align="center">

  <a href="https://github.com/edilan-ribeiro/barber-system/blob/main/README.md">
    <img src="https://img.shields.io/badge/lang-pt--br-green.svg" alt="pt-br language"></a>
  <a href="https://github.com/edilan-ribeiro/barber-system/blob/main/README.en.md">
    <img src="https://img.shields.io/badge/lang-en-red.svg" alt="english language ">
  </a> 

<br> <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

</div>
<br>
<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/edilan-ribeiro/barber-system">
    <img src="./public/readme/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Sistema de agendamento para barbearias</h3>

  <p align="center">
    Um sistema de agendamento de serviços para barbearias e clientes!
  </p>
  
  <a href="https://barber-system-three.vercel.app/">Ver online</a>
</div>

<br>

<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#notas-de-destaque">Notas de destaque</a></li>
        <li><a href="#desafios-e-aprendizados">Desafios e aprendizados</a></li>
        </ul>
    </li>
    <li><a href="#utilização">Utilização</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<br><br>

## Sobre o projeto

 <img src="./public/readme/desktop.gif" alt="gif do projeto no desktop" width="500" height="270">

<br><br>

Esta página permite o cliente fazer um agendamento de serviço em uma barbearia, escolhendo o melhor dia e horário.

<br>

<img src="./public/readme/mobile.gif" alt="gif do projeto no celular" width="150" height="330">

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

### Feito com

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind Css](https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white)

</div>

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Notas de destaque

Meu primeiro projeto fullstack tendo tido diversos desafios ao longo do caminho 🤪

Inicialmente o escopo do projeto era um pouco menor, como ter apenas o modo mobile, menos semantica, menos alertas, enfim era bem mais simples, dei uma aprimorada nele e não aprimorei ainda mais devido as limitações dos bancos de dados gratuitos disponíveis.

De toda forma foi uma boa experiência de aprendizado utilizando esse método de criação de aplicações web fullstack.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Desafios e aprendizados

⚛️ Next.js: trouxe uma abordagem única neste projeto, divergindo das práticas convencionais tanto no frontend quanto no uso do Node.js no backend. A implementação do SSR (Server-Side Rendering) no Next.js permitiu a busca e manipulação direta de informações no banco de dados, eliminando a necessidade de criar uma API dedicada.

🔑 NextAuth: Implementar a autenticação Oauth simplificou significativamente o processo de login para o usuário, eliminando a exigência de preencher extensos formulários.
Além disso, a integração do NextAuth com o Next.js simplificou o processo de implementação. 

💎 Prisma: Mais uma vez, sua abstração foi fundamental, eliminando a necessidade de lidar diretamente com comandos SQL e tornando a implementação mais eficiente.

🛠 shadcn: Desempenhou um papel essencial como a principal biblioteca de componentes neste projeto, proporcionando uma significativa agilidade na implementação de diversas funcionalidades, componentes e na estilização. Sua robustez e versatilidade foram fundamentais para otimizar o desenvolvimento, contribuindo de maneira expressiva para a eficiência e qualidade geral do sistema.

Em resumo foi possível aprender e praticar:

- Uso do NextAuth e método de autenticação Oauth no Next.js
- shadcn e diversos de seus componentes e estilizações
- Typescript com o Prisma diretamente no Next.Js  

 <p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Utilização

Após clonar, baixar ou fazer um fork, utilize o comando abaixo para instalar as dependências do projeto:

```shell
npm install
```

Esse projeto te permite:

- Inserir dados no banco de dados através dos arquivos seed do projeto (utilize ```npx prisma db seed```)
- Utilizar autenticação Oauth para criar uma conta no site pelo google ou github
- Fazer agendamento de serviços em dias e horários desejados
- Visualizar agendamentos ou remover agendamentos confirmados nos locais
- Obter informações de determinada barbearia

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Contato

💌 Para me mandar uma mensagem basta usar um dos botões abaixo!<br>

<a href = "mailto:edilanbusiness@gmail.com" target="_blank"><img src="https://img.shields.io/badge/-gmail-333333?style=flat&logo=gmail&logoColor=EA4335" height="25"></a>
<a href="https://www.linkedin.com/in/edilan-ribeiro-santos" target="_blank"><img src="https://img.shields.io/badge/-linkedin-333333?style=flat&logo=linkedin&logoColor=0A66C2" height="25"></a>
<a href="https://whatsa.me/5561983769634/?t=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20GitHub!" target="_blank">
<img src="https://img.shields.io/badge/-whatsapp-333333?style=flat&logo=whatsapp&logoColor=25D366" height="25"></a>

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>
