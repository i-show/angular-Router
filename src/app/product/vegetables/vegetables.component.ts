import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    template: '<a> 蔬菜的信息 </a>',
})

export class VegetablesComponent implements OnInit {


    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }
}
