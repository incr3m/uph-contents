import { configure } from '@storybook/react';
import { configureViewport } from '@storybook/addon-viewport';


function loadStories() {
  require('../src/stories');
}

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '468px',
      height: '963px'
    }
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px'
    }
  }
};

configure(loadStories, module);
configureViewport({
  viewports: newViewports
});
