<p>
  <img align="left" src="/uofr_logo.png" alt="U of R logo" width="20%"/>
  <img align="right" src="/rfps_logo.jpeg" alt="RFPS logo" width="15%"/>
</p>

<br/><br/><br/><br/>

# Squadron

911 Simulator and online educational tools developed for Regina Fire & Protective Services
<br/>

**Contributors:** Paul Hewitt, Shrey Patel, Sopuruchukwu Gift Ugwuonah

**Required Documentation & Deliverables:**
* [Deliverable #1](https://github.com/paulhewitt/Squadron/tree/master/Deliverable%20%231)
* [Deliverable #2](https://github.com/paulhewitt/Squadron/tree/master/Deliverable%20%232)
* [Deliverable #3](https://github.com/paulhewitt/Squadron/tree/master/Deliverable%20%233)
* [Deliverable #4](https://github.com/paulhewitt/Squadron/tree/master/Deliverable%20%234)
* [Frontend Code](https://github.com/paulhewitt/Squadron/tree/master/Deliverable%20%234/Code/squadron)
* [Backend Code](https://github.com/paulhewitt/Squadron/tree/master/Deliverable%20%234/Code/Backend)
* [USM](https://github.com/paulhewitt/Squadron/blob/master/Deliverable%20%233/USM.PNG)
* [Project Presentation](https://github.com/paulhewitt/Squadron/blob/master/Deliverable%20%234/Squadron%20Presentation.pdf)
* [Project Video]()
      
## Project Information
**Project Background**

Right now, the Regina Fire & Protective Service (RFPS) has no modern way of communicating with, and educating both parents and kids. The only means of education at the moment is travelling to schools, and putting on informative assemblies/workshops for students. They then provide the students with documents and pamphlets with the hopes that they will bring them home to their parents. Furthermore, they have no real way to simulate the modern smartphone for 911 education. They are currently using an obsolete wired phone to do so, much to the confusion of students who have grown up in the era of touch screen smartphones. They would like this smartphone simulation to be able to dial a mock 911 operator, and have a RFPS staff member to be able to receive this phone call and communicate with the student.

**Project Implementation**

Squadron is an application with three distinct modules. The first of these modules contains FAQs. It will not only contain information allowing parents/students to educate themselves, but act as an always online reference in case of emergencies. The second module is a phone simulator. It is modelled after the iOS phone application. Using Twilio, this phone is able to make real, live, outgoing phone calls to the number of choice. This allows students to dial 911 on a realistic looking phone interface, and talk to a real human being. The actual 911 emergency lines will remain unaffected. The third module is a demo, or practice version of the phone module. This allows students and parents alike to practice using the simulator at home, with out actually hitting the backend, and thus making an outgoing call. At the time of writing, this demo module is still a work in progress. This web app will act as a portal of information that will always be online, and thus always accessible.

## Installation Instructions

### Prerequisites
#### Installing Node

Before you begin, your development environment must include Node.js and an npm package manager. By installing Node, the npm client will be installed by default. The download for Node can be found [here](https://nodejs.org/en/).

#### Installing Angular

To install globally
```bash
npm install -g @angular/cli
```

To install locally
```bash
npm install @angular/cli
```

### Running Squadron

Acquire a copy of this repository, and navigate to the frontend code `Squadron/Deliverable #4/Code/squadron`. Run the npm install command found below to download all required dependencies
```bash
npm install
```

Finally, run ng serve to run the appication's front end.
```bash
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your web browser. Squadron's front end will be running

In another terminal window, navigate to the backend code `Squadron/Deliverable #4/Code/Backend`. Run the node server command found below to spin up the express server. You may need to `npm install` again before starting the server
```bash
node server
```

If you would like to actually use the outgoing call functionality, please send [Paul](mailto:paul@hewitt.dev?subject=SquadronAPI) an email to request an API Key. Due to the sensitive nature of exposing API Keys, they have been omitted from this repository. A working demo of the outgoing call functionality can be seen in our presentation video. 

## User Guide

Once in Squadron, the application is quite self explanatory. In order to change the phone number that recieves phone calls, click on the Admin button in the top right of the screen, and enter in the password. For demo purposes, this password is currently `123`. In order to place a phone call, a user must navigate to the phone module, and that is done by clicking on the green phone button on the main menu. The phone will only make an outgoing call if 911 is successfully entered into the phone dialer by using the key pad buttons. If ever a mistake is made while dialing, the backspace button can be clicked on the bottom right of the keypad. If at anytime a user woud like to return to the home screen, the logo in the top left hand corner of the application can be clicked.
