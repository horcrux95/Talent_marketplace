import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

 
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

   screenHeight  : number;
   aboutmeExpand : boolean=false;
   aboutmeClass  : string ='aboutmeDivShort';

   constructor(platform: Platform , public navCtrl: NavController) {
    platform.ready().then((readySource) => {
      this.screenHeight=platform.width();
       });
   
   }

 
  ngAfterViewInit() {
    var aboutmeDiv = document.getElementsByClassName('aboutmeDivShort');

    var aboutmeHeight=aboutmeDiv[0].clientHeight;
    
    if(aboutmeHeight>(this.screenHeight*0.25)){
       aboutmeDiv[0].className = "aboutmeDivLong";
       this.aboutmeClass="aboutmeDivLong";
    }
  }

  aboutmeToggle(){
    var aboutmeDiv = document.getElementsByClassName(this.aboutmeClass);
    this.aboutmeExpand=!this.aboutmeExpand;
    // console.log(this.aboutmeExpand);
    if(this.aboutmeExpand){
      aboutmeDiv[0].className = "aboutmeDivShort";
      this.aboutmeClass="aboutmeDivShort";
    }else{
      aboutmeDiv[0].className = "aboutmeDivLong";
      this.aboutmeClass="aboutmeDivLong";
    }
  }

}
