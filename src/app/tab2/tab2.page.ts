import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  dataPOST = []; //untuk menampung data
  post : any = [];

  constructor(private http: HttpClient, private loadCtrl : LoadingController, private toastCtrl : ToastController) {
  }

  ngOnInit() {
  }

  tambahdata() {
    this.http.post("https://reqres.in/api/users?page=2", this.post).subscribe((res:any) => {
      console.log(res);
      this.toastCtrl.create ({
        duration : 3000,
        message : "ID for new item is " + res.id
      }).then(l => l.present())
    })
  }
}
