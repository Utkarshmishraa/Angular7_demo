import { NgModule, Component, Injectable } from '@angular/core';
import { HttpProvider } from '../../shared/providers/http-provider.service';
import { ConfigService } from '../../shared/services/config.service';
import { Location } from '@angular/common';

// import { Observable } from 'rxjs/Rx';
// import { Subject } from 'rxjs/Subject';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class MessageBus {
    private admissionGridNotify = new Subject<any>();
   
    
    /**
     * Observable string streams
     */
    admissionGridObservable$ = this.admissionGridNotify.asObservable();
    public notifyAdmissionGridDependent(data: any) {
        if (data) {
            this.admissionGridNotify.next(data);
        }
    }
    
}