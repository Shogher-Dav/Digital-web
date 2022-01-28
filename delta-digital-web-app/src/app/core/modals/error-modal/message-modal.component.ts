import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'message-modal',
    templateUrl: 'message-modal.component.html',
    styleUrls: ['./message-modal.component.scss']

})

export class MessageModalComponent implements OnInit {
    type: string;
    message: string;
    
    constructor(
        private bsModalRef: BsModalRef,
    ) {
    }

    ngOnInit() {
        console.log(this.message);
        console.log(this.message);

    }

    close() {
        this.bsModalRef.hide();
    }
}