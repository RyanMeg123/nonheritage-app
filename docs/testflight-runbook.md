<!-- @format -->

# 非遗定制上 TestFlight 实操记录

这份文档不是通用教程，而是这次把 `nonheritage-app` 真正传到 TestFlight 的实际过程整理版，给同事直接照着走。

适用对象：

- 这个仓库的同事
- 项目还是 Expo
- 目标是把 iPhone 版本传到 TestFlight 做内部测试

---

## 这次已经走通的结果

这次我们已经完成了这些事：

1. 注册了 iOS 包名
2. 在 App Store Connect 新建了 App
3. 用 EAS 打出了 iOS 包
4. 把包提交到了 Apple
5. 在 TestFlight 里看到了这个版本
6. 在手机上通过 TestFlight 安装成功

当前已经确认可用的项目信息：

- App 名称：`非遗定制`
- Bundle ID：`com.zwj.nonheritage`
- 当前版本号：`1.0.0`
- 第一版构建号：`1`

---

## 先说一个结论

TestFlight 这条路已经打通了。

如果后端还没在线上准备好，也可以先发一版上去验证：

- 能不能成功打包
- 能不能成功上传
- 手机能不能安装
- 图标和启动图是否正常

但如果后端还没好，App 虽然能装，登录和接口相关功能大概率会失败。这种版本只能当“打通流程版”，不能当正式测试版。

---

## 第 1 步：先在 Apple 开发者后台注册包名

进入：

- Apple Developer
- `Certificates, Identifiers & Profiles`
- `Identifiers`

点击 `Register an App ID`，按下面填：

- 类型：`App IDs`
- 子类型：`App`
- Description：`Nonheritage iOS`
- Bundle ID：选 `Explicit`
- Bundle ID 内容：`com.zwj.nonheritage`

下面那些能力先不用乱勾，保持默认直接注册就行。

注册成功后，在 `Identifiers` 列表里会看到：

- `Nonheritage iOS`
- `com.zwj.nonheritage`

---

## 第 2 步：在 App Store Connect 里创建 App

进入：

- App Store Connect
- `App`
- 点 `+`
- `新建 App`

这次实际填写的是：

- 平台：`iOS`
- 名称：`非遗定制`
- 主要语言：`简体中文`
- 套装 ID：`com.zwj.nonheritage`
- SKU：`nonheritage-ios-001`
- 用户访问权限：`完全访问权限`

创建成功后，App 会出现在后台列表里。

---

## 第 3 步：把项目配置补齐

### 当前 `app.json` 里需要有这些关键内容

```json
{
    "expo": {
        "name": "非遗定制",
        "slug": "nonheritage-app",
        "version": "1.0.0",
        "icon": "./assets/app-logo.png",
        "splash": {
            "image": "./assets/app-logo.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
        },
        "ios": {
            "supportsTablet": true,
            "bundleIdentifier": "com.zwj.nonheritage",
            "buildNumber": "1",
            "infoPlist": {
                "ITSAppUsesNonExemptEncryption": false,
                "NSAppTransportSecurity": {
                    "NSAllowsArbitraryLoads": true
                }
            }
        },
        "plugins": [
            [
                "expo-image-picker",
                {
                    "photosPermission": "允许访问相册，用于上传参考图片。"
                }
            ]
        ]
    }
}
```

### 当前 `eas.json` 是这样

```json
{
    "cli": {
        "version": ">= 18.4.0",
        "appVersionSource": "remote"
    },
    "build": {
        "preview": {
            "distribution": "internal"
        },
        "production": {
            "autoIncrement": true
        }
    },
    "submit": {
        "production": {}
    }
}
```

这次是靠交互式流程完成提交的，所以 `submit.production` 里没有提前写死 Apple 账号信息。

---

## 第 4 步：登录 EAS

这次机器上直接用 `npx eas login` 会报错，所以实际使用的是：

```bash
npx eas-cli@latest login
```

建议先用这个命令确认工具能跑：

```bash
npx eas-cli@latest --version
```

---

## 第 5 步：正式打 iOS 包

在项目根目录执行：

```bash
npx eas-cli@latest build -p ios --profile production
```

这次构建过程中，EAS 自动完成了：

- 证书准备
- 描述文件准备
- 项目压缩上传
- 云端构建

构建成功后，会拿到一个 `.ipa` 地址。

这次我们看到的结果就是：

- 构建完成
- 成功产出 iOS 安装包

---

## 第 6 步：把包提交到 TestFlight

构建成功后，继续执行：

```bash
npx eas-cli@latest submit -p ios --profile production
```

这次交互时，关键选择是：

1. `Select a build from EAS`
2. 选择刚刚那次最新成功的 build

提交成功后，终端会提示：

- 已提交到 Apple App Store Connect
- Apple 正在处理这个版本

---

## 第 7 步：去 TestFlight 页面确认版本出现

Apple 处理完后，在 App Store Connect 里进入：

- `非遗定制`
- 顶部 `TestFlight`

会看到：

- `1.0.0 (1)`
- 状态完成

这说明这个版本已经真正进入 TestFlight 了。

---

## 第 8 步：添加内部测试人员

### 先加自己

在 TestFlight 左侧内部测试组里，可以先把自己加进去。

如果状态显示：

- `已邀请`

说明后台已经把测试邀请发出去了，但还没在设备侧完成接收。

### 如果想加其他人，但列表里看不到

这次已经验证过，原因通常不是 TestFlight 坏了，而是：

- 对方还不在 `用户和访问` 团队里

正确顺序是：

1. 先去顶部 `用户和访问`
2. 点 `+`
3. 把对方加进 App Store Connect 团队
4. 等对方接受邮件邀请
5. 再回 `TestFlight`
6. 把对方加进内部测试组

如果对方还没接受团队邀请，就不会出现在内部测试组可选列表里。

---

## 第 9 步：在手机上安装

这次实际踩过的一个坑是：

- **不要在 Mac 上的 TestFlight 里折腾邀请码**

因为我们发的是 iPhone 版本，真正安装和测试要在 **iPhone 的 TestFlight** 里完成。

正确做法：

1. 在 iPhone 上安装 `TestFlight`
2. 用被邀请的 Apple 账号登录
3. 在手机邮箱里找到 Apple 发来的测试邀请邮件
4. 点邮件里的链接
5. 自动跳到手机上的 `TestFlight`
6. 安装 `非遗定制`

如果手机里安装成功，但登录失败，这通常不是 TestFlight 的问题，而是后端还没准备好，或者 App 还在连不可用的接口地址。

---

## 这次确认过的几个坑

### 1. `npx eas login` 可能直接报错

这次实际可用的是：

```bash
npx eas-cli@latest login
```

### 2. 后端没上线，不影响先打通 TestFlight

可以先发一版“流程验证版”。

这版主要验证：

- 能不能打包
- 能不能上传
- 能不能安装

但不能当正式测试版。

### 3. 安装位置要看准

这次发的是 iPhone App，所以真正安装要在 **手机上的 TestFlight**，不是电脑上的 TestFlight。

### 4. 内部测试人员不是随便输邮箱就能加

内部测试人员必须先在 `用户和访问` 里成为团队成员，然后才能被加进内部测试组。

---

## 下一次再发新版怎么做

如果后端已经准备好了，下一次直接按这条线重复一遍：

1. 把前端接口地址改成可访问的线上地址
2. 确认手机上登录、接口、上传都能工作
3. 再执行打包命令
4. 再执行提交通知命令

用到的还是这两条：

```bash
npx eas-cli@latest build -p ios --profile production
npx eas-cli@latest submit -p ios --profile production
```

因为现在 `eas.json` 已经开了自动递增，后面再发新版本时，构建号会自动往上走，不需要每次手改。

---

## 给同事的最短版

如果同事只想知道最短流程，直接看这几步就够：

1. 先在 Apple Developer 注册包名
2. 在 App Store Connect 创建 App
3. 把 `app.json` 和 `eas.json` 配好
4. 执行：

```bash
npx eas-cli@latest login
npx eas-cli@latest build -p ios --profile production
npx eas-cli@latest submit -p ios --profile production
```

5. 去 App Store Connect 的 `TestFlight` 看版本
6. 把内部测试人员先加进 `用户和访问`
7. 再把他们加进内部测试组
8. 在 iPhone 的 TestFlight 里安装

---

## 一句话总结

这次已经证明：`非遗定制` 这个项目从 Expo 打包，到 App Store Connect，再到 TestFlight 安装，整条路是通的。后面真正影响功能能不能用的，不再是 TestFlight，而是后端和接口地址。
