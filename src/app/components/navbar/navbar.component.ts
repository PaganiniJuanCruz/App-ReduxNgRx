import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store/app-state.model';
import { appTitleSelector } from 'src/app/store/app.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  title$: Observable<string> = of('');

  ngOnInit(): void {
    this.title$ = this.store.pipe(
      select(appTitleSelector)
    );
  }

}
