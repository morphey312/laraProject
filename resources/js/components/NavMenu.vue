 <template>
  <div>
    <div class="top-menu">
      <span class="menu"> </span>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/create">CREATE</router-link></li>
          <li><router-link to="/verify">verify</router-link></li>
          <li><router-link to="/contact">CONTACT</router-link></li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="#">Action</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="#"
                  >Another action</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link class="dropdown-item" to="#"
                  >Something else here</router-link
                >
              </li>
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
    return {};
  },
};
</script>
