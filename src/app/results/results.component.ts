import { Component } from "@angular/core";

@Component({
  selector: "app-results",
  standalone: true,
  imports: [],
  templateUrl: "./results.component.html",
  styleUrl: "./results.component.css",
})
export class ResultsComponent {
  rows = [
    {
      id: 1,
      year: 1,
      value: 1500,
      interest: 55,
      totalInterest: 60,
      capital: 1000,
    },
  ];
}
