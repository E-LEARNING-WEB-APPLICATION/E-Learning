# 🤝 Contributing Guidelines

Welcome to the project! 🎉  
We’re excited to have you contribute.  
This guide will help you set up the project correctly and follow the team’s standards for code style, commits, and collaboration.

---

## 🧩 Project Overview

The project has two main parts:

```
project_root/
│
├── client/                # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── docs/                  # Documentation
├── .husky/                # Husky hooks for Git
├── commitlint.config.js   # Commitlint rules
├── package.json           # Root-level config (husky, eslint setup, etc.)
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <repo-url>
cd project_root
```

### 2. Install Root Dependencies
These include Husky, Commitlint, and shared configurations.

```bash
npm install
```

> 💡 This sets up pre-commit hooks and linting rules globally for the repo.

### 3. Install Client Dependencies
Navigate into the `client/` directory and install frontend dependencies.

```bash
cd client
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```

Your React app should now be running locally 🚀

---

## 🧹 Code Quality & Standards

### ✅ ESLint
We use **ESLint** to enforce consistent code style and catch errors early.

- Run ESLint manually:
  ```bash
  npm run lint
  ```
- Automatically fix issues:
  ```bash
  npm run lint:fix
  ```

> ESLint also runs automatically via **pre-commit hooks** — any linting issues must be fixed before you can commit.

---

## 💬 Commit Message Guidelines

We follow the **Conventional Commits** standard using **Commitlint**.  
Every commit message must follow this format:

```
<type>(optional scope): <short summary>
```

### Example:
```
feat(auth): add JWT token validation
fix(ui): correct layout spacing in header
docs(contributing): add branch naming rules
```

### Common Commit Types:
| Type | Description |
|------|--------------|
| feat | Add a new feature |
| fix | Fix a bug |
| docs | Documentation only changes |
| style | Formatting only (no code logic) |
| refactor | Code change without feature/bug impact |
| test | Add or modify tests |
| chore | Maintenance, build config, dependency updates |

> ❌ Avoid vague commits like `update files`, `fix bug`, or `minor changes`.

---

## 🧩 Pre-Commit Hooks

We use **Husky** and **Lint-Staged** for automated checks.

### What Happens on Commit:
- **ESLint** runs on staged files.  
- **Commitlint** validates the commit message.  

If any check fails, the commit will be rejected until you fix the issues.

### To manually test hooks:
```bash
npm run lint
```

---

## 🌿 Branching & Workflow

All contributors must follow this branching strategy:

### 🧠 1. Create a new branch for your work
```bash
git checkout -b feat/feature-name
```
Examples:
```
feat/add-login-page
fix/navbar-bug
docs/update-readme
```

### 🔁 2. Commit your changes
Follow the proper commit format as described above.

### 📤 3. Push your branch
```bash
git push origin feat/feature-name
```

### 🧾 4. Open a Pull Request (PR)
- Ensure your branch is up to date with `main`.
- Describe your changes clearly.
- Request a review from a teammate.

---

## 🧱 Folder Structure (Quick Overview)

```
project_root/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── docs/
├── .husky/
├── commitlint.config.js
├── package.json
└── README.md
```

---

## 🧪 Testing (If Applicable)

If tests are included in the project:
```bash
npm test
```

Please ensure all tests pass before creating a pull request.

---

## 📦 Additional Info for Contributors

- Always **pull the latest changes** before starting work:
  ```bash
  git pull origin main
  ```
- Keep commits small and focused.
- Write clear, concise PR descriptions.
- Don’t commit build artifacts or node_modules.
- Respect the ESLint and formatting rules — consistency matters.
- For large changes, open a **draft PR early** for feedback.

---

## 🧭 Future Improvements

We plan to add:
- PR templates
- Issue templates
- Test coverage guidelines
- Deployment and CI/CD instructions

---

##  Thank You!

Thank you for taking the time to contribute!  
Following these guidelines helps us keep the codebase clean, stable, and easy to maintain for everyone.  
Your efforts make this project better every day 🙌
