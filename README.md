# PopX — Educase India Frontend Assignment

A frontend web application built as part of the **Educase India** assignment. The project replicates the **PopX** UI, featuring user authentication screens and account management, built with React, Vite, and Tailwind CSS.

---

## 🚀 Tech Stack

| Technology                  | Purpose                                |
| --------------------------- | -------------------------------------- |
| [React](https://react.dev/) | UI component library                   |
| [Vite](https://vitejs.dev/) | Lightning-fast build tool & dev server |
| JavaScript (ES6+)           | Core language                          |
| CSS                         | Styling                                |
| React Context API           | Global state management                |
| ESLint                      | Code quality & linting                 |

---

## 📁 Project Structure

```
├── src/
│   ├── context/
│   │   └── UserContext.jsx       # Global user state via React Context
│   ├── pages/
│   │   ├── AccountSetting.jsx    # Account settings page
│   │   ├── Create.jsx            # Create account / registration page
│   │   ├── Signin.jsx            # Sign in page
│   │   └── Welcome.jsx           # Welcome / landing page
│   ├── utils/
│   │   └── regex.js              # Reusable regex patterns for validation
│   ├── App.jsx                   # Root component & routing
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Application entry point
├── index.html                    # HTML entry file
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
└── package.json                  # Dependencies & scripts
```

---

## 📄 Pages Overview

| Page                 | Description                               |
| -------------------- | ----------------------------------------- |
| `Welcome.jsx`        | Landing/welcome screen shown to new users |
| `Signin.jsx`         | Sign in form with validation              |
| `Create.jsx`         | New user registration/account creation    |
| `AccountSetting.jsx` | Manage and update account details         |
