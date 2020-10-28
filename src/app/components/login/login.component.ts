﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Service } from 'src/app/service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private service: Service
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [''],
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    navigateToRegister(){
        this.router.navigate(['/register']);
    }
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.service.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log('login successful');
                    this.router.navigate(['/shopping']);
                },
                error => {
                    console.log(error)
                    this.loading = false;
                });
    }
}