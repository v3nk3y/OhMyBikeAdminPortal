import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeAddComponent } from './bike-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

describe('BikeAddComponent', () => {
  let component: BikeAddComponent;
  let fixture: ComponentFixture<BikeAddComponent>;

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
      declarations: [BikeAddComponent],
      providers: [
        { provide: MatDialogRef, useValue: {}}, 
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(BikeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
