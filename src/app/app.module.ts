import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {UserService} from '../providers/user-service';
import { HomePage } from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,    
    HomePage
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    HomePage
    
  ],
  providers: [UserService]
})
export class AppModule {}
