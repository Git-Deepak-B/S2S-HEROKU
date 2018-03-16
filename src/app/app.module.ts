import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AppRoutingModule} from './app-routing.module';
import {CreateUserComponent} from './user/create-user/create-user.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './account/login/login.component';
import {RegisterComponent} from './account/register/register.component';
import {HeaderComponent} from './global/header/header.component';
import {NavigatorComponent} from './global/navigator/navigator.component';
import {CreateProvisionComponent} from './provision/create-provision/create-provision.component';
import {ProvisionDetailComponent} from './provision/provision-detail/provision-detail.component';
import {ProvisionListComponent} from './provision/provision-list/provision-list.component';
import {ProvisionListItemComponent} from './provision/provision-list-item/provision-list-item.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TitlecasePipe} from './common/pipes/titlecase.pipe';
import {AddressPipe} from './common/pipes/address.pipe';
import {StatisticsComponent} from './global/statistics/statistics.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerListItemComponent} from './customer/customer-list-item/customer-list-item.component';
import {AuthorizationService} from './services/authorization.service';
import {StorageService} from './services/storage.service';
import {UserStoreService} from './stores/user-store.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {mockAPIProvider, tokenProvider} from './helpers';
import {ProvisionTableComponent} from './provision/provision-table/provision-table.component';
import {DashStatusService} from './services/dash-status.service';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    NavigatorComponent,
    CreateProvisionComponent,
    ProvisionDetailComponent,
    ProvisionListComponent,
    ProvisionListItemComponent,
    DashboardComponent,
    TitlecasePipe,
    AddressPipe,
    StatisticsComponent,
    CustomerListComponent,
    CustomerListItemComponent,
    CreateUserComponent,
    ProvisionTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthorizationService,
    StorageService,
    UserStoreService,
    mockAPIProvider,
    tokenProvider,
    DashStatusService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
