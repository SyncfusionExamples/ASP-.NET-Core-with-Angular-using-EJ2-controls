import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-root',
template: `<ejs-grid [dataSource]='data'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
                </e-columns>
                </ejs-grid>`,
 })
export class AppComponent implements OnInit {
  public data: object[];
  ngOnInit(): void {
    this.data = [{
      OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5,
      OrderDate: new Date(8364186e5), Freight: 32.38
  },
  {
      OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6,
      OrderDate: new Date(836505e6), Freight: 11.61
  },
  {
      OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4,
      OrderDate: new Date(8367642e5), Freight: 65.83
  },
  {
      OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3,
      OrderDate: new Date(8367642e5), Freight: 41.34
  },
  {
      OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4,
      OrderDate: new Date(8368506e5), Freight: 51.3
  }];
  }
}