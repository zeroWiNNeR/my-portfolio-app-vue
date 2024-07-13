<template>
  <section id="contacts" class="section-cv">
    <div class="section-cv__contacts">
      <h3 class="mb-4 white--text font-weight-bold">Контактная информация</h3>
      <p class="mb-10 white--text">
        Свяжитесь через удобный мессенджер<br />
        или отправьте эл. письмо
      </p>
      <ul class="mb-10">
        <li>
          <a href="https://api.whatsapp.com/send?phone=79519485262">
            <img src="/assets/images/svg/whatsapp.svg" alt="Icon whatsapp" />
          </a>
        </li>
        <li>
          <a href="viber://chat?number=79519485262">
            <img src="/assets/images/svg/viber.svg" alt="Icon viber" />
          </a>
        </li>
        <li>
          <a href="tg://resolve?domain=zeroWiNNeR">
            <img src="/assets/images/svg/telegram.svg" alt="Icon telegram" />
          </a>
        </li>
        <li>
          <a href="mailto:vekovshinin.aiu@gmail.com?subject=Письмо с сайта визитки">
            <img src="/assets/images/svg/email.svg" alt="Icon email" />
          </a>
        </li>
      </ul>
      <p class="white--text font-weight-bold">+7 951 948 52 62</p>
    </div>
    <div class="section-cv__link">
      <AnimatedFace />
      <v-btn
        class="section-cv__link-button white--text"
        color="deep-purple"
        target="_blank"
        href="/assets/Вековшинин Алексей Юрьевич.pdf"
      >
        СКАЧАТЬ РЕЗЮМЕ
      </v-btn>
    </div>
  </section>
</template>

<script>
import AnimatedFace from "@/components/AnimatedFace"

export default {
  name: "SectionCV",
  components: {
    AnimatedFace
  }
}
</script>

<style scoped lang="scss">
.section-cv {
  display: flex;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-top: 200px;
  }

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    row-gap: 100px;
    padding: 20px 32px;
    margin-top: 100px;
  }

  &__link {
    &-button {
      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }

  &__contacts {
    @media (min-width: 768px) {
      margin-left: 42px;
    }

    ul {
      display: flex;
      flex-direction: row;
      padding: 0;
      column-gap: 20px;

      li {
        img {
          width: 30px;
          height: 30px;
          transition: all 300ms ease;

          &:hover {
            transform: scale(1.4);
          }
        }
      }
    }
  }
}
</style>
