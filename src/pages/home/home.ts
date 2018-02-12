import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  screenWidth: number = 0; //width of device app is running upon
  progressBarWidth: number = 0; //current loaded width of progress bar

  constructor(platform: Platform, public navCtrl: NavController) {
    platform.ready().then((readySource) => {
      this.screenWidth = platform.width();//initialize screenwidth with device's width
    });

    this.progressBar();//calls function to load progress bar
  }


  //progresss bar loading function
  progressBar(): void {
    //function to increase widh of progress bar
    var fname = () => {

      if (this.progressBarWidth < (this.screenWidth * 0.75))//initialize progress bar to 75% of screen size
      {
        this.progressBarWidth += 1;// increase width of progress bar by 1px
      }
      else {
        clearInterval(intervalId);//clear interval after loading of progress bar
        this.navCtrl.setRoot(ProfilePage);//changes from home page to profile page after progress bar has been loaded
      }
    }
    var intervalId = setInterval(fname, 1);//set function for interval to run
  }

}
