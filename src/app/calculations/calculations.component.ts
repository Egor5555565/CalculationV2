import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

	ValueComponent: number = 0;

	constructor() { }

	ngOnInit() {
	}

	HideShowClick(value){
		this.ValueComponent = value;
	}
}
