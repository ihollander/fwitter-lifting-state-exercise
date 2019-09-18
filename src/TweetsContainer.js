import React, { Component } from 'react'
import TweetList from './TweetList'
import UserList from './UserList'
import { users } from './data/data'

class TweetsContainer extends Component {
  state = {
    users: [],
    selectedUserId: null
  }

  componentDidMount() {
    this.setState({
      users: users.map(user => ({ ...user })),
      selectedUserId: users[0].id
    })
  }

  handleUpdateLikes = tweetId => {
    console.log("i liked a tweet in state", tweetId, this.state.selectedUserId)

    // we need to return a new array to not mutate state
    const updatedUsers = users.map(user => {
      // check if the user is the one we care about updating
      if (user.id !== this.state.selectedUserId) {
        // if not, just return the same user object
        return user
      } else {

        // if it is, we need update JUST one tweet
        const updatedTweets = user.tweets.map(tweet => {
          // check if the tweet is the one we're updating
          if (tweet.id !== tweetId) {
            // if not, just return the same tweet object
            return tweet
          } else {
            // otherwise, return a new tweet object with an updated like count
            return {
              ...tweet,
              favorite_count: tweet.favorite_count + 1
            }
          }
        })

        // return the user with the updated array of tweets
        return {
          ...user,
          tweets: updatedTweets
        }
      }
    })

    // use our new COPY of the users array to update state
    this.setState({
      users: updatedUsers
    })
  }

  handleSelectUser = id => {
    console.log("let's set state with this function, the id is", id)
    this.setState({
      selectedUserId: id
    })
  }

  getSelectedUser() {
    return this.state.users.find(user => user.id === this.state.selectedUserId)
  }

  render() {
    if (this.state.selectedUserId === null) {
      return "LOADING!"
    }

    console.log("In TweetsContainer, state is", this.state)
    return (
      <div className="ui main container">
        <div className="ui grid">
          <div className="six wide column">
            <h2 className="ui header">Users</h2>
            <UserList users={this.state.users} handleSelectUser={this.handleSelectUser} />
          </div>
          <div className="ten wide column">
            <h2 className="ui header">Tweets</h2>
            <TweetList user={this.getSelectedUser()} handleUpdateLikes={this.handleUpdateLikes} />
          </div>
        </div>
      </div>
    )
  }
}

export default TweetsContainer