# Importing dynamic components in Reactjs

This is a simple React application that demonstrates how to use dynamic components in a React project. It dynamically loads components from a specific directory and displays them on the page.

## Getting Started

To get started, simply clone the project and run `npm install` to install all dependencies.

```bash
git clone https://gitlab.com/ayushi_imenso/import_dynamic_component_in_file.git
cd dynamic-component-react-app
npm install
```

Once all dependencies are installed, run the app using the following command:

```bash
npm start
```

This should start the app on `http://localhost:3000/` in your default browser.

## How it Works

The app uses `require.context` to load all components from the `./components` directory. It then stores the components in an object called `componentNames`.

The app also has an array of objects called `records` that contain information about the components to be displayed on the page. Each object in the `records` array has a `key` that corresponds to the name of a component in the `componentNames` object.

In the `handleDynamicComponent` function, the app maps over the `records` array and dynamically assigns each component to the `component` property of the object. This is achieved by getting the component from the `componentNames` object using its corresponding key.

Finally, the app displays the components on the page by mapping over the `records` array and rendering each component in a `card` element.

## Dependencies

This app was built using React and the following dependencies were used:

- `react`
- `react-dom`
- `react-scripts`

## Conclusion

This app demonstrates how to use dynamic components in a React project. It loads components from a specific directory, assigns them to objects, and displays them on the page. You can modify the `./components` directory to include your own components and update the `records` array to display the components on the page.
