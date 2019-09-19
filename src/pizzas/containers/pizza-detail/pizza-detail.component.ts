import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Pizza } from '../../models/pizza.model';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PizzasState } from '../../store/pizzas-state';
import { PizzasAction } from '../../store/pizzas-actions';

@Component({
  selector: 'product-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-detail.component.scss'],
  templateUrl: './pizza-detail.component.html'
})
export class PizzaDetailComponent implements OnInit {

  @Select(PizzasState.pizzasLoading)
  public loading$: Observable<boolean>;

  @Select(PizzasState.selectedPizzas)
  selectedPizza$: Observable<Pizza>;

  @Select(PizzasState.toppings)
  toppings$: Observable<string[]>;

  constructor(
    private  store: Store,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.store.dispatch(new PizzasAction.Get(+params['id']));
    });
  }

  onUpdate(event: Pizza) {
    this.store.dispatch(new PizzasAction.Update(event));
  }

  onRemove(event: Pizza) {
    this.store.dispatch(new PizzasAction.Delete(event));
  }

  onValueChanges(event: Pizza) {
    this.store.dispatch(new PizzasAction.UpdatePizzaForm(event));
  }
}
