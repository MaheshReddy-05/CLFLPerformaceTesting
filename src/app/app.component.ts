import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OldflowsComponent } from "./oldflows/oldflows.component";
import { NewflowsComponent } from "./newflows/newflows.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OldflowsComponent, NewflowsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
}
