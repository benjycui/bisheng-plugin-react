module.exports = {
  "preview": [
    "pre",
    {
      "lang": "__react"
    },
    [
      "code",
      "import ReactDOM from 'react-dom';\nimport IceQrcode from '@ali/ice-qrcode';\n\n class App extends Component {}; \n\n ReactDOM.render((\n  <div>\n    <div style={{textAlign: \"right\"}}>\n      <IceQrcode value=\"http://www.taobao.com\" text=\"手机淘宝扫码查看\"/>\n    </div>\n    <hr/>\n    <div>\n      <IceQrcode value=\"https://ice.alibaba-inc.com\" text=\"进入 ICE 官网\" align=\"right\" />\n    </div>\n  </div>\n), mountNode);"
    ]
  ]
};