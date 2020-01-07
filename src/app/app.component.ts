import { Component, OnInit } from "@angular/core";
import { VersionCheckService } from "./version-check.service";

@Component({
      selector: "car-root",
      templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
      title = 'Car Deko';

      constructor(private theversionCheckService: VersionCheckService) {}

      ngOnInit() {
            this.theversionCheckService.initVersionCheck(
                  '../../dist/version.json'
            );
      }
}
