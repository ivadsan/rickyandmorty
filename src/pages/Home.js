import React from "react";
import Item from "../components/Item";
import Loader from "../components/Loader";
import Banner from "../assets/images/banner.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      data: { results: [] }
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  async getCharacters() {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      const data = await response.json();
      this.setState({
        loading: false,
        data: {
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (err) {
      console.log(err);
      this.setState({
        loading: false,
        error: err
      });
    }
  }

  render() {
    if (this.state.error) {
      return `Error ${this.state.error.message}`;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col w-100 text-center">
            <img src={Banner} alt="Banner" />
          </div>
        </div>
        <div>
          <ul className="list-inline d-flex justify-content-around flex-wrap">
            {this.state.data.results.map(character => (
              <li className="list-inline-item" key={character.id}>
                <Item character={character} />
              </li>
            ))}
          </ul>
        </div>

        {this.state.loading && <Loader />}

        {!this.state.loading && (
          <div className="row mb-5">
            <div className="col text-center">
              <button
                className="btn btn-primary w-100"
                onClick={() => this.getCharacters()}
              >
                Load More
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
