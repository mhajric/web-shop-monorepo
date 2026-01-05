# Webshop Monorepo (Angular Nx + Spring Boot)

## Project Overview

This repository is a **full-stack monorepo** created to explore and practice **Domain-Driven Design (DDD)** concepts across both frontend and backend, using **Angular (Nx)** on the frontend and **Spring Boot** on the backend.

The primary focus of the project is **frontend DDD** using Nx, with an application shell and **lazy-loaded feature libraries** that model business domains. The backend is implemented as a **domain-oriented monolith** with a similar conceptual structure, and also explores **server-side cart handling**.

This repository is intended as an architectural and learning project rather than a feature-complete webshop.


## Architecture Goals

- Practice **Domain-Driven Design on the frontend** using Angular Nx
- Organize frontend code into **feature and domain libraries**
- Use **lazy-loaded feature libraries** to reflect bounded contexts
- Align frontend and backend around similar **domain concepts**
- Explore **server-side cart** behavior and responsibilities
- Keep the backend monolithic but **domain-structured**


## Project Structure

```text
/
├── frontend   # Angular Nx workspace
└── backend    # Spring Boot monolith
```


## Frontend (Angular / Nx)

The frontend is the main focus of this repository and explores **DDD-style organization** using Nx.

### Frontend highlights

- Nx workspace with an application shell
- **Lazy-loaded feature libraries** representing domain boundaries
- Clear separation between UI, domain logic, and shared models
- Angular Material components styled using **Tailwind CSS**

### Example domain-oriented libraries

- `product` – product domain and related logic
- `cart` – cart domain and client-side behavior
- `order` – order placement and flow
- `shared` – shared domain models and utilities

The goal is to model the frontend around **business concepts**, not technical layers, and to observe how such a structure scales as features grow.

### Running the frontend

```bash
nx serve web-shop
```


## Backend (Spring Boot)

The backend is implemented as a **monolithic Spring Boot application** with a **domain-oriented package structure**, mirroring the frontend’s conceptual boundaries where possible.

### Backend domain packages

- `customer`
- `product`
- `order`
- `delivery`

### Backend characteristics

- Embedded **H2** database for relational data
- Embedded **MongoDB** for document-oriented data
- Server-side cart handling and validation
- RESTful APIs aligned with frontend domain needs

The backend structure is intentionally kept simple and flexible, allowing future refactoring if the system grows.


## Demonstrated Concepts

- Frontend Domain-Driven Design using Angular Nx
- Lazy-loaded feature libraries as bounded contexts
- Shared domain language between frontend and backend
- Domain-oriented backend monolith
- Server-side cart modeling
- Angular Material + Tailwind CSS integration


## Running the Project (Development)

### Prerequisites

- Node.js and npm
- Java 17+
- Maven

### Backend

```bash
cd backend
mvn spring-boot:run
```

### Frontend

```bash
cd frontend
nx serve web-shop
```

- Frontend: http://localhost:4200  
- Backend: http://localhost:8080  


## Notes

This repository serves as an **architectural sandbox**. Some features are incomplete or simplified by design in order to focus on structure, boundaries, and learning rather than completeness.


## License

MIT License

