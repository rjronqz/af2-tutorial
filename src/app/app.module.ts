import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Import the AF2 Module 
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
   apiKey: "AIzaSyCnW0yg_baMl5vK1Xi-BWM-XXR98zWDGu4",
   authDomain: "projects-97525.firebaseapp.com",
   databaseURL: "https://projects-97525.firebaseio.com",
   storageBucket: "projects-97525.appspot.com",
   messagingSenderId: "42903088517"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
