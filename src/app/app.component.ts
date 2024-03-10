import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule} from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import { ToastrModule } from 'ngx-toastr';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CreateRegistrationComponent,
    RegistrationListComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule,
    ToastrModule
  ],
  providers: [
    HttpClientModule,
    NgToastService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Fitness-First';
}
