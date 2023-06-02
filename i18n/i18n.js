import { I18n } from 'i18n-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const i18n = new I18n({
  en: {
    // SignUp / SignIn Screens
    signUpHeaderText: 'Create an Account ✍️',
    signInHeaderText: 'Sign In 🚪🚶',
    passwordText: 'Password',
    confirmPasswordText: 'Confirm Password',
    signUpBtnText: 'Sign Up',
    signInBtnText: 'Sign In',
    alreadyHaveLinkText: 'Already have an account? Sign In',
    dontHaveLinkText: "Don't have an account? Sign Up!",
    passwordsDontMatchErrorText: 'Passwords do not match.',
    // SessionList Screen
    historyTitleText: 'The History',
    historyNavigationText: 'History',
    cleanHistoryText: "There are no records yet. Let's stand on nails...",
    // Account Screen
    settingsTitleText: 'Account Settings',
    signOutBtnText: 'Sign Out',
    lightThemeText: 'Light Theme',
    darkThemeText: 'Dark Theme',
    // Session Details Screen
    dateKeyText: 'Date:',
    durationKeyText: 'Duration:',
    feedbackKeyText: 'Feedback:',
    removeRecordBtnText: 'Delete Record',
    confirmModalMessage: 'Are you sure you want to delete this session?',
    confirmModalBtnMessage: 'Delete',
    confirmModalrejectBtnText: 'Cancel',
    confirmModalTitleText: 'Confirmation',
    // StopWatch
    confirmModalPrepareMessage:
      'Relax. Take a deep breath. As you exhale, stand on the nails. For the first few minutes, there may be discomfort in the feet. Take a deep breath and exhale to relax. Soon the pain will pass and the real practice will begin...',
    confirmModalPrepareBtnText: 'Start!',
    confirmModalPrepareTitleText: 'Steady!',
    stopwatchStopButtonText: 'Stop!',
    stopwatchStartButtonText: 'Start!',
    // Feedback Modal
    howDoYouFeelText: 'How do You feel now?',
    howDoYouFeelBtnText: 'Save',
    alertErrorText: 'Data has not been saved.',
    // Statistics
    statisticsTitleText: 'Statistics',
    cleanStatisticsText: "There are no records yet. Let's stand on nails...",
    statisticsTotal: 'Total: ',
    statisticsSessionsForText: ' sessions in ',
    statisticsDaysText: ' days',
    statisticsAllText: 'Total: ',
    statisticsHourText: ' hours ',
    statisticsMinText: ' min ',
    statisticSecText: ' sec ',
    statisticsAveragePerSessionText: 'Average per Session: ',
    statisticsAveragePerDayText: 'Average per Day: ',
    statisticsLastTimeText: 'Last Time: ',
    statisticsTimeText: 'Time: ',
    statisticsDateText: 'Date: ',
    // Chart
    chartStatsPerDayText: 'Daily statistics:',
    chartStatsAccumulatedText: 'Accumulated total:',
  },
  uk: {
    // SignUp / SignIn Screens
    signUpHeaderText: 'Створити Акаунт ✍️',
    signInHeaderText: 'Увійти в Акаунт 🚪🚶',
    passwordText: 'Пароль',
    confirmPasswordText: 'Підтвердіть Пароль',
    signUpBtnText: 'Реєстрація',
    signInBtnText: 'Увійти',
    alreadyHaveLinkText: 'Вже є акаунт? Увійти.',
    dontHaveLinkText: 'Немає акаунту? Зареєструйтесь!',
    passwordsDontMatchErrorText: 'Паролі не співпадають.',
    // SessionList Screen
    historyTitleText: 'Історія Цвяхостоянь',
    historyNavigationText: 'Історія',
    cleanHistoryText: 'Поки що записів немає. Давайте встанемо на цвяхи...',
    // Account Screen
    settingsTitleText: 'Налаштування Акаунту',
    signOutBtnText: 'Змінити Користувача',
    lightThemeText: 'Світла Тема',
    darkThemeText: 'Темна Тема',
    // Session Details Screen
    dateKeyText: 'Дата:',
    durationKeyText: 'Тривалість:',
    feedbackKeyText: 'Відгук:',
    removeRecordBtnText: 'Видалити Сесію',
    confirmModalMessage: 'Ви впевнені, що хочете видалити цю сесію?',
    confirmModalBtnMessage: 'Видалити',
    confirmModalrejectBtnText: 'Назад',
    confirmModalTitleText: 'Підтвердження',
    // StopWatch
    confirmModalPrepareMessage:
      'Розслабтеся. Глибоко вдихніть. На видиху, встаньте на цвяхи. Перші кілька хвилин можуть бути неприємні відчуття у ступнях. Глибоко вдихайте і видихайте, щоб відволіктися. Незабаром біль пройде і почнеться справжня практика...',
    confirmModalPrepareBtnText: 'Старт!',
    confirmModalPrepareTitleText: 'Приготуйтесь!',
    stopwatchStopButtonText: 'Стоп!',
    stopwatchStartButtonText: 'Почати!',
    // Feedback Modal
    howDoYouFeelText: 'Як Ви себе почуваєте?',
    howDoYouFeelBtnText: 'Зберегти',
    alertErrorText: 'Дані не були збережені.',
    // Statistics
    statisticsTitleText: 'Статистика',
    cleanStatisticsText: 'Поки що записів немає. Давайте встанемо на цвяхи...',
    statisticsTotal: 'Разом: ',
    statisticsSessionsForText: ' сесій за ',
    statisticsDaysText: ' днів',
    statisticsAllText: 'Усього: ',
    statisticsHourText: ' год ',
    statisticsMinText: ' хв ',
    statisticSecText: ' сек ',
    statisticsAveragePerSessionText: 'В середньому на сессию: ',
    statisticsAveragePerDayText: 'В середньому на день: ',
    statisticsLastTimeText: 'Останній раз: ',
    statisticsTimeText: 'Час: ',
    statisticsDateText: 'Дата: ',
    // Chart
    chartStatsPerDayText: 'Поденна Статистика:',
    chartStatsAccumulatedText: 'Накопичений підсумок:',
  },
  ru: {
    // SignUp / SignIn Screens
    signUpHeaderText: 'Создать Аккаунт ✍️',
    signInHeaderText: 'Войти в Аккаунт 🚪🚶',
    passwordText: 'Пароль',
    confirmPasswordText: 'Подтвердите Пароль',
    signUpBtnText: 'Регистрация',
    signInBtnText: 'Войти',
    alreadyHaveLinkText: 'Уже есть аккаунт? Войти.',
    dontHaveLinkText: 'Нет аккаунта? Зарегистрируйтесь!',
    passwordsDontMatchErrorText: 'Пароли не совпадают.',
    // SessionList Screen
    historyTitleText: 'История гвоздестояний',
    historyNavigationText: 'История',
    cleanHistoryText: 'Пока что записей нет. Давайте встанем на гвозди...',
    // Account Screen
    settingsTitleText: 'Настройки Аккаунта',
    signOutBtnText: 'Сменить Пользователя',
    lightThemeText: 'Светлая Тема',
    darkThemeText: 'Темная Тема',
    // Session Details Screen
    dateKeyText: 'Дата:',
    durationKeyText: 'Длительность:',
    feedbackKeyText: 'Отзыв:',
    removeRecordBtnText: 'Удалить Сессию',
    confirmModalMessage: 'Вы уверены, что хотите удалить эту сессию?',
    confirmModalBtnMessage: 'Удалить',
    confirmModalrejectBtnText: 'Отмена',
    confirmModalTitleText: 'Подтверждение',
    // StopWatch
    confirmModalPrepareMessage:
      'Расслабтесь. Глубоко вдохните. На выдохе, встаньте на гвозди. Первые несколько минут могут быть неприятные ощущения в ступнях. Глубоко вдыхайте и выдыхайте, чтобы отвлечься. Скоро боль пройдет и начнется настоящая практика...',
    confirmModalPrepareBtnText: 'Старт!',
    confirmModalPrepareTitleText: 'Приготовьтесь!',
    stopwatchStopButtonText: 'Стоп!',
    stopwatchStartButtonText: 'Начать!',
    // Feedback Modal
    howDoYouFeelText: 'Как вы себя чувствуете?',
    howDoYouFeelBtnText: 'Сохранить',
    alertErrorText: 'Данные не были сохранены.',
    // Statistics
    statisticsTitleText: 'Статистика',
    cleanStatisticsText: 'Пока что записей нет. Давайте встанем на гвозди...',
    statisticsTotal: 'Итого: ',
    statisticsSessionsForText: ' сессий за ',
    statisticsDaysText: ' дней',
    statisticsAllText: 'Всего: ',
    statisticsHourText: ' час ',
    statisticsMinText: ' мин ',
    statisticSecText: ' сек ',
    statisticsAveragePerSessionText: 'Средне на сессию: ',
    statisticsAveragePerDayText: 'Средне в день: ',
    statisticsLastTimeText: 'Последний раз: ',
    statisticsTimeText: 'Время: ',
    statisticsDateText: 'Дата: ',
    // Chart
    chartStatsPerDayText: 'Статистика по дням:',
    chartStatsAccumulatedText: 'Накопленный итог:',
  },
});

i18n.defaultLocale = 'uk';
i18n.locale = 'uk';

const loadLanguagePreference = async () => {
  try {
    const language = await AsyncStorage.getItem('language');
    if (language) i18n.locale = language;
  } catch (error) {
    console.error('Error loading language preference:', error);
  }
};

loadLanguagePreference();

export const switchLanguage = async (language, setLang) => {
  try {
    await AsyncStorage.setItem('language', language);
    const langu = await AsyncStorage.getItem('language');
    i18n.locale = langu;
    setLang(langu);
  } catch (error) {
    console.error('Error saving language preference', error);
  }
};

export default i18n;
