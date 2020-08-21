$(".add-game").click(() => {
	$(
		'<div key={`${_id}-game-${game.gameName}`}>Img source: <input name ="gameImgSrc" required/>Game Name: <input name="gameName" required/><br />Game Entry: <input name="gameEntry" required/><br /><button className="remove-game" action="" method="">Remove Game</button></div>'
	).insertBefore(".submit-entry");
});


$(".remove-game").click((event) => {
    event.preventDefault();
    $(event.target).closest(".game-entry").remove();
});
