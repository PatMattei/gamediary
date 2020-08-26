const React = require('react');


class ApiFoundGamesList extends React.Component {
    render() {
        const apiCall = this.props.apiCall.results;

        return (
            <html>
                <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

                <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
            </head>
                <body>
                    <div className="found-games-list">
                        {apiCall.map((game) => {
                            return (
                                <div key={game.name} gamename={game.name} imgsrc={game.image.original_url} className="returned-game">
                                    <p gamename={game.name} imgsrc={game.image.original_url}>{game.name}</p>
                                    <img gamename={game.name} imgsrc={game.image.original_url}  src={game.image.original_url} style={{ width: 200 }} />
                                </div>
                            )
                        })}
                    </div>
                    <script type="text/javascript" src="/js/iframe-scripts.js"></script>
                </body> 
            </html>
        )
    }
}

module.exports = ApiFoundGamesList;