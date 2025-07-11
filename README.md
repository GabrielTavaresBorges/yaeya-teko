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
/TEKO
├── src/
│   ├── YaeyaDevLabs.Teko.API/            # Camada de apresentação (Web API)
│   ├── YaeyaDevLabs.Teko.Application/    # Casos de uso (regras de negócio do sistema)
│   ├── YaeyaDevLabs.Teko.Domain/         # Entidades e lógica de domínio
│   └── YaeyaDevLabs.Teko.Infrastructure/ # Infraestrutura e serviços externos
│
├── ui/
│   └── web/
│       └── YaeyaDevLabs.Teko.UI.Web/     # Vue 3 + TypeScript (SPA com Vite, pnpm, Pinia, Vuetify 3)
│            └── README.md                # Explicação da camada de apresentação para acesso via web
│
├── services/
│   └── integrations/                     # Futuras integrações com sistemas da Health Information Systems
│       └── README.md                     # Explicação e planos para integrações clínicas 
│
└── README.md                             # Descrição geral do projeto
