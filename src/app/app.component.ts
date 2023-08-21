import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void{
    const firebaseConfig = {
      apiKey: "AIzaSyAFir9LUDwf4yahKyuMtk5fxvOpuyhvXx0",
      authDomain: "meuprojetoinsta-mt777.firebaseapp.com",
      projectId: "meuprojetoinsta-mt777",
      databaseUrl: "https://console.firebase.google.com/u/1/project/meuprojetoinsta-mt777/database/meuprojetoinsta-mt777-default-rtdb/data/~2F?hl=pt-br/",
      storageBucket: "meuprojetoinsta-mt777.appspot.com",
      messagingSenderId: "672462367884",
      appId: "1:672462367884:web:50f4a2e5b34d3078091fa9"
    };

    firebase.initializeApp(firebaseConfig);

  }
}
