import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) {}

   showSuccess(message, title){
      this.toastr.success(message, title,{
        timeOut : 0,
        extendedTimeOut : 100,
        tapToDismiss : true,
        positionClass : "toast-top-left"
        });
    }
    
    showError(message, title){
      this.toastr.error(message, title,{
        positionClass: 'toast-bottom-right'
      });
    }
   }
   

