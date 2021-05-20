import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/produto';


@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  produto: Produto = new Produto();
  title: string = '';

  constructor() { }

  ngOnInit(): void {

  }
  images = ['../../../assets/Fotos/foto.jpg', '../../../assets/Fotos/foto2.jpg', '../../../assets/Fotos/foto3.jpg'];
}
