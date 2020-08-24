const React = require('react');
const Layout = require('./components/Layout');

class Show extends React.Component {
    render() {
        const {_id, dayEntry, games, entryDate} = this.props.entry;
        //TODO: Get dates working
        
        return (
            <Layout>
                <div className="show-entry-container">
                    <div className="show-entry-top row">
                        <h2 className='entry-date col-12' datetime={dayEntry}>{entryDate.toString()}</h2>
                        <div className="day-entry col-8">{dayEntry}</div>
                        <div className="col-4">
                            <a href={`${_id}/edit`}><button type="button" className="edit-entry-btn btn btn-primary">Edit Today's Entry</button></a>
                        </div>
                    </div>
                    <div className="show-entry-game-list">
                        {games.map((game) => {
                            return(
                                <div key={`${_id}-${game.gameName}`} className="show-entry-game row">
                                    <img src={game.gameImgSrc} className="col-2"/>
                                    <div className="game-entry-text col-9">{game.gameEntry}</div>
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