import {createSiteMenu} from './components/site-menu.js';
import {createFilters} from "./components/filters";
import {createCardAddTask} from "./components/card-edit-task";
import {createBoardContainer} from "./components/board-container";
import {createCardTask} from "./components/card-task";
import {createBtnLoadMore} from "./components/btn-load-more";
import {generateFilters} from "./mock/filter";
import {generateTasks} from "./mock/task";

const TASK_COUNT = 22;
const SHOWING_TASK_COUNT_ON_START = 8;
const SHOWING_TASK_COUNT_BY_BUTTON = 8;
const renderComponent = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const mainElement = document.querySelector(`main`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

renderComponent(document.querySelector(`.main__control`), createSiteMenu());
renderComponent(mainElement, createFilters(filters));
renderComponent(mainElement, createBoardContainer());

const boardTasks = mainElement.querySelector(`.board__tasks`);
const boardContainer = mainElement.querySelector((`.board.container`));

renderComponent(boardTasks, createCardAddTask(tasks[0]));

let showingTaskCount = SHOWING_TASK_COUNT_ON_START;

tasks.slice(1, showingTaskCount).forEach((task) => {
  renderComponent(boardTasks, createCardTask(task));
});

renderComponent(boardContainer, createBtnLoadMore());

const loadMoreButton = boardContainer.querySelector(`.load-more`);
loadMoreButton.addEventListener(`click`, () => {
  const prevTaskCount = showingTaskCount;
  showingTaskCount = showingTaskCount + SHOWING_TASK_COUNT_BY_BUTTON;
  tasks.slice(prevTaskCount, showingTaskCount).forEach((task) => {
    renderComponent(boardTasks, createCardTask(task));
  });
  if (showingTaskCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
