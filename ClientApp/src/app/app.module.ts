import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DiagramModule} from '@syncfusion/ej2-angular-diagrams';
import { TreeViewModule} from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DashboardLayout_State_Maintenance_Component } from './dashboard-state-maintenance/dashboard-state-maintenance.component';
import { Pivottable_in_dashboard_component} from './pivottable-in-dashboard/pivottable-in-dashboard.component'
import { Pivot_Table1_Component } from './pivot-table-1/pivot-table-1.component';
import { data_blend_chart } from './data-blend-chart/data-blend.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import {DiagramAppComponent} from './diagram/diagram.component';
import { ChartAllModule } from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    DashboardLayout_State_Maintenance_Component,
    Pivottable_in_dashboard_component,
    Pivot_Table1_Component,
    data_blend_chart,
    CounterComponent,
    FetchDataComponent,
    DiagramAppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule, DiagramModule, TreeViewModule,
    FormsModule, DashboardLayoutModule, ButtonModule, PivotViewModule,ChartAllModule,
    RouterModule.forRoot([
      { path: '', component: DashboardLayout_State_Maintenance_Component, pathMatch: 'full' },
      { path: 'Pivottable_in_dashboard', component: Pivottable_in_dashboard_component},
      { path: 'pivot-table-1', component: Pivot_Table1_Component },
      { path: 'data_blend', component: data_blend_chart},
      { path: 'diagram', component: DiagramAppComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
