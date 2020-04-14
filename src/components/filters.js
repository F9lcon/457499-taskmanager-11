function getFilter(filter, isChecked) {
  const {name, count} = filter;

  return (`
    <input
      type="radio"s
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
    />
    <label for="filter__${name}" class="filter__label">
      ${name} <span class="filter__${name}-count">${count}</span>
    </label>
  `);
}

export const createFilters = (filtersData) => {
  const filtersMarkup = filtersData.map((it, i) =>
    getFilter(it, i === 0)).join(`\n`);

  return (`
  <section class="main__filter filter container">
    ${filtersMarkup}
  </section>
  `);
};
