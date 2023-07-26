import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Shared Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';


// Shared Components
import { ShellComponent } from './components/shell/shell.component';
import { BikeCardComponent } from './components/bike-card/bike-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BikeEditComponent } from './components/bike-edit/bike-edit.component';
import { BikeDeleteComponent } from './components/bike-delete/bike-delete.component';
import { BikeAddComponent } from './components/bike-add/bike-add.component';

const modules = [ 
  CommonModule,
  RouterModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  ReactiveFormsModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSelectModule
];

const components = [ ShellComponent, BikeCardComponent, BikeEditComponent, BikeDeleteComponent, BikeAddComponent ];

@NgModule({
  declarations: [ ...components ],
  imports: [ ...modules ],
  exports: [ ...modules, ...components ]
})
export class SharedModule { }
