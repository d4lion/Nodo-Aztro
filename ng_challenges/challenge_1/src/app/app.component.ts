import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilComponent } from './page/perfil/perfil.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PerfilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'games_profile';
}
