#Frontend/Dockerfile -- Do not confuse, pls
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
RUN rm -rf /var/www/html/*
COPY --from=builder /app/dist /var/www/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
