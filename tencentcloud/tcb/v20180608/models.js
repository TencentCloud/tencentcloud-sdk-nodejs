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
 * DescribeEnvLimit返回参数结构体
 * @class
 */
class DescribeEnvLimitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境总数上限
         * @type {number || null}
         */
        this.MaxEnvNum = null;

        /**
         * 目前环境总数
         * @type {number || null}
         */
        this.CurrentEnvNum = null;

        /**
         * 免费环境数量上限
         * @type {number || null}
         */
        this.MaxFreeEnvNum = null;

        /**
         * 目前免费环境数量
         * @type {number || null}
         */
        this.CurrentFreeEnvNum = null;

        /**
         * 总计允许销毁环境次数上限
         * @type {number || null}
         */
        this.MaxDeleteTotal = null;

        /**
         * 目前已销毁环境次数
         * @type {number || null}
         */
        this.CurrentDeleteTotal = null;

        /**
         * 每月允许销毁环境次数上限
         * @type {number || null}
         */
        this.MaxDeleteMonthly = null;

        /**
         * 本月已销毁环境次数
         * @type {number || null}
         */
        this.CurrentDeleteMonthly = null;

        /**
         * 微信网关体验版可购买月份数
         * @type {number || null}
         */
        this.MaxFreeTrialNum = null;

        /**
         * 微信网关体验版已购买月份数
         * @type {number || null}
         */
        this.CurrentFreeTrialNum = null;

        /**
         * 转支付限额总数
         * @type {number || null}
         */
        this.ChangePayTotal = null;

        /**
         * 当前已用转支付次数
         * @type {number || null}
         */
        this.CurrentChangePayTotal = null;

        /**
         * 转支付每月限额
         * @type {number || null}
         */
        this.ChangePayMonthly = null;

        /**
         * 本月已用转支付额度
         * @type {number || null}
         */
        this.CurrentChangePayMonthly = null;

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
        this.MaxEnvNum = 'MaxEnvNum' in params ? params.MaxEnvNum : null;
        this.CurrentEnvNum = 'CurrentEnvNum' in params ? params.CurrentEnvNum : null;
        this.MaxFreeEnvNum = 'MaxFreeEnvNum' in params ? params.MaxFreeEnvNum : null;
        this.CurrentFreeEnvNum = 'CurrentFreeEnvNum' in params ? params.CurrentFreeEnvNum : null;
        this.MaxDeleteTotal = 'MaxDeleteTotal' in params ? params.MaxDeleteTotal : null;
        this.CurrentDeleteTotal = 'CurrentDeleteTotal' in params ? params.CurrentDeleteTotal : null;
        this.MaxDeleteMonthly = 'MaxDeleteMonthly' in params ? params.MaxDeleteMonthly : null;
        this.CurrentDeleteMonthly = 'CurrentDeleteMonthly' in params ? params.CurrentDeleteMonthly : null;
        this.MaxFreeTrialNum = 'MaxFreeTrialNum' in params ? params.MaxFreeTrialNum : null;
        this.CurrentFreeTrialNum = 'CurrentFreeTrialNum' in params ? params.CurrentFreeTrialNum : null;
        this.ChangePayTotal = 'ChangePayTotal' in params ? params.ChangePayTotal : null;
        this.CurrentChangePayTotal = 'CurrentChangePayTotal' in params ? params.CurrentChangePayTotal : null;
        this.ChangePayMonthly = 'ChangePayMonthly' in params ? params.ChangePayMonthly : null;
        this.CurrentChangePayMonthly = 'CurrentChangePayMonthly' in params ? params.CurrentChangePayMonthly : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCloudBaseRunAllVpcs返回参数结构体
 * @class
 */
class DescribeCloudBaseRunAllVpcsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所有vpcid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Vpcs = null;

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
        this.Vpcs = 'Vpcs' in params ? params.Vpcs : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 订单信息
 * @class
 */
class OrderInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
         * @type {string || null}
         */
        this.TranId = null;

        /**
         * 订单要切换的套餐ID
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * 订单类型
<li>1 购买</li>
<li>2 续费</li>
<li>3 变配</li>
         * @type {string || null}
         */
        this.TranType = null;

        /**
         * 订单状态。
<li>1未支付</li>
<li>2 支付中</li>
<li>3 发货中</li>
<li>4 发货成功</li>
<li>5 发货失败</li>
<li>6 已退款</li>
<li>7 已取消</li>
<li>100 已删除</li>
         * @type {string || null}
         */
        this.TranStatus = null;

        /**
         * 订单更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 订单创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 付费模式.
<li>prepayment 预付费</li>
<li>postpaid 后付费</li>
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 订单绑定的扩展ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtensionId = null;

        /**
         * 资源初始化结果(仅当ExtensionId不为空时有效): successful(初始化成功), failed(初始化失败), doing(初始化进行中), init(准备初始化)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceReady = null;

        /**
         * 安装标记。建议使用方统一转大小写之后再判断。
<li>QuickStart：快速启动来源</li>
<li>Activity：活动来源</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Flag = null;

        /**
         * 下单时的参数
         * @type {string || null}
         */
        this.ReqBody = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TranId = 'TranId' in params ? params.TranId : null;
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.TranType = 'TranType' in params ? params.TranType : null;
        this.TranStatus = 'TranStatus' in params ? params.TranStatus : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ExtensionId = 'ExtensionId' in params ? params.ExtensionId : null;
        this.ResourceReady = 'ResourceReady' in params ? params.ResourceReady : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.ReqBody = 'ReqBody' in params ? params.ReqBody : null;

    }
}

/**
 * CheckTcbService返回参数结构体
 * @class
 */
class CheckTcbServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true表示已开通
         * @type {boolean || null}
         */
        this.Initialized = null;

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
        this.Initialized = 'Initialized' in params ? params.Initialized : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCloudBaseRunConfForGateWay请求参数结构体
 * @class
 */
class DescribeCloudBaseRunConfForGateWayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvID = null;

        /**
         * vpc信息
         * @type {string || null}
         */
        this.VpcID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvID = 'EnvID' in params ? params.EnvID : null;
        this.VpcID = 'VpcID' in params ? params.VpcID : null;

    }
}

/**
 * DescribeCloudBaseRunServerVersion请求参数结构体
 * @class
 */
class DescribeCloudBaseRunServerVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名称
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 版本名称
         * @type {string || null}
         */
        this.VersionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;

    }
}

/**
 * TurnOnStandaloneGateway返回参数结构体
 * @class
 */
class TurnOnStandaloneGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 小租户网关开启状态
         * @type {string || null}
         */
        this.Status = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEnvLimit请求参数结构体
 * @class
 */
class DescribeEnvLimitRequest extends  AbstractModel {
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
 * DescribeEnvDealRegion返回参数结构体
 * @class
 */
class DescribeEnvDealRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下单region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 下单zone
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 下单regionId
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 下单zoneId
         * @type {number || null}
         */
        this.ZoneId = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCloudBaseRunServerVersion返回参数结构体
 * @class
 */
class DeleteCloudBaseRunServerVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果，succ为成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchClsLog返回参数结构体
 * @class
 */
class SearchClsLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志内容结果
         * @type {LogResObject || null}
         */
        this.LogResults = null;

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

        if (params.LogResults) {
            let obj = new LogResObject();
            obj.deserialize(params.LogResults)
            this.LogResults = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 独立网关信息
 * @class
 */
class StandaloneGatewayInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 独立网关名称
         * @type {string || null}
         */
        this.GatewayName = null;

        /**
         * CPU核心数
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 内存大小，单位MB
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * 套餐包版本名称
         * @type {string || null}
         */
        this.PackageVersion = null;

        /**
         * 网关别名
         * @type {string || null}
         */
        this.GatewayAlias = null;

        /**
         * 私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID列表
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 网关描述
         * @type {string || null}
         */
        this.GatewayDesc = null;

        /**
         * 网关状态
         * @type {string || null}
         */
        this.GateWayStatus = null;

        /**
         * 服务信息
         * @type {BackendServiceInfo || null}
         */
        this.ServiceInfo = null;

        /**
         * 公网CLBIP
         * @type {string || null}
         */
        this.PublicClbIp = null;

        /**
         * 内网CLBIP
         * @type {string || null}
         */
        this.InternalClbIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayName = 'GatewayName' in params ? params.GatewayName : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.PackageVersion = 'PackageVersion' in params ? params.PackageVersion : null;
        this.GatewayAlias = 'GatewayAlias' in params ? params.GatewayAlias : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.GatewayDesc = 'GatewayDesc' in params ? params.GatewayDesc : null;
        this.GateWayStatus = 'GateWayStatus' in params ? params.GateWayStatus : null;

        if (params.ServiceInfo) {
            let obj = new BackendServiceInfo();
            obj.deserialize(params.ServiceInfo)
            this.ServiceInfo = obj;
        }
        this.PublicClbIp = 'PublicClbIp' in params ? params.PublicClbIp : null;
        this.InternalClbIp = 'InternalClbIp' in params ? params.InternalClbIp : null;

    }
}

/**
 * CloudBaseRun 的 Side 描述定义
 * @class
 */
class CloudBaseRunSideSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器镜像
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerImage = null;

        /**
         * 容器端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ContainerPort = null;

        /**
         * 容器的名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * kv的json字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvVar = null;

        /**
         * InitialDelaySeconds 延迟多长时间启动健康检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InitialDelaySeconds = null;

        /**
         * CPU大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存大小（单位：M）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * 安全特性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CloudBaseSecurityContext || null}
         */
        this.Security = null;

        /**
         * 挂载信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudBaseRunVolumeMount> || null}
         */
        this.VolumeMountInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ContainerImage = 'ContainerImage' in params ? params.ContainerImage : null;
        this.ContainerPort = 'ContainerPort' in params ? params.ContainerPort : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.EnvVar = 'EnvVar' in params ? params.EnvVar : null;
        this.InitialDelaySeconds = 'InitialDelaySeconds' in params ? params.InitialDelaySeconds : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Mem = 'Mem' in params ? params.Mem : null;

        if (params.Security) {
            let obj = new CloudBaseSecurityContext();
            obj.deserialize(params.Security)
            this.Security = obj;
        }

        if (params.VolumeMountInfos) {
            this.VolumeMountInfos = new Array();
            for (let z in params.VolumeMountInfos) {
                let obj = new CloudBaseRunVolumeMount();
                obj.deserialize(params.VolumeMountInfos[z]);
                this.VolumeMountInfos.push(obj);
            }
        }

    }
}

/**
 * CommonServiceAPI返回参数结构体
 * @class
 */
class CommonServiceAPIResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * json格式response
         * @type {string || null}
         */
        this.JSONResp = null;

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
        this.JSONResp = 'JSONResp' in params ? params.JSONResp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStandaloneGateway请求参数结构体
 * @class
 */
class DescribeStandaloneGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 网关名称
         * @type {string || null}
         */
        this.GatewayName = null;

        /**
         * 网关别名
         * @type {string || null}
         */
        this.GatewayAlias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.GatewayName = 'GatewayName' in params ? params.GatewayName : null;
        this.GatewayAlias = 'GatewayAlias' in params ? params.GatewayAlias : null;

    }
}

/**
 * DescribeStandaloneGatewayPackage请求参数结构体
 * @class
 */
class DescribeStandaloneGatewayPackageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 套餐版本，包含starter、basic、advanced、enterprise
         * @type {string || null}
         */
        this.PackageVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.PackageVersion = 'PackageVersion' in params ? params.PackageVersion : null;

    }
}

/**
 * DescribePostpayPackageFreeQuotas请求参数结构体
 * @class
 */
class DescribePostpayPackageFreeQuotasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 免费额度类型标识
         * @type {string || null}
         */
        this.FreeQuotaType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.FreeQuotaType = 'FreeQuotaType' in params ? params.FreeQuotaType : null;

    }
}

/**
 * DescribeEndUserLoginStatistic请求参数结构体
 * @class
 */
class DescribeEndUserLoginStatisticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 终端用户来源
<li> qcloud </li>
<li>miniapp</li>
         * @type {string || null}
         */
        this.Source = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Source = 'Source' in params ? params.Source : null;

    }
}

/**
 * DescribeCloudBaseBuildService返回参数结构体
 * @class
 */
class DescribeCloudBaseBuildServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 上传url
         * @type {string || null}
         */
        this.UploadUrl = null;

        /**
         * 上传heder
         * @type {Array.<KVPair> || null}
         */
        this.UploadHeaders = null;

        /**
         * 包名
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 包版本
         * @type {string || null}
         */
        this.PackageVersion = null;

        /**
         * 下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 下载Httpheader
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KVPair> || null}
         */
        this.DownloadHeaders = null;

        /**
         * 下载链接是否过期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.OutDate = null;

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
        this.UploadUrl = 'UploadUrl' in params ? params.UploadUrl : null;

        if (params.UploadHeaders) {
            this.UploadHeaders = new Array();
            for (let z in params.UploadHeaders) {
                let obj = new KVPair();
                obj.deserialize(params.UploadHeaders[z]);
                this.UploadHeaders.push(obj);
            }
        }
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.PackageVersion = 'PackageVersion' in params ? params.PackageVersion : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;

        if (params.DownloadHeaders) {
            this.DownloadHeaders = new Array();
            for (let z in params.DownloadHeaders) {
                let obj = new KVPair();
                obj.deserialize(params.DownloadHeaders[z]);
                this.DownloadHeaders.push(obj);
            }
        }
        this.OutDate = 'OutDate' in params ? params.OutDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEndUsers请求参数结构体
 * @class
 */
class DescribeEndUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开发者的环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 可选参数，偏移量，默认 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 可选参数，拉取数量，默认 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 按照 uuid 列表过滤，最大个数为100
         * @type {Array.<string> || null}
         */
        this.UUIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.UUIds = 'UUIds' in params ? params.UUIds : null;

    }
}

/**
 * DescribeCloudBaseBuildService请求参数结构体
 * @class
 */
class DescribeCloudBaseBuildServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * build类型,枚举值有: cloudbaserun, framework-ci
         * @type {string || null}
         */
        this.CIBusiness = null;

        /**
         * 服务版本
         * @type {string || null}
         */
        this.ServiceVersion = null;

        /**
         * 文件后缀
         * @type {string || null}
         */
        this.Suffix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.CIBusiness = 'CIBusiness' in params ? params.CIBusiness : null;
        this.ServiceVersion = 'ServiceVersion' in params ? params.ServiceVersion : null;
        this.Suffix = 'Suffix' in params ? params.Suffix : null;

    }
}

/**
 * DescribeCloudBaseRunServerDomainName返回参数结构体
 * @class
 */
class DescribeCloudBaseRunServerDomainNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公网服务域名
         * @type {string || null}
         */
        this.PublicDomain = null;

        /**
         * 内部服务域名
         * @type {string || null}
         */
        this.InternalDomain = null;

        /**
         * 弃用
         * @type {string || null}
         */
        this.DomainName = null;

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
        this.PublicDomain = 'PublicDomain' in params ? params.PublicDomain : null;
        this.InternalDomain = 'InternalDomain' in params ? params.InternalDomain : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CLS日志结果
 * @class
 */
class LogResObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取更多检索结果的游标
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 搜索结果是否已经全部返回
         * @type {boolean || null}
         */
        this.ListOver = null;

        /**
         * 日志内容信息
         * @type {Array.<LogObject> || null}
         */
        this.Results = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Context = 'Context' in params ? params.Context : null;
        this.ListOver = 'ListOver' in params ? params.ListOver : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new LogObject();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }

    }
}

/**
 * DestroyStandaloneGateway请求参数结构体
 * @class
 */
class DestroyStandaloneGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 网名名称
         * @type {string || null}
         */
        this.GatewayName = null;

        /**
         * 是否强制释放
         * @type {boolean || null}
         */
        this.IsForce = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.GatewayName = 'GatewayName' in params ? params.GatewayName : null;
        this.IsForce = 'IsForce' in params ? params.IsForce : null;

    }
}

/**
 * CloudRunServiceSimpleVersionSnapshot 信息
 * @class
 */
class CloudRunServiceSimpleVersionSnapshot extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 版本备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * cpu规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * 最小副本数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinNum = null;

        /**
         * 最大副本数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxNum = null;

        /**
         * 镜像url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 扩容策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 策略阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PolicyThreshold = null;

        /**
         * 环境参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvParams = null;

        /**
         * 容器端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ContainerPort = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 更新类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UploadType = null;

        /**
         * dockerfile路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DockerfilePath = null;

        /**
         * 构建路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BuildDir = null;

        /**
         * repo类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RepoType = null;

        /**
         * 仓库
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Repo = null;

        /**
         * 分支
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Branch = null;

        /**
         * 环境id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * package名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * package版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageVersion = null;

        /**
         * 自定义log路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomLogs = null;

        /**
         * 延时健康检查时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InitialDelaySeconds = null;

        /**
         * snapshot名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * 镜像信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CloudBaseRunImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 代码仓库信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CloudBaseCodeRepoDetail || null}
         */
        this.CodeDetail = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.MinNum = 'MinNum' in params ? params.MinNum : null;
        this.MaxNum = 'MaxNum' in params ? params.MaxNum : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.PolicyThreshold = 'PolicyThreshold' in params ? params.PolicyThreshold : null;
        this.EnvParams = 'EnvParams' in params ? params.EnvParams : null;
        this.ContainerPort = 'ContainerPort' in params ? params.ContainerPort : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.UploadType = 'UploadType' in params ? params.UploadType : null;
        this.DockerfilePath = 'DockerfilePath' in params ? params.DockerfilePath : null;
        this.BuildDir = 'BuildDir' in params ? params.BuildDir : null;
        this.RepoType = 'RepoType' in params ? params.RepoType : null;
        this.Repo = 'Repo' in params ? params.Repo : null;
        this.Branch = 'Branch' in params ? params.Branch : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.PackageVersion = 'PackageVersion' in params ? params.PackageVersion : null;
        this.CustomLogs = 'CustomLogs' in params ? params.CustomLogs : null;
        this.InitialDelaySeconds = 'InitialDelaySeconds' in params ? params.InitialDelaySeconds : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;

        if (params.ImageInfo) {
            let obj = new CloudBaseRunImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }

        if (params.CodeDetail) {
            let obj = new CloudBaseCodeRepoDetail();
            obj.deserialize(params.CodeDetail)
            this.CodeDetail = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateWxCloudBaseRunServerDBCluster返回参数结构体
 * @class
 */
class CreateWxCloudBaseRunServerDBClusterResponse extends  AbstractModel {
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
 * ReplaceActivityRecord返回参数结构体
 * @class
 */
class ReplaceActivityRecordResponse extends  AbstractModel {
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
 * DescribeSpecialCostItems请求参数结构体
 * @class
 */
class DescribeSpecialCostItemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeCloudBaseRunResourceForExtend请求参数结构体
 * @class
 */
class DescribeCloudBaseRunResourceForExtendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * DescribeWxCloudBaseRunSubNets请求参数结构体
 * @class
 */
class DescribeWxCloudBaseRunSubNetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 查询个数限制，不填或小于等于0，等于不限制
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyEndUser请求参数结构体
 * @class
 */
class ModifyEndUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * C端用户端的唯一ID
         * @type {string || null}
         */
        this.UUId = null;

        /**
         * 帐号的状态
<li>ENABLE</li>
<li>DISABLE</li>
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.UUId = 'UUId' in params ? params.UUId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeCurveData返回参数结构体
 * @class
 */
class DescribeCurveDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间, 会根据数据的统计周期进行取整.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间, 会根据数据的统计周期进行取整.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指标名.
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 统计周期(单位秒), 当时间区间为1天内, 统计周期为5分钟; 当时间区间选择为1天以上, 15天以下, 统计周期为1小时; 当时间区间选择为15天以上, 180天以下, 统计周期为1天.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 有效的监控数据, 每个有效监控数据的上报时间可以从时间数组中的对应位置上获取到.
         * @type {Array.<number> || null}
         */
        this.Values = null;

        /**
         * 时间数据, 标识监控数据Values中的点是哪个时间段上报的.
         * @type {Array.<number> || null}
         */
        this.Time = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Values = 'Values' in params ? params.Values : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RollUpdateCloudBaseRunServerVersion返回参数结构体
 * @class
 */
class RollUpdateCloudBaseRunServerVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * succ为成功
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 滚动更新的VersionName
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 操作记录id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RunId = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.RunId = 'RunId' in params ? params.RunId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * cls日志信息
 * @class
 */
class ClsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * cls所属地域
         * @type {string || null}
         */
        this.ClsRegion = null;

        /**
         * cls日志集ID
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * cls日志主题ID
         * @type {string || null}
         */
        this.ClsTopicId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClsRegion = 'ClsRegion' in params ? params.ClsRegion : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeCloudBaseRunOperationTypes请求参数结构体
 * @class
 */
class DescribeCloudBaseRunOperationTypesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名称，精确匹配
         * @type {string || null}
         */
        this.ServerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;

    }
}

/**
 * DescribeAuthDomains返回参数结构体
 * @class
 */
class DescribeAuthDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全域名列表列表
         * @type {Array.<AuthDomain> || null}
         */
        this.Domains = null;

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

        if (params.Domains) {
            this.Domains = new Array();
            for (let z in params.Domains) {
                let obj = new AuthDomain();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCloudBaseRunOneClickTaskExternal请求参数结构体
 * @class
 */
class DescribeCloudBaseRunOneClickTaskExternalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部任务Id 最长64字节
         * @type {string || null}
         */
        this.ExternalId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExternalId = 'ExternalId' in params ? params.ExternalId : null;

    }
}

/**
 * DescribeStandaloneGateway返回参数结构体
 * @class
 */
class DescribeStandaloneGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 独立网关信息列表
         * @type {Array.<StandaloneGatewayInfo> || null}
         */
        this.StandaloneGatewayList = null;

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.StandaloneGatewayList) {
            this.StandaloneGatewayList = new Array();
            for (let z in params.StandaloneGatewayList) {
                let obj = new StandaloneGatewayInfo();
                obj.deserialize(params.StandaloneGatewayList[z]);
                this.StandaloneGatewayList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWxCloudBaseRunEnvs返回参数结构体
 * @class
 */
class DescribeWxCloudBaseRunEnvsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * env列表
         * @type {Array.<EnvInfo> || null}
         */
        this.EnvList = null;

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

        if (params.EnvList) {
            this.EnvList = new Array();
            for (let z in params.EnvList) {
                let obj = new EnvInfo();
                obj.deserialize(params.EnvList[z]);
                this.EnvList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateHostingDomain请求参数结构体
 * @class
 */
class CreateHostingDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 证书ID
         * @type {string || null}
         */
        this.CertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.CertId = 'CertId' in params ? params.CertId : null;

    }
}

/**
 * DescribeCloudBaseRunResource请求参数结构体
 * @class
 */
class DescribeCloudBaseRunResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * DescribeCloudBaseRunServer请求参数结构体
 * @class
 */
class DescribeCloudBaseRunServerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名称
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 分页偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 版本名字（精确匹配）
         * @type {string || null}
         */
        this.VersionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;

    }
}

/**
 * emptydir 数据卷详细信息
 * @class
 */
class CloudBaseRunEmptyDirVolumeSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启用emptydir数据卷
         * @type {boolean || null}
         */
        this.EnableEmptyDirVolume = null;

        /**
         * "","Memory","HugePages"
         * @type {string || null}
         */
        this.Medium = null;

        /**
         * emptydir数据卷大小
         * @type {string || null}
         */
        this.SizeLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableEmptyDirVolume = 'EnableEmptyDirVolume' in params ? params.EnableEmptyDirVolume : null;
        this.Medium = 'Medium' in params ? params.Medium : null;
        this.SizeLimit = 'SizeLimit' in params ? params.SizeLimit : null;

    }
}

/**
 * cfs挂载点
 * @class
 */
class CloudBaseRunVolumeMount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 挂载路径
         * @type {string || null}
         */
        this.MountPath = null;

        /**
         * 是否只读
         * @type {boolean || null}
         */
        this.ReadOnly = null;

        /**
         * Nfs挂载信息
         * @type {Array.<CloudBaseRunNfsVolumeSource> || null}
         */
        this.NfsVolumes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.MountPath = 'MountPath' in params ? params.MountPath : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;

        if (params.NfsVolumes) {
            this.NfsVolumes = new Array();
            for (let z in params.NfsVolumes) {
                let obj = new CloudBaseRunNfsVolumeSource();
                obj.deserialize(params.NfsVolumes[z]);
                this.NfsVolumes.push(obj);
            }
        }

    }
}

/**
 * 网关服务信息
 * @class
 */
class BackendServiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务名称
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * 服务状态
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribePostpayFreeQuotas请求参数结构体
 * @class
 */
class DescribePostpayFreeQuotasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * DescribeActivityInfo返回参数结构体
 * @class
 */
class DescribeActivityInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动详情
         * @type {Array.<ActivityInfoItem> || null}
         */
        this.ActivityInfoList = null;

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

        if (params.ActivityInfoList) {
            this.ActivityInfoList = new Array();
            for (let z in params.ActivityInfoList) {
                let obj = new ActivityInfoItem();
                obj.deserialize(params.ActivityInfoList[z]);
                this.ActivityInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloudBaseRun 镜像信息
 * @class
 */
class CloudBaseRunImageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像仓库名称
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * 是否公有
         * @type {boolean || null}
         */
        this.IsPublic = null;

        /**
         * 镜像tag名称
         * @type {string || null}
         */
        this.TagName = null;

        /**
         * 镜像server
         * @type {string || null}
         */
        this.ServerAddr = null;

        /**
         * 镜像拉取地址
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.IsPublic = 'IsPublic' in params ? params.IsPublic : null;
        this.TagName = 'TagName' in params ? params.TagName : null;
        this.ServerAddr = 'ServerAddr' in params ? params.ServerAddr : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * DestroyStandaloneGateway返回参数结构体
 * @class
 */
class DestroyStandaloneGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除独立网关状态
         * @type {string || null}
         */
        this.Status = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCloudBaseRunServerVersion返回参数结构体
 * @class
 */
class DescribeCloudBaseRunServerVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本名称
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Dockefile的路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DockerfilePath = null;

        /**
         * DockerBuild的目录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BuildDir = null;

        /**
         * 请使用CPUSize
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 请使用MemSize
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * 副本最小值
         * @type {number || null}
         */
        this.MinNum = null;

        /**
         * 副本最大值
         * @type {number || null}
         */
        this.MaxNum = null;

        /**
         * 策略类型
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 策略阈值
         * @type {number || null}
         */
        this.PolicyThreshold = null;

        /**
         * 环境变量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvParams = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 版本的IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionIP = null;

        /**
         * 版本的端口号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VersionPort = null;

        /**
         * 版本状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 代码包的名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 代码版本的名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageVersion = null;

        /**
         * 枚举（package/repository/image)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UploadType = null;

        /**
         * Repo的类型(gitlab/github/coding)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RepoType = null;

        /**
         * 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Repo = null;

        /**
         * 分支
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Branch = null;

        /**
         * 服务名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 是否对于外网开放
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsPublic = null;

        /**
         * vpc id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网实例id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 日志采集路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomLogs = null;

        /**
         * 监听端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ContainerPort = null;

        /**
         * 延迟多长时间开始健康检查（单位s）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InitialDelaySeconds = null;

        /**
         * 镜像地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * CPU 大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CpuSize = null;

        /**
         * MEM 大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 是否有Dockerfile：0-default has, 1-has, 2-has not
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HasDockerfile = null;

        /**
         * 基础镜像
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BaseImage = null;

        /**
         * 容器启动入口命令
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntryPoint = null;

        /**
         * 仓库语言
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RepoLanguage = null;

        /**
         * 自动扩缩容策略组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<HpaPolicy> || null}
         */
        this.PolicyDetail = null;

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
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.DockerfilePath = 'DockerfilePath' in params ? params.DockerfilePath : null;
        this.BuildDir = 'BuildDir' in params ? params.BuildDir : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.MinNum = 'MinNum' in params ? params.MinNum : null;
        this.MaxNum = 'MaxNum' in params ? params.MaxNum : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.PolicyThreshold = 'PolicyThreshold' in params ? params.PolicyThreshold : null;
        this.EnvParams = 'EnvParams' in params ? params.EnvParams : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.VersionIP = 'VersionIP' in params ? params.VersionIP : null;
        this.VersionPort = 'VersionPort' in params ? params.VersionPort : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.PackageVersion = 'PackageVersion' in params ? params.PackageVersion : null;
        this.UploadType = 'UploadType' in params ? params.UploadType : null;
        this.RepoType = 'RepoType' in params ? params.RepoType : null;
        this.Repo = 'Repo' in params ? params.Repo : null;
        this.Branch = 'Branch' in params ? params.Branch : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.IsPublic = 'IsPublic' in params ? params.IsPublic : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.CustomLogs = 'CustomLogs' in params ? params.CustomLogs : null;
        this.ContainerPort = 'ContainerPort' in params ? params.ContainerPort : null;
        this.InitialDelaySeconds = 'InitialDelaySeconds' in params ? params.InitialDelaySeconds : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.CpuSize = 'CpuSize' in params ? params.CpuSize : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.HasDockerfile = 'HasDockerfile' in params ? params.HasDockerfile : null;
        this.BaseImage = 'BaseImage' in params ? params.BaseImage : null;
        this.EntryPoint = 'EntryPoint' in params ? params.EntryPoint : null;
        this.RepoLanguage = 'RepoLanguage' in params ? params.RepoLanguage : null;

        if (params.PolicyDetail) {
            this.PolicyDetail = new Array();
            for (let z in params.PolicyDetail) {
                let obj = new HpaPolicy();
                obj.deserialize(params.PolicyDetail[z]);
                this.PolicyDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 终端用户信息
 * @class
 */
class EndUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户唯一ID
         * @type {string || null}
         */
        this.UUId = null;

        /**
         * 微信ID
         * @type {string || null}
         */
        this.WXOpenId = null;

        /**
         * qq ID
         * @type {string || null}
         */
        this.QQOpenId = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 昵称
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * 性别
         * @type {string || null}
         */
        this.Gender = null;

        /**
         * 头像地址
         * @type {string || null}
         */
        this.AvatarUrl = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 是否为匿名用户
         * @type {boolean || null}
         */
        this.IsAnonymous = null;

        /**
         * 是否禁用账户
         * @type {boolean || null}
         */
        this.IsDisabled = null;

        /**
         * 是否设置过密码
         * @type {boolean || null}
         */
        this.HasPassword = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UUId = 'UUId' in params ? params.UUId : null;
        this.WXOpenId = 'WXOpenId' in params ? params.WXOpenId : null;
        this.QQOpenId = 'QQOpenId' in params ? params.QQOpenId : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.AvatarUrl = 'AvatarUrl' in params ? params.AvatarUrl : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IsAnonymous = 'IsAnonymous' in params ? params.IsAnonymous : null;
        this.IsDisabled = 'IsDisabled' in params ? params.IsDisabled : null;
        this.HasPassword = 'HasPassword' in params ? params.HasPassword : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * DeleteEndUser请求参数结构体
 * @class
 */
class DeleteEndUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 用户列表，每一项都是uuid
         * @type {Array.<string> || null}
         */
        this.UserList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.UserList = 'UserList' in params ? params.UserList : null;

    }
}

/**
 * DescribeHostingDomainTask请求参数结构体
 * @class
 */
class DescribeHostingDomainTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * FreezeCloudBaseRunServers请求参数结构体
 * @class
 */
class FreezeCloudBaseRunServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名列表
         * @type {Array.<string> || null}
         */
        this.ServerNameList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerNameList = 'ServerNameList' in params ? params.ServerNameList : null;

    }
}

/**
 * DescribeQuotaData返回参数结构体
 * @class
 */
class DescribeQuotaDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 指标的值
         * @type {number || null}
         */
        this.Value = null;

        /**
         * 指标的附加值信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubValue = null;

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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.SubValue = 'SubValue' in params ? params.SubValue : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 活动信息
 * @class
 */
class ActivityInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动id
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * 记录插入时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 记录最后一次变更时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 活动开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 活动结束时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 自定义备注信息
         * @type {string || null}
         */
        this.Tag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Tag = 'Tag' in params ? params.Tag : null;

    }
}

/**
 * 键值对
 * @class
 */
class KVPair extends  AbstractModel {
    constructor(){
        super();

        /**
         * 键
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 值
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
 * 短信免费量
 * @class
 */
class SmsFreeQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 免费量总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FreeQuota = null;

        /**
         * 共计已使用总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalUsedQuota = null;

        /**
         * 免费周期起点，0000-00-00 00:00:00 形式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CycleStart = null;

        /**
         * 免费周期终点，0000-00-00 00:00:00 形式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CycleEnd = null;

        /**
         * 今天已使用总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TodayUsedQuota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FreeQuota = 'FreeQuota' in params ? params.FreeQuota : null;
        this.TotalUsedQuota = 'TotalUsedQuota' in params ? params.TotalUsedQuota : null;
        this.CycleStart = 'CycleStart' in params ? params.CycleStart : null;
        this.CycleEnd = 'CycleEnd' in params ? params.CycleEnd : null;
        this.TodayUsedQuota = 'TodayUsedQuota' in params ? params.TodayUsedQuota : null;

    }
}

/**
 * 函数的信息
 * @class
 */
class FunctionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 所属地域。
当前支持ap-shanghai
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * CommonServiceAPI请求参数结构体
 * @class
 */
class CommonServiceAPIRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service名，需要转发访问的接口名
         * @type {string || null}
         */
        this.Service = null;

        /**
         * 需要转发的云API参数，要转成JSON格式
         * @type {string || null}
         */
        this.JSONData = null;

        /**
         * 指定角色
         * @type {string || null}
         */
        this.ApiRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Service = 'Service' in params ? params.Service : null;
        this.JSONData = 'JSONData' in params ? params.JSONData : null;
        this.ApiRole = 'ApiRole' in params ? params.ApiRole : null;

    }
}

/**
 * DestroyStaticStore请求参数结构体
 * @class
 */
class DestroyStaticStoreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * cdn域名
         * @type {string || null}
         */
        this.CdnDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.CdnDomain = 'CdnDomain' in params ? params.CdnDomain : null;

    }
}

/**
 * CreateWxCloudBaseRunEnv请求参数结构体
 * @class
 */
class CreateWxCloudBaseRunEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * wx应用Id
         * @type {string || null}
         */
        this.WxAppId = null;

        /**
         * 环境别名，要以a-z开头，不能包含 a-z,0-9,- 以外的字符
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。
         * @type {string || null}
         */
        this.FreeQuota = null;

        /**
         * 订单标记。建议使用方统一转大小写之后再判断。
QuickStart：快速启动来源
Activity：活动来源
         * @type {string || null}
         */
        this.Flag = null;

        /**
         * 私有网络Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网列表
         * @type {Array.<string> || null}
         */
        this.SubNetIds = null;

        /**
         * 是否打开云调用
         * @type {boolean || null}
         */
        this.IsOpenCloudInvoke = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WxAppId = 'WxAppId' in params ? params.WxAppId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.FreeQuota = 'FreeQuota' in params ? params.FreeQuota : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubNetIds = 'SubNetIds' in params ? params.SubNetIds : null;
        this.IsOpenCloudInvoke = 'IsOpenCloudInvoke' in params ? params.IsOpenCloudInvoke : null;

    }
}

/**
 * ModifyCloudBaseRunServerFlowConf请求参数结构体
 * @class
 */
class ModifyCloudBaseRunServerFlowConfRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名称
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 流量占比
         * @type {Array.<CloudBaseRunVersionFlowItem> || null}
         */
        this.VersionFlowItems = null;

        /**
         * 流量类型（URL_PARAMS / FLOW / HEADERS)
         * @type {string || null}
         */
        this.TrafficType = null;

        /**
         * 操作备注
         * @type {string || null}
         */
        this.OperatorRemark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;

        if (params.VersionFlowItems) {
            this.VersionFlowItems = new Array();
            for (let z in params.VersionFlowItems) {
                let obj = new CloudBaseRunVersionFlowItem();
                obj.deserialize(params.VersionFlowItems[z]);
                this.VersionFlowItems.push(obj);
            }
        }
        this.TrafficType = 'TrafficType' in params ? params.TrafficType : null;
        this.OperatorRemark = 'OperatorRemark' in params ? params.OperatorRemark : null;

    }
}

/**
 * DescribeActivityRecord返回参数结构体
 * @class
 */
class DescribeActivityRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动记录详情
         * @type {Array.<ActivityRecordItem> || null}
         */
        this.ActivityRecords = null;

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

        if (params.ActivityRecords) {
            this.ActivityRecords = new Array();
            for (let z in params.ActivityRecords) {
                let obj = new ActivityRecordItem();
                obj.deserialize(params.ActivityRecords[z]);
                this.ActivityRecords.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateStaticStore请求参数结构体
 * @class
 */
class CreateStaticStoreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 是否启用统一域名
         * @type {boolean || null}
         */
        this.EnableUnion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.EnableUnion = 'EnableUnion' in params ? params.EnableUnion : null;

    }
}

/**
 * CreateWxCloudBaseRunServerDBCluster请求参数结构体
 * @class
 */
class CreateWxCloudBaseRunServerDBClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户密码
         * @type {string || null}
         */
        this.AccountPassword = null;

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 微信appid
         * @type {string || null}
         */
        this.WxAppId = null;

        /**
         * mysql内核版本，支持5.7,8.0
         * @type {string || null}
         */
        this.DbVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountPassword = 'AccountPassword' in params ? params.AccountPassword : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.WxAppId = 'WxAppId' in params ? params.WxAppId : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;

    }
}

/**
 * DeleteCloudBaseProjectLatestVersion返回参数结构体
 * @class
 */
class DeleteCloudBaseProjectLatestVersionResponse extends  AbstractModel {
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
 * CreateAuthDomain返回参数结构体
 * @class
 */
class CreateAuthDomainResponse extends  AbstractModel {
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
 * ModifyDatabaseACL请求参数结构体
 * @class
 */
class ModifyDatabaseACLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 集合名称
         * @type {string || null}
         */
        this.CollectionName = null;

        /**
         * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
         * @type {string || null}
         */
        this.AclTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.CollectionName = 'CollectionName' in params ? params.CollectionName : null;
        this.AclTag = 'AclTag' in params ? params.AclTag : null;

    }
}

/**
 * DescribeEnvs请求参数结构体
 * @class
 */
class DescribeEnvsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID，如果传了这个参数则只返回该环境的相关信息
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 指定Channels字段为可见渠道列表或不可见渠道列表
如只想获取渠道A的环境 就填写IsVisible= true,Channels = ["A"], 过滤渠道A拉取其他渠道环境时填写IsVisible= false,Channels = ["A"]
         * @type {boolean || null}
         */
        this.IsVisible = null;

        /**
         * 渠道列表，代表可见或不可见渠道由IsVisible参数指定
         * @type {Array.<string> || null}
         */
        this.Channels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.IsVisible = 'IsVisible' in params ? params.IsVisible : null;
        this.Channels = 'Channels' in params ? params.Channels : null;

    }
}

/**
 * 版本流量占比
 * @class
 */
class CloudBaseRunVersionFlowItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 流量占比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowRatio = null;

        /**
         * 流量参数键值对（URL参数/HEADERS参数）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ObjectKV || null}
         */
        this.UrlParam = null;

        /**
         * 优先级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 是否是默认兜底版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDefaultPriority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.FlowRatio = 'FlowRatio' in params ? params.FlowRatio : null;

        if (params.UrlParam) {
            let obj = new ObjectKV();
            obj.deserialize(params.UrlParam)
            this.UrlParam = obj;
        }
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.IsDefaultPriority = 'IsDefaultPriority' in params ? params.IsDefaultPriority : null;

    }
}

/**
 * DeleteWxGatewayRoute请求参数结构体
 * @class
 */
class DeleteWxGatewayRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名称
         * @type {string || null}
         */
        this.GatewayRouteName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.GatewayRouteName = 'GatewayRouteName' in params ? params.GatewayRouteName : null;

    }
}

/**
 * DescribeEnvPostpaidDeduct请求参数结构体
 * @class
 */
class DescribeEnvPostpaidDeductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源方列表
         * @type {Array.<string> || null}
         */
        this.ResourceTypes = null;

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceTypes = 'ResourceTypes' in params ? params.ResourceTypes : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeExtraPkgBillingInfo请求参数结构体
 * @class
 */
class DescribeExtraPkgBillingInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已购买增值包的环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * BindEnvGateway返回参数结构体
 * @class
 */
class BindEnvGatewayResponse extends  AbstractModel {
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
 * DescribeWxCloudBaseRunSubNets返回参数结构体
 * @class
 */
class DescribeWxCloudBaseRunSubNetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网Id列表
         * @type {Array.<string> || null}
         */
        this.SubNetIds = null;

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
        this.SubNetIds = 'SubNetIds' in params ? params.SubNetIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEnvFreeQuota请求参数结构体
 * @class
 */
class DescribeEnvFreeQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 资源类型：可选值：CDN, COS, FLEXDB, HOSTING, SCF
不传则返回全部资源指标
         * @type {Array.<string> || null}
         */
        this.ResourceTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ResourceTypes = 'ResourceTypes' in params ? params.ResourceTypes : null;

    }
}

/**
 * cloudrun安全特性能力


 * @class
 */
class CloudBaseCapabilities extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启用安全能力项列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Add = null;

        /**
         * 禁用安全能力向列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Drop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Add = 'Add' in params ? params.Add : null;
        this.Drop = 'Drop' in params ? params.Drop : null;

    }
}

/**
 * DescribeEndUserLoginStatistic返回参数结构体
 * @class
 */
class DescribeEndUserLoginStatisticResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境终端用户新增与登录统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LoginStatistic> || null}
         */
        this.LoginStatistics = null;

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

        if (params.LoginStatistics) {
            this.LoginStatistics = new Array();
            for (let z in params.LoginStatistics) {
                let obj = new LoginStatistic();
                obj.deserialize(params.LoginStatistics[z]);
                this.LoginStatistics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEnvPostpaidDeduct返回参数结构体
 * @class
 */
class DescribeEnvPostpaidDeductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标抵扣详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PostPaidEnvDeductInfo> || null}
         */
        this.PostPaidEnvDeductInfoList = null;

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

        if (params.PostPaidEnvDeductInfoList) {
            this.PostPaidEnvDeductInfoList = new Array();
            for (let z in params.PostPaidEnvDeductInfoList) {
                let obj = new PostPaidEnvDeductInfo();
                obj.deserialize(params.PostPaidEnvDeductInfoList[z]);
                this.PostPaidEnvDeductInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 扩缩容策略
 * @class
 */
class HpaPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 策略阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PolicyThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.PolicyThreshold = 'PolicyThreshold' in params ? params.PolicyThreshold : null;

    }
}

/**
 * ImageSecretInfo的信息
 * @class
 */
class CloudBaseRunImageSecretInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像地址
         * @type {string || null}
         */
        this.RegistryServer = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 仓库密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Email = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryServer = 'RegistryServer' in params ? params.RegistryServer : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Email = 'Email' in params ? params.Email : null;

    }
}

/**
 * CreateCloudBaseRunResource返回参数结构体
 * @class
 */
class CreateCloudBaseRunResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回集群创建是否成功 succ为成功。并且中间无err
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStandaloneGatewayPackage返回参数结构体
 * @class
 */
class DescribeStandaloneGatewayPackageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 套餐详情
         * @type {Array.<StandaloneGatewayPackageInfo> || null}
         */
        this.StandaloneGatewayPackageList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.StandaloneGatewayPackageList) {
            this.StandaloneGatewayPackageList = new Array();
            for (let z in params.StandaloneGatewayPackageList) {
                let obj = new StandaloneGatewayPackageInfo();
                obj.deserialize(params.StandaloneGatewayPackageList[z]);
                this.StandaloneGatewayPackageList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CLS日志单条信息
 * @class
 */
class LogObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志属于的 topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 日志主题的名字
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 日志时间
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * 日志内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 采集路径
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 日志来源设备
         * @type {string || null}
         */
        this.Source = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Source = 'Source' in params ? params.Source : null;

    }
}

/**
 * DestroyStaticStore返回参数结构体
 * @class
 */
class DestroyStaticStoreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 条件任务结果(succ/fail)
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEndUser返回参数结构体
 * @class
 */
class DeleteEndUserResponse extends  AbstractModel {
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
 * ModifyDatabaseACL返回参数结构体
 * @class
 */
class ModifyDatabaseACLResponse extends  AbstractModel {
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
 * es信息
 * @class
 */
class CloudBaseEsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * es的id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * secret名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * ip地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 索引
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Index = null;

        /**
         * 用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Account = null;

        /**
         * 密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Account = 'Account' in params ? params.Account : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * 后付费计费详情
 * @class
 */
class PostPaidEnvDeductInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源方
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 指标名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 按量计费详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResQuota = null;

        /**
         * 资源包抵扣详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PkgQuota = null;

        /**
         * 免费额度抵扣详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FreeQuota = null;

        /**
         * 环境id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.ResQuota = 'ResQuota' in params ? params.ResQuota : null;
        this.PkgQuota = 'PkgQuota' in params ? params.PkgQuota : null;
        this.FreeQuota = 'FreeQuota' in params ? params.FreeQuota : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * ModifyCloudBaseRunServerFlowConf返回参数结构体
 * @class
 */
class ModifyCloudBaseRunServerFlowConfResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果，succ代表成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCloudBaseRunOperationTypes返回参数结构体
 * @class
 */
class DescribeCloudBaseRunOperationTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Action = null;

        /**
         * 服务名列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ServerName = null;

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
        this.Action = 'Action' in params ? params.Action : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 1分钱计费详情
 * @class
 */
class SpecialCostItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 上报日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportDate = null;

        /**
         * 腾讯云uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 资源id:环境id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 上报任务状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReportDate = 'ReportDate' in params ? params.ReportDate : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * EstablishCloudBaseRunServer返回参数结构体
 * @class
 */
class EstablishCloudBaseRunServerResponse extends  AbstractModel {
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
 * 环境信息
 * @class
 */
class EnvInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户下该环境唯一标识
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 环境来源。包含以下取值：
<li>miniapp：微信小程序</li>
<li>qcloud ：腾讯云</li>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 环境别名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最后修改时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 环境状态。包含以下取值：
<li>NORMAL：正常可用</li>
<li>UNAVAILABLE：服务不可用，可能是尚未初始化或者初始化过程中</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 数据库列表
         * @type {Array.<DatabasesInfo> || null}
         */
        this.Databases = null;

        /**
         * 存储列表
         * @type {Array.<StorageInfo> || null}
         */
        this.Storages = null;

        /**
         * 函数列表
         * @type {Array.<FunctionInfo> || null}
         */
        this.Functions = null;

        /**
         * tcb产品套餐ID，参考DescribePackages接口的返回值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * 套餐中文名称，参考DescribePackages接口的返回值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 云日志服务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LogServiceInfo> || null}
         */
        this.LogServices = null;

        /**
         * 静态资源信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StaticStorageInfo> || null}
         */
        this.StaticStorages = null;

        /**
         * 是否到期自动降为免费版
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsAutoDegrade = null;

        /**
         * 环境渠道
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvChannel = null;

        /**
         * 支付方式。包含以下取值：
<li> prepayment：预付费</li>
<li> postpaid：后付费</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 是否为默认环境
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * 环境所属地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 环境标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 自定义日志服务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClsInfo> || null}
         */
        this.CustomLogServices = null;

        /**
         * 环境类型：baas, run, hoting, weda
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * 是否是dau新套餐
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDauPackage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new DatabasesInfo();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }

        if (params.Storages) {
            this.Storages = new Array();
            for (let z in params.Storages) {
                let obj = new StorageInfo();
                obj.deserialize(params.Storages[z]);
                this.Storages.push(obj);
            }
        }

        if (params.Functions) {
            this.Functions = new Array();
            for (let z in params.Functions) {
                let obj = new FunctionInfo();
                obj.deserialize(params.Functions[z]);
                this.Functions.push(obj);
            }
        }
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;

        if (params.LogServices) {
            this.LogServices = new Array();
            for (let z in params.LogServices) {
                let obj = new LogServiceInfo();
                obj.deserialize(params.LogServices[z]);
                this.LogServices.push(obj);
            }
        }

        if (params.StaticStorages) {
            this.StaticStorages = new Array();
            for (let z in params.StaticStorages) {
                let obj = new StaticStorageInfo();
                obj.deserialize(params.StaticStorages[z]);
                this.StaticStorages.push(obj);
            }
        }
        this.IsAutoDegrade = 'IsAutoDegrade' in params ? params.IsAutoDegrade : null;
        this.EnvChannel = 'EnvChannel' in params ? params.EnvChannel : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.Region = 'Region' in params ? params.Region : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.CustomLogServices) {
            this.CustomLogServices = new Array();
            for (let z in params.CustomLogServices) {
                let obj = new ClsInfo();
                obj.deserialize(params.CustomLogServices[z]);
                this.CustomLogServices.push(obj);
            }
        }
        this.EnvType = 'EnvType' in params ? params.EnvType : null;
        this.IsDauPackage = 'IsDauPackage' in params ? params.IsDauPackage : null;

    }
}

/**
 * DestroyEnv请求参数结构体
 * @class
 */
class DestroyEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 针对预付费 删除隔离中的环境时要传true 正常环境直接跳过隔离期删除
         * @type {boolean || null}
         */
        this.IsForce = null;

        /**
         * 是否绕过资源检查，资源包等额外资源，默认为false，如果为true，则不检查资源是否有数据，直接删除。
         * @type {boolean || null}
         */
        this.BypassCheck = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.IsForce = 'IsForce' in params ? params.IsForce : null;
        this.BypassCheck = 'BypassCheck' in params ? params.BypassCheck : null;

    }
}

/**
 * DestroyEnv返回参数结构体
 * @class
 */
class DestroyEnvResponse extends  AbstractModel {
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
 * DescribeCloudBaseProjectVersionList请求参数结构体
 * @class
 */
class DescribeCloudBaseProjectVersionListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 第几页,从0开始
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 起始时间 2021-03-27 12:00:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 终止时间 2021-03-27 12:00:00
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 云开发项目来源
 * @class
 */
class CodeSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型, 可能的枚举: "coding","package","package_url","github","gitlab","gitee","rawcode"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 工作目录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkDir = null;

        /**
         * code包名, type为coding的时候需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CodingPackageName = null;

        /**
         * coding版本名, type为coding的时候需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CodingPackageVersion = null;

        /**
         * 源码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RawCode = null;

        /**
         * 代码分支
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Branch = null;

        /**
         * coding项目ID，type为coding时需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * coding项目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.WorkDir = 'WorkDir' in params ? params.WorkDir : null;
        this.CodingPackageName = 'CodingPackageName' in params ? params.CodingPackageName : null;
        this.CodingPackageVersion = 'CodingPackageVersion' in params ? params.CodingPackageVersion : null;
        this.RawCode = 'RawCode' in params ? params.RawCode : null;
        this.Branch = 'Branch' in params ? params.Branch : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

    }
}

/**
 * DescribeCloudBaseRunOneClickTaskExternal返回参数结构体
 * @class
 */
class DescribeCloudBaseRunOneClickTaskExternalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部任务Id
         * @type {string || null}
         */
        this.ExternalId = null;

        /**
         * 弃用
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 用户uin
         * @type {string || null}
         */
        this.UserUin = null;

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 版本名
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 当前阶段
微信云托管环境创建阶段：envStage
存储资源创建阶段：storageStage
服务创建阶段：serverStage
         * @type {string || null}
         */
        this.Stage = null;

        /**
         * 状态
running
stopped
failed
finished
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 失败原因
         * @type {string || null}
         */
        this.FailReason = null;

        /**
         * 用户envId
         * @type {string || null}
         */
        this.UserEnvId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 步骤信息
         * @type {Array.<OneClickTaskStepInfo> || null}
         */
        this.Steps = null;

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
        this.ExternalId = 'ExternalId' in params ? params.ExternalId : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.UserUin = 'UserUin' in params ? params.UserUin : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Stage = 'Stage' in params ? params.Stage : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FailReason = 'FailReason' in params ? params.FailReason : null;
        this.UserEnvId = 'UserEnvId' in params ? params.UserEnvId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

        if (params.Steps) {
            this.Steps = new Array();
            for (let z in params.Steps) {
                let obj = new OneClickTaskStepInfo();
                obj.deserialize(params.Steps[z]);
                this.Steps.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TurnOffStandaloneGateway返回参数结构体
 * @class
 */
class TurnOffStandaloneGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关闭独立网关状态
         * @type {string || null}
         */
        this.Status = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEnvs返回参数结构体
 * @class
 */
class DescribeEnvsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境信息列表
         * @type {Array.<EnvInfo> || null}
         */
        this.EnvList = null;

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

        if (params.EnvList) {
            this.EnvList = new Array();
            for (let z in params.EnvList) {
                let obj = new EnvInfo();
                obj.deserialize(params.EnvList[z]);
                this.EnvList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAuthDomain请求参数结构体
 * @class
 */
class CreateAuthDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 安全域名
         * @type {Array.<string> || null}
         */
        this.Domains = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

    }
}

/**
 * CreateHostingDomain返回参数结构体
 * @class
 */
class CreateHostingDomainResponse extends  AbstractModel {
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
 * DescribeActivityRecord请求参数结构体
 * @class
 */
class DescribeActivityRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道加密token
         * @type {string || null}
         */
        this.ChannelToken = null;

        /**
         * 渠道来源，每个来源对应不同secretKey
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 活动id列表
         * @type {Array.<number> || null}
         */
        this.ActivityIdList = null;

        /**
         * 过滤状态码，已废弃
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 状态码过滤数组，空数组时不过滤
         * @type {Array.<number> || null}
         */
        this.Statuses = null;

        /**
         * 根据是否软删除进行过滤，[0]未删除, [1] 删除，不传不过滤
         * @type {Array.<number> || null}
         */
        this.IsDeletedList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelToken = 'ChannelToken' in params ? params.ChannelToken : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.ActivityIdList = 'ActivityIdList' in params ? params.ActivityIdList : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Statuses = 'Statuses' in params ? params.Statuses : null;
        this.IsDeletedList = 'IsDeletedList' in params ? params.IsDeletedList : null;

    }
}

/**
 * CreateWxCloudBaseRunEnv返回参数结构体
 * @class
 */
class CreateWxCloudBaseRunEnvResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 后付费订单号
         * @type {string || null}
         */
        this.TranId = null;

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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.TranId = 'TranId' in params ? params.TranId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCloudBaseRunServerVersion请求参数结构体
 * @class
 */
class DeleteCloudBaseRunServerVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名称
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 版本名称
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 是否删除服务，只有最后一个版本的时候，才生效。
         * @type {boolean || null}
         */
        this.IsDeleteServer = null;

        /**
         * 只有删除服务的时候，才会起作用
         * @type {boolean || null}
         */
        this.IsDeleteImage = null;

        /**
         * 操作备注
         * @type {string || null}
         */
        this.OperatorRemark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.IsDeleteServer = 'IsDeleteServer' in params ? params.IsDeleteServer : null;
        this.IsDeleteImage = 'IsDeleteImage' in params ? params.IsDeleteImage : null;
        this.OperatorRemark = 'OperatorRemark' in params ? params.OperatorRemark : null;

    }
}

/**
 * CreateCloudBaseRunServerVersion请求参数结构体
 * @class
 */
class CreateCloudBaseRunServerVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 枚举（package/repository/image/jar/war)
         * @type {string || null}
         */
        this.UploadType = null;

        /**
         * 流量占比
         * @type {number || null}
         */
        this.FlowRatio = null;

        /**
         * Cpu的大小，单位：核
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Mem的大小，单位：G
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * 最小副本数，最小值：0
         * @type {number || null}
         */
        this.MinNum = null;

        /**
         * 副本最大数，最大值：50
         * @type {number || null}
         */
        this.MaxNum = null;

        /**
         * 策略类型(枚举值：比如cpu)
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 策略阈值
         * @type {number || null}
         */
        this.PolicyThreshold = null;

        /**
         * 服务端口
         * @type {number || null}
         */
        this.ContainerPort = null;

        /**
         * 服务名称
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * repository的类型(coding/gitlab/github/coding)
         * @type {string || null}
         */
        this.RepositoryType = null;

        /**
         * Dockerfile地址
         * @type {string || null}
         */
        this.DockerfilePath = null;

        /**
         * 构建目录
         * @type {string || null}
         */
        this.BuildDir = null;

        /**
         * 环境变量
         * @type {string || null}
         */
        this.EnvParams = null;

        /**
         * repository地址
         * @type {string || null}
         */
        this.Repository = null;

        /**
         * 分支
         * @type {string || null}
         */
        this.Branch = null;

        /**
         * 版本备注
         * @type {string || null}
         */
        this.VersionRemark = null;

        /**
         * 代码包名字
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 代码包的版本
         * @type {string || null}
         */
        this.PackageVersion = null;

        /**
         * Image的详情
         * @type {CloudBaseRunImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * Github等拉取代码的详情
         * @type {CloudBaseCodeRepoDetail || null}
         */
        this.CodeDetail = null;

        /**
         * 私有镜像秘钥信息
         * @type {CloudBaseRunImageSecretInfo || null}
         */
        this.ImageSecretInfo = null;

        /**
         * 私有镜像 认证名称
         * @type {string || null}
         */
        this.ImagePullSecret = null;

        /**
         * 用户自定义采集日志路径
         * @type {string || null}
         */
        this.CustomLogs = null;

        /**
         * 延迟多长时间开始健康检查（单位s）
         * @type {number || null}
         */
        this.InitialDelaySeconds = null;

        /**
         * cfs挂载信息
         * @type {Array.<CloudBaseRunVolumeMount> || null}
         */
        this.MountVolumeInfo = null;

        /**
         * 4 代表只能微信链路访问
         * @type {number || null}
         */
        this.AccessType = null;

        /**
         * es信息
         * @type {CloudBaseEsInfo || null}
         */
        this.EsInfo = null;

        /**
         * 是否使用统一域名
         * @type {boolean || null}
         */
        this.EnableUnion = null;

        /**
         * 操作备注
         * @type {string || null}
         */
        this.OperatorRemark = null;

        /**
         * 服务路径
         * @type {string || null}
         */
        this.ServerPath = null;

        /**
         * 镜像复用的key
         * @type {string || null}
         */
        this.ImageReuseKey = null;

        /**
         * 容器的描述文件
         * @type {Array.<CloudBaseRunSideSpec> || null}
         */
        this.SidecarSpecs = null;

        /**
         * 安全特性
         * @type {CloudBaseSecurityContext || null}
         */
        this.Security = null;

        /**
         * 服务磁盘挂载
         * @type {Array.<CloudRunServiceVolume> || null}
         */
        this.ServiceVolumes = null;

        /**
         * 是否创建JnsGw 0未传默认创建 1创建 2不创建
         * @type {number || null}
         */
        this.IsCreateJnsGw = null;

        /**
         * 数据卷挂载参数
         * @type {Array.<CloudBaseRunServiceVolumeMount> || null}
         */
        this.ServiceVolumeMounts = null;

        /**
         * 是否有Dockerfile：0-default has, 1-has, 2-has not
         * @type {number || null}
         */
        this.HasDockerfile = null;

        /**
         * 基础镜像
         * @type {string || null}
         */
        this.BaseImage = null;

        /**
         * 容器启动入口命令
         * @type {string || null}
         */
        this.EntryPoint = null;

        /**
         * 仓库语言
         * @type {string || null}
         */
        this.RepoLanguage = null;

        /**
         * 用户实际上传文件名（仅UploadType为jar/war时必填）
         * @type {string || null}
         */
        this.UploadFilename = null;

        /**
         * 自动扩缩容策略组
         * @type {Array.<HpaPolicy> || null}
         */
        this.PolicyDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.UploadType = 'UploadType' in params ? params.UploadType : null;
        this.FlowRatio = 'FlowRatio' in params ? params.FlowRatio : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.MinNum = 'MinNum' in params ? params.MinNum : null;
        this.MaxNum = 'MaxNum' in params ? params.MaxNum : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.PolicyThreshold = 'PolicyThreshold' in params ? params.PolicyThreshold : null;
        this.ContainerPort = 'ContainerPort' in params ? params.ContainerPort : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.RepositoryType = 'RepositoryType' in params ? params.RepositoryType : null;
        this.DockerfilePath = 'DockerfilePath' in params ? params.DockerfilePath : null;
        this.BuildDir = 'BuildDir' in params ? params.BuildDir : null;
        this.EnvParams = 'EnvParams' in params ? params.EnvParams : null;
        this.Repository = 'Repository' in params ? params.Repository : null;
        this.Branch = 'Branch' in params ? params.Branch : null;
        this.VersionRemark = 'VersionRemark' in params ? params.VersionRemark : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.PackageVersion = 'PackageVersion' in params ? params.PackageVersion : null;

        if (params.ImageInfo) {
            let obj = new CloudBaseRunImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }

        if (params.CodeDetail) {
            let obj = new CloudBaseCodeRepoDetail();
            obj.deserialize(params.CodeDetail)
            this.CodeDetail = obj;
        }

        if (params.ImageSecretInfo) {
            let obj = new CloudBaseRunImageSecretInfo();
            obj.deserialize(params.ImageSecretInfo)
            this.ImageSecretInfo = obj;
        }
        this.ImagePullSecret = 'ImagePullSecret' in params ? params.ImagePullSecret : null;
        this.CustomLogs = 'CustomLogs' in params ? params.CustomLogs : null;
        this.InitialDelaySeconds = 'InitialDelaySeconds' in params ? params.InitialDelaySeconds : null;

        if (params.MountVolumeInfo) {
            this.MountVolumeInfo = new Array();
            for (let z in params.MountVolumeInfo) {
                let obj = new CloudBaseRunVolumeMount();
                obj.deserialize(params.MountVolumeInfo[z]);
                this.MountVolumeInfo.push(obj);
            }
        }
        this.AccessType = 'AccessType' in params ? params.AccessType : null;

        if (params.EsInfo) {
            let obj = new CloudBaseEsInfo();
            obj.deserialize(params.EsInfo)
            this.EsInfo = obj;
        }
        this.EnableUnion = 'EnableUnion' in params ? params.EnableUnion : null;
        this.OperatorRemark = 'OperatorRemark' in params ? params.OperatorRemark : null;
        this.ServerPath = 'ServerPath' in params ? params.ServerPath : null;
        this.ImageReuseKey = 'ImageReuseKey' in params ? params.ImageReuseKey : null;

        if (params.SidecarSpecs) {
            this.SidecarSpecs = new Array();
            for (let z in params.SidecarSpecs) {
                let obj = new CloudBaseRunSideSpec();
                obj.deserialize(params.SidecarSpecs[z]);
                this.SidecarSpecs.push(obj);
            }
        }

        if (params.Security) {
            let obj = new CloudBaseSecurityContext();
            obj.deserialize(params.Security)
            this.Security = obj;
        }

        if (params.ServiceVolumes) {
            this.ServiceVolumes = new Array();
            for (let z in params.ServiceVolumes) {
                let obj = new CloudRunServiceVolume();
                obj.deserialize(params.ServiceVolumes[z]);
                this.ServiceVolumes.push(obj);
            }
        }
        this.IsCreateJnsGw = 'IsCreateJnsGw' in params ? params.IsCreateJnsGw : null;

        if (params.ServiceVolumeMounts) {
            this.ServiceVolumeMounts = new Array();
            for (let z in params.ServiceVolumeMounts) {
                let obj = new CloudBaseRunServiceVolumeMount();
                obj.deserialize(params.ServiceVolumeMounts[z]);
                this.ServiceVolumeMounts.push(obj);
            }
        }
        this.HasDockerfile = 'HasDockerfile' in params ? params.HasDockerfile : null;
        this.BaseImage = 'BaseImage' in params ? params.BaseImage : null;
        this.EntryPoint = 'EntryPoint' in params ? params.EntryPoint : null;
        this.RepoLanguage = 'RepoLanguage' in params ? params.RepoLanguage : null;
        this.UploadFilename = 'UploadFilename' in params ? params.UploadFilename : null;

        if (params.PolicyDetail) {
            this.PolicyDetail = new Array();
            for (let z in params.PolicyDetail) {
                let obj = new HpaPolicy();
                obj.deserialize(params.PolicyDetail[z]);
                this.PolicyDetail.push(obj);
            }
        }

    }
}

/**
 * 终端用户登录新增统计
 * @class
 */
class LoginStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计类型 新增NEWUSER 和登录 LOGIN
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatisticalType = null;

        /**
         * 统计周期：日DAY，周WEEK，月MONTH
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatisticalCycle = null;

        /**
         * 统计总量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatisticalType = 'StatisticalType' in params ? params.StatisticalType : null;
        this.StatisticalCycle = 'StatisticalCycle' in params ? params.StatisticalCycle : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeCloudBaseRunServerDomainName请求参数结构体
 * @class
 */
class DescribeCloudBaseRunServerDomainNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 环境Id
         * @type {string || null}
         */
        this.UserEnvId = null;

        /**
         * 用户Uin
         * @type {string || null}
         */
        this.UserUin = null;

        /**
         * 外部Id
         * @type {string || null}
         */
        this.ExternalId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.UserEnvId = 'UserEnvId' in params ? params.UserEnvId : null;
        this.UserUin = 'UserUin' in params ? params.UserUin : null;
        this.ExternalId = 'ExternalId' in params ? params.ExternalId : null;

    }
}

/**
 * DescribeCloudBaseRunAllVpcs请求参数结构体
 * @class
 */
class DescribeCloudBaseRunAllVpcsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * CreatePostpayPackage返回参数结构体
 * @class
 */
class CreatePostpayPackageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后付费订单号
         * @type {string || null}
         */
        this.TranId = null;

        /**
         * 环境ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvId = null;

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
        this.TranId = 'TranId' in params ? params.TranId : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExtensionUploadInfo请求参数结构体
 * @class
 */
class DescribeExtensionUploadInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待上传的文件
         * @type {Array.<ExtensionFile> || null}
         */
        this.ExtensionFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ExtensionFiles) {
            this.ExtensionFiles = new Array();
            for (let z in params.ExtensionFiles) {
                let obj = new ExtensionFile();
                obj.deserialize(params.ExtensionFiles[z]);
                this.ExtensionFiles.push(obj);
            }
        }

    }
}

/**
 * ReplaceActivityRecord请求参数结构体
 * @class
 */
class ReplaceActivityRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动id
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * 状态码
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 自定义子状态
         * @type {string || null}
         */
        this.SubStatus = null;

        /**
         * 鉴权token
         * @type {string || null}
         */
        this.ChannelToken = null;

        /**
         * 渠道名，不同渠道对应不同secretKey
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SubStatus = 'SubStatus' in params ? params.SubStatus : null;
        this.ChannelToken = 'ChannelToken' in params ? params.ChannelToken : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * DeleteWxGatewayRoute返回参数结构体
 * @class
 */
class DeleteWxGatewayRouteResponse extends  AbstractModel {
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
 * KV参数的优先级
 * @class
 */
class CloudBaseRunKVPriority extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数的Key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 参数的Value
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 优先级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Priority = null;

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
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * UnfreezeCloudBaseRunServers请求参数结构体
 * @class
 */
class UnfreezeCloudBaseRunServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名称列表
         * @type {Array.<string> || null}
         */
        this.ServerNameList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerNameList = 'ServerNameList' in params ? params.ServerNameList : null;

    }
}

/**
 * EstablishCloudBaseRunServer请求参数结构体
 * @class
 */
class EstablishCloudBaseRunServerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名称
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * 是否开通外网访问
         * @type {boolean || null}
         */
        this.IsPublic = null;

        /**
         * 镜像仓库
         * @type {string || null}
         */
        this.ImageRepo = null;

        /**
         * 服务描述
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * es信息
         * @type {CloudBaseEsInfo || null}
         */
        this.EsInfo = null;

        /**
         * 日志类型; es/cls
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * 操作备注
         * @type {string || null}
         */
        this.OperatorRemark = null;

        /**
         * 来源方（默认值：qcloud，微信侧来源miniapp)
         * @type {string || null}
         */
        this.Source = null;

        /**
         * vpc信息
         * @type {CloudBaseRunVpcInfo || null}
         */
        this.VpcInfo = null;

        /**
         * 0/1=允许公网访问;2=关闭公网访问
         * @type {number || null}
         */
        this.PublicAccess = null;

        /**
         * OA PUBLIC MINIAPP VPC
         * @type {Array.<string> || null}
         */
        this.OpenAccessTypes = null;

        /**
         * 是否创建Path 0未传默认创建 1创建 2不创建
         * @type {number || null}
         */
        this.IsCreatePath = null;

        /**
         * 指定创建路径（如不存在，则创建。存在，则忽略）
         * @type {string || null}
         */
        this.ServerPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.IsPublic = 'IsPublic' in params ? params.IsPublic : null;
        this.ImageRepo = 'ImageRepo' in params ? params.ImageRepo : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.EsInfo) {
            let obj = new CloudBaseEsInfo();
            obj.deserialize(params.EsInfo)
            this.EsInfo = obj;
        }
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.OperatorRemark = 'OperatorRemark' in params ? params.OperatorRemark : null;
        this.Source = 'Source' in params ? params.Source : null;

        if (params.VpcInfo) {
            let obj = new CloudBaseRunVpcInfo();
            obj.deserialize(params.VpcInfo)
            this.VpcInfo = obj;
        }
        this.PublicAccess = 'PublicAccess' in params ? params.PublicAccess : null;
        this.OpenAccessTypes = 'OpenAccessTypes' in params ? params.OpenAccessTypes : null;
        this.IsCreatePath = 'IsCreatePath' in params ? params.IsCreatePath : null;
        this.ServerPath = 'ServerPath' in params ? params.ServerPath : null;

    }
}

/**
 * ReinstateEnv返回参数结构体
 * @class
 */
class ReinstateEnvResponse extends  AbstractModel {
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
 * 对标 EKS VolumeMount
 * @class
 */
class CloudBaseRunServiceVolumeMount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Volume 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 挂载路径
         * @type {string || null}
         */
        this.MountPath = null;

        /**
         * 是否只读
         * @type {boolean || null}
         */
        this.ReadOnly = null;

        /**
         * 子路径
         * @type {string || null}
         */
        this.SubPath = null;

        /**
         * 传播挂载方式
         * @type {string || null}
         */
        this.MountPropagation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.MountPath = 'MountPath' in params ? params.MountPath : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.SubPath = 'SubPath' in params ? params.SubPath : null;
        this.MountPropagation = 'MountPropagation' in params ? params.MountPropagation : null;

    }
}

/**
 * DescribeSpecialCostItems返回参数结构体
 * @class
 */
class DescribeSpecialCostItemsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1分钱抵扣详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SpecialCostItem> || null}
         */
        this.SpecialCostItems = null;

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

        if (params.SpecialCostItems) {
            this.SpecialCostItems = new Array();
            for (let z in params.SpecialCostItems) {
                let obj = new SpecialCostItem();
                obj.deserialize(params.SpecialCostItems[z]);
                this.SpecialCostItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateStandaloneGateway请求参数结构体
 * @class
 */
class CreateStandaloneGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 网关名
         * @type {string || null}
         */
        this.GatewayAlias = null;

        /**
         * 私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 网关描述
         * @type {string || null}
         */
        this.GatewayDesc = null;

        /**
         * 网关套餐版本
         * @type {string || null}
         */
        this.PackageVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.GatewayAlias = 'GatewayAlias' in params ? params.GatewayAlias : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.GatewayDesc = 'GatewayDesc' in params ? params.GatewayDesc : null;
        this.PackageVersion = 'PackageVersion' in params ? params.PackageVersion : null;

    }
}

/**
 * DescribeCloudBaseProjectVersionList返回参数结构体
 * @class
 */
class DescribeCloudBaseProjectVersionListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudBaseProjectVersion> || null}
         */
        this.ProjectVersions = null;

        /**
         * 总个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.ProjectVersions) {
            this.ProjectVersions = new Array();
            for (let z in params.ProjectVersions) {
                let obj = new CloudBaseProjectVersion();
                obj.deserialize(params.ProjectVersions[z]);
                this.ProjectVersions.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDownloadFile请求参数结构体
 * @class
 */
class DescribeDownloadFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代码uri，格式如：extension://abcdefhhxxx.zip，对应 DescribeExtensionUploadInfo 接口的返回值
         * @type {string || null}
         */
        this.CodeUri = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CodeUri = 'CodeUri' in params ? params.CodeUri : null;

    }
}

/**
 * DescribeEndUserStatistic请求参数结构体
 * @class
 */
class DescribeEndUserStatisticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * 子网信息
 * @class
 */
class CloudBaseRunVpcSubnet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 子网的ipv4
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cidr = null;

        /**
         * 可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * subnet类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Target = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Cidr = 'Cidr' in params ? params.Cidr : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 后付费免费额度
 * @class
 */
class PackageFreeQuotaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型
<li>COS</li>
<li>CDN</li>
<li>FLEXDB</li>
<li>SCF</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 资源指标名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceMetric = null;

        /**
         * 资源指标免费量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FreeQuota = null;

        /**
         * 指标单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MetricUnit = null;

        /**
         * 免费量抵扣周期
<li>sum-month:以月为单位抵扣</li>
<li>sum-day:以天为单位抵扣</li>
<li>totalize:总容量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeductType = null;

        /**
         * 免费量类型
<li>basic:通用量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FreeQuotaType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceMetric = 'ResourceMetric' in params ? params.ResourceMetric : null;
        this.FreeQuota = 'FreeQuota' in params ? params.FreeQuota : null;
        this.MetricUnit = 'MetricUnit' in params ? params.MetricUnit : null;
        this.DeductType = 'DeductType' in params ? params.DeductType : null;
        this.FreeQuotaType = 'FreeQuotaType' in params ? params.FreeQuotaType : null;

    }
}

/**
 * DescribeEnvFreeQuota返回参数结构体
 * @class
 */
class DescribeEnvFreeQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 免费抵扣配额详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PostpayEnvQuota> || null}
         */
        this.QuotaItems = null;

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

        if (params.QuotaItems) {
            this.QuotaItems = new Array();
            for (let z in params.QuotaItems) {
                let obj = new PostpayEnvQuota();
                obj.deserialize(params.QuotaItems[z]);
                this.QuotaItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAndDeployCloudBaseProject返回参数结构体
 * @class
 */
class CreateAndDeployCloudBaseProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvId = null;

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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 静态CDN资源信息
 * @class
 */
class StaticStorageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 静态CDN域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StaticDomain = null;

        /**
         * 静态CDN默认文件夹，当前为根目录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DefaultDirName = null;

        /**
         * 资源状态(process/online/offline/init)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * cos所属区域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * bucket信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Bucket = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StaticDomain = 'StaticDomain' in params ? params.StaticDomain : null;
        this.DefaultDirName = 'DefaultDirName' in params ? params.DefaultDirName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;

    }
}

/**
 * DescribeCloudBaseRunResourceForExtend返回参数结构体
 * @class
 */
class DescribeCloudBaseRunResourceForExtendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群状态(creating/succ)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterStatus = null;

        /**
         * 虚拟集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VirtualClusterId = null;

        /**
         * vpc id信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 地域信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 子网信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudBaseRunVpcSubnet> || null}
         */
        this.SubnetIds = null;

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
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.VirtualClusterId = 'VirtualClusterId' in params ? params.VirtualClusterId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Region = 'Region' in params ? params.Region : null;

        if (params.SubnetIds) {
            this.SubnetIds = new Array();
            for (let z in params.SubnetIds) {
                let obj = new CloudBaseRunVpcSubnet();
                obj.deserialize(params.SubnetIds[z]);
                this.SubnetIds.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAndDeployCloudBaseProject请求参数结构体
 * @class
 */
class CreateAndDeployCloudBaseProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 来源
         * @type {CodeSource || null}
         */
        this.Source = null;

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 项目类型, 枚举值为: framework-oneclick,qci-extension-cicd
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 环境变量
         * @type {Array.<KVPair> || null}
         */
        this.Parameters = null;

        /**
         * 环境别名。要以a-z开头，不能包含a-zA-z0-9-以外的字符
         * @type {string || null}
         */
        this.EnvAlias = null;

        /**
         * rc.json的内容
         * @type {string || null}
         */
        this.RcJson = null;

        /**
         * 插件配置内容
         * @type {string || null}
         */
        this.AddonConfig = null;

        /**
         * 标签
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 网络配置
         * @type {string || null}
         */
        this.NetworkConfig = null;

        /**
         * 用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。
         * @type {string || null}
         */
        this.FreeQuota = null;

        /**
         * 是否代码变更触发自动部署
         * @type {boolean || null}
         */
        this.AutoDeployOnCodeChange = null;

        /**
         * 私有仓库地址
         * @type {string || null}
         */
        this.RepoUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Source) {
            let obj = new CodeSource();
            obj.deserialize(params.Source)
            this.Source = obj;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Parameters) {
            this.Parameters = new Array();
            for (let z in params.Parameters) {
                let obj = new KVPair();
                obj.deserialize(params.Parameters[z]);
                this.Parameters.push(obj);
            }
        }
        this.EnvAlias = 'EnvAlias' in params ? params.EnvAlias : null;
        this.RcJson = 'RcJson' in params ? params.RcJson : null;
        this.AddonConfig = 'AddonConfig' in params ? params.AddonConfig : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.NetworkConfig = 'NetworkConfig' in params ? params.NetworkConfig : null;
        this.FreeQuota = 'FreeQuota' in params ? params.FreeQuota : null;
        this.AutoDeployOnCodeChange = 'AutoDeployOnCodeChange' in params ? params.AutoDeployOnCodeChange : null;
        this.RepoUrl = 'RepoUrl' in params ? params.RepoUrl : null;

    }
}

/**
 * DescribeCloudBaseRunVersion请求参数结构体
 * @class
 */
class DescribeCloudBaseRunVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名称
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 版本名称
         * @type {string || null}
         */
        this.VersionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;

    }
}

/**
 * EstablishWxGatewayRoute请求参数结构体
 * @class
 */
class EstablishWxGatewayRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关id
         * @type {string || null}
         */
        this.GatewayId = null;

        /**
         * 服务名称
         * @type {string || null}
         */
        this.GatewayRouteName = null;

        /**
         * 服务地址
         * @type {string || null}
         */
        this.GatewayRouteAddr = null;

        /**
         * 协议类型 http/https
         * @type {string || null}
         */
        this.GatewayRouteProtocol = null;

        /**
         * 服务描述
         * @type {string || null}
         */
        this.GatewayRouteDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;
        this.GatewayRouteName = 'GatewayRouteName' in params ? params.GatewayRouteName : null;
        this.GatewayRouteAddr = 'GatewayRouteAddr' in params ? params.GatewayRouteAddr : null;
        this.GatewayRouteProtocol = 'GatewayRouteProtocol' in params ? params.GatewayRouteProtocol : null;
        this.GatewayRouteDesc = 'GatewayRouteDesc' in params ? params.GatewayRouteDesc : null;

    }
}

/**
 * UnfreezeCloudBaseRunServers返回参数结构体
 * @class
 */
class UnfreezeCloudBaseRunServersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量执行结果
成功：succ
失败：fail
部分：partial（部分成功、部分失败）
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 解冻失败列表
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailServerList = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.FailServerList = 'FailServerList' in params ? params.FailServerList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCloudBaseRunConfForGateWay返回参数结构体
 * @class
 */
class DescribeCloudBaseRunConfForGateWayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最近更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastUpTime = null;

        /**
         * 配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudBaseRunForGatewayConf> || null}
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
        this.LastUpTime = 'LastUpTime' in params ? params.LastUpTime : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CloudBaseRunForGatewayConf();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库资源信息
 * @class
 */
class DatabasesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库唯一标识
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 状态。包含以下取值：
<li>INITIALIZING：资源初始化中</li>
<li>RUNNING：运行中，可正常使用的状态</li>
<li>UNUSABLE：禁用，不可用</li>
<li>OVERDUE：资源过期</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 所属地域。
当前支持ap-shanghai
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * cloudrun安全特性


 * @class
 */
class CloudBaseSecurityContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全特性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CloudBaseCapabilities || null}
         */
        this.Capabilities = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Capabilities) {
            let obj = new CloudBaseCapabilities();
            obj.deserialize(params.Capabilities)
            this.Capabilities = obj;
        }

    }
}

/**
 * 扩展文件
 * @class
 */
class ExtensionFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件类型。枚举值
<li>FUNCTION：函数代码</li>
<li>STATIC：静态托管代码</li>
<li>SMS：短信文件</li>
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 文件名，长度不超过24
         * @type {string || null}
         */
        this.FileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

    }
}

/**
 * TurnOffStandaloneGateway请求参数结构体
 * @class
 */
class TurnOffStandaloneGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 网关名称
         * @type {string || null}
         */
        this.GatewayName = null;

        /**
         * 服务名称列表
         * @type {Array.<string> || null}
         */
        this.ServiceNameList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.GatewayName = 'GatewayName' in params ? params.GatewayName : null;
        this.ServiceNameList = 'ServiceNameList' in params ? params.ServiceNameList : null;

    }
}

/**
 * ReinstateEnv请求参数结构体
 * @class
 */
class ReinstateEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * EstablishWxGatewayRoute返回参数结构体
 * @class
 */
class EstablishWxGatewayRouteResponse extends  AbstractModel {
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
 * DescribeDatabaseACL请求参数结构体
 * @class
 */
class DescribeDatabaseACLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 集合名称
         * @type {string || null}
         */
        this.CollectionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.CollectionName = 'CollectionName' in params ? params.CollectionName : null;

    }
}

/**
 * CreateCloudBaseRunServerVersion返回参数结构体
 * @class
 */
class CreateCloudBaseRunServerVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态(creating/succ)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 版本名称（只有Result为succ的时候，才会返回VersionName)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 操作记录id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RunId = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.RunId = 'RunId' in params ? params.RunId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 版本的列表
 * @class
 */
class CloudBaseRunServerVersionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本名称
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 流量占比
         * @type {number || null}
         */
        this.FlowRatio = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 构建ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BuildId = null;

        /**
         * 构建方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UploadType = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * url中的参数路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ObjectKV || null}
         */
        this.UrlParam = null;

        /**
         * 优先级（数值越小，优先级越高）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 是否是默认兜底版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDefaultPriority = null;

        /**
         * KV Params
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudBaseRunKVPriority> || null}
         */
        this.FlowParams = null;

        /**
         * 最小副本数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinReplicas = null;

        /**
         * 最大副本数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxReplicas = null;

        /**
         * 操作记录id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RunId = null;

        /**
         * 进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * 当前副本数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CurrentReplicas = null;

        /**
         * Monolithic，Microservice
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Architecture = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FlowRatio = 'FlowRatio' in params ? params.FlowRatio : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.BuildId = 'BuildId' in params ? params.BuildId : null;
        this.UploadType = 'UploadType' in params ? params.UploadType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.UrlParam) {
            let obj = new ObjectKV();
            obj.deserialize(params.UrlParam)
            this.UrlParam = obj;
        }
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.IsDefaultPriority = 'IsDefaultPriority' in params ? params.IsDefaultPriority : null;

        if (params.FlowParams) {
            this.FlowParams = new Array();
            for (let z in params.FlowParams) {
                let obj = new CloudBaseRunKVPriority();
                obj.deserialize(params.FlowParams[z]);
                this.FlowParams.push(obj);
            }
        }
        this.MinReplicas = 'MinReplicas' in params ? params.MinReplicas : null;
        this.MaxReplicas = 'MaxReplicas' in params ? params.MaxReplicas : null;
        this.RunId = 'RunId' in params ? params.RunId : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.CurrentReplicas = 'CurrentReplicas' in params ? params.CurrentReplicas : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;

    }
}

/**
 * 终端用户平台统计信息
 * @class
 */
class PlatformStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端用户从属平台
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 平台终端用户数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DeleteCloudBaseProjectLatestVersion请求参数结构体
 * @class
 */
class DeleteCloudBaseProjectLatestVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 项目名
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 是否保留资源
         * @type {boolean || null}
         */
        this.KeepResource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.KeepResource = 'KeepResource' in params ? params.KeepResource : null;

    }
}

/**
 * DescribeCloudBaseProjectLatestVersionList返回参数结构体
 * @class
 */
class DescribeCloudBaseProjectLatestVersionListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudBaseProjectVersion> || null}
         */
        this.ProjectList = null;

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.ProjectList) {
            this.ProjectList = new Array();
            for (let z in params.ProjectList) {
                let obj = new CloudBaseProjectVersion();
                obj.deserialize(params.ProjectList[z]);
                this.ProjectList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 小租户网关套餐配置
 * @class
 */
class StandaloneGatewayPackageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * CPU核心数
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 内存大小，单位MB
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * 套餐包版本名称
         * @type {string || null}
         */
        this.PackageVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.PackageVersion = 'PackageVersion' in params ? params.PackageVersion : null;

    }
}

/**
 * nfs挂载资源
 * @class
 */
class CloudBaseRunNfsVolumeSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * NFS挂载Server
         * @type {string || null}
         */
        this.Server = null;

        /**
         * Server路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 是否只读
         * @type {boolean || null}
         */
        this.ReadOnly = null;

        /**
         * secret名称
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 临时目录
         * @type {boolean || null}
         */
        this.EnableEmptyDirVolume = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Server = 'Server' in params ? params.Server : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.EnableEmptyDirVolume = 'EnableEmptyDirVolume' in params ? params.EnableEmptyDirVolume : null;

    }
}

/**
 * DescribeSmsQuotas返回参数结构体
 * @class
 */
class DescribeSmsQuotasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信免费量信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SmsFreeQuota> || null}
         */
        this.SmsFreeQuotaList = null;

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

        if (params.SmsFreeQuotaList) {
            this.SmsFreeQuotaList = new Array();
            for (let z in params.SmsFreeQuotaList) {
                let obj = new SmsFreeQuota();
                obj.deserialize(params.SmsFreeQuotaList[z]);
                this.SmsFreeQuotaList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWxCloudBaseRunEnvs请求参数结构体
 * @class
 */
class DescribeWxCloudBaseRunEnvsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * wx应用Id
         * @type {string || null}
         */
        this.WxAppId = null;

        /**
         * 是否查询全地域
         * @type {boolean || null}
         */
        this.AllRegions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WxAppId = 'WxAppId' in params ? params.WxAppId : null;
        this.AllRegions = 'AllRegions' in params ? params.AllRegions : null;

    }
}

/**
 * DescribeCloudBaseRunVersionRsByCondition返回参数结构体
 * @class
 */
class DescribeCloudBaseRunVersionRsByConditionResponse extends  AbstractModel {
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
 * DescribeCurveData请求参数结构体
 * @class
 */
class DescribeCurveDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * <li> 指标名: </li>
<li> StorageRead: 存储读请求次数 </li>
<li> StorageWrite: 存储写请求次数 </li>
<li> StorageCdnOriginFlux: CDN回源流量, 单位字节 </li>
<li> CDNFlux: CDN回源流量, 单位字节 </li>
<li> FunctionInvocation: 云函数调用次数 </li>
<li> FunctionGBs: 云函数资源使用量, 单位Mb*Ms </li>
<li> FunctionFlux: 云函数流量, 单位千字节(KB) </li>
<li> FunctionError: 云函数调用错误次数 </li>
<li> FunctionDuration: 云函数运行时间, 单位毫秒 </li>
<li> DbRead: 数据库读请求数 </li>
<li> DbWrite: 数据库写请求数 </li>
<li> DbCostTime10ms: 数据库耗时在10ms~50ms请求数 </li>
<li> DbCostTime50ms: 数据库耗时在50ms~100ms请求数 </li>
<li> DbCostTime100ms: 数据库耗时在100ms以上请求数 </li>
<li> TkeCpuRatio: 容器CPU占用率 </li>
<li> TkeMemRatio: 容器内存占用率 </li>
<li> TkeCpuUsed: 容器CPU使用量 </li>
<li> TkeMemUsed: 容器内存使用量 </li>
<li> TkeInvokeNum: 调用量 </li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 开始时间，如2018-08-24 10:50:00, 开始时间需要早于结束时间至少五分钟(原因是因为目前统计粒度最小是5分钟).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，如2018-08-24 10:50:00, 结束时间需要晚于开始时间至少五分钟(原因是因为目前统计粒度最小是5分钟)..
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 资源ID, 目前仅对云函数、容器托管相关的指标有意义。云函数(FunctionInvocation, FunctionGBs, FunctionFlux, FunctionError, FunctionDuration)、容器托管（服务名称）, 如果想查询某个云函数的指标则在ResourceId中传入函数名; 如果只想查询整个namespace的指标, 则留空或不传.如果想查询数据库某个集合相关信息，传入集合名称
         * @type {string || null}
         */
        this.ResourceID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ResourceID = 'ResourceID' in params ? params.ResourceID : null;

    }
}

/**
 * DescribeActivityInfo请求参数结构体
 * @class
 */
class DescribeActivityInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动id列表
         * @type {Array.<number> || null}
         */
        this.ActivityIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityIdList = 'ActivityIdList' in params ? params.ActivityIdList : null;

    }
}

/**
 * BindEnvGateway请求参数结构体
 * @class
 */
class BindEnvGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子环境id
         * @type {string || null}
         */
        this.SubEnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubEnvId = 'SubEnvId' in params ? params.SubEnvId : null;

    }
}

/**
 * ModifyEnv返回参数结构体
 * @class
 */
class ModifyEnvResponse extends  AbstractModel {
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
 * DescribeDownloadFile返回参数结构体
 * @class
 */
class DescribeDownloadFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件路径，该字段已废弃
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * 加密key，用于计算下载加密文件的header。参考SSE-C https://cloud.tencent.com/document/product/436/7728#sse-c
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomKey = null;

        /**
         * 下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

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
        this.CustomKey = 'CustomKey' in params ? params.CustomKey : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateStandaloneGateway返回参数结构体
 * @class
 */
class CreateStandaloneGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关名称
         * @type {string || null}
         */
        this.GatewayName = null;

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
        this.GatewayName = 'GatewayName' in params ? params.GatewayName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeQuotaData请求参数结构体
 * @class
 */
class DescribeQuotaDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * <li> 指标名: </li>
<li> StorageSizepkg: 当月存储空间容量, 单位MB </li>
<li> StorageReadpkg: 当月存储读请求次数 </li>
<li> StorageWritepkg: 当月存储写请求次数 </li>
<li> StorageCdnOriginFluxpkg: 当月CDN回源流量, 单位字节 </li>
<li> StorageCdnOriginFluxpkgDay: 当日CDN回源流量, 单位字节 </li>
<li> StorageReadpkgDay: 当日存储读请求次数 </li>
<li> StorageWritepkgDay: 当日写请求次数 </li>
<li> CDNFluxpkg: 当月CDN流量, 单位为字节 </li>
<li> CDNFluxpkgDay: 当日CDN流量, 单位为字节 </li>
<li> FunctionInvocationpkg: 当月云函数调用次数 </li>
<li> FunctionGBspkg: 当月云函数资源使用量, 单位Mb*Ms </li>
<li> FunctionFluxpkg: 当月云函数流量, 单位千字节(KB) </li>
<li> FunctionInvocationpkgDay: 当日云函数调用次数 </li>
<li> FunctionGBspkgDay: 当日云函数资源使用量, 单位Mb*Ms </li>
<li> FunctionFluxpkgDay: 当日云函数流量, 单位千字节(KB) </li>
<li> DbSizepkg: 当月数据库容量大小, 单位MB </li>
<li> DbReadpkg: 当日数据库读请求数 </li>
<li> DbWritepkg: 当日数据库写请求数 </li>
<li> StaticFsFluxPkgDay: 当日静态托管流量 </li>
<li> StaticFsFluxPkg: 当月静态托管流量</li>
<li> StaticFsSizePkg: 当月静态托管容量 </li>
<li> TkeCpuUsedPkg: 当月容器托管CPU使用量，单位核*秒 </li>
<li> TkeCpuUsedPkgDay: 当天容器托管CPU使用量，单位核*秒 </li>
<li> TkeMemUsedPkg: 当月容器托管内存使用量，单位MB*秒 </li>
<li> TkeMemUsedPkgDay: 当天容器托管内存使用量，单位MB*秒 </li>
<li> CodingBuildTimePkgDay: 当天容器托管构建时间使用量，单位毫秒 </li>
<li> TkeHttpServiceNatPkgDay: 当天容器托管流量使用量，单位B </li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 资源ID, 目前仅对云函数、容器托管相关的指标有意义。云函数(FunctionInvocationpkg, FunctionGBspkg, FunctionFluxpkg)、容器托管（服务名称）。如果想查询某个云函数的指标则在ResourceId中传入函数名; 如果只想查询整个namespace的指标, 则留空或不传。
         * @type {string || null}
         */
        this.ResourceID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.ResourceID = 'ResourceID' in params ? params.ResourceID : null;

    }
}

/**
 * CreateStaticStore返回参数结构体
 * @class
 */
class CreateStaticStoreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建静态资源结果(succ/fail)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * vpc信息
 * @class
 */
class CloudBaseRunVpcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * vpc的id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 创建类型(0=继承; 1=新建; 2=指定)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.CreateType = 'CreateType' in params ? params.CreateType : null;

    }
}

/**
 * DescribeCloudBaseRunResource返回参数结构体
 * @class
 */
class DescribeCloudBaseRunResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群状态(creating/succ)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterStatus = null;

        /**
         * 虚拟集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VirtualClusterId = null;

        /**
         * vpc id信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 地域信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 子网信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudBaseRunVpcSubnet> || null}
         */
        this.SubnetIds = null;

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
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.VirtualClusterId = 'VirtualClusterId' in params ? params.VirtualClusterId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Region = 'Region' in params ? params.Region : null;

        if (params.SubnetIds) {
            this.SubnetIds = new Array();
            for (let z in params.SubnetIds) {
                let obj = new CloudBaseRunVpcSubnet();
                obj.deserialize(params.SubnetIds[z]);
                this.SubnetIds.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StorageInfo 资源信息
 * @class
 */
class StorageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源所属地域。
当前支持ap-shanghai
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 桶名，存储资源的唯一标识
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * cdn 域名
         * @type {string || null}
         */
        this.CdnDomain = null;

        /**
         * 资源所属用户的腾讯云appId
         * @type {string || null}
         */
        this.AppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.CdnDomain = 'CdnDomain' in params ? params.CdnDomain : null;
        this.AppId = 'AppId' in params ? params.AppId : null;

    }
}

/**
 * DescribeCloudBaseRunVersionSnapshot请求参数结构体
 * @class
 */
class DescribeCloudBaseRunVersionSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 版本名
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 版本历史名
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * 偏移量。默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制大小。默认10，最大20
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 后付费资源免费量信息
 * @class
 */
class FreequotaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型
<li>COS</li>
<li>CDN</li>
<li>FLEXDB</li>
<li>SCF</li>
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 资源指标名称
         * @type {string || null}
         */
        this.ResourceMetric = null;

        /**
         * 资源指标免费量
         * @type {number || null}
         */
        this.FreeQuota = null;

        /**
         * 指标单位
         * @type {string || null}
         */
        this.MetricUnit = null;

        /**
         * 免费量抵扣周期
<li>sum-month:以月为单位抵扣</li>
<li>sum-day:以天为单位抵扣</li>
<li>totalize:总容量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeductType = null;

        /**
         * 免费量类型
<li>basic:通用量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FreeQuotaType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceMetric = 'ResourceMetric' in params ? params.ResourceMetric : null;
        this.FreeQuota = 'FreeQuota' in params ? params.FreeQuota : null;
        this.MetricUnit = 'MetricUnit' in params ? params.MetricUnit : null;
        this.DeductType = 'DeductType' in params ? params.DeductType : null;
        this.FreeQuotaType = 'FreeQuotaType' in params ? params.FreeQuotaType : null;

    }
}

/**
 * TurnOnStandaloneGateway请求参数结构体
 * @class
 */
class TurnOnStandaloneGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 网关名称
         * @type {string || null}
         */
        this.GatewayName = null;

        /**
         * 服务名称列表
         * @type {Array.<string> || null}
         */
        this.ServiceNameList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.GatewayName = 'GatewayName' in params ? params.GatewayName : null;
        this.ServiceNameList = 'ServiceNameList' in params ? params.ServiceNameList : null;

    }
}

/**
 * DescribeUserActivityInfo返回参数结构体
 * @class
 */
class DescribeUserActivityInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义标记，1元钱裂变需求中即代指`团id`
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 自定义备注，1元钱裂变需求中返回`团列表`，uin列表通过","拼接
         * @type {string || null}
         */
        this.Notes = null;

        /**
         * 活动剩余时间，单位为s.1元钱裂变需求中即为 time(活动过期时间)-Now()), 过期后为0，即返回必为自然数
         * @type {number || null}
         */
        this.ActivityTimeLeft = null;

        /**
         * 拼团剩余时间，单位为s.1元钱裂变需求中即为time(成团时间)+24H-Now()，过期后为0，即返回必为自然数
         * @type {number || null}
         */
        this.GroupTimeLeft = null;

        /**
         * 昵称列表,通过","拼接， 1元钱裂变活动中与Notes中uin一一对应
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NickNameList = null;

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
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Notes = 'Notes' in params ? params.Notes : null;
        this.ActivityTimeLeft = 'ActivityTimeLeft' in params ? params.ActivityTimeLeft : null;
        this.GroupTimeLeft = 'GroupTimeLeft' in params ? params.GroupTimeLeft : null;
        this.NickNameList = 'NickNameList' in params ? params.NickNameList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePostpayFreeQuotas返回参数结构体
 * @class
 */
class DescribePostpayFreeQuotasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 免费量资源信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FreequotaInfo> || null}
         */
        this.FreequotaInfoList = null;

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

        if (params.FreequotaInfoList) {
            this.FreequotaInfoList = new Array();
            for (let z in params.FreequotaInfoList) {
                let obj = new FreequotaInfo();
                obj.deserialize(params.FreequotaInfoList[z]);
                this.FreequotaInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 活动详情
 * @class
 */
class ActivityRecordItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 活动id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * 自定义状态码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 自定义子状态码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubStatus = null;

        /**
         * 整型子状态码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SubStatusInt = null;

        /**
         * 是否软删除
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDeleted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SubStatus = 'SubStatus' in params ? params.SubStatus : null;
        this.SubStatusInt = 'SubStatusInt' in params ? params.SubStatusInt : null;
        this.IsDeleted = 'IsDeleted' in params ? params.IsDeleted : null;

    }
}

/**
 * 合法域名
 * @class
 */
class AuthDomain extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名类型。包含以下取值：
<li>SYSTEM</li>
<li>USER</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 状态。包含以下取值：
<li>ENABLE</li>
<li>DISABLE</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeCloudBaseProjectLatestVersionList请求参数结构体
 * @class
 */
class DescribeCloudBaseProjectLatestVersionListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 个数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 环境id, 非必填
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 项目名称, 非必填
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 项目类型: framework-oneclick,qci-extension-cicd
         * @type {string || null}
         */
        this.ProjectType = null;

        /**
         * 标签
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * ci的id
         * @type {string || null}
         */
        this.CiId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectType = 'ProjectType' in params ? params.ProjectType : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.CiId = 'CiId' in params ? params.CiId : null;

    }
}

/**
 * 云日志服务相关信息
 * @class
 */
class LogServiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * log名
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * log-id
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * topic名
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * topic-id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * cls日志所属地域
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * DescribeEndUsers返回参数结构体
 * @class
 */
class DescribeEndUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 用户列表
         * @type {Array.<EndUserInfo> || null}
         */
        this.Users = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new EndUserInfo();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHostingDomainTask返回参数结构体
 * @class
 */
class DescribeHostingDomainTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * todo/doing/done/error
         * @type {string || null}
         */
        this.Status = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 环境计费信息
 * @class
 */
class EnvBillingInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * tcb产品套餐ID，参考DescribePackages接口的返回值。
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * 自动续费标记
         * @type {boolean || null}
         */
        this.IsAutoRenew = null;

        /**
         * 状态。包含以下取值：
<li> 空字符串：初始化中</li>
<li> NORMAL：正常</li>
<li> ISOLATE：隔离</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 支付方式。包含以下取值：
<li> PREPAYMENT：预付费</li>
<li> POSTPAID：后付费</li>
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 隔离时间，最近一次隔离的时间
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * 过期时间，套餐即将到期的时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 创建时间，第一次接入计费方案的时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间，计费信息最近一次更新的时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * true表示从未升级过付费版。
         * @type {boolean || null}
         */
        this.IsAlwaysFree = null;

        /**
         * 付费渠道。
<li> miniapp：小程序</li>
<li> qcloud：腾讯云</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentChannel = null;

        /**
         * 最新的订单信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OrderInfo || null}
         */
        this.OrderInfo = null;

        /**
         * 免费配额信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FreeQuota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.IsAutoRenew = 'IsAutoRenew' in params ? params.IsAutoRenew : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.IsAlwaysFree = 'IsAlwaysFree' in params ? params.IsAlwaysFree : null;
        this.PaymentChannel = 'PaymentChannel' in params ? params.PaymentChannel : null;

        if (params.OrderInfo) {
            let obj = new OrderInfo();
            obj.deserialize(params.OrderInfo)
            this.OrderInfo = obj;
        }
        this.FreeQuota = 'FreeQuota' in params ? params.FreeQuota : null;

    }
}

/**
 * DescribeEndUserStatistic返回参数结构体
 * @class
 */
class DescribeEndUserStatisticResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端用户各平台统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PlatformStatistic> || null}
         */
        this.PlatformStatistics = null;

        /**
         * 终端用户总数
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.PlatformStatistics) {
            this.PlatformStatistics = new Array();
            for (let z in params.PlatformStatistics) {
                let obj = new PlatformStatistic();
                obj.deserialize(params.PlatformStatistics[z]);
                this.PlatformStatistics.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSmsQuotas请求参数结构体
 * @class
 */
class DescribeSmsQuotasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * DescribeCloudBaseRunVersion返回参数结构体
 * @class
 */
class DescribeCloudBaseRunVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本名称
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Dockefile的路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DockerfilePath = null;

        /**
         * DockerBuild的目录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BuildDir = null;

        /**
         * 副本最小值
         * @type {number || null}
         */
        this.MinNum = null;

        /**
         * 副本最大值
         * @type {number || null}
         */
        this.MaxNum = null;

        /**
         * 策略类型
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 策略阈值
         * @type {number || null}
         */
        this.PolicyThreshold = null;

        /**
         * 环境变量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvParams = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 版本的IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionIP = null;

        /**
         * 版本的端口号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VersionPort = null;

        /**
         * 版本状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 代码包的名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 代码版本的名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageVersion = null;

        /**
         * 枚举（package/repository/image)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UploadType = null;

        /**
         * Repo的类型(coding/gitlab/github/coding)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RepoType = null;

        /**
         * 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Repo = null;

        /**
         * 分支
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Branch = null;

        /**
         * 服务名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 是否对于外网开放
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsPublic = null;

        /**
         * vpc id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网实例id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 日志采集路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomLogs = null;

        /**
         * 监听端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ContainerPort = null;

        /**
         * 延迟多长时间开始健康检查（单位s）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InitialDelaySeconds = null;

        /**
         * 镜像地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * CPU 大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CpuSize = null;

        /**
         * MEM 大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MemSize = null;

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
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.DockerfilePath = 'DockerfilePath' in params ? params.DockerfilePath : null;
        this.BuildDir = 'BuildDir' in params ? params.BuildDir : null;
        this.MinNum = 'MinNum' in params ? params.MinNum : null;
        this.MaxNum = 'MaxNum' in params ? params.MaxNum : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.PolicyThreshold = 'PolicyThreshold' in params ? params.PolicyThreshold : null;
        this.EnvParams = 'EnvParams' in params ? params.EnvParams : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.VersionIP = 'VersionIP' in params ? params.VersionIP : null;
        this.VersionPort = 'VersionPort' in params ? params.VersionPort : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.PackageVersion = 'PackageVersion' in params ? params.PackageVersion : null;
        this.UploadType = 'UploadType' in params ? params.UploadType : null;
        this.RepoType = 'RepoType' in params ? params.RepoType : null;
        this.Repo = 'Repo' in params ? params.Repo : null;
        this.Branch = 'Branch' in params ? params.Branch : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.IsPublic = 'IsPublic' in params ? params.IsPublic : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.CustomLogs = 'CustomLogs' in params ? params.CustomLogs : null;
        this.ContainerPort = 'ContainerPort' in params ? params.ContainerPort : null;
        this.InitialDelaySeconds = 'InitialDelaySeconds' in params ? params.InitialDelaySeconds : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.CpuSize = 'CpuSize' in params ? params.CpuSize : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePostpayPackage请求参数结构体
 * @class
 */
class CreatePostpayPackageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID，需要系统自动创建环境时，此字段不传
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 微信 AppId，微信必传
         * @type {string || null}
         */
        this.WxAppId = null;

        /**
         * 付费来源
<li>miniapp</li>
<li>qcloud</li>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。
         * @type {string || null}
         */
        this.FreeQuota = null;

        /**
         * 环境创建来源，取值：
<li>miniapp</li>
<li>qcloud</li>
用法同CreateEnv接口的Source参数
和 Channel 参数同时传，或者同时不传；EnvId 为空时必传。
         * @type {string || null}
         */
        this.EnvSource = null;

        /**
         * 环境别名，要以a-z开头，不能包含  a-z,0-9,-  以外的字符
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 如果envsource为miniapp, channel可以为ide或api;
如果envsource为qcloud, channel可以为qc_console,cocos, qq, cloudgame,dcloud,serverless_framework
和 EnvSource 参数同时传，或者同时不传；EnvId 为空时必传。
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 扩展ID
         * @type {string || null}
         */
        this.ExtensionId = null;

        /**
         * 订单标记。建议使用方统一转大小写之后再判断。
<li>QuickStart：快速启动来源</li>
<li>Activity：活动来源</li>
         * @type {string || null}
         */
        this.Flag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.WxAppId = 'WxAppId' in params ? params.WxAppId : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.FreeQuota = 'FreeQuota' in params ? params.FreeQuota : null;
        this.EnvSource = 'EnvSource' in params ? params.EnvSource : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.ExtensionId = 'ExtensionId' in params ? params.ExtensionId : null;
        this.Flag = 'Flag' in params ? params.Flag : null;

    }
}

/**
 * DescribeCloudBaseRunPodList返回参数结构体
 * @class
 */
class DescribeCloudBaseRunPodListResponse extends  AbstractModel {
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
 * SearchClsLog请求参数结构体
 * @class
 */
class SearchClsLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境唯一ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 查询起始时间条件
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间条件
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询语句，详情参考 https://cloud.tencent.com/document/product/614/47044
         * @type {string || null}
         */
        this.QueryString = null;

        /**
         * 单次要返回的日志条数，单次返回的最大条数为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 加载更多使用，透传上次返回的 context 值，获取后续的日志内容，通过游标最多可获取10000条，请尽可能缩小时间范围
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 按时间排序 asc（升序）或者 desc（降序），默认为 desc
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * 是否使用Lucene语法，默认为false
         * @type {boolean || null}
         */
        this.UseLucene = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.QueryString = 'QueryString' in params ? params.QueryString : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.UseLucene = 'UseLucene' in params ? params.UseLucene : null;

    }
}

/**
 * 代码仓库里 Repo的信息描述
 * @class
 */
class CloudBaseCodeRepoDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * repo的名字
         * @type {CloudBaseCodeRepoName || null}
         */
        this.Name = null;

        /**
         * repo的url
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

        if (params.Name) {
            let obj = new CloudBaseCodeRepoName();
            obj.deserialize(params.Name)
            this.Name = obj;
        }
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * CheckTcbService请求参数结构体
 * @class
 */
class CheckTcbServiceRequest extends  AbstractModel {
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
 * DescribeCloudBaseRunVersionRsByCondition请求参数结构体
 * @class
 */
class DescribeCloudBaseRunVersionRsByConditionRequest extends  AbstractModel {
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
 * DescribeCloudBaseRunServer返回参数结构体
 * @class
 */
class DescribeCloudBaseRunServerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 版本列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudBaseRunServerVersionItem> || null}
         */
        this.VersionItems = null;

        /**
         * 服务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 是否对于外网开放
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsPublic = null;

        /**
         * 镜像仓库
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageRepo = null;

        /**
         * 流量配置的类型（FLOW,URL_PARAMS)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrafficType = null;

        /**
         * 服务创建类型，默认为空，一键部署为oneclick
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceType = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.VersionItems) {
            this.VersionItems = new Array();
            for (let z in params.VersionItems) {
                let obj = new CloudBaseRunServerVersionItem();
                obj.deserialize(params.VersionItems[z]);
                this.VersionItems.push(obj);
            }
        }
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.IsPublic = 'IsPublic' in params ? params.IsPublic : null;
        this.ImageRepo = 'ImageRepo' in params ? params.ImageRepo : null;
        this.TrafficType = 'TrafficType' in params ? params.TrafficType : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserActivityInfo请求参数结构体
 * @class
 */
class DescribeUserActivityInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动id
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * 渠道加密token
         * @type {string || null}
         */
        this.ChannelToken = null;

        /**
         * 渠道来源，每个来源对应不同secretKey
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 团id, 1元钱裂变中活动团id不为空时根据团id来查询记录，为空时查询uin最新记录
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.ChannelToken = 'ChannelToken' in params ? params.ChannelToken : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 标签键值对
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签值
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
 * DescribeCloudBaseRunPodList请求参数结构体
 * @class
 */
class DescribeCloudBaseRunPodListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 版本名
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 分页限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 容器状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 容器名
         * @type {string || null}
         */
        this.PodName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PodName = 'PodName' in params ? params.PodName : null;

    }
}

/**
 * CreateCloudBaseRunResource请求参数结构体
 * @class
 */
class CreateCloudBaseRunResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * vpc的ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID列表，当VpcId不为空，SubnetIds也不能为空
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

    }
}

/**
 * ModifyEndUser返回参数结构体
 * @class
 */
class ModifyEndUserResponse extends  AbstractModel {
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
 * DescribeAuthDomains请求参数结构体
 * @class
 */
class DescribeAuthDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * FreezeCloudBaseRunServers返回参数结构体
 * @class
 */
class FreezeCloudBaseRunServersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量状态状态
成功：succ
失败：fail
部分：partial（部分成功、部分失败）
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 冻结失败服务列表
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailServerList = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.FailServerList = 'FailServerList' in params ? params.FailServerList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 服务的volume
 * @class
 */
class CloudRunServiceVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * NFS的挂载方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CloudBaseRunNfsVolumeSource || null}
         */
        this.NFS = null;

        /**
         * secret名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 是否开启临时目录逐步废弃，请使用 EmptyDir
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableEmptyDirVolume = null;

        /**
         * emptydir数据卷详细信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CloudBaseRunEmptyDirVolumeSource || null}
         */
        this.EmptyDir = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.NFS) {
            let obj = new CloudBaseRunNfsVolumeSource();
            obj.deserialize(params.NFS)
            this.NFS = obj;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.EnableEmptyDirVolume = 'EnableEmptyDirVolume' in params ? params.EnableEmptyDirVolume : null;

        if (params.EmptyDir) {
            let obj = new CloudBaseRunEmptyDirVolumeSource();
            obj.deserialize(params.EmptyDir)
            this.EmptyDir = obj;
        }

    }
}

/**
 * 独立网关云托管服务配置信息
 * @class
 */
class CloudBaseRunForGatewayConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否缩容到0
         * @type {boolean || null}
         */
        this.IsZero = null;

        /**
         * 按百分比灰度的权重
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 按请求/header参数的灰度Key
         * @type {string || null}
         */
        this.GrayKey = null;

        /**
         * 按请求/header参数的灰度Value
         * @type {string || null}
         */
        this.GrayValue = null;

        /**
         * 是否为默认版本(按请求/header参数)
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * 访问权限，对应二进制分多段，vpc内网｜公网｜oa
         * @type {number || null}
         */
        this.AccessType = null;

        /**
         * 访问的URL（域名＋路径）列表
         * @type {Array.<string> || null}
         */
        this.URLs = null;

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名称
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 版本名称
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 灰度类型：FLOW(权重), URL_PARAMS/HEAD_PARAMS
         * @type {string || null}
         */
        this.GrayType = null;

        /**
         * CLB的IP:Port
         * @type {string || null}
         */
        this.LbAddr = null;

        /**
         * 0:http访问服务配置信息, 1: 服务域名
         * @type {number || null}
         */
        this.ConfigType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsZero = 'IsZero' in params ? params.IsZero : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.GrayKey = 'GrayKey' in params ? params.GrayKey : null;
        this.GrayValue = 'GrayValue' in params ? params.GrayValue : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.AccessType = 'AccessType' in params ? params.AccessType : null;
        this.URLs = 'URLs' in params ? params.URLs : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.GrayType = 'GrayType' in params ? params.GrayType : null;
        this.LbAddr = 'LbAddr' in params ? params.LbAddr : null;
        this.ConfigType = 'ConfigType' in params ? params.ConfigType : null;

    }
}

/**
 * 扩展文件信息
 * @class
 */
class ExtensionFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板里使用的地址
         * @type {string || null}
         */
        this.CodeUri = null;

        /**
         * 上传文件的临时地址，含签名
         * @type {string || null}
         */
        this.UploadUrl = null;

        /**
         * 自定义密钥。如果为空，则表示不需要加密
         * @type {string || null}
         */
        this.CustomKey = null;

        /**
         * 文件大小限制，单位M，客户端上传前需要主动检查文件大小，超过限制的文件会被删除。
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CodeUri = 'CodeUri' in params ? params.CodeUri : null;
        this.UploadUrl = 'UploadUrl' in params ? params.UploadUrl : null;
        this.CustomKey = 'CustomKey' in params ? params.CustomKey : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * Key-Value类型，模拟的 object 类型
 * @class
 */
class ObjectKV extends  AbstractModel {
    constructor(){
        super();

        /**
         * object 的 key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * object key 对应的 value
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
 * 云开发项目版本
 * @class
 */
class CloudBaseProjectVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * SAM json
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Sam = null;

        /**
         * 来源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CodeSource || null}
         */
        this.Source = null;

        /**
         * 创建时间, unix时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间 ,unix时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 项目状态, 枚举值: 
        "creatingEnv"-创建环境中
	"createEnvFail"-创建环境失败
	"building"-构建中
	"buildFail"-构建失败
	"deploying"-部署中
	 "deployFail"-部署失败
	 "success"-部署成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 环境变量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KVPair> || null}
         */
        this.Parameters = null;

        /**
         * 项目类型, 枚举值:
"framework-oneclick" 控制台一键部署
"framework-local-oneclick" cli本地一键部署
"qci-extension-cicd" 内网coding ci cd
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ci的id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CIId = null;

        /**
         * cd的id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CDId = null;

        /**
         * 环境id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VersionNum = null;

        /**
         * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailReason = null;

        /**
         * rc.json内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RcJson = null;

        /**
         * 插件配置内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddonConfig = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 网络配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NetworkConfig = null;

        /**
         * 扩展id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtensionId = null;

        /**
         * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailType = null;

        /**
         * 私有仓库地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RepoUrl = null;

        /**
         * 是否私有仓库代码变更触发自动部署
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AutoDeployOnCodeChange = null;

        /**
         * ci部署进度（%）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BuildPercent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Sam = 'Sam' in params ? params.Sam : null;

        if (params.Source) {
            let obj = new CodeSource();
            obj.deserialize(params.Source)
            this.Source = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Parameters) {
            this.Parameters = new Array();
            for (let z in params.Parameters) {
                let obj = new KVPair();
                obj.deserialize(params.Parameters[z]);
                this.Parameters.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.CIId = 'CIId' in params ? params.CIId : null;
        this.CDId = 'CDId' in params ? params.CDId : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.FailReason = 'FailReason' in params ? params.FailReason : null;
        this.RcJson = 'RcJson' in params ? params.RcJson : null;
        this.AddonConfig = 'AddonConfig' in params ? params.AddonConfig : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.NetworkConfig = 'NetworkConfig' in params ? params.NetworkConfig : null;
        this.ExtensionId = 'ExtensionId' in params ? params.ExtensionId : null;
        this.FailType = 'FailType' in params ? params.FailType : null;
        this.RepoUrl = 'RepoUrl' in params ? params.RepoUrl : null;
        this.AutoDeployOnCodeChange = 'AutoDeployOnCodeChange' in params ? params.AutoDeployOnCodeChange : null;
        this.BuildPercent = 'BuildPercent' in params ? params.BuildPercent : null;

    }
}

/**
 * DescribeEnvDealRegion请求参数结构体
 * @class
 */
class DescribeEnvDealRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 订单类型：
ENV_PREPAY_MINIAPP= 预付费环境(微信小程序)
ENV_PREPAY_CLOUD= 预付费环境(腾讯云)
ENV_POSTPAY = 后付费环境
HOSTING_PREPAY = 预付费静态托管
PACKAGE=套餐包
         * @type {string || null}
         */
        this.DealType = null;

        /**
         * 下单类型：
CREATE = 新购
RENEW = 续费
MODIFY = 套餐调整(升级/降级)
REFUND = 退费
         * @type {string || null}
         */
        this.DealAction = null;

        /**
         * 下单地域：
ap-guangzhou = 广州地域
ap-shanghai = 上海地域
ap-beijing = 北京地域
         * @type {string || null}
         */
        this.DealRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.DealType = 'DealType' in params ? params.DealType : null;
        this.DealAction = 'DealAction' in params ? params.DealAction : null;
        this.DealRegion = 'DealRegion' in params ? params.DealRegion : null;

    }
}

/**
 * DescribeDatabaseACL返回参数结构体
 * @class
 */
class DescribeDatabaseACLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
         * @type {string || null}
         */
        this.AclTag = null;

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
        this.AclTag = 'AclTag' in params ? params.AclTag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCloudBaseRunServerVersion返回参数结构体
 * @class
 */
class ModifyCloudBaseRunServerVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果（succ为成功）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExtensionUploadInfo返回参数结构体
 * @class
 */
class DescribeExtensionUploadInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待上传文件的信息数组
         * @type {Array.<ExtensionFileInfo> || null}
         */
        this.FilesData = null;

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

        if (params.FilesData) {
            this.FilesData = new Array();
            for (let z in params.FilesData) {
                let obj = new ExtensionFileInfo();
                obj.deserialize(params.FilesData[z]);
                this.FilesData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyEnv请求参数结构体
 * @class
 */
class ModifyEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 环境备注名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
         * @type {string || null}
         */
        this.Alias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * 按量付费免费配额信息
 * @class
 */
class PostpayEnvQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 配额值
         * @type {number || null}
         */
        this.Value = null;

        /**
         * 配额生效时间
为空表示没有时间限制
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 配额失效时间
为空表示没有时间限制
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeCloudBaseRunVersionSnapshot返回参数结构体
 * @class
 */
class DescribeCloudBaseRunVersionSnapshotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本历史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudRunServiceSimpleVersionSnapshot> || null}
         */
        this.Snapshots = null;

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

        if (params.Snapshots) {
            this.Snapshots = new Array();
            for (let z in params.Snapshots) {
                let obj = new CloudRunServiceSimpleVersionSnapshot();
                obj.deserialize(params.Snapshots[z]);
                this.Snapshots.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePostpayPackageFreeQuotas返回参数结构体
 * @class
 */
class DescribePostpayPackageFreeQuotasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 免费量资源信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PackageFreeQuotaInfo> || null}
         */
        this.PackageFreeQuotaInfos = null;

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

        if (params.PackageFreeQuotaInfos) {
            this.PackageFreeQuotaInfos = new Array();
            for (let z in params.PackageFreeQuotaInfos) {
                let obj = new PackageFreeQuotaInfo();
                obj.deserialize(params.PackageFreeQuotaInfos[z]);
                this.PackageFreeQuotaInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 一键部署步骤信息
 * @class
 */
class OneClickTaskStepInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 未启动："todo"
运行中："running"
失败："failed"
成功结束："finished"
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 耗时：秒
         * @type {number || null}
         */
        this.CostTime = null;

        /**
         * 失败原因
         * @type {string || null}
         */
        this.FailReason = null;

        /**
         * 步骤名
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.FailReason = 'FailReason' in params ? params.FailReason : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeExtraPkgBillingInfo返回参数结构体
 * @class
 */
class DescribeExtraPkgBillingInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 增值包计费信息列表
         * @type {Array.<EnvBillingInfoItem> || null}
         */
        this.EnvInfoList = null;

        /**
         * 增值包数目
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.EnvInfoList) {
            this.EnvInfoList = new Array();
            for (let z in params.EnvInfoList) {
                let obj = new EnvBillingInfoItem();
                obj.deserialize(params.EnvInfoList[z]);
                this.EnvInfoList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 代码仓库 repo的名字
 * @class
 */
class CloudBaseCodeRepoName extends  AbstractModel {
    constructor(){
        super();

        /**
         * repo的名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * repo的完整全名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FullName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.FullName = 'FullName' in params ? params.FullName : null;

    }
}

/**
 * ModifyCloudBaseRunServerVersion请求参数结构体
 * @class
 */
class ModifyCloudBaseRunServerVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名称
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 版本名称
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 环境变量
         * @type {string || null}
         */
        this.EnvParams = null;

        /**
         * 最小副本数
         * @type {string || null}
         */
        this.MinNum = null;

        /**
         * 最大副本数
         * @type {string || null}
         */
        this.MaxNum = null;

        /**
         * 端口
         * @type {string || null}
         */
        this.ContainerPort = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 日志采集路径
         * @type {string || null}
         */
        this.CustomLogs = null;

        /**
         * 是否重设备注
         * @type {boolean || null}
         */
        this.IsResetRemark = null;

        /**
         * 修改基础信息
         * @type {boolean || null}
         */
        this.BasicModify = null;

        /**
         * 操作备注
         * @type {string || null}
         */
        this.OperatorRemark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.EnvParams = 'EnvParams' in params ? params.EnvParams : null;
        this.MinNum = 'MinNum' in params ? params.MinNum : null;
        this.MaxNum = 'MaxNum' in params ? params.MaxNum : null;
        this.ContainerPort = 'ContainerPort' in params ? params.ContainerPort : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CustomLogs = 'CustomLogs' in params ? params.CustomLogs : null;
        this.IsResetRemark = 'IsResetRemark' in params ? params.IsResetRemark : null;
        this.BasicModify = 'BasicModify' in params ? params.BasicModify : null;
        this.OperatorRemark = 'OperatorRemark' in params ? params.OperatorRemark : null;

    }
}

/**
 * RollUpdateCloudBaseRunServerVersion请求参数结构体
 * @class
 */
class RollUpdateCloudBaseRunServerVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 要替换的版本名称，可以为latest
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 枚举（package/repository/image)
         * @type {string || null}
         */
        this.UploadType = null;

        /**
         * repository的类型(coding/gitlab/github)
         * @type {string || null}
         */
        this.RepositoryType = null;

        /**
         * 流量占比
         * @type {number || null}
         */
        this.FlowRatio = null;

        /**
         * dockerfile地址
         * @type {string || null}
         */
        this.DockerfilePath = null;

        /**
         * 构建目录
         * @type {string || null}
         */
        this.BuildDir = null;

        /**
         * Cpu的大小，单位：核
         * @type {string || null}
         */
        this.Cpu = null;

        /**
         * Mem的大小，单位：G
         * @type {string || null}
         */
        this.Mem = null;

        /**
         * 最小副本数，最小值：0
         * @type {string || null}
         */
        this.MinNum = null;

        /**
         * 最大副本数
         * @type {string || null}
         */
        this.MaxNum = null;

        /**
         * 策略类型
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 策略阈值
         * @type {string || null}
         */
        this.PolicyThreshold = null;

        /**
         * 环境变量
         * @type {string || null}
         */
        this.EnvParams = null;

        /**
         * 容器端口
         * @type {number || null}
         */
        this.ContainerPort = null;

        /**
         * 服务名称
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * repository地址
         * @type {string || null}
         */
        this.Repository = null;

        /**
         * 分支
         * @type {string || null}
         */
        this.Branch = null;

        /**
         * 版本备注
         * @type {string || null}
         */
        this.VersionRemark = null;

        /**
         * 代码包名字
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 代码包版本
         * @type {string || null}
         */
        this.PackageVersion = null;

        /**
         * Image的详情
         * @type {CloudBaseRunImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * Github等拉取代码的详情
         * @type {CloudBaseCodeRepoDetail || null}
         */
        this.CodeDetail = null;

        /**
         * 是否回放流量
         * @type {boolean || null}
         */
        this.IsRebuild = null;

        /**
         * 延迟多长时间开始健康检查（单位s）
         * @type {number || null}
         */
        this.InitialDelaySeconds = null;

        /**
         * cfs挂载信息
         * @type {Array.<CloudBaseRunVolumeMount> || null}
         */
        this.MountVolumeInfo = null;

        /**
         * 是否回滚
         * @type {boolean || null}
         */
        this.Rollback = null;

        /**
         * 版本历史名
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * 自定义采集路径
         * @type {string || null}
         */
        this.CustomLogs = null;

        /**
         * 是否启用统一域名
         * @type {boolean || null}
         */
        this.EnableUnion = null;

        /**
         * 操作备注
         * @type {string || null}
         */
        this.OperatorRemark = null;

        /**
         * 服务路径（只会第一次生效）
         * @type {string || null}
         */
        this.ServerPath = null;

        /**
         * 是否更新Cls
         * @type {boolean || null}
         */
        this.IsUpdateCls = null;

        /**
         * 自动扩缩容策略组
         * @type {Array.<HpaPolicy> || null}
         */
        this.PolicyDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.UploadType = 'UploadType' in params ? params.UploadType : null;
        this.RepositoryType = 'RepositoryType' in params ? params.RepositoryType : null;
        this.FlowRatio = 'FlowRatio' in params ? params.FlowRatio : null;
        this.DockerfilePath = 'DockerfilePath' in params ? params.DockerfilePath : null;
        this.BuildDir = 'BuildDir' in params ? params.BuildDir : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.MinNum = 'MinNum' in params ? params.MinNum : null;
        this.MaxNum = 'MaxNum' in params ? params.MaxNum : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.PolicyThreshold = 'PolicyThreshold' in params ? params.PolicyThreshold : null;
        this.EnvParams = 'EnvParams' in params ? params.EnvParams : null;
        this.ContainerPort = 'ContainerPort' in params ? params.ContainerPort : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.Repository = 'Repository' in params ? params.Repository : null;
        this.Branch = 'Branch' in params ? params.Branch : null;
        this.VersionRemark = 'VersionRemark' in params ? params.VersionRemark : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.PackageVersion = 'PackageVersion' in params ? params.PackageVersion : null;

        if (params.ImageInfo) {
            let obj = new CloudBaseRunImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }

        if (params.CodeDetail) {
            let obj = new CloudBaseCodeRepoDetail();
            obj.deserialize(params.CodeDetail)
            this.CodeDetail = obj;
        }
        this.IsRebuild = 'IsRebuild' in params ? params.IsRebuild : null;
        this.InitialDelaySeconds = 'InitialDelaySeconds' in params ? params.InitialDelaySeconds : null;

        if (params.MountVolumeInfo) {
            this.MountVolumeInfo = new Array();
            for (let z in params.MountVolumeInfo) {
                let obj = new CloudBaseRunVolumeMount();
                obj.deserialize(params.MountVolumeInfo[z]);
                this.MountVolumeInfo.push(obj);
            }
        }
        this.Rollback = 'Rollback' in params ? params.Rollback : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.CustomLogs = 'CustomLogs' in params ? params.CustomLogs : null;
        this.EnableUnion = 'EnableUnion' in params ? params.EnableUnion : null;
        this.OperatorRemark = 'OperatorRemark' in params ? params.OperatorRemark : null;
        this.ServerPath = 'ServerPath' in params ? params.ServerPath : null;
        this.IsUpdateCls = 'IsUpdateCls' in params ? params.IsUpdateCls : null;

        if (params.PolicyDetail) {
            this.PolicyDetail = new Array();
            for (let z in params.PolicyDetail) {
                let obj = new HpaPolicy();
                obj.deserialize(params.PolicyDetail[z]);
                this.PolicyDetail.push(obj);
            }
        }

    }
}

module.exports = {
    DescribeEnvLimitResponse: DescribeEnvLimitResponse,
    DescribeCloudBaseRunAllVpcsResponse: DescribeCloudBaseRunAllVpcsResponse,
    OrderInfo: OrderInfo,
    CheckTcbServiceResponse: CheckTcbServiceResponse,
    DescribeCloudBaseRunConfForGateWayRequest: DescribeCloudBaseRunConfForGateWayRequest,
    DescribeCloudBaseRunServerVersionRequest: DescribeCloudBaseRunServerVersionRequest,
    TurnOnStandaloneGatewayResponse: TurnOnStandaloneGatewayResponse,
    DescribeEnvLimitRequest: DescribeEnvLimitRequest,
    DescribeEnvDealRegionResponse: DescribeEnvDealRegionResponse,
    DeleteCloudBaseRunServerVersionResponse: DeleteCloudBaseRunServerVersionResponse,
    SearchClsLogResponse: SearchClsLogResponse,
    StandaloneGatewayInfo: StandaloneGatewayInfo,
    CloudBaseRunSideSpec: CloudBaseRunSideSpec,
    CommonServiceAPIResponse: CommonServiceAPIResponse,
    DescribeStandaloneGatewayRequest: DescribeStandaloneGatewayRequest,
    DescribeStandaloneGatewayPackageRequest: DescribeStandaloneGatewayPackageRequest,
    DescribePostpayPackageFreeQuotasRequest: DescribePostpayPackageFreeQuotasRequest,
    DescribeEndUserLoginStatisticRequest: DescribeEndUserLoginStatisticRequest,
    DescribeCloudBaseBuildServiceResponse: DescribeCloudBaseBuildServiceResponse,
    DescribeEndUsersRequest: DescribeEndUsersRequest,
    DescribeCloudBaseBuildServiceRequest: DescribeCloudBaseBuildServiceRequest,
    DescribeCloudBaseRunServerDomainNameResponse: DescribeCloudBaseRunServerDomainNameResponse,
    LogResObject: LogResObject,
    DestroyStandaloneGatewayRequest: DestroyStandaloneGatewayRequest,
    CloudRunServiceSimpleVersionSnapshot: CloudRunServiceSimpleVersionSnapshot,
    CreateWxCloudBaseRunServerDBClusterResponse: CreateWxCloudBaseRunServerDBClusterResponse,
    ReplaceActivityRecordResponse: ReplaceActivityRecordResponse,
    DescribeSpecialCostItemsRequest: DescribeSpecialCostItemsRequest,
    DescribeCloudBaseRunResourceForExtendRequest: DescribeCloudBaseRunResourceForExtendRequest,
    DescribeWxCloudBaseRunSubNetsRequest: DescribeWxCloudBaseRunSubNetsRequest,
    ModifyEndUserRequest: ModifyEndUserRequest,
    DescribeCurveDataResponse: DescribeCurveDataResponse,
    RollUpdateCloudBaseRunServerVersionResponse: RollUpdateCloudBaseRunServerVersionResponse,
    ClsInfo: ClsInfo,
    DescribeCloudBaseRunOperationTypesRequest: DescribeCloudBaseRunOperationTypesRequest,
    DescribeAuthDomainsResponse: DescribeAuthDomainsResponse,
    DescribeCloudBaseRunOneClickTaskExternalRequest: DescribeCloudBaseRunOneClickTaskExternalRequest,
    DescribeStandaloneGatewayResponse: DescribeStandaloneGatewayResponse,
    DescribeWxCloudBaseRunEnvsResponse: DescribeWxCloudBaseRunEnvsResponse,
    CreateHostingDomainRequest: CreateHostingDomainRequest,
    DescribeCloudBaseRunResourceRequest: DescribeCloudBaseRunResourceRequest,
    DescribeCloudBaseRunServerRequest: DescribeCloudBaseRunServerRequest,
    CloudBaseRunEmptyDirVolumeSource: CloudBaseRunEmptyDirVolumeSource,
    CloudBaseRunVolumeMount: CloudBaseRunVolumeMount,
    BackendServiceInfo: BackendServiceInfo,
    DescribePostpayFreeQuotasRequest: DescribePostpayFreeQuotasRequest,
    DescribeActivityInfoResponse: DescribeActivityInfoResponse,
    CloudBaseRunImageInfo: CloudBaseRunImageInfo,
    DestroyStandaloneGatewayResponse: DestroyStandaloneGatewayResponse,
    DescribeCloudBaseRunServerVersionResponse: DescribeCloudBaseRunServerVersionResponse,
    EndUserInfo: EndUserInfo,
    DeleteEndUserRequest: DeleteEndUserRequest,
    DescribeHostingDomainTaskRequest: DescribeHostingDomainTaskRequest,
    FreezeCloudBaseRunServersRequest: FreezeCloudBaseRunServersRequest,
    DescribeQuotaDataResponse: DescribeQuotaDataResponse,
    ActivityInfoItem: ActivityInfoItem,
    KVPair: KVPair,
    SmsFreeQuota: SmsFreeQuota,
    FunctionInfo: FunctionInfo,
    CommonServiceAPIRequest: CommonServiceAPIRequest,
    DestroyStaticStoreRequest: DestroyStaticStoreRequest,
    CreateWxCloudBaseRunEnvRequest: CreateWxCloudBaseRunEnvRequest,
    ModifyCloudBaseRunServerFlowConfRequest: ModifyCloudBaseRunServerFlowConfRequest,
    DescribeActivityRecordResponse: DescribeActivityRecordResponse,
    CreateStaticStoreRequest: CreateStaticStoreRequest,
    CreateWxCloudBaseRunServerDBClusterRequest: CreateWxCloudBaseRunServerDBClusterRequest,
    DeleteCloudBaseProjectLatestVersionResponse: DeleteCloudBaseProjectLatestVersionResponse,
    CreateAuthDomainResponse: CreateAuthDomainResponse,
    ModifyDatabaseACLRequest: ModifyDatabaseACLRequest,
    DescribeEnvsRequest: DescribeEnvsRequest,
    CloudBaseRunVersionFlowItem: CloudBaseRunVersionFlowItem,
    DeleteWxGatewayRouteRequest: DeleteWxGatewayRouteRequest,
    DescribeEnvPostpaidDeductRequest: DescribeEnvPostpaidDeductRequest,
    DescribeExtraPkgBillingInfoRequest: DescribeExtraPkgBillingInfoRequest,
    BindEnvGatewayResponse: BindEnvGatewayResponse,
    DescribeWxCloudBaseRunSubNetsResponse: DescribeWxCloudBaseRunSubNetsResponse,
    DescribeEnvFreeQuotaRequest: DescribeEnvFreeQuotaRequest,
    CloudBaseCapabilities: CloudBaseCapabilities,
    DescribeEndUserLoginStatisticResponse: DescribeEndUserLoginStatisticResponse,
    DescribeEnvPostpaidDeductResponse: DescribeEnvPostpaidDeductResponse,
    HpaPolicy: HpaPolicy,
    CloudBaseRunImageSecretInfo: CloudBaseRunImageSecretInfo,
    CreateCloudBaseRunResourceResponse: CreateCloudBaseRunResourceResponse,
    DescribeStandaloneGatewayPackageResponse: DescribeStandaloneGatewayPackageResponse,
    LogObject: LogObject,
    DestroyStaticStoreResponse: DestroyStaticStoreResponse,
    DeleteEndUserResponse: DeleteEndUserResponse,
    ModifyDatabaseACLResponse: ModifyDatabaseACLResponse,
    CloudBaseEsInfo: CloudBaseEsInfo,
    PostPaidEnvDeductInfo: PostPaidEnvDeductInfo,
    ModifyCloudBaseRunServerFlowConfResponse: ModifyCloudBaseRunServerFlowConfResponse,
    DescribeCloudBaseRunOperationTypesResponse: DescribeCloudBaseRunOperationTypesResponse,
    SpecialCostItem: SpecialCostItem,
    EstablishCloudBaseRunServerResponse: EstablishCloudBaseRunServerResponse,
    EnvInfo: EnvInfo,
    DestroyEnvRequest: DestroyEnvRequest,
    DestroyEnvResponse: DestroyEnvResponse,
    DescribeCloudBaseProjectVersionListRequest: DescribeCloudBaseProjectVersionListRequest,
    CodeSource: CodeSource,
    DescribeCloudBaseRunOneClickTaskExternalResponse: DescribeCloudBaseRunOneClickTaskExternalResponse,
    TurnOffStandaloneGatewayResponse: TurnOffStandaloneGatewayResponse,
    DescribeEnvsResponse: DescribeEnvsResponse,
    CreateAuthDomainRequest: CreateAuthDomainRequest,
    CreateHostingDomainResponse: CreateHostingDomainResponse,
    DescribeActivityRecordRequest: DescribeActivityRecordRequest,
    CreateWxCloudBaseRunEnvResponse: CreateWxCloudBaseRunEnvResponse,
    DeleteCloudBaseRunServerVersionRequest: DeleteCloudBaseRunServerVersionRequest,
    CreateCloudBaseRunServerVersionRequest: CreateCloudBaseRunServerVersionRequest,
    LoginStatistic: LoginStatistic,
    DescribeCloudBaseRunServerDomainNameRequest: DescribeCloudBaseRunServerDomainNameRequest,
    DescribeCloudBaseRunAllVpcsRequest: DescribeCloudBaseRunAllVpcsRequest,
    CreatePostpayPackageResponse: CreatePostpayPackageResponse,
    DescribeExtensionUploadInfoRequest: DescribeExtensionUploadInfoRequest,
    ReplaceActivityRecordRequest: ReplaceActivityRecordRequest,
    DeleteWxGatewayRouteResponse: DeleteWxGatewayRouteResponse,
    CloudBaseRunKVPriority: CloudBaseRunKVPriority,
    UnfreezeCloudBaseRunServersRequest: UnfreezeCloudBaseRunServersRequest,
    EstablishCloudBaseRunServerRequest: EstablishCloudBaseRunServerRequest,
    ReinstateEnvResponse: ReinstateEnvResponse,
    CloudBaseRunServiceVolumeMount: CloudBaseRunServiceVolumeMount,
    DescribeSpecialCostItemsResponse: DescribeSpecialCostItemsResponse,
    CreateStandaloneGatewayRequest: CreateStandaloneGatewayRequest,
    DescribeCloudBaseProjectVersionListResponse: DescribeCloudBaseProjectVersionListResponse,
    DescribeDownloadFileRequest: DescribeDownloadFileRequest,
    DescribeEndUserStatisticRequest: DescribeEndUserStatisticRequest,
    CloudBaseRunVpcSubnet: CloudBaseRunVpcSubnet,
    PackageFreeQuotaInfo: PackageFreeQuotaInfo,
    DescribeEnvFreeQuotaResponse: DescribeEnvFreeQuotaResponse,
    CreateAndDeployCloudBaseProjectResponse: CreateAndDeployCloudBaseProjectResponse,
    StaticStorageInfo: StaticStorageInfo,
    DescribeCloudBaseRunResourceForExtendResponse: DescribeCloudBaseRunResourceForExtendResponse,
    CreateAndDeployCloudBaseProjectRequest: CreateAndDeployCloudBaseProjectRequest,
    DescribeCloudBaseRunVersionRequest: DescribeCloudBaseRunVersionRequest,
    EstablishWxGatewayRouteRequest: EstablishWxGatewayRouteRequest,
    UnfreezeCloudBaseRunServersResponse: UnfreezeCloudBaseRunServersResponse,
    DescribeCloudBaseRunConfForGateWayResponse: DescribeCloudBaseRunConfForGateWayResponse,
    DatabasesInfo: DatabasesInfo,
    CloudBaseSecurityContext: CloudBaseSecurityContext,
    ExtensionFile: ExtensionFile,
    TurnOffStandaloneGatewayRequest: TurnOffStandaloneGatewayRequest,
    ReinstateEnvRequest: ReinstateEnvRequest,
    EstablishWxGatewayRouteResponse: EstablishWxGatewayRouteResponse,
    DescribeDatabaseACLRequest: DescribeDatabaseACLRequest,
    CreateCloudBaseRunServerVersionResponse: CreateCloudBaseRunServerVersionResponse,
    CloudBaseRunServerVersionItem: CloudBaseRunServerVersionItem,
    PlatformStatistic: PlatformStatistic,
    DeleteCloudBaseProjectLatestVersionRequest: DeleteCloudBaseProjectLatestVersionRequest,
    DescribeCloudBaseProjectLatestVersionListResponse: DescribeCloudBaseProjectLatestVersionListResponse,
    StandaloneGatewayPackageInfo: StandaloneGatewayPackageInfo,
    CloudBaseRunNfsVolumeSource: CloudBaseRunNfsVolumeSource,
    DescribeSmsQuotasResponse: DescribeSmsQuotasResponse,
    DescribeWxCloudBaseRunEnvsRequest: DescribeWxCloudBaseRunEnvsRequest,
    DescribeCloudBaseRunVersionRsByConditionResponse: DescribeCloudBaseRunVersionRsByConditionResponse,
    DescribeCurveDataRequest: DescribeCurveDataRequest,
    DescribeActivityInfoRequest: DescribeActivityInfoRequest,
    BindEnvGatewayRequest: BindEnvGatewayRequest,
    ModifyEnvResponse: ModifyEnvResponse,
    DescribeDownloadFileResponse: DescribeDownloadFileResponse,
    CreateStandaloneGatewayResponse: CreateStandaloneGatewayResponse,
    DescribeQuotaDataRequest: DescribeQuotaDataRequest,
    CreateStaticStoreResponse: CreateStaticStoreResponse,
    CloudBaseRunVpcInfo: CloudBaseRunVpcInfo,
    DescribeCloudBaseRunResourceResponse: DescribeCloudBaseRunResourceResponse,
    StorageInfo: StorageInfo,
    DescribeCloudBaseRunVersionSnapshotRequest: DescribeCloudBaseRunVersionSnapshotRequest,
    FreequotaInfo: FreequotaInfo,
    TurnOnStandaloneGatewayRequest: TurnOnStandaloneGatewayRequest,
    DescribeUserActivityInfoResponse: DescribeUserActivityInfoResponse,
    DescribePostpayFreeQuotasResponse: DescribePostpayFreeQuotasResponse,
    ActivityRecordItem: ActivityRecordItem,
    AuthDomain: AuthDomain,
    DescribeCloudBaseProjectLatestVersionListRequest: DescribeCloudBaseProjectLatestVersionListRequest,
    LogServiceInfo: LogServiceInfo,
    DescribeEndUsersResponse: DescribeEndUsersResponse,
    DescribeHostingDomainTaskResponse: DescribeHostingDomainTaskResponse,
    EnvBillingInfoItem: EnvBillingInfoItem,
    DescribeEndUserStatisticResponse: DescribeEndUserStatisticResponse,
    DescribeSmsQuotasRequest: DescribeSmsQuotasRequest,
    DescribeCloudBaseRunVersionResponse: DescribeCloudBaseRunVersionResponse,
    CreatePostpayPackageRequest: CreatePostpayPackageRequest,
    DescribeCloudBaseRunPodListResponse: DescribeCloudBaseRunPodListResponse,
    SearchClsLogRequest: SearchClsLogRequest,
    CloudBaseCodeRepoDetail: CloudBaseCodeRepoDetail,
    CheckTcbServiceRequest: CheckTcbServiceRequest,
    DescribeCloudBaseRunVersionRsByConditionRequest: DescribeCloudBaseRunVersionRsByConditionRequest,
    DescribeCloudBaseRunServerResponse: DescribeCloudBaseRunServerResponse,
    DescribeUserActivityInfoRequest: DescribeUserActivityInfoRequest,
    Tag: Tag,
    DescribeCloudBaseRunPodListRequest: DescribeCloudBaseRunPodListRequest,
    CreateCloudBaseRunResourceRequest: CreateCloudBaseRunResourceRequest,
    ModifyEndUserResponse: ModifyEndUserResponse,
    DescribeAuthDomainsRequest: DescribeAuthDomainsRequest,
    FreezeCloudBaseRunServersResponse: FreezeCloudBaseRunServersResponse,
    CloudRunServiceVolume: CloudRunServiceVolume,
    CloudBaseRunForGatewayConf: CloudBaseRunForGatewayConf,
    ExtensionFileInfo: ExtensionFileInfo,
    ObjectKV: ObjectKV,
    CloudBaseProjectVersion: CloudBaseProjectVersion,
    DescribeEnvDealRegionRequest: DescribeEnvDealRegionRequest,
    DescribeDatabaseACLResponse: DescribeDatabaseACLResponse,
    ModifyCloudBaseRunServerVersionResponse: ModifyCloudBaseRunServerVersionResponse,
    DescribeExtensionUploadInfoResponse: DescribeExtensionUploadInfoResponse,
    ModifyEnvRequest: ModifyEnvRequest,
    PostpayEnvQuota: PostpayEnvQuota,
    DescribeCloudBaseRunVersionSnapshotResponse: DescribeCloudBaseRunVersionSnapshotResponse,
    DescribePostpayPackageFreeQuotasResponse: DescribePostpayPackageFreeQuotasResponse,
    OneClickTaskStepInfo: OneClickTaskStepInfo,
    DescribeExtraPkgBillingInfoResponse: DescribeExtraPkgBillingInfoResponse,
    CloudBaseCodeRepoName: CloudBaseCodeRepoName,
    ModifyCloudBaseRunServerVersionRequest: ModifyCloudBaseRunServerVersionRequest,
    RollUpdateCloudBaseRunServerVersionRequest: RollUpdateCloudBaseRunServerVersionRequest,

}
