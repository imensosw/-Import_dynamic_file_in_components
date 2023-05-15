# Importing dynamic files in component

## How to add dynamic files in a component

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

The app uses `require.context` to load all components from the `./components` directory. It then stores the components in an object called `componentNames`. To install `require.context` use the following command:

```
npm i --save require-context
```

Then import `require-context` in your file using the following code:

```
const requireModule = require.context('./components', false, /\.js$/);
``` 

Here `./components` is the path of the directory, `false` means not to search subdirectories and `/\.js$/` is used to match all files with a .js extension.

The app also has an array of objects called `records` that contain information about the components to be displayed on the page. Each object in the `records` array has a `key` that corresponds to the name of a component in the `componentNames` object.

```
 const [records, setRecords] = useState([
    { key: "component1", name: "Component 1", data: [] },
    { key: "component2", name: "Component 2", data: [] },
    { key: "component3", name: "Component 3", data: [] },
    { key: "component4", name: "Component 4", data: [] }
  ])
```

In the `handleDynamicComponent` function, the app maps over the `records` array and dynamically assigns each component to the `component` property of the object. This is achieved by getting the component from the `componentNames` object using its corresponding key.

```
 const updateRecords= records.length > 0 && records.map((ele) => {
      const DynamicComponent = componentMap[ele.key]
      ele.component = (
        <DynamicComponent
          data={ele.data}
          key={ele.data}
        />
      );
      return{...ele};
    })
    setRecords(updateRecords);
```

Finally, the app displays the components on the page by mapping over the `records` array and rendering each component in a `card` element.

## Dependencies

This app was built using React and the following dependencies were used:

- `react`
- `react-dom`
- `react-scripts`

## Conclusion

This app demonstrates how to use dynamic components in a React project. It loads components from a specific directory, assigns them to objects, and displays them on the page. You can modify the `./components` directory to include your own components and update the `records` array to display the components on the page.
