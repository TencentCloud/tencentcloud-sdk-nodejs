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
 * GetToken返回参数结构体
 * @class
 */
class GetTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回token
         * @type {string || null}
         */
        this.Token = null;

        /**
         * 过期时间
         * @type {number || null}
         */
        this.ExpireTime = null;

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
        this.Token = 'Token' in params ? params.Token : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryDevAndRisk请求参数结构体
 * @class
 */
class QueryDevAndRiskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备类型 0表示Android， 1表示IOS
         * @type {number || null}
         */
        this.DevType = null;

        /**
         * Android Imei号
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * Mac地址
         * @type {string || null}
         */
        this.Mac = null;

        /**
         * android  Aid
         * @type {string || null}
         */
        this.Aid = null;

        /**
         * Android Cid
         * @type {string || null}
         */
        this.Cid = null;

        /**
         * 手机Imsi
         * @type {string || null}
         */
        this.Imsi = null;

        /**
         * Df 磁盘分区信息
         * @type {string || null}
         */
        this.Df = null;

        /**
         * 内核版本
         * @type {string || null}
         */
        this.KernelVer = null;

        /**
         * 存储大小
         * @type {string || null}
         */
        this.Storage = null;

        /**
         * 设备驱动指纹
         * @type {string || null}
         */
        this.Dfp = null;

        /**
         * 启动时间
         * @type {string || null}
         */
        this.BootTime = null;

        /**
         * 分辨率 水平*垂直 格式
         * @type {string || null}
         */
        this.Resolution = null;

        /**
         * 铃声列表
         * @type {string || null}
         */
        this.RingList = null;

        /**
         * 字体列表
         * @type {string || null}
         */
        this.FontList = null;

        /**
         * 传感器列表
         * @type {string || null}
         */
        this.SensorList = null;

        /**
         * CPU型号
         * @type {string || null}
         */
        this.CpuType = null;

        /**
         * 电池容量
         * @type {string || null}
         */
        this.Battery = null;

        /**
         * 信通院广告ID
         * @type {string || null}
         */
        this.Oaid = null;

        /**
         * IOS 广告ID
         * @type {string || null}
         */
        this.Idfa = null;

        /**
         * IOS 应用ID
         * @type {string || null}
         */
        this.Idfv = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * IOS手机型号
         * @type {string || null}
         */
        this.IphoneModel = null;

        /**
         * Android 指纹
         * @type {string || null}
         */
        this.Fingerprint = null;

        /**
         * Android序列号
         * @type {string || null}
         */
        this.SerialId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DevType = 'DevType' in params ? params.DevType : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
        this.Aid = 'Aid' in params ? params.Aid : null;
        this.Cid = 'Cid' in params ? params.Cid : null;
        this.Imsi = 'Imsi' in params ? params.Imsi : null;
        this.Df = 'Df' in params ? params.Df : null;
        this.KernelVer = 'KernelVer' in params ? params.KernelVer : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Dfp = 'Dfp' in params ? params.Dfp : null;
        this.BootTime = 'BootTime' in params ? params.BootTime : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.RingList = 'RingList' in params ? params.RingList : null;
        this.FontList = 'FontList' in params ? params.FontList : null;
        this.SensorList = 'SensorList' in params ? params.SensorList : null;
        this.CpuType = 'CpuType' in params ? params.CpuType : null;
        this.Battery = 'Battery' in params ? params.Battery : null;
        this.Oaid = 'Oaid' in params ? params.Oaid : null;
        this.Idfa = 'Idfa' in params ? params.Idfa : null;
        this.Idfv = 'Idfv' in params ? params.Idfv : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.IphoneModel = 'IphoneModel' in params ? params.IphoneModel : null;
        this.Fingerprint = 'Fingerprint' in params ? params.Fingerprint : null;
        this.SerialId = 'SerialId' in params ? params.SerialId : null;

    }
}

/**
 * 设备信息
 * @class
 */
class DevInfoQ extends  AbstractModel {
    constructor(){
        super();

        /**
         * devid
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 风险值
         * @type {number || null}
         */
        this.RiskScore = null;

        /**
         * 风险详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RiskDetail> || null}
         */
        this.RiskInfo = null;

        /**
         * 概率值
         * @type {number || null}
         */
        this.Probability = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.RiskScore = 'RiskScore' in params ? params.RiskScore : null;

        if (params.RiskInfo) {
            this.RiskInfo = new Array();
            for (let z in params.RiskInfo) {
                let obj = new RiskDetail();
                obj.deserialize(params.RiskInfo[z]);
                this.RiskInfo.push(obj);
            }
        }
        this.Probability = 'Probability' in params ? params.Probability : null;

    }
}

/**
 * 风险详情
 * @class
 */
class RiskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 风险码
         * @type {number || null}
         */
        this.RiskCode = null;

        /**
         * 风险详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskCodeValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RiskCode = 'RiskCode' in params ? params.RiskCode : null;
        this.RiskCodeValue = 'RiskCodeValue' in params ? params.RiskCodeValue : null;

    }
}

/**
 * 风险信息
 * @class
 */
class RiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 风险码
         * @type {number || null}
         */
        this.Key = null;

        /**
         * 风险详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * GetOpenId请求参数结构体
 * @class
 */
class GetOpenIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * dev临时token，通过sdk接口获取
         * @type {string || null}
         */
        this.DeviceToken = null;

        /**
         * 业务ID
         * @type {number || null}
         */
        this.BusinessId = null;

        /**
         * 业务侧账号体系下的用户ID
         * @type {string || null}
         */
        this.BusinessUserId = null;

        /**
         * 平台：0-Android， 1-iOS， 2-web
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * 选项
         * @type {string || null}
         */
        this.Option = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceToken = 'DeviceToken' in params ? params.DeviceToken : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.BusinessUserId = 'BusinessUserId' in params ? params.BusinessUserId : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Option = 'Option' in params ? params.Option : null;

    }
}

/**
 * QueryDevAndRisk返回参数结构体
 * @class
 */
class QueryDevAndRiskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否查得
         * @type {number || null}
         */
        this.Found = null;

        /**
         * 匹配数量级别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AllCnt = null;

        /**
         * 匹配到的设备信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DevInfoQ> || null}
         */
        this.Matches = null;

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
        this.Found = 'Found' in params ? params.Found : null;
        this.AllCnt = 'AllCnt' in params ? params.AllCnt : null;

        if (params.Matches) {
            this.Matches = new Array();
            for (let z in params.Matches) {
                let obj = new DevInfoQ();
                obj.deserialize(params.Matches[z]);
                this.Matches.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetToken请求参数结构体
 * @class
 */
class GetTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务ID
         * @type {number || null}
         */
        this.BusinessId = null;

        /**
         * 业务子场景
         * @type {number || null}
         */
        this.Scene = null;

        /**
         * 业务侧账号体系下的用户ID
         * @type {string || null}
         */
        this.BusinessUserId = null;

        /**
         * 用户侧的IP
         * @type {string || null}
         */
        this.AppClientIp = null;

        /**
         * 过期时间
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 上一个token
         * @type {string || null}
         */
        this.OldToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.BusinessUserId = 'BusinessUserId' in params ? params.BusinessUserId : null;
        this.AppClientIp = 'AppClientIp' in params ? params.AppClientIp : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.OldToken = 'OldToken' in params ? params.OldToken : null;

    }
}

/**
 * GetOpenId返回参数结构体
 * @class
 */
class GetOpenIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 设备风险
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RiskInfo> || null}
         */
        this.RiskInfo = null;

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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;

        if (params.RiskInfo) {
            this.RiskInfo = new Array();
            for (let z in params.RiskInfo) {
                let obj = new RiskInfo();
                obj.deserialize(params.RiskInfo[z]);
                this.RiskInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    GetTokenResponse: GetTokenResponse,
    QueryDevAndRiskRequest: QueryDevAndRiskRequest,
    DevInfoQ: DevInfoQ,
    RiskDetail: RiskDetail,
    RiskInfo: RiskInfo,
    GetOpenIdRequest: GetOpenIdRequest,
    QueryDevAndRiskResponse: QueryDevAndRiskResponse,
    GetTokenRequest: GetTokenRequest,
    GetOpenIdResponse: GetOpenIdResponse,

}
