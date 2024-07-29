import { Component } from '@angular/core';
import { BlocComponent } from './bloc.component';

@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [
    BlocComponent,
  ],
  template: `
      <app-bloc emoji="🎯" class="intro-bloc">
          Tu es développeur ou développeuse ? Tu souhaites apprendre l’essentiel d’Angular afin d'échanger avec un
          Backend pour afficher et manipuler des données via une IHM ? Tu souhaites être accompagné en 1:1 car le
          reste n’a pas marché pour toi ?
          <br/>
          <br/>
          Alors bienvenu(e) dans mon programme de mentoring 1:1 qui va te permettre d’être employable en 1 mois à
          raison d’1 heure par jour!
      </app-bloc>
  `,
  styles: [`:host {
    display: contents;

    app-bloc {
      background-color: seagreen;
      border-color: seagreen;
    }
  }`],
})
export class HeroComponent {
}