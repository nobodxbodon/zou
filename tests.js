QUnit.test( "你好", function( assert ) {
  assert.ok( "你好" == 跑("\"你好\""), "你好了!" );
});

QUnit.test("语法分析", function(assert) {
  assert.deepEqual({type: "apply",operator: {type: "word", name: "+"},args: [{type: "word", name: "a"},{type: "value", value: 10}]},
                   parse("+(a, 10)"), "两参数函数");
});

QUnit.test("求和", function(assert) {
  assert.equal(55, 跑("走(定义(总和, 0),",
    "   定义(数, 1),",
    "   循环(<(数, 11),",
    "     走(定义(总和, +(总和, 数)),",
    "       定义(数, +(数, 1)))),",
    "   打印(总和))"), "从1到10求和");
})