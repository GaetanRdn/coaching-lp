import { Component, input, InputSignal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-bloc',
  template: `
      <span class="emoji">{{ emoji() }}</span>

      <span>
          @if (title()) {
              <div><b>{{ title() }}</b></div>
          }
          <ng-content/></span>`,
  styles: [
    `:host {
      display: flex;
      flex-wrap: nowrap;
      padding: 1rem;
      gap: 1rem;
      border-radius: 0.25rem;
      border: 1px solid var(--dark-text-color);

      > :not(.emoji) {
        align-self: center;
      }
    }`,
  ],
})
export class BlocComponent {
  emoji: InputSignal<string> = input.required<string>();

  title: InputSignal<string> = input('');
}
