<template>
  <div>
    <div class="top-menu">
      <div class="search">
        <form>
          <input type="text" placeholder="" required="" />
          <input type="submit" value="" />
        </form>
      </div>
      <span class="menu"> </span>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <button @click="getClients()">button</button>
        <router-link to="/login">login</router-link>
        <router-link to="/register">register</router-link>
        <router-link to="/verify">verify</router-link>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="about">ABOUT</router-link></li>
          <li><router-link to="contact">CONTACT</router-link></li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <div class="clearfix"></div>
        </ul>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      data: {
          grant_type: 'password',
            client_id: 2,
            client_secret: 'my_client_id_secret_from_database', // Laravel Password Grant Client
            username: 'abc@def.com',
            password: 'admin',
            scope: '',
      },
    };
  },
  methods: {
      getClients() {
      axios.post("/oauth/token", this.data).then((response) => {
        console.log(response.data);
      });
    },
  }
};
</script>
