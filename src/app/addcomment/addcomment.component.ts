import { Component, Input, OnInit } from '@angular/core';
import { DatalayerService } from '../data/datalayer.service';
import * as moment from 'moment';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.scss']
})
export class AddcommentComponent implements OnInit {

  constructor(private readonly dataService: DatalayerService, private readonly localService: LocalService) { }
  @Input() currentUser: any
  ngOnInit(): void {
  }
  userComment: string = "";
  addComment() {
    let cmte = {
      "id": 4,
      "content": this.userComment,
      "createdAt": moment().toString(),
      "score": 0,
      "replyingTo": "lukeskywalker",
      "user": {
        "image": {
          "png": "./assets/images/avatars/yoda.png"
        },
        "username": "vader"
      }
    }
    this.dataService.data.comments[1].replies.push(cmte);
    this.localService.setLocal("data", this.dataService.data);
  }
}
