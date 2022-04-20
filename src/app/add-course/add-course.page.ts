import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {

  name: string;
  description: string;

  constructor(private alertController: AlertController) {}

  async btnLogin(){
    console.log(`${this.name} - ${this.description}`);

    const alert = this.alertController.create({
      header: 'New course',
      subHeader: 'Course added',
      message: 'Sucessfully added course to app...',
      buttons: ['OK']
    });

    (await alert).present();
  }

  ngOnInit() {
  }

}
