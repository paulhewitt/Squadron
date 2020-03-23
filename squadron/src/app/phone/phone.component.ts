import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  constructor() { }
  phoneNumber = '';

  ngOnInit() {
  }

  buttonClicked(addNumber) {
    this.phoneNumber = this.phoneNumber + addNumber;
  }

}
