// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler, NO_ERRORS_SCHEMA, InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// 3rd Party Modules
import { MomentModule } from 'angular2-moment';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { NgPipesModule } from 'ngx-pipes';
import { CustomIconsModule } from 'ionic2-custom-icons';
// Native Plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';
// Environment Module
import { EnvironmentsModule } from './environments/environments.module';
// App Component
import { AlcomyAppComponent } from './app.component';
// Login Page
import { LoginPage } from '../pages/login/login';
// Dashboard Pages
import { DashboardTabsPage } from '../pages/dashboard/dashboard-tabs/dashboard-tabs';
import { DashboardMedicationsPage } from '../pages/dashboard/dashboard-medications/dashboard-medications';
import { PassMedicationsPage } from '../pages/dashboard/pass-medications/pass-medications';
import { DashboardWatchlistPage } from '../pages/dashboard/dashboard-watchlist/dashboard-watchlist';
import { TasksPage } from '../pages/dashboard/tasks/tasks';
// Residents Pages
import { ResidentsTabsPage } from '../pages/residents/residents-tabs/residents-tabs';
import { ResidentsListPage } from '../pages/residents/residents-list/residents-list';
import { ResidentsGroupsPage } from '../pages/residents/residents-groups/residents-groups';
// Resident Detail Pages
import { ResidentDetailTabsPage } from '../pages/residents/resident-detail/resident-detail-tabs/resident-detail-tabs';
import { ResidentDetailFacesheetPage } from '../pages/residents/resident-detail/resident-detail-facesheet/resident-detail-facesheet';
import { ResidentDetailMedicationsPage } from '../pages/residents/resident-detail/resident-detail-medications/resident-detail-medications';
import { ResidentDetailCarePage } from '../pages/residents/resident-detail/resident-detail-care/resident-detail-care';
import { ResidentDetailNotebookPage } from '../pages/residents/resident-detail/resident-detail-notebook/resident-detail-notebook';
import { ResidentDetailReportsPage } from '../pages/residents/resident-detail/resident-detail-reports/resident-detail-reports';
// Staff Pages
import { StaffTabsPage } from '../pages/staff/staff-tabs/staff-tabs';
import { StaffListPage } from '../pages/staff/staff-list/staff-list';
import { StaffGroupsPage } from '../pages/staff/staff-groups/staff-groups';
// Company Pages
import { CompanyTabsPage } from '../pages/company/company-tabs/company-tabs';
import { FacilityListPage } from '../pages/company/facility-list/facility-list';
import { FacilityTabsPage } from '../pages/company/facility-detail/facility-tabs/facility-tabs';
import { FacilityProfilePage } from '../pages/company/facility-detail/facility-profile/facility-profile';
import { FacilityRoomsPage } from '../pages/company/facility-detail/facility-rooms/facility-rooms';
// Forms Pages
import { NewTaskFormPage } from '../pages/shared/forms/new-task/new-task';
import { NewWatchItemFormPage } from '../pages/shared/forms/new-watch-item/new-watch-item';
import { PrnResponseFormPage } from '../pages/shared/forms/prn-response/prn-response';
import { NewFacilityFormPage } from '../pages/shared/forms/new-facility/new-facility';
import { NewResidentFormPage } from '../pages/shared/forms/new-resident/new-resident';
import { NewMedicationFormPage } from '../pages/shared/forms/new-medication/new-medication';
// Popover Pages
import { QuickAddMenuPage } from '../pages/shared/popovers/quick-add-menu/quick-add-menu';
import { PrnCardComponent } from './shared/prn-card/prn-card.component';
import { WatchItemDetailPage } from '../pages/dashboard/watch-item-detail/watch-item-detail';
import { MenuButtonToggleDirective } from './shared/menu-button-toggle/menu-button-toggle.directive';
import { QuickAddDirective } from './shared/quick-add/quick-add.directive';
import { FacilityProfileMorePopover } from '../pages/shared/popovers/facility-profile-more/facility-profile-more';
// Menu Pages
import { NotificationMenuPage } from '../pages/shared/menus/notification-menu/notification-menu.component';
// Real Services
import { AuthService } from './core/auth/auth.service';
import { AccountService } from './core/account/account.service';
import { EmployeeService } from './core/employee/employee.service';
import { FacilityService } from './core/facility/facility.service';
import { MedicationsService } from './core/medications/medications.service';
import { NotificationService } from './core/notification/notification.service';
import { ResidentsService } from './core/residents/residents.service';
import { TaskService } from './core/task/task.service';
import { UserService } from './core/user/user.service';
// Mock Services
import { AccountMockService } from './core/account/account-mock.service';
import { AuthMockService } from './core/auth/auth-mock.service';
import { MedicationsMockService } from './core/medications/medications-mock.service';
import { NotificationMockService } from './core/notification/notification-mock.service';
import { EmployeeMockService } from './core/employee/employee-mock.service';
import { FacilityMockService } from './core/facility/facility-mock.service';
import { ResidentsMockService } from './core/residents/residents-mock.service';
import { TaskMockService } from './core/task/task-mock.service';
import { UserMockService } from './core/user/user-mock.service';
// Components
import { CardSliderComponent } from './shared/card-slider/card-slider.component';
import { YesNoPipe } from './shared/pipes/yesNo.pipe';
import { TaskHeaderComponent } from './shared/task-header/task-header.component';
import { TaskListComponent } from './shared/task-list/task-list.component';
import { TaskListItemComponent } from './shared/task-list-item/task-list-item.component';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { PanelComponent } from './shared/accordion-panel/panel.component';
import { ExpansionHeaderComponent } from './shared/expansion-header/expansion-header.component';
import { StoreModule } from '@ngrx/store/src/store_module';
import { reducers } from './store/reducers';

// Configurations
import { APIS } from '../config/urls.config';

const BASE_API = new InjectionToken<string>('baseApi');

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot(AlcomyAppComponent, {
      iconMode: 'md'
    }),
    StoreModule.forRoot(reducers),
    NgPipesModule,
    NgxErrorsModule,
    MomentModule,
    CustomIconsModule
  ],
  declarations: [
    AlcomyAppComponent,
    // Pages
    DashboardTabsPage,
    DashboardMedicationsPage,
    DashboardWatchlistPage,
    PassMedicationsPage,
    TasksPage,
    ResidentsTabsPage,
    ResidentsListPage,
    ResidentsGroupsPage,
    ResidentDetailTabsPage,
    ResidentDetailFacesheetPage,
    ResidentDetailMedicationsPage,
    ResidentDetailCarePage,
    ResidentDetailNotebookPage,
    ResidentDetailReportsPage,
    StaffTabsPage,
    StaffListPage,
    StaffGroupsPage,
    CompanyTabsPage,
    FacilityListPage,
    FacilityTabsPage,
    FacilityProfilePage,
    FacilityRoomsPage,
    NewTaskFormPage,
    QuickAddMenuPage,
    PrnResponseFormPage,
    WatchItemDetailPage,
    FacilityProfileMorePopover,
    // Form Pages
    NewFacilityFormPage,
    NewWatchItemFormPage,
    NewResidentFormPage,
    NewMedicationFormPage,
    NewTaskFormPage,
    NewWatchItemFormPage,
    LoginPage,
    // Menu Pages
    NotificationMenuPage,
    // Components
    PrnCardComponent,
    CardSliderComponent,
    TaskHeaderComponent,
    TaskListComponent,
    TaskListItemComponent,
    AccordionComponent,
    PanelComponent,
    ExpansionHeaderComponent,
    // Directives
    MenuButtonToggleDirective,
    QuickAddDirective,
    // Pipes
    YesNoPipe,
  ],
  entryComponents: [
    AlcomyAppComponent,
    DashboardTabsPage,
    DashboardMedicationsPage,
    PassMedicationsPage,
    DashboardWatchlistPage,
    TasksPage,
    ResidentsTabsPage,
    ResidentsListPage,
    ResidentsGroupsPage,
    ResidentDetailTabsPage,
    ResidentDetailFacesheetPage,
    ResidentDetailMedicationsPage,
    ResidentDetailCarePage,
    ResidentDetailNotebookPage,
    ResidentDetailReportsPage,
    StaffTabsPage,
    StaffListPage,
    StaffGroupsPage,
    CompanyTabsPage,
    FacilityListPage,
    FacilityTabsPage,
    FacilityProfilePage,
    FacilityRoomsPage,
    QuickAddMenuPage,
    PrnResponseFormPage,
    WatchItemDetailPage,
    FacilityProfileMorePopover,
    // Form Pages
    NewFacilityFormPage,
    NewResidentFormPage,
    NewMedicationFormPage,
    NewTaskFormPage,
    NewWatchItemFormPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    { provide: AccountService, useClass: AccountMockService },
    { provide: AuthService, useClass: AuthMockService },
    { provide: EmployeeService, useClass: EmployeeMockService },
    { provide: FacilityService, useClass: FacilityService },
    { provide: MedicationsService, useClass: MedicationsMockService },
    { provide: NotificationService, useClass: NotificationMockService },
    { provide: ResidentsService, useClass: ResidentsMockService },
    { provide: UserService, useClass: UserMockService },
    { provide: TaskService, useClass: TaskMockService },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [IonicApp]
})
export class AppModule {}
