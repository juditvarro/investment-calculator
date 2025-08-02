import { Component, computed, inject } from "@angular/core";
import { CalculatorService } from "../calculator.service";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-results",
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: "./results.component.html",
  styleUrl: "./results.component.css",
})
export class ResultsComponent {
  private calculatorService = inject(CalculatorService);
  
  results = computed(() => this.calculatorService.investmentResults())
}
