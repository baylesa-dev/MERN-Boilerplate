const passport = require('passport')
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth')
const { Strategy: FacebookStrategy } = require('passport-facebook')
const { Strategy: GithubStrategy} = require('passport-github')
const { Strategy: TwitterStrategy } = require('passport-twitter')
const { Strategy: InstagramStrategy } = require('passport-instagram')

const { TWITTER_CONFIG, GOOGLE_CONFIG, FACEBOOK_CONFIG, GITHUB_CONFIG, INSTAGRAM_CONFIG } = require('../../config')

module.exports = () => {
	passport.serializeUser((user, cb) => cb(null, user))
	passport.deserializeUser((obj, cb) => cb(null, obj))

	passport.use(new GoogleStrategy(GOOGLE_CONFIG,
		(accessToken, refreshToken, profile, cb) => {
			const user = {
				id: profile.id,
				name: profile.displayName,
				displayName: profile.displayName,
				photo: profile.photos[0].value.replace(/sz=50/gi, 'sz=250'),
				provider: 'google',
				accessToken: accessToken,
				refreshToken: refreshToken
			}
			cb(null, profile)
	}))
	passport.use(new FacebookStrategy(FACEBOOK_CONFIG,
		(accessToken, refreshToken, profile, cb) => {
			const { givenName, familyName } = profile.name
			const user = {
				id: profile.id,
				name: `${givenName} ${familyName}`,
				displayName: `${givenName} ${familyName}`,
				photo: profile.photos[0].value,
				provider: 'facebook',
				accessToken: accessToken,
				refreshToken: refreshToken
			}
			cb(null, profile)
	}))
	passport.use(new GithubStrategy(GITHUB_CONFIG,
		(accessToken, refreshToken, profile, cb) => {
			const user = {
				id: profile.id,
				name: profile.username,
				displayName: profile.username,
				photo: profile.photos[0].value,
				provider: 'github',
				accessToken: accessToken,
				refreshToken: refreshToken
			}
			cb(null, profile)
	}))
	passport.use(new TwitterStrategy(
		TWITTER_CONFIG,
		(accessToken, refreshToken, profile, cb) => {
			const user = {
				id: profile.id,
				name: profile.username,
				displayName: profile.displayName,
				photo: profile.photos[0].value.replace(/_normal/, ''),
				provider: 'twitter',
				accessToken: accessToken,
				refreshToken: refreshToken
			}
			cb(null, profile)
		})
    )
    passport.use(new InstagramStrategy(
        INSTAGRAM_CONFIG,
        (accessToken, refreshToken, profile, cb) => {
            const user = {
                id: profile.id,
                provider: 'instagram'
            }
            cb(null, profile)
        }
    ))
}