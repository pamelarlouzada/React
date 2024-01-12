import './App.css';
import { Component } from 'react';

class App extends Component {
    state = {
      posts: [
        {
          id: 1,
          title: 'O título 1',
          body: 'O corpo 1'
        },
        {
          id: 2,
          title: 'O título 2',
          body: 'O corpo 2'
        },
        {
          id: 3,
          title: 'O título 3',
          body: 'O corpo 3'
        },
      ]
    };

  render () {
    const { posts } = this.state; // same thing that: `const name = this.state.name;` study=(destructuring assignment by javascript) study=(arrow function by javascript)
    return (
          // study=(Array.prototype.map() by javascript)
          <div className="App">
            {posts.map(post => (
              <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            ))} 
          </div>
        );
  }
}


export default App;
