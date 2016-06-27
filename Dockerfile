FROM node:6.2.2
COPY . /code
WORKDIR /code
RUN rm -rf ./node_modules

RUN apt-get install -y curl
RUN npm install

ENV CRATE_HOST=crateio