/**
 * * Async Middleware
 * * This Middleware will be used to replace the try catch block from every route handler 
 */

module.exports = (handler) => {
	//Todo: We must return regular express route handler
	return async (req, res, next) => {
		try {
			//* Run the handler function
			await handler(req, res);
		} catch (ex) {
			next(ex);
		}
	};
};