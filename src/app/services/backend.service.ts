import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {

    url = 'https://audisp-node.herokuapp.com/';
    constructor(private http: HttpClient) {
    }

    getListaAudiencas() {
        return this.http.get(this.url + 'aud/lista', {});
    }

    getListaAudiencasPorData(body) {
        return this.http.post(this.url + 'aud/data', body);
    }

    editAudiencia(body) {
        return this.http.put(this.url + 'aud/update', body);
    }

    getAudienciasSugeridas(user) {
        return this.http.get(this.url + 'aud/sugeridas/' + user);
    }

    rmvTemaAudiencia(body) {
        return this.http.post(this.url + 'tema/remAud', body);
    }

    getAudUrl(id) {
        return this.http.get(this.url + 'aud/url/' + id);
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
