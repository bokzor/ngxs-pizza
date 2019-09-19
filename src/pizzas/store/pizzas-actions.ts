import { Pizza } from '../models/pizza.model';

export namespace PizzasAction {

  export class List {
    static readonly type = '[Pizzas] Get the list of pizzas';
  }

  export class Add {
    static readonly type = '[Pizzas] Add a pizza';

    constructor(public pizza: Pizza) {
    }
  }

  export class Get {
    static readonly type = '[Pizzas] Get a pizza';

    constructor(public id: number) {
    }
  }

  export class Toppings {
    static readonly type = '[Pizzas] Get toppings';
  }

  export class Delete {
    static readonly type = '[Pizzas] Delete a pizza';

    constructor(public pizza: Pizza) {
    }
  }

  export class Update {
    static readonly type = '[Pizzas] Update a pizza';

    constructor(public pizza: Pizza) {
    }
  }

  export class UpdatePizzaForm {
    static readonly type = '[Pizzas] Update pizza form';

    constructor(public pizza: Pizza) {

    }
  }
}
