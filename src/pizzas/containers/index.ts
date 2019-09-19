import { PizzasListComponent } from './pizzas-list/pizzas-list.component';
import { CreatePizzaComponent } from './create-pizza/create-pizza.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';

export const containers: any[] = [PizzasListComponent, PizzaDetailComponent, CreatePizzaComponent];

export * from './pizzas-list/pizzas-list.component';
export * from './pizza-detail/pizza-detail.component';
export * from './create-pizza/create-pizza.component';
