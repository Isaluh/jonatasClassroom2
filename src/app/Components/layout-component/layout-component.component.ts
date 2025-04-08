import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'layoutComponent',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './layout-component.component.html',
  styleUrl: './layout-component.component.css'
})
export class LayoutComponentComponent {

}
