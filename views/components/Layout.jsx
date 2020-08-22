const React = require('react');

class Layout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
                    <link rel="stylesheet" href="/resources/demos/style.css" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                    {/*<link rel="stylesheet" href="/css/app.css"/>*/}
                    <title>{this.props.title}</title>
                    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
                    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

                </head>
                <body>
                    <nav>
                        <a href="/entries">Home</a>
                        <a href="/entries/new">Create</a>
                    </nav>
                    <div className="container">
                        {this.props.children}
                    </div>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                    <script type="text/javascript" src="/js/scripts.js"></script>
                </body>
            </html>
        )
    }
}

module.exports = Layout;