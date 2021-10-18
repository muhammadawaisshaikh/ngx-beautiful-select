# ngx-beautiful-select
An opensource library which will help angular developers to use this as a "List of Categories" with image and name, end user can select, unselect one or many items from the scrollable list. created with ❤️ using Angular Library Concept.

## Library in Action
<img src="https://i.ibb.co/2gftvMD/beautiful-list.png" alt="Library in Action" style="width: 100%" />

## Reference 
> https://angular.io/guide/creating-libraries
> https://medium.com/@prajramesh93/create-your-angular-library-f2cf273fd8a5

## init - Angular CLI to generate a new library skeleton in a new workspace
```bash
    ng new ngx-beautiful-select-workspace --create-application=false
    cd ngx-beautiful-select-workspace
```

## generate library
```bash
    ng generate library beautiful-select --prefix=ngx
```

## create app - to use and see library in action
```bash
    ng g application beautiful-select-app
```

## building library
```bash
    ng build beautiful-select
```

## run app
```bash
    ng serve beautiful-select-app
```

## Generating a library module and a component
```bash
    ng generate module beautiful-list --project=beautiful-select
    ng generate component beautiful-list --project=beautiful-select --style=scss
```

## Neccessary todos
```bash
    1. Add newly created module to library modules imports, exports const list array
    2. Add export statement in public-api.ts file for that newly created module and component
```
