import { Injectable } from '@angular/core';
import { FellowshipBox } from './fellowship-box';

@Injectable()
export class ApiService {

  fellowshipBoxes: FellowshipBox[] = [
  	{
	  id: "222",
	  name: "nnnn"
  	},
  	{
	  id: "11",
	  name: "bb"
  	}
  	];
  	
  constructor() { }
  
  getFellowshipBoxes(): FellowshipBox[] {
  
  	return this.fellowshipBoxes;
  }
}
