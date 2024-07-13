# Stage 1: Build stage
FROM node:16 AS build

WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы
COPY . .

# Собираем приложение
RUN npm run build

# Stage 2: Production stage
FROM nginx:alpine

# Копируем собранные файлы из Stage 1
COPY --from=build /app/build /usr/share/nginx/html

# Копируем конфигурацию nginx
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
