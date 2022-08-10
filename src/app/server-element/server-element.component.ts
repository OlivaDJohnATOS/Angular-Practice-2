import { element } from 'protractor';
import { Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, SimpleChanges, 
  DoCheck, AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  ViewChild, 
  ElementRef,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements 
OnInit, 
OnChanges,
DoCheck, 
 AfterContentInit,
 AfterContentChecked, 
 AfterViewInit,
 AfterViewChecked,
 OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: false}) header: ElementRef;
  @ContentChild('contentParagraph', {static: false}) paragraph: ElementRef;

  constructor() { 
    console.log('constructor called!');
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
    
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
    
  }

  ngDoCheck() {
    console.log('DoCheck called!');
    
  }

  ngAfterContentInit(){
    console.log('NgAfterContentInit called!');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked(): void {
    console.log('NgAfterContentChecked called!');
    
  }
  ngAfterViewInit(){
    console.log('NgAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);

  }

  ngAfterViewChecked(): void {
    console.log('NgAfterViewChecked called!');
    
  }

  ngOnDestroy(): void {
    console.log('NgOnDestroy called!');
    
  }

}
