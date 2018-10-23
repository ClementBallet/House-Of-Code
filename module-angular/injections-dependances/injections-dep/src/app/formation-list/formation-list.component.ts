import { Component, OnInit } from "@angular/core";
import { Formation } from "../models/Formation";
import FormationService  from "../services/formation.service";

@Component({
  selector: "app-formation-list",
  templateUrl: "./formation-list.component.html",
  styleUrls: ["./formation-list.component.css"],
  providers: [ FormationService ]
})

export class FormationListComponent implements OnInit {
  formations: Array<Formation>;

  constructor(private formationService: FormationService) {}

  ngOnInit() {
    this.formations = this.formationService.getFormation().then();
  }
}
