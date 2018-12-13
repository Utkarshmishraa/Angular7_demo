import { Injectable } from '@angular/core';
//import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MessageBus } from './message-bus.service';

@Injectable()
export class BlockUIService {

   // @BlockUI() blockUI: NgBlockUI;
    BlockUICount: number = 0;

    constructor(private MessageBus: MessageBus) {

    }

    BlockUIAngular() {
        // this.MessageBus.pageLoader('true');
        setTimeout(() => {
            // window.parent.postMessage({"message":"facultyReportingUI", "event":"loading"}, "*");
        },500);
    }

    UnBlockUIAngular(batchUpdate?: boolean) {
       
    }

    BlockTinyAngular(loader) {
        if (loader) {
            // this.MessageBus.pageLoader('true');
        } else {
            // this.MessageBus.pageLoader('false');
        }
        // this.MessageBus.tinyLoader(loader);
    }

    pushBlockUI() {
        let pushCount: number = this.BlockUICount;
        ++pushCount; this.BlockUICount = pushCount;
        if (pushCount==1)
            this.BlockTinyAngular(true);
    }

    popBlockUI() {
        let popCount: number = this.BlockUICount;
        while (popCount > 0) {
            popCount >= 0 ? --popCount : 0;
        }
        if (popCount==0)
            this.BlockTinyAngular(false);
    }
}