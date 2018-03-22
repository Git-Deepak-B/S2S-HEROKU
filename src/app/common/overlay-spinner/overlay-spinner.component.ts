import {Component, Input, OnInit} from '@angular/core';
import {SpinnerService} from './spinner.service';

@Component({
  selector: 'app-overlay-spinner',
  templateUrl: './overlay-spinner.component.html',
  styleUrls: ['./overlay-spinner.component.scss']
})
export class OverlaySpinnerComponent implements OnInit {

  @Input() show: boolean;

  constructor(private _spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this._spinnerService.getSpinnerState().subscribe(state => this.show = state);
  }

}
