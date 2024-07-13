<template>
  <section class="section-intro">
    <v-row class="section-intro__title">
      <v-col class="text-left ml-5" cols="12">
        <h1 class="display-2 mb-4 white--text font-weight-bold">
          Привет,<br/>
          Меня зовут Алексей,<br/>
        </h1>
        <div class="section-intro__title-fullstack mb-10">
          <h2 class="display-1 deep-purple--text animate__animated animate__fadeInLeft">Full Stack Developer.</h2>
        </div>
        <a class="section-intro__title-button white--text" href="#about">
          Обо мне
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75V11.25ZM4 12.75H20V11.25H4V12.75Z" fill="#fff"/>
            <path d="M14 6L20 12L14 18" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </v-col>
    </v-row>
    <Computer/>
  </section>
</template>

<script>
import Computer from "@/components/svg/Computer";

export default {
  name: "SectionIntro",
  components: {
    Computer
  }
}
</script>

<style lang="scss" scoped>
$black: #141416;

.section-intro {
  position: relative;
  display: flex;
  column-gap: 20px;
  width: 100%;
  height: 100vh;
  background-color: $black;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 767px) {
    padding: 20px 10px;
    flex-direction: column-reverse;
  }

  &__title {
    align-items: center;

    &-button {
      display: flex;
      align-items: center;
      column-gap: 10px;
    }

    &-fullstack {
      display: flex;
      align-items: center;
      column-gap: 10px;

      h2 {
        position: relative;

        &::after {
          position: absolute;
          top: 5px;
          left: calc(100% + 16px);
          content: '';
          width: 32px;
          height: 32px;
          background-image: url(/assets/images/svg/code.svg);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;

          @media (max-width: 390px) {
            display: none;
          }
        }
      }
    }
  }
}
</style>