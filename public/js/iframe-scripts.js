$(() => {
    $('.returned-game').on('click', () => {
        let message = {
            name: $(event.target).attr('gamename')
        }
        window.top.postMessage(message, '*');
      return false;
    })
});