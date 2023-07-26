import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    AngularFireAuthModule
  ]
})
export class AdminLoginModule { }
