import { configure } from '@storybook/react';

function loadStories() {
  require('../client/src/stories');
  require('../client/src/Components/Layouts/Header.js');
}

configure(loadStories, module);
