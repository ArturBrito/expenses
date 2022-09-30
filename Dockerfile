FROM node:18
WORKDIR /usr/src/expenses-api

COPY ./package.json .
COPY ./dist/api ./dist/api
COPY ./dist/core ./dist/core
COPY ./dist/libs ./dist/libs
COPY ./prisma ./prisma/
COPY private.key .
COPY public.key .
COPY .env .env

RUN npm install --omit=dev
RUN npx prisma generate

# ENV DATABASE_URL="postgresql://postgres:postgres@postgres:5432/expenses?schema=public"
# ENV jwtSecret="cuca123"
EXPOSE 5050
CMD ["npm", "run", "start:api"]