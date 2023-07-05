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
  // empresa = 'Liverpool';

  // getEdad() {
  //   return this.edad;
  // }

  llamarEmpresa(value: string) {}
}

// Puedo agregar un modificacion de acceso private para que solamente pueda ser leido desde la misma clase
// Podemos crear un metodoo get para acceder al valor de una propiedad privada
