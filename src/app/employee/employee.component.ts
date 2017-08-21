import { DEFAULT_EMPLOYEE } from './employee-factory';
import { Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { Employee } from './employee';


@Component({
    selector: 'app-root',
    templateUrl: './employee.component.html',
})


export class EmployeeComponent implements OnInit {
    private employees: Employee[];

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.employees = DEFAULT_EMPLOYEE;
    }

}
