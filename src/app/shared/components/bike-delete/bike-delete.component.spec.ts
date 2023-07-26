import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeDeleteComponent } from './bike-delete.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('BikeDeleteComponent', () => {
  let component: BikeDeleteComponent;
  let fixture: ComponentFixture<BikeDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      declarations: [BikeDeleteComponent],
      providers: [
        { provide: MatDialogRef, useValue: {}}, 
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(BikeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
