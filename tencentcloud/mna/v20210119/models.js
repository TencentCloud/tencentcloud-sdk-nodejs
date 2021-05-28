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
 * 接口能力扩展，用于填充电信的加速Token，并为未来参数提供兼容空间
 * @class
 */
class Capacity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电信鉴权的Token。要加速的电信手机终端访问 http://qos.189.cn/qos-api/getToken?appid=TencentCloud 页面，获取返回结果中result的值
         * @type {string || null}
         */
        this.CTCCToken = null;

        /**
         * 终端所处在的省份，建议不填写由服务端自动获取，若需填写请填写带有省、市、自治区、特别行政区等后缀的省份中文全称
         * @type {string || null}
         */
        this.Province = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CTCCToken = 'CTCCToken' in params ? params.CTCCToken : null;
        this.Province = 'Province' in params ? params.Province : null;

    }
}

/**
 * 移动网络加速目标地址结构体
 * @class
 */
class DestAddressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加速业务目标 ip 地址数组
         * @type {Array.<string> || null}
         */
        this.DestIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DestIp = 'DestIp' in params ? params.DestIp : null;

    }
}

/**
 * DeleteQos请求参数结构体
 * @class
 */
class DeleteQosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单次加速唯一 Id
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * 设备信息结构体
 * @class
 */
class DeviceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运营商
1：移动 
2：电信
3：联通
4：广电
99：其他
         * @type {number || null}
         */
        this.Vendor = null;

        /**
         * 设备操作系统：
1：Android
2： IOS
99：其他
         * @type {number || null}
         */
        this.OS = null;

        /**
         * 设备唯一标识
IOS 填写 IDFV
Android 填写 IMEI
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 用户手机号码
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * 无线信息
1：4G
2：5G
3：WIFI
99：其他
         * @type {number || null}
         */
        this.Wireless = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Vendor = 'Vendor' in params ? params.Vendor : null;
        this.OS = 'OS' in params ? params.OS : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.Wireless = 'Wireless' in params ? params.Wireless : null;

    }
}

/**
 * DeleteQos返回参数结构体
 * @class
 */
class DeleteQosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单次加速唯一 Id
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 本次加速会话持续时间（单位秒）
         * @type {number || null}
         */
        this.Duration = null;

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
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateQos返回参数结构体
 * @class
 */
class CreateQosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单次加速唯一 Id
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 当前加速剩余时长（单位秒）
         * @type {number || null}
         */
        this.Duration = null;

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
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 移动网络加速源地址结构体
 * @class
 */
class SrcAddressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户私网 ipv4 地址
         * @type {string || null}
         */
        this.SrcIpv4 = null;

        /**
         * 用户公网 ipv4 地址
         * @type {string || null}
         */
        this.SrcPublicIpv4 = null;

        /**
         * 用户 ipv6 地址
         * @type {string || null}
         */
        this.SrcIpv6 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcIpv4 = 'SrcIpv4' in params ? params.SrcIpv4 : null;
        this.SrcPublicIpv4 = 'SrcPublicIpv4' in params ? params.SrcPublicIpv4 : null;
        this.SrcIpv6 = 'SrcIpv6' in params ? params.SrcIpv6 : null;

    }
}

/**
 * CreateQos请求参数结构体
 * @class
 */
class CreateQosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加速业务源地址信息，SrcIpv6和（SrcIpv4+SrcPublicIpv4）二选一，目前Ipv6不可用，全部填写以Ipv4参数为准。
         * @type {SrcAddressInfo || null}
         */
        this.SrcAddressInfo = null;

        /**
         * 加速业务目标地址信息
         * @type {DestAddressInfo || null}
         */
        this.DestAddressInfo = null;

        /**
         * 加速套餐
T100K：上/下行保障 100kbps
T200K：上/下行保障 200kbps
T400K：上/下行保障 400kbps
BD1M：下行带宽保障1Mbps
BD2M：下行带宽保障2Mbps
BD4M：下行带宽保障4Mbps
BU1M：上行带宽保障1Mbps
BU2M：上行带宽保障2Mbps
BU4M：上行带宽保障4Mbps
         * @type {string || null}
         */
        this.QosMenu = null;

        /**
         * 申请加速的设备信息，包括运营商，操作系统，设备唯一标识等。
         * @type {DeviceInfo || null}
         */
        this.DeviceInfo = null;

        /**
         * 期望加速时长（单位分钟），默认值30分钟
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 接口能力扩展，如果是电信用户，必须填充CTCC Token字段
         * @type {Capacity || null}
         */
        this.Capacity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SrcAddressInfo) {
            let obj = new SrcAddressInfo();
            obj.deserialize(params.SrcAddressInfo)
            this.SrcAddressInfo = obj;
        }

        if (params.DestAddressInfo) {
            let obj = new DestAddressInfo();
            obj.deserialize(params.DestAddressInfo)
            this.DestAddressInfo = obj;
        }
        this.QosMenu = 'QosMenu' in params ? params.QosMenu : null;

        if (params.DeviceInfo) {
            let obj = new DeviceInfo();
            obj.deserialize(params.DeviceInfo)
            this.DeviceInfo = obj;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.Capacity) {
            let obj = new Capacity();
            obj.deserialize(params.Capacity)
            this.Capacity = obj;
        }

    }
}

module.exports = {
    Capacity: Capacity,
    DestAddressInfo: DestAddressInfo,
    DeleteQosRequest: DeleteQosRequest,
    DeviceInfo: DeviceInfo,
    DeleteQosResponse: DeleteQosResponse,
    CreateQosResponse: CreateQosResponse,
    SrcAddressInfo: SrcAddressInfo,
    CreateQosRequest: CreateQosRequest,

}
