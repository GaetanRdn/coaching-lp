import { Component, input, InputSignal } from '@angular/core';
import { CtaComponent } from './cta.component';

@Component({
  standalone: true,
  selector: 'app-single-product',
  template: `
      <h2>Le programme mentoring 1:1 pour devenir autonome sur Angular en 1 mois.</h2>

      <p>Pour t'éviter de t'épuiser à lire des tutos et regarder des vidéos sur Youtube sans retour et sans
          explications.</p>

      <h3>EasyAngular</h3>
      <p>Un programme de mentoring sur 1 mois en 1:1 pour te rendre autonome sur l'essentiel d'Angular.</p>
      <hr/>

      <ul>
          @for (advantage of programAdvantages(); track advantage) {
              <li>{{ advantage }}</li>
          }
      </ul>

      <app-cta/>
  `,
  imports: [
    CtaComponent,
  ],
})
export class SingleProductComponent {
  programAdvantages: InputSignal<string[]> = input.required<string[]>();
}