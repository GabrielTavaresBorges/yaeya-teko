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
# 🧠 Yaeya DevLabs — Estrutura do Projeto

Este repositório contém a arquitetura da aplicação **Yaeya DevLabs**, focada em centralizar e organizar o histórico médico do usuário de forma moderna, segura e acessível.

---

## 📁 Estrutura de Diretórios

```txt
/TEKO
├── src/                                # Backend com arquitetura limpa (API, domínio, aplicação, infraestrutura)
│   ├── YaeyaDevLabs.Teko.API/            # Camada de apresentação via Web API
│   ├── YaeyaDevLabs.Teko.Application/    # Casos de uso e lógica de aplicação
│   ├── YaeyaDevLabs.Teko.Domain/         # Entidades e regras de negócio
│   └── YaeyaDevLabs.Teko.Infrastructure/ # Acesso a dados e serviços externos

├── ui/                                 # Interfaces gráficas para o usuário
│   └── web/
│       └── YaeyaDevLabs.Teko.UI.Web/     # SPA com Vue 3 + TypeScript + Vuetify
│            └── [README.md]              # Explicação da camada de apresentação web
│   └── mobile/
│       └── [README.md](ui/mobile/README.md)  # Interface mobile planejada para futuro desenvolvimento

├── services/                           # Serviços externos e suportes complementares
│   └── integrations/                     # Integrações com sistemas da área da saúde - Health Information Systems
│       └── [README.md]                   # Explicações das integrações clínicas
│   └── monitoring/
│       └── [README.md]                   # Planejamento de observabilidade e métricas da aplicação

└── README.md                           # Este arquivo — visão geral do repositório
