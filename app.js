/**
 * Created by center ON 17-12-19
 */
const Cet = require("./middlewares/cetHelper");
var cet = new Cet();
// log
cet.use(async function (ctx,next) {
	const start = new Date();
	try{
		ctx.logger = logger;
		await next();
		if(ctx.response.info){
			const ms = new Date() - start;
			//记录请求日志
			// logger.debug(formatRes(ctx, ms));
		}
	}catch (error){
		const ms = new Date() - start;
		//错误信息开始
		// logger.error(formatError(ctx, error, ms));
	}
});
 // format output
cet.use(async function (ctx,next) {

});

cet.create(6000, "127.0.0.1", function (err, data) {
	switch (err) {
		case "error": { // init fail
			console.log(data);
		}
			break;
		case "end": { // server end
			console.log(err);
		}
			break;
	}
});

cet.send(new Buffer("abcd"));