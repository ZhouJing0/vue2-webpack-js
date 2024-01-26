import WebSocketClient from "websocket";

/*心跳检测*/
class heartCheck {
  constructor(e) {
    this.timeout = 60000; //60秒
    this.timeoutObj = null;
    this.serverTimeoutObj = null;
  }

  reset() {
    clearTimeout(this.timeoutObj);
    clearTimeout(this.serverTimeoutObj);
    return this;
  }

  start(websock) {
    this.timeoutObj = setTimeout(function () {
      //这里发送一个心跳，后端收到后，返回一个心跳消息，
      //onmessage拿到返回的心跳就说明连接正常
      websock.send("HeartBeat");
      this.serverTimeoutObj = setTimeout(function () {
        //如果超过一定时间还没重置，说明后端主动断开了
        websock.close(); //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
      }, this.timeout);
    }, this.timeout);
  }
}

export default class websocket {
  constructor(wsurl, callback) {
    if (callback && typeof callback === "function") {
      this.global_callback = callback;
    } else {
      this.global_callback = null;
    }
    this.lockReconnect = false; //避免重复连接
    this.initWebSocket(wsurl, callback);
  }

  initWebSocket(wsurl, callback) {
    this.websock = new WebSocketClient.w3cwebsocket(wsurl, "echo-protocol");
    /*初始化weosocket*/
    this.websock.onopen = () => {
      // 连接成功
      console.log("连接成功");
    };
    this.websock.onerror = () => {
      // 初始化失败，继续连接
      if (this.lockReconnect) return;
      this.lockReconnect = true;
      setTimeout(() => {
        new websocket(wsurl, callback);
        this.lockReconnect = false;
      }, 2000);
    };
    this.websock.onmessage = (e) => {
      // 接收数据
      new heartCheck().reset().start(this.websock);
      this.websocketOnMessage(e);
    };
    this.websock.onclose = (e) => {
      // 关闭
      this.websock.close();
      this.global_callback = null;
    };
  }

  /*实际调用的方法
   * 1.若是ws开启状态
   * 2.若是 正在开启状态，则等待1s后重新调用
   * 3.若未开启 ，则等待1s后重新调用
   * */
  sendSock(agentData, callback) {
    if (callback) {
      if (typeof callback === "function") {
        this.global_callback = callback;
      } else {
        this.global_callback = (data) => {};
        alert("sendSock，传参没有回调");
      }
    }
    if (this.websock.readyState === this.websock.OPEN) {
      this.websock.send(agentData);
    } else {
      setTimeout(() => {
        this.sendSock(agentData);
      }, 1000);
    }
  }

  // 关闭
  websocketclose(e) {
    // console.log("WebSocket关闭成功");
    this.websock.close();
    this.global_callback = null;
  }

  // 接收数据
  websocketOnMessage(e) {
    try {
      this.global_callback(e.data);
    } catch (err) {}
  }
}
