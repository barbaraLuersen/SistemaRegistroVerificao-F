import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent {
    constructor(
      private router: Router,
      private route: ActivatedRoute
    ) {}

    qrResultString: string;

    onCodeResult(resultString: string) {
      this.qrResultString = resultString;
      this.router.navigate([this.qrResultString]);
    }

}
