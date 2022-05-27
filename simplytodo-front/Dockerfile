FROM node:16-alpine as angular-build
WORKDIR /simplytodo-front
COPY ./package.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:alpine
EXPOSE 5001
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=angular-build /simplytodo-front/dist/simplytodo-front .

# FROM nginx:alpine
# EXPOSE 5001
# COPY --from=angular-build /simplytodo-front/dist/simplytodo-front /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# CMD ["nginx", "-g", "daemon off;"]