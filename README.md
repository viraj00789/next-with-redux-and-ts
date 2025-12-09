# 🚀 Next.js Monorepo with TypeScript, Redux Toolkit & pnpm Workspaces

This repository contains a scalable **Next.js monorepo** built using:

- **Next.js 16**
- **TypeScript 5**
- **Redux Toolkit**
- **pnpm workspaces**
- **TailwindCSS 4**
- **Shared lib package**

It includes two applications and one shared workspace:

```
my-workspace/
│
├── my-app-with-ts-admin
├── my-app-with-ts-product
└── shared
```

---

## 📦 Installation

Install **all node_modules for all workspaces** using a single command:

```bash
pnpm install
```

pnpm automatically installs & links dependencies for:

- `my-app-with-ts-admin`
- `my-app-with-ts-product`
- `shared`
- root workspace

---

## ▶️ Running the Apps (All at Once)

Run every app in the workspace simultaneously:

```bash
pnpm dev
```

This starts:

| App | Port | Command |
|-----|-------|----------|
| Admin App | **3001** | `next dev -p 3001` |
| Product App | **3000** | `next dev -p 3000` |

---

## 🏗 Build All Apps

Compile all workspaces with:

```bash
pnpm build
```

`pnpm -r` recursively builds all packages.

---

## 📁 Workspace Structure

```
my-workspace
│
├── package.json          
├── pnpm-workspace.yaml   
│
├── shared/                
│   ├── package.json
│   ├── index.ts
│
├── my-app-with-ts-admin/     
│   ├── package.json
│   ├── pages/
│   ├── components/
│
└── my-app-with-ts-product/   
    ├── package.json
    ├── pages/
    ├── components/
```

---

## 🔗 Shared Package Usage

Import anything from the shared workspace:

```ts
import { someUtil } from "shared";
```

pnpm symlinks the workspace — no publishing needed.

---

## 🧰 Available Scripts

### **Root scripts**
| Script | Action |
|--------|---------|
| `pnpm dev` | Runs all apps in parallel |
| `pnpm build` | Builds all packages |
| `pnpm install` | Installs everything |

---

### **Admin App (`my-app-with-ts-admin`)**
```bash
pnpm --filter my-app-with-ts-admin dev
pnpm --filter my-app-with-ts-admin build
pnpm --filter my-app-with-ts-admin start
```

### **Product App (`my-app-with-ts-product`)**
```bash
pnpm --filter my-app-with-ts-product dev
pnpm --filter my-app-with-ts-product build
pnpm --filter my-app-with-ts-product start
```

---

## 🌟 Features

✔ Monorepo with isolated apps  
✔ Shared workspace for utilities/types  
✔ Fast installs using pnpm  
✔ Individual & global scripts  
✔ Redux Toolkit integration  
✔ Multi-port Next.js setup  
✔ Production-ready structure  

---
