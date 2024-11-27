<template>
    <div class="rows">

        <div class="left_part">
            <Tag> {{ $t('contacts-office') }}</Tag>
            <div class="address"> {{ data.data.address }}</div>



            <div class="boxes">
                <Tag> {{ $t('contacts-tel') }}</Tag>
                <div class="box">
                    <NuxtImg src="/images/vacancies/Vector1.svg" width="20px"/>
                    <span>{{ data.data.number1 }}</span>
                </div>
                <div class="box">
                    <NuxtImg src="/images/vacancies/Vector1.svg" width="20px"/>
                    <span>{{ data.data.number2 }}</span>
                </div>
                <div class="box">
                    <NuxtImg src="/images/vacancies/fax.svg" width="20px"/>
                    <span>{{ data.data.fax }}</span>
                </div>
            </div>

            <div class="boxes">
                <Tag> {{ $t('contacts-email') }}</Tag>
                <div class="box">
                    <NuxtImg src="/images/vacancies/Vector.svg" width="23px"/>
                    <span> {{ data.data.email }}</span>
                </div>
            </div>
        </div>

        <div class="right_part">
            <h1> {{$t('contacts')}}</h1>
            <p> {{ data.data.description }}</p>



            <div class="form-container">
                <form @submit.prevent="submitForm">
                <!-- Имя -->
                <div class="form-row">
                    <input type="text" id="name" v-model="form.name" :placeholder="$t('form-name')" />
                </div>

                <!-- Email и Телефон -->
                <div class="form-row">
                    <div class="form-group">
                    <input type="email" id="email" v-model="form.email" :placeholder="$t('form-email')" />
                    </div>
                    <div class="form-group">
                    <input type="tel" id="phone" v-model="form.phone" :placeholder="$t('form-phone')" />
                    </div>
                </div>

                <!-- Услуга -->
                <div class="form-row">
                    <textarea
                    id="service"
                    v-model="form.service"
                    :placeholder="$t('form-message')"
                    rows="4"
                    ></textarea>
                </div>

                <!-- Кнопка отправки -->
                <div class="form-row">
                    <button type="submit">{{$t('contacts-text-us')}}</button>
                </div>
                </form>
            </div>
        </div>
</div>
</template>

<style scoped>

.address {
    width: 70%;
}
.boxes {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.box {
        display: inline-block;
        border-radius: 10px;
        padding: 10px 20px;
        background-color: var(--grey-light);
        border: 2px solid var(--grey-middle);
        width: fit-content;

        img {
            margin-right: 10px;
        }
    }

    .form-container {
  margin: 60px auto;
  padding: 30px 30px;
  border-radius: 20px;
  background-color: var(--grey-middle);
}

.form-row {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 1rem;
}

.form-group:last-child {
  margin-right: 0;
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input,
textarea,
button {
  width: 100%;
  padding: 0.5rem;
  background-color: white;
  border-radius: 5px;
  font-size: 1rem;
}

input::placeholder, textarea::placeholder {
    color: black;
    font-size: 0.9rem;
    font-weight: 400;
}

button {
  background-color: var(--green);
  padding: 15px 30px;
  color: #fff;
  cursor: pointer;
  border: none;
width: fit-content;
align-self: center;
}

button:hover {
  background-color: var(--grey-light);
}

.form-row:nth-child(2) {
  display: flex;
  gap: 1rem;
}
</style>

<script setup>

import { useStrapiService } from '~/composables/useStrapiService'
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const { fetchData } = useStrapiService()
const { locale } = useI18n()

let data = ref(null);

let loadData = async () => {
data = null
  data = await fetchData('page-contact', locale.value)
}

// Загружаем данные при загрузке компонента
await loadData()

// Обновляем данные при изменении локали
watch(locale, async () => {
  await loadData()
})


let form = {
        name: "",
        email: "",
        phone: "",
        service: "",
      }
</script>