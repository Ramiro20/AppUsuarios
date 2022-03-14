import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  listUsuarios: any[] = [];
  Imagenes: any[] = [];
  loading = true;
  constructor(private usuarioService: UsuarioService) {
    this.Imagenes = [
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
    this.getUsuarios();
    //this.getImagenes();
  }

  getUsuarios():void {
      this.usuarioService.getUsuarios().subscribe(data => {
        console.log(data);
        this.listUsuarios = data.data;
        this.loading = false;
        //this.k++;
      })
      console.log(this.Imagenes);
  }

  getImagenes() {
    return this.Imagenes;
  }

}
