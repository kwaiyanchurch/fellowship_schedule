import { Component, OnInit } from '@angular/core';
import { FellowshipBox } from '../fellowship-box';

@Component({
  selector: 'app-fellowship-box',
  templateUrl: './fellowship-box.component.html',
  styleUrls: ['./fellowship-box.component.css']
})
export class FellowshipBoxComponent implements OnInit {
  selectedFellowship: FellowshipBox;
  
  fellowshipBoxes: FellowshipBox[] = [
  {
	  id: "222",
	  name: "vv"
  },
  {
	  id: "11",
	  name: "bb"
  }
  ];
  
  constructor() { }

  ngOnInit() {
  }
  
  onSelect(selectedFellowship: FellowshipBox): void {
	this.selectedFellowship = selectedFellowship;
  }
		
}
