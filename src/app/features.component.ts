import { Component } from '@angular/core';
import { BlocComponent } from './bloc.component';

@Component({
  standalone: true,
  selector: 'app-features',
  template: `
      <h2>100% des novices en Angular gaspillent des heures en tutos / vidéos sans rien retenir</h2>

      <section>
          <app-bloc emoji="🗺️" title="Je ne sais pas par où commencer">
              Je te fournis un plan étape par étape pour arriver à ton but
          </app-bloc>

          <app-bloc emoji="⏳" title="Il y a trop de choses à apprendre">
              Ma méthode te permet d'apprendre l'essentiel
          </app-bloc>

          <app-bloc emoji="🗺🌩️" title="Je ne sais pas par où commencer">
              Via mon expérience, tu trouveras des explications claires et accessibles
          </app-bloc>
      </section>
  `,
  imports: [
    BlocComponent,
  ],
  styles: [`
    :host {
      display: flex;
      flex-direction: column;

      section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
      }
    }
  `],
})
export class FeaturesComponent {
}