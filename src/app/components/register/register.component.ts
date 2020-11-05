import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Service } from 'src/app/service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppState } from 'src/app/interface';
import { Store } from '@ngrx/store';
import { SET_USER_ID } from 'src/app/actions/cart.actions';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private service: Service,
        private snackBar: MatSnackBar,
        private store: Store<AppState>
    ) { }

    openSnackBar(message: string, ) {
        this.snackBar.open(message, null, {
            duration: 2000,
        });
    }


    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            userId: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        const userId = this.f.userId.value
        this.service.registerUser({
            name: this.f.name.value,
            userId: this.f.userId.value,
            password: this.f.password.value
        }).pipe(first())
            .subscribe(
                (data: any) => {
                    this.openSnackBar('Register Successful ');
                },
                (error) => {
                    console.log(error.status)
                    if (error.status === 200) {
                        this.openSnackBar('Register Successful, Please login ');
                        this.store.dispatch(SET_USER_ID({ userId }))
                        this.router.navigate(['/shopping']);
                    }
                    else {
                        this.openSnackBar('Registeration failed' + error)
                    }

                });
    }
}
