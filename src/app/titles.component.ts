import { Component, input, InputSignal } from '@angular/core';
import { Step } from './models/step.models';

@Component({
  standalone: true,
  selector: 'app-titles',
  template: `
      <h2>Ma méthodologie pour apprendre à être autonome sur l'essentiel d'Angular</h2>

      <section>
          <p>{{ steps().length }} étapes pour</p>
          @for (step of steps(); track step.title) {
              <div>
                  <input type="checkbox" disabled/> {{ step.title }}
              </div>
          }
      </section>
  `,
})
export class TitlesComponent {
  steps: InputSignal<Step[]> = input.required();
}