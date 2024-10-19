# Postgre JS Node

npm init -y

npm install express
npm install @quixo3/prisma-session-store express-session
npm install pg
npm install ejs
npm install express-validator
npm install dotenv
npm install passport
npm install passport-local
npm install bcryptjs
npm install connect-pg-simple
npm install prisma @prisma/client
npm install uid2
npm install connect-flash

npx prisma init

npx prisma migrate dev --name init
node <app name>
node --watch <app name>

to watch sql in prisma

npx prisma studio

To allow cross origin

npm install cors

<!-- app.use(cors()) -->

To save folder:
npm install multer
