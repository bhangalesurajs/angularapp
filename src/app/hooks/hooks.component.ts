import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements 
OnInit,
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input() message: string;
  constructor() { 
    console.log('constructor called')
  }  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }  
  ngOnInit() {
    console.log('ngOnIt called')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
  

}
