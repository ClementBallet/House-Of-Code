import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { VariableComponent } from './variable/variable.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormationItemComponent } from './formation-item/formation-item.component';
import { FormationItemOutputComponent } from './formation-item-output/formation-item-output.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    InterpolateComponent,
    VariableComponent,
    IfComponent,
    ForComponent,
    NgStyleComponent,
    PipesComponent,
    FormationItemComponent,
    FormationItemOutputComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
