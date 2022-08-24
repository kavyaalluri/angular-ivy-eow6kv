import { Component, OnInit, VERSION } from '@angular/core';
import { Iuser } from './user';
import { OneService } from './one.service';
//import { Observable } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private _http: OneService) {}

  public User: Iuser[] = [] as Iuser[];
  ngOnInit() {
    this._http.getData().subscribe((data: Iuser[]) => {
      this.User = data;
    });
  }
}
