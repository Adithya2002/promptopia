# Promptopia

A Next.js application that allows users to create, read, update, and delete (CRUD) prompts. Users can log in via Google Authentication, and all prompts are stored in a MongoDB database using Mongoose.

---

## Features

- **User Authentication**: Secure Google Authentication powered by NextAuth.js.
- **Prompt Management**: Users can create, view, update, and delete their prompts.
- **Public Prompts**: View prompts created by other users on the platform.
- **Database Integration**: MongoDB for storage, managed via Mongoose.

---

## Tech Stack

- **Frontend**: Next.js with React
- **Authentication**: NextAuth.js (Google Authentication)
- **Database**: MongoDB (with Mongoose ODM)
- **Styling**: Tailwind CSS (optional if used)
- **API Routes**: Next.js API for backend logic

---

## Installation and Setup

### Prerequisites

- Node.js (>= 16)
- MongoDB Atlas (or local MongoDB setup)
- A Google Cloud project for OAuth2

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/promptopia.git
   cd promptopia

### install dependencies
npm install

### Setup env variables and run server
