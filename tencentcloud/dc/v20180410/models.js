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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
 * DeleteDirectConnectTunnel返回参数结构体
 * @class
 */
class DeleteDirectConnectTunnelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
 * ModifyDirectConnectTunnelAttribute返回参数结构体
 * @class
 */
class ModifyDirectConnectTunnelAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
 * 专线通道信息列表
 * @class
 */
class DirectConnectTunnel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线通道ID
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

        /**
         * 物理专线ID
         * @type {string || null}
         */
        this.DirectConnectId = null;

        /**
         * 专线通道状态
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
         * 专线通道的拥有者，开发商账号 ID
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
         * VPC地域
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
         * 专线通道的Vlan
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
         * 专线通道名称
         * @type {string || null}
         */
        this.DirectConnectTunnelName = null;

        /**
         * 专线通道创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 专线通道带宽值
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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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

module.exports = {
    Filter: Filter,
    CreateDirectConnectTunnelResponse: CreateDirectConnectTunnelResponse,
    DeleteDirectConnectTunnelRequest: DeleteDirectConnectTunnelRequest,
    DeleteDirectConnectTunnelResponse: DeleteDirectConnectTunnelResponse,
    DescribeDirectConnectTunnelsRequest: DescribeDirectConnectTunnelsRequest,
    BgpPeer: BgpPeer,
    DescribeDirectConnectTunnelsResponse: DescribeDirectConnectTunnelsResponse,
    ModifyDirectConnectTunnelAttributeRequest: ModifyDirectConnectTunnelAttributeRequest,
    RouteFilterPrefix: RouteFilterPrefix,
    RejectDirectConnectTunnelRequest: RejectDirectConnectTunnelRequest,
    AcceptDirectConnectTunnelRequest: AcceptDirectConnectTunnelRequest,
    ModifyDirectConnectTunnelAttributeResponse: ModifyDirectConnectTunnelAttributeResponse,
    CreateDirectConnectTunnelRequest: CreateDirectConnectTunnelRequest,
    RejectDirectConnectTunnelResponse: RejectDirectConnectTunnelResponse,
    DirectConnectTunnel: DirectConnectTunnel,
    AcceptDirectConnectTunnelResponse: AcceptDirectConnectTunnelResponse,

}
