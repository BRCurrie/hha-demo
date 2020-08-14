import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";

const modules: any[] = [
  CommonModule,
  NgxChartsModule,
  MatSelectModule,
  MatListModule,
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
