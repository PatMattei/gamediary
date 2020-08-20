const React = require('react');
const Layout = require('./components/Layout');

class Show extends React.Component {
    render() {
        const {dayEntry, games} = this.props.entry;
        //TODO: Get dates working
        
        return (
            <Layout>
                <p>{dayEntry}</p>
                {games.map((game) => {
                    return(
                        <div>
                            <img src={game.gameImgSrc} />
                            <h3>{game.gameName}</h3>
                            <p>{game.gameEntry}</p>
                        </div>
                    )
                })}
            </Layout>
        )
    }
}

module.exports = Show;