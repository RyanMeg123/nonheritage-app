# nonheritage-app 上 TestFlight 操作文档

## 这份文档是给谁用的

这份文档是按当前这个仓库的实际情况写的，目标是把这个 Expo 项目上传到 TestFlight，供 iPhone 内部测试使用。

适用前提：

- 当前前端项目目录是仓库根目录
- 项目使用 Expo
- 计划走 Expo 官方推荐的 EAS 提交流程

---

## 先说结论

这个项目现在还不能直接上 TestFlight，需要先补几项最基础的 iOS 配置，然后再打包上传。

按现在仓库里的情况，最关键的缺口有 4 个：

1. `app.json` 里还没有 iOS 唯一标识
2. `app.json` 里还没有 iOS 构建号
3. 仓库里还没有 `eas.json`
4. 项目现在默认会读取根目录 `.env` 里的 `EXPO_PUBLIC_API_URL`，如果不改成可访问地址，TestFlight 包虽然能装，但接口会连不上

---

## 当前项目现状

我已经按仓库内容核过一次，当前情况如下：

- 项目是 Expo 项目，`package.json` 里有 `expo`
- 当前 Expo 版本是 `54`
- `app.json` 里目前只有：
  - `name`
  - `slug`
  - `version`
  - `ios.supportsTablet`
- 还没有：
  - `ios.bundleIdentifier`
  - `ios.buildNumber`
  - `ios.infoPlist.ITSAppUsesNonExemptEncryption`
- 仓库根目录已经有 `.env`
- 前端接口地址来自 `EXPO_PUBLIC_API_URL`
- 发布页用了图片选择功能，所以 iOS 最好补上相册权限说明

---

## 完成这件事之前，你要准备什么

### 1. Apple 账号

你需要有：

- 一个可登录 App Store Connect 的 Apple 账号
- 这个账号已经加入 Apple Developer Program

如果没有付费开发者资格，不能正常走 TestFlight 分发。

### 2. 一个准备给手机访问的后端地址

这个项目现在不是纯静态页面，它会请求后端。

所以在打 TestFlight 包之前，根目录 `.env` 里的 `EXPO_PUBLIC_API_URL` 不能再是本机地址，也不能是只有你电脑自己能访问的地址。它必须是 iPhone 真机在外网或同一网络下能访问到的地址。

如果这里没改好，安装后最常见的表现就是：

- 页面能打开
- 但一到登录、提交、上传、生成结果这些动作就失败

---

## 第一步：先把项目补到“可上传”状态

### 1. 修改 `app.json`

建议先把 `app.json` 补成下面这个方向。

注意：下面的包名、名称、团队信息都要换成你自己的，不要原样照抄。

```json
{
  "expo": {
    "name": "非遗定制",
    "slug": "nonheritage-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.nonheritage",
      "buildNumber": "1",
      "infoPlist": {
        "ITSAppUsesNonExemptEncryption": false
      }
    },
    "plugins": [
      [
        "expo-image-picker",
        {
          "photosPermission": "允许访问相册，用于上传参考图片。"
        }
      ]
    ],
    "android": {
      "adaptiveIcon": {
        "backgroundColor": "#E6F4FE",
        "foregroundImage": "./assets/android-icon-foreground.png",
        "backgroundImage": "./assets/android-icon-background.png",
        "monochromeImage": "./assets/android-icon-monochrome.png"
      },
      "predictiveBackGestureEnabled": false
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

### 2. 这几个字段怎么理解

#### `ios.bundleIdentifier`

这是 iPhone 包名，必须全局唯一。建议一次定好，不要后面来回改。

例子：

- `com.yourcompany.nonheritage`
- `com.zwj.nonheritage`

#### `ios.buildNumber`

这是 iOS 构建号。

规则很简单：

- 第一次上传可以写 `1`
- 以后每传一次新包，就往上加
- 同一个版本号下，构建号不能重复

#### `version`

这是用户看到的版本号，比如 `1.0.0`。

常用做法：

- 小修小改继续保留 `1.0.0`，只增加 `buildNumber`
- 对外想表达“新版本”时，再改 `version`

#### `ITSAppUsesNonExemptEncryption`

大多数普通业务应用都建议先明确写成 `false`，这样上传到 TestFlight 时会少掉一部分重复确认。

#### `expo-image-picker` 权限说明

这个项目发布页里有上传参考图功能，所以建议把相册访问提示语写清楚，不要用默认英文文案。

---

## 第二步：给项目加上 EAS 配置

仓库里现在没有 `eas.json`，建议新增一个最基础可用版。

```json
{
  "cli": {
    "version": ">= 18.4.0"
  },
  "build": {
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "your-apple-id@example.com",
        "appleTeamId": "YOURTEAMID",
        "ascAppId": "1234567890"
      }
    }
  }
}
```

### 这 3 个值分别是什么

#### `appleId`

你登录 App Store Connect 的 Apple 账号。

#### `appleTeamId`

你的 Apple 开发团队编号。

#### `ascAppId`

App Store Connect 里这个应用的数字编号。

如果你第一次做，还没建应用记录，也可以先把这项留空，等创建完 App Store Connect 里的应用后再补上。

---

## 第三步：Apple 后台先建应用

先去 [App Store Connect](https://appstoreconnect.apple.com/) 新建这个应用。

创建时最重要的是这几项：

- 平台选 iOS
- 名称填你想在 TestFlight 里看到的应用名
- 主语言选中文或英文
- Bundle ID 选你刚刚在 `app.json` 里定下来的那个
- SKU 自己定一个不重复的内部编号

建完后，把这个应用的数字编号记下来，填回 `eas.json` 里的 `ascAppId`。

---

## 第四步：本地登录并初始化 EAS

在项目根目录执行：

```bash
npm install
npx eas-cli@latest login
npx eas-cli@latest init
```

如果项目之前没接过 EAS，初始化时按提示走就行。

---

## 第五步：检查构建凭证

执行：

```bash
npx eas-cli@latest credentials
```

推荐选择：

- 平台选 `iOS`
- profile 选 `production`
- 让它自动帮你生成和管理需要的证书与描述文件

第一次做时，这一步通常会让你登录 Apple 账号，并创建 iOS 生产构建所需的签名资料。

---

## 第六步：正式打 iOS 包

执行：

```bash
npx eas-cli@latest build -p ios --profile production
```

这一步完成后，EAS 会生成一个给 App Store Connect 用的 iOS 包。

如果你在 `eas.json` 里开了 `autoIncrement`，每次打新包时会自动往上加构建号，省得手动改漏。

---

## 第七步：把包提交到 TestFlight

执行：

```bash
npx eas-cli@latest submit -p ios --profile production
```

第一次提交时，常见会遇到这些输入：

- 让你确认 Apple 账号
- 让你选择刚刚打出来的 build
- 让你确认 App Store Connect 里的目标应用

如果一切正常，提交完成后，包会进入 App Store Connect 处理队列。

---

## 第八步：在 App Store Connect 里把包发给测试人员

上传成功后，不会立刻就能装，一般要等 Apple 处理一会儿。

处理完成后：

1. 进入 [App Store Connect](https://appstoreconnect.apple.com/)
2. 打开这个应用
3. 点 `TestFlight`
4. 在 `Internal Testing` 下创建一个测试组
5. 把内部测试人员加进去
6. 把这次上传的 build 加到这个组

完成后，测试人员会收到邀请，可以在 TestFlight 里安装。

如果只是团队内部试用，到这里通常就够了。

---

## 推荐的完整命令顺序

把上面的内容串起来，实际最常用就是这组命令：

```bash
npm install
npx eas-cli@latest login
npx eas-cli@latest init
npx eas-cli@latest credentials
npx eas-cli@latest build -p ios --profile production
npx eas-cli@latest submit -p ios --profile production
```

---

## 这个项目最容易踩的坑

### 1. 接口地址还是本地地址

这是这个项目最容易出问题的地方。

当前前端会读取根目录 `.env` 里的 `EXPO_PUBLIC_API_URL`。如果它还是：

- `http://localhost:4300`
- 你电脑局域网 IP
- 临时地址

那 TestFlight 装到别人手机上，大概率就会直接连不上。

上线前至少确认：

- 这个地址在 iPhone 上真的能打开
- 上传图片接口可用
- 登录和提交流程能跑通

### 2. 包名定得太随意

`bundleIdentifier` 一旦开始用了，后面最好别改。

因为 Apple 后台、签名、应用记录，都会跟它绑定。

### 3. 构建号没有递增

如果上一次传的是：

- `version = 1.0.0`
- `buildNumber = 3`

那你下一次再传：

- `version = 1.0.0`
- `buildNumber = 3`

会被拒。

### 4. 相册权限文案没补

这个项目用了图片选择功能。为了让上传参考图更顺，也为了避免系统弹窗文案太生硬，建议提前把权限提示语写好。

### 5. 上传成功了，但 TestFlight 里还看不到

这是正常情况，通常是 Apple 还在处理。

先等几分钟，再去后台刷新。

---

## 真正开始上传前，建议你按这个清单过一遍

- `app.json` 已补全 iOS 包名和构建号
- `app.json` 已补上相册权限说明
- `eas.json` 已创建
- `.env` 里的接口地址已改成真机可访问地址
- Apple Developer Program 已开通
- App Store Connect 里已建好应用
- 真机已经把主要流程走过一遍
- 这次上传前确认构建号不会重复

---

## 以后第二次、第三次再传时，最短流程

如果第一次已经走通，后面通常只需要：

1. 改好内容
2. 确认接口地址没问题
3. 确认构建号会递增
4. 执行打包命令
5. 执行提交命令
6. 去 TestFlight 里把新 build 加到测试组

---

## 官方参考

- Expo iOS 生产构建与 TestFlight 提交：[https://docs.expo.dev/tutorial/eas/ios-production-build/](https://docs.expo.dev/tutorial/eas/ios-production-build/)
- Expo `eas.json` 配置说明：[https://docs.expo.dev/eas/json/](https://docs.expo.dev/eas/json/)
- Expo `app.json` 里的 iOS 配置字段：[https://docs.expo.dev/versions/latest/config/app/](https://docs.expo.dev/versions/latest/config/app/)
- Expo Image Picker 配置说明：[https://docs.expo.dev/versions/latest/sdk/imagepicker/](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- Apple 内部测试员说明：[https://developer.apple.com/help/app-store-connect/test-a-beta-version/add-internal-testers/](https://developer.apple.com/help/app-store-connect/test-a-beta-version/add-internal-testers/)

---

## 一句话建议

对这个项目来说，最省事的路线不是先硬啃原生 iOS 工程，而是先把 `app.json` 和 `eas.json` 补齐，确认接口地址能在真机访问，然后直接走 EAS 的 iOS build + submit。
