import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaFormComponent } from './pizza-form.component';
import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pizza } from '../../models/pizza.model';
import { By } from '@angular/platform-browser';
import { PizzaToppingsComponent } from '..';

describe('PizzaFormComponent', () => {
  let component: PizzaFormComponent;
  let fixture: ComponentFixture<PizzaFormComponent>;
  let pizza$;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [PizzaFormComponent, PizzaToppingsComponent],
        imports: [ReactiveFormsModule],
        schemas: [NO_ERRORS_SCHEMA]
      }).overrideComponent(PizzaFormComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
        .compileComponents();
      fixture = TestBed.createComponent(PizzaFormComponent);
      component = fixture.componentInstance;
      pizza$ = new Subject<Pizza>();
      component.pizza$ = pizza$;
      fixture.detectChanges();
    })
  );

  it('should invalidate the form if no name', () => {
    component.form.patchValue({});
    expect(component.form.valid).toBeFalsy();
  });

  it('should validate if name', () => {
    component.form.patchValue({ name: 'Pizza' });
    expect(component.form.valid).toBeTruthy();
  });

  it('should display the create button if pizza does not exist', () => {
    const createButton = fixture.debugElement.query(By.css('.create_button'));
    expect(createButton).toBeTruthy();
  });

  it('should display the update button if pizza exists', () => {
    component.ngOnInit();
    pizza$.next({ id: 1 });
    fixture.detectChanges();
    const updateButton = fixture.debugElement.query(By.css('.update_button'));
    expect(updateButton).toBeTruthy();
  });

});
