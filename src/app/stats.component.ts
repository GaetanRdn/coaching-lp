import { Component } from '@angular/core';
import { BlocComponent } from './bloc.component';

@Component({
  standalone: true,
  selector: 'app-stats',
  template: `
      <app-bloc emoji="👨🏼‍🏫">
          +8 années d’xp en Angular
      </app-bloc>

      <app-bloc emoji="🧢">
          des 10aines de développeurs et développeuses accompagnés dans ma carrière
      </app-bloc>
  `,
  styles: [`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  `],
  imports: [
    BlocComponent,
  ],
})
export class StatsComponent {
}