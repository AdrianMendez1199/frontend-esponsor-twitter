FROM node:16.1.0-alpine3.11 as build
WORKDIR /app
COPY . .

ARG $NODE_ENV

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python git

# RUN yarn install
RUN yarn install --force

RUN yarn build

# Production container
FROM nginx:1.15.0-alpine as production
COPY --from=build /app/build /usr/share/nginx/html

# RUN mkdir -p /etc/ssl
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
