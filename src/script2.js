class Carousel extends Component {
    state = { albums: [] };
    componentWillMount() {
      axios.get(' http://5afda6962cfff500145ad936.mockapi.io/simpleimages')
        .then(response => this.setState({albums: response.data}));
    }
    renderAlbums(){
      return this.state.albums.map(album =>
          <div className="carousel-item"><Card key={album.name} tag={album.tag} src={album.url}/></div>
      );
    }
  render() {
    return (
        <div className="carousel center">
          {this.renderAlbums()}
        </div>
    );
  }
}

export default Carousel;