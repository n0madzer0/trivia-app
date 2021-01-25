<template>
  <nav id="nav-items" class="nav-items">
    <router-link class="nav-item" to="Home">Home</router-link>
    <router-link class="nav-item" to="About">About</router-link>
    <router-link class="nav-item" to="Trivia">Trivia</router-link>
    <a href="javascript:void(0);" class="icon" v-on:click="toggleMenu()">
      <i class="fa fa-hamburger fa-2x"></i>
    </a>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
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
  background-color: #333;
  overflow: hidden;

  .nav-item {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;

    &:hover {
      background-color: #ddd;
      color: black;
    }

    &.active {
      background-color: #4caf50;
      color: white;
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
    color: white;
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