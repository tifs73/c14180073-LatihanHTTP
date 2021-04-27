import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  dataPOST = []; //untuk menampung data
  post : any = [];

  constructor(private http: HttpClient, private loadCtrl : LoadingController, private toastCtrl : ToastController) {
    this.loading;
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getDataPost();
  }

  loading : any;

  async getDataPost() {
    this.loading = await this.loaderPresent();

    this.http.get("https://reqres.in/api/users?page=2").subscribe((res:any) => {
      console.log(res); 
      this.dataPOST = res['data'];
      if (this.loading) {
        this.loading.dismiss();
      }

    });
  }

  public async loaderPresent(): Promise<any> {
    const loading = await this.loadCtrl.create({
      message: "LOADING...",
      backdropDismiss: true
    });
    await loading.present();

    return loading;
  }

}
