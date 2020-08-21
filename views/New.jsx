const React = require('react');
const Layout = require('./components/Layout');

class Index extends React.Component {
    render() {
        return(
            <Layout>
                <h1>New Entry</h1>
                <form action="/entries" method="POST">
                    Date:{/*Calendar for date picking*/}<br/>
                    Entry for the Day: <input type="text" name="dayEntry" /><br/>
                    <hr />
                    Img source: <input type="text" name="gameImgSrc" required/><br />
                    Game Name: <input type="text" name="gameName" required/><br />
                    Game Entry: <input type="text" name="gameEntry" required/><br />
                    <input type="submit" value="Submit New Game" />
                </form>
                <button className="remove-game" type="button">Remove Game</button>
            </Layout>
        )
    }
}

module.exports = Index;