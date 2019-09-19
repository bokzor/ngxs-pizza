import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy, OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { distinctUntilChanged, map } from 'rxjs/operators';

import { Pizza } from '../../models/pizza.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'pizza-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-form.component.scss'],
  templateUrl: './pizza-form.component.html'
})
export class PizzaFormComponent implements OnInit {
  exists = false;

  @Input() pizza$: Observable<Pizza>;
  @Input() toppings: string[];
  @Output() valueChanges = new EventEmitter<Pizza>();
  @Output() create = new EventEmitter<Pizza>();
  @Output() update = new EventEmitter<Pizza>();
  @Output() remove = new EventEmitter<Pizza>();

  form = this.fb.group({
    id : [],
    name: ['', Validators.required],
    toppings: [[]],
    sizes: [[]],
  });

  constructor(private fb: FormBuilder) {
  }

  get nameControl() {
    return this.form.get('name') as FormControl;
  }

  get nameControlInvalid() {
    return this.nameControl.hasError('required') && this.nameControl.touched;
  }

  ngOnInit() {

    this.pizza$.pipe(
      distinctUntilChanged()
    ).subscribe((pizza) => {
      if (pizza && pizza.id) {
        this.exists = true;
        this.form.patchValue(pizza, {emitEvent: false});
      }
    });

    this.form
      .valueChanges.pipe(
      distinctUntilChanged()
    )
      .subscribe(value => {
        this.valueChanges.emit(value);
      });
  }

  createPizza(form: FormGroup) {
    const {value, valid} = form;
    if (valid) {
      this.create.emit(value);
    }
  }

  updatePizza(form: FormGroup) {
    const {value, valid, touched} = form;
    if (touched && valid) {
      this.update.emit(value);
    }
  }

  removePizza(form: FormGroup) {
    const {value} = form;
    console.log(value);
    this.remove.emit(value);
  }
}
