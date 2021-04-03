<template>
  <div class="wrapper">
    <nav
      id="sidebar"
      ref="sidebar"
      class="bg-secondary"
    >
      <div class="sidebar-header">
        <router-link
          class="logo"
          :to="{name: 'Home'}"
        >
          <h1>Noten App</h1>
        </router-link>
      </div>

      <div class="navi">
        <ul>
          <li :class="{ 'active': this.$route.path === '/'}">
            <router-link
              :to="{ name: 'Home' }"
              class="nav-item"
              @click="active = 1"
            >
              <i
                class="fa fa-home"
                aria-hidden="true"
              />
              <span class="hidden-xs hidden-sm">Home</span>
            </router-link>
          </li>
          <li :class="{ 'active': this.$route.path.startsWith('/pieces') }">
            <router-link
              :to="{ name: 'Pieces' }"
              class="nav-item"
              @click="active = 2"
            >
              <i
                class="fas fa-sticky-note"
                aria-hidden="true"
              />
              <span class="hidden-xs hidden-sm">Stücke</span>
            </router-link>
          </li>
          <li :class="{ 'active': this.$route.path.startsWith('/instruments') }">
            <router-link
              :to="{ name: 'Instruments' }"
              class="nav-item"
              @click="active = 3"
            >
              <i
                class="fas fa-drum"
                aria-hidden="true"
              />
              <span class="hidden-xs hidden-sm">Instrumente</span>
            </router-link>
          </li>
          <li :class="{ 'active': this.$route.path.startsWith('/settings')}">
            <router-link
              :to="{ name: 'Settings' }"
              class="nav-item"
              @click="active = 4"
            >
              <i
                class="fas fa-cogs"
                aria-hidden="true"
              />
              <span class="hidden-xs hidden-sm">Einstellungen</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div
      id="content"
      style="width:100%"
    >
      <b-navbar
        toggleable="md"
        sticky
        variant="secondary"
        type="primary"
        class="py-md-0 mb-3"
      >
        <b-container class="px-0">
          <button
            id="sidebarCollapse"
            ref="sidebaricon"
            type="button"
            class="navbar-btn"
            @click.prevent="toggleSidebar"
          >
            <span />
            <span />
            <span />
          </button>
          <b-navbar-toggle
            class="ml-auto"
            target="navbar-collapse"
          />

          <b-collapse
            id="navbar-collapse"
            is-nav
          >
            <b-navbar-nav class="d-flex">
              <b-nav-item-dropdown
                text="Test"
              >
                <b-dropdown-item
                  to="/admin/magazine"
                >
                  <b-icon-journal-bookmark-fill class="mr-2 py-3" /> Test
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-form
                class="d-none d-sm-block mt-2"
                @submit="search"
              >
                <b-input-group>
                  <b-form-input
                    v-model="searchString"
                    size="sm"
                    placeholder="Suchen"
                  />
                  <b-input-group-append>
                    <b-button
                      size="sm"
                      type="submit"
                    >
                      <b-icon-search />
                    </b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-nav-form>
              <b-nav-item-dropdown
                right
              >
                <template #button-content>
                  <b-img
                    src="../assets/unknownavatar.png"
                    rounded="circle"
                    width="32"
                  />
                </template>
                <b-dropdown-item
                  v-if="isLoggedIn"
                  :to="{ name: 'Account' }"
                >
                  Account
                </b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item
                  v-if="isLoggedIn"
                  to="/"
                  @click="logOut"
                >
                  Abmelden
                </b-dropdown-item>
                <b-dropdown-item
                  v-else
                  :to="{ name: 'Login' }"
                >
                  Einloggen
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <span class="d-block d-sm-none">
                <hr>
                <b-input-group>
                  <b-form-input
                    v-model="searchString"
                    placeholder="Titel, Autor, etc.."
                  />
                  <b-input-group-append>
                    <b-button
                      @click="search()"
                    >
                      <b-icon-search />
                    </b-button>
                  </b-input-group-append>
                </b-input-group>
              </span>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
      <div class="ml-2 mr-2">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
    searchString: '',
    active: 1
  }),
  computed: {
    isLoggedIn () {
      return false
    },
    isAdmin () {
      return true
    }
  },
  methods: {
    toggleSidebar () {
      this.$refs.sidebar.classList.toggle('active')
      this.$refs.sidebaricon.classList.toggle('active')
    },
    logOut () {
      console.log('TODO logout')
    },
    search () {
      console.log('TODO search')
    }
  }
}
</script>

<style>
p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
}

.navbar {
    padding: 15px 10px;
    border: none;
    border-radius: 0;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
    perspective: 1500px;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
    transform-origin: bottom left;
}

#sidebar.active {
    margin-left: -250px;
    transform: rotateY(100deg);
}

#sidebar .sidebar-header {
  text-align: center;
    padding: 9.5px;
}

#sidebar ul.components {
    padding: 5px 0;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    font-size: 1.1em;
    display: block;
}

a[data-toggle="collapse"] {
    position: relative;
}

#sidebar .dropdown-toggle::after{
    transform: translateY(-50%) rotate(180deg);
}
#sidebar .dropdown-toggle.collapsed::after{
    transform: translateY(-50%);
}
#sidebar .dropdown-toggle::after {
    transition: all 0.3s;
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
}
/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
#content {
    width: 100%;
    padding: 0px;
    min-height: 100vh;
    transition: all 0.3s;
}

#sidebarCollapse {
    width: 40px;
    height: 40px;
    background: transparent;
    cursor: pointer;
}

#sidebarCollapse span {
    width: 80%;
    height: 2px;
    margin: 0 auto;
    display: block;
    background: #312F2F;
    transition: all 0.8s cubic-bezier(0.810, -0.330, 0.345, 1.375);
    transition-delay: 0.2s;
}

#sidebarCollapse span:first-of-type {
    transform: rotate(45deg) translate(2px, 2px);
}
#sidebarCollapse span:nth-of-type(2) {
    opacity: 0;
}
#sidebarCollapse span:last-of-type {
    transform: rotate(-45deg) translate(1px, -1px);
}
#sidebarCollapse.active span {
    transform: none;
    opacity: 1;
    margin: 5px auto;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */
@media (max-width: 768px) {
  #sidebar {
      margin-left: -250px;
      transform: rotateY(90deg);
  }
  #sidebar.active {
      margin-left: 0;
      transform: none;
  }
  #sidebarCollapse span:first-of-type,
  #sidebarCollapse span:nth-of-type(2),
  #sidebarCollapse span:last-of-type {
      transform: none;
      opacity: 1;
      margin: 5px auto;
  }
  #sidebarCollapse.active span {
      margin: 0 auto;
  }
  #sidebarCollapse.active span:first-of-type {
      transform: rotate(45deg) translate(2px, 2px);
  }
  #sidebarCollapse.active span:nth-of-type(2) {
      opacity: 0;
  }
  #sidebarCollapse.active span:last-of-type {
      transform: rotate(-45deg) translate(1px, -1px);
  }
}
.logo i {
  text-align: center;
  font-size: 4rem;
}
.logo:hover {
  text-decoration: none;
}
a:focus,a:hover,a{
    outline:none;
    text-decoration: none;
}
li,ul{
  cursor: pointer;
    list-style: none;
    padding: 0;
    margin: 0;
}

#navigation {
  min-height: 45.1rem;
  min-width: 15rem;
  background-color: #312F2F;
  border-radius: 0px 20px 20px 0px;
  padding-bottom: 9rem;
  padding-left: 0;
}

.nav-item:hover {
  text-decoration: none;
}

.navi a {
    color: #ffffff;
    display: block;
    font-size: 17px;
    font-weight: 500;
    padding: 28px 20px;
    text-decoration: none;
}

.navi a span {
  color: white;
}

.navi i {
    margin-right: 15px;
    color: #BFFCFA;
}

.navi .active a {
    background: #312F2F;
    border-left: 5px solid #BFFCFA;
    padding-left: 15px;
}

.navi a:hover {
    background: #312F2F none repeat scroll 0 0;
    border-left: 5px solid #BFFCFA;
    display: block;
    padding-left: 15px;
}
</style>

