import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {round} from '../../../models/round';

@Component({
  selector: 'app-create-new-drive',
  templateUrl: './create-new-drive.component.html',
  styleUrls: ['./create-new-drive.component.css']
})
export class CreateNewDriveComponent implements OnInit {

 rounds:[round];
  constructor() { 
  this.rounds=[new round];
  }
  ngOnInit() {
  }
  addRound(){
    this.rounds.push(new round);
  }

}
