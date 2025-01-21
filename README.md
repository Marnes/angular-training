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
1. Generate a new component called *HomeComponent* `ng generate component home --standalone`
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

## Exercise 2

1. Generate an Interface called *HousingLocation* `ng generate interface housinglocation` with the following fields
```typescript
export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
```
2. Generate a new Component called *Housing Location* `ng generate component housingLocation --standalone`
3. Render the new Housing Location component inside the *Home component*
4. Instantiate a new instance of the HousingLocation interface inside `housing-location.component.ts`
```typescript
readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
housingLocation: HousingLocation = {
  id: 9999,
  name: 'Test Home',
  city: 'Test city',
  state: 'ST',
  photo: `${this.baseUrl}/example-house.jpg`,
  availableUnits: 99,
  wifi: true,
  laundry: false,
};
```
5. Display these fields on the HousingLocation component and add some nice styling

## Exercise 3
1. Move the HousingLocation entity defined in Exercise 2 step 4 from the `housing-location.component.ts` to `home.component.ts`.
2. Change `housing-location.component.ts` to receive an input of the interface `housingLocation`
```typescript
 @Input() housingLocation!: HousingLocation;
```
3. Add the HousingLocation entity as a binding to the HousingLocation component inside `home.component.html`
```angular2html
<app-housing-location [housingLocation]="housingLocation"></app-housing-location>
```
4. Everything should still look exactly the same as end of Exercise 2

## Exercise 4
1. Generate a *Housing Service* `ng generate service housing`
2. Add a method `getAllHousingLocations` to the new service, and move the static entity to this new service.
```typescript
housingLocation: HousingLocation = { ... }
getAllHousingLocations(): HousingLocation {
  return this.housingLocation;
}
```
3. Inject this service in your Home Component `home.component.ts`
```typescript
housingService: HousingService = inject(HousingService);
```
4. Add a constructor to load the HousingLocation from the service into a field on `home.component.ts`
```typescript
housingLocation: HousingLocation;

constructor() {
  this.housingLocation = this.housingService.getAllHousingLocations();
}
```
## Exercise 5
1. Change the HousingService to return a list of HousingLocations instead of a single entity.
```typescript
protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];
```
2. Change the template of the HomeComponent to render the whole list instead of just 1. You will need to import CommonModule to use `ngFor`
```
import {CommonModule} from '@angular/common';

<app-housing-location
  *ngFor="let housingLocation of housingLocationList"
  [housingLocation]="housingLocation"
></app-housing-location>
```

## Exercise 6

1. Add the RouterModule to your `app.component.ts` imports.
```typescript
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
```
2. Add `<router-outlet></router-outlet>` where the component matching the route should be rendered to `app.component.html`
3. Configure the home route in `app.routes.ts`
```typescript
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
];
```
4. Update `bootstrapApplication` to include the routing configuration
```typescript
bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routes)
  ]}
).catch((err) =>console.error(err));
```
5. Change the home icon in `app.component.html` to navigate to home
```angular2html
<a [routerLink]="['/']">
  <header class="brand-name">
    <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
  </header>
</a>
```

## Exercise 7

1. Generate a new component called DetailsComponent `ng generate component details --standalone`
2. Register a new route `details/:id` that will render the DetailsComponent
```typescript
const routeConfig: Routes = [
  ...
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];
```
3. Add an anchor to `housing-location.component.html` to navigate to the details page of a housing location.
```angular2html
<a [routerLink]="['details', housingLocation.id]">
```
4. Configure your `bootstrapApplication` to inject path variables into your components as `@Input` with `withComponentInputBinding()`
```typescript
bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routes, withComponentInputBinding())
  ]}
).catch((err) =>console.error(err));
```
5. Now the path variable for the housing location will be available as an input. Use this to fetch the specific housing location inside `details.component.ts`
```typescript
@Input()
set id(id: string) {
  this.housingLocation = this.housingService.getHousingLocation(Number(id));
}
```
6. Add the necessary method to the service to fetch the housing location
```typescript
getHousingLocation(id: number): HousingLocation | undefined {
  return this.housingLocationList.find(location => location.id === id);
}
```
7. Now the entity can be used to display on the template
