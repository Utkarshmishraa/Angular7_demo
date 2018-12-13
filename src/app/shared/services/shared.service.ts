import {
    NgModule, Component, Injectable, ComponentFactoryResolver,
    Inject,
    ReflectiveInjector
} from '@angular/core';
import { HttpProvider } from '../../shared/providers/http-provider.service';
import { ConfigService } from '../../shared/services/config.service';


import { Location } from '@angular/common';

import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class SharedService {
    location: string;
    private notify = new Subject<any>();
    private groupSize: String;
   
    constructor(public HttpProvider: HttpProvider, private ConfigService: ConfigService, location: Location) {
       
    }
    getLocal() {
        // return this.localStorageService.get("states");
    }
    setLocal(value) {
      
    }

    // getter and settter for prepardenesscount & grid flag when API completes loading
    getPrepardessnGridCount() {
        // return this.preparednessNgrid;
    }
    setPrepardessnGridCount(value) {
        // if (value == 'clear')
        //     this.preparednessNgrid = {"preparedness": false, "gridDetails":false}
        // else
        //     this.preparednessNgrid[value] = true;
    }
    
   

    getQryParamByName(name): string {
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(this.location);
        if (!results) return null;
        if (!results[2]) return;
        return decodeURIComponent(results[2].replace(/\+/g, " "));

    }
    getHeaders(): any {
        // this.states = this.getLocal();
        // var sessionKey = (this.states['sessionInfo']) && (this.states['sessionInfo']['sessionKey'])
        //     ? this.states['sessionInfo']['sessionKey'] : "";

        // var applicationId = (this.states['sessionInfo'] && this.states['sessionInfo']['applicationId'])
        //     ? this.states['sessionInfo']['applicationId'] : "";
        // var sourceSystemId = (this.states['sessionInfo'] && this.states['sessionInfo']['defaultValueObject'].sourceSystemId)
        //     ? this.states['sessionInfo']['defaultValueObject'].sourceSystemId : "";

        // return { sessionKey: sessionKey, applicationId: applicationId, sourceSystemId: sourceSystemId };
    }
    /**
     * Observable string streams
     */
    admissionGridObservable$ = this.notify.asObservable();
    public notifyOther(data: any) {
        if (data) {
            this.notify.next(data);
        }
    }

    public getGroupSize(): any {
        return this.groupSize;
    }

    public setGroupSize(param): any {
        this.groupSize = param;
    }
    str2Date(date) {
        var parts = date.split('/');
        return new Date(parts[2], (parts[0] - 1), parts[1]);
    }
    dateToStr(dateObj) {
        try {
            var month = dateObj.getMonth() + 1;
            var date = dateObj.getDate();
            if (month < 10)
                month = "0" + month;
            if (date < 10)
                date = "0" + date;

            return month + "/" + date + "/" + dateObj.getFullYear();
        } catch (exception) {

        }
    }
    // Showing FromDate and ToDate without leading zero's for 'mm' and 'dd'
    dateToStrNoZero(dateObj) {
        try {
            var month = dateObj.getMonth() + 1;
            var date = dateObj.getDate();
            return month + "/" + date + "/" + dateObj.getFullYear();
        } catch (exception) {

        }
    }
    getCurrentDate() {
        var today = new Date();
        return new Date(today.getFullYear(), (today.getMonth()), today.getDate());
    }

    getNthPrevMonthDate(n) {
        var today = new Date();
        return new Date(today.getFullYear(), (today.getMonth() - n), today.getDate());
    }

    getNthPrevDate(n) {
        var today = new Date();
        return new Date(today.getFullYear(), (today.getMonth() - n), today.getDate());

    }
}