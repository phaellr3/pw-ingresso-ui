import { Component, signal } from '@angular/core';

import { Header } from "./shared/components/header/header";
import { Footer } from "./shared/components/footer/footer";
import { Home } from "./pages/home/home";
import { Lugares } from "./pages/compra/lugares/lugares";
import { CadastroUsuarioComponent } from "./pages/auth/cadastro-usuario/cadastro-usuario";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home, Lugares, CadastroUsuarioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pw-ingresso-ui');
}
