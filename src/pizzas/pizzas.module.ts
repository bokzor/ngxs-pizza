import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// containers
import * as fromDirectives from './directives';

// guards
import * as fromGuards from './guards';

// services
import * as fromServices from './services';
import { NgxsModule } from '@ngxs/store';
import { PizzasState } from './store/pizzas-state';
import { environment } from '../environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { PizzaLoaderComponent } from './components/pizza-loader/pizza-loader.component';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.PizzasListComponent,
  },
  {
    path: 'new',
    component: fromContainers.CreatePizzaComponent
    ,
  },
  {
    path: ':id',
    component: fromContainers.PizzaDetailComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    NgxsModule.forRoot([PizzasState], {
      developmentMode: !environment.production // Will freeze the stores
    }),
    NgxsFormPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(), // Should be imported last
  ],
  entryComponents: [PizzaLoaderComponent],
  providers: [...fromGuards.guards, ...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components, ...fromDirectives.directives],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class PizzasModule {}
