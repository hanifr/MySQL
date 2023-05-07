# temperature-relative-humidity-monitoring-system

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3500
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

# dockerize nuxt-apps
$ docker build . -t aneh2killa/bpltv-frontend

# to push the apps to dockerhub
$ docker push aneh2killa/bpltv-frontend

# to run on docker
$ docker run -it -p 5000:3500 aneh2killa/bpltv-frontend

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
