import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalModule } from '../modal/modal.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStaffSnake } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, ModalModule, FontAwesomeModule],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

@Input() isUserLogged: boolean = false;

showLoginModal: boolean = false; // Reativar para ajustar botões de login social

snakeIcon: IconProp = faStaffSnake;

logIn() {
  this.showLoginModal = true;
  }

logOff() {
  this.isUserLogged = false;
  this.showLoginModal = false;
  }
}
