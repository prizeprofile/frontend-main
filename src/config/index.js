
console.log(process.env)
export default {
  api: {
    competitions: 'https://uaoc3ai346.execute-api.eu-west-1.amazonaws.com/v1' + '/competitions',
    promoters: 'https://uaoc3ai346.execute-api.eu-west-1.amazonaws.com/v1' + '/promoters',
    oauth: 'https://uaoc3ai346.execute-api.eu-west-1.amazonaws.com/v1' + '/stage-twitter-oauth'
  },

  twitter: {
    oauth: 'https://twitter.com/oauth/authenticate?oauth_token=',
    methods: {
      like: 'https://api.twitter.com/1.1/favorites/create.json'
    }
  },

  assets: {
    cdnUrl: '/static/'
  }
}
