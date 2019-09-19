import { PizzaDisplayComponent, PizzaFormComponent, PizzaItemComponent, PizzaToppingsComponent } from '../components';
import { PizzaLoaderComponent } from '../components/pizza-loader/pizza-loader.component';
import { CreatePizzaComponent } from '../containers';
import { ComponentLoadingDirective } from './component-loading.directive';

export const directives: any[] = [
  ComponentLoadingDirective,
];

export * from './component-loading.directive';
