import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormationListComponent } from "./formation-list/formation-list.component";
import FormationService  from "./services/formation.service";
import { MockFormationService } from "./services/mock-formation.service";
import FormationApi from "./services/FormationApi.service";

const condition:boolean = true;

@NgModule({
  declarations: [
    AppComponent,
    FormationListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FormationApi,
    // FormationService,
    // { provide: FormationService, useClass: FormationService },
    // { provide: 'FormationServiceCustomName', useClass: FormationService },
    // { provide: FormationService, useClass: MockFormationService },
    // {
    //   provide: FormationService,
    //   useFactory: () => condition ? new FormationService() : new MockFormationService()
    // }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
