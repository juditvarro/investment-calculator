import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalculatorService } from "../calculator.service";

@Component({
  selector: "app-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.css",
})
export class InputComponent {
  private calculatorService = inject(CalculatorService);

  initialInvestmentInput = 0;
  annualInvestmentInput = 0;
  returnInput = 0;
  durationInput = 0;

  onSubmit() {
    this.calculatorService.calculateInvestmentResults(
      this.initialInvestmentInput,
      this.annualInvestmentInput,
      this.returnInput,
      this.durationInput
    );

    this.resetForm();
  }

  resetForm() {
    this.initialInvestmentInput = 0;
    this.annualInvestmentInput = 0;
    this.returnInput = 0;
    this.durationInput = 0;
  }
}
