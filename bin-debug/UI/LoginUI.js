var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var LoginUI = (function (_super) {
    __extends(LoginUI, _super);
    function LoginUI() {
        return _super.call(this) || this;
    }
    LoginUI.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var label1 = new eui.Label();
        label1.text = "账号:";
        label1.left = stageW / 2 - 180;
        label1.top = stageH / 2 - 100;
        this.addChild(label1);
        var label2 = new eui.Label();
        label2.text = "密码:";
        label2.left = stageW / 2 - 180;
        label2.top = stageH / 2 - 20;
        this.addChild(label2);
        var usernamebg = new eui.Image();
        usernamebg.source = "resource/assets/login/login_input.png";
        usernamebg.scale9Grid = new egret.Rectangle(1.5, 1.5, 20, 20);
        usernamebg.width = 288;
        usernamebg.height = 34;
        usernamebg.left = label1.left + 90;
        usernamebg.top = label1.top;
        this.addChild(usernamebg);
        this.usernametxt = new eui.EditableText();
        this.usernametxt.text = "username";
        this.usernametxt.width = 288;
        this.usernametxt.height = 34;
        this.usernametxt.left = usernamebg.left;
        this.usernametxt.top = usernamebg.top + 3;
        this.addChild(this.usernametxt);
        var passwordbg = new eui.Image();
        passwordbg.source = "resource/assets/login/login_input.png";
        passwordbg.scale9Grid = new egret.Rectangle(1.5, 1.5, 20, 20);
        passwordbg.width = 288;
        passwordbg.height = 34;
        passwordbg.left = label2.left + 90;
        passwordbg.top = label2.top;
        this.addChild(passwordbg);
        this.passwordtxt = new eui.EditableText();
        this.passwordtxt.text = "password";
        this.passwordtxt.width = 288;
        this.passwordtxt.height = 34;
        this.passwordtxt.left = passwordbg.left;
        this.passwordtxt.top = passwordbg.top + 3;
        this.addChild(this.passwordtxt);
        var button = new eui.Button();
        button.label = "按钮";
        button.width = 150;
        button.height = 60;
        button.left = this.passwordtxt.left;
        button.top = stageH / 2.0 + 60;
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        this.initKbeNet();
    };
    LoginUI.prototype.initKbeNet = function () {
        var args = new KBEngine.KBEngineArgs();
        args.ip = "127.0.0.1";
        args.port = 20013;
        KBEngine.create(args);
    };
    LoginUI.prototype.onButtonClick = function (e) {
        var panel = new eui.Panel();
        panel.title = this.usernametxt.text + "  " + this.passwordtxt.text;
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    };
    return LoginUI;
}(eui.Group));
__reflect(LoginUI.prototype, "LoginUI");
//# sourceMappingURL=LoginUI.js.map