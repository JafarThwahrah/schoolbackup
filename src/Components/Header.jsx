import React from "react";

function Header() {
  return (
    <div>
      <header id="header" class="jnr__header header--one clearfix">
        <div class="junior__header__top">
          <div class="container">
            <div class="row">
              <div class="col-md-7 col-lg-6 col-sm-12">
                <div class="jun__header__top__left">
                  <ul class="top__address d-flex justify-content-start align-items-center flex-wrap flex-lg-nowrap flex-md-nowrap">
                    <li>
                      <i class="fa fa-envelope"></i>
                      <a href="#">junior@mail.com</a>
                    </li>
                    <li>
                      <i class="fa fa-phone"></i>
                      <span>Contact Now :</span>
                      <a href="#">+003457289</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-5 col-lg-6 col-sm-12">
                <div class="jun__header__top__right">
                  <ul class="accounting d-flex justify-content-lg-end justify-content-md-end justify-content-start align-items-center">
                    <li>
                      <a class="login-trigger" href="#">
                        Login
                      </a>
                    </li>
                    <li>
                      <a class="accountbox-trigger" href="#">
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mainmenu__wrapper bg__cat--1 poss-relative header_top_line sticky__header">
          <div class="container">
            <div class="row d-none d-lg-flex">
              <div class="col-sm-4 col-md-6 col-lg-2 order-1 order-lg-1">
                <div class="logo">
                  <a href="index.html">
                    <img
                      src="./assets/images/logo/junior.png"
                      alt="logo images"
                    />
                  </a>
                </div>
              </div>
              <div class="col-sm-4 col-md-2 col-lg-9 order-3 order-lg-2">
                <div class="mainmenu__wrap">
                  <nav class="mainmenu__nav">
                    <ul class="mainmenu">
                      <li class="drop">
                        <a href="index.html">Home</a>
                      </li>
                      <li class="drop">
                        <a href="class-grid.html">Class</a>
                      </li>
                      <li class="drop">
                        <a href="event-grid.html">Event</a>
                      </li>
                      <li class="drop">
                        <a href="#">Pages</a>
                        <ul class="dropdown__menu">
                          <li>
                            <a href="about-us.html">about us</a>
                          </li>
                          <li>
                            <a href="service.html">our service</a>
                          </li>
                          <li>
                            <a href="class-details.html">class details</a>
                          </li>
                          <li>
                            <a href="gallery.html">gallery</a>
                          </li>
                          <li>
                            <a href="gallery-details.html">gallery Details</a>
                          </li>
                          <li>
                            <a href="cart.html">cart Page</a>
                          </li>
                          <li>
                            <a href="wishlist.html">wishlist page</a>
                          </li>
                          <li>
                            <a href="checkout.html">checkout page</a>
                          </li>
                        </ul>
                      </li>
                      <li class="drop">
                        <a href="shop-grid.html">Shop</a>{" "}
                      </li>
                      <li class="drop">
                        <a href="blog-grid.html">Blog</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-lg-1 col-sm-4 col-md-4 order-2 order-lg-3">
                <div class="shopbox d-flex justify-content-end align-items-center">
                  <a class="minicart-trigger" href="#">
                    <i class="fa fa-shopping-basket"></i>
                  </a>
                  <span>03</span>
                </div>
              </div>
            </div>
            <div class="mobile-menu d-block d-lg-none">
              <div class="logo">
                <a href="index.html">
                  <img src="./assets/images/logo/junior.png" alt="logo" />
                </a>
              </div>
              <a class="minicart-trigger" href="#">
                <i class="fa fa-shopping-basket"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
