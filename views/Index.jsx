const React = require('react');
const Layout = require('./components/Layout');

class Index extends React.Component {
    render() {
        const entries = this.props.entries;
        
        return (
            <Layout>
                <ul className="index-list w-100">
                    {entries.map((entry) => {
                        return(
                            <li className="index-diary-entry row" key={entry._id}>
                                <div className="entry-date col-12">
                                    <a href={`/entries/${entry._id}`}>{entry.entryDate.toString()}</a>
                                </div>
                                <div className="index-entry-main row">
                                    <div className="entry-game-img-thumbnail-list d-flex flex-wrap col-5 col-lg-8">
                                        
                                        {entry.games.map((game) => {
                                            return(
                                                <div key={game.gameName} className="game-img-thumbnail-container col-4 col-lg-3">
                                                    <img src={game.gameImgSrc} className="game-img-thumbnail" />
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="day-diary col-4 col-lg-2">{entry.dayEntry}</div>
                                    <div className="full-entry-btn-container col-3 col-lg-2">
                                        <a href={`/entries/${entry._id}`}><button type="button" className="view-full-entry-btn btn btn-primary">View Full Entry</button></a>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </Layout>
        )
    }
}

module.exports = Index;