import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
statusType:string ;
  constructor(
    private userServices:UserService,
    // private Services:UserService,


  ) { }
 
    logout(){
      this.userServices.userLogout() 
      }

  ngOnInit() {
    if(this.userServices.getUserPayLoad() != null){

      this.statusType =  this.userServices.getUserPayLoad().type ;
    }else{
      this.statusType =  "";

    }
     ( this.userServices.getUserPayLoad() )
  }
  
  ngDoCheck(): void {
    if (this.userServices.getUserPayLoad()!= null) {
    if (this.userServices.getUserPayLoad().type == "user") {
        this.statusType = "user"
      } else {
        this.statusType = "owner"

      }
    }
      
     
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    
  }

}
