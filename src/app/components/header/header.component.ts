import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalModule } from '../modal/modal.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, ModalModule],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

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
