import { TestBed } from '@angular/core/testing';

import { RestUsuarioService } from './rest-usuarios.service';

describe('RestUsuarioService', () => {
  let service: RestUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
