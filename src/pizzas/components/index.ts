import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { PizzaDisplayComponent } from './pizza-display/pizza-display.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { CreatePizzaComponent } from '../containers/create-pizza/create-pizza.component';
import { PizzaLoaderComponent } from './pizza-loader/pizza-loader.component';

export const components: any[] = [
  PizzaItemComponent,
  PizzaFormComponent,
  PizzaDisplayComponent,
  PizzaToppingsComponent,
  PizzaLoaderComponent,
  CreatePizzaComponent
];

export * from './pizza-item/pizza-item.component';
export * from './pizza-form/pizza-form.component';
export * from './pizza-display/pizza-display.component';
export * from './pizza-toppings/pizza-toppings.component';
