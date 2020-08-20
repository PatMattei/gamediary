const React = require('react');

class Layout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css"/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/entries">Home</a>
                        <a href="/entries/new">Create</a>
                    </nav>
                    <div className="container">
                        {this.props.children}
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Layout;