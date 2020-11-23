import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import { AuthService } from "./auth.service";
import { AppRoutingModule } from "../../app-routing.module";
import { TodosService } from "./todos.service";

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;
  let authService = jasmine.createSpyObj('AuthService', ['getAuth']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [ FirstComponent ],
      providers: [{provide: AuthService, useValue: authService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('user is auth',() =>{
    it('should be got label Exit',()=>{
      authService.getAuth = jasmine.createSpy().and.returnValue(true);

      //Act
      fixture = TestBed.createComponent(FirstComponent);
      const label = fixture.nativeElement.querySelector('#loginButton');
      console.log(label);

      fixture.detectChanges();

      //Assert
      expect(label.textContent).toEqual('Выйти');
    });
  });
});
