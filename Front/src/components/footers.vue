/* eslint-disable */
<template>
  <!-- Start Brand Area -->
  <div>
    <div class="htc__brand__area bg__cat--4">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="ht__brand__inner">
              <ul class="brand__list owl-carousel clearfix">
                <li>
                  <a href="#">
                    <img src="../assets/images/brand/1.png" alt="brand images" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../assets/images/brand/2.png" alt="brand images" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../assets/images/brand/3.png" alt="brand images" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../assets/images/brand/4.png" alt="brand images" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../assets/images/brand/5.png" alt="brand images" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../assets/images/brand/5.png" alt="brand images" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../assets/images/brand/1.png" alt="brand images" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../assets/images/brand/2.png" alt="brand images" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Start Footer Area -->
    <footer id="htc__footer">
      <!-- Start Footer Widget -->
      <div class="footer__container bg__cat--1">
        <div class="container">
          <div class="row">
            <!-- Start Single Footer Widget -->
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="footer">
                <h2 class="title__line--2">ABOUT US</h2>
                <div class="ft__details">
                  <p>Create and design beautiful CAM,BIM components with tools void of complexity. Sell your designs with full customer support and our SEM</p>
                  <div class="ft__social__link">
                    <ul class="social__link">
                      <li>
                        <a href="#">
                          <i class="icon-twitter icons"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i class="icon-instagram icons"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i class="icon-facebook icons"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i class="icon-whatsapp icons"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i class="icon-linkedin icons"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Single Footer Widget -->
            <!-- Start Single Footer Widget -->
            <div class="col-md-2 col-sm-4 col-xs-4 xmt-40">
              <div class="footer">
                <h2 class="title__line--2">information</h2>
                <div class="ft__inner">
                  <ul class="ft__list">
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                    <li>
                      <a href="#">Privacy & Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms & Condition</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- End Single Footer Widget -->
            <!-- Start Single Footer Widget -->
            <div class="col-md-2 col-sm-4 col-xs-4 xmt-40 smt-40">
              <div class="footer">
                <h2 class="title__line--2">my account</h2>
                <div class="ft__inner">
                  <ul class="ft__list">
                    <li>
                      <router-link
                        :to="{name: 'profile', params: {user: this.$store.state.name, id: this.$store.state.user}}"
                      >My Account</router-link>
                    </li>
                    <li>
                      <a href="/cart">My Cart</a>
                    </li>
                    <li v-if="!loggedIn">
                      <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li v-if="loggedIn">
                      <router-link class="nav-link" to="/login">Logout</router-link>
                    </li>
                    <li>
                      <a href="wishlist.html">Upload</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- End Single Footer Widget -->
            <!-- Start Single Footer Widget -->
            <div class="col-md-2 col-sm-4 col-xs-4 xmt-40 smt-40">
              <div class="footer">
                <h2 class="title__line--2">Our service</h2>
                <div class="ft__inner">
                  <ul class="ft__list">
                    <li>
                      <a href="cart.html">My Cart</a>
                    </li>
                    <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- End Single Footer Widget -->
            <!-- Start Single Footer Widget -->
            <div class="col-md-3 col-sm-6 col-xs-12 xmt-40 smt-40">
              <div class="footer">
                <h2 class="title__line--2">NEWSLETTER</h2>
                <div class="ft__inner">
                  <div class="news__input">
                    <input type="text" placeholder="Your Mail*" />
                    <div class="send__btn">
                      <a class="fr__btn" href="mailto:peppubuild@gmail.com">Send Mail</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Single Footer Widget -->
          </div>
        </div>
      </div>
      <!-- End Footer Widget -->
      <!-- Start Copyright Area -->
      <div class="htc__copyright bg__cat--5">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="copyright__inner">
                <p>
                  Copyright© PeppuBuild 2020. All right reserved.
                </p>
                <a href="#">
                  <img src="images/others/shape/paypol.png" alt="payment images" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Copyright Area -->
    </footer>
  </div>
  <!-- End Footer Style -->
</template>

<script>
export default{
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
}
</script>
