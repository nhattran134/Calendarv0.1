import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetailPage} from '../detail/detail'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  detailPage = DetailPage;
  selectedItem: any;
  activities:string[];
  intakes:number[];
  outputs:number[];
  items: Array<{date: string, intake:number, output:number, activity: string}>;
  public today = new Date();
  current_iso: string;
  current_date: string;
  current_year: string;
  yesterday_iso: string;
  tomorrow_iso: string;
  public d = new Date();
  public first_of_week;
  public last_of_week;
  public start;
  public end;
  ngOnInit() {
    this.current_iso = this.today.toISOString();
    this.current_date = this.current_iso.substring(0,10);
    this.current_year = this.current_iso.substring(0,4);
    var day = this.d.getDate(),
        diff = this.d.getDate() - day ;
     this.first_of_week = new Date(this.d.setDate(diff));
     this.last_of_week = new Date(this.d.setDate(this.first_of_week.getDate()+6));
    this.start = this.first_of_week;
    this.end = this.last_of_week;
     this.items = [];
     this.activities = ['baseball', 'bicycle', 'body', 'football', 'basketball', 'plane',
     'american-football', 'boat'];
     this.intakes = [1232, 2323, 2312, 4122, 2123, 3123, 8188, 1546];
     this.outputs = [1232, 2323, 2312, 4122, 2123, 3123, 8188, 1546];
     for (let i = this.start; i < this.end; i=new Date(i.setDate(i.getDate()+1))) {
       this.items.push({
         date: i.toISOString(),
         intake: this.intakes[Math.floor(Math.random() * this.intakes.length)],
         output: this.outputs[Math.floor(Math.random() * this.outputs.length)],
         activity: this.activities[Math.floor(Math.random() * this.activities.length)]
       });
     }
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies


  }
  openPage(event) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailPage);
  }
}
