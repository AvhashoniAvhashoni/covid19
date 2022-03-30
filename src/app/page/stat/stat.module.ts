import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatPageRoutingModule } from './stat-routing.module';

import { StatPage } from './stat.page';
import { GlobalPage } from '../global/global.page';
import { CountryPage } from '../country/country.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    StatPage,
    GlobalPage,
    CountryPage
  ]
})
export class StatPageModule { }
