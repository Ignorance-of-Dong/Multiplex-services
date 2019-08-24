## sql 查询语句

### 查

``` 

var  sql = 'select * from  websites'   			// 查询表数据 【websites】表名

connection.query(sql,function (err, result) {
if(err){
	console.log('[SELECT ERROR] - ',err.message);
	return;
}
	console.log(result);	
});

```

### 模糊查询

#### %：表示任意0个或多个字符。可匹配任意类型和长度的字符，有些情况下若是中文，请使用两个百分号（%%）表示。

```
select * from [user] where u_name like '%小明%'

```

#### 如果需要找出u_name中既有“三”又有“猫”的记录，请使用and条件

```
select * from [user] where u_name like '%三%' and u_name like '%猫%'

```

#### _： 表示任意单个字符。匹配单个任意字符，它常用来限制表达式的字符长度语句：

```
select * from [user] where u_name like '_三_'   		// 其他同理

```

#### [ ]：表示括号内所列字符中的一个（类似正则表达式）。指定一个字符、字符串或范围，要求所匹配对象为它们中的任一个

```
select * from [user] where u_name like '[张李王]三'		// 将找出“张三”、“李三”、“王三”（而不是“张李王三”）； 

```

#### [^ ] ：表示不在括号所列之内的单个字符。其取值和 [] 相同，但它要求所匹配对象为指定字符以外的任一个字符。 

```
select * from [user] where u_name like '[^张李王]三'  	//  将找出不姓“张”、“李”、“王”的“赵三”、“孙三”等； 

```





### 插入数据

```
var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)'
var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN']

connection.query(addSql,addSqlParams,function (err, result) {
	if(err){
		console.log('[INSERT ERROR] - ',err.message);
		return;
	}
	console.log('添加成功'); 
});

```

### 更新数据【】

```
var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];

connection.query(modSql,modSqlParams,function (err, result) {
   if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});

```

### 删除数据

```
var delSql = 'DELETE FROM websites where id=6'

connection.query(delSql,function (err, result) {
	if(err){
		console.log('[DELETE ERROR] - ',err.message);
		return;
	}        
	console.log('删除成功'); 
});

```