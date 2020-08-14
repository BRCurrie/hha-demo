import { Component, OnInit, Input } from "@angular/core";
import { State } from "../../interfaces/state";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"],
})
export class StatisticsComponent implements OnInit {
  @Input()
  stateData: State;

  constructor() {}

  ngOnInit(): void {}
}
