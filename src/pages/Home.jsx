import React from "react";
import $ from "jquery";
import Hero from "../Components/Home/Hero";
import GridCategories from "../Components/Home/GridCategories";

function Home() {
  return (
    <div class="wrapper" id="wrapper">
      {/* hero section */}
      <Hero />
      {/* Grid Category */}
      <GridCategories />

      <section class="jnr__call__to__action bg-pngimage--3">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="jnr__call__action__wrap d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between align-items-center">
                <div class="callto__action__inner">
                  <h2 class="wow flipInX" data-wow-delay="0.95s">
                    How To Enroll Your Child In A class ?
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor{" "}
                  </p>
                </div>
                <div class="callto__action__btn">
                  <a class="dcare__btn btn__white" href="google.com">
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="junior__classes__area section-lg-padding--top section-padding--md--bottom bg--white">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12">
              <div class="section__title text-center">
                <h2 class="title__line">Choose Your Classes</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunte magna aliquaet, consectetempora
                  incidunt
                </p>
              </div>
            </div>
          </div>
          <div class="row classes__wrap activation__one owl-carousel owl-theme clearfix mt--40">
            <div class="col-lg-4 col-sm-6">
              <div class="junior__classes">
                <div class="classes__thumb">
                  <a href="class-details.html">
                    <img
                      src="./assets/images/class/md-img/1.jpg"
                      alt="class ./assets/images"
                    />
                  </a>
                </div>
                <div class="classes__inner">
                  <div class="classes__icon">
                    <img
                      src="./assets/images/class/star/1.png"
                      alt="starr ./assets/images"
                    />
                    <span>$50</span>
                  </div>
                  <div class="class__details">
                    <h4>
                      <a href="class-details.html">Drawing Class</a>
                    </h4>
                    <ul class="class__time">
                      <li>Infant Care : 0.8 - 2.5 Years</li>
                      <li>Class Size : 8</li>
                    </ul>
                    <div class="class__btn">
                      <a
                        class="dcare__btn btn__gray min__height-btn"
                        href="class-details.html">
                        Admission Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="junior__classes">
                <div class="classes__thumb">
                  <a href="class-details.html">
                    <img
                      src="./assets/images/class/md-img/2.jpg"
                      alt="class ./assets/images"
                    />
                  </a>
                </div>
                <div class="classes__inner">
                  <div class="classes__icon">
                    <img
                      src="./assets/images/class/star/1.png"
                      alt="starr ./assets/images"
                    />
                    <span>$50</span>
                  </div>
                  <div class="class__details">
                    <h4>
                      <a href="class-details.html">Active Learning</a>
                    </h4>
                    <ul class="class__time">
                      <li>Infant Care : 0.8 - 2.5 Years</li>
                      <li>Class Size : 8</li>
                    </ul>
                    <div class="class__btn">
                      <a
                        class="dcare__btn btn__gray min__height-btn"
                        href="class-details.html">
                        Admission Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="junior__classes">
                <div class="classes__thumb">
                  <a href="class-details.html">
                    <img
                      src="./assets/images/class/md-img/3.jpg"
                      alt="class ./assets/images"
                    />
                  </a>
                </div>
                <div class="classes__inner">
                  <div class="classes__icon">
                    <img
                      src="./assets/images/class/star/1.png"
                      alt="starr ./assets/images"
                    />
                    <span>$50</span>
                  </div>
                  <div class="class__details">
                    <h4>
                      <a href="class-details.html">Swimming Classg</a>
                    </h4>
                    <ul class="class__time">
                      <li>Infant Care : 0.8 - 2.5 Years</li>
                      <li>Class Size : 8</li>
                    </ul>
                    <div class="class__btn">
                      <a
                        class="dcare__btn btn__gray min__height-btn"
                        href="class-details.html">
                        Admission Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="junior__classes">
                <div class="classes__thumb">
                  <a href="class-details.html">
                    <img
                      src="./assets/images/class/md-img/3.jpg"
                      alt="class ./assets/images"
                    />
                  </a>
                </div>
                <div class="classes__inner">
                  <div class="classes__icon">
                    <img
                      src="./assets/images/class/star/1.png"
                      alt="starr ./assets/images"
                    />
                    <span>$50</span>
                  </div>
                  <div class="class__details">
                    <h4>
                      <a href="class-details.html">Swimming Classg</a>
                    </h4>
                    <ul class="class__time">
                      <li>Infant Care : 0.8 - 2.5 Years</li>
                      <li>Class Size : 8</li>
                    </ul>
                    <div class="class__btn">
                      <a
                        class="dcare__btn btn__gray min__height-btn"
                        href="class-details.html">
                        Admission Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="junior__classes">
                <div class="classes__thumb">
                  <a href="class-details.html">
                    <img
                      src="./assets/images/class/md-img/1.jpg"
                      alt="class ./assets/images"
                    />
                  </a>
                </div>
                <div class="classes__inner">
                  <div class="classes__icon">
                    <img
                      src="./assets/images/class/star/1.png"
                      alt="starr ./assets/images"
                    />
                    <span>$50</span>
                  </div>
                  <div class="class__details">
                    <h4>
                      <a href="class-details.html">Swimming Classg</a>
                    </h4>
                    <ul class="class__time">
                      <li>Infant Care : 0.8 - 2.5 Years</li>
                      <li>Class Size : 8</li>
                    </ul>
                    <div class="class__btn">
                      <a
                        class="dcare__btn btn__gray min__height-btn"
                        href="class-details.html">
                        Admission Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="junior__testimonial__area bg-image--2 section-padding--lg">
        <div class="container">
          <div class="row">
            <div class="offset-lg-2 col-lg-8 col-md-12 col-sm-12">
              <div class="testimonial__container">
                <div class="tes__activation--1 owl-carousel owl-theme">
                  <div class="testimonial__bg">
                    <div class="testimonial text-center">
                      <div class="testimonial__inner">
                        <div class="test__icon">
                          <img
                            src="./assets/images/testimonial/icon/1.png"
                            alt="icon ./assets/images"
                          />
                        </div>
                        <div class="client__details">
                          <p>
                            Lorem ipsum dolor t dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostexercitation ullamco laboris
                            nisimollit anim id est lsunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas sit aspernatd.
                          </p>
                          <div class="client__info">
                            <h6>Lora alica</h6>
                            <span>Gardients of student</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="testimonial__bg">
                    <div class="testimonial text-center">
                      <div class="testimonial__inner">
                        <div class="test__icon">
                          <img
                            src="./assets/images/testimonial/icon/1.png"
                            alt="icon ./assets/images"
                          />
                        </div>
                        <div class="client__details">
                          <p>
                            Kohinur ipsum dolor t dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostexercitation ullamco
                            laboris nisimollit anim id est lsunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatd.
                          </p>
                          <div class="client__info">
                            <h6>Kohinur alica</h6>
                            <span>Gardients of student</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="testimonial__bg">
                    <div class="testimonial text-center">
                      <div class="testimonial__inner">
                        <div class="test__icon">
                          <img
                            src="./assets/images/testimonial/icon/1.png"
                            alt="icon ./assets/images"
                          />
                        </div>
                        <div class="client__details">
                          <p>
                            Najnin ipsum dolor t dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostexercitation ullamco laboris
                            nisimollit anim id est lsunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas sit aspernatd.
                          </p>
                          <div class="client__info">
                            <h6>Najnin alica</h6>
                            <span>Gardients of student</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="junior__gallery__area bg--white section-padding--lg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="section__title text-center">
                <h2 class="title__line">Our Gallery</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunte magna aliquaet, consectetempora
                  incidunt
                </p>
              </div>
            </div>
          </div>
          <div class="row galler__wrap mt--40">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="gallery wow fadeInUp">
                <div class="gallery__thumb">
                  <a href="google.com">
                    <img
                      src="./assets/images/gallery/gallery-1/1.jpg"
                      alt="gallery ./assets/images"
                    />
                  </a>
                </div>
                <div class="gallery__hover__inner">
                  <div class="gallery__hover__action">
                    <ul class="gallery__zoom">
                      <li>
                        <a
                          href="./assets/images/gallery/big-img/1.jpg"
                          data-lightbox="grportimg"
                          data-title="My caption">
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="gallery-details.html">
                          <i class="fa fa-link"></i>
                        </a>
                      </li>
                    </ul>
                    <h4 class="gallery__title">
                      <a href="google.com">Creating Funny Things</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="gallery wow fadeInUp">
                <div class="gallery__thumb">
                  <a href="google.com">
                    <img
                      src="./assets/images/gallery/gallery-1/2.jpg"
                      alt="gallery ./assets/images"
                    />
                  </a>
                </div>
                <div class="gallery__hover__inner">
                  <div class="gallery__hover__action">
                    <ul class="gallery__zoom">
                      <li>
                        <a
                          href="./assets/images/gallery/big-img/2.jpg"
                          data-lightbox="grportimg"
                          data-title="My caption">
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="gallery-details.html">
                          <i class="fa fa-link"></i>
                        </a>
                      </li>
                    </ul>
                    <h4 class="gallery__title">
                      <a href="google.com">Creating Funny Things</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="gallery wow fadeInUp">
                <div class="gallery__thumb">
                  <a href="google.com">
                    <img
                      src="./assets/images/gallery/gallery-1/3.jpg"
                      alt="gallery ./assets/images"
                    />
                  </a>
                </div>
                <div class="gallery__hover__inner">
                  <div class="gallery__hover__action">
                    <ul class="gallery__zoom">
                      <li>
                        <a
                          href="./assets/images/gallery/big-img/3.jpg"
                          data-lightbox="grportimg"
                          data-title="My caption">
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="gallery-details.html">
                          <i class="fa fa-link"></i>
                        </a>
                      </li>
                    </ul>
                    <h4 class="gallery__title">
                      <a href="google.com">Creating Funny Things</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="gallery wow fadeInUp">
                <div class="gallery__thumb">
                  <a href="google.com">
                    <img
                      src="./assets/images/gallery/gallery-1/4.jpg"
                      alt="gallery ./assets/images"
                    />
                  </a>
                </div>
                <div class="gallery__hover__inner">
                  <div class="gallery__hover__action">
                    <ul class="gallery__zoom">
                      <li>
                        <a
                          href="./assets/images/gallery/big-img/4.jpg"
                          data-lightbox="grportimg"
                          data-title="My caption">
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="gallery-details.html">
                          <i class="fa fa-link"></i>
                        </a>
                      </li>
                    </ul>
                    <h4 class="gallery__title">
                      <a href="google.com">Creating Funny Things</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="gallery wow fadeInUp">
                <div class="gallery__thumb">
                  <a href="google.com">
                    <img
                      src="./assets/images/gallery/gallery-1/5.jpg"
                      alt="gallery ./assets/images"
                    />
                  </a>
                </div>
                <div class="gallery__hover__inner">
                  <div class="gallery__hover__action">
                    <ul class="gallery__zoom">
                      <li>
                        <a
                          href="./assets/images/gallery/big-img/5.jpg"
                          data-lightbox="grportimg"
                          data-title="My caption">
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="gallery-details.html">
                          <i class="fa fa-link"></i>
                        </a>
                      </li>
                    </ul>
                    <h4 class="gallery__title">
                      <a href="google.com">Creating Funny Things</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="gallery wow fadeInUp">
                <div class="gallery__thumb">
                  <a href="google.com">
                    <img
                      src="./assets/images/gallery/gallery-1/6.jpg"
                      alt="gallery ./assets/images"
                    />
                  </a>
                </div>
                <div class="gallery__hover__inner">
                  <div class="gallery__hover__action">
                    <ul class="gallery__zoom">
                      <li>
                        <a
                          href="./assets/images/gallery/big-img/6.jpg"
                          data-lightbox="grportimg"
                          data-title="My caption">
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="gallery-details.html">
                          <i class="fa fa-link"></i>
                        </a>
                      </li>
                    </ul>
                    <h4 class="gallery__title">
                      <a href="google.com">Creating Funny Things</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="jnr__blog_area section-padding--lg bg-image--3">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="section__title text-center white--title">
                <h2 class="title__line">Recent Blog</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunte magna aliquaet, consectetempora
                  incidunt
                </p>
              </div>
            </div>
          </div>
          <div class="row blog__wrapper mt--40">
            <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInLeft">
              <article class="blog">
                <div class="blog__date">
                  <span>Date : 10th November, 2017</span>
                </div>
                <div class="blog__thumb">
                  <a href="blog-details.html">
                    <img
                      src="./assets/images/blog/md-img/1.jpg"
                      alt="blog ./assets/images"
                    />
                  </a>
                </div>
                <div class="blog__inner">
                  <span>Children Blog : Post By Ariana</span>
                  <h4>
                    <a href="blog-details.html">
                      Basic Knowledge About Drawing
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ad modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.
                  </p>
                  <ul class="blog__meta d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                    <li>
                      <a href="google.com">Comments : 05</a>
                    </li>
                    <li>
                      <a href="google.com">Like : 07</a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
              <article class="blog">
                <div class="blog__date">
                  <span>Date : 10th November, 2017</span>
                </div>
                <div class="blog__thumb">
                  <a href="blog-details.html">
                    <img
                      src="./assets/images/blog/md-img/2.jpg"
                      alt="blog ./assets/images"
                    />
                  </a>
                </div>
                <div class="blog__inner">
                  <span>Children Blog : Post By Jonson</span>
                  <h4>
                    <a href="blog-details.html">Study Tour</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ad modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.
                  </p>
                  <ul class="blog__meta d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                    <li>
                      <a href="google.com">Comments : 05</a>
                    </li>
                    <li>
                      <a href="google.com">Like : 07</a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
              <article class="blog">
                <div class="blog__date">
                  <span>Date : 10th November, 2017</span>
                </div>
                <div class="blog__thumb">
                  <a href="blog-details.html">
                    <img
                      src="./assets/images/blog/md-img/3.jpg"
                      alt="blog ./assets/images"
                    />
                  </a>
                </div>
                <div class="blog__inner">
                  <span>Children Blog : Post By Michel Jack</span>
                  <h4>
                    <a href="blog-details.html">Childrens Day</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ad modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.
                  </p>
                  <ul class="blog__meta d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                    <li>
                      <a href="google.com">Comments : 05</a>
                    </li>
                    <li>
                      <a href="google.com">Like : 07</a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="junior__upcomming__area section-padding--lg bg--white">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="section__title text-center">
                <h2 class="title__line">Up Coming Event</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunte magna aliquaet, consectetempora
                  incidunt
                </p>
              </div>
            </div>
          </div>
          <div class="row upcomming__wrap mt--40">
            <div class="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
              <div class="upcomming__event">
                <div class="upcomming__thumb">
                  <img
                    src="./assets/images/upcomming/1.png"
                    alt="upcomming ./assets/images"
                  />
                </div>
                <div class="upcomming__inner">
                  <h6>
                    <a href="event-details.html">Todler Art Exhibition</a>
                  </h6>
                  <p>
                    Lor error sit volupta item accusantim doloremque laudantium,
                    toe aperiam, eaque ipsa quae ab illoe invenveritatis et
                    quasi architecto beatae viliquam quaerat voluptatem.
                  </p>
                  <ul class="event__time">
                    <li>
                      <i class="fa fa-home"></i>Childrens Club, Uttara, Dhaka
                    </li>
                    <li>
                      <i class="fa fa-clock-o"></i>10.00 am to 1.00 pm
                    </li>
                    <li>
                      <i class="fa fa-calendar"></i>30th Dec, 2017
                    </li>
                  </ul>
                </div>
                <div class="event__occur">
                  <img
                    src="./assets/images/upcomming/shape/1.png"
                    alt="shape ./assets/images"
                  />
                  <div class="enent__pub">
                    <span class="time">21st </span>
                    <span class="bate">Dec,2017</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
              <div class="upcomming__event">
                <div class="upcomming__thumb">
                  <img
                    src="./assets/images/upcomming/2.png"
                    alt="upcomming ./assets/images"
                  />
                </div>
                <div class="upcomming__inner">
                  <h6>
                    <a href="event-details.html">Childrens Day Celebration</a>
                  </h6>
                  <p>
                    Lor error sit volupta item accusantim doloremque laudantium,
                    toe aperiam, eaque ipsa quae ab illoe invenveritatis et
                    quasi architecto beatae viliquam quaerat voluptatem.
                  </p>
                  <ul class="event__time">
                    <li>
                      <i class="fa fa-home"></i>Childrens Club, Uttara, Dhaka
                    </li>
                    <li>
                      <i class="fa fa-clock-o"></i>10.00 am to 1.00 pm
                    </li>
                    <li>
                      <i class="fa fa-calendar"></i>30th Dec, 2017
                    </li>
                  </ul>
                </div>
                <div class="event__occur">
                  <img
                    src="./assets/images/upcomming/shape/1.png"
                    alt="shape ./assets/images"
                  />
                  <div class="enent__pub">
                    <span class="time">21st </span>
                    <span class="bate">Dec,2017</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bcare__subscribe subscribe--1">
        <div class="container bg__cat--3">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-lg-12">
              <div class="subscribe__inner">
                <h2>Subscribe To Our Special Offers</h2>
                <div class="newsletter__form">
                  <div class="input__box">
                    <div id="mc_embed_signup">
                      <form
                        action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        class="validate"
                        target="_blank"
                        novalidate>
                        <div
                          id="mc_embed_signup_scroll"
                          class="htc__news__inner">
                          <div class="news__input">
                            <input
                              type="email"
                              value=""
                              name="EMAIL"
                              class="email"
                              id="mce-EMAIL"
                              placeholder="Enter Your E-mail"
                              required
                            />
                          </div>
                          {/* <div
                              style="position: absolute; left: -5000px;"
                              aria-hidden="true">
                              <input
                                type="text"
                                name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                                tabindex="-1"
                                value=""
                              />
                            </div> */}
                          <div class="clearfix subscribe__btn">
                            <input
                              class="bst__btn btn--white__color"
                              type="submit"
                              value="Send Now"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="cartbox-wrap">
        <div class="cartbox text-right">
          <button class="cartbox-close">
            <i class="zmdi zmdi-close"></i>
          </button>
          <div class="cartbox__inner text-left">
            <div class="cartbox__items">
              <div class="cartbox__item">
                <div class="cartbox__item__thumb">
                  <a href="product-details.html">
                    <img
                      src="./assets/images/product/sm-pro/1.jpg"
                      alt="small thumbnail"
                    />
                  </a>
                </div>
                <div class="cartbox__item__content">
                  <h5>
                    <a href="product-details.html" class="product-name">
                      brown jacket
                    </a>
                  </h5>
                  <p>
                    Qty: <span>01</span>
                  </p>
                  <span class="price">$15</span>
                </div>
                <button class="cartbox__item__remove">
                  <i class="fa fa-trash"></i>
                </button>
              </div>

              <div class="cartbox__item">
                <div class="cartbox__item__thumb">
                  <a href="product-details.html">
                    <img
                      src="./assets/images/product/sm-pro/2.jpg"
                      alt="small thumbnail"
                    />
                  </a>
                </div>
                <div class="cartbox__item__content">
                  <h5>
                    <a href="product-details.html" class="product-name">
                      long sleeve t-shirt
                    </a>
                  </h5>
                  <p>
                    Qty: <span>01</span>
                  </p>
                  <span class="price">$25</span>
                </div>
                <button class="cartbox__item__remove">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
              <div class="cartbox__item">
                <div class="cartbox__item__thumb">
                  <a href="product-details.html">
                    <img
                      src="./assets/images/product/sm-pro/3.jpg"
                      alt="small thumbnail"
                    />
                  </a>
                </div>
                <div class="cartbox__item__content">
                  <h5>
                    <a href="product-details.html" class="product-name">
                      black polo shirt
                    </a>
                  </h5>
                  <p>
                    Qty: <span>01</span>
                  </p>
                  <span class="price">$30</span>
                </div>
                <button class="cartbox__item__remove">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
            <div class="cartbox__total">
              <ul>
                <li>
                  <span class="cartbox__total__title">Subtotal</span>
                  <span class="price">$70</span>
                </li>
                <li class="shipping-charge">
                  <span class="cartbox__total__title">Shipping Charge</span>
                  <span class="price">$05</span>
                </li>
                <li class="grandtotal">
                  Total<span class="price">$75</span>
                </li>
              </ul>
            </div>
            <div class="cartbox__buttons">
              <a class="dcare__btn" href="cart.html">
                <span>View cart</span>
              </a>
              <a class="dcare__btn" href="checkout.html">
                <span>Checkout</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="accountbox-wrapper">
        <div class="accountbox">
          <div class="accountbox__inner">
            <h4>continue to register</h4>
            <div class="accountbox__login">
              <form action="google.com">
                <div class="single-input">
                  <input type="text" placeholder="User name" />
                </div>
                <div class="single-input">
                  <input type="email" placeholder="E-mail" />
                </div>
                <div class="single-input">
                  <input type="text" placeholder="Phone" />
                </div>
                <div class="single-input">
                  <input type="password" placeholder="Password" />
                </div>
                <div class="single-input">
                  <input type="password" placeholder="Confirm password" />
                </div>
                <div class="single-input text-center">
                  <button type="submit" class="sign__btn">
                    Sign Up Now
                  </button>
                </div>
                <div class="accountbox-login__others text-center">
                  <h6>or register with</h6>
                  <ul class="dacre__social__link d-flex justify-content-center">
                    <li class="facebook">
                      <a target="_blank" href="https://www.facebook.com/">
                        <span class="ti-facebook"></span>
                      </a>
                    </li>
                    <li class="twitter">
                      <a target="_blank" href="https://twitter.com/">
                        <span class="ti-twitter"></span>
                      </a>
                    </li>
                    <li class="pinterest">
                      <a target="_blank" href="google.com">
                        <span class="ti-google"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            <span class="accountbox-close-button">
              <i class="zmdi zmdi-close"></i>
            </span>
          </div>
          <h3>Have an account ? Login Fast</h3>
        </div>
      </div>

      <div class="login-wrapper">
        <div class="accountbox">
          <div class="accountbox__inner">
            <h4>Login to Continue</h4>
            <div class="accountbox__login">
              <form action="google.com">
                <div class="single-input">
                  <input type="email" placeholder="E-mail" />
                </div>
                <div class="single-input">
                  <input type="password" placeholder="Password" />
                </div>
                <div class="single-input text-center">
                  <button type="submit" class="sign__btn">
                    SUBMIT
                  </button>
                </div>
                <div class="accountbox-login__others text-center">
                  <ul class="dacre__social__link d-flex justify-content-center">
                    <li class="facebook">
                      <a target="_blank" href="https://www.facebook.com/">
                        <span class="ti-facebook"></span>
                      </a>
                    </li>
                    <li class="twitter">
                      <a target="_blank" href="https://twitter.com/">
                        <span class="ti-twitter"></span>
                      </a>
                    </li>
                    <li class="pinterest">
                      <a target="_blank" href="google.com">
                        <span class="ti-google"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            <span class="accountbox-close-button">
              <i class="zmdi zmdi-close"></i>
            </span>
          </div>
          <h3>Have an account ? Login Fast</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
