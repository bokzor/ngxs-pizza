import { Component } from '@angular/core';
import { Pizza } from '../../models/pizza.model';
import { Select, Store } from '@ngxs/store';
import { PizzasState } from '../../store/pizzas-state';
import { Observable } from 'rxjs';
import { PizzasAction } from '../../store/pizzas-actions';

@Component({
  selector: 'app-create-pizza',
  templateUrl: './create-pizza.component.html',
  styleUrls: ['./create-pizza.component.css']
})
export class CreatePizzaComponent {

  @Select(PizzasState.selectedPizzas)
  selectedPizza$: Observable<Pizza>;

  @Select(PizzasState.toppings)
  toppings$: Observable<string[]>;

  constructor(private store: Store) {
    this.store.dispatch(new PizzasAction.UpdatePizzaForm(null));
  }

  onCreate(event: Pizza) {
    this.store.dispatch(new PizzasAction.Add(event));
  }

  onValueChanges(event: Pizza) {
    this.store.dispatch(new PizzasAction.UpdatePizzaForm(event));
  }

}
