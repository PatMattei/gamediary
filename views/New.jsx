const React = require('react');
const Layout = require('./components/Layout');
const ApiFoundGamesList = require('./components/ApiFoundGamesList');

class New extends React.Component {
    render() {
        return(
            <Layout>
                <h1>New Entry</h1>
                <form action="/entries" method="POST">
                    <label htmlFor="datepicker">Date:</label>
                    <input id="datepicker" name="entryDate" className="form-control" required /><br/>
                    <label htmlFor="dayEntry">Entry for the Day:</label>
                    <textarea name="dayEntry" className="form-control" /><br/>
                    <img className="form-img"></img>
                    <input type="hidden" name="gameImgSrc" /><br />

                    <label htmlFor="gameName">Game Name:</label>
                    <input type="text" name="gameName" className="form-control" required/>

                    <button type="button" name="" className="search-game btn btn-success">Search</button><br /><br />


                    <label htmlFor="gameEntry">Game Entry:</label>
                    <input type="text" name="gameEntry" className="form-control" required/><br />
                    
                    <input type="submit" name="" className="submit-entry btn btn-success" defaultValue="Submit Entry"/>
                </form>
                <button className="add-game btn btn-primary" type="button">Add Another Game</button>
            </Layout>
        )
    }
}

module.exports = New;