import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('passwordModal') passwordModal: ModalDirective;
  modalRef: BsModalRef;
  isModalShown = true;
  pass = '';
  tempPassword = '123';
  incorrectPassword = false;
  showInput = false;

  constructor() { }

  ngOnInit() {
  }

  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.passwordModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
  }

  onSubmit() {
    console.log(this.pass);
    if (this.pass === this.tempPassword) {
      this.passwordModal.hide();
      this.incorrectPassword = false;
      this.showInput = true;
    } else {
      this.incorrectPassword = true;
    }
  }

}

