import { Component, Input, OnInit } from '@angular/core';
import { DatalayerService } from '../data/datalayer.service';
import * as moment from 'moment';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.scss']
})
export class CommentboxComponent implements OnInit {
  @Input() comment: any;
  constructor(private readonly dataService: DatalayerService, private readonly localService: LocalService) { }

  ngOnInit(): void {
    this.coun = this.comment?.score;
    this.userComment = '@' + this.comment?.replyingTo + ' ' + this.comment?.content;
  }

  disable: boolean = true;
  coun: number = 0;

  get count() {
    return this.comment?.score + 20;
  }

  userComment: string = "";

  get duration() {
    return moment(this.comment.createdAt).fromNow();
  }

  get isCurrentUser() {
    return this.comment?.id == 4
  }
  updateComment() {
    let pos = this.dataService.data.comments[1].replies.map(val => val.id).indexOf(4);
    this.dataService.data.comments[1].replies[pos].content = this.userComment.substring(this.userComment.indexOf(' ') + 1);
    console.log(this.dataService.data.comments[1].replies[pos].content);
    this.localService.setLocal("data", this.dataService.data);
  }

  edit() { this.disable = false; }

  del(id: number) {
    confirm("Are you sure you want to delete this comment? This will be removed and can't be undone");

    this.dataService.data.comments.forEach(element => {
      let index = element.replies.findIndex(x => x.id === id);
      element.replies.splice(index, 1);
    });
    this.localService.setLocal("data", this.dataService.data);
  }

  plus(id: any) {
    this.coun += 1;
  }

  minus() {
    this.coun -= 1;
  }
}






function substr(arg0: number): string {
  throw new Error('Function not implemented.');
}

