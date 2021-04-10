<template>
  <div class="hidden">
    <vs-navbar
      v-model="active"
      background="dark"
      shadow
      square
      center-collapsed
    >
      <template #left>
        <vs-button
          @click="activeSidebar = !activeSidebar"
        >
          <i class="fas fa-bars" />
        </vs-button>
      </template>
      <vs-navbar-item
        id="guide"
        :active="active == 'guide'"
      >
        Guide
      </vs-navbar-item>
      <vs-navbar-item
        id="docs"
        :active="active == 'docs'"
      >
        Documents
      </vs-navbar-item>
      <vs-navbar-item
        id="components"
        :active="active == 'components'"
      >
        Components
      </vs-navbar-item>
      <vs-navbar-item
        id="license"
        :active="active == 'license'"
      >
        license
      </vs-navbar-item>
      <template #right>
        <vs-button flat>
          Login
        </vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <div style="widht: 100%">
      <vs-sidebar
        v-model="active"
        absolute
        :open.sync="activeSidebar"
      >
        <template #logo>
          Noten App
        </template>
        <vs-sidebar-item 
          id="home"
          to="/"
        >
          <template #icon>
            <i class="fa fa-home" />
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-item
          id="pieces"
          to="/pieces"
        >
          <template #icon>
            <i class="fas fa-sticky-note" />
          </template>
          Stücke
        </vs-sidebar-item>
        <vs-sidebar-item
          id="instruments"
          to="/instruments"
        >
          <template #icon>
            <i class="fa fa-drum" />
          </template>
          Instrumente
        </vs-sidebar-item>
        <vs-sidebar-item
          id="settings"
          to="/settings"
        >
          <template #icon>
            <i class="fa fa-cogs" />
          </template>
          Einstellungen
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar class="pointer">
              <img
                src="@/assets/avatar.jpg"
              >
            </vs-avatar>
            <vs-avatar
              class="pointer"
              badge-color="danger"
              badge-position="top-right"
            >
              <i class="far fa-bell" />

              <template #badge>
                28
              </template>
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
      <router-view class="mr-2 ml-2" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
    active: 'home',
    activeSidebar: false
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
.pointer {
  cursor: pointer;
}
</style>