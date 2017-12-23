import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/userActions';
//import '../styles/UserPage.css';
import TextInput from './TextInput';

// Since this component is simple and static, there's no parent container for it.
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: ' ',
        password: ' '
    };
  }
  onSubmit(){
    const {email,password} = this.state;
    this.props.actions.saveUser(email, password);
  }
  render () {
    return(
      <div class="container">
       <h2 className="alt-header">Cadastre-se</h2>
       <p>
          Por favor informe os seguintes dados
       </p>
       <table className="text-center">
          <tbody>
             <tr>
                <td><label htmlFor="Email">Email</label></td>
                <td>
                   <TextInput  name="Email" value={this.state.email}/>
                </td>
             </tr>
             <tr>
                <td><label htmlFor="Password">Senha</label></td>
                <td>
                   <TextInput  name="Password" value={this.state.password}/>
                </td>
             </tr>
             <tr>
                <input type="submit" className="Danger" value="Salvar" onClick={this.onSubmit}/>
             </tr>
          </tbody>
       </table>
      </div>);
  }
}

UserPage.propTypes = {
  actions: PropTypes.func
};

function mapStateToProps(state) {
  return {
    savingUser: state.user.fetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
