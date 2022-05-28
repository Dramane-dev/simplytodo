import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

export class CustomTranslateLoader implements TranslateLoader {
    private _baseUrl: string = "/assets/i18n/";
    constructor(private _http: HttpClient) {}

    getTranslation(lang: string): Observable<Object> {
        return this._http.get(this._baseUrl + lang + ".json");
    }
}