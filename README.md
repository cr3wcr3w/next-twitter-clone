###  Getting started
```bash
# use wsl or a linux distro
# make sure docker is installed
# make sure pnpm is installed

# install packages
pnpm install

# make a copy of .env.example into .env

# prisma setup
# run docker
pnpm db:push

--- 
# POST INSTALLATION

# run docker 
# docker compose down
docker compose up
# docker compose config

# prisma studio
pnpm db:studio

# next.js 
pnpm dev
# pnpm build
# pnpm start
```
---
### Folder structure
```bash
/src
 |- /app
    |- page.tsx
    |- layout.tsx
    |- loading.tsx
    |- error.tsx
    |- /sample-page
        |- page.tsx
        |- loading.tsx
        |- error.tsx
        |- /_components
        |- /_actions
        |- /_hooks
        |- /@sample-parallel
            |- page.tsx
            |- loading.tsx
            |- error.tsx
            |- /(..)sample-intercepting
                |- page.tsx
                |- loading.tsx
                |- error.tsx
    |- /sample-page
        |- /[slug]
            |- page.tsx
 |- /server
     |- db.ts
 |- /shared
    |- /_shacdn
    |- /_styles
    |- /_hooks
    |- /_actions
    |- /_components
    |- /_icons
```

![architecture](./public/next-twitter-clone-architecture.png)
