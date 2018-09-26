import { ChatroomService } from './../../../../services/chatroom.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.scss']
})
export class ChatroomListComponent implements OnInit {

  constructor(public chatroomService: ChatroomService) { }

  ngOnInit() {
  }

}
