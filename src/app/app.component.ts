import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chartJS';
  public pieChartLabels = ['INC', 'BJP', 'JD(S)', 'IND','KJP','BSRCP'];
  public pieChartData = [120, 150, 180, 90, 150, 180, 90];
  public pieChartType = 'pie';

  constructor(){

  }

  ngOnInit(){

  }
}
