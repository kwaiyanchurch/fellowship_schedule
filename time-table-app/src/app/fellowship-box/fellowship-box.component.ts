import { Component, OnInit } from '@angular/core';
import { FellowshipBox } from '../fellowship-box';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-fellowship-box',
  templateUrl: './fellowship-box.component.html',
  styleUrls: ['./fellowship-box.component.css']
})
export class FellowshipBoxComponent implements OnInit {
  selectedFellowship: FellowshipBox;
  fellowshipBoxes : FellowshipBox[];
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  	this.getApi();
  }
  
  onSelect(selectedFellowship: FellowshipBox): void {
	this.selectedFellowship = selectedFellowship;
  }
  
  getApi(): void {
  	this.fellowshipBoxes = this.apiService.getFellowshipBoxes();
  }	
}
