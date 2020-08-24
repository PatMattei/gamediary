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
                                <div className="entry-date col-12">{entry.entryDate.toString()}</div>
                                <div className="index-entry-main row">
                                    <div className="entry-game-img-thumbnail-list d-flex flex-wrap col-5">
                                        
                                        {entry.games.map((game) => {
                                            return(
                                                <div className="game-img-thumbnail-container col-4">
                                                    <img src={game.gameImgSrc} className="game-img-thumbnail" />
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="day-diary col-4">{entry.dayEntry}</div>
                                    <div className="full-entry-btn-container col-3">
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