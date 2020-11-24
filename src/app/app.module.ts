import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { appRoutes } from '../routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionParkomatsComponent } from './section/section-parkomats/section-parkomats.component';
import { SectionStatisticComponent } from './section/section-statistic/section-statistic.component';
import { SectionInfoComponent } from './section/section-info/section-info.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), ChartsModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionParkomatsComponent,
    SectionStatisticComponent,
    SectionInfoComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
