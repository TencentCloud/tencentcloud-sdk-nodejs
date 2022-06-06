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
 * CreateNetworkAcl返回参数结构体
 * @class
 */
class CreateNetworkAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ACL实例。
         * @type {NetworkAcl || null}
         */
        this.NetworkAcl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NetworkAcl) {
            let obj = new NetworkAcl();
            obj.deserialize(params.NetworkAcl)
            this.NetworkAcl = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 网络ACL
 * @class
 */
class NetworkAcl extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 网络ACL实例`ID`。
         * @type {string || null}
         */
        this.NetworkAclId = null;

        /**
         * 网络ACL名称，最大长度为60。
         * @type {string || null}
         */
        this.NetworkAclName = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 网络ACL关联的子网数组。
         * @type {Array.<Subnet> || null}
         */
        this.SubnetSet = null;

        /**
         * 网络ACl入站规则。
         * @type {Array.<NetworkAclEntry> || null}
         */
        this.IngressEntries = null;

        /**
         * 网络ACL出站规则。
         * @type {Array.<NetworkAclEntry> || null}
         */
        this.EgressEntries = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.NetworkAclId = 'NetworkAclId' in params ? params.NetworkAclId : null;
        this.NetworkAclName = 'NetworkAclName' in params ? params.NetworkAclName : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }

        if (params.IngressEntries) {
            this.IngressEntries = new Array();
            for (let z in params.IngressEntries) {
                let obj = new NetworkAclEntry();
                obj.deserialize(params.IngressEntries[z]);
                this.IngressEntries.push(obj);
            }
        }

        if (params.EgressEntries) {
            this.EgressEntries = new Array();
            for (let z in params.EgressEntries) {
                let obj = new NetworkAclEntry();
                obj.deserialize(params.EgressEntries[z]);
                this.EgressEntries.push(obj);
            }
        }

    }
}

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
 * DisassociateDhcpIpWithAddressIp请求参数结构体
 * @class
 */
class DisassociateDhcpIpWithAddressIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `DhcpIp`唯一`ID`，形如：`dhcpip-9o233uri`。必须是已绑定`EIP`的`DhcpIp`。
         * @type {string || null}
         */
        this.DhcpIpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DhcpIpId = 'DhcpIpId' in params ? params.DhcpIpId : null;

    }
}

/**
 * 用户安全组配额限制。
 * @class
 */
class SecurityGroupLimitSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每个项目每个地域可创建安全组数
         * @type {number || null}
         */
        this.SecurityGroupLimit = null;

        /**
         * 安全组下的最大规则数
         * @type {number || null}
         */
        this.SecurityGroupPolicyLimit = null;

        /**
         * 安全组下嵌套安全组规则数
         * @type {number || null}
         */
        this.ReferedSecurityGroupLimit = null;

        /**
         * 单安全组关联实例数
         * @type {number || null}
         */
        this.SecurityGroupInstanceLimit = null;

        /**
         * 实例关联安全组数
         * @type {number || null}
         */
        this.InstanceSecurityGroupLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupLimit = 'SecurityGroupLimit' in params ? params.SecurityGroupLimit : null;
        this.SecurityGroupPolicyLimit = 'SecurityGroupPolicyLimit' in params ? params.SecurityGroupPolicyLimit : null;
        this.ReferedSecurityGroupLimit = 'ReferedSecurityGroupLimit' in params ? params.ReferedSecurityGroupLimit : null;
        this.SecurityGroupInstanceLimit = 'SecurityGroupInstanceLimit' in params ? params.SecurityGroupInstanceLimit : null;
        this.InstanceSecurityGroupLimit = 'InstanceSecurityGroupLimit' in params ? params.InstanceSecurityGroupLimit : null;

    }
}

/**
 * LockCcns请求参数结构体
 * @class
 */
class LockCcnsRequest extends  AbstractModel {
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
         * 云服务器实例数。
         * @type {number || null}
         */
        this.CVM = null;

        /**
         * MySQL数据库实例数。
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

        /**
         * 所有资源的总计数（不包含被安全组引用数）。
         * @type {number || null}
         */
        this.TotalCount = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

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
         * 支持单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。Services与ServicesExtra必填其一。
         * @type {Array.<string> || null}
         */
        this.Services = null;

        /**
         * 支持添加备注，单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。Services与ServicesExtra必填其一。
         * @type {Array.<ServicesInfo> || null}
         */
        this.ServicesExtra = null;

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

        if (params.ServicesExtra) {
            this.ServicesExtra = new Array();
            for (let z in params.ServicesExtra) {
                let obj = new ServicesInfo();
                obj.deserialize(params.ServicesExtra[z]);
                this.ServicesExtra.push(obj);
            }
        }

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
QUOTAID属性是TOTAL_TRANSLATOR_QUOTA，表示账户在指定地域的IPV6转换实例配额信息；QUOTAID属性是IPV6转换实例唯一ID（形如ip6-xxxxxxxx），表示账户在该转换实例允许创建的转换规则配额
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
         * 过滤条件。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定VpnConnectionIds和Filters。
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
 * CreateAssistantCidr请求参数结构体
 * @class
 */
class CreateAssistantCidrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`。形如：`vpc-6v2ht8q5`
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]
         * @type {Array.<string> || null}
         */
        this.CidrBlocks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CidrBlocks = 'CidrBlocks' in params ? params.CidrBlocks : null;

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
<li>address-ip - String - （过滤条件）内网IPv4地址，单IP后缀模糊匹配，多IP精确匹配。可以与`ip-exact-match`配合做单IP的精确匹配查询。</li>
<li>ip-exact-match - Boolean - （过滤条件）内网IPv4精确匹配查询，存在多值情况，只取第一个。</li>
<li>tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。使用请参考示例2</li>
<li>tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例3。</li>
<li>is-primary - Boolean - 是否必填：否 - （过滤条件）按照是否主网卡进行过滤。值为true时，仅过滤主网卡；值为false时，仅过滤辅助网卡；此过滤参数未提供时，同时过滤主网卡和辅助网卡。</li>
<li>eni-type - String -是否必填：否- （过滤条件）按照网卡类型进行过滤。“0”-辅助网卡，“1”-主网卡，“2”：中继网卡</li>
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
 * DescribeVpcLimits请求参数结构体
 * @class
 */
class DescribeVpcLimitsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配额名称。每次最大查询100个配额类型。
         * @type {Array.<string> || null}
         */
        this.LimitTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LimitTypes = 'LimitTypes' in params ? params.LimitTypes : null;

    }
}

/**
 * ReleaseIp6AddressesBandwidth返回参数结构体
 * @class
 */
class ReleaseIp6AddressesBandwidthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * SSL-VPN-CLIENT 出参
 * @class
 */
class SslVpnClient extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * SSL-VPN-SERVER 实例ID
         * @type {string || null}
         */
        this.SslVpnServerId = null;

        /**
         * 证书状态. 
0:创建中
1:正常
2:已停用
3.已过期
4.创建出错
         * @type {number || null}
         */
        this.CertStatus = null;

        /**
         * SSL-VPN-CLIENT 实例ID
         * @type {string || null}
         */
        this.SslVpnClientId = null;

        /**
         * 证书开始时间
         * @type {string || null}
         */
        this.CertBeginTime = null;

        /**
         * 证书到期时间
         * @type {string || null}
         */
        this.CertEndTime = null;

        /**
         * CLIENT NAME
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 创建CLIENT 状态。
0 创建中
1 创建出错
2 更新中
3 更新出错
4 销毁中
5 销毁出粗
6 已连通
7 未知
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SslVpnServerId = 'SslVpnServerId' in params ? params.SslVpnServerId : null;
        this.CertStatus = 'CertStatus' in params ? params.CertStatus : null;
        this.SslVpnClientId = 'SslVpnClientId' in params ? params.SslVpnClientId : null;
        this.CertBeginTime = 'CertBeginTime' in params ? params.CertBeginTime : null;
        this.CertEndTime = 'CertEndTime' in params ? params.CertEndTime : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * NAT的SNAT规则
 * @class
 */
class SourceIpTranslationNatRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源类型，目前包含SUBNET、NETWORKINTERFACE
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 源IP/网段
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * 弹性IP地址池
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Snat规则ID
         * @type {string || null}
         */
        this.NatGatewaySnatId = null;

        /**
         * NAT网关的ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * 私有网络VPC的ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * NAT网关SNAT规则创建时间。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.NatGatewaySnatId = 'NatGatewaySnatId' in params ? params.NatGatewaySnatId : null;
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

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
 * ModifyNatGatewayDestinationIpPortTranslationNatRule返回参数结构体
 * @class
 */
class ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse extends  AbstractModel {
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
 * ModifyCcnRegionBandwidthLimitsType返回参数结构体
 * @class
 */
class ModifyCcnRegionBandwidthLimitsTypeResponse extends  AbstractModel {
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

        /**
         * 协议端口模板实例信息。
         * @type {Array.<ServiceTemplate> || null}
         */
        this.ServiceTemplateSet = null;

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

        if (params.ServiceTemplateSet) {
            this.ServiceTemplateSet = new Array();
            for (let z in params.ServiceTemplateSet) {
                let obj = new ServiceTemplate();
                obj.deserialize(params.ServiceTemplateSet[z]);
                this.ServiceTemplateSet.push(obj);
            }
        }

    }
}

/**
 * CreateDhcpIp返回参数结构体
 * @class
 */
class CreateDhcpIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新创建的`DhcpIp`信息
         * @type {Array.<DhcpIp> || null}
         */
        this.DhcpIpSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DhcpIpSet) {
            this.DhcpIpSet = new Array();
            for (let z in params.DhcpIpSet) {
                let obj = new DhcpIp();
                obj.deserialize(params.DhcpIpSet[z]);
                this.DhcpIpSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteVpnGatewaySslServer返回参数结构体
 * @class
 */
class DeleteVpnGatewaySslServerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIpGeolocationInfos请求参数结构体
 * @class
 */
class DescribeIpGeolocationInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需查询的IP地址列表，目前仅支持IPv4地址。查询的IP地址数量上限为100个。
         * @type {Array.<string> || null}
         */
        this.AddressIps = null;

        /**
         * 需查询的IP地址的字段信息。
         * @type {IpField || null}
         */
        this.Fields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressIps = 'AddressIps' in params ? params.AddressIps : null;

        if (params.Fields) {
            let obj = new IpField();
            obj.deserialize(params.Fields)
            this.Fields = obj;
        }

    }
}

/**
 * AddTemplateMember返回参数结构体
 * @class
 */
class AddTemplateMemberResponse extends  AbstractModel {
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
 * CreateDefaultSecurityGroup请求参数结构体
 * @class
 */
class CreateDefaultSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID，默认0。可在qcloud控制台项目管理页面查询到。
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

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
 * DescribeVpcEndPoint请求参数结构体
 * @class
 */
class DescribeVpcEndPointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li> end-point-service-id- String - （过滤条件）终端节点服务ID。</li>
<li>end-point-name - String - （过滤条件）终端节点实例名称。</li>
<li> end-point-id- String - （过滤条件）终端节点实例ID。</li>
<li> vpc-id- String - （过滤条件）VPC实例ID。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单页返回数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 终端节点ID列表。
         * @type {Array.<string> || null}
         */
        this.EndPointId = null;

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
        this.EndPointId = 'EndPointId' in params ? params.EndPointId : null;

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
 * DescribeBandwidthPackageBillUsage返回参数结构体
 * @class
 */
class DescribeBandwidthPackageBillUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前计费用量
         * @type {Array.<BandwidthPackageBillBandwidth> || null}
         */
        this.BandwidthPackageBillBandwidthSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BandwidthPackageBillBandwidthSet) {
            this.BandwidthPackageBillBandwidthSet = new Array();
            for (let z in params.BandwidthPackageBillBandwidthSet) {
                let obj = new BandwidthPackageBillBandwidth();
                obj.deserialize(params.BandwidthPackageBillBandwidthSet[z]);
                this.BandwidthPackageBillBandwidthSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ModifyNatGatewayAttribute请求参数结构体
 * @class
 */
class ModifyNatGatewayAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关的ID，形如：`nat-df45454`。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * NAT网关的名称，形如：`test_nat`。
         * @type {string || null}
         */
        this.NatGatewayName = null;

        /**
         * NAT网关最大外网出带宽(单位:Mbps)。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 是否修改NAT网关绑定的安全组。
         * @type {boolean || null}
         */
        this.ModifySecurityGroup = null;

        /**
         * NAT网关绑定的安全组列表，最终状态，空列表表示删除所有安全组，形如: `['sg-1n232323', 'sg-o4242424']`
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
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.NatGatewayName = 'NatGatewayName' in params ? params.NatGatewayName : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.ModifySecurityGroup = 'ModifySecurityGroup' in params ? params.ModifySecurityGroup : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeLocalGateway请求参数结构体
 * @class
 */
class DescribeLocalGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询条件：
vpc-id：按照VPCID过滤，local-gateway-name：按照本地网关名称过滤，名称支持模糊搜索，local-gateway-id：按照本地网关实例ID过滤，cdc-id：按照cdc实例ID过滤查询。
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
 * 流日志
 * @class
 */
class FlowLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私用网络ID或者统一ID，建议使用统一ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 流日志唯一ID。
         * @type {string || null}
         */
        this.FlowLogId = null;

        /**
         * 流日志实例名字。
         * @type {string || null}
         */
        this.FlowLogName = null;

        /**
         * 流日志所属资源类型，VPC|SUBNET|NETWORKINTERFACE|CCN|NAT|DCG。
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 资源唯一ID。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 流日志采集类型，ACCEPT|REJECT|ALL。
         * @type {string || null}
         */
        this.TrafficType = null;

        /**
         * 流日志存储ID。
         * @type {string || null}
         */
        this.CloudLogId = null;

        /**
         * 流日志存储ID状态。
         * @type {string || null}
         */
        this.CloudLogState = null;

        /**
         * 流日志描述信息。
         * @type {string || null}
         */
        this.FlowLogDescription = null;

        /**
         * 流日志创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * 是否启用，true-启用，false-停用。
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 消费端类型：cls、ckafka。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * 消费端信息，当消费端类型为ckafka时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FlowLogStorage || null}
         */
        this.FlowLogStorage = null;

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

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;

        if (params.FlowLogStorage) {
            let obj = new FlowLogStorage();
            obj.deserialize(params.FlowLogStorage)
            this.FlowLogStorage = obj;
        }

    }
}

/**
 * DescribeVpcLimits返回参数结构体
 * @class
 */
class DescribeVpcLimitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有网络配额
         * @type {Array.<VpcLimit> || null}
         */
        this.VpcLimitSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VpcLimitSet) {
            this.VpcLimitSet = new Array();
            for (let z in params.VpcLimitSet) {
                let obj = new VpcLimit();
                obj.deserialize(params.VpcLimitSet[z]);
                this.VpcLimitSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IP在线查询的字段信息
 * @class
 */
class IpField extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国家字段信息
         * @type {boolean || null}
         */
        this.Country = null;

        /**
         * 省、州、郡一级行政区域字段信息
         * @type {boolean || null}
         */
        this.Province = null;

        /**
         * 市一级行政区域字段信息
         * @type {boolean || null}
         */
        this.City = null;

        /**
         * 市内区域字段信息
         * @type {boolean || null}
         */
        this.Region = null;

        /**
         * 接入运营商字段信息
         * @type {boolean || null}
         */
        this.Isp = null;

        /**
         * 骨干运营商字段信息
         * @type {boolean || null}
         */
        this.AsName = null;

        /**
         * 骨干As号
         * @type {boolean || null}
         */
        this.AsId = null;

        /**
         * 注释字段
         * @type {boolean || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.AsName = 'AsName' in params ? params.AsName : null;
        this.AsId = 'AsId' in params ? params.AsId : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

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
         * 资源唯一ID，当前支持EIP资源和LB资源，形如'eip-xxxx', 'lb-xxxx'
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 带宽包唯一标识ID，形如'bwp-xxxx'
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * 带宽包类型，当前支持'BGP'类型，表示内部资源是BGP IP。
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 资源类型，包括'Address', 'LoadBalance'
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 带宽包协议类型。当前支持'ipv4'和'ipv6'协议类型。
         * @type {string || null}
         */
        this.Protocol = null;

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
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

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
 * DeleteVpnGatewaySslClient返回参数结构体
 * @class
 */
class DeleteVpnGatewaySslClientResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * VPC辅助CIDR信息。
 * @class
 */
class AssistantCidr extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`。形如：`vpc-6v2ht8q5`
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 辅助CIDR。形如：`172.16.0.0/16`
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 辅助CIDR类型（0：普通辅助CIDR，1：容器辅助CIDR），默认都是0。
         * @type {number || null}
         */
        this.AssistantType = null;

        /**
         * 辅助CIDR拆分的子网。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Subnet> || null}
         */
        this.SubnetSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.AssistantType = 'AssistantType' in params ? params.AssistantType : null;

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }

    }
}

/**
 * ModifyNetworkAclEntries请求参数结构体
 * @class
 */
class ModifyNetworkAclEntriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ACL实例ID。例如：acl-12345678。
         * @type {string || null}
         */
        this.NetworkAclId = null;

        /**
         * 网络ACL规则集。
         * @type {NetworkAclEntrySet || null}
         */
        this.NetworkAclEntrySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkAclId = 'NetworkAclId' in params ? params.NetworkAclId : null;

        if (params.NetworkAclEntrySet) {
            let obj = new NetworkAclEntrySet();
            obj.deserialize(params.NetworkAclEntrySet)
            this.NetworkAclEntrySet = obj;
        }

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

        /**
         * 带备注的IP地址信息。
         * @type {Array.<AddressInfo> || null}
         */
        this.AddressExtraSet = null;

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

        if (params.AddressExtraSet) {
            this.AddressExtraSet = new Array();
            for (let z in params.AddressExtraSet) {
                let obj = new AddressInfo();
                obj.deserialize(params.AddressExtraSet[z]);
                this.AddressExtraSet.push(obj);
            }
        }

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
         * 加密算法，可选值：'3DES-CBC', 'AES-CBC-128', 'AES-CBS-192', 'AES-CBC-256', 'DES-CBC'，'SM4', 默认为3DES-CBC
         * @type {string || null}
         */
        this.PropoEncryAlgorithm = null;

        /**
         * 认证算法：可选值：'MD5', 'SHA1'，'SHA-256' 默认为MD5
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
 * VPN网关配额对象
 * @class
 */
class VpnGatewayQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽配额
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 配额中文名称
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 配额英文名称
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
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeBandwidthPackageBillUsage请求参数结构体
 * @class
 */
class DescribeBandwidthPackageBillUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后付费共享带宽包的唯一ID
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

        /**
         * 过滤条件，参数不支持同时指定FlowLogIds和Filters。
<li>tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。</li>
<li>tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。</li>
         * @type {Filter || null}
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

        if (params.Filters) {
            let obj = new Filter();
            obj.deserialize(params.Filters)
            this.Filters = obj;
        }

    }
}

/**
 * DeleteTemplateMember请求参数结构体
 * @class
 */
class DeleteTemplateMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板实例ID，支持IP地址、协议端口、IP地址组、协议端口组四种参数模板的实例ID。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 需要添加的参数模板成员信息，支持IP地址、协议端口、IP地址组、协议端口组四种类型，类型需要与TemplateId参数类型一致。
         * @type {Array.<MemberInfo> || null}
         */
        this.TemplateMember = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.TemplateMember) {
            this.TemplateMember = new Array();
            for (let z in params.TemplateMember) {
                let obj = new MemberInfo();
                obj.deserialize(params.TemplateMember[z]);
                this.TemplateMember.push(obj);
            }
        }

    }
}

/**
 * CloneSecurityGroup请求参数结构体
 * @class
 */
class CloneSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组名称，可任意命名，但不得超过60个字符。未提供参数时，克隆后的安全组名称和SecurityGroupId对应的安全组名称相同。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 安全组备注，最多100个字符。未提供参数时，克隆后的安全组备注和SecurityGroupId对应的安全组备注相同。
         * @type {string || null}
         */
        this.GroupDescription = null;

        /**
         * 项目ID，默认0。可在qcloud控制台项目管理页面查询到。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 源Region,跨地域克隆安全组时，需要传入源安全组所属地域信息，例如：克隆广州的安全组到上海，则这里需要传入广州安全的地域信息：ap-guangzhou。
         * @type {string || null}
         */
        this.RemoteRegion = null;

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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RemoteRegion = 'RemoteRegion' in params ? params.RemoteRegion : null;

    }
}

/**
 * AssociateNatGatewayAddress请求参数结构体
 * @class
 */
class AssociateNatGatewayAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关的ID，形如：`nat-df45454`。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * 需要申请的弹性IP个数，系统会按您的要求生产N个弹性IP, 其中AddressCount和PublicAddresses至少传递一个。
         * @type {number || null}
         */
        this.AddressCount = null;

        /**
         * 绑定NAT网关的弹性IP数组，其中AddressCount和PublicAddresses至少传递一个。
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * 弹性IP可用区，自动分配弹性IP时传递。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 绑定NAT网关的弹性IP带宽大小（单位Mbps），默认为当前用户类型所能使用的最大值。
         * @type {number || null}
         */
        this.StockPublicIpAddressesBandwidthOut = null;

        /**
         * 需要申请公网IP带宽大小（单位Mbps），默认为当前用户类型所能使用的最大值。
         * @type {number || null}
         */
        this.PublicIpAddressesBandwidthOut = null;

        /**
         * 公网IP是否强制与NAT网关来自同可用区，true表示需要与NAT网关同可用区；false表示可与NAT网关不是同一个可用区。此参数只有当参数Zone存在时才能生效。
         * @type {boolean || null}
         */
        this.PublicIpFromSameZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.AddressCount = 'AddressCount' in params ? params.AddressCount : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.StockPublicIpAddressesBandwidthOut = 'StockPublicIpAddressesBandwidthOut' in params ? params.StockPublicIpAddressesBandwidthOut : null;
        this.PublicIpAddressesBandwidthOut = 'PublicIpAddressesBandwidthOut' in params ? params.PublicIpAddressesBandwidthOut : null;
        this.PublicIpFromSameZone = 'PublicIpFromSameZone' in params ? params.PublicIpFromSameZone : null;

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

        /**
         * 云联网路由发布模式，可选值：`standard`（标准模式）、`exquisite`（精细模式）。只有云联网类型专线网关才支持`ModeType`。
         * @type {string || null}
         */
        this.ModeType = null;

        /**
         * 专线网关可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 专线网关高可用区容灾组ID
         * @type {string || null}
         */
        this.HaZoneGroupId = null;

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
        this.ModeType = 'ModeType' in params ? params.ModeType : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.HaZoneGroupId = 'HaZoneGroupId' in params ? params.HaZoneGroupId : null;

    }
}

/**
 * CreateVpnGatewaySslServer请求参数结构体
 * @class
 */
class CreateVpnGatewaySslServerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN实例ID
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * SSL_VPN_SERVER 实例名
         * @type {string || null}
         */
        this.SslVpnServerName = null;

        /**
         * 本端地址网段
         * @type {Array.<string> || null}
         */
        this.LocalAddress = null;

        /**
         * 客户端地址网段
         * @type {string || null}
         */
        this.RemoteAddress = null;

        /**
         * SSL VPN服务端监听协议。当前仅支持 UDP。默认UDP
         * @type {string || null}
         */
        this.SslVpnProtocol = null;

        /**
         * SSL VPN服务端监听协议端口。默认1194。
         * @type {number || null}
         */
        this.SslVpnPort = null;

        /**
         * 认证算法。可选 'SHA1', 'MD5', 'NONE'。默认NONE
         * @type {string || null}
         */
        this.IntegrityAlgorithm = null;

        /**
         * 加密算法。可选 'AES-128-CBC', 'AES-192-CBC', 'AES-256-CBC', 'NONE'。默认NONE
         * @type {string || null}
         */
        this.EncryptAlgorithm = null;

        /**
         * 是否支持压缩。当前仅支持不支持压缩。默认False
         * @type {boolean || null}
         */
        this.Compress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.SslVpnServerName = 'SslVpnServerName' in params ? params.SslVpnServerName : null;
        this.LocalAddress = 'LocalAddress' in params ? params.LocalAddress : null;
        this.RemoteAddress = 'RemoteAddress' in params ? params.RemoteAddress : null;
        this.SslVpnProtocol = 'SslVpnProtocol' in params ? params.SslVpnProtocol : null;
        this.SslVpnPort = 'SslVpnPort' in params ? params.SslVpnPort : null;
        this.IntegrityAlgorithm = 'IntegrityAlgorithm' in params ? params.IntegrityAlgorithm : null;
        this.EncryptAlgorithm = 'EncryptAlgorithm' in params ? params.EncryptAlgorithm : null;
        this.Compress = 'Compress' in params ? params.Compress : null;

    }
}

/**
 * CreateVpcEndPoint请求参数结构体
 * @class
 */
class CreateVpcEndPointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网实例ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 终端节点名称。
         * @type {string || null}
         */
        this.EndPointName = null;

        /**
         * 终端节点服务ID。
         * @type {string || null}
         */
        this.EndPointServiceId = null;

        /**
         * 终端节点VIP，可以指定IP申请。
         * @type {string || null}
         */
        this.EndPointVip = null;

        /**
         * 安全组ID。
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EndPointName = 'EndPointName' in params ? params.EndPointName : null;
        this.EndPointServiceId = 'EndPointServiceId' in params ? params.EndPointServiceId : null;
        this.EndPointVip = 'EndPointVip' in params ? params.EndPointVip : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

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

        /**
         * 带宽包计费模式
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 退款时迁移为后付费带宽包。默认值：否
         * @type {boolean || null}
         */
        this.MigrateOnRefund = null;

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
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.MigrateOnRefund = 'MigrateOnRefund' in params ? params.MigrateOnRefund : null;

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
 * DisassociateNetworkInterfaceSecurityGroups请求参数结构体
 * @class
 */
class DisassociateNetworkInterfaceSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID。形如：eni-pxir56ns。每次请求的实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.NetworkInterfaceIds = null;

        /**
         * 安全组实例ID，例如：sg-33ocnj9n，可通过DescribeSecurityGroups获取。每次请求的实例的上限为100。
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
        this.NetworkInterfaceIds = 'NetworkInterfaceIds' in params ? params.NetworkInterfaceIds : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

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
 * ModifyFlowLogAttribute请求参数结构体
 * @class
 */
class ModifyFlowLogAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流日志唯一ID
         * @type {string || null}
         */
        this.FlowLogId = null;

        /**
         * 私用网络ID或者统一ID，建议使用统一ID，修改云联网流日志属性时可不填，其他流日志类型必填。
         * @type {string || null}
         */
        this.VpcId = null;

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
        this.FlowLogId = 'FlowLogId' in params ? params.FlowLogId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.FlowLogName = 'FlowLogName' in params ? params.FlowLogName : null;
        this.FlowLogDescription = 'FlowLogDescription' in params ? params.FlowLogDescription : null;

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
 * ModifyVpcEndPointServiceAttribute请求参数结构体
 * @class
 */
class ModifyVpcEndPointServiceAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端节点服务ID。
         * @type {string || null}
         */
        this.EndPointServiceId = null;

        /**
         * VPCID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 终端节点服务名称。
         * @type {string || null}
         */
        this.EndPointServiceName = null;

        /**
         * 是否自动接受终端节点的连接请求。<ui><li>true：自动接受<li>false：不自动接受</ul>
         * @type {boolean || null}
         */
        this.AutoAcceptFlag = null;

        /**
         * 后端服务的ID，比如lb-xxx。
         * @type {string || null}
         */
        this.ServiceInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndPointServiceId = 'EndPointServiceId' in params ? params.EndPointServiceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.EndPointServiceName = 'EndPointServiceName' in params ? params.EndPointServiceName : null;
        this.AutoAcceptFlag = 'AutoAcceptFlag' in params ? params.AutoAcceptFlag : null;
        this.ServiceInstanceId = 'ServiceInstanceId' in params ? params.ServiceInstanceId : null;

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
 * DescribeIpGeolocationInfos返回参数结构体
 * @class
 */
class DescribeIpGeolocationInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址信息列表。
         * @type {Array.<IpGeolocationInfo> || null}
         */
        this.AddressInfo = null;

        /**
         * IP地址信息个数。
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

        if (params.AddressInfo) {
            this.AddressInfo = new Array();
            for (let z in params.AddressInfo) {
                let obj = new IpGeolocationInfo();
                obj.deserialize(params.AddressInfo[z]);
                this.AddressInfo.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVpcTaskResult请求参数结构体
 * @class
 */
class DescribeVpcTaskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务请求返回的RequestId。
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * AssociateNetworkAclSubnets返回参数结构体
 * @class
 */
class AssociateNetworkAclSubnetsResponse extends  AbstractModel {
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
 * DeleteNatGatewayDestinationIpPortTranslationNatRule请求参数结构体
 * @class
 */
class DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关的ID，形如：`nat-df45454`。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * NAT网关的端口转换规则。
         * @type {Array.<DestinationIpPortTranslationNatRule> || null}
         */
        this.DestinationIpPortTranslationNatRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;

        if (params.DestinationIpPortTranslationNatRules) {
            this.DestinationIpPortTranslationNatRules = new Array();
            for (let z in params.DestinationIpPortTranslationNatRules) {
                let obj = new DestinationIpPortTranslationNatRule();
                obj.deserialize(params.DestinationIpPortTranslationNatRules[z]);
                this.DestinationIpPortTranslationNatRules.push(obj);
            }
        }

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
 * CheckDefaultSubnet请求参数结构体
 * @class
 */
class CheckDefaultSubnetRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * CheckNetDetectState请求参数结构体
 * @class
 */
class CheckNetDetectStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 探测目的IPv4地址数组，最多两个。
         * @type {Array.<string> || null}
         */
        this.DetectDestinationIp = null;

        /**
         * 下一跳类型，目前我们支持的类型有：
VPN：VPN网关；
DIRECTCONNECT：专线网关；
PEERCONNECTION：对等连接；
NAT：NAT网关；
NORMAL_CVM：普通云服务器；
         * @type {string || null}
         */
        this.NextHopType = null;

        /**
         * 下一跳目的网关，取值与“下一跳类型”相关：
下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；
下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；
下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；
下一跳类型为NAT，取值Nat网关，形如：nat-12345678；
下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；
         * @type {string || null}
         */
        this.NextHopDestination = null;

        /**
         * 网络探测实例ID。形如：netd-12345678。该参数与（VpcId，SubnetId，NetDetectName），至少要有一个。当NetDetectId存在时，使用NetDetectId。
         * @type {string || null}
         */
        this.NetDetectId = null;

        /**
         * `VPC`实例`ID`。形如：`vpc-12345678`。该参数与（SubnetId，NetDetectName）配合使用，与NetDetectId至少要有一个。当NetDetectId存在时，使用NetDetectId。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网实例ID。形如：subnet-12345678。该参数与（VpcId，NetDetectName）配合使用，与NetDetectId至少要有一个。当NetDetectId存在时，使用NetDetectId。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 网络探测名称，最大长度不能超过60个字节。该参数与（VpcId，SubnetId）配合使用，与NetDetectId至少要有一个。当NetDetectId存在时，使用NetDetectId。
         * @type {string || null}
         */
        this.NetDetectName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectDestinationIp = 'DetectDestinationIp' in params ? params.DetectDestinationIp : null;
        this.NextHopType = 'NextHopType' in params ? params.NextHopType : null;
        this.NextHopDestination = 'NextHopDestination' in params ? params.NextHopDestination : null;
        this.NetDetectId = 'NetDetectId' in params ? params.NetDetectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.NetDetectName = 'NetDetectName' in params ? params.NetDetectName : null;

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
 * DeleteVpcEndPointServiceWhiteList请求参数结构体
 * @class
 */
class DeleteVpcEndPointServiceWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户UIN数组。
         * @type {Array.<string> || null}
         */
        this.UserUin = null;

        /**
         * 终端节点服务ID。
         * @type {string || null}
         */
        this.EndPointServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserUin = 'UserUin' in params ? params.UserUin : null;
        this.EndPointServiceId = 'EndPointServiceId' in params ? params.EndPointServiceId : null;

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
 * DeleteVpcEndPointService请求参数结构体
 * @class
 */
class DeleteVpcEndPointServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端节点ID。
         * @type {string || null}
         */
        this.EndPointServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndPointServiceId = 'EndPointServiceId' in params ? params.EndPointServiceId : null;

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

        /**
         * 带备注的协议端口信息。
         * @type {Array.<ServicesInfo> || null}
         */
        this.ServiceExtraSet = null;

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

        if (params.ServiceExtraSet) {
            this.ServiceExtraSet = new Array();
            for (let z in params.ServiceExtraSet) {
                let obj = new ServicesInfo();
                obj.deserialize(params.ServiceExtraSet[z]);
                this.ServiceExtraSet.push(obj);
            }
        }

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
 * DescribeNatGatewaySourceIpTranslationNatRules请求参数结构体
 * @class
 */
class DescribeNatGatewaySourceIpTranslationNatRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关统一 ID，形如：`nat-123xx454`。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * 过滤条件:
<li> resource-id，Subnet的ID或者Cvm ID，如`subnet-0yi4hekt`</li>
<li> public-ip-address，弹性IP，如`139.199.232.238`</li>
<li>description，规则描述。</li>
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
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;

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
 * DescribeNatGateways请求参数结构体
 * @class
 */
class DescribeNatGatewaysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关统一 ID，形如：`nat-123xx454`。
         * @type {Array.<string> || null}
         */
        this.NatGatewayIds = null;

        /**
         * 过滤条件，参数不支持同时指定NatGatewayIds和Filters。
<li>nat-gateway-id - String - （过滤条件）协议端口模板实例ID，形如：`nat-123xx454`。</li>
<li>vpc-id - String - （过滤条件）私有网络 唯一ID，形如：`vpc-123xx454`。</li>
<li>nat-gateway-name - String - （过滤条件）协议端口模板实例ID，形如：`test_nat`。</li>
<li>tag-key - String - （过滤条件）标签键，形如：`test-key`。</li>
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
        this.NatGatewayIds = 'NatGatewayIds' in params ? params.NatGatewayIds : null;

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
 * DisableVpnGatewaySslClientCert请求参数结构体
 * @class
 */
class DisableVpnGatewaySslClientCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSL-VPN-CLIENT 实例ID。
         * @type {string || null}
         */
        this.SslVpnClientId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SslVpnClientId = 'SslVpnClientId' in params ? params.SslVpnClientId : null;

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
 * CreateVpcEndPointServiceWhiteList返回参数结构体
 * @class
 */
class CreateVpcEndPointServiceWhiteListResponse extends  AbstractModel {
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
 * DescribeIpGeolocationDatabaseUrl返回参数结构体
 * @class
 */
class DescribeIpGeolocationDatabaseUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地理位置库下载链接地址。
         * @type {string || null}
         */
        this.DownLoadUrl = null;

        /**
         * 链接到期时间。按照`ISO8601`标准表示，并且使用`UTC`时间。
         * @type {string || null}
         */
        this.ExpiredAt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownLoadUrl = 'DownLoadUrl' in params ? params.DownLoadUrl : null;
        this.ExpiredAt = 'ExpiredAt' in params ? params.ExpiredAt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnlockCcnBandwidths请求参数结构体
 * @class
 */
class UnlockCcnBandwidthsRequest extends  AbstractModel {
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
 * DescribeNatGatewaySourceIpTranslationNatRules返回参数结构体
 * @class
 */
class DescribeNatGatewaySourceIpTranslationNatRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关SNAT规则对象数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SourceIpTranslationNatRule> || null}
         */
        this.SourceIpTranslationNatRuleSet = null;

        /**
         * 符合条件的NAT网关端口转发规则对象数目。
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

        if (params.SourceIpTranslationNatRuleSet) {
            this.SourceIpTranslationNatRuleSet = new Array();
            for (let z in params.SourceIpTranslationNatRuleSet) {
                let obj = new SourceIpTranslationNatRule();
                obj.deserialize(params.SourceIpTranslationNatRuleSet[z]);
                this.SourceIpTranslationNatRuleSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * 过滤条件，不支持同时指定VpcIds和Filters参数。
支持的过滤条件如下：
<li>vpc-name：VPC实例名称。</li>
<li>is-default ：是否默认VPC。</li>
<li>vpc-id ：VPC实例ID，例如：vpc-f49l6u0z。</li>
<li>cidr-block：VPC的CIDR。</li>
<li>tag-key ：按照标签键进行过滤，非必填参数。</li>
<li>tag:tag-key：按照标签键值对进行过滤，非必填参数。 其中 tag-key 请使用具体的标签键进行替换，可参考示例2。</li>
  **说明：**若同一个过滤条件（Filter）存在多个Values，则同一Filter下Values间的关系为逻辑或（OR）关系；若存在多个过滤条件（Filter），Filter之间的关系为逻辑与（AND）关系。
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
 * IP地理位置信息
 * @class
 */
class IpGeolocationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国家信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 省、州、郡一级行政区域信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 市一级行政区域信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.City = null;

        /**
         * 市内区域信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 接入运营商信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 骨干运营商名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AsName = null;

        /**
         * 骨干运营商AS号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AsId = null;

        /**
         * 注释信息。目前的填充值为移动接入用户的APN值，如无APN属性则为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * IP地址
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.AsName = 'AsName' in params ? params.AsName : null;
        this.AsId = 'AsId' in params ? params.AsId : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;

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
         * 流日志唯一ID
         * @type {string || null}
         */
        this.FlowLogId = null;

        /**
         * 私用网络ID或者统一ID，建议使用统一ID，删除云联网流日志时，可不填，其他流日志类型必填。
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
        this.FlowLogId = 'FlowLogId' in params ? params.FlowLogId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * 网络探测验证结果。
 * @class
 */
class NetDetectState extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络探测实例ID。形如：netd-12345678。
         * @type {string || null}
         */
        this.NetDetectId = null;

        /**
         * 网络探测目的IP验证结果对象数组。
         * @type {Array.<NetDetectIpState> || null}
         */
        this.NetDetectIpStateSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetDetectId = 'NetDetectId' in params ? params.NetDetectId : null;

        if (params.NetDetectIpStateSet) {
            this.NetDetectIpStateSet = new Array();
            for (let z in params.NetDetectIpStateSet) {
                let obj = new NetDetectIpState();
                obj.deserialize(params.NetDetectIpStateSet[z]);
                this.NetDetectIpStateSet.push(obj);
            }
        }

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
 * DisassociateVpcEndPointSecurityGroups请求参数结构体
 * @class
 */
class DisassociateVpcEndPointSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组ID数组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 终端节点ID。
         * @type {string || null}
         */
        this.EndPointId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.EndPointId = 'EndPointId' in params ? params.EndPointId : null;

    }
}

/**
 * DescribeTaskResult请求参数结构体
 * @class
 */
class DescribeTaskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID。TaskId和DealName必填一个参数
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 计费订单号。TaskId和DealName必填一个参数
         * @type {string || null}
         */
        this.DealName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DealName = 'DealName' in params ? params.DealName : null;

    }
}

/**
 * ModifyAddressInternetChargeType返回参数结构体
 * @class
 */
class ModifyAddressInternetChargeTypeResponse extends  AbstractModel {
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
 * DeleteVpcEndPointService返回参数结构体
 * @class
 */
class DeleteVpcEndPointServiceResponse extends  AbstractModel {
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
 * ModifyVpnGatewayRoutes请求参数结构体
 * @class
 */
class ModifyVpnGatewayRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vpn网关id
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * 路由修改参数
         * @type {Array.<VpnGatewayRouteModify> || null}
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
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new VpnGatewayRouteModify();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

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
 * DisassociateNatGatewayAddress返回参数结构体
 * @class
 */
class DisassociateNatGatewayAddressResponse extends  AbstractModel {
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
 * DeleteRoutes返回参数结构体
 * @class
 */
class DeleteRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已删除的路由策略详情。
         * @type {Array.<Route> || null}
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

        if (params.RouteSet) {
            this.RouteSet = new Array();
            for (let z in params.RouteSet) {
                let obj = new Route();
                obj.deserialize(params.RouteSet[z]);
                this.RouteSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCrossBorderCompliance请求参数结构体
 * @class
 */
class DescribeCrossBorderComplianceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （精确匹配）服务商，可选值：`UNICOM`。
         * @type {string || null}
         */
        this.ServiceProvider = null;

        /**
         * （精确匹配）合规化审批单`ID`。
         * @type {number || null}
         */
        this.ComplianceId = null;

        /**
         * （模糊查询）公司名称。
         * @type {string || null}
         */
        this.Company = null;

        /**
         * （精确匹配）统一社会信用代码。
         * @type {string || null}
         */
        this.UniformSocialCreditCode = null;

        /**
         * （模糊查询）法定代表人。
         * @type {string || null}
         */
        this.LegalPerson = null;

        /**
         * （模糊查询）发证机关。
         * @type {string || null}
         */
        this.IssuingAuthority = null;

        /**
         * （模糊查询）营业执照住所。
         * @type {string || null}
         */
        this.BusinessAddress = null;

        /**
         * （精确匹配）邮编。
         * @type {number || null}
         */
        this.PostCode = null;

        /**
         * （模糊查询）经办人。
         * @type {string || null}
         */
        this.Manager = null;

        /**
         * （精确查询）经办人身份证号。
         * @type {string || null}
         */
        this.ManagerId = null;

        /**
         * （模糊查询）经办人身份证地址。
         * @type {string || null}
         */
        this.ManagerAddress = null;

        /**
         * （精确匹配）经办人联系电话。
         * @type {string || null}
         */
        this.ManagerTelephone = null;

        /**
         * （精确匹配）电子邮箱。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * （精确匹配）服务开始日期，如：`2020-07-28`。
         * @type {string || null}
         */
        this.ServiceStartDate = null;

        /**
         * （精确匹配）服务结束日期，如：`2021-07-28`。
         * @type {string || null}
         */
        this.ServiceEndDate = null;

        /**
         * （精确匹配）状态。待审批：`PENDING`，通过：`APPROVED `，拒绝：`DENY`。
         * @type {string || null}
         */
        this.State = null;

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
        this.ServiceProvider = 'ServiceProvider' in params ? params.ServiceProvider : null;
        this.ComplianceId = 'ComplianceId' in params ? params.ComplianceId : null;
        this.Company = 'Company' in params ? params.Company : null;
        this.UniformSocialCreditCode = 'UniformSocialCreditCode' in params ? params.UniformSocialCreditCode : null;
        this.LegalPerson = 'LegalPerson' in params ? params.LegalPerson : null;
        this.IssuingAuthority = 'IssuingAuthority' in params ? params.IssuingAuthority : null;
        this.BusinessAddress = 'BusinessAddress' in params ? params.BusinessAddress : null;
        this.PostCode = 'PostCode' in params ? params.PostCode : null;
        this.Manager = 'Manager' in params ? params.Manager : null;
        this.ManagerId = 'ManagerId' in params ? params.ManagerId : null;
        this.ManagerAddress = 'ManagerAddress' in params ? params.ManagerAddress : null;
        this.ManagerTelephone = 'ManagerTelephone' in params ? params.ManagerTelephone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.ServiceStartDate = 'ServiceStartDate' in params ? params.ServiceStartDate : null;
        this.ServiceEndDate = 'ServiceEndDate' in params ? params.ServiceEndDate : null;
        this.State = 'State' in params ? params.State : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * ModifyAssistantCidr返回参数结构体
 * @class
 */
class ModifyAssistantCidrResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 辅助CIDR数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssistantCidr> || null}
         */
        this.AssistantCidrSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AssistantCidrSet) {
            this.AssistantCidrSet = new Array();
            for (let z in params.AssistantCidrSet) {
                let obj = new AssistantCidr();
                obj.deserialize(params.AssistantCidrSet[z]);
                this.AssistantCidrSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用于发布云联网的cidr信息
 * @class
 */
class CidrForCcn extends  AbstractModel {
    constructor(){
        super();

        /**
         * local cidr值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cidr = null;

        /**
         * 是否发布到了云联网。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.PublishedToVbc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cidr = 'Cidr' in params ? params.Cidr : null;
        this.PublishedToVbc = 'PublishedToVbc' in params ? params.PublishedToVbc : null;

    }
}

/**
 * NAT网关绑定的弹性IP
 * @class
 */
class NatGatewayAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性公网IP（EIP）的唯一 ID，形如：`eip-11112222`。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * 外网IP地址，形如：`123.121.34.33`。
         * @type {string || null}
         */
        this.PublicIpAddress = null;

        /**
         * 资源封堵状态。true表示弹性ip处于封堵状态，false表示弹性ip处于未封堵状态。
         * @type {boolean || null}
         */
        this.IsBlocked = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.IsBlocked = 'IsBlocked' in params ? params.IsBlocked : null;

    }
}

/**
 * DescribeVpcEndPointService返回参数结构体
 * @class
 */
class DescribeVpcEndPointServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端节点服务对象数组。
         * @type {Array.<EndPointService> || null}
         */
        this.EndPointServiceSet = null;

        /**
         * 符合查询条件的个数。
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

        if (params.EndPointServiceSet) {
            this.EndPointServiceSet = new Array();
            for (let z in params.EndPointServiceSet) {
                let obj = new EndPointService();
                obj.deserialize(params.EndPointServiceSet[z]);
                this.EndPointServiceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNetworkAclEntries返回参数结构体
 * @class
 */
class ModifyNetworkAclEntriesResponse extends  AbstractModel {
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
 * ModifyVpcEndPointAttribute返回参数结构体
 * @class
 */
class ModifyVpcEndPointAttributeResponse extends  AbstractModel {
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
 * DescribeTenantCcns请求参数结构体
 * @class
 */
class DescribeTenantCcnsRequest extends  AbstractModel {
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
 * DescribeIp6Addresses请求参数结构体
 * @class
 */
class DescribeIp6AddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标识 IPV6 的唯一 ID 列表。IPV6 唯一 ID 形如：`eip-11112222`。参数不支持同时指定`Ip6AddressIds`和`Filters`。
         * @type {Array.<string> || null}
         */
        this.Ip6AddressIds = null;

        /**
         * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AddressIds`和`Filters`。详细的过滤条件如下：
<li> address-ip - String - 是否必填：否 - （过滤条件）按照 EIP 的 IP 地址过滤。</li>
<li> network-interface-id - String - 是否必填：否 - （过滤条件）按照弹性网卡的唯一ID过滤。</li>
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
        this.Ip6AddressIds = 'Ip6AddressIds' in params ? params.Ip6AddressIds : null;

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
<li>security-group-id - String - （过滤条件）安全组ID。</li>
<li>project-id - Integer - （过滤条件）项目ID。</li>
<li>security-group-name - String - （过滤条件）安全组名称。</li>
<li>tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。使用请参考示例2。</li>
<li>tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例3。</li>
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
 * RefreshDirectConnectGatewayRouteToNatGateway请求参数结构体
 * @class
 */
class RefreshDirectConnectGatewayRouteToNatGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * vpc的ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * NAT网关ID
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * 是否是预刷新；True:是， False:否
         * @type {boolean || null}
         */
        this.DryRun = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * DescribeNatGatewayDestinationIpPortTranslationNatRules请求参数结构体
 * @class
 */
class DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关ID。
         * @type {Array.<string> || null}
         */
        this.NatGatewayIds = null;

        /**
         * 过滤条件:
参数不支持同时指定NatGatewayIds和Filters。
<li> nat-gateway-id，NAT网关的ID，如`nat-0yi4hekt`</li>
<li> vpc-id，私有网络VPC的ID，如`vpc-0yi4hekt`</li>
<li> public-ip-address， 弹性IP，如`139.199.232.238`。</li>
<li>public-port， 公网端口。</li>
<li>private-ip-address， 内网IP，如`10.0.0.1`。</li>
<li>private-port， 内网端口。</li>
<li>description，规则描述。</li>
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
        this.NatGatewayIds = 'NatGatewayIds' in params ? params.NatGatewayIds : null;

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
 * ModifyNetworkAclAttribute返回参数结构体
 * @class
 */
class ModifyNetworkAclAttributeResponse extends  AbstractModel {
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
 * CreateVpnGatewayRoutes请求参数结构体
 * @class
 */
class CreateVpnGatewayRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关的ID
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * VPN网关目的路由列表
         * @type {Array.<VpnGatewayRoute> || null}
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
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new VpnGatewayRoute();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * DisassociateNetworkAclSubnets返回参数结构体
 * @class
 */
class DisassociateNetworkAclSubnetsResponse extends  AbstractModel {
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

        /**
         * 是否恢复云联网地域出口/地域间带宽限速为默认值（1Gbps）。false表示不恢复；true表示恢复。恢复默认值后，限速实例将不在控制台展示。该参数默认为 false，不恢复。
         * @type {boolean || null}
         */
        this.SetDefaultLimitFlag = null;

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
        this.SetDefaultLimitFlag = 'SetDefaultLimitFlag' in params ? params.SetDefaultLimitFlag : null;

    }
}

/**
 * ModifyAddressInternetChargeType请求参数结构体
 * @class
 */
class ModifyAddressInternetChargeTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性公网IP的唯一ID，形如eip-xxx
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * 弹性公网IP调整目标计费模式，只支持"BANDWIDTH_PREPAID_BY_MONTH"和"TRAFFIC_POSTPAID_BY_HOUR"
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 弹性公网IP调整目标带宽值
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 包月带宽网络计费模式参数。弹性公网IP的调整目标计费模式是"BANDWIDTH_PREPAID_BY_MONTH"时，必传该参数。
         * @type {AddressChargePrepaid || null}
         */
        this.AddressChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

        if (params.AddressChargePrepaid) {
            let obj = new AddressChargePrepaid();
            obj.deserialize(params.AddressChargePrepaid)
            this.AddressChargePrepaid = obj;
        }

    }
}

/**
 * ModifyIp6AddressesBandwidth请求参数结构体
 * @class
 */
class ModifyIp6AddressesBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改的目标带宽，单位Mbps
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * IPV6地址。Ip6Addresses和Ip6AddressId必须且只能传一个
         * @type {Array.<string> || null}
         */
        this.Ip6Addresses = null;

        /**
         * IPV6地址对应的唯一ID，形如eip-xxxxxxxx。Ip6Addresses和Ip6AddressId必须且只能传一个
         * @type {Array.<string> || null}
         */
        this.Ip6AddressIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.Ip6Addresses = 'Ip6Addresses' in params ? params.Ip6Addresses : null;
        this.Ip6AddressIds = 'Ip6AddressIds' in params ? params.Ip6AddressIds : null;

    }
}

/**
 * DisableVpnGatewaySslClientCert返回参数结构体
 * @class
 */
class DisableVpnGatewaySslClientCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务实例ID。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLocalGateway请求参数结构体
 * @class
 */
class CreateLocalGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本地网关名称
         * @type {string || null}
         */
        this.LocalGatewayName = null;

        /**
         * VPC实例ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * CDC实例ID
         * @type {string || null}
         */
        this.CdcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocalGatewayName = 'LocalGatewayName' in params ? params.LocalGatewayName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CdcId = 'CdcId' in params ? params.CdcId : null;

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
 * CreateSecurityGroupWithPolicies返回参数结构体
 * @class
 */
class CreateSecurityGroupWithPoliciesResponse extends  AbstractModel {
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
 * ResetNatGatewayConnection请求参数结构体
 * @class
 */
class ResetNatGatewayConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关ID。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * NAT网关并发连接上限，形如：1000000、3000000、10000000。
         * @type {number || null}
         */
        this.MaxConcurrentConnection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.MaxConcurrentConnection = 'MaxConcurrentConnection' in params ? params.MaxConcurrentConnection : null;

    }
}

/**
 * ModifyCcnAttachedInstancesAttribute请求参数结构体
 * @class
 */
class ModifyCcnAttachedInstancesAttributeRequest extends  AbstractModel {
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
 * CreateNatGatewaySourceIpTranslationNatRule请求参数结构体
 * @class
 */
class CreateNatGatewaySourceIpTranslationNatRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关的ID，形如："nat-df45454"
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * NAT网关的SNAT转换规则
         * @type {Array.<SourceIpTranslationNatRule> || null}
         */
        this.SourceIpTranslationNatRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;

        if (params.SourceIpTranslationNatRules) {
            this.SourceIpTranslationNatRules = new Array();
            for (let z in params.SourceIpTranslationNatRules) {
                let obj = new SourceIpTranslationNatRule();
                obj.deserialize(params.SourceIpTranslationNatRules[z]);
                this.SourceIpTranslationNatRules.push(obj);
            }
        }

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

        /**
         * 标签键值对。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * 网卡类型。0 - 弹性网卡；1 - evm弹性网卡。
         * @type {number || null}
         */
        this.EniType = null;

        /**
         * 网卡绑定的子机类型：cvm，eks。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 网卡所关联的CDC实例ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CdcId = null;

        /**
         * 弹性网卡类型：0:标准型/1:扩展型。默认值为0。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AttachType = null;

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

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.EniType = 'EniType' in params ? params.EniType : null;
        this.Business = 'Business' in params ? params.Business : null;
        this.CdcId = 'CdcId' in params ? params.CdcId : null;
        this.AttachType = 'AttachType' in params ? params.AttachType : null;

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
 * 安全组被引用信息
 * @class
 */
class ReferredSecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 引用安全组实例ID（SecurityGroupId）的所有安全组实例ID。
         * @type {Array.<string> || null}
         */
        this.ReferredSecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.ReferredSecurityGroupIds = 'ReferredSecurityGroupIds' in params ? params.ReferredSecurityGroupIds : null;

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

        /**
         * 支持添加备注的地址信息，支持 IP、CIDR、IP 范围。
         * @type {Array.<AddressInfo> || null}
         */
        this.AddressesExtra = null;

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

        if (params.AddressesExtra) {
            this.AddressesExtra = new Array();
            for (let z in params.AddressesExtra) {
                let obj = new AddressInfo();
                obj.deserialize(params.AddressesExtra[z]);
                this.AddressesExtra.push(obj);
            }
        }

    }
}

/**
 * CreateNatGateway返回参数结构体
 * @class
 */
class CreateNatGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关对象数组。
         * @type {Array.<NatGateway> || null}
         */
        this.NatGatewaySet = null;

        /**
         * 符合条件的 NAT网关对象数量。
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

        if (params.NatGatewaySet) {
            this.NatGatewaySet = new Array();
            for (let z in params.NatGatewaySet) {
                let obj = new NatGateway();
                obj.deserialize(params.NatGatewaySet[z]);
                this.NatGatewaySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVpnGatewaySslClients请求参数结构体
 * @class
 */
class DescribeVpnGatewaySslClientsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，参数不支持同时指定SslVpnClientIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。</li>
<li>vpn-gateway-id - String - （过滤条件）VPN实例ID形如：vpngw-5aluhh9t。</li>
<li>ssl-vpn-server-id - String - （过滤条件）SSL-VPN-SERVER实例ID形如：vpngwSslServer-123456。</li>
<li>ssl-vpn-client-id - String - （过滤条件）SSL-VPN-CLIENT实例ID形如：vpngwSslClient-123456。</li>
<li>ssl-vpn-client-name - String - （过滤条件）SSL-VPN-CLIENT实例名称。</li>
         * @type {Array.<Filter> || null}
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

        /**
         * SSL-VPN-CLIENT实例ID。形如：vpngwSslClient-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定SslVpnClientIds和Filters。
         * @type {Array.<string> || null}
         */
        this.SslVpnClientIds = null;

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
        this.SslVpnClientIds = 'SslVpnClientIds' in params ? params.SslVpnClientIds : null;

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
 * DescribeVpnGatewaySslServers请求参数结构体
 * @class
 */
class DescribeVpnGatewaySslServersRequest extends  AbstractModel {
    constructor(){
        super();

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

        /**
         * SSL-VPN-SERVER实例ID。形如：vpngwSslServer-12345678。每次请求的实例的上限为100。参数不支持同时指定SslVpnServerIds和Filters。
         * @type {Array.<string> || null}
         */
        this.SslVpnServerIds = null;

        /**
         * 过滤条件，参数不支持同时指定SslVpnServerIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。</li>
<li>vpn-gateway-id - String - （过滤条件）VPN实例ID形如：vpngw-5aluhh9t。</li>
<li>vpn-gateway-name - String - （过滤条件）VPN实例名称。</li>
<li>ssl-vpn-server-name - String - （过滤条件）SSL-VPN-SERVER实例名称。</li>
<li>ssl-vpn-server-id - String - （过滤条件）SSL-VPN-SERVER实例ID形如：vpngwSslServer-123456。</li>
         * @type {Array.<FilterObject> || null}
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
        this.SslVpnServerIds = 'SslVpnServerIds' in params ? params.SslVpnServerIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new FilterObject();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * ModifyNetDetect请求参数结构体
 * @class
 */
class ModifyNetDetectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络探测实例`ID`。形如：`netd-12345678`
         * @type {string || null}
         */
        this.NetDetectId = null;

        /**
         * 网络探测名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.NetDetectName = null;

        /**
         * 探测目的IPv4地址数组，最多两个。
         * @type {Array.<string> || null}
         */
        this.DetectDestinationIp = null;

        /**
         * 下一跳类型，目前我们支持的类型有：
VPN：VPN网关；
DIRECTCONNECT：专线网关；
PEERCONNECTION：对等连接；
NAT：NAT网关；
NORMAL_CVM：普通云服务器；
CCN：云联网网关；
         * @type {string || null}
         */
        this.NextHopType = null;

        /**
         * 下一跳目的网关，取值与“下一跳类型”相关：
下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；
下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；
下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；
下一跳类型为NAT，取值Nat网关，形如：nat-12345678；
下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；
下一跳类型为CCN，取值云联网ID，形如：ccn-44csczop；
         * @type {string || null}
         */
        this.NextHopDestination = null;

        /**
         * 网络探测描述。
         * @type {string || null}
         */
        this.NetDetectDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetDetectId = 'NetDetectId' in params ? params.NetDetectId : null;
        this.NetDetectName = 'NetDetectName' in params ? params.NetDetectName : null;
        this.DetectDestinationIp = 'DetectDestinationIp' in params ? params.DetectDestinationIp : null;
        this.NextHopType = 'NextHopType' in params ? params.NextHopType : null;
        this.NextHopDestination = 'NextHopDestination' in params ? params.NextHopDestination : null;
        this.NetDetectDescription = 'NetDetectDescription' in params ? params.NetDetectDescription : null;

    }
}

/**
 * DescribeNetDetectStates返回参数结构体
 * @class
 */
class DescribeNetDetectStatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的网络探测验证结果对象数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NetDetectState> || null}
         */
        this.NetDetectStateSet = null;

        /**
         * 符合条件的网络探测验证结果对象数量。
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

        if (params.NetDetectStateSet) {
            this.NetDetectStateSet = new Array();
            for (let z in params.NetDetectStateSet) {
                let obj = new NetDetectState();
                obj.deserialize(params.NetDetectStateSet[z]);
                this.NetDetectStateSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteVpnGatewaySslServer请求参数结构体
 * @class
 */
class DeleteVpnGatewaySslServerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSL-VPN-SERVER 实例ID。
         * @type {string || null}
         */
        this.SslVpnServerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SslVpnServerId = 'SslVpnServerId' in params ? params.SslVpnServerId : null;

    }
}

/**
 * AllocateIp6AddressesBandwidth返回参数结构体
 * @class
 */
class AllocateIp6AddressesBandwidthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性公网 IPV6 的唯一 ID 列表。
         * @type {Array.<string> || null}
         */
        this.AddressSet = null;

        /**
         * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNetDetectStates请求参数结构体
 * @class
 */
class DescribeNetDetectStatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络探测实例`ID`数组。形如：[`netd-12345678`]
         * @type {Array.<string> || null}
         */
        this.NetDetectIds = null;

        /**
         * 过滤条件，参数不支持同时指定NetDetectIds和Filters。
<li>net-detect-id - String - （过滤条件）网络探测实例ID，形如：netd-12345678</li>
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
        this.NetDetectIds = 'NetDetectIds' in params ? params.NetDetectIds : null;

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
 * DescribeNatGateways返回参数结构体
 * @class
 */
class DescribeNatGatewaysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关对象数组。
         * @type {Array.<NatGateway> || null}
         */
        this.NatGatewaySet = null;

        /**
         * 符合条件的NAT网关对象个数。
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

        if (params.NatGatewaySet) {
            this.NatGatewaySet = new Array();
            for (let z in params.NatGatewaySet) {
                let obj = new NatGateway();
                obj.deserialize(params.NatGatewaySet[z]);
                this.NatGatewaySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeBandwidthPackages请求参数结构体
 * @class
 */
class DescribeBandwidthPackagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽包唯一ID列表
         * @type {Array.<string> || null}
         */
        this.BandwidthPackageIds = null;

        /**
         * 每次请求的`Filters`的上限为10。参数不支持同时指定`BandwidthPackageIds`和`Filters`。详细的过滤条件如下：
<li> bandwidth-package_id - String - 是否必填：否 - （过滤条件）按照带宽包的唯一标识ID过滤。</li>
<li> bandwidth-package-name - String - 是否必填：否 - （过滤条件）按照 带宽包名称过滤。不支持模糊过滤。</li>
<li> network-type - String - 是否必填：否 - （过滤条件）按照带宽包的类型过滤。类型包括'HIGH_QUALITY_BGP','BGP','SINGLEISP'和'ANYCAST'。</li>
<li> charge-type - String - 是否必填：否 - （过滤条件）按照带宽包的计费类型过滤。计费类型包括'TOP5_POSTPAID_BY_MONTH'和'PERCENT95_POSTPAID_BY_MONTH'。</li>
<li> resource.resource-type - String - 是否必填：否 - （过滤条件）按照带宽包资源类型过滤。资源类型包括'Address'和'LoadBalance'</li>
<li> resource.resource-id - String - 是否必填：否 - （过滤条件）按照带宽包资源Id过滤。资源Id形如'eip-xxxx','lb-xxxx'</li>
<li> resource.address-ip - String - 是否必填：否 - （过滤条件）按照带宽包资源Ip过滤。</li>
<li> tag-key - String - 是否必填：否 - （过滤条件）按照标签键进行过滤。</li>
<li> tag-value - String - 是否必填：否 - （过滤条件）按照标签值进行过滤。</li>
<li> tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。tag-key使用具体的标签键进行替换。</li>
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
 * DescribeAssistantCidr返回参数结构体
 * @class
 */
class DescribeAssistantCidrResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的辅助CIDR数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssistantCidr> || null}
         */
        this.AssistantCidrSet = null;

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

        if (params.AssistantCidrSet) {
            this.AssistantCidrSet = new Array();
            for (let z in params.AssistantCidrSet) {
                let obj = new AssistantCidr();
                obj.deserialize(params.AssistantCidrSet[z]);
                this.AssistantCidrSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * VPC实例ID。可通过[DescribeVpcs](https://cloud.tencent.com/document/product/215/15778)接口返回值中的VpcId获取。
CCN VPN 形的通道 可以不传VPCID
         * @type {string || null}
         */
        this.VpcId = null;

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

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 是否支持隧道内健康检查
         * @type {boolean || null}
         */
        this.EnableHealthCheck = null;

        /**
         * 健康检查本端地址
         * @type {string || null}
         */
        this.HealthCheckLocalIp = null;

        /**
         * 健康检查对端地址
         * @type {string || null}
         */
        this.HealthCheckRemoteIp = null;

        /**
         * 通道类型, 例如:["STATIC", "StaticRoute", "Policy"]
         * @type {string || null}
         */
        this.RouteType = null;

        /**
         * 协商类型，默认为active（主动协商）。可选值：active（主动协商），passive（被动协商），flowTrigger（流量协商）
         * @type {string || null}
         */
        this.NegotiationType = null;

        /**
         * DPD探测开关。默认为0，表示关闭DPD探测。可选值：0（关闭），1（开启）
         * @type {number || null}
         */
        this.DpdEnable = null;

        /**
         * DPD超时时间。即探测确认对端不存在需要的时间。dpdEnable为1（开启）时有效。默认30，单位为秒
         * @type {string || null}
         */
        this.DpdTimeout = null;

        /**
         * DPD超时后的动作。默认为clear。dpdEnable为1（开启）时有效。可取值为clear（断开）和restart（重试）
         * @type {string || null}
         */
        this.DpdAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.CustomerGatewayId = 'CustomerGatewayId' in params ? params.CustomerGatewayId : null;
        this.VpnConnectionName = 'VpnConnectionName' in params ? params.VpnConnectionName : null;
        this.PreShareKey = 'PreShareKey' in params ? params.PreShareKey : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.EnableHealthCheck = 'EnableHealthCheck' in params ? params.EnableHealthCheck : null;
        this.HealthCheckLocalIp = 'HealthCheckLocalIp' in params ? params.HealthCheckLocalIp : null;
        this.HealthCheckRemoteIp = 'HealthCheckRemoteIp' in params ? params.HealthCheckRemoteIp : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;
        this.NegotiationType = 'NegotiationType' in params ? params.NegotiationType : null;
        this.DpdEnable = 'DpdEnable' in params ? params.DpdEnable : null;
        this.DpdTimeout = 'DpdTimeout' in params ? params.DpdTimeout : null;
        this.DpdAction = 'DpdAction' in params ? params.DpdAction : null;

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

        /**
         * 路由的扩展状态
         * @type {string || null}
         */
        this.ExtraState = null;

        /**
         * 是否动态路由
         * @type {boolean || null}
         */
        this.IsBgp = null;

        /**
         * 路由优先级
         * @type {number || null}
         */
        this.RoutePriority = null;

        /**
         * 下一跳扩展名称（关联实例的扩展名称）
         * @type {string || null}
         */
        this.InstanceExtraName = null;

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
        this.ExtraState = 'ExtraState' in params ? params.ExtraState : null;
        this.IsBgp = 'IsBgp' in params ? params.IsBgp : null;
        this.RoutePriority = 'RoutePriority' in params ? params.RoutePriority : null;
        this.InstanceExtraName = 'InstanceExtraName' in params ? params.InstanceExtraName : null;

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

        /**
         * 是否支持健康状态探测
         * @type {boolean || null}
         */
        this.EnableHealthCheck = null;

        /**
         * 本端探测ip
         * @type {string || null}
         */
        this.HealthCheckLocalIp = null;

        /**
         * 对端探测ip
         * @type {string || null}
         */
        this.HealthCheckRemoteIp = null;

        /**
         * 通道健康检查状态，AVAILABLE：正常，UNAVAILABLE：不正常。 未配置健康检查不返回该对象
         * @type {string || null}
         */
        this.HealthCheckStatus = null;

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
        this.EnableHealthCheck = 'EnableHealthCheck' in params ? params.EnableHealthCheck : null;
        this.HealthCheckLocalIp = 'HealthCheckLocalIp' in params ? params.HealthCheckLocalIp : null;
        this.HealthCheckRemoteIp = 'HealthCheckRemoteIp' in params ? params.HealthCheckRemoteIp : null;
        this.HealthCheckStatus = 'HealthCheckStatus' in params ? params.HealthCheckStatus : null;

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
<li>tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。</li>
<li>tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例：查询绑定了标签的CCN列表。</li>
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

        /**
         * 排序字段。支持：`CcnId` `CcnName` `CreateTime` `State` `QosLevel`
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
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * ModifyNatGatewayAttribute返回参数结构体
 * @class
 */
class ModifyNatGatewayAttributeResponse extends  AbstractModel {
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
 * DescribeNetDetects请求参数结构体
 * @class
 */
class DescribeNetDetectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络探测实例`ID`数组。形如：[`netd-12345678`]
         * @type {Array.<string> || null}
         */
        this.NetDetectIds = null;

        /**
         * 过滤条件，参数不支持同时指定NetDetectIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-12345678</li>
<li>net-detect-id - String - （过滤条件）网络探测实例ID，形如：netd-12345678</li>
<li>subnet-id - String - （过滤条件）子网实例ID，形如：subnet-12345678</li>
<li>net-detect-name - String - （过滤条件）网络探测名称</li>
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
        this.NetDetectIds = 'NetDetectIds' in params ? params.NetDetectIds : null;

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
         * IP地址模板集合名称。
         * @type {string || null}
         */
        this.AddressTemplateGroupName = null;

        /**
         * IP地址模板实例ID，例如：ipm-mdunqeb6。
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
 * DescribeNatGatewayDirectConnectGatewayRoute请求参数结构体
 * @class
 */
class DescribeNatGatewayDirectConnectGatewayRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * nat的唯一标识
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * vpc的唯一标识
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 0到200之间
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 大于0
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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

        /**
         * 标签键值对
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * 辅助CIDR
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssistantCidr> || null}
         */
        this.AssistantCidrSet = null;

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

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

        if (params.AssistantCidrSet) {
            this.AssistantCidrSet = new Array();
            for (let z in params.AssistantCidrSet) {
                let obj = new AssistantCidr();
                obj.deserialize(params.AssistantCidrSet[z]);
                this.AssistantCidrSet.push(obj);
            }
        }

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
 * DescribeNatGatewayDestinationIpPortTranslationNatRules返回参数结构体
 * @class
 */
class DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关端口转发规则对象数组。
         * @type {Array.<NatGatewayDestinationIpPortTranslationNatRule> || null}
         */
        this.NatGatewayDestinationIpPortTranslationNatRuleSet = null;

        /**
         * 符合条件的NAT网关端口转发规则对象数目。
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

        if (params.NatGatewayDestinationIpPortTranslationNatRuleSet) {
            this.NatGatewayDestinationIpPortTranslationNatRuleSet = new Array();
            for (let z in params.NatGatewayDestinationIpPortTranslationNatRuleSet) {
                let obj = new NatGatewayDestinationIpPortTranslationNatRule();
                obj.deserialize(params.NatGatewayDestinationIpPortTranslationNatRuleSet[z]);
                this.NatGatewayDestinationIpPortTranslationNatRuleSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 流日志存储信息
 * @class
 */
class FlowLogStorage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储实例Id，当流日志存储类型为ckafka时，必填。
         * @type {string || null}
         */
        this.StorageId = null;

        /**
         * 主题Id，当流日志存储类型为ckafka时，必填。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StorageTopic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StorageId = 'StorageId' in params ? params.StorageId : null;
        this.StorageTopic = 'StorageTopic' in params ? params.StorageTopic : null;

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
 * ModifyCcnRegionBandwidthLimitsType请求参数结构体
 * @class
 */
class ModifyCcnRegionBandwidthLimitsTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云联网实例ID。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 云联网限速类型，INTER_REGION_LIMIT：地域间限速，OUTER_REGION_LIMIT：地域出口限速。
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
        this.BandwidthLimitType = 'BandwidthLimitType' in params ? params.BandwidthLimitType : null;

    }
}

/**
 * Vpn网关目的路由
 * @class
 */
class VpnGatewayRoute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目的端IDC网段
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * 下一跳类型（关联实例类型）可选值:"VPNCONN"(VPN通道), "CCN"(CCN实例)
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 下一跳实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 优先级, 可选值: 0, 100
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 启用状态, 可选值: "ENABLE"(启用), "DISABLE"(禁用)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 路由条目ID
         * @type {string || null}
         */
        this.RouteId = null;

        /**
         * 路由类型, 可选值: "VPC"(VPC路由), "CCN"(云联网传播路由), "Static"(静态路由), "BGP"(BGP路由)
         * @type {string || null}
         */
        this.Type = null;

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
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeVpcResourceDashboard请求参数结构体
 * @class
 */
class DescribeVpcResourceDashboardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vpc实例ID，例如：vpc-f1xjkw1b。
         * @type {Array.<string> || null}
         */
        this.VpcIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;

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
 * AssociateNetworkAclSubnets请求参数结构体
 * @class
 */
class AssociateNetworkAclSubnetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ACL实例ID。例如：acl-12345678。
         * @type {string || null}
         */
        this.NetworkAclId = null;

        /**
         * 子网实例ID数组。例如：[subnet-12345678]
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
        this.NetworkAclId = 'NetworkAclId' in params ? params.NetworkAclId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

    }
}

/**
 * CheckAssistantCidr请求参数结构体
 * @class
 */
class CheckAssistantCidrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`。形如：`vpc-6v2ht8q5`
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 待添加的负载CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]。入参NewCidrBlocks和OldCidrBlocks至少需要其一。
         * @type {Array.<string> || null}
         */
        this.NewCidrBlocks = null;

        /**
         * 待删除的负载CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]。入参NewCidrBlocks和OldCidrBlocks至少需要其一。
         * @type {Array.<string> || null}
         */
        this.OldCidrBlocks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.NewCidrBlocks = 'NewCidrBlocks' in params ? params.NewCidrBlocks : null;
        this.OldCidrBlocks = 'OldCidrBlocks' in params ? params.OldCidrBlocks : null;

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
         * 安全组规则索引号，值会随着安全组规则的变更动态变化。使用PolicyIndex时，请先调用`DescribeSecurityGroupPolicies`获取到规则的PolicyIndex，并且结合返回值中的Version一起使用处理规则。
         * @type {number || null}
         */
        this.PolicyIndex = null;

        /**
         * 协议, 取值: TCP,UDP,ICMP,ICMPv6,ALL。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口(all, 离散port,  range)。
说明：如果Protocol设置为ALL，则Port也需要设置为all。
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
         * 网段或IPv6(互斥)。
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

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

        /**
         * 安全组最近修改时间。
         * @type {string || null}
         */
        this.ModifyTime = null;

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
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.AddressTemplate) {
            let obj = new AddressTemplateSpecification();
            obj.deserialize(params.AddressTemplate)
            this.AddressTemplate = obj;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.PolicyDescription = 'PolicyDescription' in params ? params.PolicyDescription : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * NotifyRoutes请求参数结构体
 * @class
 */
class NotifyRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表唯一ID。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由策略唯一ID。
         * @type {Array.<string> || null}
         */
        this.RouteItemIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteItemIds = 'RouteItemIds' in params ? params.RouteItemIds : null;

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
 * 参数模板配额
 * @class
 */
class TemplateLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板IP地址成员配额。
         * @type {number || null}
         */
        this.AddressTemplateMemberLimit = null;

        /**
         * 参数模板IP地址组成员配额。
         * @type {number || null}
         */
        this.AddressTemplateGroupMemberLimit = null;

        /**
         * 参数模板I协议端口成员配额。
         * @type {number || null}
         */
        this.ServiceTemplateMemberLimit = null;

        /**
         * 参数模板协议端口组成员配额。
         * @type {number || null}
         */
        this.ServiceTemplateGroupMemberLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateMemberLimit = 'AddressTemplateMemberLimit' in params ? params.AddressTemplateMemberLimit : null;
        this.AddressTemplateGroupMemberLimit = 'AddressTemplateGroupMemberLimit' in params ? params.AddressTemplateGroupMemberLimit : null;
        this.ServiceTemplateMemberLimit = 'ServiceTemplateMemberLimit' in params ? params.ServiceTemplateMemberLimit : null;
        this.ServiceTemplateGroupMemberLimit = 'ServiceTemplateGroupMemberLimit' in params ? params.ServiceTemplateGroupMemberLimit : null;

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
 * DescribeGatewayFlowQos返回参数结构体
 * @class
 */
class DescribeGatewayFlowQosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例详细信息列表。
         * @type {Array.<GatewayQos> || null}
         */
        this.GatewayQosSet = null;

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

        if (params.GatewayQosSet) {
            this.GatewayQosSet = new Array();
            for (let z in params.GatewayQosSet) {
                let obj = new GatewayQos();
                obj.deserialize(params.GatewayQosSet[z]);
                this.GatewayQosSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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

        /**
         * 排序安全组标识，默认值为False。当SortPolicys为False时，不改变安全组规则排序；当SortPolicys为True时，系统将严格按照SecurityGroupPolicySet参数传入的安全组规则及顺序进行重置，考虑到人为输入参数可能存在遗漏风险，建议通过控制台对安全组规则进行排序。
         * @type {boolean || null}
         */
        this.SortPolicys = null;

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
        this.SortPolicys = 'SortPolicys' in params ? params.SortPolicys : null;

    }
}

/**
 * NAT网关对象。
 * @class
 */
class NatGateway extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关的ID。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * NAT网关的名称。
         * @type {string || null}
         */
        this.NatGatewayName = null;

        /**
         * NAT网关创建的时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * NAT网关的状态。
 'PENDING'：生产中，'DELETING'：删除中，'AVAILABLE'：运行中，'UPDATING'：升级中，
‘FAILED’：失败。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 网关最大外网出带宽(单位:Mbps)。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 网关并发连接上限。
         * @type {number || null}
         */
        this.MaxConcurrentConnection = null;

        /**
         * 绑定NAT网关的公网IP对象数组。
         * @type {Array.<NatGatewayAddress> || null}
         */
        this.PublicIpAddressSet = null;

        /**
         * NAT网关网络状态。“AVAILABLE”:运行中, “UNAVAILABLE”:不可用, “INSUFFICIENT”:欠费停服。
         * @type {string || null}
         */
        this.NetworkState = null;

        /**
         * NAT网关的端口转发规则。
         * @type {Array.<DestinationIpPortTranslationNatRule> || null}
         */
        this.DestinationIpPortTranslationNatRuleSet = null;

        /**
         * VPC实例ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * NAT网关所在的可用区。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 绑定的专线网关ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DirectConnectGatewayIds = null;

        /**
         * 所属子网ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 标签键值对。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * NAT网关绑定的安全组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupSet = null;

        /**
         * NAT网关的SNAT转发规则。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SourceIpTranslationNatRule> || null}
         */
        this.SourceIpTranslationNatRuleSet = null;

        /**
         * 是否独享型NAT。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsExclusive = null;

        /**
         * 独享型NAT所在的网关集群的带宽(单位:Mbps)，当IsExclusive为false时无此字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExclusiveGatewayBandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.NatGatewayName = 'NatGatewayName' in params ? params.NatGatewayName : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.State = 'State' in params ? params.State : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.MaxConcurrentConnection = 'MaxConcurrentConnection' in params ? params.MaxConcurrentConnection : null;

        if (params.PublicIpAddressSet) {
            this.PublicIpAddressSet = new Array();
            for (let z in params.PublicIpAddressSet) {
                let obj = new NatGatewayAddress();
                obj.deserialize(params.PublicIpAddressSet[z]);
                this.PublicIpAddressSet.push(obj);
            }
        }
        this.NetworkState = 'NetworkState' in params ? params.NetworkState : null;

        if (params.DestinationIpPortTranslationNatRuleSet) {
            this.DestinationIpPortTranslationNatRuleSet = new Array();
            for (let z in params.DestinationIpPortTranslationNatRuleSet) {
                let obj = new DestinationIpPortTranslationNatRule();
                obj.deserialize(params.DestinationIpPortTranslationNatRuleSet[z]);
                this.DestinationIpPortTranslationNatRuleSet.push(obj);
            }
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DirectConnectGatewayIds = 'DirectConnectGatewayIds' in params ? params.DirectConnectGatewayIds : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.SecurityGroupSet = 'SecurityGroupSet' in params ? params.SecurityGroupSet : null;

        if (params.SourceIpTranslationNatRuleSet) {
            this.SourceIpTranslationNatRuleSet = new Array();
            for (let z in params.SourceIpTranslationNatRuleSet) {
                let obj = new SourceIpTranslationNatRule();
                obj.deserialize(params.SourceIpTranslationNatRuleSet[z]);
                this.SourceIpTranslationNatRuleSet.push(obj);
            }
        }
        this.IsExclusive = 'IsExclusive' in params ? params.IsExclusive : null;
        this.ExclusiveGatewayBandwidth = 'ExclusiveGatewayBandwidth' in params ? params.ExclusiveGatewayBandwidth : null;

    }
}

/**
 * AssociateDhcpIpWithAddressIp请求参数结构体
 * @class
 */
class AssociateDhcpIpWithAddressIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `DhcpIp`唯一`ID`，形如：`dhcpip-9o233uri`。必须是没有绑定`EIP`的`DhcpIp`
         * @type {string || null}
         */
        this.DhcpIpId = null;

        /**
         * 弹性公网`IP`。必须是没有绑定`DhcpIp`的`EIP`
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
        this.DhcpIpId = 'DhcpIpId' in params ? params.DhcpIpId : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;

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
 * WithdrawNotifyRoutes请求参数结构体
 * @class
 */
class WithdrawNotifyRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表唯一ID。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由策略唯一ID。
         * @type {Array.<string> || null}
         */
        this.RouteItemIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteItemIds = 'RouteItemIds' in params ? params.RouteItemIds : null;

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
 * 网络ACL规则集合
 * @class
 */
class NetworkAclEntrySet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 入站规则。
         * @type {Array.<NetworkAclEntry> || null}
         */
        this.Ingress = null;

        /**
         * 出站规则。
         * @type {Array.<NetworkAclEntry> || null}
         */
        this.Egress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Ingress) {
            this.Ingress = new Array();
            for (let z in params.Ingress) {
                let obj = new NetworkAclEntry();
                obj.deserialize(params.Ingress[z]);
                this.Ingress.push(obj);
            }
        }

        if (params.Egress) {
            this.Egress = new Array();
            for (let z in params.Egress) {
                let obj = new NetworkAclEntry();
                obj.deserialize(params.Egress[z]);
                this.Egress.push(obj);
            }
        }

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
 * DescribeVpnGatewaySslClients返回参数结构体
 * @class
 */
class DescribeVpnGatewaySslClientsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合条件的实例个数。
         * @type {Array.<SslVpnClient> || null}
         */
        this.SslVpnClientSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.SslVpnClientSet) {
            this.SslVpnClientSet = new Array();
            for (let z in params.SslVpnClientSet) {
                let obj = new SslVpnClient();
                obj.deserialize(params.SslVpnClientSet[z]);
                this.SslVpnClientSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBandwidthPackageResources请求参数结构体
 * @class
 */
class DescribeBandwidthPackageResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标识 共享带宽包 的唯一 ID 列表。共享带宽包 唯一 ID 形如：`bwp-11112222`。
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AddressIds`和`Filters`。详细的过滤条件如下：
<li> resource-id - String - 是否必填：否 - （过滤条件）按照 共享带宽包内资源 的唯一 ID 过滤。共享带宽包内资源 唯一 ID 形如：eip-11112222。</li>
<li> resource-type - String - 是否必填：否 - （过滤条件）按照 共享带宽包内资源 类型过滤，目前仅支持 弹性IP 和 负载均衡 两种类型，可选值为 Address 和 LoadBalance。</li>
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
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;

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
 * DescribeSecurityGroupLimits返回参数结构体
 * @class
 */
class DescribeSecurityGroupLimitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户安全组配额限制。
         * @type {SecurityGroupLimitSet || null}
         */
        this.SecurityGroupLimitSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityGroupLimitSet) {
            let obj = new SecurityGroupLimitSet();
            obj.deserialize(params.SecurityGroupLimitSet)
            this.SecurityGroupLimitSet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 云联网路由发布模式，可选值：`standard`（标准模式）、`exquisite`（精细模式）。只有云联网类型专线网关才支持修改`ModeType`。
         * @type {string || null}
         */
        this.ModeType = null;

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
        this.ModeType = 'ModeType' in params ? params.ModeType : null;

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
 * CreateVpnGatewaySslServer返回参数结构体
 * @class
 */
class CreateVpnGatewaySslServerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建SSL-VPN server 异步任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * SSL-VPN server 唯一ID
         * @type {string || null}
         */
        this.SslVpnServerId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SslVpnServerId = 'SslVpnServerId' in params ? params.SslVpnServerId : null;
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
 * DeleteNetworkAcl请求参数结构体
 * @class
 */
class DeleteNetworkAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ACL实例ID。例如：acl-12345678。
         * @type {string || null}
         */
        this.NetworkAclId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkAclId = 'NetworkAclId' in params ? params.NetworkAclId : null;

    }
}

/**
 * NAT网关的端口转发规则
 * @class
 */
class NatGatewayDestinationIpPortTranslationNatRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络协议，可选值：`TCP`、`UDP`。
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 弹性IP。
         * @type {string || null}
         */
        this.PublicIpAddress = null;

        /**
         * 公网端口。
         * @type {number || null}
         */
        this.PublicPort = null;

        /**
         * 内网地址。
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * 内网端口。
         * @type {number || null}
         */
        this.PrivatePort = null;

        /**
         * NAT网关转发规则描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * NAT网关的ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * 私有网络VPC的ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * NAT网关转发规则创建时间。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.PublicPort = 'PublicPort' in params ? params.PublicPort : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.PrivatePort = 'PrivatePort' in params ? params.PrivatePort : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * CloneSecurityGroup返回参数结构体
 * @class
 */
class CloneSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组对象。
注意：此字段可能返回 null，表示取不到有效值。
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
 * ModifyDhcpIpAttribute请求参数结构体
 * @class
 */
class ModifyDhcpIpAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `DhcpIp`唯一`ID`，形如：`dhcpip-9o233uri`。
         * @type {string || null}
         */
        this.DhcpIpId = null;

        /**
         * `DhcpIp`名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.DhcpIpName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DhcpIpId = 'DhcpIpId' in params ? params.DhcpIpId : null;
        this.DhcpIpName = 'DhcpIpName' in params ? params.DhcpIpName : null;

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
 * IP地址模板
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
         * 指定的`IPv6`地址列表，单次最多指定10个。与入参`Ipv6AddressCount`合并计算配额。与Ipv6AddressCount必填一个。
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6Addresses = null;

        /**
         * 自动分配`IPv6`地址个数，内网IP地址个数总和不能超过配数。与入参`Ipv6Addresses`合并计算配额。与Ipv6Addresses必填一个。
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
 * 网络探测对象。
 * @class
 */
class NetDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`。形如：`vpc-12345678`
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * `VPC`实例名称。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 子网实例ID。形如：subnet-12345678。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 子网实例名称。
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 网络探测实例ID。形如：netd-12345678。
         * @type {string || null}
         */
        this.NetDetectId = null;

        /**
         * 网络探测名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.NetDetectName = null;

        /**
         * 探测目的IPv4地址数组，最多两个。
         * @type {Array.<string> || null}
         */
        this.DetectDestinationIp = null;

        /**
         * 系统自动分配的探测源IPv4数组。长度为2。
         * @type {Array.<string> || null}
         */
        this.DetectSourceIp = null;

        /**
         * 下一跳类型，目前我们支持的类型有：
VPN：VPN网关；
DIRECTCONNECT：专线网关；
PEERCONNECTION：对等连接；
NAT：NAT网关；
NORMAL_CVM：普通云服务器；
CCN：云联网网关；
         * @type {string || null}
         */
        this.NextHopType = null;

        /**
         * 下一跳目的网关，取值与“下一跳类型”相关：
下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；
下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；
下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；
下一跳类型为NAT，取值Nat网关，形如：nat-12345678；
下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；
下一跳类型为CCN，取值云联网网关，形如：ccn-12345678；
         * @type {string || null}
         */
        this.NextHopDestination = null;

        /**
         * 下一跳网关名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextHopName = null;

        /**
         * 网络探测描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NetDetectDescription = null;

        /**
         * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.NetDetectId = 'NetDetectId' in params ? params.NetDetectId : null;
        this.NetDetectName = 'NetDetectName' in params ? params.NetDetectName : null;
        this.DetectDestinationIp = 'DetectDestinationIp' in params ? params.DetectDestinationIp : null;
        this.DetectSourceIp = 'DetectSourceIp' in params ? params.DetectSourceIp : null;
        this.NextHopType = 'NextHopType' in params ? params.NextHopType : null;
        this.NextHopDestination = 'NextHopDestination' in params ? params.NextHopDestination : null;
        this.NextHopName = 'NextHopName' in params ? params.NextHopName : null;
        this.NetDetectDescription = 'NetDetectDescription' in params ? params.NetDetectDescription : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 修改VPN状态参数
 * @class
 */
class VpnGatewayRouteModify extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vpn网关路由ID
         * @type {string || null}
         */
        this.RouteId = null;

        /**
         * Vpn网关状态, ENABEL 启用, DISABLE禁用
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
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 模板对象成员信息
 * @class
 */
class MemberInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板对象成员
         * @type {string || null}
         */
        this.Member = null;

        /**
         * 模板对象成员描述信息
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Member = 'Member' in params ? params.Member : null;
        this.Description = 'Description' in params ? params.Description : null;

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

        /**
         * 旧的安全组规则集合对象，可选，日志记录用。
         * @type {SecurityGroupPolicySet || null}
         */
        this.OriginalSecurityGroupPolicySet = null;

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

        if (params.OriginalSecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.OriginalSecurityGroupPolicySet)
            this.OriginalSecurityGroupPolicySet = obj;
        }

    }
}

/**
 * ModifyVpcEndPointServiceAttribute返回参数结构体
 * @class
 */
class ModifyVpcEndPointServiceAttributeResponse extends  AbstractModel {
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
 * VPC资源看板（各资源个数）
 * @class
 */
class ResourceDashboard extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vpc实例ID，例如：vpc-bq4bzxpj。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网实例ID，例如：subnet-bthucmmy。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 基础网络互通。
         * @type {number || null}
         */
        this.Classiclink = null;

        /**
         * 专线网关。
         * @type {number || null}
         */
        this.Dcg = null;

        /**
         * 对等连接。
         * @type {number || null}
         */
        this.Pcx = null;

        /**
         * 统计当前除云服务器 IP、弹性网卡IP和网络探测IP以外的所有已使用的IP总数。云服务器 IP、弹性网卡IP和网络探测IP单独计数。
         * @type {number || null}
         */
        this.Ip = null;

        /**
         * NAT网关。
         * @type {number || null}
         */
        this.Nat = null;

        /**
         * VPN网关。
         * @type {number || null}
         */
        this.Vpngw = null;

        /**
         * 流日志。
         * @type {number || null}
         */
        this.FlowLog = null;

        /**
         * 网络探测。
         * @type {number || null}
         */
        this.NetworkDetect = null;

        /**
         * 网络ACL。
         * @type {number || null}
         */
        this.NetworkACL = null;

        /**
         * 云主机。
         * @type {number || null}
         */
        this.CVM = null;

        /**
         * 负载均衡。
         * @type {number || null}
         */
        this.LB = null;

        /**
         * 关系型数据库。
         * @type {number || null}
         */
        this.CDB = null;

        /**
         * 云数据库 TencentDB for Memcached。
         * @type {number || null}
         */
        this.Cmem = null;

        /**
         * 时序数据库。
         * @type {number || null}
         */
        this.CTSDB = null;

        /**
         * 数据库 TencentDB for MariaDB（TDSQL）。
         * @type {number || null}
         */
        this.MariaDB = null;

        /**
         * 数据库 TencentDB for SQL Server。
         * @type {number || null}
         */
        this.SQLServer = null;

        /**
         * 云数据库 TencentDB for PostgreSQL。
         * @type {number || null}
         */
        this.Postgres = null;

        /**
         * 网络附加存储。
         * @type {number || null}
         */
        this.NAS = null;

        /**
         * Snova云数据仓库。
         * @type {number || null}
         */
        this.Greenplumn = null;

        /**
         * 消息队列 CKAFKA。
         * @type {number || null}
         */
        this.Ckafka = null;

        /**
         * Grocery。
         * @type {number || null}
         */
        this.Grocery = null;

        /**
         * 数据加密服务。
         * @type {number || null}
         */
        this.HSM = null;

        /**
         * 游戏存储 Tcaplus。
         * @type {number || null}
         */
        this.Tcaplus = null;

        /**
         * Cnas。
         * @type {number || null}
         */
        this.Cnas = null;

        /**
         * HTAP 数据库 TiDB。
         * @type {number || null}
         */
        this.TiDB = null;

        /**
         * EMR 集群。
         * @type {number || null}
         */
        this.Emr = null;

        /**
         * SEAL。
         * @type {number || null}
         */
        this.SEAL = null;

        /**
         * 文件存储 CFS。
         * @type {number || null}
         */
        this.CFS = null;

        /**
         * Oracle。
         * @type {number || null}
         */
        this.Oracle = null;

        /**
         * ElasticSearch服务。
         * @type {number || null}
         */
        this.ElasticSearch = null;

        /**
         * 区块链服务。
         * @type {number || null}
         */
        this.TBaaS = null;

        /**
         * Itop。
         * @type {number || null}
         */
        this.Itop = null;

        /**
         * 云数据库审计。
         * @type {number || null}
         */
        this.DBAudit = null;

        /**
         * 企业级云数据库 CynosDB for Postgres。
         * @type {number || null}
         */
        this.CynosDBPostgres = null;

        /**
         * 数据库 TencentDB for Redis。
         * @type {number || null}
         */
        this.Redis = null;

        /**
         * 数据库 TencentDB for MongoDB。
         * @type {number || null}
         */
        this.MongoDB = null;

        /**
         * 分布式数据库 TencentDB for TDSQL。
         * @type {number || null}
         */
        this.DCDB = null;

        /**
         * 企业级云数据库 CynosDB for MySQL。
         * @type {number || null}
         */
        this.CynosDBMySQL = null;

        /**
         * 子网。
         * @type {number || null}
         */
        this.Subnet = null;

        /**
         * 路由表。
         * @type {number || null}
         */
        this.RouteTable = null;

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
        this.Classiclink = 'Classiclink' in params ? params.Classiclink : null;
        this.Dcg = 'Dcg' in params ? params.Dcg : null;
        this.Pcx = 'Pcx' in params ? params.Pcx : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Nat = 'Nat' in params ? params.Nat : null;
        this.Vpngw = 'Vpngw' in params ? params.Vpngw : null;
        this.FlowLog = 'FlowLog' in params ? params.FlowLog : null;
        this.NetworkDetect = 'NetworkDetect' in params ? params.NetworkDetect : null;
        this.NetworkACL = 'NetworkACL' in params ? params.NetworkACL : null;
        this.CVM = 'CVM' in params ? params.CVM : null;
        this.LB = 'LB' in params ? params.LB : null;
        this.CDB = 'CDB' in params ? params.CDB : null;
        this.Cmem = 'Cmem' in params ? params.Cmem : null;
        this.CTSDB = 'CTSDB' in params ? params.CTSDB : null;
        this.MariaDB = 'MariaDB' in params ? params.MariaDB : null;
        this.SQLServer = 'SQLServer' in params ? params.SQLServer : null;
        this.Postgres = 'Postgres' in params ? params.Postgres : null;
        this.NAS = 'NAS' in params ? params.NAS : null;
        this.Greenplumn = 'Greenplumn' in params ? params.Greenplumn : null;
        this.Ckafka = 'Ckafka' in params ? params.Ckafka : null;
        this.Grocery = 'Grocery' in params ? params.Grocery : null;
        this.HSM = 'HSM' in params ? params.HSM : null;
        this.Tcaplus = 'Tcaplus' in params ? params.Tcaplus : null;
        this.Cnas = 'Cnas' in params ? params.Cnas : null;
        this.TiDB = 'TiDB' in params ? params.TiDB : null;
        this.Emr = 'Emr' in params ? params.Emr : null;
        this.SEAL = 'SEAL' in params ? params.SEAL : null;
        this.CFS = 'CFS' in params ? params.CFS : null;
        this.Oracle = 'Oracle' in params ? params.Oracle : null;
        this.ElasticSearch = 'ElasticSearch' in params ? params.ElasticSearch : null;
        this.TBaaS = 'TBaaS' in params ? params.TBaaS : null;
        this.Itop = 'Itop' in params ? params.Itop : null;
        this.DBAudit = 'DBAudit' in params ? params.DBAudit : null;
        this.CynosDBPostgres = 'CynosDBPostgres' in params ? params.CynosDBPostgres : null;
        this.Redis = 'Redis' in params ? params.Redis : null;
        this.MongoDB = 'MongoDB' in params ? params.MongoDB : null;
        this.DCDB = 'DCDB' in params ? params.DCDB : null;
        this.CynosDBMySQL = 'CynosDBMySQL' in params ? params.CynosDBMySQL : null;
        this.Subnet = 'Subnet' in params ? params.Subnet : null;
        this.RouteTable = 'RouteTable' in params ? params.RouteTable : null;

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
 * CreateVpnGatewayRoutes返回参数结构体
 * @class
 */
class CreateVpnGatewayRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关目的路由
         * @type {Array.<VpnGatewayRoute> || null}
         */
        this.Routes = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new VpnGatewayRoute();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNetDetect请求参数结构体
 * @class
 */
class CreateNetDetectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`。形如：`vpc-12345678`
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网实例ID。形如：subnet-12345678。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 网络探测名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.NetDetectName = null;

        /**
         * 探测目的IPv4地址数组。最多两个。
         * @type {Array.<string> || null}
         */
        this.DetectDestinationIp = null;

        /**
         * 下一跳类型，目前我们支持的类型有：
VPN：VPN网关；
DIRECTCONNECT：专线网关；
PEERCONNECTION：对等连接；
NAT：NAT网关；
NORMAL_CVM：普通云服务器；
CCN：云联网网关；
         * @type {string || null}
         */
        this.NextHopType = null;

        /**
         * 下一跳目的网关，取值与“下一跳类型”相关：
下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；
下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；
下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；
下一跳类型为NAT，取值Nat网关，形如：nat-12345678；
下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；
下一跳类型为CCN，取值云联网ID，形如：ccn-12345678；
         * @type {string || null}
         */
        this.NextHopDestination = null;

        /**
         * 网络探测描述。
         * @type {string || null}
         */
        this.NetDetectDescription = null;

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
        this.NetDetectName = 'NetDetectName' in params ? params.NetDetectName : null;
        this.DetectDestinationIp = 'DetectDestinationIp' in params ? params.DetectDestinationIp : null;
        this.NextHopType = 'NextHopType' in params ? params.NextHopType : null;
        this.NextHopDestination = 'NextHopDestination' in params ? params.NextHopDestination : null;
        this.NetDetectDescription = 'NetDetectDescription' in params ? params.NetDetectDescription : null;

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
 * CreateNatGatewayDestinationIpPortTranslationNatRule返回参数结构体
 * @class
 */
class CreateNatGatewayDestinationIpPortTranslationNatRuleResponse extends  AbstractModel {
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
 * CreateVpnGatewaySslClient返回参数结构体
 * @class
 */
class CreateVpnGatewaySslClientResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * SSL-VPN client 唯一ID
         * @type {string || null}
         */
        this.SslVpnClientId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SslVpnClientId = 'SslVpnClientId' in params ? params.SslVpnClientId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNetworkInterfaceLimit请求参数结构体
 * @class
 */
class DescribeNetworkInterfaceLimitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询的CVM实例ID或弹性网卡ID
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
 * CreateBandwidthPackage请求参数结构体
 * @class
 */
class CreateBandwidthPackageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽包类型, 默认值: BGP, 可选值:
<li>BGP: 普通BGP共享带宽包</li>
<li>HIGH_QUALITY_BGP: 精品BGP共享带宽包</li>
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 带宽包计费类型, 默认为: TOP5_POSTPAID_BY_MONTH, 可选值:
<li>TOP5_POSTPAID_BY_MONTH: 按月后付费TOP5计费</li>
<li>PERCENT95_POSTPAID_BY_MONTH: 按月后付费月95计费</li>
<li>FIXED_PREPAID_BY_MONTH: 包月预付费计费</li>
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 带宽包名称。
         * @type {string || null}
         */
        this.BandwidthPackageName = null;

        /**
         * 带宽包数量(传统账户类型只能填1), 标准账户类型取值范围为1~20。
         * @type {number || null}
         */
        this.BandwidthPackageCount = null;

        /**
         * 带宽包限速大小。单位：Mbps，-1表示不限速。该功能当前内测中，暂不对外开放。
         * @type {number || null}
         */
        this.InternetMaxBandwidth = null;

        /**
         * 需要关联的标签列表。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 带宽包协议类型。当前支持'ipv4'和'ipv6'协议带宽包，默认值是'ipv4'。
         * @type {string || null}
         */
        this.Protocol = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * DescribeIp6Addresses返回参数结构体
 * @class
 */
class DescribeIp6AddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的 IPV6 数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * IPV6 详细信息列表。
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
 * 网络探测目的IP的验证结果。
 * @class
 */
class NetDetectIpState extends  AbstractModel {
    constructor(){
        super();

        /**
         * 探测目的IPv4地址。
         * @type {string || null}
         */
        this.DetectDestinationIp = null;

        /**
         * 探测结果。
0：成功；
-1：查询不到路由丢包；
-2：外出ACL丢包；
-3：IN ACL丢包；
-4：其他错误；
         * @type {number || null}
         */
        this.State = null;

        /**
         * 时延，单位毫秒
         * @type {number || null}
         */
        this.Delay = null;

        /**
         * 丢包率
         * @type {number || null}
         */
        this.PacketLossRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectDestinationIp = 'DetectDestinationIp' in params ? params.DetectDestinationIp : null;
        this.State = 'State' in params ? params.State : null;
        this.Delay = 'Delay' in params ? params.Delay : null;
        this.PacketLossRate = 'PacketLossRate' in params ? params.PacketLossRate : null;

    }
}

/**
 * ModifyIp6AddressesBandwidth返回参数结构体
 * @class
 */
class ModifyIp6AddressesBandwidthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 指定绑定的标签列表，注意这里的标签集合为列表中所有子网对象所共享，不能为每个子网对象单独指定标签，例如：[{"Key": "city", "Value": "shanghai"}]
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 需要增加到的CDC实例ID。
         * @type {string || null}
         */
        this.CdcId = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.CdcId = 'CdcId' in params ? params.CdcId : null;

    }
}

/**
 * DescribeVpcEndPointService请求参数结构体
 * @class
 */
class DescribeVpcEndPointServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li> service-id- String - （过滤条件）终端节点服务唯一ID。</li>
<li>service-name - String - （过滤条件）终端节点实例名称。</li>
<li>service-instance-id - String - （过滤条件）后端服务的唯一ID，比如lb-xxx。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单页返回数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 终端节点服务ID。
         * @type {Array.<string> || null}
         */
        this.EndPointServiceIds = null;

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
        this.EndPointServiceIds = 'EndPointServiceIds' in params ? params.EndPointServiceIds : null;

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

        /**
         * 支持添加备注的协议端口信息，支持单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。
         * @type {Array.<ServicesInfo> || null}
         */
        this.ServicesExtra = null;

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

        if (params.ServicesExtra) {
            this.ServicesExtra = new Array();
            for (let z in params.ServicesExtra) {
                let obj = new ServicesInfo();
                obj.deserialize(params.ServicesExtra[z]);
                this.ServicesExtra.push(obj);
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
         * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCcnAttachedInstancesAttribute返回参数结构体
 * @class
 */
class ModifyCcnAttachedInstancesAttributeResponse extends  AbstractModel {
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
 * CreateNetworkAcl请求参数结构体
 * @class
 */
class CreateNetworkAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 网络ACL名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.NetworkAclName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.NetworkAclName = 'NetworkAclName' in params ? params.NetworkAclName : null;

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
         * 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：`eip-11112222`。参数不支持同时指定`AddressIds`和`Filters.address-id`。
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

        /**
         * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。详细的过滤条件如下：
<li> address-id - String - 是否必填：否 - （过滤条件）按照 EIP 的唯一 ID 过滤。EIP 唯一 ID 形如：eip-11112222。</li>
<li> address-name - String - 是否必填：否 - （过滤条件）按照 EIP 名称过滤。不支持模糊过滤。</li>
<li> address-ip - String - 是否必填：否 - （过滤条件）按照 EIP 的 IP 地址过滤。</li>
<li> address-status - String - 是否必填：否 - （过滤条件）按照 EIP 的状态过滤。状态包含：'CREATING'，'BINDING'，'BIND'，'UNBINDING'，'UNBIND'，'OFFLINING'，'BIND_ENI'。</li>
<li> instance-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的实例 ID 过滤。实例 ID 形如：ins-11112222。</li>
<li> private-ip-address - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的内网 IP 过滤。</li>
<li> network-interface-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的弹性网卡 ID 过滤。弹性网卡 ID 形如：eni-11112222。</li>
<li> is-arrears - String - 是否必填：否 - （过滤条件）按照 EIP 是否欠费进行过滤。（TRUE：EIP 处于欠费状态|FALSE：EIP 费用状态正常）</li>
<li> address-type - String - 是否必填：否 - （过滤条件）按照 IP类型 进行过滤。可选值：'WanIP', 'EIP'，'AnycastEIP'，'HighQualityEIP'。默认值是'EIP'。</li>
<li> address-isp - String - 是否必填：否 - （过滤条件）按照 运营商类型 进行过滤。可选值：'BGP'，'CMCC'，'CUCC', 'CTCC'</li>
<li> dedicated-cluster-id - String - 是否必填：否 - （过滤条件）按照 CDC 的唯一 ID 过滤。CDC 唯一 ID 形如：cluster-11112222。</li>
<li> tag-key - String - 是否必填：否 - （过滤条件）按照标签键进行过滤。</li>
<li> tag-value - String - 是否必填：否 - （过滤条件）按照标签值进行过滤。</li>
<li> tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。tag-key使用具体的标签键进行替换。</li>
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

        /**
         * 过滤条件,不支持同时指定SecurityGroupId和Filters参数。
<li>security-group-id - String - 安全组ID。</li>
<li>ip - String - IP，支持IPV4和IPV6模糊匹配。</li>
<li>address-module - String - IP地址模板或IP地址组模板ID。</li>
<li>service-module - String - 协议端口模板或协议端口组模板ID。</li>
<li>protocol-type - String - 安全组策略支持的协议，可选值：`TCP`, `UDP`, `ICMP`, `ICMPV6`, `GRE`, `ALL`。</li>
<li>port - String - 是否必填：否 -协议端口，支持模糊匹配，值为`ALL`时，查询所有的端口。</li>
<li>poly - String - 协议策略，可选值：`ALL`，所有策略；`ACCEPT`，允许；`DROP`，拒绝。</li>
<li>direction - String - 协议规则，可选值：`ALL`，所有策略；`INBOUND`，入站规则；`OUTBOUND`，出站规则。</li>
<li>description - String - 协议描述，该过滤条件支持模糊匹配。</li>
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
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

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
 * DisassociateNetworkInterfaceSecurityGroups返回参数结构体
 * @class
 */
class DisassociateNetworkInterfaceSecurityGroupsResponse extends  AbstractModel {
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
 * DescribeNetworkInterfaceLimit返回参数结构体
 * @class
 */
class DescribeNetworkInterfaceLimitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标准型弹性网卡配额
         * @type {number || null}
         */
        this.EniQuantity = null;

        /**
         * 每个标准型弹性网卡可以分配的IP配额
         * @type {number || null}
         */
        this.EniPrivateIpAddressQuantity = null;

        /**
         * 扩展型网卡配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExtendEniQuantity = null;

        /**
         * 每个扩展型弹性网卡可以分配的IP配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExtendEniPrivateIpAddressQuantity = null;

        /**
         * 中继网卡配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SubEniQuantity = null;

        /**
         * 每个中继网卡可以分配的IP配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SubEniPrivateIpAddressQuantity = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EniQuantity = 'EniQuantity' in params ? params.EniQuantity : null;
        this.EniPrivateIpAddressQuantity = 'EniPrivateIpAddressQuantity' in params ? params.EniPrivateIpAddressQuantity : null;
        this.ExtendEniQuantity = 'ExtendEniQuantity' in params ? params.ExtendEniQuantity : null;
        this.ExtendEniPrivateIpAddressQuantity = 'ExtendEniPrivateIpAddressQuantity' in params ? params.ExtendEniPrivateIpAddressQuantity : null;
        this.SubEniQuantity = 'SubEniQuantity' in params ? params.SubEniQuantity : null;
        this.SubEniPrivateIpAddressQuantity = 'SubEniPrivateIpAddressQuantity' in params ? params.SubEniPrivateIpAddressQuantity : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 计费模式，PREPAID：表示预付费，即包年包月，POSTPAID：表示后付费，即按量计费。默认：POSTPAID。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 限速类型，OUTER_REGION_LIMIT表示地域出口限速，INTER_REGION_LIMIT为地域间限速，默认为OUTER_REGION_LIMIT。预付费模式仅支持地域间限速，后付费模式支持地域间限速和地域出口限速。
         * @type {string || null}
         */
        this.BandwidthLimitType = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.BandwidthLimitType = 'BandwidthLimitType' in params ? params.BandwidthLimitType : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DeleteTemplateMember返回参数结构体
 * @class
 */
class DeleteTemplateMemberResponse extends  AbstractModel {
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
 * ModifyNatGatewaySourceIpTranslationNatRule请求参数结构体
 * @class
 */
class ModifyNatGatewaySourceIpTranslationNatRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关的ID，形如：`nat-df453454`。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * NAT网关的SNAT转换规则。
         * @type {SourceIpTranslationNatRule || null}
         */
        this.SourceIpTranslationNatRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;

        if (params.SourceIpTranslationNatRule) {
            let obj = new SourceIpTranslationNatRule();
            obj.deserialize(params.SourceIpTranslationNatRule)
            this.SourceIpTranslationNatRule = obj;
        }

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
 * DescribeIpGeolocationDatabaseUrl请求参数结构体
 * @class
 */
class DescribeIpGeolocationDatabaseUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地理位置库协议类型，目前仅支持"ipv4"。
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeVpcEndPoint返回参数结构体
 * @class
 */
class DescribeVpcEndPointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端节点对象。
         * @type {Array.<EndPoint> || null}
         */
        this.EndPointSet = null;

        /**
         * 符合查询条件的终端节点个数。
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

        if (params.EndPointSet) {
            this.EndPointSet = new Array();
            for (let z in params.EndPointSet) {
                let obj = new EndPoint();
                obj.deserialize(params.EndPointSet[z]);
                this.EndPointSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableGatewayFlowMonitor请求参数结构体
 * @class
 */
class DisableGatewayFlowMonitorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关实例ID，目前我们支持的网关实例类型有，
专线网关实例ID，形如，`dcg-ltjahce6`；
Nat网关实例ID，形如，`nat-ltjahce6`；
VPN网关实例ID，形如，`vpn-ltjahce6`。
         * @type {string || null}
         */
        this.GatewayId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;

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
 * 网络ACL规则。
 * @class
 */
class NetworkAclEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改时间。
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 协议, 取值: TCP,UDP, ICMP, ALL。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口(all, 单个port,  range)。当Protocol为ALL或ICMP时，不能指定Port。
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 网段或IP(互斥)。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 网段或IPv6(互斥)。
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

        /**
         * ACCEPT 或 DROP。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 规则描述，最大长度100。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeDhcpIps请求参数结构体
 * @class
 */
class DescribeDhcpIpsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * DhcpIp实例ID。形如：dhcpip-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定DhcpIpIds和Filters。
         * @type {Array.<string> || null}
         */
        this.DhcpIpIds = null;

        /**
         * 过滤条件，参数不支持同时指定DhcpIpIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。</li>
<li>dhcpip-id - String - （过滤条件）DhcpIp实例ID，形如：dhcpip-pxir56ns。</li>
<li>dhcpip-name - String - （过滤条件）DhcpIp实例名称。</li>
<li>address-ip - String - （过滤条件）DhcpIp实例的IP，根据IP精确查找。</li>
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
        this.DhcpIpIds = 'DhcpIpIds' in params ? params.DhcpIpIds : null;

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
 * DescribeAssistantCidr请求参数结构体
 * @class
 */
class DescribeAssistantCidrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`数组。形如：[`vpc-6v2ht8q5`]
         * @type {Array.<string> || null}
         */
        this.VpcIds = null;

        /**
         * 过滤条件，参数不支持同时指定VpcIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
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
 * ModifyAddressesBandwidth请求参数结构体
 * @class
 */
class ModifyAddressesBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EIP唯一标识ID列表，形如'eip-xxxx'
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

        /**
         * 调整带宽目标值
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 包月带宽起始时间(已废弃，输入无效)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 包月带宽结束时间(已废弃，输入无效)
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
 * 终端节点详情。
 * @class
 */
class EndPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端节点ID。
         * @type {string || null}
         */
        this.EndPointId = null;

        /**
         * VPCID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * APPID。
         * @type {string || null}
         */
        this.EndPointOwner = null;

        /**
         * 终端节点名称。
         * @type {string || null}
         */
        this.EndPointName = null;

        /**
         * 终端节点服务的VPCID。
         * @type {string || null}
         */
        this.ServiceVpcId = null;

        /**
         * 终端节点服务的VIP。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * 终端节点服务的ID。
         * @type {string || null}
         */
        this.EndPointServiceId = null;

        /**
         * 终端节点的VIP。
         * @type {string || null}
         */
        this.EndPointVip = null;

        /**
         * 终端节点状态，ACTIVE：可用，PENDING：待接受，ACCEPTING：接受中，REJECTED：已拒绝，FAILED：失败。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 终端节点绑定的安全组实例ID列表。
         * @type {Array.<string> || null}
         */
        this.GroupSet = null;

        /**
         * 终端节点服务名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndPointId = 'EndPointId' in params ? params.EndPointId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EndPointOwner = 'EndPointOwner' in params ? params.EndPointOwner : null;
        this.EndPointName = 'EndPointName' in params ? params.EndPointName : null;
        this.ServiceVpcId = 'ServiceVpcId' in params ? params.ServiceVpcId : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.EndPointServiceId = 'EndPointServiceId' in params ? params.EndPointServiceId : null;
        this.EndPointVip = 'EndPointVip' in params ? params.EndPointVip : null;
        this.State = 'State' in params ? params.State : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.GroupSet = 'GroupSet' in params ? params.GroupSet : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

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

        /**
         * 开启和关闭BGP的community属性。
         * @type {boolean || null}
         */
        this.EnableBGPCommunity = null;

        /**
         * 绑定的NAT网关ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * 专线网关是否支持VXLAN架构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<boolean> || null}
         */
        this.VXLANSupport = null;

        /**
         * 云联网路由发布模式：`standard`（标准模式）、`exquisite`（精细模式）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModeType = null;

        /**
         * 是否为localZone专线网关。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.LocalZone = null;

        /**
         * 专线网关所在可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 网关流控明细启用状态：
0：关闭
1：开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EnableFlowDetails = null;

        /**
         * 开启、关闭网关流控明细时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowDetailsUpdateTime = null;

        /**
         * 是否支持开启网关流控明细
0：不支持
1：支持
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NewAfc = null;

        /**
         * 专线网关接入网络类型：
<li>`VXLAN` - VXLAN类型。</li>
<li>`MPLS` - MPLS类型。</li>
<li>`Hybrid` - Hybrid类型。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccessNetworkType = null;

        /**
         * 跨可用区容灾专线网关的可用区列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.HaZoneList = null;

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
        this.EnableBGPCommunity = 'EnableBGPCommunity' in params ? params.EnableBGPCommunity : null;
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.VXLANSupport = 'VXLANSupport' in params ? params.VXLANSupport : null;
        this.ModeType = 'ModeType' in params ? params.ModeType : null;
        this.LocalZone = 'LocalZone' in params ? params.LocalZone : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.EnableFlowDetails = 'EnableFlowDetails' in params ? params.EnableFlowDetails : null;
        this.FlowDetailsUpdateTime = 'FlowDetailsUpdateTime' in params ? params.FlowDetailsUpdateTime : null;
        this.NewAfc = 'NewAfc' in params ? params.NewAfc : null;
        this.AccessNetworkType = 'AccessNetworkType' in params ? params.AccessNetworkType : null;
        this.HaZoneList = 'HaZoneList' in params ? params.HaZoneList : null;

    }
}

/**
 * DescribeProductQuota返回参数结构体
 * @class
 */
class DescribeProductQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ProductQuota对象数组
         * @type {Array.<ProductQuota> || null}
         */
        this.ProductQuotaSet = null;

        /**
         * 符合条件的产品类型个数
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

        if (params.ProductQuotaSet) {
            this.ProductQuotaSet = new Array();
            for (let z in params.ProductQuotaSet) {
                let obj = new ProductQuota();
                obj.deserialize(params.ProductQuotaSet[z]);
                this.ProductQuotaSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DisableFlowLogs返回参数结构体
 * @class
 */
class DisableFlowLogsResponse extends  AbstractModel {
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
 * DescribeBandwidthPackageResources返回参数结构体
 * @class
 */
class DescribeBandwidthPackageResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的 共享带宽包内资源 数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 共享带宽包内资源 详细信息列表。
         * @type {Array.<Resource> || null}
         */
        this.ResourceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ResourceSet) {
            this.ResourceSet = new Array();
            for (let z in params.ResourceSet) {
                let obj = new Resource();
                obj.deserialize(params.ResourceSet[z]);
                this.ResourceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCrossBorderCompliance返回参数结构体
 * @class
 */
class DescribeCrossBorderComplianceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合规化审批单列表。
         * @type {Array.<CrossBorderCompliance> || null}
         */
        this.CrossBorderComplianceSet = null;

        /**
         * 合规化审批单总数。
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

        if (params.CrossBorderComplianceSet) {
            this.CrossBorderComplianceSet = new Array();
            for (let z in params.CrossBorderComplianceSet) {
                let obj = new CrossBorderCompliance();
                obj.deserialize(params.CrossBorderComplianceSet[z]);
                this.CrossBorderComplianceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * AssociateDirectConnectGatewayNatGateway返回参数结构体
 * @class
 */
class AssociateDirectConnectGatewayNatGatewayResponse extends  AbstractModel {
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
 * 终端节点服务对象。
 * @class
 */
class EndPointService extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端节点服务ID
         * @type {string || null}
         */
        this.EndPointServiceId = null;

        /**
         * VPCID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * APPID。
         * @type {string || null}
         */
        this.ServiceOwner = null;

        /**
         * 终端节点服务名称。
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * 后端服务的VIP。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * 后端服务的ID，比如lb-xxx。
         * @type {string || null}
         */
        this.ServiceInstanceId = null;

        /**
         * 是否自动接受。
         * @type {boolean || null}
         */
        this.AutoAcceptFlag = null;

        /**
         * 关联的终端节点个数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndPointCount = null;

        /**
         * 终端节点对象数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EndPoint> || null}
         */
        this.EndPointSet = null;

        /**
         * 创建时间。
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
        this.EndPointServiceId = 'EndPointServiceId' in params ? params.EndPointServiceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ServiceOwner = 'ServiceOwner' in params ? params.ServiceOwner : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.ServiceInstanceId = 'ServiceInstanceId' in params ? params.ServiceInstanceId : null;
        this.AutoAcceptFlag = 'AutoAcceptFlag' in params ? params.AutoAcceptFlag : null;
        this.EndPointCount = 'EndPointCount' in params ? params.EndPointCount : null;

        if (params.EndPointSet) {
            this.EndPointSet = new Array();
            for (let z in params.EndPointSet) {
                let obj = new EndPoint();
                obj.deserialize(params.EndPointSet[z]);
                this.EndPointSet.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeVpcResourceDashboard返回参数结构体
 * @class
 */
class DescribeVpcResourceDashboardResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源对象列表。
         * @type {Array.<ResourceDashboard> || null}
         */
        this.ResourceDashboardSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResourceDashboardSet) {
            this.ResourceDashboardSet = new Array();
            for (let z in params.ResourceDashboardSet) {
                let obj = new ResourceDashboard();
                obj.deserialize(params.ResourceDashboardSet[z]);
                this.ResourceDashboardSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVpnGatewayCcnRoutes请求参数结构体
 * @class
 */
class DescribeVpnGatewayCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关实例ID
         * @type {string || null}
         */
        this.VpnGatewayId = null;

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
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DisassociateDirectConnectGatewayNatGateway返回参数结构体
 * @class
 */
class DisassociateDirectConnectGatewayNatGatewayResponse extends  AbstractModel {
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
 * EnableVpnGatewaySslClientCert请求参数结构体
 * @class
 */
class EnableVpnGatewaySslClientCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSL-VPN-CLIENT 实例ID。
         * @type {string || null}
         */
        this.SslVpnClientId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SslVpnClientId = 'SslVpnClientId' in params ? params.SslVpnClientId : null;

    }
}

/**
 * DescribeVpnGatewayCcnRoutes返回参数结构体
 * @class
 */
class DescribeVpnGatewayCcnRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云联网路由（IDC网段）列表。
         * @type {Array.<VpngwCcnRoutes> || null}
         */
        this.RouteSet = null;

        /**
         * 符合条件的对象数。
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

        if (params.RouteSet) {
            this.RouteSet = new Array();
            for (let z in params.RouteSet) {
                let obj = new VpngwCcnRoutes();
                obj.deserialize(params.RouteSet[z]);
                this.RouteSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
 * ModifyVpcEndPointServiceWhiteList请求参数结构体
 * @class
 */
class ModifyVpcEndPointServiceWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户UIN。
         * @type {string || null}
         */
        this.UserUin = null;

        /**
         * 终端节点服务ID。
         * @type {string || null}
         */
        this.EndPointServiceId = null;

        /**
         * 白名单描述信息。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserUin = 'UserUin' in params ? params.UserUin : null;
        this.EndPointServiceId = 'EndPointServiceId' in params ? params.EndPointServiceId : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeTenantCcns返回参数结构体
 * @class
 */
class DescribeTenantCcnsResponse extends  AbstractModel {
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
 * CreateNatGatewaySourceIpTranslationNatRule返回参数结构体
 * @class
 */
class CreateNatGatewaySourceIpTranslationNatRuleResponse extends  AbstractModel {
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
 * DeleteNatGatewaySourceIpTranslationNatRule返回参数结构体
 * @class
 */
class DeleteNatGatewaySourceIpTranslationNatRuleResponse extends  AbstractModel {
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

        /**
         * 关联实例所属的大地域，如: CHINA_MAINLAND
         * @type {string || null}
         */
        this.InstanceArea = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 路由表ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由表名称
注意：此字段可能返回 null，表示取不到有效值。
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
        this.InstanceArea = 'InstanceArea' in params ? params.InstanceArea : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

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
 * CreateVpcEndPointService请求参数结构体
 * @class
 */
class CreateVpcEndPointServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 终端节点服务名称。
         * @type {string || null}
         */
        this.EndPointServiceName = null;

        /**
         * 是否自动接受。
         * @type {boolean || null}
         */
        this.AutoAcceptFlag = null;

        /**
         * 后端服务ID，比如lb-xxx。
         * @type {string || null}
         */
        this.ServiceInstanceId = null;

        /**
         * 是否是PassService类型。
         * @type {boolean || null}
         */
        this.IsPassService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.EndPointServiceName = 'EndPointServiceName' in params ? params.EndPointServiceName : null;
        this.AutoAcceptFlag = 'AutoAcceptFlag' in params ? params.AutoAcceptFlag : null;
        this.ServiceInstanceId = 'ServiceInstanceId' in params ? params.ServiceInstanceId : null;
        this.IsPassService = 'IsPassService' in params ? params.IsPassService : null;

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

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 网卡trunking模式设置，Enable-开启，Disable--关闭，默认关闭。
         * @type {string || null}
         */
        this.TrunkingFlag = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TrunkingFlag = 'TrunkingFlag' in params ? params.TrunkingFlag : null;

    }
}

/**
 * 后付费共享带宽包的当前计费用量
 * @class
 */
class BandwidthPackageBillBandwidth extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前计费用量，单位为 Mbps
         * @type {number || null}
         */
        this.BandwidthUsage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BandwidthUsage = 'BandwidthUsage' in params ? params.BandwidthUsage : null;

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
 * 云主机实例信息。
 * @class
 */
class CvmInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网实例ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 云主机实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 云主机名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 云主机状态。
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * 实例的CPU核数，单位：核。
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 实例内存容量，单位：GB。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 实例机型。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例弹性网卡配额（包含主网卡）。
         * @type {number || null}
         */
        this.EniLimit = null;

        /**
         * 实例弹性网卡内网IP配额（包含主网卡）。
         * @type {number || null}
         */
        this.EniIpLimit = null;

        /**
         * 实例已绑定弹性网卡的个数（包含主网卡）。
         * @type {number || null}
         */
        this.InstanceEniCount = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.EniLimit = 'EniLimit' in params ? params.EniLimit : null;
        this.EniIpLimit = 'EniIpLimit' in params ? params.EniIpLimit : null;
        this.InstanceEniCount = 'InstanceEniCount' in params ? params.InstanceEniCount : null;

    }
}

/**
 * DescribeNetworkAcls请求参数结构体
 * @class
 */
class DescribeNetworkAclsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，参数不支持同时指定NetworkAclIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-12345678。</li>
<li>network-acl-id - String - （过滤条件）网络ACL实例ID，形如：acl-12345678。</li>
<li>network-acl-name - String - （过滤条件）网络ACL实例名称。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 网络ACL实例ID数组。形如：[acl-12345678]。每次请求的实例的上限为100。参数不支持同时指定NetworkAclIds和Filters。
         * @type {Array.<string> || null}
         */
        this.NetworkAclIds = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最小值为1，最大值为100。
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
        this.NetworkAclIds = 'NetworkAclIds' in params ? params.NetworkAclIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
<li>tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。</li>
<li>tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2。</li>
<li>cdc-id - String - 是否必填：否 - （过滤条件）按照cdc信息进行过滤。过滤出来制定cdc下的子网。</li>
<li>is-cdc-subnet - String - 是否必填：否 - （过滤条件）按照是否是cdc子网进行过滤。取值：“0”-非cdc子网，“1”--cdc子网</li>
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

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * CDC实例ID。
         * @type {string || null}
         */
        this.CdcId = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.CdcId = 'CdcId' in params ? params.CdcId : null;

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

        /**
         * IP地址模板实例。
         * @type {Array.<AddressTemplateItem> || null}
         */
        this.AddressTemplateSet = null;

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

        if (params.AddressTemplateSet) {
            this.AddressTemplateSet = new Array();
            for (let z in params.AddressTemplateSet) {
                let obj = new AddressTemplateItem();
                obj.deserialize(params.AddressTemplateSet[z]);
                this.AddressTemplateSet.push(obj);
            }
        }

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
         * 待删除带宽包唯一ID
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

        /**
         * 使用havip的业务标识。
         * @type {string || null}
         */
        this.Business = null;

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
        this.Business = 'Business' in params ? params.Business : null;

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
         * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 本地网关信息
 * @class
 */
class LocalGateway extends  AbstractModel {
    constructor(){
        super();

        /**
         * CDC实例ID
         * @type {string || null}
         */
        this.CdcId = null;

        /**
         * VPC实例ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 本地网关实例ID
         * @type {string || null}
         */
        this.UniqLocalGwId = null;

        /**
         * 本地网关名称
         * @type {string || null}
         */
        this.LocalGatewayName = null;

        /**
         * 本地网关IP地址
         * @type {string || null}
         */
        this.LocalGwIp = null;

        /**
         * 本地网关创建时间
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
        this.CdcId = 'CdcId' in params ? params.CdcId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.UniqLocalGwId = 'UniqLocalGwId' in params ? params.UniqLocalGwId : null;
        this.LocalGatewayName = 'LocalGatewayName' in params ? params.LocalGatewayName : null;
        this.LocalGwIp = 'LocalGwIp' in params ? params.LocalGwIp : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

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
 * RenewAddresses返回参数结构体
 * @class
 */
class RenewAddressesResponse extends  AbstractModel {
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
<li>route-table-id - String -（过滤条件）路由表ID列表，形如ccntr-1234edfr，可以根据路由表ID 过滤。</li>
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
 * ModifyDhcpIpAttribute返回参数结构体
 * @class
 */
class ModifyDhcpIpAttributeResponse extends  AbstractModel {
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
 * CreateAndAttachNetworkInterface请求参数结构体
 * @class
 */
class CreateAndAttachNetworkInterfaceRequest extends  AbstractModel {
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
         * 云服务器实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

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

        /**
         * 指定绑定的安全组，例如：['sg-1dd51d']。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 弹性网卡描述，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.NetworkInterfaceDescription = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 绑定类型：0 标准型 1 扩展型。
         * @type {number || null}
         */
        this.AttachType = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }
        this.SecondaryPrivateIpAddressCount = 'SecondaryPrivateIpAddressCount' in params ? params.SecondaryPrivateIpAddressCount : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.NetworkInterfaceDescription = 'NetworkInterfaceDescription' in params ? params.NetworkInterfaceDescription : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AttachType = 'AttachType' in params ? params.AttachType : null;

    }
}

/**
 * DeleteVpcEndPoint返回参数结构体
 * @class
 */
class DeleteVpcEndPointResponse extends  AbstractModel {
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
 * DeleteDhcpIp返回参数结构体
 * @class
 */
class DeleteDhcpIpResponse extends  AbstractModel {
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
 * SSL-VPN-SERVER 信息 SET
 * @class
 */
class SslVpnSever extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID.
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * SSL-VPN-SERVER 实例ID。
         * @type {string || null}
         */
        this.SslVpnServerId = null;

        /**
         * VPN 实例ID。
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * SSL-VPN-SERVER name。
         * @type {string || null}
         */
        this.SslVpnServerName = null;

        /**
         * 本端地址段。
         * @type {Array.<string> || null}
         */
        this.LocalAddress = null;

        /**
         * 客户端地址段。
         * @type {string || null}
         */
        this.RemoteAddress = null;

        /**
         * 客户端最大连接数。
         * @type {number || null}
         */
        this.MaxConnection = null;

        /**
         * SSL-VPN 网关公网IP。
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * SSL VPN服务端监听协议
         * @type {string || null}
         */
        this.SslVpnProtocol = null;

        /**
         * SSL VPN服务端监听协议端口
         * @type {number || null}
         */
        this.SslVpnPort = null;

        /**
         * 加密算法。
         * @type {string || null}
         */
        this.EncryptAlgorithm = null;

        /**
         * 认证算法。
         * @type {string || null}
         */
        this.IntegrityAlgorithm = null;

        /**
         * 是否支持压缩。
         * @type {number || null}
         */
        this.Compress = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * SSL-VPN-SERVER 创建状态。
0 创建中
1 创建出错
2 更新中
3 更新出错
4 销毁中
5 销毁出粗
6 已连通
7 未知
         * @type {number || null}
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SslVpnServerId = 'SslVpnServerId' in params ? params.SslVpnServerId : null;
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.SslVpnServerName = 'SslVpnServerName' in params ? params.SslVpnServerName : null;
        this.LocalAddress = 'LocalAddress' in params ? params.LocalAddress : null;
        this.RemoteAddress = 'RemoteAddress' in params ? params.RemoteAddress : null;
        this.MaxConnection = 'MaxConnection' in params ? params.MaxConnection : null;
        this.WanIp = 'WanIp' in params ? params.WanIp : null;
        this.SslVpnProtocol = 'SslVpnProtocol' in params ? params.SslVpnProtocol : null;
        this.SslVpnPort = 'SslVpnPort' in params ? params.SslVpnPort : null;
        this.EncryptAlgorithm = 'EncryptAlgorithm' in params ? params.EncryptAlgorithm : null;
        this.IntegrityAlgorithm = 'IntegrityAlgorithm' in params ? params.IntegrityAlgorithm : null;
        this.Compress = 'Compress' in params ? params.Compress : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * DownloadVpnGatewaySslClientCert返回参数结构体
 * @class
 */
class DownloadVpnGatewaySslClientCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSL-VPN-CLIENT 证书配置
         * @type {string || null}
         */
        this.SslClientConfigsSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SslClientConfigsSet = 'SslClientConfigsSet' in params ? params.SslClientConfigsSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteNetDetect返回参数结构体
 * @class
 */
class DeleteNetDetectResponse extends  AbstractModel {
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
 * AllocateAddresses请求参数结构体
 * @class
 */
class AllocateAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EIP数量。默认值：1。
         * @type {number || null}
         */
        this.AddressCount = null;

        /**
         * EIP线路类型。默认值：BGP。
<ul style="margin:0"><li>已开通静态单线IP白名单的用户，可选值：<ul><li>CMCC：中国移动</li>
<li>CTCC：中国电信</li>
<li>CUCC：中国联通</li></ul>注意：仅部分地域支持静态单线IP。</li></ul>
         * @type {string || null}
         */
        this.InternetServiceProvider = null;

        /**
         * EIP计费方式。
<ul style="margin:0"><li>已开通标准账户类型白名单的用户，可选值：<ul><li>BANDWIDTH_PACKAGE：[共享带宽包](https://cloud.tencent.com/document/product/684/15255)付费（需额外开通共享带宽包白名单）</li>
<li>BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费</li>
<li>BANDWIDTH_PREPAID_BY_MONTH：包月按带宽预付费</li>
<li>TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费</li></ul>默认值：TRAFFIC_POSTPAID_BY_HOUR。</li>
<li>未开通标准账户类型白名单的用户，EIP计费方式与其绑定的实例的计费方式一致，无需传递此参数。</li></ul>
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * EIP出带宽上限，单位：Mbps。
<ul style="margin:0"><li>已开通标准账户类型白名单的用户，可选值范围取决于EIP计费方式：<ul><li>BANDWIDTH_PACKAGE：1 Mbps 至 1000 Mbps</li>
<li>BANDWIDTH_POSTPAID_BY_HOUR：1 Mbps 至 100 Mbps</li>
<li>BANDWIDTH_PREPAID_BY_MONTH：1 Mbps 至 200 Mbps</li>
<li>TRAFFIC_POSTPAID_BY_HOUR：1 Mbps 至 100 Mbps</li></ul>默认值：1 Mbps。</li>
<li>未开通标准账户类型白名单的用户，EIP出带宽上限取决于与其绑定的实例的公网出带宽上限，无需传递此参数。</li></ul>
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 包月按带宽预付费EIP的计费参数。EIP为包月按带宽预付费时，该参数必传，其余场景不需传递
         * @type {AddressChargePrepaid || null}
         */
        this.AddressChargePrepaid = null;

        /**
         * EIP类型。默认值：EIP。
<ul style="margin:0"><li>已开通Anycast公网加速白名单的用户，可选值：<ul><li>AnycastEIP：加速IP，可参见 [Anycast 公网加速](https://cloud.tencent.com/document/product/644)</li></ul>注意：仅部分地域支持加速IP。</li></ul>
<ul style="margin:0"><li>已开通精品IP白名单的用户，可选值：<ul><li>HighQualityEIP：精品IP</li></ul>注意：仅部分地域支持精品IP。</li></ul>
         * @type {string || null}
         */
        this.AddressType = null;

        /**
         * Anycast发布域。
<ul style="margin:0"><li>已开通Anycast公网加速白名单的用户，可选值：<ul><li>ANYCAST_ZONE_GLOBAL：全球发布域（需要额外开通Anycast全球加速白名单）</li><li>ANYCAST_ZONE_OVERSEAS：境外发布域</li><li><b>[已废弃]</b> ANYCAST_ZONE_A：发布域A（已更新为全球发布域）</li><li><b>[已废弃]</b> ANYCAST_ZONE_B：发布域B（已更新为全球发布域）</li></ul>默认值：ANYCAST_ZONE_OVERSEAS。</li></ul>
         * @type {string || null}
         */
        this.AnycastZone = null;

        /**
         * <b>[已废弃]</b> AnycastEIP不再区分是否负载均衡。原参数说明如下：
AnycastEIP是否用于绑定负载均衡。
<ul style="margin:0"><li>已开通Anycast公网加速白名单的用户，可选值：<ul><li>TRUE：AnycastEIP可绑定对象为负载均衡</li>
<li>FALSE：AnycastEIP可绑定对象为云服务器、NAT网关、高可用虚拟IP等</li></ul>默认值：FALSE。</li></ul>
         * @type {boolean || null}
         */
        this.ApplicableForCLB = null;

        /**
         * 需要关联的标签列表。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * BGP带宽包唯一ID参数。设定该参数且InternetChargeType为BANDWIDTH_PACKAGE，则表示创建的EIP加入该BGP带宽包并采用带宽包计费
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * EIP名称，用于申请EIP时用户自定义该EIP的个性化名称，默认值：未命名
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
        this.AddressCount = 'AddressCount' in params ? params.AddressCount : null;
        this.InternetServiceProvider = 'InternetServiceProvider' in params ? params.InternetServiceProvider : null;
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

        if (params.AddressChargePrepaid) {
            let obj = new AddressChargePrepaid();
            obj.deserialize(params.AddressChargePrepaid)
            this.AddressChargePrepaid = obj;
        }
        this.AddressType = 'AddressType' in params ? params.AddressType : null;
        this.AnycastZone = 'AnycastZone' in params ? params.AnycastZone : null;
        this.ApplicableForCLB = 'ApplicableForCLB' in params ? params.ApplicableForCLB : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;
        this.AddressName = 'AddressName' in params ? params.AddressName : null;

    }
}

/**
 * 合规化审批单
 * @class
 */
class CrossBorderCompliance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务商，可选值：`UNICOM`。
         * @type {string || null}
         */
        this.ServiceProvider = null;

        /**
         * 合规化审批单`ID`。
         * @type {number || null}
         */
        this.ComplianceId = null;

        /**
         * 公司全称。
         * @type {string || null}
         */
        this.Company = null;

        /**
         * 统一社会信用代码。
         * @type {string || null}
         */
        this.UniformSocialCreditCode = null;

        /**
         * 法定代表人。
         * @type {string || null}
         */
        this.LegalPerson = null;

        /**
         * 发证机关。
         * @type {string || null}
         */
        this.IssuingAuthority = null;

        /**
         * 营业执照。
         * @type {string || null}
         */
        this.BusinessLicense = null;

        /**
         * 营业执照住所。
         * @type {string || null}
         */
        this.BusinessAddress = null;

        /**
         * 邮编。
         * @type {number || null}
         */
        this.PostCode = null;

        /**
         * 经办人。
         * @type {string || null}
         */
        this.Manager = null;

        /**
         * 经办人身份证号。
         * @type {string || null}
         */
        this.ManagerId = null;

        /**
         * 经办人身份证。
         * @type {string || null}
         */
        this.ManagerIdCard = null;

        /**
         * 经办人身份证地址。
         * @type {string || null}
         */
        this.ManagerAddress = null;

        /**
         * 经办人联系电话。
         * @type {string || null}
         */
        this.ManagerTelephone = null;

        /**
         * 电子邮箱。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 服务受理单。
         * @type {string || null}
         */
        this.ServiceHandlingForm = null;

        /**
         * 授权函。
         * @type {string || null}
         */
        this.AuthorizationLetter = null;

        /**
         * 信息安全承诺书。
         * @type {string || null}
         */
        this.SafetyCommitment = null;

        /**
         * 服务开始时间。
         * @type {string || null}
         */
        this.ServiceStartDate = null;

        /**
         * 服务截止时间。
         * @type {string || null}
         */
        this.ServiceEndDate = null;

        /**
         * 状态。待审批：`PENDING`，已通过：`APPROVED`，已拒绝：`DENY`。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 审批单创建时间。
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
        this.ServiceProvider = 'ServiceProvider' in params ? params.ServiceProvider : null;
        this.ComplianceId = 'ComplianceId' in params ? params.ComplianceId : null;
        this.Company = 'Company' in params ? params.Company : null;
        this.UniformSocialCreditCode = 'UniformSocialCreditCode' in params ? params.UniformSocialCreditCode : null;
        this.LegalPerson = 'LegalPerson' in params ? params.LegalPerson : null;
        this.IssuingAuthority = 'IssuingAuthority' in params ? params.IssuingAuthority : null;
        this.BusinessLicense = 'BusinessLicense' in params ? params.BusinessLicense : null;
        this.BusinessAddress = 'BusinessAddress' in params ? params.BusinessAddress : null;
        this.PostCode = 'PostCode' in params ? params.PostCode : null;
        this.Manager = 'Manager' in params ? params.Manager : null;
        this.ManagerId = 'ManagerId' in params ? params.ManagerId : null;
        this.ManagerIdCard = 'ManagerIdCard' in params ? params.ManagerIdCard : null;
        this.ManagerAddress = 'ManagerAddress' in params ? params.ManagerAddress : null;
        this.ManagerTelephone = 'ManagerTelephone' in params ? params.ManagerTelephone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.ServiceHandlingForm = 'ServiceHandlingForm' in params ? params.ServiceHandlingForm : null;
        this.AuthorizationLetter = 'AuthorizationLetter' in params ? params.AuthorizationLetter : null;
        this.SafetyCommitment = 'SafetyCommitment' in params ? params.SafetyCommitment : null;
        this.ServiceStartDate = 'ServiceStartDate' in params ? params.ServiceStartDate : null;
        this.ServiceEndDate = 'ServiceEndDate' in params ? params.ServiceEndDate : null;
        this.State = 'State' in params ? params.State : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * ModifyAssistantCidr请求参数结构体
 * @class
 */
class ModifyAssistantCidrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`。形如：`vpc-6v2ht8q5`
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 待添加的辅助CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]，入参NewCidrBlocks和OldCidrBlocks至少需要其一。
         * @type {Array.<string> || null}
         */
        this.NewCidrBlocks = null;

        /**
         * 待删除的辅助CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]，入参NewCidrBlocks和OldCidrBlocks至少需要其一。
         * @type {Array.<string> || null}
         */
        this.OldCidrBlocks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.NewCidrBlocks = 'NewCidrBlocks' in params ? params.NewCidrBlocks : null;
        this.OldCidrBlocks = 'OldCidrBlocks' in params ? params.OldCidrBlocks : null;

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
 * AssociateDhcpIpWithAddressIp返回参数结构体
 * @class
 */
class AssociateDhcpIpWithAddressIpResponse extends  AbstractModel {
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
 * ModifyGatewayFlowQos返回参数结构体
 * @class
 */
class ModifyGatewayFlowQosResponse extends  AbstractModel {
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
 * ModifyNetworkInterfaceQos返回参数结构体
 * @class
 */
class ModifyNetworkInterfaceQosResponse extends  AbstractModel {
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
 * AssociateDirectConnectGatewayNatGateway请求参数结构体
 * @class
 */
class AssociateDirectConnectGatewayNatGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线网关ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * NAT网关ID。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;

    }
}

/**
 * 地址信息
 * @class
 */
class AddressTemplateItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始地址。
         * @type {string || null}
         */
        this.From = null;

        /**
         * 结束地址。
         * @type {string || null}
         */
        this.To = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;

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
         * 入流量，单位：`Byte`。
         * @type {number || null}
         */
        this.InTraffic = null;

        /**
         * 出流量，单位：`Byte`。
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
 * CreateVpnGatewaySslClient请求参数结构体
 * @class
 */
class CreateVpnGatewaySslClientRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSL-VPN-SERVER 实例ID。
         * @type {string || null}
         */
        this.SslVpnServerId = null;

        /**
         * name
         * @type {string || null}
         */
        this.SslVpnClientName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SslVpnServerId = 'SslVpnServerId' in params ? params.SslVpnServerId : null;
        this.SslVpnClientName = 'SslVpnClientName' in params ? params.SslVpnClientName : null;

    }
}

/**
 * UnlockCcns请求参数结构体
 * @class
 */
class UnlockCcnsRequest extends  AbstractModel {
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
 * DescribeVpnGatewaySslServers返回参数结构体
 * @class
 */
class DescribeVpnGatewaySslServersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * SSL-VPN-SERVER 实例详细信息列表。
         * @type {Array.<SslVpnSever> || null}
         */
        this.SslVpnSeverSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.SslVpnSeverSet) {
            this.SslVpnSeverSet = new Array();
            for (let z in params.SslVpnSeverSet) {
                let obj = new SslVpnSever();
                obj.deserialize(params.SslVpnSeverSet[z]);
                this.SslVpnSeverSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteNatGatewayDestinationIpPortTranslationNatRule返回参数结构体
 * @class
 */
class DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse extends  AbstractModel {
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
<li>`VPNGW`：VPNGW类型</li>
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 实例关联的路由表ID。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceRegion = 'InstanceRegion' in params ? params.InstanceRegion : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * DescribeLocalGateway返回参数结构体
 * @class
 */
class DescribeLocalGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本地网关信息集合
         * @type {Array.<LocalGateway> || null}
         */
        this.LocalGatewaySet = null;

        /**
         * 本地网关总数
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

        if (params.LocalGatewaySet) {
            this.LocalGatewaySet = new Array();
            for (let z in params.LocalGatewaySet) {
                let obj = new LocalGateway();
                obj.deserialize(params.LocalGatewaySet[z]);
                this.LocalGatewaySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteNatGateway请求参数结构体
 * @class
 */
class DeleteNatGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关的ID，形如：`nat-df45454`。
         * @type {string || null}
         */
        this.NatGatewayId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;

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
 * 冲突资源条目信息。
 * @class
 */
class ConflictItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 冲突资源的ID
         * @type {string || null}
         */
        this.ConfilctId = null;

        /**
         * 冲突目的资源
         * @type {string || null}
         */
        this.DestinationItem = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfilctId = 'ConfilctId' in params ? params.ConfilctId : null;
        this.DestinationItem = 'DestinationItem' in params ? params.DestinationItem : null;

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
 * CreateVpcEndPoint返回参数结构体
 * @class
 */
class CreateVpcEndPointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端节点对象详细信息。
         * @type {EndPoint || null}
         */
        this.EndPoint = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EndPoint) {
            let obj = new EndPoint();
            obj.deserialize(params.EndPoint)
            this.EndPoint = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAssistantCidr返回参数结构体
 * @class
 */
class DeleteAssistantCidrResponse extends  AbstractModel {
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
 * ModifyTemplateMember请求参数结构体
 * @class
 */
class ModifyTemplateMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板实例ID，支持IP地址、协议端口、IP地址组、协议端口组四种参数模板的实例ID。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 需要修改的参数模板成员信息，支持IP地址、协议端口、IP地址组、协议端口组四种类型，类型需要与TemplateId参数类型一致，修改顺序与TemplateMember参数顺序一一对应，入参长度需要与TemplateMember参数保持一致。
         * @type {Array.<MemberInfo> || null}
         */
        this.OriginalTemplateMember = null;

        /**
         * 新的参数模板成员信息，支持IP地址、协议端口、IP地址组、协议端口组四种类型，类型需要与TemplateId参数类型一致，修改顺序与OriginalTemplateMember参数顺序一一对应，入参长度需要与OriginalTemplateMember参数保持一致。
         * @type {Array.<MemberInfo> || null}
         */
        this.TemplateMember = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.OriginalTemplateMember) {
            this.OriginalTemplateMember = new Array();
            for (let z in params.OriginalTemplateMember) {
                let obj = new MemberInfo();
                obj.deserialize(params.OriginalTemplateMember[z]);
                this.OriginalTemplateMember.push(obj);
            }
        }

        if (params.TemplateMember) {
            this.TemplateMember = new Array();
            for (let z in params.TemplateMember) {
                let obj = new MemberInfo();
                obj.deserialize(params.TemplateMember[z]);
                this.TemplateMember.push(obj);
            }
        }

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
 * 网关流控带宽信息
 * @class
 */
class GatewayQos extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 云服务器内网IP。
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * 流控带宽值。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 创建时间。
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

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
 * DeleteLocalGateway请求参数结构体
 * @class
 */
class DeleteLocalGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本地网关实例ID
         * @type {string || null}
         */
        this.LocalGatewayId = null;

        /**
         * CDC实例ID
         * @type {string || null}
         */
        this.CdcId = null;

        /**
         * VPC实例ID
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
        this.LocalGatewayId = 'LocalGatewayId' in params ? params.LocalGatewayId : null;
        this.CdcId = 'CdcId' in params ? params.CdcId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

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
 * LockCcnBandwidths请求参数结构体
 * @class
 */
class LockCcnBandwidthsRequest extends  AbstractModel {
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
 * 用于描述弹性公网IP的费用对象
 * @class
 */
class AddressChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买实例的时长，单位是月。可支持时长：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 自动续费标志。0表示手动续费，1表示自动续费，2表示到期不续费。默认缺省为0即手动续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * DescribeVpnGatewayRoutes返回参数结构体
 * @class
 */
class DescribeVpnGatewayRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关目的路由
         * @type {Array.<VpnGatewayRoute> || null}
         */
        this.Routes = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new VpnGatewayRoute();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNetworkAcls返回参数结构体
 * @class
 */
class DescribeNetworkAclsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例详细信息列表。
         * @type {Array.<NetworkAcl> || null}
         */
        this.NetworkAclSet = null;

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

        if (params.NetworkAclSet) {
            this.NetworkAclSet = new Array();
            for (let z in params.NetworkAclSet) {
                let obj = new NetworkAcl();
                obj.deserialize(params.NetworkAclSet[z]);
                this.NetworkAclSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
 * ALG协议类型
 * @class
 */
class AlgType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ftp协议Alg功能是否开启
         * @type {boolean || null}
         */
        this.Ftp = null;

        /**
         * Sip协议Alg功能是否开启
         * @type {boolean || null}
         */
        this.Sip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ftp = 'Ftp' in params ? params.Ftp : null;
        this.Sip = 'Sip' in params ? params.Sip : null;

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
 * DescribeVpcInstances返回参数结构体
 * @class
 */
class DescribeVpcInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云主机实例列表。
         * @type {Array.<CvmInstance> || null}
         */
        this.InstanceSet = null;

        /**
         * 满足条件的云主机实例个数。
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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new CvmInstance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
 * ModifyNatGatewaySourceIpTranslationNatRule返回参数结构体
 * @class
 */
class ModifyNatGatewaySourceIpTranslationNatRuleResponse extends  AbstractModel {
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
 * CreateNatGatewayDestinationIpPortTranslationNatRule请求参数结构体
 * @class
 */
class CreateNatGatewayDestinationIpPortTranslationNatRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关的ID，形如：`nat-df45454`。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * NAT网关的端口转换规则。
         * @type {Array.<DestinationIpPortTranslationNatRule> || null}
         */
        this.DestinationIpPortTranslationNatRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;

        if (params.DestinationIpPortTranslationNatRules) {
            this.DestinationIpPortTranslationNatRules = new Array();
            for (let z in params.DestinationIpPortTranslationNatRules) {
                let obj = new DestinationIpPortTranslationNatRule();
                obj.deserialize(params.DestinationIpPortTranslationNatRules[z]);
                this.DestinationIpPortTranslationNatRules.push(obj);
            }
        }

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
         * 流日志实例名字
         * @type {string || null}
         */
        this.FlowLogName = null;

        /**
         * 流日志所属资源类型，VPC|SUBNET|NETWORKINTERFACE|CCN|NAT|DCG
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
         * 私用网络ID或者统一ID，建议使用统一ID，当ResourceType为CCN时不填，其他类型必填。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 流日志实例描述
         * @type {string || null}
         */
        this.FlowLogDescription = null;

        /**
         * 流日志存储ID
         * @type {string || null}
         */
        this.CloudLogId = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 消费端类型：cls、ckafka
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * 流日志消费端信息，当消费端类型为ckafka时，必填。
         * @type {FlowLogStorage || null}
         */
        this.FlowLogStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowLogName = 'FlowLogName' in params ? params.FlowLogName : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.TrafficType = 'TrafficType' in params ? params.TrafficType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.FlowLogDescription = 'FlowLogDescription' in params ? params.FlowLogDescription : null;
        this.CloudLogId = 'CloudLogId' in params ? params.CloudLogId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.StorageType = 'StorageType' in params ? params.StorageType : null;

        if (params.FlowLogStorage) {
            let obj = new FlowLogStorage();
            obj.deserialize(params.FlowLogStorage)
            this.FlowLogStorage = obj;
        }

    }
}

/**
 * InquirePriceCreateDirectConnectGateway请求参数结构体
 * @class
 */
class InquirePriceCreateDirectConnectGatewayRequest extends  AbstractModel {
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
 * DisassociateNatGatewayAddress请求参数结构体
 * @class
 */
class DisassociateNatGatewayAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关的ID，形如：`nat-df45454`。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * 待解绑NAT网关的弹性IP数组。
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;

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
         * 过滤条件，参数不支持同时指定RouteTableIds和Filters。
<li>route-table-id - String - （过滤条件）路由表实例ID。</li>
<li>route-table-name - String - （过滤条件）路由表名称。</li>
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>association.main - String - （过滤条件）是否主路由表。</li>
<li>tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。</li>
<li>tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {Array.<string> || null}
         */
        this.RouteTableIds = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.RouteTableIds = 'RouteTableIds' in params ? params.RouteTableIds : null;
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
 * DescribeSecurityGroupReferences请求参数结构体
 * @class
 */
class DescribeSecurityGroupReferencesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID数组。格式如：['sg-12345678']
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
 * DescribeTemplateLimits返回参数结构体
 * @class
 */
class DescribeTemplateLimitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板配额对象。
         * @type {TemplateLimit || null}
         */
        this.TemplateLimit = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TemplateLimit) {
            let obj = new TemplateLimit();
            obj.deserialize(params.TemplateLimit)
            this.TemplateLimit = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckDefaultSubnet返回参数结构体
 * @class
 */
class CheckDefaultSubnetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查结果。true为可以创建默认子网，false为不可以创建默认子网。
         * @type {boolean || null}
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
         * 路由策略ID。不能和RouteItemIds同时使用，但至少输入一个。该参数取值可通过查询路由列表（[DescribeRouteTables](https://cloud.tencent.com/document/product/215/15763)）获取。
         * @type {Array.<number> || null}
         */
        this.RouteIds = null;

        /**
         * 路由策略唯一ID。不能和RouteIds同时使用，但至少输入一个。该参数取值可通过查询路由列表（[DescribeRouteTables](https://cloud.tencent.com/document/product/215/15763)）获取。
         * @type {Array.<string> || null}
         */
        this.RouteItemIds = null;

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
        this.RouteItemIds = 'RouteItemIds' in params ? params.RouteItemIds : null;

    }
}

/**
 * DisassociateDirectConnectGatewayNatGateway请求参数结构体
 * @class
 */
class DisassociateDirectConnectGatewayNatGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线网关ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * NAT网关ID。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;

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
         * 路由策略ID。不能和RouteItemIds同时使用，但至少输入一个。该参数取值可通过查询路由列表（[DescribeRouteTables](https://cloud.tencent.com/document/product/215/15763)）获取。
         * @type {Array.<number> || null}
         */
        this.RouteIds = null;

        /**
         * 路由策略唯一ID。不能和RouteIds同时使用，但至少输入一个。该参数取值可通过查询路由列表（[DescribeRouteTables](https://cloud.tencent.com/document/product/215/15763)）获取。
         * @type {Array.<string> || null}
         */
        this.RouteItemIds = null;

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
        this.RouteItemIds = 'RouteItemIds' in params ? params.RouteItemIds : null;

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
 * ModifyGatewayFlowQos请求参数结构体
 * @class
 */
class ModifyGatewayFlowQosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关实例ID，目前我们支持的网关实例类型有，
专线网关实例ID，形如，`dcg-ltjahce6`；
Nat网关实例ID，形如，`nat-ltjahce6`；
VPN网关实例ID，形如，`vpn-ltjahce6`。
         * @type {string || null}
         */
        this.GatewayId = null;

        /**
         * 流控带宽值。取值大于0，表示限流到指定的Mbps；取值等于0，表示完全限流；取值为-1，不限流。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 限流的云服务器内网IP。
         * @type {Array.<string> || null}
         */
        this.IpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.IpAddresses = 'IpAddresses' in params ? params.IpAddresses : null;

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

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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

        /**
         * 网卡绑定类型：0 标准型 1 扩展型。
         * @type {number || null}
         */
        this.AttachType = null;

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
        this.AttachType = 'AttachType' in params ? params.AttachType : null;

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
 * RenewAddresses请求参数结构体
 * @class
 */
class RenewAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EIP唯一标识ID列表，形如'eip-xxxx'
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

        /**
         * 续费参数
         * @type {AddressChargePrepaid || null}
         */
        this.AddressChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;

        if (params.AddressChargePrepaid) {
            let obj = new AddressChargePrepaid();
            obj.deserialize(params.AddressChargePrepaid)
            this.AddressChargePrepaid = obj;
        }

    }
}

/**
 * 描述网络中心每个产品的配额信息
 * @class
 */
class ProductQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品配额ID
         * @type {string || null}
         */
        this.QuotaId = null;

        /**
         * 产品配额名称
         * @type {string || null}
         */
        this.QuotaName = null;

        /**
         * 产品当前配额
         * @type {number || null}
         */
        this.QuotaCurrent = null;

        /**
         * 产品配额上限
         * @type {number || null}
         */
        this.QuotaLimit = null;

        /**
         * 产品配额是否有地域属性
         * @type {boolean || null}
         */
        this.QuotaRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QuotaId = 'QuotaId' in params ? params.QuotaId : null;
        this.QuotaName = 'QuotaName' in params ? params.QuotaName : null;
        this.QuotaCurrent = 'QuotaCurrent' in params ? params.QuotaCurrent : null;
        this.QuotaLimit = 'QuotaLimit' in params ? params.QuotaLimit : null;
        this.QuotaRegion = 'QuotaRegion' in params ? params.QuotaRegion : null;

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

        /**
         * 设定EIP是否直通，"TRUE"表示直通，"FALSE"表示非直通。注意该参数仅对EIP直通功能可见的用户可以设定。
         * @type {string || null}
         */
        this.EipDirectConnection = null;

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
        this.EipDirectConnection = 'EipDirectConnection' in params ? params.EipDirectConnection : null;

    }
}

/**
 * 描述 DhcpIp 信息
 * @class
 */
class DhcpIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * `DhcpIp`的`ID`，是`DhcpIp`的唯一标识。
         * @type {string || null}
         */
        this.DhcpIpId = null;

        /**
         * `DhcpIp`所在私有网络`ID`。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * `DhcpIp`所在子网`ID`。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * `DhcpIp`的名称。
         * @type {string || null}
         */
        this.DhcpIpName = null;

        /**
         * IP地址。
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * 绑定`EIP`。
         * @type {string || null}
         */
        this.AddressIp = null;

        /**
         * `DhcpIp`关联弹性网卡`ID`。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 被绑定的实例`ID`。
         * @type {string || null}
         */
        this.InstanceId = null;

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
        this.DhcpIpId = 'DhcpIpId' in params ? params.DhcpIpId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DhcpIpName = 'DhcpIpName' in params ? params.DhcpIpName : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.State = 'State' in params ? params.State : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DeleteAssistantCidr请求参数结构体
 * @class
 */
class DeleteAssistantCidrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC`实例`ID`。形如：`vpc-6v2ht8q5`
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]
         * @type {Array.<string> || null}
         */
        this.CidrBlocks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CidrBlocks = 'CidrBlocks' in params ? params.CidrBlocks : null;

    }
}

/**
 * ModifyTemplateMember返回参数结构体
 * @class
 */
class ModifyTemplateMemberResponse extends  AbstractModel {
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
 * DeleteVpnGatewaySslClient请求参数结构体
 * @class
 */
class DeleteVpnGatewaySslClientRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSL-VPN-CLIENT 实例ID。
         * @type {string || null}
         */
        this.SslVpnClientId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SslVpnClientId = 'SslVpnClientId' in params ? params.SslVpnClientId : null;

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
 * DescribeNatGatewayDirectConnectGatewayRoute返回参数结构体
 * @class
 */
class DescribeNatGatewayDirectConnectGatewayRouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由数据
         * @type {Array.<NatDirectConnectGatewayRoute> || null}
         */
        this.NatDirectConnectGatewayRouteSet = null;

        /**
         * 路由总数
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

        if (params.NatDirectConnectGatewayRouteSet) {
            this.NatDirectConnectGatewayRouteSet = new Array();
            for (let z in params.NatDirectConnectGatewayRouteSet) {
                let obj = new NatDirectConnectGatewayRoute();
                obj.deserialize(params.NatDirectConnectGatewayRouteSet[z]);
                this.NatDirectConnectGatewayRouteSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableVpcEndPointConnect返回参数结构体
 * @class
 */
class EnableVpcEndPointConnectResponse extends  AbstractModel {
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
 * CreateNetDetect返回参数结构体
 * @class
 */
class CreateNetDetectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络探测（NetDetect）对象。
         * @type {NetDetect || null}
         */
        this.NetDetect = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NetDetect) {
            let obj = new NetDetect();
            obj.deserialize(params.NetDetect)
            this.NetDetect = obj;
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
 * ModifyLocalGateway返回参数结构体
 * @class
 */
class ModifyLocalGatewayResponse extends  AbstractModel {
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
 * AssociateNetworkInterfaceSecurityGroups返回参数结构体
 * @class
 */
class AssociateNetworkInterfaceSecurityGroupsResponse extends  AbstractModel {
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
 * EnableFlowLogs请求参数结构体
 * @class
 */
class EnableFlowLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流日志Id。
         * @type {Array.<string> || null}
         */
        this.FlowLogIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowLogIds = 'FlowLogIds' in params ? params.FlowLogIds : null;

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
 * CreateNatGateway请求参数结构体
 * @class
 */
class CreateNatGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关名称
         * @type {string || null}
         */
        this.NatGatewayName = null;

        /**
         * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * NAT网关最大外网出带宽(单位:Mbps)，支持的参数值：`20, 50, 100, 200, 500, 1000, 2000, 5000`，默认: `100Mbps`。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * NAT网关并发连接上限，支持参数值：`1000000、3000000、10000000`，默认值为`100000`。
         * @type {number || null}
         */
        this.MaxConcurrentConnection = null;

        /**
         * 需要申请的弹性IP个数，系统会按您的要求生产N个弹性IP，其中AddressCount和PublicAddresses至少传递一个。
         * @type {number || null}
         */
        this.AddressCount = null;

        /**
         * 绑定NAT网关的弹性IP数组，其中AddressCount和PublicAddresses至少传递一个。
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * 可用区，形如：`ap-guangzhou-1`。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * NAT网关所属子网
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 绑定NAT网关的弹性IP带宽大小（单位Mbps），默认为当前用户类型所能使用的最大值。
         * @type {number || null}
         */
        this.StockPublicIpAddressesBandwidthOut = null;

        /**
         * 需要申请公网IP带宽大小（单位Mbps），默认为当前用户类型所能使用的最大值。
         * @type {number || null}
         */
        this.PublicIpAddressesBandwidthOut = null;

        /**
         * 公网IP是否强制与NAT网关来自同可用区，true表示需要与NAT网关同可用区；false表示可与NAT网关不是同一个可用区。此参数只有当参数Zone存在时才能生效。
         * @type {boolean || null}
         */
        this.PublicIpFromSameZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayName = 'NatGatewayName' in params ? params.NatGatewayName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.MaxConcurrentConnection = 'MaxConcurrentConnection' in params ? params.MaxConcurrentConnection : null;
        this.AddressCount = 'AddressCount' in params ? params.AddressCount : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.StockPublicIpAddressesBandwidthOut = 'StockPublicIpAddressesBandwidthOut' in params ? params.StockPublicIpAddressesBandwidthOut : null;
        this.PublicIpAddressesBandwidthOut = 'PublicIpAddressesBandwidthOut' in params ? params.PublicIpAddressesBandwidthOut : null;
        this.PublicIpFromSameZone = 'PublicIpFromSameZone' in params ? params.PublicIpFromSameZone : null;

    }
}

/**
 * DeleteNetDetect请求参数结构体
 * @class
 */
class DeleteNetDetectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络探测实例`ID`。形如：`netd-12345678`
         * @type {string || null}
         */
        this.NetDetectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetDetectId = 'NetDetectId' in params ? params.NetDetectId : null;

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
         * 加密算法，可选值：'3DES-CBC', 'AES-CBC-128', 'AES-CBC-192', 'AES-CBC-256', 'DES-CBC', 'SM4', 'NULL'， 默认为AES-CBC-128
         * @type {string || null}
         */
        this.EncryptAlgorithm = null;

        /**
         * 认证算法：可选值：'MD5', 'SHA1'，'SHA-256' 默认为
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
 * CreateAndAttachNetworkInterface返回参数结构体
 * @class
 */
class CreateAndAttachNetworkInterfaceResponse extends  AbstractModel {
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
         * CCN名称，最大长度不能超过60个字节，限制：CcnName和CcnDescription必须至少选择一个参数输入，否则报错。
         * @type {string || null}
         */
        this.CcnName = null;

        /**
         * CCN描述信息，最大长度不能超过100个字节，限制：CcnName和CcnDescription必须至少选择一个参数输入，否则报错。
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
 * DisassociateDhcpIpWithAddressIp返回参数结构体
 * @class
 */
class DisassociateDhcpIpWithAddressIpResponse extends  AbstractModel {
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
 * CreateVpcEndPointService返回参数结构体
 * @class
 */
class CreateVpcEndPointServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端节点服务对象详细信息。
         * @type {EndPointService || null}
         */
        this.EndPointService = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EndPointService) {
            let obj = new EndPointService();
            obj.deserialize(params.EndPointService)
            this.EndPointService = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNetworkAclAttribute请求参数结构体
 * @class
 */
class ModifyNetworkAclAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ACL实例ID。例如：acl-12345678。
         * @type {string || null}
         */
        this.NetworkAclId = null;

        /**
         * 网络ACL名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.NetworkAclName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkAclId = 'NetworkAclId' in params ? params.NetworkAclId : null;
        this.NetworkAclName = 'NetworkAclName' in params ? params.NetworkAclName : null;

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
<li>vip - String - `HAVIP`的地址`VIP`。</li>
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
         * `EIP`状态，包含'CREATING'(创建中),'BINDING'(绑定中),'BIND'(已绑定),'UNBINDING'(解绑中),'UNBIND'(已解绑),'OFFLINING'(释放中),'BIND_ENI'(绑定悬空弹性网卡)
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
         * EIP 资源类型，包括CalcIP、WanIP、EIP和AnycastEIP。其中：CalcIP 表示设备 IP，WanIP 表示普通公网 IP，EIP 表示弹性公网 IP，AnycastEip 表示加速 EIP。
         * @type {string || null}
         */
        this.AddressType = null;

        /**
         * eip是否在解绑后自动释放。true表示eip将会在解绑后自动释放，false表示eip在解绑后不会自动释放
         * @type {boolean || null}
         */
        this.CascadeRelease = null;

        /**
         * EIP ALG开启的协议类型。
         * @type {AlgType || null}
         */
        this.EipAlgType = null;

        /**
         * 弹性公网IP的运营商信息，当前可能返回值包括"CMCC","CTCC","CUCC","BGP"
         * @type {string || null}
         */
        this.InternetServiceProvider = null;

        /**
         * 是否本地带宽EIP
         * @type {boolean || null}
         */
        this.LocalBgp = null;

        /**
         * 弹性公网IP的带宽值。注意，传统账户类型账户的弹性公网IP没有带宽属性，值为空。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 弹性公网IP的网络计费模式。注意，传统账户类型账户的弹性公网IP没有网络计费模式属性，值为空。
注意：此字段可能返回 null，表示取不到有效值。
包括：
<li><strong>BANDWIDTH_PREPAID_BY_MONTH</strong></li>
<p style="padding-left: 30px;">表示包月带宽预付费。</p>
<li><strong>TRAFFIC_POSTPAID_BY_HOUR</strong></li>
<p style="padding-left: 30px;">表示按小时流量后付费。</p>
<li><strong>BANDWIDTH_POSTPAID_BY_HOUR</strong></li>
<p style="padding-left: 30px;">表示按小时带宽后付费。</p>
<li><strong>BANDWIDTH_PACKAGE</strong></li>
<p style="padding-left: 30px;">表示共享带宽包。</p>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 弹性公网IP关联的标签列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

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

        if (params.EipAlgType) {
            let obj = new AlgType();
            obj.deserialize(params.EipAlgType)
            this.EipAlgType = obj;
        }
        this.InternetServiceProvider = 'InternetServiceProvider' in params ? params.InternetServiceProvider : null;
        this.LocalBgp = 'LocalBgp' in params ? params.LocalBgp : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

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
         * 网关实例类型：'IPSEC', 'SSL','CCN'。
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

        /**
         * 网关带宽配额信息
         * @type {Array.<VpnGatewayQuota> || null}
         */
        this.VpnGatewayQuotaSet = null;

        /**
         * 网关实例版本信息
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Type值为CCN时，该值表示云联网实例ID
         * @type {string || null}
         */
        this.NetworkInstanceId = null;

        /**
         * CDC 实例ID
         * @type {string || null}
         */
        this.CdcId = null;

        /**
         * SSL-VPN 客户端连接数。
         * @type {number || null}
         */
        this.MaxConnection = null;

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

        if (params.VpnGatewayQuotaSet) {
            this.VpnGatewayQuotaSet = new Array();
            for (let z in params.VpnGatewayQuotaSet) {
                let obj = new VpnGatewayQuota();
                obj.deserialize(params.VpnGatewayQuotaSet[z]);
                this.VpnGatewayQuotaSet.push(obj);
            }
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.NetworkInstanceId = 'NetworkInstanceId' in params ? params.NetworkInstanceId : null;
        this.CdcId = 'CdcId' in params ? params.CdcId : null;
        this.MaxConnection = 'MaxConnection' in params ? params.MaxConnection : null;

    }
}

/**
 * EnableVpcEndPointConnect请求参数结构体
 * @class
 */
class EnableVpcEndPointConnectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端节点服务ID。
         * @type {string || null}
         */
        this.EndPointServiceId = null;

        /**
         * 终端节点ID。
         * @type {Array.<string> || null}
         */
        this.EndPointId = null;

        /**
         * 是否接受终端节点连接请求。
         * @type {boolean || null}
         */
        this.AcceptFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndPointServiceId = 'EndPointServiceId' in params ? params.EndPointServiceId : null;
        this.EndPointId = 'EndPointId' in params ? params.EndPointId : null;
        this.AcceptFlag = 'AcceptFlag' in params ? params.AcceptFlag : null;

    }
}

/**
 * EnableGatewayFlowMonitor返回参数结构体
 * @class
 */
class EnableGatewayFlowMonitorResponse extends  AbstractModel {
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
 * DeleteDhcpIp请求参数结构体
 * @class
 */
class DeleteDhcpIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `DhcpIp`的`ID`，是`DhcpIp`的唯一标识。
         * @type {string || null}
         */
        this.DhcpIpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DhcpIpId = 'DhcpIpId' in params ? params.DhcpIpId : null;

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
         * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
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
 * ModifyVpnGatewayRoutes返回参数结构体
 * @class
 */
class ModifyVpnGatewayRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN路由信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VpnGatewayRoute> || null}
         */
        this.Routes = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new VpnGatewayRoute();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeSecurityGroupReferences返回参数结构体
 * @class
 */
class DescribeSecurityGroupReferencesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组被引用信息。
         * @type {Array.<ReferredSecurityGroup> || null}
         */
        this.ReferredSecurityGroupSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ReferredSecurityGroupSet) {
            this.ReferredSecurityGroupSet = new Array();
            for (let z in params.ReferredSecurityGroupSet) {
                let obj = new ReferredSecurityGroup();
                obj.deserialize(params.ReferredSecurityGroupSet[z]);
                this.ReferredSecurityGroupSet.push(obj);
            }
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
         * 带宽包配额详细信息
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
 * DeleteNatGateway返回参数结构体
 * @class
 */
class DeleteNatGatewayResponse extends  AbstractModel {
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
 * ModifyVpcEndPointAttribute请求参数结构体
 * @class
 */
class ModifyVpcEndPointAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端节点ID。
         * @type {string || null}
         */
        this.EndPointId = null;

        /**
         * 终端节点名称。
         * @type {string || null}
         */
        this.EndPointName = null;

        /**
         * 安全组ID列表。
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
        this.EndPointId = 'EndPointId' in params ? params.EndPointId : null;
        this.EndPointName = 'EndPointName' in params ? params.EndPointName : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeTaskResult返回参数结构体
 * @class
 */
class DescribeTaskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 执行结果，包括"SUCCESS", "FAILED", "RUNNING"
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisassociateNetworkAclSubnets请求参数结构体
 * @class
 */
class DisassociateNetworkAclSubnetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ACL实例ID。例如：acl-12345678。
         * @type {string || null}
         */
        this.NetworkAclId = null;

        /**
         * 子网实例ID数组。例如：[subnet-12345678]
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
        this.NetworkAclId = 'NetworkAclId' in params ? params.NetworkAclId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

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
 * DeleteVpcEndPoint请求参数结构体
 * @class
 */
class DeleteVpcEndPointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端节点ID。
         * @type {string || null}
         */
        this.EndPointId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndPointId = 'EndPointId' in params ? params.EndPointId : null;

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

        /**
         * 标签键值对。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * 是否支持云联网路由优先级的功能。False：不支持，True：支持。
         * @type {boolean || null}
         */
        this.RoutePriorityFlag = null;

        /**
         * 实例关联的路由表个数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RouteTableCount = null;

        /**
         * 是否开启云联网多路由表特性。False：未开启，True：开启。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.RouteTableFlag = null;

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

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.RoutePriorityFlag = 'RoutePriorityFlag' in params ? params.RoutePriorityFlag : null;
        this.RouteTableCount = 'RouteTableCount' in params ? params.RouteTableCount : null;
        this.RouteTableFlag = 'RouteTableFlag' in params ? params.RouteTableFlag : null;

    }
}

/**
 * 终端节点服务的服务白名单对象详情。
 * @class
 */
class VpcEndPointServiceUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * AppId。
         * @type {number || null}
         */
        this.Owner = null;

        /**
         * Uin。
         * @type {string || null}
         */
        this.UserUin = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 终端节点服务ID。
         * @type {string || null}
         */
        this.EndPointServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.UserUin = 'UserUin' in params ? params.UserUin : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndPointServiceId = 'EndPointServiceId' in params ? params.EndPointServiceId : null;

    }
}

/**
 * InquirePriceCreateDirectConnectGateway返回参数结构体
 * @class
 */
class InquirePriceCreateDirectConnectGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线网关标准接入费用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCost = null;

        /**
         * 专线网关真实接入费用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RealTotalCost = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * NAT网关的端口转发规则
 * @class
 */
class DestinationIpPortTranslationNatRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络协议，可选值：`TCP`、`UDP`。
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 弹性IP。
         * @type {string || null}
         */
        this.PublicIpAddress = null;

        /**
         * 公网端口。
         * @type {number || null}
         */
        this.PublicPort = null;

        /**
         * 内网地址。
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * 内网端口。
         * @type {number || null}
         */
        this.PrivatePort = null;

        /**
         * NAT网关转发规则描述。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.PublicPort = 'PublicPort' in params ? params.PublicPort : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.PrivatePort = 'PrivatePort' in params ? params.PrivatePort : null;
        this.Description = 'Description' in params ? params.Description : null;

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
         * 子网所在的可用区，该参数可通过[DescribeZones](https://cloud.tencent.com/document/product/213/15707)接口获取，例如ap-guangzhou-1，不指定时将随机选择可用区。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 是否强制返回默认VPC。
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
 * CheckAssistantCidr返回参数结构体
 * @class
 */
class CheckAssistantCidrResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 冲突资源信息数组。
         * @type {Array.<ConflictSource> || null}
         */
        this.ConflictSourceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ConflictSourceSet) {
            this.ConflictSourceSet = new Array();
            for (let z in params.ConflictSourceSet) {
                let obj = new ConflictSource();
                obj.deserialize(params.ConflictSourceSet[z]);
                this.ConflictSourceSet.push(obj);
            }
        }
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
 * ModifyVpnGatewayCcnRoutes返回参数结构体
 * @class
 */
class ModifyVpnGatewayCcnRoutesResponse extends  AbstractModel {
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
 * CheckNetDetectState返回参数结构体
 * @class
 */
class CheckNetDetectStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络探测验证结果对象数组。
         * @type {Array.<NetDetectIpState> || null}
         */
        this.NetDetectIpStateSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NetDetectIpStateSet) {
            this.NetDetectIpStateSet = new Array();
            for (let z in params.NetDetectIpStateSet) {
                let obj = new NetDetectIpState();
                obj.deserialize(params.NetDetectIpStateSet[z]);
                this.NetDetectIpStateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisassociateVpcEndPointSecurityGroups返回参数结构体
 * @class
 */
class DisassociateVpcEndPointSecurityGroupsResponse extends  AbstractModel {
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
 * DescribeVpcTaskResult返回参数结构体
 * @class
 */
class DescribeVpcTaskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务执行结果。结果：SUCCESS、FAILED、RUNNING。3者其中之一。其中SUCCESS表示任务执行成功，FAILED表示任务执行失败，RUNNING表示任务执行中。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 异步任务执行输出。
         * @type {string || null}
         */
        this.Output = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Output = 'Output' in params ? params.Output : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssociateNatGatewayAddress返回参数结构体
 * @class
 */
class AssociateNatGatewayAddressResponse extends  AbstractModel {
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
         * 资源ID，可支持资源形如'eip-xxxx', 'lb-xxxx'
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
 * VPN网关云联网路由信息
 * @class
 */
class VpngwCcnRoutes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由信息ID
         * @type {string || null}
         */
        this.RouteId = null;

        /**
         * 路由信息是否启用
ENABLE：启用该路由
DISABLE：不启用该路由
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
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.Status = 'Status' in params ? params.Status : null;

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

        /**
         * 是否启用通道健康检查
         * @type {boolean || null}
         */
        this.EnableHealthCheck = null;

        /**
         * 本端通道探测ip
         * @type {string || null}
         */
        this.HealthCheckLocalIp = null;

        /**
         * 对端通道探测ip
         * @type {string || null}
         */
        this.HealthCheckRemoteIp = null;

        /**
         * 协商类型，默认为active（主动协商）。可选值：active（主动协商），passive（被动协商），flowTrigger（流量协商）
         * @type {string || null}
         */
        this.NegotiationType = null;

        /**
         * DPD探测开关。默认为0，表示关闭DPD探测。可选值：0（关闭），1（开启）
         * @type {number || null}
         */
        this.DpdEnable = null;

        /**
         * DPD超时时间。即探测确认对端不存在需要的时间。dpdEnable为1（开启）时有效。默认30，单位为秒
         * @type {string || null}
         */
        this.DpdTimeout = null;

        /**
         * DPD超时后的动作。默认为clear。dpdEnable为1（开启）时有效。可取值为clear（断开）和restart（重试）
         * @type {string || null}
         */
        this.DpdAction = null;

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
        this.EnableHealthCheck = 'EnableHealthCheck' in params ? params.EnableHealthCheck : null;
        this.HealthCheckLocalIp = 'HealthCheckLocalIp' in params ? params.HealthCheckLocalIp : null;
        this.HealthCheckRemoteIp = 'HealthCheckRemoteIp' in params ? params.HealthCheckRemoteIp : null;
        this.NegotiationType = 'NegotiationType' in params ? params.NegotiationType : null;
        this.DpdEnable = 'DpdEnable' in params ? params.DpdEnable : null;
        this.DpdTimeout = 'DpdTimeout' in params ? params.DpdTimeout : null;
        this.DpdAction = 'DpdAction' in params ? params.DpdAction : null;

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
         * IPv4路由策略集合。
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

        /**
         * 标签键值对。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * local路由是否发布云联网。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CidrForCcn> || null}
         */
        this.LocalCidrForCcn = null;

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

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

        if (params.LocalCidrForCcn) {
            this.LocalCidrForCcn = new Array();
            for (let z in params.LocalCidrForCcn) {
                let obj = new CidrForCcn();
                obj.deserialize(params.LocalCidrForCcn[z]);
                this.LocalCidrForCcn.push(obj);
            }
        }

    }
}

/**
 * DescribeVpcEndPointServiceWhiteList请求参数结构体
 * @class
 */
class DescribeVpcEndPointServiceWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单页返回数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件。
<li> user-uin String - （过滤条件）用户UIN。</li>
<li> end-point-service-id String - （过滤条件）终端节点服务ID。</li>
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
 * ModifyNetworkInterfaceQos请求参数结构体
 * @class
 */
class ModifyNetworkInterfaceQosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡ID，支持批量修改。
         * @type {Array.<string> || null}
         */
        this.NetworkInterfaceIds = null;

        /**
         * 服务质量，可选值：PT、AU、AG、DEFAULT，分别代表白金、金、银、默认四个等级。
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
        this.NetworkInterfaceIds = 'NetworkInterfaceIds' in params ? params.NetworkInterfaceIds : null;
        this.QosLevel = 'QosLevel' in params ? params.QosLevel : null;

    }
}

/**
 * ModifyLocalGateway请求参数结构体
 * @class
 */
class ModifyLocalGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本地网关名称
         * @type {string || null}
         */
        this.LocalGatewayName = null;

        /**
         * CDC实例ID
         * @type {string || null}
         */
        this.CdcId = null;

        /**
         * 本地网关实例ID
         * @type {string || null}
         */
        this.LocalGatewayId = null;

        /**
         * VPC实例ID
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
        this.LocalGatewayName = 'LocalGatewayName' in params ? params.LocalGatewayName : null;
        this.CdcId = 'CdcId' in params ? params.CdcId : null;
        this.LocalGatewayId = 'LocalGatewayId' in params ? params.LocalGatewayId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

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

        /**
         * 备注
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 最后更新时间
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
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.ASPath = 'ASPath' in params ? params.ASPath : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
 * CreateLocalGateway返回参数结构体
 * @class
 */
class CreateLocalGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本地网关信息
         * @type {LocalGateway || null}
         */
        this.LocalGateway = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LocalGateway) {
            let obj = new LocalGateway();
            obj.deserialize(params.LocalGateway)
            this.LocalGateway = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 协议端口模板信息
 * @class
 */
class ServicesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议端口。
         * @type {string || null}
         */
        this.Service = null;

        /**
         * 备注。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Service = 'Service' in params ? params.Service : null;
        this.Description = 'Description' in params ? params.Description : null;

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
<li>service-template-name - 协议端口模板名称。</li>
<li>service-template-id - 协议端口模板实例ID，例如：ppm-e6dy460g。</li>
<li>service-port- 协议端口。</li>
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
 * RefreshDirectConnectGatewayRouteToNatGateway返回参数结构体
 * @class
 */
class RefreshDirectConnectGatewayRouteToNatGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDC子网信息
         * @type {Array.<DirectConnectSubnet> || null}
         */
        this.DirectConnectSubnetSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DirectConnectSubnetSet) {
            this.DirectConnectSubnetSet = new Array();
            for (let z in params.DirectConnectSubnetSet) {
                let obj = new DirectConnectSubnet();
                obj.deserialize(params.DirectConnectSubnetSet[z]);
                this.DirectConnectSubnetSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateVpnGateway请求参数结构体
 * @class
 */
class CreateVpnGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。可通过[DescribeVpcs](https://cloud.tencent.com/document/product/215/15778)接口返回值中的VpcId获取。
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

        /**
         * VPN网关类型。值“CCN”云联网类型VPN网关，值SSL为SSL-VPN
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * CDC实例ID
         * @type {string || null}
         */
        this.CdcId = null;

        /**
         * SSL-VPN 最大CLIENT 连接数。可选 [5, 10, 20, 50, 100]。仅SSL-VPN 需要选这个参数。
         * @type {number || null}
         */
        this.MaxConnection = null;

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
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.CdcId = 'CdcId' in params ? params.CdcId : null;
        this.MaxConnection = 'MaxConnection' in params ? params.MaxConnection : null;

    }
}

/**
 * DescribeVpcInstances请求参数结构体
 * @class
 */
class DescribeVpcInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，参数不支持同时指定RouteTableIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>instance-id - String - （过滤条件）云主机实例ID。</li>
<li>instance-name - String - （过滤条件）云主机名称。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 请求对象个数。
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteVpcEndPointServiceWhiteList返回参数结构体
 * @class
 */
class DeleteVpcEndPointServiceWhiteListResponse extends  AbstractModel {
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
 * CreateBandwidthPackage返回参数结构体
 * @class
 */
class CreateBandwidthPackageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽包唯一ID。
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * 带宽包唯一ID列表(申请数量大于1时有效)。
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
         * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AuditCrossBorderCompliance返回参数结构体
 * @class
 */
class AuditCrossBorderComplianceResponse extends  AbstractModel {
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
 * EnableGatewayFlowMonitor请求参数结构体
 * @class
 */
class EnableGatewayFlowMonitorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关实例ID，目前我们支持的网关实例有，
专线网关实例ID，形如，`dcg-ltjahce6`；
Nat网关实例ID，形如，`nat-ltjahce6`；
VPN网关实例ID，形如，`vpn-ltjahce6`。
         * @type {string || null}
         */
        this.GatewayId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;

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
 * ReplaceRoutes返回参数结构体
 * @class
 */
class ReplaceRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原路由策略信息。
         * @type {Array.<Route> || null}
         */
        this.OldRouteSet = null;

        /**
         * 修改后的路由策略信息。
         * @type {Array.<Route> || null}
         */
        this.NewRouteSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OldRouteSet) {
            this.OldRouteSet = new Array();
            for (let z in params.OldRouteSet) {
                let obj = new Route();
                obj.deserialize(params.OldRouteSet[z]);
                this.OldRouteSet.push(obj);
            }
        }

        if (params.NewRouteSet) {
            this.NewRouteSet = new Array();
            for (let z in params.NewRouteSet) {
                let obj = new Route();
                obj.deserialize(params.NewRouteSet[z]);
                this.NewRouteSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 用于描述云联网地域间限速带宽实例的信息。
 * @class
 */
class CcnBandwidthInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽所属的云联网ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 实例的创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 实例的过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * 带宽实例的唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionFlowControlId = null;

        /**
         * 带宽是否自动续费的标记。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 描述带宽的地域和限速上限信息。在地域间限速的情况下才会返回参数，出口限速模式不返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CcnRegionBandwidthLimit || null}
         */
        this.CcnRegionBandwidthLimit = null;

        /**
         * 云市场实例ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MarketId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.RegionFlowControlId = 'RegionFlowControlId' in params ? params.RegionFlowControlId : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

        if (params.CcnRegionBandwidthLimit) {
            let obj = new CcnRegionBandwidthLimit();
            obj.deserialize(params.CcnRegionBandwidthLimit)
            this.CcnRegionBandwidthLimit = obj;
        }
        this.MarketId = 'MarketId' in params ? params.MarketId : null;

    }
}

/**
 * DescribeCrossBorderCcnRegionBandwidthLimits返回参数结构体
 * @class
 */
class DescribeCrossBorderCcnRegionBandwidthLimitsResponse extends  AbstractModel {
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
 * LockCcns返回参数结构体
 * @class
 */
class LockCcnsResponse extends  AbstractModel {
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
         * 新增的实例个数。
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
 * DescribeSecurityGroups返回参数结构体
 * @class
 */
class DescribeSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组对象。
注意：此字段可能返回 null，表示取不到有效值。
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
 * CreateVpcEndPointServiceWhiteList请求参数结构体
 * @class
 */
class CreateVpcEndPointServiceWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * UIN。
         * @type {string || null}
         */
        this.UserUin = null;

        /**
         * 终端节点服务ID。
         * @type {string || null}
         */
        this.EndPointServiceId = null;

        /**
         * 白名单描述。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserUin = 'UserUin' in params ? params.UserUin : null;
        this.EndPointServiceId = 'EndPointServiceId' in params ? params.EndPointServiceId : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DeleteNatGatewaySourceIpTranslationNatRule请求参数结构体
 * @class
 */
class DeleteNatGatewaySourceIpTranslationNatRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关的ID，形如：`nat-df45454`。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * NAT网关的SNAT ID列表，形如：`snat-df43254`。
         * @type {Array.<string> || null}
         */
        this.NatGatewaySnatIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.NatGatewaySnatIds = 'NatGatewaySnatIds' in params ? params.NatGatewaySnatIds : null;

    }
}

/**
 * ModifyVpnGatewayCcnRoutes请求参数结构体
 * @class
 */
class ModifyVpnGatewayCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关实例ID
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * 云联网路由（IDC网段）列表
         * @type {Array.<VpngwCcnRoutes> || null}
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
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new VpngwCcnRoutes();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * DescribeGatewayFlowQos请求参数结构体
 * @class
 */
class DescribeGatewayFlowQosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关实例ID，目前我们支持的网关实例类型有，
专线网关实例ID，形如，`dcg-ltjahce6`；
Nat网关实例ID，形如，`nat-ltjahce6`；
VPN网关实例ID，形如，`vpn-ltjahce6`。
         * @type {string || null}
         */
        this.GatewayId = null;

        /**
         * 限流的云服务器内网IP。
         * @type {Array.<string> || null}
         */
        this.IpAddresses = null;

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
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;
        this.IpAddresses = 'IpAddresses' in params ? params.IpAddresses : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * ModifyNatGatewayDestinationIpPortTranslationNatRule请求参数结构体
 * @class
 */
class ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT网关的ID，形如：`nat-df45454`。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * 源NAT网关的端口转换规则。
         * @type {DestinationIpPortTranslationNatRule || null}
         */
        this.SourceNatRule = null;

        /**
         * 目的NAT网关的端口转换规则。
         * @type {DestinationIpPortTranslationNatRule || null}
         */
        this.DestinationNatRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;

        if (params.SourceNatRule) {
            let obj = new DestinationIpPortTranslationNatRule();
            obj.deserialize(params.SourceNatRule)
            this.SourceNatRule = obj;
        }

        if (params.DestinationNatRule) {
            let obj = new DestinationIpPortTranslationNatRule();
            obj.deserialize(params.DestinationNatRule)
            this.DestinationNatRule = obj;
        }

    }
}

/**
 * 协议端口模板
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
 * DownloadVpnGatewaySslClientCert请求参数结构体
 * @class
 */
class DownloadVpnGatewaySslClientCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSL-VPN-CLIENT 实例ID。
         * @type {string || null}
         */
        this.SslVpnClientId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SslVpnClientId = 'SslVpnClientId' in params ? params.SslVpnClientId : null;

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
         * IP地址模板名称。
         * @type {string || null}
         */
        this.AddressTemplateName = null;

        /**
         * 地址信息，支持 IP、CIDR、IP 范围。Addresses与AddressesExtra必填其一。
         * @type {Array.<string> || null}
         */
        this.Addresses = null;

        /**
         * 地址信息，支持携带备注，支持 IP、CIDR、IP 范围。Addresses与AddressesExtra必填其一。
         * @type {Array.<AddressInfo> || null}
         */
        this.AddressesExtra = null;

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

        if (params.AddressesExtra) {
            this.AddressesExtra = new Array();
            for (let z in params.AddressesExtra) {
                let obj = new AddressInfo();
                obj.deserialize(params.AddressesExtra[z]);
                this.AddressesExtra.push(obj);
            }
        }

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
 * 查询nat路由的返回路由对象
 * @class
 */
class NatDirectConnectGatewayRoute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网的 `IPv4` `CIDR`
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * 下一跳网关的类型，目前此接口支持的类型有：
DIRECTCONNECT：专线网关
         * @type {string || null}
         */
        this.GatewayType = null;

        /**
         * 下一跳网关ID
         * @type {string || null}
         */
        this.GatewayId = null;

        /**
         * 路由的创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 路由的更新时间
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
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.GatewayType = 'GatewayType' in params ? params.GatewayType : null;
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
         * 可用`IPv4`数。
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

        /**
         * 子网`IPv4`总数。
         * @type {number || null}
         */
        this.TotalIpAddressCount = null;

        /**
         * 标签键值对。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * CDC实例ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CdcId = null;

        /**
         * 是否是CDC所属子网。0:否 1:是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsCdcSubnet = null;

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
        this.TotalIpAddressCount = 'TotalIpAddressCount' in params ? params.TotalIpAddressCount : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.CdcId = 'CdcId' in params ? params.CdcId : null;
        this.IsCdcSubnet = 'IsCdcSubnet' in params ? params.IsCdcSubnet : null;

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

        /**
         * 网卡的挂载类型：0 标准型，1扩展型，默认值0。
         * @type {number || null}
         */
        this.AttachType = null;

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
        this.AttachType = 'AttachType' in params ? params.AttachType : null;

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
 * AllocateIp6AddressesBandwidth请求参数结构体
 * @class
 */
class AllocateIp6AddressesBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要开通公网访问能力的IPV6地址
         * @type {Array.<string> || null}
         */
        this.Ip6Addresses = null;

        /**
         * 带宽，单位Mbps。默认是1Mbps
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 网络计费模式。IPV6当前对标准账户类型支持"TRAFFIC_POSTPAID_BY_HOUR"，对传统账户类型支持"BANDWIDTH_PACKAGE"。默认网络计费模式是"TRAFFIC_POSTPAID_BY_HOUR"。
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 带宽包id，上移账号，申请带宽包计费模式的ipv6地址需要传入.
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
        this.Ip6Addresses = 'Ip6Addresses' in params ? params.Ip6Addresses : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;

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

        /**
         * 标签键值对。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * 安全组更新时间。
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
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupDesc = 'SecurityGroupDesc' in params ? params.SecurityGroupDesc : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * UnlockCcns返回参数结构体
 * @class
 */
class UnlockCcnsResponse extends  AbstractModel {
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
 * DisableGatewayFlowMonitor返回参数结构体
 * @class
 */
class DisableGatewayFlowMonitorResponse extends  AbstractModel {
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
 * DisassociateAddress返回参数结构体
 * @class
 */
class DisassociateAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IDC子网信息
 * @class
 */
class DirectConnectSubnet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专线网关ID
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * IDC子网网段
         * @type {string || null}
         */
        this.CidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;

    }
}

/**
 * DescribeVpnGatewayRoutes请求参数结构体
 * @class
 */
class DescribeVpnGatewayRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关的ID
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * 过滤条件,  条件包括(DestinationCidr, InstanceId,InstanceType)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量, 默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单页个数, 默认20, 最大值100
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
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;

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
 * GetCcnRegionBandwidthLimits返回参数结构体
 * @class
 */
class GetCcnRegionBandwidthLimitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云联网（CCN）各地域出带宽带宽详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CcnBandwidthInfo> || null}
         */
        this.CcnBandwidthSet = null;

        /**
         * 符合条件的对象数。
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

        if (params.CcnBandwidthSet) {
            this.CcnBandwidthSet = new Array();
            for (let z in params.CcnBandwidthSet) {
                let obj = new CcnBandwidthInfo();
                obj.deserialize(params.CcnBandwidthSet[z]);
                this.CcnBandwidthSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * 路由策略对象，删除路由策略时，仅需使用Route的RouteId字段。
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

        /**
         * 指定绑定时是否设置直通。弹性公网 IP 直通请参见 [EIP 直通](https://cloud.tencent.com/document/product/1199/41709)。取值：True、False，默认值为 False。当绑定 CVM 实例、EKS 弹性集群时，可设定此参数为 True。此参数目前处于内测中，如需使用，请提交 [工单申请](https://console.cloud.tencent.com/workorder/category?level1_id=6&level2_id=163&source=0&data_title=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%20CLB&level3_id=1071&queue=96&scene_code=34639&step=2)。
         * @type {boolean || null}
         */
        this.EipDirectConnection = null;

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
        this.EipDirectConnection = 'EipDirectConnection' in params ? params.EipDirectConnection : null;

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
 * UnlockCcnBandwidths返回参数结构体
 * @class
 */
class UnlockCcnBandwidthsResponse extends  AbstractModel {
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
 * CreateDefaultSecurityGroup返回参数结构体
 * @class
 */
class CreateDefaultSecurityGroupResponse extends  AbstractModel {
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
 * DeleteLocalGateway返回参数结构体
 * @class
 */
class DeleteLocalGatewayResponse extends  AbstractModel {
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

        /**
         * 网卡trunking模式设置，Enable-开启，Disable--关闭，默认关闭。
         * @type {string || null}
         */
        this.TrunkingFlag = null;

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
        this.TrunkingFlag = 'TrunkingFlag' in params ? params.TrunkingFlag : null;

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
 * 私有网络配额
 * @class
 */
class VpcLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有网络配额描述
         * @type {string || null}
         */
        this.LimitType = null;

        /**
         * 私有网络配额值
         * @type {number || null}
         */
        this.LimitValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LimitType = 'LimitType' in params ? params.LimitType : null;
        this.LimitValue = 'LimitValue' in params ? params.LimitValue : null;

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

        /**
         * 网卡绑定的子机实例ID，该参数仅用于指定网卡退还IP并解绑子机的场景，如果不涉及解绑子机，请勿填写。
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

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DeleteVpnGatewayRoutes请求参数结构体
 * @class
 */
class DeleteVpnGatewayRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN网关实例ID
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * 路由ID信息列表
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
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

    }
}

/**
 * DescribeProductQuota请求参数结构体
 * @class
 */
class DescribeProductQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的网络产品名称，可查询的产品有：vpc、ccn、vpn、dc、dfw、clb、eip。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * ModifyNetDetect返回参数结构体
 * @class
 */
class ModifyNetDetectResponse extends  AbstractModel {
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
 * EnableFlowLogs返回参数结构体
 * @class
 */
class EnableFlowLogsResponse extends  AbstractModel {
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
 * LockCcnBandwidths返回参数结构体
 * @class
 */
class LockCcnBandwidthsResponse extends  AbstractModel {
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

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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
 * DescribeDhcpIps返回参数结构体
 * @class
 */
class DescribeDhcpIpsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例详细信息列表。
         * @type {Array.<DhcpIp> || null}
         */
        this.DhcpIpSet = null;

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

        if (params.DhcpIpSet) {
            this.DhcpIpSet = new Array();
            for (let z in params.DhcpIpSet) {
                let obj = new DhcpIp();
                obj.deserialize(params.DhcpIpSet[z]);
                this.DhcpIpSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeCrossBorderCcnRegionBandwidthLimits请求参数结构体
 * @class
 */
class DescribeCrossBorderCcnRegionBandwidthLimitsRequest extends  AbstractModel {
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
 * GetCcnRegionBandwidthLimits请求参数结构体
 * @class
 */
class GetCcnRegionBandwidthLimitsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN实例ID。形如：ccn-f49l6u0z。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 过滤条件。
<li>sregion - String - （过滤条件）源地域，形如：ap-guangzhou。</li>
<li>dregion - String - （过滤条件）目的地域，形如：ap-shanghai-bm</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序条件，目前支持带宽（BandwidthLimit）和过期时间（ExpireTime）
         * @type {string || null}
         */
        this.SortedBy = null;

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
         * 排序方式，'ASC':升序,'DESC':降序。
         * @type {string || null}
         */
        this.OrderBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.SortedBy = 'SortedBy' in params ? params.SortedBy : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

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
 * ResetNatGatewayConnection返回参数结构体
 * @class
 */
class ResetNatGatewayConnectionResponse extends  AbstractModel {
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
 * AssociateNetworkInterfaceSecurityGroups请求参数结构体
 * @class
 */
class AssociateNetworkInterfaceSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID。形如：eni-pxir56ns。每次请求的实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.NetworkInterfaceIds = null;

        /**
         * 安全组实例ID，例如：sg-33ocnj9n，可通过DescribeSecurityGroups获取。每次请求的实例的上限为100。
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
        this.NetworkInterfaceIds = 'NetworkInterfaceIds' in params ? params.NetworkInterfaceIds : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DeleteVpnGatewayRoutes返回参数结构体
 * @class
 */
class DeleteVpnGatewayRoutesResponse extends  AbstractModel {
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
         * 项目ID，默认0。可在qcloud控制台项目管理页面查询到。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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
 * DescribeSecurityGroupLimits请求参数结构体
 * @class
 */
class DescribeSecurityGroupLimitsRequest extends  AbstractModel {
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
 * DescribeClassicLinkInstances请求参数结构体
 * @class
 */
class DescribeClassicLinkInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li>vpc-id - String - （过滤条件）VPC实例ID。</li>
<li>vm-ip - String - （过滤条件）基础网络云服务器IP。</li>
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
 * ReleaseIp6AddressesBandwidth请求参数结构体
 * @class
 */
class ReleaseIp6AddressesBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPV6地址。Ip6Addresses和Ip6AddressIds必须且只能传一个
         * @type {Array.<string> || null}
         */
        this.Ip6Addresses = null;

        /**
         * IPV6地址对应的唯一ID，形如eip-xxxxxxxx。Ip6Addresses和Ip6AddressIds必须且只能传一个。
         * @type {Array.<string> || null}
         */
        this.Ip6AddressIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip6Addresses = 'Ip6Addresses' in params ? params.Ip6Addresses : null;
        this.Ip6AddressIds = 'Ip6AddressIds' in params ? params.Ip6AddressIds : null;

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

        /**
         * SSL VPN连接数设置，可选规格：5, 10, 20, 50, 100；单位：个。
         * @type {number || null}
         */
        this.MaxConnection = null;

        /**
         * 查询的VPN类型，支持IPSEC和SSL两种类型，为SSL类型时，MaxConnection参数必传。
         * @type {string || null}
         */
        this.Type = null;

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
        this.MaxConnection = 'MaxConnection' in params ? params.MaxConnection : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CreateAssistantCidr返回参数结构体
 * @class
 */
class CreateAssistantCidrResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 辅助CIDR数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssistantCidr> || null}
         */
        this.AssistantCidrSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AssistantCidrSet) {
            this.AssistantCidrSet = new Array();
            for (let z in params.AssistantCidrSet) {
                let obj = new AssistantCidr();
                obj.deserialize(params.AssistantCidrSet[z]);
                this.AssistantCidrSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
<li>address-template-name - IP地址模板名称。</li>
<li>address-template-id - IP地址模板实例ID，例如：ipm-mdunqeb6。</li>
<li>address-ip - IP地址。</li>
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
 * 冲突资源信息。
 * @class
 */
class ConflictSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 冲突资源ID
         * @type {string || null}
         */
        this.ConflictSourceId = null;

        /**
         * 冲突资源
         * @type {string || null}
         */
        this.SourceItem = null;

        /**
         * 冲突资源条目信息
         * @type {Array.<ConflictItem> || null}
         */
        this.ConflictItemSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConflictSourceId = 'ConflictSourceId' in params ? params.ConflictSourceId : null;
        this.SourceItem = 'SourceItem' in params ? params.SourceItem : null;

        if (params.ConflictItemSet) {
            this.ConflictItemSet = new Array();
            for (let z in params.ConflictItemSet) {
                let obj = new ConflictItem();
                obj.deserialize(params.ConflictItemSet[z]);
                this.ConflictItemSet.push(obj);
            }
        }

    }
}

/**
 * CreateDhcpIp请求参数结构体
 * @class
 */
class CreateDhcpIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有网络`ID`。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网`ID`。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * `DhcpIp`名称。
         * @type {string || null}
         */
        this.DhcpIpName = null;

        /**
         * 新申请的内网IP地址个数。总数不能超过64个。
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DhcpIpName = 'DhcpIpName' in params ? params.DhcpIpName : null;
        this.SecondaryPrivateIpAddressCount = 'SecondaryPrivateIpAddressCount' in params ? params.SecondaryPrivateIpAddressCount : null;

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
         * IP地址模板。
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
 * 描述配额信息
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
 * WithdrawNotifyRoutes返回参数结构体
 * @class
 */
class WithdrawNotifyRoutesResponse extends  AbstractModel {
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
 * DeleteNetworkAcl返回参数结构体
 * @class
 */
class DeleteNetworkAclResponse extends  AbstractModel {
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
         * 指定的内网IP信息，单次最多指定10个。与SecondaryPrivateIpAddressCount至少提供一个。
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 新申请的内网IP地址个数，与PrivateIpAddresses至少提供一个。内网IP地址个数总和不能超过配额数，详见<a href="/document/product/576/18527">弹性网卡使用限制</a>。
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
 * CreateSecurityGroupWithPolicies请求参数结构体
 * @class
 */
class CreateSecurityGroupWithPoliciesRequest extends  AbstractModel {
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
         * 项目ID，默认0。可在qcloud控制台项目管理页面查询到。
         * @type {string || null}
         */
        this.ProjectId = null;

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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupDescription = 'GroupDescription' in params ? params.GroupDescription : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

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
         * vpc的cidr，仅能在10.0.0.0/16，172.16.0.0/16，192.168.0.0/16这三个内网网段内。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 是否开启组播。true: 开启, false: 不开启。
         * @type {string || null}
         */
        this.EnableMulticast = null;

        /**
         * DNS地址，最多支持4个。
         * @type {Array.<string> || null}
         */
        this.DnsServers = null;

        /**
         * DHCP使用的域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DisableFlowLogs请求参数结构体
 * @class
 */
class DisableFlowLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流日志Id。
         * @type {Array.<string> || null}
         */
        this.FlowLogIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowLogIds = 'FlowLogIds' in params ? params.FlowLogIds : null;

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
 * NotifyRoutes返回参数结构体
 * @class
 */
class NotifyRoutesResponse extends  AbstractModel {
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
CVM：公网网关类型的云服务器；
VPN：VPN网关；
DIRECTCONNECT：专线网关；
PEERCONNECTION：对等连接；
HAVIP：高可用虚拟IP；
NAT：NAT网关; 
NORMAL_CVM：普通云服务器；
EIP：云服务器的公网IP；
LOCAL_GATEWAY：本地网关。
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
         * 路由策略ID。IPv4路由策略ID是有意义的值，IPv6路由策略是无意义的值0。后续建议完全使用字符串唯一ID `RouteItemId`操作路由策略。
该字段在删除时必填，其他字段无需填写。
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

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 目的IPv6网段，取值不能在私有网络网段内，例如：2402:4e00:1000:810b::/64。
         * @type {string || null}
         */
        this.DestinationIpv6CidrBlock = null;

        /**
         * 路由唯一策略ID。
         * @type {string || null}
         */
        this.RouteItemId = null;

        /**
         * 路由策略是否发布到云联网。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.PublishedToVbc = null;

        /**
         * 路由策略创建时间
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
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.GatewayType = 'GatewayType' in params ? params.GatewayType : null;
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.RouteDescription = 'RouteDescription' in params ? params.RouteDescription : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.DestinationIpv6CidrBlock = 'DestinationIpv6CidrBlock' in params ? params.DestinationIpv6CidrBlock : null;
        this.RouteItemId = 'RouteItemId' in params ? params.RouteItemId : null;
        this.PublishedToVbc = 'PublishedToVbc' in params ? params.PublishedToVbc : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * EnableVpnGatewaySslClientCert返回参数结构体
 * @class
 */
class EnableVpnGatewaySslClientCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务实例ID。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
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
 * ModifyVpcEndPointServiceWhiteList返回参数结构体
 * @class
 */
class ModifyVpcEndPointServiceWhiteListResponse extends  AbstractModel {
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

/**
 * DescribeTemplateLimits请求参数结构体
 * @class
 */
class DescribeTemplateLimitsRequest extends  AbstractModel {
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
 * AddTemplateMember请求参数结构体
 * @class
 */
class AddTemplateMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板实例ID，支持IP地址、协议端口、IP地址组、协议端口组四种参数模板的实例ID。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 需要添加的参数模板成员信息，支持IP地址、协议端口、IP地址组、协议端口组四种类型，类型需要与TemplateId参数类型一致。
         * @type {Array.<MemberInfo> || null}
         */
        this.TemplateMember = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.TemplateMember) {
            this.TemplateMember = new Array();
            for (let z in params.TemplateMember) {
                let obj = new MemberInfo();
                obj.deserialize(params.TemplateMember[z]);
                this.TemplateMember.push(obj);
            }
        }

    }
}

/**
 * DescribeVpcEndPointServiceWhiteList返回参数结构体
 * @class
 */
class DescribeVpcEndPointServiceWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单对象数组。
         * @type {Array.<VpcEndPointServiceUser> || null}
         */
        this.VpcEndpointServiceUserSet = null;

        /**
         * 符合条件的白名单个数。
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

        if (params.VpcEndpointServiceUserSet) {
            this.VpcEndpointServiceUserSet = new Array();
            for (let z in params.VpcEndpointServiceUserSet) {
                let obj = new VpcEndPointServiceUser();
                obj.deserialize(params.VpcEndpointServiceUserSet[z]);
                this.VpcEndpointServiceUserSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * IP地址模板信息
 * @class
 */
class AddressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ip地址。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 备注。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * AuditCrossBorderCompliance请求参数结构体
 * @class
 */
class AuditCrossBorderComplianceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务商, 可选值：`UNICOM`。
         * @type {string || null}
         */
        this.ServiceProvider = null;

        /**
         * 表单唯一`ID`。
         * @type {number || null}
         */
        this.ComplianceId = null;

        /**
         * 通过：`APPROVED `，拒绝：`DENY`。
         * @type {string || null}
         */
        this.AuditBehavior = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceProvider = 'ServiceProvider' in params ? params.ServiceProvider : null;
        this.ComplianceId = 'ComplianceId' in params ? params.ComplianceId : null;
        this.AuditBehavior = 'AuditBehavior' in params ? params.AuditBehavior : null;

    }
}

/**
 * DescribeNetDetects返回参数结构体
 * @class
 */
class DescribeNetDetectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的网络探测对象数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NetDetect> || null}
         */
        this.NetDetectSet = null;

        /**
         * 符合条件的网络探测对象数量。
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

        if (params.NetDetectSet) {
            this.NetDetectSet = new Array();
            for (let z in params.NetDetectSet) {
                let obj = new NetDetect();
                obj.deserialize(params.NetDetectSet[z]);
                this.NetDetectSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateNetworkAclResponse: CreateNetworkAclResponse,
    NetworkAcl: NetworkAcl,
    ModifyAddressTemplateAttributeResponse: ModifyAddressTemplateAttributeResponse,
    DisassociateDhcpIpWithAddressIpRequest: DisassociateDhcpIpWithAddressIpRequest,
    SecurityGroupLimitSet: SecurityGroupLimitSet,
    LockCcnsRequest: LockCcnsRequest,
    CreateRoutesRequest: CreateRoutesRequest,
    DescribeHaVipsResponse: DescribeHaVipsResponse,
    SecurityGroupAssociationStatistics: SecurityGroupAssociationStatistics,
    DeleteServiceTemplateResponse: DeleteServiceTemplateResponse,
    CreateServiceTemplateRequest: CreateServiceTemplateRequest,
    DescribeIp6TranslatorQuotaResponse: DescribeIp6TranslatorQuotaResponse,
    CreateCcnResponse: CreateCcnResponse,
    DescribeVpnConnectionsRequest: DescribeVpnConnectionsRequest,
    CreateAssistantCidrRequest: CreateAssistantCidrRequest,
    DescribeNetworkInterfacesRequest: DescribeNetworkInterfacesRequest,
    DescribeVpcLimitsRequest: DescribeVpcLimitsRequest,
    ReleaseIp6AddressesBandwidthResponse: ReleaseIp6AddressesBandwidthResponse,
    DescribeVpcIpv6AddressesRequest: DescribeVpcIpv6AddressesRequest,
    SslVpnClient: SslVpnClient,
    SourceIpTranslationNatRule: SourceIpTranslationNatRule,
    DisableCcnRoutesRequest: DisableCcnRoutesRequest,
    ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse: ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse,
    ModifyIp6RuleResponse: ModifyIp6RuleResponse,
    ModifyCcnRegionBandwidthLimitsTypeResponse: ModifyCcnRegionBandwidthLimitsTypeResponse,
    DescribeVpnGatewaysResponse: DescribeVpnGatewaysResponse,
    ServiceTemplateGroup: ServiceTemplateGroup,
    CreateDhcpIpResponse: CreateDhcpIpResponse,
    DeleteVpnGatewaySslServerResponse: DeleteVpnGatewaySslServerResponse,
    DescribeIpGeolocationInfosRequest: DescribeIpGeolocationInfosRequest,
    AddTemplateMemberResponse: AddTemplateMemberResponse,
    CreateDefaultSecurityGroupRequest: CreateDefaultSecurityGroupRequest,
    DescribeServiceTemplateGroupsResponse: DescribeServiceTemplateGroupsResponse,
    DescribeVpcEndPointRequest: DescribeVpcEndPointRequest,
    DetachClassicLinkVpcRequest: DetachClassicLinkVpcRequest,
    DescribeBandwidthPackageBillUsageResponse: DescribeBandwidthPackageBillUsageResponse,
    DeleteBandwidthPackageResponse: DeleteBandwidthPackageResponse,
    ModifyNatGatewayAttributeRequest: ModifyNatGatewayAttributeRequest,
    DescribeLocalGatewayRequest: DescribeLocalGatewayRequest,
    FlowLog: FlowLog,
    DescribeVpcLimitsResponse: DescribeVpcLimitsResponse,
    IpField: IpField,
    AddBandwidthPackageResourcesRequest: AddBandwidthPackageResourcesRequest,
    AssignIpv6SubnetCidrBlockRequest: AssignIpv6SubnetCidrBlockRequest,
    DeleteVpnGatewaySslClientResponse: DeleteVpnGatewaySslClientResponse,
    CreateVpcResponse: CreateVpcResponse,
    AssistantCidr: AssistantCidr,
    ModifyNetworkAclEntriesRequest: ModifyNetworkAclEntriesRequest,
    DescribeVpcPrivateIpAddressesRequest: DescribeVpcPrivateIpAddressesRequest,
    AddressTemplate: AddressTemplate,
    IKEOptionsSpecification: IKEOptionsSpecification,
    VpnGatewayQuota: VpnGatewayQuota,
    DescribeBandwidthPackageBillUsageRequest: DescribeBandwidthPackageBillUsageRequest,
    UnassignIpv6AddressesResponse: UnassignIpv6AddressesResponse,
    CreateIp6TranslatorsResponse: CreateIp6TranslatorsResponse,
    DescribeFlowLogsRequest: DescribeFlowLogsRequest,
    DeleteTemplateMemberRequest: DeleteTemplateMemberRequest,
    CloneSecurityGroupRequest: CloneSecurityGroupRequest,
    AssociateNatGatewayAddressRequest: AssociateNatGatewayAddressRequest,
    CreateDirectConnectGatewayRequest: CreateDirectConnectGatewayRequest,
    CreateVpnGatewaySslServerRequest: CreateVpnGatewaySslServerRequest,
    CreateVpcEndPointRequest: CreateVpcEndPointRequest,
    ModifyBandwidthPackageAttributeRequest: ModifyBandwidthPackageAttributeRequest,
    TransformAddressResponse: TransformAddressResponse,
    DisassociateNetworkInterfaceSecurityGroupsRequest: DisassociateNetworkInterfaceSecurityGroupsRequest,
    SecurityGroupPolicySet: SecurityGroupPolicySet,
    ModifyFlowLogAttributeRequest: ModifyFlowLogAttributeRequest,
    UnassignIpv6SubnetCidrBlockResponse: UnassignIpv6SubnetCidrBlockResponse,
    ModifyVpcEndPointServiceAttributeRequest: ModifyVpcEndPointServiceAttributeRequest,
    FilterObject: FilterObject,
    DescribeIpGeolocationInfosResponse: DescribeIpGeolocationInfosResponse,
    DescribeVpcTaskResultRequest: DescribeVpcTaskResultRequest,
    AssociateNetworkAclSubnetsResponse: AssociateNetworkAclSubnetsResponse,
    DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest: DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest,
    ResetRoutesRequest: ResetRoutesRequest,
    CheckDefaultSubnetRequest: CheckDefaultSubnetRequest,
    CheckNetDetectStateRequest: CheckNetDetectStateRequest,
    RouteTableAssociation: RouteTableAssociation,
    ModifyCustomerGatewayAttributeRequest: ModifyCustomerGatewayAttributeRequest,
    DescribeRouteTablesResponse: DescribeRouteTablesResponse,
    DeleteVpcEndPointServiceWhiteListRequest: DeleteVpcEndPointServiceWhiteListRequest,
    DetachNetworkInterfaceResponse: DetachNetworkInterfaceResponse,
    DeleteVpcEndPointServiceRequest: DeleteVpcEndPointServiceRequest,
    DeleteCcnResponse: DeleteCcnResponse,
    ServiceTemplate: ServiceTemplate,
    DescribeCcnAttachedInstancesRequest: DescribeCcnAttachedInstancesRequest,
    DescribeNatGatewaySourceIpTranslationNatRulesRequest: DescribeNatGatewaySourceIpTranslationNatRulesRequest,
    DescribeNatGatewaysRequest: DescribeNatGatewaysRequest,
    ModifyFlowLogAttributeResponse: ModifyFlowLogAttributeResponse,
    DescribeBandwidthPackagesResponse: DescribeBandwidthPackagesResponse,
    DescribeDirectConnectGatewaysRequest: DescribeDirectConnectGatewaysRequest,
    DisableVpnGatewaySslClientCertRequest: DisableVpnGatewaySslClientCertRequest,
    DescribeVpcPrivateIpAddressesResponse: DescribeVpcPrivateIpAddressesResponse,
    ModifyIp6TranslatorResponse: ModifyIp6TranslatorResponse,
    CreateVpcEndPointServiceWhiteListResponse: CreateVpcEndPointServiceWhiteListResponse,
    DescribeIpGeolocationDatabaseUrlResponse: DescribeIpGeolocationDatabaseUrlResponse,
    UnlockCcnBandwidthsRequest: UnlockCcnBandwidthsRequest,
    DeleteIp6TranslatorsResponse: DeleteIp6TranslatorsResponse,
    DescribeNatGatewaySourceIpTranslationNatRulesResponse: DescribeNatGatewaySourceIpTranslationNatRulesResponse,
    DescribeVpcsRequest: DescribeVpcsRequest,
    DescribeRouteConflictsResponse: DescribeRouteConflictsResponse,
    AcceptAttachCcnInstancesRequest: AcceptAttachCcnInstancesRequest,
    DescribeGatewayFlowMonitorDetailResponse: DescribeGatewayFlowMonitorDetailResponse,
    IpGeolocationInfo: IpGeolocationInfo,
    DeleteFlowLogRequest: DeleteFlowLogRequest,
    NetDetectState: NetDetectState,
    HaVipDisassociateAddressIpResponse: HaVipDisassociateAddressIpResponse,
    DisassociateVpcEndPointSecurityGroupsRequest: DisassociateVpcEndPointSecurityGroupsRequest,
    DescribeTaskResultRequest: DescribeTaskResultRequest,
    ModifyAddressInternetChargeTypeResponse: ModifyAddressInternetChargeTypeResponse,
    UnassignIpv6SubnetCidrBlockRequest: UnassignIpv6SubnetCidrBlockRequest,
    DeleteVpcEndPointServiceResponse: DeleteVpcEndPointServiceResponse,
    AssignIpv6CidrBlockRequest: AssignIpv6CidrBlockRequest,
    CreateSecurityGroupPoliciesResponse: CreateSecurityGroupPoliciesResponse,
    UnassignIpv6CidrBlockResponse: UnassignIpv6CidrBlockResponse,
    ModifyVpnGatewayRoutesRequest: ModifyVpnGatewayRoutesRequest,
    HaVipAssociateAddressIpRequest: HaVipAssociateAddressIpRequest,
    DisassociateNatGatewayAddressResponse: DisassociateNatGatewayAddressResponse,
    DeleteRoutesResponse: DeleteRoutesResponse,
    DescribeCrossBorderComplianceRequest: DescribeCrossBorderComplianceRequest,
    DescribeSecurityGroupAssociationStatisticsResponse: DescribeSecurityGroupAssociationStatisticsResponse,
    ModifyAssistantCidrResponse: ModifyAssistantCidrResponse,
    CidrForCcn: CidrForCcn,
    NatGatewayAddress: NatGatewayAddress,
    DescribeVpcEndPointServiceResponse: DescribeVpcEndPointServiceResponse,
    ModifyNetworkAclEntriesResponse: ModifyNetworkAclEntriesResponse,
    ModifyVpcEndPointAttributeResponse: ModifyVpcEndPointAttributeResponse,
    DescribeFlowLogRequest: DescribeFlowLogRequest,
    DescribeTenantCcnsRequest: DescribeTenantCcnsRequest,
    DescribeIp6AddressesRequest: DescribeIp6AddressesRequest,
    AddIp6RulesRequest: AddIp6RulesRequest,
    DescribeAccountAttributesResponse: DescribeAccountAttributesResponse,
    AssignPrivateIpAddressesResponse: AssignPrivateIpAddressesResponse,
    DescribeSecurityGroupsRequest: DescribeSecurityGroupsRequest,
    RefreshDirectConnectGatewayRouteToNatGatewayRequest: RefreshDirectConnectGatewayRouteToNatGatewayRequest,
    DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest: DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest,
    ModifyNetworkAclAttributeResponse: ModifyNetworkAclAttributeResponse,
    CreateVpnGatewayRoutesRequest: CreateVpnGatewayRoutesRequest,
    DisassociateNetworkAclSubnetsResponse: DisassociateNetworkAclSubnetsResponse,
    SetCcnRegionBandwidthLimitsRequest: SetCcnRegionBandwidthLimitsRequest,
    ModifyAddressInternetChargeTypeRequest: ModifyAddressInternetChargeTypeRequest,
    ModifyIp6AddressesBandwidthRequest: ModifyIp6AddressesBandwidthRequest,
    DisableVpnGatewaySslClientCertResponse: DisableVpnGatewaySslClientCertResponse,
    CreateLocalGatewayRequest: CreateLocalGatewayRequest,
    DescribeDirectConnectGatewaysResponse: DescribeDirectConnectGatewaysResponse,
    AddBandwidthPackageResourcesResponse: AddBandwidthPackageResourcesResponse,
    Ip6RuleInfo: Ip6RuleInfo,
    CreateSecurityGroupWithPoliciesResponse: CreateSecurityGroupWithPoliciesResponse,
    DeleteAddressTemplateResponse: DeleteAddressTemplateResponse,
    ModifySubnetAttributeResponse: ModifySubnetAttributeResponse,
    ResetNatGatewayConnectionRequest: ResetNatGatewayConnectionRequest,
    ModifyCcnAttachedInstancesAttributeRequest: ModifyCcnAttachedInstancesAttributeRequest,
    DeleteAddressTemplateRequest: DeleteAddressTemplateRequest,
    CreateNatGatewaySourceIpTranslationNatRuleRequest: CreateNatGatewaySourceIpTranslationNatRuleRequest,
    NetworkInterface: NetworkInterface,
    TransformAddressRequest: TransformAddressRequest,
    ReplaceDirectConnectGatewayCcnRoutesRequest: ReplaceDirectConnectGatewayCcnRoutesRequest,
    ReferredSecurityGroup: ReferredSecurityGroup,
    ModifyAddressTemplateAttributeRequest: ModifyAddressTemplateAttributeRequest,
    CreateNatGatewayResponse: CreateNatGatewayResponse,
    DescribeVpnGatewaySslClientsRequest: DescribeVpnGatewaySslClientsRequest,
    DescribeIp6TranslatorQuotaRequest: DescribeIp6TranslatorQuotaRequest,
    ModifySecurityGroupAttributeRequest: ModifySecurityGroupAttributeRequest,
    DescribeVpnGatewaySslServersRequest: DescribeVpnGatewaySslServersRequest,
    ModifyNetDetectRequest: ModifyNetDetectRequest,
    DescribeNetDetectStatesResponse: DescribeNetDetectStatesResponse,
    DeleteVpnGatewaySslServerRequest: DeleteVpnGatewaySslServerRequest,
    AllocateIp6AddressesBandwidthResponse: AllocateIp6AddressesBandwidthResponse,
    DescribeNetDetectStatesRequest: DescribeNetDetectStatesRequest,
    DescribeNatGatewaysResponse: DescribeNatGatewaysResponse,
    DescribeFlowLogResponse: DescribeFlowLogResponse,
    DownloadCustomerGatewayConfigurationResponse: DownloadCustomerGatewayConfigurationResponse,
    DescribeBandwidthPackagesRequest: DescribeBandwidthPackagesRequest,
    DeleteDirectConnectGatewayCcnRoutesResponse: DeleteDirectConnectGatewayCcnRoutesResponse,
    DescribeAssistantCidrResponse: DescribeAssistantCidrResponse,
    InstanceStatistic: InstanceStatistic,
    CreateVpnConnectionRequest: CreateVpnConnectionRequest,
    CcnRoute: CcnRoute,
    ModifyIpv6AddressesAttributeResponse: ModifyIpv6AddressesAttributeResponse,
    DeleteSecurityGroupPoliciesRequest: DeleteSecurityGroupPoliciesRequest,
    VpnConnection: VpnConnection,
    DescribeCcnsRequest: DescribeCcnsRequest,
    ModifyNatGatewayAttributeResponse: ModifyNatGatewayAttributeResponse,
    DescribeNetDetectsRequest: DescribeNetDetectsRequest,
    CreateAddressTemplateGroupRequest: CreateAddressTemplateGroupRequest,
    DescribeNatGatewayDirectConnectGatewayRouteRequest: DescribeNatGatewayDirectConnectGatewayRouteRequest,
    DescribeCustomerGatewayVendorsResponse: DescribeCustomerGatewayVendorsResponse,
    RouteConflict: RouteConflict,
    DeleteSubnetResponse: DeleteSubnetResponse,
    Vpc: Vpc,
    CreateVpnGatewayResponse: CreateVpnGatewayResponse,
    DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse: DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse,
    FlowLogStorage: FlowLogStorage,
    DescribeVpcIpv6AddressesResponse: DescribeVpcIpv6AddressesResponse,
    ResetAttachCcnInstancesResponse: ResetAttachCcnInstancesResponse,
    RejectAttachCcnInstancesRequest: RejectAttachCcnInstancesRequest,
    ModifyCcnRegionBandwidthLimitsTypeRequest: ModifyCcnRegionBandwidthLimitsTypeRequest,
    VpnGatewayRoute: VpnGatewayRoute,
    DescribeVpcResourceDashboardRequest: DescribeVpcResourceDashboardRequest,
    ModifyIp6RuleRequest: ModifyIp6RuleRequest,
    ReplaceRouteTableAssociationRequest: ReplaceRouteTableAssociationRequest,
    AssociateNetworkAclSubnetsRequest: AssociateNetworkAclSubnetsRequest,
    CheckAssistantCidrRequest: CheckAssistantCidrRequest,
    RenewVpnGatewayRequest: RenewVpnGatewayRequest,
    SecurityGroupPolicy: SecurityGroupPolicy,
    NotifyRoutesRequest: NotifyRoutesRequest,
    DeleteVpcRequest: DeleteVpcRequest,
    ModifyServiceTemplateAttributeResponse: ModifyServiceTemplateAttributeResponse,
    DescribeCcnsResponse: DescribeCcnsResponse,
    TemplateLimit: TemplateLimit,
    CreateSubnetResponse: CreateSubnetResponse,
    DescribeSecurityGroupPoliciesResponse: DescribeSecurityGroupPoliciesResponse,
    DescribeGatewayFlowQosResponse: DescribeGatewayFlowQosResponse,
    ModifySecurityGroupPoliciesRequest: ModifySecurityGroupPoliciesRequest,
    NatGateway: NatGateway,
    AssociateDhcpIpWithAddressIpRequest: AssociateDhcpIpWithAddressIpRequest,
    ReplaceRoutesRequest: ReplaceRoutesRequest,
    CreateCustomerGatewayResponse: CreateCustomerGatewayResponse,
    WithdrawNotifyRoutesRequest: WithdrawNotifyRoutesRequest,
    DeleteServiceTemplateGroupResponse: DeleteServiceTemplateGroupResponse,
    DisassociateAddressRequest: DisassociateAddressRequest,
    NetworkAclEntrySet: NetworkAclEntrySet,
    DeleteVpnConnectionResponse: DeleteVpnConnectionResponse,
    DescribeVpnGatewaySslClientsResponse: DescribeVpnGatewaySslClientsResponse,
    DescribeBandwidthPackageResourcesRequest: DescribeBandwidthPackageResourcesRequest,
    EnableCcnRoutesRequest: EnableCcnRoutesRequest,
    Tag: Tag,
    CreateFlowLogResponse: CreateFlowLogResponse,
    DefaultVpcSubnet: DefaultVpcSubnet,
    DescribeIp6TranslatorsRequest: DescribeIp6TranslatorsRequest,
    CreateSubnetsResponse: CreateSubnetsResponse,
    DescribeGatewayFlowMonitorDetailRequest: DescribeGatewayFlowMonitorDetailRequest,
    InquiryPriceCreateVpnGatewayResponse: InquiryPriceCreateVpnGatewayResponse,
    DescribeSecurityGroupLimitsResponse: DescribeSecurityGroupLimitsResponse,
    CustomerGateway: CustomerGateway,
    ModifyDirectConnectGatewayAttributeRequest: ModifyDirectConnectGatewayAttributeRequest,
    ModifyBandwidthPackageAttributeResponse: ModifyBandwidthPackageAttributeResponse,
    CreateVpnGatewaySslServerResponse: CreateVpnGatewaySslServerResponse,
    ResetRoutesResponse: ResetRoutesResponse,
    DeleteNetworkAclRequest: DeleteNetworkAclRequest,
    NatGatewayDestinationIpPortTranslationNatRule: NatGatewayDestinationIpPortTranslationNatRule,
    CloneSecurityGroupResponse: CloneSecurityGroupResponse,
    ModifyDhcpIpAttributeRequest: ModifyDhcpIpAttributeRequest,
    ModifyIp6TranslatorRequest: ModifyIp6TranslatorRequest,
    CreateVpnConnectionResponse: CreateVpnConnectionResponse,
    AddressTemplateSpecification: AddressTemplateSpecification,
    VpcIpv6Address: VpcIpv6Address,
    AssignIpv6AddressesRequest: AssignIpv6AddressesRequest,
    CreateServiceTemplateGroupResponse: CreateServiceTemplateGroupResponse,
    NetDetect: NetDetect,
    VpnGatewayRouteModify: VpnGatewayRouteModify,
    MemberInfo: MemberInfo,
    ReplaceSecurityGroupPolicyRequest: ReplaceSecurityGroupPolicyRequest,
    ModifyVpcEndPointServiceAttributeResponse: ModifyVpcEndPointServiceAttributeResponse,
    ResourceDashboard: ResourceDashboard,
    DescribeCcnAttachedInstancesResponse: DescribeCcnAttachedInstancesResponse,
    HaVipAssociateAddressIpResponse: HaVipAssociateAddressIpResponse,
    DeleteCustomerGatewayResponse: DeleteCustomerGatewayResponse,
    CreateVpnGatewayRoutesResponse: CreateVpnGatewayRoutesResponse,
    CreateNetDetectRequest: CreateNetDetectRequest,
    CreateAddressTemplateResponse: CreateAddressTemplateResponse,
    CreateNatGatewayDestinationIpPortTranslationNatRuleResponse: CreateNatGatewayDestinationIpPortTranslationNatRuleResponse,
    DeleteAddressTemplateGroupRequest: DeleteAddressTemplateGroupRequest,
    CreateVpnGatewaySslClientResponse: CreateVpnGatewaySslClientResponse,
    DescribeNetworkInterfaceLimitRequest: DescribeNetworkInterfaceLimitRequest,
    CreateBandwidthPackageRequest: CreateBandwidthPackageRequest,
    DescribeIp6AddressesResponse: DescribeIp6AddressesResponse,
    ModifyRouteTableAttributeRequest: ModifyRouteTableAttributeRequest,
    ModifyDirectConnectGatewayAttributeResponse: ModifyDirectConnectGatewayAttributeResponse,
    DescribeVpnGatewaysRequest: DescribeVpnGatewaysRequest,
    NetDetectIpState: NetDetectIpState,
    ModifyIp6AddressesBandwidthResponse: ModifyIp6AddressesBandwidthResponse,
    CreateSubnetsRequest: CreateSubnetsRequest,
    DescribeVpcEndPointServiceRequest: DescribeVpcEndPointServiceRequest,
    ModifyServiceTemplateAttributeRequest: ModifyServiceTemplateAttributeRequest,
    AssociateAddressResponse: AssociateAddressResponse,
    ModifyCcnAttachedInstancesAttributeResponse: ModifyCcnAttachedInstancesAttributeResponse,
    CreateNetworkAclRequest: CreateNetworkAclRequest,
    DescribeAddressesRequest: DescribeAddressesRequest,
    DescribeSecurityGroupPoliciesRequest: DescribeSecurityGroupPoliciesRequest,
    ModifyNetworkInterfaceAttributeResponse: ModifyNetworkInterfaceAttributeResponse,
    CreateSecurityGroupResponse: CreateSecurityGroupResponse,
    DisassociateNetworkInterfaceSecurityGroupsResponse: DisassociateNetworkInterfaceSecurityGroupsResponse,
    DescribeVpcsResponse: DescribeVpcsResponse,
    DescribeNetworkInterfaceLimitResponse: DescribeNetworkInterfaceLimitResponse,
    AssignIpv6CidrBlockResponse: AssignIpv6CidrBlockResponse,
    CreateCcnRequest: CreateCcnRequest,
    DeleteTemplateMemberResponse: DeleteTemplateMemberResponse,
    ModifyNatGatewaySourceIpTranslationNatRuleRequest: ModifyNatGatewaySourceIpTranslationNatRuleRequest,
    RemoveIp6RulesRequest: RemoveIp6RulesRequest,
    DescribeIpGeolocationDatabaseUrlRequest: DescribeIpGeolocationDatabaseUrlRequest,
    DescribeVpcEndPointResponse: DescribeVpcEndPointResponse,
    DisableGatewayFlowMonitorRequest: DisableGatewayFlowMonitorRequest,
    EnableRoutesResponse: EnableRoutesResponse,
    DeleteVpnConnectionRequest: DeleteVpnConnectionRequest,
    NetworkAclEntry: NetworkAclEntry,
    DescribeDhcpIpsRequest: DescribeDhcpIpsRequest,
    DescribeAssistantCidrRequest: DescribeAssistantCidrRequest,
    RenewVpnGatewayResponse: RenewVpnGatewayResponse,
    DeleteDirectConnectGatewayResponse: DeleteDirectConnectGatewayResponse,
    ModifyAddressesBandwidthRequest: ModifyAddressesBandwidthRequest,
    ResetVpnGatewayInternetMaxBandwidthRequest: ResetVpnGatewayInternetMaxBandwidthRequest,
    EndPoint: EndPoint,
    DirectConnectGateway: DirectConnectGateway,
    DescribeProductQuotaResponse: DescribeProductQuotaResponse,
    Price: Price,
    HaVipDisassociateAddressIpRequest: HaVipDisassociateAddressIpRequest,
    DisableFlowLogsResponse: DisableFlowLogsResponse,
    DescribeBandwidthPackageResourcesResponse: DescribeBandwidthPackageResourcesResponse,
    DescribeCrossBorderComplianceResponse: DescribeCrossBorderComplianceResponse,
    ModifyVpnGatewayAttributeResponse: ModifyVpnGatewayAttributeResponse,
    AssociateDirectConnectGatewayNatGatewayResponse: AssociateDirectConnectGatewayNatGatewayResponse,
    EndPointService: EndPointService,
    DescribeVpcResourceDashboardResponse: DescribeVpcResourceDashboardResponse,
    DescribeVpnGatewayCcnRoutesRequest: DescribeVpnGatewayCcnRoutesRequest,
    DisassociateDirectConnectGatewayNatGatewayResponse: DisassociateDirectConnectGatewayNatGatewayResponse,
    CreateServiceTemplateGroupRequest: CreateServiceTemplateGroupRequest,
    DescribeClassicLinkInstancesResponse: DescribeClassicLinkInstancesResponse,
    EnableVpnGatewaySslClientCertRequest: EnableVpnGatewaySslClientCertRequest,
    DescribeVpnGatewayCcnRoutesResponse: DescribeVpnGatewayCcnRoutesResponse,
    DetachCcnInstancesRequest: DetachCcnInstancesRequest,
    ModifyVpcEndPointServiceWhiteListRequest: ModifyVpcEndPointServiceWhiteListRequest,
    DescribeTenantCcnsResponse: DescribeTenantCcnsResponse,
    Filter: Filter,
    MigrateNetworkInterfaceResponse: MigrateNetworkInterfaceResponse,
    DeleteDirectConnectGatewayRequest: DeleteDirectConnectGatewayRequest,
    CreateNatGatewaySourceIpTranslationNatRuleResponse: CreateNatGatewaySourceIpTranslationNatRuleResponse,
    DeleteNatGatewaySourceIpTranslationNatRuleResponse: DeleteNatGatewaySourceIpTranslationNatRuleResponse,
    CcnAttachedInstance: CcnAttachedInstance,
    SecurityPolicyDatabase: SecurityPolicyDatabase,
    ResetVpnConnectionResponse: ResetVpnConnectionResponse,
    CreateVpcEndPointServiceRequest: CreateVpcEndPointServiceRequest,
    Ipv6Address: Ipv6Address,
    CreateNetworkInterfaceRequest: CreateNetworkInterfaceRequest,
    BandwidthPackageBillBandwidth: BandwidthPackageBillBandwidth,
    DeleteHaVipResponse: DeleteHaVipResponse,
    DescribeFlowLogsResponse: DescribeFlowLogsResponse,
    VpcPrivateIpAddress: VpcPrivateIpAddress,
    CvmInstance: CvmInstance,
    DescribeNetworkAclsRequest: DescribeNetworkAclsRequest,
    DescribeSubnetsRequest: DescribeSubnetsRequest,
    CreateSubnetRequest: CreateSubnetRequest,
    AddressTemplateGroup: AddressTemplateGroup,
    DownloadCustomerGatewayConfigurationRequest: DownloadCustomerGatewayConfigurationRequest,
    DeleteBandwidthPackageRequest: DeleteBandwidthPackageRequest,
    HaVip: HaVip,
    ModifyAddressesBandwidthResponse: ModifyAddressesBandwidthResponse,
    LocalGateway: LocalGateway,
    RejectAttachCcnInstancesResponse: RejectAttachCcnInstancesResponse,
    SetCcnRegionBandwidthLimitsResponse: SetCcnRegionBandwidthLimitsResponse,
    DescribeAccountAttributesRequest: DescribeAccountAttributesRequest,
    RenewAddressesResponse: RenewAddressesResponse,
    DescribeCcnRoutesRequest: DescribeCcnRoutesRequest,
    ModifyDhcpIpAttributeResponse: ModifyDhcpIpAttributeResponse,
    CreateAndAttachNetworkInterfaceRequest: CreateAndAttachNetworkInterfaceRequest,
    DeleteVpcEndPointResponse: DeleteVpcEndPointResponse,
    DeleteDhcpIpResponse: DeleteDhcpIpResponse,
    SslVpnSever: SslVpnSever,
    DownloadVpnGatewaySslClientCertResponse: DownloadVpnGatewaySslClientCertResponse,
    DeleteNetDetectResponse: DeleteNetDetectResponse,
    AllocateAddressesRequest: AllocateAddressesRequest,
    CrossBorderCompliance: CrossBorderCompliance,
    ModifyAssistantCidrRequest: ModifyAssistantCidrRequest,
    CreateIp6TranslatorsRequest: CreateIp6TranslatorsRequest,
    AssociateDhcpIpWithAddressIpResponse: AssociateDhcpIpWithAddressIpResponse,
    ModifyGatewayFlowQosResponse: ModifyGatewayFlowQosResponse,
    ModifyNetworkInterfaceQosResponse: ModifyNetworkInterfaceQosResponse,
    ModifySecurityGroupAttributeResponse: ModifySecurityGroupAttributeResponse,
    AssociateDirectConnectGatewayNatGatewayRequest: AssociateDirectConnectGatewayNatGatewayRequest,
    AddressTemplateItem: AddressTemplateItem,
    ModifyAddressAttributeResponse: ModifyAddressAttributeResponse,
    AttachClassicLinkVpcRequest: AttachClassicLinkVpcRequest,
    GatewayFlowMonitorDetail: GatewayFlowMonitorDetail,
    CreateVpnGatewaySslClientRequest: CreateVpnGatewaySslClientRequest,
    UnlockCcnsRequest: UnlockCcnsRequest,
    DescribeVpnGatewaySslServersResponse: DescribeVpnGatewaySslServersResponse,
    DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse: DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse,
    DeleteVpnGatewayRequest: DeleteVpnGatewayRequest,
    ReplaceRouteTableAssociationResponse: ReplaceRouteTableAssociationResponse,
    AttachCcnInstancesRequest: AttachCcnInstancesRequest,
    DescribeDirectConnectGatewayCcnRoutesRequest: DescribeDirectConnectGatewayCcnRoutesRequest,
    CcnInstance: CcnInstance,
    DescribeLocalGatewayResponse: DescribeLocalGatewayResponse,
    ItemPrice: ItemPrice,
    DeleteNatGatewayRequest: DeleteNatGatewayRequest,
    ModifyCustomerGatewayAttributeResponse: ModifyCustomerGatewayAttributeResponse,
    ConflictItem: ConflictItem,
    InquiryPriceRenewVpnGatewayResponse: InquiryPriceRenewVpnGatewayResponse,
    AssignIpv6SubnetCidrBlockResponse: AssignIpv6SubnetCidrBlockResponse,
    CreateVpcEndPointResponse: CreateVpcEndPointResponse,
    DeleteAssistantCidrResponse: DeleteAssistantCidrResponse,
    DescribeCcnRegionBandwidthLimitsResponse: DescribeCcnRegionBandwidthLimitsResponse,
    ModifyTemplateMemberRequest: ModifyTemplateMemberRequest,
    DescribeAddressesResponse: DescribeAddressesResponse,
    GatewayQos: GatewayQos,
    ModifyIpv6AddressesAttributeRequest: ModifyIpv6AddressesAttributeRequest,
    DescribeCustomerGatewayVendorsRequest: DescribeCustomerGatewayVendorsRequest,
    DeleteLocalGatewayRequest: DeleteLocalGatewayRequest,
    ResetVpnGatewayInternetMaxBandwidthResponse: ResetVpnGatewayInternetMaxBandwidthResponse,
    LockCcnBandwidthsRequest: LockCcnBandwidthsRequest,
    AddressChargePrepaid: AddressChargePrepaid,
    DescribeVpnGatewayRoutesResponse: DescribeVpnGatewayRoutesResponse,
    DescribeNetworkAclsResponse: DescribeNetworkAclsResponse,
    DeleteFlowLogResponse: DeleteFlowLogResponse,
    AttachCcnInstancesResponse: AttachCcnInstancesResponse,
    CreateDefaultVpcResponse: CreateDefaultVpcResponse,
    ModifyVpcAttributeResponse: ModifyVpcAttributeResponse,
    ModifyVpnConnectionAttributeResponse: ModifyVpnConnectionAttributeResponse,
    PrivateIpAddressSpecification: PrivateIpAddressSpecification,
    AlgType: AlgType,
    MigratePrivateIpAddressResponse: MigratePrivateIpAddressResponse,
    DeleteRouteTableResponse: DeleteRouteTableResponse,
    DescribeVpcInstancesResponse: DescribeVpcInstancesResponse,
    AccountAttribute: AccountAttribute,
    DeleteDirectConnectGatewayCcnRoutesRequest: DeleteDirectConnectGatewayCcnRoutesRequest,
    ModifyNatGatewaySourceIpTranslationNatRuleResponse: ModifyNatGatewaySourceIpTranslationNatRuleResponse,
    CreateNatGatewayDestinationIpPortTranslationNatRuleRequest: CreateNatGatewayDestinationIpPortTranslationNatRuleRequest,
    CreateFlowLogRequest: CreateFlowLogRequest,
    InquirePriceCreateDirectConnectGatewayRequest: InquirePriceCreateDirectConnectGatewayRequest,
    AttachNetworkInterfaceResponse: AttachNetworkInterfaceResponse,
    DisassociateNatGatewayAddressRequest: DisassociateNatGatewayAddressRequest,
    DescribeServiceTemplatesResponse: DescribeServiceTemplatesResponse,
    DescribeRouteTablesRequest: DescribeRouteTablesRequest,
    ResetAttachCcnInstancesRequest: ResetAttachCcnInstancesRequest,
    CreateHaVipResponse: CreateHaVipResponse,
    DescribeSecurityGroupReferencesRequest: DescribeSecurityGroupReferencesRequest,
    DescribeTemplateLimitsResponse: DescribeTemplateLimitsResponse,
    CheckDefaultSubnetResponse: CheckDefaultSubnetResponse,
    DisableRoutesRequest: DisableRoutesRequest,
    DisassociateDirectConnectGatewayNatGatewayRequest: DisassociateDirectConnectGatewayNatGatewayRequest,
    EnableRoutesRequest: EnableRoutesRequest,
    DescribeAddressTemplateGroupsResponse: DescribeAddressTemplateGroupsResponse,
    ReleaseAddressesRequest: ReleaseAddressesRequest,
    CreateDirectConnectGatewayCcnRoutesRequest: CreateDirectConnectGatewayCcnRoutesRequest,
    ModifyGatewayFlowQosRequest: ModifyGatewayFlowQosRequest,
    CreateDirectConnectGatewayCcnRoutesResponse: CreateDirectConnectGatewayCcnRoutesResponse,
    CreateRouteTableRequest: CreateRouteTableRequest,
    MigrateNetworkInterfaceRequest: MigrateNetworkInterfaceRequest,
    DescribeCustomerGatewaysRequest: DescribeCustomerGatewaysRequest,
    RenewAddressesRequest: RenewAddressesRequest,
    ProductQuota: ProductQuota,
    DisableRoutesResponse: DisableRoutesResponse,
    ModifyAddressAttributeRequest: ModifyAddressAttributeRequest,
    DhcpIp: DhcpIp,
    DeleteAssistantCidrRequest: DeleteAssistantCidrRequest,
    ModifyTemplateMemberResponse: ModifyTemplateMemberResponse,
    DeleteVpnGatewaySslClientRequest: DeleteVpnGatewaySslClientRequest,
    SubnetInput: SubnetInput,
    DescribeNatGatewayDirectConnectGatewayRouteResponse: DescribeNatGatewayDirectConnectGatewayRouteResponse,
    EnableVpcEndPointConnectResponse: EnableVpcEndPointConnectResponse,
    CreateNetDetectResponse: CreateNetDetectResponse,
    DeleteCcnRequest: DeleteCcnRequest,
    ModifyLocalGatewayResponse: ModifyLocalGatewayResponse,
    AssociateNetworkInterfaceSecurityGroupsResponse: AssociateNetworkInterfaceSecurityGroupsResponse,
    EnableFlowLogsRequest: EnableFlowLogsRequest,
    ModifyVpnGatewayAttributeRequest: ModifyVpnGatewayAttributeRequest,
    CreateNatGatewayRequest: CreateNatGatewayRequest,
    DeleteNetDetectRequest: DeleteNetDetectRequest,
    IPSECOptionsSpecification: IPSECOptionsSpecification,
    UnassignIpv6AddressesRequest: UnassignIpv6AddressesRequest,
    CreateAndAttachNetworkInterfaceResponse: CreateAndAttachNetworkInterfaceResponse,
    ModifyCcnAttributeRequest: ModifyCcnAttributeRequest,
    DeleteSecurityGroupPoliciesResponse: DeleteSecurityGroupPoliciesResponse,
    DisassociateDhcpIpWithAddressIpResponse: DisassociateDhcpIpWithAddressIpResponse,
    CreateVpcEndPointServiceResponse: CreateVpcEndPointServiceResponse,
    ModifyNetworkAclAttributeRequest: ModifyNetworkAclAttributeRequest,
    DeleteVpnGatewayResponse: DeleteVpnGatewayResponse,
    DescribeHaVipsRequest: DescribeHaVipsRequest,
    UnassignPrivateIpAddressesResponse: UnassignPrivateIpAddressesResponse,
    Address: Address,
    VpnGateway: VpnGateway,
    EnableVpcEndPointConnectRequest: EnableVpcEndPointConnectRequest,
    EnableGatewayFlowMonitorResponse: EnableGatewayFlowMonitorResponse,
    Resource: Resource,
    DeleteDhcpIpRequest: DeleteDhcpIpRequest,
    AllocateAddressesResponse: AllocateAddressesResponse,
    BandwidthPackage: BandwidthPackage,
    ModifyVpcAttributeRequest: ModifyVpcAttributeRequest,
    DescribeIp6TranslatorsResponse: DescribeIp6TranslatorsResponse,
    CreateSecurityGroupPoliciesRequest: CreateSecurityGroupPoliciesRequest,
    ModifyVpnGatewayRoutesResponse: ModifyVpnGatewayRoutesResponse,
    ModifyRouteTableAttributeResponse: ModifyRouteTableAttributeResponse,
    DescribeSecurityGroupReferencesResponse: DescribeSecurityGroupReferencesResponse,
    AddIp6RulesResponse: AddIp6RulesResponse,
    CreateAddressTemplateGroupResponse: CreateAddressTemplateGroupResponse,
    DescribeBandwidthPackageQuotaResponse: DescribeBandwidthPackageQuotaResponse,
    DeleteServiceTemplateGroupRequest: DeleteServiceTemplateGroupRequest,
    DeleteNatGatewayResponse: DeleteNatGatewayResponse,
    CreateDirectConnectGatewayResponse: CreateDirectConnectGatewayResponse,
    ModifyVpcEndPointAttributeRequest: ModifyVpcEndPointAttributeRequest,
    DescribeTaskResultResponse: DescribeTaskResultResponse,
    DisassociateNetworkAclSubnetsRequest: DisassociateNetworkAclSubnetsRequest,
    ModifyAddressTemplateGroupAttributeRequest: ModifyAddressTemplateGroupAttributeRequest,
    ModifyServiceTemplateGroupAttributeRequest: ModifyServiceTemplateGroupAttributeRequest,
    DeleteVpcEndPointRequest: DeleteVpcEndPointRequest,
    UnassignIpv6CidrBlockRequest: UnassignIpv6CidrBlockRequest,
    CCN: CCN,
    VpcEndPointServiceUser: VpcEndPointServiceUser,
    InquirePriceCreateDirectConnectGatewayResponse: InquirePriceCreateDirectConnectGatewayResponse,
    DeleteIp6TranslatorsRequest: DeleteIp6TranslatorsRequest,
    Ip6Translator: Ip6Translator,
    DestinationIpPortTranslationNatRule: DestinationIpPortTranslationNatRule,
    CreateDefaultVpcRequest: CreateDefaultVpcRequest,
    DescribeSubnetsResponse: DescribeSubnetsResponse,
    DescribeCustomerGatewaysResponse: DescribeCustomerGatewaysResponse,
    CheckAssistantCidrResponse: CheckAssistantCidrResponse,
    InquiryPriceRenewVpnGatewayRequest: InquiryPriceRenewVpnGatewayRequest,
    EnableCcnRoutesResponse: EnableCcnRoutesResponse,
    ModifyVpnGatewayCcnRoutesResponse: ModifyVpnGatewayCcnRoutesResponse,
    DetachCcnInstancesResponse: DetachCcnInstancesResponse,
    ModifyServiceTemplateGroupAttributeResponse: ModifyServiceTemplateGroupAttributeResponse,
    DeleteSubnetRequest: DeleteSubnetRequest,
    DescribeAddressTemplateGroupsRequest: DescribeAddressTemplateGroupsRequest,
    CheckNetDetectStateResponse: CheckNetDetectStateResponse,
    DisassociateVpcEndPointSecurityGroupsResponse: DisassociateVpcEndPointSecurityGroupsResponse,
    DescribeVpcTaskResultResponse: DescribeVpcTaskResultResponse,
    AssociateNatGatewayAddressResponse: AssociateNatGatewayAddressResponse,
    RemoveBandwidthPackageResourcesRequest: RemoveBandwidthPackageResourcesRequest,
    VpngwCcnRoutes: VpngwCcnRoutes,
    ModifyVpnConnectionAttributeRequest: ModifyVpnConnectionAttributeRequest,
    DeleteNetworkInterfaceRequest: DeleteNetworkInterfaceRequest,
    InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse: InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse,
    RouteTable: RouteTable,
    DescribeVpcEndPointServiceWhiteListRequest: DescribeVpcEndPointServiceWhiteListRequest,
    DeleteAddressTemplateGroupResponse: DeleteAddressTemplateGroupResponse,
    ModifyNetworkInterfaceQosRequest: ModifyNetworkInterfaceQosRequest,
    ModifyLocalGatewayRequest: ModifyLocalGatewayRequest,
    DirectConnectGatewayCcnRoute: DirectConnectGatewayCcnRoute,
    DeleteHaVipRequest: DeleteHaVipRequest,
    CreateLocalGatewayResponse: CreateLocalGatewayResponse,
    ServicesInfo: ServicesInfo,
    MigratePrivateIpAddressRequest: MigratePrivateIpAddressRequest,
    DescribeServiceTemplatesRequest: DescribeServiceTemplatesRequest,
    RefreshDirectConnectGatewayRouteToNatGatewayResponse: RefreshDirectConnectGatewayRouteToNatGatewayResponse,
    DeleteRouteTableRequest: DeleteRouteTableRequest,
    CreateVpnGatewayRequest: CreateVpnGatewayRequest,
    DescribeVpcInstancesRequest: DescribeVpcInstancesRequest,
    DeleteVpcEndPointServiceWhiteListResponse: DeleteVpcEndPointServiceWhiteListResponse,
    CreateBandwidthPackageResponse: CreateBandwidthPackageResponse,
    ResetVpnConnectionRequest: ResetVpnConnectionRequest,
    ReleaseAddressesResponse: ReleaseAddressesResponse,
    AuditCrossBorderComplianceResponse: AuditCrossBorderComplianceResponse,
    InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest: InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest,
    ReplaceSecurityGroupPolicyResponse: ReplaceSecurityGroupPolicyResponse,
    EnableGatewayFlowMonitorRequest: EnableGatewayFlowMonitorRequest,
    ModifyPrivateIpAddressesAttributeResponse: ModifyPrivateIpAddressesAttributeResponse,
    ReplaceRoutesResponse: ReplaceRoutesResponse,
    ModifyHaVipAttributeResponse: ModifyHaVipAttributeResponse,
    CcnBandwidthInfo: CcnBandwidthInfo,
    DescribeCrossBorderCcnRegionBandwidthLimitsResponse: DescribeCrossBorderCcnRegionBandwidthLimitsResponse,
    DeleteSecurityGroupResponse: DeleteSecurityGroupResponse,
    CreateNetworkInterfaceResponse: CreateNetworkInterfaceResponse,
    DescribeAddressQuotaRequest: DescribeAddressQuotaRequest,
    LockCcnsResponse: LockCcnsResponse,
    RemoveBandwidthPackageResourcesResponse: RemoveBandwidthPackageResourcesResponse,
    AssignIpv6AddressesResponse: AssignIpv6AddressesResponse,
    CreateRoutesResponse: CreateRoutesResponse,
    DescribeSecurityGroupsResponse: DescribeSecurityGroupsResponse,
    CreateVpcEndPointServiceWhiteListRequest: CreateVpcEndPointServiceWhiteListRequest,
    DeleteNatGatewaySourceIpTranslationNatRuleRequest: DeleteNatGatewaySourceIpTranslationNatRuleRequest,
    ModifyVpnGatewayCcnRoutesRequest: ModifyVpnGatewayCcnRoutesRequest,
    DescribeGatewayFlowQosRequest: DescribeGatewayFlowQosRequest,
    ReplaceDirectConnectGatewayCcnRoutesResponse: ReplaceDirectConnectGatewayCcnRoutesResponse,
    ModifySecurityGroupPoliciesResponse: ModifySecurityGroupPoliciesResponse,
    ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest: ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest,
    ServiceTemplateSpecification: ServiceTemplateSpecification,
    DetachNetworkInterfaceRequest: DetachNetworkInterfaceRequest,
    Ip6Rule: Ip6Rule,
    AttachClassicLinkVpcResponse: AttachClassicLinkVpcResponse,
    DownloadVpnGatewaySslClientCertRequest: DownloadVpnGatewaySslClientCertRequest,
    CreateAddressTemplateRequest: CreateAddressTemplateRequest,
    DescribeRouteConflictsRequest: DescribeRouteConflictsRequest,
    NatDirectConnectGatewayRoute: NatDirectConnectGatewayRoute,
    Subnet: Subnet,
    AttachNetworkInterfaceRequest: AttachNetworkInterfaceRequest,
    DescribeCcnRoutesResponse: DescribeCcnRoutesResponse,
    AllocateIp6AddressesBandwidthRequest: AllocateIp6AddressesBandwidthRequest,
    SecurityGroup: SecurityGroup,
    UnlockCcnsResponse: UnlockCcnsResponse,
    DisableGatewayFlowMonitorResponse: DisableGatewayFlowMonitorResponse,
    DisassociateAddressResponse: DisassociateAddressResponse,
    DirectConnectSubnet: DirectConnectSubnet,
    DescribeVpnGatewayRoutesRequest: DescribeVpnGatewayRoutesRequest,
    GetCcnRegionBandwidthLimitsResponse: GetCcnRegionBandwidthLimitsResponse,
    DeleteRoutesRequest: DeleteRoutesRequest,
    AssociateAddressRequest: AssociateAddressRequest,
    CcnRegionBandwidthLimit: CcnRegionBandwidthLimit,
    UnlockCcnBandwidthsResponse: UnlockCcnBandwidthsResponse,
    CreateDefaultSecurityGroupResponse: CreateDefaultSecurityGroupResponse,
    ClassicLinkInstance: ClassicLinkInstance,
    DeleteLocalGatewayResponse: DeleteLocalGatewayResponse,
    NetworkInterfaceAttachment: NetworkInterfaceAttachment,
    ModifyNetworkInterfaceAttributeRequest: ModifyNetworkInterfaceAttributeRequest,
    RemoveIp6RulesResponse: RemoveIp6RulesResponse,
    ModifyHaVipAttributeRequest: ModifyHaVipAttributeRequest,
    ModifyAddressTemplateGroupAttributeResponse: ModifyAddressTemplateGroupAttributeResponse,
    VpcLimit: VpcLimit,
    DetachClassicLinkVpcResponse: DetachClassicLinkVpcResponse,
    UnassignPrivateIpAddressesRequest: UnassignPrivateIpAddressesRequest,
    DeleteVpnGatewayRoutesRequest: DeleteVpnGatewayRoutesRequest,
    DescribeProductQuotaRequest: DescribeProductQuotaRequest,
    ModifyNetDetectResponse: ModifyNetDetectResponse,
    CreateHaVipRequest: CreateHaVipRequest,
    Ipv6SubnetCidrBlock: Ipv6SubnetCidrBlock,
    EnableFlowLogsResponse: EnableFlowLogsResponse,
    LockCcnBandwidthsResponse: LockCcnBandwidthsResponse,
    DescribeAddressQuotaResponse: DescribeAddressQuotaResponse,
    CreateCustomerGatewayRequest: CreateCustomerGatewayRequest,
    DeleteSecurityGroupRequest: DeleteSecurityGroupRequest,
    DescribeDhcpIpsResponse: DescribeDhcpIpsResponse,
    CreateRouteTableResponse: CreateRouteTableResponse,
    DescribeCrossBorderCcnRegionBandwidthLimitsRequest: DescribeCrossBorderCcnRegionBandwidthLimitsRequest,
    GetCcnRegionBandwidthLimitsRequest: GetCcnRegionBandwidthLimitsRequest,
    DescribeDirectConnectGatewayCcnRoutesResponse: DescribeDirectConnectGatewayCcnRoutesResponse,
    ModifyPrivateIpAddressesAttributeRequest: ModifyPrivateIpAddressesAttributeRequest,
    ResetNatGatewayConnectionResponse: ResetNatGatewayConnectionResponse,
    AssociateNetworkInterfaceSecurityGroupsRequest: AssociateNetworkInterfaceSecurityGroupsRequest,
    DeleteVpnGatewayRoutesResponse: DeleteVpnGatewayRoutesResponse,
    CreateSecurityGroupRequest: CreateSecurityGroupRequest,
    ModifyCcnAttributeResponse: ModifyCcnAttributeResponse,
    DescribeSecurityGroupLimitsRequest: DescribeSecurityGroupLimitsRequest,
    DescribeClassicLinkInstancesRequest: DescribeClassicLinkInstancesRequest,
    ReleaseIp6AddressesBandwidthRequest: ReleaseIp6AddressesBandwidthRequest,
    CreateServiceTemplateResponse: CreateServiceTemplateResponse,
    DeleteNetworkInterfaceResponse: DeleteNetworkInterfaceResponse,
    DisableCcnRoutesResponse: DisableCcnRoutesResponse,
    DescribeCcnRegionBandwidthLimitsRequest: DescribeCcnRegionBandwidthLimitsRequest,
    InquiryPriceCreateVpnGatewayRequest: InquiryPriceCreateVpnGatewayRequest,
    CreateAssistantCidrResponse: CreateAssistantCidrResponse,
    CustomerGatewayVendor: CustomerGatewayVendor,
    DescribeAddressTemplatesRequest: DescribeAddressTemplatesRequest,
    ConflictSource: ConflictSource,
    CreateDhcpIpRequest: CreateDhcpIpRequest,
    DescribeVpnConnectionsResponse: DescribeVpnConnectionsResponse,
    DeleteCustomerGatewayRequest: DeleteCustomerGatewayRequest,
    DescribeAddressTemplatesResponse: DescribeAddressTemplatesResponse,
    Quota: Quota,
    WithdrawNotifyRoutesResponse: WithdrawNotifyRoutesResponse,
    DescribeNetworkInterfacesResponse: DescribeNetworkInterfacesResponse,
    DeleteNetworkAclResponse: DeleteNetworkAclResponse,
    AssignPrivateIpAddressesRequest: AssignPrivateIpAddressesRequest,
    DescribeServiceTemplateGroupsRequest: DescribeServiceTemplateGroupsRequest,
    CreateSecurityGroupWithPoliciesRequest: CreateSecurityGroupWithPoliciesRequest,
    CreateVpcRequest: CreateVpcRequest,
    DisableFlowLogsRequest: DisableFlowLogsRequest,
    DeleteServiceTemplateRequest: DeleteServiceTemplateRequest,
    DescribeSecurityGroupAssociationStatisticsRequest: DescribeSecurityGroupAssociationStatisticsRequest,
    NotifyRoutesResponse: NotifyRoutesResponse,
    Route: Route,
    EnableVpnGatewaySslClientCertResponse: EnableVpnGatewaySslClientCertResponse,
    ModifySubnetAttributeRequest: ModifySubnetAttributeRequest,
    ModifyVpcEndPointServiceWhiteListResponse: ModifyVpcEndPointServiceWhiteListResponse,
    DescribeBandwidthPackageQuotaRequest: DescribeBandwidthPackageQuotaRequest,
    DeleteVpcResponse: DeleteVpcResponse,
    InstanceChargePrepaid: InstanceChargePrepaid,
    DescribeTemplateLimitsRequest: DescribeTemplateLimitsRequest,
    AddTemplateMemberRequest: AddTemplateMemberRequest,
    DescribeVpcEndPointServiceWhiteListResponse: DescribeVpcEndPointServiceWhiteListResponse,
    AcceptAttachCcnInstancesResponse: AcceptAttachCcnInstancesResponse,
    AddressInfo: AddressInfo,
    AuditCrossBorderComplianceRequest: AuditCrossBorderComplianceRequest,
    DescribeNetDetectsResponse: DescribeNetDetectsResponse,

}
