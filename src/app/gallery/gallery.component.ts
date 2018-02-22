import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GalleryData } from '../gallery/gallery';
import { GalleryService } from '../gallery/gallery.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[GalleryService]
})
export class GalleryComponent implements OnInit {
  modalRef: BsModalRef;
  galleryData: GalleryData[];
  modalImageUrl ="";
  constructor(private _galleryData: GalleryService,private modalService: BsModalService) {
   }

  ngOnInit() {
    this._galleryData.getgallerydata()
    .subscribe(galleryData =>
      {
        this.galleryData = galleryData;

      }
      );
  }
  openModal(template: TemplateRef<any>,GalleryImageUrl) {
    this.modalImageUrl=GalleryImageUrl;
    this.modalRef = this.modalService.show(template);
  }
}
