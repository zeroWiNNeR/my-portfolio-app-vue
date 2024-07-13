<template>
  <section id="about" class="section-about" style="font-family: 'Raleway', sans-serif;">
    <h2 class="white--text">Skills & Experience</h2>
    <div class="section-about__skills">
      <div class="section-about__skills-col">
        <h3 class="white--text">Backend</h3>
        <ul>
          <li>
            <img src="/assets/images/logo/java.svg" alt="Icon java" />
          </li>
          <li>
            <img src="/assets/images/logo/kotlin.svg" alt="Icon kotlin" />
          </li>
          <li>
            <img src="/assets/images/logo/spring.svg" alt="Icon spring" />
          </li>
          <li>
            <img src="/assets/images/logo/junit.svg" alt="Icon junit" />
          </li>
          <li>
            <img src="/assets/images/logo/docker.svg" alt="Icon docker" />
          </li>
          <li>
            <img src="/assets/images/logo/kafka.svg" alt="Icon kafka" />
          </li>
          <li>
            <img src="/assets/images/logo/rabbitmq.svg" alt="Icon rabbitmq" />
          </li>
        </ul>
      </div>
      <div class="section-about__skills-col">
        <h3 class="white--text">Frontend</h3>
        <ul>
          <li>
            <img src="/assets/images/logo/ts.svg" alt="Icon ts" />
          </li>
          <li>
            <img src="/assets/images/logo/vue.svg" alt="Icon vue" />
          </li>
          <li>
            <img src="/assets/images/logo/react.svg" alt="Icon react" />
          </li>
          <li>
            <img src="/assets/images/logo/js.svg" alt="Icon js" />
          </li>
          <li>
            <img src="/assets/images/logo/html.svg" alt="Icon html" />
          </li>
          <li>
            <img src="/assets/images/logo/css.svg" alt="Icon css" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeAbout",
  props: ['scrollToCV'],
  data() {
    return {
      sizeProgressCircular: 150, sizeMiniProgressCircular: 110,
      dialog: false,
      dialogHeader: '', dialogText: ''
    }
  },
  methods: {
    showBackendInfo() {
      this.dialogHeader = 'Backend'
      this.dialogText = 'Разработка сложных приложений для различных типов задач. ' +
          'Не просто создание сайтов, возможна реализация именно того, что ищет заказчик, ' +
          'например, пользовательское приложение электронной ' +
          'коммерции, клиентские порталы, CRM системы, разработку API и базы данных SQL.'
      this.dialog = true
    },
    showFrontendInfo() {
      this.dialogHeader = 'Frontend'
      this.dialogText = 'Я являюсь разработчиком веб-сайтов, разработанных с учетом потребностей заказчика. ' +
          'Стремлюсь реализовать уникальный дизайн для веб-сайтов, который позволит выделиться бизнесу.'
      this.dialog = true
    },
  }
}
</script>

<style lang="scss" scoped>
.section-about {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #141416;

  @media (min-width: 768px) {
    justify-content: center;
    padding: 20px;
    row-gap: 32px;

    h2 {
      text-align: center;
    }
  }

  @media (max-width: 767px) {
    padding: 20px 32px;
    row-gap: 20px;
  }

  &__skills {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      row-gap: 20px;
      margin-left: 42px;
    }

    @media (max-width: 767px) {
      row-gap: 20px;
    }

    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 0;
      gap: 20px;
      list-style-type: none;

      @media (min-width: 768px) {
        margin-top: 10px;
      }

      @media (max-width: 767px) {
        margin-top: 20px;
      }

      li {
        img {
          width: auto;

          @media (min-width: 768px) {
            height: 60px;
          }

          @media (max-width: 767px) {
            height: 40px;
          }
        }
      }
    }
  }
}
</style>
