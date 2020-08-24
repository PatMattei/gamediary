$(() => {
    //jQueryUI- datepicker module
    $( "#datepicker" ).datepicker({
        showOn: "both",
        buttonImageOnly: true,
        buttonImage: "https://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
        buttonText: "Calendar"
      });

    //TODO: Edit dates
    // var myDate = new Date($('.entry-date'));
    // $('.entry-date').html(myDate.Substring(0, myDate.IndexOf(":") + 1));
    //.substr(0, 15, d.indexOf(':'))
    
    removeGame = (event) => {
        event.preventDefault();
        $(event.target).closest(".game-entry").remove();
    }


    $(".add-game").click(() => {
        const $newEntry = $('<div class="game-entry">        <label for="gameImgSrc">Edit Img source:</label>        <input name="gameImgSrc" value="" class="form-control" required />        <label for="gameName">Edit Game Name:</label>        <input name="gameName" value="" class="form-control" required /><br />        <label for="gameEntry">Edit Game Entry:</label>        <textarea name="gameEntry" class="game-entry-text form-control"  value="" required />');
        $newEntry.append('<br />        <button class="remove-game btn btn-outline-danger" type="button">Remove Game</button><hr />')
        $newEntry.insertBefore(".submit-entry").on('click', '.remove-game', (event) => {
            removeGame(event);
        });
    });

    $(".remove-game").on('click', (event) => {
        removeGame(event);
    });
});