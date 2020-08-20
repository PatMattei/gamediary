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
                    Img source: <input name ="gameImgSrc"  /><br />
                    Game Name: <input name="gameName" /><br />
                    Game Entry: <input name="gameEntry" /><br />
                    <input type="submit" value="Submit New Game" />
                </form>
            </Layout>
        )
    }
}

module.exports = Index;