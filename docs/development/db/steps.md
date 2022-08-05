# Postgres docker configuration steps

## First time setup
1. Start the docker
> docker-compose up 
2. Add database url to .env file
> DATABASE_URL="postgresql://postgres:postgres@localhost:5432/expenses?schema=public"
3. Run command to generate prisma client
> npx prisma generate
4. Run prisma migrate (inital_setup is the name of migration)
> npx prisma migrate dev --name initial_setup

<br><br>

## Setup to run everytime
1. Start the docker
> docker-compose up 


<br><br>

## Bootstrap users
> npm run dev:bootstrap  
> Select option Users