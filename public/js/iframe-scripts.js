$(() => {
    $('.returned-game').on('click', () => {
        let message = {
            name: $(event.target).attr('gamename'),
            imgSrc: $(event.target).attr('imgsrc')
        }
        window.top.postMessage(message, '*');
      return false;
    })
});