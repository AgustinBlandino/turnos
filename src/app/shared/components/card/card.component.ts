import { Component, Input, OnInit } from '@angular/core';
import { ObrasSocialesModel } from 'src/app/core/models/obras-sociales.module';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() obrasSociales: Array<ObrasSocialesModel> = [];
  obraSocialSeleccionada: ObrasSocialesModel | undefined;
  formEditar: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formEditar = new FormGroup({
      nombreNuevo: new FormControl('')
    });
  }

  EliminarObraSocial(index: number): void {
    if (index >= 0) {
      this.obrasSociales.splice(index, 1);
    }
  }

  SeleccionarObraSocial(obraSocial: ObrasSocialesModel): void {
    this.obraSocialSeleccionada = obraSocial;
    this.formEditar.patchValue({ nombreNuevo: obraSocial.nombre });
  }

  EditarObraSocial(): void {
    if (this.obraSocialSeleccionada) {
      const nuevoNombre = this.formEditar.get('nombreNuevo')?.value;
      this.obraSocialSeleccionada.nombre = nuevoNombre;
    }

  }
}
