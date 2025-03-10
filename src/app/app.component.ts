import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  modules = [
    { "mn": "user-management", "mdn": "User Management" },
    { "mn": "order-processing", "mdn": "Order Processing" },
    { "mn": "inventory-control", "mdn": "Inventory Control" },
    { "mn": "reporting-analytics", "mdn": "Reporting & Analytics" },
    { "mn": "customer-support", "mdn": "Customer Support" },
    { "mn": "billing-payments", "mdn": "Billing & Payments" },
    { "mn": "marketing-automation", "mdn": "Marketing Automation" },
    { "mn": "product-catalog", "mdn": "Product Catalog" },
    { "mn": "shipment-tracking", "mdn": "Shipment Tracking" },
    { "mn": "role-permissions", "mdn": "Role & Permissions" }
  ];

  handleOnChangeModule(event: any): void {
    console.log(event);
  }
}
