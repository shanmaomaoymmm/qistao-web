<template>
  <div class="home">
    <div class="left">
      <div v-for="i in 1000" class="list" @click="$router.push('/articles/' + i)">
        <div class="img">
          <img src="@/assets/img/RE4wB6C.jpg" alt="">
        </div>
        <div class="label">
          <div class="title">
            {{ i }}
          </div>
          <div class="subtitle">
            {{
              '中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文中文'
            }}
          </div>
          <div class="date">
            
            {{ '2023-1-1' }}
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <sidebar />
    </div>
  </div>
</template>
<script lang="ts">
import sidebar from '@/components/sidebar.vue';
export default {
  components: {
    sidebar
  }
}
</script>
<style lang="scss" scoped>
.home {
  max-width: 65rem;
  margin: 0 auto;
  display: flex;

  .left {
    flex: 1;
    padding: 1rem 0.5rem;
    overflow: hidden;
  }

  .right {
    width: 18rem;
  }
}

.list {
  box-shadow: 0 0 0.25rem #0004;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  display: flex;
  overflow: hidden;
  cursor: pointer;

  .img {
    width: 6.5rem;
    height: 6.5rem;
    overflow: hidden;
    background-color: #0002;
    box-shadow: 0 0 0.25rem #0004;

    img {
      width: inherit;
      height: inherit;
      object-fit: cover;
    }
  }

  .label {
    flex: 1;
    padding: 0.5rem 1rem;
    line-height: 1.7;
    white-space: nowrap;
    overflow: hidden;

    .title {
      font-size: 1.2rem;
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .subtitle {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .date {
      text-align: right;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>