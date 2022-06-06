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
 * DescribeQos请求参数结构体
 * @class
 */
class DescribeQosRequest extends  AbstractModel {
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
 * 测速数据
 * @class
 */
class NetworkData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时延数组，最大长度30
         * @type {Array.<number> || null}
         */
        this.RTT = null;

        /**
         * 丢包率
         * @type {number || null}
         */
        this.Loss = null;

        /**
         * 抖动
         * @type {number || null}
         */
        this.Jitter = null;

        /**
         * 10位秒级时间戳
         * @type {number || null}
         */
        this.Timestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RTT = 'RTT' in params ? params.RTT : null;
        this.Loss = 'Loss' in params ? params.Loss : null;
        this.Jitter = 'Jitter' in params ? params.Jitter : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

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
 * 用户期望门限
 * @class
 */
class ExpectedThreshold extends  AbstractModel {
    constructor(){
        super();

        /**
         * 期望发起加速的时延阈值
         * @type {number || null}
         */
        this.RTT = null;

        /**
         * 期望发起加速的丢包率阈值
         * @type {number || null}
         */
        this.Loss = null;

        /**
         * 期望发起加速的抖动阈值
         * @type {number || null}
         */
        this.Jitter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RTT = 'RTT' in params ? params.RTT : null;
        this.Loss = 'Loss' in params ? params.Loss : null;
        this.Jitter = 'Jitter' in params ? params.Jitter : null;

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
 * 加速策略关键数据
 * @class
 */
class Context extends  AbstractModel {
    constructor(){
        super();

        /**
         * 测速数据
         * @type {NetworkData || null}
         */
        this.NetworkData = null;

        /**
         * 用户期望最低门限
         * @type {ExpectedThreshold || null}
         */
        this.ExpectedLowThreshold = null;

        /**
         * 用户期望最高门限
         * @type {ExpectedThreshold || null}
         */
        this.ExpectedHighThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NetworkData) {
            let obj = new NetworkData();
            obj.deserialize(params.NetworkData)
            this.NetworkData = obj;
        }

        if (params.ExpectedLowThreshold) {
            let obj = new ExpectedThreshold();
            obj.deserialize(params.ExpectedLowThreshold)
            this.ExpectedLowThreshold = obj;
        }

        if (params.ExpectedHighThreshold) {
            let obj = new ExpectedThreshold();
            obj.deserialize(params.ExpectedHighThreshold)
            this.ExpectedHighThreshold = obj;
        }

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
 * DescribeQos返回参数结构体
 * @class
 */
class DescribeQosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：无匹配的加速中会话
1：存在匹配的加速中会话
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 手机公网出口IP，仅匹配时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SrcPublicIpv4 = null;

        /**
         * 业务访问目的IP，仅匹配时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DestIpv4 = null;

        /**
         * 当前加速剩余时长（单位秒）有，仅匹配时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 加速套餐类型，仅匹配时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.QosMenu = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.SrcPublicIpv4 = 'SrcPublicIpv4' in params ? params.SrcPublicIpv4 : null;
        this.DestIpv4 = 'DestIpv4' in params ? params.DestIpv4 : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.QosMenu = 'QosMenu' in params ? params.QosMenu : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
T100K：时延性保障 + 带宽保障上下行保障 100kbps
T200K：时延性保障 + 带宽保障上下行保障 200kbps
T400K：时延性保障 + 带宽保障上下行保障  400kbps
BD1M：带宽型保障 + 下行带宽保障1Mbps
BD2M：带宽型保障 + 下行带宽保障2Mbps
BD4M：带宽型保障 + 下行带宽保障4Mbps
BU1M：带宽型保障 + 上行带宽保障1Mbps
BU2M：带宽型保障 + 上行带宽保障2Mbps
BU4M：带宽型保障 + 上行带宽保障4Mbps
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

        /**
         * 应用模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 针对特殊协议进行加速
1. IP （默认值）
2. UDP
3. TCP
         * @type {number || null}
         */
        this.Protocol = null;

        /**
         * 加速策略关键数据
         * @type {Context || null}
         */
        this.Context = null;

        /**
         * 签名
         * @type {string || null}
         */
        this.Extern = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.Context) {
            let obj = new Context();
            obj.deserialize(params.Context)
            this.Context = obj;
        }
        this.Extern = 'Extern' in params ? params.Extern : null;

    }
}

module.exports = {
    Capacity: Capacity,
    DescribeQosRequest: DescribeQosRequest,
    DestAddressInfo: DestAddressInfo,
    NetworkData: NetworkData,
    SrcAddressInfo: SrcAddressInfo,
    DeleteQosRequest: DeleteQosRequest,
    DeviceInfo: DeviceInfo,
    ExpectedThreshold: ExpectedThreshold,
    DeleteQosResponse: DeleteQosResponse,
    Context: Context,
    CreateQosResponse: CreateQosResponse,
    DescribeQosResponse: DescribeQosResponse,
    CreateQosRequest: CreateQosRequest,

}
