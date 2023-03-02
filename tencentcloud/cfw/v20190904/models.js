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
 * DescribeNatFwInstance请求参数结构体
 * @class
 */
class DescribeNatFwInstanceRequest extends  AbstractModel {
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
 * ModifyNatFwVpcDnsSwitch返回参数结构体
 * @class
 */
class ModifyNatFwVpcDnsSwitchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNatFwInstanceWithRegion请求参数结构体
 * @class
 */
class DescribeNatFwInstanceWithRegionRequest extends  AbstractModel {
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
 * ModifyNatAcRule返回参数结构体
 * @class
 */
class ModifyNatAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑成功后返回新策略ID列表
         * @type {Array.<number> || null}
         */
        this.RuleUuid = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleOverview返回参数结构体
 * @class
 */
class DescribeRuleOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AllTotal = null;

        /**
         * 阻断策略规则数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StrategyNum = null;

        /**
         * 启用规则数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartRuleNum = null;

        /**
         * 停用规则数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StopRuleNum = null;

        /**
         * 剩余配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RemainingNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllTotal = 'AllTotal' in params ? params.AllTotal : null;
        this.StrategyNum = 'StrategyNum' in params ? params.StrategyNum : null;
        this.StartRuleNum = 'StartRuleNum' in params ? params.StartRuleNum : null;
        this.StopRuleNum = 'StopRuleNum' in params ? params.StopRuleNum : null;
        this.RemainingNum = 'RemainingNum' in params ? params.RemainingNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * NAT防火墙Dnat规则
 * @class
 */
class CfwNatDnatRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络协议，可选值：TCP、UDP。
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
         * NAT防火墙转发规则描述。
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
 * 防火墙网段信息
 * @class
 */
class FwCidrInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防火墙使用的网段类型，值VpcSelf/Assis/Custom分别代表自有网段优先/扩展网段优先/自定义
         * @type {string || null}
         */
        this.FwCidrType = null;

        /**
         * 为每个vpc指定防火墙的网段
         * @type {Array.<FwVpcCidr> || null}
         */
        this.FwCidrLst = null;

        /**
         * 其他防火墙占用网段，一般是防火墙需要独占vpc时指定的网段
         * @type {string || null}
         */
        this.ComFwCidr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FwCidrType = 'FwCidrType' in params ? params.FwCidrType : null;

        if (params.FwCidrLst) {
            this.FwCidrLst = new Array();
            for (let z in params.FwCidrLst) {
                let obj = new FwVpcCidr();
                obj.deserialize(params.FwCidrLst[z]);
                this.FwCidrLst.push(obj);
            }
        }
        this.ComFwCidr = 'ComFwCidr' in params ? params.ComFwCidr : null;

    }
}

/**
 * StaticInfo 告警柱形图统计信息
 
 * @class
 */
class StaticInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数
         * @type {number || null}
         */
        this.Num = null;

        /**
         * 端口
         * @type {string || null}
         */
        this.Port = null;

        /**
         * ip信息
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 资产id
         * @type {string || null}
         */
        this.InsID = null;

        /**
         * 资产名称
         * @type {string || null}
         */
        this.InsName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Num = 'Num' in params ? params.Num : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.InsID = 'InsID' in params ? params.InsID : null;
        this.InsName = 'InsName' in params ? params.InsName : null;

    }
}

/**
 * DescribeNatAcRule返回参数结构体
 * @class
 */
class DescribeNatAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * nat访问控制列表数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescAcItem> || null}
         */
        this.Data = null;

        /**
         * 未过滤的总条数
         * @type {number || null}
         */
        this.AllTotal = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DescAcItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.AllTotal = 'AllTotal' in params ? params.AllTotal : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPublicIPSwitchStatus返回参数结构体
 * @class
 */
class ModifyPublicIPSwitchStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 接口返回错误码，0请求成功  非0失败
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNatAcRule请求参数结构体
 * @class
 */
class ModifyNatAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要编辑的规则数组
         * @type {Array.<CreateNatRuleItem> || null}
         */
        this.Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new CreateNatRuleItem();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * ModifyAcRule返回参数结构体
 * @class
 */
class ModifyAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值，0:操作成功，非0：操作失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Info = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNatSequenceRules请求参数结构体
 * @class
 */
class ModifyNatSequenceRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则快速排序：OrderIndex，原始序号；NewOrderIndex：新序号
         * @type {Array.<RuleChangeItem> || null}
         */
        this.RuleChangeItems = null;

        /**
         * 规则方向：1，入站；0，出站
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleChangeItems) {
            this.RuleChangeItems = new Array();
            for (let z in params.RuleChangeItems) {
                let obj = new RuleChangeItem();
                obj.deserialize(params.RuleChangeItems[z]);
                this.RuleChangeItems.push(obj);
            }
        }
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * DescribeTableStatus返回参数结构体
 * @class
 */
class DescribeTableStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：正常，其它：不正常
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
 * AddAcRule请求参数结构体
 * @class
 */
class AddAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * -1表示优先级最低，1表示优先级最高
         * @type {string || null}
         */
        this.OrderIndex = null;

        /**
         * 访问控制策略中设置的流量通过云防火墙的方式。取值：
accept：放行
drop：拒绝
log：观察
         * @type {string || null}
         */
        this.RuleAction = null;

        /**
         * 访问控制策略的流量方向。取值：
in：外对内流量访问控制
out：内对外流量访问控制
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * 访问控制策略的描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 访问控制策略中的源地址类型。取值：
net：源IP或网段（IP或者CIDR）
location：源区域
template：云防火墙地址模板
instance：实例id
vendor：云厂商
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * 访问控制策略中的源地址。取值：
当SourceType为net时，SourceContent为源IP地址或者CIDR地址。
例如：1.1.1.0/24

当SourceType为template时，SourceContent为源地址模板id。

当SourceType为location时，SourceContent为源区域。
例如["BJ11", "ZB"]

当SourceType为instance时，SourceContent为该实例id对应的公网ip。
例如ins-xxxxx

当SourceType为vendor时，SourceContent为所选择厂商的公网ip列表。
例如：aws,huawei,tencent,aliyun,azure,all代表以上五个
         * @type {string || null}
         */
        this.SourceContent = null;

        /**
         * 访问控制策略中的目的地址类型。取值：
net：目的IP或者网段（IP或者CIDR）
location：源区域
template：云防火墙地址模板
instance：实例id
vendor：云厂商
domain: 域名或者ip
         * @type {string || null}
         */
        this.DestType = null;

        /**
         * 访问控制策略中的目的地址。取值：
当DestType为net时，DestContent为源IP地址或者CIDR地址。
例如：1.1.1.0/24

当DestType为template时，DestContent为源地址模板id。

当DestType为location时，DestContent为源区域。
例如["BJ11", "ZB"]

当DestType为instance时，DestContent为该实例id对应的公网ip。
例如ins-xxxxx

当DestType为domain时，DestContent为该实例id对应的域名规则。
例如*.qq.com

当DestType为vendor时，DestContent为所选择厂商的公网ip列表。
例如：aws,huawei,tencent,aliyun,azure,all代表以上五个
         * @type {string || null}
         */
        this.DestContent = null;

        /**
         * 访问控制策略的端口。取值：
-1/-1：全部端口
80,443：80或者443
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 访问控制策略中流量访问的协议类型。取值：TCP，目前互联网边界规则只能支持TCP，不传参数默认就是TCP
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 七层协议，取值：
HTTP/HTTPS
TLS/SSL
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 是否启用规则，默认为启用，取值：
true为启用，false为不启用
         * @type {string || null}
         */
        this.Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.RuleAction = 'RuleAction' in params ? params.RuleAction : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.SourceContent = 'SourceContent' in params ? params.SourceContent : null;
        this.DestType = 'DestType' in params ? params.DestType : null;
        this.DestContent = 'DestContent' in params ? params.DestContent : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * ip防护状态
 * @class
 */
class IPDefendStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * ip地址
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 防护状态   1:防护打开; -1:地址错误; 其他:未防护
         * @type {number || null}
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
        this.IP = 'IP' in params ? params.IP : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 入侵防御放通封禁规则
 * @class
 */
class BlockIgnoreRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 规则ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ioc = null;

        /**
         * 危险等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 来源事件名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * 方向：1入站，0出站
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 地理位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 规则类型：1封禁，2放通
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Action = null;

        /**
         * 规则生效开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 规则生效结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 忽略原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IgnoreReason = null;

        /**
         * 安全事件来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 规则id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqueId = null;

        /**
         * 规则命中次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MatchTimes = null;

        /**
         * 国家
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Country = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Ioc = 'Ioc' in params ? params.Ioc : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IgnoreReason = 'IgnoreReason' in params ? params.IgnoreReason : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.UniqueId = 'UniqueId' in params ? params.UniqueId : null;
        this.MatchTimes = 'MatchTimes' in params ? params.MatchTimes : null;
        this.Country = 'Country' in params ? params.Country : null;

    }
}

/**
 * ModifyNatFwVpcDnsSwitch请求参数结构体
 * @class
 */
class ModifyNatFwVpcDnsSwitchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * nat 防火墙 id
         * @type {string || null}
         */
        this.NatFwInsId = null;

        /**
         * DNS 开关切换列表
         * @type {Array.<DnsVpcSwitch> || null}
         */
        this.DnsVpcSwitchLst = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatFwInsId = 'NatFwInsId' in params ? params.NatFwInsId : null;

        if (params.DnsVpcSwitchLst) {
            this.DnsVpcSwitchLst = new Array();
            for (let z in params.DnsVpcSwitchLst) {
                let obj = new DnsVpcSwitch();
                obj.deserialize(params.DnsVpcSwitchLst[z]);
                this.DnsVpcSwitchLst.push(obj);
            }
        }

    }
}

/**
 * DeleteNatFwInstance返回参数结构体
 * @class
 */
class DeleteNatFwInstanceResponse extends  AbstractModel {
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
 * DeleteAllAccessControlRule请求参数结构体
 * @class
 */
class DeleteAllAccessControlRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 方向，0：出站，1：入站  默认值是 0
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * VPC间防火墙开关ID  全部删除 EdgeId和Area只填写一个，不填写则不删除vpc间防火墙开关 ，默认值为‘’
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * nat地域 全部删除 EdgeId和Area只填写一个，不填写则不删除nat防火墙开关 默认值为‘’
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
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * ModifySecurityGroupRule请求参数结构体
 * @class
 */
class ModifySecurityGroupRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 方向，0：出站，1：入站，默认1
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 编辑后是否启用规则，0：不启用，1：启用，默认1
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 编辑的企业安全组规则数据
         * @type {Array.<SecurityGroupListData> || null}
         */
        this.Data = null;

        /**
         * 编辑的企业安全组规则的原始执行顺序
         * @type {number || null}
         */
        this.SgRuleOriginSequence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SecurityGroupListData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.SgRuleOriginSequence = 'SgRuleOriginSequence' in params ? params.SgRuleOriginSequence : null;

    }
}

/**
 * ModifyAllVPCSwitchStatus返回参数结构体
 * @class
 */
class ModifyAllVPCSwitchStatusResponse extends  AbstractModel {
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
 * vpc区域数据详情
 * @class
 */
class VpcZoneData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * vpc节点地域
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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * CreateChooseVpcs请求参数结构体
 * @class
 */
class CreateChooseVpcsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * vpc列表
         * @type {Array.<string> || null}
         */
        this.VpcList = null;

        /**
         * zone列表
         * @type {Array.<VpcZoneData> || null}
         */
        this.AllZoneList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcList = 'VpcList' in params ? params.VpcList : null;

        if (params.AllZoneList) {
            this.AllZoneList = new Array();
            for (let z in params.AllZoneList) {
                let obj = new VpcZoneData();
                obj.deserialize(params.AllZoneList[z]);
                this.AllZoneList.push(obj);
            }
        }

    }
}

/**
 * DescribeNatFwVpcDnsLst请求参数结构体
 * @class
 */
class DescribeNatFwVpcDnsLstRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * natfw 防火墙实例id
         * @type {string || null}
         */
        this.NatFwInsId = null;

        /**
         * natfw 过滤，以','分隔
         * @type {string || null}
         */
        this.NatInsIdFilter = null;

        /**
         * 分页页数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页最多个数
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
        this.NatFwInsId = 'NatFwInsId' in params ? params.NatFwInsId : null;
        this.NatInsIdFilter = 'NatInsIdFilter' in params ? params.NatInsIdFilter : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeCfwEips请求参数结构体
 * @class
 */
class DescribeCfwEipsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1：cfw接入模式，目前仅支持接入模式实例
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * ALL：查询所有弹性公网ip; nat-xxxxx：接入模式场景指定网关的弹性公网ip
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * 防火墙实例id，当前仅支持接入模式的实例
         * @type {string || null}
         */
        this.CfwInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.CfwInstance = 'CfwInstance' in params ? params.CfwInstance : null;

    }
}

/**
 * DescribeTLogInfo返回参数结构体
 * @class
 */
class DescribeTLogInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {TLogInfo || null}
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

        if (params.Data) {
            let obj = new TLogInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUnHandleEventTabList请求参数结构体
 * @class
 */
class DescribeUnHandleEventTabListRequest extends  AbstractModel {
    constructor(){
        super();

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
         * 查询示例ID
         * @type {string || null}
         */
        this.AssetID = null;

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
        this.AssetID = 'AssetID' in params ? params.AssetID : null;

    }
}

/**
 * DescribeAssociatedInstanceList返回参数结构体
 * @class
 */
class DescribeAssociatedInstanceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssociatedInstanceInfo> || null}
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new AssociatedInstanceInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 企业安全组关联实例信息
 * @class
 */
class AssociatedInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例类型，3是cvm实例,4是clb实例,5是eni实例,6是云数据库
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 公网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * 内网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 关联安全组数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SecurityGroupCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.SecurityGroupCount = 'SecurityGroupCount' in params ? params.SecurityGroupCount : null;

    }
}

/**
 * ModifyStorageSetting返回参数结构体
 * @class
 */
class ModifyStorageSettingResponse extends  AbstractModel {
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
 * RemoveAcRule返回参数结构体
 * @class
 */
class RemoveAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除成功后返回被删除策略的uuid
         * @type {number || null}
         */
        this.RuleUuid = null;

        /**
         * 0代表成功，-1代表失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * success代表成功，failed代表失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Nat实例类型
 * @class
 */
class NatFwInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * nat实例id
         * @type {string || null}
         */
        this.NatinsId = null;

        /**
         * nat实例名称
         * @type {string || null}
         */
        this.NatinsName = null;

        /**
         * 实例所在地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 0:新增模式，1:接入模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FwMode = null;

        /**
         * 0:正常状态， 1: 正在创建
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * nat公网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NatIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatinsId = 'NatinsId' in params ? params.NatinsId : null;
        this.NatinsName = 'NatinsName' in params ? params.NatinsName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.FwMode = 'FwMode' in params ? params.FwMode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NatIp = 'NatIp' in params ? params.NatIp : null;

    }
}

/**
 * ExpandCfwVertical请求参数结构体
 * @class
 */
class ExpandCfwVerticalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * nat：nat防火墙，ew：东西向防火墙
         * @type {string || null}
         */
        this.FwType = null;

        /**
         * 带宽值
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 防火墙实例id
         * @type {string || null}
         */
        this.CfwInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FwType = 'FwType' in params ? params.FwType : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.CfwInstance = 'CfwInstance' in params ? params.CfwInstance : null;

    }
}

/**
 * ModifyAllPublicIPSwitchStatus返回参数结构体
 * @class
 */
class ModifyAllPublicIPSwitchStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 接口返回错误码，0请求成功  非0失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteVpcInstance返回参数结构体
 * @class
 */
class DeleteVpcInstanceResponse extends  AbstractModel {
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
 * ModifyAssetScan请求参数结构体
 * @class
 */
class ModifyAssetScanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扫描范围：1端口, 2端口+漏扫
         * @type {number || null}
         */
        this.ScanRange = null;

        /**
         * 扫描深度：'heavy', 'medium', 'light'
         * @type {string || null}
         */
        this.ScanDeep = null;

        /**
         * 扫描类型：1立即扫描 2 周期任务
         * @type {number || null}
         */
        this.RangeType = null;

        /**
         * RangeType为2 是必须添加，定时任务时间
         * @type {string || null}
         */
        this.ScanPeriod = null;

        /**
         * 立即扫描这个字段传过滤的扫描集合
         * @type {Array.<string> || null}
         */
        this.ScanFilterIp = null;

        /**
         * 1全量2单个
         * @type {number || null}
         */
        this.ScanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScanRange = 'ScanRange' in params ? params.ScanRange : null;
        this.ScanDeep = 'ScanDeep' in params ? params.ScanDeep : null;
        this.RangeType = 'RangeType' in params ? params.RangeType : null;
        this.ScanPeriod = 'ScanPeriod' in params ? params.ScanPeriod : null;
        this.ScanFilterIp = 'ScanFilterIp' in params ? params.ScanFilterIp : null;
        this.ScanType = 'ScanType' in params ? params.ScanType : null;

    }
}

/**
 * ModifyBlockIgnoreList请求参数结构体
 * @class
 */
class ModifyBlockIgnoreListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1封禁列表 2 放通列表
         * @type {number || null}
         */
        this.RuleType = null;

        /**
         * IP、Domain二选一，不能同时为空
         * @type {Array.<IocListData> || null}
         */
        this.IOC = null;

        /**
         * 可选值：delete（删除）、edit（编辑）、add（添加）  其他值无效
         * @type {string || null}
         */
        this.IocAction = null;

        /**
         * 时间格式：yyyy-MM-dd HH:mm:ss，IocAction 为edit或add时必填
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 时间格式：yyyy-MM-dd HH:mm:ss，IocAction 为edit或add时必填，必须大于当前时间且大于StartTime
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
        this.RuleType = 'RuleType' in params ? params.RuleType : null;

        if (params.IOC) {
            this.IOC = new Array();
            for (let z in params.IOC) {
                let obj = new IocListData();
                obj.deserialize(params.IOC[z]);
                this.IOC.push(obj);
            }
        }
        this.IocAction = 'IocAction' in params ? params.IocAction : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * AddEnterpriseSecurityGroupRules请求参数结构体
 * @class
 */
class AddEnterpriseSecurityGroupRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建规则数据
         * @type {Array.<SecurityGroupRule> || null}
         */
        this.Data = null;

        /**
         * 添加类型，0：添加到最后，1：添加到最前；2：中间插入；默认0添加到最后
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 是否延迟下发，1则延迟下发，否则立即下发
         * @type {number || null}
         */
        this.IsDelay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SecurityGroupRule();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.IsDelay = 'IsDelay' in params ? params.IsDelay : null;

    }
}

/**
 * 安全组规则
 * @class
 */
class SecurityGroupRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问源示例：
net：IP/CIDR(192.168.0.2)
template：参数模板(ipm-dyodhpby)
instance：资产实例(ins-123456)
resourcegroup：资产分组(/全部分组/分组1/子分组1)
tag：资源标签({"Key":"标签key值","Value":"标签Value值"})
region：地域(ap-gaungzhou)
         * @type {string || null}
         */
        this.SourceContent = null;

        /**
         * 访问源类型，类型可以为以下6种：net|template|instance|resourcegroup|tag|region
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * 访问目的示例：
net：IP/CIDR(192.168.0.2)
template：参数模板(ipm-dyodhpby)
instance：资产实例(ins-123456)
resourcegroup：资产分组(/全部分组/分组1/子分组1)
tag：资源标签({"Key":"标签key值","Value":"标签Value值"})
region：地域(ap-gaungzhou)
         * @type {string || null}
         */
        this.DestContent = null;

        /**
         * 访问目的类型，类型可以为以下6种：net|template|instance|resourcegroup|tag|region
         * @type {string || null}
         */
        this.DestType = null;

        /**
         * 访问控制策略中设置的流量通过云防火墙的方式。取值：
accept：放行
drop：拒绝
         * @type {string || null}
         */
        this.RuleAction = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 规则顺序，-1表示最低，1表示最高
         * @type {string || null}
         */
        this.OrderIndex = null;

        /**
         * 协议；TCP/UDP/ICMP/ANY
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 访问控制策略的端口。取值：
-1/-1：全部端口
80：80端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 端口协议类型参数模板id；协议端口模板id；与Protocol,Port互斥
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceTemplateId = null;

        /**
         * 规则对应的唯一id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则状态，true表示启用，false表示禁用
         * @type {string || null}
         */
        this.Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceContent = 'SourceContent' in params ? params.SourceContent : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.DestContent = 'DestContent' in params ? params.DestContent : null;
        this.DestType = 'DestType' in params ? params.DestType : null;
        this.RuleAction = 'RuleAction' in params ? params.RuleAction : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ServiceTemplateId = 'ServiceTemplateId' in params ? params.ServiceTemplateId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * DeleteSecurityGroupRule返回参数结构体
 * @class
 */
class DeleteSecurityGroupRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值，0：成功，非0：失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Info = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySequenceRules请求参数结构体
 * @class
 */
class ModifySequenceRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边Id值
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * 修改数据
         * @type {Array.<SequenceData> || null}
         */
        this.Data = null;

        /**
         * NAT地域
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 方向，0：出向，1：入向
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SequenceData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * 执行顺序对象
 * @class
 */
class SequenceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id值
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 修改前执行顺序
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * 修改后执行顺序
         * @type {number || null}
         */
        this.NewOrderIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.NewOrderIndex = 'NewOrderIndex' in params ? params.NewOrderIndex : null;

    }
}

/**
 * CreateNatFwInstance请求参数结构体
 * @class
 */
class CreateNatFwInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防火墙实例名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 带宽
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 模式 1：接入模式；0：新增模式
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 新增模式传递参数，其中NewModeItems和NatgwList至少传递一种。
         * @type {NewModeItems || null}
         */
        this.NewModeItems = null;

        /**
         * 接入模式接入的nat网关列表，其中NewModeItems和NatgwList至少传递一种。
         * @type {Array.<string> || null}
         */
        this.NatGwList = null;

        /**
         * 主可用区，为空则选择默认可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 备可用区，为空则选择默认可用区
         * @type {string || null}
         */
        this.ZoneBak = null;

        /**
         * 异地灾备 1：使用异地灾备；0：不使用异地灾备；为空则默认不使用异地灾备
         * @type {number || null}
         */
        this.CrossAZone = null;

        /**
         * 指定防火墙使用网段信息
         * @type {FwCidrInfo || null}
         */
        this.FwCidrInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.NewModeItems) {
            let obj = new NewModeItems();
            obj.deserialize(params.NewModeItems)
            this.NewModeItems = obj;
        }
        this.NatGwList = 'NatGwList' in params ? params.NatGwList : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneBak = 'ZoneBak' in params ? params.ZoneBak : null;
        this.CrossAZone = 'CrossAZone' in params ? params.CrossAZone : null;

        if (params.FwCidrInfo) {
            let obj = new FwCidrInfo();
            obj.deserialize(params.FwCidrInfo)
            this.FwCidrInfo = obj;
        }

    }
}

/**
 * ModifySecurityGroupItemRuleStatus返回参数结构体
 * @class
 */
class ModifySecurityGroupItemRuleStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值，0：修改成功，非0：修改失败
         * @type {number || null}
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
 * DescribeEnterpriseSecurityGroupRule返回参数结构体
 * @class
 */
class DescribeEnterpriseSecurityGroupRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页查询时，显示的当前页的页码。
         * @type {string || null}
         */
        this.PageNo = null;

        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @type {string || null}
         */
        this.PageSize = null;

        /**
         * 访问控制策略列表
         * @type {Array.<SecurityGroupRule> || null}
         */
        this.Rules = null;

        /**
         * 访问控制策略的总数量。
         * @type {string || null}
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
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new SecurityGroupRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * nat防火墙 vpc dns 开关信息
 * @class
 */
class VpcDnsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * vpc id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * vpc 名称
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * nat 防火墙模式 0：新增模式， 1: 接入模式
         * @type {number || null}
         */
        this.FwMode = null;

        /**
         * vpc ipv4网段范围 CIDR（Classless Inter-Domain Routing，无类域间路由选择）
         * @type {string || null}
         */
        this.VpcIpv4Cidr = null;

        /**
         * 外网弹性ip，防火墙 dns解析地址
         * @type {string || null}
         */
        this.DNSEip = null;

        /**
         * nat网关id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NatInsId = null;

        /**
         * nat网关名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NatInsName = null;

        /**
         * 0：开关关闭 ， 1: 开关打开
         * @type {number || null}
         */
        this.SwitchStatus = null;

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
        this.FwMode = 'FwMode' in params ? params.FwMode : null;
        this.VpcIpv4Cidr = 'VpcIpv4Cidr' in params ? params.VpcIpv4Cidr : null;
        this.DNSEip = 'DNSEip' in params ? params.DNSEip : null;
        this.NatInsId = 'NatInsId' in params ? params.NatInsId : null;
        this.NatInsName = 'NatInsName' in params ? params.NatInsName : null;
        this.SwitchStatus = 'SwitchStatus' in params ? params.SwitchStatus : null;

    }
}

/**
 * DescribeEnterpriseSecurityGroupRule请求参数结构体
 * @class
 */
class DescribeEnterpriseSecurityGroupRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页查询时，显示的当前页的页码。

默认值为1。
         * @type {string || null}
         */
        this.PageNo = null;

        /**
         * 分页查询时，显示的每页数据的最大条数。

可设置值最大为50。
         * @type {string || null}
         */
        this.PageSize = null;

        /**
         * 访问源示例：
net：IP/CIDR(192.168.0.2)
template：参数模板(ipm-dyodhpby)
instance：资产实例(ins-123456)
resourcegroup：资产分组(/全部分组/分组1/子分组1)
tag：资源标签({"Key":"标签key值","Value":"标签Value值"})
region：地域(ap-gaungzhou)
支持通配
         * @type {string || null}
         */
        this.SourceContent = null;

        /**
         * 访问目的示例：
net：IP/CIDR(192.168.0.2)
template：参数模板(ipm-dyodhpby)
instance：资产实例(ins-123456)
resourcegroup：资产分组(/全部分组/分组1/子分组1)
tag：资源标签({"Key":"标签key值","Value":"标签Value值"})
region：地域(ap-gaungzhou)
支持通配
         * @type {string || null}
         */
        this.DestContent = null;

        /**
         * 规则描述，支持通配
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 访问控制策略中设置的流量通过云防火墙的方式。取值：
accept：放行
drop：拒绝
         * @type {string || null}
         */
        this.RuleAction = null;

        /**
         * 是否启用规则，默认为启用，取值：
true为启用，false为不启用
         * @type {string || null}
         */
        this.Enable = null;

        /**
         * 访问控制策略的端口。取值：
-1/-1：全部端口
80：80端口
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 协议；TCP/UDP/ICMP/ANY
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口协议类型参数模板id；协议端口模板id；与Protocol,Port互斥
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
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.SourceContent = 'SourceContent' in params ? params.SourceContent : null;
        this.DestContent = 'DestContent' in params ? params.DestContent : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleAction = 'RuleAction' in params ? params.RuleAction : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ServiceTemplateId = 'ServiceTemplateId' in params ? params.ServiceTemplateId : null;

    }
}

/**
 * ModifyNatFwReSelect返回参数结构体
 * @class
 */
class ModifyNatFwReSelectResponse extends  AbstractModel {
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
 * DeleteSecurityGroupRule请求参数结构体
 * @class
 */
class DeleteSecurityGroupRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所需要删除规则的ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 腾讯云地域的英文简写
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 方向，0：出站，1：入站
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 是否删除反向规则，0：否，1：是
         * @type {number || null}
         */
        this.IsDelReverse = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.IsDelReverse = 'IsDelReverse' in params ? params.IsDelReverse : null;

    }
}

/**
 * SetNatFwEip请求参数结构体
 * @class
 */
class SetNatFwEipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * bind：绑定eip；unbind：解绑eip；newAdd：新增防火墙弹性公网ip
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * 防火墙实例id
         * @type {string || null}
         */
        this.CfwInstance = null;

        /**
         * 当OperationType 为bind或unbind操作时，使用该字段。
         * @type {Array.<string> || null}
         */
        this.EipList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.CfwInstance = 'CfwInstance' in params ? params.CfwInstance : null;
        this.EipList = 'EipList' in params ? params.EipList : null;

    }
}

/**
 * SetNatFwEip返回参数结构体
 * @class
 */
class SetNatFwEipResponse extends  AbstractModel {
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
 * 访问控制列表对象
 * @class
 */
class AcListsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 访问源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * 访问目的
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetIp = null;

        /**
         * 协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * 命中次数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 执行顺序
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * 告警规则id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.TargetIp = 'TargetIp' in params ? params.TargetIp : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.LogId = 'LogId' in params ? params.LogId : null;

    }
}

/**
 * ModifyPublicIPSwitchStatus请求参数结构体
 * @class
 */
class ModifyPublicIPSwitchStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公网IP
         * @type {string || null}
         */
        this.FireWallPublicIP = null;

        /**
         * 状态值，0: 关闭 ,1:开启
         * @type {number || null}
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
        this.FireWallPublicIP = 'FireWallPublicIP' in params ? params.FireWallPublicIP : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 创建NAT ACL规则参数结构
 * @class
 */
class CreateNatRuleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问源示例： net：IP/CIDR(192.168.0.2)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceContent = null;

        /**
         * 访问源类型：入向规则时类型可以为 ip,net,template,location；出向规则时可以为 ip,net,template,instance,group,tag
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * 访问目的示例： net：IP/CIDR(192.168.0.2) domain：域名规则，例如*.qq.com
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetContent = null;

        /**
         * 访问目的类型：入向规则时类型可以为ip,net,template,instance,group,tag；出向规则时可以为  ip,net,domain,template,location
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * 协议，可选的值： TCP UDP ICMP ANY HTTP HTTPS HTTP/HTTPS SMTP SMTPS SMTP/SMTPS FTP DNS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 访问控制策略中设置的流量通过云防火墙的方式。取值： accept：放行 drop：拒绝 log：观察
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleAction = null;

        /**
         * 访问控制策略的端口。取值： -1/-1：全部端口 80：80端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 规则方向：1，入站；0，出站
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 规则序号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * 规则状态，true表示启用，false表示禁用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Enable = null;

        /**
         * 规则对应的唯一id，创建规则时无需填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Uuid = null;

        /**
         * 描述
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
        this.SourceContent = 'SourceContent' in params ? params.SourceContent : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.TargetContent = 'TargetContent' in params ? params.TargetContent : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.RuleAction = 'RuleAction' in params ? params.RuleAction : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ModifySecurityGroupItemRuleStatus请求参数结构体
 * @class
 */
class ModifySecurityGroupItemRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 方向，0：出站，1：入站，默认1
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 是否开关开启，0：未开启，1：开启
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 更改的企业安全组规则的执行顺序
         * @type {number || null}
         */
        this.RuleSequence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RuleSequence = 'RuleSequence' in params ? params.RuleSequence : null;

    }
}

/**
 * DescribeSourceAsset请求参数结构体
 * @class
 */
class DescribeSourceAssetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模糊查询
         * @type {string || null}
         */
        this.FuzzySearch = null;

        /**
         * 资产类型 1公网 2内网
         * @type {string || null}
         */
        this.InsType = null;

        /**
         * ChooseType为1，查询已经分组的资产；ChooseType不为1查询没有分组的资产
         * @type {string || null}
         */
        this.ChooseType = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 查询单页的最大值；eg：10；则最多返回10条结果
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询结果的偏移量
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
        this.FuzzySearch = 'FuzzySearch' in params ? params.FuzzySearch : null;
        this.InsType = 'InsType' in params ? params.InsType : null;
        this.ChooseType = 'ChooseType' in params ? params.ChooseType : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 企业安全组规则执行顺序修改对象
 * @class
 */
class SecurityGroupOrderIndexData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业安全组规则当前执行顺序
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * 企业安全组规则更新目标执行顺序
         * @type {number || null}
         */
        this.NewOrderIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.NewOrderIndex = 'NewOrderIndex' in params ? params.NewOrderIndex : null;

    }
}

/**
 * DescribeSourceAsset返回参数结构体
 * @class
 */
class DescribeSourceAssetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域集合
         * @type {Array.<AssetZone> || null}
         */
        this.ZoneList = null;

        /**
         * 数据
         * @type {Array.<InstanceInfo> || null}
         */
        this.Data = null;

        /**
         * 返回数据总数
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

        if (params.ZoneList) {
            this.ZoneList = new Array();
            for (let z in params.ZoneList) {
                let obj = new AssetZone();
                obj.deserialize(params.ZoneList[z]);
                this.ZoneList.push(obj);
            }
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new InstanceInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTLogInfo请求参数结构体
 * @class
 */
class DescribeTLogInfoRequest extends  AbstractModel {
    constructor(){
        super();

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
         * 类型 1 告警 2阻断
         * @type {string || null}
         */
        this.QueryType = null;

        /**
         * 查询条件
         * @type {string || null}
         */
        this.SearchValue = null;

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
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * DescribeSecurityGroupList返回参数结构体
 * @class
 */
class DescribeSecurityGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表当前规则总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 安全组规则列表数据
         * @type {Array.<SecurityGroupListData> || null}
         */
        this.Data = null;

        /**
         * 不算筛选条数的总条数
         * @type {number || null}
         */
        this.AllTotal = null;

        /**
         * 访问控制规则全部启用/全部停用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SecurityGroupListData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.AllTotal = 'AllTotal' in params ? params.AllTotal : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssetZone 
 * @class
 */
class AssetZone extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 地域英文
         * @type {string || null}
         */
        this.ZoneEng = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneEng = 'ZoneEng' in params ? params.ZoneEng : null;

    }
}

/**
 * 规则顺序变更项，由原始id值变为新的id值。
 * @class
 */
class RuleChangeItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原始sequence 值
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * 新的sequence 值
         * @type {number || null}
         */
        this.NewOrderIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.NewOrderIndex = 'NewOrderIndex' in params ? params.NewOrderIndex : null;

    }
}

/**
 * DescribeTLogIpList请求参数结构体
 * @class
 */
class DescribeTLogIpListRequest extends  AbstractModel {
    constructor(){
        super();

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
         * 类型 1 告警 2阻断
         * @type {string || null}
         */
        this.QueryType = null;

        /**
         * top数
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 查询条件
         * @type {string || null}
         */
        this.SearchValue = null;

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
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.Top = 'Top' in params ? params.Top : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * 通用的列表检索过滤选项
 * @class
 */
class CommonFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检索的键值
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 检索的值
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 枚举类型，代表name与values之间的匹配关系
enum FilterOperatorType {
    //INVALID
    FILTER_OPERATOR_TYPE_INVALID = 0;
    //等于
    FILTER_OPERATOR_TYPE_EQUAL = 1;
    //大于
    FILTER_OPERATOR_TYPE_GREATER = 2;
    //小于
    FILTER_OPERATOR_TYPE_LESS = 3;
    //大于等于
    FILTER_OPERATOR_TYPE_GREATER_EQ = 4;
    //小于等于
    FILTER_OPERATOR_TYPE_LESS_EQ = 5;
    //不等于
    FILTER_OPERATOR_TYPE_NO_EQ = 6;
    //in，数组中包含
    FILTER_OPERATOR_TYPE_IN = 7;
    //not in
    FILTER_OPERATOR_TYPE_NOT_IN = 8;
    //模糊匹配
    FILTER_OPERATOR_TYPE_FUZZINESS = 9;
    //存在
    FILTER_OPERATOR_TYPE_EXIST = 10;
    //不存在
    FILTER_OPERATOR_TYPE_NOT_EXIST = 11;
    //正则
    FILTER_OPERATOR_TYPE_REGULAR = 12;
}
         * @type {number || null}
         */
        this.OperatorType = null;

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
        this.OperatorType = 'OperatorType' in params ? params.OperatorType : null;

    }
}

/**
 * DescribeNatFwInstancesInfo请求参数结构体
 * @class
 */
class DescribeNatFwInstancesInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取实例列表过滤字段
         * @type {Array.<NatFwFilter> || null}
         */
        this.Filter = null;

        /**
         * 第几页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页长度
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

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new NatFwFilter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyNatSequenceRules返回参数结构体
 * @class
 */
class ModifyNatSequenceRulesResponse extends  AbstractModel {
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
 * DescribeTableStatus请求参数结构体
 * @class
 */
class DescribeTableStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EdgeId值两个vpc间的边id vpc填Edgeid，不要填Area；
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * 状态值，0：检查表的状态 确实只有一个默认值
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Nat所在地域 NAT填Area，不要填Edgeid；
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 方向，0：出站，1：入站 默认值为 0
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * DescribeSecurityGroupList请求参数结构体
 * @class
 */
class DescribeSecurityGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: 出站规则，1：入站规则
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 地域代码（例: ap-guangzhou),支持腾讯云全部地域
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 搜索值
         * @type {string || null}
         */
        this.SearchValue = null;

        /**
         * 每页条数，默认为10
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移值，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 状态，'': 全部，'0'：筛选停用规则，'1'：筛选启用规则
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 0: 不过滤，1：过滤掉正常规则，保留下发异常规则
         * @type {number || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Filter = 'Filter' in params ? params.Filter : null;

    }
}

/**
 * ModifyResourceGroup请求参数结构体
 * @class
 */
class ModifyResourceGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组id
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 上级组id
         * @type {string || null}
         */
        this.ParentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ParentId = 'ParentId' in params ? params.ParentId : null;

    }
}

/**
 * CreateNatFwInstance返回参数结构体
 * @class
 */
class CreateNatFwInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防火墙实例id
         * @type {string || null}
         */
        this.CfwInsId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CfwInsId = 'CfwInsId' in params ? params.CfwInsId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 新增模式传递参数
 * @class
 */
class NewModeItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增模式下接入的vpc列表
         * @type {Array.<string> || null}
         */
        this.VpcList = null;

        /**
         * 新增模式下绑定的出口弹性公网ip列表，其中Eips和AddCount至少传递一个。
         * @type {Array.<string> || null}
         */
        this.Eips = null;

        /**
         * 新增模式下新增绑定的出口弹性公网ip个数，其中Eips和AddCount至少传递一个。
         * @type {number || null}
         */
        this.AddCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcList = 'VpcList' in params ? params.VpcList : null;
        this.Eips = 'Eips' in params ? params.Eips : null;
        this.AddCount = 'AddCount' in params ? params.AddCount : null;

    }
}

/**
 * DescribeNatFwInfoCount返回参数结构体
 * @class
 */
class DescribeNatFwInfoCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 当前租户的nat实例个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NatFwInsCount = null;

        /**
         * 当前租户接入子网个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SubnetCount = null;

        /**
         * 打开开关个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OpenSwitchCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.NatFwInsCount = 'NatFwInsCount' in params ? params.NatFwInsCount : null;
        this.SubnetCount = 'SubnetCount' in params ? params.SubnetCount : null;
        this.OpenSwitchCount = 'OpenSwitchCount' in params ? params.OpenSwitchCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDefenseSwitch请求参数结构体
 * @class
 */
class DescribeDefenseSwitchRequest extends  AbstractModel {
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
 * ModifyEnterpriseSecurityDispatchStatus返回参数结构体
 * @class
 */
class ModifyEnterpriseSecurityDispatchStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: 修改成功, 其他: 修改失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
 * 安全组列表数据
 * @class
 */
class SecurityGroupListData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行顺序
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * 访问源
         * @type {string || null}
         */
        this.SourceId = null;

        /**
         * 访问源类型，默认为0，1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100: 资源组
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 访问目的
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * 访问目的类型，默认为0，1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100:资源组
         * @type {number || null}
         */
        this.TargetType = null;

        /**
         * 协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 目的端口
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 策略, 1：阻断，2：放行
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * 单/双向下发，0:单向下发，1：双向下发
         * @type {number || null}
         */
        this.BothWay = null;

        /**
         * 规则ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 是否开关开启，0：未开启，1：开启
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 是否是正常规则，0：正常，1：异常
         * @type {number || null}
         */
        this.IsNew = null;

        /**
         * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 公网IP，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * 内网IP，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * 掩码地址，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cidr = null;

        /**
         * 端口协议类型参数模板id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceTemplateId = null;

        /**
         * 生成双向下发规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecurityGroupBothWayInfo> || null}
         */
        this.BothWayInfo = null;

        /**
         * 方向，0：出站，1：入站，默认1
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 是否使用端口协议模板，0：否，1：是
         * @type {number || null}
         */
        this.ProtocolPortType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.BothWay = 'BothWay' in params ? params.BothWay : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsNew = 'IsNew' in params ? params.IsNew : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.Cidr = 'Cidr' in params ? params.Cidr : null;
        this.ServiceTemplateId = 'ServiceTemplateId' in params ? params.ServiceTemplateId : null;

        if (params.BothWayInfo) {
            this.BothWayInfo = new Array();
            for (let z in params.BothWayInfo) {
                let obj = new SecurityGroupBothWayInfo();
                obj.deserialize(params.BothWayInfo[z]);
                this.BothWayInfo.push(obj);
            }
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.ProtocolPortType = 'ProtocolPortType' in params ? params.ProtocolPortType : null;

    }
}

/**
 * RemoveNatAcRule返回参数结构体
 * @class
 */
class RemoveNatAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除成功后返回被删除策略的uuid列表
         * @type {Array.<number> || null}
         */
        this.RuleUuid = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNatFwInstanceWithDomain返回参数结构体
 * @class
 */
class CreateNatFwInstanceWithDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * nat实例信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CfwInsId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CfwInsId = 'CfwInsId' in params ? params.CfwInsId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemoveAcRule请求参数结构体
 * @class
 */
class RemoveAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则的uuid，可通过查询规则列表获取
         * @type {number || null}
         */
        this.RuleUuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;

    }
}

/**
 * 数据库白名单规则数据
 * @class
 */
class DatabaseWhiteListRuleData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问源
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * 访问源类型，1 ip；6 实例；100 资源分组
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 访问目的
         * @type {string || null}
         */
        this.TargetIp = null;

        /**
         * 访问目的类型，1 ip；6 实例；100 资源分组
         * @type {number || null}
         */
        this.TargetType = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * 是否地域规则，0不是 1是
         * @type {number || null}
         */
        this.IsRegionRule = null;

        /**
         * 是否云厂商规则，0不是 1 时
         * @type {number || null}
         */
        this.IsCloudRule = null;

        /**
         * 是否启用，0 不启用，1启用
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 地域码1
         * @type {number || null}
         */
        this.FirstLevelRegionCode = null;

        /**
         * 地域码2
         * @type {number || null}
         */
        this.SecondLevelRegionCode = null;

        /**
         * 地域名称1
         * @type {string || null}
         */
        this.FirstLevelRegionName = null;

        /**
         * 地域名称2
         * @type {string || null}
         */
        this.SecondLevelRegionName = null;

        /**
         * 云厂商码
         * @type {string || null}
         */
        this.CloudCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.TargetIp = 'TargetIp' in params ? params.TargetIp : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.IsRegionRule = 'IsRegionRule' in params ? params.IsRegionRule : null;
        this.IsCloudRule = 'IsCloudRule' in params ? params.IsCloudRule : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.FirstLevelRegionCode = 'FirstLevelRegionCode' in params ? params.FirstLevelRegionCode : null;
        this.SecondLevelRegionCode = 'SecondLevelRegionCode' in params ? params.SecondLevelRegionCode : null;
        this.FirstLevelRegionName = 'FirstLevelRegionName' in params ? params.FirstLevelRegionName : null;
        this.SecondLevelRegionName = 'SecondLevelRegionName' in params ? params.SecondLevelRegionName : null;
        this.CloudCode = 'CloudCode' in params ? params.CloudCode : null;

    }
}

/**
 * RemoveNatAcRule请求参数结构体
 * @class
 */
class RemoveNatAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则的uuid列表，可通过查询规则列表获取，注意：如果传入的是[-1]将删除所有规则
         * @type {Array.<number> || null}
         */
        this.RuleUuid = null;

        /**
         * 规则方向：1，入站；0，出站
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * ModifyAllRuleStatus请求参数结构体
 * @class
 */
class ModifyAllRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态，0：全部停用，1：全部启用
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 方向，0：出站，1：入站
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Edge ID值
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * NAT地域
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
        this.Status = 'Status' in params ? params.Status : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 规则输入对象
 * @class
 */
class RuleInfoData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行顺序
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * 访问源
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * 访问目的
         * @type {string || null}
         */
        this.TargetIp = null;

        /**
         * 协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 策略, 0：观察，1：阻断，2：放行
         * @type {string || null}
         */
        this.Strategy = null;

        /**
         * 访问源类型，1是IP，3是域名，4是IP地址模版，5是域名地址模版
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 方向，0：出站，1：入站
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * 访问目的类型，1是IP，3是域名，4是IP地址模版，5是域名地址模版
         * @type {number || null}
         */
        this.TargetType = null;

        /**
         * 端口
         * @type {string || null}
         */
        this.Port = null;

        /**
         * id值
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 日志id，从告警处创建必传，其它为空
         * @type {string || null}
         */
        this.LogId = null;

        /**
         * 城市Code
         * @type {number || null}
         */
        this.City = null;

        /**
         * 国家Code
         * @type {number || null}
         */
        this.Country = null;

        /**
         * 云厂商，支持多个，以逗号分隔， 1:腾讯云（仅中国香港及海外）,2:阿里云,3:亚马逊云,4:华为云,5:微软云
         * @type {string || null}
         */
        this.CloudCode = null;

        /**
         * 是否为地域
         * @type {number || null}
         */
        this.IsRegion = null;

        /**
         * 城市名
         * @type {string || null}
         */
        this.CityName = null;

        /**
         * 国家名
         * @type {string || null}
         */
        this.CountryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.TargetIp = 'TargetIp' in params ? params.TargetIp : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.City = 'City' in params ? params.City : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.CloudCode = 'CloudCode' in params ? params.CloudCode : null;
        this.IsRegion = 'IsRegion' in params ? params.IsRegion : null;
        this.CityName = 'CityName' in params ? params.CityName : null;
        this.CountryName = 'CountryName' in params ? params.CountryName : null;

    }
}

/**
 * DescribeAcLists返回参数结构体
 * @class
 */
class DescribeAcListsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 访问控制列表数据
         * @type {Array.<AcListsData> || null}
         */
        this.Data = null;

        /**
         * 不算筛选条数的总条数
         * @type {number || null}
         */
        this.AllTotal = null;

        /**
         * 访问控制规则全部启用/全部停用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new AcListsData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.AllTotal = 'AllTotal' in params ? params.AllTotal : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAllPublicIPSwitchStatus请求参数结构体
 * @class
 */
class ModifyAllPublicIPSwitchStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态，0：关闭，1：开启
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 选中的防火墙开关Id
         * @type {Array.<string> || null}
         */
        this.FireWallPublicIPs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.FireWallPublicIPs = 'FireWallPublicIPs' in params ? params.FireWallPublicIPs : null;

    }
}

/**
 * DescribeBlockStaticList返回参数结构体
 * @class
 */
class DescribeBlockStaticListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {Array.<StaticInfo> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new StaticInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddNatAcRule请求参数结构体
 * @class
 */
class AddNatAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要添加的nat访问控制规则列表
         * @type {Array.<CreateNatRuleItem> || null}
         */
        this.Rules = null;

        /**
         * 添加规则的来源，一般不需要使用，值insert_rule 表示插入指定位置的规则；值batch_import 表示批量导入规则；为空时表示添加规则
         * @type {string || null}
         */
        this.From = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new CreateNatRuleItem();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.From = 'From' in params ? params.From : null;

    }
}

/**
 * ModifySecurityGroupSequenceRules请求参数结构体
 * @class
 */
class ModifySecurityGroupSequenceRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 方向，0：出站，1：入站，默认1
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 企业安全组规则快速排序数据
         * @type {Array.<SecurityGroupOrderIndexData> || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Direction = 'Direction' in params ? params.Direction : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SecurityGroupOrderIndexData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * CreateDatabaseWhiteListRules返回参数结构体
 * @class
 */
class CreateDatabaseWhiteListRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值，0:添加成功，非0：添加失败
         * @type {number || null}
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
 * 新手引导扫描信息  
 * @class
 */
class ScanInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扫描结果信息
         * @type {ScanResultInfo || null}
         */
        this.ScanResultInfo = null;

        /**
         * 扫描状态 0扫描中 1完成  2未勾选自动扫描
         * @type {number || null}
         */
        this.ScanStatus = null;

        /**
         * 进度
         * @type {number || null}
         */
        this.ScanPercent = null;

        /**
         * 预计完成时间
         * @type {string || null}
         */
        this.ScanTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ScanResultInfo) {
            let obj = new ScanResultInfo();
            obj.deserialize(params.ScanResultInfo)
            this.ScanResultInfo = obj;
        }
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;
        this.ScanPercent = 'ScanPercent' in params ? params.ScanPercent : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;

    }
}

/**
 * CreateChooseVpcs返回参数结构体
 * @class
 */
class CreateChooseVpcsResponse extends  AbstractModel {
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
 * DescribeUnHandleEventTabList返回参数结构体
 * @class
 */
class DescribeUnHandleEventTabListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 租户伪攻击链未处置事件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UnHandleEvent || null}
         */
        this.Data = null;

        /**
         * 错误码，0成功 非0错误
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 返回信息 success成功
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new UnHandleEvent();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * nat fw 实例展示的过滤列表
 * @class
 */
class NatFwFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤的类型，例如实例id
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * 过滤的内容，以',' 分隔
         * @type {string || null}
         */
        this.FilterContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.FilterContent = 'FilterContent' in params ? params.FilterContent : null;

    }
}

/**
 * 新手引导扫描结果信息PortNum   int
	LeakNum   int
	IPNum     int
	IPStatus  bool
	IdpStatus bool
	BanStatus bool
 * @class
 */
class ScanResultInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 暴露漏洞数量
         * @type {number || null}
         */
        this.LeakNum = null;

        /**
         * 防护ip数量
         * @type {number || null}
         */
        this.IPNum = null;

        /**
         * 暴露端口数量
         * @type {number || null}
         */
        this.PortNum = null;

        /**
         * 是否开启防护
         * @type {boolean || null}
         */
        this.IPStatus = null;

        /**
         * 是否拦截攻击
         * @type {boolean || null}
         */
        this.IdpStatus = null;

        /**
         * 是否禁封端口
         * @type {boolean || null}
         */
        this.BanStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LeakNum = 'LeakNum' in params ? params.LeakNum : null;
        this.IPNum = 'IPNum' in params ? params.IPNum : null;
        this.PortNum = 'PortNum' in params ? params.PortNum : null;
        this.IPStatus = 'IPStatus' in params ? params.IPStatus : null;
        this.IdpStatus = 'IdpStatus' in params ? params.IdpStatus : null;
        this.BanStatus = 'BanStatus' in params ? params.BanStatus : null;

    }
}

/**
 * ModifyRunSyncAsset返回参数结构体
 * @class
 */
class ModifyRunSyncAssetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：同步成功，1：资产更新中，2：后台同步调用失败
         * @type {number || null}
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
 * ModifyEnterpriseSecurityGroupRule返回参数结构体
 * @class
 */
class ModifyEnterpriseSecurityGroupRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值，0：编辑成功，非0：编辑失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 编辑后新生成规则的Id
         * @type {number || null}
         */
        this.NewRuleUuid = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.NewRuleUuid = 'NewRuleUuid' in params ? params.NewRuleUuid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySecurityGroupSequenceRules返回参数结构体
 * @class
 */
class ModifySecurityGroupSequenceRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值，0：修改成功，非0：修改失败
         * @type {number || null}
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
 * 统计折线图通用结构体
 * @class
 */
class IpStatic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 值
         * @type {number || null}
         */
        this.Num = null;

        /**
         * 折线图横坐标时间
         * @type {string || null}
         */
        this.StatTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Num = 'Num' in params ? params.Num : null;
        this.StatTime = 'StatTime' in params ? params.StatTime : null;

    }
}

/**
 * AddEnterpriseSecurityGroupRules返回参数结构体
 * @class
 */
class AddEnterpriseSecurityGroupRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值，0：添加成功，非0：添加失败
         * @type {number || null}
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
 * 未处置事件信息汇总
 * @class
 */
class UnHandleEventDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全事件名称
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * 未处置事件数量
         * @type {number || null}
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * RemoveEnterpriseSecurityGroupRule请求参数结构体
 * @class
 */
class RemoveEnterpriseSecurityGroupRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则的uuid，可通过查询规则列表获取
         * @type {number || null}
         */
        this.RuleUuid = null;

        /**
         * 删除类型，0是单条删除，RuleUuid填写删除规则id，1为全部删除，RuleUuid填0即可
         * @type {number || null}
         */
        this.RemoveType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.RemoveType = 'RemoveType' in params ? params.RemoveType : null;

    }
}

/**
 * DeleteResourceGroup请求参数结构体
 * @class
 */
class DeleteResourceGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组id
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DescribeBlockByIpTimesList请求参数结构体
 * @class
 */
class DescribeBlockByIpTimesListRequest extends  AbstractModel {
    constructor(){
        super();

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
         * ip查询条件
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 方向
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * 来源
         * @type {string || null}
         */
        this.Source = null;

        /**
         * vpc间防火墙开关边id
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * 日志来源 move：vpc间防火墙
         * @type {string || null}
         */
        this.LogSource = null;

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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.LogSource = 'LogSource' in params ? params.LogSource : null;

    }
}

/**
 * RemoveEnterpriseSecurityGroupRule返回参数结构体
 * @class
 */
class RemoveEnterpriseSecurityGroupRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除成功后返回被删除策略的uuid
         * @type {number || null}
         */
        this.RuleUuid = null;

        /**
         * 0代表成功，-1代表失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyEnterpriseSecurityGroupRule请求参数结构体
 * @class
 */
class ModifyEnterpriseSecurityGroupRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则的uuid，可通过查询规则列表获取
         * @type {number || null}
         */
        this.RuleUuid = null;

        /**
         * 修改类型，0：修改规则内容；1：修改单条规则开关状态；2：修改所有规则开关状态
         * @type {number || null}
         */
        this.ModifyType = null;

        /**
         * 编辑后的企业安全组规则数据；修改规则状态不用填该字段
         * @type {SecurityGroupRule || null}
         */
        this.Data = null;

        /**
         * 0是关闭,1是开启
         * @type {number || null}
         */
        this.Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.ModifyType = 'ModifyType' in params ? params.ModifyType : null;

        if (params.Data) {
            let obj = new SecurityGroupRule();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * ModifySequenceRules返回参数结构体
 * @class
 */
class ModifySequenceRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: 修改成功, 非0: 修改失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
 * DescribeResourceGroupNew返回参数结构体
 * @class
 */
class DescribeResourceGroupNewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回树形结构
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 未分类实例数量
         * @type {number || null}
         */
        this.UnResourceNum = null;

        /**
         * 接口返回消息
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 返回码；0为请求成功
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.UnResourceNum = 'UnResourceNum' in params ? params.UnResourceNum : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNatFwInstanceWithRegion返回参数结构体
 * @class
 */
class DescribeNatFwInstanceWithRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NatFwInstance> || null}
         */
        this.NatinsLst = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NatinsLst) {
            this.NatinsLst = new Array();
            for (let z in params.NatinsLst) {
                let obj = new NatFwInstance();
                obj.deserialize(params.NatinsLst[z]);
                this.NatinsLst.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceGroupNew请求参数结构体
 * @class
 */
class DescribeResourceGroupNewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询类型 网络结构-vpc，业务识别-resource ，资源标签-tag
         * @type {string || null}
         */
        this.QueryType = null;

        /**
         * 资产组id  全部传0
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * all  包含子组 own自己
         * @type {string || null}
         */
        this.ShowType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ShowType = 'ShowType' in params ? params.ShowType : null;

    }
}

/**
 * ModifyBlockTop请求参数结构体
 * @class
 */
class ModifyBlockTopRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录id
         * @type {string || null}
         */
        this.UniqueId = null;

        /**
         * 操作类型 1 置顶 0取消
         * @type {string || null}
         */
        this.OpeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UniqueId = 'UniqueId' in params ? params.UniqueId : null;
        this.OpeType = 'OpeType' in params ? params.OpeType : null;

    }
}

/**
 * DeleteAcRule返回参数结构体
 * @class
 */
class DeleteAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值 0: 删除成功, !0: 删除失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Info = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 黑白名单IOC列表
 * @class
 */
class IocListData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待处置IP地址，IP/Domain字段二选一
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 只能为0或者1   0代表出站 1代表入站
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 待处置域名，IP/Domain字段二选一
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * // InstanceInfo 实例详情结果
type InstanceInfo struct {
	AppID        string `json:"AppId" gorm:"column:appid"`
	Region       string `json:"Region" gorm:"column:region"`
	VPCID        string `json:"VpcId" gorm:"column:vpc_id"`
	SubNetID     string `json:"SubnetId" gorm:"column:subnet_id"`
	InstanceID   string `json:"InstanceId" gorm:"column:instance_id"`
	InstanceName string `json:"InstanceName" gorm:"column:instance_name"`
	//InsType common.CVM 3是cvm实例,4是clb实例,5是eni实例,6是mysql,7是redis,8是NAT,9是VPN,10是ES,11是MARIADB,12是KAFKA
	InsType   int    `json:"InsType" gorm:"column:instance_type"`
	PublicIP  string `json:"PublicIp" gorm:"column:public_ip"`
	PrivateIP string `json:"PrivateIp" gorm:"column:ip"`

	//规则下发无需管，前端展示用
	PortNum          string `json:"PortNum" gorm:"column:port_num"`
	LeakNum          string `json:"LeakNum" gorm:"column:leak_num"`
	ResourceGroupNum int    `json:"ResourceGroupNum"`
	VPCName          string `json:"VPCName" gorm:"column:VPCName"`
}

 * @class
 */
class InstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * appid信息
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * vpcid信息
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * vpc名称
         * @type {string || null}
         */
        this.VPCName = null;

        /**
         * 子网id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 资产id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 资产名
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 资产类型
 3是cvm实例,4是clb实例,5是eni实例,6是mysql,7是redis,8是NAT,9是VPN,10是ES,11是MARIADB,12是KAFKA 13 NATFW
         * @type {number || null}
         */
        this.InsType = null;

        /**
         * 公网ip
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * 内网ip
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * 端口数
         * @type {string || null}
         */
        this.PortNum = null;

        /**
         * 漏洞数
         * @type {string || null}
         */
        this.LeakNum = null;

        /**
         * 1，公网 2内网
         * @type {string || null}
         */
        this.InsSource = null;

        /**
         * [a,b]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ResourcePath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VPCName = 'VPCName' in params ? params.VPCName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InsType = 'InsType' in params ? params.InsType : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.PortNum = 'PortNum' in params ? params.PortNum : null;
        this.LeakNum = 'LeakNum' in params ? params.LeakNum : null;
        this.InsSource = 'InsSource' in params ? params.InsSource : null;
        this.ResourcePath = 'ResourcePath' in params ? params.ResourcePath : null;

    }
}

/**
 * DescribeIPStatusList请求参数结构体
 * @class
 */
class DescribeIPStatusListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产Id
         * @type {Array.<string> || null}
         */
        this.IPList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IPList = 'IPList' in params ? params.IPList : null;

    }
}

/**
 * ModifyNatFwSwitch返回参数结构体
 * @class
 */
class ModifyNatFwSwitchResponse extends  AbstractModel {
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
 * DescribeBlockByIpTimesList返回参数结构体
 * @class
 */
class DescribeBlockByIpTimesListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数据
         * @type {Array.<IpStatic> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new IpStatic();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetNatFwDnatRule返回参数结构体
 * @class
 */
class SetNatFwDnatRuleResponse extends  AbstractModel {
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
 * DescribeRuleOverview请求参数结构体
 * @class
 */
class DescribeRuleOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 方向，0：出站，1：入站
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * DescribeDefenseSwitch返回参数结构体
 * @class
 */
class DescribeDefenseSwitchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基础防御开关
         * @type {number || null}
         */
        this.BasicRuleSwitch = null;

        /**
         * 安全基线开关
         * @type {number || null}
         */
        this.BaselineAllSwitch = null;

        /**
         * 威胁情报开关
         * @type {number || null}
         */
        this.TiSwitch = null;

        /**
         * 虚拟补丁开关
         * @type {number || null}
         */
        this.VirtualPatchSwitch = null;

        /**
         * 是否历史开启
         * @type {number || null}
         */
        this.HistoryOpen = null;

        /**
         * 状态值，0：查询成功，非0：查询失败
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 状态信息，success：查询成功，fail：查询失败
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BasicRuleSwitch = 'BasicRuleSwitch' in params ? params.BasicRuleSwitch : null;
        this.BaselineAllSwitch = 'BaselineAllSwitch' in params ? params.BaselineAllSwitch : null;
        this.TiSwitch = 'TiSwitch' in params ? params.TiSwitch : null;
        this.VirtualPatchSwitch = 'VirtualPatchSwitch' in params ? params.VirtualPatchSwitch : null;
        this.HistoryOpen = 'HistoryOpen' in params ? params.HistoryOpen : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAcLists请求参数结构体
 * @class
 */
class DescribeAcListsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 策略
         * @type {string || null}
         */
        this.Strategy = null;

        /**
         * 搜索值
         * @type {string || null}
         */
        this.SearchValue = null;

        /**
         * 每页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移值
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 出站还是入站，1：入站，0：出站
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * EdgeId值
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * 规则是否开启，'0': 未开启，'1': 开启, 默认为'0'
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 实例ID
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
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeGuideScanInfo请求参数结构体
 * @class
 */
class DescribeGuideScanInfoRequest extends  AbstractModel {
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
 * 未处置事件详情
 * @class
 */
class UnHandleEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伪攻击链类型
         * @type {Array.<UnHandleEventDetail> || null}
         */
        this.EventTableListStruct = null;

        /**
         * 1 是  0否
         * @type {number || null}
         */
        this.BaseLineUser = null;

        /**
         * 1 打开 0 关闭
         * @type {number || null}
         */
        this.BaseLineInSwitch = null;

        /**
         * 1 打开 0 关闭
         * @type {number || null}
         */
        this.BaseLineOutSwitch = null;

        /**
         * vpc间防火墙实例数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VpcFwCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventTableListStruct) {
            this.EventTableListStruct = new Array();
            for (let z in params.EventTableListStruct) {
                let obj = new UnHandleEventDetail();
                obj.deserialize(params.EventTableListStruct[z]);
                this.EventTableListStruct.push(obj);
            }
        }
        this.BaseLineUser = 'BaseLineUser' in params ? params.BaseLineUser : null;
        this.BaseLineInSwitch = 'BaseLineInSwitch' in params ? params.BaseLineInSwitch : null;
        this.BaseLineOutSwitch = 'BaseLineOutSwitch' in params ? params.BaseLineOutSwitch : null;
        this.VpcFwCount = 'VpcFwCount' in params ? params.VpcFwCount : null;

    }
}

/**
 * DescribeAssociatedInstanceList请求参数结构体
 * @class
 */
class DescribeAssociatedInstanceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页记录条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 地域代码（例：ap-guangzhou）,支持腾讯云全地域
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 额外检索条件（JSON字符串）
         * @type {string || null}
         */
        this.SearchValue = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式（asc:升序,desc:降序）
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 安全组ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 实例类型,'3'是cvm实例,'4'是clb实例,'5'是eni实例,'6'是云数据库
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DeleteAcRule请求参数结构体
 * @class
 */
class DeleteAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除规则对应的id值, 对应获取规则列表接口的Id 值
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 方向，0：出站，1：入站
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * EdgeId值两个vpc间的边id
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * NAT地域， 如ap-shanghai/ap-guangzhou/ap-chongqing等
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DeleteAllAccessControlRule返回参数结构体
 * @class
 */
class DeleteAllAccessControlRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值 0: 修改成功, 非0: 修改失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 删除了几条访问控制规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Info = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNatFwSwitch请求参数结构体
 * @class
 */
class ModifyNatFwSwitchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关，0：关闭，1：开启
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 防火墙实例id列表，其中CfwInsIdList，SubnetIdList和RouteTableIdList只能传递一种。
         * @type {Array.<string> || null}
         */
        this.CfwInsIdList = null;

        /**
         * 子网id列表，其中CfwInsIdList，SubnetIdList和RouteTableIdList只能传递一种。
         * @type {Array.<string> || null}
         */
        this.SubnetIdList = null;

        /**
         * 路由表id列表，其中CfwInsIdList，SubnetIdList和RouteTableIdList只能传递一种。
         * @type {Array.<string> || null}
         */
        this.RouteTableIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.CfwInsIdList = 'CfwInsIdList' in params ? params.CfwInsIdList : null;
        this.SubnetIdList = 'SubnetIdList' in params ? params.SubnetIdList : null;
        this.RouteTableIdList = 'RouteTableIdList' in params ? params.RouteTableIdList : null;

    }
}

/**
 * DescribeIPStatusList返回参数结构体
 * @class
 */
class DescribeIPStatusListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ip状态信息
         * @type {Array.<IPDefendStatus> || null}
         */
        this.StatusList = null;

        /**
         * 状态码
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 状态信息
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.StatusList) {
            this.StatusList = new Array();
            for (let z in params.StatusList) {
                let obj = new IPDefendStatus();
                obj.deserialize(params.StatusList[z]);
                this.StatusList.push(obj);
            }
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDatabaseWhiteListRules请求参数结构体
 * @class
 */
class CreateDatabaseWhiteListRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建白名单数据
         * @type {Array.<DatabaseWhiteListRuleData> || null}
         */
        this.DatabaseWhiteListRuleData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DatabaseWhiteListRuleData) {
            this.DatabaseWhiteListRuleData = new Array();
            for (let z in params.DatabaseWhiteListRuleData) {
                let obj = new DatabaseWhiteListRuleData();
                obj.deserialize(params.DatabaseWhiteListRuleData[z]);
                this.DatabaseWhiteListRuleData.push(obj);
            }
        }

    }
}

/**
 * Nat实例卡片详细信息
 * @class
 */
class NatInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * nat实例id
         * @type {string || null}
         */
        this.NatinsId = null;

        /**
         * nat实例名称
         * @type {string || null}
         */
        this.NatinsName = null;

        /**
         * 实例所在地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 0: 新增模式，1:接入模式
         * @type {number || null}
         */
        this.FwMode = null;

        /**
         * 实例带宽大小 Mbps
         * @type {number || null}
         */
        this.BandWidth = null;

        /**
         * 入向带宽峰值 bps
         * @type {number || null}
         */
        this.InFlowMax = null;

        /**
         * 出向带宽峰值 bps
         * @type {number || null}
         */
        this.OutFlowMax = null;

        /**
         * 地域中文信息
         * @type {string || null}
         */
        this.RegionZh = null;

        /**
         * 公网ip数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.EipAddress = null;

        /**
         * 内外使用ip数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.VpcIp = null;

        /**
         * 实例关联子网数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Subnets = null;

        /**
         * 0 :正常 1：正在初始化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 地域区域信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionDetail = null;

        /**
         * 实例所在可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneZh = null;

        /**
         * 实例所在可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneZhBak = null;

        /**
         * 已使用规则数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleUsed = null;

        /**
         * 实例的规则限制最大规格数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleMax = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatinsId = 'NatinsId' in params ? params.NatinsId : null;
        this.NatinsName = 'NatinsName' in params ? params.NatinsName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.FwMode = 'FwMode' in params ? params.FwMode : null;
        this.BandWidth = 'BandWidth' in params ? params.BandWidth : null;
        this.InFlowMax = 'InFlowMax' in params ? params.InFlowMax : null;
        this.OutFlowMax = 'OutFlowMax' in params ? params.OutFlowMax : null;
        this.RegionZh = 'RegionZh' in params ? params.RegionZh : null;
        this.EipAddress = 'EipAddress' in params ? params.EipAddress : null;
        this.VpcIp = 'VpcIp' in params ? params.VpcIp : null;
        this.Subnets = 'Subnets' in params ? params.Subnets : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RegionDetail = 'RegionDetail' in params ? params.RegionDetail : null;
        this.ZoneZh = 'ZoneZh' in params ? params.ZoneZh : null;
        this.ZoneZhBak = 'ZoneZhBak' in params ? params.ZoneZhBak : null;
        this.RuleUsed = 'RuleUsed' in params ? params.RuleUsed : null;
        this.RuleMax = 'RuleMax' in params ? params.RuleMax : null;

    }
}

/**
 * Nat防火墙弹性公网ip列表
 * @class
 */
class NatFwEipsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性公网ip
         * @type {string || null}
         */
        this.Eip = null;

        /**
         * 所属的Nat网关Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * Nat网关名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NatGatewayName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Eip = 'Eip' in params ? params.Eip : null;
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.NatGatewayName = 'NatGatewayName' in params ? params.NatGatewayName : null;

    }
}

/**
 * DescribeResourceGroup返回参数结构体
 * @class
 */
class DescribeResourceGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回树形结构
         * @type {string || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTLogIpList返回参数结构体
 * @class
 */
class DescribeTLogIpListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据集合
         * @type {Array.<StaticInfo> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new StaticInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopSecurityGroupRuleDispatch返回参数结构体
 * @class
 */
class StopSecurityGroupRuleDispatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true代表成功，false代表错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
 * DescribeNatFwInfoCount请求参数结构体
 * @class
 */
class DescribeNatFwInfoCountRequest extends  AbstractModel {
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
 * AddAcRule返回参数结构体
 * @class
 */
class AddAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功后返回新策略的uuid
         * @type {number || null}
         */
        this.RuleUuid = null;

        /**
         * 0代表成功，-1代表失败
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * success代表成功，failed代表失败
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNatFwReSelect请求参数结构体
 * @class
 */
class ModifyNatFwReSelectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模式 1：接入模式；0：新增模式
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 防火墙实例id
         * @type {string || null}
         */
        this.CfwInstance = null;

        /**
         * 接入模式重新接入的nat网关列表，其中NatGwList和VpcList只能传递一个。
         * @type {Array.<string> || null}
         */
        this.NatGwList = null;

        /**
         * 新增模式重新接入的vpc列表，其中NatGwList和NatgwList只能传递一个。
         * @type {Array.<string> || null}
         */
        this.VpcList = null;

        /**
         * 指定防火墙使用网段信息
         * @type {FwCidrInfo || null}
         */
        this.FwCidrInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.CfwInstance = 'CfwInstance' in params ? params.CfwInstance : null;
        this.NatGwList = 'NatGwList' in params ? params.NatGwList : null;
        this.VpcList = 'VpcList' in params ? params.VpcList : null;

        if (params.FwCidrInfo) {
            let obj = new FwCidrInfo();
            obj.deserialize(params.FwCidrInfo)
            this.FwCidrInfo = obj;
        }

    }
}

/**
 * SetNatFwDnatRule请求参数结构体
 * @class
 */
class SetNatFwDnatRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：cfw新增模式，1：cfw接入模式。
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 操作类型，可选值：add，del，modify。
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * 防火墙实例id，该字段必须传递。
         * @type {string || null}
         */
        this.CfwInstance = null;

        /**
         * 添加或删除操作的Dnat规则列表。
         * @type {Array.<CfwNatDnatRule> || null}
         */
        this.AddOrDelDnatRules = null;

        /**
         * 修改操作的原始Dnat规则
         * @type {CfwNatDnatRule || null}
         */
        this.OriginDnat = null;

        /**
         * 修改操作的新的Dnat规则
         * @type {CfwNatDnatRule || null}
         */
        this.NewDnat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.CfwInstance = 'CfwInstance' in params ? params.CfwInstance : null;

        if (params.AddOrDelDnatRules) {
            this.AddOrDelDnatRules = new Array();
            for (let z in params.AddOrDelDnatRules) {
                let obj = new CfwNatDnatRule();
                obj.deserialize(params.AddOrDelDnatRules[z]);
                this.AddOrDelDnatRules.push(obj);
            }
        }

        if (params.OriginDnat) {
            let obj = new CfwNatDnatRule();
            obj.deserialize(params.OriginDnat)
            this.OriginDnat = obj;
        }

        if (params.NewDnat) {
            let obj = new CfwNatDnatRule();
            obj.deserialize(params.NewDnat)
            this.NewDnat = obj;
        }

    }
}

/**
 * ModifyAllVPCSwitchStatus请求参数结构体
 * @class
 */
class ModifyAllVPCSwitchStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态，0：关闭，1：开启
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 选中的防火墙开关Id
         * @type {Array.<string> || null}
         */
        this.FireWallVpcIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.FireWallVpcIds = 'FireWallVpcIds' in params ? params.FireWallVpcIds : null;

    }
}

/**
 * 双向下发的企业安全组规则
 * @class
 */
class SecurityGroupBothWayInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行顺序
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * 访问源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceId = null;

        /**
         * 访问源类型，默认为0，0: IP, 1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100: 资产分组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 访问目的
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * 访问目的类型，默认为0，0: IP, 1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100: 资产分组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TargetType = null;

        /**
         * 协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 目的端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 策略, 1：阻断，2：放行
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * 方向，0：出站，1：入站，默认1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * 是否开关开启，0：未开启，1：开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 是否是正常规则，0：正常，1：异常
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsNew = null;

        /**
         * 单/双向下发，0:单向下发，1：双向下发
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BothWay = null;

        /**
         * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 公网IP，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * 内网IP，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * 掩码地址，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cidr = null;

        /**
         * 端口协议类型参数模板id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceTemplateId = null;

        /**
         * 是否使用端口协议模板，0：否，1：是
         * @type {number || null}
         */
        this.ProtocolPortType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsNew = 'IsNew' in params ? params.IsNew : null;
        this.BothWay = 'BothWay' in params ? params.BothWay : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.Cidr = 'Cidr' in params ? params.Cidr : null;
        this.ServiceTemplateId = 'ServiceTemplateId' in params ? params.ServiceTemplateId : null;
        this.ProtocolPortType = 'ProtocolPortType' in params ? params.ProtocolPortType : null;

    }
}

/**
 * ModifyAllRuleStatus返回参数结构体
 * @class
 */
class ModifyAllRuleStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: 修改成功, 其他: 修改失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
 * StopSecurityGroupRuleDispatch请求参数结构体
 * @class
 */
class StopSecurityGroupRuleDispatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 值为1，中止全部
         * @type {number || null}
         */
        this.StopType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StopType = 'StopType' in params ? params.StopType : null;

    }
}

/**
 * DescribeBlockIgnoreList请求参数结构体
 * @class
 */
class DescribeBlockIgnoreListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单页数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 方向：1互联网入站，0互联网出站，3内网，空 全部方向
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * 规则类型：1封禁，2放通
         * @type {number || null}
         */
        this.RuleType = null;

        /**
         * 排序列：EndTime结束时间，StartTime开始时间，MatchTimes命中次数
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序类型：desc降序，asc正序
         * @type {string || null}
         */
        this.By = null;

        /**
         * 搜索参数，json格式字符串，空则传"{}"，域名：domain，危险等级：level，放通原因：ignore_reason，安全事件来源：rule_source，地理位置：address，模糊搜索：common
         * @type {string || null}
         */
        this.SearchValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * ModifyBlockTop返回参数结构体
 * @class
 */
class ModifyBlockTopResponse extends  AbstractModel {
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
 * DeleteNatFwInstance请求参数结构体
 * @class
 */
class DeleteNatFwInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防火墙实例id
         * @type {string || null}
         */
        this.CfwInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CfwInstance = 'CfwInstance' in params ? params.CfwInstance : null;

    }
}

/**
 * ModifyStorageSetting请求参数结构体
 * @class
 */
class ModifyStorageSettingRequest extends  AbstractModel {
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
 * DescribeNatFwVpcDnsLst返回参数结构体
 * @class
 */
class DescribeNatFwVpcDnsLstResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * nat防火墙vpc dns 信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VpcDnsInfo> || null}
         */
        this.VpcDnsSwitchLst = null;

        /**
         * 返回参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 开关总条数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.VpcDnsSwitchLst) {
            this.VpcDnsSwitchLst = new Array();
            for (let z in params.VpcDnsSwitchLst) {
                let obj = new VpcDnsInfo();
                obj.deserialize(params.VpcDnsSwitchLst[z]);
                this.VpcDnsSwitchLst.push(obj);
            }
        }
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 访问控制列表对象
 * @class
 */
class DescAcItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceContent = null;

        /**
         * 访问目的
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetContent = null;

        /**
         * 协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 访问控制策略中设置的流量通过云防火墙的方式。取值： accept：放行 drop：拒绝 log：观察
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleAction = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 命中次数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 执行顺序
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * 访问源类型：入向规则时类型可以为 ip,net,template,location；出向规则时可以为 ip,net,template,instance,group,tag
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * 访问目的类型：入向规则时类型可以为ip,net,template,instance,group,tag；出向规则时可以为 ip,net,domain,template,location
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * 规则对应的唯一id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Uuid = null;

        /**
         * 规则有效性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Invalid = null;

        /**
         * 0为正常规则,1为地域规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsRegion = null;

        /**
         * 国家id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CountryCode = null;

        /**
         * 城市id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CityCode = null;

        /**
         * 国家名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CountryName = null;

        /**
         * 省名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CityName = null;

        /**
         * 云厂商code
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CloudCode = null;

        /**
         * 0为正常规则,1为云厂商规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsCloud = null;

        /**
         * 规则状态，true表示启用，false表示禁用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Enable = null;

        /**
         * 规则方向：1，入向；0，出向
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 内部使用的uuid，一般情况下不会使用到该字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InternalUuid = null;

        /**
         * 规则状态，查询规则命中详情时该字段有效，0：新增，1: 已删除, 2: 编辑删除
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.SourceContent = 'SourceContent' in params ? params.SourceContent : null;
        this.TargetContent = 'TargetContent' in params ? params.TargetContent : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.RuleAction = 'RuleAction' in params ? params.RuleAction : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Invalid = 'Invalid' in params ? params.Invalid : null;
        this.IsRegion = 'IsRegion' in params ? params.IsRegion : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.CityCode = 'CityCode' in params ? params.CityCode : null;
        this.CountryName = 'CountryName' in params ? params.CountryName : null;
        this.CityName = 'CityName' in params ? params.CityName : null;
        this.CloudCode = 'CloudCode' in params ? params.CloudCode : null;
        this.IsCloud = 'IsCloud' in params ? params.IsCloud : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InternalUuid = 'InternalUuid' in params ? params.InternalUuid : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateSecurityGroupRules返回参数结构体
 * @class
 */
class CreateSecurityGroupRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值，0：添加成功，非0：添加失败
         * @type {number || null}
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
 * ExpandCfwVertical返回参数结构体
 * @class
 */
class ExpandCfwVerticalResponse extends  AbstractModel {
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
 * DescribeNatAcRule请求参数结构体
 * @class
 */
class DescribeNatAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移值
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 需要查询的索引，特定场景使用，可不填
         * @type {string || null}
         */
        this.Index = null;

        /**
         * 过滤条件组合
         * @type {Array.<CommonFilter> || null}
         */
        this.Filters = null;

        /**
         * 检索的起始时间，可不传
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 检索的截止时间，可不传
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序所用到的字段
         * @type {string || null}
         */
        this.By = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Index = 'Index' in params ? params.Index : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new CommonFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * 告警中心概览数据

 * @class
 */
class TLogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 失陷主机
         * @type {number || null}
         */
        this.OutNum = null;

        /**
         * 待处置告警
         * @type {number || null}
         */
        this.HandleNum = null;

        /**
         * 漏洞攻击
         * @type {number || null}
         */
        this.VulNum = null;

        /**
         * 网络探测
         * @type {number || null}
         */
        this.NetworkNum = null;

        /**
         * 封禁列表
         * @type {number || null}
         */
        this.BanNum = null;

        /**
         * 暴力破解
         * @type {number || null}
         */
        this.BruteForceNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutNum = 'OutNum' in params ? params.OutNum : null;
        this.HandleNum = 'HandleNum' in params ? params.HandleNum : null;
        this.VulNum = 'VulNum' in params ? params.VulNum : null;
        this.NetworkNum = 'NetworkNum' in params ? params.NetworkNum : null;
        this.BanNum = 'BanNum' in params ? params.BanNum : null;
        this.BruteForceNum = 'BruteForceNum' in params ? params.BruteForceNum : null;

    }
}

/**
 * CreateSecurityGroupRules请求参数结构体
 * @class
 */
class CreateSecurityGroupRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 添加的企业安全组规则数据
         * @type {Array.<SecurityGroupListData> || null}
         */
        this.Data = null;

        /**
         * 方向，0：出站，1：入站，默认1
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 0：后插，1：前插，2：中插，默认0
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 添加后是否启用规则，0：不启用，1：启用，默认1
         * @type {number || null}
         */
        this.Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SecurityGroupListData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * DeleteVpcInstance请求参数结构体
 * @class
 */
class DeleteVpcInstanceRequest extends  AbstractModel {
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
 * 防火墙开关列表对象
 * @class
 */
class SwitchListsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * 内网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntranetIp = null;

        /**
         * 实例名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 资产类型
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 防火墙开关
         * @type {number || null}
         */
        this.Switch = null;

        /**
         * id值
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 公网 IP 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PublicIpType = null;

        /**
         * 风险端口数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PortTimes = null;

        /**
         * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastTime = null;

        /**
         * 扫描深度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanMode = null;

        /**
         * 扫描状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.IntranetIp = 'IntranetIp' in params ? params.IntranetIp : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.PublicIpType = 'PublicIpType' in params ? params.PublicIpType : null;
        this.PortTimes = 'PortTimes' in params ? params.PortTimes : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;
        this.ScanMode = 'ScanMode' in params ? params.ScanMode : null;
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;

    }
}

/**
 * CreateNatFwInstanceWithDomain请求参数结构体
 * @class
 */
class CreateNatFwInstanceWithDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防火墙实例名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 带宽
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 模式 1：接入模式；0：新增模式
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 新增模式传递参数，其中NewModeItems和NatgwList至少传递一种。
         * @type {NewModeItems || null}
         */
        this.NewModeItems = null;

        /**
         * 接入模式接入的nat网关列表，其中NewModeItems和NatgwList至少传递一种。
         * @type {Array.<string> || null}
         */
        this.NatGwList = null;

        /**
         * 主可用区，为空则选择默认可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 备可用区，为空则选择默认可用区
         * @type {string || null}
         */
        this.ZoneBak = null;

        /**
         * 异地灾备 1：使用异地灾备；0：不使用异地灾备；为空则默认不使用异地灾备
         * @type {number || null}
         */
        this.CrossAZone = null;

        /**
         * 0不创建域名,1创建域名
         * @type {number || null}
         */
        this.IsCreateDomain = null;

        /**
         * 如果要创建域名则必填
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 指定防火墙使用网段信息
         * @type {FwCidrInfo || null}
         */
        this.FwCidrInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.NewModeItems) {
            let obj = new NewModeItems();
            obj.deserialize(params.NewModeItems)
            this.NewModeItems = obj;
        }
        this.NatGwList = 'NatGwList' in params ? params.NatGwList : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneBak = 'ZoneBak' in params ? params.ZoneBak : null;
        this.CrossAZone = 'CrossAZone' in params ? params.CrossAZone : null;
        this.IsCreateDomain = 'IsCreateDomain' in params ? params.IsCreateDomain : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.FwCidrInfo) {
            let obj = new FwCidrInfo();
            obj.deserialize(params.FwCidrInfo)
            this.FwCidrInfo = obj;
        }

    }
}

/**
 * DescribeSwitchLists返回参数结构体
 * @class
 */
class DescribeSwitchListsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 列表数据
         * @type {Array.<SwitchListsData> || null}
         */
        this.Data = null;

        /**
         * 区域列表
         * @type {Array.<string> || null}
         */
        this.AreaLists = null;

        /**
         * 打开个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OnNum = null;

        /**
         * 关闭个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OffNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SwitchListsData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.AreaLists = 'AreaLists' in params ? params.AreaLists : null;
        this.OnNum = 'OnNum' in params ? params.OnNum : null;
        this.OffNum = 'OffNum' in params ? params.OffNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCfwEips返回参数结构体
 * @class
 */
class DescribeCfwEipsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值信息
         * @type {Array.<NatFwEipsInfo> || null}
         */
        this.NatFwEipList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NatFwEipList) {
            this.NatFwEipList = new Array();
            for (let z in params.NatFwEipList) {
                let obj = new NatFwEipsInfo();
                obj.deserialize(params.NatFwEipList[z]);
                this.NatFwEipList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyResourceGroup返回参数结构体
 * @class
 */
class ModifyResourceGroupResponse extends  AbstractModel {
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
 * DeleteResourceGroup返回参数结构体
 * @class
 */
class DeleteResourceGroupResponse extends  AbstractModel {
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
 * DescribeSwitchLists请求参数结构体
 * @class
 */
class DescribeSwitchListsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防火墙状态  0: 关闭，1：开启
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 资产类型 CVM/NAT/VPN/CLB/其它
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 地域 上海/重庆/广州，等等
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 搜索值  例子："{"common":"106.54.189.45"}"
         * @type {string || null}
         */
        this.SearchValue = null;

        /**
         * 条数  默认值:10
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移值 默认值: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序，desc：降序，asc：升序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段 PortTimes(风险端口数)
         * @type {string || null}
         */
        this.By = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeBlockStaticList请求参数结构体
 * @class
 */
class DescribeBlockStaticListRequest extends  AbstractModel {
    constructor(){
        super();

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
         * 列表类型，只能是下面三种之一：port、address、ip
         * @type {string || null}
         */
        this.QueryType = null;

        /**
         * top数
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 查询条件
         * @type {string || null}
         */
        this.SearchValue = null;

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
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.Top = 'Top' in params ? params.Top : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * vpc的防火墙网段
 * @class
 */
class FwVpcCidr extends  AbstractModel {
    constructor(){
        super();

        /**
         * vpc的id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 防火墙网段，最少/24的网段
         * @type {string || null}
         */
        this.FwCidr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.FwCidr = 'FwCidr' in params ? params.FwCidr : null;

    }
}

/**
 * ModifyRunSyncAsset请求参数结构体
 * @class
 */
class ModifyRunSyncAssetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: 互联网防火墙开关，1：vpc 防火墙开关
         * @type {number || null}
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
 * CreateAcRules返回参数结构体
 * @class
 */
class CreateAcRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值，0:操作成功
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Info = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAssetScan返回参数结构体
 * @class
 */
class ModifyAssetScanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 接口返回错误码，0请求成功  非0失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 状态值 0：成功，1 执行扫描中,其他：失败
         * @type {number || null}
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
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAcRule请求参数结构体
 * @class
 */
class ModifyAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则数组
         * @type {Array.<RuleInfoData> || null}
         */
        this.Data = null;

        /**
         * EdgeId值
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * 访问规则状态
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * NAT地域
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new RuleInfoData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeNatFwInstancesInfo返回参数结构体
 * @class
 */
class DescribeNatFwInstancesInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例卡片信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NatInstanceInfo> || null}
         */
        this.NatinsLst = null;

        /**
         * nat 防火墙个数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.NatinsLst) {
            this.NatinsLst = new Array();
            for (let z in params.NatinsLst) {
                let obj = new NatInstanceInfo();
                obj.deserialize(params.NatinsLst[z]);
                this.NatinsLst.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddNatAcRule返回参数结构体
 * @class
 */
class AddNatAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功后返回新策略ID列表
         * @type {Array.<number> || null}
         */
        this.RuleUuid = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBlockIgnoreList返回参数结构体
 * @class
 */
class ModifyBlockIgnoreListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口返回信息
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 接口返回错误码，0请求成功  非0失败
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNatFwInstance返回参数结构体
 * @class
 */
class DescribeNatFwInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例数组
         * @type {Array.<NatFwInstance> || null}
         */
        this.NatinsLst = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NatinsLst) {
            this.NatinsLst = new Array();
            for (let z in params.NatinsLst) {
                let obj = new NatFwInstance();
                obj.deserialize(params.NatinsLst[z]);
                this.NatinsLst.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySecurityGroupRule返回参数结构体
 * @class
 */
class ModifySecurityGroupRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值，0：编辑成功，非0：编辑失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 编辑后新生成规则的Id
         * @type {number || null}
         */
        this.NewRuleId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.NewRuleId = 'NewRuleId' in params ? params.NewRuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设置nat防火墙的vpc dns 接入开关 
 * @class
 */
class DnsVpcSwitch extends  AbstractModel {
    constructor(){
        super();

        /**
         * vpc id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 0：设置为关闭 1:设置为打开
         * @type {number || null}
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeResourceGroup请求参数结构体
 * @class
 */
class DescribeResourceGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询类型 网络结构 vpc，业务识别- resource ，资源标签-tag
         * @type {string || null}
         */
        this.QueryType = null;

        /**
         * 资产组id  全部传0
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
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * CreateAcRules请求参数结构体
 * @class
 */
class CreateAcRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建规则数据
         * @type {Array.<RuleInfoData> || null}
         */
        this.Data = null;

        /**
         * 0：添加（默认），1：插入
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 边id
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * 访问控制规则状态
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 0：添加，1：覆盖
         * @type {number || null}
         */
        this.Overwrite = null;

        /**
         * NAT实例ID, 参数Area存在的时候这个必传
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * portScan: 来自于端口扫描, patchImport: 来自于批量导入
         * @type {string || null}
         */
        this.From = null;

        /**
         * NAT地域
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new RuleInfoData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Overwrite = 'Overwrite' in params ? params.Overwrite : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.From = 'From' in params ? params.From : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * ModifyEnterpriseSecurityDispatchStatus请求参数结构体
 * @class
 */
class ModifyEnterpriseSecurityDispatchStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态，0：立即下发，1：停止下发
         * @type {number || null}
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
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeBlockIgnoreList返回参数结构体
 * @class
 */
class DescribeBlockIgnoreListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表数据
         * @type {Array.<BlockIgnoreRule> || null}
         */
        this.Data = null;

        /**
         * 查询结果总数，用于分页
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 状态值，0：查询成功，非0：查询失败
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 状态信息，success：查询成功，fail：查询失败
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new BlockIgnoreRule();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTableStatus请求参数结构体
 * @class
 */
class ModifyTableStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EdgeId值两个vpc间的边id
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * 状态值，1：锁表，2：解锁表
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Nat所在地域
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 0： 出向，1：入向
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * ModifyTableStatus返回参数结构体
 * @class
 */
class ModifyTableStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：正常，-1：不正常
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
 * DescribeGuideScanInfo返回参数结构体
 * @class
 */
class DescribeGuideScanInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扫描信息
         * @type {ScanInfo || null}
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

        if (params.Data) {
            let obj = new ScanInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeNatFwInstanceRequest: DescribeNatFwInstanceRequest,
    ModifyNatFwVpcDnsSwitchResponse: ModifyNatFwVpcDnsSwitchResponse,
    DescribeNatFwInstanceWithRegionRequest: DescribeNatFwInstanceWithRegionRequest,
    ModifyNatAcRuleResponse: ModifyNatAcRuleResponse,
    DescribeRuleOverviewResponse: DescribeRuleOverviewResponse,
    CfwNatDnatRule: CfwNatDnatRule,
    FwCidrInfo: FwCidrInfo,
    StaticInfo: StaticInfo,
    DescribeNatAcRuleResponse: DescribeNatAcRuleResponse,
    ModifyPublicIPSwitchStatusResponse: ModifyPublicIPSwitchStatusResponse,
    ModifyNatAcRuleRequest: ModifyNatAcRuleRequest,
    ModifyAcRuleResponse: ModifyAcRuleResponse,
    ModifyNatSequenceRulesRequest: ModifyNatSequenceRulesRequest,
    DescribeTableStatusResponse: DescribeTableStatusResponse,
    AddAcRuleRequest: AddAcRuleRequest,
    IPDefendStatus: IPDefendStatus,
    BlockIgnoreRule: BlockIgnoreRule,
    ModifyNatFwVpcDnsSwitchRequest: ModifyNatFwVpcDnsSwitchRequest,
    DeleteNatFwInstanceResponse: DeleteNatFwInstanceResponse,
    DeleteAllAccessControlRuleRequest: DeleteAllAccessControlRuleRequest,
    ModifySecurityGroupRuleRequest: ModifySecurityGroupRuleRequest,
    ModifyAllVPCSwitchStatusResponse: ModifyAllVPCSwitchStatusResponse,
    VpcZoneData: VpcZoneData,
    CreateChooseVpcsRequest: CreateChooseVpcsRequest,
    DescribeNatFwVpcDnsLstRequest: DescribeNatFwVpcDnsLstRequest,
    DescribeCfwEipsRequest: DescribeCfwEipsRequest,
    DescribeTLogInfoResponse: DescribeTLogInfoResponse,
    DescribeUnHandleEventTabListRequest: DescribeUnHandleEventTabListRequest,
    DescribeAssociatedInstanceListResponse: DescribeAssociatedInstanceListResponse,
    AssociatedInstanceInfo: AssociatedInstanceInfo,
    ModifyStorageSettingResponse: ModifyStorageSettingResponse,
    RemoveAcRuleResponse: RemoveAcRuleResponse,
    NatFwInstance: NatFwInstance,
    ExpandCfwVerticalRequest: ExpandCfwVerticalRequest,
    ModifyAllPublicIPSwitchStatusResponse: ModifyAllPublicIPSwitchStatusResponse,
    DeleteVpcInstanceResponse: DeleteVpcInstanceResponse,
    ModifyAssetScanRequest: ModifyAssetScanRequest,
    ModifyBlockIgnoreListRequest: ModifyBlockIgnoreListRequest,
    AddEnterpriseSecurityGroupRulesRequest: AddEnterpriseSecurityGroupRulesRequest,
    SecurityGroupRule: SecurityGroupRule,
    DeleteSecurityGroupRuleResponse: DeleteSecurityGroupRuleResponse,
    ModifySequenceRulesRequest: ModifySequenceRulesRequest,
    SequenceData: SequenceData,
    CreateNatFwInstanceRequest: CreateNatFwInstanceRequest,
    ModifySecurityGroupItemRuleStatusResponse: ModifySecurityGroupItemRuleStatusResponse,
    DescribeEnterpriseSecurityGroupRuleResponse: DescribeEnterpriseSecurityGroupRuleResponse,
    VpcDnsInfo: VpcDnsInfo,
    DescribeEnterpriseSecurityGroupRuleRequest: DescribeEnterpriseSecurityGroupRuleRequest,
    ModifyNatFwReSelectResponse: ModifyNatFwReSelectResponse,
    DeleteSecurityGroupRuleRequest: DeleteSecurityGroupRuleRequest,
    SetNatFwEipRequest: SetNatFwEipRequest,
    SetNatFwEipResponse: SetNatFwEipResponse,
    AcListsData: AcListsData,
    ModifyPublicIPSwitchStatusRequest: ModifyPublicIPSwitchStatusRequest,
    CreateNatRuleItem: CreateNatRuleItem,
    ModifySecurityGroupItemRuleStatusRequest: ModifySecurityGroupItemRuleStatusRequest,
    DescribeSourceAssetRequest: DescribeSourceAssetRequest,
    SecurityGroupOrderIndexData: SecurityGroupOrderIndexData,
    DescribeSourceAssetResponse: DescribeSourceAssetResponse,
    DescribeTLogInfoRequest: DescribeTLogInfoRequest,
    DescribeSecurityGroupListResponse: DescribeSecurityGroupListResponse,
    AssetZone: AssetZone,
    RuleChangeItem: RuleChangeItem,
    DescribeTLogIpListRequest: DescribeTLogIpListRequest,
    CommonFilter: CommonFilter,
    DescribeNatFwInstancesInfoRequest: DescribeNatFwInstancesInfoRequest,
    ModifyNatSequenceRulesResponse: ModifyNatSequenceRulesResponse,
    DescribeTableStatusRequest: DescribeTableStatusRequest,
    DescribeSecurityGroupListRequest: DescribeSecurityGroupListRequest,
    ModifyResourceGroupRequest: ModifyResourceGroupRequest,
    CreateNatFwInstanceResponse: CreateNatFwInstanceResponse,
    NewModeItems: NewModeItems,
    DescribeNatFwInfoCountResponse: DescribeNatFwInfoCountResponse,
    DescribeDefenseSwitchRequest: DescribeDefenseSwitchRequest,
    ModifyEnterpriseSecurityDispatchStatusResponse: ModifyEnterpriseSecurityDispatchStatusResponse,
    SecurityGroupListData: SecurityGroupListData,
    RemoveNatAcRuleResponse: RemoveNatAcRuleResponse,
    CreateNatFwInstanceWithDomainResponse: CreateNatFwInstanceWithDomainResponse,
    RemoveAcRuleRequest: RemoveAcRuleRequest,
    DatabaseWhiteListRuleData: DatabaseWhiteListRuleData,
    RemoveNatAcRuleRequest: RemoveNatAcRuleRequest,
    ModifyAllRuleStatusRequest: ModifyAllRuleStatusRequest,
    RuleInfoData: RuleInfoData,
    DescribeAcListsResponse: DescribeAcListsResponse,
    ModifyAllPublicIPSwitchStatusRequest: ModifyAllPublicIPSwitchStatusRequest,
    DescribeBlockStaticListResponse: DescribeBlockStaticListResponse,
    AddNatAcRuleRequest: AddNatAcRuleRequest,
    ModifySecurityGroupSequenceRulesRequest: ModifySecurityGroupSequenceRulesRequest,
    CreateDatabaseWhiteListRulesResponse: CreateDatabaseWhiteListRulesResponse,
    ScanInfo: ScanInfo,
    CreateChooseVpcsResponse: CreateChooseVpcsResponse,
    DescribeUnHandleEventTabListResponse: DescribeUnHandleEventTabListResponse,
    NatFwFilter: NatFwFilter,
    ScanResultInfo: ScanResultInfo,
    ModifyRunSyncAssetResponse: ModifyRunSyncAssetResponse,
    ModifyEnterpriseSecurityGroupRuleResponse: ModifyEnterpriseSecurityGroupRuleResponse,
    ModifySecurityGroupSequenceRulesResponse: ModifySecurityGroupSequenceRulesResponse,
    IpStatic: IpStatic,
    AddEnterpriseSecurityGroupRulesResponse: AddEnterpriseSecurityGroupRulesResponse,
    UnHandleEventDetail: UnHandleEventDetail,
    RemoveEnterpriseSecurityGroupRuleRequest: RemoveEnterpriseSecurityGroupRuleRequest,
    DeleteResourceGroupRequest: DeleteResourceGroupRequest,
    DescribeBlockByIpTimesListRequest: DescribeBlockByIpTimesListRequest,
    RemoveEnterpriseSecurityGroupRuleResponse: RemoveEnterpriseSecurityGroupRuleResponse,
    ModifyEnterpriseSecurityGroupRuleRequest: ModifyEnterpriseSecurityGroupRuleRequest,
    ModifySequenceRulesResponse: ModifySequenceRulesResponse,
    DescribeResourceGroupNewResponse: DescribeResourceGroupNewResponse,
    DescribeNatFwInstanceWithRegionResponse: DescribeNatFwInstanceWithRegionResponse,
    DescribeResourceGroupNewRequest: DescribeResourceGroupNewRequest,
    ModifyBlockTopRequest: ModifyBlockTopRequest,
    DeleteAcRuleResponse: DeleteAcRuleResponse,
    IocListData: IocListData,
    InstanceInfo: InstanceInfo,
    DescribeIPStatusListRequest: DescribeIPStatusListRequest,
    ModifyNatFwSwitchResponse: ModifyNatFwSwitchResponse,
    DescribeBlockByIpTimesListResponse: DescribeBlockByIpTimesListResponse,
    SetNatFwDnatRuleResponse: SetNatFwDnatRuleResponse,
    DescribeRuleOverviewRequest: DescribeRuleOverviewRequest,
    DescribeDefenseSwitchResponse: DescribeDefenseSwitchResponse,
    DescribeAcListsRequest: DescribeAcListsRequest,
    DescribeGuideScanInfoRequest: DescribeGuideScanInfoRequest,
    UnHandleEvent: UnHandleEvent,
    DescribeAssociatedInstanceListRequest: DescribeAssociatedInstanceListRequest,
    DeleteAcRuleRequest: DeleteAcRuleRequest,
    DeleteAllAccessControlRuleResponse: DeleteAllAccessControlRuleResponse,
    ModifyNatFwSwitchRequest: ModifyNatFwSwitchRequest,
    DescribeIPStatusListResponse: DescribeIPStatusListResponse,
    CreateDatabaseWhiteListRulesRequest: CreateDatabaseWhiteListRulesRequest,
    NatInstanceInfo: NatInstanceInfo,
    NatFwEipsInfo: NatFwEipsInfo,
    DescribeResourceGroupResponse: DescribeResourceGroupResponse,
    DescribeTLogIpListResponse: DescribeTLogIpListResponse,
    StopSecurityGroupRuleDispatchResponse: StopSecurityGroupRuleDispatchResponse,
    DescribeNatFwInfoCountRequest: DescribeNatFwInfoCountRequest,
    AddAcRuleResponse: AddAcRuleResponse,
    ModifyNatFwReSelectRequest: ModifyNatFwReSelectRequest,
    SetNatFwDnatRuleRequest: SetNatFwDnatRuleRequest,
    ModifyAllVPCSwitchStatusRequest: ModifyAllVPCSwitchStatusRequest,
    SecurityGroupBothWayInfo: SecurityGroupBothWayInfo,
    ModifyAllRuleStatusResponse: ModifyAllRuleStatusResponse,
    StopSecurityGroupRuleDispatchRequest: StopSecurityGroupRuleDispatchRequest,
    DescribeBlockIgnoreListRequest: DescribeBlockIgnoreListRequest,
    ModifyBlockTopResponse: ModifyBlockTopResponse,
    DeleteNatFwInstanceRequest: DeleteNatFwInstanceRequest,
    ModifyStorageSettingRequest: ModifyStorageSettingRequest,
    DescribeNatFwVpcDnsLstResponse: DescribeNatFwVpcDnsLstResponse,
    DescAcItem: DescAcItem,
    CreateSecurityGroupRulesResponse: CreateSecurityGroupRulesResponse,
    ExpandCfwVerticalResponse: ExpandCfwVerticalResponse,
    DescribeNatAcRuleRequest: DescribeNatAcRuleRequest,
    TLogInfo: TLogInfo,
    CreateSecurityGroupRulesRequest: CreateSecurityGroupRulesRequest,
    DeleteVpcInstanceRequest: DeleteVpcInstanceRequest,
    SwitchListsData: SwitchListsData,
    CreateNatFwInstanceWithDomainRequest: CreateNatFwInstanceWithDomainRequest,
    DescribeSwitchListsResponse: DescribeSwitchListsResponse,
    DescribeCfwEipsResponse: DescribeCfwEipsResponse,
    ModifyResourceGroupResponse: ModifyResourceGroupResponse,
    DeleteResourceGroupResponse: DeleteResourceGroupResponse,
    DescribeSwitchListsRequest: DescribeSwitchListsRequest,
    DescribeBlockStaticListRequest: DescribeBlockStaticListRequest,
    FwVpcCidr: FwVpcCidr,
    ModifyRunSyncAssetRequest: ModifyRunSyncAssetRequest,
    CreateAcRulesResponse: CreateAcRulesResponse,
    ModifyAssetScanResponse: ModifyAssetScanResponse,
    ModifyAcRuleRequest: ModifyAcRuleRequest,
    DescribeNatFwInstancesInfoResponse: DescribeNatFwInstancesInfoResponse,
    AddNatAcRuleResponse: AddNatAcRuleResponse,
    ModifyBlockIgnoreListResponse: ModifyBlockIgnoreListResponse,
    DescribeNatFwInstanceResponse: DescribeNatFwInstanceResponse,
    ModifySecurityGroupRuleResponse: ModifySecurityGroupRuleResponse,
    DnsVpcSwitch: DnsVpcSwitch,
    DescribeResourceGroupRequest: DescribeResourceGroupRequest,
    CreateAcRulesRequest: CreateAcRulesRequest,
    ModifyEnterpriseSecurityDispatchStatusRequest: ModifyEnterpriseSecurityDispatchStatusRequest,
    DescribeBlockIgnoreListResponse: DescribeBlockIgnoreListResponse,
    ModifyTableStatusRequest: ModifyTableStatusRequest,
    ModifyTableStatusResponse: ModifyTableStatusResponse,
    DescribeGuideScanInfoResponse: DescribeGuideScanInfoResponse,

}
