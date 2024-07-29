import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Review } from './models/review.model';
import { HeroComponent } from './hero.component';
import { StatsComponent } from './stats.component';
import { FeaturesComponent } from './features.component';
import { Step } from './models/step.models';
import { TitlesComponent } from './titles.component';
import { SingleProductComponent } from './single-product.component';
import { MeetComponent } from './meet.component';
import { MeComponent } from './me.component';
import { TestimonialsComponent } from './testimonials.component';
import { CtaComponent } from './cta.component';
import { CollapsibleComponent } from './collapsible.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
      <header role="banner"></header>

      <main>
          <h1>De zéro à employable en Angular, en 1 mois, en 1h par jour</h1>

          <app-hero/>

          <app-stats/>

          <app-cta/>

          <app-features/>

          <app-titles [steps]="steps"/>

          @for (step of steps; track step.title) {
              <app-collapsible [title]="step.title" [image]="step.image"
                               [imagePosition]="step.imagePosition">{{ step.description }}
              </app-collapsible>
          }

          <app-single-product [programAdvantages]="programAdvantages"/>

          <app-meet/>

          <app-me/>

          <app-testimonials [reviews]="reviews"/>
      </main>`,
  styles: [`:host {
    header {
      height: 250px;
      background-image: url('/images/banner.png');
      background-size: cover;
      background-position: center;
    }

    main {
      padding-inline: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding-bottom: 2rem;
    }
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    StatsComponent,
    FeaturesComponent,
    TitlesComponent,
    SingleProductComponent,
    MeetComponent,
    MeComponent,
    TestimonialsComponent,
    CtaComponent,
    CollapsibleComponent,
  ],
})
export class AppComponent {
  protected readonly steps: Step[] = [
    {
      title: 'Construire sa landing page',
      description: 'Afficher du contenu statique simple sur une seule page.\n' +
      '\n' +
      'Le b.a.-ba mais qui permet déjà de produire quelque chose de concret.',
      image: 'build-lp.png',
      imagePosition: 'left',
    },
    {
      title: 'Développer son IHM en mockant son backend',
      description: 'Souvent quand on développe son IHM, le backend n\'est pas prêt.\n' +
      '\n' +
      '- je suis seul et j\'ai choisi de commencer par mon IHM\n' +
      '- je bosse en équipe et je ne développe pas le backend\n' +
      '\n' +
      'Pour palier ça, il suffit de mettre en place des données mockées.\n' +
      '\n' +
      'Je peux te montrer comment faire pour que la bascule du branchement avec le backend soit le moins couteux possible.',
      image: 'mock-backend.png',
      imagePosition: 'right',
    },
    {
      title: 'Créer une application connectée à un backend',
      description: 'Finalement, c\'est le but ultime.\n' +
      '\n' +
      'Comment brancher son IHM sur son backend.\n' +
      '\n' +
      'Disposer d\'un outil fonctionnel qui réponde à un besoin.',
      image: 'full-app.png',
      imagePosition: 'left',
    },
  ];

  protected readonly programAdvantages: string[] = [
    '4 sessions de coaching privées en 1:1pour te guider durant ta progression',
    '6 exercices pour valider chaque étape de ton parcours',
    'Un accès à ma messagerie personnelle pour que tu puisses m’envoyer autant de questions que tu veux',
    'Une relecture de tout le code que tu produiras avec mes feedbacks immédiats en live ou asynchrone en vidéo',
    'Une garantie satisfait ou remboursé',
  ];

  protected readonly reviews: Review[] = [
    {
      title: 'J\'ai pris confiance',
      description: 'Gaetan m’a permis de prendre confiance et passer un cap techniquement. L’échange a toujours été facile. Une très belle rencontre, un professionnel que je ne peux que recommander. Merci pour tout ce que tu m’as apporté !',
      fullName: 'Maxime B.',
      role: 'Lead Développeur Angular',
    },
    {
      title: 'On ne peut que progresser en sa présence',
      description: 'On ne peut que progresser en sa présence et pas seulement techniquement car il est très réactif, il trouve les mots justes qui permettent d\'avancer et sa vision est pointue et pleine de bon sens. Les échanges que j\'ai eu avec lui étaient constructifs et encourageants, cela donne davantage envie de faire mieux chaque jour suivant. Une très belle rencontre qui m\'a aidée à être plus posée, moins stressée et plus efficace.',
      fullName: 'Audrey F.',
      role: 'Développeuse full-stack',
    },
    {
      title: 'Un coach empathique et pédagogue',
      description: 'Gaetan est un coach empathique et pédagogue sur qui on peut se reposer quand on a des questions. Son expérience permet de vite avancer et de ne pas rester bloqué. Ses retours rapides sur mes commits m’ont permis d’itérer à mon rythme. Le carnet de board dédié permet un bon suivi pour lui comme pour moi sur mes avancées. Sa méthodologie étape par étape permet de garder le cap et la motivation.',
      fullName: 'Maka T.',
      role: 'Développeur',
    },
  ];
}
