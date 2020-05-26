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
 * CheckKol
 * @class
 */
class InputKolDataList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号类型[1：微信；2：qq；3：微博]
         * @type {number || null}
         */
        this.Type = null;

        /**
         * KOL账号ID[比如微信公众号ID]
         * @type {string || null}
         */
        this.Id = null;

        /**
         * KOL名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 代理商名称
         * @type {string || null}
         */
        this.AgentInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.AgentInfo = 'AgentInfo' in params ? params.AgentInfo : null;

    }
}

/**
 * CheckKol
 * @class
 */
class OutputKolData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码[0:成功；非0：失败的错误码]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 业务返回数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OutputKolValue> || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Value) {
            this.Value = new Array();
            for (let z in params.Value) {
                let obj = new OutputKolValue();
                obj.deserialize(params.Value[z]);
                this.Value.push(obj);
            }
        }

    }
}

/**
 * CheckKol
 * @class
 */
class InputKolBspData extends  AbstractModel {
    constructor(){
        super();

        /**
         * BspData
         * @type {Array.<InputKolDataList> || null}
         */
        this.DataList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DataList) {
            this.DataList = new Array();
            for (let z in params.DataList) {
                let obj = new InputKolDataList();
                obj.deserialize(params.DataList[z]);
                this.DataList.push(obj);
            }
        }

    }
}

/**
 * EnhanceTaDegree请求参数结构体
 * @class
 */
class EnhanceTaDegreeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务数据
         * @type {InputTaBspData || null}
         */
        this.BspData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BspData) {
            let obj = new InputTaBspData();
            obj.deserialize(params.BspData)
            this.BspData = obj;
        }

    }
}

/**
 * 流量反欺诈-验准返回的查询分值
 * @class
 */
class OutputRecognizeTargetAudienceValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ModelId = null;

        /**
         * 是否正常返回结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsFound = null;

        /**
         * 返回分值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.IsFound = 'IsFound' in params ? params.IsFound : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * SendTrafficSecuritySmsMessage请求参数结构体
 * @class
 */
class SendTrafficSecuritySmsMessageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务入参
         * @type {InputSendTrafficSecuritySmsMsg || null}
         */
        this.BspData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BspData) {
            let obj = new InputSendTrafficSecuritySmsMsg();
            obj.deserialize(params.BspData)
            this.BspData = obj;
        }

    }
}

/**
 * DetectFraudKOL返回参数结构体
 * @class
 */
class DetectFraudKOLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回包数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutputKolData || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new OutputKolData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecognizeCustomizedAudience返回参数结构体
 * @class
 */
class RecognizeCustomizedAudienceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutputRecognizeTargetAudience || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new OutputRecognizeTargetAudience();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckKol
 * @class
 */
class OutputKolValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * KOL账号ID[比如微信公众号ID]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 是否查得[0：未查得；1：查得]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsCheck = null;

        /**
         * 作弊的可能性[0～100]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FraudPScore = null;

        /**
         * 作弊的严重性[0～100]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EvilPScore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.IsCheck = 'IsCheck' in params ? params.IsCheck : null;
        this.FraudPScore = 'FraudPScore' in params ? params.FraudPScore : null;
        this.EvilPScore = 'EvilPScore' in params ? params.EvilPScore : null;

    }
}

/**
 * EnhanceTaDegree返回参数结构体
 * @class
 */
class EnhanceTaDegreeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回包数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutputTaData || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new OutputTaData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 流量反欺诈-虚假TA识别
 * @class
 */
class InputTaBspData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求序列号
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * 操作系统类型[0：未知；1：android；2：ios；3：windows]
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * 年龄下限
         * @type {number || null}
         */
        this.AgeFloor = null;

        /**
         * 年龄上限
         * @type {number || null}
         */
        this.AgeCeil = null;

        /**
         * 性别[1：男；2：女]
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 用户操作时间
         * @type {number || null}
         */
        this.UserTime = null;

        /**
         * Imei [在(Imei|ImeiMd5|Idfa|IdfaMd5)里面4选1]
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * Imei小写后加密Md5 [在(Imei|ImeiMd5|Idfa|IdfaMd5)里面4选1]
         * @type {string || null}
         */
        this.ImeiMd5 = null;

        /**
         * Idfa [在(Imei|ImeiMd5|Idfa|IdfaMd5)里面4选1]
         * @type {string || null}
         */
        this.Idfa = null;

        /**
         * Idfa大写后加密Md5 [在(Imei|ImeiMd5|Idfa|IdfaMd5)里面4选1]
         * @type {string || null}
         */
        this.IdfaMd5 = null;

        /**
         * 用户IP
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * MAC地址[建议提供]
         * @type {string || null}
         */
        this.Mac = null;

        /**
         * 手机号码[中国大陆]
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * APP名称
         * @type {string || null}
         */
        this.App = null;

        /**
         * 应用安装包名称
         * @type {string || null}
         */
        this.Package = null;

        /**
         * 设备制造商
         * @type {string || null}
         */
        this.DeviceMaker = null;

        /**
         * 设备型号
         * @type {string || null}
         */
        this.DeviceModule = null;

        /**
         * 入网方式[1：WIFI；2：4G；3：3G；4：2G；5：其它]
         * @type {string || null}
         */
        this.AccessMode = null;

        /**
         * 运营商[1：移动；2：联通；3：电信；4：其它]
         * @type {string || null}
         */
        this.Sp = null;

        /**
         * 网址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 用户地址
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 纬度
         * @type {string || null}
         */
        this.Latitude = null;

        /**
         * 精度
         * @type {string || null}
         */
        this.Longitude = null;

        /**
         * 辅助区分信息
         * @type {string || null}
         */
        this.Context = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.AgeFloor = 'AgeFloor' in params ? params.AgeFloor : null;
        this.AgeCeil = 'AgeCeil' in params ? params.AgeCeil : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.UserTime = 'UserTime' in params ? params.UserTime : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.ImeiMd5 = 'ImeiMd5' in params ? params.ImeiMd5 : null;
        this.Idfa = 'Idfa' in params ? params.Idfa : null;
        this.IdfaMd5 = 'IdfaMd5' in params ? params.IdfaMd5 : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.App = 'App' in params ? params.App : null;
        this.Package = 'Package' in params ? params.Package : null;
        this.DeviceMaker = 'DeviceMaker' in params ? params.DeviceMaker : null;
        this.DeviceModule = 'DeviceModule' in params ? params.DeviceModule : null;
        this.AccessMode = 'AccessMode' in params ? params.AccessMode : null;
        this.Sp = 'Sp' in params ? params.Sp : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Latitude = 'Latitude' in params ? params.Latitude : null;
        this.Longitude = 'Longitude' in params ? params.Longitude : null;
        this.Context = 'Context' in params ? params.Context : null;

    }
}

/**
 * 返回结果
 * @class
 */
class OutputSendTrafficSecuritySmsMsg extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回码（0：接口调用成功 非0：接口调用失败）
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 返回码对应的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 发送失败的号码列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * SendTrafficSecuritySmsMessage返回参数结构体
 * @class
 */
class SendTrafficSecuritySmsMessageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutputSendTrafficSecuritySmsMsg || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new OutputSendTrafficSecuritySmsMsg();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetectFraudKOL请求参数结构体
 * @class
 */
class DetectFraudKOLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务数据
         * @type {InputKolBspData || null}
         */
        this.BspData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BspData) {
            let obj = new InputKolBspData();
            obj.deserialize(params.BspData)
            this.BspData = obj;
        }

    }
}

/**
 * RecognizeCustomizedAudience请求参数结构体
 * @class
 */
class RecognizeCustomizedAudienceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务入参
         * @type {InputRecognizeTargetAudience || null}
         */
        this.BspData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BspData) {
            let obj = new InputRecognizeTargetAudience();
            obj.deserialize(params.BspData)
            this.BspData = obj;
        }

    }
}

/**
 * RecognizeTargetAudience返回参数结构体
 * @class
 */
class RecognizeTargetAudienceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回包数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutputRecognizeTargetAudience || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new OutputRecognizeTargetAudience();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 流量反欺诈-验准入参
 * @class
 */
class InputRecognizeTargetAudience extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备ID，AccountType指定的类型
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 设备号类型，1.imei 2.imeiMd5（小写后转MD5转小写）3.idfa， 4.idfaMd5（大写后转MD5转小写），5.手机号,256.其它
         * @type {number || null}
         */
        this.AccountType = null;

        /**
         * 模型ID列表
         * @type {Array.<number> || null}
         */
        this.ModelIdList = null;

        /**
         * 用户IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 操作系统类型(unknown，android，ios，windows)
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 操作系统版本
         * @type {string || null}
         */
        this.Osv = null;

        /**
         * 纬度
         * @type {string || null}
         */
        this.Lat = null;

        /**
         * 经度
         * @type {string || null}
         */
        this.Lon = null;

        /**
         * 设备型号(MI 6)
         * @type {string || null}
         */
        this.DeviceModel = null;

        /**
         * 竞价底价
         * @type {number || null}
         */
        this.BidFloor = null;

        /**
         * 年龄
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 性别(1.MALE 2.FEMALE)
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 用户地址
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 投放模式（0=PDB，1=PD，2=RTB，10=其他）
         * @type {number || null}
         */
        this.DeliveryMode = null;

        /**
         * 广告位类型<br />（0=前贴片，1=开屏广告，2=网页头部广告、3=网页中部广告、4=网页底部广告、5=悬浮广告、10=其它）
         * @type {number || null}
         */
        this.AdvertisingType = null;

        /**
         * mac地址，建议提供
         * @type {string || null}
         */
        this.Mac = null;

        /**
         * 电话号码
         * @type {string || null}
         */
        this.Phone = null;

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
        this.Package = null;

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
         * 入网方式(wifi,4g,3g,2g)
         * @type {string || null}
         */
        this.AccessMode = null;

        /**
         * 运营商(1.移动 2.联通 3.电信等)
         * @type {number || null}
         */
        this.Sp = null;

        /**
         * 设备屏幕分辨率宽度像素数
         * @type {number || null}
         */
        this.DeviceW = null;

        /**
         * 设备屏幕分辨率高度像素数
         * @type {number || null}
         */
        this.DeviceH = null;

        /**
         * 是否全屏插广告(0-否，1-是)
         * @type {number || null}
         */
        this.FullScreen = null;

        /**
         * 广告位宽度
         * @type {number || null}
         */
        this.ImpBannerW = null;

        /**
         * 广告位高度
         * @type {number || null}
         */
        this.ImpBannerH = null;

        /**
         * 网址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 上下文信息
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 渠道
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 请求ID
         * @type {string || null}
         */
        this.ReqId = null;

        /**
         * 请求ID的md5值
         * @type {string || null}
         */
        this.ReqMd5 = null;

        /**
         * ad_type
         * @type {number || null}
         */
        this.AdType = null;

        /**
         * app name
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * appVer
         * @type {string || null}
         */
        this.AppVer = null;

        /**
         * 竞价模式1：rtb 2:pd
         * @type {number || null}
         */
        this.ReqType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.ModelIdList = 'ModelIdList' in params ? params.ModelIdList : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Osv = 'Osv' in params ? params.Osv : null;
        this.Lat = 'Lat' in params ? params.Lat : null;
        this.Lon = 'Lon' in params ? params.Lon : null;
        this.DeviceModel = 'DeviceModel' in params ? params.DeviceModel : null;
        this.BidFloor = 'BidFloor' in params ? params.BidFloor : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.DeliveryMode = 'DeliveryMode' in params ? params.DeliveryMode : null;
        this.AdvertisingType = 'AdvertisingType' in params ? params.AdvertisingType : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Ua = 'Ua' in params ? params.Ua : null;
        this.App = 'App' in params ? params.App : null;
        this.Package = 'Package' in params ? params.Package : null;
        this.Maker = 'Maker' in params ? params.Maker : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.AccessMode = 'AccessMode' in params ? params.AccessMode : null;
        this.Sp = 'Sp' in params ? params.Sp : null;
        this.DeviceW = 'DeviceW' in params ? params.DeviceW : null;
        this.DeviceH = 'DeviceH' in params ? params.DeviceH : null;
        this.FullScreen = 'FullScreen' in params ? params.FullScreen : null;
        this.ImpBannerW = 'ImpBannerW' in params ? params.ImpBannerW : null;
        this.ImpBannerH = 'ImpBannerH' in params ? params.ImpBannerH : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.ReqId = 'ReqId' in params ? params.ReqId : null;
        this.ReqMd5 = 'ReqMd5' in params ? params.ReqMd5 : null;
        this.AdType = 'AdType' in params ? params.AdType : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppVer = 'AppVer' in params ? params.AppVer : null;
        this.ReqType = 'ReqType' in params ? params.ReqType : null;

    }
}

/**
 * 流量反欺诈-虚假TA识别
 * @class
 */
class OutputTaData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码[0:成功；非0：失败的错误码]
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 结果数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutputTaValue || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Value) {
            let obj = new OutputTaValue();
            obj.deserialize(params.Value)
            this.Value = obj;
        }

    }
}

/**
 * 流量反欺诈-虚假TA识别
 * @class
 */
class OutputTaValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否查得[0：未查得；1：查得]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsCheck = null;

        /**
         * 是否符合[0：不符合；1：符合]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsMatch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsCheck = 'IsCheck' in params ? params.IsCheck : null;
        this.IsMatch = 'IsMatch' in params ? params.IsMatch : null;

    }
}

/**
 * RecognizePreciseTargetAudience请求参数结构体
 * @class
 */
class RecognizePreciseTargetAudienceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务数据
         * @type {InputRecognizeTargetAudience || null}
         */
        this.BspData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BspData) {
            let obj = new InputRecognizeTargetAudience();
            obj.deserialize(params.BspData)
            this.BspData = obj;
        }

    }
}

/**
 * RecognizeTargetAudience请求参数结构体
 * @class
 */
class RecognizeTargetAudienceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务数据
         * @type {InputRecognizeTargetAudience || null}
         */
        this.BspData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BspData) {
            let obj = new InputRecognizeTargetAudience();
            obj.deserialize(params.BspData)
            this.BspData = obj;
        }

    }
}

/**
 * RecognizePreciseTargetAudience返回参数结构体
 * @class
 */
class RecognizePreciseTargetAudienceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回包数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutputRecognizeTargetAudience || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new OutputRecognizeTargetAudience();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 流量反欺诈-验准返回值
 * @class
 */
class OutputRecognizeTargetAudience extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回码（0，成功，其他失败）
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 返回码对应的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 返回模型结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OutputRecognizeTargetAudienceValue> || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Value) {
            this.Value = new Array();
            for (let z in params.Value) {
                let obj = new OutputRecognizeTargetAudienceValue();
                obj.deserialize(params.Value[z]);
                this.Value.push(obj);
            }
        }

    }
}

/**
 * 业务入参
 * @class
 */
class InputSendTrafficSecuritySmsMsg extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投放任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 手机号码列表（号码量<=200）
         * @type {Array.<string> || null}
         */
        this.Mobiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Mobiles = 'Mobiles' in params ? params.Mobiles : null;

    }
}

module.exports = {
    InputKolDataList: InputKolDataList,
    OutputKolData: OutputKolData,
    InputKolBspData: InputKolBspData,
    EnhanceTaDegreeRequest: EnhanceTaDegreeRequest,
    OutputRecognizeTargetAudienceValue: OutputRecognizeTargetAudienceValue,
    SendTrafficSecuritySmsMessageRequest: SendTrafficSecuritySmsMessageRequest,
    DetectFraudKOLResponse: DetectFraudKOLResponse,
    RecognizeCustomizedAudienceResponse: RecognizeCustomizedAudienceResponse,
    OutputKolValue: OutputKolValue,
    EnhanceTaDegreeResponse: EnhanceTaDegreeResponse,
    InputTaBspData: InputTaBspData,
    OutputSendTrafficSecuritySmsMsg: OutputSendTrafficSecuritySmsMsg,
    SendTrafficSecuritySmsMessageResponse: SendTrafficSecuritySmsMessageResponse,
    DetectFraudKOLRequest: DetectFraudKOLRequest,
    RecognizeCustomizedAudienceRequest: RecognizeCustomizedAudienceRequest,
    RecognizeTargetAudienceResponse: RecognizeTargetAudienceResponse,
    InputRecognizeTargetAudience: InputRecognizeTargetAudience,
    OutputTaData: OutputTaData,
    OutputTaValue: OutputTaValue,
    RecognizePreciseTargetAudienceRequest: RecognizePreciseTargetAudienceRequest,
    RecognizeTargetAudienceRequest: RecognizeTargetAudienceRequest,
    RecognizePreciseTargetAudienceResponse: RecognizePreciseTargetAudienceResponse,
    OutputRecognizeTargetAudience: OutputRecognizeTargetAudience,
    InputSendTrafficSecuritySmsMsg: InputSendTrafficSecuritySmsMsg,

}
