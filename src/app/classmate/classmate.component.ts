import { Component } from '@angular/core';

@Component({
  selector: 'app-classmate',
  standalone: true,
  imports: [],
  template: `
  <div class="d-flex align-items-center justify-content-center">
    <div class="card text-center" style="width: 18rem;">
      <img src="assets/images/mart.png" class="card-img-top img-thumbnail rounded-circle" alt="">
      <div class="card-body">
        <h1 class="card-header">Martin</h1>
        <p>Venlig og er altid klar til at hjælpe envher person.
           Han er virkelig dedikeret inden for sit fagområde</p>
      </div>
    </div>
  </div>
     `,
  styleUrl: './classmate.component.css'
})
export class ClassmateComponent {

}
