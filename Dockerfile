#1、基于镜像node
FROM node:10.15.3-alpine

# 任意ip node的环境为生产环境
ENV HOST 0.0.0.0
ENV NODE_ENV=production

# 容器内创建目录pc-nuxt-template
RUN mkdir -p /pc-nuxt-template

# 复制当前的内容到容器内容部目录pc-nuxt-template
COPY . /pc-nuxt-template

# 切换工作目录到pc-nuxt-template
WORKDIR /pc-nuxt-template

# 暴露端口20003，默认端口3000
EXPOSE 20003

# 配置npm的远程仓库
#RUN yarn install --production
RUN npm config set registry https://registry.npm.taobao.org

# 安装依赖
RUN npm install --production

# 运行
CMD ["npm","start"]