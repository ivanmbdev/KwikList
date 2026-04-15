# KwikList (Kotlin + PostgreSQL + Docker)

This is a replication of the KwikList application using a modern Kotlin/Java backend and PostgreSQL, fully containerized with Docker.

## Tech Stack
- **Frontend:** React 19, Vite, Tailwind CSS, Framer Motion, Lucide React
- **Backend:** Kotlin, Spring Boot 3.2, Spring Data JPA, WebSockets (STOMP)
- **Database:** PostgreSQL 16

## How to run locally

1. Make sure you have Docker and Docker Compose installed on your machine.
2. Download or export this project to your local machine.
3. Open a terminal in the root folder of the project.
4. Run the following command:
   ```bash
   docker-compose up --build
   ```
5. The application will be available at:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:8080/api/lists`

## Features
- **Collaborative Lists:** Real-time synchronization using WebSockets (STOMP).
- **Modern UI:** Built with Tailwind CSS and Lucide icons.
- **Dockerized:** Everything runs in containers, no need to install Java or PostgreSQL locally.
