# 🚀 E-learning Application 

A modern full-stack web application built with **React (Vite)** on the frontend and **Spring Boot** on the backend.  
This project emphasizes clean code practices, consistent commit standards, and a collaborative development workflow using ESLint, Husky, and Commitlint.

---

## 🧭 Project Description

This project serves as a scalable foundation for modern web applications.  
It provides:
- A structured React frontend powered by Vite for fast development.
- Linting and formatting enforcement via ESLint.
- Automated pre-commit hooks and commit message validation using Husky + Commitlint.
- A clean developer workflow that promotes consistency and collaboration.

> The goal is to create a robust, maintainable, and easy-to-extend codebase that the entire team can work on confidently.

---

## 📂 Project Structure

```
project_root/
│
├── client/                # React frontend (Vite)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── docs/
│   └── CONTRIBUTING.md    # Contribution guidelines
│
├── .husky/                # Git hooks for pre-commit
├── commitlint.config.js   # Commit message rules
├── package.json           # Root-level setup (Husky, ESLint, Commitlint)
└── README.md
```

---

## 🧰 Tech Stack

### Frontend:
- ⚛️ **React (Vite)**
- 💅 **CSS / Tailwind / Bootstrap** (based on project setup)
- ⚙️ **Axios** for API calls
- 🚦 **React Router DOM** for navigation

### Tooling:
- 🧹 **ESLint** — Code style and error detection
- 🪝 **Husky** — Pre-commit hooks
- 🧾 **Commitlint** — Enforces conventional commits
- ⚡ **Lint-Staged** — Runs lint checks only on staged files

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone <repo-url>
cd project_root
```

### 2️⃣ Install root dependencies
```bash
npm install
```
> This sets up Husky, Commitlint, and ESLint hooks.

### 3️⃣ Install client dependencies
```bash
cd client
npm install
```

### 4️⃣ Run the React development server
```bash
npm run dev
```

Your app should now be running locally 🚀

---


## 🧑‍💻 Contributing

We love contributions! 🩵  
Please read our **[Contribution Guidelines](./docs/CONTRIBUTION.md)** before making any changes.

The contribution guide includes:
- Complete setup steps  
- Branch naming conventions  
- ESLint and Commitlint usage  
- Pre-commit hook details

---

## 🧪 Testing (if applicable)
Run tests before submitting a pull request:
```bash
npm test
```

---

## 🪄 Future Improvements
- Add PR and Issue templates  
- Set up CI/CD pipelines  
- Add automated test coverage reports

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 💬 Feedback & Support
If you have ideas, issues, or suggestions, feel free to:
- Open a **GitHub Issue**, or  
- Start a **Discussion** in the repository.

> Collaboration and clean code make great software together 💪
