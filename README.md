# 🚀 Onda Finance

💸 Simulação de aplicativo bancário moderno com foco em UX, arquitetura
e boas práticas

------------------------------------------------------------------------

## 🌐 Link

URL: https://test-ondafinance.netlify.app

------------------------------------------------------------------------

## 🧾 Sobre o projeto

O **Onda Finance** é uma aplicação web que simula um app bancário,
desenvolvida como parte de um desafio técnico de front-end.

O foco do projeto é demonstrar:

-   Organização de código
-   Boas práticas de arquitetura
-   Experiência do usuário (UX)
-   Uso de ferramentas modernas do ecossistema React

------------------------------------------------------------------------

## ✨ Funcionalidades

### 🔐 Login (mock)

-   Persistência de sessão via localStorage

### 📊 Dashboard

-   Exibição de saldo
-   Listagem dinâmica de transações

### 💸 Transferência (Pix)

-   Formulário com validação
-   Máscaras de input (CPF/CNPJ e moeda)
-   Atualização instantânea do saldo

### 🧾 Recibo

-   Exibição detalhada da transação
-   ID/hash único da operação

------------------------------------------------------------------------

## 🛠️ Tecnologias

### Core

-   React + TypeScript
-   Vite

### Estilização

-   TailwindCSS

### Estado e dados

-   React Query (server state)
-   Zustand (client state)

### Formulários

-   React Hook Form
-   Zod

### API (mock)

-   Axios
-   localStorage como backend simulado

### Testes

-   Vitest

------------------------------------------------------------------------

## ⚙️ Como rodar o projeto

``` bash
git clone <url-do-repo>
cd <nome-do-projeto>
npm install
npm run dev
```

A aplicação estará disponível em:

    http://localhost:5173

------------------------------------------------------------------------

## 🧪 Testes

O projeto conta com teste unitário utilizando **Vitest**.

Cobertura atual: - Função de conversão de moeda (`parseCurrency`)

``` bash
npm run test
```

------------------------------------------------------------------------

## 🧠 Decisões técnicas

### 📦 Separação de estado

-   Server State → React Query
-   Client State → Zustand

------------------------------------------------------------------------

### 💾 Persistência

-   localStorage como mock de backend

------------------------------------------------------------------------

### 🔄 Sincronização

-   invalidateQueries após mutations

------------------------------------------------------------------------

### 🧾 Validação

-   Zod + React Hook Form

------------------------------------------------------------------------

### 🎯 UX

-   Máscaras de input
-   Botões desabilitados
-   Feedback visual consistente

------------------------------------------------------------------------

## 🔐 Segurança (conceitual)

### 🛡️ Engenharia reversa

- Uso de build otimizado e minificado (Vite)
- Separação de responsabilidades para evitar exposição de lógica sensível no frontend
- Preparação para uso de variáveis de ambiente em cenários reais

### 🔒 Vazamento de dados

- Nenhum dado sensível persistido no frontend
- Uso de HTTPS para comunicação segura
- Estrutura preparada para integração com autenticação segura (ex: JWT)

------------------------------------------------------------------------

## 🚧 Melhorias futuras

-   API real
-   Autenticação completa
-   Persistência por usuário
-   Testes mais completos
-   Dark mode

------------------------------------------------------------------------

## 📌 Considerações finais

Projeto focado em boas práticas, arquitetura e experiência do usuário.

------------------------------------------------------------------------

## 👨‍💻 Autor

Thiago Aguiar

LinkedIn: https://linkedin.com/in/oithi
