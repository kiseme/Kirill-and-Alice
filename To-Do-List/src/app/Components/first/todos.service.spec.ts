// import { TestBed } from '@angular/core/testing';
// import { TodosService } from './todos.service';
// import { AuthService } from './auth.service';
// import { HttpClientModule } from '@angular/common/http';

// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { FirstComponent } from './first.component';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from 'src/app/app.component';

// describe ('TodosService',()=>{
//     let service: 
//     TodosService;
//     let authService = jasmine.createSpyObj('AuthService', ['isAuth']);

//     beforeEach(()=>{
//         TestBed.configureTestingModule({
//             imports: [
//                 RouterTestingModule,
//                 HttpClientTestingModule
//             ],
//             declarations:[
//                 AppComponent    
//             ],
//             providers: [{provide: AuthService, useValue: AuthService}]
//         }).compileComponents();
        
//         service = TestBed.inject(TodosService);
//         authService = TestBed.inject(AuthService);
//         });

//         describe('user is auth',() =>{
//             it('should be got label Exit',()=>{
//                 //Arrange
//                 authService.isAuth = jasmine.createSpy().and.returnValue(true);

//                 //Act
//                 const a = TestBed.createComponent(AppComponent);
//                 const fixture = TestBed.createComponent(FirstComponent);
//                 const label = fixture.nativeElement.querySelector('#loginButton');

//                 //Assert
//                 expect(label.textContent).toEqual('Выйти');
//             });
//         });
//     });