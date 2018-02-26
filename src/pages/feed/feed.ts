import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nomeUsuario:string= "Emerson do código";
  public soma:number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number):void{
    this.soma=num1 + num2;
    alert(this.soma);
    

  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(5,7);   
    console.log("view DidLoad");
  }

}
