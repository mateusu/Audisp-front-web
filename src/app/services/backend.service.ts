import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {

    url = 'http://localhost:6005/';
    constructor(private http: HttpClient) {
    }

    getListaAudiencas() {
        return this.http.get(this.url + 'aud/lista', {});
    }

    getListaAudiencasPorData(body) {
        return this.http.post(this.url + 'aud/data', body);
    }

    getAudienciasSugeridas(user) {
        return this.http.post(this.url + 'aud/sugeridas', { id: user });
    }

    getUserLikes(body) {
        return this.http.post(this.url + 'user/likes', body);
    }

    updateUserLikes(body) {
        return this.http.put(this.url + 'user/updateLikes', body);
    }

    getAuthorization(email, senha) {
        return this.http.post(this.url + 'auth/validate', { email: email, senha: senha });
    }

    registerUser(userData) {
        return this.http.post(this.url + 'auth/register', userData);
    }

    likeAudiencia(body) {
        return this.http.put(this.url + 'user/likeAud', body);
    }

}
