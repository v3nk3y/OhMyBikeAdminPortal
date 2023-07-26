import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeEditComponent } from './bike-edit.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

describe('BikeEditComponent', () => {
  let component: BikeEditComponent;
  let fixture: ComponentFixture<BikeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule, 
        MatDialogModule, 
        MatSnackBarModule, 
        FormsModule, 
        ReactiveFormsModule, 
        MatSelectModule, 
        MatInputModule],
      declarations: [BikeEditComponent],
      providers: [
        { provide: MatDialogRef, useValue: {}}, 
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(BikeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
