import { Injectable,OnInit } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';
import { Observable, Subject, ReplaySubject,Subscription } from 'rxjs';

import { map, filter, switchMap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable()
export class ConfigService {
    private subscription: Subscription;
    // static readonly apiBaseURL = environment.apiBaseURL;
    // static readonly atiTokenURL = environment.atiTokenURL;
   
    static readonly FRCONSTANTS = {
        // 'ATITOKEN' : {
        //     'URL' : 'atitoken'
        // }, 
       
    };
}