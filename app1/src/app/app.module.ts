import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { MyDataService } from './my-data.service';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { SortPipe } from './app.sorts';
import { RegistrationComponent } from './registration/registration.component';
import { MyTitleCasePipe } from './my-title-case.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    MyComponentComponent,
    ProductComponent,
    MembersComponent,
    RegistrationComponent,
    MyTitleCasePipe,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'member',
        component: MembersComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      }
    ])
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
