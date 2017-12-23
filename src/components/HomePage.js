import React from 'react';
import TextInput from './TextInput';
//import { Link } from 'react-router-dom';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        teste: ' '
    },
    this.list ={
       "games":[
          {
             "title":"Hotline Miami",
             "price":4.24,
             "rating":"-",
             "discount":"-75%",
             "path":"/app/219150/",
             "id":219150,
             "url":"https://steamdb.info/app/219150/",
             "imageUrl":"https://steamdb.info/static/camo/apps/219150/header.jpg"
          },
          {
             "title":"Hotline Miami 2: Wrong Number",
             "price":6.24,
             "rating":"-",
             "discount":"-75%",
             "path":"/app/274170/",
             "id":274170,
             "url":"https://steamdb.info/app/274170/",
             "imageUrl":"https://steamdb.info/static/camo/apps/274170/header.jpg"
          },
          this.teste = '',
       ]
    }
  }
  render(){
    //const {list} = this.props;
    console.log(this.list);
    return (
      <div>
       <br/>
       <div class="row align-items-start">
           <div class="col-3"></div>
           <div class="col-4">
              <TextInput  name="Email" value={this.state.teste}/>
           </div>
           <div class="col-1">
              <button type="button" className="btn btn-outline-primary">Buscar</button>
           </div>
      </div>
       <br/>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Preço</th>
              <th scope="col">Preço Original</th>
              <th scope="col">Loja</th>
              <th scope="col">Id Loja</th>
              <th scope="col">URL</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
          <tbody>

          {this.list.games.map((game) => (
            <tr>
              <td>{game.title}</td>
              <td>{game.price}</td>
              <td>{game.rating}</td>
              <td>{game.discount}</td>
              <td>{game.path}</td>
              <td>{game.id}</td>
              <td>{game.url}</td>
              <td><button type="button" class="btn btn-warning">Favoritar</button> </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HomePage;
