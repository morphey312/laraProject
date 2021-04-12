 <template>
  <div>
    <div class="top-menu">
      <span class="menu"> </span>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li><router-link to="/">HOME</router-link></li>
          <li v-if="user"><router-link to="/create">CREATE NEW POST</router-link></li>
          <li class="nav-item dropdown">

          </li>
          <div class="clearfix"></div>
        </ul>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "NavMenu",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
};
</script>
