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
 * ModifyAddressTemplateAttribute返回参数结构体
 * @class
 */
class ModifyAddressTemplateAttributeResponse extends  AbstractModel {
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
 * 协议端口模板集合
 * @class
 */
class ServiceTemplateGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议端口模板集合实例ID，例如：ppmg-2klmrefu。
         * @type {string || null}
         */
        this.ServiceTemplateGroupId = null;

        /**
         * 协议端口模板集合名称。
         * @type {string || null}
         */
        this.ServiceTemplateGroupName = null;

        /**
         * 协议端口模板实例ID。
         * @type {Array.<string> || null}
         */
        this.ServiceTemplateIdSet = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTemplateGroupId = 'ServiceTemplateGroupId' in params ? params.ServiceTemplateGroupId : null;
        this.ServiceTemplateGroupName = 'ServiceTemplateGroupName' in params ? params.ServiceTemplateGroupName : null;
        this.ServiceTemplateIdSet = 'ServiceTemplateIdSet' in params ? params.ServiceTemplateIdSet : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * CreateRoutes请求参数结构体
 * @class
 */
class CreateRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由策略对象。
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * DescribeHaVips返回参数结构体
 * @class
 */
class DescribeHaVipsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的对象数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * `HAVIP`对象数组。
         * @type {Array.<HaVip> || null}
         */
        this.HaVipSet = null;

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

        if (params.HaVipSet) {
            this.HaVipSet = new Array();
            for (let z in params.HaVipSet) {
                let obj = new HaVip();
                obj.deserialize(params.HaVipSet[z]);
                this.HaVipSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteServiceTemplate返回参数结构体
 * @class
 */
class DeleteServiceTemplateResponse extends  AbstractModel {
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
 * CreateServiceTemplate请求参数结构体
 * @class
 */
class CreateServiceTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议端口模板名称
         * @type {string || null}
         */
        this.ServiceTemplateName = null;

        /**
         * 支持单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。
         * @type {Array.<string> || null}
         */
        this.Services = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTemplateName = 'ServiceTemplateName' in params ? params.ServiceTemplateName : null;
        this.Services = 'Services' in params ? params.Services : null;

    }
}

/**
 * IKE配置（Internet Key Exchange，因特网密钥交换），IKE具有一套自我保护机制，用户配置网络安全协议
 * @class
 */
class IKEOptionsSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加密算法，可选值：'3DES-CBC', 'AES-CBC-128', 'AES-CBS-192', 'AES-CBC-256', 'DES-CBC'，默认为3DES-CBC
         * @type {string || null}
         */
        this.PropoEncryAlgorithm = null;

        /**
         * 认证算法：可选值：'MD5', 'SHA1'，默认为MD5
         * @type {string || null}
         */
        this.PropoAuthenAlgorithm = null;

        /**
         * 协商模式：可选值：'AGGRESSIVE', 'MAIN'，默认为MAIN
         * @type {string || null}
         */
        this.ExchangeMode = null;

        /**
         * 本端标识类型：可选值：'ADDRESS', 'FQDN'，默认为ADDRESS
         * @type {string || null}
         */
        this.LocalIdentity = null;

        /**
         * 对端标识类型：可选值：'ADDRESS', 'FQDN'，默认为ADDRESS
         * @type {string || null}
         */
        this.RemoteIdentity = null;

        /**
         * 本端标识，当LocalIdentity选为ADDRESS时，LocalAddress必填。localAddress默认为vpn网关公网IP
         * @type {string || null}
         */
        this.LocalAddress = null;

        /**
         * 对端标识，当RemoteIdentity选为ADDRESS时，RemoteAddress必填
         * @type {string || null}
         */
        this.RemoteAddress = null;

        /**
         * 本端标识，当LocalIdentity选为FQDN时，LocalFqdnName必填
         * @type {string || null}
         */
        this.LocalFqdnName = null;

        /**
         * 对端标识，当remoteIdentity选为FQDN时，RemoteFqdnName必填
         * @type {string || null}
         */
        this.RemoteFqdnName = null;

        /**
         * DH group，指定IKE交换密钥时使用的DH组，可选值：'GROUP1', 'GROUP2', 'GROUP5', 'GROUP14', 'GROUP24'，
         * @type {string || null}
         */
        this.DhGroupName = null;

        /**
         * IKE SA Lifetime，单位：秒，设置IKE SA的生存周期，取值范围：60-604800
         * @type {number || null}
         */
        this.IKESaLifetimeSeconds = null;

        /**
         * IKE版本
         * @type {string || null}
         */
        this.IKEVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PropoEncryAlgorithm = 'PropoEncryAlgorithm' in params ? params.PropoEncryAlgorithm : null;
        this.PropoAuthenAlgorithm = 'PropoAuthenAlgorithm' in params ? params.PropoAuthenAlgorithm : null;
        this.ExchangeMode = 'ExchangeMode' in params ? params.ExchangeMode : null;
        this.LocalIdentity = 'LocalIdentity' in params ? params.LocalIdentity : null;
        this.RemoteIdentity = 'RemoteIdentity' in params ? params.RemoteIdentity : null;
        this.LocalAddress = 'LocalAddress' in params ? params.LocalAddress : null;
        this.RemoteAddress = 'RemoteAddress' in params ? params.RemoteAddress : null;
        this.LocalFqdnName = 'LocalFqdnName' in params ? params.LocalFqdnName : null;
        this.RemoteFqdnName = 'RemoteFqdnName' in params ? params.RemoteFqdnName : null;
        this.DhGroupName = 'DhGroupName' in params ? params.DhGroupName : null;
        this.IKESaLifetimeSeconds = 'IKESaLifetimeSeconds' in params ? params.IKESaLifetimeSeconds : null;
        this.IKEVersion = 'IKEVersion' in params ? params.IKEVersion : null;

    }
}

/**
 * TransformAddress返回参数结构体
 * @class
 */
class TransformAddressResponse extends  AbstractModel {
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
 * DescribeNetworkInterfaces请求参数结构体
 * @class
 */
class DescribeNetworkInterfacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID查询。形如：eni-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定NetworkInterfaceIds和Filters。
         * @type {Array.<string> || null}
         */
        this.NetworkInterfaceIds = null;

        /**
         * 过滤条件，参数不支持同时指定NetworkInterfaceIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。</li>
<li>network-interface-id - String - （过滤条件）弹性网卡实例ID，形如：eni-5k56k7k7。</li>
<li>attachment.instance-id - String - （过滤条件）绑定的云服务器实例ID，形如：ins-3nqpdn3i。</li>
<li>groups.security-group-id - String - （过滤条件）绑定的安全组实例ID，例如：sg-f9ekbxeq。</li>
<li>network-interface-name - String - （过滤条件）网卡实例名称。</li>
<li>network-interface-description - String - （过滤条件）网卡实例描述。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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
        this.NetworkInterfaceIds = 'NetworkInterfaceIds' in params ? params.NetworkInterfaceIds : null;

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
 * DescribeVpcIpv6Addresses请求参数结构体
 * @class
 */
class DescribeVpcIpv6AddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`，形如：`vpc-f49l6u0z`。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * `IP`地址列表，批量查询单次请求最多支持`10`个。
         * @type {Array.<string> || null}
         */
        this.Ipv6Addresses = null;

        /**
         * 偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量。
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
        this.Ipv6Addresses = 'Ipv6Addresses' in params ? params.Ipv6Addresses : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeCustomerGateways请求参数结构体
 * @class
 */
class DescribeCustomerGatewaysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对端网关ID，例如：cgw-2wqq41m9。每次请求的实例的上限为100。参数不支持同时指定CustomerGatewayIds和Filters。
         * @type {Array.<string> || null}
         */
        this.CustomerGatewayIds = null;

        /**
         * 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定CustomerGatewayIds和Filters。
<li>customer-gateway-id - String - （过滤条件）用户网关唯一ID形如：`cgw-mgp33pll`。</li>
<li>customer-gateway-name - String - （过滤条件）用户网关名称形如：`test-cgw`。</li>
<li>ip-address - String - （过滤条件）公网地址形如：`58.211.1.12`。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
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
        this.CustomerGatewayIds = 'CustomerGatewayIds' in params ? params.CustomerGatewayIds : null;

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
 * ModifyIp6Rule返回参数结构体
 * @class
 */
class ModifyIp6RuleResponse extends  AbstractModel {
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
 * DescribeVpnGateways返回参数结构体
 * @class
 */
class DescribeVpnGatewaysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * VPN网关实例详细信息列表。
         * @type {Array.<VpnGateway> || null}
         */
        this.VpnGatewaySet = null;

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

        if (params.VpnGatewaySet) {
            this.VpnGatewaySet = new Array();
            for (let z in params.VpnGatewaySet) {
                let obj = new VpnGateway();
                obj.deserialize(params.VpnGatewaySet[z]);
                this.VpnGatewaySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 默认VPC和子网
 * @class
 */
class DefaultVpcSubnet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认VpcId
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 默认SubnetId
         * @type {string || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * 流日志
 * @class
 */
class FlowLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私用网络ID或者统一ID，建议使用统一ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 流日志唯一ID
         * @type {string || null}
         */
        this.FlowLogId = null;

        /**
         * 流日志实例名字
         * @type {string || null}
         */
        this.FlowLogName = null;

        /**
         * 流日志所属资源类型，VPC|SUBNET|NETWORKINTERFACE
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 资源唯一ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 流日志采集类型，ACCEPT|REJECT|ALL
         * @type {string || null}
         */
        this.TrafficType = null;

        /**
         * 流日志存储ID
         * @type {string || null}
         */
        this.CloudLogId = null;

        /**
         * 流日志存储ID状态
         * @type {string || null}
         */
        this.CloudLogState = null;

        /**
         * 流日志描述信息
         * @type {string || null}
         */
        this.FlowLogDescription = null;

        /**
         * 流日志创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.FlowLogId = 'FlowLogId' in params ? params.FlowLogId : null;
        this.FlowLogName = 'FlowLogName' in params ? params.FlowLogName : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.TrafficType = 'TrafficType' in params ? params.TrafficType : null;
        this.CloudLogId = 'CloudLogId' in params ? params.CloudLogId : null;
        this.CloudLogState = 'CloudLogState' in params ? params.CloudLogState : null;
        this.FlowLogDescription = 'FlowLogDescription' in params ? params.FlowLogDescription : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * ResetAttachCcnInstances返回参数结构体
 * @class
 */
class ResetAttachCcnInstancesResponse extends  AbstractModel {
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
 * DescribeServiceTemplateGroups返回参数结构体
 * @class
 */
class DescribeServiceTemplateGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 协议端口模板集合。
         * @type {Array.<ServiceTemplateGroup> || null}
         */
        this.ServiceTemplateGroupSet = null;

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

        if (params.ServiceTemplateGroupSet) {
            this.ServiceTemplateGroupSet = new Array();
            for (let z in params.ServiceTemplateGroupSet) {
                let obj = new ServiceTemplateGroup();
                obj.deserialize(params.ServiceTemplateGroupSet[z]);
                this.ServiceTemplateGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetachClassicLinkVpc请求参数结构体
 * @class
 */
class DetachClassicLinkVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * CVM实例ID查询。形如：ins-r8hr2upy。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * ModifyAddressAttribute请求参数结构体
 * @class
 */
class ModifyAddressAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：`eip-11112222`。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * 修改后的 EIP 名称。长度上限为20个字符。
         * @type {string || null}
         */
        this.AddressName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.AddressName = 'AddressName' in params ? params.AddressName : null;

    }
}

/**
 * DeleteBandwidthPackage返回参数结构体
 * @class
 */
class DeleteBandwidthPackageResponse extends  AbstractModel {
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
 * ModifyDirectConnectGatewayAttribute请求参数结构体
 * @class
 */
class ModifyDirectConnectGatewayAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线网关唯一`ID`，形如：`dcg-9o233uri`。
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * 专线网关名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.DirectConnectGatewayName = null;

        /**
         * 云联网路由学习类型，可选值：`BGP`（自动学习）、`STATIC`（静态，即用户配置）。只有云联网类型专线网关且开启了BGP功能才支持修改`CcnRouteType`。
         * @type {string || null}
         */
        this.CcnRouteType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.DirectConnectGatewayName = 'DirectConnectGatewayName' in params ? params.DirectConnectGatewayName : null;
        this.CcnRouteType = 'CcnRouteType' in params ? params.CcnRouteType : null;

    }
}

/**
 * AddBandwidthPackageResources请求参数结构体
 * @class
 */
class AddBandwidthPackageResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源Id，形如'eip-xxxx', 'lb-xxxx'
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 带宽包唯一标识ID，形如'bwp-xxxx'
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * 带宽包类型，包括'BGP', 'SINGLEISP', 'ANYCAST'
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 资源类型，包括'Address', 'LoadBalance'
         * @type {string || null}
         */
        this.ResourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

    }
}

/**
 * AssignIpv6SubnetCidrBlock请求参数结构体
 * @class
 */
class AssignIpv6SubnetCidrBlockRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网所在私有网络`ID`。形如：`vpc-f49l6u0z`。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 分配 `IPv6` 子网段列表。
         * @type {Array.<Ipv6SubnetCidrBlock> || null}
         */
        this.Ipv6SubnetCidrBlocks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.Ipv6SubnetCidrBlocks) {
            this.Ipv6SubnetCidrBlocks = new Array();
            for (let z in params.Ipv6SubnetCidrBlocks) {
                let obj = new Ipv6SubnetCidrBlock();
                obj.deserialize(params.Ipv6SubnetCidrBlocks[z]);
                this.Ipv6SubnetCidrBlocks.push(obj);
            }
        }

    }
}

/**
 * CreateVpc返回参数结构体
 * @class
 */
class CreateVpcResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vpc对象。
         * @type {Vpc || null}
         */
        this.Vpc = null;

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

        if (params.Vpc) {
            let obj = new Vpc();
            obj.deserialize(params.Vpc)
            this.Vpc = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVpcPrivateIpAddresses请求参数结构体
 * @class
 */
class DescribeVpcPrivateIpAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`，形如：`vpc-f49l6u0z`。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 内网`IP`地址列表，批量查询单次请求最多支持`10`个。
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;

    }
}

/**
 * IP地址模板
 * @class
 */
class AddressTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址模板名称。
         * @type {string || null}
         */
        this.AddressTemplateName = null;

        /**
         * IP地址模板实例唯一ID。
         * @type {string || null}
         */
        this.AddressTemplateId = null;

        /**
         * IP地址信息。
         * @type {Array.<string> || null}
         */
        this.AddressSet = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateName = 'AddressTemplateName' in params ? params.AddressTemplateName : null;
        this.AddressTemplateId = 'AddressTemplateId' in params ? params.AddressTemplateId : null;
        this.AddressSet = 'AddressSet' in params ? params.AddressSet : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DescribeIp6TranslatorQuota返回参数结构体
 * @class
 */
class DescribeIp6TranslatorQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户在指定地域的IPV6转换实例及规则配额信息
QUOTAID属性是TOTAL_TRANSLATOR_QUOTA，表示账户在指定地域的IPV6转换实例配额信息；QUOTAID属性是IPV6转转换实例唯一ID（形如ip6-xxxxxxxx），表示账户在该转换实例允许创建的转换规则配额
         * @type {Array.<Quota> || null}
         */
        this.QuotaSet = null;

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

        if (params.QuotaSet) {
            this.QuotaSet = new Array();
            for (let z in params.QuotaSet) {
                let obj = new Quota();
                obj.deserialize(params.QuotaSet[z]);
                this.QuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnassignIpv6Addresses返回参数结构体
 * @class
 */
class UnassignIpv6AddressesResponse extends  AbstractModel {
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
 * CreateIp6Translators返回参数结构体
 * @class
 */
class CreateIp6TranslatorsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转换实例的唯一ID数组，形如"ip6-xxxxxxxx"
         * @type {Array.<string> || null}
         */
        this.Ip6TranslatorSet = null;

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
        this.Ip6TranslatorSet = 'Ip6TranslatorSet' in params ? params.Ip6TranslatorSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFlowLogs请求参数结构体
 * @class
 */
class DescribeFlowLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私用网络ID或者统一ID，建议使用统一ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 流日志唯一ID
         * @type {string || null}
         */
        this.FlowLogId = null;

        /**
         * 流日志实例名字
         * @type {string || null}
         */
        this.FlowLogName = null;

        /**
         * 流日志所属资源类型，VPC|SUBNET|NETWORKINTERFACE
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 资源唯一ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 流日志采集类型，ACCEPT|REJECT|ALL
         * @type {string || null}
         */
        this.TrafficType = null;

        /**
         * 流日志存储ID
         * @type {string || null}
         */
        this.CloudLogId = null;

        /**
         * 流日志存储ID状态
         * @type {string || null}
         */
        this.CloudLogState = null;

        /**
         * 按某个字段排序,支持字段：flowLogName,createTime，默认按createTime
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 升序（asc）还是降序（desc）,默认：desc
         * @type {string || null}
         */
        this.OrderDirection = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页行数，默认为10
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
        this.FlowLogId = 'FlowLogId' in params ? params.FlowLogId : null;
        this.FlowLogName = 'FlowLogName' in params ? params.FlowLogName : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.TrafficType = 'TrafficType' in params ? params.TrafficType : null;
        this.CloudLogId = 'CloudLogId' in params ? params.CloudLogId : null;
        this.CloudLogState = 'CloudLogState' in params ? params.CloudLogState : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateDirectConnectGateway请求参数结构体
 * @class
 */
class CreateDirectConnectGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线网关名称
         * @type {string || null}
         */
        this.DirectConnectGatewayName = null;

        /**
         * 关联网络类型，可选值：
<li>VPC - 私有网络</li>
<li>CCN - 云联网</li>
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * <li>NetworkType 为 VPC 时，这里传值为私有网络实例ID</li>
<li>NetworkType 为 CCN 时，这里传值为云联网实例ID</li>
         * @type {string || null}
         */
        this.NetworkInstanceId = null;

        /**
         * 网关类型，可选值：
<li>NORMAL - （默认）标准型，注：云联网只支持标准型</li>
<li>NAT - NAT型</li>NAT类型支持网络地址转换配置，类型确定后不能修改；一个私有网络可以创建一个NAT类型的专线网关和一个非NAT类型的专线网关
         * @type {string || null}
         */
        this.GatewayType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectGatewayName = 'DirectConnectGatewayName' in params ? params.DirectConnectGatewayName : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.NetworkInstanceId = 'NetworkInstanceId' in params ? params.NetworkInstanceId : null;
        this.GatewayType = 'GatewayType' in params ? params.GatewayType : null;

    }
}

/**
 * ModifyBandwidthPackageAttribute请求参数结构体
 * @class
 */
class ModifyBandwidthPackageAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽包唯一标识ID
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * 带宽包名称
         * @type {string || null}
         */
        this.BandwidthPackageName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;
        this.BandwidthPackageName = 'BandwidthPackageName' in params ? params.BandwidthPackageName : null;

    }
}

/**
 * ModifyFlowLogAttribute请求参数结构体
 * @class
 */
class ModifyFlowLogAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私用网络ID或者统一ID，建议使用统一ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 流日志唯一ID
         * @type {string || null}
         */
        this.FlowLogId = null;

        /**
         * 流日志实例名字
         * @type {string || null}
         */
        this.FlowLogName = null;

        /**
         * 流日志实例描述
         * @type {string || null}
         */
        this.FlowLogDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.FlowLogId = 'FlowLogId' in params ? params.FlowLogId : null;
        this.FlowLogName = 'FlowLogName' in params ? params.FlowLogName : null;
        this.FlowLogDescription = 'FlowLogDescription' in params ? params.FlowLogDescription : null;

    }
}

/**
 * ResetRoutes请求参数结构体
 * @class
 */
class ResetRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由表名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * 路由策略。
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * ModifyBandwidthPackageAttribute返回参数结构体
 * @class
 */
class ModifyBandwidthPackageAttributeResponse extends  AbstractModel {
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
 * ModifyCustomerGatewayAttribute请求参数结构体
 * @class
 */
class ModifyCustomerGatewayAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对端网关ID，例如：cgw-2wqq41m9，可通过DescribeCustomerGateways接口查询对端网关。
         * @type {string || null}
         */
        this.CustomerGatewayId = null;

        /**
         * 对端网关名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.CustomerGatewayName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerGatewayId = 'CustomerGatewayId' in params ? params.CustomerGatewayId : null;
        this.CustomerGatewayName = 'CustomerGatewayName' in params ? params.CustomerGatewayName : null;

    }
}

/**
 * DescribeRouteTables返回参数结构体
 * @class
 */
class DescribeRouteTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 路由表对象。
         * @type {Array.<RouteTable> || null}
         */
        this.RouteTableSet = null;

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

        if (params.RouteTableSet) {
            this.RouteTableSet = new Array();
            for (let z in params.RouteTableSet) {
                let obj = new RouteTable();
                obj.deserialize(params.RouteTableSet[z]);
                this.RouteTableSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RejectAttachCcnInstances返回参数结构体
 * @class
 */
class RejectAttachCcnInstancesResponse extends  AbstractModel {
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
 * 协议端口模板
 * @class
 */
class ServiceTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议端口实例ID，例如：ppm-f5n1f8da。
         * @type {string || null}
         */
        this.ServiceTemplateId = null;

        /**
         * 模板名称。
         * @type {string || null}
         */
        this.ServiceTemplateName = null;

        /**
         * 协议端口信息。
         * @type {Array.<string> || null}
         */
        this.ServiceSet = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTemplateId = 'ServiceTemplateId' in params ? params.ServiceTemplateId : null;
        this.ServiceTemplateName = 'ServiceTemplateName' in params ? params.ServiceTemplateName : null;
        this.ServiceSet = 'ServiceSet' in params ? params.ServiceSet : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DescribeCcnAttachedInstances请求参数结构体
 * @class
 */
class DescribeCcnAttachedInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件：
<li>ccn-id - String -（过滤条件）CCN实例ID。</li>
<li>instance-type - String -（过滤条件）关联实例类型。</li>
<li>instance-region - String -（过滤条件）关联实例所属地域。</li>
<li>instance-id - String -（过滤条件）关联实例实例ID。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 云联网实例ID
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 排序字段。支持：`CcnId` `InstanceType` `InstanceId` `InstanceName` `InstanceRegion` `AttachedTime` `State`。
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方法。顺序：`ASC`，倒序：`DESC`。
         * @type {string || null}
         */
        this.OrderDirection = null;

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
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * ModifyFlowLogAttribute返回参数结构体
 * @class
 */
class ModifyFlowLogAttributeResponse extends  AbstractModel {
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
 * DescribeBandwidthPackages返回参数结构体
 * @class
 */
class DescribeBandwidthPackagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的带宽包数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 描述带宽包详细信息
         * @type {Array.<BandwidthPackage> || null}
         */
        this.BandwidthPackageSet = null;

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

        if (params.BandwidthPackageSet) {
            this.BandwidthPackageSet = new Array();
            for (let z in params.BandwidthPackageSet) {
                let obj = new BandwidthPackage();
                obj.deserialize(params.BandwidthPackageSet[z]);
                this.BandwidthPackageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDirectConnectGateways请求参数结构体
 * @class
 */
class DescribeDirectConnectGatewaysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线网关唯一`ID`，形如：`dcg-9o233uri`。
         * @type {Array.<string> || null}
         */
        this.DirectConnectGatewayIds = null;

        /**
         * 过滤条件，参数不支持同时指定`DirectConnectGatewayIds`和`Filters`。
<li>direct-connect-gateway-id - String - 专线网关唯一`ID`，形如：`dcg-9o233uri`。</li>
<li>direct-connect-gateway-name - String - 专线网关名称，默认模糊查询。</li>
<li>direct-connect-gateway-ip - String - 专线网关`IP`。</li>
<li>gateway-type - String - 网关类型，可选值：`NORMAL`（普通型）、`NAT`（NAT型）。</li>
<li>network-type- String - 网络类型，可选值：`VPC`（私有网络类型）、`CCN`（云联网类型）。</li>
<li>ccn-id - String - 专线网关所在云联网`ID`。</li>
<li>vpc-id - String - 专线网关所在私有网络`ID`。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量。
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
        this.DirectConnectGatewayIds = 'DirectConnectGatewayIds' in params ? params.DirectConnectGatewayIds : null;

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
 * ModifyIp6Translator返回参数结构体
 * @class
 */
class ModifyIp6TranslatorResponse extends  AbstractModel {
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
 * DeleteIp6Translators返回参数结构体
 * @class
 */
class DeleteIp6TranslatorsResponse extends  AbstractModel {
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
 * DescribeRouteConflicts返回参数结构体
 * @class
 */
class DescribeRouteConflictsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由策略冲突列表
         * @type {Array.<RouteConflict> || null}
         */
        this.RouteConflictSet = null;

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

        if (params.RouteConflictSet) {
            this.RouteConflictSet = new Array();
            for (let z in params.RouteConflictSet) {
                let obj = new RouteConflict();
                obj.deserialize(params.RouteConflictSet[z]);
                this.RouteConflictSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AcceptAttachCcnInstances请求参数结构体
 * @class
 */
class AcceptAttachCcnInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN实例ID。形如：ccn-f49l6u0z。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 接受关联实例列表。
         * @type {Array.<CcnInstance> || null}
         */
        this.Instances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new CcnInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

    }
}

/**
 * DescribeGatewayFlowMonitorDetail返回参数结构体
 * @class
 */
class DescribeGatewayFlowMonitorDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的对象数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 网关流量监控明细。
         * @type {Array.<GatewayFlowMonitorDetail> || null}
         */
        this.GatewayFlowMonitorDetailSet = null;

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

        if (params.GatewayFlowMonitorDetailSet) {
            this.GatewayFlowMonitorDetailSet = new Array();
            for (let z in params.GatewayFlowMonitorDetailSet) {
                let obj = new GatewayFlowMonitorDetail();
                obj.deserialize(params.GatewayFlowMonitorDetailSet[z]);
                this.GatewayFlowMonitorDetailSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteFlowLog请求参数结构体
 * @class
 */
class DeleteFlowLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私用网络ID或者统一ID，建议使用统一ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 流日志唯一ID
         * @type {string || null}
         */
        this.FlowLogId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.FlowLogId = 'FlowLogId' in params ? params.FlowLogId : null;

    }
}

/**
 * HaVipDisassociateAddressIp返回参数结构体
 * @class
 */
class HaVipDisassociateAddressIpResponse extends  AbstractModel {
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
 * AttachNetworkInterface请求参数结构体
 * @class
 */
class AttachNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * CVM实例ID。形如：ins-r8hr2upy。
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
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * AssignIpv6CidrBlock请求参数结构体
 * @class
 */
class AssignIpv6CidrBlockRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`，形如：`vpc-f49l6u0z`。
         * @type {string || null}
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * CreateSecurityGroupPolicies返回参数结构体
 * @class
 */
class CreateSecurityGroupPoliciesResponse extends  AbstractModel {
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
 * HaVipAssociateAddressIp请求参数结构体
 * @class
 */
class HaVipAssociateAddressIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `HAVIP`唯一`ID`，形如：`havip-9o233uri`。必须是没有绑定`EIP`的`HAVIP`
         * @type {string || null}
         */
        this.HaVipId = null;

        /**
         * 弹性公网`IP`。必须是没有绑定`HAVIP`的`EIP`
         * @type {string || null}
         */
        this.AddressIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;

    }
}

/**
 * DeleteRoutes返回参数结构体
 * @class
 */
class DeleteRoutesResponse extends  AbstractModel {
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
 * DescribeSecurityGroupAssociationStatistics返回参数结构体
 * @class
 */
class DescribeSecurityGroupAssociationStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组关联实例统计。
         * @type {Array.<SecurityGroupAssociationStatistics> || null}
         */
        this.SecurityGroupAssociationStatisticsSet = null;

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

        if (params.SecurityGroupAssociationStatisticsSet) {
            this.SecurityGroupAssociationStatisticsSet = new Array();
            for (let z in params.SecurityGroupAssociationStatisticsSet) {
                let obj = new SecurityGroupAssociationStatistics();
                obj.deserialize(params.SecurityGroupAssociationStatisticsSet[z]);
                this.SecurityGroupAssociationStatisticsSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFlowLog请求参数结构体
 * @class
 */
class DescribeFlowLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私用网络ID或者统一ID，建议使用统一ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 流日志唯一ID
         * @type {string || null}
         */
        this.FlowLogId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.FlowLogId = 'FlowLogId' in params ? params.FlowLogId : null;

    }
}

/**
 * AddIp6Rules请求参数结构体
 * @class
 */
class AddIp6RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPV6转换实例唯一ID，形如ip6-xxxxxxxx
         * @type {string || null}
         */
        this.Ip6TranslatorId = null;

        /**
         * IPV6转换规则信息
         * @type {Array.<Ip6RuleInfo> || null}
         */
        this.Ip6RuleInfos = null;

        /**
         * IPV6转换规则名称
         * @type {string || null}
         */
        this.Ip6RuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip6TranslatorId = 'Ip6TranslatorId' in params ? params.Ip6TranslatorId : null;

        if (params.Ip6RuleInfos) {
            this.Ip6RuleInfos = new Array();
            for (let z in params.Ip6RuleInfos) {
                let obj = new Ip6RuleInfo();
                obj.deserialize(params.Ip6RuleInfos[z]);
                this.Ip6RuleInfos.push(obj);
            }
        }
        this.Ip6RuleName = 'Ip6RuleName' in params ? params.Ip6RuleName : null;

    }
}

/**
 * DescribeAccountAttributes返回参数结构体
 * @class
 */
class DescribeAccountAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户账号属性对象
         * @type {Array.<AccountAttribute> || null}
         */
        this.AccountAttributeSet = null;

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

        if (params.AccountAttributeSet) {
            this.AccountAttributeSet = new Array();
            for (let z in params.AccountAttributeSet) {
                let obj = new AccountAttribute();
                obj.deserialize(params.AccountAttributeSet[z]);
                this.AccountAttributeSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssignPrivateIpAddresses返回参数结构体
 * @class
 */
class AssignPrivateIpAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内网IP详细信息。
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddressSet = null;

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

        if (params.PrivateIpAddressSet) {
            this.PrivateIpAddressSet = new Array();
            for (let z in params.PrivateIpAddressSet) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddressSet[z]);
                this.PrivateIpAddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityGroups请求参数结构体
 * @class
 */
class DescribeSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如：sg-33ocnj9n，可通过DescribeSecurityGroups获取。每次请求的实例的上限为100。参数不支持同时指定SecurityGroupIds和Filters。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 过滤条件，参数不支持同时指定SecurityGroupIds和Filters。
<li>project-id - Integer - （过滤条件）项目id。</li>
<li>security-group-name - String - （过滤条件）安全组名称。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量。
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 返回数量。
         * @type {string || null}
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
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

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
 * AddBandwidthPackageResources返回参数结构体
 * @class
 */
class AddBandwidthPackageResourcesResponse extends  AbstractModel {
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
 * SetCcnRegionBandwidthLimits请求参数结构体
 * @class
 */
class SetCcnRegionBandwidthLimitsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN实例ID。形如：ccn-f49l6u0z。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 云联网（CCN）各地域出带宽上限。
         * @type {Array.<CcnRegionBandwidthLimit> || null}
         */
        this.CcnRegionBandwidthLimits = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

        if (params.CcnRegionBandwidthLimits) {
            this.CcnRegionBandwidthLimits = new Array();
            for (let z in params.CcnRegionBandwidthLimits) {
                let obj = new CcnRegionBandwidthLimit();
                obj.deserialize(params.CcnRegionBandwidthLimits[z]);
                this.CcnRegionBandwidthLimits.push(obj);
            }
        }

    }
}

/**
 * DescribeDirectConnectGateways返回参数结构体
 * @class
 */
class DescribeDirectConnectGatewaysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的对象数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 专线网关对象数组。
         * @type {Array.<DirectConnectGateway> || null}
         */
        this.DirectConnectGatewaySet = null;

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

        if (params.DirectConnectGatewaySet) {
            this.DirectConnectGatewaySet = new Array();
            for (let z in params.DirectConnectGatewaySet) {
                let obj = new DirectConnectGateway();
                obj.deserialize(params.DirectConnectGatewaySet[z]);
                this.DirectConnectGatewaySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IPV6转换规则
 * @class
 */
class Ip6RuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPV6端口号，可在0~65535范围取值
         * @type {number || null}
         */
        this.Vport6 = null;

        /**
         * 协议类型，支持TCP/UDP
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * IPV4地址
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * IPV4端口号，可在0~65535范围取值
         * @type {number || null}
         */
        this.Vport = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Vport6 = 'Vport6' in params ? params.Vport6 : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

/**
 * DeleteAddressTemplate返回参数结构体
 * @class
 */
class DeleteAddressTemplateResponse extends  AbstractModel {
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
 * ModifySubnetAttribute返回参数结构体
 * @class
 */
class ModifySubnetAttributeResponse extends  AbstractModel {
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
 * DeleteAddressTemplate请求参数结构体
 * @class
 */
class DeleteAddressTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址模板实例ID，例如：ipm-09o5m8kc。
         * @type {string || null}
         */
        this.AddressTemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateId = 'AddressTemplateId' in params ? params.AddressTemplateId : null;

    }
}

/**
 * 弹性网卡
 * @class
 */
class NetworkInterface extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-f1xjkw1b。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 弹性网卡名称。
         * @type {string || null}
         */
        this.NetworkInterfaceName = null;

        /**
         * 弹性网卡描述。
         * @type {string || null}
         */
        this.NetworkInterfaceDescription = null;

        /**
         * 子网实例ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * VPC实例ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 绑定的安全组。
         * @type {Array.<string> || null}
         */
        this.GroupSet = null;

        /**
         * 是否是主网卡。
         * @type {boolean || null}
         */
        this.Primary = null;

        /**
         * MAC地址。
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * 弹性网卡状态：
<li>`PENDING`：创建中</li>
<li>`AVAILABLE`：可用的</li>
<li>`ATTACHING`：绑定中</li>
<li>`DETACHING`：解绑中</li>
<li>`DELETING`：删除中</li>
         * @type {string || null}
         */
        this.State = null;

        /**
         * 内网IP信息。
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddressSet = null;

        /**
         * 绑定的云服务器对象。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NetworkInterfaceAttachment || null}
         */
        this.Attachment = null;

        /**
         * 可用区。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * `IPv6`地址列表。
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6AddressSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.NetworkInterfaceName = 'NetworkInterfaceName' in params ? params.NetworkInterfaceName : null;
        this.NetworkInterfaceDescription = 'NetworkInterfaceDescription' in params ? params.NetworkInterfaceDescription : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.GroupSet = 'GroupSet' in params ? params.GroupSet : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.State = 'State' in params ? params.State : null;

        if (params.PrivateIpAddressSet) {
            this.PrivateIpAddressSet = new Array();
            for (let z in params.PrivateIpAddressSet) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddressSet[z]);
                this.PrivateIpAddressSet.push(obj);
            }
        }

        if (params.Attachment) {
            let obj = new NetworkInterfaceAttachment();
            obj.deserialize(params.Attachment)
            this.Attachment = obj;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.Ipv6AddressSet) {
            this.Ipv6AddressSet = new Array();
            for (let z in params.Ipv6AddressSet) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6AddressSet[z]);
                this.Ipv6AddressSet.push(obj);
            }
        }

    }
}

/**
 * TransformAddress请求参数结构体
 * @class
 */
class TransformAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待操作有普通公网 IP 的实例 ID。实例 ID 形如：`ins-11112222`。可通过登录[控制台](https://console.cloud.tencent.com/cvm)查询，也可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/9389) 接口返回值中的`InstanceId`获取。
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
 * ReplaceDirectConnectGatewayCcnRoutes请求参数结构体
 * @class
 */
class ReplaceDirectConnectGatewayCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线网关ID，形如：dcg-prpqlmg1
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * 需要连通的IDC网段列表
         * @type {Array.<DirectConnectGatewayCcnRoute> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new DirectConnectGatewayCcnRoute();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * ModifyAddressTemplateAttribute请求参数结构体
 * @class
 */
class ModifyAddressTemplateAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址模板实例ID，例如：ipm-mdunqeb6。
         * @type {string || null}
         */
        this.AddressTemplateId = null;

        /**
         * IP地址模板名称。
         * @type {string || null}
         */
        this.AddressTemplateName = null;

        /**
         * 地址信息，支持 IP、CIDR、IP 范围。
         * @type {Array.<string> || null}
         */
        this.Addresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateId = 'AddressTemplateId' in params ? params.AddressTemplateId : null;
        this.AddressTemplateName = 'AddressTemplateName' in params ? params.AddressTemplateName : null;
        this.Addresses = 'Addresses' in params ? params.Addresses : null;

    }
}

/**
 * DescribeVpcs返回参数结构体
 * @class
 */
class DescribeVpcsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的对象数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * VPC对象。
         * @type {Array.<Vpc> || null}
         */
        this.VpcSet = null;

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

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new Vpc();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySecurityGroupAttribute请求参数结构体
 * @class
 */
class ModifySecurityGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 安全组备注，最多100个字符。
         * @type {string || null}
         */
        this.GroupDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupDescription = 'GroupDescription' in params ? params.GroupDescription : null;

    }
}

/**
 * RemoveBandwidthPackageResources请求参数结构体
 * @class
 */
class RemoveBandwidthPackageResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽包唯一标识ID，形如'bwp-xxxx'
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * 资源类型，包括‘Address’, ‘LoadBalance’
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 资源Id，形如'eip-xxxx', 'lb-xxxx'
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;

    }
}

/**
 * DescribeFlowLog返回参数结构体
 * @class
 */
class DescribeFlowLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流日志信息
         * @type {Array.<FlowLog> || null}
         */
        this.FlowLog = null;

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

        if (params.FlowLog) {
            this.FlowLog = new Array();
            for (let z in params.FlowLog) {
                let obj = new FlowLog();
                obj.deserialize(params.FlowLog[z]);
                this.FlowLog.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HaVipAssociateAddressIp返回参数结构体
 * @class
 */
class HaVipAssociateAddressIpResponse extends  AbstractModel {
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
 * DescribeBandwidthPackages请求参数结构体
 * @class
 */
class DescribeBandwidthPackagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽包Id，支持批量
         * @type {Array.<string> || null}
         */
        this.BandwidthPackageIds = null;

        /**
         * 每次请求的`Filters`的上限为10。参数不支持同时指定`BandwidthPackageIds`和`Filters`。详细的过滤条件如下：
<li> bandwidth-package_id - String - 是否必填：否 - （过滤条件）按照带宽包的唯一标识ID过滤。</li>
<li> bandwidth-package-name - String - 是否必填：否 - （过滤条件）按照 带宽包名称过滤。不支持模糊过滤。</li>
<li> network-type - String - 是否必填：否 - （过滤条件）按照带宽包的类型过滤。类型包括'BGP','SINGLEISP'和'ANYCAST'。</li>
<li> charge-type - String - 是否必填：否 - （过滤条件）按照带宽包的计费类型过滤。计费类型包括'TOP5_POSTPAID_BY_MONTH'和'PERCENT95_POSTPAID_BY_MONTH'</li>
<li> resource.resource-type - String - 是否必填：否 - （过滤条件）按照带宽包资源类型过滤。资源类型包括'Address'和'LoadBalance'</li>
<li> resource.resource-id - String - 是否必填：否 - （过滤条件）按照带宽包资源Id过滤。资源Id形如'eip-xxxx','lb-xxxx'</li>
<li> resource.address-ip - String - 是否必填：否 - （过滤条件）按照带宽包资源Ip过滤。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询带宽包偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询带宽包数量限制
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
        this.BandwidthPackageIds = 'BandwidthPackageIds' in params ? params.BandwidthPackageIds : null;

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
 * DeleteDirectConnectGatewayCcnRoutes返回参数结构体
 * @class
 */
class DeleteDirectConnectGatewayCcnRoutesResponse extends  AbstractModel {
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
 * 用于描述实例的统计信息
 * @class
 */
class InstanceStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的类型
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例的个数
         * @type {number || null}
         */
        this.InstanceCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

    }
}

/**
 * CreateVpnConnection请求参数结构体
 * @class
 */
class CreateVpnConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPN网关实例ID。
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * 对端网关ID，例如：cgw-2wqq41m9，可通过DescribeCustomerGateways接口查询对端网关。
         * @type {string || null}
         */
        this.CustomerGatewayId = null;

        /**
         * 通道名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.VpnConnectionName = null;

        /**
         * 预共享密钥。
         * @type {string || null}
         */
        this.PreShareKey = null;

        /**
         * SPD策略组，例如：{"10.0.0.5/24":["172.123.10.5/16"]}，10.0.0.5/24是vpc内网段172.123.10.5/16是IDC网段。用户指定VPC内哪些网段可以和您IDC中哪些网段通信。
         * @type {Array.<SecurityPolicyDatabase> || null}
         */
        this.SecurityPolicyDatabases = null;

        /**
         * IKE配置（Internet Key Exchange，因特网密钥交换），IKE具有一套自我保护机制，用户配置网络安全协议
         * @type {IKEOptionsSpecification || null}
         */
        this.IKEOptionsSpecification = null;

        /**
         * IPSec配置，腾讯云提供IPSec安全会话设置
         * @type {IPSECOptionsSpecification || null}
         */
        this.IPSECOptionsSpecification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.CustomerGatewayId = 'CustomerGatewayId' in params ? params.CustomerGatewayId : null;
        this.VpnConnectionName = 'VpnConnectionName' in params ? params.VpnConnectionName : null;
        this.PreShareKey = 'PreShareKey' in params ? params.PreShareKey : null;

        if (params.SecurityPolicyDatabases) {
            this.SecurityPolicyDatabases = new Array();
            for (let z in params.SecurityPolicyDatabases) {
                let obj = new SecurityPolicyDatabase();
                obj.deserialize(params.SecurityPolicyDatabases[z]);
                this.SecurityPolicyDatabases.push(obj);
            }
        }

        if (params.IKEOptionsSpecification) {
            let obj = new IKEOptionsSpecification();
            obj.deserialize(params.IKEOptionsSpecification)
            this.IKEOptionsSpecification = obj;
        }

        if (params.IPSECOptionsSpecification) {
            let obj = new IPSECOptionsSpecification();
            obj.deserialize(params.IPSECOptionsSpecification)
            this.IPSECOptionsSpecification = obj;
        }

    }
}

/**
 * CCN路由策略对象
 * @class
 */
class CcnRoute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由策略ID
         * @type {string || null}
         */
        this.RouteId = null;

        /**
         * 目的端
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * 下一跳类型（关联实例类型），所有类型：VPC、DIRECTCONNECT
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 下一跳（关联实例）
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 下一跳名称（关联实例名称）
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 下一跳所属地域（关联实例所属地域）
         * @type {string || null}
         */
        this.InstanceRegion = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 路由是否启用
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 关联实例所属UIN（根账号）
         * @type {string || null}
         */
        this.InstanceUin = null;

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
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceRegion = 'InstanceRegion' in params ? params.InstanceRegion : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.InstanceUin = 'InstanceUin' in params ? params.InstanceUin : null;

    }
}

/**
 * DeleteSecurityGroupPolicies请求参数结构体
 * @class
 */
class DeleteSecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组规则集合。一个请求中只能删除单个方向的一条或多条规则。支持指定索引（PolicyIndex） 匹配删除和安全组规则匹配删除两种方式，一个请求中只能使用一种匹配方式。
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

    }
}

/**
 * VPN通道对象。
 * @class
 */
class VpnConnection extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道实例ID。
         * @type {string || null}
         */
        this.VpnConnectionId = null;

        /**
         * 通道名称。
         * @type {string || null}
         */
        this.VpnConnectionName = null;

        /**
         * VPC实例ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPN网关实例ID。
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * 对端网关实例ID。
         * @type {string || null}
         */
        this.CustomerGatewayId = null;

        /**
         * 预共享密钥。
         * @type {string || null}
         */
        this.PreShareKey = null;

        /**
         * 通道传输协议。
         * @type {string || null}
         */
        this.VpnProto = null;

        /**
         * 通道加密协议。
         * @type {string || null}
         */
        this.EncryptProto = null;

        /**
         * 路由类型。
         * @type {string || null}
         */
        this.RouteType = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 通道的生产状态，PENDING：生产中，AVAILABLE：运行中，DELETING：删除中。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 通道连接状态，AVAILABLE：已连接。
         * @type {string || null}
         */
        this.NetStatus = null;

        /**
         * SPD。
         * @type {Array.<SecurityPolicyDatabase> || null}
         */
        this.SecurityPolicyDatabaseSet = null;

        /**
         * IKE选项。
         * @type {IKEOptionsSpecification || null}
         */
        this.IKEOptionsSpecification = null;

        /**
         * IPSEC选择。
         * @type {IPSECOptionsSpecification || null}
         */
        this.IPSECOptionsSpecification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;
        this.VpnConnectionName = 'VpnConnectionName' in params ? params.VpnConnectionName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.CustomerGatewayId = 'CustomerGatewayId' in params ? params.CustomerGatewayId : null;
        this.PreShareKey = 'PreShareKey' in params ? params.PreShareKey : null;
        this.VpnProto = 'VpnProto' in params ? params.VpnProto : null;
        this.EncryptProto = 'EncryptProto' in params ? params.EncryptProto : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.State = 'State' in params ? params.State : null;
        this.NetStatus = 'NetStatus' in params ? params.NetStatus : null;

        if (params.SecurityPolicyDatabaseSet) {
            this.SecurityPolicyDatabaseSet = new Array();
            for (let z in params.SecurityPolicyDatabaseSet) {
                let obj = new SecurityPolicyDatabase();
                obj.deserialize(params.SecurityPolicyDatabaseSet[z]);
                this.SecurityPolicyDatabaseSet.push(obj);
            }
        }

        if (params.IKEOptionsSpecification) {
            let obj = new IKEOptionsSpecification();
            obj.deserialize(params.IKEOptionsSpecification)
            this.IKEOptionsSpecification = obj;
        }

        if (params.IPSECOptionsSpecification) {
            let obj = new IPSECOptionsSpecification();
            obj.deserialize(params.IPSECOptionsSpecification)
            this.IPSECOptionsSpecification = obj;
        }

    }
}

/**
 * DescribeCcns请求参数结构体
 * @class
 */
class DescribeCcnsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN实例ID。形如：ccn-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定CcnIds和Filters。
         * @type {Array.<string> || null}
         */
        this.CcnIds = null;

        /**
         * 过滤条件，参数不支持同时指定CcnIds和Filters。
<li>ccn-id - String - （过滤条件）CCN唯一ID，形如：vpc-f49l6u0z。</li>
<li>ccn-name - String - （过滤条件）CCN名称。</li>
<li>ccn-description - String - （过滤条件）CCN描述。</li>
<li>state - String - （过滤条件）实例状态， 'ISOLATED': 隔离中（欠费停服），'AVAILABLE'：运行中。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
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
        this.CcnIds = 'CcnIds' in params ? params.CcnIds : null;

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
 * CreateAddressTemplateGroup请求参数结构体
 * @class
 */
class CreateAddressTemplateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址模版集合名称。
         * @type {string || null}
         */
        this.AddressTemplateGroupName = null;

        /**
         * IP地址模版实例ID，例如：ipm-mdunqeb6。
         * @type {Array.<string> || null}
         */
        this.AddressTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateGroupName = 'AddressTemplateGroupName' in params ? params.AddressTemplateGroupName : null;
        this.AddressTemplateIds = 'AddressTemplateIds' in params ? params.AddressTemplateIds : null;

    }
}

/**
 * DescribeCustomerGatewayVendors返回参数结构体
 * @class
 */
class DescribeCustomerGatewayVendorsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对端网关厂商信息对象。
         * @type {Array.<CustomerGatewayVendor> || null}
         */
        this.CustomerGatewayVendorSet = null;

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

        if (params.CustomerGatewayVendorSet) {
            this.CustomerGatewayVendorSet = new Array();
            for (let z in params.CustomerGatewayVendorSet) {
                let obj = new CustomerGatewayVendor();
                obj.deserialize(params.CustomerGatewayVendorSet[z]);
                this.CustomerGatewayVendorSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 路由冲突对象
 * @class
 */
class RouteConflict extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 要检查的与之冲突的目的端
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * 冲突的路由策略列表
         * @type {Array.<Route> || null}
         */
        this.ConflictSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;

        if (params.ConflictSet) {
            this.ConflictSet = new Array();
            for (let z in params.ConflictSet) {
                let obj = new Route();
                obj.deserialize(params.ConflictSet[z]);
                this.ConflictSet.push(obj);
            }
        }

    }
}

/**
 * DeleteSubnet返回参数结构体
 * @class
 */
class DeleteSubnetResponse extends  AbstractModel {
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
 * 私有网络(VPC)对象。
 * @class
 */
class Vpc extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`名称。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * `VPC`实例`ID`，例如：vpc-azd4dt1c。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * `VPC`的`IPv4` `CIDR`。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 是否默认`VPC`。
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * 是否开启组播。
         * @type {boolean || null}
         */
        this.EnableMulticast = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * `DNS`列表。
         * @type {Array.<string> || null}
         */
        this.DnsServerSet = null;

        /**
         * `DHCP`域名选项值。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * `DHCP`选项集`ID`。
         * @type {string || null}
         */
        this.DhcpOptionsId = null;

        /**
         * 是否开启`DHCP`。
         * @type {boolean || null}
         */
        this.EnableDhcp = null;

        /**
         * `VPC`的`IPv6` `CIDR`。
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.EnableMulticast = 'EnableMulticast' in params ? params.EnableMulticast : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.DnsServerSet = 'DnsServerSet' in params ? params.DnsServerSet : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.DhcpOptionsId = 'DhcpOptionsId' in params ? params.DhcpOptionsId : null;
        this.EnableDhcp = 'EnableDhcp' in params ? params.EnableDhcp : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;

    }
}

/**
 * CreateVpnGateway返回参数结构体
 * @class
 */
class CreateVpnGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关对象
         * @type {VpnGateway || null}
         */
        this.VpnGateway = null;

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

        if (params.VpnGateway) {
            let obj = new VpnGateway();
            obj.deserialize(params.VpnGateway)
            this.VpnGateway = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVpcIpv6Addresses返回参数结构体
 * @class
 */
class DescribeVpcIpv6AddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `IPv6`地址列表。
         * @type {Array.<VpcIpv6Address> || null}
         */
        this.Ipv6AddressSet = null;

        /**
         * `IPv6`地址总数。
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

        if (params.Ipv6AddressSet) {
            this.Ipv6AddressSet = new Array();
            for (let z in params.Ipv6AddressSet) {
                let obj = new VpcIpv6Address();
                obj.deserialize(params.Ipv6AddressSet[z]);
                this.Ipv6AddressSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RejectAttachCcnInstances请求参数结构体
 * @class
 */
class RejectAttachCcnInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN实例ID。形如：ccn-f49l6u0z。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 拒绝关联实例列表。
         * @type {Array.<CcnInstance> || null}
         */
        this.Instances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new CcnInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

    }
}

/**
 * ModifyIp6Rule请求参数结构体
 * @class
 */
class ModifyIp6RuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPV6转换实例唯一ID，形如ip6-xxxxxxxx
         * @type {string || null}
         */
        this.Ip6TranslatorId = null;

        /**
         * IPV6转换规则唯一ID，形如rule6-xxxxxxxx
         * @type {string || null}
         */
        this.Ip6RuleId = null;

        /**
         * IPV6转换规则修改后的名称
         * @type {string || null}
         */
        this.Ip6RuleName = null;

        /**
         * IPV6转换规则修改后的IPV4地址
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * IPV6转换规则修改后的IPV4端口号
         * @type {number || null}
         */
        this.Vport = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip6TranslatorId = 'Ip6TranslatorId' in params ? params.Ip6TranslatorId : null;
        this.Ip6RuleId = 'Ip6RuleId' in params ? params.Ip6RuleId : null;
        this.Ip6RuleName = 'Ip6RuleName' in params ? params.Ip6RuleName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

/**
 * ReplaceRouteTableAssociation请求参数结构体
 * @class
 */
class ReplaceRouteTableAssociationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网实例ID，例如：subnet-3x5lf5q0。可通过DescribeSubnets接口查询。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {string || null}
         */
        this.RouteTableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * RenewVpnGateway请求参数结构体
 * @class
 */
class RenewVpnGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关实例ID。
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * 预付费计费模式。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

    }
}

/**
 * 安全组规则对象
 * @class
 */
class SecurityGroupPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组规则索引号。
         * @type {number || null}
         */
        this.PolicyIndex = null;

        /**
         * 协议, 取值: TCP,UDP, ICMP。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口(all, 离散port,  range)。
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 协议端口ID或者协议端口组ID。ServiceTemplate和Protocol+Port互斥。
         * @type {ServiceTemplateSpecification || null}
         */
        this.ServiceTemplate = null;

        /**
         * 网段或IP(互斥)。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 安全组实例ID，例如：sg-ohuuioma。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * IP地址ID或者ID地址组ID。
         * @type {AddressTemplateSpecification || null}
         */
        this.AddressTemplate = null;

        /**
         * ACCEPT 或 DROP。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 安全组规则描述。
         * @type {string || null}
         */
        this.PolicyDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyIndex = 'PolicyIndex' in params ? params.PolicyIndex : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.ServiceTemplate) {
            let obj = new ServiceTemplateSpecification();
            obj.deserialize(params.ServiceTemplate)
            this.ServiceTemplate = obj;
        }
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.AddressTemplate) {
            let obj = new AddressTemplateSpecification();
            obj.deserialize(params.AddressTemplate)
            this.AddressTemplate = obj;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.PolicyDescription = 'PolicyDescription' in params ? params.PolicyDescription : null;

    }
}

/**
 * DeleteVpc请求参数结构体
 * @class
 */
class DeleteVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         * @type {string || null}
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * ModifyServiceTemplateAttribute返回参数结构体
 * @class
 */
class ModifyServiceTemplateAttributeResponse extends  AbstractModel {
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
 * DescribeCcns返回参数结构体
 * @class
 */
class DescribeCcnsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的对象数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * CCN对象。
         * @type {Array.<CCN> || null}
         */
        this.CcnSet = null;

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

        if (params.CcnSet) {
            this.CcnSet = new Array();
            for (let z in params.CcnSet) {
                let obj = new CCN();
                obj.deserialize(params.CcnSet[z]);
                this.CcnSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSubnet返回参数结构体
 * @class
 */
class CreateSubnetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网对象。
         * @type {Subnet || null}
         */
        this.Subnet = null;

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

        if (params.Subnet) {
            let obj = new Subnet();
            obj.deserialize(params.Subnet)
            this.Subnet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityGroupPolicies返回参数结构体
 * @class
 */
class DescribeSecurityGroupPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组规则集合。
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

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

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySecurityGroupPolicies请求参数结构体
 * @class
 */
class ModifySecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组规则集合。 SecurityGroupPolicySet对象必须同时指定新的出（Egress）入（Ingress）站规则。 SecurityGroupPolicy对象不支持自定义索引（PolicyIndex）。
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

    }
}

/**
 * RemoveIp6Rules返回参数结构体
 * @class
 */
class RemoveIp6RulesResponse extends  AbstractModel {
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
 * ReplaceRoutes请求参数结构体
 * @class
 */
class ReplaceRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由策略对象。需要指定路由策略ID（RouteId）。
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * CreateCustomerGateway返回参数结构体
 * @class
 */
class CreateCustomerGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对端网关对象
         * @type {CustomerGateway || null}
         */
        this.CustomerGateway = null;

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

        if (params.CustomerGateway) {
            let obj = new CustomerGateway();
            obj.deserialize(params.CustomerGateway)
            this.CustomerGateway = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySubnetAttribute请求参数结构体
 * @class
 */
class ModifySubnetAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网实例ID。形如：subnet-pxir56ns。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 子网名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 子网是否开启广播。
         * @type {string || null}
         */
        this.EnableBroadcast = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.EnableBroadcast = 'EnableBroadcast' in params ? params.EnableBroadcast : null;

    }
}

/**
 * DisassociateAddress请求参数结构体
 * @class
 */
class DisassociateAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：`eip-11112222`。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * 表示解绑 EIP 之后是否分配普通公网 IP。取值范围：<br><li>TRUE：表示解绑 EIP 之后分配普通公网 IP。<br><li>FALSE：表示解绑 EIP 之后不分配普通公网 IP。<br>默认取值：FALSE。<br><br>只有满足以下条件时才能指定该参数：<br><li> 只有在解绑主网卡的主内网 IP 上的 EIP 时才能指定该参数。<br><li>解绑 EIP 后重新分配普通公网 IP 操作一个账号每天最多操作 10 次；详情可通过 [DescribeAddressQuota](https://cloud.tencent.com/document/api/213/1378) 接口获取。
         * @type {boolean || null}
         */
        this.ReallocateNormalPublicIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.ReallocateNormalPublicIp = 'ReallocateNormalPublicIp' in params ? params.ReallocateNormalPublicIp : null;

    }
}

/**
 * DeleteVpnConnection返回参数结构体
 * @class
 */
class DeleteVpnConnectionResponse extends  AbstractModel {
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
 * CreateCcn返回参数结构体
 * @class
 */
class CreateCcnResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云联网（CCN）对象。
         * @type {CCN || null}
         */
        this.Ccn = null;

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

        if (params.Ccn) {
            let obj = new CCN();
            obj.deserialize(params.Ccn)
            this.Ccn = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableCcnRoutes请求参数结构体
 * @class
 */
class EnableCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN实例ID。形如：ccn-f49l6u0z。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * CCN路由策略唯一ID。形如：ccnr-f49l6u0z。
         * @type {Array.<string> || null}
         */
        this.RouteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

    }
}

/**
 * DescribeVpcPrivateIpAddresses返回参数结构体
 * @class
 */
class DescribeVpcPrivateIpAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内网`IP`地址信息列表。
         * @type {Array.<VpcPrivateIpAddress> || null}
         */
        this.VpcPrivateIpAddressSet = null;

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

        if (params.VpcPrivateIpAddressSet) {
            this.VpcPrivateIpAddressSet = new Array();
            for (let z in params.VpcPrivateIpAddressSet) {
                let obj = new VpcPrivateIpAddress();
                obj.deserialize(params.VpcPrivateIpAddressSet[z]);
                this.VpcPrivateIpAddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyServiceTemplateAttribute请求参数结构体
 * @class
 */
class ModifyServiceTemplateAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议端口模板实例ID，例如：ppm-529nwwj8。
         * @type {string || null}
         */
        this.ServiceTemplateId = null;

        /**
         * 协议端口模板名称。
         * @type {string || null}
         */
        this.ServiceTemplateName = null;

        /**
         * 支持单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。
         * @type {Array.<string> || null}
         */
        this.Services = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTemplateId = 'ServiceTemplateId' in params ? params.ServiceTemplateId : null;
        this.ServiceTemplateName = 'ServiceTemplateName' in params ? params.ServiceTemplateName : null;
        this.Services = 'Services' in params ? params.Services : null;

    }
}

/**
 * DescribeIp6Translators请求参数结构体
 * @class
 */
class DescribeIp6TranslatorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPV6转换实例唯一ID数组，形如ip6-xxxxxxxx
         * @type {Array.<string> || null}
         */
        this.Ip6TranslatorIds = null;

        /**
         * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`Ip6TranslatorIds`和`Filters`。详细的过滤条件如下：
<li> ip6-translator-id - String - 是否必填：否 - （过滤条件）按照IPV6转换实例的唯一ID过滤,形如ip6-xxxxxxx。</li>
<li> ip6-translator-vip6 - String - 是否必填：否 - （过滤条件）按照IPV6地址过滤。不支持模糊过滤。</li>
<li> ip6-translator-name - String - 是否必填：否 - （过滤条件）按照IPV6转换实例名称过滤。不支持模糊过滤。</li>
<li> ip6-translator-status - String - 是否必填：否 - （过滤条件）按照IPV6转换实例的状态过滤。状态取值范围为"CREATING","RUNNING","DELETING","MODIFYING"
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
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
        this.Ip6TranslatorIds = 'Ip6TranslatorIds' in params ? params.Ip6TranslatorIds : null;

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
 * CreateSubnets返回参数结构体
 * @class
 */
class CreateSubnetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新创建的子网列表。
         * @type {Array.<Subnet> || null}
         */
        this.SubnetSet = null;

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

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGatewayFlowMonitorDetail请求参数结构体
 * @class
 */
class DescribeGatewayFlowMonitorDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间点。表示要查询这分钟内的明细。如：`2019-02-28 18:15:20`，将查询 `18:15` 这一分钟内的明细。
         * @type {string || null}
         */
        this.TimePoint = null;

        /**
         * VPN网关实例ID，形如：`vpn-ltjahce6`。
         * @type {string || null}
         */
        this.VpnId = null;

        /**
         * 专线网关实例ID，形如：`dcg-ltjahce6`。
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * 对等连接实例ID，形如：`pcx-ltjahce6`。
         * @type {string || null}
         */
        this.PeeringConnectionId = null;

        /**
         * NAT网关实例ID，形如：`nat-ltjahce6`。
         * @type {string || null}
         */
        this.NatId = null;

        /**
         * 偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段。支持 `InPkg` `OutPkg` `InTraffic` `OutTraffic`。
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方法。顺序：`ASC`，倒序：`DESC`。
         * @type {string || null}
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimePoint = 'TimePoint' in params ? params.TimePoint : null;
        this.VpnId = 'VpnId' in params ? params.VpnId : null;
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.PeeringConnectionId = 'PeeringConnectionId' in params ? params.PeeringConnectionId : null;
        this.NatId = 'NatId' in params ? params.NatId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * InquiryPriceCreateVpnGateway返回参数结构体
 * @class
 */
class InquiryPriceCreateVpnGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品价格。
         * @type {Price || null}
         */
        this.Price = null;

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

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 过滤器键值对
 * @class
 */
class FilterObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
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
 * 安全组关联的实例统计
 * @class
 */
class SecurityGroupAssociationStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 云主机实例数。
         * @type {number || null}
         */
        this.CVM = null;

        /**
         * 数据库实例数。
         * @type {number || null}
         */
        this.CDB = null;

        /**
         * 弹性网卡实例数。
         * @type {number || null}
         */
        this.ENI = null;

        /**
         * 被安全组引用数。
         * @type {number || null}
         */
        this.SG = null;

        /**
         * 负载均衡实例数。
         * @type {number || null}
         */
        this.CLB = null;

        /**
         * 全量实例的绑定统计。
         * @type {Array.<InstanceStatistic> || null}
         */
        this.InstanceStatistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.CVM = 'CVM' in params ? params.CVM : null;
        this.CDB = 'CDB' in params ? params.CDB : null;
        this.ENI = 'ENI' in params ? params.ENI : null;
        this.SG = 'SG' in params ? params.SG : null;
        this.CLB = 'CLB' in params ? params.CLB : null;

        if (params.InstanceStatistics) {
            this.InstanceStatistics = new Array();
            for (let z in params.InstanceStatistics) {
                let obj = new InstanceStatistic();
                obj.deserialize(params.InstanceStatistics[z]);
                this.InstanceStatistics.push(obj);
            }
        }

    }
}

/**
 * DetachNetworkInterface返回参数结构体
 * @class
 */
class DetachNetworkInterfaceResponse extends  AbstractModel {
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
 * ResetRoutes返回参数结构体
 * @class
 */
class ResetRoutesResponse extends  AbstractModel {
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
 * DescribeVpcs请求参数结构体
 * @class
 */
class DescribeVpcsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。形如：vpc-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpcIds和Filters。
         * @type {Array.<string> || null}
         */
        this.VpcIds = null;

        /**
         * 过滤条件，参数不支持同时指定VpcIds和Filters。
<li>vpc-name - String - （过滤条件）VPC实例名称。</li>
<li>is-default - String - （过滤条件）是否默认VPC。</li>
<li>vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。</li>
<li>cidr-block - String - （过滤条件）vpc的cidr。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 返回数量
         * @type {string || null}
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
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;

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
 * UnassignIpv6SubnetCidrBlock请求参数结构体
 * @class
 */
class UnassignIpv6SubnetCidrBlockRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网所在私有网络`ID`。形如：`vpc-f49l6u0z`。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * `IPv6` 子网段列表。
         * @type {Array.<Ipv6SubnetCidrBlock> || null}
         */
        this.Ipv6SubnetCidrBlocks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.Ipv6SubnetCidrBlocks) {
            this.Ipv6SubnetCidrBlocks = new Array();
            for (let z in params.Ipv6SubnetCidrBlocks) {
                let obj = new Ipv6SubnetCidrBlock();
                obj.deserialize(params.Ipv6SubnetCidrBlocks[z]);
                this.Ipv6SubnetCidrBlocks.push(obj);
            }
        }

    }
}

/**
 * ModifyIp6Translator请求参数结构体
 * @class
 */
class ModifyIp6TranslatorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPV6转换实例唯一ID，形如ip6-xxxxxxxxx
         * @type {string || null}
         */
        this.Ip6TranslatorId = null;

        /**
         * IPV6转换实例修改名称
         * @type {string || null}
         */
        this.Ip6TranslatorName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip6TranslatorId = 'Ip6TranslatorId' in params ? params.Ip6TranslatorId : null;
        this.Ip6TranslatorName = 'Ip6TranslatorName' in params ? params.Ip6TranslatorName : null;

    }
}

/**
 * CreateVpnConnection返回参数结构体
 * @class
 */
class CreateVpnConnectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道实例对象。
         * @type {VpnConnection || null}
         */
        this.VpnConnection = null;

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

        if (params.VpnConnection) {
            let obj = new VpnConnection();
            obj.deserialize(params.VpnConnection)
            this.VpnConnection = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IP地址模版
 * @class
 */
class AddressTemplateSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址ID，例如：ipm-2uw6ujo6。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * IP地址组ID，例如：ipmg-2uw6ujo6。
         * @type {string || null}
         */
        this.AddressGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.AddressGroupId = 'AddressGroupId' in params ? params.AddressGroupId : null;

    }
}

/**
 * VPC内网IPv6对象。
 * @class
 */
class VpcIpv6Address extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`内`IPv6`地址。
         * @type {string || null}
         */
        this.Ipv6Address = null;

        /**
         * 所属子网 `IPv6` `CIDR`。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * `IPv6`类型。
         * @type {string || null}
         */
        this.Ipv6AddressType = null;

        /**
         * `IPv6`申请时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ipv6Address = 'Ipv6Address' in params ? params.Ipv6Address : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Ipv6AddressType = 'Ipv6AddressType' in params ? params.Ipv6AddressType : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * AssignIpv6Addresses请求参数结构体
 * @class
 */
class AssignIpv6AddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例`ID`，形如：`eni-m6dyj72l`。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 指定的`IPv6`地址列表，单次最多指定10个。与入参`Ipv6AddressCount`合并计算配额。
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6Addresses = null;

        /**
         * 自动分配`IPv6`地址个数，内网IP地址个数总和不能超过配数。与入参`Ipv6Addresses`合并计算配额。
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.Ipv6Addresses) {
            this.Ipv6Addresses = new Array();
            for (let z in params.Ipv6Addresses) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6Addresses[z]);
                this.Ipv6Addresses.push(obj);
            }
        }
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;

    }
}

/**
 * CreateServiceTemplateGroup返回参数结构体
 * @class
 */
class CreateServiceTemplateGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议端口模板集合对象。
         * @type {ServiceTemplateGroup || null}
         */
        this.ServiceTemplateGroup = null;

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

        if (params.ServiceTemplateGroup) {
            let obj = new ServiceTemplateGroup();
            obj.deserialize(params.ServiceTemplateGroup)
            this.ServiceTemplateGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyIpv6AddressesAttribute返回参数结构体
 * @class
 */
class ModifyIpv6AddressesAttributeResponse extends  AbstractModel {
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
 * ReplaceSecurityGroupPolicy请求参数结构体
 * @class
 */
class ReplaceSecurityGroupPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组规则集合对象。
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

    }
}

/**
 * DescribeVpnConnections请求参数结构体
 * @class
 */
class DescribeVpnConnectionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN通道实例ID。形如：vpnx-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpnConnectionIds和Filters。
         * @type {Array.<string> || null}
         */
        this.VpnConnectionIds = null;

        /**
         * 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定VpnConnectionIds和Filters。
<li>vpc-id - String - VPC实例ID，形如：`vpc-0a36uwkr`。</li>
<li>vpn-gateway-id - String - VPN网关实例ID，形如：`vpngw-p4lmqawn`。</li>
<li>customer-gateway-id - String - 对端网关实例ID，形如：`cgw-l4rblw63`。</li>
<li>vpn-connection-name - String - 通道名称，形如：`test-vpn`。</li>
<li>vpn-connection-id - String - 通道实例ID，形如：`vpnx-5p7vkch8"`。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
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
        this.VpnConnectionIds = 'VpnConnectionIds' in params ? params.VpnConnectionIds : null;

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
 * DeleteCustomerGateway返回参数结构体
 * @class
 */
class DeleteCustomerGatewayResponse extends  AbstractModel {
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
 * CreateAddressTemplate返回参数结构体
 * @class
 */
class CreateAddressTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址模板对象。
         * @type {AddressTemplate || null}
         */
        this.AddressTemplate = null;

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

        if (params.AddressTemplate) {
            let obj = new AddressTemplate();
            obj.deserialize(params.AddressTemplate)
            this.AddressTemplate = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDirectConnectGateway返回参数结构体
 * @class
 */
class DeleteDirectConnectGatewayResponse extends  AbstractModel {
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
 * DeleteAddressTemplateGroup请求参数结构体
 * @class
 */
class DeleteAddressTemplateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址模板集合实例ID，例如：ipmg-90cex8mq。
         * @type {string || null}
         */
        this.AddressTemplateGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateGroupId = 'AddressTemplateGroupId' in params ? params.AddressTemplateGroupId : null;

    }
}

/**
 * CreateBandwidthPackage请求参数结构体
 * @class
 */
class CreateBandwidthPackageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽包类型，包括'BGP'，'SINGLEISP'，'ANYCAST'
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 带宽包计费类型，包括‘TOP5_POSTPAID_BY_MONTH’，‘PERCENT95_POSTPAID_BY_MONTH’
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 带宽包名字
         * @type {string || null}
         */
        this.BandwidthPackageName = null;

        /**
         * 带宽包数量(非上移账户只能填1)
         * @type {number || null}
         */
        this.BandwidthPackageCount = null;

        /**
         * 带宽包限速大小。单位：Mbps，-1表示不限速。
         * @type {number || null}
         */
        this.InternetMaxBandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.BandwidthPackageName = 'BandwidthPackageName' in params ? params.BandwidthPackageName : null;
        this.BandwidthPackageCount = 'BandwidthPackageCount' in params ? params.BandwidthPackageCount : null;
        this.InternetMaxBandwidth = 'InternetMaxBandwidth' in params ? params.InternetMaxBandwidth : null;

    }
}

/**
 * ModifyRouteTableAttribute请求参数结构体
 * @class
 */
class ModifyRouteTableAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由表名称。
         * @type {string || null}
         */
        this.RouteTableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

    }
}

/**
 * ModifyDirectConnectGatewayAttribute返回参数结构体
 * @class
 */
class ModifyDirectConnectGatewayAttributeResponse extends  AbstractModel {
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
 * DescribeVpnGateways请求参数结构体
 * @class
 */
class DescribeVpnGatewaysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关实例ID。形如：vpngw-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpnGatewayIds和Filters。
         * @type {Array.<string> || null}
         */
        this.VpnGatewayIds = null;

        /**
         * 过滤条件，参数不支持同时指定VpnGatewayIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。</li>
<li>vpn-gateway-id - String - （过滤条件）VPN实例ID形如：vpngw-5aluhh9t。</li>
<li>vpn-gateway-name - String - （过滤条件）VPN实例名称。</li>
<li>type - String - （过滤条件）VPN网关类型：'IPSEC', 'SSL'。</li>
<li>public-ip-address- String - （过滤条件）公网IP。</li>
<li>renew-flag - String - （过滤条件）网关续费类型，手动续费：'NOTIFY_AND_MANUAL_RENEW'、自动续费：'NOTIFY_AND_AUTO_RENEW'。</li>
<li>zone - String - （过滤条件）VPN所在可用区，形如：ap-guangzhou-2。</li>
         * @type {Array.<FilterObject> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 请求对象个数
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
        this.VpnGatewayIds = 'VpnGatewayIds' in params ? params.VpnGatewayIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new FilterObject();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateSubnets请求参数结构体
 * @class
 */
class CreateSubnetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`。形如：`vpc-6v2ht8q5`
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网对象列表。
         * @type {Array.<SubnetInput> || null}
         */
        this.Subnets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.Subnets) {
            this.Subnets = new Array();
            for (let z in params.Subnets) {
                let obj = new SubnetInput();
                obj.deserialize(params.Subnets[z]);
                this.Subnets.push(obj);
            }
        }

    }
}

/**
 * AssociateAddress返回参数结构体
 * @class
 */
class AssociateAddressResponse extends  AbstractModel {
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
 * ResetVpnConnection返回参数结构体
 * @class
 */
class ResetVpnConnectionResponse extends  AbstractModel {
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
 * DescribeAddresses请求参数结构体
 * @class
 */
class DescribeAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：`eip-11112222`。参数不支持同时指定`AddressIds`和`Filters`。
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

        /**
         * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AddressIds`和`Filters`。详细的过滤条件如下：
<li> address-id - String - 是否必填：否 - （过滤条件）按照 EIP 的唯一 ID 过滤。EIP 唯一 ID 形如：eip-11112222。</li>
<li> address-name - String - 是否必填：否 - （过滤条件）按照 EIP 名称过滤。不支持模糊过滤。</li>
<li> address-ip - String - 是否必填：否 - （过滤条件）按照 EIP 的 IP 地址过滤。</li>
<li> address-status - String - 是否必填：否 - （过滤条件）按照 EIP 的状态过滤。取值范围：[详见EIP状态列表](https://cloud.tencent.com/document/api/213/9452#eip_state)。</li>
<li> instance-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的实例 ID 过滤。实例 ID 形如：ins-11112222。</li>
<li> private-ip-address - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的内网 IP 过滤。</li>
<li> network-interface-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的弹性网卡 ID 过滤。弹性网卡 ID 形如：eni-11112222。</li>
<li> is-arrears - String - 是否必填：否 - （过滤条件）按照 EIP 是否欠费进行过滤。（TRUE：EIP 处于欠费状态|FALSE：EIP 费用状态正常）</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
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
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;

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
 * DescribeSecurityGroupPolicies请求参数结构体
 * @class
 */
class DescribeSecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如：sg-33ocnj9n，可通过DescribeSecurityGroups获取。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

    }
}

/**
 * ModifyNetworkInterfaceAttribute返回参数结构体
 * @class
 */
class ModifyNetworkInterfaceAttributeResponse extends  AbstractModel {
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
 * CreateSecurityGroup返回参数结构体
 * @class
 */
class CreateSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组对象。
         * @type {SecurityGroup || null}
         */
        this.SecurityGroup = null;

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

        if (params.SecurityGroup) {
            let obj = new SecurityGroup();
            obj.deserialize(params.SecurityGroup)
            this.SecurityGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIp6TranslatorQuota请求参数结构体
 * @class
 */
class DescribeIp6TranslatorQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询IPV6转换实例的唯一ID列表，形如ip6-xxxxxxxx
         * @type {Array.<string> || null}
         */
        this.Ip6TranslatorIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip6TranslatorIds = 'Ip6TranslatorIds' in params ? params.Ip6TranslatorIds : null;

    }
}

/**
 * AssignIpv6CidrBlock返回参数结构体
 * @class
 */
class AssignIpv6CidrBlockResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配的 `IPv6` 网段。形如：`3402:4e00:20:1000::/56`
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

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
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCcn请求参数结构体
 * @class
 */
class CreateCcnRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.CcnName = null;

        /**
         * CCN描述信息，最大长度不能超过100个字节。
         * @type {string || null}
         */
        this.CcnDescription = null;

        /**
         * CCN服务质量，'PT'：白金，'AU'：金，'AG'：银，默认为‘AU’。
         * @type {string || null}
         */
        this.QosLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnName = 'CcnName' in params ? params.CcnName : null;
        this.CcnDescription = 'CcnDescription' in params ? params.CcnDescription : null;
        this.QosLevel = 'QosLevel' in params ? params.QosLevel : null;

    }
}

/**
 * RemoveIp6Rules请求参数结构体
 * @class
 */
class RemoveIp6RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPV6转换规则所属的转换实例唯一ID，形如ip6-xxxxxxxx
         * @type {string || null}
         */
        this.Ip6TranslatorId = null;

        /**
         * 待删除IPV6转换规则，形如rule6-xxxxxxxx
         * @type {Array.<string> || null}
         */
        this.Ip6RuleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip6TranslatorId = 'Ip6TranslatorId' in params ? params.Ip6TranslatorId : null;
        this.Ip6RuleIds = 'Ip6RuleIds' in params ? params.Ip6RuleIds : null;

    }
}

/**
 * DeleteVpnConnection请求参数结构体
 * @class
 */
class DeleteVpnConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关实例ID。
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * VPN通道实例ID。形如：vpnx-f49l6u0z。
         * @type {string || null}
         */
        this.VpnConnectionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;

    }
}

/**
 * RenewVpnGateway返回参数结构体
 * @class
 */
class RenewVpnGatewayResponse extends  AbstractModel {
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
 * ModifyAddressesBandwidth请求参数结构体
 * @class
 */
class ModifyAddressesBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EIP唯一标识id，形如'eip-xxxx'
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

        /**
         * 调整带宽目标值
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 包月带宽起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 包月带宽结束时间
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
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ResetVpnGatewayInternetMaxBandwidth请求参数结构体
 * @class
 */
class ResetVpnGatewayInternetMaxBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关实例ID。
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * 公网带宽设置。可选带宽规格：5, 10, 20, 50, 100；单位：Mbps。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

    }
}

/**
 * 专线网关对象。
 * @class
 */
class DirectConnectGateway extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线网关`ID`。
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * 专线网关名称。
         * @type {string || null}
         */
        this.DirectConnectGatewayName = null;

        /**
         * 专线网关关联`VPC`实例`ID`。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 关联网络类型：
<li>`VPC` - 私有网络</li>
<li>`CCN` - 云联网</li>
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 关联网络实例`ID`：
<li>`NetworkType`为`VPC`时，这里为私有网络实例`ID`</li>
<li>`NetworkType`为`CCN`时，这里为云联网实例`ID`</li>
         * @type {string || null}
         */
        this.NetworkInstanceId = null;

        /**
         * 网关类型：
<li>NORMAL - 标准型，注：云联网只支持标准型</li>
<li>NAT - NAT型</li>
NAT类型支持网络地址转换配置，类型确定后不能修改；一个私有网络可以创建一个NAT类型的专线网关和一个非NAT类型的专线网关
         * @type {string || null}
         */
        this.GatewayType = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 专线网关IP。
         * @type {string || null}
         */
        this.DirectConnectGatewayIp = null;

        /**
         * 专线网关关联`CCN`实例`ID`。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 云联网路由学习类型：
<li>`BGP` - 自动学习。</li>
<li>`STATIC` - 静态，即用户配置。</li>
         * @type {string || null}
         */
        this.CcnRouteType = null;

        /**
         * 是否启用BGP。
         * @type {boolean || null}
         */
        this.EnableBGP = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.DirectConnectGatewayName = 'DirectConnectGatewayName' in params ? params.DirectConnectGatewayName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.NetworkInstanceId = 'NetworkInstanceId' in params ? params.NetworkInstanceId : null;
        this.GatewayType = 'GatewayType' in params ? params.GatewayType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DirectConnectGatewayIp = 'DirectConnectGatewayIp' in params ? params.DirectConnectGatewayIp : null;
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.CcnRouteType = 'CcnRouteType' in params ? params.CcnRouteType : null;
        this.EnableBGP = 'EnableBGP' in params ? params.EnableBGP : null;

    }
}

/**
 * 价格
 * @class
 */
class Price extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例价格。
         * @type {ItemPrice || null}
         */
        this.InstancePrice = null;

        /**
         * 网络价格。
         * @type {ItemPrice || null}
         */
        this.BandwidthPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstancePrice) {
            let obj = new ItemPrice();
            obj.deserialize(params.InstancePrice)
            this.InstancePrice = obj;
        }

        if (params.BandwidthPrice) {
            let obj = new ItemPrice();
            obj.deserialize(params.BandwidthPrice)
            this.BandwidthPrice = obj;
        }

    }
}

/**
 * HaVipDisassociateAddressIp请求参数结构体
 * @class
 */
class HaVipDisassociateAddressIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `HAVIP`唯一`ID`，形如：`havip-9o233uri`。必须是已绑定`EIP`的`HAVIP`。
         * @type {string || null}
         */
        this.HaVipId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;

    }
}

/**
 * ModifyVpnGatewayAttribute返回参数结构体
 * @class
 */
class ModifyVpnGatewayAttributeResponse extends  AbstractModel {
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
 * UnassignIpv6CidrBlock返回参数结构体
 * @class
 */
class UnassignIpv6CidrBlockResponse extends  AbstractModel {
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
 * CreateServiceTemplateGroup请求参数结构体
 * @class
 */
class CreateServiceTemplateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议端口模板集合名称
         * @type {string || null}
         */
        this.ServiceTemplateGroupName = null;

        /**
         * 协议端口模板实例ID，例如：ppm-4dw6agho。
         * @type {Array.<string> || null}
         */
        this.ServiceTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTemplateGroupName = 'ServiceTemplateGroupName' in params ? params.ServiceTemplateGroupName : null;
        this.ServiceTemplateIds = 'ServiceTemplateIds' in params ? params.ServiceTemplateIds : null;

    }
}

/**
 * DescribeClassicLinkInstances返回参数结构体
 * @class
 */
class DescribeClassicLinkInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 私有网络和基础网络互通设备。
         * @type {Array.<ClassicLinkInstance> || null}
         */
        this.ClassicLinkInstanceSet = null;

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

        if (params.ClassicLinkInstanceSet) {
            this.ClassicLinkInstanceSet = new Array();
            for (let z in params.ClassicLinkInstanceSet) {
                let obj = new ClassicLinkInstance();
                obj.deserialize(params.ClassicLinkInstanceSet[z]);
                this.ClassicLinkInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetachCcnInstances请求参数结构体
 * @class
 */
class DetachCcnInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN实例ID。形如：ccn-f49l6u0z。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 要解关联网络实例列表
         * @type {Array.<CcnInstance> || null}
         */
        this.Instances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new CcnInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

    }
}

/**
 * CreateFlowLog返回参数结构体
 * @class
 */
class CreateFlowLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的流日志信息
         * @type {Array.<FlowLog> || null}
         */
        this.FlowLog = null;

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

        if (params.FlowLog) {
            this.FlowLog = new Array();
            for (let z in params.FlowLog) {
                let obj = new FlowLog();
                obj.deserialize(params.FlowLog[z]);
                this.FlowLog.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDirectConnectGateway请求参数结构体
 * @class
 */
class DeleteDirectConnectGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线网关唯一`ID`，形如：`dcg-9o233uri`。
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;

    }
}

/**
 * 云联网（CCN）关联实例（Instance）对象
 * @class
 */
class CcnAttachedInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云联网实例ID。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 关联实例类型：
<li>`VPC`：私有网络</li>
<li>`DIRECTCONNECT`：专线网关</li>
<li>`BMVPC`：黑石私有网络</li>
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 关联实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 关联实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 关联实例所属大区，例如：ap-guangzhou。
         * @type {string || null}
         */
        this.InstanceRegion = null;

        /**
         * 关联实例所属UIN（根账号）。
         * @type {string || null}
         */
        this.InstanceUin = null;

        /**
         * 关联实例CIDR。
         * @type {Array.<string> || null}
         */
        this.CidrBlock = null;

        /**
         * 关联实例状态：
<li>`PENDING`：申请中</li>
<li>`ACTIVE`：已连接</li>
<li>`EXPIRED`：已过期</li>
<li>`REJECTED`：已拒绝</li>
<li>`DELETED`：已删除</li>
<li>`FAILED`：失败的（2小时后将异步强制解关联）</li>
<li>`ATTACHING`：关联中</li>
<li>`DETACHING`：解关联中</li>
<li>`DETACHFAILED`：解关联失败（2小时后将异步强制解关联）</li>
         * @type {string || null}
         */
        this.State = null;

        /**
         * 关联时间。
         * @type {string || null}
         */
        this.AttachedTime = null;

        /**
         * 云联网所属UIN（根账号）。
         * @type {string || null}
         */
        this.CcnUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceRegion = 'InstanceRegion' in params ? params.InstanceRegion : null;
        this.InstanceUin = 'InstanceUin' in params ? params.InstanceUin : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.State = 'State' in params ? params.State : null;
        this.AttachedTime = 'AttachedTime' in params ? params.AttachedTime : null;
        this.CcnUin = 'CcnUin' in params ? params.CcnUin : null;

    }
}

/**
 * SecurityPolicyDatabase策略
 * @class
 */
class SecurityPolicyDatabase extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本端网段
         * @type {string || null}
         */
        this.LocalCidrBlock = null;

        /**
         * 对端网段
         * @type {Array.<string> || null}
         */
        this.RemoteCidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocalCidrBlock = 'LocalCidrBlock' in params ? params.LocalCidrBlock : null;
        this.RemoteCidrBlock = 'RemoteCidrBlock' in params ? params.RemoteCidrBlock : null;

    }
}

/**
 * `IPv6`地址信息。
 * @class
 */
class Ipv6Address extends  AbstractModel {
    constructor(){
        super();

        /**
         * `IPv6`地址，形如：`3402:4e00:20:100:0:8cd9:2a67:71f3`
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 是否是主`IP`。
         * @type {boolean || null}
         */
        this.Primary = null;

        /**
         * `EIP`实例`ID`，形如：`eip-hxlqja90`。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 公网IP是否被封堵。
         * @type {boolean || null}
         */
        this.IsWanIpBlocked = null;

        /**
         * `IPv6`地址状态：
<li>`PENDING`：生产中</li>
<li>`MIGRATING`：迁移中</li>
<li>`DELETING`：删除中</li>
<li>`AVAILABLE`：可用的</li>
         * @type {string || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IsWanIpBlocked = 'IsWanIpBlocked' in params ? params.IsWanIpBlocked : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * CreateNetworkInterface请求参数结构体
 * @class
 */
class CreateNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 弹性网卡名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.NetworkInterfaceName = null;

        /**
         * 弹性网卡所在的子网实例ID，例如：subnet-0ap8nwca。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 弹性网卡描述，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.NetworkInterfaceDescription = null;

        /**
         * 新申请的内网IP地址个数，内网IP地址个数总和不能超过配数。
         * @type {number || null}
         */
        this.SecondaryPrivateIpAddressCount = null;

        /**
         * 指定绑定的安全组，例如：['sg-1dd51d']。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 指定的内网IP信息，单次最多指定10个。
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.NetworkInterfaceName = 'NetworkInterfaceName' in params ? params.NetworkInterfaceName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.NetworkInterfaceDescription = 'NetworkInterfaceDescription' in params ? params.NetworkInterfaceDescription : null;
        this.SecondaryPrivateIpAddressCount = 'SecondaryPrivateIpAddressCount' in params ? params.SecondaryPrivateIpAddressCount : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }

    }
}

/**
 * DeleteHaVip返回参数结构体
 * @class
 */
class DeleteHaVipResponse extends  AbstractModel {
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
 * DescribeFlowLogs返回参数结构体
 * @class
 */
class DescribeFlowLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流日志实例集合
         * @type {Array.<FlowLog> || null}
         */
        this.FlowLog = null;

        /**
         * 流日志总数目
         * @type {number || null}
         */
        this.TotalNum = null;

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

        if (params.FlowLog) {
            this.FlowLog = new Array();
            for (let z in params.FlowLog) {
                let obj = new FlowLog();
                obj.deserialize(params.FlowLog[z]);
                this.FlowLog.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VPC内网IP对象。
 * @class
 */
class VpcPrivateIpAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`内网`IP`。
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * 所属子网`CIDR`。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 内网`IP`类型。
         * @type {string || null}
         */
        this.PrivateIpAddressType = null;

        /**
         * `IP`申请时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.PrivateIpAddressType = 'PrivateIpAddressType' in params ? params.PrivateIpAddressType : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DescribeCcnAttachedInstances返回参数结构体
 * @class
 */
class DescribeCcnAttachedInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的对象数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 关联实例列表。
         * @type {Array.<CcnAttachedInstance> || null}
         */
        this.InstanceSet = null;

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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new CcnAttachedInstance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubnets请求参数结构体
 * @class
 */
class DescribeSubnetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网实例ID查询。形如：subnet-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定SubnetIds和Filters。
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 过滤条件，参数不支持同时指定SubnetIds和Filters。
<li>subnet-id - String - （过滤条件）Subnet实例名称。</li>
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>cidr-block - String - （过滤条件）子网网段，形如: 192.168.1.0 。</li>
<li>is-default - Boolean - （过滤条件）是否是默认子网。</li>
<li>is-remote-vpc-snat - Boolean - （过滤条件）是否为VPC SNAT地址池子网。</li>
<li>subnet-name - String - （过滤条件）子网名称。</li>
<li>zone - String - （过滤条件）可用区。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 返回数量
         * @type {string || null}
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
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

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
 * CreateSubnet请求参数结构体
 * @class
 */
class CreateSubnetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 子网网段，子网网段必须在VPC网段内，相同VPC内子网网段不能重叠。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 子网所在的可用区ID，不同子网选择不同可用区可以做跨可用区灾备。
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * IP地址模板集合
 * @class
 */
class AddressTemplateGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址模板集合名称。
         * @type {string || null}
         */
        this.AddressTemplateGroupName = null;

        /**
         * IP地址模板集合实例ID，例如：ipmg-dih8xdbq。
         * @type {string || null}
         */
        this.AddressTemplateGroupId = null;

        /**
         * IP地址模板ID。
         * @type {Array.<string> || null}
         */
        this.AddressTemplateIdSet = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateGroupName = 'AddressTemplateGroupName' in params ? params.AddressTemplateGroupName : null;
        this.AddressTemplateGroupId = 'AddressTemplateGroupId' in params ? params.AddressTemplateGroupId : null;
        this.AddressTemplateIdSet = 'AddressTemplateIdSet' in params ? params.AddressTemplateIdSet : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DownloadCustomerGatewayConfiguration请求参数结构体
 * @class
 */
class DownloadCustomerGatewayConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关实例ID。
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * VPN通道实例ID。形如：vpnx-f49l6u0z。
         * @type {string || null}
         */
        this.VpnConnectionId = null;

        /**
         * 对端网关厂商信息对象，可通过DescribeCustomerGatewayVendors获取。
         * @type {CustomerGatewayVendor || null}
         */
        this.CustomerGatewayVendor = null;

        /**
         * 通道接入设备物理接口名称。
         * @type {string || null}
         */
        this.InterfaceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;

        if (params.CustomerGatewayVendor) {
            let obj = new CustomerGatewayVendor();
            obj.deserialize(params.CustomerGatewayVendor)
            this.CustomerGatewayVendor = obj;
        }
        this.InterfaceName = 'InterfaceName' in params ? params.InterfaceName : null;

    }
}

/**
 * DeleteBandwidthPackage请求参数结构体
 * @class
 */
class DeleteBandwidthPackageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除带宽包bwpId
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;

    }
}

/**
 * 描述 HAVIP 信息
 * @class
 */
class HaVip extends  AbstractModel {
    constructor(){
        super();

        /**
         * `HAVIP`的`ID`，是`HAVIP`的唯一标识。
         * @type {string || null}
         */
        this.HaVipId = null;

        /**
         * `HAVIP`名称。
         * @type {string || null}
         */
        this.HaVipName = null;

        /**
         * 虚拟IP地址。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * `HAVIP`所在私有网络`ID`。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * `HAVIP`所在子网`ID`。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * `HAVIP`关联弹性网卡`ID`。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 被绑定的实例`ID`。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 绑定`EIP`。
         * @type {string || null}
         */
        this.AddressIp = null;

        /**
         * 状态：
<li>`AVAILABLE`：运行中</li>
<li>`UNBIND`：未绑定</li>
         * @type {string || null}
         */
        this.State = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;
        this.HaVipName = 'HaVipName' in params ? params.HaVipName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;
        this.State = 'State' in params ? params.State : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * ModifyAddressesBandwidth返回参数结构体
 * @class
 */
class ModifyAddressesBandwidthResponse extends  AbstractModel {
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
 * SetCcnRegionBandwidthLimits返回参数结构体
 * @class
 */
class SetCcnRegionBandwidthLimitsResponse extends  AbstractModel {
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
 * DescribeAccountAttributes请求参数结构体
 * @class
 */
class DescribeAccountAttributesRequest extends  AbstractModel {
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
 * DescribeCcnRoutes请求参数结构体
 * @class
 */
class DescribeCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN实例ID，形如：ccn-gree226l。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * CCN路由策略唯一ID。形如：ccnr-f49l6u0z。
         * @type {Array.<string> || null}
         */
        this.RouteIds = null;

        /**
         * 过滤条件，参数不支持同时指定RouteIds和Filters。
<li>route-id - String -（过滤条件）路由策略ID。</li>
<li>cidr-block - String -（过滤条件）目的端。</li>
<li>instance-type - String -（过滤条件）下一跳类型。</li>
<li>instance-region - String -（过滤条件）下一跳所属地域。</li>
<li>instance-id - String -（过滤条件）下一跳实例ID。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
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
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

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
 * DownloadCustomerGatewayConfiguration返回参数结构体
 * @class
 */
class DownloadCustomerGatewayConfigurationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * XML格式配置信息。
         * @type {string || null}
         */
        this.CustomerGatewayConfiguration = null;

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
        this.CustomerGatewayConfiguration = 'CustomerGatewayConfiguration' in params ? params.CustomerGatewayConfiguration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AllocateAddresses请求参数结构体
 * @class
 */
class AllocateAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 申请 EIP 数量，默认值为1。
         * @type {number || null}
         */
        this.AddressCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressCount = 'AddressCount' in params ? params.AddressCount : null;

    }
}

/**
 * CreateRouteTable返回参数结构体
 * @class
 */
class CreateRouteTableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表对象。
         * @type {RouteTable || null}
         */
        this.RouteTable = null;

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

        if (params.RouteTable) {
            let obj = new RouteTable();
            obj.deserialize(params.RouteTable)
            this.RouteTable = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySecurityGroupAttribute返回参数结构体
 * @class
 */
class ModifySecurityGroupAttributeResponse extends  AbstractModel {
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
 * ModifyAddressAttribute返回参数结构体
 * @class
 */
class ModifyAddressAttributeResponse extends  AbstractModel {
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
 * AttachClassicLinkVpc请求参数结构体
 * @class
 */
class AttachClassicLinkVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * CVM实例ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * 网关流量监控明细
 * @class
 */
class GatewayFlowMonitorDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 来源`IP`。
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * 入包量。
         * @type {number || null}
         */
        this.InPkg = null;

        /**
         * 出包量。
         * @type {number || null}
         */
        this.OutPkg = null;

        /**
         * 入带宽，单位：`Byte`。
         * @type {number || null}
         */
        this.InTraffic = null;

        /**
         * 出带宽，单位：`Byte`。
         * @type {number || null}
         */
        this.OutTraffic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.InPkg = 'InPkg' in params ? params.InPkg : null;
        this.OutPkg = 'OutPkg' in params ? params.OutPkg : null;
        this.InTraffic = 'InTraffic' in params ? params.InTraffic : null;
        this.OutTraffic = 'OutTraffic' in params ? params.OutTraffic : null;

    }
}

/**
 * DeleteVpnGateway请求参数结构体
 * @class
 */
class DeleteVpnGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关实例ID。
         * @type {string || null}
         */
        this.VpnGatewayId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;

    }
}

/**
 * ReplaceRouteTableAssociation返回参数结构体
 * @class
 */
class ReplaceRouteTableAssociationResponse extends  AbstractModel {
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
 * AttachCcnInstances请求参数结构体
 * @class
 */
class AttachCcnInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN实例ID。形如：ccn-f49l6u0z。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 关联网络实例列表
         * @type {Array.<CcnInstance> || null}
         */
        this.Instances = null;

        /**
         * CCN所属UIN（根账号），默认当前账号所属UIN
         * @type {string || null}
         */
        this.CcnUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new CcnInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.CcnUin = 'CcnUin' in params ? params.CcnUin : null;

    }
}

/**
 * DescribeDirectConnectGatewayCcnRoutes请求参数结构体
 * @class
 */
class DescribeDirectConnectGatewayCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线网关ID，形如：`dcg-prpqlmg1`。
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * 云联网路由学习类型，可选值：
<li>`BGP` - 自动学习。</li>
<li>`STATIC` - 静态，即用户配置，默认值。</li>
         * @type {string || null}
         */
        this.CcnRouteType = null;

        /**
         * 偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量。
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
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.CcnRouteType = 'CcnRouteType' in params ? params.CcnRouteType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 云联网（CCN）关联实例（Instance）对象。
 * @class
 */
class CcnInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关联实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 关联实例ID所属大区，例如：ap-guangzhou。
         * @type {string || null}
         */
        this.InstanceRegion = null;

        /**
         * 关联实例类型，可选值：
<li>`VPC`：私有网络</li>
<li>`DIRECTCONNECT`：专线网关</li>
<li>`BMVPC`：黑石私有网络</li>
         * @type {string || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceRegion = 'InstanceRegion' in params ? params.InstanceRegion : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * ModifyCustomerGatewayAttribute返回参数结构体
 * @class
 */
class ModifyCustomerGatewayAttributeResponse extends  AbstractModel {
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
 * InquiryPriceRenewVpnGateway返回参数结构体
 * @class
 */
class InquiryPriceRenewVpnGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品价格。
         * @type {Price || null}
         */
        this.Price = null;

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

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssignIpv6SubnetCidrBlock返回参数结构体
 * @class
 */
class AssignIpv6SubnetCidrBlockResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配 `IPv6` 子网段列表。
         * @type {Array.<Ipv6SubnetCidrBlock> || null}
         */
        this.Ipv6SubnetCidrBlockSet = null;

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

        if (params.Ipv6SubnetCidrBlockSet) {
            this.Ipv6SubnetCidrBlockSet = new Array();
            for (let z in params.Ipv6SubnetCidrBlockSet) {
                let obj = new Ipv6SubnetCidrBlock();
                obj.deserialize(params.Ipv6SubnetCidrBlockSet[z]);
                this.Ipv6SubnetCidrBlockSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCcnRegionBandwidthLimits返回参数结构体
 * @class
 */
class DescribeCcnRegionBandwidthLimitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云联网（CCN）各地域出带宽上限
         * @type {Array.<CcnRegionBandwidthLimit> || null}
         */
        this.CcnRegionBandwidthLimitSet = null;

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

        if (params.CcnRegionBandwidthLimitSet) {
            this.CcnRegionBandwidthLimitSet = new Array();
            for (let z in params.CcnRegionBandwidthLimitSet) {
                let obj = new CcnRegionBandwidthLimit();
                obj.deserialize(params.CcnRegionBandwidthLimitSet[z]);
                this.CcnRegionBandwidthLimitSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAddresses返回参数结构体
 * @class
 */
class DescribeAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的 EIP 数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * EIP 详细信息列表。
         * @type {Array.<Address> || null}
         */
        this.AddressSet = null;

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

        if (params.AddressSet) {
            this.AddressSet = new Array();
            for (let z in params.AddressSet) {
                let obj = new Address();
                obj.deserialize(params.AddressSet[z]);
                this.AddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyIpv6AddressesAttribute请求参数结构体
 * @class
 */
class ModifyIpv6AddressesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例`ID`，形如：`eni-m6dyj72l`。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 指定的内网IPv6`地址信息。
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6Addresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.Ipv6Addresses) {
            this.Ipv6Addresses = new Array();
            for (let z in params.Ipv6Addresses) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6Addresses[z]);
                this.Ipv6Addresses.push(obj);
            }
        }

    }
}

/**
 * DescribeCustomerGatewayVendors请求参数结构体
 * @class
 */
class DescribeCustomerGatewayVendorsRequest extends  AbstractModel {
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
 * DisableRoutes返回参数结构体
 * @class
 */
class DisableRoutesResponse extends  AbstractModel {
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
 * ResetVpnGatewayInternetMaxBandwidth返回参数结构体
 * @class
 */
class ResetVpnGatewayInternetMaxBandwidthResponse extends  AbstractModel {
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
 * DeleteFlowLog返回参数结构体
 * @class
 */
class DeleteFlowLogResponse extends  AbstractModel {
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
 * AttachCcnInstances返回参数结构体
 * @class
 */
class AttachCcnInstancesResponse extends  AbstractModel {
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
 * CreateDefaultVpc返回参数结构体
 * @class
 */
class CreateDefaultVpcResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认VPC和子网ID
         * @type {DefaultVpcSubnet || null}
         */
        this.Vpc = null;

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

        if (params.Vpc) {
            let obj = new DefaultVpcSubnet();
            obj.deserialize(params.Vpc)
            this.Vpc = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyVpcAttribute返回参数结构体
 * @class
 */
class ModifyVpcAttributeResponse extends  AbstractModel {
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
 * ModifyVpnConnectionAttribute返回参数结构体
 * @class
 */
class ModifyVpnConnectionAttributeResponse extends  AbstractModel {
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
 * 内网IP信息
 * @class
 */
class PrivateIpAddressSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内网IP地址。
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * 是否是主IP。
         * @type {boolean || null}
         */
        this.Primary = null;

        /**
         * 公网IP地址。
         * @type {string || null}
         */
        this.PublicIpAddress = null;

        /**
         * EIP实例ID，例如：eip-11112222。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * 内网IP描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 公网IP是否被封堵。
         * @type {boolean || null}
         */
        this.IsWanIpBlocked = null;

        /**
         * IP状态：
PENDING：生产中
MIGRATING：迁移中
DELETING：删除中
AVAILABLE：可用的
         * @type {string || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IsWanIpBlocked = 'IsWanIpBlocked' in params ? params.IsWanIpBlocked : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * MigratePrivateIpAddress返回参数结构体
 * @class
 */
class MigratePrivateIpAddressResponse extends  AbstractModel {
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
 * DeleteRouteTable返回参数结构体
 * @class
 */
class DeleteRouteTableResponse extends  AbstractModel {
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
 * 账户属性对象
 * @class
 */
class AccountAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性名
         * @type {string || null}
         */
        this.AttributeName = null;

        /**
         * 属性值
         * @type {Array.<string> || null}
         */
        this.AttributeValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttributeName = 'AttributeName' in params ? params.AttributeName : null;
        this.AttributeValues = 'AttributeValues' in params ? params.AttributeValues : null;

    }
}

/**
 * ModifyHaVipAttribute返回参数结构体
 * @class
 */
class ModifyHaVipAttributeResponse extends  AbstractModel {
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
 * RemoveBandwidthPackageResources返回参数结构体
 * @class
 */
class RemoveBandwidthPackageResourcesResponse extends  AbstractModel {
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
 * ModifySecurityGroupPolicies返回参数结构体
 * @class
 */
class ModifySecurityGroupPoliciesResponse extends  AbstractModel {
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
 * AttachNetworkInterface返回参数结构体
 * @class
 */
class AttachNetworkInterfaceResponse extends  AbstractModel {
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
 * DescribeServiceTemplates返回参数结构体
 * @class
 */
class DescribeServiceTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 协议端口模板对象。
         * @type {Array.<ServiceTemplate> || null}
         */
        this.ServiceTemplateSet = null;

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

        if (params.ServiceTemplateSet) {
            this.ServiceTemplateSet = new Array();
            for (let z in params.ServiceTemplateSet) {
                let obj = new ServiceTemplate();
                obj.deserialize(params.ServiceTemplateSet[z]);
                this.ServiceTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRouteTables请求参数结构体
 * @class
 */
class DescribeRouteTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {Array.<string> || null}
         */
        this.RouteTableIds = null;

        /**
         * 过滤条件，参数不支持同时指定RouteTableIds和Filters。
<li>route-table-id - String - （过滤条件）路由表实例ID。</li>
<li>route-table-name - String - （过滤条件）路由表名称。</li>
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>association.main - String - （过滤条件）是否主路由表。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量。
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 请求对象个数。
         * @type {string || null}
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
        this.RouteTableIds = 'RouteTableIds' in params ? params.RouteTableIds : null;

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
 * ResetAttachCcnInstances请求参数结构体
 * @class
 */
class ResetAttachCcnInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN实例ID。形如：ccn-f49l6u0z。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * CCN所属UIN（根账号）。
         * @type {string || null}
         */
        this.CcnUin = null;

        /**
         * 重新申请关联网络实例列表。
         * @type {Array.<CcnInstance> || null}
         */
        this.Instances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.CcnUin = 'CcnUin' in params ? params.CcnUin : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new CcnInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

    }
}

/**
 * CreateHaVip返回参数结构体
 * @class
 */
class CreateHaVipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `HAVIP`对象。
         * @type {HaVip || null}
         */
        this.HaVip = null;

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

        if (params.HaVip) {
            let obj = new HaVip();
            obj.deserialize(params.HaVip)
            this.HaVip = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableRoutes请求参数结构体
 * @class
 */
class DisableRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表唯一ID。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由策略唯一ID。
         * @type {Array.<number> || null}
         */
        this.RouteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

    }
}

/**
 * EnableRoutes请求参数结构体
 * @class
 */
class EnableRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表唯一ID。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由策略唯一ID。
         * @type {Array.<number> || null}
         */
        this.RouteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

    }
}

/**
 * DescribeAddressTemplateGroups返回参数结构体
 * @class
 */
class DescribeAddressTemplateGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * IP地址模板。
         * @type {Array.<AddressTemplateGroup> || null}
         */
        this.AddressTemplateGroupSet = null;

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

        if (params.AddressTemplateGroupSet) {
            this.AddressTemplateGroupSet = new Array();
            for (let z in params.AddressTemplateGroupSet) {
                let obj = new AddressTemplateGroup();
                obj.deserialize(params.AddressTemplateGroupSet[z]);
                this.AddressTemplateGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReleaseAddresses请求参数结构体
 * @class
 */
class ReleaseAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：`eip-11112222`。
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;

    }
}

/**
 * CreateDirectConnectGatewayCcnRoutes请求参数结构体
 * @class
 */
class CreateDirectConnectGatewayCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线网关ID，形如：dcg-prpqlmg1
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * 需要连通的IDC网段列表
         * @type {Array.<DirectConnectGatewayCcnRoute> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new DirectConnectGatewayCcnRoute();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * CreateDirectConnectGatewayCcnRoutes返回参数结构体
 * @class
 */
class CreateDirectConnectGatewayCcnRoutesResponse extends  AbstractModel {
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
 * CreateRouteTable请求参数结构体
 * @class
 */
class CreateRouteTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 路由表名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.RouteTableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

    }
}

/**
 * MigrateNetworkInterface请求参数结构体
 * @class
 */
class MigrateNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 弹性网卡当前绑定的CVM实例ID。形如：ins-r8hr2upy。
         * @type {string || null}
         */
        this.SourceInstanceId = null;

        /**
         * 待迁移的目的CVM实例ID。
         * @type {string || null}
         */
        this.DestinationInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.SourceInstanceId = 'SourceInstanceId' in params ? params.SourceInstanceId : null;
        this.DestinationInstanceId = 'DestinationInstanceId' in params ? params.DestinationInstanceId : null;

    }
}

/**
 * DisableCcnRoutes请求参数结构体
 * @class
 */
class DisableCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN实例ID。形如：ccn-f49l6u0z。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * CCN路由策略唯一ID。形如：ccnr-f49l6u0z。
         * @type {Array.<string> || null}
         */
        this.RouteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

    }
}

/**
 * ModifyVpcAttribute请求参数结构体
 * @class
 */
class ModifyVpcAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。形如：vpc-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpcIds和Filters。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 是否开启组播。true: 开启, false: 关闭。
         * @type {string || null}
         */
        this.EnableMulticast = null;

        /**
         * DNS地址，最多支持4个，第1个默认为主，其余为备
         * @type {Array.<string> || null}
         */
        this.DnsServers = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.EnableMulticast = 'EnableMulticast' in params ? params.EnableMulticast : null;
        this.DnsServers = 'DnsServers' in params ? params.DnsServers : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * 子网对象
 * @class
 */
class SubnetInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网的`CIDR`。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 子网名称。
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 可用区。形如：`ap-guangzhou-2`。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 指定关联路由表，形如：`rtb-3ryrwzuu`。
         * @type {string || null}
         */
        this.RouteTableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * UnassignIpv6SubnetCidrBlock返回参数结构体
 * @class
 */
class UnassignIpv6SubnetCidrBlockResponse extends  AbstractModel {
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
 * DeleteCcn请求参数结构体
 * @class
 */
class DeleteCcnRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN实例ID。形如：ccn-f49l6u0z。
         * @type {string || null}
         */
        this.CcnId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

    }
}

/**
 * ModifyVpnGatewayAttribute请求参数结构体
 * @class
 */
class ModifyVpnGatewayAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关实例ID。
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * VPN网关名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.VpnGatewayName = null;

        /**
         * VPN网关计费模式，目前只支持预付费（即包年包月）到后付费（即按量计费）的转换。即参数只支持：POSTPAID_BY_HOUR。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.VpnGatewayName = 'VpnGatewayName' in params ? params.VpnGatewayName : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

    }
}

/**
 * IPSec配置，腾讯云提供IPSec安全会话设置
 * @class
 */
class IPSECOptionsSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加密算法，可选值：'3DES-CBC', 'AES-CBC-128', 'AES-CBC-192', 'AES-CBC-256', 'DES-CBC', 'NULL'， 默认为AES-CBC-128
         * @type {string || null}
         */
        this.EncryptAlgorithm = null;

        /**
         * 认证算法：可选值：'MD5', 'SHA1'，默认为
         * @type {string || null}
         */
        this.IntegrityAlgorith = null;

        /**
         * IPsec SA lifetime(s)：单位秒，取值范围：180-604800
         * @type {number || null}
         */
        this.IPSECSaLifetimeSeconds = null;

        /**
         * PFS：可选值：'NULL', 'DH-GROUP1', 'DH-GROUP2', 'DH-GROUP5', 'DH-GROUP14', 'DH-GROUP24'，默认为NULL
         * @type {string || null}
         */
        this.PfsDhGroup = null;

        /**
         * IPsec SA lifetime(KB)：单位KB，取值范围：2560-604800
         * @type {number || null}
         */
        this.IPSECSaLifetimeTraffic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EncryptAlgorithm = 'EncryptAlgorithm' in params ? params.EncryptAlgorithm : null;
        this.IntegrityAlgorith = 'IntegrityAlgorith' in params ? params.IntegrityAlgorith : null;
        this.IPSECSaLifetimeSeconds = 'IPSECSaLifetimeSeconds' in params ? params.IPSECSaLifetimeSeconds : null;
        this.PfsDhGroup = 'PfsDhGroup' in params ? params.PfsDhGroup : null;
        this.IPSECSaLifetimeTraffic = 'IPSECSaLifetimeTraffic' in params ? params.IPSECSaLifetimeTraffic : null;

    }
}

/**
 * UnassignIpv6Addresses请求参数结构体
 * @class
 */
class UnassignIpv6AddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例`ID`，形如：`eni-m6dyj72l`。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 指定的`IPv6`地址列表，单次最多指定10个。
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6Addresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.Ipv6Addresses) {
            this.Ipv6Addresses = new Array();
            for (let z in params.Ipv6Addresses) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6Addresses[z]);
                this.Ipv6Addresses.push(obj);
            }
        }

    }
}

/**
 * ModifyCcnAttribute请求参数结构体
 * @class
 */
class ModifyCcnAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN实例ID。形如：ccn-f49l6u0z。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * CCN名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.CcnName = null;

        /**
         * CCN描述信息，最大长度不能超过100个字节。
         * @type {string || null}
         */
        this.CcnDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.CcnName = 'CcnName' in params ? params.CcnName : null;
        this.CcnDescription = 'CcnDescription' in params ? params.CcnDescription : null;

    }
}

/**
 * DeleteSecurityGroupPolicies返回参数结构体
 * @class
 */
class DeleteSecurityGroupPoliciesResponse extends  AbstractModel {
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
 * DeleteVpnGateway返回参数结构体
 * @class
 */
class DeleteVpnGatewayResponse extends  AbstractModel {
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
 * DescribeHaVips请求参数结构体
 * @class
 */
class DescribeHaVipsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `HAVIP`唯一`ID`，形如：`havip-9o233uri`。
         * @type {Array.<string> || null}
         */
        this.HaVipIds = null;

        /**
         * 过滤条件，参数不支持同时指定`HaVipIds`和`Filters`。
<li>havip-id - String - `HAVIP`唯一`ID`，形如：`havip-9o233uri`。</li>
<li>havip-name - String - `HAVIP`名称。</li>
<li>vpc-id - String - `HAVIP`所在私有网络`ID`。</li>
<li>subnet-id - String - `HAVIP`所在子网`ID`。</li>
<li>address-ip - String - `HAVIP`绑定的弹性公网`IP`。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
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
        this.HaVipIds = 'HaVipIds' in params ? params.HaVipIds : null;

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
 * UnassignPrivateIpAddresses返回参数结构体
 * @class
 */
class UnassignPrivateIpAddressesResponse extends  AbstractModel {
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
 * 描述 EIP 信息
 * @class
 */
class Address extends  AbstractModel {
    constructor(){
        super();

        /**
         * `EIP`的`ID`，是`EIP`的唯一标识。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * `EIP`名称。
         * @type {string || null}
         */
        this.AddressName = null;

        /**
         * `EIP`状态。
         * @type {string || null}
         */
        this.AddressStatus = null;

        /**
         * 外网IP地址
         * @type {string || null}
         */
        this.AddressIp = null;

        /**
         * 绑定的资源实例`ID`。可能是一个`CVM`，`NAT`。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 绑定的弹性网卡ID
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 绑定的资源内网ip
         * @type {string || null}
         */
        this.PrivateAddressIp = null;

        /**
         * 资源隔离状态。true表示eip处于隔离状态，false表示资源处于未隔离状态
         * @type {boolean || null}
         */
        this.IsArrears = null;

        /**
         * 资源封堵状态。true表示eip处于封堵状态，false表示eip处于未封堵状态
         * @type {boolean || null}
         */
        this.IsBlocked = null;

        /**
         * eip是否支持直通模式。true表示eip支持直通模式，false表示资源不支持直通模式
         * @type {boolean || null}
         */
        this.IsEipDirectConnection = null;

        /**
         * eip资源类型，包括"CalcIP","WanIP","EIP","AnycastEIP"。其中"CalcIP"表示设备ip，“WanIP”表示普通公网ip，“EIP”表示弹性公网ip，“AnycastEip”表示加速EIP
         * @type {string || null}
         */
        this.AddressType = null;

        /**
         * eip是否在解绑后自动释放。true表示eip将会在解绑后自动释放，false表示eip在解绑后不会自动释放
         * @type {boolean || null}
         */
        this.CascadeRelease = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.AddressName = 'AddressName' in params ? params.AddressName : null;
        this.AddressStatus = 'AddressStatus' in params ? params.AddressStatus : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.PrivateAddressIp = 'PrivateAddressIp' in params ? params.PrivateAddressIp : null;
        this.IsArrears = 'IsArrears' in params ? params.IsArrears : null;
        this.IsBlocked = 'IsBlocked' in params ? params.IsBlocked : null;
        this.IsEipDirectConnection = 'IsEipDirectConnection' in params ? params.IsEipDirectConnection : null;
        this.AddressType = 'AddressType' in params ? params.AddressType : null;
        this.CascadeRelease = 'CascadeRelease' in params ? params.CascadeRelease : null;

    }
}

/**
 * VPN网关对象。
 * @class
 */
class VpnGateway extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关实例ID。
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * VPC实例ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 网关实例名称。
         * @type {string || null}
         */
        this.VpnGatewayName = null;

        /**
         * 网关实例类型：'IPSEC', 'SSL'。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 网关实例状态， 'PENDING'：生产中，'DELETING'：删除中，'AVAILABLE'：运行中。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 网关公网IP。
         * @type {string || null}
         */
        this.PublicIpAddress = null;

        /**
         * 网关续费类型：'NOTIFY_AND_MANUAL_RENEW'：手动续费，'NOTIFY_AND_AUTO_RENEW'：自动续费，'NOT_NOTIFY_AND_NOT_RENEW'：到期不续费。
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 网关付费类型：POSTPAID_BY_HOUR：按小时后付费，PREPAID：包年包月预付费，
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 网关出带宽。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 预付费网关过期时间。
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * 公网IP是否被封堵。
         * @type {boolean || null}
         */
        this.IsAddressBlocked = null;

        /**
         * 计费模式变更，PREPAID_TO_POSTPAID：包年包月预付费到期转按小时后付费。
         * @type {string || null}
         */
        this.NewPurchasePlan = null;

        /**
         * 网关计费装，PROTECTIVELY_ISOLATED：被安全隔离的实例，NORMAL：正常。
         * @type {string || null}
         */
        this.RestrictState = null;

        /**
         * 可用区，如：ap-guangzhou-2
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpnGatewayName = 'VpnGatewayName' in params ? params.VpnGatewayName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.State = 'State' in params ? params.State : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.IsAddressBlocked = 'IsAddressBlocked' in params ? params.IsAddressBlocked : null;
        this.NewPurchasePlan = 'NewPurchasePlan' in params ? params.NewPurchasePlan : null;
        this.RestrictState = 'RestrictState' in params ? params.RestrictState : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * 描述带宽包资源信息的结构
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽包资源类型，包括'Address'和'LoadBalance'
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 带宽包资源Id，形如'eip-xxxx', 'lb-xxxx'
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 带宽包资源Ip
         * @type {string || null}
         */
        this.AddressIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;

    }
}

/**
 * 对端网关
 * @class
 */
class CustomerGateway extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户网关唯一ID
         * @type {string || null}
         */
        this.CustomerGatewayId = null;

        /**
         * 网关名称
         * @type {string || null}
         */
        this.CustomerGatewayName = null;

        /**
         * 公网地址
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerGatewayId = 'CustomerGatewayId' in params ? params.CustomerGatewayId : null;
        this.CustomerGatewayName = 'CustomerGatewayName' in params ? params.CustomerGatewayName : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * AllocateAddresses返回参数结构体
 * @class
 */
class AllocateAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 申请到的 EIP 的唯一 ID 列表。
         * @type {Array.<string> || null}
         */
        this.AddressSet = null;

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
        this.AddressSet = 'AddressSet' in params ? params.AddressSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述带宽包信息的结构
 * @class
 */
class BandwidthPackage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽包唯一标识Id
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * 带宽包类型，包括'BGP','SINGLEISP','ANYCAST'
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 带宽包计费类型，包括'TOP5_POSTPAID_BY_MONTH'和'PERCENT95_POSTPAID_BY_MONTH'
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 带宽包名称
         * @type {string || null}
         */
        this.BandwidthPackageName = null;

        /**
         * 带宽包创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 带宽包状态，包括'CREATING','CREATED','DELETING','DELETED'
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 带宽包资源信息
         * @type {Array.<Resource> || null}
         */
        this.ResourceSet = null;

        /**
         * 带宽包限速大小。单位：Mbps，-1表示不限速。
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
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.BandwidthPackageName = 'BandwidthPackageName' in params ? params.BandwidthPackageName : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.ResourceSet) {
            this.ResourceSet = new Array();
            for (let z in params.ResourceSet) {
                let obj = new Resource();
                obj.deserialize(params.ResourceSet[z]);
                this.ResourceSet.push(obj);
            }
        }
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

    }
}

/**
 * DescribeIp6Translators返回参数结构体
 * @class
 */
class DescribeIp6TranslatorsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合过滤条件的IPV6转换实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合过滤条件的IPV6转换实例详细信息
         * @type {Array.<Ip6Translator> || null}
         */
        this.Ip6TranslatorSet = null;

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

        if (params.Ip6TranslatorSet) {
            this.Ip6TranslatorSet = new Array();
            for (let z in params.Ip6TranslatorSet) {
                let obj = new Ip6Translator();
                obj.deserialize(params.Ip6TranslatorSet[z]);
                this.Ip6TranslatorSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSecurityGroupPolicies请求参数结构体
 * @class
 */
class CreateSecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组规则集合。
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

    }
}

/**
 * ModifyRouteTableAttribute返回参数结构体
 * @class
 */
class ModifyRouteTableAttributeResponse extends  AbstractModel {
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
 * AddIp6Rules返回参数结构体
 * @class
 */
class AddIp6RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPV6转换规则唯一ID数组，形如rule6-xxxxxxxx
         * @type {Array.<string> || null}
         */
        this.Ip6RuleSet = null;

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
        this.Ip6RuleSet = 'Ip6RuleSet' in params ? params.Ip6RuleSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAddressTemplateGroup返回参数结构体
 * @class
 */
class CreateAddressTemplateGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址模板集合对象。
         * @type {AddressTemplateGroup || null}
         */
        this.AddressTemplateGroup = null;

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

        if (params.AddressTemplateGroup) {
            let obj = new AddressTemplateGroup();
            obj.deserialize(params.AddressTemplateGroup)
            this.AddressTemplateGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBandwidthPackageQuota返回参数结构体
 * @class
 */
class DescribeBandwidthPackageQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽包配额数据结构
         * @type {Array.<Quota> || null}
         */
        this.QuotaSet = null;

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

        if (params.QuotaSet) {
            this.QuotaSet = new Array();
            for (let z in params.QuotaSet) {
                let obj = new Quota();
                obj.deserialize(params.QuotaSet[z]);
                this.QuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteServiceTemplateGroup请求参数结构体
 * @class
 */
class DeleteServiceTemplateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议端口模板集合实例ID，例如：ppmg-n17uxvve。
         * @type {string || null}
         */
        this.ServiceTemplateGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTemplateGroupId = 'ServiceTemplateGroupId' in params ? params.ServiceTemplateGroupId : null;

    }
}

/**
 * CreateDirectConnectGateway返回参数结构体
 * @class
 */
class CreateDirectConnectGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线网关对象。
         * @type {DirectConnectGateway || null}
         */
        this.DirectConnectGateway = null;

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

        if (params.DirectConnectGateway) {
            let obj = new DirectConnectGateway();
            obj.deserialize(params.DirectConnectGateway)
            this.DirectConnectGateway = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAddressTemplateGroupAttribute请求参数结构体
 * @class
 */
class ModifyAddressTemplateGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址模板集合实例ID，例如：ipmg-2uw6ujo6。
         * @type {string || null}
         */
        this.AddressTemplateGroupId = null;

        /**
         * IP地址模板集合名称。
         * @type {string || null}
         */
        this.AddressTemplateGroupName = null;

        /**
         * IP地址模板实例ID， 例如：ipm-mdunqeb6。
         * @type {Array.<string> || null}
         */
        this.AddressTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateGroupId = 'AddressTemplateGroupId' in params ? params.AddressTemplateGroupId : null;
        this.AddressTemplateGroupName = 'AddressTemplateGroupName' in params ? params.AddressTemplateGroupName : null;
        this.AddressTemplateIds = 'AddressTemplateIds' in params ? params.AddressTemplateIds : null;

    }
}

/**
 * ModifyServiceTemplateGroupAttribute请求参数结构体
 * @class
 */
class ModifyServiceTemplateGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议端口模板集合实例ID，例如：ppmg-ei8hfd9a。
         * @type {string || null}
         */
        this.ServiceTemplateGroupId = null;

        /**
         * 协议端口模板集合名称。
         * @type {string || null}
         */
        this.ServiceTemplateGroupName = null;

        /**
         * 协议端口模板实例ID，例如：ppm-4dw6agho。
         * @type {Array.<string> || null}
         */
        this.ServiceTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTemplateGroupId = 'ServiceTemplateGroupId' in params ? params.ServiceTemplateGroupId : null;
        this.ServiceTemplateGroupName = 'ServiceTemplateGroupName' in params ? params.ServiceTemplateGroupName : null;
        this.ServiceTemplateIds = 'ServiceTemplateIds' in params ? params.ServiceTemplateIds : null;

    }
}

/**
 * UnassignIpv6CidrBlock请求参数结构体
 * @class
 */
class UnassignIpv6CidrBlockRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`，形如：`vpc-f49l6u0z`。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * `IPv6`网段。形如：`3402:4e00:20:1000::/56`
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;

    }
}

/**
 * 云联网（CCN）对象
 * @class
 */
class CCN extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云联网唯一ID
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 云联网名称
         * @type {string || null}
         */
        this.CcnName = null;

        /**
         * 云联网描述信息
         * @type {string || null}
         */
        this.CcnDescription = null;

        /**
         * 关联实例数量
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例状态， 'ISOLATED': 隔离中（欠费停服），'AVAILABLE'：运行中。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 实例服务质量，’PT’：白金，'AU'：金，'AG'：银。
         * @type {string || null}
         */
        this.QosLevel = null;

        /**
         * 付费类型，PREPAID为预付费，POSTPAID为后付费。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 限速类型，INTER_REGION_LIMIT为地域间限速；OUTER_REGION_LIMIT为地域出口限速。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BandwidthLimitType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.CcnName = 'CcnName' in params ? params.CcnName : null;
        this.CcnDescription = 'CcnDescription' in params ? params.CcnDescription : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.State = 'State' in params ? params.State : null;
        this.QosLevel = 'QosLevel' in params ? params.QosLevel : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.BandwidthLimitType = 'BandwidthLimitType' in params ? params.BandwidthLimitType : null;

    }
}

/**
 * DeleteIp6Translators请求参数结构体
 * @class
 */
class DeleteIp6TranslatorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待释放的IPV6转换实例的唯一ID，形如‘ip6-xxxxxxxx’
         * @type {Array.<string> || null}
         */
        this.Ip6TranslatorIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip6TranslatorIds = 'Ip6TranslatorIds' in params ? params.Ip6TranslatorIds : null;

    }
}

/**
 * IPV6转换实例信息
 * @class
 */
class Ip6Translator extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPV6转换实例唯一ID，形如ip6-xxxxxxxx
         * @type {string || null}
         */
        this.Ip6TranslatorId = null;

        /**
         * IPV6转换实例名称
         * @type {string || null}
         */
        this.Ip6TranslatorName = null;

        /**
         * IPV6地址
         * @type {string || null}
         */
        this.Vip6 = null;

        /**
         * IPV6转换地址所属运营商
         * @type {string || null}
         */
        this.IspName = null;

        /**
         * 转换实例状态，限于CREATING,RUNNING,DELETING,MODIFYING
         * @type {string || null}
         */
        this.TranslatorStatus = null;

        /**
         * IPV6转换实例创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 绑定的IPV6转换规则数量
         * @type {number || null}
         */
        this.Ip6RuleCount = null;

        /**
         * IPV6转换规则信息
         * @type {Array.<Ip6Rule> || null}
         */
        this.IP6RuleSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip6TranslatorId = 'Ip6TranslatorId' in params ? params.Ip6TranslatorId : null;
        this.Ip6TranslatorName = 'Ip6TranslatorName' in params ? params.Ip6TranslatorName : null;
        this.Vip6 = 'Vip6' in params ? params.Vip6 : null;
        this.IspName = 'IspName' in params ? params.IspName : null;
        this.TranslatorStatus = 'TranslatorStatus' in params ? params.TranslatorStatus : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.Ip6RuleCount = 'Ip6RuleCount' in params ? params.Ip6RuleCount : null;

        if (params.IP6RuleSet) {
            this.IP6RuleSet = new Array();
            for (let z in params.IP6RuleSet) {
                let obj = new Ip6Rule();
                obj.deserialize(params.IP6RuleSet[z]);
                this.IP6RuleSet.push(obj);
            }
        }

    }
}

/**
 * CreateDefaultVpc请求参数结构体
 * @class
 */
class CreateDefaultVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网所在的可用区ID，不指定将随机选择可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 是否强制返回默认VPC
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * DescribeSubnets返回参数结构体
 * @class
 */
class DescribeSubnetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 子网对象。
         * @type {Array.<Subnet> || null}
         */
        this.SubnetSet = null;

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

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCustomerGateways返回参数结构体
 * @class
 */
class DescribeCustomerGatewaysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对端网关对象列表
         * @type {Array.<CustomerGateway> || null}
         */
        this.CustomerGatewaySet = null;

        /**
         * 符合条件的实例数量。
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

        if (params.CustomerGatewaySet) {
            this.CustomerGatewaySet = new Array();
            for (let z in params.CustomerGatewaySet) {
                let obj = new CustomerGateway();
                obj.deserialize(params.CustomerGatewaySet[z]);
                this.CustomerGatewaySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceRenewVpnGateway请求参数结构体
 * @class
 */
class InquiryPriceRenewVpnGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关实例ID。
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

    }
}

/**
 * EnableCcnRoutes返回参数结构体
 * @class
 */
class EnableCcnRoutesResponse extends  AbstractModel {
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
 * DetachCcnInstances返回参数结构体
 * @class
 */
class DetachCcnInstancesResponse extends  AbstractModel {
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
 * ModifyServiceTemplateGroupAttribute返回参数结构体
 * @class
 */
class ModifyServiceTemplateGroupAttributeResponse extends  AbstractModel {
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
 * DeleteSubnet请求参数结构体
 * @class
 */
class DeleteSubnetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网实例ID。可通过DescribeSubnets接口返回值中的SubnetId获取。
         * @type {string || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribeAddressTemplateGroups请求参数结构体
 * @class
 */
class DescribeAddressTemplateGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li>address-template-group-name - String - （过滤条件）IP地址模板集合名称。</li>
<li>address-template-group-id - String - （过滤条件）IP地址模板实集合例ID，例如：ipmg-mdunqeb6。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。
         * @type {string || null}
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 路由表对象
 * @class
 */
class RouteTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由表名称。
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * 路由表关联关系。
         * @type {Array.<RouteTableAssociation> || null}
         */
        this.AssociationSet = null;

        /**
         * 路由表策略集合。
         * @type {Array.<Route> || null}
         */
        this.RouteSet = null;

        /**
         * 是否默认路由表。
         * @type {boolean || null}
         */
        this.Main = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

        if (params.AssociationSet) {
            this.AssociationSet = new Array();
            for (let z in params.AssociationSet) {
                let obj = new RouteTableAssociation();
                obj.deserialize(params.AssociationSet[z]);
                this.AssociationSet.push(obj);
            }
        }

        if (params.RouteSet) {
            this.RouteSet = new Array();
            for (let z in params.RouteSet) {
                let obj = new Route();
                obj.deserialize(params.RouteSet[z]);
                this.RouteSet.push(obj);
            }
        }
        this.Main = 'Main' in params ? params.Main : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DeleteNetworkInterface请求参数结构体
 * @class
 */
class DeleteNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

    }
}

/**
 * InquiryPriceResetVpnGatewayInternetMaxBandwidth返回参数结构体
 * @class
 */
class InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品价格。
         * @type {Price || null}
         */
        this.Price = null;

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

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAddressTemplateGroup返回参数结构体
 * @class
 */
class DeleteAddressTemplateGroupResponse extends  AbstractModel {
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
 * ReplaceRoutes返回参数结构体
 * @class
 */
class ReplaceRoutesResponse extends  AbstractModel {
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
 * 专线网关云联网路由（IDC网段）对象
 * @class
 */
class DirectConnectGatewayCcnRoute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由ID。
         * @type {string || null}
         */
        this.RouteId = null;

        /**
         * IDC网段。
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * `BGP`的`AS-Path`属性。
         * @type {Array.<string> || null}
         */
        this.ASPath = null;

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
        this.ASPath = 'ASPath' in params ? params.ASPath : null;

    }
}

/**
 * DeleteHaVip请求参数结构体
 * @class
 */
class DeleteHaVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `HAVIP`唯一`ID`，形如：`havip-9o233uri`。
         * @type {string || null}
         */
        this.HaVipId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;

    }
}

/**
 * MigratePrivateIpAddress请求参数结构体
 * @class
 */
class MigratePrivateIpAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当内网IP绑定的弹性网卡实例ID，例如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.SourceNetworkInterfaceId = null;

        /**
         * 待迁移的目的弹性网卡实例ID。
         * @type {string || null}
         */
        this.DestinationNetworkInterfaceId = null;

        /**
         * 迁移的内网IP地址，例如：10.0.0.6。
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceNetworkInterfaceId = 'SourceNetworkInterfaceId' in params ? params.SourceNetworkInterfaceId : null;
        this.DestinationNetworkInterfaceId = 'DestinationNetworkInterfaceId' in params ? params.DestinationNetworkInterfaceId : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;

    }
}

/**
 * DescribeServiceTemplates请求参数结构体
 * @class
 */
class DescribeServiceTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li>service-template-name - String - （过滤条件）协议端口模板名称。</li>
<li>service-template-id - String - （过滤条件）协议端口模板实例ID，例如：ppm-e6dy460g。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。
         * @type {string || null}
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteRouteTable请求参数结构体
 * @class
 */
class DeleteRouteTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {string || null}
         */
        this.RouteTableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * 弹性网卡绑定关系
 * @class
 */
class NetworkInterfaceAttachment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云主机实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 网卡在云主机实例内的序号。
         * @type {number || null}
         */
        this.DeviceIndex = null;

        /**
         * 云主机所有者账户信息。
         * @type {string || null}
         */
        this.InstanceAccountId = null;

        /**
         * 绑定时间。
         * @type {string || null}
         */
        this.AttachTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DeviceIndex = 'DeviceIndex' in params ? params.DeviceIndex : null;
        this.InstanceAccountId = 'InstanceAccountId' in params ? params.InstanceAccountId : null;
        this.AttachTime = 'AttachTime' in params ? params.AttachTime : null;

    }
}

/**
 * CreateBandwidthPackage返回参数结构体
 * @class
 */
class CreateBandwidthPackageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽包Id
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * 带宽包Ids(申请数量大于1时有效)
         * @type {Array.<string> || null}
         */
        this.BandwidthPackageIds = null;

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
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;
        this.BandwidthPackageIds = 'BandwidthPackageIds' in params ? params.BandwidthPackageIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetVpnConnection请求参数结构体
 * @class
 */
class ResetVpnConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关实例ID。
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * VPN通道实例ID。形如：vpnx-f49l6u0z。
         * @type {string || null}
         */
        this.VpnConnectionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;

    }
}

/**
 * ReleaseAddresses返回参数结构体
 * @class
 */
class ReleaseAddressesResponse extends  AbstractModel {
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
 * InquiryPriceResetVpnGatewayInternetMaxBandwidth请求参数结构体
 * @class
 */
class InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关实例ID。
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * 公网带宽设置。可选带宽规格：5, 10, 20, 50, 100；单位：Mbps。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

    }
}

/**
 * DeleteCcn返回参数结构体
 * @class
 */
class DeleteCcnResponse extends  AbstractModel {
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
 * ReplaceSecurityGroupPolicy返回参数结构体
 * @class
 */
class ReplaceSecurityGroupPolicyResponse extends  AbstractModel {
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
 * ModifyPrivateIpAddressesAttribute返回参数结构体
 * @class
 */
class ModifyPrivateIpAddressesAttributeResponse extends  AbstractModel {
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
 * DeleteDirectConnectGatewayCcnRoutes请求参数结构体
 * @class
 */
class DeleteDirectConnectGatewayCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线网关ID，形如：dcg-prpqlmg1
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * 路由ID。形如：ccnr-f49l6u0z。
         * @type {Array.<string> || null}
         */
        this.RouteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

    }
}

/**
 * DeleteSecurityGroup返回参数结构体
 * @class
 */
class DeleteSecurityGroupResponse extends  AbstractModel {
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
 * CreateNetworkInterface返回参数结构体
 * @class
 */
class CreateNetworkInterfaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例。
         * @type {NetworkInterface || null}
         */
        this.NetworkInterface = null;

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

        if (params.NetworkInterface) {
            let obj = new NetworkInterface();
            obj.deserialize(params.NetworkInterface)
            this.NetworkInterface = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAddressQuota请求参数结构体
 * @class
 */
class DescribeAddressQuotaRequest extends  AbstractModel {
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
 * 安全组规则集合
 * @class
 */
class SecurityGroupPolicySet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组规则当前版本。用户每次更新安全规则版本会自动加1，防止更新的路由规则已过期，不填不考虑冲突。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 出站规则。
         * @type {Array.<SecurityGroupPolicy> || null}
         */
        this.Egress = null;

        /**
         * 入站规则。
         * @type {Array.<SecurityGroupPolicy> || null}
         */
        this.Ingress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;

        if (params.Egress) {
            this.Egress = new Array();
            for (let z in params.Egress) {
                let obj = new SecurityGroupPolicy();
                obj.deserialize(params.Egress[z]);
                this.Egress.push(obj);
            }
        }

        if (params.Ingress) {
            this.Ingress = new Array();
            for (let z in params.Ingress) {
                let obj = new SecurityGroupPolicy();
                obj.deserialize(params.Ingress[z]);
                this.Ingress.push(obj);
            }
        }

    }
}

/**
 * AssignIpv6Addresses返回参数结构体
 * @class
 */
class AssignIpv6AddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配给弹性网卡的`IPv6`地址列表。
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6AddressSet = null;

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

        if (params.Ipv6AddressSet) {
            this.Ipv6AddressSet = new Array();
            for (let z in params.Ipv6AddressSet) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6AddressSet[z]);
                this.Ipv6AddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRoutes返回参数结构体
 * @class
 */
class CreateRoutesResponse extends  AbstractModel {
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
 * DescribeSecurityGroups返回参数结构体
 * @class
 */
class DescribeSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组对象。
         * @type {Array.<SecurityGroup> || null}
         */
        this.SecurityGroupSet = null;

        /**
         * 符合条件的实例数量。
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

        if (params.SecurityGroupSet) {
            this.SecurityGroupSet = new Array();
            for (let z in params.SecurityGroupSet) {
                let obj = new SecurityGroup();
                obj.deserialize(params.SecurityGroupSet[z]);
                this.SecurityGroupSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReplaceDirectConnectGatewayCcnRoutes返回参数结构体
 * @class
 */
class ReplaceDirectConnectGatewayCcnRoutesResponse extends  AbstractModel {
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
 * CreateFlowLog请求参数结构体
 * @class
 */
class CreateFlowLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私用网络ID或者统一ID，建议使用统一ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 流日志实例名字
         * @type {string || null}
         */
        this.FlowLogName = null;

        /**
         * 流日志所属资源类型，VPC|SUBNET|NETWORKINTERFACE
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 资源唯一ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 流日志采集类型，ACCEPT|REJECT|ALL
         * @type {string || null}
         */
        this.TrafficType = null;

        /**
         * 流日志存储ID
         * @type {string || null}
         */
        this.CloudLogId = null;

        /**
         * 流日志实例描述
         * @type {string || null}
         */
        this.FlowLogDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.FlowLogName = 'FlowLogName' in params ? params.FlowLogName : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.TrafficType = 'TrafficType' in params ? params.TrafficType : null;
        this.CloudLogId = 'CloudLogId' in params ? params.CloudLogId : null;
        this.FlowLogDescription = 'FlowLogDescription' in params ? params.FlowLogDescription : null;

    }
}

/**
 * 协议端口模版
 * @class
 */
class ServiceTemplateSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议端口ID，例如：ppm-f5n1f8da。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 协议端口组ID，例如：ppmg-f5n1f8da。
         * @type {string || null}
         */
        this.ServiceGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;

    }
}

/**
 * DetachNetworkInterface请求参数结构体
 * @class
 */
class DetachNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * CVM实例ID。形如：ins-r8hr2upy。
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
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * IPV6转换规则
 * @class
 */
class Ip6Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPV6转换规则唯一ID，形如rule6-xxxxxxxx
         * @type {string || null}
         */
        this.Ip6RuleId = null;

        /**
         * IPV6转换规则名称
         * @type {string || null}
         */
        this.Ip6RuleName = null;

        /**
         * IPV6地址
         * @type {string || null}
         */
        this.Vip6 = null;

        /**
         * IPV6端口号
         * @type {number || null}
         */
        this.Vport6 = null;

        /**
         * 协议类型，支持TCP/UDP
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * IPV4地址
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * IPV4端口号
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 转换规则状态，限于CREATING,RUNNING,DELETING,MODIFYING
         * @type {string || null}
         */
        this.RuleStatus = null;

        /**
         * 转换规则创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip6RuleId = 'Ip6RuleId' in params ? params.Ip6RuleId : null;
        this.Ip6RuleName = 'Ip6RuleName' in params ? params.Ip6RuleName : null;
        this.Vip6 = 'Vip6' in params ? params.Vip6 : null;
        this.Vport6 = 'Vport6' in params ? params.Vport6 : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.RuleStatus = 'RuleStatus' in params ? params.RuleStatus : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * AttachClassicLinkVpc返回参数结构体
 * @class
 */
class AttachClassicLinkVpcResponse extends  AbstractModel {
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
 * CreateAddressTemplate请求参数结构体
 * @class
 */
class CreateAddressTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址模版名称
         * @type {string || null}
         */
        this.AddressTemplateName = null;

        /**
         * 地址信息，支持 IP、CIDR、IP 范围。
         * @type {Array.<string> || null}
         */
        this.Addresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateName = 'AddressTemplateName' in params ? params.AddressTemplateName : null;
        this.Addresses = 'Addresses' in params ? params.Addresses : null;

    }
}

/**
 * DescribeRouteConflicts请求参数结构体
 * @class
 */
class DescribeRouteConflictsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 要检查的与之冲突的目的端列表
         * @type {Array.<string> || null}
         */
        this.DestinationCidrBlocks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.DestinationCidrBlocks = 'DestinationCidrBlocks' in params ? params.DestinationCidrBlocks : null;

    }
}

/**
 * 子网对象
 * @class
 */
class Subnet extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网实例`ID`，例如：subnet-bthucmmy。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 子网名称。
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 子网的 `IPv4` `CIDR`。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 是否默认子网。
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * 是否开启广播。
         * @type {boolean || null}
         */
        this.EnableBroadcast = null;

        /**
         * 可用区。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 路由表实例ID，例如：rtb-l2h8d7c2。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 可用`IP`数。
         * @type {number || null}
         */
        this.AvailableIpAddressCount = null;

        /**
         * 子网的 `IPv6` `CIDR`。
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

        /**
         * 关联`ACL`ID
         * @type {string || null}
         */
        this.NetworkAclId = null;

        /**
         * 是否为 `SNAT` 地址池子网。
         * @type {boolean || null}
         */
        this.IsRemoteVpcSnat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.EnableBroadcast = 'EnableBroadcast' in params ? params.EnableBroadcast : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.AvailableIpAddressCount = 'AvailableIpAddressCount' in params ? params.AvailableIpAddressCount : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;
        this.NetworkAclId = 'NetworkAclId' in params ? params.NetworkAclId : null;
        this.IsRemoteVpcSnat = 'IsRemoteVpcSnat' in params ? params.IsRemoteVpcSnat : null;

    }
}

/**
 * DeleteVpc返回参数结构体
 * @class
 */
class DeleteVpcResponse extends  AbstractModel {
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
 * DescribeCcnRoutes返回参数结构体
 * @class
 */
class DescribeCcnRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的对象数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * CCN路由策略对象。
         * @type {Array.<CcnRoute> || null}
         */
        this.RouteSet = null;

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

        if (params.RouteSet) {
            this.RouteSet = new Array();
            for (let z in params.RouteSet) {
                let obj = new CcnRoute();
                obj.deserialize(params.RouteSet[z]);
                this.RouteSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全组对象
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如：sg-ohuuioma。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * 安全组备注，最多100个字符。
         * @type {string || null}
         */
        this.SecurityGroupDesc = null;

        /**
         * 项目id，默认0。可在qcloud控制台项目管理页面查询到。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 是否是默认安全组，默认安全组不支持删除。
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * 安全组创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupDesc = 'SecurityGroupDesc' in params ? params.SecurityGroupDesc : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DisassociateAddress返回参数结构体
 * @class
 */
class DisassociateAddressResponse extends  AbstractModel {
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
 * DeleteRoutes请求参数结构体
 * @class
 */
class DeleteRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由策略对象。
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * AssociateAddress请求参数结构体
 * @class
 */
class AssociateAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：`eip-11112222`。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * 要绑定的实例 ID。实例 ID 形如：`ins-11112222`。可通过登录[控制台](https://console.cloud.tencent.com/cvm)查询，也可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：`eni-11112222`。`NetworkInterfaceId` 与 `InstanceId` 不可同时指定。弹性网卡 ID 可通过登录[控制台](https://console.cloud.tencent.com/vpc/eni)查询，也可通过[DescribeNetworkInterfaces](https://cloud.tencent.com/document/api/215/15817)接口返回值中的`networkInterfaceId`获取。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 要绑定的内网 IP。如果指定了 `NetworkInterfaceId` 则也必须指定 `PrivateIpAddress` ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 `PrivateIpAddress` 是指定的 `NetworkInterfaceId` 上的一个内网 IP。指定弹性网卡的内网 IP 可通过登录[控制台](https://console.cloud.tencent.com/vpc/eni)查询，也可通过[DescribeNetworkInterfaces](https://cloud.tencent.com/document/api/215/15817)接口返回值中的`privateIpAddress`获取。
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;

    }
}

/**
 * 云联网（CCN）地域出带宽上限
 * @class
 */
class CcnRegionBandwidthLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域，例如：ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 出带宽上限，单位：Mbps
         * @type {number || null}
         */
        this.BandwidthLimit = null;

        /**
         * 是否黑石地域，默认`false`。
         * @type {boolean || null}
         */
        this.IsBm = null;

        /**
         * 目的地域，例如：ap-shanghai
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DstRegion = null;

        /**
         * 目的地域是否为黑石地域，默认`false`。
         * @type {boolean || null}
         */
        this.DstIsBm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.BandwidthLimit = 'BandwidthLimit' in params ? params.BandwidthLimit : null;
        this.IsBm = 'IsBm' in params ? params.IsBm : null;
        this.DstRegion = 'DstRegion' in params ? params.DstRegion : null;
        this.DstIsBm = 'DstIsBm' in params ? params.DstIsBm : null;

    }
}

/**
 * 私有网络和基础网络互通设备
 * @class
 */
class ClassicLinkInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 云服务器实例唯一ID
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * CreateVpnGateway请求参数结构体
 * @class
 */
class CreateVpnGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPN网关名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.VpnGatewayName = null;

        /**
         * 公网带宽设置。可选带宽规格：5, 10, 20, 50, 100；单位：Mbps
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * VPN网关计费模式，PREPAID：表示预付费，即包年包月，POSTPAID_BY_HOUR：表示后付费，即按量计费。默认：POSTPAID_BY_HOUR，如果指定预付费模式，参数InstanceChargePrepaid必填。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * 可用区，如：ap-guangzhou-2。
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpnGatewayName = 'VpnGatewayName' in params ? params.VpnGatewayName : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * ModifyNetworkInterfaceAttribute请求参数结构体
 * @class
 */
class ModifyNetworkInterfaceAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-pxir56ns。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 弹性网卡名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.NetworkInterfaceName = null;

        /**
         * 弹性网卡描述，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.NetworkInterfaceDescription = null;

        /**
         * 指定绑定的安全组，例如:['sg-1dd51d']。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.NetworkInterfaceName = 'NetworkInterfaceName' in params ? params.NetworkInterfaceName : null;
        this.NetworkInterfaceDescription = 'NetworkInterfaceDescription' in params ? params.NetworkInterfaceDescription : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * ModifyHaVipAttribute请求参数结构体
 * @class
 */
class ModifyHaVipAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `HAVIP`唯一`ID`，形如：`havip-9o233uri`。
         * @type {string || null}
         */
        this.HaVipId = null;

        /**
         * `HAVIP`名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.HaVipName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;
        this.HaVipName = 'HaVipName' in params ? params.HaVipName : null;

    }
}

/**
 * ModifyAddressTemplateGroupAttribute返回参数结构体
 * @class
 */
class ModifyAddressTemplateGroupAttributeResponse extends  AbstractModel {
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
 * DetachClassicLinkVpc返回参数结构体
 * @class
 */
class DetachClassicLinkVpcResponse extends  AbstractModel {
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
 * MigrateNetworkInterface返回参数结构体
 * @class
 */
class MigrateNetworkInterfaceResponse extends  AbstractModel {
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
 * UnassignPrivateIpAddresses请求参数结构体
 * @class
 */
class UnassignPrivateIpAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 指定的内网IP信息，单次最多指定10个。
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }

    }
}

/**
 * 过滤器
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
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
 * CreateHaVip请求参数结构体
 * @class
 */
class CreateHaVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `HAVIP`所在私有网络`ID`。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * `HAVIP`所在子网`ID`。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * `HAVIP`名称。
         * @type {string || null}
         */
        this.HaVipName = null;

        /**
         * 指定虚拟IP地址，必须在`VPC`网段内且未被占用。不指定则自动分配。
         * @type {string || null}
         */
        this.Vip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.HaVipName = 'HaVipName' in params ? params.HaVipName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * IPv6子网段对象。
 * @class
 */
class Ipv6SubnetCidrBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网实例`ID`。形如：`subnet-pxir56ns`。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * `IPv6`子网段。形如：`3402:4e00:20:1001::/64`
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;

    }
}

/**
 * DescribeAddressQuota返回参数结构体
 * @class
 */
class DescribeAddressQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户 EIP 配额信息。
         * @type {Array.<Quota> || null}
         */
        this.QuotaSet = null;

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

        if (params.QuotaSet) {
            this.QuotaSet = new Array();
            for (let z in params.QuotaSet) {
                let obj = new Quota();
                obj.deserialize(params.QuotaSet[z]);
                this.QuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCustomerGateway请求参数结构体
 * @class
 */
class CreateCustomerGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对端网关名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.CustomerGatewayName = null;

        /**
         * 对端网关公网IP。
         * @type {string || null}
         */
        this.IpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerGatewayName = 'CustomerGatewayName' in params ? params.CustomerGatewayName : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;

    }
}

/**
 * DeleteSecurityGroup请求参数结构体
 * @class
 */
class DeleteSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

    }
}

/**
 * ModifyVpnConnectionAttribute请求参数结构体
 * @class
 */
class ModifyVpnConnectionAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN通道实例ID。形如：vpnx-f49l6u0z。
         * @type {string || null}
         */
        this.VpnConnectionId = null;

        /**
         * VPN通道名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.VpnConnectionName = null;

        /**
         * 预共享密钥。
         * @type {string || null}
         */
        this.PreShareKey = null;

        /**
         * SPD策略组，例如：{"10.0.0.5/24":["172.123.10.5/16"]}，10.0.0.5/24是vpc内网段172.123.10.5/16是IDC网段。用户指定VPC内哪些网段可以和您IDC中哪些网段通信。
         * @type {Array.<SecurityPolicyDatabase> || null}
         */
        this.SecurityPolicyDatabases = null;

        /**
         * IKE配置（Internet Key Exchange，因特网密钥交换），IKE具有一套自我保护机制，用户配置网络安全协议。
         * @type {IKEOptionsSpecification || null}
         */
        this.IKEOptionsSpecification = null;

        /**
         * IPSec配置，腾讯云提供IPSec安全会话设置。
         * @type {IPSECOptionsSpecification || null}
         */
        this.IPSECOptionsSpecification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;
        this.VpnConnectionName = 'VpnConnectionName' in params ? params.VpnConnectionName : null;
        this.PreShareKey = 'PreShareKey' in params ? params.PreShareKey : null;

        if (params.SecurityPolicyDatabases) {
            this.SecurityPolicyDatabases = new Array();
            for (let z in params.SecurityPolicyDatabases) {
                let obj = new SecurityPolicyDatabase();
                obj.deserialize(params.SecurityPolicyDatabases[z]);
                this.SecurityPolicyDatabases.push(obj);
            }
        }

        if (params.IKEOptionsSpecification) {
            let obj = new IKEOptionsSpecification();
            obj.deserialize(params.IKEOptionsSpecification)
            this.IKEOptionsSpecification = obj;
        }

        if (params.IPSECOptionsSpecification) {
            let obj = new IPSECOptionsSpecification();
            obj.deserialize(params.IPSECOptionsSpecification)
            this.IPSECOptionsSpecification = obj;
        }

    }
}

/**
 * CreateIp6Translators请求参数结构体
 * @class
 */
class CreateIp6TranslatorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转换实例名称
         * @type {string || null}
         */
        this.Ip6TranslatorName = null;

        /**
         * 创建转换实例数量，默认是1个
         * @type {number || null}
         */
        this.Ip6TranslatorCount = null;

        /**
         * 转换实例运营商属性，可取"CMCC","CTCC","CUCC","BGP"
         * @type {string || null}
         */
        this.Ip6InternetServiceProvider = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip6TranslatorName = 'Ip6TranslatorName' in params ? params.Ip6TranslatorName : null;
        this.Ip6TranslatorCount = 'Ip6TranslatorCount' in params ? params.Ip6TranslatorCount : null;
        this.Ip6InternetServiceProvider = 'Ip6InternetServiceProvider' in params ? params.Ip6InternetServiceProvider : null;

    }
}

/**
 * 单项计费价格信息
 * @class
 */
class ItemPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按量计费后付费单价，单位：元。
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * 按量计费后付费计价单元，可取值范围： HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：实例按小时后付费（POSTPAID_BY_HOUR）、带宽按小时后付费（BANDWIDTH_POSTPAID_BY_HOUR）： GB：表示计价单元是按每GB来计算。当前涉及该计价单元的场景有：流量按小时后付费（TRAFFIC_POSTPAID_BY_HOUR）。
         * @type {string || null}
         */
        this.ChargeUnit = null;

        /**
         * 预付费商品的原价，单位：元。
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 预付费商品的折扣价，单位：元。
         * @type {number || null}
         */
        this.DiscountPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.ChargeUnit = 'ChargeUnit' in params ? params.ChargeUnit : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;

    }
}

/**
 * DescribeDirectConnectGatewayCcnRoutes返回参数结构体
 * @class
 */
class DescribeDirectConnectGatewayCcnRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的对象数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 云联网路由（IDC网段）列表。
         * @type {Array.<DirectConnectGatewayCcnRoute> || null}
         */
        this.RouteSet = null;

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

        if (params.RouteSet) {
            this.RouteSet = new Array();
            for (let z in params.RouteSet) {
                let obj = new DirectConnectGatewayCcnRoute();
                obj.deserialize(params.RouteSet[z]);
                this.RouteSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPrivateIpAddressesAttribute请求参数结构体
 * @class
 */
class ModifyPrivateIpAddressesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 指定的内网IP信息。
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }

    }
}

/**
 * CreateSecurityGroup请求参数结构体
 * @class
 */
class CreateSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 安全组备注，最多100个字符。
         * @type {string || null}
         */
        this.GroupDescription = null;

        /**
         * 项目id，默认0。可在qcloud控制台项目管理页面查询到。
         * @type {string || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupDescription = 'GroupDescription' in params ? params.GroupDescription : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ModifyCcnAttribute返回参数结构体
 * @class
 */
class ModifyCcnAttributeResponse extends  AbstractModel {
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
 * DescribeClassicLinkInstances请求参数结构体
 * @class
 */
class DescribeClassicLinkInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li>vpc-id - String - （过滤条件）VPC实例ID。</li>
<li>vm-ip - String - （过滤条件）基础网络云主机IP。</li>
         * @type {Array.<FilterObject> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 返回数量
         * @type {string || null}
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
                let obj = new FilterObject();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateServiceTemplate返回参数结构体
 * @class
 */
class CreateServiceTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议端口模板对象。
         * @type {ServiceTemplate || null}
         */
        this.ServiceTemplate = null;

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

        if (params.ServiceTemplate) {
            let obj = new ServiceTemplate();
            obj.deserialize(params.ServiceTemplate)
            this.ServiceTemplate = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteNetworkInterface返回参数结构体
 * @class
 */
class DeleteNetworkInterfaceResponse extends  AbstractModel {
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
 * DisableCcnRoutes返回参数结构体
 * @class
 */
class DisableCcnRoutesResponse extends  AbstractModel {
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
 * DescribeCcnRegionBandwidthLimits请求参数结构体
 * @class
 */
class DescribeCcnRegionBandwidthLimitsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN实例ID。形如：ccn-f49l6u0z。
         * @type {string || null}
         */
        this.CcnId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

    }
}

/**
 * InquiryPriceCreateVpnGateway请求参数结构体
 * @class
 */
class InquiryPriceCreateVpnGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公网带宽设置。可选带宽规格：5, 10, 20, 50, 100；单位：Mbps。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * VPN网关计费模式，PREPAID：表示预付费，即包年包月，POSTPAID_BY_HOUR：表示后付费，即按量计费。默认：POSTPAID_BY_HOUR，如果指定预付费模式，参数InstanceChargePrepaid必填。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

    }
}

/**
 * 对端网关厂商信息对象。
 * @class
 */
class CustomerGatewayVendor extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 软件版本。
         * @type {string || null}
         */
        this.SoftwareVersion = null;

        /**
         * 供应商名称。
         * @type {string || null}
         */
        this.VendorName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.SoftwareVersion = 'SoftwareVersion' in params ? params.SoftwareVersion : null;
        this.VendorName = 'VendorName' in params ? params.VendorName : null;

    }
}

/**
 * DescribeAddressTemplates请求参数结构体
 * @class
 */
class DescribeAddressTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li>address-template-name - String - （过滤条件）IP地址模板名称。</li>
<li>address-template-id - String - （过滤条件）IP地址模板实例ID，例如：ipm-mdunqeb6。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。
         * @type {string || null}
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeVpnConnections返回参数结构体
 * @class
 */
class DescribeVpnConnectionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * VPN通道实例。
         * @type {Array.<VpnConnection> || null}
         */
        this.VpnConnectionSet = null;

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

        if (params.VpnConnectionSet) {
            this.VpnConnectionSet = new Array();
            for (let z in params.VpnConnectionSet) {
                let obj = new VpnConnection();
                obj.deserialize(params.VpnConnectionSet[z]);
                this.VpnConnectionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCustomerGateway请求参数结构体
 * @class
 */
class DeleteCustomerGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对端网关ID，例如：cgw-2wqq41m9，可通过DescribeCustomerGateways接口查询对端网关。
         * @type {string || null}
         */
        this.CustomerGatewayId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerGatewayId = 'CustomerGatewayId' in params ? params.CustomerGatewayId : null;

    }
}

/**
 * DescribeAddressTemplates返回参数结构体
 * @class
 */
class DescribeAddressTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * IP地址模版。
         * @type {Array.<AddressTemplate> || null}
         */
        this.AddressTemplateSet = null;

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

        if (params.AddressTemplateSet) {
            this.AddressTemplateSet = new Array();
            for (let z in params.AddressTemplateSet) {
                let obj = new AddressTemplate();
                obj.deserialize(params.AddressTemplateSet[z]);
                this.AddressTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述了配额信息
 * @class
 */
class Quota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配额名称，取值范围：<br><li>`TOTAL_EIP_QUOTA`：用户当前地域下EIP的配额数；<br><li>`DAILY_EIP_APPLY`：用户当前地域下今日申购次数；<br><li>`DAILY_PUBLIC_IP_ASSIGN`：用户当前地域下，重新分配公网 IP次数。
         * @type {string || null}
         */
        this.QuotaId = null;

        /**
         * 当前数量
         * @type {number || null}
         */
        this.QuotaCurrent = null;

        /**
         * 配额数量
         * @type {number || null}
         */
        this.QuotaLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QuotaId = 'QuotaId' in params ? params.QuotaId : null;
        this.QuotaCurrent = 'QuotaCurrent' in params ? params.QuotaCurrent : null;
        this.QuotaLimit = 'QuotaLimit' in params ? params.QuotaLimit : null;

    }
}

/**
 * DescribeNetworkInterfaces返回参数结构体
 * @class
 */
class DescribeNetworkInterfacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例详细信息列表。
         * @type {Array.<NetworkInterface> || null}
         */
        this.NetworkInterfaceSet = null;

        /**
         * 符合条件的实例数量。
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

        if (params.NetworkInterfaceSet) {
            this.NetworkInterfaceSet = new Array();
            for (let z in params.NetworkInterfaceSet) {
                let obj = new NetworkInterface();
                obj.deserialize(params.NetworkInterfaceSet[z]);
                this.NetworkInterfaceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableRoutes返回参数结构体
 * @class
 */
class EnableRoutesResponse extends  AbstractModel {
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
 * AssignPrivateIpAddresses请求参数结构体
 * @class
 */
class AssignPrivateIpAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 指定的内网IP信息，单次最多指定10个。
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 新申请的内网IP地址个数，内网IP地址个数总和不能超过配数。
         * @type {number || null}
         */
        this.SecondaryPrivateIpAddressCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }
        this.SecondaryPrivateIpAddressCount = 'SecondaryPrivateIpAddressCount' in params ? params.SecondaryPrivateIpAddressCount : null;

    }
}

/**
 * DescribeServiceTemplateGroups请求参数结构体
 * @class
 */
class DescribeServiceTemplateGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li>service-template-group-name - String - （过滤条件）协议端口模板集合名称。</li>
<li>service-template-group-id - String - （过滤条件）协议端口模板集合实例ID，例如：ppmg-e6dy460g。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。
         * @type {string || null}
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateVpc请求参数结构体
 * @class
 */
class CreateVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * vpc名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * vpc的cidr，只能为10.0.0.0/16，172.16.0.0/12，192.168.0.0/16这三个内网网段内。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 是否开启组播。true: 开启, false: 不开启。
         * @type {string || null}
         */
        this.EnableMulticast = null;

        /**
         * DNS地址，最多支持4个
         * @type {Array.<string> || null}
         */
        this.DnsServers = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.EnableMulticast = 'EnableMulticast' in params ? params.EnableMulticast : null;
        this.DnsServers = 'DnsServers' in params ? params.DnsServers : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DeleteServiceTemplate请求参数结构体
 * @class
 */
class DeleteServiceTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议端口模板实例ID，例如：ppm-e6dy460g。
         * @type {string || null}
         */
        this.ServiceTemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTemplateId = 'ServiceTemplateId' in params ? params.ServiceTemplateId : null;

    }
}

/**
 * DescribeSecurityGroupAssociationStatistics请求参数结构体
 * @class
 */
class DescribeSecurityGroupAssociationStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * 路由策略对象
 * @class
 */
class Route extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目的网段，取值不能在私有网络网段内，例如：112.20.51.0/24。
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * 下一跳类型，目前我们支持的类型有：
CVM：公网网关类型的云主机；
VPN：VPN网关；
DIRECTCONNECT：专线网关；
PEERCONNECTION：对等连接；
SSLVPN：sslvpn网关；
NAT：NAT网关; 
NORMAL_CVM：普通云主机；
EIP：云主机的公网IP；
CCN：云联网。
         * @type {string || null}
         */
        this.GatewayType = null;

        /**
         * 下一跳地址，这里只需要指定不同下一跳类型的网关ID，系统会自动匹配到下一跳地址。
特别注意：当 GatewayType 为 EIP 时，GatewayId 固定值 '0'
         * @type {string || null}
         */
        this.GatewayId = null;

        /**
         * 路由策略ID。
         * @type {number || null}
         */
        this.RouteId = null;

        /**
         * 路由策略描述。
         * @type {string || null}
         */
        this.RouteDescription = null;

        /**
         * 是否启用
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 路由类型，目前我们支持的类型有：
USER：用户路由；
NETD：网络探测路由，创建网络探测实例时，系统默认下发，不可编辑与删除；
CCN：云联网路由，系统默认下发，不可编辑与删除。
用户只能添加和操作 USER 类型的路由。
         * @type {string || null}
         */
        this.RouteType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.GatewayType = 'GatewayType' in params ? params.GatewayType : null;
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.RouteDescription = 'RouteDescription' in params ? params.RouteDescription : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;

    }
}

/**
 * DeleteServiceTemplateGroup返回参数结构体
 * @class
 */
class DeleteServiceTemplateGroupResponse extends  AbstractModel {
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
 * DescribeBandwidthPackageQuota请求参数结构体
 * @class
 */
class DescribeBandwidthPackageQuotaRequest extends  AbstractModel {
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
 * 路由表关联关系
 * @class
 */
class RouteTableAssociation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网实例ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 路由表实例ID。
         * @type {string || null}
         */
        this.RouteTableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * AcceptAttachCcnInstances返回参数结构体
 * @class
 */
class AcceptAttachCcnInstancesResponse extends  AbstractModel {
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
 * 预付费（包年包月）计费对象。
 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 自动续费标识。取值范围： NOTIFY_AND_AUTO_RENEW：通知过期且自动续费， NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费。默认：NOTIFY_AND_MANUAL_RENEW
         * @type {string || null}
         */
        this.RenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

module.exports = {
    ModifyAddressTemplateAttributeResponse: ModifyAddressTemplateAttributeResponse,
    ServiceTemplateGroup: ServiceTemplateGroup,
    CreateRoutesRequest: CreateRoutesRequest,
    DescribeHaVipsResponse: DescribeHaVipsResponse,
    DeleteServiceTemplateResponse: DeleteServiceTemplateResponse,
    CreateServiceTemplateRequest: CreateServiceTemplateRequest,
    IKEOptionsSpecification: IKEOptionsSpecification,
    TransformAddressResponse: TransformAddressResponse,
    DescribeNetworkInterfacesRequest: DescribeNetworkInterfacesRequest,
    DescribeVpcIpv6AddressesRequest: DescribeVpcIpv6AddressesRequest,
    DescribeCustomerGatewaysRequest: DescribeCustomerGatewaysRequest,
    ModifyIp6RuleResponse: ModifyIp6RuleResponse,
    DescribeVpnGatewaysResponse: DescribeVpnGatewaysResponse,
    DefaultVpcSubnet: DefaultVpcSubnet,
    FlowLog: FlowLog,
    ResetAttachCcnInstancesResponse: ResetAttachCcnInstancesResponse,
    DescribeServiceTemplateGroupsResponse: DescribeServiceTemplateGroupsResponse,
    DetachClassicLinkVpcRequest: DetachClassicLinkVpcRequest,
    ModifyAddressAttributeRequest: ModifyAddressAttributeRequest,
    DeleteBandwidthPackageResponse: DeleteBandwidthPackageResponse,
    ModifyDirectConnectGatewayAttributeRequest: ModifyDirectConnectGatewayAttributeRequest,
    AddBandwidthPackageResourcesRequest: AddBandwidthPackageResourcesRequest,
    AssignIpv6SubnetCidrBlockRequest: AssignIpv6SubnetCidrBlockRequest,
    CreateVpcResponse: CreateVpcResponse,
    DescribeVpcPrivateIpAddressesRequest: DescribeVpcPrivateIpAddressesRequest,
    AddressTemplate: AddressTemplate,
    DescribeIp6TranslatorQuotaResponse: DescribeIp6TranslatorQuotaResponse,
    UnassignIpv6AddressesResponse: UnassignIpv6AddressesResponse,
    CreateIp6TranslatorsResponse: CreateIp6TranslatorsResponse,
    DescribeFlowLogsRequest: DescribeFlowLogsRequest,
    CreateDirectConnectGatewayRequest: CreateDirectConnectGatewayRequest,
    ModifyBandwidthPackageAttributeRequest: ModifyBandwidthPackageAttributeRequest,
    ModifyFlowLogAttributeRequest: ModifyFlowLogAttributeRequest,
    ResetRoutesRequest: ResetRoutesRequest,
    ModifyBandwidthPackageAttributeResponse: ModifyBandwidthPackageAttributeResponse,
    ModifyCustomerGatewayAttributeRequest: ModifyCustomerGatewayAttributeRequest,
    DescribeRouteTablesResponse: DescribeRouteTablesResponse,
    RejectAttachCcnInstancesResponse: RejectAttachCcnInstancesResponse,
    ServiceTemplate: ServiceTemplate,
    DescribeCcnAttachedInstancesRequest: DescribeCcnAttachedInstancesRequest,
    ModifyFlowLogAttributeResponse: ModifyFlowLogAttributeResponse,
    DescribeBandwidthPackagesResponse: DescribeBandwidthPackagesResponse,
    DescribeDirectConnectGatewaysRequest: DescribeDirectConnectGatewaysRequest,
    ModifyIp6TranslatorResponse: ModifyIp6TranslatorResponse,
    DeleteIp6TranslatorsResponse: DeleteIp6TranslatorsResponse,
    DescribeRouteConflictsResponse: DescribeRouteConflictsResponse,
    AcceptAttachCcnInstancesRequest: AcceptAttachCcnInstancesRequest,
    DescribeGatewayFlowMonitorDetailResponse: DescribeGatewayFlowMonitorDetailResponse,
    DeleteFlowLogRequest: DeleteFlowLogRequest,
    HaVipDisassociateAddressIpResponse: HaVipDisassociateAddressIpResponse,
    AttachNetworkInterfaceRequest: AttachNetworkInterfaceRequest,
    AssignIpv6CidrBlockRequest: AssignIpv6CidrBlockRequest,
    CreateSecurityGroupPoliciesResponse: CreateSecurityGroupPoliciesResponse,
    HaVipAssociateAddressIpRequest: HaVipAssociateAddressIpRequest,
    DeleteRoutesResponse: DeleteRoutesResponse,
    DescribeSecurityGroupAssociationStatisticsResponse: DescribeSecurityGroupAssociationStatisticsResponse,
    DescribeFlowLogRequest: DescribeFlowLogRequest,
    AddIp6RulesRequest: AddIp6RulesRequest,
    DescribeAccountAttributesResponse: DescribeAccountAttributesResponse,
    AssignPrivateIpAddressesResponse: AssignPrivateIpAddressesResponse,
    DescribeSecurityGroupsRequest: DescribeSecurityGroupsRequest,
    AddBandwidthPackageResourcesResponse: AddBandwidthPackageResourcesResponse,
    SetCcnRegionBandwidthLimitsRequest: SetCcnRegionBandwidthLimitsRequest,
    DescribeDirectConnectGatewaysResponse: DescribeDirectConnectGatewaysResponse,
    Ip6RuleInfo: Ip6RuleInfo,
    DeleteAddressTemplateResponse: DeleteAddressTemplateResponse,
    ModifySubnetAttributeResponse: ModifySubnetAttributeResponse,
    DeleteAddressTemplateRequest: DeleteAddressTemplateRequest,
    NetworkInterface: NetworkInterface,
    TransformAddressRequest: TransformAddressRequest,
    ReplaceDirectConnectGatewayCcnRoutesRequest: ReplaceDirectConnectGatewayCcnRoutesRequest,
    ModifyAddressTemplateAttributeRequest: ModifyAddressTemplateAttributeRequest,
    DescribeVpcsResponse: DescribeVpcsResponse,
    ModifySecurityGroupAttributeRequest: ModifySecurityGroupAttributeRequest,
    RemoveBandwidthPackageResourcesRequest: RemoveBandwidthPackageResourcesRequest,
    DescribeFlowLogResponse: DescribeFlowLogResponse,
    HaVipAssociateAddressIpResponse: HaVipAssociateAddressIpResponse,
    DescribeBandwidthPackagesRequest: DescribeBandwidthPackagesRequest,
    DeleteDirectConnectGatewayCcnRoutesResponse: DeleteDirectConnectGatewayCcnRoutesResponse,
    InstanceStatistic: InstanceStatistic,
    CreateVpnConnectionRequest: CreateVpnConnectionRequest,
    CcnRoute: CcnRoute,
    DeleteSecurityGroupPoliciesRequest: DeleteSecurityGroupPoliciesRequest,
    VpnConnection: VpnConnection,
    DescribeCcnsRequest: DescribeCcnsRequest,
    CreateAddressTemplateGroupRequest: CreateAddressTemplateGroupRequest,
    DescribeCustomerGatewayVendorsResponse: DescribeCustomerGatewayVendorsResponse,
    RouteConflict: RouteConflict,
    DeleteSubnetResponse: DeleteSubnetResponse,
    Vpc: Vpc,
    CreateVpnGatewayResponse: CreateVpnGatewayResponse,
    DescribeVpcIpv6AddressesResponse: DescribeVpcIpv6AddressesResponse,
    RejectAttachCcnInstancesRequest: RejectAttachCcnInstancesRequest,
    ModifyIp6RuleRequest: ModifyIp6RuleRequest,
    ReplaceRouteTableAssociationRequest: ReplaceRouteTableAssociationRequest,
    RenewVpnGatewayRequest: RenewVpnGatewayRequest,
    SecurityGroupPolicy: SecurityGroupPolicy,
    DeleteVpcRequest: DeleteVpcRequest,
    ModifyServiceTemplateAttributeResponse: ModifyServiceTemplateAttributeResponse,
    DescribeCcnsResponse: DescribeCcnsResponse,
    CreateSubnetResponse: CreateSubnetResponse,
    DescribeSecurityGroupPoliciesResponse: DescribeSecurityGroupPoliciesResponse,
    ModifySecurityGroupPoliciesRequest: ModifySecurityGroupPoliciesRequest,
    RemoveIp6RulesResponse: RemoveIp6RulesResponse,
    ReplaceRoutesRequest: ReplaceRoutesRequest,
    CreateCustomerGatewayResponse: CreateCustomerGatewayResponse,
    ModifySubnetAttributeRequest: ModifySubnetAttributeRequest,
    DisassociateAddressRequest: DisassociateAddressRequest,
    DeleteVpnConnectionResponse: DeleteVpnConnectionResponse,
    CreateCcnResponse: CreateCcnResponse,
    EnableCcnRoutesRequest: EnableCcnRoutesRequest,
    DescribeVpcPrivateIpAddressesResponse: DescribeVpcPrivateIpAddressesResponse,
    ModifyServiceTemplateAttributeRequest: ModifyServiceTemplateAttributeRequest,
    DescribeIp6TranslatorsRequest: DescribeIp6TranslatorsRequest,
    CreateSubnetsResponse: CreateSubnetsResponse,
    DescribeGatewayFlowMonitorDetailRequest: DescribeGatewayFlowMonitorDetailRequest,
    InquiryPriceCreateVpnGatewayResponse: InquiryPriceCreateVpnGatewayResponse,
    FilterObject: FilterObject,
    SecurityGroupAssociationStatistics: SecurityGroupAssociationStatistics,
    DetachNetworkInterfaceResponse: DetachNetworkInterfaceResponse,
    ResetRoutesResponse: ResetRoutesResponse,
    DescribeVpcsRequest: DescribeVpcsRequest,
    UnassignIpv6SubnetCidrBlockRequest: UnassignIpv6SubnetCidrBlockRequest,
    ModifyIp6TranslatorRequest: ModifyIp6TranslatorRequest,
    CreateVpnConnectionResponse: CreateVpnConnectionResponse,
    AddressTemplateSpecification: AddressTemplateSpecification,
    VpcIpv6Address: VpcIpv6Address,
    AssignIpv6AddressesRequest: AssignIpv6AddressesRequest,
    CreateServiceTemplateGroupResponse: CreateServiceTemplateGroupResponse,
    ModifyIpv6AddressesAttributeResponse: ModifyIpv6AddressesAttributeResponse,
    ReplaceSecurityGroupPolicyRequest: ReplaceSecurityGroupPolicyRequest,
    DescribeVpnConnectionsRequest: DescribeVpnConnectionsRequest,
    DeleteCustomerGatewayResponse: DeleteCustomerGatewayResponse,
    CreateAddressTemplateResponse: CreateAddressTemplateResponse,
    DeleteDirectConnectGatewayResponse: DeleteDirectConnectGatewayResponse,
    DeleteAddressTemplateGroupRequest: DeleteAddressTemplateGroupRequest,
    CreateBandwidthPackageRequest: CreateBandwidthPackageRequest,
    ModifyRouteTableAttributeRequest: ModifyRouteTableAttributeRequest,
    ModifyDirectConnectGatewayAttributeResponse: ModifyDirectConnectGatewayAttributeResponse,
    DescribeVpnGatewaysRequest: DescribeVpnGatewaysRequest,
    CreateSubnetsRequest: CreateSubnetsRequest,
    AssociateAddressResponse: AssociateAddressResponse,
    ResetVpnConnectionResponse: ResetVpnConnectionResponse,
    DescribeAddressesRequest: DescribeAddressesRequest,
    DescribeSecurityGroupPoliciesRequest: DescribeSecurityGroupPoliciesRequest,
    ModifyNetworkInterfaceAttributeResponse: ModifyNetworkInterfaceAttributeResponse,
    CreateSecurityGroupResponse: CreateSecurityGroupResponse,
    DescribeIp6TranslatorQuotaRequest: DescribeIp6TranslatorQuotaRequest,
    AssignIpv6CidrBlockResponse: AssignIpv6CidrBlockResponse,
    CreateCcnRequest: CreateCcnRequest,
    RemoveIp6RulesRequest: RemoveIp6RulesRequest,
    DeleteVpnConnectionRequest: DeleteVpnConnectionRequest,
    RenewVpnGatewayResponse: RenewVpnGatewayResponse,
    ModifyAddressesBandwidthRequest: ModifyAddressesBandwidthRequest,
    ResetVpnGatewayInternetMaxBandwidthRequest: ResetVpnGatewayInternetMaxBandwidthRequest,
    DirectConnectGateway: DirectConnectGateway,
    Price: Price,
    HaVipDisassociateAddressIpRequest: HaVipDisassociateAddressIpRequest,
    ModifyVpnGatewayAttributeResponse: ModifyVpnGatewayAttributeResponse,
    UnassignIpv6CidrBlockResponse: UnassignIpv6CidrBlockResponse,
    CreateServiceTemplateGroupRequest: CreateServiceTemplateGroupRequest,
    DescribeClassicLinkInstancesResponse: DescribeClassicLinkInstancesResponse,
    DetachCcnInstancesRequest: DetachCcnInstancesRequest,
    CreateFlowLogResponse: CreateFlowLogResponse,
    DeleteDirectConnectGatewayRequest: DeleteDirectConnectGatewayRequest,
    CcnAttachedInstance: CcnAttachedInstance,
    SecurityPolicyDatabase: SecurityPolicyDatabase,
    Ipv6Address: Ipv6Address,
    CreateNetworkInterfaceRequest: CreateNetworkInterfaceRequest,
    DeleteHaVipResponse: DeleteHaVipResponse,
    DescribeFlowLogsResponse: DescribeFlowLogsResponse,
    VpcPrivateIpAddress: VpcPrivateIpAddress,
    DescribeCcnAttachedInstancesResponse: DescribeCcnAttachedInstancesResponse,
    DescribeSubnetsRequest: DescribeSubnetsRequest,
    CreateSubnetRequest: CreateSubnetRequest,
    AddressTemplateGroup: AddressTemplateGroup,
    DownloadCustomerGatewayConfigurationRequest: DownloadCustomerGatewayConfigurationRequest,
    DeleteBandwidthPackageRequest: DeleteBandwidthPackageRequest,
    HaVip: HaVip,
    ModifyAddressesBandwidthResponse: ModifyAddressesBandwidthResponse,
    SetCcnRegionBandwidthLimitsResponse: SetCcnRegionBandwidthLimitsResponse,
    DescribeAccountAttributesRequest: DescribeAccountAttributesRequest,
    DescribeCcnRoutesRequest: DescribeCcnRoutesRequest,
    DownloadCustomerGatewayConfigurationResponse: DownloadCustomerGatewayConfigurationResponse,
    AllocateAddressesRequest: AllocateAddressesRequest,
    CreateRouteTableResponse: CreateRouteTableResponse,
    ModifySecurityGroupAttributeResponse: ModifySecurityGroupAttributeResponse,
    ModifyAddressAttributeResponse: ModifyAddressAttributeResponse,
    AttachClassicLinkVpcRequest: AttachClassicLinkVpcRequest,
    GatewayFlowMonitorDetail: GatewayFlowMonitorDetail,
    DeleteVpnGatewayRequest: DeleteVpnGatewayRequest,
    ReplaceRouteTableAssociationResponse: ReplaceRouteTableAssociationResponse,
    AttachCcnInstancesRequest: AttachCcnInstancesRequest,
    DescribeDirectConnectGatewayCcnRoutesRequest: DescribeDirectConnectGatewayCcnRoutesRequest,
    CcnInstance: CcnInstance,
    ModifyCustomerGatewayAttributeResponse: ModifyCustomerGatewayAttributeResponse,
    InquiryPriceRenewVpnGatewayResponse: InquiryPriceRenewVpnGatewayResponse,
    AssignIpv6SubnetCidrBlockResponse: AssignIpv6SubnetCidrBlockResponse,
    DescribeCcnRegionBandwidthLimitsResponse: DescribeCcnRegionBandwidthLimitsResponse,
    DescribeAddressesResponse: DescribeAddressesResponse,
    ModifyIpv6AddressesAttributeRequest: ModifyIpv6AddressesAttributeRequest,
    DescribeCustomerGatewayVendorsRequest: DescribeCustomerGatewayVendorsRequest,
    DisableRoutesResponse: DisableRoutesResponse,
    ResetVpnGatewayInternetMaxBandwidthResponse: ResetVpnGatewayInternetMaxBandwidthResponse,
    DeleteFlowLogResponse: DeleteFlowLogResponse,
    AttachCcnInstancesResponse: AttachCcnInstancesResponse,
    CreateDefaultVpcResponse: CreateDefaultVpcResponse,
    ModifyVpcAttributeResponse: ModifyVpcAttributeResponse,
    ModifyVpnConnectionAttributeResponse: ModifyVpnConnectionAttributeResponse,
    PrivateIpAddressSpecification: PrivateIpAddressSpecification,
    MigratePrivateIpAddressResponse: MigratePrivateIpAddressResponse,
    DeleteRouteTableResponse: DeleteRouteTableResponse,
    AccountAttribute: AccountAttribute,
    ModifyHaVipAttributeResponse: ModifyHaVipAttributeResponse,
    RemoveBandwidthPackageResourcesResponse: RemoveBandwidthPackageResourcesResponse,
    ModifySecurityGroupPoliciesResponse: ModifySecurityGroupPoliciesResponse,
    AttachNetworkInterfaceResponse: AttachNetworkInterfaceResponse,
    DescribeServiceTemplatesResponse: DescribeServiceTemplatesResponse,
    DescribeRouteTablesRequest: DescribeRouteTablesRequest,
    ResetAttachCcnInstancesRequest: ResetAttachCcnInstancesRequest,
    CreateHaVipResponse: CreateHaVipResponse,
    DisableRoutesRequest: DisableRoutesRequest,
    EnableRoutesRequest: EnableRoutesRequest,
    DescribeAddressTemplateGroupsResponse: DescribeAddressTemplateGroupsResponse,
    ReleaseAddressesRequest: ReleaseAddressesRequest,
    CreateDirectConnectGatewayCcnRoutesRequest: CreateDirectConnectGatewayCcnRoutesRequest,
    CreateDirectConnectGatewayCcnRoutesResponse: CreateDirectConnectGatewayCcnRoutesResponse,
    CreateRouteTableRequest: CreateRouteTableRequest,
    MigrateNetworkInterfaceRequest: MigrateNetworkInterfaceRequest,
    DisableCcnRoutesRequest: DisableCcnRoutesRequest,
    ModifyVpcAttributeRequest: ModifyVpcAttributeRequest,
    SubnetInput: SubnetInput,
    UnassignIpv6SubnetCidrBlockResponse: UnassignIpv6SubnetCidrBlockResponse,
    DeleteCcnRequest: DeleteCcnRequest,
    ModifyVpnGatewayAttributeRequest: ModifyVpnGatewayAttributeRequest,
    IPSECOptionsSpecification: IPSECOptionsSpecification,
    UnassignIpv6AddressesRequest: UnassignIpv6AddressesRequest,
    ModifyCcnAttributeRequest: ModifyCcnAttributeRequest,
    DeleteSecurityGroupPoliciesResponse: DeleteSecurityGroupPoliciesResponse,
    DeleteVpnGatewayResponse: DeleteVpnGatewayResponse,
    DescribeHaVipsRequest: DescribeHaVipsRequest,
    UnassignPrivateIpAddressesResponse: UnassignPrivateIpAddressesResponse,
    Address: Address,
    VpnGateway: VpnGateway,
    Resource: Resource,
    CustomerGateway: CustomerGateway,
    AllocateAddressesResponse: AllocateAddressesResponse,
    BandwidthPackage: BandwidthPackage,
    DescribeIp6TranslatorsResponse: DescribeIp6TranslatorsResponse,
    CreateSecurityGroupPoliciesRequest: CreateSecurityGroupPoliciesRequest,
    ModifyRouteTableAttributeResponse: ModifyRouteTableAttributeResponse,
    AddIp6RulesResponse: AddIp6RulesResponse,
    CreateAddressTemplateGroupResponse: CreateAddressTemplateGroupResponse,
    DescribeBandwidthPackageQuotaResponse: DescribeBandwidthPackageQuotaResponse,
    DeleteServiceTemplateGroupRequest: DeleteServiceTemplateGroupRequest,
    CreateDirectConnectGatewayResponse: CreateDirectConnectGatewayResponse,
    ModifyAddressTemplateGroupAttributeRequest: ModifyAddressTemplateGroupAttributeRequest,
    ModifyServiceTemplateGroupAttributeRequest: ModifyServiceTemplateGroupAttributeRequest,
    UnassignIpv6CidrBlockRequest: UnassignIpv6CidrBlockRequest,
    CCN: CCN,
    DeleteIp6TranslatorsRequest: DeleteIp6TranslatorsRequest,
    Ip6Translator: Ip6Translator,
    CreateDefaultVpcRequest: CreateDefaultVpcRequest,
    DescribeSubnetsResponse: DescribeSubnetsResponse,
    DescribeCustomerGatewaysResponse: DescribeCustomerGatewaysResponse,
    InquiryPriceRenewVpnGatewayRequest: InquiryPriceRenewVpnGatewayRequest,
    EnableCcnRoutesResponse: EnableCcnRoutesResponse,
    DetachCcnInstancesResponse: DetachCcnInstancesResponse,
    ModifyServiceTemplateGroupAttributeResponse: ModifyServiceTemplateGroupAttributeResponse,
    DeleteSubnetRequest: DeleteSubnetRequest,
    DescribeAddressTemplateGroupsRequest: DescribeAddressTemplateGroupsRequest,
    RouteTable: RouteTable,
    DeleteNetworkInterfaceRequest: DeleteNetworkInterfaceRequest,
    InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse: InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse,
    DeleteAddressTemplateGroupResponse: DeleteAddressTemplateGroupResponse,
    ReplaceRoutesResponse: ReplaceRoutesResponse,
    DirectConnectGatewayCcnRoute: DirectConnectGatewayCcnRoute,
    DeleteHaVipRequest: DeleteHaVipRequest,
    MigratePrivateIpAddressRequest: MigratePrivateIpAddressRequest,
    DescribeServiceTemplatesRequest: DescribeServiceTemplatesRequest,
    DeleteRouteTableRequest: DeleteRouteTableRequest,
    NetworkInterfaceAttachment: NetworkInterfaceAttachment,
    CreateBandwidthPackageResponse: CreateBandwidthPackageResponse,
    ResetVpnConnectionRequest: ResetVpnConnectionRequest,
    ReleaseAddressesResponse: ReleaseAddressesResponse,
    InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest: InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest,
    DeleteCcnResponse: DeleteCcnResponse,
    ReplaceSecurityGroupPolicyResponse: ReplaceSecurityGroupPolicyResponse,
    ModifyPrivateIpAddressesAttributeResponse: ModifyPrivateIpAddressesAttributeResponse,
    DeleteDirectConnectGatewayCcnRoutesRequest: DeleteDirectConnectGatewayCcnRoutesRequest,
    DeleteSecurityGroupResponse: DeleteSecurityGroupResponse,
    CreateNetworkInterfaceResponse: CreateNetworkInterfaceResponse,
    DescribeAddressQuotaRequest: DescribeAddressQuotaRequest,
    SecurityGroupPolicySet: SecurityGroupPolicySet,
    AssignIpv6AddressesResponse: AssignIpv6AddressesResponse,
    CreateRoutesResponse: CreateRoutesResponse,
    DescribeSecurityGroupsResponse: DescribeSecurityGroupsResponse,
    ReplaceDirectConnectGatewayCcnRoutesResponse: ReplaceDirectConnectGatewayCcnRoutesResponse,
    CreateFlowLogRequest: CreateFlowLogRequest,
    ServiceTemplateSpecification: ServiceTemplateSpecification,
    DetachNetworkInterfaceRequest: DetachNetworkInterfaceRequest,
    Ip6Rule: Ip6Rule,
    AttachClassicLinkVpcResponse: AttachClassicLinkVpcResponse,
    CreateAddressTemplateRequest: CreateAddressTemplateRequest,
    DescribeRouteConflictsRequest: DescribeRouteConflictsRequest,
    Subnet: Subnet,
    DeleteVpcResponse: DeleteVpcResponse,
    DescribeCcnRoutesResponse: DescribeCcnRoutesResponse,
    SecurityGroup: SecurityGroup,
    DisassociateAddressResponse: DisassociateAddressResponse,
    DeleteRoutesRequest: DeleteRoutesRequest,
    AssociateAddressRequest: AssociateAddressRequest,
    CcnRegionBandwidthLimit: CcnRegionBandwidthLimit,
    ClassicLinkInstance: ClassicLinkInstance,
    CreateVpnGatewayRequest: CreateVpnGatewayRequest,
    ModifyNetworkInterfaceAttributeRequest: ModifyNetworkInterfaceAttributeRequest,
    ModifyHaVipAttributeRequest: ModifyHaVipAttributeRequest,
    ModifyAddressTemplateGroupAttributeResponse: ModifyAddressTemplateGroupAttributeResponse,
    DetachClassicLinkVpcResponse: DetachClassicLinkVpcResponse,
    MigrateNetworkInterfaceResponse: MigrateNetworkInterfaceResponse,
    UnassignPrivateIpAddressesRequest: UnassignPrivateIpAddressesRequest,
    Filter: Filter,
    CreateHaVipRequest: CreateHaVipRequest,
    Ipv6SubnetCidrBlock: Ipv6SubnetCidrBlock,
    DescribeAddressQuotaResponse: DescribeAddressQuotaResponse,
    CreateCustomerGatewayRequest: CreateCustomerGatewayRequest,
    DeleteSecurityGroupRequest: DeleteSecurityGroupRequest,
    ModifyVpnConnectionAttributeRequest: ModifyVpnConnectionAttributeRequest,
    CreateIp6TranslatorsRequest: CreateIp6TranslatorsRequest,
    ItemPrice: ItemPrice,
    DescribeDirectConnectGatewayCcnRoutesResponse: DescribeDirectConnectGatewayCcnRoutesResponse,
    ModifyPrivateIpAddressesAttributeRequest: ModifyPrivateIpAddressesAttributeRequest,
    CreateSecurityGroupRequest: CreateSecurityGroupRequest,
    ModifyCcnAttributeResponse: ModifyCcnAttributeResponse,
    DescribeClassicLinkInstancesRequest: DescribeClassicLinkInstancesRequest,
    CreateServiceTemplateResponse: CreateServiceTemplateResponse,
    DeleteNetworkInterfaceResponse: DeleteNetworkInterfaceResponse,
    DisableCcnRoutesResponse: DisableCcnRoutesResponse,
    DescribeCcnRegionBandwidthLimitsRequest: DescribeCcnRegionBandwidthLimitsRequest,
    InquiryPriceCreateVpnGatewayRequest: InquiryPriceCreateVpnGatewayRequest,
    CustomerGatewayVendor: CustomerGatewayVendor,
    DescribeAddressTemplatesRequest: DescribeAddressTemplatesRequest,
    DescribeVpnConnectionsResponse: DescribeVpnConnectionsResponse,
    DeleteCustomerGatewayRequest: DeleteCustomerGatewayRequest,
    DescribeAddressTemplatesResponse: DescribeAddressTemplatesResponse,
    Quota: Quota,
    DescribeNetworkInterfacesResponse: DescribeNetworkInterfacesResponse,
    EnableRoutesResponse: EnableRoutesResponse,
    AssignPrivateIpAddressesRequest: AssignPrivateIpAddressesRequest,
    DescribeServiceTemplateGroupsRequest: DescribeServiceTemplateGroupsRequest,
    CreateVpcRequest: CreateVpcRequest,
    DeleteServiceTemplateRequest: DeleteServiceTemplateRequest,
    DescribeSecurityGroupAssociationStatisticsRequest: DescribeSecurityGroupAssociationStatisticsRequest,
    Route: Route,
    DeleteServiceTemplateGroupResponse: DeleteServiceTemplateGroupResponse,
    DescribeBandwidthPackageQuotaRequest: DescribeBandwidthPackageQuotaRequest,
    RouteTableAssociation: RouteTableAssociation,
    AcceptAttachCcnInstancesResponse: AcceptAttachCcnInstancesResponse,
    InstanceChargePrepaid: InstanceChargePrepaid,

}
