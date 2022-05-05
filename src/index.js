import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// 1. instaliramo npm i react-router-dom
// 2. dodajemo <BrowserRouter> u root render
// 3. dodajemo npm i react-google-button
// 4. otvaramo stranicu https://firebase.google.com/ i pritisnemo dugme get started
// 5. nakon toga pritisnemo dugme add project
// 6. iskljucimo google analizu i pritisnemo create project
// 7. nakon sto se projekt kreira pritisnemo continue
// 8. pritisnemo web dugme </>
// 9. napisemo ime aplikacije i pritisnemo register app
// 10. pojavit ce nam se dokumentaija oko instalacije firebase lokalno
// 11. u terminal upisujemo npm install firebase
// 12. nakon sto se instalacija zavrsi kreiramo firebase.js fajl
// 13. nakon sto dodamo kod u firebase.js fajl pritisnemo go to docs na web stranici
// 14. pritisnemo go to console i odaberemo nas projekat
// 15. pritisnemo authentication dugme
// 16. pritisnemo sign-in-method 
// 17. odaberemo google kao additional provider i pritisnemo ebable
// 18. dodamo nas email i pritisnemo save
// 19. kada to sve zavrsimo ponovo odemo na go to docs
// 20. pritisnemo build ikonu
// 21. pritisnemo authentication -> web -> get started
// 22. kopiramo import { getAuth } from "firebase/auth"; u firebase.js fajl
// 23. kopiramo const auth = getAuth(app); na samo dno istog fajla
// 24. dodajemo export const auth = getAuth(app);
// 25. kreiramo folder context i unutar njega kreiramo AuthContext.js fajl
// 26. pisemo kod unutar AuthContext.js fajla
// 27. dodajemo import { GoogleAuthProvider } from "firebase/auth"; u AuthContext.js fajl
// 28. dodajemo const provider = new GoogleAuthProvider(); u AuthContext.js fajl