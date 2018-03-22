import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProvisionListComponent } from './provision/provision-list/provision-list.component';
import { CreateProvisionComponent } from './provision/create-provision/create-provision.component';
import { ProvisionDetailComponent } from './provision/provision-detail/provision-detail.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CreateUserComponent } from './account/create-user/create-user.component';
import { AuthGuardService } from './services/auth-guard.service';
import {CanDeactivateGuardService} from './services/can-deactivate-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashboardComponent, canActivate: [AuthGuardService], data: { roles: ['admin', 'customer'] } },
  { path: 'provisions', component: ProvisionListComponent },
  { path: 'provision/create', component: CreateProvisionComponent, canDeactivate: [CanDeactivateGuardService] },
  { path: 'provision/:id', component: ProvisionDetailComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'user/create', component: CreateUserComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
