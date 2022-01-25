import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSetTitle } from 'src/app/store/app.action';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(
      AppSetTitle({title: 'Component One'})
    );
  }

}
