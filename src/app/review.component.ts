import { Component, input, InputSignal } from '@angular/core';
import { Review } from './models/review.model';

@Component({
  standalone: true,
  selector: 'app-review',
  template: `
      <span>⭐️⭐️⭐️⭐️⭐️</span>
      <span>{{ review().title }}️</span>
      <p>{{ review().description }}</p>
      <hr/>
      <span>
          {{ review().fullName }} - {{ review().role }}
      </span>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        flex-direction: column;
        gap: 0.5rem;

        hr {
          width: 100%;
        }

        p {
          flex: 2 1 100%;
        }
      }
    `,
  ],
})
export class ReviewComponent {
  review: InputSignal<Review> = input.required<Review>();
}