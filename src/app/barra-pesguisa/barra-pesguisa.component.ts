import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-pesguisa',
  templateUrl: './barra-pesguisa.component.html',
  styleUrls: ['./barra-pesguisa.component.css']
})
export class BarraPesguisaComponent implements OnInit{
  descricao = "";

  constructor(
    private router: Router
  ){

  }
  ngOnInit(): void {
      
  }
  pesquisar(){
     if(this.descricao) {  
     this.router.navigate(["produtos"], { queryParams: {descricao: this.descricao }});
     return;
  }

  this.router.navigate(["produtos"]);

}

  
}
