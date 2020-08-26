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




    $('.search-game').on('click', () => {
        $('iframe').remove();
        let name = $('input[name="gameName"]').val();
        $('input[name="gameName"]').before(`<iframe src="/entries/api/${name}" style="width: 50%; height: 200px" />)`).on('click', '.returned-game', () => {
            let name = $(event.target).attr("gamename");
        });
    });

    window.addEventListener('message', function(event) {
        $('input[name="gameName"]').val(event.data.name);
        $('input[name="gameImgSrc"]').val(event.data.imgSrc);
        $('.form-img').attr('src', event.data.imgSrc);
        $('.form-img').attr('alt', event.data.name);
        $('.form-img').addClass('active');
    });
});