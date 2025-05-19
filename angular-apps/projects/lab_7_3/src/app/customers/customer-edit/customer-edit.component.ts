import {Component, model, output} from '@angular/core';
import {CustomerModel} from '../domain/customer.model';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  imports: [
    FormsModule
  ],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.scss'
})
export class CustomerEditComponent {

  customerDetails = model.required<CustomerModel>()
  customerChanged = output<CustomerModel>();

  onSubmit(customerForm: NgForm) {
    if (customerForm.valid) {
      this.customerChanged.emit(this.customerDetails());
    }
  }

  firstNameChanged($event: string) {
    this.customerDetails.update(customer => {
      return {
        ...customer,
        firstName: $event
      }
    })
  }

  lastNameChanged($event: string) {
    this.customerDetails.update(customer => {
      return {
        ...customer,
        lastName: $event
      }
    })
  }

  ageChanged($event: string) {
    this.customerDetails.update(customer => {
      return {
        ...customer,
        age: $event
      }
    })
  }

  cityChanged($event: string) {
    this.customerDetails.update(customer => {
      return {
        ...customer,
        city: $event
      }
    })
  }

  countryChanged($event: string) {
    this.customerDetails.update(customer => {
      return {
        ...customer,
        country: $event
      }
    })
  }
}
