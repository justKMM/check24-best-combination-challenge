const environment = {
    production: true,
    port: 8080,
    defaultAdminPassword: 'Some@Password234',
    db:{
        host: '',
        port: 27017,
        username: '',
        password: '',
        authSource: '',
        name: ''
    },
    corsOrigins: [
        'https://gendev6.khaimm.de'
    ]
};

exports.default = environment;
