import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalModule } from '../modal/modal.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [CommonModule, ModalModule],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

isUserLogged: boolean = true;

showLoginModal: boolean = false; // Reativar para ajustar botões de login social

logIn() {
  this.isUserLogged = true;
  this.showLoginModal = true;
  }

logOff() {
  this.isUserLogged = false;
  }
}
