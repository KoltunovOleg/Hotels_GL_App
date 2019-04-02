import { Directive, ViewContainerRef, TemplateRef, OnInit, Input, OnChanges } from '@angular/core';
import { Hotel } from 'src/app/interfaces/interfaces';

@Directive({
  selector: '[appPreaload]'
})
export class PrealoadDirective implements OnInit, OnChanges{

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
    ) {  }


    @Input('appPreaload') arrInput: Array<any>;


    ngOnInit(): void {
      // this.container.createEmbeddedView(this.template);
    }

    ngOnChanges(): void {
      if (this.arrInput) {
        this.container.createEmbeddedView(this.template);
      } else {
        this.container.createEmbeddedView(this.template);
      }
    }

}
