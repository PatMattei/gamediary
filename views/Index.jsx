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
                            <li className="diary-entry" key={entry._id}>
                                <a href={`/entries/${entry._id}`}>
                                    <p>{entry.dayEntry}</p>
                                    <h2>Games played:</h2>
                                </a>
                                {entry.games.map((game) => {
                                    return(
                                        <div>
                                            <h3 key={`${entry._id}-${game.gameName}`}>{game.gameName}</h3>
                                            <img src={game.gameImgSrc} />
                                        </div>
                                    )
                                })}
                                <hr></hr>
                            </li>
                        );
                    })}
                </ul>
            </Layout>
        )
    }
}

module.exports = Index;