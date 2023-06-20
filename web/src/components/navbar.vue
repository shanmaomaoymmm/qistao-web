<template>
  <div class="nav-bar-bg">
    <div class="nav-bar">
      <div class="logo" @click="backHome">
        <div class="img">
          <img src="@/assets/svg/logo-white.svg" />
        </div>
        <div class="label">
          Qisato
        </div>
      </div>
      <div class="search">
        <q-input class="inputs" placeholder="search" v-model="search">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass " />
        </q-input>
      </div>
      <div class="nav-button">
        <div>
          <span @click="backHome">首页</span>
          <span>主题</span>
          <span>
            <i-server theme="two-tone" size="24" :fill="['#ffffff', '#ffffff44']"
              style="position: relative;top: 0.25rem;" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import qInput from '@/components/comp/input.vue'
export default {
  components: {
    qInput,
  },
  data() {
    return {
      search: null,
    }
  },
  methods: {
    backHome() {
      this.$router.push('/')
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-bar-bg {
  background-color: #2196F3;
  height: 5rem;
  width: 100%;
  position: sticky;
  top: 0;
  user-select: none;
  box-shadow: 0 0 0.125rem #0006;
  text-shadow: 0 0 0.125rem #0006;

  .nav-bar {
    max-width: 65rem;
    height: 100%;
    display: flex;
    margin: 0 auto;
  }
}

.logo {
  display: flex;
  flex: 2;
  cursor: pointer;

  .img {
    padding: 0.5rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  .label {
    flex: 1;
    color: #fff;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 5rem;
    padding: 0 0.25rem;
  }
}

.search {
  flex: 3;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  .input {
    width: 100%;
    height: 50%;
  }
}

.nav-button {
  flex: 2;
  display: flex;
  align-items: center;

  div {
    text-align: right;
    width: 100%;

    span {
      padding: 0.5rem;
      color: #fff;
      font-weight: bold;
      font-size: 1.1rem;
      cursor: pointer;
    }
  }
}
</style>