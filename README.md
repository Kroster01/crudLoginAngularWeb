# CrudLoginAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# dependencias extras

npm i concurrently
ng add @angular/material

# Componentes

ng g m pages/home -m=app --route home
ng g c shared/components/header
ng g c shared/components/footer
ng g m pages/notFound -m=app --route notFound

ng g m pages/admin -m=app --route admin
ng g m pages/auth/login -m=app --route login
ng g m shared/components/sidebar -m=app
ng g c shared/components/sidebar -m=sidebar

npm i @auth0/angular-jwt

ng g g shared/guards/checkLogin --implements CanActivate
