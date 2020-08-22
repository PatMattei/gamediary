const React = require('react');
const Layout = require('./components/Layout');

class Index extends React.Component {
    render() {
        return(
            <Layout>
                <h1>New Entry</h1>
                <form action="/entries" method="POST" className="entry-info-form">
                    Date: <input id="datepicker" name="entryDate" required /><br/>
                    Entry for the Day: <textarea name="dayEntry" /><br/>
                    <div className="game-entry">
                        Img source: <input type="text" name="gameImgSrc" required/><br />
                        Game Name: <input type="text" name="gameName" required/><br />
                        Game Entry: <input type="text" name="gameEntry" required/><br />
                    </div>
                    <input type="submit" name="" className="submit-entry" defaultValue="Submit Entry"/>
                </form>
                <button className="add-game" type="button">Add Another Game</button>
            </Layout>
        )
    }
}

module.exports = Index;