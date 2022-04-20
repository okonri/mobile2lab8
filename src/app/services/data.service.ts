import { Injectable } from '@angular/core';

export interface Detail {
  
  id: number;
  course: string;
  description: string;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public details: Detail[] = [
    {
      id: 0,
      course: 'APPLIED MACHINE LEARNING CRN-45159-202102',
      description: 'This course is a hands-on introduction to the field of Deep Learning using Python and the Keras library. It will explore applications of Deep Learning techniques for processing text and image data. We will also use the Natural Language Toolkit (NLTK) library to preprocess text for use with Machine Learning algorithms.',
      read: false
    },
    {
      id: 1,
      course: 'FULL STACK DEVELOPMENT II CRN-49745-202102',
      description: 'At the end of this course, the student will reliably demonstrate the ability to: Design and implement a simple front-end web solution using Angular; tilize native features of Node.js using built-in modules.;Implement a data storage solution using MongoDB; Store and retrieve data to a MongoDB using Mongoose ODM; Implement and consume REST APIs with Node.js and Express',
      read: false
    },
    {
      id: 2,
      course: 'INTRO. TO CYBER SECURITY CRN-47983-202102',
      description: 'At the end of this course, the student will reliably demonstrate the ability to; Recall security fundamental terms and diagrams; Apply and classify network discovery and security auditing techniques; Identify & baseline network traffic using network monitoring tools; Identify and filter various protocols and network ports; Implement various tactics to attack a network or application; Classify levels of database insecurities; Compare and differentiate SQL injections; Critique and execute mitigation techniques',
      read: false
    }
  ];

  constructor() { }

  public getDetails(): Detail[] {
    return this.details;
  }

  public getDetailById(id: number): Detail {
    return this.details[id];
  }
}
