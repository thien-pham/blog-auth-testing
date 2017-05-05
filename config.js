exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://tee:123@ds129031.mlab.com:29031/blogs';
exports.TEST_DATABASE_URL = (
	process.env.TEST_DATABASE_URL ||
	'mongodb://tee:123@ds129031.mlab.com:29031/blogs');
exports.PORT = process.env.PORT || 8080;