import { Component, input, InputSignal } from '@angular/core';
import { Review } from './models/review.model';
import { ReviewComponent } from './review.component';

@Component({
  standalone: true,
  selector: 'app-reviews-list',
  template: `
      @for (review of reviews(); track review.title) {
          <app-review [review]="review"/>
      }`,
  styles: [`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: stretch;
      gap: 2rem;
    }
  `],
  imports: [
    ReviewComponent,
  ],
})
export class ReviewsListComponent {
  reviews: InputSignal<Review[]> = input.required<Review[]>();
}