# CheatCode
CheatCode is a web application created to enhance the online learning experience by preventing students from cheating on exams. The goal is to limit cheating by using facial recognition and eye detection, therefore, encouraging students to be accountable for their performance. In the age of technology and COVID-19, it is imperative to foster a supportive and fair learning environment.

## How to Use CheatCode
CheatCode is hosted at https://schoolteam1.web.app/. There are five pages: home, login, face detection, about, and contact.

### Home page
The users of CheatCode start at the home page which features the CheatCode logo, designed by Demi Linton. At the top left, there is a navigation menu, where users can find the other pages that are listed.

### Login
The login page allows users to sign in to use CheatCode via Firebase's email link authorization. Right now, the login email is hardcoded to one of the developer's emails so that when the login button is pressed an email is sent out and, the user has to follow that link, leading them to the face-detection page. In the future, the code would be changed so that once the email field is submitted, and if the email is valid, then the user would get a link through their email to continue with the login process. The user will click the link from where they will be able to go to the Face Detection page.

### Face-detection
The face-detection feature of CheatCode is the main feature of this web application, where the creator aims to limit identity fraud and prevent other resources from being used. Right now, there is a box where the webcam access shows the user in real-time, with a box and a decimal number to show the percent accuracy of detecting a face. In the future, the user would also upload a photo of themselves and using deep learning - check to see if the uploaded photo matches the person using the webcam. Besides, the eye detection would also be implemented using face APIs landmark detection.

### Contact
The contact page allows users to add the first name and last name to CheatCode. It does not work yet, but it will be fully functional in further implementations. 

## Getting Started 
These instructions will help you test CheatCode on your machine.

### Prerequisites
We used Firebase, Node.js, and Angular to host on GitHub Pages.
What to install:
- Node
- Angular
- Firebase Host

### Installing 
Once these are installed, and this repository is cloned on your machine, you should be good to go, by doing an
* > npm install
* > ng serve

Browse to http://localhost:4200/

## Deployment 
You can find CheatCode at https://schoolteam1.web.app/

## Built With
* [Angular](https://cli.angular.io/) - The web framework used
* [Node.js](https://nodejs.org/en/) - Development platform
* [Firebase](https://firebase.google.com/) - Used for web development platform

## Contributing 
For this project, we used [face-api](https://github.com/justadudewhohacks/face-api.js) for the face-detection feature of CheatCode

## Authors of the Code
* Kiele Sacco
* Deandra Rodricks
* Devki Borad

## Other Creators of CheatCode
* Sam Tincher
* Andrew Becker
* Demi Linton

## Acknowledgments
* A huge acknowledgment goes to School Team 1's pro squad mentor, Ishank Tandon and go, squad mentor, Kristen Mann from Angie's List who helped guide us through what to do and support us during the 2020 TechPoint S.O.S. Challenge.
* Our sincere gratitude to TechPoint and our coaches for making this summer 2020 challenge happen!

## Reference 

### nodejs.org
* Node.js
* Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

###  firebase.google.com
* Firebase
* Firebase is Google’s mobile platform that helps you quickly develop high-quality apps and grow your business.
