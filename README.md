# LAB - Class 12

## Project:Server event lsitening

### Author: Elias Staehle

### Problem Domain

using event pools create a series of tasks for a driver and a vendor
now instead of using event pool refactor the code to use socket

### Links and Resources

- [ci/cd](https://github.com/EDStaehle/auth-api/actions) (GitHub Actions)
- [prod development](postgres://eliasstaehle_user:RXgpZrgEXdvXlVg4FgUeRqZD5NaU2bzL@dpg-ce42fk6n6mpku7k0j3rg-a.ohio-postgres.render.com/eliasstaehle)

### Setup

#### `.env` requirements (where applicable)

see `.env.sample`


- `PORT` - Port Number


#### How to initialize/run your application (where applicable)

- nodemon

#### Features / Routes

- Feature One: deploy to dev
- GET : `` - specific route to hit
- GET : `/bad` -  specific route to hit
- Feature One: deploy to prod
- GET : `/hello` - specific route to hit
- GET : `/person` - specific route to hit

#### Tests

- npm test
-
- handles root path
- handles invalid requests
- handles errors
- handles crud operation for both /games and /cars

#### UML


![UML](./class-12-uml.png)
