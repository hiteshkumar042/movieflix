import { NgIf } from '@angular/common';
import { Component,EventEmitter,Input,input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isHome=false;
  @Output () backtoHomeEmit  = new EventEmitter()


  backtoHome(event:any){
    this.backtoHomeEmit.emit(event)
  }
}
