import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { authGuard } from './core/guards/auth.guard';
import { InventoryComponent } from './modules/inventory/inventory.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [authGuard],  title: 'OMB - Home'},
  { path: 'inventory', component: InventoryComponent, canActivate: [authGuard], title: 'OMB - Inventory'},
  { path: 'admin-login', component: AdminLoginComponent, title: 'OMB - Admin Login'},
  { path: '**', redirectTo: '/home' }, // Redirect all other undefined routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
