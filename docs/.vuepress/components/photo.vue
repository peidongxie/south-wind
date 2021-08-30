<template>
  <div class="photo">
    <img class="image" :src="img" :alt="text" />
    <div class="info">
      <span class="info-top">{{ text }}</span>
      <div class="info-bottom">
        <time>{{ date || today }}</time>
        <button>
          <a :href="img" :download="file">点击下载</a>
        </button>
      </div>
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
.photo {
  margin: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
}

.image {
  width: 100%;
  display: block;
}

.info {
  padding: 14px;
}

.info-top {
  color: #303133;
  font-size: 16px;
  font-weight: 400;
}

.info-bottom {
  margin-top: 13px;
  line-height: 12px;
}

.info-bottom > time {
  color: #999;
  font-size: 13px;
  font-weight: 400;
}

.info-bottom > button {
  padding: 0;
  margin: 0;
  float: right;
  border-color: transparent;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 1;
  white-space: nowrap;
}
</style>
