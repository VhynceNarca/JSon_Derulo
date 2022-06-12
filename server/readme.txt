Creating Database
- create database named "paw_society"
- owner is postgres
- i change ang "Code2294" na part sa database URL into kung unsa ang password sa inyong postgres
- makita ang database URL sa .env na file

Running Server
- change directory to "server"
- run "npm install"
- run "npm install -g nodemon" (naa nis dev dependencies pero for some reason di mogana ang nodemon sa ako if di ma install globally)
- run "npx prisma migrate dev"
- run "nodemon index.js" (pag start sa server)
- run "npx prisma studio" (makita ang mga sud sa database without going to pgAdmin)

