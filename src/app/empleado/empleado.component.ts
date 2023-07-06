import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss'],
})
export class EmpleadoComponent {
  nombre = 'Luis';
  apellido = 'Díaz';
  edad = 25;
  // private edad = 25;
  equipo = '';
  player = 'Luis Diaz';

  cambiarEquipo(event: Event) {
    this.equipo = (<HTMLInputElement>event.target).value;
  }

  // getEdad() {
  //   return this.edad;
  // }

  llamarEmpresa(value: string) {}

  habilitarCuadro = false;

  userRegistrado = false;

  textoRegistrado = 'No hay registros';

  getRegistroUser() {
    this.userRegistrado = false;
  }

  setUserRegistrado(event: Event) {
    // alert('El usuario se encuentra registrado');
    // this.textoRegistrado = 'El usuario fue registrado con exito';
    // alert(event.target);
    if ((<HTMLInputElement>event.target).value == 'si') {
      this.textoRegistrado = 'El usuario esta registrado con exito';
    } else {
      this.textoRegistrado = 'El usuario no esta registrado';
    }
  }
}

/*
Puedo agregar un modificacion de acceso private para que solamente pueda ser leido desde la misma clase
Podemos crear un metodo get para acceder al valor de una propiedad privada

La funcion setUserRegistrado recibe el objeto event desde la plantilla y asi podemos capturar propiedades, metodos, etc.
*/
