import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

import { StripeService } from 'ngx-stripe';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  constructor(
    private http: HttpClient,
    private stripeService: StripeService
  ) {}

  checkout() {
    // Check the server.js tab to see an example implementation
    this.http.post('/create-checkout-session', {})
      .pipe(
        switchMap(session => {
          return this.stripeService.redirectToCheckout({ sessionId: session.toString() });
        })
      )
      .subscribe(result => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });

    }
}
