import {createSiteMenu} from './components/site-menu.js';
import {createFilters} from "./components/filters";
import {createCardAddTask} from "./components/card-add-task";
import {createBoardContainer} from "./components/board-container";
import {createCardTask} from "./components/card-task";
import {createBtnLoadMore} from "./components/btn-load-more";

const TASK_COUNT = 3;
const renderComponent = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const mainElement = document.querySelector(`main`);

renderComponent(document.querySelector(`.main__control`), createSiteMenu());
renderComponent(mainElement, createFilters());
renderComponent(mainElement, createBoardContainer());

const boardTasks = mainElement.querySelector(`.board__tasks`);
const boardContainer = mainElement.querySelector((`.board.container`));

renderComponent(boardTasks, createCardAddTask());

for (let i = 0; i < TASK_COUNT; i++) {
  renderComponent(boardTasks, createCardTask());
}

renderComponent(boardContainer, createBtnLoadMore());
