import { Component, OnInit } from '@angular/core';
import { klerm } from '../klerm';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
