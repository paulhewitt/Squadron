import { Component, OnInit, ViewChild  } from '@angular/core';
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

}

