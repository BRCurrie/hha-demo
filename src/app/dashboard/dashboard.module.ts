import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";

import { DashboardContainerComponent } from "./containers/dashboard-container/dashboard-container.component";

// imported from barrel file because of multiple components. Keeps the module neat.
import * as fromComponents from "./components";

import { StatesService } from "./services/states.service";

@NgModule({
  declarations: [DashboardContainerComponent, fromComponents.components],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [DashboardContainerComponent, ...fromComponents.components],
  providers: [StatesService],
})
export class DashboardModule {}
