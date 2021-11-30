<template>
  <div class="card">
    <img class="image" :src="img" :alt="text" />
    <div class="info">
      <span class="info-top">{{ text }}</span>
      <span class="info-bottom">
        <time>{{ date || today }}</time>
        <button>
          <a :href="img" :download="file">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="
                  M 216 0
                  h 80
                  c 13.3 0 24 10.7 24 24
                  v 168
                  h 87.7
                  c 17.8 0 26.7 21.5 14.1 34.1
                  L 269.7 378.3
                  c -7.5 7.5 -19.8 7.5 -27.3 0
                  L 90.1 226.1
                  c -12.6 -12.6 -3.7 -34.1 14.1 -34.1
                  H 192
                  V 24
                  c 0 -13.3 10.7 -24 24 -24
                  z
                  m 296 376
                  v 112
                  c 0 13.3 -10.7 24 -24 24
                  H 24
                  c -13.3 0 -24 -10.7 -24 -24
                  V 376
                  c 0 -13.3 10.7 -24 24 -24
                  h 146.7
                  l 49 49
                  c 20.1 20.1 52.5 20.1 72.6 0
                  l 49 -49
                  H 488
                  c 13.3 0 24 10.7 24 24
                  z
                  m -124 88
                  c 0 -11 -9 -20 -20 -20
                  s -20 9 -20 20
                  s 9 20 20 20
                  s 20 -9 20 -20
                  z
                  m 64 0
                  c 0 -11 -9 -20 -20 -20
                  s -20 9 -20 20
                  s 9 20 20 20
                  s 20 -9 20 -20
                  z
                "
              ></path>
            </svg>
          </a>
        </button>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from 'vue';
export default defineComponent({
  props: {
    img: {
      type: String,
      default: '/img/logo/logo-with-name.png',
    },
    text: {
      type: String,
      default: '活动掠影',
    },
    date: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const { img, text } = toRefs(props);
    const file = computed(() => {
      const index = img.value.lastIndexOf('.');
      const extension = img.value.substr(index);
      return text.value + extension;
    });
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const today = ref(`${year}年${month}月${day}日`);
    return {
      file,
      today,
    };
  },
});
</script>

<style>
.card {
  margin: 20px;
  background-color: var(--c-bg);
  border-color: var(--c-border);
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
}

.image {
  width: 100%;
  display: block;
}

.info {
  padding: 16px;
}

.info-top {
  color: var(--c-text);
  display: block;
  font-size: 16px;
}

.info-bottom {
  margin-top: 8px;
  color: var(--c-text-lightest);
  display: block;
  font-size: 14px;
}

.info-bottom > button {
  padding: 0;
  border-width: 0;
  height: 16px;
  width: 16px;
  margin: 0;
  background: transparent;
  float: right;
}
</style>
