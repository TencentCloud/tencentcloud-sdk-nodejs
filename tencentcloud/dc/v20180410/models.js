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
 * DescribeInternetAddressQuota请求参数结构体
 * @class
 */
class DescribeInternetAddressQuotaRequest extends  AbstractModel {
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
 * bgp参数，包括Asn，AuthKey
 * @class
 */
class BgpPeer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户侧，BGP Asn
         * @type {number || null}
         */
        this.Asn = null;

        /**
         * 用户侧BGP密钥
         * @type {string || null}
         */
        this.AuthKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Asn = 'Asn' in params ? params.Asn : null;
        this.AuthKey = 'AuthKey' in params ? params.AuthKey : null;

    }
}

/**
 * 专用通道路由
 * @class
 */
class DirectConnectTunnelRoute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用通道路由ID
         * @type {string || null}
         */
        this.RouteId = null;

        /**
         * 网段CIDR
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * 路由类型：BGP/STATIC路由
         * @type {string || null}
         */
        this.RouteType = null;

        /**
         * ENABLE：路由启用，DISABLE：路由禁用
         * @type {string || null}
         */
        this.Status = null;

        /**
         * ASPath信息
         * @type {Array.<string> || null}
         */
        this.ASPath = null;

        /**
         * 路由下一跳IP
         * @type {string || null}
         */
        this.NextHop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ASPath = 'ASPath' in params ? params.ASPath : null;
        this.NextHop = 'NextHop' in params ? params.NextHop : null;

    }
}

/**
 * RejectDirectConnectTunnel请求参数结构体
 * @class
 */
class RejectDirectConnectTunnelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;

    }
}

/**
 * 坐标，经维度描述
 * @class
 */
class Coordinate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 纬度
         * @type {number || null}
         */
        this.Lat = null;

        /**
         * 经度
         * @type {number || null}
         */
        this.Lng = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Lat = 'Lat' in params ? params.Lat : null;
        this.Lng = 'Lng' in params ? params.Lng : null;

    }
}

/**
 * CreateDirectConnect返回参数结构体
 * @class
 */
class CreateDirectConnectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理专线的ID。
         * @type {Array.<string> || null}
         */
        this.DirectConnectIdSet = null;

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
        this.DirectConnectIdSet = 'DirectConnectIdSet' in params ? params.DirectConnectIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDirectConnectTunnelExtra请求参数结构体
 * @class
 */
class DescribeDirectConnectTunnelExtraRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用通道ID
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;

    }
}

/**
 * DescribePublicDirectConnectTunnelRoutes请求参数结构体
 * @class
 */
class DescribePublicDirectConnectTunnelRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用通道ID
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

        /**
         * 过滤条件：
route-type：路由类型，取值：BGP/STATIC
route-subnet：路由cidr，取值如：192.68.1.0/24
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100
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
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 物理专线信息列表
 * @class
 */
class DirectConnect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理专线ID。
         * @type {string || null}
         */
        this.DirectConnectId = null;

        /**
         * 物理专线的名称。
         * @type {string || null}
         */
        this.DirectConnectName = null;

        /**
         * 物理专线的接入点ID。
         * @type {string || null}
         */
        this.AccessPointId = null;

        /**
         * 物理专线的状态。
申请中：PENDING 
申请驳回：REJECTED   
待付款：TOPAY 
已付款：PAID 
建设中：ALLOCATED   
已开通：AVAILABLE  
删除中 ：DELETING
已删除：DELETED 。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 物理专线创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 物理专线的开通时间。
         * @type {string || null}
         */
        this.EnabledTime = null;

        /**
         * 提供接入物理专线的运营商。ChinaTelecom：中国电信， ChinaMobile：中国移动，ChinaUnicom：中国联通， In-houseWiring：楼内线，ChinaOther：中国其他， InternationalOperator：境外其他。
         * @type {string || null}
         */
        this.LineOperator = null;

        /**
         * 本地数据中心的地理位置。
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 物理专线接入接口带宽，单位为Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 用户侧物理专线接入端口类型,取值：100Base-T：百兆电口,1000Base-T（默认值）：千兆电口,1000Base-LX：千兆单模光口（10千米）,10GBase-T：万兆电口10GBase-LR：万兆单模光口（10千米），默认值，千兆单模光口（10千米）
         * @type {string || null}
         */
        this.PortType = null;

        /**
         * 运营商或者服务商为物理专线提供的电路编码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CircuitCode = null;

        /**
         * 冗余物理专线的ID。
         * @type {string || null}
         */
        this.RedundantDirectConnectId = null;

        /**
         * 物理专线调试VLAN。默认开启VLAN，自动分配VLAN。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Vlan = null;

        /**
         * 物理专线调试腾讯侧互联IP。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TencentAddress = null;

        /**
         * 物理专线调试用户侧互联IP。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomerAddress = null;

        /**
         * 物理专线申请者姓名。默认从账户体系获取。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomerName = null;

        /**
         * 物理专线申请者联系邮箱。默认从账户体系获取。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomerContactMail = null;

        /**
         * 物理专线申请者联系号码。默认从账户体系获取。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomerContactNumber = null;

        /**
         * 物理专线的过期时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * 物理专线计费类型。 NON_RECURRING_CHARGE：一次性接入费用；PREPAID_BY_YEAR：按年预付费。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 报障联系人。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FaultReportContactPerson = null;

        /**
         * 报障联系电话。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FaultReportContactNumber = null;

        /**
         * 标签键值对
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * 物理专线的接入点类型。
         * @type {string || null}
         */
        this.AccessPointType = null;

        /**
         * IDC所在城市
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdcCity = null;

        /**
         * 计费状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChargeState = null;

        /**
         * 物理专线开通时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 物理专线是否已签署用户协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SignLaw = null;

        /**
         * 物理专线是否为LocalZone
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.LocalZone = null;

        /**
         * 该物理专线下vlan 0的专用通道数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VlanZeroDirectConnectTunnelCount = null;

        /**
         * 该物理专线下非vlan 0的专用通道数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OtherVlanDirectConnectTunnelCount = null;

        /**
         * 物理专线最小带宽
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinBandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;
        this.DirectConnectName = 'DirectConnectName' in params ? params.DirectConnectName : null;
        this.AccessPointId = 'AccessPointId' in params ? params.AccessPointId : null;
        this.State = 'State' in params ? params.State : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.EnabledTime = 'EnabledTime' in params ? params.EnabledTime : null;
        this.LineOperator = 'LineOperator' in params ? params.LineOperator : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.PortType = 'PortType' in params ? params.PortType : null;
        this.CircuitCode = 'CircuitCode' in params ? params.CircuitCode : null;
        this.RedundantDirectConnectId = 'RedundantDirectConnectId' in params ? params.RedundantDirectConnectId : null;
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;
        this.CustomerContactMail = 'CustomerContactMail' in params ? params.CustomerContactMail : null;
        this.CustomerContactNumber = 'CustomerContactNumber' in params ? params.CustomerContactNumber : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.FaultReportContactPerson = 'FaultReportContactPerson' in params ? params.FaultReportContactPerson : null;
        this.FaultReportContactNumber = 'FaultReportContactNumber' in params ? params.FaultReportContactNumber : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.AccessPointType = 'AccessPointType' in params ? params.AccessPointType : null;
        this.IdcCity = 'IdcCity' in params ? params.IdcCity : null;
        this.ChargeState = 'ChargeState' in params ? params.ChargeState : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.SignLaw = 'SignLaw' in params ? params.SignLaw : null;
        this.LocalZone = 'LocalZone' in params ? params.LocalZone : null;
        this.VlanZeroDirectConnectTunnelCount = 'VlanZeroDirectConnectTunnelCount' in params ? params.VlanZeroDirectConnectTunnelCount : null;
        this.OtherVlanDirectConnectTunnelCount = 'OtherVlanDirectConnectTunnelCount' in params ? params.OtherVlanDirectConnectTunnelCount : null;
        this.MinBandwidth = 'MinBandwidth' in params ? params.MinBandwidth : null;

    }
}

/**
 * 互联网地址详细信息
 * @class
 */
class InternetAddressDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 互联网地址ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 互联网网络地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Subnet = null;

        /**
         * 网络地址掩码长度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaskLen = null;

        /**
         * 0:BGP
1:电信
2:移动
3:联通
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AddrType = null;

        /**
         * 0:使用中
1:已停用
2:已退还
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 申请时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplyTime = null;

        /**
         * 停用时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StopTime = null;

        /**
         * 退还时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReleaseTime = null;

        /**
         * 地域信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 0:IPv4 1:IPv6
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AddrProto = null;

        /**
         * 释放状态的IP地址保留的天数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReserveTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Subnet = 'Subnet' in params ? params.Subnet : null;
        this.MaskLen = 'MaskLen' in params ? params.MaskLen : null;
        this.AddrType = 'AddrType' in params ? params.AddrType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ApplyTime = 'ApplyTime' in params ? params.ApplyTime : null;
        this.StopTime = 'StopTime' in params ? params.StopTime : null;
        this.ReleaseTime = 'ReleaseTime' in params ? params.ReleaseTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.AddrProto = 'AddrProto' in params ? params.AddrProto : null;
        this.ReserveTime = 'ReserveTime' in params ? params.ReserveTime : null;

    }
}

/**
 * DescribeAccessPoints返回参数结构体
 * @class
 */
class DescribeAccessPointsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接入点信息。
         * @type {Array.<AccessPoint> || null}
         */
        this.AccessPointSet = null;

        /**
         * 符合接入点数量。
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

        if (params.AccessPointSet) {
            this.AccessPointSet = new Array();
            for (let z in params.AccessPointSet) {
                let obj = new AccessPoint();
                obj.deserialize(params.AccessPointSet[z]);
                this.AccessPointSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDirectConnectTunnel请求参数结构体
 * @class
 */
class DeleteDirectConnectTunnelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用通道ID
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;

    }
}

/**
 * AcceptDirectConnectTunnel请求参数结构体
 * @class
 */
class AcceptDirectConnectTunnelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理专线拥有者接受共享专用通道申请
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;

    }
}

/**
 * ReleaseInternetAddress请求参数结构体
 * @class
 */
class ReleaseInternetAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公网互联网地址ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeDirectConnectTunnelExtra返回参数结构体
 * @class
 */
class DescribeDirectConnectTunnelExtraResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用通道扩展信息
         * @type {DirectConnectTunnelExtra || null}
         */
        this.DirectConnectTunnelExtra = null;

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

        if (params.DirectConnectTunnelExtra) {
            let obj = new DirectConnectTunnelExtra();
            obj.deserialize(params.DirectConnectTunnelExtra)
            this.DirectConnectTunnelExtra = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDirectConnectTunnelAttribute返回参数结构体
 * @class
 */
class ModifyDirectConnectTunnelAttributeResponse extends  AbstractModel {
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
 * 用户侧网段地址
 * @class
 */
class RouteFilterPrefix extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户侧网段地址
         * @type {string || null}
         */
        this.Cidr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cidr = 'Cidr' in params ? params.Cidr : null;

    }
}

/**
 * ApplyInternetAddress返回参数结构体
 * @class
 */
class ApplyInternetAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 互联网公网地址ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * bgp状态信息
 * @class
 */
class BGPStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯侧主互联IP BGP状态
         * @type {string || null}
         */
        this.TencentAddressBgpState = null;

        /**
         * 腾讯侧备互联IP BGP状态
         * @type {string || null}
         */
        this.TencentBackupAddressBgpState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TencentAddressBgpState = 'TencentAddressBgpState' in params ? params.TencentAddressBgpState : null;
        this.TencentBackupAddressBgpState = 'TencentBackupAddressBgpState' in params ? params.TencentBackupAddressBgpState : null;

    }
}

/**
 * 专用通道扩展信息
 * @class
 */
class DirectConnectTunnelExtra extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用通道ID
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

        /**
         * 物理专线ID
         * @type {string || null}
         */
        this.DirectConnectId = null;

        /**
         * 专用通道状态
AVAILABLE:就绪或者已连接
PENDING:申请中
ALLOCATING:配置中
ALLOCATED:配置完成
ALTERING:修改中
DELETING:删除中
DELETED:删除完成
COMFIRMING:待接受
REJECTED:拒绝
         * @type {string || null}
         */
        this.State = null;

        /**
         * 物理专线的拥有者，开发商账号 ID
         * @type {string || null}
         */
        this.DirectConnectOwnerAccount = null;

        /**
         * 专用通道的拥有者，开发商账号 ID
         * @type {string || null}
         */
        this.OwnerAccount = null;

        /**
         * 网络类型，分别为VPC、BMVPC、CCN
 VPC：私有网络 ，BMVPC：黑石网络，CCN：云联网
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * VPC地域对应的网络名，如ap-guangzhou
         * @type {string || null}
         */
        this.NetworkRegion = null;

        /**
         * 私有网络统一 ID 或者黑石网络统一 ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 专线网关 ID
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * BGP ：BGP路由 STATIC：静态 默认为 BGP 路由
         * @type {string || null}
         */
        this.RouteType = null;

        /**
         * 用户侧BGP，Asn，AuthKey
         * @type {BgpPeer || null}
         */
        this.BgpPeer = null;

        /**
         * 用户侧网段地址
         * @type {Array.<RouteFilterPrefix> || null}
         */
        this.RouteFilterPrefixes = null;

        /**
         * 互联网通道公网网段地址
         * @type {Array.<RouteFilterPrefix> || null}
         */
        this.PublicAddresses = null;

        /**
         * 专用通道的Vlan
         * @type {number || null}
         */
        this.Vlan = null;

        /**
         * 腾讯侧互联 IP
         * @type {string || null}
         */
        this.TencentAddress = null;

        /**
         * 腾讯侧备用互联IP
         * @type {string || null}
         */
        this.TencentBackupAddress = null;

        /**
         * 用户侧互联 IP
         * @type {string || null}
         */
        this.CustomerAddress = null;

        /**
         * 专用通道名称
         * @type {string || null}
         */
        this.DirectConnectTunnelName = null;

        /**
         * 专用通道创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 专用通道带宽值
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 关联的网络自定义探测ID
         * @type {string || null}
         */
        this.NetDetectId = null;

        /**
         * BGP community开关
         * @type {boolean || null}
         */
        this.EnableBGPCommunity = null;

        /**
         * 是否为Nat通道
         * @type {number || null}
         */
        this.NatType = null;

        /**
         * VPC地域简码，如gz、cd
         * @type {string || null}
         */
        this.VpcRegion = null;

        /**
         * 是否开启BFD
         * @type {number || null}
         */
        this.BfdEnable = null;

        /**
         * 是否开启NQA
         * @type {number || null}
         */
        this.NqaEnable = null;

        /**
         * 专用通道接入点类型
         * @type {string || null}
         */
        this.AccessPointType = null;

        /**
         * 专线网关名称
         * @type {string || null}
         */
        this.DirectConnectGatewayName = null;

        /**
         * VPC名称
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 专用通道关联的物理专线是否签署了用户协议
         * @type {boolean || null}
         */
        this.SignLaw = null;

        /**
         * BFD配置信息
         * @type {BFDInfo || null}
         */
        this.BfdInfo = null;

        /**
         * NQA配置信息
         * @type {NQAInfo || null}
         */
        this.NqaInfo = null;

        /**
         * BGP状态
         * @type {BGPStatus || null}
         */
        this.BgpStatus = null;

        /**
         * 是否开启IPv6
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IPv6Enable = null;

        /**
         * 腾讯侧互联IPv6地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TencentIPv6Address = null;

        /**
         * 腾讯侧备用互联IPv6地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TencentBackupIPv6Address = null;

        /**
         * BGPv6状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BGPStatus || null}
         */
        this.BgpIPv6Status = null;

        /**
         * 用户侧互联IPv6地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomerIPv6Address = null;

        /**
         * 专线通道是否支持巨帧。1 支持，0 不支持
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.JumboEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;
        this.State = 'State' in params ? params.State : null;
        this.DirectConnectOwnerAccount = 'DirectConnectOwnerAccount' in params ? params.DirectConnectOwnerAccount : null;
        this.OwnerAccount = 'OwnerAccount' in params ? params.OwnerAccount : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.NetworkRegion = 'NetworkRegion' in params ? params.NetworkRegion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;

        if (params.BgpPeer) {
            let obj = new BgpPeer();
            obj.deserialize(params.BgpPeer)
            this.BgpPeer = obj;
        }

        if (params.RouteFilterPrefixes) {
            this.RouteFilterPrefixes = new Array();
            for (let z in params.RouteFilterPrefixes) {
                let obj = new RouteFilterPrefix();
                obj.deserialize(params.RouteFilterPrefixes[z]);
                this.RouteFilterPrefixes.push(obj);
            }
        }

        if (params.PublicAddresses) {
            this.PublicAddresses = new Array();
            for (let z in params.PublicAddresses) {
                let obj = new RouteFilterPrefix();
                obj.deserialize(params.PublicAddresses[z]);
                this.PublicAddresses.push(obj);
            }
        }
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.TencentBackupAddress = 'TencentBackupAddress' in params ? params.TencentBackupAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.DirectConnectTunnelName = 'DirectConnectTunnelName' in params ? params.DirectConnectTunnelName : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.NetDetectId = 'NetDetectId' in params ? params.NetDetectId : null;
        this.EnableBGPCommunity = 'EnableBGPCommunity' in params ? params.EnableBGPCommunity : null;
        this.NatType = 'NatType' in params ? params.NatType : null;
        this.VpcRegion = 'VpcRegion' in params ? params.VpcRegion : null;
        this.BfdEnable = 'BfdEnable' in params ? params.BfdEnable : null;
        this.NqaEnable = 'NqaEnable' in params ? params.NqaEnable : null;
        this.AccessPointType = 'AccessPointType' in params ? params.AccessPointType : null;
        this.DirectConnectGatewayName = 'DirectConnectGatewayName' in params ? params.DirectConnectGatewayName : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.SignLaw = 'SignLaw' in params ? params.SignLaw : null;

        if (params.BfdInfo) {
            let obj = new BFDInfo();
            obj.deserialize(params.BfdInfo)
            this.BfdInfo = obj;
        }

        if (params.NqaInfo) {
            let obj = new NQAInfo();
            obj.deserialize(params.NqaInfo)
            this.NqaInfo = obj;
        }

        if (params.BgpStatus) {
            let obj = new BGPStatus();
            obj.deserialize(params.BgpStatus)
            this.BgpStatus = obj;
        }
        this.IPv6Enable = 'IPv6Enable' in params ? params.IPv6Enable : null;
        this.TencentIPv6Address = 'TencentIPv6Address' in params ? params.TencentIPv6Address : null;
        this.TencentBackupIPv6Address = 'TencentBackupIPv6Address' in params ? params.TencentBackupIPv6Address : null;

        if (params.BgpIPv6Status) {
            let obj = new BGPStatus();
            obj.deserialize(params.BgpIPv6Status)
            this.BgpIPv6Status = obj;
        }
        this.CustomerIPv6Address = 'CustomerIPv6Address' in params ? params.CustomerIPv6Address : null;
        this.JumboEnable = 'JumboEnable' in params ? params.JumboEnable : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签值
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
 * CreateDirectConnectTunnel请求参数结构体
 * @class
 */
class CreateDirectConnectTunnelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线 ID，例如：dc-kd7d06of
         * @type {string || null}
         */
        this.DirectConnectId = null;

        /**
         * 专用通道名称
         * @type {string || null}
         */
        this.DirectConnectTunnelName = null;

        /**
         * 物理专线 owner，缺省为当前客户（物理专线 owner）
共享专线时这里需要填写共享专线的开发商账号 ID
         * @type {string || null}
         */
        this.DirectConnectOwnerAccount = null;

        /**
         * 网络类型，分别为VPC、BMVPC，CCN，默认是VPC
VPC：私有网络
BMVPC：黑石网络
CCN：云联网
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 网络地域
         * @type {string || null}
         */
        this.NetworkRegion = null;

        /**
         * 私有网络统一 ID 或者黑石网络统一 ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 专线网关 ID，例如 dcg-d545ddf
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * 专线带宽，单位：Mbps
默认是物理专线带宽值
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * BGP ：BGP路由
STATIC：静态
默认为 BGP 路由
         * @type {string || null}
         */
        this.RouteType = null;

        /**
         * BgpPeer，用户侧bgp信息，包括Asn和AuthKey
         * @type {BgpPeer || null}
         */
        this.BgpPeer = null;

        /**
         * 静态路由，用户IDC的网段地址
         * @type {Array.<RouteFilterPrefix> || null}
         */
        this.RouteFilterPrefixes = null;

        /**
         * vlan，范围：0 ~ 3000
0：不开启子接口
默认值是非0
         * @type {number || null}
         */
        this.Vlan = null;

        /**
         * TencentAddress，腾讯侧互联 IP
         * @type {string || null}
         */
        this.TencentAddress = null;

        /**
         * CustomerAddress，用户侧互联 IP
         * @type {string || null}
         */
        this.CustomerAddress = null;

        /**
         * TencentBackupAddress，腾讯侧备用互联 IP
         * @type {string || null}
         */
        this.TencentBackupAddress = null;

        /**
         * 高速上云服务ID
         * @type {string || null}
         */
        this.CloudAttachId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;
        this.DirectConnectTunnelName = 'DirectConnectTunnelName' in params ? params.DirectConnectTunnelName : null;
        this.DirectConnectOwnerAccount = 'DirectConnectOwnerAccount' in params ? params.DirectConnectOwnerAccount : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.NetworkRegion = 'NetworkRegion' in params ? params.NetworkRegion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;

        if (params.BgpPeer) {
            let obj = new BgpPeer();
            obj.deserialize(params.BgpPeer)
            this.BgpPeer = obj;
        }

        if (params.RouteFilterPrefixes) {
            this.RouteFilterPrefixes = new Array();
            for (let z in params.RouteFilterPrefixes) {
                let obj = new RouteFilterPrefix();
                obj.deserialize(params.RouteFilterPrefixes[z]);
                this.RouteFilterPrefixes.push(obj);
            }
        }
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.TencentBackupAddress = 'TencentBackupAddress' in params ? params.TencentBackupAddress : null;
        this.CloudAttachId = 'CloudAttachId' in params ? params.CloudAttachId : null;

    }
}

/**
 * DeleteDirectConnect返回参数结构体
 * @class
 */
class DeleteDirectConnectResponse extends  AbstractModel {
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
 * ModifyDirectConnectTunnelExtra返回参数结构体
 * @class
 */
class ModifyDirectConnectTunnelExtraResponse extends  AbstractModel {
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
 * EnableInternetAddress返回参数结构体
 * @class
 */
class EnableInternetAddressResponse extends  AbstractModel {
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
 * ApplyInternetAddress请求参数结构体
 * @class
 */
class ApplyInternetAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CIDR地址掩码长度
         * @type {number || null}
         */
        this.MaskLen = null;

        /**
         * 0:BGP类型地址
1：中国电信
2：中国移动
3：中国联通
         * @type {number || null}
         */
        this.AddrType = null;

        /**
         * 0：IPv4
1:IPv6
         * @type {number || null}
         */
        this.AddrProto = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaskLen = 'MaskLen' in params ? params.MaskLen : null;
        this.AddrType = 'AddrType' in params ? params.AddrType : null;
        this.AddrProto = 'AddrProto' in params ? params.AddrProto : null;

    }
}

/**
 * DescribeDirectConnects返回参数结构体
 * @class
 */
class DescribeDirectConnectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理专线列表。
         * @type {Array.<DirectConnect> || null}
         */
        this.DirectConnectSet = null;

        /**
         * 符合物理专线列表数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 用户名下物理专线是否都签署了用户协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AllSignLaw = null;

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

        if (params.DirectConnectSet) {
            this.DirectConnectSet = new Array();
            for (let z in params.DirectConnectSet) {
                let obj = new DirectConnect();
                obj.deserialize(params.DirectConnectSet[z]);
                this.DirectConnectSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.AllSignLaw = 'AllSignLaw' in params ? params.AllSignLaw : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessPoints请求参数结构体
 * @class
 */
class DescribeAccessPointsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接入点所在的地域。使用DescribeRegions查询

您可以通过调用 DescribeRegions接口获取地域ID。
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。
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
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * AcceptDirectConnectTunnel返回参数结构体
 * @class
 */
class AcceptDirectConnectTunnelResponse extends  AbstractModel {
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
 * DescribeDirectConnectTunnels请求参数结构体
 * @class
 */
class DescribeDirectConnectTunnelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件:
参数不支持同时指定DirectConnectTunnelIds和Filters。
<li> direct-connect-tunnel-name, 专用通道名称。</li>
<li> direct-connect-tunnel-id, 专用通道实例ID，如dcx-abcdefgh。</li>
<li>direct-connect-id, 物理专线实例ID，如，dc-abcdefgh。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 专用通道 ID数组
         * @type {Array.<string> || null}
         */
        this.DirectConnectTunnelIds = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.DirectConnectTunnelIds = 'DirectConnectTunnelIds' in params ? params.DirectConnectTunnelIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyDirectConnectAttribute请求参数结构体
 * @class
 */
class ModifyDirectConnectAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理专线的ID。
         * @type {string || null}
         */
        this.DirectConnectId = null;

        /**
         * 物理专线名称。
         * @type {string || null}
         */
        this.DirectConnectName = null;

        /**
         * 运营商或者服务商为物理专线提供的电路编码。
         * @type {string || null}
         */
        this.CircuitCode = null;

        /**
         * 物理专线调试VLAN。
         * @type {number || null}
         */
        this.Vlan = null;

        /**
         * 物理专线调试腾讯侧互联 IP。
         * @type {string || null}
         */
        this.TencentAddress = null;

        /**
         * 物理专线调试用户侧互联 IP。
         * @type {string || null}
         */
        this.CustomerAddress = null;

        /**
         * 物理专线申请者姓名。默认从账户体系获取。
         * @type {string || null}
         */
        this.CustomerName = null;

        /**
         * 物理专线申请者联系邮箱。默认从账户体系获取。
         * @type {string || null}
         */
        this.CustomerContactMail = null;

        /**
         * 物理专线申请者联系号码。默认从账户体系获取。
         * @type {string || null}
         */
        this.CustomerContactNumber = null;

        /**
         * 报障联系人。
         * @type {string || null}
         */
        this.FaultReportContactPerson = null;

        /**
         * 报障联系电话。
         * @type {string || null}
         */
        this.FaultReportContactNumber = null;

        /**
         * 物理专线申请者补签用户使用协议
         * @type {boolean || null}
         */
        this.SignLaw = null;

        /**
         * 物理专线带宽
         * @type {number || null}
         */
        this.Bandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;
        this.DirectConnectName = 'DirectConnectName' in params ? params.DirectConnectName : null;
        this.CircuitCode = 'CircuitCode' in params ? params.CircuitCode : null;
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;
        this.CustomerContactMail = 'CustomerContactMail' in params ? params.CustomerContactMail : null;
        this.CustomerContactNumber = 'CustomerContactNumber' in params ? params.CustomerContactNumber : null;
        this.FaultReportContactPerson = 'FaultReportContactPerson' in params ? params.FaultReportContactPerson : null;
        this.FaultReportContactNumber = 'FaultReportContactNumber' in params ? params.FaultReportContactNumber : null;
        this.SignLaw = 'SignLaw' in params ? params.SignLaw : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

    }
}

/**
 * DescribeInternetAddress返回参数结构体
 * @class
 */
class DescribeInternetAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 互联网公网地址数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 互联网公网地址列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InternetAddressDetail> || null}
         */
        this.Subnets = null;

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

        if (params.Subnets) {
            this.Subnets = new Array();
            for (let z in params.Subnets) {
                let obj = new InternetAddressDetail();
                obj.deserialize(params.Subnets[z]);
                this.Subnets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDirectConnectTunnelAttribute请求参数结构体
 * @class
 */
class ModifyDirectConnectTunnelAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用通道ID
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

        /**
         * 专用通道名称
         * @type {string || null}
         */
        this.DirectConnectTunnelName = null;

        /**
         * 用户侧BGP，包括Asn，AuthKey
         * @type {BgpPeer || null}
         */
        this.BgpPeer = null;

        /**
         * 用户侧网段地址
         * @type {Array.<RouteFilterPrefix> || null}
         */
        this.RouteFilterPrefixes = null;

        /**
         * 腾讯侧互联IP
         * @type {string || null}
         */
        this.TencentAddress = null;

        /**
         * 用户侧互联IP
         * @type {string || null}
         */
        this.CustomerAddress = null;

        /**
         * 专用通道带宽值，单位为M。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 腾讯侧备用互联IP
         * @type {string || null}
         */
        this.TencentBackupAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;
        this.DirectConnectTunnelName = 'DirectConnectTunnelName' in params ? params.DirectConnectTunnelName : null;

        if (params.BgpPeer) {
            let obj = new BgpPeer();
            obj.deserialize(params.BgpPeer)
            this.BgpPeer = obj;
        }

        if (params.RouteFilterPrefixes) {
            this.RouteFilterPrefixes = new Array();
            for (let z in params.RouteFilterPrefixes) {
                let obj = new RouteFilterPrefix();
                obj.deserialize(params.RouteFilterPrefixes[z]);
                this.RouteFilterPrefixes.push(obj);
            }
        }
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.TencentBackupAddress = 'TencentBackupAddress' in params ? params.TencentBackupAddress : null;

    }
}

/**
 * 用于条件过滤查询
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤的字段。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段的过滤值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DisableInternetAddress返回参数结构体
 * @class
 */
class DisableInternetAddressResponse extends  AbstractModel {
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
 * DescribeInternetAddressStatistics请求参数结构体
 * @class
 */
class DescribeInternetAddressStatisticsRequest extends  AbstractModel {
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
 * 互联网公网地址统计
 * @class
 */
class InternetAddressStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 互联网公网地址数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SubnetNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.SubnetNum = 'SubnetNum' in params ? params.SubnetNum : null;

    }
}

/**
 * CreateDirectConnect请求参数结构体
 * @class
 */
class CreateDirectConnectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理专线的名称。
         * @type {string || null}
         */
        this.DirectConnectName = null;

        /**
         * 物理专线所在的接入点。
您可以通过调用 DescribeAccessPoints接口获取地域ID。所选择的接入点必须存在且处于可接入的状态。
         * @type {string || null}
         */
        this.AccessPointId = null;

        /**
         * 提供接入物理专线的运营商。ChinaTelecom：中国电信， ChinaMobile：中国移动，ChinaUnicom：中国联通， In-houseWiring：楼内线，ChinaOther：中国其他， InternationalOperator：境外其他。
         * @type {string || null}
         */
        this.LineOperator = null;

        /**
         * 物理专线接入端口类型,取值：100Base-T：百兆电口,1000Base-T（默认值）：千兆电口,1000Base-LX：千兆单模光口（10千米）,10GBase-T：万兆电口10GBase-LR：万兆单模光口（10千米），默认值，千兆单模光口（10千米）。
         * @type {string || null}
         */
        this.PortType = null;

        /**
         * 运营商或者服务商为物理专线提供的电路编码。
         * @type {string || null}
         */
        this.CircuitCode = null;

        /**
         * 本地数据中心的地理位置。
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 物理专线接入接口带宽，单位为Mbps，默认值为1000，取值范围为 [2, 10240]。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 冗余物理专线的ID。
         * @type {string || null}
         */
        this.RedundantDirectConnectId = null;

        /**
         * 物理专线调试VLAN。默认开启VLAN，自动分配VLAN。
         * @type {number || null}
         */
        this.Vlan = null;

        /**
         * 物理专线调试腾讯侧互联 IP。默认自动分配。
         * @type {string || null}
         */
        this.TencentAddress = null;

        /**
         * 物理专线调试用户侧互联 IP。默认自动分配。
         * @type {string || null}
         */
        this.CustomerAddress = null;

        /**
         * 物理专线申请者姓名。默认从账户体系获取。
         * @type {string || null}
         */
        this.CustomerName = null;

        /**
         * 物理专线申请者联系邮箱。默认从账户体系获取。
         * @type {string || null}
         */
        this.CustomerContactMail = null;

        /**
         * 物理专线申请者联系号码。默认从账户体系获取。
         * @type {string || null}
         */
        this.CustomerContactNumber = null;

        /**
         * 报障联系人。
         * @type {string || null}
         */
        this.FaultReportContactPerson = null;

        /**
         * 报障联系电话。
         * @type {string || null}
         */
        this.FaultReportContactNumber = null;

        /**
         * 物理专线申请者是否签署了用户使用协议。默认已签署
         * @type {boolean || null}
         */
        this.SignLaw = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectName = 'DirectConnectName' in params ? params.DirectConnectName : null;
        this.AccessPointId = 'AccessPointId' in params ? params.AccessPointId : null;
        this.LineOperator = 'LineOperator' in params ? params.LineOperator : null;
        this.PortType = 'PortType' in params ? params.PortType : null;
        this.CircuitCode = 'CircuitCode' in params ? params.CircuitCode : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.RedundantDirectConnectId = 'RedundantDirectConnectId' in params ? params.RedundantDirectConnectId : null;
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;
        this.CustomerContactMail = 'CustomerContactMail' in params ? params.CustomerContactMail : null;
        this.CustomerContactNumber = 'CustomerContactNumber' in params ? params.CustomerContactNumber : null;
        this.FaultReportContactPerson = 'FaultReportContactPerson' in params ? params.FaultReportContactPerson : null;
        this.FaultReportContactNumber = 'FaultReportContactNumber' in params ? params.FaultReportContactNumber : null;
        this.SignLaw = 'SignLaw' in params ? params.SignLaw : null;

    }
}

/**
 * EnableInternetAddress请求参数结构体
 * @class
 */
class EnableInternetAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 互联网公网地址ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifyDirectConnectAttribute返回参数结构体
 * @class
 */
class ModifyDirectConnectAttributeResponse extends  AbstractModel {
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
 * ModifyDirectConnectTunnelExtra请求参数结构体
 * @class
 */
class ModifyDirectConnectTunnelExtraRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用通道ID
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

        /**
         * 专用通道的Vlan
         * @type {number || null}
         */
        this.Vlan = null;

        /**
         * 用户侧BGP，Asn，AuthKey
         * @type {BgpPeer || null}
         */
        this.BgpPeer = null;

        /**
         * 用户侧过滤网段地址
         * @type {RouteFilterPrefix || null}
         */
        this.RouteFilterPrefixes = null;

        /**
         * 腾讯侧互联IP
         * @type {string || null}
         */
        this.TencentAddress = null;

        /**
         * 腾讯侧备用互联IP
         * @type {string || null}
         */
        this.TencentBackupAddress = null;

        /**
         * 用户侧互联IP
         * @type {string || null}
         */
        this.CustomerAddress = null;

        /**
         * 专用通道带宽值
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * BGP community开关
         * @type {boolean || null}
         */
        this.EnableBGPCommunity = null;

        /**
         * 是否开启BFD
         * @type {number || null}
         */
        this.BfdEnable = null;

        /**
         * 是否开启NQA
         * @type {number || null}
         */
        this.NqaEnable = null;

        /**
         * BFD配置信息
         * @type {BFDInfo || null}
         */
        this.BfdInfo = null;

        /**
         * NQA配置信息
         * @type {NQAInfo || null}
         */
        this.NqaInfo = null;

        /**
         * 0：停用IPv6
1: 启用IPv6
         * @type {number || null}
         */
        this.IPv6Enable = null;

        /**
         * 去往用户侧的路由信息
         * @type {Array.<RouteFilterPrefix> || null}
         */
        this.CustomerIDCRoutes = null;

        /**
         * 是否开启巨帧
1：开启
0：不开启
         * @type {number || null}
         */
        this.JumboEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;
        this.Vlan = 'Vlan' in params ? params.Vlan : null;

        if (params.BgpPeer) {
            let obj = new BgpPeer();
            obj.deserialize(params.BgpPeer)
            this.BgpPeer = obj;
        }

        if (params.RouteFilterPrefixes) {
            let obj = new RouteFilterPrefix();
            obj.deserialize(params.RouteFilterPrefixes)
            this.RouteFilterPrefixes = obj;
        }
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.TencentBackupAddress = 'TencentBackupAddress' in params ? params.TencentBackupAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.EnableBGPCommunity = 'EnableBGPCommunity' in params ? params.EnableBGPCommunity : null;
        this.BfdEnable = 'BfdEnable' in params ? params.BfdEnable : null;
        this.NqaEnable = 'NqaEnable' in params ? params.NqaEnable : null;

        if (params.BfdInfo) {
            let obj = new BFDInfo();
            obj.deserialize(params.BfdInfo)
            this.BfdInfo = obj;
        }

        if (params.NqaInfo) {
            let obj = new NQAInfo();
            obj.deserialize(params.NqaInfo)
            this.NqaInfo = obj;
        }
        this.IPv6Enable = 'IPv6Enable' in params ? params.IPv6Enable : null;

        if (params.CustomerIDCRoutes) {
            this.CustomerIDCRoutes = new Array();
            for (let z in params.CustomerIDCRoutes) {
                let obj = new RouteFilterPrefix();
                obj.deserialize(params.CustomerIDCRoutes[z]);
                this.CustomerIDCRoutes.push(obj);
            }
        }
        this.JumboEnable = 'JumboEnable' in params ? params.JumboEnable : null;

    }
}

/**
 * RejectDirectConnectTunnel返回参数结构体
 * @class
 */
class RejectDirectConnectTunnelResponse extends  AbstractModel {
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
 * CreateDirectConnectTunnel返回参数结构体
 * @class
 */
class CreateDirectConnectTunnelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用通道ID
         * @type {Array.<string> || null}
         */
        this.DirectConnectTunnelIdSet = null;

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
        this.DirectConnectTunnelIdSet = 'DirectConnectTunnelIdSet' in params ? params.DirectConnectTunnelIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDirectConnects请求参数结构体
 * @class
 */
class DescribeDirectConnectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件:
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 物理专线 ID数组
         * @type {Array.<string> || null}
         */
        this.DirectConnectIds = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.DirectConnectIds = 'DirectConnectIds' in params ? params.DirectConnectIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteDirectConnectTunnel返回参数结构体
 * @class
 */
class DeleteDirectConnectTunnelResponse extends  AbstractModel {
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
 * BFD配置信息
 * @class
 */
class BFDInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 健康检查次数
         * @type {number || null}
         */
        this.ProbeFailedTimes = null;

        /**
         * 健康检查间隔
         * @type {number || null}
         */
        this.Interval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProbeFailedTimes = 'ProbeFailedTimes' in params ? params.ProbeFailedTimes : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * DeleteDirectConnect请求参数结构体
 * @class
 */
class DeleteDirectConnectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理专线的ID。
         * @type {string || null}
         */
        this.DirectConnectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;

    }
}

/**
 * DescribeDirectConnectTunnels返回参数结构体
 * @class
 */
class DescribeDirectConnectTunnelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用通道列表
         * @type {Array.<DirectConnectTunnel> || null}
         */
        this.DirectConnectTunnelSet = null;

        /**
         * 符合专用通道数量。
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

        if (params.DirectConnectTunnelSet) {
            this.DirectConnectTunnelSet = new Array();
            for (let z in params.DirectConnectTunnelSet) {
                let obj = new DirectConnectTunnel();
                obj.deserialize(params.DirectConnectTunnelSet[z]);
                this.DirectConnectTunnelSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 接入点信息。
 * @class
 */
class AccessPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接入点的名称。
         * @type {string || null}
         */
        this.AccessPointName = null;

        /**
         * 接入点唯一ID。
         * @type {string || null}
         */
        this.AccessPointId = null;

        /**
         * 接入点的状态。可用，不可用。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 接入点的位置。
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 接入点支持的运营商列表。
         * @type {Array.<string> || null}
         */
        this.LineOperator = null;

        /**
         * 接入点管理的大区ID。
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 接入点可用的端口类型列表。1000BASE-T代表千兆电口，1000BASE-LX代表千兆单模光口10km，1000BASE-ZX代表千兆单模光口80km,10GBASE-LR代表万兆单模光口10km,10GBASE-ZR代表万兆单模光口80km,10GBASE-LH代表万兆单模光口40km,100GBASE-LR4代表100G单模光口10km
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AvailablePortType = null;

        /**
         * 接入点经纬度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Coordinate || null}
         */
        this.Coordinate = null;

        /**
         * 接入点所在城市
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.City = null;

        /**
         * 接入点地域名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessPointName = 'AccessPointName' in params ? params.AccessPointName : null;
        this.AccessPointId = 'AccessPointId' in params ? params.AccessPointId : null;
        this.State = 'State' in params ? params.State : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.LineOperator = 'LineOperator' in params ? params.LineOperator : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.AvailablePortType = 'AvailablePortType' in params ? params.AvailablePortType : null;

        if (params.Coordinate) {
            let obj = new Coordinate();
            obj.deserialize(params.Coordinate)
            this.Coordinate = obj;
        }
        this.City = 'City' in params ? params.City : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeInternetAddressStatistics返回参数结构体
 * @class
 */
class DescribeInternetAddressStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 互联网公网地址统计信息数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 互联网公网地址统计信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InternetAddressStatistics> || null}
         */
        this.InternetAddressStatistics = null;

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

        if (params.InternetAddressStatistics) {
            this.InternetAddressStatistics = new Array();
            for (let z in params.InternetAddressStatistics) {
                let obj = new InternetAddressStatistics();
                obj.deserialize(params.InternetAddressStatistics[z]);
                this.InternetAddressStatistics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * nqa配置信息
 * @class
 */
class NQAInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 健康检查次数
         * @type {number || null}
         */
        this.ProbeFailedTimes = null;

        /**
         * 健康检查间隔
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 健康检查地址
         * @type {string || null}
         */
        this.DestinationIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProbeFailedTimes = 'ProbeFailedTimes' in params ? params.ProbeFailedTimes : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.DestinationIp = 'DestinationIp' in params ? params.DestinationIp : null;

    }
}

/**
 * DescribeInternetAddress请求参数结构体
 * @class
 */
class DescribeInternetAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件：
<li>AddrType, 地址类型。0：BGP 1; 1: 电信， 2：移动， 3：联通</li>
<li>AddrProto地址类型。0：IPv4 1:IPv6</li>
<li>Status 地址状态。 0：使用中， 1：已停用， 2：已退还</li>
<li>Subnet 互联网公网地址，数组</li>
<InstanceIds>互联网公网地址ID，数组</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribePublicDirectConnectTunnelRoutes返回参数结构体
 * @class
 */
class DescribePublicDirectConnectTunnelRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 互联网通道路由列表
         * @type {Array.<DirectConnectTunnelRoute> || null}
         */
        this.Routes = null;

        /**
         * 记录总数
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

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new DirectConnectTunnelRoute();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInternetAddressQuota返回参数结构体
 * @class
 */
class DescribeInternetAddressQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPv6互联网公网允许的最小前缀长度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Ipv6PrefixLen = null;

        /**
         * BGP类型IPv4互联网地址配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Ipv4BgpQuota = null;

        /**
         * 非BGP类型IPv4互联网地址配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Ipv4OtherQuota = null;

        /**
         * BGP类型IPv4互联网地址已使用数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Ipv4BgpNum = null;

        /**
         * 非BGP类型互联网地址已使用数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Ipv4OtherNum = null;

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
        this.Ipv6PrefixLen = 'Ipv6PrefixLen' in params ? params.Ipv6PrefixLen : null;
        this.Ipv4BgpQuota = 'Ipv4BgpQuota' in params ? params.Ipv4BgpQuota : null;
        this.Ipv4OtherQuota = 'Ipv4OtherQuota' in params ? params.Ipv4OtherQuota : null;
        this.Ipv4BgpNum = 'Ipv4BgpNum' in params ? params.Ipv4BgpNum : null;
        this.Ipv4OtherNum = 'Ipv4OtherNum' in params ? params.Ipv4OtherNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReleaseInternetAddress返回参数结构体
 * @class
 */
class ReleaseInternetAddressResponse extends  AbstractModel {
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
 * 专用通道信息列表
 * @class
 */
class DirectConnectTunnel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用通道ID
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

        /**
         * 物理专线ID
         * @type {string || null}
         */
        this.DirectConnectId = null;

        /**
         * 专用通道状态
AVAILABLE:就绪或者已连接
PENDING:申请中
ALLOCATING:配置中
ALLOCATED:配置完成
ALTERING:修改中
DELETING:删除中
DELETED:删除完成
COMFIRMING:待接受
REJECTED:拒绝
         * @type {string || null}
         */
        this.State = null;

        /**
         * 物理专线的拥有者，开发商账号 ID
         * @type {string || null}
         */
        this.DirectConnectOwnerAccount = null;

        /**
         * 专用通道的拥有者，开发商账号 ID
         * @type {string || null}
         */
        this.OwnerAccount = null;

        /**
         * 网络类型，分别为VPC、BMVPC、CCN
 VPC：私有网络 ，BMVPC：黑石网络，CCN：云联网
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * VPC地域对应的网络名，如ap-guangzhou
         * @type {string || null}
         */
        this.NetworkRegion = null;

        /**
         * 私有网络统一 ID 或者黑石网络统一 ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 专线网关 ID
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * BGP ：BGP路由 STATIC：静态 默认为 BGP 路由
         * @type {string || null}
         */
        this.RouteType = null;

        /**
         * 用户侧BGP，Asn，AuthKey
         * @type {BgpPeer || null}
         */
        this.BgpPeer = null;

        /**
         * 用户侧网段地址
         * @type {Array.<RouteFilterPrefix> || null}
         */
        this.RouteFilterPrefixes = null;

        /**
         * 专用通道的Vlan
         * @type {number || null}
         */
        this.Vlan = null;

        /**
         * TencentAddress，腾讯侧互联 IP
         * @type {string || null}
         */
        this.TencentAddress = null;

        /**
         * CustomerAddress，用户侧互联 IP
         * @type {string || null}
         */
        this.CustomerAddress = null;

        /**
         * 专用通道名称
         * @type {string || null}
         */
        this.DirectConnectTunnelName = null;

        /**
         * 专用通道创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 专用通道带宽值
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 专用通道标签值
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * 关联的网络自定义探测ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NetDetectId = null;

        /**
         * BGP community开关
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableBGPCommunity = null;

        /**
         * 是否为Nat通道
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NatType = null;

        /**
         * VPC地域简码，如gz、cd
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcRegion = null;

        /**
         * 是否开启BFD
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BfdEnable = null;

        /**
         * 专用通道接入点类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccessPointType = null;

        /**
         * 专线网关名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DirectConnectGatewayName = null;

        /**
         * VPC名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * TencentBackupAddress，腾讯侧备用互联 IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TencentBackupAddress = null;

        /**
         * 专用通道关联的物理专线是否签署了用户协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SignLaw = null;

        /**
         * 高速上云服务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CloudAttachId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;
        this.State = 'State' in params ? params.State : null;
        this.DirectConnectOwnerAccount = 'DirectConnectOwnerAccount' in params ? params.DirectConnectOwnerAccount : null;
        this.OwnerAccount = 'OwnerAccount' in params ? params.OwnerAccount : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.NetworkRegion = 'NetworkRegion' in params ? params.NetworkRegion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;

        if (params.BgpPeer) {
            let obj = new BgpPeer();
            obj.deserialize(params.BgpPeer)
            this.BgpPeer = obj;
        }

        if (params.RouteFilterPrefixes) {
            this.RouteFilterPrefixes = new Array();
            for (let z in params.RouteFilterPrefixes) {
                let obj = new RouteFilterPrefix();
                obj.deserialize(params.RouteFilterPrefixes[z]);
                this.RouteFilterPrefixes.push(obj);
            }
        }
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.DirectConnectTunnelName = 'DirectConnectTunnelName' in params ? params.DirectConnectTunnelName : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.NetDetectId = 'NetDetectId' in params ? params.NetDetectId : null;
        this.EnableBGPCommunity = 'EnableBGPCommunity' in params ? params.EnableBGPCommunity : null;
        this.NatType = 'NatType' in params ? params.NatType : null;
        this.VpcRegion = 'VpcRegion' in params ? params.VpcRegion : null;
        this.BfdEnable = 'BfdEnable' in params ? params.BfdEnable : null;
        this.AccessPointType = 'AccessPointType' in params ? params.AccessPointType : null;
        this.DirectConnectGatewayName = 'DirectConnectGatewayName' in params ? params.DirectConnectGatewayName : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.TencentBackupAddress = 'TencentBackupAddress' in params ? params.TencentBackupAddress : null;
        this.SignLaw = 'SignLaw' in params ? params.SignLaw : null;
        this.CloudAttachId = 'CloudAttachId' in params ? params.CloudAttachId : null;

    }
}

/**
 * DisableInternetAddress请求参数结构体
 * @class
 */
class DisableInternetAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公网互联网地址ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

module.exports = {
    DescribeInternetAddressQuotaRequest: DescribeInternetAddressQuotaRequest,
    BgpPeer: BgpPeer,
    DirectConnectTunnelRoute: DirectConnectTunnelRoute,
    RejectDirectConnectTunnelRequest: RejectDirectConnectTunnelRequest,
    Coordinate: Coordinate,
    CreateDirectConnectResponse: CreateDirectConnectResponse,
    DescribeDirectConnectTunnelExtraRequest: DescribeDirectConnectTunnelExtraRequest,
    DescribePublicDirectConnectTunnelRoutesRequest: DescribePublicDirectConnectTunnelRoutesRequest,
    DirectConnect: DirectConnect,
    InternetAddressDetail: InternetAddressDetail,
    DescribeAccessPointsResponse: DescribeAccessPointsResponse,
    DeleteDirectConnectTunnelRequest: DeleteDirectConnectTunnelRequest,
    AcceptDirectConnectTunnelRequest: AcceptDirectConnectTunnelRequest,
    ReleaseInternetAddressRequest: ReleaseInternetAddressRequest,
    DescribeDirectConnectTunnelExtraResponse: DescribeDirectConnectTunnelExtraResponse,
    ModifyDirectConnectTunnelAttributeResponse: ModifyDirectConnectTunnelAttributeResponse,
    RouteFilterPrefix: RouteFilterPrefix,
    ApplyInternetAddressResponse: ApplyInternetAddressResponse,
    BGPStatus: BGPStatus,
    DirectConnectTunnelExtra: DirectConnectTunnelExtra,
    Tag: Tag,
    CreateDirectConnectTunnelRequest: CreateDirectConnectTunnelRequest,
    DeleteDirectConnectResponse: DeleteDirectConnectResponse,
    ModifyDirectConnectTunnelExtraResponse: ModifyDirectConnectTunnelExtraResponse,
    EnableInternetAddressResponse: EnableInternetAddressResponse,
    ApplyInternetAddressRequest: ApplyInternetAddressRequest,
    DescribeDirectConnectsResponse: DescribeDirectConnectsResponse,
    DescribeAccessPointsRequest: DescribeAccessPointsRequest,
    AcceptDirectConnectTunnelResponse: AcceptDirectConnectTunnelResponse,
    DescribeDirectConnectTunnelsRequest: DescribeDirectConnectTunnelsRequest,
    ModifyDirectConnectAttributeRequest: ModifyDirectConnectAttributeRequest,
    DescribeInternetAddressResponse: DescribeInternetAddressResponse,
    ModifyDirectConnectTunnelAttributeRequest: ModifyDirectConnectTunnelAttributeRequest,
    Filter: Filter,
    DisableInternetAddressResponse: DisableInternetAddressResponse,
    DescribeInternetAddressStatisticsRequest: DescribeInternetAddressStatisticsRequest,
    InternetAddressStatistics: InternetAddressStatistics,
    CreateDirectConnectRequest: CreateDirectConnectRequest,
    EnableInternetAddressRequest: EnableInternetAddressRequest,
    ModifyDirectConnectAttributeResponse: ModifyDirectConnectAttributeResponse,
    ModifyDirectConnectTunnelExtraRequest: ModifyDirectConnectTunnelExtraRequest,
    RejectDirectConnectTunnelResponse: RejectDirectConnectTunnelResponse,
    CreateDirectConnectTunnelResponse: CreateDirectConnectTunnelResponse,
    DescribeDirectConnectsRequest: DescribeDirectConnectsRequest,
    DeleteDirectConnectTunnelResponse: DeleteDirectConnectTunnelResponse,
    BFDInfo: BFDInfo,
    DeleteDirectConnectRequest: DeleteDirectConnectRequest,
    DescribeDirectConnectTunnelsResponse: DescribeDirectConnectTunnelsResponse,
    AccessPoint: AccessPoint,
    DescribeInternetAddressStatisticsResponse: DescribeInternetAddressStatisticsResponse,
    NQAInfo: NQAInfo,
    DescribeInternetAddressRequest: DescribeInternetAddressRequest,
    DescribePublicDirectConnectTunnelRoutesResponse: DescribePublicDirectConnectTunnelRoutesResponse,
    DescribeInternetAddressQuotaResponse: DescribeInternetAddressQuotaResponse,
    ReleaseInternetAddressResponse: ReleaseInternetAddressResponse,
    DirectConnectTunnel: DirectConnectTunnel,
    DisableInternetAddressRequest: DisableInternetAddressRequest,

}
