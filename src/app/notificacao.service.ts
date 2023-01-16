import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {
  

  constructor(
    private snackBar: MatSnackBar
  ) { }

 notificar(mensagem: string){
    this.snackBar.open(mensagem, "Ok", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition:"center"
    })
 }
}
