<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>HTML Academy: Глейси</title>
    <link href="css/normalize.css" rel="stylesheet" type="text/css">
    <link href="css/style.css" rel="stylesheet" type="text/css" >
  </head>
  <body>
    <input class="visually-hidden radio-1" type="radio" id="product-1" name="toggle" checked>
    <input class="visually-hidden radio-2" type="radio" id="product-2" name="toggle">
    <input class="visually-hidden radio-3" type="radio" id="product-3" name="toggle">
    <div class="site-wrapper">
<!--HEADER-->
      <header class="main-header main-container">
        <div class="main-menu">
          <div class="main-logo">
            <img src="img/logo.svg" width="155" height="67" alt="Логотип Глейси">
          </div>
          <div class="main-menu-wrapper">
            <nav class="main-navigation">
              <ul class="site-navigation">
                <li class="site-navigation-item"><a href="catalog-list.html" class="site-navigation-link site-navigation-catalog">Каталог</a>
                  <ul class="navigation-list ">
                    <li class="navigation-item navigation-item-first"><a class="navigation-item-link" href="new.html" title="Новинки">Новинки</a></li>
                    <li class="navigation-item"><a class="navigation-item-link" href="catalog.html" title="Сливочное">Сливочное</a></li>
                    <li class="navigation-item"><a class="navigation-item-link" href="sherbet.html" title="Щербеты">Щербеты</a></li>
                    <li class="navigation-item"><a class="navigation-item-link" href="fruitice.html" title="Фруктовый лед">Фруктовый лед</a></li>
                    <li class="navigation-item"><a class="navigation-item-link" href="melorin.html" title="Мелорин">Мелорин</a></li>
                  </ul>  
                </li>
                <li class="site-navigation-item"><a class="site-navigation-link site-navigation-delivery" href="delivery.html" title="Доставка и оплата">Доставка и оплата</a></li>
                <li class="site-navigation-item"><a class="site-navigation-link site-navigation-company" href="company.html" title="О компании">О Компании</a></li>
              </ul>
            </nav>

            <ul class="user-navigation">
              <li class="user-navigation-item search">
                <a class="search-field user-navigation-link search-link" href="search.html" title="Поиск">
                  <svg class="search-link-img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="17" viewBox="0 0 17 17"><path class="search-svg-color" fill="#fff" d="M16.958 15.527L11.75 10.32A6.455 6.455 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13a6.465 6.465 0 0 0 3.839-1.263l5.205 5.204 1.414-1.414zM6.5 11C4.019 11 2 8.981 2 6.5S4.019 2 6.5 2 11 4.019 11 6.5 8.981 11 6.5 11z"/></svg>
                </a>
                <div class="search-popap" id="popap-search">
                  <form class="search-popap-form" action="URL" method="post">
                    <p class="search-item">
                      <label class="visually-hidden" for="search-field">Поиск</label>
                      <input class="search-area" type="text" id="search-field" 
                      name="search" value="" placeholder="Что ищем?">
                    </p>
                  </form>
                </div>
              </li>
              <li class="user-navigation-item login">
                <a class="login-link user-navigation-link" href="entrance.html" title="Вход">
                  <svg class="login-link-img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="19" viewBox="0 0 21 19">
                    <g fill="#FFF">
                        <path class="login-svg-color" d="M6 14.875L12.917 9.5 6 4.125v2.917H-.042v4.917H6z"/>
                        <path class="login-svg-color" d="M18 0H5C3.9 0 3 .9 3 2v2h2V2h13v15H5v-2H3v2c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"/>
                    </g>
                  </svg>
                  Вход
                </a>
                <div class="login-link-popap">
                  <form class="login-popap-form" action="URL" method="post"> 
                    <p class="login-link-item"> 
                      <label class="visually-hidden" for="login-email">Электронная почта</label>
                      <input class="data-area" type="text" id="login-email" 
                      name="login" value="" placeholder="Электронная почта">
                    </p>
                    <p class="login-link-item">
                      <label class="visually-hidden" for="login-password">Пароль</label>
                      <input class="data-area" type="text" id="login-password" 
                      name="password" value="" placeholder="Пароль">
                    </p>
                    <div class="login-linker-wrapper">
                      <button class="button-gl button-login-link" type="submit">Войти</button>
                      <ul class="login-linker">
                        <li class="login-linker-item"><a class="restore" href="forget-password.html" title="Забыли пароль">Забыли пароль?</a></li>
                        <li class="login-linker-item"><a class="new-registration" href="new-reg.html" title="Новая регистрация">Новая регистрация</a></li>
                      </ul>
                    </div>
                  </form>
                </div>
              </li>
              <li class="user-navigation-item">
                <a class="basket user-navigation-link" href="basket.html" title="Корзина">
                  <svg class="basket-link-img" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"><g fill="#FFF"><path d="M5.657 2.031L5.422 0H0v2h3.64l1.5 13h13.988l1.699-12.969H5.657zM17.372 13H6.922L5.888 4.031h12.66L17.372 13z"/><circle cx="6.984" cy="18" r="2"/><circle cx="15.984" cy="18" r="2"/></g></svg>
                  Пусто</a>
              </li>
            </ul>  
          </div>
        </div>
        <div class="main-time">
          <p class="time">С 10 до 20, ежедневно</p>
          <a class="phone" href="88124502525" title="Телефон">8 812 450-25-25</a>
        </div>
      </header>
<!--MAIN-->
      <main class="features-container"> 
        <h1 class="visually-hidden">Мороженое Глейси</h1>
    
        <section class="slider main-container">
          <h2 class="visually-hidden">Слайдер</h2>
          <div class="slider-control">
            <label for="product-1" class="slider-point">Первый</label>
            <label for="product-2" class="slider-point">Второй</label>
            <label for="product-3" class="slider-point">Третий</label>
          </div>
          <ul class="slider-list">
            <li class="slider-item slide" id="slide1">
              <h3 class="slider-header">Крем-брюле и пломбир с малиновым джемом</h3>
              <a href="slider-one.html" class="button-slider button-gl" title="Давайте оба">Давайте оба!</a>
            </li>
            <li class="slider-item slide" id="slide2">
              <h3 class="slider-header">Шоколадный пломбир и лимонный сорбет </h3>
              <a href="slider-two.html" class="button-slider button-gl" title="Давайте оба">Давайте оба!</a>
            </li>
            <li class="slider-item slide" id="slide3">
              <h3 class="slider-header">Пломбир с помадкой и клубничный щербет </h3>
              <a href="slider-three.html" class="button-slider button-gl" title="Давайте оба">Давайте оба!</a>
            </li>
          </ul>
        </section>

        <div class="action main-container">
          <h2 class="visually-hidden">Акции</h2>

            <div class="action-rasp-wrapper">
              <section class="action-item">
                <h3 class="action-header">Малинка даром!</h3>
                <p class="action-info">
                  При покупке 2 кг любого фруктового мороженого, 
                  добавим в ваш заказ банку малинового варенья 
                  бесплатно.
                </p>
                <button class="button-gl button-action" type="submit">Хочу варенье!</button>
              </section>
            </div>

            <div class="action-choco-wrapper">
              <section class="action-item">
                <h3 class="action-header">Шоколадки даром!</h3>
                <p class="action-info">
                  При покупке 2 кг пломбира, добавим в ваш заказ 
                  упаковку вкуснейшей шоколадной присыпки совершенно 
                  бесплатно.
                </p>
                <button class="button-gl button-action" type="submit">Хочу шоколадки!</button>
              </section>
            </div>
        </div>

        <section class="hits main-container">
          <h2 class="visually-hidden">Хиты</h2>
          <ul class="hits-list">
            
            <li class="hits-item">
              <a class="hits-item-image" href="product-1.html" title="Сливочное с апельсиновым джемом и цитрусовой стружкой">
                <img src="img/product-1.png" width="270" height="270" 
                  alt="Сливочное с апельсиновым джемом и цитрусовой стружкой">
              </a>
              <p class="hits-item-price">
                <b>310</b><span class="currency">₽</span><span class="mass">/кг</span>
              </p>
              <a class="hits-item-name" href="product-1.html" title="Сливочное с апельсиновым джемом и цитрусовой стружкой">
                <h3 class="hits-title">
                  Сливочное с апельсиновым джемом и цитрусовой стружкой
                </h3>
              </a>
              <p class="hits-img-hit">
                <img src="img/hit.svg" alt="Хит" class="img-hit" width="61" height="61">
              </p>
              <button class="button-gl button-hits">Быстрый просмотр</button>
              <div class="hits-item-background"></div>
            </li>

            <li class="hits-item">
              <a class="hits-item-image" href="product-2.html" title="Сливочно-кофейное с кусочками шоколада">
                <img src="img/product-2.png" width="270" height="270" 
                  alt="Сливочно-кофейное с кусочками шоколада">
              </a>
              <p class="hits-item-price">
                  <b>380</b><span class="currency">₽</span><span class="mass">/кг</span>
              </p>
              <a class="hits-item-name" href="product-2.html" title="Сливочно-кофейное с кусочками шоколада">
                <h3 class="hits-title">
                  Сливочно-кофейное с кусочками шоколада
                </h3>
              </a>
              <p class="hits-img-hit">
                  <img src="img/hit.svg" alt="Хит" class="img-hit" width="61" height="61">
              </p>
              <button class="button-gl button-hits">Быстрый просмотр</button>
              <div class="hits-item-background"></div>
            </li>

            <li class="hits-item">
              <a class="hits-item-image" href="product-3.html" title="Сливочно-клубничное с присыпкой из белого шоколада">
                <img src="img/product-3.png" width="270" height="270" 
                  alt="Сливочно-клубничное с присыпкой из белого шоколада">
              </a>
              <p class="hits-item-price">
                  <b>355</b><span class="currency">₽</span><span class="mass">/кг</span>
              </p>
              <a class="hits-item-name" href="product-3.html" title="Сливочно-клубничное с присыпкой из белого шоколада">
                <h3 class="hits-title">
                  Сливочно-клубничное с присыпкой из белого шоколада
                </h3>
              </a>
              <p class="hits-img-hit">
                  <img src="img/hit.svg" alt="Хит" class="img-hit" width="61" height="61">
              </p>
              <button class="button-gl button-hits">Быстрый просмотр</button>
              <div class="hits-item-background"></div>
            </li>

            <li class="hits-item">
              <a class="hits-item-image" href="product-4.html" title="Сливочное крем-брюле с карамельной подливкой">
                <img src="img/product-4.png" width="270" height="270" 
                  alt="Сливочное крем-брюле с карамельной подливкой">
              </a>
              <p class="hits-item-price">
                  <b>415</b><span class="currency">₽</span><span class="mass">/кг</span>
              </p>
              <a class="hits-item-name" href="product-4.html" title="Сливочное крем-брюле с карамельной подливкой">
                <h3 class="hits-title">
                  Сливочное крем-брюле с карамельной подливкой
                </h3>
              </a>
              <p class="hits-img-hit">
                  <img src="img/hit.svg" alt="Хит" class="img-hit" width="61" height="61">
              </p>
              <button class="button-gl button-hits">Быстрый просмотр</button>
              <div class="hits-item-background"></div>
            </li>
          </ul>
        </section>

        <section class="features main-container">
          <h2 class="visually-hidden">Характеристики</h2>
          <div class="features-area">
            <p class="features-header">Магазин Глэйси — это онлайн- и офлайн-магазин по продаже мороженого собственного производства на развес</p>
            <ul class="features-list">  
              <li class="feature-item">
                <img class="feature-item-img" src="img/ice-cream.svg" width="50" height="50" alt="Мороженое">
                <p class="features-text">Все наше мороженое изготавливается на собственном производстве, 
                  с использованием современного оборудования и проверенных 
                  временем технологий.</p>
              </li>
              <li class="feature-item">
                <img class="feature-item-img" src="img/cow.svg" width="50" height="50" alt="Корова">
                <p class="features-text">Закупка ингредиентов  производится только у проверенных фермерских 
                  хозяйств и компаний, с которыми нас связывает долговременное 
                  сотрудничество.</p>
              </li>
              <li class="feature-item">
                <img class="feature-item-img" src="img/eco.svg" width="50" height="50" alt="Эко">
                <p class="features-text">Для приготовления мороженого используются настоящие сливки и 
                  молоко высочайшего качества. Все дополнительные ингредиенты и 
                  добавки произведены из натурального, экологически чистого сырья.</p>
              </li>
              <li class="feature-item">
                <img class="feature-item-img" src="img/thermometer.svg" width="50" height="50" alt="Термометр">
                <p class="features-text">Доставка нашего мороженого до заказчиков осуществляется в с
                  пециальном термопаке, который не дает мороженому растаять в пути и 
                  позволяет сохранить превосходный вкус.</p>
              </li>   
            </ul>
          </div>
        </section>

        <div class="news-appointment-wrapper  main-container">
          <article class="news">
            <h2 class="news-header">Новое в нашем блоге</h2>
              <a class="news-link" href="article.html" title="10 способов сервировки фрутовых щербетов к столу">
                10 способов сервировки фруктовых щербетов к столу
              </a>
          </article>

          <section class="appointment">
            <h2 class="visually-hidden">Подписка</h2>
            <div class="appointment-wrapper">
              <div class="appointment-field">
                <p class="appointment-info"> 
                  Подпишитесь на нашу сладкую рассылку и будете всегда в курсе 
                  всего самого вкусного, что у нас происходит. Обещаем не спамить и 
                  не слать всякой ненужной ерунды. Честно =) 
                </p>
                <form class="appointment-form" action="URL" method="post">
                  <p class="appointment-item">
                    <label class="visually-hidden" for="appointment-email">Электронная почта</label>
                    <input class="appointment-area" id="appointment-email" type="text" 
                    name="email" value="" placeholder="Электронная почта">
                  </p>
                  <button class="button-gl button-email" type="submit">Отправить</button>
                </form>
              </div>
            </div>
          </section>
        </div>  

        <section class="map">
          <h2 class="visually-hidden">Как добраться</h2>
          <div class="map-wrapper">
            <p class="map-image-container">
              <img class="map-image" src="img/map.jpg" width="1302" height="430" alt="Офис компании по адресу: ул. Большая Конюшенная 19/8, Санкт-Петербург">
            </p>
            <div class="map-list-wrapper main-container">
              <ul class="map-adress">
                <li class="adress">
                  <span class="adress-normal">Адрес главного офиса<br> 
                  и офлайн-магазина:<br></span>
                  <span class="adress-bold">ул. Большая Конюшенная<br>
                  19/8, Санкт-Петербург</span>
                </li>
                <li class="adress">
                  <span class="adress-normal">Для заказов по телефону:<br></span>
                  <span class="adress-bold">8 812 450-25-25<br></span>
                  <span class="adress-normal">(с 10 до 20 ежедневно)</span>
                </li>
                <li class="adress">
                  <a class="map-feedback button-gl" href="feedback.html" title="Форма обратной связи">Форма обратной связи</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
<!--FOOTER-->
      <footer class="main-footer main-container">
        <div class="footer-wrapper">
          <div class="footer-social">
            <p class="social-space">
              <a title="Твиттер" class="social-button" href="twitter.html" target="_blank">
                <svg class="social-space-img" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#FFF" d="M16 0C7.164 0 0 7.164 0 16c0 8.837 7.164 16 16 16 8.837 0 16-7.163 16-16 0-8.836-7.163-16-16-16zm7.944 12.809c-.251 6.516-3.463 10.832-10.992 10.702h-.486c-.447 0-4.543-.443-5.344-1.823 2.479.19 4.247-.406 5.12-1.136-1.048-.289-2.923-.461-3.251-2.848.384.104.618.221 1.299.113-1.307-.824-2.758-1.519-2.679-3.643.311.317 1.164.518 1.46.457-.768-.233-2.149-3.244-.974-4.781 1.984 1.79 4.075 3.482 7.804 3.643.227-2.214 1.24-3.699 3.168-4.325 1.84-.479 3.255.26 3.901 1.138.737-.224 1.453-.466 2.193-.685-.004.833-.569 1.463-.935 1.709.747.165 1.423-.475 1.423-.475-.184.963-1.094 1.725-1.707 1.954z"/></svg>
              </a>
            </p>
            <p class="social-space">
              <a title="Инстаграм" class="social-button" href="instagram.html" target="_blank">
                <svg class="social-space-img" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="#FFF"><path d="M20.916 16a4.938 4.938 0 1 1-9.877 0c0-.394.051-.773.138-1.14h-.897v6.838h11.396V14.86h-.897c.086.367.137.746.137 1.14z"/><path d="M15.978 18.659c1.466 0 2.659-1.193 2.659-2.659s-1.193-2.659-2.659-2.659c-1.466 0-2.659 1.193-2.659 2.659s1.192 2.659 2.659 2.659zM18.637 10.302h3.039v3.039h-3.039z"/><path d="M16 0C7.164 0 0 7.164 0 16c0 8.837 7.164 16 16 16 8.837 0 16-7.163 16-16 0-8.836-7.163-16-16-16zm7.955 21.698a2.285 2.285 0 0 1-2.279 2.279H10.279A2.285 2.285 0 0 1 8 21.698V10.302a2.286 2.286 0 0 1 2.279-2.279h11.396a2.286 2.286 0 0 1 2.279 2.279v11.396z"/></g></svg>
              </a>
            </p>
            <p class="social-space">
              <a title="Фейсбук" class="social-button" href="facebook.html" target="_blank">
                <svg class="social-space-img" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#FFF" d="M16 0C7.164 0 0 7.163 0 16s7.164 16 16 16c8.837 0 16-7.164 16-16S24.837 0 16 0zm4.062 9.455h-3.021v3.444h3.021v3.445h-3.021v8.61H14.02v-8.61H11v-3.445h3.021V9.455c0-1.902 1.353-3.445 3.021-3.445h3.021v3.445z"/></svg>
              </a>
            </p>
            <p class="social-space">
              <a title="Вконтакте" class="social-button" href="vkontakte.html" target="_blank">
                <svg class="social-space-img" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="#FFF"><path d="M16.637 14.495c.402-.019.719-.082.951-.188.326-.145.54-.33.641-.559.101-.229.15-.496.15-.797 0-.232-.058-.465-.174-.697-.116-.232-.322-.405-.617-.517-.264-.1-.592-.155-.984-.165a76.242 76.242 0 0 0-1.652-.014h-.339v2.965h.565c.571 0 1.057-.009 1.459-.028zM18.118 17.084c-.282-.081-.672-.125-1.166-.132a127.97 127.97 0 0 0-1.55-.009h-.79v3.493h.264c1.014 0 1.74-.003 2.18-.009a3.2 3.2 0 0 0 1.212-.245c.377-.157.633-.364.774-.625s.214-.562.214-.9c0-.446-.088-.788-.261-1.03-.17-.241-.464-.423-.877-.543z"/><path d="M16 0C7.164 0 0 7.164 0 16c0 8.837 7.164 16 16 16 8.837 0 16-7.163 16-16 0-8.836-7.163-16-16-16zm6.602 20.531a3.73 3.73 0 0 1-1.124 1.327c-.552.415-1.161.71-1.823.886s-1.501.264-2.519.264h-6.121V8.987h5.443c1.13 0 1.957.038 2.48.113a5.126 5.126 0 0 1 1.561.5c.533.27.929.632 1.189 1.087.26.455.392.975.392 1.558 0 .678-.179 1.278-.536 1.795-.358.518-.863.92-1.517 1.208v.075c.917.182 1.642.559 2.179 1.13.537.571.807 1.325.807 2.261 0 .678-.138 1.283-.411 1.817z"/></g></svg>
              </a>
            </p>
          </div>

          <div class="contacts">
            <ul class="contacts-link-wrapper">
              <li class="contacts-link-item"><a class="contacts-link" href="for-deliveres.html" title="Для поставщиков">Для поставщиков</a></li>
              <li class="contacts-link-item"><a class="contacts-link" href="documents.html" title="Наши документы">Наши документы</a></li>
              <li class="contacts-link-item"><a class="contacts-link" href="about-us.html" title="О производстве">О производстве</a></li>
              <li class="contacts-link-item"><a class="contacts-link" href="eco-standarts.html" title="Экологические стандарты">Экологические стандарты</a></li>
            </ul>
          </div>

          <div class="footer-copyright">
            <a href="https://htmlacademy.ru/intensive/htmlcss" class="copyright" title="HTML Academy">
              <img src="img/logo-htmlacademy.svg" width="110" height="37" 
              alt="Логотип HTML Academy">
            </a>
            <p class="copyright-html">Сделано в 
              <a href="https://htmlacademy.ru/intensive/htmlcss" 
              class="html-academy" title="HTML Academy">HTML Academy</a> 
              © 2019
            </p>
          </div>
        </div>
      </footer>
    </div>
    <script src="js/script.js"></script>
  </body>
</html>
