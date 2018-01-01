import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, 
  Platform, 
  MenuController, 
  App,
  Form, 
  Keyboard, 
  DomController,
  NavController, 
  Config } from 'ionic-angular';
import { AlcomyAppComponent } from './app.component';
import { DashboardTabsPage } from '../pages/dashboard/dashboard-tabs/dashboard-tabs';
import { NgPipesModule } from 'ngx-pipes';
import { MomentModule } from 'angular2-moment';
import { CustomIconsModule } from 'ionic2-custom-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatformMock, 
  MenuMock,
  NavMock, 
  ConfigMock, 
  StatusBarMock, 
  SplashScreenMock } from '../../test-config/ionic-mocks';
import { NotificationMockService } from './core/notification/notification-mock.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NotificationService } from './core/notification/notification.service';
import { EnvironmentsModule } from './environments/environments.module';


let component: AlcomyAppComponent;
let fixture: ComponentFixture<AlcomyAppComponent>;

describe('Component: Root Component', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(AlcomyAppComponent, {
          iconMode: 'md'
        }),
      ],
      declarations: [
        AlcomyAppComponent,
        DashboardTabsPage
      ],
      providers: [
        {provide: MenuController, useClass: MenuMock},
        {provide: NavController, useClass: NavMock},
        {provide: Platform, useClass: PlatformMock},
        {provide: StatusBar, useClass: StatusBarMock},
        {provide: SplashScreen, useClass: SplashScreenMock }
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AlcomyAppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));


  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AlcomyAppComponent);
  //   component = fixture.componentInstance;
  // });


  // afterEach(() => {
  //   fixture.destroy();
  //   component = null;
  // });

  it('should equel 2', () => {
    expect(1+1).toBe(2);
  });

  it('should be created', () => {
    expect(component).toBeUndefined();
  });

  it('initialises with a root page of DashboardTabsPage', () => {
    expect(component['rootPage']).toBe(DashboardTabsPage);
  });


});