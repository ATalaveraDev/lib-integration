import { TestBed } from '@angular/core/testing';

import { LoriotUiService } from './loriot-ui.service';

describe('LoriotUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoriotUiService = TestBed.get(LoriotUiService);
    expect(service).toBeTruthy();
  });
});
