const express = require('express');
const router = express.Router();
const { checkAuthorization } = require('../middlewares/auth-middleware');

// Make sure authApi is being imported and exported correctly
const authApi = require('../apis/auth-api');

router.post('/login', authApi.login);
router.delete('/login', checkAuthorization(), authApi.logout);
router.get('/login', authApi.isLoggedIn);

module.exports = router;