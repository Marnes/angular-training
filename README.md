# Angular Training
- Install Angular if you don't have it installed

  `npm install -g @angular/cli`

- Clone this branch to your local machine

  `git clone git@github.com:Marnes/angular-training.git angular-training`

- Once the code has been downloaded

  `cd angular-training`

- Install the dependencies

  `npm install`

- Run the application

  `ng serve`


## Exercise 1
1. Generate a new component called HomeComponent `ng generate component home --standalone`
2. Import the HomeComponent in `app.component.ts` 
3. Update HTML of `app.component.html` to
```angular2html
<main>
  <header class="brand-name">
    <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
  </header>
  <section class="content">
    <app-home></app-home>
  </section>
</main>
```
4. Update HTML of `home.component.html` to
```angular2html
<section>
  <form>
    <input type="text" placeholder="Filter by city" />
    <button class="primary" type="button">Search</button>
  </form>
</section>
```
