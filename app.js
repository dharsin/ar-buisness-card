AFRAME.registerComponent('url-handler', {
    schema: {
      url: { type: 'string', default: '' } // This matches the 'url:' key inside your HTML
    },
    init: function () {
      const data = this.data;
      this.el.addEventListener('click', function () {
        if (data.url) {
          window.open(data.url, '_blank', 'noopener,noreferrer');
        }
      });
    }
  });