import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-cta',
  template: `
      📲
      <a href="http://www.wikipedia.org">Je réserve mon appel découverte</a>
  `,
  styles: [`
    :host {
      display: inline-flex;
      gap: 0.5rem;

      a {
        color: var(--dark-accent-color);
      }
    }
  `],
})
export class CtaComponent {
}