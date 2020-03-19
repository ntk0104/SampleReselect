import _ from 'lodash';
import React from 'react';
// import { colors, constants } from 'path/to/colors'
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux'
import { createSelector, createStructuredSelector } from 'reselect'
//import {
//  
//} from 'path/to/selectors'
//import {
//  
//} from 'path/to/actions'

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { increaseCounter } from '../../../redux_sagas/global/global.actions'

class ListPostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    // const {} = this.props
  }


  render() {
    // const {  } = this.state
    // const { } = this.props
    console.log('%c%s', 'color: #C19ED0; background: yellow; font-size: 10px', JSON.stringify(`[RENDER] ${this.constructor.name}`, null, 2))
    return (
      <View style={{ flex: 1, borderWidth: 1, justifyContent: 'space-around' }}>
        <Text numberOfLines={1}>List Post </Text>
        {
          this.props.postsWithAuthor && this.props.postsWithAuthor.map(post => (
            // <Text>{post.title}</Text>
            <Text>{post.title} - {post.authorName}</Text>
          ))
        }

      </View>
    );
  }
}

// const makeGetListPostsWithAuthor = () => createSelector(
//   const posts = state.globalReducer.listPosts;
// const authors = state.globalReducer.listAuthors;
// return {
//   postsWithAuthor: posts.map(postItem => {
//     return { ...postItem, authorName: authors[postItem.authorID].lastName }
//   })
// }
// )

const makeGetListPostsWithAuthor = createSelector(
  state => state.globalReducer.listPosts,
  state => state.globalReducer.listAuthors,
  (posts, authors) => posts.map(postItem => {
    return {...postItem, authorName: authors[postItem.authorID].lastName}
  })
)


//Without reselect
// const mapStateToProps = (state) => {
//   const posts = state.globalReducer.listPosts;
//   const authors = state.globalReducer.listAuthors;
//   return {
//     postsWithAuthor: posts.map(postItem => {
//       return {...postItem, authorName: authors[postItem.authorID].lastName}
//     })
//   }
// }

//With reselect
const mapStateToProps = (state) => {
  return {
    postsWithAuthor: makeGetListPostsWithAuthor(state)
  }
}


const mapDispatchToProps = dispatch => bindActionCreators(
  {
    increaseCounter
  }, dispatch
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPostComponent);