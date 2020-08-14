import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
} from "@angular/core";
import { State } from "../../interfaces/state";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent implements OnInit, OnChanges {
  @Input()
  graphData: State[];

  // The object needs to be pushed into an array for display.
  // I was not able to complete this, however, I want to show that I would use the data passed in with @Input similar
  // to the handling of the stats component.

  graphArray = [];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Measure";
  showYAxisLabel = true;
  yAxisLabel = "Value";

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}
}
