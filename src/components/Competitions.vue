<template>
  <div class="competitions">
    <welcome-brick />

    <loading-brick
      :key="n"
      v-for="n in 3"
      v-if="! blocks || blocks.length === 0"
    />

    <transition-group name="fade" tag="p">
      <component
        :key="i"
        :is="block.component"
        :payload="block.payload"
        v-for="(block, i) in blocks"
        v-if="blocks && blocks.length > 0"
      >
      </component>
    </transition-group>
  </div>
</template>

<script>
import Competition from '@/components/common/Competition'
import SubmitStory from '@/components/common/SubmitStory'
import WelcomeBrick from '@/components/common/WelcomeBrick'
import LoadingBrick from '@/components/ui/LoadingBrick'

export default {
  components: { Competition, SubmitStory, WelcomeBrick, LoadingBrick },

  asyncComputed: {
    /**
     * Returns an array of components with the payload.
     * TODO: Refactor.
     * @return {Promise<array>}
     */
    async blocks () {
      let competitions = await this.$store.getters.competitions

      return competitions.reduce((carry, payload, i) => {
        carry.push({ component: 'Competition', payload })

        if (i === 1) {
          carry.push({ component: 'SubmitStory' })
        }

        return carry
      }, [])
    }
  }
}
</script>
