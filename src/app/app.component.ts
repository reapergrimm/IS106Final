import { Component, OnInit } from '@angular/core';
import { FlexModalService } from './shared-components/flex-modal/flex-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final';
  aboutText = 'This application is designed by Kelsey Ewing. (C) 2021';
  constructor(private flexModal: FlexModalService) {

  }

  ngOnInit() {
  }

  // Launch flex modal or alert (3pts reduced) showing about text
  showHelpText() {
    this.flexModal.openDialog('about-modal');
    //alert(this.aboutText);
  }

}
