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
            console.log("chagnes made")

            this.theversionCheckService.initVersionCheck(
                  '../../ePortal/version.json'
            );
      }
}
