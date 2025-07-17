## Usage

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

Learn more about deploying your application with the [documentations](https://vite.dev/guide/static-deploy.html)

## Task

Данное тестовое задание создано для проверки знания Solid.js, tailwind.css, tanstack, умения верстать и понимание клиент-серверного взаимодействия. От кандидата требуется сверстать страницу с несколькими карточками, вот в таком стиле: 
[Figma](https://www.figma.com/design/wyi2sDMoX07LjWUo0kbzV5/Test-frontend?node-id=0-1&t=LIyGsYdBxMPD0uNw-1)


#### Шаг 0.
- Сделайте форк репозитория [test-repo-frontend](https://github.com/PetrAlexkulakov/test-repo-frontend)  и клонируйте его себе. Работу ведите в форкнутом репозитории, оригинальный никак менять не надо.
- Установите необходимые зависимости, проверьте работоспособность.
- В ходе выполнения задания вы можете менять ваш форкнутый проект и его конфигурацию как угодно, в разумных пределах.
#### Шаг 1.
- Выберите любое удобное вам fake api и сделайте получение тестовых данных, подходящих для задачи. Мы советуем использовать [jsonplaceholder](https://jsonplaceholder.typicode.com/), но можете выбрать любое другое. Клиент-серверное взаимодействие должно происходить через tanstack!
- Добавьте обработчик загрузки данных: лоадер с анимацией.
- Добавьте обработчик ошибок: ошибка должна выводиться в консоль полностью, а также в читабельном формате в alert(). Также ошибка должны быть отображена визуально
#### Шаг 2.
- Сверстайте карточки для данных, опираясь на макет выше. Точное следование дизайну не требуется и невозможно, но чем ближе вы к нему будите, тем лучше. Также респонсив + адаптив поощряются. При вёрстке необходимо использовать tailwind + scss!
#### Шаг 3.
- Добавьте пагинацию: по 4, 8 либо 12 элементов за раз. Желательно, чтобы это выглядело приятно для пользователя.
###### Примечание: в JSONPlaceholder к запросам /users пагинацию необходимо реализовывать с помощью query-параметров _start и _limit 
###### Пример: [users?_start=2&_limit=5](https://jsonplaceholder.typicode.com/users?_start=2&_limit=5 )  

#### Шаг 4.
- Сделайте кнопку «Обновить»  при нажатии на которую данные с сервера будут запрошены и отрисованы заново.
- Также каждые 10 минут данные должны тем же образом обновляться автоматически
#### Шаг 5.
- У каждой карточки одно из текстовых полей должно быть редактируемым. При редактировании его пользователем должен автоматически отправляться PATCH запрос на сервер.
#### Шаг 6. 
- При выполнении данного задания отправьте нам ссылку на ваш форкнутый репозиторий с небольшим текстовым отчётом: что удалось сделать, что нет, с какими трудностями вы столкнулись.
