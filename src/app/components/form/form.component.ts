import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formRegister!: FormGroup;

  constructor( public formBuilder: FormBuilder ) {}

  ngOnInit(): void {

    //Validadores para el formulario (FormBuilder sirve para agrupar los inputs para validarlos)
    this.formRegister = this.formBuilder.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
    
    //Carga los datos una vez se inicia el form
    this.loadData();
  }
  
  //Muestra los datos en consola después de darle enviar
  send(): any {
    console.log(this.formRegister.value);
  }

  loadData(): any {
    const data = {
      user: 'DanteFleex13',
      email: 'errak@min.co',
      password: 'eaaa123'
    };

    //pre-carga de datos en el form
    this.formRegister.patchValue(data);

  }

}
