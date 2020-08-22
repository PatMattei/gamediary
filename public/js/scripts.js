$(() => {
    //jQueryUI- datepicker module
    $( "#datepicker" ).datepicker();

    //TODO: Edit dates
    // var myDate = new Date($('.entry-date'));
    // $('.entry-date').html(myDate.Substring(0, myDate.IndexOf(":") + 1));
    //.substr(0, 15, d.indexOf(':'))
    
    removeGame = (event) => {
        event.preventDefault();
        $(event.target).closest(".game-entry").remove();
    }


    $(".add-game").click(() => {
        const div = $('<div class="game-entry">Img source: <input name ="gameImgSrc" required/>Game Name: <input name="gameName" required/><br />Game Entry: <input name="gameEntry" required/><br /><button class="remove-game" type="button">Remove Game</button></div>');
        div.insertBefore(".submit-entry").on('click', '.remove-game', (event) => {
            removeGame(event);
        });
    });

    $(".remove-game").on('click', (event) => {
        removeGame(event);
    });
});