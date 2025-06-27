# 🩺 Teko — Histórico Médico Familiar

**Teko** é um sistema pessoal criado por YaeYa Labs Developer para organizar e acompanhar o histórico médico das minhas filhas. Ele centraliza informações de consultas, exames, vacinas e tratamentos realizados com diferentes profissionais de saúde — tudo em um só lugar.

---

## 📌 Objetivo

Evitar acúmulo de papéis e perda de informações médicas importantes ao:
- Registrar consultas médicas, odontológicas, fisioterapias e mais
- Controlar exames agendados e realizados
- Acompanhar calendário de vacinação
- Compartilhar histórico médico com novos profissionais com facilidade

---

## 🛠️ Tecnologias utilizadas

- **.NET 9** (ASP.NET Core) — API REST com Clean Architecture
- **Vue 3 + TypeScript** — Front-end SPA com Vite
- **PNPM** — Gerenciador de pacotes moderno
- **PostgreSQL** — Banco de dados relacional robusto e open source
- **Entity Framework Core** — ORM para acesso a dados com LINQ
- **MediatR** — Implementação do padrão Mediator para CQRS
- **Git Flow** — Estratégia de versionamento e revisão de código

---

## 📂 Estrutura do projeto

```bash
/teko
├── backend/
│   ├── Teko.API/            # Camada de apresentação (Web API)
│   ├── Teko.Application/    # Casos de uso
│   ├── Teko.Domain/         # Entidades e regras de negócio
│   └── Teko.Infrastructure/ # Acesso a dados, serviços externos
│
├── frontend/
│   └── teko-UI/            # Vue 3 com TypeScript (SPA)
│
└── README.md
