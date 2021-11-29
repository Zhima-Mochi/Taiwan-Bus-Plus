FROM node:14.1-alpine
WORKDIR /app
COPY /build /app/build
RUN npm install -g serve
ENTRYPOINT [ "serve", "-s", "build", "-l"]
CMD ["80"]