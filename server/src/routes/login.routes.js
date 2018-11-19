const express = require('express')
const passport = require('passport')
const loginController = require('../controllers/login.controller')
const router = express.Router()

const googleAuth = passport.authenticate('google', { scope: ['profile'] })
const facebookAuth = passport.authenticate('facebook')
const githubAuth = passport.authenticate('github')
const twitterAuth = passport.authenticate('twitter')
const instagramAuth = passport.authenticate('instagram')

router.get('/google/callback', googleAuth, loginController.google)
router.get('/facebook/callback', facebookAuth, loginController.facebook)
router.get('/github/callback', githubAuth, loginController.github)
router.get('/twitter/callback', twitterAuth, loginController.twitter)
router.get('/instagram/callback', instagramAuth, loginController.instagram)

router.use((req, res, next) => {
    req.session.socketId = req.query.socketId
    next()
})

router.get('/facebook', facebookAuth)
router.get('/google', googleAuth)
router.get('/github', githubAuth)
router.get('/twitter', twitterAuth)
router.get('/instagram', instagramAuth)

module.exports = router