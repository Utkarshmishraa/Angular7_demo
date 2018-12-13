import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BlockUIService } from '../services/blockui.service';
// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'; 



@Injectable({
    providedIn: 'root'
})
export class HttpProvider {

    constructor(public http: Http, private BlockUIService: BlockUIService, ) { }

    //Get Method interface
    get(url: string, headers: any) {
        return this
            .http.get(url, this.getHeaders(headers))
            .map(response => {
                return response.json();
            })
            .catch(err => {
                throw 'Error';
            });

    };

    // post method interface
    post(url: string, headers: any) {
        return this.http.get(url, this.getHeaders(headers))
            .map(data => {
                //data.json();
                return data.json();
            });
    };
    put(url: string, headers: any) {
        return this.http.put(url, {}, this.getHeaders(headers))
            .map(data => {
                return data.json();
            })
            .catch(err => {
                throw 'Error';
            });
    };

    //Header info
    private getHeaders(headers) {
        let headersObj = new Headers();
        headersObj.append('Accept', '*/*');
        if (headers && headers.sessionKey)
            headersObj.append('sessionKey', headers.sessionKey);
        if (headers && headers.sessionKey)
            headersObj.append('applicationId', headers.applicationId);
        if (headers && headers.sessionKey)
            headersObj.append('sourceSystemID', headers.sourceSystemId);
        return new RequestOptions({ headers: headersObj });
    };

    private getRequestOptions(headers, responseType) {
        let headersObj = new Headers();
        headersObj.append('Accept', '*/*');
        if (headers && headers.sessionKey)
            headersObj.append('sessionKey', headers.sessionKey);
        if (headers && headers.sessionKey)
            headersObj.append('applicationId', headers.applicationId);
        if (headers && headers.sessionKey)
            headersObj.append('sourceSystemID', headers.sourceSystemId);
        return new RequestOptions({ headers: headersObj, responseType: responseType });
    };
}
