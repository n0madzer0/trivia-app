<template>
  <div class="home">
    <StartCard/>
    <!-- <QuestionCard/> -->
  </div>
</template>

<script>
import StartCard from '@/components/StartCard';
// import QuestionCard from '@/components/QuestionCard';

export default {
  components: {
    // QuestionCard,
    StartCard
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    justify-content: center;
  }
</style>
