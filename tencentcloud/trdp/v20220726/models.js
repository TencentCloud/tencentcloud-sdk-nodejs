/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const AbstractModel = require("../../common/abstract_model");

/**
 * EvaluateUserRisk请求参数结构体
 * @class
 */
class EvaluateUserRiskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号信息
         * @type {AccountInfo || null}
         */
        this.Account = null;

        /**
         * 用户信息
         * @type {UserInfo || null}
         */
        this.User = null;

        /**
         * 模型ID
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * 设备指纹信息
         * @type {DeviceFingerprintInfo || null}
         */
        this.DeviceFingerprint = null;

        /**
         * 场景Code，不传默认活动防刷；
e_activity_antirush；活动防刷场景
e_login_protection；登录保护场景
e_register_protection：注册保护场景
         * @type {string || null}
         */
        this.SceneCode = null;

        /**
         * 设备详情
         * @type {DeviceDetailInfo || null}
         */
        this.DeviceDetail = null;

        /**
         * 营销信息
         * @type {MarketingInfo || null}
         */
        this.Marketing = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Account) {
            let obj = new AccountInfo();
            obj.deserialize(params.Account)
            this.Account = obj;
        }

        if (params.User) {
            let obj = new UserInfo();
            obj.deserialize(params.User)
            this.User = obj;
        }
        this.ModelId = 'ModelId' in params ? params.ModelId : null;

        if (params.DeviceFingerprint) {
            let obj = new DeviceFingerprintInfo();
            obj.deserialize(params.DeviceFingerprint)
            this.DeviceFingerprint = obj;
        }
        this.SceneCode = 'SceneCode' in params ? params.SceneCode : null;

        if (params.DeviceDetail) {
            let obj = new DeviceDetailInfo();
            obj.deserialize(params.DeviceDetail)
            this.DeviceDetail = obj;
        }

        if (params.Marketing) {
            let obj = new MarketingInfo();
            obj.deserialize(params.Marketing)
            this.Marketing = obj;
        }

    }
}

/**
 * 设备详情	
 * @class
 */
class DeviceDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * mac地址或唯一设备标识
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * 手机型号
         * @type {string || null}
         */
        this.Model = null;

        /**
         * 操作系统(unknown，android，ios，windows)
         * @type {string || null}
         */
        this.OsSystem = null;

        /**
         * 操作系统版本
         * @type {string || null}
         */
        this.OsSystemVersion = null;

        /**
         * 竞价底价
         * @type {number || null}
         */
        this.BidFloor = null;

        /**
         * 设备版本
         * @type {string || null}
         */
        this.DeviceVersion = null;

        /**
         * 设备制造商
         * @type {string || null}
         */
        this.Maker = null;

        /**
         * 设备类型（PHONE,TABLET）
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * 运营商；-1: 获取失败，0: 其他，1: 移动，2: 联通，3: 电信，4: 铁通
         * @type {string || null}
         */
        this.Carrier = null;

        /**
         * 入网方式(wifi,5g,4g,3g,2g)
         * @type {string || null}
         */
        this.AccessMode = null;

        /**
         * 手机芯片信息
         * @type {string || null}
         */
        this.PhoneChipInfo = null;

        /**
         * CPU 型号
         * @type {string || null}
         */
        this.CpuModel = null;

        /**
         * CPU 核数
         * @type {string || null}
         */
        this.CpuCore = null;

        /**
         * 内存容量，单位转换为 GB
         * @type {string || null}
         */
        this.Memory = null;

        /**
         * 系统语言
         * @type {string || null}
         */
        this.Language = null;

        /**
         * 手机音量
         * @type {string || null}
         */
        this.Volume = null;

        /**
         * 电池电量
         * @type {string || null}
         */
        this.BatteryPower = null;

        /**
         * 屏幕分辨率宽，保留整数
         * @type {number || null}
         */
        this.ResolutionWidth = null;

        /**
         * 屏幕分辨率高，保留整数
         * @type {number || null}
         */
        this.ResolutionHeight = null;

        /**
         * 浏览器类型
         * @type {string || null}
         */
        this.Ua = null;

        /**
         * 客户端应用
         * @type {string || null}
         */
        this.App = null;

        /**
         * 应用包名
         * @type {string || null}
         */
        this.AppPackageName = null;

        /**
         * 设备序列号
Android设备
         * @type {string || null}
         */
        this.SerialNumber = null;

        /**
         * netOperator MCC+MNC
Android设备
         * @type {string || null}
         */
        this.MobileCountryAndNetworkCode = null;

        /**
         * 设备品牌 “华为”“oppo”“小米”
Android设备
         * @type {string || null}
         */
        this.VendorId = null;

        /**
         * Android API等级
Android设备
         * @type {string || null}
         */
        this.AndroidApiLevel = null;

        /**
         * 屏幕亮度
Android设备
         * @type {string || null}
         */
        this.Brightness = null;

        /**
         * 蓝牙地址
Android设备
         * @type {string || null}
         */
        this.BluetoothAddress = null;

        /**
         * 基带版本
Android设备
         * @type {string || null}
         */
        this.BaseBandVersion = null;

        /**
         * kernel 版本
Android设备
         * @type {string || null}
         */
        this.KernelVersion = null;

        /**
         * 存储容量，单位转换为 GB
Android设备
         * @type {string || null}
         */
        this.Storage = null;

        /**
         * 软件包名
Android设备
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * app 版本号
Android设备
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * app 显示名称
Android设备
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 是否 debug；0 为正常模式，1 为 debug 模式；其他值无效
Android设备
         * @type {string || null}
         */
        this.IsDebug = null;

        /**
         * 是否越狱；0 为正常，1 为越狱；其他值无效
Android设备
         * @type {string || null}
         */
        this.IsRoot = null;

        /**
         * 是否启动代理；0 为未开启，1 为开启；其他值无效
Android设备
         * @type {string || null}
         */
        this.IsProxy = null;

        /**
         * 是否模拟器；0 为未开启，1 为开启；其他值无效
Android设备
         * @type {string || null}
         */
        this.IsEmulator = null;

        /**
         * 充电状态；1-不在充电，2-USB充电，3-电源充电
Android设备
         * @type {string || null}
         */
        this.ChargeStatus = null;

        /**
         * 网络类型：2G/3G/4G/5G/Wi-Fi/WWAN/other
Android设备
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * Wi-Fi MAC地址
Android设备
         * @type {string || null}
         */
        this.WifiMac = null;

        /**
         * 设备名称 "xxx 的 iPhone"，"xxx's IPhone" 等等
IOS设备
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 开机时间
IOS设备
         * @type {string || null}
         */
        this.StartupTime = null;

        /**
         * 所在经度
         * @type {string || null}
         */
        this.Lon = null;

        /**
         * 所在纬度
         * @type {string || null}
         */
        this.Lat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.OsSystem = 'OsSystem' in params ? params.OsSystem : null;
        this.OsSystemVersion = 'OsSystemVersion' in params ? params.OsSystemVersion : null;
        this.BidFloor = 'BidFloor' in params ? params.BidFloor : null;
        this.DeviceVersion = 'DeviceVersion' in params ? params.DeviceVersion : null;
        this.Maker = 'Maker' in params ? params.Maker : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.Carrier = 'Carrier' in params ? params.Carrier : null;
        this.AccessMode = 'AccessMode' in params ? params.AccessMode : null;
        this.PhoneChipInfo = 'PhoneChipInfo' in params ? params.PhoneChipInfo : null;
        this.CpuModel = 'CpuModel' in params ? params.CpuModel : null;
        this.CpuCore = 'CpuCore' in params ? params.CpuCore : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Language = 'Language' in params ? params.Language : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.BatteryPower = 'BatteryPower' in params ? params.BatteryPower : null;
        this.ResolutionWidth = 'ResolutionWidth' in params ? params.ResolutionWidth : null;
        this.ResolutionHeight = 'ResolutionHeight' in params ? params.ResolutionHeight : null;
        this.Ua = 'Ua' in params ? params.Ua : null;
        this.App = 'App' in params ? params.App : null;
        this.AppPackageName = 'AppPackageName' in params ? params.AppPackageName : null;
        this.SerialNumber = 'SerialNumber' in params ? params.SerialNumber : null;
        this.MobileCountryAndNetworkCode = 'MobileCountryAndNetworkCode' in params ? params.MobileCountryAndNetworkCode : null;
        this.VendorId = 'VendorId' in params ? params.VendorId : null;
        this.AndroidApiLevel = 'AndroidApiLevel' in params ? params.AndroidApiLevel : null;
        this.Brightness = 'Brightness' in params ? params.Brightness : null;
        this.BluetoothAddress = 'BluetoothAddress' in params ? params.BluetoothAddress : null;
        this.BaseBandVersion = 'BaseBandVersion' in params ? params.BaseBandVersion : null;
        this.KernelVersion = 'KernelVersion' in params ? params.KernelVersion : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.IsDebug = 'IsDebug' in params ? params.IsDebug : null;
        this.IsRoot = 'IsRoot' in params ? params.IsRoot : null;
        this.IsProxy = 'IsProxy' in params ? params.IsProxy : null;
        this.IsEmulator = 'IsEmulator' in params ? params.IsEmulator : null;
        this.ChargeStatus = 'ChargeStatus' in params ? params.ChargeStatus : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.WifiMac = 'WifiMac' in params ? params.WifiMac : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.StartupTime = 'StartupTime' in params ? params.StartupTime : null;
        this.Lon = 'Lon' in params ? params.Lon : null;
        this.Lat = 'Lat' in params ? params.Lat : null;

    }
}

/**
 * 通用账号信息
 * @class
 */
class UniversalAccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号值：
当账户类型为1时，填入手机号，如135****3695；
当账户类型为2、3或100时，填入对应的值。
         * @type {string || null}
         */
        this.AccountId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountId = 'AccountId' in params ? params.AccountId : null;

    }
}

/**
 * 营销信息
 * @class
 */
class MarketingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投放模式（0=PDB，1=PD，2=RTB，10=其他）
         * @type {number || null}
         */
        this.DeliveryMode = null;

        /**
         * 广告位类型 （0=前贴片，1=开屏广告，2=网页头部广告、3=网页中部广告、4=网页底部广告、5=悬浮广告、10=其它）
         * @type {number || null}
         */
        this.AdvertisingType = null;

        /**
         * 是否全屏插广告（0-否，1-是）
         * @type {number || null}
         */
        this.FullScreen = null;

        /**
         * 广告位宽度
         * @type {number || null}
         */
        this.AdvertisingSpaceWidth = null;

        /**
         * 广告位高度
         * @type {number || null}
         */
        this.AdvertisingSpaceHeight = null;

        /**
         * 网址
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeliveryMode = 'DeliveryMode' in params ? params.DeliveryMode : null;
        this.AdvertisingType = 'AdvertisingType' in params ? params.AdvertisingType : null;
        this.FullScreen = 'FullScreen' in params ? params.FullScreen : null;
        this.AdvertisingSpaceWidth = 'AdvertisingSpaceWidth' in params ? params.AdvertisingSpaceWidth : null;
        this.AdvertisingSpaceHeight = 'AdvertisingSpaceHeight' in params ? params.AdvertisingSpaceHeight : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * 设备指纹信息	
 * @class
 */
class DeviceFingerprintInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备指纹Token
         * @type {string || null}
         */
        this.DeviceToken = null;

        /**
         * 设备指纹的客户端SDK对应渠道
         * @type {string || null}
         */
        this.SdkChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceToken = 'DeviceToken' in params ? params.DeviceToken : null;
        this.SdkChannel = 'SdkChannel' in params ? params.SdkChannel : null;

    }
}

/**
 * 账号信息
 * @class
 */
class AccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户账号类型：
1-手机号；
2-IMEI；
3-IDFA；
100-SSID类型
         * @type {number || null}
         */
        this.AccountType = null;

        /**
         * 通用账号信息，当AccountType为1、2、3、100时必填
         * @type {UniversalAccountInfo || null}
         */
        this.UniversalAccount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountType = 'AccountType' in params ? params.AccountType : null;

        if (params.UniversalAccount) {
            let obj = new UniversalAccountInfo();
            obj.deserialize(params.UniversalAccount)
            this.UniversalAccount = obj;
        }

    }
}

/**
 * 用户信息	
 * @class
 */
class UserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户外网IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 来源渠道编码
         * @type {string || null}
         */
        this.ChannelSource = null;

        /**
         * 用户登录平台。1：Android 2：iOS 3：H5 4：小程序
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 年龄
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 性别：
male（男）
female（女）
         * @type {string || null}
         */
        this.Gender = null;

        /**
         * 身份证号
         * @type {string || null}
         */
        this.ResidentIdentityCard = null;

        /**
         * 邮箱地址
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 用户地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 用户昵称
         * @type {string || null}
         */
        this.Nickname = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.ChannelSource = 'ChannelSource' in params ? params.ChannelSource : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.ResidentIdentityCard = 'ResidentIdentityCard' in params ? params.ResidentIdentityCard : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;

    }
}

/**
 * EvaluateUserRisk返回参数结构体
 * @class
 */
class EvaluateUserRiskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 评估结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EvaluationResult || null}
         */
        this.EvaluationResult = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EvaluationResult) {
            let obj = new EvaluationResult();
            obj.deserialize(params.EvaluationResult)
            this.EvaluationResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 评估结果	
 * @class
 */
class EvaluationResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSID值
         * @type {string || null}
         */
        this.SSID = null;

        /**
         * 风险价值分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 风险标签，请参考官网风险类型
账号风险
1 账号信用低 账号近期存在因恶意被处罚历史，网络低活跃，被举报等因素
11 疑似低活跃账号 账号活跃度与正常用户有差异
2 垃圾账号 疑似批量注册小号，近期存在严重违规或大量举报
21 疑似小号 账号有疑似线上养号，小号等行为
22 疑似违规账号 账号曾有违规行为、曾被举报过、曾因违规被处罚过等
3 无效账号 送检账号参数无法成功解析，请检查微信 Openid 是否有误/Appid与QQopenid无法关联/微信Openid权限是否有开通/手机号是否为中国大陆手机号
4 黑名单 该账号在业务侧有过拉黑记录
5 白名单 业务自行有添加过白名单记录
行为风险
101 批量操作存在 IP/设备/环境等因素的聚集性异常
1011 疑似 IP 属性聚集 出现 IP 聚集
1012 疑似设备属性聚集 出现设备聚集
102 自动机 疑似自动机批量请求
103 恶意行为-网赚 疑似网赚
104 微信登录态无效 检查 WeChatAccessToken 参数，是否已经失效
201 环境风险 环境异常 操作 IP/设备/环境存在异常。当前 IP 为非常用 IP 或恶意 IP 段
2011 疑似非常用 IP 请求 当前请求 IP 非该账号常用 IP
2012 疑似 IP 异常 使用 idc 机房 IP 或使用代理 IP 或使用恶意 IP 等
205 非公网有效IP 传进来的 IP 地址为内网 IP 地址或者 IP 保留地址
设备风险
206 设备异常 该设备存在异常的使用行为
2061 疑似非常用设备 当前请求的设备非该账号常用设备
2062 疑似虚拟设备 请求设备为模拟器、脚本、云设备等虚拟设备
2063 疑似群控设备 请求设备为猫池、手机墙等群控设备
10201 设备处于开发者模式 来源于Android
10202 设备疑似 Root 来源于Android
10203 疑似应用被注 来源于Android
10204 疑似应用被重打包 来源于Android
10205 疑似使用 hook 技术 来源于Android
10206 疑似应用被双开 来源于Android
10207 疑似设备存在风险进程 来源于Android
10208 疑似伪造地理位置 来源于Android
10209 疑似使用 VPN 软件 来源于Android
10210 疑似使用代理软件 来源于Android
10211 疑似设备处于调试模式 来源于Android
10212 疑似高危 ROM 来源于Android
10213 疑似检测到系统劫持 来源于Android
10003 疑似模拟器 来源于Android
10301 疑似主流模拟器 来源于Android
10302 疑似云模拟器 来源于Android
10303 疑似开发板设备 来源于Android
10004 疑似群控设备风险 来源于Android
10401 疑似使用自动化软件 来源于Android
10402 疑似群控自动化操作 来源于Android
10501 疑似参数异常-IMEI 来源于Android
10502 疑似参数异常-FP 来源于Android
10504 疑似参数异常-IMSI 来源于Android
10801 疑似存在刷量安装应用的行为 来源于Android
10901 疑似多账号异常 来源于Android
11001 疑似设备参数篡改 来源于Android
11002 疑似存在风险软件 来源于Android
11003 疑似应用被调试 来源于Android
11100 疑似云真机 来源于Android
25001 设备疑似越狱 来源于IOS
25004 进程疑似有注入文件 来源于IOS
25005 疑似使用代理软件 来源于IOS
25006 疑似使用 VPN 软件 来源于IOS
25007 疑似被 Hook 来源于IOS
25008 疑似进程被调试 来源于IOS
25009 疑似多开 来源于IOS
25010 疑似改机 来源于IOS
25011 疑似应用二次打包 来源于IOS
25012 疑似模拟器 来源于IOS
25013 疑似云真机 来源于IOS
25014 疑似云模拟器 来源于IOS
25015 疑似伪造地理位置 来源于IOS
25016 疑似使用自动化脚本 来源于IOS
25017 疑似群控自动化操作 来源于IOS
30001 疑似虚拟浏览器 来源于H5
30002 疑似安装作弊插件 来源于H5
30003 疑似浏览器参数遭篡改 来源于H5
30004 疑似 JS 代码被篡改 来源于H5
30005 疑似 JS 被调试 来源于H5
30006 Cookies 被禁用 来源于H5
40001 疑似伪造地理位置 来源于小程序
40002 疑似被调试 来源于小程序
40003 疑似模拟器 来源于小程序
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.RiskLabels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SSID = 'SSID' in params ? params.SSID : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.RiskLabels = 'RiskLabels' in params ? params.RiskLabels : null;

    }
}

module.exports = {
    EvaluateUserRiskRequest: EvaluateUserRiskRequest,
    DeviceDetailInfo: DeviceDetailInfo,
    UniversalAccountInfo: UniversalAccountInfo,
    MarketingInfo: MarketingInfo,
    DeviceFingerprintInfo: DeviceFingerprintInfo,
    AccountInfo: AccountInfo,
    UserInfo: UserInfo,
    EvaluateUserRiskResponse: EvaluateUserRiskResponse,
    EvaluationResult: EvaluationResult,

}
