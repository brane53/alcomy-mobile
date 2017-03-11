import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController, Platform, MenuController, ModalController, Config, App, Form, Keyboard, DomController } from 'ionic-angular';
import { MyApp } from '../../../app/app.component';
import { TasksPage } from './tasks';
import { MomentModule } from 'angular2-moment';
import { PlatformMock, MenuMock, NavMock, ModalMock, ConfigMock } from '../../../mocks/mocks';

let component: TasksPage;
let fixture: ComponentFixture<TasksPage>;
let de = DebugElement;
let el = HTMLElement;


describe('Component: TasksPage', () => {
  // async beforeEach
  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ 
        TasksPage 
      ],
      providers: [
        App, Form, Keyboard, DomController, MenuController, NavController,
        { provide: Platform, useClass: PlatformMock },
        { provide: Config, useClass: ConfigMock},
        { provide: NavController, useClass: NavMock },
        { provide: ModalController, useClass: ModalMock}
      ],
      imports: [
        IonicModule,
        MomentModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    //.compileComponents(); // compile template and css

    console.log('BRANE', TestBed);
  });

  
  beforeEach(() => {
    fixture = TestBed.createComponent(TasksPage);
    component = fixture.componentInstance;

    console.log('FIXTURE: ');
  });
    

  afterEach(() => {
    fixture.destroy();
    component = null;
    de = null;
    el = null;
  });



  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });
    
});
  