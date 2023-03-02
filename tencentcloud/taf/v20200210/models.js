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
 * 业务入参
 * @class
 */
class InputBusinessEncryptData extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
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
 * 流量反欺诈-验准入参
 * @class
 */
class InputRecognizeTargetAudience extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型ID列表
         * @type {Array.<number> || null}
         */
        this.ModelIdList = null;

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
         * app名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * app版本描述
         * @type {string || null}
         */
        this.AppVer = null;

        /**
         * 竞价模式1：rtb 2:pd
         * @type {number || null}
         */
        this.ReqType = null;

        /**
         * 用户是否授权,1为授权，0为未授权
         * @type {number || null}
         */
        this.IsAuthorized = null;

        /**
         * 设备信息
         * @type {Array.<Device> || null}
         */
        this.DeviceList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelIdList = 'ModelIdList' in params ? params.ModelIdList : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
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
        this.IsAuthorized = 'IsAuthorized' in params ? params.IsAuthorized : null;

        if (params.DeviceList) {
            this.DeviceList = new Array();
            for (let z in params.DeviceList) {
                let obj = new Device();
                obj.deserialize(params.DeviceList[z]);
                this.DeviceList.push(obj);
            }
        }

    }
}

/**
 * 业务入参
 * @class
 */
class Device extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务入参id
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 业务入参类型
         * @type {number || null}
         */
        this.DeviceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;

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

        /**
         * 业务加密数据
         * @type {InputBusinessEncryptData || null}
         */
        this.BusinessEncryptData = null;

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

        if (params.BusinessEncryptData) {
            let obj = new InputBusinessEncryptData();
            obj.deserialize(params.BusinessEncryptData)
            this.BusinessEncryptData = obj;
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

module.exports = {
    InputBusinessEncryptData: InputBusinessEncryptData,
    RecognizeCustomizedAudienceRequest: RecognizeCustomizedAudienceRequest,
    RecognizeTargetAudienceResponse: RecognizeTargetAudienceResponse,
    OutputRecognizeTargetAudienceValue: OutputRecognizeTargetAudienceValue,
    OutputRecognizeTargetAudience: OutputRecognizeTargetAudience,
    RecognizeCustomizedAudienceResponse: RecognizeCustomizedAudienceResponse,
    InputRecognizeTargetAudience: InputRecognizeTargetAudience,
    Device: Device,
    RecognizePreciseTargetAudienceRequest: RecognizePreciseTargetAudienceRequest,
    RecognizeTargetAudienceRequest: RecognizeTargetAudienceRequest,
    RecognizePreciseTargetAudienceResponse: RecognizePreciseTargetAudienceResponse,

}
