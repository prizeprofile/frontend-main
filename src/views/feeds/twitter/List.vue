<template>
  <div class="twitter-feed">
    <info-brick
      :data="{
        title: '❗Important Notice for Twitter Competitions',
        description: 'We have temporarily disabled one click entering for Twitter competitions as we were hitting Twitter limits caused by increasing number of our users. We are intensively working on a new system and you can expect it to go live very soon.<br><br>We are sorry for any inconvenience,<br>Michael and Jonny'
      }"
    ></info-brick>

    <competition
      v-for="competition in feed.content"
      :key="competition.id"
      :payload="competition"
    ></competition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Competition from './Competition'
import InfoBrick from '@/views/partials/common/InfoBrick'

export default {
  components: { Competition, InfoBrick },

  computed: {
    ...mapGetters(['feed'])
  }
}
</script>
