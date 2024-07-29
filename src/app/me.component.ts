import { Component } from '@angular/core';
import { CtaComponent } from './cta.component';

@Component({
  standalone: true,
  selector: 'app-me',
  template: `
      <div class="row">
          <div>
              <h2>Je ne me suis pas présenté</h2>
              <p>
                  Je suis un passionné de développement web et du framework Angular.

                  J'ai découvert ce framework au moment de sa sortie il y a ... fort fort longtemps dans une
                  galaxie
                  pas
                  très lointaine.

                  Moi qui venais du monde Java pour devenir développeur front, j'ai tout de suite été conquis
                  par le
                  cadre fournit par Angular.

                  Patient et pédagogue, aider les autres à monter en compétences m'anime depuis toujours.

                  Développeur, lead développeur sont des rôles qui m'ont permis de comprendre notre métier et
                  surtout
                  les attentes que l'on a lorsque l'on recrute quelqu'un du point de vue de l'équipe et du
                  produit.
              </p>
          </div>

          <img src="/images/me.png" alt="picture of me" width="300" height="417,5"/>
      </div>
      <app-cta/>`,
  imports: [
    CtaComponent,
  ],
  styles: [`
    :host {
      .row {
        display: flex;
        gap: 1rem;
      }
    }
  `],
})
export class MeComponent {

}