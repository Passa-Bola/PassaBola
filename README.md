<div align="center">

<img src="./src/assets/img/logo.png" width="300px">
</div>

acesse: [passabola.com.br](https://passa-bola-seven.vercel.app/)

## Sobre

O **PassaBola** é um projeto web dedicado ao **futebol feminino**, atuando como um **centralizador de informações**.  
O objetivo da plataforma é oferecer um espaço acessível e confiável para fãs, atletas e profissionais acompanharem as **últimas notícias**, novidades e tendências do esporte.  


## 📌 Funcionalidades

- 📰 Exibição de **notícias atualizadas** sobre futebol feminino.  
- 🔎 Interface intuitiva e organizada para facilitar a navegação.  
- 🌐 Integração de **frontend (React.js + CSS)** com **backend (Node.js + Express)**. 
- 🔐 Sistema de **autenticação simples** utilizando um arquivo `.json` interno para validação de credenciais.   
- 🚀 Deploy otimizado para acesso rápido em qualquer dispositivo.  


## 🛠️ Tecnologias Utilizadas

- **Frontend:** React.js
- **Backend:** Node.js + Express.js  
- **Hospedagem:**  
  - Frontend → Vercel  
  - Backend → Vercel 

  ## 📡 API – Documentação de Endpoints

Base URL da API:

```bash
https://teste-passabola.vercel.app/api
```

### 🔹 Notícias
- **Endpoint:** `/news`  
- **Método:** `GET`  
- **Descrição:** Retorna as últimas notícias cadastradas sobre futebol feminino.  

#### Exemplo de Requisição
```bash
GET https://teste-passabola.vercel.app/api/news
```

#### Exemplo de Resposta
```json
[
  {
    "id": 1,
    "titulo": "Brasil vence amistoso contra a França",
    "conteudo": "A seleção brasileira feminina venceu por 2 a 1 em um amistoso disputado em Paris...",
    "data": "2025-09-15",
    "fonte": "Globo Esporte"
  },
  {
    "id": 2,
    "titulo": "Campeonato Brasileiro Feminino tem recorde de público",
    "conteudo": "Mais de 40 mil torcedores acompanharam a final...",
    "data": "2025-09-12",
    "fonte": "GE"
  }
]
```

#### Códigos de Resposta
- `200 OK` → Sucesso, retorna a lista de notícias.  
- `500 Internal Server Error` → Erro no servidor ou falha ao recuperar as notícias.  


### 🔹 Autenticação
- **Endpoint:** `/auth/login`  
- **Método:** `POST`  
- **Descrição:** Realiza a autenticação de um usuário utilizando os dados armazenados em um arquivo `.json`.  


#### Estrutura do Arquivo `users.json`
```json
[
  {
    "id": 1,
    "username": "admin",
    "password": "12345"
  },
  {
    "id": 2,
    "username": "leonardo",
    "password": "senhaSegura"
  }
]
```

#### Exemplo de Requisição
```bash
POST https://teste-passabola.vercel.app/api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "12345"
}
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "message": "Login realizado com sucesso",
  "user": {
    "id": 1,
    "username": "admin"
  }
}
```

#### Possíveis Respostas
- `200 OK` → Autenticação bem-sucedida.  
- `401 Unauthorized` → Credenciais inválidas.  
- `500 Internal Server Error` → Erro no servidor ao processar a autenticação.  


## Desenvolvedores 
* Leonardo Silva - 564929
* Samuel Monteiro - 564391
* Yan Barutti - 566412
* Guilherme Araujo - 561848
* Lucas Cortonezi - 563271

<div align="center">

Challenge Passa a Bola | FIAP 2025
</div>