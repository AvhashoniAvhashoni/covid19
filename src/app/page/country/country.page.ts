import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {
  public countries: any = null;
  public search_country: any;

  constructor(private _service: AppService) {
    _service.getCountries().subscribe((res) => {
      this.countries = res;
      for (let i = 0; i < Object.keys(this.countries).length; i++)
        if (this.countries[i].country == "World") {
          this.countries.splice(i, 1);
          break;
        }
      this.countries.sort((a, b) => a.country.localeCompare(b.country));
    });
  }

  ngOnInit() { }
}
