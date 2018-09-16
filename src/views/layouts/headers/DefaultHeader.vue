<template>
  <header class="default-header is-fixed">
    <div class="container">
      <nav class="nav is-primary">
        <div class="nav-menu">
          <router-link class="nav-item is-static" :to="{ name: 'home' }">
            <img v-lazy="`$/images/branding/logo-white.png`" alt="Prize Profile">
          </router-link>
        </div>
        <div class="nav-menu">
          <a class="nav-item">Recent</a>
          <a class="nav-item">Popular</a>
        </div>
        <div class="nav-spacer"></div>
        <div class="nav-menu">
          <a class="nav-item is-static">
            <action medium inverted @click="showModal('connect-twitter')">
              <icon name="fab fa-twitter"></icon>
              &nbsp;
              Connect Twitter
            </action>
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import ControlsModals from '@/core/mixins/ControlsModals'

export default {
  mixins: [ControlsModals]
}
</script>
