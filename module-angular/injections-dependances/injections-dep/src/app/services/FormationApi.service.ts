import { Injectable } from "@angular/core";
import { Formation } from "../models/Formation";

@Injectable({
  providedIn: "root"
})
export default class FormationApi {
  fetchFormation(): Promise<Array<Formation>> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          new Formation("Module Angular", "Formation sur Angular"),
          new Formation("Module JavaScript", "Formation sur JavaScript"),
          new Formation("Module TypeScript", "Formation sur TypeScript")
        ]);
      }, 2000);
    });
  }
}
