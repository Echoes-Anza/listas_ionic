import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular"
import { PerfilPage } from '../perfil/perfil.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: string;
  public pass: string;

  constructor(public navCtrl: NavController, public router: Router) {}

  public ir(){
     // if(this.user=="jorge"&&this.pass=="12345"){
        console.log("smn");  

        this.router.navigate( PerfilPage );
 //     }else{
   //     console.log(this.user);
     // }

    
    
  }

  ngOnInit() {
  }

}
