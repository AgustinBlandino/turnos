import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CardComponent, FooterComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    ClickOutsideModule,
    ReactiveFormsModule
  ],
  exports: [CardComponent, FooterComponent, NavbarComponent]
})
export class SharedModule { }
