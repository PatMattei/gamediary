const React = require('react');
const Layout = require('./components/Layout');
const ApiFoundGamesList = require('./components/ApiFoundGamesList');


class New extends React.Component {
    render() {
        return(
            <Layout>
                <h1>New Entry</h1>

                {/*On key up in search box:*/}
                    {/*return names of games in API in ApiFoundGamesList*/}

                {/*On click of returned game:*/}
                    {/*add game's name to gameName field*/}
                    {/*add img src to gameImgSrc field*/}


                <form action="/entries" method="POST">
                    <label htmlFor="datepicker">Date:</label>
                    <input id="datepicker" name="entryDate" className="form-control" required /><br/>
                    <label htmlFor="dayEntry">Entry for the Day:</label>
                    <textarea name="dayEntry" className="form-control" /><br/>
                </form>
                    <form action="#" method="">
                        {/*<label htmlFor="gameImgSrc">Img source:</label><input type="text" name="gameImgSrc" className="form-control" required/><br />*/}
                        <label htmlFor="gameName">Game Name:</label>
                        <input type="text" name="gameName" className="form-control" required/>
                        <input type="submit" name="" className="submit-entry btn btn-success" defaultValue="Search"/><br /><br />
                        <label htmlFor="gameEntry">Game Entry:</label>
                        <input type="text" name="gameEntry" className="form-control" required/><br />
                    </form>
                    <form action="/entries" method="POST">
                    <input type="submit" name="" className="submit-entry btn btn-success" defaultValue="Submit Entry"/>
                </form>
                <button className="add-game btn btn-primary" type="button">Add Another Game</button>
            </Layout>
        )
    }
}

module.exports = New;