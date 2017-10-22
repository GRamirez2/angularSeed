import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexasArtistsComponent } from './texas-artists.component';

describe('TexasArtistsComponent', () => {
  let component: TexasArtistsComponent;
  let fixture: ComponentFixture<TexasArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexasArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TexasArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
