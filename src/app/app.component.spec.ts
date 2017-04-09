import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, Platform, MenuController, App, Form, Keyboard, DomController, NavController, Config } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardTabsPage } from '../pages/dashboard/dashboard-tabs/dashboard-tabs';
import { NgPipesModule } from 'ngx-pipes';
import { MomentModule } from 'angular2-moment';
import { CustomIconsModule } from 'ionic2-custom-icons';
import { FormsModule } from '@angular/forms';
import { PlatformMock, MenuMock, ConfigMock } from '../mocks/mocks';
import { MockNotificationService } from './core/notification-mock.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

let component: MyApp;
let fixture: ComponentFixture<MyApp>;

describe('Component: Root Component', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(MyApp),
        FormsModule,
        MomentModule,
        CustomIconsModule,
        NgPipesModule

      ],
      declarations: [
        MyApp
      ],
      providers: [
        {provide: Config, useClass: ConfigMock},
        MenuController,
        NavController,
        {provide: Platform, useClass: PlatformMock},
        StatusBar,
        SplashScreen,
        MockNotificationService
      ],

      schemas: [NO_ERRORS_SCHEMA]

    });
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });
    

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('initialises with a root page of DashboardTabsPage', () => {
    expect(component['rootPage']).toBe(DashboardTabsPage);
  });


});