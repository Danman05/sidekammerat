import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClassmateComponent } from './classmate/classmate.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ClassmateComponent]
})
export class AppComponent {
  title = 'din-sidekammerat';
}
