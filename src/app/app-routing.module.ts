import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaspiOverviewComponent } from './pages/raspi-overview/raspi-overview.component';
import { SensorsOverviewComponent } from './pages/sensors-overview/sensors-overview.component';
import { ComputerOverviewComponent } from './pages/computer-overview/computer-overview.component';
import { LinkedListOverviewComponent } from './pages/linked-list-overview/linked-list-overview.component';

const routes: Routes = [
    { path: 'raspberry-overview', component: RaspiOverviewComponent },
    { path: 'sensors-overview', component: SensorsOverviewComponent },
    { path: 'computer-overview', component: ComputerOverviewComponent },
    { path: 'linked-list-overview', component: LinkedListOverviewComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
