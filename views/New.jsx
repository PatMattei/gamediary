const React = require('react');
const Layout = require('./components/Layout');

class Index extends React.Component {
    render() {
        return(
            <Layout>
                <h1>New Entry</h1>
                <form action="/entries" method="POST" className="entry-info-form">
                    <label for="datepicker">Date: </label>
                    <input id="datepicker" name="entryDate" className="form-control" required /><br/>
                    <label for="dayEntry">Entry for the Day: </label>
                    <textarea name="dayEntry" className="form-control" /><br/>
                    <div className="game-entry">
                        <label for="gameImgSrc">Img source:</label>
                        <input type="text" name="gameImgSrc" className="form-control" required/><br />
                        <label for="gameName">Game Name:</label>
                        <input type="text" name="gameName" className="form-control" required/><br />
                        <label for="gameEntry">Game Entry:</label>
                        <input type="text" name="gameEntry" className="form-control" required/><br />
                    </div>
                    <input type="submit" name="" className="submit-entry btn btn-success" defaultValue="Submit Entry"/>
                </form>
                <button className="add-game btn btn-primary" type="button">Add Another Game</button>
            </Layout>
        )
    }
}

module.exports = Index;