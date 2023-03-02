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
 * 设备流量信息
 * @class
 */
class FlowDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量数据点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NetDetails> || null}
         */
        this.NetDetails = null;

        /**
         * 设备ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 流量最大值（单位：bytes）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxValue = null;

        /**
         * 流量平均值（单位：bytes）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AvgValue = null;

        /**
         * 流量总值（单位：bytes）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NetDetails) {
            this.NetDetails = new Array();
            for (let z in params.NetDetails) {
                let obj = new NetDetails();
                obj.deserialize(params.NetDetails[z]);
                this.NetDetails.push(obj);
            }
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.MaxValue = 'MaxValue' in params ? params.MaxValue : null;
        this.AvgValue = 'AvgValue' in params ? params.AvgValue : null;
        this.TotalValue = 'TotalValue' in params ? params.TotalValue : null;

    }
}

/**
 * GetDevice返回参数结构体
 * @class
 */
class GetDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备详细信息
         * @type {DeviceDetails || null}
         */
        this.DeviceDetails = null;

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

        if (params.DeviceDetails) {
            let obj = new DeviceDetails();
            obj.deserialize(params.DeviceDetails)
            this.DeviceDetails = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetFlowStatistic返回参数结构体
 * @class
 */
class GetFlowStatisticResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量详细信息
         * @type {Array.<NetDetails> || null}
         */
        this.NetDetails = null;

        /**
         * 查找时间段流量使用最大值（单位：bit）
         * @type {number || null}
         */
        this.MaxValue = null;

        /**
         * 查找时间段流量使用平均值（单位：bit）
         * @type {number || null}
         */
        this.AvgValue = null;

        /**
         * 查找时间段流量使用总量（单位：bit）
         * @type {number || null}
         */
        this.TotalValue = null;

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

        if (params.NetDetails) {
            this.NetDetails = new Array();
            for (let z in params.NetDetails) {
                let obj = new NetDetails();
                obj.deserialize(params.NetDetails[z]);
                this.NetDetails.push(obj);
            }
        }
        this.MaxValue = 'MaxValue' in params ? params.MaxValue : null;
        this.AvgValue = 'AvgValue' in params ? params.AvgValue : null;
        this.TotalValue = 'TotalValue' in params ? params.TotalValue : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

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
 * GetFlowStatistic请求参数结构体
 * @class
 */
class GetFlowStatisticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备ID
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 开始查找时间
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * 截止时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 流量种类（1：上行流量，2：下行流量）
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 时间粒度（1：按小时统计，2：按天统计）
         * @type {number || null}
         */
        this.TimeGranularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TimeGranularity = 'TimeGranularity' in params ? params.TimeGranularity : null;

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
 * 网络详细信息
 * @class
 */
class NetDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量值（bit）
         * @type {number || null}
         */
        this.Current = null;

        /**
         * 时间点，单位：s
         * @type {string || null}
         */
        this.Time = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Current = 'Current' in params ? params.Current : null;
        this.Time = 'Time' in params ? params.Time : null;

    }
}

/**
 * 设备网络状态信息
 * @class
 */
class DeviceNetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络类型：
0:数据
1:Wi-Fi
2:有线
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 启用/禁用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DataEnable = null;

        /**
         * 上行限速
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UploadLimit = null;

        /**
         * 下行限速
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadLimit = null;

        /**
         * 接收实时速率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataRx = null;

        /**
         * 发送实时速率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataTx = null;

        /**
         * 运营商类型：
1: 中国移动；
2: 中国电信; 
3: 中国联通
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Vendor = null;

        /**
         * 连接状态：
0:无连接
1:连接中
2:已连接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.State = null;

        /**
         * 公网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * 信号强度/单位：dbm
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SignalStrength = null;

        /**
         * 数据网络类型：
-1 ：无效值   
2：2G 
3：3G 
4：4G 
5：5G
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Rat = null;

        /**
         * 网卡名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NetInfoName = null;

        /**
         * 下行实时速率（浮点数类型代替上一版本DataRx的整型）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DownRate = null;

        /**
         * 上行实时速率（浮点数类型代替上一版本TxRate的整型）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.DataEnable = 'DataEnable' in params ? params.DataEnable : null;
        this.UploadLimit = 'UploadLimit' in params ? params.UploadLimit : null;
        this.DownloadLimit = 'DownloadLimit' in params ? params.DownloadLimit : null;
        this.DataRx = 'DataRx' in params ? params.DataRx : null;
        this.DataTx = 'DataTx' in params ? params.DataTx : null;
        this.Vendor = 'Vendor' in params ? params.Vendor : null;
        this.State = 'State' in params ? params.State : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.SignalStrength = 'SignalStrength' in params ? params.SignalStrength : null;
        this.Rat = 'Rat' in params ? params.Rat : null;
        this.NetInfoName = 'NetInfoName' in params ? params.NetInfoName : null;
        this.DownRate = 'DownRate' in params ? params.DownRate : null;
        this.UpRate = 'UpRate' in params ? params.UpRate : null;

    }
}

/**
 * GetMultiFlowStatistic返回参数结构体
 * @class
 */
class GetMultiFlowStatisticResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量设备流量信息
         * @type {Array.<FlowDetails> || null}
         */
        this.FlowDetails = null;

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

        if (params.FlowDetails) {
            this.FlowDetails = new Array();
            for (let z in params.FlowDetails) {
                let obj = new FlowDetails();
                obj.deserialize(params.FlowDetails[z]);
                this.FlowDetails.push(obj);
            }
        }
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
 * 更新设备网络状态信息
 * @class
 */
class UpdateNetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络类型：
0:数据
1:Wi-Fi
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 启用/禁用
         * @type {boolean || null}
         */
        this.DataEnable = null;

        /**
         * 上行限速：bit
         * @type {number || null}
         */
        this.UploadLimit = null;

        /**
         * 下行限速：bit
         * @type {number || null}
         */
        this.DownloadLimit = null;

        /**
         * 网卡名
         * @type {string || null}
         */
        this.NetInfoName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.DataEnable = 'DataEnable' in params ? params.DataEnable : null;
        this.UploadLimit = 'UploadLimit' in params ? params.UploadLimit : null;
        this.DownloadLimit = 'DownloadLimit' in params ? params.DownloadLimit : null;
        this.NetInfoName = 'NetInfoName' in params ? params.NetInfoName : null;

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
 * CreateEncryptedKey请求参数结构体
 * @class
 */
class CreateEncryptedKeyRequest extends  AbstractModel {
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
 * DeleteDevice请求参数结构体
 * @class
 */
class DeleteDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除设备的唯一ID
         * @type {string || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * CreateEncryptedKey返回参数结构体
 * @class
 */
class CreateEncryptedKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预置密钥
         * @type {string || null}
         */
        this.EncryptedKey = null;

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
        this.EncryptedKey = 'EncryptedKey' in params ? params.EncryptedKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateDevice返回参数结构体
 * @class
 */
class UpdateDeviceResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备详细信息
 * @class
 */
class DeviceDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备基本信息
         * @type {DeviceBaseInfo || null}
         */
        this.DeviceBaseInfo = null;

        /**
         * 设备网络信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeviceNetInfo> || null}
         */
        this.DeviceNetInfo = null;

        /**
         * 聚合服务器地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GatewaySite = null;

        /**
         * 业务下行速率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BusinessDownRate = null;

        /**
         * 业务上行速率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BusinessUpRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeviceBaseInfo) {
            let obj = new DeviceBaseInfo();
            obj.deserialize(params.DeviceBaseInfo)
            this.DeviceBaseInfo = obj;
        }

        if (params.DeviceNetInfo) {
            this.DeviceNetInfo = new Array();
            for (let z in params.DeviceNetInfo) {
                let obj = new DeviceNetInfo();
                obj.deserialize(params.DeviceNetInfo[z]);
                this.DeviceNetInfo.push(obj);
            }
        }
        this.GatewaySite = 'GatewaySite' in params ? params.GatewaySite : null;
        this.BusinessDownRate = 'BusinessDownRate' in params ? params.BusinessDownRate : null;
        this.BusinessUpRate = 'BusinessUpRate' in params ? params.BusinessUpRate : null;

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

/**
 * GetStatisticData请求参数结构体
 * @class
 */
class GetStatisticDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备ID
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 统计开始时间，单位：s
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * 统计结束时间，单位：s
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 聚合粒度：
1:按小时统计
2:按天统计
         * @type {number || null}
         */
        this.TimeGranularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TimeGranularity = 'TimeGranularity' in params ? params.TimeGranularity : null;

    }
}

/**
 * UpdateDevice请求参数结构体
 * @class
 */
class UpdateDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备id
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 更新设备网络信息
         * @type {Array.<UpdateNetInfo> || null}
         */
        this.UpdateNetInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.UpdateNetInfo) {
            this.UpdateNetInfo = new Array();
            for (let z in params.UpdateNetInfo) {
                let obj = new UpdateNetInfo();
                obj.deserialize(params.UpdateNetInfo[z]);
                this.UpdateNetInfo.push(obj);
            }
        }

    }
}

/**
 * GetPublicKey返回参数结构体
 * @class
 */
class GetPublicKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 非对称公钥
         * @type {string || null}
         */
        this.PublicKey = null;

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
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetMultiFlowStatistic请求参数结构体
 * @class
 */
class GetMultiFlowStatisticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备id列表，单次最多请求10个设备
         * @type {Array.<string> || null}
         */
        this.DeviceIds = null;

        /**
         * 1659514436
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * 1659515000
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 统计流量类型（1：上行流量，2：下行流量）
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 统计时间粒度（1：按小时统计，2：按天统计）
         * @type {number || null}
         */
        this.TimeGranularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceIds = 'DeviceIds' in params ? params.DeviceIds : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TimeGranularity = 'TimeGranularity' in params ? params.TimeGranularity : null;

    }
}

/**
 * 设备的基本信息
 * @class
 */
class DeviceBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一ID
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备创建的时间，单位：ms
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 设备最后在线时间，单位：ms
         * @type {string || null}
         */
        this.LastTime = null;

        /**
         * 设备的备注
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

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
 * AddDevice返回参数结构体
 * @class
 */
class AddDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 经过加密算法加密后的base64格式密钥
         * @type {string || null}
         */
        this.DataKey = null;

        /**
         * 设备ID
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 签名字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Signature = null;

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
        this.DataKey = 'DataKey' in params ? params.DataKey : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.Signature = 'Signature' in params ? params.Signature : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDevice请求参数结构体
 * @class
 */
class GetDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索指定设备的id
         * @type {string || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * GetDevices返回参数结构体
 * @class
 */
class GetDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备信息列表
         * @type {Array.<DeviceBaseInfo> || null}
         */
        this.DeviceInfos = null;

        /**
         * 设备总记录条数
         * @type {number || null}
         */
        this.Length = null;

        /**
         * 总页数
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.DeviceInfos) {
            this.DeviceInfos = new Array();
            for (let z in params.DeviceInfos) {
                let obj = new DeviceBaseInfo();
                obj.deserialize(params.DeviceInfos[z]);
                this.DeviceInfos.push(obj);
            }
        }
        this.Length = 'Length' in params ? params.Length : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteDevice返回参数结构体
 * @class
 */
class DeleteDeviceResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetStatisticData返回参数结构体
 * @class
 */
class GetStatisticDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件地址url
         * @type {string || null}
         */
        this.FilePath = null;

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
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * GetDevices请求参数结构体
 * @class
 */
class GetDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每页显示记录数，PageSize、PageNumber值均为-1 时，按照1页无限制条数匹配所有设备
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 当前查看页码，PageSize、PageNumber值均为-1 时，按照1页无限制条数匹配所有设备
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 搜索设备的关键字（ID或者设备名），为空时匹配所有设备
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * AddDevice请求参数结构体
 * @class
 */
class AddDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新建设备的名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 新建设备的备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 新建设备的base64密钥字符串，非必选，如果不填写则由系统自动生成
         * @type {string || null}
         */
        this.DataKey = null;

        /**
         * 是否设置预置密钥
         * @type {boolean || null}
         */
        this.Encrypted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.DataKey = 'DataKey' in params ? params.DataKey : null;
        this.Encrypted = 'Encrypted' in params ? params.Encrypted : null;

    }
}

/**
 * GetPublicKey请求参数结构体
 * @class
 */
class GetPublicKeyRequest extends  AbstractModel {
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

module.exports = {
    FlowDetails: FlowDetails,
    GetDeviceResponse: GetDeviceResponse,
    GetFlowStatisticResponse: GetFlowStatisticResponse,
    Capacity: Capacity,
    GetFlowStatisticRequest: GetFlowStatisticRequest,
    DestAddressInfo: DestAddressInfo,
    DeleteQosRequest: DeleteQosRequest,
    NetDetails: NetDetails,
    DeviceNetInfo: DeviceNetInfo,
    GetMultiFlowStatisticResponse: GetMultiFlowStatisticResponse,
    SrcAddressInfo: SrcAddressInfo,
    UpdateNetInfo: UpdateNetInfo,
    CreateQosResponse: CreateQosResponse,
    DescribeQosResponse: DescribeQosResponse,
    CreateEncryptedKeyRequest: CreateEncryptedKeyRequest,
    DeleteDeviceRequest: DeleteDeviceRequest,
    CreateEncryptedKeyResponse: CreateEncryptedKeyResponse,
    UpdateDeviceResponse: UpdateDeviceResponse,
    DeviceDetails: DeviceDetails,
    CreateQosRequest: CreateQosRequest,
    GetStatisticDataRequest: GetStatisticDataRequest,
    UpdateDeviceRequest: UpdateDeviceRequest,
    GetPublicKeyResponse: GetPublicKeyResponse,
    GetMultiFlowStatisticRequest: GetMultiFlowStatisticRequest,
    DeviceBaseInfo: DeviceBaseInfo,
    ExpectedThreshold: ExpectedThreshold,
    DeleteQosResponse: DeleteQosResponse,
    Context: Context,
    AddDeviceResponse: AddDeviceResponse,
    GetDeviceRequest: GetDeviceRequest,
    GetDevicesResponse: GetDevicesResponse,
    DescribeQosRequest: DescribeQosRequest,
    NetworkData: NetworkData,
    DeleteDeviceResponse: DeleteDeviceResponse,
    GetStatisticDataResponse: GetStatisticDataResponse,
    DeviceInfo: DeviceInfo,
    GetDevicesRequest: GetDevicesRequest,
    AddDeviceRequest: AddDeviceRequest,
    GetPublicKeyRequest: GetPublicKeyRequest,

}
