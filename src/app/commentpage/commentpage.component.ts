import { Component, OnInit } from '@angular/core';
import { DatalayerService } from '../data/datalayer.service';

@Component({
  selector: 'app-commentpage',
  templateUrl: './commentpage.component.html',
  styleUrls: ['./commentpage.component.scss']
})
export class CommentpageComponent implements OnInit {

  constructor(private readonly datalayer: DatalayerService) { }

  ngOnInit(): void {
    this.comments = this.datalayer.data.comments;
    this.replies = this.comments
    this.currentUser = this.datalayer.data.currentUser;
  }
  comments: any;
  replies: any;
  currentUser: any;

}

