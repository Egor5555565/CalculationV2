import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calculation',
  templateUrl: './simple-calculation.component.html',
  styleUrls: ['./simple-calculation.component.css']
})
export class SimpleCalculationComponent implements OnInit {

	value1 : number = 0;
	value2 : number = 0;
	value3 : number = 10;
	warning : Boolean = false;

	constructor() { }

	ngOnInit() {
	}

	event() {
		this.value3 = this.value1 + this.value2;
	}

	coping() {

		/*
		// Get the text field
		let copyText = document.getElementById("coping_text");

		// Select the text field
		copyText.select();

		// Copy the text inside the text field
		document.execCommand("copy");

		// Alert the copied text
		alert("Copied the text: " + copyText.value);
		*/

		let copyText = document.getElementById("coping_text");
		let text = document.createElement('input');
		text.value = copyText.innerHTML;
		document.body.appendChild(text);
		text.select();
		document.execCommand('copy');
		document.body.removeChild(text);
	}

	add(value, space = 0) {
		let text = document.getElementById("coping_text");
		if(text.innerHTML == "0"){
			if(((space) && (value != "-")) || (value == ".")){
				return;
			}
			else{
				text.innerHTML = "";
			}
		}
		if(space){
			if(text.innerHTML[text.innerHTML.length - 1] == " "){
				if(text.innerHTML[text.innerHTML.length - 2] == value){
					return
				}
				else{
					text.innerHTML = text.innerHTML.slice(0, text.innerHTML.length - 3) + " " + value + " ";
				}
			}
			else{
				text.innerHTML = text.innerHTML + " " + value + " ";
			}
		}
		else{
			if((value == ".") && (text.innerHTML[text.innerHTML.length - 1] == " ")){
				return;
			}
			else{
				text.innerHTML = text.innerHTML + value;
			}
		}
	}

	delete_all_text() {
		let text = document.getElementById("coping_text");
		text.innerHTML = "0";
	}

	delete_text() {
		let text = document.getElementById("coping_text");
		if(text.innerHTML[text.innerHTML.length - 1] == " "){
			text.innerHTML = text.innerHTML.slice(0, text.innerHTML.length - 3);
		}
		else{
			text.innerHTML = text.innerHTML.slice(0, text.innerHTML.length - 1);
			if(text.innerHTML == ""){
				text.innerHTML = "0";
			}
		}
	}

	summ_text() {
		let text = document.getElementById("coping_text");
		try{
			text.innerHTML = eval(text.innerHTML);
			this.warning = false;
		}
		catch (SyntaxError) {
			this.warning = true;
		}
		/*text.innerHTML = eval(text.innerHTML);*/
	}

	/* For Modev Window start */
	ModelView() {
		let modal = document.getElementById('myModal');
		modal.style.display = "block";
	}

	ModelShow() {
		let modal = document.getElementById('myModal');
		modal.style.display = "none";
	}
	/* For Modev Window end */
}
