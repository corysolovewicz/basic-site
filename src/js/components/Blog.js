import React, { Component } from 'react';
import axios from 'axios'; 

import App from 'grommet/components/App';

import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import ArticlePreview from './ArticlePreview';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://cory.solovewi.cz/wordpress/wp-json/wp/v2/posts"
      )
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log('this.state.posts', this.state.posts);
    console.log('this.state.posts[0]', this.state.posts[0]);
    console.log('this.state.posts[0].id', this.state.posts[0].id);

    return (
      <div className="blog">
        <h1 className="sectionTitle">Articles</h1>
        {this.state.posts.map(post => <ArticlePreview post={post} />)}
      </div>
    );
  }
}
