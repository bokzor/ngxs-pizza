import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PizzaLoaderComponent } from '../components/pizza-loader/pizza-loader.component';

@Directive({
  selector: '[appComponentLoading]'
})
export class ComponentLoadingDirective {
  loadingFactory: ComponentFactory<PizzaLoaderComponent>;
  loadingComponent: ComponentRef<PizzaLoaderComponent>;

  constructor(private templateRef: TemplateRef<any>,
              private vcRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
    // Create resolver for loading component
    this.loadingFactory = this.componentFactoryResolver.resolveComponentFactory(PizzaLoaderComponent);
  }

  @Input()
  set appComponentLoading(loading: boolean) {
    this.vcRef.clear();

    if (loading) {
      // create and embed an instance of the loading component
      this.loadingComponent = this.vcRef.createComponent(this.loadingFactory);
    } else {
      // embed the contents of the host template
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }

}


