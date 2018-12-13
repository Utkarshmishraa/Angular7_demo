import { Injectable } from '@angular/core';

import { HttpProvider } from '../../shared/providers/http-provider.service';
import { ConfigService } from '../../shared/services/config.service';
import { SharedService } from '../../shared/services/shared.service';


@Injectable()
export class AuthService {
    constructor(private HttpProvider:HttpProvider, private ConfigService:ConfigService, private SharedService: SharedService) {
    }
        
    login(entryKey) : any {
        var params = "?entryKey="+encodeURIComponent(entryKey)
        
        var headers = {}; 
        return this.HttpProvider
                // .get(ConfigService.atiTokenURL+ConfigService.FRCONSTANTS.ATITOKEN.URL+params, headers);

    }

}