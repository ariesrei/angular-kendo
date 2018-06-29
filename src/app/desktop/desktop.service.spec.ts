import { TestBed, inject } from '@angular/core/testing';

import { DesktopService } from './desktop.service';

describe('DesktopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesktopService]
    });
  });

  it('should be created', inject([DesktopService], (service: DesktopService) => {
    expect(service).toBeTruthy();
  }));
});
