var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: 'See Tutorials',
    number: '42',
    header: 'Learn React',
    description: 'React is a fantastic new library for making fast, dynamic pages. React is a fantastic new library for making fast, dynamic pages.',
    imageUrl: "http://formatjs.io/img/react.svg"
  },
  {
    title: 'See Tutorials',
    number: '12',
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
    imageUrl: "https://avatars0.githubusercontent.com/u/6200624?v=3&s=400"
  }]
};

// React, please render this class
var element = React.createElement(ThumbnailList, options);

// React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));
