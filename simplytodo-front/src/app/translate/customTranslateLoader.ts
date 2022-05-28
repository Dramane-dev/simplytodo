import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { fr } from './fr';
export class CustomTranslateLoader implements TranslateLoader {
    private _baseUrl: string = "/assets/i18n/";
    constructor(private _http: HttpClient) {}

    getTranslation(lang: string): Observable<Object> {
        console.log('custom loader started');
        return of(fr);
        // return this._http.get(this._baseUrl + lang + ".json");
    }
}