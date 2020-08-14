import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { State } from "../interfaces/state";

import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class StatesService {
  constructor(private http: HttpClient) {}

  private baseUrl =
    "https://dashboard.healthit.gov/api/open-api.php?source=hospital-mu-public-health-measures.csv";

  data: Observable<State>;

  getAll(): Observable<State[]> {
    const url = `${this.baseUrl}`;
    return this.http
      .get<State[]>(url)
      .pipe(map((data) => data.filter((data) => data.period == 2015)));
  }
}
