import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-pwa-update',
  templateUrl: './pwa-update.component.html',
  styleUrls: ['./pwa-update.component.scss']
})
export class PwaUpdateComponent implements OnInit{

  @ViewChild('template', {static: true})
  template?: TemplateRef<any>

  modalRef?: BsModalRef

  constructor(private swUpdate: SwUpdate, private modalService: BsModalService) {}

  ngOnInit(): void {
      this.checkInstallation()
  }

  closeModal() {
    this.modalRef?.hide()
  }

  private checkInstallation() {

    this.swUpdate.versionUpdates.subscribe(e => {
      if(e.type === 'VERSION_DETECTED') {
        this.openModal(this.template as any)
      }
    })
  }

  private openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template)
  }

}
