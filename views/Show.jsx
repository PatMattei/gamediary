const React = require('react');
const Layout = require('./components/Layout');

class Show extends React.Component {
    render() {
        const {_id, dayEntry, games, entryDate} = this.props.entry;
        
        return (
            <Layout>
                <div className="show-entry-container w-100">
                    <div className="show-entry-top row">
                        <h2 className='entry-date col-12' dateTime={dayEntry}>{entryDate.toString()}</h2>
                        <div className="day-entry col-8">{dayEntry}</div>
                        <div className="col-4">
                            <a href={`${_id}/edit`}><button type="button" className="edit-entry-btn btn btn-primary">Edit Today's Entry</button></a>
                        </div>
                    </div>
                    <div className="show-entry-game-list">
                        {games.map((game) => {
                            return(
                                <div key={`${_id}-${game.gameName}`} className="show-entry-game row">
                                    <div className="game-img-thumbnail-container col-5">
                                        <img src={game.gameImgSrc} alt={game.gameName} />
                                    </div>
                                    <div className="game-entry-text col-7">{game.gameEntry}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Show;