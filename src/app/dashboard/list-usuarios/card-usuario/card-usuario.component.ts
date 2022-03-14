import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any;

  name: string = "";
  email: string = "";
  id: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.name = this.user.name;
    this.email = this.user.email;
    //this.imgUrl = this.img;
    //console.log(this.user);
    this.id = this.user.id;
  }

}
