import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DataRowComponent } from '../data-row/data-row.component';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { DetailComponentModule } from '../detail/detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailComponentModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, DataRowComponent]
})
export class HomePageModule {}
