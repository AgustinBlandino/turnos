import { Component, OnInit } from '@angular/core';
import { ObrasSocialesModel } from '../../../../core/models/obras-sociales.module';
import * as data from '../../../../data/obrassociales.json'
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-obras-sociales',
  templateUrl: './obras-sociales.component.html',
  styleUrls: ['./obras-sociales.component.css']
})
export class ObrasSocialesComponent implements OnInit {
  ObrasSociales: Array<ObrasSocialesModel> = [
    {
      nombre: "Swiss Medical"
    },
    {
      nombre: "Omint"
    },
    {
      nombre: "Medifé"
    },
    {
      nombre: "OSDE"
    },
    {
      nombre: "Programas Médicos"
    }
  ];
  formlogin: FormGroup = new FormGroup({});

  constructor() { }
  ngOnInit(): void {
    this.formlogin = new FormGroup({
      nombre: new FormControl('')
    })
    console.log(data)

  }
  Agregar(): void {
    const body = this.formlogin.value;
    if (body.nombre) {
      const obraSocialNueva: ObrasSocialesModel = {
        nombre: body.nombre
      };
      this.ObrasSociales.push(obraSocialNueva)
      this.formlogin.reset();
    }
  }
}
