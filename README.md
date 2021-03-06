
# Where Should We Lunch (WSWL)
Aplicação fullstack desenvolvida em Angular 9, ng.ant.design, .NET Core, EF Core, Fluent Api, SQL Server

## Requisitos de ambiente necessários para compilar e rodar o software:

**Backend:**
- Instalar o .NET Core Runtime 3.1 ou superior caso não tenha. Executar o arquivo "WSWL.sln" para que o mesmo abra o backend no visual studio.
- Aguardar a instalação dos nuget packages, normalmente é feita automaticamente.
- Após isso, basta executar e aguardar a página inicial do Swagger aparecer.

**Frontend:**
- Executar o comando 'npm i' para instalar as dependências
- Executar o comando 'ng s -o' para rodar o projeto

## Instruções de como utilizar o sistema:
 - O projeto possuí duas rotas principais, 'Votação' e 'Resultados'. Para votar, basta acessar a rota Votação e votar no restaurante preferido.
 - Para consultar o resultado de votações anteriores, basta acessar a rota Resultados.

**Usuários disponíveis para teste:**
 - dionatancontato@wswl.com / 123456 
 - josephine@wswl.com / 123456  
 - sienna@wswl.com / 123456

## O que vale destacar no código implementado?
- A maior parte da regra de negócio está no frontend, essa decisão foi feita para que fosse possível demonstrar conhecimentos mais aprofundados no Angular.

## O que poderia ser feito para melhorar o sistema?
- Transferir toda a regra de negócio para o backend, pois idealmente deve-se mantê-la lá.
- Implementar autenticação com JWT, não apenas validando e-mail e senha. Após isso, criar um interceptor para que seja adicionado o token no header de toda requisição autenticada.
- Criptografar a senha no banco de dados
- Implementar um windows service para que controle estados de agendamento, como por exemplo, dia e hora para iniciar e finalizar as votações.
- Implementar testes unitários no frontend e backend

## Algumas regras de negócio implementadas no frontend:
- Ao iniciar o frontend, se todas as votações estiverem concluídas, inicia nova votação com StartDate de (today - 12:00pm) e EndDate de (tomorrow - 11:50am)
- Ao iniciar o frontend, se existir uma votação em andamento, verifica se o EndDate é menor que a data e hora atual, se for, finaliza a votação e inicia uma nova seguindo as mesmas regras anteriores.
- Ao acessar a rota de votação, verifica se o usuário já votou no dia corrente, caso sim, exibe apenas uma mensagem.

## Algo a mais que você tenha a dizer:
- Diagramas de classe e banco de dados encontra-se na raiz do projeto
- A aplicação foi desenvolvida utilizando "Angular 9" e a biblioteca "ng.ant.design" no frontend. Já no backend, foi utilizado .NET Core 3.1, Entity Framework Core e FluentApi.
- Como banco de dados, foi utilizado SQL Server publicado na Azure. O mesmo está ativo, caso queira acessar,
  basta utilizar as credencias contidas no arquivo "app.settings.json" do backend e utilizar o SQL Server Management Studio.
