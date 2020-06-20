// pages/demo12/demo12.js
Page({
  data: {
    // 标签字符串
    // html:'<table class="table-hover"><thead><tr><th width="10%">题号</th> <th width="60%">标题</th> <th width="10%">已通过代码</th> <th width="10%">通过率</th> <th width="10%">我的状态</th></tr></thead> <tbody><tr><td>A</td> <td style="text-align: left;"><a href="/acm/contest/5929/A" target="_blank" class="link-green">Race</a></td> <td><a href="/acm/contest/5929#submit/%7B%22problemIdFilter%22%3A206183%2C%22statusTypeFilter%22%3A5%7D" target="_blank" class="link-green">点击查看</a></td> <td>560/1889</td> <td><span class="font-green"><i class="icon-ok"></i> 通过</span></td></tr><tr><td>B</td> <td style="text-align: left;"><a href="/acm/contest/5929/B" target="_blank" class="link-green">Min Value</a></td> <td><a href="/acm/contest/5929#submit/%7B%22problemIdFilter%22%3A206199%2C%22statusTypeFilter%22%3A5%7D" target="_blank" class="link-green">点击查看</a></td> <td>117/766</td> <td>未通过</td></tr><tr><td>C</td> <td style="text-align: left;"><a href="/acm/contest/5929/C" target="_blank" class="link-green">Coronavirus</a></td> <td><a href="/acm/contest/5929#submit/%7B%22problemIdFilter%22%3A206242%2C%22statusTypeFilter%22%3A5%7D" target="_blank" class="link-green">点击查看</a></td> <td>351/1234</td> <td>未通过</td></tr><tr><td>D</td> <td style="text-align: left;"><a href="/acm/contest/5929/D" target="_blank" class="link-green">Array</a></td> <td><a href="/acm/contest/5929#submit/%7B%22problemIdFilter%22%3A206864%2C%22statusTypeFilter%22%3A5%7D" target="_blank" class="link-green">点击查看</a></td> <td>83/177</td> <td>未通过</td></tr><tr><td>E</td> <td style="text-align: left;"><a href="/acm/contest/5929/E" target="_blank" class="link-green">Prize</a></td> <td><a href="/acm/contest/5929#submit/%7B%22problemIdFilter%22%3A206699%2C%22statusTypeFilter%22%3A5%7D" target="_blank" class="link-green">点击查看</a></td> <td>37/105</td> <td>未通过</td></tr><tr><td>F</td> <td style="text-align: left;"><a href="/acm/contest/5929/F" target="_blank" class="link-green">Animal Protection</a></td> <td><a href="/acm/contest/5929#submit/%7B%22problemIdFilter%22%3A206243%2C%22statusTypeFilter%22%3A5%7D" target="_blank" class="link-green">点击查看</a></td> <td>41/85</td> <td>未通过</td></tr><tr><td>G</td> <td style="text-align: left;"><a href="/acm/contest/5929/G" target="_blank" class="link-green">XOR</a></td> <td><a href="/acm/contest/5929#submit/%7B%22problemIdFilter%22%3A206185%2C%22statusTypeFilter%22%3A5%7D" target="_blank" class="link-green">点击查看</a></td> <td>374/1292</td> <td>未通过</td></tr><tr><td>H</td> <td style="text-align: left;"><a href="/acm/contest/5929/H" target="_blank" class="link-green">Maze</a></td> <td><a href="/acm/contest/5929#submit/%7B%22problemIdFilter%22%3A206192%2C%22statusTypeFilter%22%3A5%7D" target="_blank" class="link-green">点击查看</a></td> <td>145/364</td> <td>未通过</td></tr><tr><td>I</td> <td style="text-align: left;"><a href="/acm/contest/5929/I" target="_blank" class="link-green">Prime</a></td> <td><a href="/acm/contest/5929#submit/%7B%22problemIdFilter%22%3A206800%2C%22statusTypeFilter%22%3A5%7D" target="_blank" class="link-green">点击查看</a></td> <td>414/1681</td> <td>未通过</td></tr><tr><td>J</td> <td style="text-align: left;"><a href="/acm/contest/5929/J" target="_blank" class="link-green">Compare</a></td> <td><a href="/acm/contest/5929#submit/%7B%22problemIdFilter%22%3A206182%2C%22statusTypeFilter%22%3A5%7D" target="_blank" class="link-green">点击查看</a></td> <td>792/2118</td> <td>未通过</td></tr><tr><td>K</td> <td style="text-align: left;"><a href="/acm/contest/5929/K" target="_blank" class="link-green">Walk</a></td> <td><a href="/acm/contest/5929#submit/%7B%22problemIdFilter%22%3A206842%2C%22statusTypeFilter%22%3A5%7D" target="_blank" class="link-green">点击查看</a></td> <td>189/863</td> <td>未通过</td></tr><tr><td>L</td> <td style="text-align: left;"><a href="/acm/contest/5929/L" target="_blank" class="link-green">Defeat the monster</a></td> <td><a href="/acm/contest/5929#submit/%7B%22problemIdFilter%22%3A206867%2C%22statusTypeFilter%22%3A5%7D" target="_blank" class="link-green">点击查看</a></td> <td>413/997</td> <td>未通过</td></tr></tbody></table>'
    // 对象数组
    html:[
      {
        // div标签 name属性来指定
        name:"div",
        // 标签上有哪些属性
        attrs:{
          // 标签上的属性 class style
          class:"my_div",
          style:"color:red;"
        },
        // 子节点 children 要接收的数据类型和nodes第二种渲染方式的数据类型一致
        children:[
          {
            name:'p',
            attrs:{},
            //放文本
            children:[
              {
              type:"text",
              text:"hello"
            }]
          }
        ]
      }
    ]

  }
})