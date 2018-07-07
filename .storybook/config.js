import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/Components/Layouts/Header.js');
}

configure(loadStories, module);
