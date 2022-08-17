import { Component, OnInit } from '@angular/core';
import { LocalService } from './services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'challenge';

  constructor(private readonly localService: LocalService) {
    if (!this.localService.getLocal("data")) {
      this.localService.setLocal("data", data)
    }

  }

}



var data =
{
  "currentUser": {
    "image": {
      "png": "./assets/images/avatars/yoda.png"
    },
    "username": "yoda"
  },
  "comments": [
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "2022-04-10T13:49:51.141Z",
      "score": 12,
      "user": {
        "image": {
          "png": "./assets/images/avatars/leiaskywalker.png"
        },
        "username": "leiaskywalker"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into Angular as well soon. Perhaps you can give me an insight on where I can learn Angular? Thanks!",
      "createdAt": "2022-05-14T13:49:51.141Z",
      "score": 5,
      "user": {
        "image": {
          "png": "./assets/images/avatars/lukeskywalker.png"
        },
        "username": "lukeskywalker"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're looking to kick start your career, search no further. React is all you need. Welcome to the Dark Side.",
          "createdAt": "2022-06-01T13:49:51.141Z",
          "score": 4,
          "replyingTo": "lukeskywalker",
          "user": {
            "image": {
              "png": "./assets/images/avatars/vader.png"
            },
            "username": "vader"
          }
        },
        {
          "id": 4,
          "content": "Chillax, my Padawans. Much to learn, you have. The fundamentals of HTML, CSS, and JS,  I'd recommend focusing on. It's very tempting to jump ahead but lay a solid foundation first. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stays constant.",
          "createdAt": "2022-06-02T13:49:51.141Z",
          "score": 2,
          "replyingTo": "vader",
          "user": {
            "image": {
              "png": "./assets/images/avatars/yoda.png"
            },
            "username": "yoda"
          }
        }
      ]
    }
  ]
}


