import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IngresoComponent } from './ingreso.component';
import { ClienteService } from '../service/cliente.service';

describe('IngresoComponent', () => {
  let component: IngresoComponent;
  let fixture: ComponentFixture<IngresoComponent>;
  let mockClienteService: any;

  beforeEach(async () => {
    mockClienteService = jasmine.createSpyObj('ClienteService', ['setCliente']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [IngresoComponent],
      providers: [{ provide: ClienteService, useValue: mockClienteService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty tipo and numero on init', () => {
    expect(component.tipo).toBe('');
    expect(component.numero).toBe('');
  });

  it('should have pattern set to cedula format initially', () => {
    expect(component.pattern).toBe("[0-9]{8,11}");
  });

  it('should change pattern when tipo changes to pasaporte', () => {
    component.tipo = 'pasaporte';
    component.changeValidation();
    expect(component.pattern).toBe("[A-Za-z0-9]+");
  });

  it('should change pattern back to cedula when tipo changes to cedula', () => {
    component.tipo = 'cedula';
    component.changeValidation();
    expect(component.pattern).toBe("[0-9]{8,11}");
  });
});

