/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

/*
import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dhanaraj",
    };
  }

  handleChangeName = () => {
    this.setState({
      name: "Sharva"
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <button onClick={this.handleChangeName}>Change Text</button>
      </div>
    );
  }
}

export default App;
*/
// or
/*
import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dhanaraj",
    };
  }

  render() {
    return (
      <div className="App">        
        <h1>{this.state.name}</h1>        
        <button onClick={() => this.setState({ name: "Sharva.S"})}>Change Text</button>
      </div>
    );
  }
}

export default App;
*/

/*
import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dhanaraj",
    };
  }

  handleChangeName = () => {
    this.setState({
      name: "Sharva"
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Dhanaraj</h1>
        <h1>{this.state.name}</h1>
        <button onClick={this.handleChangeName}>Change Text</button>
      </div>
    );
  }
}

export default App;
*/

/*
import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'a'
        },
        {
          name: 'Dracula',
          id: 'b'
        },
        {
          name: 'Zombie',
          id: 'c'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => <h1>{monster.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
*/


/*
import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'a'
        },
        {
          name: 'Dracula',
          id: 'b'
        },
        {
          name: 'Zombie',
          id: 'c'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
*/


/*
import React from 'react';                    // { Component } is the part of 'react Librart
import './App.css'

class App extends React.Component {           // React.Component is a functionality - React property
  constructor(props) {
    super(props);

    this.state = {
      monsters: []
    };
  }

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //    .then(response => response.json())
  //    .then(json => console.log(json))

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      // .then(response => console.log(response))
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>  )
        }
      </div>
    );
  }
}

export default App;
*/

/*
import React from 'react';
import './App.css'
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  render() {
    return (
      <div className="App">
        <CardList name="Sharva "/>
        {
          this.state.monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>  )
        }
      </div>
    );
  }
}

export default App;
*/

// 34
/*
import React from 'react';
import './App.css'
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {
            this.state.monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>  )
          }
        </CardList>
      </div>
    );
  }
}

export default App;
*/

// 36. cardless component 
/*
import React from 'react';
import './App.css'
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
*/


// 38. 

// Async vs sync issue
/*
import React from 'react';
import './App.css'
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  render() {
    return (
      <div className="App">
        // <input type="search" placeholder="search monsters"  onChange={e => console.log(e.target.value)} />  
        <input
          type="search"
          placeholder="search monsters"
          onChange={e => {
            this.setState({ searchField: e.target.value });
            console.log(this.state);
          }}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
*/

// To overcome, async vs sync matching issue 
// Right after setState
// We pass the log statement of a callback function as 2nd argument to the setState.
/*
import React from 'react';
import './App.css'
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  render() {
    return (
      <div className="App">
       
        <input
          type="search"
          placeholder="search monsters"
          onChange={e => {
            this.setState(
              { searchField: e.target.value }, () => console.log(this.state)
            );
            
          }}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
*/

/*
import React from 'react';
import './App.css'
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  render() {
    return (
      <div className="App">
        
        <input
          type="search"
          placeholder="search monsters"
          onChange={e => this.setState({
            searchField: e.target.value
          })}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
*/

/*
import React from 'react';
import './App.css'
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  render() {
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        
        <input
          type="search"
          placeholder="search monsters"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
*/
   
/*
import React from 'react';
import './App.css'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx'

class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  render() {
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
*/
// or

// We can use official bind(this) method or ES6 Arrow Function (automatically bind this)
/*
import React from 'react';
import './App.css'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx'

class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value})
  // }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
*/

import React from 'react';
import './App.css'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx'

class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value})
  // }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;


// Event Handling methods
/*
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'dhanaraj'
    }
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange6 = this.handleChange5.bind(this);
  }

  
  handleChange1() {
    console.log("Button 1 is Clicked");
  }
  
  handleChange2() {
    console.log("Button 2 is Clicked");
  }

  handleChange3() {
    console.log("Button 3 is Clicked");
  }
  
  handleChange4 = () => {
    console.log("Button 4 is Clicked");
  }
  

  handleChange5() {
    console.log("Button 5 is Clicked");
    console.log(this);
  }

  handleChange7 = () => console.log(this);


  render() {
    return (
      <div>
        <h1>textInComponent</h1>
        <button onClick={this.handleChange1.bind(this)}>Button 1</button>
        <button onClick={() => this.handleChange2()}>Button 2</button>
        <button onClick={this.handleChange3}>Button 3</button>
        <button onClick={this.handleChange4}>Button 4</button>

        <button onClick={this.handleChange5()}>Button 5</button>
        <button onClick={this.handleChange5}>Button 5+</button>
        <button onClick={this.handleChange6}>Button 6</button>
        <button onClick={this.handleChange7}>Button 7</button>
      </div>
    );
  }
}

export default App;
*/ 
  