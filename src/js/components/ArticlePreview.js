import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

export default class ArticlePreview extends Component {
  removeUnicode(string) {
    if (string.indexOf('&#8217;') >= 0) {
      return this.removeUnicode(string.replace('&#8217;', '\''));
    } else {
      return string.replace('<p>', '').replace('[&hellip;]</p>', '...');
    }
  }

  render() {
    const excerpt = this.removeUnicode(this.props.post.excerpt.rendered);

    if (this.props.post) {
      return (
        <div className='article'>
          <h1 className='text-center'>{this.props.post.title.rendered}</h1>
          <a href={'/blog/' + this.props.post.id} className='blackLink'>
            {this.props.post.featured_media ? (
              <img
                className='img-responsive webpic'
                alt='article header'
                src={this.props.post.featured_media}
              />
            ) : (
              ''
            )}
            <div className='content'>{excerpt}</div>
          </a>
          <HashLink to={'/blog/' + this.props.post.id}>
            <button className='btn'>Read More</button>
          </HashLink>
        </div>
      );
    } else {
      return null;
    }
  }
}