const AbstractModel = require("../../common/abstract_model");

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
        this.AddressTemplateGroupId = params.AddressTemplateGroupId || null;
        this.AddressTemplateGroupName = params.AddressTemplateGroupName || null;
        this.AddressTemplateIds = params.AddressTemplateIds || null;

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
        this.RequestId = params.RequestId || null;

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
        this.ServiceTemplateGroupId = params.ServiceTemplateGroupId || null;
        this.ServiceTemplateGroupName = params.ServiceTemplateGroupName || null;
        this.ServiceTemplateIdSet = params.ServiceTemplateIdSet || null;
        this.CreatedTime = params.CreatedTime || null;

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
         * 弹性网卡描述，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.NetworkInterfaceDescription = null;

        /**
         * 弹性网卡所在的子网实例ID，例如：subnet-0ap8nwca。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 新申请的内网IP地址个数。
         * @type {number || null}
         */
        this.SecondaryPrivateIpAddressCount = null;

        /**
         * 指定绑定的安全组，例如：['sg-1dd51d']。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 指定内网IP信息。
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
        this.VpcId = params.VpcId || null;
        this.NetworkInterfaceName = params.NetworkInterfaceName || null;
        this.NetworkInterfaceDescription = params.NetworkInterfaceDescription || null;
        this.SubnetId = params.SubnetId || null;
        this.SecondaryPrivateIpAddressCount = params.SecondaryPrivateIpAddressCount || null;
        this.SecurityGroupIds = params.SecurityGroupIds || null;

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
         * @type {Array.<string> || null}
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
        this.RouteTableId = params.RouteTableId || null;
        this.Routes = params.Routes || null;

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
        this.RequestId = params.RequestId || null;

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
        this.ServiceTemplateName = params.ServiceTemplateName || null;
        this.Services = params.Services || null;

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
        this.SecurityGroupId = params.SecurityGroupId || null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

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
        this.RequestId = params.RequestId || null;

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
        this.AddressTemplateGroupName = params.AddressTemplateGroupName || null;
        this.AddressTemplateIds = params.AddressTemplateIds || null;

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
        this.NetworkInterfaceIds = params.NetworkInterfaceIds || null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
<li>cidr-block - String - （过滤条件）vpc的cidr。</li>
<li>is-default - Boolean - （过滤条件）是否是默认子网。</li>
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
        this.SubnetIds = params.SubnetIds || null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.VpcId = params.VpcId || null;
        this.SubnetName = params.SubnetName || null;
        this.CidrBlock = params.CidrBlock || null;
        this.Zone = params.Zone || null;

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
        this.AddressTemplateGroupName = params.AddressTemplateGroupName || null;
        this.AddressTemplateGroupId = params.AddressTemplateGroupId || null;
        this.AddressTemplateIdSet = params.AddressTemplateIdSet || null;
        this.CreatedTime = params.CreatedTime || null;

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
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
         * Vpc名称。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * VPC实例ID，例如：vpc-azd4dt1c。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC的cidr，只能为10.0.0.0/16，172.16.0.0/12，192.168.0.0/16这三个内网网段内。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 是否默认VPC。
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcName = params.VpcName || null;
        this.VpcId = params.VpcId || null;
        this.CidrBlock = params.CidrBlock || null;
        this.IsDefault = params.IsDefault || null;
        this.EnableMulticast = params.EnableMulticast || null;
        this.CreatedTime = params.CreatedTime || null;

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
        this.ServiceTemplateGroupId = params.ServiceTemplateGroupId || null;
        this.ServiceTemplateGroupName = params.ServiceTemplateGroupName || null;
        this.ServiceTemplateIds = params.ServiceTemplateIds || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.ServiceTemplateGroupSet) {
            this.ServiceTemplateGroupSet = new Array();
            for (let z in params.ServiceTemplateGroupSet) {
                let obj = new ServiceTemplateGroup();
                obj.deserialize(params.ServiceTemplateGroupSet[z]);
                this.ServiceTemplateGroupSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
         * 子网实例ID，例如：subnet-3x5lf5q0。可通过DescribeSubnetEx接口查询。
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
        this.SubnetId = params.SubnetId || null;
        this.RouteTableId = params.RouteTableId || null;

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
        this.SecurityGroupId = params.SecurityGroupId || null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

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
        this.RequestId = params.RequestId || null;

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
         * @type {Array.<string> || null}
         */
        this.ServiceTemplate = null;

        /**
         * 网段或IP(互斥)。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 已绑定安全组的网段或IP。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * IP地址ID或者ID地址组ID。
         * @type {string || null}
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
        this.PolicyIndex = params.PolicyIndex || null;
        this.Protocol = params.Protocol || null;
        this.Port = params.Port || null;
        this.ServiceTemplate = params.ServiceTemplate || null;
        this.CidrBlock = params.CidrBlock || null;
        this.SecurityGroupId = params.SecurityGroupId || null;
        this.AddressTemplate = params.AddressTemplate || null;
        this.Action = params.Action || null;
        this.PolicyDescription = params.PolicyDescription || null;

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
        this.SubnetId = params.SubnetId || null;

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
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.AddressCount = params.AddressCount || null;

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
        this.VpcId = params.VpcId || null;
        this.RouteTableId = params.RouteTableId || null;
        this.RouteTableName = params.RouteTableName || null;

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
        this.Main = params.Main || null;
        this.CreatedTime = params.CreatedTime || null;

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
        this.NetworkInterfaceId = params.NetworkInterfaceId || null;

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
        this.VpcId = params.VpcId || null;
        this.InstanceIds = params.InstanceIds || null;

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
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.VpcId = params.VpcId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.SourceNetworkInterfaceId = params.SourceNetworkInterfaceId || null;
        this.DestinationNetworkInterfaceId = params.DestinationNetworkInterfaceId || null;
        this.PrivateIpAddress = params.PrivateIpAddress || null;

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
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.RouteTableId = params.RouteTableId || null;

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

        if (params.Subnet) {
            let obj = new Subnet();
            obj.deserialize(params.Subnet)
            this.Subnet = obj;
        }
        this.RequestId = params.RequestId || null;

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

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }
        this.RequestId = params.RequestId || null;

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
        this.SecurityGroupId = params.SecurityGroupId || null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

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
        this.RequestId = params.RequestId || null;

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
        this.VpcId = params.VpcId || null;
        this.InstanceIds = params.InstanceIds || null;

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

        if (params.Vpc) {
            let obj = new Vpc();
            obj.deserialize(params.Vpc)
            this.Vpc = obj;
        }
        this.RequestId = params.RequestId || null;

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
         * 取值范围：PENDING|AVAILABLE|ATTACHING|DETACHING|DELETING。
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
         * @type {Array.<InstanceChargePrepaid> || null}
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = params.NetworkInterfaceId || null;
        this.NetworkInterfaceName = params.NetworkInterfaceName || null;
        this.NetworkInterfaceDescription = params.NetworkInterfaceDescription || null;
        this.SubnetId = params.SubnetId || null;
        this.VpcId = params.VpcId || null;
        this.GroupSet = params.GroupSet || null;
        this.Primary = params.Primary || null;
        this.MacAddress = params.MacAddress || null;
        this.State = params.State || null;

        if (params.PrivateIpAddressSet) {
            this.PrivateIpAddressSet = new Array();
            for (let z in params.PrivateIpAddressSet) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddressSet[z]);
                this.PrivateIpAddressSet.push(obj);
            }
        }

        if (params.Attachment) {
            this.Attachment = new Array();
            for (let z in params.Attachment) {
                let obj = new InstanceChargePrepaid();
                obj.deserialize(params.Attachment[z]);
                this.Attachment.push(obj);
            }
        }
        this.Zone = params.Zone || null;
        this.CreatedTime = params.CreatedTime || null;

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
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.AddressTemplateName = params.AddressTemplateName || null;
        this.AddressTemplateId = params.AddressTemplateId || null;
        this.AddressSet = params.AddressSet || null;
        this.CreatedTime = params.CreatedTime || null;

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
        this.RequestId = params.RequestId || null;

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
        this.AddressId = params.AddressId || null;
        this.ReallocateNormalPublicIp = params.ReallocateNormalPublicIp || null;

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
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.ServiceTemplateId = params.ServiceTemplateId || null;
        this.ServiceTemplateName = params.ServiceTemplateName || null;
        this.Services = params.Services || null;

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
        this.RequestId = params.RequestId || null;

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
         * 路由策略ID。
         * @type {string || null}
         */
        this.RouteId = null;

        /**
         * 目的网段，取值不能在私有网络网段内，例如：112.20.51.0/24。
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * 下一跳类型，目前我们支持的类型有：CVM：公网网关类型的云主机；VPN：vpn网关； DIRECTCONNECT：专线网关；PEERCONNECTION：对等连接；SSLVPN：sslvpn网关；NAT：nat网关; NORMAL_CVM：普通云主机。
         * @type {string || null}
         */
        this.GatewayType = null;

        /**
         * 下一跳地址，这里只需要指定不同下一跳类型的网关ID，系统会自动匹配到下一跳地址。
         * @type {string || null}
         */
        this.GatewayId = null;

        /**
         * 路由策略描述。
         * @type {string || null}
         */
        this.RouteDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteId = params.RouteId || null;
        this.DestinationCidrBlock = params.DestinationCidrBlock || null;
        this.GatewayType = params.GatewayType || null;
        this.GatewayId = params.GatewayId || null;
        this.RouteDescription = params.RouteDescription || null;

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

        if (params.NetworkInterface) {
            let obj = new NetworkInterface();
            obj.deserialize(params.NetworkInterface)
            this.NetworkInterface = obj;
        }
        this.RequestId = params.RequestId || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.AddressSet) {
            this.AddressSet = new Array();
            for (let z in params.AddressSet) {
                let obj = new Address();
                obj.deserialize(params.AddressSet[z]);
                this.AddressSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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

        if (params.SecurityGroupSet) {
            this.SecurityGroupSet = new Array();
            for (let z in params.SecurityGroupSet) {
                let obj = new SecurityGroup();
                obj.deserialize(params.SecurityGroupSet[z]);
                this.SecurityGroupSet.push(obj);
            }
        }
        this.TotalCount = params.TotalCount || null;
        this.RequestId = params.RequestId || null;

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
        this.SubnetId = params.SubnetId || null;
        this.RouteTableId = params.RouteTableId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.Name = params.Name || null;
        this.Values = params.Values || null;

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
<li>is-default - Boolean - （过滤条件）是否默认VPC。</li>
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
        this.VpcIds = params.VpcIds || null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.VpcId = params.VpcId || null;
        this.VpcName = params.VpcName || null;
        this.EnableMulticast = params.EnableMulticast || null;
        this.DnsServers = params.DnsServers || null;
        this.DomainName = params.DomainName || null;

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
         * @type {Array.<string> || null}
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
        this.RouteTableId = params.RouteTableId || null;
        this.RouteTableName = params.RouteTableName || null;
        this.Routes = params.Routes || null;

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
        this.NetworkInterfaceId = params.NetworkInterfaceId || null;
        this.InstanceId = params.InstanceId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.RouteTableSet) {
            this.RouteTableSet = new Array();
            for (let z in params.RouteTableSet) {
                let obj = new RouteTable();
                obj.deserialize(params.RouteTableSet[z]);
                this.RouteTableSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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

        if (params.ServiceTemplateGroup) {
            let obj = new ServiceTemplateGroup();
            obj.deserialize(params.ServiceTemplateGroup)
            this.ServiceTemplateGroup = obj;
        }
        this.RequestId = params.RequestId || null;

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
        this.AddressTemplateName = params.AddressTemplateName || null;
        this.Addresses = params.Addresses || null;

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
         * VPC实例ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网实例ID，例如：subnet-bthucmmy。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 子网名称。
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 子网的CIDR。
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;
        this.SubnetName = params.SubnetName || null;
        this.CidrBlock = params.CidrBlock || null;
        this.IsDefault = params.IsDefault || null;
        this.EnableBroadcast = params.EnableBroadcast || null;
        this.Zone = params.Zone || null;
        this.RouteTableId = params.RouteTableId || null;
        this.CreatedTime = params.CreatedTime || null;

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
        this.RequestId = params.RequestId || null;

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
        this.ServiceTemplateId = params.ServiceTemplateId || null;
        this.ServiceTemplateName = params.ServiceTemplateName || null;
        this.ServiceSet = params.ServiceSet || null;
        this.CreatedTime = params.CreatedTime || null;

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
        this.RequestId = params.RequestId || null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrivateIpAddress = params.PrivateIpAddress || null;
        this.Primary = params.Primary || null;
        this.PublicIpAddress = params.PublicIpAddress || null;
        this.AddressId = params.AddressId || null;
        this.Description = params.Description || null;
        this.IsWanIpBlocked = params.IsWanIpBlocked || null;

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
        this.RequestId = params.RequestId || null;

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
         * 项目id，默认0。可在qcloud控制台项目管理页面查询到。
         * @type {string || null}
         */
        this.ProjectId = null;

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
        this.ProjectId = params.ProjectId || null;
        this.SecurityGroupId = params.SecurityGroupId || null;
        this.SecurityGroupName = params.SecurityGroupName || null;
        this.SecurityGroupDesc = params.SecurityGroupDesc || null;
        this.IsDefault = params.IsDefault || null;
        this.CreatedTime = params.CreatedTime || null;

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
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
         * @type {Array.<string> || null}
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
        this.RouteTableId = params.RouteTableId || null;
        this.Routes = params.Routes || null;

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
         * 要绑定的实例 ID。实例 ID 形如：`ins-11112222`。可通过登录[控制台](https://console.cloud.tencent.com/cvm)查询，也可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/9389) 接口返回值中的`InstanceId`获取。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：`eni-11112222`。`NetworkInterfaceId` 与 `InstanceId` 不可同时指定。弹性网卡 ID 可通过登录[控制台](https://console.cloud.tencent.com/vpc/eni)查询，也可通过[DescribeNetworkInterfaces](https://cloud.tencent.com/document/api/215/4814)接口返回值中的`networkInterfaceId`获取。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 要绑定的内网 IP。如果指定了 `NetworkInterfaceId` 则也必须指定 `PrivateIpAddress` ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 `PrivateIpAddress` 是指定的 `NetworkInterfaceId` 上的一个内网 IP。指定弹性网卡的内网 IP 可通过登录[控制台](https://console.cloud.tencent.com/vpc/eni)查询，也可通过[DescribeNetworkInterfaces](https://cloud.tencent.com/document/api/215/4814)接口返回值中的`privateIpAddress`获取。
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
        this.AddressId = params.AddressId || null;
        this.InstanceId = params.InstanceId || null;
        this.NetworkInterfaceId = params.NetworkInterfaceId || null;
        this.PrivateIpAddress = params.PrivateIpAddress || null;

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
        this.RequestId = params.RequestId || null;

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

        if (params.AddressTemplate) {
            let obj = new AddressTemplate();
            obj.deserialize(params.AddressTemplate)
            this.AddressTemplate = obj;
        }
        this.RequestId = params.RequestId || null;

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
        this.AddressTemplateGroupId = params.AddressTemplateGroupId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.ServiceTemplateSet) {
            this.ServiceTemplateSet = new Array();
            for (let z in params.ServiceTemplateSet) {
                let obj = new ServiceTemplate();
                obj.deserialize(params.ServiceTemplateSet[z]);
                this.ServiceTemplateSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
<li>association.main - Boolean - （过滤条件）是否主路由表。</li>
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
        this.RouteTableIds = params.RouteTableIds || null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.RouteTableId = params.RouteTableId || null;
        this.RouteTableName = params.RouteTableName || null;

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
        this.VpcId = params.VpcId || null;
        this.InstanceId = params.InstanceId || null;

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
        this.NetworkInterfaceId = params.NetworkInterfaceId || null;
        this.NetworkInterfaceName = params.NetworkInterfaceName || null;
        this.NetworkInterfaceDescription = params.NetworkInterfaceDescription || null;
        this.SecurityGroupIds = params.SecurityGroupIds || null;

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
        this.RequestId = params.RequestId || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.AddressTemplateSet) {
            this.AddressTemplateSet = new Array();
            for (let z in params.AddressTemplateSet) {
                let obj = new AddressTemplate();
                obj.deserialize(params.AddressTemplateSet[z]);
                this.AddressTemplateSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.AddressIds = params.AddressIds || null;

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
        this.NetworkInterfaceId = params.NetworkInterfaceId || null;

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
 * AssociateAddress返回参数结构体
 * @class
 */
class AssociateAddressResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

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
        this.Name = params.Name || null;
        this.Values = params.Values || null;

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
        this.VpcId = params.VpcId || null;
        this.RouteTableName = params.RouteTableName || null;

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
        this.AddressIds = params.AddressIds || null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.SecurityGroupId = params.SecurityGroupId || null;

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
        this.NetworkInterfaceId = params.NetworkInterfaceId || null;
        this.SourceInstanceId = params.SourceInstanceId || null;
        this.DestinationInstanceId = params.DestinationInstanceId || null;

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

        if (params.QuotaSet) {
            this.QuotaSet = new Array();
            for (let z in params.QuotaSet) {
                let obj = new Quota();
                obj.deserialize(params.QuotaSet[z]);
                this.QuotaSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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

        if (params.SecurityGroup) {
            let obj = new SecurityGroup();
            obj.deserialize(params.SecurityGroup)
            this.SecurityGroup = obj;
        }
        this.RequestId = params.RequestId || null;

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
        this.SecurityGroupId = params.SecurityGroupId || null;

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
         * 路由策略对象。只需要指定路由策略ID（RouteId）。
         * @type {Array.<string> || null}
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
        this.RouteTableId = params.RouteTableId || null;
        this.Routes = params.Routes || null;

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

        if (params.RouteTable) {
            let obj = new RouteTable();
            obj.deserialize(params.RouteTable)
            this.RouteTable = obj;
        }
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.NetworkInterfaceId = params.NetworkInterfaceId || null;

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
         * 项目id，默认0。可在qcloud控制台项目管理页面查询到。
         * @type {string || null}
         */
        this.ProjectId = null;

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
        this.ProjectId = params.ProjectId || null;
        this.GroupName = params.GroupName || null;
        this.GroupDescription = params.GroupDescription || null;

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
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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

        if (params.ServiceTemplate) {
            let obj = new ServiceTemplate();
            obj.deserialize(params.ServiceTemplate)
            this.ServiceTemplate = obj;
        }
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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

        if (params.PrivateIpAddressSet) {
            this.PrivateIpAddressSet = new Array();
            for (let z in params.PrivateIpAddressSet) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddressSet[z]);
                this.PrivateIpAddressSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.SecurityGroupIds = params.SecurityGroupIds || null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.Version = params.Version || null;

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
 * DeleteSecurityGroupPolicies返回参数结构体
 * @class
 */
class DeleteSecurityGroupPoliciesResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

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
        this.AddressId = params.AddressId || null;
        this.AddressName = params.AddressName || null;

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
        this.RequestId = params.RequestId || null;

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
        this.QuotaId = params.QuotaId || null;
        this.QuotaCurrent = params.QuotaCurrent || null;
        this.QuotaLimit = params.QuotaLimit || null;

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
         * 弹性外网IP
         * @type {string || null}
         */
        this.AddressIp = null;

        /**
         * 绑定的资源实例`ID`。可能是一个`CVM`，`NAT`，或是弹性网卡。
         * @type {string || null}
         */
        this.BindedResourceId = null;

        /**
         * 创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
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
        this.AddressId = params.AddressId || null;
        this.AddressName = params.AddressName || null;
        this.AddressStatus = params.AddressStatus || null;
        this.AddressIp = params.AddressIp || null;
        this.BindedResourceId = params.BindedResourceId || null;
        this.CreatedTime = params.CreatedTime || null;

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
        this.RequestId = params.RequestId || null;

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

        if (params.NetworkInterfaceSet) {
            this.NetworkInterfaceSet = new Array();
            for (let z in params.NetworkInterfaceSet) {
                let obj = new NetworkInterface();
                obj.deserialize(params.NetworkInterfaceSet[z]);
                this.NetworkInterfaceSet.push(obj);
            }
        }
        this.TotalCount = params.TotalCount || null;
        this.RequestId = params.RequestId || null;

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
         * 指定的内网IP信息。
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 新申请的内网IP地址个数。
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
        this.NetworkInterfaceId = params.NetworkInterfaceId || null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }
        this.SecondaryPrivateIpAddressCount = params.SecondaryPrivateIpAddressCount || null;

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
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.VpcName = params.VpcName || null;
        this.CidrBlock = params.CidrBlock || null;
        this.EnableMulticast = params.EnableMulticast || null;
        this.DnsServers = params.DnsServers || null;
        this.DomainName = params.DomainName || null;

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
        this.ServiceTemplateGroupName = params.ServiceTemplateGroupName || null;
        this.ServiceTemplateIds = params.ServiceTemplateIds || null;

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
        this.ServiceTemplateId = params.ServiceTemplateId || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.ClassicLinkInstanceSet) {
            this.ClassicLinkInstanceSet = new Array();
            for (let z in params.ClassicLinkInstanceSet) {
                let obj = new ClassicLinkInstance();
                obj.deserialize(params.ClassicLinkInstanceSet[z]);
                this.ClassicLinkInstanceSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.AddressTemplateId = params.AddressTemplateId || null;

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
        this.SubnetId = params.SubnetId || null;
        this.SubnetName = params.SubnetName || null;
        this.EnableBroadcast = params.EnableBroadcast || null;

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
        this.AddressSet = params.AddressSet || null;
        this.RequestId = params.RequestId || null;

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
        this.InstanceId = params.InstanceId || null;

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
        this.NetworkInterfaceId = params.NetworkInterfaceId || null;
        this.InstanceId = params.InstanceId || null;

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
        this.SecurityGroupId = params.SecurityGroupId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new Vpc();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.AddressTemplateId = params.AddressTemplateId || null;
        this.AddressTemplateName = params.AddressTemplateName || null;
        this.Addresses = params.Addresses || null;

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
        this.SecurityGroupId = params.SecurityGroupId || null;
        this.GroupName = params.GroupName || null;
        this.GroupDescription = params.GroupDescription || null;

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

        if (params.AddressTemplateGroup) {
            let obj = new AddressTemplateGroup();
            obj.deserialize(params.AddressTemplateGroup)
            this.AddressTemplateGroup = obj;
        }
        this.RequestId = params.RequestId || null;

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
        this.ServiceTemplateGroupId = params.ServiceTemplateGroupId || null;

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
         * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。
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
        this.Period = params.Period || null;
        this.RenewFlag = params.RenewFlag || null;

    }
}

module.exports = {
    ModifyAddressTemplateGroupAttributeRequest: ModifyAddressTemplateGroupAttributeRequest,
    ModifyAddressTemplateAttributeResponse: ModifyAddressTemplateAttributeResponse,
    ServiceTemplateGroup: ServiceTemplateGroup,
    CreateNetworkInterfaceRequest: CreateNetworkInterfaceRequest,
    CreateRoutesRequest: CreateRoutesRequest,
    DeleteServiceTemplateResponse: DeleteServiceTemplateResponse,
    CreateServiceTemplateRequest: CreateServiceTemplateRequest,
    DeleteSecurityGroupPoliciesRequest: DeleteSecurityGroupPoliciesRequest,
    TransformAddressResponse: TransformAddressResponse,
    CreateAddressTemplateGroupRequest: CreateAddressTemplateGroupRequest,
    DescribeNetworkInterfacesRequest: DescribeNetworkInterfacesRequest,
    DescribeSubnetsRequest: DescribeSubnetsRequest,
    CreateSubnetRequest: CreateSubnetRequest,
    AddressTemplateGroup: AddressTemplateGroup,
    ModifyNetworkInterfaceAttributeResponse: ModifyNetworkInterfaceAttributeResponse,
    DeleteSubnetResponse: DeleteSubnetResponse,
    DescribeSubnetsResponse: DescribeSubnetsResponse,
    Vpc: Vpc,
    ModifyServiceTemplateGroupAttributeRequest: ModifyServiceTemplateGroupAttributeRequest,
    DescribeServiceTemplateGroupsResponse: DescribeServiceTemplateGroupsResponse,
    ReplaceRouteTableAssociationRequest: ReplaceRouteTableAssociationRequest,
    ReplaceSecurityGroupPolicyRequest: ReplaceSecurityGroupPolicyRequest,
    ModifyServiceTemplateGroupAttributeResponse: ModifyServiceTemplateGroupAttributeResponse,
    SecurityGroupPolicy: SecurityGroupPolicy,
    DeleteSubnetRequest: DeleteSubnetRequest,
    DescribeAddressTemplateGroupsRequest: DescribeAddressTemplateGroupsRequest,
    AllocateAddressesRequest: AllocateAddressesRequest,
    RouteTable: RouteTable,
    DeleteNetworkInterfaceRequest: DeleteNetworkInterfaceRequest,
    DetachClassicLinkVpcRequest: DetachClassicLinkVpcRequest,
    DeleteAddressTemplateGroupResponse: DeleteAddressTemplateGroupResponse,
    ReplaceRoutesResponse: ReplaceRoutesResponse,
    DeleteVpcRequest: DeleteVpcRequest,
    ModifyServiceTemplateAttributeResponse: ModifyServiceTemplateAttributeResponse,
    MigratePrivateIpAddressRequest: MigratePrivateIpAddressRequest,
    DescribeServiceTemplatesRequest: DescribeServiceTemplatesRequest,
    DeleteRouteTableRequest: DeleteRouteTableRequest,
    CreateSubnetResponse: CreateSubnetResponse,
    DescribeSecurityGroupPoliciesResponse: DescribeSecurityGroupPoliciesResponse,
    ModifySecurityGroupPoliciesRequest: ModifySecurityGroupPoliciesRequest,
    ModifyAddressAttributeResponse: ModifyAddressAttributeResponse,
    AttachClassicLinkVpcRequest: AttachClassicLinkVpcRequest,
    CreateVpcResponse: CreateVpcResponse,
    NetworkInterface: NetworkInterface,
    ModifySubnetAttributeResponse: ModifySubnetAttributeResponse,
    ReplaceRouteTableAssociationResponse: ReplaceRouteTableAssociationResponse,
    ReleaseAddressesResponse: ReleaseAddressesResponse,
    AddressTemplate: AddressTemplate,
    DeleteServiceTemplateGroupResponse: DeleteServiceTemplateGroupResponse,
    DisassociateAddressRequest: DisassociateAddressRequest,
    ReplaceSecurityGroupPolicyResponse: ReplaceSecurityGroupPolicyResponse,
    ModifyPrivateIpAddressesAttributeResponse: ModifyPrivateIpAddressesAttributeResponse,
    ModifyServiceTemplateAttributeRequest: ModifyServiceTemplateAttributeRequest,
    DeleteSecurityGroupResponse: DeleteSecurityGroupResponse,
    Route: Route,
    CreateNetworkInterfaceResponse: CreateNetworkInterfaceResponse,
    DescribeAddressQuotaRequest: DescribeAddressQuotaRequest,
    DescribeAddressesResponse: DescribeAddressesResponse,
    CreateRoutesResponse: CreateRoutesResponse,
    DescribeSecurityGroupsResponse: DescribeSecurityGroupsResponse,
    RouteTableAssociation: RouteTableAssociation,
    DetachNetworkInterfaceResponse: DetachNetworkInterfaceResponse,
    ResetRoutesResponse: ResetRoutesResponse,
    FilterObject: FilterObject,
    DescribeVpcsRequest: DescribeVpcsRequest,
    ModifyVpcAttributeRequest: ModifyVpcAttributeRequest,
    ResetRoutesRequest: ResetRoutesRequest,
    DetachNetworkInterfaceRequest: DetachNetworkInterfaceRequest,
    UnassignPrivateIpAddressesResponse: UnassignPrivateIpAddressesResponse,
    DescribeRouteTablesResponse: DescribeRouteTablesResponse,
    CreateServiceTemplateGroupResponse: CreateServiceTemplateGroupResponse,
    CreateAddressTemplateRequest: CreateAddressTemplateRequest,
    Subnet: Subnet,
    ModifyVpcAttributeResponse: ModifyVpcAttributeResponse,
    ServiceTemplate: ServiceTemplate,
    DeleteVpcResponse: DeleteVpcResponse,
    PrivateIpAddressSpecification: PrivateIpAddressSpecification,
    ModifySecurityGroupAttributeResponse: ModifySecurityGroupAttributeResponse,
    SecurityGroup: SecurityGroup,
    MigratePrivateIpAddressResponse: MigratePrivateIpAddressResponse,
    DeleteRouteTableResponse: DeleteRouteTableResponse,
    DisassociateAddressResponse: DisassociateAddressResponse,
    DeleteRoutesRequest: DeleteRoutesRequest,
    AssociateAddressRequest: AssociateAddressRequest,
    ModifySecurityGroupPoliciesResponse: ModifySecurityGroupPoliciesResponse,
    CreateAddressTemplateResponse: CreateAddressTemplateResponse,
    DeleteAddressTemplateGroupRequest: DeleteAddressTemplateGroupRequest,
    AttachNetworkInterfaceResponse: AttachNetworkInterfaceResponse,
    DescribeServiceTemplatesResponse: DescribeServiceTemplatesResponse,
    DescribeRouteTablesRequest: DescribeRouteTablesRequest,
    ModifyRouteTableAttributeRequest: ModifyRouteTableAttributeRequest,
    ClassicLinkInstance: ClassicLinkInstance,
    ModifyNetworkInterfaceAttributeRequest: ModifyNetworkInterfaceAttributeRequest,
    ModifyAddressTemplateGroupAttributeResponse: ModifyAddressTemplateGroupAttributeResponse,
    DescribeAddressTemplatesResponse: DescribeAddressTemplatesResponse,
    DetachClassicLinkVpcResponse: DetachClassicLinkVpcResponse,
    ReleaseAddressesRequest: ReleaseAddressesRequest,
    UnassignPrivateIpAddressesRequest: UnassignPrivateIpAddressesRequest,
    AssociateAddressResponse: AssociateAddressResponse,
    Filter: Filter,
    CreateRouteTableRequest: CreateRouteTableRequest,
    DescribeAddressesRequest: DescribeAddressesRequest,
    DescribeSecurityGroupPoliciesRequest: DescribeSecurityGroupPoliciesRequest,
    MigrateNetworkInterfaceRequest: MigrateNetworkInterfaceRequest,
    DescribeAddressQuotaResponse: DescribeAddressQuotaResponse,
    CreateSecurityGroupPoliciesResponse: CreateSecurityGroupPoliciesResponse,
    CreateSecurityGroupResponse: CreateSecurityGroupResponse,
    DeleteSecurityGroupRequest: DeleteSecurityGroupRequest,
    ReplaceRoutesRequest: ReplaceRoutesRequest,
    CreateRouteTableResponse: CreateRouteTableResponse,
    DeleteRoutesResponse: DeleteRoutesResponse,
    ModifyPrivateIpAddressesAttributeRequest: ModifyPrivateIpAddressesAttributeRequest,
    CreateSecurityGroupRequest: CreateSecurityGroupRequest,
    DescribeClassicLinkInstancesRequest: DescribeClassicLinkInstancesRequest,
    CreateServiceTemplateResponse: CreateServiceTemplateResponse,
    DeleteNetworkInterfaceResponse: DeleteNetworkInterfaceResponse,
    AssignPrivateIpAddressesResponse: AssignPrivateIpAddressesResponse,
    DescribeSecurityGroupsRequest: DescribeSecurityGroupsRequest,
    DescribeAddressTemplatesRequest: DescribeAddressTemplatesRequest,
    SecurityGroupPolicySet: SecurityGroupPolicySet,
    DeleteSecurityGroupPoliciesResponse: DeleteSecurityGroupPoliciesResponse,
    ModifyAddressAttributeRequest: ModifyAddressAttributeRequest,
    DescribeAddressTemplateGroupsResponse: DescribeAddressTemplateGroupsResponse,
    Quota: Quota,
    Address: Address,
    DeleteAddressTemplateResponse: DeleteAddressTemplateResponse,
    DescribeNetworkInterfacesResponse: DescribeNetworkInterfacesResponse,
    AssignPrivateIpAddressesRequest: AssignPrivateIpAddressesRequest,
    DescribeServiceTemplateGroupsRequest: DescribeServiceTemplateGroupsRequest,
    CreateVpcRequest: CreateVpcRequest,
    CreateServiceTemplateGroupRequest: CreateServiceTemplateGroupRequest,
    DeleteServiceTemplateRequest: DeleteServiceTemplateRequest,
    DescribeClassicLinkInstancesResponse: DescribeClassicLinkInstancesResponse,
    AttachClassicLinkVpcResponse: AttachClassicLinkVpcResponse,
    DeleteAddressTemplateRequest: DeleteAddressTemplateRequest,
    ModifySubnetAttributeRequest: ModifySubnetAttributeRequest,
    AllocateAddressesResponse: AllocateAddressesResponse,
    TransformAddressRequest: TransformAddressRequest,
    AttachNetworkInterfaceRequest: AttachNetworkInterfaceRequest,
    CreateSecurityGroupPoliciesRequest: CreateSecurityGroupPoliciesRequest,
    ModifyRouteTableAttributeResponse: ModifyRouteTableAttributeResponse,
    MigrateNetworkInterfaceResponse: MigrateNetworkInterfaceResponse,
    DescribeVpcsResponse: DescribeVpcsResponse,
    ModifyAddressTemplateAttributeRequest: ModifyAddressTemplateAttributeRequest,
    ModifySecurityGroupAttributeRequest: ModifySecurityGroupAttributeRequest,
    CreateAddressTemplateGroupResponse: CreateAddressTemplateGroupResponse,
    DeleteServiceTemplateGroupRequest: DeleteServiceTemplateGroupRequest,
    InstanceChargePrepaid: InstanceChargePrepaid,

}
