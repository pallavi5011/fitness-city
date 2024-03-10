import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { CommonModule } from '@angular/common'
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../services/api.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-create-registration',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './create-registration.component.html',
  styleUrl: './create-registration.component.scss'
})
export class CreateRegistrationComponent implements OnInit{
  public packages = ["Monthly","Quarterly","Yearly"];
  public impOpts : string[] = [
    "Toxic Fat reduction",
    "Energy and Endurance",
    "Building Lean Muscle",
    "Healthier Digestive System",
    "Sugar Craving Body",
    "Fitness"
  ];

  public registerForm!: FormGroup;

  constructor (private fb:FormBuilder,private api: ApiService, private toastService: NgToastService){

  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      weight: [''],
      height: [''],
      bmi: [''],
      bmiResult: [''],
      requireTrainer: [''],
      gender: [''],
      package: [''],
      important: [''],
      haveGymBefore: [''],
      enquiryDate: [''],
    })

    this.registerForm.controls['height'].valueChanges.subscribe(res =>{
      this.calcBmi(res);
    })
  }


  submit(){
    console.log("all details", this.registerForm.value)
    this.api.postRegistration(this.registerForm.value).subscribe(res => {
     this.toastService.success({detail:"Success", summary:"Enquiry Added", duration: 3000});
     this.registerForm.reset();
    })
  }

  calcBmi(heightValue:number){
    const weight = this.registerForm.value.height;
    const height = heightValue;
    const bmi = weight / (height*height);
    this.registerForm.controls['bmi'].patchValue(bmi);

    switch (true){
      case bmi <18.5:
        this.registerForm.controls['bmiResult'].patchValue("Underweight");
        break;
        case (bmi >= 18.5 && bmi < 25):
        this.registerForm.controls['bmiResult'].patchValue("Normal");
        break;
        case (bmi >= 18.5 && bmi <30):
        this.registerForm.controls['bmiResult'].patchValue("Overweight");
        break;

        default:
        this.registerForm.controls['bmiResult'].patchValue("Obese");
        break;

    }
  }


}
