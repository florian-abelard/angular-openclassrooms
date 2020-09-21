FROM node:14-alpine

RUN apk add git

RUN npm i -g @angular/cli

EXPOSE 4200 4201

CMD ng serve --host=0.0.0.0 --port=4200 --disableHostCheck
