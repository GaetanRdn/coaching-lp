import { Component, input, InputSignal } from '@angular/core';
import { ReviewsListComponent } from './reviews-list.component';
import { Review } from './models/review.model';

@Component({
  standalone: true,
  selector: 'app-testimonials',
  template: `
      <section>
          <h2>Ils donnent leur avis</h2>
          <p>Découvre ce qu'ils ont pensé de notre collaboration :</p>

          <app-reviews-list [reviews]="reviews()"/>
      </section>`,
  imports: [
    ReviewsListComponent,
  ],
})
export class TestimonialsComponent {
  reviews: InputSignal<Review[]> = input.required<Review[]>();
}