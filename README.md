# auto-component

[![npm version](https://badge.fury.io/js/auto-component.svg)](https://www.npmjs.com/package/auto-component)

[![github repo](https://img.shields.io/badge/Repo%20-%20GitHub?style=flat&logo=github&link=https%3A%2F%2Fgithub.com%2FTimHuitt%2Fclient-auto-component)](https://github.com/TimHuitt/auto-component)

[![official website](https://img.shields.io/badge/demo-37c637?style=flat&logo=react&logoColor=white&label=docs
)](https://auto-component.com)

> A tool to streamline UI element creation in React projects through AI prompted generation

## Technologies Used

| Category            | Technologies                                                                          |
|---------------------|----------------------------------------------------------------------------------------|
| **Frontend**        | [React](https://reactjs.org/) - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  |
| **Backend**         | [Mongoose](https://mongoosejs.com/) - [Express](https://expressjs.com/) - [Node.js](https://nodejs.org/)  |
| **Dependencies**    | [Babel](https://babeljs.io/) - [JSXParser](https://www.npmjs.com/package/jsx-parser) - [js-beautify](https://www.npmjs.com/package/js-beautify) |

#### Dependency Uses
> Babel - Transpile JSX to JS for publishing<br/>
JSXParser - Dynamically render generated code<br/>
js-beautify - Format JSX/HTML for UI display

## Installation

Install `auto-component` as a development dependency within your project:

```bash
npm install -D auto-component
```

## Usage

1. Import `AutoComponent` in the file where you're building the new component:

```javascript
import AutoComponent from 'auto-component';
```

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://i.imgur.com/v18uMyR.png" alt="Step 2" style="max-width: 100%; height: auto;">
</div>

2. Add the component to your code where you want it to be rendered:

```jsx
<AutoComponent />
```

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://i.imgur.com/Hh4MV4W.png" alt="Step 3" style="max-width: 100%; height: auto;">
</div>

## Getting Started

3. View your page to see the auto-component tool at the bottom, indicating where it will render your code:

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://i.imgur.com/ItXg9Bd.png" alt="Step 4" style="max-width: 100%; height: auto;">
</div>

4. Start building by telling `auto-component` what you want and clicking "Generate." The result will be rendered on the page. You can view the "Request" or "Response" tabs to inspect what is being sent to the AI and what was returned:

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://i.imgur.com/DmXWPdC.gif" alt="Step 5" style="max-width: 100%; height: auto;">
</div>

## Making Changes

5. Ask `auto-component` to make changes to the code it provided, and see the changes rendered on the page:

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://i.imgur.com/zSqx9iP.gif" alt="Step 6" style="max-width: 100%; height: auto;">
</div>

## Copying Your Code

6. When satisfied with the response, click on the "Response" tab underneath the input. Copy the code from the AI to use it in your codebase:

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="https://i.imgur.com/m9KpCHL.gif" alt="Step 7" style="max-width: 100%; height: auto;">
</div>

## Start a New Session

7. Click the red X button to start a new session.


# Planned Features

## User Features

1. **Personal Page:**
   - Allow users to create a personal page to store and manage their created components.
   - Efficiently reuse and keep track of components.

2. **Save and Manage Code:**
   - Provide a "Save" button to store the returned code from the AI.
   - Users can easily manage their components within their user page.

3. **Position Customization:**
   - Allow users to shift the position of the request/code box around the screen.
   - Ensure it doesn't obscure anything in their project.

## Developer Features

1. **Code Integration Walkthrough:**
   - Include an optional walkthrough of code integration.
   - Help developers understand how to implement generated components into their projects.

2. **Code Editing in the Browser:**
   - Enable developers to edit displayed code directly in the browser.
   - Allow quick adjustments without leaving the platform.

3. **Access Saved Components:**
   - Provide developers with the ability to access their saved components directly from the AutoComponent component.

4. **Multiple AutoComponent Instances:**
   - Notify developers if there is more than one `<AutoComponent />` creation component added to the project.
   - Prevent potential functionality issues that may arise from multiple instances.

5. **Multiple Components with Single Request Box:**
   - Allow developers to add multiple components to the page.
   - Provide an easy way to switch between them using a single request box.

## License

This project is licensed under the AGPL 3.0 License - see the [LICENSE](LICENSE) file for details.
View license at [GNU.org](https://www.gnu.org/licenses/agpl-3.0.en.html)