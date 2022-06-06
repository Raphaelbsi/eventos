## Install

### Clone the repository

```shell
git clone git@github.com:Raphaelbsi/eventos.git
cd eventos
```

### Check your Docker version and Docker-Compose version

```shell
docker -v
docker-compose -v
```

The ouput should start with something like `Docker version 20.10.12` and `docker-compose version 1.29.2`

### if you don't have them installed

visit this site,
https://docs.docker.com/compose/install/
follow steps

### whith tools and docker installed

```shell
docker-compose up -d --build
```

## serve whitdout docker

you need service postgres on and modify, the config of host on the file src/config/data-source.ts

```shell
npm i
npm run dev
```
