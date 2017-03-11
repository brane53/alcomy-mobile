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

let component: MyApp;
let fixture: ComponentFixture<MyApp>;

describe('Component: Root Component', () => {

  beforeEach(async(() => {
    console.log('TestBed: ',TestBed);
    TestBed.configureTestingModule({

      declarations: [
        MyApp
      ],

      providers: [
        App, Form, Keyboard, DomController, MenuController, NavController,
        {provide: Platform, useClass: PlatformMock},
        {provide: Config},
        MockNotificationService
      ],

      imports: [
        IonicModule.forRoot(MyApp, {
          iconMode: 'md'
        }),
        FormsModule,
        MomentModule,
        CustomIconsModule,
        NgPipesModule

      ],
      schemas: [NO_ERRORS_SCHEMA]

    }).compileComponents().then(()=>{
      console.log('TestBed Fixture: ', TestBed.createComponent(MyApp));
    });
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
    console.log('AppFixture', fixture);
  });
    

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('is created', () => {
    console.log('APP fixture: ', fixture);
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();

  });

  it('initialises with a root page of HomePage', () => {
    expect(component['rootPage']).toBe(DashboardTabsPage);
  });


});