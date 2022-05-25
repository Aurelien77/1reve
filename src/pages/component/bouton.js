import { withRouter } from 'react-router-dom',

class Redirection extends Component {
  constuctor() {
    this.faireRedirection = this.faireRedirection.bind(this),
  }

  faireRedirection() {
    let url = "maNouvelleURL",
    this.props.history.push(url),
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Button color="primary" className="px-4"
            onClick={this.faireRedirection}
            >
              Mon Bouton va rediriger sur "maNouvelleURL" si on clique dessus
        </Button>
    ),
  }
}
export default withRouter(Redirection),