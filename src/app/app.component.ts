import { Component } from "@angular/core";
import { of, Observable } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  constructor() {
    setTimeout(() => {
      this.setData()
    }, 2000)
  }

  public users$ = new Observable(obs => {
    obs.next("tushar 1");
  });

  setData() {
    this.users$ = new Observable(obs => {
      obs.next("tushar");
    });
  }
}
