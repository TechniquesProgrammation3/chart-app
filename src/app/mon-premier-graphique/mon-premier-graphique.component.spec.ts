import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPremierGraphiqueComponent } from './mon-premier-graphique.component';

describe('MonPremierGraphiqueComponent', () => {
  let component: MonPremierGraphiqueComponent;
  let fixture: ComponentFixture<MonPremierGraphiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonPremierGraphiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonPremierGraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
