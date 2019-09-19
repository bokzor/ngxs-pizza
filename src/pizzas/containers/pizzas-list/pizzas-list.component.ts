import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Pizza } from '../../models/pizza.model';
import { Select, Store } from '@ngxs/store';
import { PizzasState } from '../../store/pizzas-state';
import { BehaviorSubject, Observable } from 'rxjs';
import { PizzasAction } from '../../store/pizzas-actions';

@Component({
  selector: 'products',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizzas-list.component.scss'],
  templateUrl: './pizzas-list.component.html'
})
export class PizzasListComponent implements OnInit {

  @Select(PizzasState.pizzas)
  public pizzas$: Observable<Pizza[]>;

  @Select(PizzasState.pizzasLoading)
  public loading$: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new PizzasAction.List());
  }
}
