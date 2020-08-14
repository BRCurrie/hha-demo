import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { StatesService } from "../../services/states.service";
import { State } from "../../interfaces/state";

@Component({
  selector: "app-dashboard-container",
  templateUrl: "./dashboard-container.component.html",
  styleUrls: ["./dashboard-container.component.scss"],
})
export class DashboardContainerComponent implements OnInit {
  data$: Observable<State[]>;

  constructor(private statesService: StatesService) {}

  ngOnInit(): void {
    this.data$ = this.statesService.getAll();
  }
}
