import { Component, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { CtaComponent } from './cta.component';

@Component({
  standalone: true,
  selector: 'app-collapsible',
  template: `
      <button (click)="show.set(!show())">
          @if (show()) {
              <span>➡️</span>
          } @else {
              <span>⬇️</span>
          }
          {{ title() }}
      </button>
      @if (show()) {
          <div class="row" [class.reverse]="imagePosition() === 'right'">
              <img src="/images/{{ image() }}" alt="step image" width="250" height="200"/>

              <span class="column">
              <ng-content/>
              <app-cta/>
          </span>
          </div>
      }
  `,
  styles: [
    `:host {
      display: flex;
      flex-direction: column;
      background-color: dimgrey;

      button {
        background-color: dimgrey;
        color: var(--dark-text-color);
        border: none;
        text-align: left;
        padding-block: 1rem;
        cursor: pointer;
      }

      .row {
        display: flex;
        flex-direction: row;
        gap: 2rem;

        &.reverse {
          flex-flow: row-reverse;
        }
      }

      .column {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
      }
    }`,
  ],
  imports: [
    CtaComponent,
  ],
})
export class CollapsibleComponent {
  show: WritableSignal<boolean> = signal(true);

  title: InputSignal<string> = input.required<string>();

  image: InputSignal<string> = input.required<string>();

  imagePosition: InputSignal<'left' | 'right'> = input<'left' | 'right'>('left');
}