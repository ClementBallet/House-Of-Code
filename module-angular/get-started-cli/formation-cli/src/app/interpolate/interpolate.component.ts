import { Formation } from './../formation/formation.model';
import { Component, OnInit } from '@angular/core';
import { FormationComponent } from '../formation/formation.component';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})

export class InterpolateComponent implements OnInit {

  prenom: String = 'John';
  nom: String = 'Doe';
  formation: Formation = new Formation("House of Code", "", "", "");
  formationJS: FormationComponent ;
  color: Boolean = true;
  isHidden: Boolean = false;
  numMouseOverText: any = 1;
  numMouseOutText: any = 1;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.color = !this.color;
    }, 1000);
  }

  getFullName() {
    return `${this.prenom} ${this.nom}`;
  }

  isHiddenOnClick() {
    return this.isHidden = !this.isHidden;
  }

  mouseOverText(e) {
    document.querySelector('.mouseover').innerHTML = `${e.type} : ${this.numMouseOverText++}`;
  }

  mouseOutText(e) {
    document.querySelector('.mouseout').innerHTML = `${e.type} : ${this.numMouseOutText++}`;
  }
}
