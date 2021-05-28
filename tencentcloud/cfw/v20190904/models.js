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
 * DescribeVpcRuleOverview返回参数结构体
 * @class
 */
class DescribeVpcRuleOverviewResponse extends  AbstractModel {
    constructor(){
        super();

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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyNum = 'StrategyNum' in params ? params.StrategyNum : null;
        this.StartRuleNum = 'StartRuleNum' in params ? params.StartRuleNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 暴漏漏洞数量
         * @type {number || null}
         */
        this.LeakNum = null;

        /**
         * 防护ip数量
         * @type {number || null}
         */
        this.IPNum = null;

        /**
         * 暴漏端口数量
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
         * 扫描状态 0扫描中 1完成   2没赠送过扫描显示开启界面
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
         * 防火墙实例id。
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
 * DescribeSyncAssetStatus返回参数结构体
 * @class
 */
class DescribeSyncAssetStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1-更新中 2-更新完成 3、4-更新失败
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
 * ModifyAllSwitchStatus请求参数结构体
 * @class
 */
class ModifyAllSwitchStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态，0：关闭，1：开启
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 0: 互联网边界防火墙开关，1：vpc防火墙开关
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 选中的防火墙开关Id
         * @type {Array.<string> || null}
         */
        this.Ids = null;

        /**
         * NAT开关切换类型，1,单个子网，2，同开同关，3，全部
         * @type {number || null}
         */
        this.ChangeType = null;

        /**
         * NAT实例所在地域
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.ChangeType = 'ChangeType' in params ? params.ChangeType : null;
        this.Area = 'Area' in params ? params.Area : null;

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
 * CreateSecurityGroupApiRules请求参数结构体
 * @class
 */
class CreateSecurityGroupApiRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建规则数据
         * @type {Array.<SecurityGroupApiRuleData> || null}
         */
        this.Data = null;

        /**
         * 方向，0：出站，1：入站
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 插入类型，0：后插，1：前插，2：中插
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 腾讯云地域的英文简写
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
                let obj = new SecurityGroupApiRuleData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Area = 'Area' in params ? params.Area : null;

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
 * ModifyItemSwitchStatus请求参数结构体
 * @class
 */
class ModifyItemSwitchStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * id值
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 状态值，0: 关闭 ,1:开启
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 0: 互联网边界边界防火墙开关，1：vpc防火墙开关
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;

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
 * ModifyItemSwitchStatus返回参数结构体
 * @class
 */
class ModifyItemSwitchStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改成功与否状态值 0：修改成功，非 0：修改失败
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
 * CreateSecurityGroupApiRules返回参数结构体
 * @class
 */
class CreateSecurityGroupApiRulesResponse extends  AbstractModel {
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
 * 添加安全组Api规则对象
 * @class
 */
class SecurityGroupApiRuleData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问源，入站时为Ip/Cidr，默认为0.0.0.0/0； 出站时当RuleType为1时，支持内网Ip/Cidr, 当RuleType为2时，填实例ID
         * @type {string || null}
         */
        this.SourceId = null;

        /**
         * 访问目的，出站时为Ip/Cidr，默认为0.0.0.0/0；入站时当RuleType为1时，支持内网Ip/Cidr, 当RuleType为2时，填实例ID
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * 协议，支持ANY/TCP/UDP/ICMP
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口, 当Protocol为ANY或ICMP时，Port为-1/-1
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 策略, 1：阻断，2：放行
         * @type {string || null}
         */
        this.Strategy = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * 规则类型，1：VpcId+Ip/Cidr, 2: 实例ID，入站时为访问目的类型，出站时为访问源类型
         * @type {number || null}
         */
        this.RuleType = null;

        /**
         * 执行顺序，中间插入必传，前插、后插非必传
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * 私有网络ID，当RuleType为1时必传
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
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

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
 * DescribeSyncAssetStatus请求参数结构体
 * @class
 */
class DescribeSyncAssetStatusRequest extends  AbstractModel {
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
 * ModifySecurityGroupAllRuleStatus返回参数结构体
 * @class
 */
class ModifySecurityGroupAllRuleStatusResponse extends  AbstractModel {
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
 * RunSyncAsset返回参数结构体
 * @class
 */
class RunSyncAssetResponse extends  AbstractModel {
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
 * RunSyncAsset请求参数结构体
 * @class
 */
class RunSyncAssetRequest extends  AbstractModel {
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
 * DescribeCfwEips请求参数结构体
 * @class
 */
class DescribeCfwEipsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：cfw新增模式，1：cfw接入模式
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * ALL：查询所有弹性公网ip; nat-xxxxx：接入模式场景指定网关的弹性公网ip
         * @type {string || null}
         */
        this.NatGatewayId = null;

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
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.CfwInstance = 'CfwInstance' in params ? params.CfwInstance : null;

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
 * DescribeVpcRuleOverview请求参数结构体
 * @class
 */
class DescribeVpcRuleOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EdgeId值两个vpc间的边id  不是必填项可以为空，就是所有vpc间的访问控制规则
         * @type {string || null}
         */
        this.EdgeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;

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
         * 出站还是入站，0：入站，1：出站
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
 * DescribeNatRuleOverview返回参数结构体
 * @class
 */
class DescribeNatRuleOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 弹性IP列表
         * @type {Array.<string> || null}
         */
        this.EipList = null;

        /**
         * 端口转发规则数量
         * @type {number || null}
         */
        this.DnatNum = null;

        /**
         * 访问控制规则总数
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 访问控制规则剩余配额
         * @type {number || null}
         */
        this.RemainNum = null;

        /**
         * 阻断规则条数
         * @type {number || null}
         */
        this.BlockNum = null;

        /**
         * 启用规则条数
         * @type {number || null}
         */
        this.EnableNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.EipList = 'EipList' in params ? params.EipList : null;
        this.DnatNum = 'DnatNum' in params ? params.DnatNum : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RemainNum = 'RemainNum' in params ? params.RemainNum : null;
        this.BlockNum = 'BlockNum' in params ? params.BlockNum : null;
        this.EnableNum = 'EnableNum' in params ? params.EnableNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 状态值 0: 修改成功, !0: 修改失败
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
 * DeleteSecurityGroupAllRule返回参数结构体
 * @class
 */
class DeleteSecurityGroupAllRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: 操作成功，非0：操作失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 返回数据的json字符串
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
         * 策略
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
 * 安全组列表数据
 * @class
 */
class SecurityGroupListData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {number || null}
         */
        this.Id = null;

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
         * 访问源类型，默认为0，1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 访问目的
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * 访问目的类型，默认为0，1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB
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
         * 单/双向下发，0:单向下发，1：双向下发
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
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
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
         * 1拦截列表 2 忽略列表
         * @type {number || null}
         */
        this.RuleType = null;

        /**
         * IP、Domain二选一，不能同时为空
         * @type {Array.<IocListData> || null}
         */
        this.IOC = null;

        /**
         * 默认值:delete（删除）、edit（编辑）、add（添加）  其他值无效
         * @type {string || null}
         */
        this.IocAction = null;

        /**
         * 时间格式：yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 时间格式：yyyy-MM-dd HH:mm:ss
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
 * DescribeNatRuleOverview请求参数结构体
 * @class
 */
class DescribeNatRuleOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 方向，0：出站，1：入站 默认值：0
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * NAT地域  这个是必填项，填入相关的英文，'ap-beijing-fsi': '北京金融',
        'ap-beijing': '北京',
        'ap-changsha-ec': '长沙EC',
        'ap-chengdu': '成都',
        'ap-chongqing': '重庆',
        'ap-fuzhou-ec': '福州EC',
        'ap-guangzhou-open': '广州Open',
        'ap-guangzhou': '广州',
        'ap-hangzhou-ec': '杭州EC',
        'ap-jinan-ec': '济南EC',
        'ap-nanjing': '南京',
        'ap-shanghai-fsi': '上海金融',
        'ap-shanghai': '上海',
        'ap-shenzhen-fsi': '深圳金融',
        'ap-shenzhen': '深圳',
        'ap-wuhan-ec': '武汉EC'
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
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * ModifySecurityGroupAllRuleStatus请求参数结构体
 * @class
 */
class ModifySecurityGroupAllRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表规则状态，0：全部停用，1：全部启用
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
         * NAT地域, 腾讯云地域的英文简写
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
 * DeleteSecurityGroupAllRule请求参数结构体
 * @class
 */
class DeleteSecurityGroupAllRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 方向，0：出站，1：入站
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 腾讯云地域的英文简写
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
        this.Area = 'Area' in params ? params.Area : null;

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
 * ModifyAllSwitchStatus返回参数结构体
 * @class
 */
class ModifyAllSwitchStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改成功与否的状态值 0：修改成功，非 0：修改失败
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

module.exports = {
    DescribeVpcRuleOverviewResponse: DescribeVpcRuleOverviewResponse,
    ScanResultInfo: ScanResultInfo,
    ScanInfo: ScanInfo,
    SetNatFwDnatRuleRequest: SetNatFwDnatRuleRequest,
    DescribeSyncAssetStatusResponse: DescribeSyncAssetStatusResponse,
    ModifyAllSwitchStatusRequest: ModifyAllSwitchStatusRequest,
    ModifyAllRuleStatusResponse: ModifyAllRuleStatusResponse,
    DescribeGuideScanInfoRequest: DescribeGuideScanInfoRequest,
    IocListData: IocListData,
    DescribeRuleOverviewResponse: DescribeRuleOverviewResponse,
    CfwNatDnatRule: CfwNatDnatRule,
    CreateSecurityGroupApiRulesRequest: CreateSecurityGroupApiRulesRequest,
    DescribeSecurityGroupListResponse: DescribeSecurityGroupListResponse,
    ExpandCfwVerticalResponse: ExpandCfwVerticalResponse,
    AcListsData: AcListsData,
    ModifyItemSwitchStatusRequest: ModifyItemSwitchStatusRequest,
    SequenceData: SequenceData,
    ModifyItemSwitchStatusResponse: ModifyItemSwitchStatusResponse,
    CreateSecurityGroupApiRulesResponse: CreateSecurityGroupApiRulesResponse,
    ModifyAcRuleResponse: ModifyAcRuleResponse,
    ModifySequenceRulesResponse: ModifySequenceRulesResponse,
    DescribeTableStatusResponse: DescribeTableStatusResponse,
    DeleteAcRuleResponse: DeleteAcRuleResponse,
    ModifySequenceRulesRequest: ModifySequenceRulesRequest,
    NatFwEipsInfo: NatFwEipsInfo,
    SecurityGroupApiRuleData: SecurityGroupApiRuleData,
    DescribeSwitchListsResponse: DescribeSwitchListsResponse,
    DescribeSyncAssetStatusRequest: DescribeSyncAssetStatusRequest,
    ModifySecurityGroupAllRuleStatusResponse: ModifySecurityGroupAllRuleStatusResponse,
    DescribeCfwEipsResponse: DescribeCfwEipsResponse,
    DeleteAllAccessControlRuleRequest: DeleteAllAccessControlRuleRequest,
    RunSyncAssetResponse: RunSyncAssetResponse,
    RunSyncAssetRequest: RunSyncAssetRequest,
    DeleteSecurityGroupRuleRequest: DeleteSecurityGroupRuleRequest,
    ModifyTableStatusResponse: ModifyTableStatusResponse,
    SetNatFwDnatRuleResponse: SetNatFwDnatRuleResponse,
    DescribeCfwEipsRequest: DescribeCfwEipsRequest,
    DescribeRuleOverviewRequest: DescribeRuleOverviewRequest,
    DescribeVpcRuleOverviewRequest: DescribeVpcRuleOverviewRequest,
    DescribeAcListsRequest: DescribeAcListsRequest,
    DescribeTableStatusRequest: DescribeTableStatusRequest,
    CreateAcRulesResponse: CreateAcRulesResponse,
    DescribeAssociatedInstanceListResponse: DescribeAssociatedInstanceListResponse,
    AssociatedInstanceInfo: AssociatedInstanceInfo,
    DescribeAssociatedInstanceListRequest: DescribeAssociatedInstanceListRequest,
    ModifyAcRuleRequest: ModifyAcRuleRequest,
    DescribeNatRuleOverviewResponse: DescribeNatRuleOverviewResponse,
    DeleteAcRuleRequest: DeleteAcRuleRequest,
    DeleteAllAccessControlRuleResponse: DeleteAllAccessControlRuleResponse,
    ModifyBlockIgnoreListResponse: ModifyBlockIgnoreListResponse,
    DeleteSecurityGroupAllRuleResponse: DeleteSecurityGroupAllRuleResponse,
    ExpandCfwVerticalRequest: ExpandCfwVerticalRequest,
    RuleInfoData: RuleInfoData,
    SecurityGroupListData: SecurityGroupListData,
    ModifyBlockIgnoreListRequest: ModifyBlockIgnoreListRequest,
    CreateAcRulesRequest: CreateAcRulesRequest,
    DescribeSecurityGroupListRequest: DescribeSecurityGroupListRequest,
    DescribeSwitchListsRequest: DescribeSwitchListsRequest,
    ModifyTableStatusRequest: ModifyTableStatusRequest,
    DeleteSecurityGroupRuleResponse: DeleteSecurityGroupRuleResponse,
    DescribeNatRuleOverviewRequest: DescribeNatRuleOverviewRequest,
    ModifySecurityGroupAllRuleStatusRequest: ModifySecurityGroupAllRuleStatusRequest,
    DeleteSecurityGroupAllRuleRequest: DeleteSecurityGroupAllRuleRequest,
    ModifyAllRuleStatusRequest: ModifyAllRuleStatusRequest,
    DescribeGuideScanInfoResponse: DescribeGuideScanInfoResponse,
    DescribeAcListsResponse: DescribeAcListsResponse,
    SwitchListsData: SwitchListsData,
    ModifyAllSwitchStatusResponse: ModifyAllSwitchStatusResponse,

}
