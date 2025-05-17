import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {CustomersService} from '../customers.service';
import {CustomerModel} from '../domain/customer.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss'
})
export class CustomersListComponent {
  customersService = inject(CustomersService)
  router = inject(Router)
  customers = this.customersService.getCustomers()

  goToDetails(customer: CustomerModel) {
    this.router.navigate(['customers', customer.id])
  }

}
