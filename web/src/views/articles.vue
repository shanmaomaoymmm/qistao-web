<template>
  <div class="articles">
    <div class="left">
      <div class="content">
        <div class="markdown" v-html="markdown(md)"></div>
        <div class="date">
          2023年6月20日
        </div>
        <div class="share">
          分享
        </div>
      </div>
    </div>
    <div class="right">
      <sidebar />
    </div>
  </div>
</template>
<script lang="ts">
import sidebar from '@/components/sidebar.vue'
import showdown from "showdown"
export default {
  components: {
    sidebar
  },
  data() {
    return {
      id: this.$route.params.id,
      md: '# 测试11111111'
    }
  },
  created() {
    document.documentElement.scrollTop = 0
    console.log(this.id)
  },
  methods: {
    markdown(md: string) {
      let converter = new showdown.Converter();
      return converter.makeHtml(md);
    }
  }
}
</script>
<style lang="scss" scoped>
.articles {
  max-width: 65rem;
  margin: 0 auto;
  display: flex;

  .left {
    flex: 1;
    padding: 1rem 0.5rem;
    overflow: hidden;

    .content {
      box-shadow: 0 0 0.25rem #0004;
      border-radius: 0.5rem;
      padding: 2rem;
    }
    .markdown{
      min-height: 44rem;
    }

    .date {
      padding: 1rem 0;
      text-align: right;
    }

    .share {
      text-align: right;
    }
  }

  .right {
    width: 18rem;
  }
}
</style>