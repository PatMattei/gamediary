const React = require('react');
const Layout = require('./components/Layout');

class Edit extends React.Component {
    render() {
        const {_id, dayEntry, games} = this.props.entry;

        return (
            <Layout>
                <h1>Edit Page</h1>
                <form action={`/entries/${_id}?_method=PUT`} method="POST">
                    <textarea name="dayEntry" value={dayEntry} />
                    {games.map((game) => {
                        return(
                            <div key={_id}>
                                Img source: <input name ="gameImgSrc" defaultValue={game.gameImgSrc} required/>
                                Game Name: <input name="gameName" defaultValue={game.gameName} required/><br />
                                Game Entry: <input name="gameEntry" defaultValue={game.gameEntry} required/><br />
                            </div>
                        )
                    })}
                    <input type="submit" name="" defaultValue="Submit Changes"/>
                </form>
                <button className="add-game">Add Another Game</button>
                <hr />
                <form action={`/entries/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" defaultValue="Delete this Entry"/>
                </form>
            </Layout>
        )
    }
}

module.exports = Edit;