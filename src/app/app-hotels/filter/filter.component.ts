import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.css'],
})

export class FilterComponent {
	// private isActive: boolean;

	public rating: Array<string|number> = ["All", 3, 4, 5];
	
	@Output() selectedRaiting = new EventEmitter();
	
	isNumber(val) { return typeof val === 'number'; }

	getRange(event: MouseEvent, elem: HTMLElement): void {
		// console.log(elem)
		event.preventDefault();
		const valueAttr: string = elem.attributes['data-range'].value;
		this.selectedRaiting.emit(valueAttr);
	}
}
