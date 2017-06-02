# tc-study0603
2017年6月3日の勉強会用です

0603 フロント勉強会

## どんな勉強会にしたいか

- 講義形式にしない
- どんどん質問を投げていく
- こっちとして、組み方の考え方だけ教えてそこから

### ${q0}
- calcを使ってrightviewを合わせよう

### ${q1}
- left-header 実装　inline-block html,cssともに

- ヒントul,liタグを使おう 

```
li{
        color:white;
        font-size: 18px;
        font-weight: bold;
        display: inline-block;
        line-height: 50px;
        }
      li:first-child{
        width: 180px;
        font-size: 16px;
      }

```

### ${q2 }
right-contents scroll-y 

```
overflow-y: scroll;
height: calc(100vh - 190px);
```

### ${q3}

position-relative
position: absolute;
          top: 16px;
          right: 10px;
          
          
```
 form {
      .text-area {
        float: left;
        width: calc(100% - 115px);
        height: 50px;
        position: relative;
        textarea{
          width: 100%;
          height: 50px;
          padding: 15px 10px;
          line-height: 20px;
          border: none;
          resize: none;
          display: block;
        }
        i {
          position: absolute;
          top: 16px;
          right: 10px;
          color: black;
        }
      }
      input {
        float: left;
        width: 100px;
        margin-left: 15px;
        line-height: 50px;
        color: #fff;
        background-color: #38aef0;
        text-align: center;
        border: none;
        padding: 0;
      }
```
