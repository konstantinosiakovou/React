import './App.css'; 
import './styles.css';
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Booking from "./Pages/booking";

// function header(){
//   return <h1>Hello World</h1>
// }


function App() {
  return (
    <div className="App">
      <header><div class="logo"><img src="Logo .svg" alt="Little Lemon Logo" /></div>
      <nav>
        <ul>
            {/* <li><Link to="/">HomePage</Link></li> */}
            <li><Link to="/booking">Booking</Link></li>
            {/* <li><Link to="menu.html">Menu</Link></li> 
            <li><a href="menu.html">Reservations</a></li>
            <li><a href="book.html">Order Online</a></li>
            <li><a href="menu.html">Online</a></li>  */} 
        </ul>
    </nav>
    <Routes>
      {/* <Route path="/Booking" element={<Booking />} /> */}
      <Route path="/booking" element={<Booking />} /> 
    </Routes>
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

//   return <header/>
}

export default App;
