const React = require('react');
const Layout = require('./components/Layout');

class Show extends React.Component {
    render() {
        const {_id, dayEntry, games, entryDate} = this.props.entry;
        //TODO: Get dates working
        
        return (
            <Layout>
                <a href={`${_id}/edit`}>Edit this Entry</a>
                <h2 className='entry-date'>{entryDate.toString()}</h2>
                <p>{dayEntry}</p>
                {games.map((game) => {
                    return(
                        <div key={`${_id}-${game.gameName}`}>
                            <img src={game.gameImgSrc} />
                            <h3>{game.gameName}</h3>
                            <p>{game.gameEntry}</p>
                            <hr />
                        </div>
                    )
                })}
            </Layout>
        )
    }
}

module.exports = Show;