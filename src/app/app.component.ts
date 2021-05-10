import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  PlayerCoords: number[] | string = "Test";
  PlayerRotation: number[] | string = "";

  EntityModel: number[] | string = "";
  EntityCoords: number[] | string = "";
  EntityRotation: number[] | string = "";
  EntityMaterial: number[] | string = "";
  EntityNetworkID: number[] | string = "";
}
