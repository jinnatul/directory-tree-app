# Directory Tree Viewer

An interactive, expandable directory tree UI built with **Next.js** using **React** and **API routes**, featuring:

- Expand/collapse functionality
- Double-click to set new root
- Path sync with browser address bar
- Backend API with in-memory directory structure
- Dockerized for easy deployment

## Demo

![Directory Tree Demo](https://github.com/user-attachments/assets/c44db882-c4c3-4213-a67f-c284fcf48ef5)

## Features

- 📂 **Incremental Loading**: Only fetch children when needed
- 🖱️ **Double-click to Re-root**: Change root directory on double-click
- 🔗 **Path-Synced URL**: Syncs with browser address bar
- 🧠 **In-Memory Tree**: No database required, easy to extend
- 🐳 **Dockerized**: Ready for containerized environments

## 🛠 Tech Stack

| Layer            | Tool                       |
| ---------------- | -------------------------- |
| Frontend         | React (Next.js App Router) |
| Backend          | API Route (Next.js)        |
| Types            | TypeScript                 |
| State Management | useState/useEffect         |
| Container        | Docker                     |

## Getting Started

### Run Locally (Node.js)

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# Visit: http://localhost:3000
```

### Run with Docker

```bash
# Build the Docker image
docker build -t directory-tree-app .

# Run the container
docker run -p 3000:3000 directory-tree-app

# Note: You might need to use the sudo command for permission.
```

## API Specification

```bash
# Returns children of the given directory path.
GET /api/tree?path=/Projects

# directory response
[
  {
    "name": "Dir 1",
    "path": "/Dir 1",
    "hasChildren": true
  },
  {
    "name": "Dir 2",
    "path": "/Dir 2",
    "hasChildren": true
  },
  {
    "name": "Dir 3",
    "path": "/Dir 3",
    "hasChildren": true
  },
  {
    "name": "Projects",
    "path": "/Projects",
    "hasChildren": true
  },
  {
    "name": "Docs",
    "path": "/Docs",
    "hasChildren": true
  }
]
```

## 🧑‍💻 Author

Made with ❤️ by [Zinnatul Islam](https://www.linkedin.com/in/zinnatul)
