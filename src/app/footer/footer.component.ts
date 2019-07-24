import { Component, OnInit } from '@angular/core';
import { klerm } from '../klerm';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  student: klerm = {
    sid:991498797,
    slogin:'klerm',
    sname:'Manmit Singh Kler',
    scampus:'Davis',
    atitle:'Assignment 3'
  };
}
