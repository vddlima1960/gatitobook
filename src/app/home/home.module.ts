import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, MensagemModule, ],
  exports: [HomeComponent],
})
export class HomeModule {}
