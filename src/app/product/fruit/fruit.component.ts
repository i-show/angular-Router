import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    template: '<a> 水果的信息 </a>'
})

export class FruitComponent implements OnInit {


    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }
}
