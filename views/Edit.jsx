const React = require('react');
const Layout = require('./components/Layout');

class Edit extends React.Component {
    render() {
        const {_id, dayEntry, games, entryDate} = this.props.entry;

        return (
            <Layout>
                <h1>Edit Page</h1>
                <form action={`/entries/${_id}?_method=PUT`} method="POST" className="entry-info-form">
                    Edit Date: <input id="datepicker" name="entryDate" defaultValue={entryDate} required />
                    Edit Day's Entry: <textarea name="dayEntry" defaultValue={dayEntry} />
                    {games.map((game) => {
                        return(
                            <div key={`${_id}-game-${game.gameName}`} className="game-entry">
                                Edit Img source: <input name ="gameImgSrc" defaultValue={game.gameImgSrc} required/>
                                Edit Game Name: <input name="gameName" defaultValue={game.gameName} required/><br />
                                Edit Game Entry: <input name="gameEntry" defaultValue={game.gameEntry} required/><br />
                                <button className="remove-game" type="button">Remove Game</button>
                            </div>
                        )
                    })}
                    <hr />
                    <input type="submit" name="" className="submit-entry" defaultValue="Submit Changes"/>
                </form>
                <button className="add-game" type="button">Add Another Game</button>
                <hr />
                <form action={`/entries/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" defaultValue="Delete this Entry"/>
                </form>
            </Layout>
        )
    }
}

module.exports = Edit;