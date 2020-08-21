const React = require('react');

class Layout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    {/*<link rel="stylesheet" href="/css/app.css"/>*/}
                    <title>{this.props.title}</title>
                    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
                </head>
                <body>
                    <nav>
                        <a href="/entries">Home</a>
                        <a href="/entries/new">Create</a>
                    </nav>
                    <div className="container">
                        {this.props.children}
                    </div>
                    <script type="text/javascript" src="/js/scripts.js"></script>
                </body>
            </html>
        )
    }
}

module.exports = Layout;