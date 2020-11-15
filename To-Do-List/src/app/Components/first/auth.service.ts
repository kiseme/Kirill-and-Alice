import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class AuthService{

    constructor(){}
    private isAuth = false

    // Сервисы нужно чтобы изолировать логику, поэтому все методы связанные с авторизацией нужно переместить в отдельный сервис
    logIn() {
        this.isAuth = !this.isAuth
    }
      
    getAuth() { // Не обязательно специфицировать возвращаемое значение, если тип уже известен - ИСПРАВЛЕНО
        return this.isAuth
      }
}