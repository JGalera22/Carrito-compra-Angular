import { NgClass } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {Articulo} from '../../models/articulos-component';

@Component({
  selector: 'app-articulos-component',
  templateUrl: './articulos-component.component.html',
  styleUrls: ['./articulos-component.component.scss']
})
export class ArticulosComponentComponent implements OnInit {
  articulo:Articulo[];
  constructor() {
    this.articulo=[];
    let a=new Articulo('Botas','Para correr por la calle','36', 250,0 , false, 5);
    let b=new Articulo('Botas','Para correr por la calle','36', 250,0 , false, 5);
    let c=new Articulo('Botas','Para correr por la calle','36', 250,0 , false, 5);

    this.articulo.push(a);
    this.articulo.push(b);
    this.articulo.push(c);

   }

  ngOnInit(): void {
  }

}
