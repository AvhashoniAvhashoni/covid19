import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.page.html',
  styleUrls: ['./global.page.scss'],
})
export class GlobalPage implements OnInit {
  public info: any = { cases: 0, deaths: 0, recovered: 0, active: 0, critical: 0, };

  constructor(private _service: AppService) {
    _service.getCountries().subscribe((res) => {
      for (let i = 0; i < Object.keys(res).length; i++)
        if (res[i].country == "World") {
          this.info = res[i];
          break;
        }
    });
  }

  ngOnInit() { }

}
