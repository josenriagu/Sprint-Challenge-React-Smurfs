import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Smurfs from './components/Smurfs';
import SmurfForm from './components/SmurfForm';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
      form: {
        name: "",
        age: 0,
        height: 0
      },
      editMode: false,
      smurfToEdit: null
    }
  }
  // define the axios get method
  fetchSmurfWithAxios = () => {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .then(() => console.table(this.state.smurfs))
      .catch(err => {
        return (err.message);
      })
  }
  // Initialise on componentDidMount
  componentDidMount() {
    this.fetchSmurfWithAxios();
  }

  inputChange = (field, value) => {
    this.setState((state) => {
      return {
        form: {
          ...state.form,
          [field]: value
        }
      };
    });
  }

  changeHandler = (e) => {
    this.inputChange(e.target.name, e.target.value);
  }

  addSmurf = e => {
    e.preventDefault();
    const { name, age, height } = this.state.form;
    const newSmurf = {
      name: name,
      age: Number(age),
      height: Number(height)
    }
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then((response) => {
        this.setState(() => ({
          smurf: response.data,
          form: {
            name: "",
            age: 0,
            height: ""
          },
          editMode: false,
          smurfToEdit: null,
        }))
      }).catch(err => console.log(err.message))
    window.location.pathname = "/smurfs/list"
  }

  setEdit = (id) => {
    const smurfToEdit = this.state.smurfs.find(smurf => smurf.id === id);
    this.setState({
      ...this.state,
      form: {
        name: smurfToEdit.name,
        age: smurfToEdit.age,
        height: smurfToEdit.height
      },
      editMode: true,
      smurfToEdit,
    });
  }

  updateSmurf = (event, id) => {
    event.preventDefault()
    const { name, age, height } = this.state.form;
    const updatedSmurf = {
      id: id,
      name: name,
      age: age,
      height: height
    }
    axios.put(`http://localhost:3333/smurfs/${id}`, updatedSmurf)
      .then((response) => {
        this.setState(() => ({
          smurfs: response.data,
          form: {
            name: "",
            age: 0,
            height: ""
          },
          editMode: false,
          smurfToEdit: null,
        }))
      }).catch(err => console.log(err.message))
    alert('Smurf Updated! You\'re on a roll!!')
    window.location.pathname = "/smurfs/list"
  }

  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then((response) => {
        this.setState(() => ({
          smurfs: response.data,
        }))
      }).catch(err => console.log(err.message))
  }

  render() {
    return (
      <div className="app-wrapper">
        <section>
          <h1>Smurfs Village</h1>
          <div>
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to={
                (this.state.editMode)
                  ?
                  "/smurfs/edit-smurf"
                  :
                  "/smurfs/add-smurf"
              }
            >
              Add Smurf
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/smurfs/list"
            >
              View Smurfs
            </NavLink>
          </div>
        </section>

        <section className="app-section">
          <Route
            exact
            path="/"
            render={Home}
          />
          <Route
            path="/smurfs/list"
            render={props =>
              <Smurfs
                {...props}
                setEdit={this.setEdit}
                deleteSmurf={this.deleteSmurf}
                smurfs={this.state.smurfs}
              />
            }
          />
          <Route
            path={
              (this.state.editMode)
                ?
                "/smurfs/edit-smurf"
                :
                "/smurfs/add-smurf"
            }
            render={props =>
              <SmurfForm
                {...props}
                addSmurf={this.addSmurf}
                changeHandler={this.changeHandler}
                editMode={this.state.editMode}
                smurfToEdit={this.state.smurfToEdit}
                updateSmurf={this.updateSmurf}
                {...this.state.form}
              />
            }
          />
        </section>
      </div>
    );
  }
}