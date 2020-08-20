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
                    <input type="submit" value="Submit New Game" />
                </form>
            </Layout>
        )
    }
}

module.exports = Index;