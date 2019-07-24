import { Component, OnInit } from '@angular/core';
import{ SONG } from '../../assets/data/song';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  mysongs = SONG;
  songName:string;
  artist:string;
  yearReleased:string;
  image:string;
  genre:string;

  constructor() {
    //this.songName=this.mysongs[0].songName;
   }
    


  ngOnInit() {
  }
   
      Show(myNum:number):void{
        this.songName=this.mysongs[myNum].songname;
        this.artist=this.mysongs[myNum].artist;
        this.yearReleased=this.mysongs[myNum].year;
        this.genre=this.mysongs[myNum].genre;
     }

}