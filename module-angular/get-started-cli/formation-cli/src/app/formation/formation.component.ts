import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  nom: String = 'House of Code';
  description: String = 'Formation développeur informatique';

  constructor() { }

  ngOnInit() { }

}
