import { Injectable, signal } from "@angular/core";
import { Result } from "./result.model";

@Injectable({
  providedIn: "root",
})
export class CalculatorService {
  investmentResults = signal<Result[] | undefined>(undefined);

  calculateInvestmentResults(
    initialInvestment: number,
    duration: number,
    annualInvestment: number,
    expectedReturn: number
  ) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      const totalAmountInvested = initialInvestment + annualInvestment * year;

      annualData.push({
        year,
        investmentValue,
        interestEarnedInYear,
        annualInvestment,
        totalInterest,
        totalAmountInvested,
      });
    }

    this.investmentResults.set(annualData);
  }
}
