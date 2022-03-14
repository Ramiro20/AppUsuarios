import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
//import { ListUsuariosComponent } from 'src/app/dashboard/list-usuarios/list-usuarios.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  k: number=0;
  n: number=0;
  id: number;
  name: string = "";
  email: string = "";
  Img: any[]=[];
  nro: number = 0;
  urlImagen: string = "";
  gender: string = "";
  loading: boolean = true;
  ListUsuarios: any[] = [];


  constructor(private aRoute: ActivatedRoute,
              private usuarioService: UsuarioService) {
    this.id = +this.aRoute.snapshot.params.id;
    this.Img =[
      {
        Avatar: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydGlzdFwvaW1hZ2VGaWxlXC9wYWJsby1waWNhc3NvLXNlbGYtcG9ydHJhaXRzLWNocm9ub2xvZ3ktMi5qcGciLCJyZXNpemUsNjAwLDYwMCJdfQ.qFs_a6vEMRrXhj5G9kmDuXI01gdj9cVeV1-h/hBz1KIE.jpg"
      },
      {
        Avatar: "https://i.pinimg.com/originals/55/2d/48/552d484e1f565d494c18e50871d549e7.jpg"
      },
      {
        Avatar: "http://warp.la/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-08-at-13.34.25-3-472x600.jpeg"
      },
      {
        Avatar: "https://www.russianlover.site/wp-content/uploads/2016/08/Oxana_Pochepa-472x600.jpg"
      },
      {
        Avatar: "https://spoilertime.com/wp-content/uploads/2016/09/joshua-dallas-472x600.jpg"
      },
      {
        Avatar: "http://conguerord.com/wp-content/uploads/2016/09/Steffany-Constanza-CongueroRD.com-472x600-236x300.jpg"
      },
      {
        Avatar: "https://prensaxtremard.com/wp-content/uploads/2019/03/a0f528a5-1838-4206-bb80-1b4350de5447.jpg"
      },
      {
        Avatar: "http://www.dionbouton-spareparts.com/wordpress/wp-content/uploads/2010/08/web-5-001-aa-472-x-600.jpg"
      },
      {
        Avatar: "https://heymama.co/wp-content/uploads/2019/10/Screenshot-2019-10-11-at-12.25.44-PM-472x600.png"
      },
      {
        Avatar: "https://www.pngkin.com/mnp/70-705989.png"
      },
      {
        Avatar: "https://1yazat78t1q1ticyv3i8g9il-wpengine.netdna-ssl.com/wp-content/uploads/2013/06/mosn2-472x600.jpg"
      },
      {
        Avatar: "https://mondogonzo.org/wp-content/uploads/2019/03/leia_rebel_rebel-472x600.jpg"
      },
      {
        Avatar: "https://www.arix.es/bmz_cache/2/215a80e271f650f1138cea97852622d2-472x600.JPG"
      },
      {
        Avatar: "https://comps.canstockphoto.es/lindo-perro-caricatura-eps-vectorial_csp16525047.jpg"
      },
      {
        Avatar: "https://i.pinimg.com/564x/7e/b9/2e/7eb92e23675c84d3b79382dd50ea4afa.jpg"
      },
      {
        Avatar: "https://i.pinimg.com/originals/3d/f2/14/3df2147fbd2fbab3cdd13f423a2958c4.jpg"
      },
      {
        Avatar: "https://i.pinimg.com/474x/32/4a/4c/324a4c138037a36a9b172fdc4690096d.jpg"
      },
      {
        Avatar: "https://wallpaperaccess.com/full/4367721.jpg"
      },
      {
        Avatar: "https://i.pinimg.com/originals/8a/85/b7/8a85b7b70509d975104041cb083834d8.png"
      },
      {
        Avatar: "https://insidethemagic-119e2.kxcdn.com/wp-content/uploads/2019/05/Spider-Man_AIW_Poster_Textless-472x600.jpg"
      }
    ];
   }

  ngOnInit(): void {
    this.getUsuario();
    //this.buscarindice();
    //console.log(this.id);
  }

  getUsuario():void{
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      //console.log("Este es el id :"+this.id);
      this.name = data.data.name;
      this.email = data.data.email;
      this.gender = data.data.gender;
      this.buscarindice();
      //this.urlImagen = this.getImagen();
      this.loading = false;
    });
  }

  getImagen(){
    //this.buscarindice();
    //this.n =this.buscarindice();
    /*for(var i = 0; i < this.Img.length; i++){
        if(this.Img[i].id == tipoIdentidad){
            return tipo_identidad[i].name;
        }

    //var indice = this.usuarioService.indexOf(this.getUsuario(this.id));
  }*/
    return this.Img[this.n].Avatar;
  }

  buscarindice(){
    this.k=0;
    console.log("Este es el id :"+this.id);
    this.usuarioService.getUsuarios().subscribe(data => {
      //console.log(data);
      //console.log(parseInt(data.data.id));
      this.ListUsuarios = data.data;
      /*if(this.id !== parseInt(data.data.id))
        this.k=this.k+1;
        else return  this.k;*/

        //console.log(this.k);
    })

    //console.log(this.k);
    console.log(this.ListUsuarios);
    //console.log(this.ListUsuarios[0].length);

    /*for(let dato of this.ListUsuarios){
          console.log(dato);
        }*/


    //this.k = this.ListUsuarios.indexOf(this.id);
    /*for(var i = 0; i < this.ListUsuarios.length; i++){/
        console.log(this.ListUsuarios.length);
        if((this.ListUsuarios[i].id) == this.id){
            break;
        }else{
          this.k +=1;
        }

    //var indice = this.usuarioService.indexOf(this.getUsuario(this.id));
  }*/
    //console.log("este es el id a comparar ",this.ListUsuarios[this.k].id);


  }

}
