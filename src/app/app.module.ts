import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { AngularFireModule } from 'angularfire2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CustomIconsModule } from 'ionic2-custom-icons';
import { MomentModule } from 'angular2-moment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgPipesModule } from 'ngx-pipes';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { MyAppComponent } from './app.component';
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
// Forms Pages
import { NewTaskPage } from '../pages/shared/forms/new-task/new-task';
import { NewWatchItemPage } from '../pages/shared/forms/new-watch-item/new-watch-item';
// Popover Pages
import { QuickAddMenuPage } from '../pages/shared/popovers/quick-add-menu/quick-add-menu';
import { PrnResponsePage } from '../pages/shared/forms/prn-response/prn-response';
import { PrnCardComponent } from './shared/prn-card/prn-card.component';
import { WatchItemDetailPage } from '../pages/dashboard/watch-item-detail/watch-item-detail';
import { MenuButtonToggleDirective } from './shared/menu-button-toggle/menu-button-toggle.directive';
import { QuickAddDirective } from './shared/quick-add/quick-add.directive';
import { StaffTabsPage } from '../pages/staff/staff-tabs/staff-tabs';
import { StaffListPage } from '../pages/staff/staff-list/staff-list';
import { StaffGroupsPage } from '../pages/staff/staff-groups/staff-groups';
// Mock Services
import { AccountMockService } from './core/account-mock.service';
import { AuthMockService } from './core/auth-mock.service'
import { ResidentsMockService } from './core/residents-mock.service';
import { MedicationsMockService } from './core/medications-mock.service';
import { NotificationMockService } from './core/notification-mock.service';
import { EmployeeMockService } from './core/employee-mock.service';
// 
import { CardSliderComponent } from './shared/card-slider/card-slider.component';
import { ResidentDetailTabsPage } from '../pages/residents/resident-detail/resident-detail-tabs/resident-detail-tabs';
import { ResidentDetailFacesheetPage } from '../pages/residents/resident-detail/resident-detail-facesheet/resident-detail-facesheet';
import { ResidentDetailMedicationsPage } from '../pages/residents/resident-detail/resident-detail-medications/resident-detail-medications';
import { ResidentDetailCarePage } from '../pages/residents/resident-detail/resident-detail-care/resident-detail-care';
import { ResidentDetailNotebookPage } from '../pages/residents/resident-detail/resident-detail-notebook/resident-detail-notebook';
import { ResidentDetailReportsPage } from '../pages/residents/resident-detail/resident-detail-reports/resident-detail-reports';
import { YesNoPipe } from './shared/pipes/yesNo.pipe';
import { AuthService } from './core/auth.service';
import { AccountService } from './core/account.service';
import { EmployeeService } from './core/employee.service';
import { FacilityService } from './core/facility.service';
import { MedicationsService } from './core/medications.service';
import { NotificationService } from './core/notification.service';
import { ResidentsService } from './core/residents.service';
import { UserService } from './core/user.service';
import { NewFacilityPage } from '../pages/shared/forms/new-facility/new-facility';
import { NewResidentPage } from '../pages/shared/forms/new-resident/new-resident';
import { NewMedicationPage } from '../pages/shared/forms/new-medication/new-medication';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlcomyMockApi } from './core/alcomyMockApi';
import { TaskHeaderComponent } from './shared/task-header/task-header.component';
import { FacilityMockService } from './core/facility-mock.service';
import { UserMockService } from './core/user-mock.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(AlcomyMockApi),
    IonicModule.forRoot(MyAppComponent, {
      iconMode: 'md'
    }),
    FlexLayoutModule,
    NgPipesModule,
    NgxErrorsModule,
    MomentModule,
    CustomIconsModule
  ],
  declarations: [
    MyAppComponent,
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
    NewTaskPage,
    NewWatchItemPage,
    QuickAddMenuPage,
    PrnResponsePage,
    WatchItemDetailPage,
    StaffTabsPage,
    StaffListPage,
    StaffGroupsPage,
    // Form Pages
    NewFacilityPage,
    NewResidentPage,
    NewMedicationPage,
    NewTaskPage,
    NewWatchItemPage,
    LoginPage,
    // Components
    PrnCardComponent,
    CardSliderComponent,
    // Directives
    MenuButtonToggleDirective,
    QuickAddDirective,
    // Pipes
    YesNoPipe,
    TaskHeaderComponent
  ],
  entryComponents: [
    MyAppComponent,
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
    QuickAddMenuPage,
    PrnResponsePage,
    WatchItemDetailPage,
    StaffTabsPage,
    StaffListPage,
    StaffGroupsPage,

    // Form Pages
    NewFacilityPage,
    NewResidentPage,
    NewMedicationPage,
    NewTaskPage,
    NewWatchItemPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: AccountService, useClass: AccountMockService},
    {provide: AuthService, useClass: AuthMockService},
    {provide: EmployeeService, useClass: EmployeeMockService},
    {provide: FacilityService, useClass: FacilityMockService},
    {provide: MedicationsService, useClass: MedicationsMockService},
    {provide: NotificationService, useClass: NotificationMockService},
    {provide: ResidentsService, useClass: ResidentsMockService},
    {provide: UserService, useClass: UserMockService},
    {provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
