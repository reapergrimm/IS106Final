import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexModalService } from '../shared-components/flex-modal/flex-modal.service';
import { Http } from '@angular/http';
import { isNgTemplate } from '@angular/compiler';
//import { IncomingMessage } from 'http';
import { InternalNgModuleRef } from '@angular/core/src/linker/ng_module_factory';

interface IOrder{
  pid: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  orders:Array<IOrder> = [];
  name: '';
  errorMessage = '';
  confirmMessage = '';
  constructor(
    private router: Router,
    private flexModal: FlexModalService,
    private http: Http
  ) {

  }

  async ngOnInit() {
    this.loadDefaultOrders();
  }

  calculate(){
    const total = this.orders.reduce((inc, item, i, arr) => {
      inc += item.price * item.quantity;
      return inc;
    }, 0);
    const taxAmount = total * .1;

    const subTotal = total - taxAmount;
    console.log('from calculate() total: ', total, 'taxAmount', taxAmount, 'subTotal', subTotal);
    return{
      total: total,
      taxAmount: taxAmount,
      subTotal: subTotal
    };


  }

  submit(){
    const commaIndex = this.name.indexOf(',');
    let error = false;

    if (this.name === ''){
      //console.log('Name must not be empty!');
      this.errorMessage = 'Name must not be empty!';
      error = true;
    } else if(commaIndex === -1){
      this.errorMessage = 'Name must have a comma!';
      error = true;
    }

    if(!error){
    const firstName = this.name.slice(commaIndex + 1, this.name.length);
    const lastName = this.name.slice(0, commaIndex);
    const fullName = firstName + ' ' + lastName;

    const calculation = this.calculate();
    this.confirmMessage = 'Thank you for your order ${fullName}. Your sub total is: ${calculation.subTotal}. Your tax amount is ${calculation.taxAmount}. Your grand total is ${calculation.total}.';
    this.flexModal.openDialog('confirm-modal');
  } else {
      this.flexModal.openDialog('error-modal');
    }
    //console.log('this.name', this.name, 'commaIndex', commaIndex, 'firstName', firstName, 'lastName', lastName);


  }

  loadDefaultOrders(){
    this.orders = [{
      'pid': '1',
      'image':'assets/sm_hotdog.jpeg',
      'description': 'Hot Dog',
      'price': 5.00,
      'quantity': 2
    }, {
      'pid': '2',
      'image':'assets/sm_hamberger.jpeg',
      'description': 'Hamberger',
      'price': 6.00,
      'quantity': 1
    }, {
      'pid': '3',
      'image':'assets/sm_pizza.jpeg',
      'description': 'Large Pizza',
      'price': 12.00,
      'quantity': 2
    }]
  }

  delete(index: number){
    this.orders.splice(index, 1)
    //console.log('from delete() index is: ', index);
  }

  addItem(item: string){
    switch(item){
      case 'hot dog':
        this.orders.unshift({
          'pid': '1',
          'image':'assets/sm_hotdog.jpeg',
          'description': 'Hot Dog',
          'price': 5.00,
          'quantity': 0
        })
      break;

      case 'hamberger':
        this.orders.unshift({
          'pid': '2',
          'image':'assets/sm_hamberger.jpeg',
          'description': 'Hamberger',
          'price': 6.00,
          'quantity': 0
        })
      break;

      case 'pizza':
        this.orders.unshift({
          'pid': '3',
          'image':'assets/sm_pizza.jpeg',
          'description': 'Large Pizza',
          'price': 12.00,
          'quantity': 0
        })
      break;
    }
    // if (item === 'hot dog'){
    //   this.orders.unshift({
    //     'pid': '1',
    //     'image':'assets/sm_hotdog.jpeg',
    //     'description': 'Hot Dog',
    //     'price': 5.00,
    //     'quantity': 0
    //   });
    // } else if (item === 'hamberger'){
    //   this.orders.unshift({
    //     'pid': '2',
    //     'image':'assets/sm_hamberger.jpeg',
    //     'description': 'Hamberger',
    //     'price': 6.00,
    //     'quantity': 0
    //   });
    // } else if (item === 'pizza'){
    //   this.orders.unshift({
    //     'pid': '3',
    //     'image':'assets/sm_pizza.jpeg',
    //     'description': 'Large Pizza',
    //     'price': 12.00,
    //     'quantity': 0
    //   });
    // }
  }


  clear(){
    this.orders = [];          //clear all at once

    // this.orders.forEach((item, i) => {           //iterate through to clear individually
    //   console.log('item: ', item, 'i: ', i);
    //   item.price = '';
    //   item.quantity = '';
    // }

    // for (let i =0; i< this.orders.length; i++){      //for loop clear
    //   console.log('this.orders["i"]', this.orders[i]);
    //   this.orders[i].quantity = '';
    //   this.orders[i].price = '';
    // }

    // this.order = this.orders.map((item, i) => {    //another ways
    //   item.quantity = '';
    //   item.price = '';
    //   return item;
    // )}

  }


  // prepare result, splice last name, first name

  // Calculate total and perform input validation

  // display the order form with orders from orders.json

  // Clear the orders form

  // Add items 'Hot Dog', 'Hamberger' and 'Pizza' to list when corresponding button is clicked

  // delete line item (order) when delete button is click

  // read in the orders.json file and populate the list table with the initial orders (3)

}
