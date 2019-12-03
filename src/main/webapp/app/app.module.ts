import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { DemoBugTrackerSharedModule } from 'app/shared/shared.module';
import { DemoBugTrackerCoreModule } from 'app/core/core.module';
import { DemoBugTrackerAppRoutingModule } from './app-routing.module';
import { DemoBugTrackerHomeModule } from './home/home.module';
import { DemoBugTrackerEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    DemoBugTrackerSharedModule,
    DemoBugTrackerCoreModule,
    DemoBugTrackerHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DemoBugTrackerEntityModule,
    DemoBugTrackerAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class DemoBugTrackerAppModule {}
