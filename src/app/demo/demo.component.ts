import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, AfterContentInit {
  ngOnInit():void {
  console.log(this.paragraphElement);
  }
  ngAfterContentInit(){
    this.paragraphElement.nativeElement.textContent= 'This is new paragraph from child component class.'
    console.log(this.paragraphElement.nativeElement.textContent);
  }
@ContentChild('paraghraph') paragraphElement :ElementRef;
}
