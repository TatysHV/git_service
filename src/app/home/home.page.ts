import { Component } from '@angular/core';
import { GitServiceService } from 'src/services/git-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: string;
  data;

  constructor(private gitService: GitServiceService, private _router: Router){
  
  }

  getData(){
    this.gitService.getUser(this.user).subscribe(
      data =>{
        this.data = data; 
        this.gitService.infoUser = data; 
        this._router.navigate(['/details'])
      }

    );
  }

}
