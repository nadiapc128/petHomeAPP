import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {UserService} from '../providers/user-service';
import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
import { DetallePage } from '../pages/detalle/detalle';


@NgModule({
  declarations: [
    MyApp,    
    HomePage,
    InicioPage,
    DetallePage
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    HomePage,
    InicioPage,
    DetallePage
    
  ],
  providers: [UserService]
})
export class AppModule {}
