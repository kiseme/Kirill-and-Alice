import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodoComponent } from './view-todo.component';
import { AppRoutingModule } from "../../app-routing.module";
import { AuthService } from "../first/auth.service"
import { TodosService } from '../first/todos.service'

describe('ViewTodoComponent', () => {
  let component: ViewTodoComponent;
  let fixture: ComponentFixture<ViewTodoComponent>;
  let authService = jasmine.createSpyObj('AuthService', ['getAuth'])
  let todosService = jasmine.createSpyObj('TodosService', ['getCurrentTodo'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [ ViewTodoComponent ],
      providers: [{provide: AuthService, useValue: authService}, {provide: TodosService, useValue: todosService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('user is auth', () =>{
    it('should be got title Cake',()=>{
      todosService.getCurrentTodo = jasmine.createSpy().and.returnValue({
        name: 'Buy cake',
        description: 'Go to shop and buy cake',
        done: false,
        id: 10
      })
      component.ngOnInit()

      //Act
      fixture = TestBed.createComponent(ViewTodoComponent);
      const title = fixture.nativeElement.querySelector('.title')

      fixture.detectChanges();

      //Assert
      expect(title.textContent).toEqual('Buy cake')
    });
  });
});
