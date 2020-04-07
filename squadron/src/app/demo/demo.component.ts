import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})


export class DemoComponent implements OnInit {
  

  constructor() { }
  phoneNumber = '';
  error_msg1=" 😊 GOOD JOB! That is Correct.";
  error_msg2= "☹️ Try Again!";
  isActiveCall = false;
  correctNumber = true;
  attempts = 0;
  interval;


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
    console.log(this.error_msg1);
    console.log(this.error_msg2);
    
    this.attempts++;

    if (this.phoneNumber === '911') 
    {
      this.correctNumber = true;
      this.attempts = 0;
      alert(this.error_msg1);
      
    } 
    else {
      this.phoneNumber = '';
      this.correctNumber = false;
      alert(this.error_msg2);
    }
  }
 



}
