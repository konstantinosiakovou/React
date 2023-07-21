import './App.css'; 
import './styles.css';
import React from "react";

import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './App';
import Booking from './Pages/Booking.js';
import Menu from './Pages/Menu.js';
import Reservations from './Pages/Reservations.js';
import OrderOnline from './Pages/OrderOnline.js';
import Online from './Pages/Online.js';
import SignUp from './Pages/SignUp.js';





 function App() {
  const [number, setNumber] = React.useState(1);
  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }
  return (
    <div className="App">
      <header><div class="logo"><img src="Logo .svg" alt="Little Lemon Logo" /></div>
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/Booking">Booking</Link></li>
            <li><Link to="/Menu">Menu</Link></li> 
            <li><Link to="/Reservations">Reservations</Link></li>
            <li><Link to="/Booking">Order Online</Link></li>
            <li><Link to="/Online">Online</Link></li> 
            <li><Link to="/SignUp">SignUp</Link></li>
        </ul>
    </nav>
     
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="Booking" element={<Booking/>} />
      <Route path="menu" element={<Menu />} /> 
      <Route path="Reservations" element={<Reservations />} /> 
      <Route path="OrderOnline" element={<OrderOnline />} /> 
      <Route path="Online" element={<Online />} />
      <Route path="SignUp" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  
    </header>
    <main>
        <section>
            <article id="hero">
                <h1>Little Lemon</h1>
                <p>
                    Chicago<br></br>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="centeredimage"><img src="restauranfood.jpg" width="200px" heigh="100px" alt="restaurant food" /></div>

                <button class="button">Reserve a Table</button>
            </article>
        </section>
        <h1 align="left">This week specials!    <button class="buttonOnlineMenu" align="left">Online Menu</button></h1>
        <section>
            <div class="card">
                <h2>Greek Salad $12.99</h2>
                <img src="greek salad.jpg" width="100px" height="100px" alt="Greek Salad"/>
                <p>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                </p>
                <a href="menu.html" target="_blank">Order a delivery</a>
            </div>

            <div class="card">
                <h2>Bruchetta  $5.99</h2>
                <img src="bruchetta.svg" width="50%" height="50%" alt="Bruchetta"/>
                <p>
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
                </p>
                <a href="book.html" target="_blank">Order a delivery</a>
            </div>

            <div class="card">
                <h2>Lemon Desert   $5.99</h2>
                <img src="lemon dessert.jpg" width="50%" height="50%" alt="Lemon Dessert"/>
                <p>
                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                </p>
                <a href="menu.html" target="_blank">Order a delivery</a>
            </div>

        </section>
        <h1>Testimonials</h1>
        <section>
        <article>
                <h2>Greek Salad $12.99</h2>
                <img src="greek salad.jpg" width="100px" height="100px" alt="Greek Salad"/>
                <p>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                </p>
                <a href="menu.html" target="_blank">Order a delivery</a>
            </article>
            <article>
                <h2>Greek Salad $12.99</h2>
                <img src="greek salad.jpg" width="100px" height="100px" alt="Greek Salad"/>
                <p>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                </p>
                <a href="menu.html" target="_blank">Order a delivery</a>
            </article>
            <article>
                <h2>Greek Salad $12.99</h2>
                <img src="greek salad.jpg" width="100px" height="100px" alt="Greek Salad"/>
                <p>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                </p>
                <a href="menu.html" target="_blank">Order a delivery</a>
            </article>
        </section>
        <section>
        <div class="littlelemon">
                <h1>Little Lemon</h1>
                <p>
                    Chicago<br></br>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="littlelemonimage">
                <img src="../assets/Asset 20@4x.png" alt="asset" width="10%"/>
                </div>
        </div>
        </section>
    </main>
    <div class="footer-clean">
        <footer>
            <div class="container">
            <img src="../assets/Asset 20@4x.png" alt="asset" width="10%"/>
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Doormat Navigation</h3>
                        <ul>
                            <li><a href="/#">Home</a></li>
                            <li><a href="/#">About</a></li>
                            <li><a href="/#">menu</a></li>
                            <li><a href="/#">Reservations</a></li>
                            <li><a href="/#">Order Online</a></li>
                            <li><a href="/#">Login</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Contact</h3>
                        <ul>
                            <li><a href="/#">Address</a></li>
                            <li><a href="/#">Phone number</a></li>
                            <li><a href="/#">Email</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Social M edia Links</h3>
                        <div class="col-lg-3 item social"><a href="/#"><i class="icon ion-social-facebook"></i></a><a href="/#"><i class="icon ion-social-twitter"></i></a><a href="/#"><i class="icon ion-social-snapchat"></i></a><a href="/#"><i class="icon ion-social-instagram"></i></a>
                        <p class="copyright">Little Lemon © 2023</p>
                    </div>
                   
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </div>
  );



 }


export default App;
