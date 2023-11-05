import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) { }

  cerrarMenu() {
    const menu = this.el.nativeElement.querySelector('.navbar-collapse');
    this.renderer.removeClass(menu, 'show');
  }

}
