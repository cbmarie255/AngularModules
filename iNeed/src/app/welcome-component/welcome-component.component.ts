import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-component',
  template: '<h1>{{ message }}</h1>',
})
export class WelcomeComponentComponent {
  message = 'Need help? Welp, you came to the right place!';
}
