import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { PizzasState, PizzasStateModel } from './pizzas-state';
import { PizzasAction } from './pizzas-actions';

export const INIT_STATE: PizzasStateModel = {
  pizzas: [{id: 1, name: 'Pizza1', toppings: []}, {id: 2, name: 'Pizza2', toppings: ['Cheese']}],
  pizzasLoading: false,
  selectedPizza: null,
  toppings: []
};


describe('Pizza Store', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([PizzasState])],
    }).compileComponents();
    store = TestBed.get(Store);
    store.reset(INIT_STATE);
  }));

  it('it should remove an existing pizza', () => {
    store.dispatch(new PizzasAction.Delete({id: 1}));
    store.selectOnce(state => state.pizzas).subscribe(pizzas => {
      expect(pizzas.length).toBe(1);
    });
  });

  it('it should update an existing pizza', () => {
    store.dispatch(new PizzasAction.Update({id: 1, toppings: ['Ham']}));
    store.selectOnce(state => state.pizzas).subscribe(pizza => {
      expect(pizza.toppings.length).toBe(1);
    });
  });

});
