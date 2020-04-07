import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.panel-title').on('click', function(event) {
      $(this).find('.question-arrow').toggleClass('rotate');
      $(this).find('.question-arrow').toggleClass('rotate-reset');
    });
  }


}
