import { Component,Input,input, OnInit, signal } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-moviedetails',
  standalone: true,
  imports: [MatChipsModule,MatIconModule],
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.scss'
})
export class MoviedetailsComponent implements OnInit {
  @Input() selectedMovie: any;
  Actors= signal([]);

  ngOnInit(): void {
    window.scrollTo(0, 0);

  }

}
