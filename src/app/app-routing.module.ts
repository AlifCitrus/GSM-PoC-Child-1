import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { environment } from 'src/environments/environment';

const itemRoutes: Routes = [
  { path: 'one', component: PageOneComponent },
  { path: 'two', component: PageTwoComponent },
  { path: '**', redirectTo: 'one' }
];

const routes: Routes = [
  { path: environment.baseUrl, component: AppComponent, children: itemRoutes },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
