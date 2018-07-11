// TODO: Implement enviroments.
export default {
  api: {
    oauth: 'https://tv3g8idtf9.execute-api.eu-west-1.amazonaws.com/stage/stage-twitter-oauth',
    competitions: 'https://tv3g8idtf9.execute-api.eu-west-1.amazonaws.com/stage/competitions'
  },
  twitter: {
    oauth: 'https://twitter.com/oauth/authenticate?oauth_token=',
    methods: {
      like: 'https://api.twitter.com/1.1/favorites/create.json'
    }
  }
}
