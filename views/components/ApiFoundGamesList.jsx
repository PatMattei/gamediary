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
                <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

                <title>{this.props.title}</title>
                <script type="text/javascript">
                    {function getVal() {
                        var sel = document.getElementById("Select1");
                        var index = sel.selectedIndex;
                        var value = sel[index].value;
                        console.log('test')
                        return value;
                    }}
            </script>
            </head>
                <body>
                    <form id="frm" >
                        <h1>this is iframe child</h1>
                        <select id="Select1" name="Select1">
                            <option value="1">one</option>
                            <option value="2">two</option>
                            <option value="3">three</option>
                        </select>
                        <input type="button" id="button" value="Go To Parent" />
                    </form>
                    <div className="found-games-list">
                        {apiCall.map((game) => {
                            return (
                                <div key={game.name} gamename={game.name} className="returned-game">
                                    <p gamename={game.name} >{game.name}</p>
                                    <img gamename={game.name}  src={game.image.original_url} style={{ width: 200 }} />
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