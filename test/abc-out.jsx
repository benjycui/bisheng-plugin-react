import ReactDOM from 'react-dom';
import IceQrcode from '@ali/ice-qrcode';

module.exports = {
  "preview": function() {
    class App extends Component {}

    return (
      <div>
        <div style={{textAlign: "right"}}>
          <IceQrcode value="http://www.taobao.com" text="手机淘宝扫码查看"/>
        </div>
        <hr/>
        <div>
          <IceQrcode value="https://ice.alibaba-inc.com" text="进入 ICE 官网" align="right" />
        </div>
      </div>
    );
  }
};