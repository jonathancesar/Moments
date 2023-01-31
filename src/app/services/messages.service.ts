import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message: string ='';

  constructor() { }

  //mostrar a mensagem e esconder depois de 4 segundos.
  add(message: string){
    this.message = message

    setTimeout(()=> {
      this.clear()
    }, 4000)
  }

  clear(){
    this.message = '';
  }
}
