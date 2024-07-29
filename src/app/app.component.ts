import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<h1>Hello there 👋🏼</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
