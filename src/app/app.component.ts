import {AfterViewInit, Component} from '@angular/core';
import * as $ from 'jquery';

// declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Tea_Store';


  constructor() {
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $("div").click(function (el) {
        console.log((el.target.innerText)
        )
      });
    });
  }

  submitDiv() {
  }


}
