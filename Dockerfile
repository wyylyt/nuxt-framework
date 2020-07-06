FROM node:10.15.3-alpine

ENV HOST 0.0.0.0
ENV NODE_ENV=production

RUN mkdir -p /cqliving-fd-pc
COPY . /cqliving-fd-pc
WORKDIR /cqliving-fd-pc

EXPOSE 20001

# RUN npm config set registry https://registry.npm.taobao.org
# RUN npm install --production
RUN yarn install --production

CMD ["npm","start"]