import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { ClaimComponent } from './claim/claim.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'terms-of-service', component: TermsOfServiceComponent},
  {path: 'claim', component: ClaimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
