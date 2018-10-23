import { Injectable } from "@angular/core";
import { Formation } from "../models/Formation";
import FormationApi from "./FormationApi.service";

@Injectable()
export default class FormationService {
  constructor(private formationApi: FormationApi) {}

  getFormation(): Promise<Array<Formation>> {
    return this.formationApi.fetchFormation();
  }
}
