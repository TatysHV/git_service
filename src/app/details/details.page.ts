import { Component, OnInit } from '@angular/core';
import { GitServiceService } from 'src/services/git-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  infoUser;

  constructor(private gitService: GitServiceService) { 

  }

  ngOnInit() {
    this.infoUser = this.gitService.infoUser;
  }

}
