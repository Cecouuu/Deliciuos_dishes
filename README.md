# Online recipe finder 🍲

A recipe search app built with plain HTML, CSS, and JavaScript — browse dishes, view full recipe details, and (eventually) save favorites. This is a learning project, built step by step while studying JavaScript fundamentals (array methods, ES Modules, the Fetch API) before moving on to React.

Second project in a personal portfolio series, following <a href="https://github.com/Cecouuu/Catch-the-button-game">Catch The Button</a> (a browser game built with vanilla JS).

## Status

🚧 In progress — currently setting up the project foundation (API connection, basic card rendering).

## Planned Features

- Search recipes by name, with a default "popular dishes" view on page load
- Browse results as clickable recipe cards (image, name, category)
- Click a card to open a full recipe detail view (ingredients, measurements, instructions) in an overlay
- Favorites saved locally in the browser (planned)
- Fully responsive layout, built mobile-first this time
- Planned: gradual migration of parts of this project to React, as a learning exercise, followed by a third, React-only project

## Tech Stack

- HTML5, CSS3, JavaScript (ES Modules)
- [TheMealDB API](https://www.themealdb.com/api.php) — free recipe data, no API key required for development use
- React (planned, introduced incrementally)

## Project Structure

```
RecipeBookFinder/
├── css/
│   └── style.css
├── scripts/
│   ├── api.js          → fetches data from TheMealDB
│   ├── renderCards.js  → builds recipe cards & detail view from data
│   ├── events.js       → handles search input, card clicks, popup close
│   └── main.js         → entry point, imports and coordinates the above
├── tools/              → images, icons, and other static assets
├── index.html
└── README.md
```

## Credits

Recipe data provided by [TheMealDB](https://www.themealdb.com/).

## License

See [LICENSE.txt](./LICENSE.txt). Portfolio project — educational use only.

---

Built by Tsvetoslav Krumov, 2026.
