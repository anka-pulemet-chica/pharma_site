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
            <h3> {{$t('contacts')}}</h3>
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

                <p v-if="successMessage" class="success">{{ successMessage }}</p>
                <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </div>

            <h3> {{ $t('directions') }}</h3>
            <div style="position:relative;overflow:hidden;"><a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Минск</a><a href="https://yandex.by/maps/157/minsk/house/Zk4Ycg9pSkYAQFtpfXVyc3VjZw==/?ll=27.488869%2C53.932877&utm_medium=mapframe&utm_source=maps&z=17.1" style="color:#eee;font-size:12px;position:absolute;top:14px;">Радужная улица, 17 — Яндекс Карты</a><iframe src="https://yandex.by/map-widget/v1/?ll=27.488869%2C53.932877&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY3NDI1MBJD0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0JLRj9GB0ZHQu9C60LDQstCw0Y8g0LLRg9C70ZbRhtCwLCAxNyIKDSvq20EVS7tXQg%2C%2C&z=17.1" width="800" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
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

@media (max-width: 480px) {
  .boxes {
    .box {
      width: 100%;
    }
  }
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


let form = ref({
        name: "",
        email: "",
        phone: "",
        service: "",
      })

const successMessage = ref('');
const errorMessage = ref('');


const validateForm = () => {
  if (!form.value.name || !form.value.email || !form.value.service) {
    errorMessage.value = 'All fields are required.';
    return false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errorMessage.value = 'Please enter a valid email address.';
    return false;
  }
  return true;
};

const submitForm = async () => {
  successMessage.value = '';
  errorMessage.value = '';

  if (!validateForm()) return;

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    successMessage.value = 'Your message has been sent successfully!';
    form.value = { name: '', email: '', service: '' , phone: ''}; // Очистка формы
  } catch (error) {
    errorMessage.value = 'Failed to send message. Please try again later.';
  }
};

</script>