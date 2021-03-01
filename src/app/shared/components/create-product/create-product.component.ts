import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../models/product.model';
import { ProductType } from '../../models/product.type';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  @Output() addedWorker: EventEmitter<IProduct> = new EventEmitter();
  type = ProductType;
  addFormGroup: FormGroup;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.addFormGroup = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, [Validators.required]),
      articulation: new FormControl(null, [Validators.required]),
      count: new FormControl(null, [Validators.required, Validators.min(0)]),
      weight: new FormControl(null, [Validators.required, Validators.min(0)]),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      madedBy: new FormControl(null),
      category: new FormControl(0, [Validators.required]),
    });
  }

  openModal(modal: any) {
    this.modalService.open(modal);
  }

  addProduct(modal: any) {
    modal.close('Save click');
    this.addedWorker.emit(this.addFormGroup.value);
  }
}
