import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  name='';
  count=0;
  addone(){
    this.count++;
    if(this.count == 18){
    this.count-=3;
  }
  }
  

}
