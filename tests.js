QUnit.test( "你好", function( assert ) {
  assert.ok( "你好" == 跑("\"你好\""), "你好了!" );
});

QUnit.test("语法分析", function(assert) {
  assert.deepEqual({type: "apply",operator: {type: "word", name: "+"},args: [{type: "word", name: "a"},{type: "value", value: 10}]},
                   parse("+(a, 10)"), "两参数函数");
});

QUnit.test("函数", function(assert) {
  assert.equal(11,
               跑("走(定义(加1, 函数(数, +(数, 1))),",
    "   打印(加1(10)))"),
               "加1函数");
  assert.equal(1024,
              跑("走(定义(求指数, 函数(基数, 指数,",
    "     如果(==(指数, 0),",
    "        1,",
    "        *(基数, 求指数(基数, -(指数, 1)))))),",
    "   打印(求指数(2, 10)))"),
              "指数函数");
  assert.equal(55, 跑("走(定义(总和, 0),",
    "   定义(数, 1),",
    "   循环(<(数, 11),",
    "     走(定义(总和, +(总和, 数)),",
    "       定义(数, +(数, 1)))),",
    "   打印(总和))"), "从1到10求和");
});

QUnit.test("异常", function(assert) {
  assert.throws(function(){
    跑("走(定义(加1, 函数(数, +(数, 1))),",
    "   打印(加1()))");
  },
                 new TypeError("0个参数, 需为1个"),
                 "函数参数错误");
});

 