import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetComponent } from './greet/greet.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GreetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ci-cd';
}
