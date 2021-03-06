import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard-material',
  templateUrl: './dashboard-material.component.html',
  styleUrls: ['./dashboard-material.component.css']
})
export class DashboardMaterialComponent {
  /** Based on the screen size, switch from standard to one column per row */

  constructor(private breakpointObserver: BreakpointObserver) {}

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
   map(({ matches }) => {
     if (matches) {
       return {
         columns: 1,
         miniCard: { cols: 1, rows: 1 },
         chart: { cols: 1, rows: 2 },
         table: { cols: 1, rows: 4 },
       };
     }

    return {
       columns: 6,
       miniCard: { cols: 2, rows: 1 },
       chart: { cols: 3, rows: 2 },
       table: { cols: 4, rows: 4 },
     };
   })
 );
}
