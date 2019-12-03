import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'project',
        loadChildren: () => import('./project/project.module').then(m => m.DemoBugTrackerProjectModule)
      },
      {
        path: 'label',
        loadChildren: () => import('./label/label.module').then(m => m.DemoBugTrackerLabelModule)
      },
      {
        path: 'ticket',
        loadChildren: () => import('./ticket/ticket.module').then(m => m.DemoBugTrackerTicketModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class DemoBugTrackerEntityModule {}
