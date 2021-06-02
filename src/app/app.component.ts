import { Component } from '@angular/core';
import { ApisService } from './apis.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calis';

  constructor(private apisService: ApisService){
    this.pruebas();
  }

  pruebas():void{
    
    this.apisService.consulta('http://localhost:3000/user').subscribe((res: any) => console.log(res));
   
    let id=1; //id a consultar
    this.apisService.consultaPorId(`http://localhost:3000/Login/${id}`).subscribe((res: any) => console.log
   (res))

    let Nombre='Luisa Alvarez'
    let Email='luisa@live.com'
    let UsrName = 'LuisaDoc'
    let Pswd='582169'
    let Role = 'doc'
    let asignados = '1'
    this.apisService.alta('http://localhost:3000/Registro',Nombre,Email,UsrName,Pswd, Role, asignados).subscribe((res: any) => 
    console.log(res));

    let body ={
    Nombre:'Luisa Alvarez',
    Email:'luisa@live.com',
    UsrName:'LuisaDoc',
    Pswd:'582169',
    Role:'doc',
    Asignados:'1'
    }

    this.apisService.alta2('http://localhost:3000/Registro',body)
    .then( (data)=>{ console.log(data) })
    .catch((err)=>{
      console.log(err)
    })
    
  }
}


