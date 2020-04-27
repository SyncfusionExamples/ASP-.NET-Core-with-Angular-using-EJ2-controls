import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { IDataOptions, PivotView, IDataSet, FieldListService } from '@syncfusion/ej2-angular-pivotview';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-angular-popups';

let isloaded: boolean = false;
@Component({
  selector: 'app-home',
  styleUrls: ['./pivot-table-1.component.css'],
  templateUrl: './pivot-table-1.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [FieldListService]
})

export class Pivot_Table1_Component {
  public dataSourceSettings: IDataOptions;
  public product: string[] = ["Bikes", "Cars", "Clothes", "Furniture", "Medicines", "Fuel"];
  public year: string[] = ["FY 2014", "FY 2015", "FY 2016", "FY 2017", "FY 2018"];
  public city: string[] = ["Canada", "France", "Germany", "United Kingdom", "United States"];

  @ViewChild('pivotview')
  public pivotObj: PivotView;


  data(count: number): Object[] {
    let result: Object[] = [];
    for (let i: number = 1000; i < (count + 1); i++) {
      result.push({
        OrderID: "Order-" + i,
        Products: this.product[Math.round(Math.random() * this.product.length)] || this.product[0],
        Production: this.year[Math.round(Math.random() * this.year.length)] || this.year[0],
        Country: this.city[Math.round(Math.random() * this.city.length)] || this.city[0],
        Amount: Math.round(Math.random() * 5000) + 5000,
        Sold: Math.round(Math.random() * 80) + 10,
      });
    }
    return result;
  };
  ondataBound(e: Event): void {
    if (isloaded) {
      document.getElementById('loadBtn2').style.display = "block";
      document.getElementById('symbol').style.display = "block";
      document.getElementById('loadBtn3').style.display = "block";
    }
    hideSpinner(document.getElementById('webpage'));
  }
  onLoadClick1(e: Event): void {
    isloaded = true;
    document.getElementById('loadBtn1').style.display = "none";
    this.pivotObj.dataSourceSettings.dataSource = this.data(1000000) as IDataSet[]; 
    showSpinner(document.getElementById('webpage')); 
  }

  onLoadClick2(e: Event): void {
    isloaded = false;
    document.getElementById('loadBtn2').style.display = "none";
    document.getElementById('symbol').style.display = "none";
    document.getElementById('loadBtn3').style.display = "none";
    this.pivotObj.dataSourceSettings.dataSource = this.data(1000010) as IDataSet[]; 
    showSpinner(document.getElementById('webpage')); 
  }

  onLoadClick3(e: Event): void {
    isloaded = false;
    document.getElementById('loadBtn2').style.display = "none";
    document.getElementById('symbol').style.display = "none";
    document.getElementById('loadBtn3').style.display = "none";
    this.pivotObj.dataSourceSettings.dataSource = this.data(1010000) as IDataSet[];  
    showSpinner(document.getElementById('webpage'));
  }

  ngOnInit(): void {

    this.dataSourceSettings = {
      dataSource: [],
      enableSorting: false,
      rows: [{ name: 'OrderID', caption: 'Order ID' }, { name: 'Products', caption: 'Products' }],
      columns: [{ name: 'Production', caption: 'Production Year' }, { name: 'Country', caption: 'Country' }],
      values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
      formatSettings: [{ name: 'Amount', format: 'C0' }],
    };

    createSpinner({
      target: document.getElementById('webpage')
    });
  }
}
