var express = require('express');
var router = express.Router();
var { ArticleList, img } = require('../MokeData/inde')
let connection = require('../connect/db')
let CurentTime = require('../utils/time')

// connection.query()
// import {ArticleList} from '../MokeData/inde'
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});


//	查询文章列表
router.post('/active/activelist', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	var sql = 'SELECT * FROM articles_List';
	connection.query(sql, (err, result) => {
		if (err) {
			console.log('[SELECT ERROR] - ', err.message);
			return;
		}
		console.log('响应参数\n\n',result)
		res.send(result)
	})
})

// 查询banner图
router.post('/active/banner', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	var sql = 'SELECT * FROM open_banner_List';
	connection.query(sql, (err, result) => {
		if (err) {
			console.log('[SELECT ERROR] - ', err.message);
			return;
		}
		console.log('响应参数\n\n',result)
		res.send(result)
	})
});


// 查询热门文章
router.post('/active/articlesListHot', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	var sql = 'SELECT * FROM articles_list_hot';
	connection.query(sql, (err, result) => {
		if (err) {
			console.log('[SELECT ERROR] - ', err.message);
			return;
		}
		console.log('响应参数\n\n',result)
		res.send(result)
	})
});

// 查询小册列表
router.post('/active/brochureList', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	var sql = 'SELECT * FROM brochure_list';
	connection.query(sql, (err, result) => {
		if (err) {
			console.log('[SELECT ERROR] - ', err.message);
			return;
		}
		console.log('响应参数\n\n',result)
		res.send(result)
	})
});

/**
 * @params Title  文章的头部
 * @params Http   文章的链接地址
 * @params Author 文章的作者
 * @params Imgsrc 文章的图片地址
 * 添加文章
 */
	router.post('/active/addActivelist', function (req, res, next) {
		console.log('上送参数\n\n', req.body)
	let {Title,Http,Author,Imgsrc} = req.body
	var  addSql = 'insert into articles_List(Title,Http,Author,Imgsrc,Time) values(?,?,?,?,?)'
	var  addSqlParams = [Title, Http, Author, Imgsrc, CurentTime()]
	connection.query(addSql,addSqlParams,function (err, result) {
		if(err){
			console.log('[INSERT ERROR] - ',err.message);
			res.send(err)
			return;
		}
		let sussessMsg = {
			code: 200,
			msg: '添加成功',
			addTime:  CurentTime()
		}
		console.log('响应参数\n\n',sussessMsg)
		res.send(sussessMsg)
	});
});


/**
 * @parmas key 文章的key值
 *  删除文章
 */
router.post('/active/removeActivelist', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	let {key} = req.body
	var delSql = 'DELETE FROM articles_List where `key`=' + key
	connection.query(delSql,function (err, result) {
		if(err){
			console.log('[DELETE ERROR] - ',err.message);
			res.send(err)
			return;
		}
		let sussessMsg = {
			code: 400,
			msg: '删除成功',
			addTime:  CurentTime()
		}
		console.log('响应参数\n\n',sussessMsg)
		res.send(sussessMsg)
	});
})

/**
 * @params Title  文章的头部
 * @params Http   文章的链接地址
 * @params Author 文章的作者
 * @params Imgsrc 文章的图片地址
 * 更新文章
 */
router.post('/active/updateActivelist', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	let {Title, Http, Author, Imgsrc, key} = req.body
	var modSql = 'UPDATE articles_List SET Title = ?,Http = ?,Author = ?,Imgsrc = ?, Time = ? WHERE `key` = ?';
	var modSqlParams = [Title, Http, Author, Imgsrc, CurentTime(), key]

	connection.query(modSql,modSqlParams,function (err, result) {
		if(err){
			console.log('[UPDATE ERROR] - ',err.message);
			res.send(err)
			return;
		}
		let sussessMsg = {
			code: 400,
			msg: '更新成功',
			addTime:  CurentTime()
		}
		console.log('响应参数\n\n',sussessMsg)
		res.send(sussessMsg)
	});
})

/**
 * @params Title  文章的头部
 * @params Http   文章的链接地址
 * @params Author 文章的作者
 * @params Imgsrc 文章的图片地址
 * 添加热门文章
 */
router.post('/active/hot/addActivelist', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	let {Title, Http, Author, Imgsrc} = req.body
	var  addSql = 'insert into articles_list_hot(Title,Http,Author,Imgsrc,Time) values(?,?,?,?,?)'
	var  addSqlParams = [Title, Http, Author, Imgsrc, CurentTime()]
	connection.query(addSql,addSqlParams,function (err, result) {
		if(err){
			console.log('[INSERT ERROR] - ',err.message);
			res.send(err)
			return;
		}
		let sussessMsg = {
			code: 200,
			msg: '添加成功',
			addTime:  CurentTime()
		}
		console.log('响应参数\n\n',sussessMsg)
		res.send(sussessMsg)
	});
});

/**
 * @parmas key 文章的key值
 *  删除热门文章
 */
router.post('/active/hot/removeActivelist', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	let {key} = req.body
	var delSql = 'DELETE FROM articles_list_hot where `key`=' + key
	connection.query(delSql,function (err, result) {
		if(err){
			console.log('[DELETE ERROR] - ',err.message);
			res.send(err)
			return;
		}
		let sussessMsg = {
			code: 400,
			msg: '删除成功',
			addTime:  CurentTime()
		}
		console.log('响应参数\n\n',sussessMsg)
		res.send(sussessMsg)
	});
})

/**
 * @params Title  文章的头部
 * @params Http   文章的链接地址
 * @params Author 文章的作者
 * @params Imgsrc 文章的图片地址
 * 更新热门文章
 */
router.post('/active/hot/updateActivelist', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	let {Title, Http, Author, Imgsrc, key} = req.body
	var modSql = 'UPDATE articles_list_hot SET Title = ?,Http = ?,Author = ?,Imgsrc = ?, Time = ? WHERE `key` = ?';
	var modSqlParams = [Title, Http, Author, Imgsrc, CurentTime(), key]

	connection.query(modSql,modSqlParams,function (err, result) {
		if(err){
			console.log('[UPDATE ERROR] - ',err.message);
			res.send(err)
			return;
		}
		let sussessMsg = {
			code: 400,
			msg: '更新成功',
			addTime:  CurentTime()
		}
		console.log('响应参数\n\n',sussessMsg)
		res.send(sussessMsg)
	});
})


/**
 * 添加banner图
 * @params bannerSrc banner图链接地址
 */
router.post('/active/addbanner', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	let {bannerSrc} = req.body
	var  addSql = 'insert into open_banner_List(bannerSrc) values(?)'
	var  addSqlParams = [bannerSrc]
	connection.query(addSql,addSqlParams,function (err, result) {
		if(err){
			console.log('[INSERT ERROR] - ',err.message);
			res.send(err)
			return;
		}
		let sussessMsg = {
			code: 200,
			msg: '添加成功',
			addTime:  CurentTime()
		}
		console.log('响应参数\n\n',sussessMsg)
		res.send(sussessMsg)
	});
});


/**
 * @params bannerSrc banner图链接地址
 * 更新banner图
 */
router.post('/active/updatebanner', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	let {bannerSrc, id} = req.body
	var modSql = 'UPDATE open_banner_List SET bannerSrc = ? WHERE `id` = ?';
	var modSqlParams = [bannerSrc, id];

	connection.query(modSql,modSqlParams,function (err, result) {
		if(err){
			console.log('[UPDATE ERROR] - ',err.message);
			res.send(err)
			return;
		}
		let sussessMsg = {
			code: 400,
			msg: '更新成功',
			addTime:  CurentTime()
		}
		console.log('响应参数\n\n',sussessMsg)
		res.send(sussessMsg)
	});
})


/**
 * @parmas key banner的id值
 *  删除banner
 */
router.post('/active/removebanner', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	let {id} = req.body
	var delSql = 'DELETE FROM open_banner_List where `id`=' + id
	connection.query(delSql,function (err, result) {
		if(err){
			console.log('[DELETE ERROR] - ',err.message);
			res.send(err)
			return;
		}
		let sussessMsg = {
			code: 400,
			msg: '删除成功',
			addTime:  CurentTime()
		}
		console.log('响应参数\n\n',sussessMsg)
		res.send(sussessMsg)
	});
})


//	查询问题列表
router.post('/active/questionlist', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	var sql = 'SELECT * FROM question_list';
	connection.query(sql, (err, result) => {
		if (err) {
			console.log('[SELECT ERROR] - ', err.message);
			return;
		}
		console.log('响应参数\n\n',result)
		res.send(result)
	})
})


/**
 * 添加问题
 * @params bannerSrc banner图链接地址
 */
router.post('/active/addquestion', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	let { question, answer } = req.body
	var addSql = 'insert into question_list(question,answer,Time) values(?,?,?)'
	var addSqlParams = [question, answer, CurentTime()]
	connection.query(addSql, addSqlParams, function (err, result) {
		if (err) {
			console.log('[INSERT ERROR] - ', err.message);
			res.send(err)
			return;
		}
		let sussessMsg = {
			code: 200,
			msg: '添加成功',
			addTime: CurentTime()
		}
		console.log('响应参数\n\n',sussessMsg)
		res.send(sussessMsg)
	});
});

/**
 * @params question  问题
 * @params answer   答案
 * @params id 问题id
 * 更新问题
 */
router.post('/active/updatequestionlist', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	let { question, answer, id } = req.body
	var modSql = 'UPDATE question_list SET question = ?,answer = ?, time = ? WHERE `id` = ?';
	var modSqlParams = [question, answer, CurentTime(), id]

	connection.query(modSql, modSqlParams, function (err, result) {
		if (err) {
			console.log('[UPDATE ERROR] - ', err.message);
			res.send(err)
			return;
		}
		let sussessMsg = {
			code: 400,
			msg: '更新成功',
			addTime: CurentTime()
		}
		console.log('响应参数\n\n',sussessMsg)
		res.send(sussessMsg)
	});
})

/**
 * @parmas id 问题的id
 *  删除问题
 */
router.post('/active/removequestionlist', function (req, res, next) {
	console.log('上送参数\n\n', req.body)
	let { id } = req.body
	var delSql = 'DELETE FROM question_list where `id`=' + id
	connection.query(delSql, function (err, result) {
		if (err) {
			console.log('[DELETE ERROR] - ', err.message);
			res.send(err)
			return;
		}
		let sussessMsg = {
			code: 400,
			msg: '删除成功',
			addTime: CurentTime()
		}
		console.log('响应参数\n\n',sussessMsg)
		res.send(sussessMsg)
	});
})


module.exports = router;
