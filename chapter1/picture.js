function loadImage() {
  const image = new Image();
  image.src = './spaceship.png';
  image.onload = function() {
    alert('Image finished loading');
  };
}

const imageLoader = () => ({
  loaded: true,
  loadedImages: 0,
  totalImages: 0,
  load: url => {
    this.totalImages++;
    this.loaded = false;
    let image = new Image();
    image.src = url;
    image.onload = () => {
      imageLoader.loadedImages++;
      if (imageLoader.loadedImages == imageLoader.totalImages) {
        imageLoader.loaded = true;
      }
      image.onload = undefined;
    };
    return image;
  },
});
