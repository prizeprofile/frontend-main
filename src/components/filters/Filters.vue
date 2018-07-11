<template>
  <div class="brick panel">
    <div class="block is-centered">
      <h3>Filter</h3>
    </div>

    <div class="filters is-two-thirds-tablet">
      <p class="block">
        <span style="display: flex; align-items: center; flex-wrap: wrap">
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>

          <span style="padding: 0 0 0 5px">
            Only showing verified accounts
          </span>

          <twitter-badge />
        </span>
      </p>

      <p class="block">
        Promoter:

        <div class="block">
          <input
            value=""
            type="text"
            class="input"
            placeholder="Search here..."
          />
        </div>

        <div class="field is-grouped is-grouped-multiline">
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-primary">Argos</span>
              <a class="tag is-delete"></a>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-primary">AliExpress</span>
              <a class="tag is-delete"></a>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-primary">Nike</span>
              <a class="tag is-delete"></a>
            </div>
          </div>
        </div>
        <div class="block"></div>
      </p>

      <div class="block">
        <div class="block">
          Ways to enter:
        </div>

        <div class="entry-methods">
          <div>
            <span class="icon">
              <i class="fas fa-user-plus"></i>
            </span>
          </div>

          <div>
            <span class="icon">
              <i class="far fa-comment-alt"></i>
            </span>
          </div>

          <div>
            <span class="icon">
              <i class="fas fa-retweet"></i>
            </span>
          </div>

          <div>
            <span class="icon">
              <i class="fas fa-heart"></i>
            </span>
          </div>

          <div>
            <span class="icon">
              <i class="fas fa-at"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block">
          Number of entrants:
        </div>

        <div class="slider-bar">
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            class="slider"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TwitterBadge from '@/components/common/elements/TwitterBadge'

export default {
  components: { TwitterBadge }
}
</script>
