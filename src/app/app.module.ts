import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { CreateUserComponent } from './account/create-user/create-user.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { HeaderComponent } from './global/header/header.component';
import { NavigatorComponent } from './global/navigator/navigator.component';
import { CreateProvisionComponent } from './provision/create-provision/create-provision.component';
import { ProvisionDetailComponent } from './provision/provision-detail/provision-detail.component';
import { ProvisionListComponent } from './provision/provision-list/provision-list.component';
import { ProvisionListItemComponent } from './provision/provision-list-item/provision-list-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TitlecasePipe } from './common/pipes/titlecase.pipe';
import { AddressPipe } from './common/pipes/address.pipe';
import { StatisticsComponent } from './global/statistics/statistics.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerListItemComponent } from './customer/customer-list-item/customer-list-item.component';
import { AuthorizationService } from './services/authorization.service';
import { StorageService } from './services/storage.service';
import { UserStoreService } from './stores/user-store.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { mockAPIProvider, tokenProvider } from './helpers';
import { ProvisionTableComponent } from './provision/provision-table/provision-table.component';
import { DashStatusService } from './services/dash-status.service';
import { DataTablesModule } from 'angular-datatables';
import { ProvisionService } from './services/provision.service';
import { CustomerTableComponent } from './customer/customer-table/customer-table.component';
import { UserService } from './services/user.service';
import { EditCustomerDataService } from './services/edit-customer-data.service';
import { setupUser } from './services/app-init-provider';
import { AuthGuardService } from './services/auth-guard.service';
import {DatePickerDirective} from 'bootstrap-material-datetimepicker';
import { DateTimePickerDirective } from './directives/date-time-picker.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    ProvisionTableComponent,
    CustomerTableComponent,
    DateTimePickerDirective
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
  providers: [
    StorageService,
    UserStoreService,
    AuthorizationService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupUser,
      multi: true,
      deps: [
        StorageService,
        AuthorizationService,
        UserStoreService
      ]
    },
    mockAPIProvider,
    tokenProvider,
    DashStatusService,
    ProvisionService,
    UserService,
    EditCustomerDataService,
    AuthGuardService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}


