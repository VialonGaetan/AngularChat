import { TestBed, inject } from "@angular/core/testing";

import {ChannelService} from "./channel.service";

describe("MessageService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChannelService]
    });
  });

  it("should ...", inject([ChannelService], (service: ChannelService) => {
    expect(service).toBeTruthy();
  }));
});
