const React = require('react');

class Edit extends React.Component {
    render() {
        const {_id, dayEntry, games} = this.props.entry;
        return (
            <div>
                <h1>Edit Page</h1>
                <form action={`/entries/${_id}?_method=PUT`} method="POST">
                    <textarea name="dayEntry" value={dayEntry} />
                    {games.map((game) => {
                        return(
                            <div key={_id}>
                                Img source: <input name ="gameImgSrc" value={game.gameImgSrc} required/>
                                Game Name: <input name="gameName" value={game.gameName} required/><br />
                                Game Entry: <input name="gameEntry" value={game.gameEntry} required/><br />
                            </div>
                        )
                    })}
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;