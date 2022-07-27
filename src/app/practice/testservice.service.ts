import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private toast: ToastrService) { }

  getAlert(msg, title){
    this.toast.success(msg, title);
  }
}
