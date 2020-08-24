const React = require('react');
const Layout = require('./components/Layout');

class Index extends React.Component {
    render() {
        const entries = this.props.entries;
        
        return (
            <Layout>
                <ul className="index-list">
                    {entries.map((entry) => {
                        return(
                            <li className="diary-entry d-flex w-100" key={entry._id}>
                                <div className="entry-game-img-thumbnail-list d-flex flex-wrap col-8">
                                    {entry.games.map((game) => {
                                        return(
                                            <div className="game-img-thumbnail-container col-3">
                                                <img src={game.gameImgSrc} className="game-img-thumbnail" />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="day-diary col-2">{entry.dayEntry}</div>
                                <div className="date-button-container col-2">
                                    <div className="entry-date">{entry.entryDate.toString()}</div>
                                    <a href={`/entries/${entry._id}`}><button type="button" className="view-full-entry btn btn-primary">View Full Entry</button></a>
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