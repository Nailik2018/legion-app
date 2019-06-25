import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaspiOverviewComponent } from './pages/raspi-overview/raspi-overview.component';
import { SensorsOverviewComponent } from './pages/sensors-overview/sensors-overview.component';

const routes: Routes = [
    { path: 'raspberry-overview', component: RaspiOverviewComponent },
    { path: 'sensors-overview', component: SensorsOverviewComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
