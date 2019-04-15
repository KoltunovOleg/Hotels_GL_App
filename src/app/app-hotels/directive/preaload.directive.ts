import { Directive, ViewContainerRef, TemplateRef, Input, OnChanges } from '@angular/core';

@Directive({
	selector: '[appPreaload]'
})
export class PrealoadDirective implements OnChanges {

	constructor(
		private container: ViewContainerRef,
		private template: TemplateRef<any>
	) { }


	@Input('appPreaload') arrInput: Array<any>;

	ngOnChanges(): void {
		if (this.arrInput) {
			this.container.createEmbeddedView(this.template);
		} else {
			this.container.createEmbeddedView(this.template);
		}
	}

}
