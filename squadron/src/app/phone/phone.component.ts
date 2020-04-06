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
  correctNumber = true;
  attempts = 0;
  interval;
  callTime = 60;

  ngOnInit() {

  }

  buttonClicked(addNumber) {
    this.correctNumber = true;
    this.phoneNumber = this.phoneNumber + addNumber;
  }

  backSpace() {
    this.phoneNumber = this.phoneNumber.substring(0, this.phoneNumber.length - 1);
  }

  makeCall() {
    console.log(this.phoneNumber);
    console.log(this.attempts);
    this.attempts++;
    if (this.phoneNumber === '911') {
      this.isActiveCall = true;
      this.correctNumber = true;
      this.startTimer();
      // this.phoneService.makeCall().subscribe(
      //   (call) => {
      //     console.log(call);
      //   }, (error) => {
      //     console.log(error);
      //   }
      // );
      this.attempts = 0;
    } else {
      this.phoneNumber = '';
      this.correctNumber = false;
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.callTime > 1) {
        this.callTime--;
      } else {
        this.endCall();
      }
    }, 1000);
  }

  endCall() {
    this.isActiveCall = false;
    this.callTime = 60;
    this.phoneNumber = '';
    clearInterval(this.interval);
  }

}
