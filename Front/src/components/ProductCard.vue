/* eslint-disable */
<template>
  <div class="column">
    <div class="col-md-6 col-lg-3 col-sm-6 col-xs-6">
      <div class="card h-100">
        <img class="card-img-top" :src="imageLink + product.file" alt="Card image cap" />
        <div class="card-body">
          <div class="row">
            <div class="col-md-7 col-lg-7 col-sm-7 col-xs-7">
              <h5 class="card-title">
                <router-link
                  :to="{name: 'product', params: {id: product._id, title: product.title, user: product.username }}"
                >
                  <strong>{{product.title}}</strong>
                </router-link>
              </h5>
            </div>
            <div class="col-md-5 col-lg-5 col-sm-5 col-xs-5">
              <h5><strong>${{product.price}}</strong></h5>
            </div>
          </div>
          <p class="small">
            Designed by:
            <router-link :to="{name: 'profile', params: {id: product.user}}">{{product.username}}</router-link>
          </p>
          <ul class="rating">
            <li>
              <i class="icon-star icons"></i>
            </li>
            <li>
              <i class="icon-star icons"></i>
            </li>
            <li>
              <i class="icon-star icons"></i>
            </li>
            <li class="old">
              <i class="icon-star icons"></i>
            </li>
            <li class="old">
              <i class="icon-star icons"></i>
            </li>
          </ul>
        </div>
        <div class="card-der">
          <div v-if="paid && paid.length">
            <h4 class="cart">
              <button class="btn btn-primary">
                <i class="icon-cart" @click="addToCart()"></i>
              </button>
            </h4>
          </div>
          <div v-if="free && free.length">
            <h4 class="cart">
              <button class="btn btn-primary">
                <router-link
                  :to="{name: 'market', params: {user: this.$store.state.user, id: product._id}}"
                >
                  <i class="icon-download" @click="download(product)"></i>
                </router-link>
              </button>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";
import axios from "axios";
export default {
  components: {
    ProductCard
  },
  props: ["product"],
  data() {
    return {
      imageLink: "http://localhost:3000/",
      user: this.$store.state.name,
      free: [],
      paid: []
    };
  },
  mounted() {
    if (this.product.price === "0") {
      this.free.push("this is a free product");
    } else {
      this.paid.push("this product has a price");
    }
    return this.$store.state.profile;
  },

  methods: {
    addToCart() {
      let url = "http://localhost:3000/";
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        user: this.$store.state.user,
        quantity: 1
      });
      this.$router.push({ name: "cart" });
    },
    download(product) {
      axios({
        url: `http://localhost:8080/static/img/coffe.cb4edda.jpg`,
        method: "GET",
        responseType: "blob"
      })
        .then(response => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", "file.jpeg");
          document.body.appendChild(fileLink);

          fileLink.click();
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
      axios.post(
        "http://localhost:3000/market",
        {
          username: this.product.username,
          price: this.product.price,
          title: this.product.title
        },
        {
          params: {
            downloadby: this.$store.state.user,
            product: this.product._id,
            productby: this.product.user
          }
        }
      );
    }
  }
};
</script>

<style>
.card {
  padding: 3px;
  margin: 20px 0px 20px 0px;
}

.card-img-top {
  width: 300px;
  height: 170px;
}

.card-body {
  width: 300px;
  height: 80px;
  text-align: left;
}

.card-der {
  text-align: right;
}

.card-title {
  text-transform: uppercase;
  color:green;
}

.card-text {
  width: 150px;
}
</style>