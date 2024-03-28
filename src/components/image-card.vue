<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
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
    default: () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      return `${year}年${month}月${day}日`;
    },
  },
});
const file = computed(() => {
  const text = props.text;
  const index = props.img.lastIndexOf('.');
  const extension = props.img.substring(index);
  return text + extension;
});
</script>

<template>
  <div class="card">
    <img :alt="text" class="image" :src="img" />
    <div class="info">
      <span class="info-top">{{ text }}</span>
      <span class="info-bottom">
        <time>{{ date }}</time>
        <button>
          <a :download="file" :href="img">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path
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
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </button>
      </span>
    </div>
  </div>
</template>

<style>
.card {
  margin: 20px;
  background-color: var(--vp-c-bg);
  border-color: var(--vp-c-border);
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
  color: var(--vp-c-text-1);
  display: block;
  font-size: 16px;
}

.info-bottom {
  margin-top: 8px;
  color: var(--vp-c-text-3);
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

.info-bottom > button > a {
  color: var(--vp-c-brand-3);
}
</style>
