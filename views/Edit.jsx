const React = require('react');
const Layout = require('./components/Layout');

class Edit extends React.Component {
    render() {
        const {_id, dayEntry, games, entryDate} = this.props.entry;

        return (
            <Layout>
                <h1>Edit Page</h1>
                <form action={`/entries/${_id}?_method=PUT`} method="POST" className="entry-info-form form-group">
                    <div className="edit-entry-top row">
                    <label for="entryDate">Edit Date:</label>
                    <input id="datepicker" label="Edit Date:" name="entryDate" className='entry-date form-control col-12' defaultValue={entryDate} required /><br />
                        <div className="col-8">
                            <label for="dayEntry">Edit Day's Entry:</label>
                            <textarea name="dayEntry" className="day-entry form-control" defaultValue={dayEntry} />
                        </div>
                        <div className="col-4">
                            <a href={`/entries/${_id}`}><button type="button" className="edit-entry-btn btn btn-primary">Back To Entry</button></a>
                        </div>
                    </div>
                    
                    <div className="show-entry-game-list">
                        {games.map((game) => {
                            return(
                                <div key={`${_id}-game-${game.gameName}`} className="game-entry">
                                    Edit Img source: <input name="gameImgSrc" defaultValue={game.gameImgSrc} className="form-control" required/>
                                    Edit Game Name: <input name="gameName" defaultValue={game.gameName} className="form-control" required/><br />
                                    Edit Game Entry: <textarea name="gameEntry" className="game-entry-text form-control"  defaultValue={game.gameEntry} required/><br />
                                    <button className="remove-game btn btn-danger" type="button">Remove Game</button>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                    <input type="submit" className="submit-entry btn btn-success" defaultValue="Submit Changes"/>
                </form>
                <button className="add-game btn btn-primary" type="button">Add Another Game</button>
                <hr />
                <form action={`/entries/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" class="btn btn-danger" defaultValue="Delete this Entry"/>
                </form>
            </Layout>
        )
    }
}

module.exports = Edit;