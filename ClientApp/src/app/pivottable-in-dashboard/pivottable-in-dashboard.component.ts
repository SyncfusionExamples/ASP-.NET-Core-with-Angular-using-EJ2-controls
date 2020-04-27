import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DashboardLayoutComponent, PanelModel } from '@syncfusion/ej2-angular-layouts';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import {
  IDataOptions, PivotView, FieldListService, CalculatedFieldService,
  ToolbarService, ConditionalFormattingService, ToolbarItems, DisplayOption, IDataSet,
  NumberFormattingService, GroupingBarService
} from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-charts';

@Component({
  selector: 'app-home',
  styleUrls: ['./pivottable-in-dashboard.component.css'],
  templateUrl: './pivottable-in-dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [CalculatedFieldService, ToolbarService, ConditionalFormattingService, FieldListService, NumberFormattingService, GroupingBarService]
})
export class Pivottable_in_dashboard_component {
  @ViewChild('defaultLayout') dashboard: DashboardLayoutComponent;
  @ViewChild('saveBtn') saveBtn: ButtonComponent;
  @ViewChild('restoreBtn') restoreBtn: ButtonComponent;
  public dataSourceSettings: IDataOptions;
  public dataSourceSettings1: IDataOptions;
  public gridSettings: GridSettings;
  public toolbarOptions: ToolbarItems[];
  public chartSettings: ChartSettings;
  public displayOption: DisplayOption;

  public restoreModel: any = [];
  public cellSpacing: number[] = [10, 10];
  public panels: any = [{ "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content: '<div class="content">0</div>' },
  { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content: '<div class="content">1</div>' },
  { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content: '<div class="content">2</div>' },
  { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content: '<div class="content">3</div>' },
  { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content: '<div class="content">4</div>' },
  { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content: '<div class="content">5</div>' },
  { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content: '<div class="content">6</div>' }
  ];

  onSaveClick() {
    this.restoreModel = this.dashboard.serialize();
    this.restoreModel[0].content = '<div class="content">0</div>';
    this.restoreModel[1].content = '<div class="content">1</div>';
    this.restoreModel[2].content = '<div class="content">2</div>';
    this.restoreModel[3].content = '<div class="content">3</div>';
    this.restoreModel[4].content = '<div class="content">4</div>';
    this.restoreModel[5].content = '<div class="content">5</div>';
    this.restoreModel[6].content = '<div class="content">6</div>';
  }

  onrestoreClick() {
    this.dashboard.panels = this.restoreModel;
  }

  @ViewChild('pivotview')
  public pivotObj: PivotView;

  public count: number = 8;
  // public cellSpacing: number[] = [10, 10];

  getPivotData(): IDataSet[] {
    let pivotData: IDataSet[] = [
      { 'Sold': 31, 'Amount': 52824, 'Country': 'Australia', 'Products': 'Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
      { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q2' },
      { 'Sold': 90, 'Amount': 153360, 'Country': 'United Stetes', 'Products': 'Van', 'Year': 'FY 2015', 'Quarter': 'Q3' },
      { 'Sold': 25, 'Amount': 42600, 'Country': 'Australia', 'Products': 'Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
      { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
      { 'Sold': 51, 'Amount': 86904, 'Country': 'Australia', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q2' }];

    return pivotData;
  }
  saveReport(args: any) {
    let reports = [];
    let isSaved: boolean = false;
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reports = JSON.parse(localStorage.pivotviewReports);
    }
    if (args.report && args.reportName && args.reportName !== '') {
      reports.map(function (item: any): any {
        if (args.reportName === item.reportName) {
          item.report = args.report; isSaved = true;
        }
      });
      if (!isSaved) {
        reports.push(args);
      }
      localStorage.pivotviewReports = JSON.stringify(reports);
    }
  }
  fetchReport(args: any) {
    let reportCollection: string[] = [];
    let reeportList: string[] = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    reportCollection.map(function (item: any): void { reeportList.push(item.reportName); });
    args.reportName = reeportList;
  }
  loadReport(args: any) {
    let reportCollection: string[] = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    reportCollection.map(function (item: any): void {
      if (args.reportName === item.reportName) {
        args.report = item.report;
      }
    });
    if (args.report) {
      this.pivotObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
    }
  }
  removeReport(args: any) {
    let reportCollection: any[] = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    for (let i: number = 0; i < reportCollection.length; i++) {
      if (reportCollection[i].reportName === args.reportName) {
        reportCollection.splice(i, 1);
      }
    }
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      localStorage.pivotviewReports = JSON.stringify(reportCollection);
    }
  }
  renameReport(args: any) {
    let reportsCollection: any[] = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportsCollection = JSON.parse(localStorage.pivotviewReports);
    }
    if (args.isReportExists) {
      for (let i: number = 0; i < reportsCollection.length; i++) {
        if (reportsCollection[i].reportName === args.rename) {
          reportsCollection.splice(i, 1);
        }
      }
    }
    reportsCollection.map(function (item: any): any { if (args.reportName === item.reportName) { item.reportName = args.rename; } });
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      localStorage.pivotviewReports = JSON.stringify(reportsCollection);
    }
  }
  newReport() {
    this.pivotObj.setProperties({ dataSourceSettings: { columns: [], rows: [], values: [], filters: [] } }, false);
  }
  beforeToolbarRender(args: any) {
    args.customToolbar.splice(6, 0, {
      type: 'Separator'
    });
    args.customToolbar.splice(9, 0, {
      type: 'Separator'
    });
  }
  ngOnInit(): void {
    this.gridSettings = {
      columnWidth: 250
    } as GridSettings;

    this.chartSettings = {
      title: 'Sales Analysis',
      chartSeries: { type: 'Column' },
    } as ChartSettings;

    this.displayOption = { view: 'Both' } as DisplayOption;

    this.toolbarOptions = ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
      'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'Formatting', 'FieldList'] as ToolbarItems[];

    this.dataSourceSettings = {
      enableSorting: true,
      columns: [{ name: 'Year' }, { name: 'Quarter' }],
      values: [{ name: 'Sold', caption: 'Units Sold' }],
      dataSource: this.getPivotData(),
      rows: [{ name: 'Country' }, { name: 'Products' }],
      expandAll: false,
      filters: []
    };

    this.dataSourceSettings1 = {
      enableSorting: true,
      columns: [{ name: 'Year' }],
      values: [{ name: 'Sold', caption: 'Units Sold' }],
      dataSource: this.getPivotData(),
      rows: [{ name: 'Country' }],
      filterSettings: [{ name: 'Year', type: 'Exclude', items: ['FY 2015', 'FY 2016'] }],
      expandAll: false,
      filters: []
    };
  }
}
