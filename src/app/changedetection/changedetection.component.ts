import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-changedetection',
  templateUrl: './changedetection.component.html',
  styleUrls: ['./changedetection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangedetectionComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit() {
  }

}
