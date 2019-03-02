import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { ResposiveImageDirective } from '../../directives/responsive-image/resposive-image.directive';

const routesConfig: Routes = [
    { path: 'index', component: HomeComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routesConfig)],
    declarations: [
        HomeComponent,
        ResposiveImageDirective
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}