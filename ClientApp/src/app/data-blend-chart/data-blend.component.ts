import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-chart-blend',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'>
        <e-series-collection>
            <e-series type='Column' [dataSource]='data1' xName='month' yName='sales'></e-series>
            <e-series type='Column' [dataSource]='data2' xName='month' yName='sales'></e-series>
        </e-series-collection>
    </ejs-chart>`,
 })
export class data_blend_chart implements OnInit {
  public data1: object[];
   public data2: object[];
    public primaryXAxis: Object;
    ngOnInit(): void {
        this.data1 = [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
        ];
        this.data2 = [
            { month: 'Jan', sales: 28 }, { month: 'Feb', sales: 35 },
            { month: 'Mar', sales: 32 }, { month: 'Apr', sales: 34 },
            { month: 'May', sales: 32 }, { month: 'Jun', sales: 40 },
        ];
        this.primaryXAxis = {
            valueType: 'Category'
        };
  }
}
