import { Component } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

	private nextUrl: string;
	private prevUrl: string;
	private pagesAmount: number;

	constructor(
		private hotelService: HotelService
	) {
		this.hotelService.pagination$.pipe().subscribe(data => {
			console.log(data);
			this.nextUrl = data.next ? data.next : "";
			this.prevUrl = data.prev ? data.prev : "";

			if (data.last) {
				this.pagesAmount = data.last.parseInt(substr(data.last.indexOf('page=') + 5, 1));
			}

			console.log("this.nextUrl: ", this.nextUrl)
			console.log("this.prevUrl: ", this.prevUrl)
			console.log("this.pagesAmount: ", this.pagesAmount)
		});
	}

	public Prev(event: MouseEvent) {
		console.log("Prev event: ", event.target);
		if (this.prevUrl) {
			this.hotelService.pagination(this.prevUrl)
		}
	}

	public Next(event: MouseEvent) {
		console.log("Next event: ", event.target);
		if (this.nextUrl) {
			this.hotelService.pagination(this.nextUrl)
		}
	}

}
