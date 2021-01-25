<template>
  <nav id="nav-items" class="nav-items">
    <router-link class="nav-item" to="/">Home</router-link>
    <router-link class="nav-item" to="About">About</router-link>
    <router-link class="nav-item" to="Trivia">Trivia</router-link>
    <a href="javascript:void(0);" class="icon" v-on:click="toggleMenu()">
      <i class="fa fa-hamburger fa-2x"></i>
    </a>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleMenu: function() {
      var x = document.getElementById("nav-items");
      if (x.className === "nav-items") {
        x.className += " responsive";
      } else {
        x.className = "nav-items";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.nav-items {
  background-color: $color-1;
  overflow: hidden;

  .nav-item {
    float: left;
    color: $color-5;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-weight: bold;
    border-bottom: 5px $color-1 solid;


    &:hover {
      box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
      border-bottom: 5px $color-2 solid;
      color: $color-5;
    }

    &.active {
      background-color: $color-2;
      color: $color-1;
      border-bottom: 5px $color-2 solid;

    }
  }

  .icon {
    display: none;
  }
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  .nav-items a:not(:first-child) {
    display: none;
  }
  .nav-items a.icon {
    float: right;
    display: block;
    color: $color-5;
    margin-right: 10px;
    margin-top: 6px;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .nav-items.responsive {
    position: relative;
  }
  .nav-items.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .nav-items.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
