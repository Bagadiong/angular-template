import { Component, OnInit } from '@angular/core';
import { faSmoking } from '@fortawesome/free-solid-svg-icons';
import {faTachometerAlt} from '@fortawesome/free-solid-svg-icons'
import {faStore} from '@fortawesome/free-solid-svg-icons'
import {faCog} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  faSmoking= faSmoking
  faTachometerAlt=faTachometerAlt
  faStore=faStore
  faCog=faCog
  constructor() { }

  ngOnInit() {
  }

}
