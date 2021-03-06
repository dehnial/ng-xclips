import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  public gamertag: string = "";

  public constructor(
    private router: Router
  ) { }

  public keyUp(event: KeyboardEvent): void {
    if (event.code == 'Enter') {
      this.router.navigateByUrl(`/${this.gamertag}`);
    }
  }
}
