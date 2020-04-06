import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  constructor(private phoneService: PhoneService) { }
  phoneNumber = '';
  isActiveCall = false;
  attempts = 0;

  ngOnInit() {

  }

  buttonClicked(addNumber) {
    this.phoneNumber = this.phoneNumber + addNumber;
  }

  backSpace() {
    this.phoneNumber = this.phoneNumber.substring(0, this.phoneNumber.length - 1);
  }

  makeCall() {
    console.log(this.phoneNumber);
    this.attempts++;
    if (this.phoneNumber === '911') {
      // this.phoneService.makeCall().subscribe(
      //   (call) => {
      //     console.log(call);
      //   }, (error) => {
      //     console.log(error);
      //   }
      // );
    }

  }

  endCall() {
    this.isActiveCall = false;
  }

}
