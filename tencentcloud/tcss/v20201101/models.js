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
 * CreateVirusScanAgain请求参数结构体
 * @class
 */
class CreateVirusScanAgainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 需要扫描的容器id集合
         * @type {Array.<string> || null}
         */
        this.ContainerIds = null;

        /**
         * 是否是扫描全部超时的
         * @type {boolean || null}
         */
        this.TimeoutAll = null;

        /**
         * 重新设置的超时时长
         * @type {number || null}
         */
        this.Timeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ContainerIds = 'ContainerIds' in params ? params.ContainerIds : null;
        this.TimeoutAll = 'TimeoutAll' in params ? params.TimeoutAll : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;

    }
}

/**
 * UpdateImageRegistryTimingScanTask返回参数结构体
 * @class
 */
class UpdateImageRegistryTimingScanTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUnfinishRefreshTask返回参数结构体
 * @class
 */
class DescribeUnfinishRefreshTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回最近的一次任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 任务状态，为Task_New,Task_Running,Task_Finish,Task_Error,Task_NoExist.Task_New,Task_Running表示有任务存在，不允许新下发
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表示是否启用合规标准。
 * @class
 */
class ComplianceBenchmarkStandardEnable extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合规标准的ID。
         * @type {number || null}
         */
        this.StandardId = null;

        /**
         * 是否启用合规标准
         * @type {boolean || null}
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
        this.StandardId = 'StandardId' in params ? params.StandardId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * DescribeRiskSyscallWhiteLists返回参数结构体
 * @class
 */
class DescribeRiskSyscallWhiteListsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 白名单信息列表
         * @type {Array.<RiskSyscallWhiteListBaseInfo> || null}
         */
        this.WhiteListSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.WhiteListSet) {
            this.WhiteListSet = new Array();
            for (let z in params.WhiteListSet) {
                let obj = new RiskSyscallWhiteListBaseInfo();
                obj.deserialize(params.WhiteListSet[z]);
                this.WhiteListSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRefreshTask返回参数结构体
 * @class
 */
class CreateRefreshTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回创建的集群检查任务的ID，为0表示创建失败。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 创建检查任务的结果，"Succ"为成功，"Failed"为失败
         * @type {string || null}
         */
        this.CreateResult = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.CreateResult = 'CreateResult' in params ? params.CreateResult : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器安全镜像病毒信息
 * @class
 */
class ImageVirusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 风险等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * 病毒名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VirusName = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 修护建议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 首次发现时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FirstScanTime = null;

        /**
         * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestScanTime = null;

        /**
         * 文件md5
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 文件名称
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Path = 'Path' in params ? params.Path : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.VirusName = 'VirusName' in params ? params.VirusName : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.FirstScanTime = 'FirstScanTime' in params ? params.FirstScanTime : null;
        this.LatestScanTime = 'LatestScanTime' in params ? params.LatestScanTime : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

    }
}

/**
 * 运行时容器访问控制事件描述信息
 * @class
 */
class AbnormalProcessEventDescription extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件规则
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 解决方案
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 事件备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 命中规则详细信息
         * @type {AbnormalProcessChildRuleInfo || null}
         */
        this.MatchRule = null;

        /**
         * 命中规则名称，PROXY_TOOL：代理软件，TRANSFER_CONTROL：横向渗透，ATTACK_CMD：恶意命令，REVERSE_SHELL：反弹shell，FILELESS：无文件程序执行，RISK_CMD：高危命令，ABNORMAL_CHILD_PROC：敏感服务异常子进程启动，USER_DEFINED_RULE：用户自定义规则
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 命中规则的id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 事件最后一次处理的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperationTime = null;

        /**
         * 命中策略名称：SYSTEM_DEFINED_RULE （系统策略）或  用户自定义的策略名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.MatchRule) {
            let obj = new AbnormalProcessChildRuleInfo();
            obj.deserialize(params.MatchRule)
            this.MatchRule = obj;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.OperationTime = 'OperationTime' in params ? params.OperationTime : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * 表示一个定时任务的周期设置
 * @class
 */
class CompliancePeriodTaskRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行的频率（几天一次），取值为：1,3,7。
         * @type {number || null}
         */
        this.Frequency = null;

        /**
         * 在这天的什么时间执行，格式为：HH:mm:SS。
         * @type {string || null}
         */
        this.ExecutionTime = null;

        /**
         * 是否开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.ExecutionTime = 'ExecutionTime' in params ? params.ExecutionTime : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * DescribeVirusScanTimeoutSetting返回参数结构体
 * @class
 */
class DescribeVirusScanTimeoutSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 超时时长单位小时
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCheckComponent的入口参数,用于批量安装防御容器
 * @class
 */
class ClusterCreateComponentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要安装组件的集群ID。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 该集群对应的地域
         * @type {string || null}
         */
        this.ClusterRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterRegion = 'ClusterRegion' in params ? params.ClusterRegion : null;

    }
}

/**
 * DescribeAssetComponentList返回参数结构体
 * @class
 */
class DescribeAssetComponentListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件列表
         * @type {Array.<ComponentInfo> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ComponentInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageRegistryVulList返回参数结构体
 * @class
 */
class DescribeAssetImageRegistryVulListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像漏洞列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageVul> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ImageVul();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddAssetImageRegistryRegistryDetail返回参数结构体
 * @class
 */
class AddAssetImageRegistryRegistryDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HealthCheckErr = null;

        /**
         * 名称错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NameRepeatErr = null;

        /**
         * 仓库唯一id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RegistryId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HealthCheckErr = 'HealthCheckErr' in params ? params.HealthCheckErr : null;
        this.NameRepeatErr = 'NameRepeatErr' in params ? params.NameRepeatErr : null;
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCompliancePolicyItemFromWhitelist请求参数结构体
 * @class
 */
class DeleteCompliancePolicyItemFromWhitelistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定的白名单项的ID的列表
         * @type {Array.<number> || null}
         */
        this.WhitelistIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WhitelistIdSet = 'WhitelistIdSet' in params ? params.WhitelistIdSet : null;

    }
}

/**
 * DescribeAssetImageDetail请求参数结构体
 * @class
 */
class DescribeAssetImageDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageID = 'ImageID' in params ? params.ImageID : null;

    }
}

/**
 * ModifyAssetImageScanStop返回参数结构体
 * @class
 */
class ModifyAssetImageScanStopResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 停止状态
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
 * DescribeComplianceScanFailedAssetList返回参数结构体
 * @class
 */
class DescribeComplianceScanFailedAssetListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回检测失败的资产的总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回各类检测失败的资产的汇总信息的列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ComplianceScanFailedAsset> || null}
         */
        this.ScanFailedAssetList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ScanFailedAssetList) {
            this.ScanFailedAssetList = new Array();
            for (let z in params.ScanFailedAssetList) {
                let obj = new ComplianceScanFailedAsset();
                obj.deserialize(params.ScanFailedAssetList[z]);
                this.ScanFailedAssetList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SyncAssetImageRegistryAsset返回参数结构体
 * @class
 */
class SyncAssetImageRegistryAssetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageRegistryVirusListExport返回参数结构体
 * @class
 */
class DescribeAssetImageRegistryVirusListExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * excel文件下载地址
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecEventsTendency返回参数结构体
 * @class
 */
class DescribeSecEventsTendencyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行时安全事件趋势信息列表
         * @type {Array.<SecTendencyEventInfo> || null}
         */
        this.EventTendencySet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventTendencySet) {
            this.EventTendencySet = new Array();
            for (let z in params.EventTendencySet) {
                let obj = new SecTendencyEventInfo();
                obj.deserialize(params.EventTendencySet[z]);
                this.EventTendencySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessControlEventsExport返回参数结构体
 * @class
 */
class DescribeAccessControlEventsExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * execle下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddEditAbnormalProcessRule请求参数结构体
 * @class
 */
class AddEditAbnormalProcessRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 增加策略信息，策略id为空，编辑策略是id不能为空
         * @type {AbnormalProcessRuleInfo || null}
         */
        this.RuleInfo = null;

        /**
         * 仅在加白的时候带上
         * @type {string || null}
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleInfo) {
            let obj = new AbnormalProcessRuleInfo();
            obj.deserialize(params.RuleInfo)
            this.RuleInfo = obj;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * DescribeComplianceTaskAssetSummary请求参数结构体
 * @class
 */
class DescribeComplianceTaskAssetSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产类型列表。
ASSET_CONTAINER, 容器
ASSET_IMAGE, 镜像
ASSET_HOST, 主机
ASSET_K8S, K8S资产
         * @type {Array.<string> || null}
         */
        this.AssetTypeSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetTypeSet = 'AssetTypeSet' in params ? params.AssetTypeSet : null;

    }
}

/**
 * ModifyAssetImageRegistryScanStop返回参数结构体
 * @class
 */
class ModifyAssetImageRegistryScanStopResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProVersionInfo请求参数结构体
 * @class
 */
class DescribeProVersionInfoRequest extends  AbstractModel {
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
 * SetCheckMode返回参数结构体
 * @class
 */
class SetCheckModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * "Succ"表示设置成功，"Failed"表示设置失败
         * @type {string || null}
         */
        this.SetCheckResult = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SetCheckResult = 'SetCheckResult' in params ? params.SetCheckResult : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageScanStatus返回参数结构体
 * @class
 */
class DescribeAssetImageScanStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像个数
         * @type {number || null}
         */
        this.ImageTotal = null;

        /**
         * 扫描镜像个数
         * @type {number || null}
         */
        this.ImageScanCnt = null;

        /**
         * 扫描状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 扫描进度 ImageScanCnt/ImageTotal *100
         * @type {number || null}
         */
        this.Schedule = null;

        /**
         * 安全个数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 风险个数
         * @type {number || null}
         */
        this.RiskCount = null;

        /**
         * 剩余扫描时间
         * @type {number || null}
         */
        this.LeftSeconds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageTotal = 'ImageTotal' in params ? params.ImageTotal : null;
        this.ImageScanCnt = 'ImageScanCnt' in params ? params.ImageScanCnt : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Schedule = 'Schedule' in params ? params.Schedule : null;
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.RiskCount = 'RiskCount' in params ? params.RiskCount : null;
        this.LeftSeconds = 'LeftSeconds' in params ? params.LeftSeconds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAbnormalProcessRulesExport请求参数结构体
 * @class
 */
class DescribeAbnormalProcessRulesExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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
        this.ExportField = 'ExportField' in params ? params.ExportField : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribePurchaseStateInfo返回参数结构体
 * @class
 */
class DescribePurchaseStateInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：可申请试用可购买；1：只可购买(含试用审核不通过和试用过期)；2：试用生效中；3：专业版生效中；4：专业版过期
         * @type {number || null}
         */
        this.State = null;

        /**
         * 总核数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CoresCnt = null;

        /**
         * 已购买核数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AuthorizedCoresCnt = null;

        /**
         * 镜像数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ImageCnt = null;

        /**
         * 已授权镜像数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AuthorizedImageCnt = null;

        /**
         * 已购买镜像授权数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PurchasedAuthorizedCnt = null;

        /**
         * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpirationTime = null;

        /**
         * 0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费(用户设置)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutomaticRenewal = null;

        /**
         * 试用期间赠送镜像授权数，可能会过期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GivenAuthorizedCnt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.State = 'State' in params ? params.State : null;
        this.CoresCnt = 'CoresCnt' in params ? params.CoresCnt : null;
        this.AuthorizedCoresCnt = 'AuthorizedCoresCnt' in params ? params.AuthorizedCoresCnt : null;
        this.ImageCnt = 'ImageCnt' in params ? params.ImageCnt : null;
        this.AuthorizedImageCnt = 'AuthorizedImageCnt' in params ? params.AuthorizedImageCnt : null;
        this.PurchasedAuthorizedCnt = 'PurchasedAuthorizedCnt' in params ? params.PurchasedAuthorizedCnt : null;
        this.ExpirationTime = 'ExpirationTime' in params ? params.ExpirationTime : null;
        this.AutomaticRenewal = 'AutomaticRenewal' in params ? params.AutomaticRenewal : null;
        this.GivenAuthorizedCnt = 'GivenAuthorizedCnt' in params ? params.GivenAuthorizedCnt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyVirusFileStatus返回参数结构体
 * @class
 */
class ModifyVirusFileStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageRegistryRegistryDetail返回参数结构体
 * @class
 */
class DescribeAssetImageRegistryRegistryDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 仓库url
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 仓库类型，列表：harbor
         * @type {string || null}
         */
        this.RegistryType = null;

        /**
         * 仓库版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegistryVersion = null;

        /**
         * 网络类型，列表：public（公网）
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 区域，列表:default（默认）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegistryRegion = null;

        /**
         * 限速
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SpeedLimit = null;

        /**
         * 安全模式（证书校验）：0（默认） 非安全模式（跳过证书校验）：1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Insecure = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.RegistryType = 'RegistryType' in params ? params.RegistryType : null;
        this.RegistryVersion = 'RegistryVersion' in params ? params.RegistryVersion : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.RegistryRegion = 'RegistryRegion' in params ? params.RegistryRegion : null;
        this.SpeedLimit = 'SpeedLimit' in params ? params.SpeedLimit : null;
        this.Insecure = 'Insecure' in params ? params.Insecure : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器安全
描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 * @class
 */
class RunTimeFilters extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤键的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 一个或者多个过滤值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否模糊查询
         * @type {boolean || null}
         */
        this.ExactMatch = null;

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
        this.ExactMatch = 'ExactMatch' in params ? params.ExactMatch : null;

    }
}

/**
 * DescribeVirusDetail请求参数结构体
 * @class
 */
class DescribeVirusDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马文件id
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeClusterDetail请求参数结构体
 * @class
 */
class DescribeClusterDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeAssetImageList请求参数结构体
 * @class
 */
class DescribeAssetImageListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>ImageName- String - 是否必填：否 - 镜像名称筛选，</li>
<li>ScanStatus - String - 是否必填：否 - 镜像扫描状态notScan，scanning，scanned，scanErr</li>
<li>ImageID- String - 是否必填：否 - 镜像ID筛选，</li>
<li>SecurityRisk- String - 是否必填：否 - 安全风险，VulCnt 、VirusCnt、RiskCnt、IsTrustImage</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式 asc,desc
         * @type {string || null}
         */
        this.Order = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeRiskSyscallWhiteListDetail请求参数结构体
 * @class
 */
class DescribeRiskSyscallWhiteListDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单id
         * @type {string || null}
         */
        this.WhiteListId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WhiteListId = 'WhiteListId' in params ? params.WhiteListId : null;

    }
}

/**
 * ModifyAbnormalProcessRuleStatus请求参数结构体
 * @class
 */
class ModifyAbnormalProcessRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略的ids
         * @type {Array.<string> || null}
         */
        this.RuleIdSet = null;

        /**
         * 策略开关，true开启，false关闭
         * @type {boolean || null}
         */
        this.IsEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleIdSet = 'RuleIdSet' in params ? params.RuleIdSet : null;
        this.IsEnable = 'IsEnable' in params ? params.IsEnable : null;

    }
}

/**
 * 运行是安全详情，进程信息
 * @class
 */
class ProcessDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进程名称
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 进程权限
         * @type {string || null}
         */
        this.ProcessAuthority = null;

        /**
         * 进程pid
         * @type {number || null}
         */
        this.ProcessId = null;

        /**
         * 进程启动用户
         * @type {string || null}
         */
        this.ProcessStartUser = null;

        /**
         * 进程用户组
         * @type {string || null}
         */
        this.ProcessUserGroup = null;

        /**
         * 进程路径
         * @type {string || null}
         */
        this.ProcessPath = null;

        /**
         * 进程树
         * @type {string || null}
         */
        this.ProcessTree = null;

        /**
         * 进程md5
         * @type {string || null}
         */
        this.ProcessMd5 = null;

        /**
         * 进程命令行参数
         * @type {string || null}
         */
        this.ProcessParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.ProcessAuthority = 'ProcessAuthority' in params ? params.ProcessAuthority : null;
        this.ProcessId = 'ProcessId' in params ? params.ProcessId : null;
        this.ProcessStartUser = 'ProcessStartUser' in params ? params.ProcessStartUser : null;
        this.ProcessUserGroup = 'ProcessUserGroup' in params ? params.ProcessUserGroup : null;
        this.ProcessPath = 'ProcessPath' in params ? params.ProcessPath : null;
        this.ProcessTree = 'ProcessTree' in params ? params.ProcessTree : null;
        this.ProcessMd5 = 'ProcessMd5' in params ? params.ProcessMd5 : null;
        this.ProcessParam = 'ProcessParam' in params ? params.ProcessParam : null;

    }
}

/**
 * ScanCompliancePolicyItems请求参数结构体
 * @class
 */
class ScanCompliancePolicyItemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要重新扫描的客户检测项的列表。
         * @type {Array.<number> || null}
         */
        this.CustomerPolicyItemIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerPolicyItemIdSet = 'CustomerPolicyItemIdSet' in params ? params.CustomerPolicyItemIdSet : null;

    }
}

/**
 * DescribeAssetImageVirusListExport请求参数结构体
 * @class
 */
class DescribeAssetImageVirusListExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表支持字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageID = null;

        /**
         * 过滤条件。
<li>Name- String - 是否必填：否 - 镜像名称筛选，</li>
<li>RiskLevel - String - 是否必填：否 - 风险等级  1,2,3,4</li>
         * @type {Array.<AssetFilters> || null}
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
        this.ExportField = 'ExportField' in params ? params.ExportField : null;
        this.ImageID = 'ImageID' in params ? params.ImageID : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * CreateAssetImageScanTask返回参数结构体
 * @class
 */
class CreateAssetImageScanTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskResultSummary请求参数结构体
 * @class
 */
class DescribeTaskResultSummaryRequest extends  AbstractModel {
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
 * DeleteAccessControlRules请求参数结构体
 * @class
 */
class DeleteAccessControlRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略的ids
         * @type {Array.<string> || null}
         */
        this.RuleIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleIdSet = 'RuleIdSet' in params ? params.RuleIdSet : null;

    }
}

/**
 * 表示K8S资产专属的详情。
 * @class
 */
class ComplianceK8SDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * K8S集群的名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * K8S集群的版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;

    }
}

/**
 * 运行时容器访问控制事件描述信息
 * @class
 */
class AccessControlEventDescription extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件规则
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 解决方案
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 事件备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 命中规则详细信息
         * @type {AccessControlChildRuleInfo || null}
         */
        this.MatchRule = null;

        /**
         * 命中规则名字
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 命中规则id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 事件最后一次处理的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperationTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.MatchRule) {
            let obj = new AccessControlChildRuleInfo();
            obj.deserialize(params.MatchRule)
            this.MatchRule = obj;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.OperationTime = 'OperationTime' in params ? params.OperationTime : null;

    }
}

/**
 * DescribeAccessControlEvents返回参数结构体
 * @class
 */
class DescribeAccessControlEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 访问控制事件数组
         * @type {Array.<AccessControlEventInfo> || null}
         */
        this.EventSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.EventSet) {
            this.EventSet = new Array();
            for (let z in params.EventSet) {
                let obj = new AccessControlEventInfo();
                obj.deserialize(params.EventSet[z]);
                this.EventSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 运行时安全，进程基础信息
 * @class
 */
class ProcessBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进程启动用户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessStartUser = null;

        /**
         * 进程用户组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessUserGroup = null;

        /**
         * 进程路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessPath = null;

        /**
         * 进程命令行参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProcessStartUser = 'ProcessStartUser' in params ? params.ProcessStartUser : null;
        this.ProcessUserGroup = 'ProcessUserGroup' in params ? params.ProcessUserGroup : null;
        this.ProcessPath = 'ProcessPath' in params ? params.ProcessPath : null;
        this.ProcessParam = 'ProcessParam' in params ? params.ProcessParam : null;

    }
}

/**
 * 表示一项资产的详情。
 * @class
 */
class ComplianceAssetDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户资产的ID。
         * @type {number || null}
         */
        this.CustomerAssetId = null;

        /**
         * 资产类别。
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 资产的名称。
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * 资产所属的节点的名称。
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 资产所在的主机的名称。
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 资产所在的主机的IP。
         * @type {string || null}
         */
        this.HostIP = null;

        /**
         * 检测状态
CHECK_INIT, 待检测
CHECK_RUNNING, 检测中
CHECK_FINISHED, 检测完成
CHECK_FAILED, 检测失败
         * @type {string || null}
         */
        this.CheckStatus = null;

        /**
         * 此类资产通过的检测项的数目。
         * @type {number || null}
         */
        this.PassedPolicyItemCount = null;

        /**
         * 此类资产未通过的检测的数目。
         * @type {number || null}
         */
        this.FailedPolicyItemCount = null;

        /**
         * 上次检测的时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastCheckTime = null;

        /**
         * 检测结果：
RESULT_FAILED: 未通过。
RESULT_PASSED: 通过。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckResult = null;

        /**
         * 资产的运行状态。
         * @type {string || null}
         */
        this.AssetStatus = null;

        /**
         * 创建资产的时间。
ASSET_NORMAL: 正常运行，
ASSET_PAUSED: 暂停运行，
ASSET_STOPPED: 停止运行，
ASSET_ABNORMAL: 异常
         * @type {string || null}
         */
        this.AssetCreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerAssetId = 'CustomerAssetId' in params ? params.CustomerAssetId : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostIP = 'HostIP' in params ? params.HostIP : null;
        this.CheckStatus = 'CheckStatus' in params ? params.CheckStatus : null;
        this.PassedPolicyItemCount = 'PassedPolicyItemCount' in params ? params.PassedPolicyItemCount : null;
        this.FailedPolicyItemCount = 'FailedPolicyItemCount' in params ? params.FailedPolicyItemCount : null;
        this.LastCheckTime = 'LastCheckTime' in params ? params.LastCheckTime : null;
        this.CheckResult = 'CheckResult' in params ? params.CheckResult : null;
        this.AssetStatus = 'AssetStatus' in params ? params.AssetStatus : null;
        this.AssetCreateTime = 'AssetCreateTime' in params ? params.AssetCreateTime : null;

    }
}

/**
 * DescribeRiskSyscallEvents返回参数结构体
 * @class
 */
class DescribeRiskSyscallEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 高危系统调用数组
         * @type {Array.<RiskSyscallEventInfo> || null}
         */
        this.EventSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.EventSet) {
            this.EventSet = new Array();
            for (let z in params.EventSet) {
                let obj = new RiskSyscallEventInfo();
                obj.deserialize(params.EventSet[z]);
                this.EventSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageRiskList返回参数结构体
 * @class
 */
class DescribeAssetImageRiskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像病毒列表
         * @type {Array.<ImageRiskInfo> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ImageRiskInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReverseShellEvents返回参数结构体
 * @class
 */
class DescribeReverseShellEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 反弹shell数组
         * @type {Array.<ReverseShellEventInfo> || null}
         */
        this.EventSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.EventSet) {
            this.EventSet = new Array();
            for (let z in params.EventSet) {
                let obj = new ReverseShellEventInfo();
                obj.deserialize(params.EventSet[z]);
                this.EventSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 镜像列表
 * @class
 */
class ImageSimpleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageID = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像大小
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.ImageType = null;

        /**
         * 关联容器数
         * @type {number || null}
         */
        this.ContainerCnt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageID = 'ImageID' in params ? params.ImageID : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.ImageType = 'ImageType' in params ? params.ImageType : null;
        this.ContainerCnt = 'ContainerCnt' in params ? params.ContainerCnt : null;

    }
}

/**
 * DescribeComplianceAssetDetailInfo请求参数结构体
 * @class
 */
class DescribeComplianceAssetDetailInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户资产ID。
         * @type {number || null}
         */
        this.CustomerAssetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerAssetId = 'CustomerAssetId' in params ? params.CustomerAssetId : null;

    }
}

/**
 * CreateExportComplianceStatusListJob返回参数结构体
 * @class
 */
class CreateExportComplianceStatusListJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回创建的导出任务的ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetAppServiceList返回参数结构体
 * @class
 */
class DescribeAssetAppServiceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * db服务列表
         * @type {Array.<ServiceInfo> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ServiceInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表示一个合规标准的信息。
 * @class
 */
class ComplianceBenchmarkStandard extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合规标准的ID
         * @type {number || null}
         */
        this.StandardId = null;

        /**
         * 合规标准的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 合规标准包含的数目
         * @type {number || null}
         */
        this.PolicyItemCount = null;

        /**
         * 是否启用此标准
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 标准的描述
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
        this.StandardId = 'StandardId' in params ? params.StandardId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PolicyItemCount = 'PolicyItemCount' in params ? params.PolicyItemCount : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeEscapeRuleInfo返回参数结构体
 * @class
 */
class DescribeEscapeRuleInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则信息
         * @type {Array.<EscapeRule> || null}
         */
        this.RuleSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new EscapeRule();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePurchaseStateInfo请求参数结构体
 * @class
 */
class DescribePurchaseStateInfoRequest extends  AbstractModel {
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
 * AddCompliancePolicyItemToWhitelist请求参数结构体
 * @class
 */
class AddCompliancePolicyItemToWhitelistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要忽略的检测项的ID的列表
         * @type {Array.<number> || null}
         */
        this.CustomerPolicyItemIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerPolicyItemIdSet = 'CustomerPolicyItemIdSet' in params ? params.CustomerPolicyItemIdSet : null;

    }
}

/**
 * 表示一类资产的总览信息。
 * @class
 */
class ComplianceAssetSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产类别。
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 是否为客户的首次检测。与CheckStatus配合使用。
         * @type {boolean || null}
         */
        this.IsCustomerFirstCheck = null;

        /**
         * 检测状态

CHECK_UNINIT, 用户未启用此功能

CHECK_INIT, 待检测

CHECK_RUNNING, 检测中

CHECK_FINISHED, 检测完成

CHECK_FAILED, 检测失败
         * @type {string || null}
         */
        this.CheckStatus = null;

        /**
         * 此类别的检测进度，为 0~100 的数。若未在检测中，无此字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CheckProgress = null;

        /**
         * 此类资产通过的检测项的数目。
         * @type {number || null}
         */
        this.PassedPolicyItemCount = null;

        /**
         * 此类资产未通过的检测的数目。
         * @type {number || null}
         */
        this.FailedPolicyItemCount = null;

        /**
         * 此类资产下未通过的严重级别的检测项的数目。
         * @type {number || null}
         */
        this.FailedCriticalPolicyItemCount = null;

        /**
         * 此类资产下未通过的高危检测项的数目。
         * @type {number || null}
         */
        this.FailedHighRiskPolicyItemCount = null;

        /**
         * 此类资产下未通过的中危检测项的数目。
         * @type {number || null}
         */
        this.FailedMediumRiskPolicyItemCount = null;

        /**
         * 此类资产下未通过的低危检测项的数目。
         * @type {number || null}
         */
        this.FailedLowRiskPolicyItemCount = null;

        /**
         * 此类资产下提示级别的检测项的数目。
         * @type {number || null}
         */
        this.NoticePolicyItemCount = null;

        /**
         * 通过检测的资产的数目。
         * @type {number || null}
         */
        this.PassedAssetCount = null;

        /**
         * 未通过检测的资产的数目。
         * @type {number || null}
         */
        this.FailedAssetCount = null;

        /**
         * 此类资产的合规率，0~100的数。
         * @type {number || null}
         */
        this.AssetPassedRate = null;

        /**
         * 检测失败的资产的数目。
         * @type {number || null}
         */
        this.ScanFailedAssetCount = null;

        /**
         * 上次检测的耗时，单位为秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CheckCostTime = null;

        /**
         * 上次检测的时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastCheckTime = null;

        /**
         * 定时检测规则。
         * @type {CompliancePeriodTaskRule || null}
         */
        this.PeriodRule = null;

        /**
         * 已开启的检查项总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OpenPolicyItemCount = null;

        /**
         * 已忽略的检查项总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IgnoredPolicyItemCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.IsCustomerFirstCheck = 'IsCustomerFirstCheck' in params ? params.IsCustomerFirstCheck : null;
        this.CheckStatus = 'CheckStatus' in params ? params.CheckStatus : null;
        this.CheckProgress = 'CheckProgress' in params ? params.CheckProgress : null;
        this.PassedPolicyItemCount = 'PassedPolicyItemCount' in params ? params.PassedPolicyItemCount : null;
        this.FailedPolicyItemCount = 'FailedPolicyItemCount' in params ? params.FailedPolicyItemCount : null;
        this.FailedCriticalPolicyItemCount = 'FailedCriticalPolicyItemCount' in params ? params.FailedCriticalPolicyItemCount : null;
        this.FailedHighRiskPolicyItemCount = 'FailedHighRiskPolicyItemCount' in params ? params.FailedHighRiskPolicyItemCount : null;
        this.FailedMediumRiskPolicyItemCount = 'FailedMediumRiskPolicyItemCount' in params ? params.FailedMediumRiskPolicyItemCount : null;
        this.FailedLowRiskPolicyItemCount = 'FailedLowRiskPolicyItemCount' in params ? params.FailedLowRiskPolicyItemCount : null;
        this.NoticePolicyItemCount = 'NoticePolicyItemCount' in params ? params.NoticePolicyItemCount : null;
        this.PassedAssetCount = 'PassedAssetCount' in params ? params.PassedAssetCount : null;
        this.FailedAssetCount = 'FailedAssetCount' in params ? params.FailedAssetCount : null;
        this.AssetPassedRate = 'AssetPassedRate' in params ? params.AssetPassedRate : null;
        this.ScanFailedAssetCount = 'ScanFailedAssetCount' in params ? params.ScanFailedAssetCount : null;
        this.CheckCostTime = 'CheckCostTime' in params ? params.CheckCostTime : null;
        this.LastCheckTime = 'LastCheckTime' in params ? params.LastCheckTime : null;

        if (params.PeriodRule) {
            let obj = new CompliancePeriodTaskRule();
            obj.deserialize(params.PeriodRule)
            this.PeriodRule = obj;
        }
        this.OpenPolicyItemCount = 'OpenPolicyItemCount' in params ? params.OpenPolicyItemCount : null;
        this.IgnoredPolicyItemCount = 'IgnoredPolicyItemCount' in params ? params.IgnoredPolicyItemCount : null;

    }
}

/**
 * 容器逃逸扫描策略开关信息
 * @class
 */
class EscapeRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则类型   
ESCAPE_HOST_ACESS_FILE:宿主机文件访问逃逸
   ESCAPE_MOUNT_NAMESPACE:MountNamespace逃逸
   ESCAPE_PRIVILEDGE:程序提权逃逸
   ESCAPE_PRIVILEDGE_CONTAINER_START:特权容器启动逃逸
   ESCAPE_MOUNT_SENSITIVE_PTAH:敏感路径挂载
ESCAPE_SYSCALL:Syscall逃逸
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 规则名称
宿主机文件访问逃逸、
Syscall逃逸、
MountNamespace逃逸、
程序提权逃逸、
特权容器启动逃逸、
敏感路径挂载
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否打开：false否 ，true是
         * @type {boolean || null}
         */
        this.IsEnable = null;

        /**
         * 规则组别。RISK_CONTAINER：风险容器，PROCESS_PRIVILEGE：程序特权，CONTAINER_ESCAPE：容器逃逸
         * @type {string || null}
         */
        this.Group = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IsEnable = 'IsEnable' in params ? params.IsEnable : null;
        this.Group = 'Group' in params ? params.Group : null;

    }
}

/**
 * 表示一个合规基线检测定时任务的信息。
 * @class
 */
class CompliancePeriodTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 周期任务的ID
         * @type {number || null}
         */
        this.PeriodTaskId = null;

        /**
         * 资产类型。
ASSET_CONTAINER, 容器
ASSET_IMAGE, 镜像
ASSET_HOST, 主机
ASSET_K8S, K8S资产
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 最近一次触发的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastTriggerTime = null;

        /**
         * 总的检查项数目
         * @type {number || null}
         */
        this.TotalPolicyItemCount = null;

        /**
         * 周期设置
         * @type {CompliancePeriodTaskRule || null}
         */
        this.PeriodRule = null;

        /**
         * 合规标准列表
         * @type {Array.<ComplianceBenchmarkStandard> || null}
         */
        this.BenchmarkStandardSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PeriodTaskId = 'PeriodTaskId' in params ? params.PeriodTaskId : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.LastTriggerTime = 'LastTriggerTime' in params ? params.LastTriggerTime : null;
        this.TotalPolicyItemCount = 'TotalPolicyItemCount' in params ? params.TotalPolicyItemCount : null;

        if (params.PeriodRule) {
            let obj = new CompliancePeriodTaskRule();
            obj.deserialize(params.PeriodRule)
            this.PeriodRule = obj;
        }

        if (params.BenchmarkStandardSet) {
            this.BenchmarkStandardSet = new Array();
            for (let z in params.BenchmarkStandardSet) {
                let obj = new ComplianceBenchmarkStandard();
                obj.deserialize(params.BenchmarkStandardSet[z]);
                this.BenchmarkStandardSet.push(obj);
            }
        }

    }
}

/**
 * RemoveAssetImageRegistryRegistryDetail返回参数结构体
 * @class
 */
class RemoveAssetImageRegistryRegistryDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateAssetImageRegistryRegistryDetail返回参数结构体
 * @class
 */
class UpdateAssetImageRegistryRegistryDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HealthCheckErr = null;

        /**
         * 名称错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NameRepeatErr = null;

        /**
         * 仓库唯一id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RegistryId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HealthCheckErr = 'HealthCheckErr' in params ? params.HealthCheckErr : null;
        this.NameRepeatErr = 'NameRepeatErr' in params ? params.NameRepeatErr : null;
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAbnormalProcessRules返回参数结构体
 * @class
 */
class DeleteAbnormalProcessRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 运行时安全，策略基本信息
 * @class
 */
class RuleBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * true: 默认策略，false:自定义策略
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * 策略生效镜像数量
         * @type {number || null}
         */
        this.EffectImageCount = null;

        /**
         * 策略Id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 策略更新时间, 存在为空的情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 策略名字
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 编辑用户名称
         * @type {string || null}
         */
        this.EditUserName = null;

        /**
         * true: 策略启用，false：策略禁用
         * @type {boolean || null}
         */
        this.IsEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.EffectImageCount = 'EffectImageCount' in params ? params.EffectImageCount : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.EditUserName = 'EditUserName' in params ? params.EditUserName : null;
        this.IsEnable = 'IsEnable' in params ? params.IsEnable : null;

    }
}

/**
 * 容器安全进程列表
 * @class
 */
class ProcessInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进程启动时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 运行用户
         * @type {string || null}
         */
        this.RunAs = null;

        /**
         * 命令行参数
         * @type {string || null}
         */
        this.CmdLine = null;

        /**
         * Exe路径
         * @type {string || null}
         */
        this.Exe = null;

        /**
         * 主机PID
         * @type {number || null}
         */
        this.PID = null;

        /**
         * 容器内pid
         * @type {number || null}
         */
        this.ContainerPID = null;

        /**
         * 容器名称
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 主机id
         * @type {string || null}
         */
        this.HostID = null;

        /**
         * 主机ip
         * @type {string || null}
         */
        this.HostIP = null;

        /**
         * 进程名称
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 外网ip
         * @type {string || null}
         */
        this.PublicIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.RunAs = 'RunAs' in params ? params.RunAs : null;
        this.CmdLine = 'CmdLine' in params ? params.CmdLine : null;
        this.Exe = 'Exe' in params ? params.Exe : null;
        this.PID = 'PID' in params ? params.PID : null;
        this.ContainerPID = 'ContainerPID' in params ? params.ContainerPID : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.HostID = 'HostID' in params ? params.HostID : null;
        this.HostIP = 'HostIP' in params ? params.HostIP : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;

    }
}

/**
 * DescribeReverseShellDetail请求参数结构体
 * @class
 */
class DescribeReverseShellDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件唯一id
         * @type {string || null}
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * ModifyReverseShellStatus请求参数结构体
 * @class
 */
class ModifyReverseShellStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理事件ids
         * @type {Array.<string> || null}
         */
        this.EventIdSet = null;

        /**
         * 标记事件的状态，   
    EVENT_DEALED:事件处理
    EVENT_INGNORE"：事件忽略
     EVENT_DEL:事件删除
     EVENT_ADD_WHITE:事件加白
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 事件备注
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
        this.EventIdSet = 'EventIdSet' in params ? params.EventIdSet : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeAssetImageRiskListExport请求参数结构体
 * @class
 */
class DescribeAssetImageRiskListExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageID = null;

        /**
         * 过滤条件。
<li>Level- String - 是否必填：否 - 风险级别 1,2,3,4，</li>
<li>Behavior - String - 是否必填：否 - 风险行为 1,2,3,4</li>
<li>Type - String - 是否必填：否 - 风险类型  1,2,</li>
         * @type {Array.<AssetFilters> || null}
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
        this.ExportField = 'ExportField' in params ? params.ExportField : null;
        this.ImageID = 'ImageID' in params ? params.ImageID : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeAffectedWorkloadList请求参数结构体
 * @class
 */
class DescribeAffectedWorkloadListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一的检测项的ID
         * @type {number || null}
         */
        this.CheckItemId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每次查询的最大记录数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Name - String
Name 可取值：WorkloadType,ClusterId
         * @type {Array.<ComplianceFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式 asc,desc
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckItemId = 'CheckItemId' in params ? params.CheckItemId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ComplianceFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeAffectedClusterCount请求参数结构体
 * @class
 */
class DescribeAffectedClusterCountRequest extends  AbstractModel {
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
 * DescribeAssetImageRegistryVulListExport请求参数结构体
 * @class
 */
class DescribeAssetImageRegistryVulListExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Level- String - 是否必填：否 - 漏洞级别筛选，</li>
<li>Name - String - 是否必填：否 - 漏洞名称</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 镜像信息
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 镜像标识Id
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportField = 'ExportField' in params ? params.ExportField : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * AddEditRiskSyscallWhiteList请求参数结构体
 * @class
 */
class AddEditRiskSyscallWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仅在添加事件白名单时候使用
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 增加或编辑白名单信。新增白名单时WhiteListInfo.id为空，编辑白名单WhiteListInfo.id不能为空.
         * @type {RiskSyscallWhiteListInfo || null}
         */
        this.WhiteListInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;

        if (params.WhiteListInfo) {
            let obj = new RiskSyscallWhiteListInfo();
            obj.deserialize(params.WhiteListInfo)
            this.WhiteListInfo = obj;
        }

    }
}

/**
 * 容器安全运行时高危系统调用信息
 * @class
 */
class ReverseShellEventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进程名称
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 进程路径
         * @type {string || null}
         */
        this.ProcessPath = null;

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 容器id
         * @type {string || null}
         */
        this.ContainerId = null;

        /**
         * 镜像名
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 容器名
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 生成时间
         * @type {string || null}
         */
        this.FoundTime = null;

        /**
         * 事件解决方案
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 事件详细描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 状态，EVENT_UNDEAL:事件未处理
    EVENT_DEALED:事件已经处理
    EVENT_INGNORE：事件已经忽略
    EVENT_ADD_WHITE：时间已经加白
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 事件id
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 父进程名
         * @type {string || null}
         */
        this.PProcessName = null;

        /**
         * 事件数量
         * @type {number || null}
         */
        this.EventCount = null;

        /**
         * 最近生成时间
         * @type {string || null}
         */
        this.LatestFoundTime = null;

        /**
         * 目标地址
         * @type {string || null}
         */
        this.DstAddress = null;

        /**
         * 网络状态
未隔离  	NORMAL
已隔离		ISOLATED
隔离中		ISOLATING
隔离失败	ISOLATE_FAILED
解除隔离中  RESTORING
解除隔离失败 RESTORE_FAILED
         * @type {string || null}
         */
        this.ContainerNetStatus = null;

        /**
         * 容器子状态
"AGENT_OFFLINE"       //Agent离线
	"NODE_DESTROYED"      //节点已销毁
	"CONTAINER_EXITED"    //容器已退出
	"CONTAINER_DESTROYED" //容器已销毁
	"SHARED_HOST"         // 容器与主机共享网络
	"RESOURCE_LIMIT"      //隔离操作资源超限
	"UNKNOW"              // 原因未知
         * @type {string || null}
         */
        this.ContainerNetSubStatus = null;

        /**
         * 容器隔离操作来源
         * @type {string || null}
         */
        this.ContainerIsolateOperationSrc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.ProcessPath = 'ProcessPath' in params ? params.ProcessPath : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.FoundTime = 'FoundTime' in params ? params.FoundTime : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PProcessName = 'PProcessName' in params ? params.PProcessName : null;
        this.EventCount = 'EventCount' in params ? params.EventCount : null;
        this.LatestFoundTime = 'LatestFoundTime' in params ? params.LatestFoundTime : null;
        this.DstAddress = 'DstAddress' in params ? params.DstAddress : null;
        this.ContainerNetStatus = 'ContainerNetStatus' in params ? params.ContainerNetStatus : null;
        this.ContainerNetSubStatus = 'ContainerNetSubStatus' in params ? params.ContainerNetSubStatus : null;
        this.ContainerIsolateOperationSrc = 'ContainerIsolateOperationSrc' in params ? params.ContainerIsolateOperationSrc : null;

    }
}

/**
 * DescribeRiskSyscallDetail请求参数结构体
 * @class
 */
class DescribeRiskSyscallDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件唯一id
         * @type {string || null}
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * DescribeAbnormalProcessRules请求参数结构体
 * @class
 */
class DescribeAbnormalProcessRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeAssetImageRegistryList返回参数结构体
 * @class
 */
class DescribeAssetImageRegistryListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像仓库列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageRepoInfo> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ImageRepoInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportVirusList返回参数结构体
 * @class
 */
class ExportVirusListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出任务ID，前端拿着任务ID查询任务进度
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageVirusList返回参数结构体
 * @class
 */
class DescribeAssetImageVirusListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像病毒列表
         * @type {Array.<ImageVirusInfo> || null}
         */
        this.List = null;

        /**
         * 总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 病毒扫描状态
0:未扫描
1:扫描中
2:扫描完成
3:扫描出错
4:扫描取消
         * @type {number || null}
         */
        this.VirusScanStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ImageVirusInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.VirusScanStatus = 'VirusScanStatus' in params ? params.VirusScanStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImageRiskSummary请求参数结构体
 * @class
 */
class DescribeImageRiskSummaryRequest extends  AbstractModel {
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
 * ModifyReverseShellStatus返回参数结构体
 * @class
 */
class ModifyReverseShellStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAssetImageScanSetting请求参数结构体
 * @class
 */
class CreateAssetImageScanSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 扫描时间
         * @type {string || null}
         */
        this.ScanTime = null;

        /**
         * 扫描周期
         * @type {number || null}
         */
        this.ScanPeriod = null;

        /**
         * 扫描木马
         * @type {boolean || null}
         */
        this.ScanVirus = null;

        /**
         * 扫描敏感信息
         * @type {boolean || null}
         */
        this.ScanRisk = null;

        /**
         * 扫描漏洞
         * @type {boolean || null}
         */
        this.ScanVul = null;

        /**
         * 全部镜像
         * @type {boolean || null}
         */
        this.All = null;

        /**
         * 自定义镜像
         * @type {Array.<string> || null}
         */
        this.Images = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;
        this.ScanPeriod = 'ScanPeriod' in params ? params.ScanPeriod : null;
        this.ScanVirus = 'ScanVirus' in params ? params.ScanVirus : null;
        this.ScanRisk = 'ScanRisk' in params ? params.ScanRisk : null;
        this.ScanVul = 'ScanVul' in params ? params.ScanVul : null;
        this.All = 'All' in params ? params.All : null;
        this.Images = 'Images' in params ? params.Images : null;

    }
}

/**
 * DescribeAssetSummary返回参数结构体
 * @class
 */
class DescribeAssetSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用个数
         * @type {number || null}
         */
        this.AppCnt = null;

        /**
         * 容器个数
         * @type {number || null}
         */
        this.ContainerCnt = null;

        /**
         * 暂停的容器个数
         * @type {number || null}
         */
        this.ContainerPause = null;

        /**
         * 运行的容器个数
         * @type {number || null}
         */
        this.ContainerRunning = null;

        /**
         * 停止运行的容器个数
         * @type {number || null}
         */
        this.ContainerStop = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 数据库个数
         * @type {number || null}
         */
        this.DbCnt = null;

        /**
         * 镜像个数
         * @type {number || null}
         */
        this.ImageCnt = null;

        /**
         * 主机在线个数
         * @type {number || null}
         */
        this.HostOnline = null;

        /**
         * 主机个数
         * @type {number || null}
         */
        this.HostCnt = null;

        /**
         * 有风险的镜像个数
         * @type {number || null}
         */
        this.ImageHasRiskInfoCnt = null;

        /**
         * 有病毒的镜像个数
         * @type {number || null}
         */
        this.ImageHasVirusCnt = null;

        /**
         * 有漏洞的镜像个数
         * @type {number || null}
         */
        this.ImageHasVulsCnt = null;

        /**
         * 不受信任的镜像个数
         * @type {number || null}
         */
        this.ImageUntrustCnt = null;

        /**
         * 监听的端口个数
         * @type {number || null}
         */
        this.ListenPortCnt = null;

        /**
         * 进程个数
         * @type {number || null}
         */
        this.ProcessCnt = null;

        /**
         * web服务个数
         * @type {number || null}
         */
        this.WebServiceCnt = null;

        /**
         * 最近镜像扫描时间
         * @type {string || null}
         */
        this.LatestImageScanTime = null;

        /**
         * 风险镜像个数
         * @type {number || null}
         */
        this.ImageUnsafeCnt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppCnt = 'AppCnt' in params ? params.AppCnt : null;
        this.ContainerCnt = 'ContainerCnt' in params ? params.ContainerCnt : null;
        this.ContainerPause = 'ContainerPause' in params ? params.ContainerPause : null;
        this.ContainerRunning = 'ContainerRunning' in params ? params.ContainerRunning : null;
        this.ContainerStop = 'ContainerStop' in params ? params.ContainerStop : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DbCnt = 'DbCnt' in params ? params.DbCnt : null;
        this.ImageCnt = 'ImageCnt' in params ? params.ImageCnt : null;
        this.HostOnline = 'HostOnline' in params ? params.HostOnline : null;
        this.HostCnt = 'HostCnt' in params ? params.HostCnt : null;
        this.ImageHasRiskInfoCnt = 'ImageHasRiskInfoCnt' in params ? params.ImageHasRiskInfoCnt : null;
        this.ImageHasVirusCnt = 'ImageHasVirusCnt' in params ? params.ImageHasVirusCnt : null;
        this.ImageHasVulsCnt = 'ImageHasVulsCnt' in params ? params.ImageHasVulsCnt : null;
        this.ImageUntrustCnt = 'ImageUntrustCnt' in params ? params.ImageUntrustCnt : null;
        this.ListenPortCnt = 'ListenPortCnt' in params ? params.ListenPortCnt : null;
        this.ProcessCnt = 'ProcessCnt' in params ? params.ProcessCnt : null;
        this.WebServiceCnt = 'WebServiceCnt' in params ? params.WebServiceCnt : null;
        this.LatestImageScanTime = 'LatestImageScanTime' in params ? params.LatestImageScanTime : null;
        this.ImageUnsafeCnt = 'ImageUnsafeCnt' in params ? params.ImageUnsafeCnt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImageRegistryTimingScanTask返回参数结构体
 * @class
 */
class DescribeImageRegistryTimingScanTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时扫描开关
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 定时任务扫描时间
         * @type {string || null}
         */
        this.ScanTime = null;

        /**
         * 定时扫描间隔
         * @type {number || null}
         */
        this.ScanPeriod = null;

        /**
         * 扫描类型数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ScanType = null;

        /**
         * 扫描全部镜像
         * @type {boolean || null}
         */
        this.All = null;

        /**
         * 自定义扫描镜像
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageInfo> || null}
         */
        this.Images = null;

        /**
         * 自动以扫描镜像Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Id = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;
        this.ScanPeriod = 'ScanPeriod' in params ? params.ScanPeriod : null;
        this.ScanType = 'ScanType' in params ? params.ScanType : null;
        this.All = 'All' in params ? params.All : null;

        if (params.Images) {
            this.Images = new Array();
            for (let z in params.Images) {
                let obj = new ImageInfo();
                obj.deserialize(params.Images[z]);
                this.Images.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetWebServiceList请求参数结构体
 * @class
 */
class DescribeAssetWebServiceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Keywords- String - 是否必填：否 - 模糊查询可选字段</li>
<li>Type- String - 是否必填：否 - 主机运行状态筛选，"Apache"
"Jboss"
"lighttpd"
"Nginx"
"Tomcat"</li>
         * @type {Array.<AssetFilters> || null}
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * ModifyEscapeEventStatus返回参数结构体
 * @class
 */
class ModifyEscapeEventStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckRepeatAssetImageRegistry返回参数结构体
 * @class
 */
class CheckRepeatAssetImageRegistryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否重复
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsRepeat = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsRepeat = 'IsRepeat' in params ? params.IsRepeat : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessControlEventsExport请求参数结构体
 * @class
 */
class DescribeAccessControlEventsExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.ExportField = 'ExportField' in params ? params.ExportField : null;

    }
}

/**
 * DescribeRiskSyscallDetail返回参数结构体
 * @class
 */
class DescribeRiskSyscallDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件基本信息
         * @type {RunTimeEventBaseInfo || null}
         */
        this.EventBaseInfo = null;

        /**
         * 进程信息
         * @type {ProcessDetailInfo || null}
         */
        this.ProcessInfo = null;

        /**
         * 父进程信息
         * @type {ProcessDetailBaseInfo || null}
         */
        this.ParentProcessInfo = null;

        /**
         * 事件描述
         * @type {RiskSyscallEventDescription || null}
         */
        this.EventDetail = null;

        /**
         * 祖先进程信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProcessBaseInfo || null}
         */
        this.AncestorProcessInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventBaseInfo) {
            let obj = new RunTimeEventBaseInfo();
            obj.deserialize(params.EventBaseInfo)
            this.EventBaseInfo = obj;
        }

        if (params.ProcessInfo) {
            let obj = new ProcessDetailInfo();
            obj.deserialize(params.ProcessInfo)
            this.ProcessInfo = obj;
        }

        if (params.ParentProcessInfo) {
            let obj = new ProcessDetailBaseInfo();
            obj.deserialize(params.ParentProcessInfo)
            this.ParentProcessInfo = obj;
        }

        if (params.EventDetail) {
            let obj = new RiskSyscallEventDescription();
            obj.deserialize(params.EventDetail)
            this.EventDetail = obj;
        }

        if (params.AncestorProcessInfo) {
            let obj = new ProcessBaseInfo();
            obj.deserialize(params.AncestorProcessInfo)
            this.AncestorProcessInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 运行时容器反弹shell事件描述信息
 * @class
 */
class ReverseShellEventDescription extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 解决方案
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 事件备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 目标地址
         * @type {string || null}
         */
        this.DstAddress = null;

        /**
         * 事件最后一次处理的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperationTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.DstAddress = 'DstAddress' in params ? params.DstAddress : null;
        this.OperationTime = 'OperationTime' in params ? params.OperationTime : null;

    }
}

/**
 * DescribeAssetImageBindRuleInfo返回参数结构体
 * @class
 */
class DescribeAssetImageBindRuleInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 镜像绑定规则列表
         * @type {Array.<ImagesBindRuleInfo> || null}
         */
        this.ImageBindRuleSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ImageBindRuleSet) {
            this.ImageBindRuleSet = new Array();
            for (let z in params.ImageBindRuleSet) {
                let obj = new ImagesBindRuleInfo();
                obj.deserialize(params.ImageBindRuleSet[z]);
                this.ImageBindRuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScanCompliancePolicyItems返回参数结构体
 * @class
 */
class ScanCompliancePolicyItemsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回重新检测任务的ID。
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
 * DescribeAssetContainerList请求参数结构体
 * @class
 */
class DescribeAssetContainerListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>ContainerName - String - 是否必填：否 - 容器名称模糊搜索</li>
<li>Status - String - 是否必填：否 - 容器运行状态筛选，0："created",1："running", 2："paused", 3："restarting", 4："removing", 5："exited", 6："dead" </li>
<li>Runas - String - 是否必填：否 - 运行用户筛选</li>
<li>ImageName- String - 是否必填：否 - 镜像名称搜索</li>
<li>HostIP- string - 是否必填：否 - 主机ip搜索</li>
<li>OrderBy - String 是否必填：否 -排序字段，支持：cpu_usage, mem_usage的动态排序 ["cpu_usage","+"]  '+'升序、'-'降序</li>
<li>NetStatus - String -是否必填: 否 -  容器网络状态筛选 normal isolated isolating isolate_failed restoring restore_failed</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式 asc,desc
         * @type {string || null}
         */
        this.Order = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeEscapeSafeState返回参数结构体
 * @class
 */
class DescribeEscapeSafeStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unsafe：存在风险，Safe：暂无风险,UnKnown:未知风险
         * @type {string || null}
         */
        this.IsSafe = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsSafe = 'IsSafe' in params ? params.IsSafe : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 运行时安全，异常进程检测策略
 * @class
 */
class AbnormalProcessRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * true:策略启用，false:策略禁用
         * @type {boolean || null}
         */
        this.IsEnable = null;

        /**
         * 生效镜像id，空数组代表全部镜像
         * @type {Array.<string> || null}
         */
        this.ImageIds = null;

        /**
         * 用户策略的子策略数组
         * @type {Array.<AbnormalProcessChildRuleInfo> || null}
         */
        this.ChildRules = null;

        /**
         * 策略名字
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 策略id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 系统策略的子策略数组
         * @type {Array.<AbnormalProcessSystemChildRuleInfo> || null}
         */
        this.SystemChildRules = null;

        /**
         * 是否是系统默认策略
         * @type {boolean || null}
         */
        this.IsDefault = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsEnable = 'IsEnable' in params ? params.IsEnable : null;
        this.ImageIds = 'ImageIds' in params ? params.ImageIds : null;

        if (params.ChildRules) {
            this.ChildRules = new Array();
            for (let z in params.ChildRules) {
                let obj = new AbnormalProcessChildRuleInfo();
                obj.deserialize(params.ChildRules[z]);
                this.ChildRules.push(obj);
            }
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.SystemChildRules) {
            this.SystemChildRules = new Array();
            for (let z in params.SystemChildRules) {
                let obj = new AbnormalProcessSystemChildRuleInfo();
                obj.deserialize(params.SystemChildRules[z]);
                this.SystemChildRules.push(obj);
            }
        }
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

    }
}

/**
 * ScanComplianceAssetsByPolicyItem返回参数结构体
 * @class
 */
class ScanComplianceAssetsByPolicyItemResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回重新检测任务的ID。
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
 * 表示一条白名单记录。
 * @class
 */
class ComplianceWhitelistItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单项的ID。
         * @type {number || null}
         */
        this.WhitelistItemId = null;

        /**
         * 客户检测项的ID。
         * @type {number || null}
         */
        this.CustomerPolicyItemId = null;

        /**
         * 检测项的名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 合规标准的名称。
         * @type {string || null}
         */
        this.StandardName = null;

        /**
         * 合规标准的ID。
         * @type {number || null}
         */
        this.StandardId = null;

        /**
         * 检测项影响的资产的数目。
         * @type {number || null}
         */
        this.AffectedAssetCount = null;

        /**
         * 最后更新的时间
         * @type {string || null}
         */
        this.LastUpdateTime = null;

        /**
         * 加入到白名单的时间
         * @type {string || null}
         */
        this.InsertTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WhitelistItemId = 'WhitelistItemId' in params ? params.WhitelistItemId : null;
        this.CustomerPolicyItemId = 'CustomerPolicyItemId' in params ? params.CustomerPolicyItemId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.StandardName = 'StandardName' in params ? params.StandardName : null;
        this.StandardId = 'StandardId' in params ? params.StandardId : null;
        this.AffectedAssetCount = 'AffectedAssetCount' in params ? params.AffectedAssetCount : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;

    }
}

/**
 * DescribeAssetPortList请求参数结构体
 * @class
 */
class DescribeAssetPortListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>All - String - 是否必填：否 - 模糊查询可选字段</li>
<li>RunAs - String - 是否必填：否 - 运行用户筛选，</li>
<li>ContainerID - String - 是否必填：否 - 容器id</li>
<li>HostID- String - 是否必填：是 - 主机id</li>
<li>HostIP- string - 是否必填：否 - 主机ip搜索</li>
<li>ProcessName- string - 是否必填：否 - 进程名搜索</li>
         * @type {Array.<AssetFilters> || null}
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeComplianceTaskPolicyItemSummaryList返回参数结构体
 * @class
 */
class DescribeComplianceTaskPolicyItemSummaryListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回最近一次合规检查任务的ID。这个任务为本次所展示数据的来源。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 返回检测项的总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回各检测项对应的汇总信息的列表。
         * @type {Array.<CompliancePolicyItemSummary> || null}
         */
        this.PolicyItemSummaryList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.PolicyItemSummaryList) {
            this.PolicyItemSummaryList = new Array();
            for (let z in params.PolicyItemSummaryList) {
                let obj = new CompliancePolicyItemSummary();
                obj.deserialize(params.PolicyItemSummaryList[z]);
                this.PolicyItemSummaryList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表示容器资产专属的详情。
 * @class
 */
class ComplianceContainerDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器在主机上的ID。
         * @type {string || null}
         */
        this.ContainerId = null;

        /**
         * 容器所属的Pod的名称。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;
        this.PodName = 'PodName' in params ? params.PodName : null;

    }
}

/**
 * DescribeReverseShellEvents请求参数结构体
 * @class
 */
class DescribeReverseShellEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeAbnormalProcessRuleDetail请求参数结构体
 * @class
 */
class DescribeAbnormalProcessRuleDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略唯一id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 镜像id, 在添加白名单的时候使用
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * SyncAssetImageRegistryAsset请求参数结构体
 * @class
 */
class SyncAssetImageRegistryAssetRequest extends  AbstractModel {
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
 * 集群检查任务入参
 * @class
 */
class ClusterCheckTaskItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定要扫描的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群所属地域
         * @type {string || null}
         */
        this.ClusterRegion = null;

        /**
         * 指定要扫描的节点IP
         * @type {string || null}
         */
        this.NodeIp = null;

        /**
         * 按照要扫描的workload名字
         * @type {string || null}
         */
        this.WorkloadName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterRegion = 'ClusterRegion' in params ? params.ClusterRegion : null;
        this.NodeIp = 'NodeIp' in params ? params.NodeIp : null;
        this.WorkloadName = 'WorkloadName' in params ? params.WorkloadName : null;

    }
}

/**
 * DescribeAffectedClusterCount返回参数结构体
 * @class
 */
class DescribeAffectedClusterCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 严重风险的集群数量
         * @type {number || null}
         */
        this.SeriousRiskClusterCount = null;

        /**
         * 高危风险的集群数量
         * @type {number || null}
         */
        this.HighRiskClusterCount = null;

        /**
         * 中危风险的集群数量
         * @type {number || null}
         */
        this.MiddleRiskClusterCount = null;

        /**
         * 低危风险的集群数量
         * @type {number || null}
         */
        this.HintRiskClusterCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SeriousRiskClusterCount = 'SeriousRiskClusterCount' in params ? params.SeriousRiskClusterCount : null;
        this.HighRiskClusterCount = 'HighRiskClusterCount' in params ? params.HighRiskClusterCount : null;
        this.MiddleRiskClusterCount = 'MiddleRiskClusterCount' in params ? params.MiddleRiskClusterCount : null;
        this.HintRiskClusterCount = 'HintRiskClusterCount' in params ? params.HintRiskClusterCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RenewImageAuthorizeState请求参数结构体
 * @class
 */
class RenewImageAuthorizeStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否全部未授权镜像
         * @type {boolean || null}
         */
        this.AllImages = null;

        /**
         * 镜像ids
         * @type {Array.<string> || null}
         */
        this.ImageIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllImages = 'AllImages' in params ? params.AllImages : null;
        this.ImageIds = 'ImageIds' in params ? params.ImageIds : null;

    }
}

/**
 * CreateAssetImageRegistryScanTaskOneKey请求参数结构体
 * @class
 */
class CreateAssetImageRegistryScanTaskOneKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否扫描全部镜像
         * @type {boolean || null}
         */
        this.All = null;

        /**
         * 扫描的镜像列表
         * @type {Array.<ImageInfo> || null}
         */
        this.Images = null;

        /**
         * 扫描类型数组
         * @type {Array.<string> || null}
         */
        this.ScanType = null;

        /**
         * 扫描的镜像列表Id
         * @type {Array.<number> || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.All = 'All' in params ? params.All : null;

        if (params.Images) {
            this.Images = new Array();
            for (let z in params.Images) {
                let obj = new ImageInfo();
                obj.deserialize(params.Images[z]);
                this.Images.push(obj);
            }
        }
        this.ScanType = 'ScanType' in params ? params.ScanType : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ModifyEscapeEventStatus请求参数结构体
 * @class
 */
class ModifyEscapeEventStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理事件ids
         * @type {Array.<string> || null}
         */
        this.EventIdSet = null;

        /**
         * 标记事件的状态：EVENT_UNDEAL:未处理（取消忽略），EVENT_DEALED:已处理，EVENT_IGNORE:忽略，EVENT_DELETE：已删除
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 备注
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
        this.EventIdSet = 'EventIdSet' in params ? params.EventIdSet : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeAssetImageBindRuleInfo请求参数结构体
 * @class
 */
class DescribeAssetImageBindRuleInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"EventType","Values":[""]}]
EventType取值：
"FILE_ABNORMAL_READ" 访问控制
"MALICE_PROCESS_START" 恶意进程启动
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * 容器安全 主机镜像关联列表
 * @class
 */
class ImageHost extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageID = null;

        /**
         * 主机id
         * @type {string || null}
         */
        this.HostID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageID = 'ImageID' in params ? params.ImageID : null;
        this.HostID = 'HostID' in params ? params.HostID : null;

    }
}

/**
 * DescribeAssetContainerList返回参数结构体
 * @class
 */
class DescribeAssetContainerListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器列表
         * @type {Array.<ContainerInfo> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ContainerInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVirusMonitorSetting返回参数结构体
 * @class
 */
class DescribeVirusMonitorSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启实时监控
         * @type {boolean || null}
         */
        this.EnableScan = null;

        /**
         * 扫描全部路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ScanPathAll = null;

        /**
         * 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanPathType = null;

        /**
         * 自选排除或扫描的地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ScanPath = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableScan = 'EnableScan' in params ? params.EnableScan : null;
        this.ScanPathAll = 'ScanPathAll' in params ? params.ScanPathAll : null;
        this.ScanPathType = 'ScanPathType' in params ? params.ScanPathType : null;
        this.ScanPath = 'ScanPath' in params ? params.ScanPath : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeContainerSecEventSummary请求参数结构体
 * @class
 */
class DescribeContainerSecEventSummaryRequest extends  AbstractModel {
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
 * DescribeAssetImageRegistrySummary返回参数结构体
 * @class
 */
class DescribeAssetImageRegistrySummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImageAuthorizedInfo返回参数结构体
 * @class
 */
class DescribeImageAuthorizedInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总共有效的镜像授权数
         * @type {number || null}
         */
        this.TotalAuthorizedCnt = null;

        /**
         * 已使用镜像授权数
         * @type {number || null}
         */
        this.UsedAuthorizedCnt = null;

        /**
         * 已开启扫描镜像数
         * @type {number || null}
         */
        this.ScannedImageCnt = null;

        /**
         * 未开启扫描镜像数
         * @type {number || null}
         */
        this.NotScannedImageCnt = null;

        /**
         * 本地未开启扫描镜像数
         * @type {number || null}
         */
        this.NotScannedLocalImageCnt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalAuthorizedCnt = 'TotalAuthorizedCnt' in params ? params.TotalAuthorizedCnt : null;
        this.UsedAuthorizedCnt = 'UsedAuthorizedCnt' in params ? params.UsedAuthorizedCnt : null;
        this.ScannedImageCnt = 'ScannedImageCnt' in params ? params.ScannedImageCnt : null;
        this.NotScannedImageCnt = 'NotScannedImageCnt' in params ? params.NotScannedImageCnt : null;
        this.NotScannedLocalImageCnt = 'NotScannedLocalImageCnt' in params ? params.NotScannedLocalImageCnt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAbnormalProcessEvents请求参数结构体
 * @class
 */
class DescribeAbnormalProcessEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * ModifyAbnormalProcessRuleStatus返回参数结构体
 * @class
 */
class ModifyAbnormalProcessRuleStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVirusList请求参数结构体
 * @class
 */
class DescribeVirusListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>FileName - String - 是否必填：否 - 文件名称</li>
<li>FilePath - String - 是否必填：否 - 文件路径</li>
<li>VirusName - String - 是否必填：否 - 病毒名称</li>
<li>ContainerName- String - 是否必填：是 - 容器名称</li>
<li>ContainerId- string - 是否必填：否 - 容器id</li>
<li>ImageName- string - 是否必填：否 - 镜像名称</li>
<li>ImageId- string - 是否必填：否 - 镜像id</li>
<li>IsRealTime- int - 是否必填：否 - 过滤是否实时监控数据</li>
<li>TaskId- string - 是否必填：否 - 任务ID</li>
<li>ContainerNetStatus - String -是否必填: 否 -  容器网络状态筛选 NORMAL ISOLATED ISOLATING RESTORING RESTORE_FAILED</li>
<li>TimeRange - string -是否必填: 否 - 时间范围筛选 ["2022-03-31 16:55:00", "2022-03-31 17:00:00"]</li>
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序方式
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeComplianceAssetList请求参数结构体
 * @class
 */
class DescribeComplianceAssetListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产类型列表。
         * @type {Array.<string> || null}
         */
        this.AssetTypeSet = null;

        /**
         * 起始偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回的数据量，默认为10，最大为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询过滤器
         * @type {Array.<ComplianceFilters> || null}
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
        this.AssetTypeSet = 'AssetTypeSet' in params ? params.AssetTypeSet : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ComplianceFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * ModifyVirusScanSetting返回参数结构体
 * @class
 */
class ModifyVirusScanSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器安全镜像漏洞
 * @class
 */
class ImagesVul extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞id
         * @type {string || null}
         */
        this.CVEID = null;

        /**
         * 漏洞名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 组件
         * @type {string || null}
         */
        this.Component = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 分类
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 分类2
         * @type {string || null}
         */
        this.CategoryType = null;

        /**
         * 风险等级
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Des = null;

        /**
         * 解决方案
         * @type {string || null}
         */
        this.OfficialSolution = null;

        /**
         * 引用
         * @type {string || null}
         */
        this.Reference = null;

        /**
         * 防御方案
         * @type {string || null}
         */
        this.DefenseSolution = null;

        /**
         * 提交时间
         * @type {string || null}
         */
        this.SubmitTime = null;

        /**
         * CVSS V3分数
         * @type {number || null}
         */
        this.CVSSV3Score = null;

        /**
         * CVSS V3描述
         * @type {string || null}
         */
        this.CVSSV3Desc = null;

        /**
         * 是否是重点关注：true：是，false：不是
         * @type {boolean || null}
         */
        this.IsSuggest = null;

        /**
         * 修复版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FixedVersions = null;

        /**
         * 漏洞标签:"CanBeFixed","DynamicLevelPoc","DynamicLevelExp"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
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
        this.CVEID = 'CVEID' in params ? params.CVEID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Component = 'Component' in params ? params.Component : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.CategoryType = 'CategoryType' in params ? params.CategoryType : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Des = 'Des' in params ? params.Des : null;
        this.OfficialSolution = 'OfficialSolution' in params ? params.OfficialSolution : null;
        this.Reference = 'Reference' in params ? params.Reference : null;
        this.DefenseSolution = 'DefenseSolution' in params ? params.DefenseSolution : null;
        this.SubmitTime = 'SubmitTime' in params ? params.SubmitTime : null;
        this.CVSSV3Score = 'CVSSV3Score' in params ? params.CVSSV3Score : null;
        this.CVSSV3Desc = 'CVSSV3Desc' in params ? params.CVSSV3Desc : null;
        this.IsSuggest = 'IsSuggest' in params ? params.IsSuggest : null;
        this.FixedVersions = 'FixedVersions' in params ? params.FixedVersions : null;
        this.Tag = 'Tag' in params ? params.Tag : null;

    }
}

/**
 * ModifyVirusMonitorSetting请求参数结构体
 * @class
 */
class ModifyVirusMonitorSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启定期扫描
         * @type {boolean || null}
         */
        this.EnableScan = null;

        /**
         * 扫描全部路径
         * @type {boolean || null}
         */
        this.ScanPathAll = null;

        /**
         * 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径(扫描范围只能小于等于1)
         * @type {number || null}
         */
        this.ScanPathType = null;

        /**
         * 自选排除或扫描的地址
         * @type {Array.<string> || null}
         */
        this.ScanPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableScan = 'EnableScan' in params ? params.EnableScan : null;
        this.ScanPathAll = 'ScanPathAll' in params ? params.ScanPathAll : null;
        this.ScanPathType = 'ScanPathType' in params ? params.ScanPathType : null;
        this.ScanPath = 'ScanPath' in params ? params.ScanPath : null;

    }
}

/**
 * ScanComplianceAssetsByPolicyItem请求参数结构体
 * @class
 */
class ScanComplianceAssetsByPolicyItemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定的检测项的ID
         * @type {number || null}
         */
        this.CustomerPolicyItemId = null;

        /**
         * 要重新扫描的客户资产项ID的列表。
         * @type {Array.<number> || null}
         */
        this.CustomerAssetIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerPolicyItemId = 'CustomerPolicyItemId' in params ? params.CustomerPolicyItemId : null;
        this.CustomerAssetIdSet = 'CustomerAssetIdSet' in params ? params.CustomerAssetIdSet : null;

    }
}

/**
 * DescribeEscapeEventInfo返回参数结构体
 * @class
 */
class DescribeEscapeEventInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 逃逸事件数组
         * @type {Array.<EscapeEventInfo> || null}
         */
        this.EventSet = null;

        /**
         * 事件总数量
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

        if (params.EventSet) {
            this.EventSet = new Array();
            for (let z in params.EventSet) {
                let obj = new EscapeEventInfo();
                obj.deserialize(params.EventSet[z]);
                this.EventSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集群资产返回的结构体
 * @class
 */
class ClusterInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名字
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群版本
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * 集群操作系统
         * @type {string || null}
         */
        this.ClusterOs = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群节点数
         * @type {number || null}
         */
        this.ClusterNodeNum = null;

        /**
         * 集群区域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 监控组件的状态，为Defender_Uninstall、Defender_Normal、Defender_Error、Defender_Installing
         * @type {string || null}
         */
        this.DefenderStatus = null;

        /**
         * 集群状态
         * @type {string || null}
         */
        this.ClusterStatus = null;

        /**
         * 集群的检测模式，为Cluster_Normal或者Cluster_Actived.
         * @type {string || null}
         */
        this.ClusterCheckMode = null;

        /**
         * 是否自动定期检测
         * @type {boolean || null}
         */
        this.ClusterAutoCheck = null;

        /**
         * 防护容器部署失败原因，为UserDaemonSetNotReady时,和UnreadyNodeNum转成"N个节点防御容器为就绪"，其他错误直接展示
         * @type {string || null}
         */
        this.DefenderErrorReason = null;

        /**
         * 防御容器没有ready状态的节点数量
         * @type {number || null}
         */
        this.UnreadyNodeNum = null;

        /**
         * 严重风险检查项的数量
         * @type {number || null}
         */
        this.SeriousRiskCount = null;

        /**
         * 高风险检查项的数量
         * @type {number || null}
         */
        this.HighRiskCount = null;

        /**
         * 中风险检查项的数量
         * @type {number || null}
         */
        this.MiddleRiskCount = null;

        /**
         * 提示风险检查项的数量
         * @type {number || null}
         */
        this.HintRiskCount = null;

        /**
         * 检查失败原因
         * @type {string || null}
         */
        this.CheckFailReason = null;

        /**
         * 检查状态,为Task_Running, NoRisk, HasRisk, Uncheck, Task_Error
         * @type {string || null}
         */
        this.CheckStatus = null;

        /**
         * 任务创建时间,检查时间
         * @type {string || null}
         */
        this.TaskCreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;
        this.ClusterOs = 'ClusterOs' in params ? params.ClusterOs : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterNodeNum = 'ClusterNodeNum' in params ? params.ClusterNodeNum : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.DefenderStatus = 'DefenderStatus' in params ? params.DefenderStatus : null;
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.ClusterCheckMode = 'ClusterCheckMode' in params ? params.ClusterCheckMode : null;
        this.ClusterAutoCheck = 'ClusterAutoCheck' in params ? params.ClusterAutoCheck : null;
        this.DefenderErrorReason = 'DefenderErrorReason' in params ? params.DefenderErrorReason : null;
        this.UnreadyNodeNum = 'UnreadyNodeNum' in params ? params.UnreadyNodeNum : null;
        this.SeriousRiskCount = 'SeriousRiskCount' in params ? params.SeriousRiskCount : null;
        this.HighRiskCount = 'HighRiskCount' in params ? params.HighRiskCount : null;
        this.MiddleRiskCount = 'MiddleRiskCount' in params ? params.MiddleRiskCount : null;
        this.HintRiskCount = 'HintRiskCount' in params ? params.HintRiskCount : null;
        this.CheckFailReason = 'CheckFailReason' in params ? params.CheckFailReason : null;
        this.CheckStatus = 'CheckStatus' in params ? params.CheckStatus : null;
        this.TaskCreateTime = 'TaskCreateTime' in params ? params.TaskCreateTime : null;

    }
}

/**
 * AddAssetImageRegistryRegistryDetail请求参数结构体
 * @class
 */
class AddAssetImageRegistryRegistryDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 仓库url
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 仓库类型，列表：harbor
         * @type {string || null}
         */
        this.RegistryType = null;

        /**
         * 网络类型，列表：public（公网）
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 仓库版本
         * @type {string || null}
         */
        this.RegistryVersion = null;

        /**
         * 区域，列表：default（默认）
         * @type {string || null}
         */
        this.RegistryRegion = null;

        /**
         * 限速
         * @type {number || null}
         */
        this.SpeedLimit = null;

        /**
         * 安全模式（证书校验）：0（默认） 非安全模式（跳过证书校验）：1
         * @type {number || null}
         */
        this.Insecure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.RegistryType = 'RegistryType' in params ? params.RegistryType : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.RegistryVersion = 'RegistryVersion' in params ? params.RegistryVersion : null;
        this.RegistryRegion = 'RegistryRegion' in params ? params.RegistryRegion : null;
        this.SpeedLimit = 'SpeedLimit' in params ? params.SpeedLimit : null;
        this.Insecure = 'Insecure' in params ? params.Insecure : null;

    }
}

/**
 * DescribeAssetImageHostList请求参数结构体
 * @class
 */
class DescribeAssetImageHostListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件 支持ImageID,HostID
         * @type {Array.<AssetFilters> || null}
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 容器运行时安全异常进程信息
 * @class
 */
class AbnormalProcessEventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进程目录
         * @type {string || null}
         */
        this.ProcessPath = null;

        /**
         * 事件类型，MALICE_PROCESS_START:恶意进程启动
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * 命中规则名称，PROXY_TOOL：代理软件，TRANSFER_CONTROL：横向渗透，ATTACK_CMD：恶意命令，REVERSE_SHELL：反弹shell，FILELESS：无文件程序执行，RISK_CMD：高危命令，ABNORMAL_CHILD_PROC：敏感服务异常子进程启动，USER_DEFINED_RULE：用户自定义规则
         * @type {string || null}
         */
        this.MatchRuleName = null;

        /**
         * 生成时间
         * @type {string || null}
         */
        this.FoundTime = null;

        /**
         * 容器名
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 镜像名
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 动作执行结果，    BEHAVIOR_NONE: 无
    BEHAVIOR_ALERT: 告警
    BEHAVIOR_RELEASE：放行
    BEHAVIOR_HOLDUP_FAILED:拦截失败
    BEHAVIOR_HOLDUP_SUCCESSED：拦截失败
         * @type {string || null}
         */
        this.Behavior = null;

        /**
         * 状态，EVENT_UNDEAL:事件未处理
    EVENT_DEALED:事件已经处理
    EVENT_INGNORE：事件已经忽略
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 事件记录的唯一id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 镜像id，用于跳转
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 容器id，用于跳转
         * @type {string || null}
         */
        this.ContainerId = null;

        /**
         * 事件解决方案
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 事件详细描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 命中策略id
         * @type {string || null}
         */
        this.MatchRuleId = null;

        /**
         * 命中规则行为：
RULE_MODE_RELEASE 放行
RULE_MODE_ALERT  告警
RULE_MODE_HOLDUP 拦截
         * @type {string || null}
         */
        this.MatchAction = null;

        /**
         * 命中规则进程信息
         * @type {string || null}
         */
        this.MatchProcessPath = null;

        /**
         * 规则是否存在
         * @type {boolean || null}
         */
        this.RuleExist = null;

        /**
         * 事件数量
         * @type {number || null}
         */
        this.EventCount = null;

        /**
         * 最近生成时间
         * @type {string || null}
         */
        this.LatestFoundTime = null;

        /**
         * 规则组Id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 命中策略名称：SYSTEM_DEFINED_RULE （系统策略）或  用户自定义的策略名字
         * @type {string || null}
         */
        this.MatchGroupName = null;

        /**
         * 命中规则等级，HIGH：高危，MIDDLE：中危，LOW：低危。
         * @type {string || null}
         */
        this.MatchRuleLevel = null;

        /**
         * 网络状态
未隔离  	NORMAL
已隔离		ISOLATED
隔离中		ISOLATING
隔离失败	ISOLATE_FAILED
解除隔离中  RESTORING
解除隔离失败 RESTORE_FAILED
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerNetStatus = null;

        /**
         * 容器子状态
"AGENT_OFFLINE"       //Agent离线
"NODE_DESTROYED"      //节点已销毁
"CONTAINER_EXITED"    //容器已退出
"CONTAINER_DESTROYED" //容器已销毁
"SHARED_HOST"         // 容器与主机共享网络
"RESOURCE_LIMIT"      //隔离操作资源超限
"UNKNOW"              // 原因未知
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerNetSubStatus = null;

        /**
         * 容器隔离操作来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerIsolateOperationSrc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProcessPath = 'ProcessPath' in params ? params.ProcessPath : null;
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.MatchRuleName = 'MatchRuleName' in params ? params.MatchRuleName : null;
        this.FoundTime = 'FoundTime' in params ? params.FoundTime : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.Behavior = 'Behavior' in params ? params.Behavior : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.MatchRuleId = 'MatchRuleId' in params ? params.MatchRuleId : null;
        this.MatchAction = 'MatchAction' in params ? params.MatchAction : null;
        this.MatchProcessPath = 'MatchProcessPath' in params ? params.MatchProcessPath : null;
        this.RuleExist = 'RuleExist' in params ? params.RuleExist : null;
        this.EventCount = 'EventCount' in params ? params.EventCount : null;
        this.LatestFoundTime = 'LatestFoundTime' in params ? params.LatestFoundTime : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.MatchGroupName = 'MatchGroupName' in params ? params.MatchGroupName : null;
        this.MatchRuleLevel = 'MatchRuleLevel' in params ? params.MatchRuleLevel : null;
        this.ContainerNetStatus = 'ContainerNetStatus' in params ? params.ContainerNetStatus : null;
        this.ContainerNetSubStatus = 'ContainerNetSubStatus' in params ? params.ContainerNetSubStatus : null;
        this.ContainerIsolateOperationSrc = 'ContainerIsolateOperationSrc' in params ? params.ContainerIsolateOperationSrc : null;

    }
}

/**
 * DescribeCompliancePeriodTaskList返回参数结构体
 * @class
 */
class DescribeCompliancePeriodTaskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时任务的总量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 定时任务信息的列表
         * @type {Array.<CompliancePeriodTask> || null}
         */
        this.PeriodTaskSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.PeriodTaskSet) {
            this.PeriodTaskSet = new Array();
            for (let z in params.PeriodTaskSet) {
                let obj = new CompliancePeriodTask();
                obj.deserialize(params.PeriodTaskSet[z]);
                this.PeriodTaskSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageScanSetting请求参数结构体
 * @class
 */
class DescribeAssetImageScanSettingRequest extends  AbstractModel {
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
 * 容器运行时安全，访问控制系统策略的子策略信息
 * @class
 */
class AccessControlSystemChildRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子策略Id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 策略模式,  RULE_MODE_RELEASE: 放行
   RULE_MODE_ALERT: 告警
   RULE_MODE_HOLDUP:拦截
         * @type {string || null}
         */
        this.RuleMode = null;

        /**
         * 子策略状态，true为开启，false为关闭
         * @type {boolean || null}
         */
        this.IsEnable = null;

        /**
         * 子策略检测的入侵行为类型
CHANGE_CRONTAB：篡改计划任务
CHANGE_SYS_BIN：篡改系统程序
CHANGE_USRCFG：篡改用户配置
         * @type {string || null}
         */
        this.RuleType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleMode = 'RuleMode' in params ? params.RuleMode : null;
        this.IsEnable = 'IsEnable' in params ? params.IsEnable : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;

    }
}

/**
 * 容器运行时安全访问控制事件信息
 * @class
 */
class AccessControlEventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进程名称
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 命中规则名称
         * @type {string || null}
         */
        this.MatchRuleName = null;

        /**
         * 生成时间
         * @type {string || null}
         */
        this.FoundTime = null;

        /**
         * 容器名
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 镜像名
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 动作执行结果，   BEHAVIOR_NONE: 无
    BEHAVIOR_ALERT: 告警
    BEHAVIOR_RELEASE：放行
    BEHAVIOR_HOLDUP_FAILED:拦截失败
    BEHAVIOR_HOLDUP_SUCCESSED：拦截失败
         * @type {string || null}
         */
        this.Behavior = null;

        /**
         * 状态0:未处理  “EVENT_UNDEAL”:事件未处理
    "EVENT_DEALED":事件已经处理
    "EVENT_INGNORE"：事件已经忽略
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 事件记录的唯一id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 事件类型， FILE_ABNORMAL_READ:文件异常读取
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * 镜像id, 用于跳转
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 容器id, 用于跳转
         * @type {string || null}
         */
        this.ContainerId = null;

        /**
         * 事件解决方案
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 事件详细描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 命中策略id
         * @type {string || null}
         */
        this.MatchRuleId = null;

        /**
         * 命中规则行为：
RULE_MODE_RELEASE 放行
RULE_MODE_ALERT  告警
RULE_MODE_HOLDUP 拦截
         * @type {string || null}
         */
        this.MatchAction = null;

        /**
         * 命中规则进程信息
         * @type {string || null}
         */
        this.MatchProcessPath = null;

        /**
         * 命中规则文件信息
         * @type {string || null}
         */
        this.MatchFilePath = null;

        /**
         * 文件路径，包含名字
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * 规则是否存在
         * @type {boolean || null}
         */
        this.RuleExist = null;

        /**
         * 事件数量
         * @type {number || null}
         */
        this.EventCount = null;

        /**
         * 最近生成时间
         * @type {string || null}
         */
        this.LatestFoundTime = null;

        /**
         * 规则组id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 网络状态
未隔离  	NORMAL
已隔离		ISOLATED
隔离中		ISOLATING
隔离失败	ISOLATE_FAILED
解除隔离中  RESTORING
解除隔离失败 RESTORE_FAILED
         * @type {string || null}
         */
        this.ContainerNetStatus = null;

        /**
         * 容器子状态
"AGENT_OFFLINE"       //Agent离线
"NODE_DESTROYED"      //节点已销毁
"CONTAINER_EXITED"    //容器已退出
"CONTAINER_DESTROYED" //容器已销毁
"SHARED_HOST"         // 容器与主机共享网络
"RESOURCE_LIMIT"      //隔离操作资源超限
"UNKNOW"              // 原因未知
         * @type {string || null}
         */
        this.ContainerNetSubStatus = null;

        /**
         * 容器隔离操作来源
         * @type {string || null}
         */
        this.ContainerIsolateOperationSrc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.MatchRuleName = 'MatchRuleName' in params ? params.MatchRuleName : null;
        this.FoundTime = 'FoundTime' in params ? params.FoundTime : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.Behavior = 'Behavior' in params ? params.Behavior : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.MatchRuleId = 'MatchRuleId' in params ? params.MatchRuleId : null;
        this.MatchAction = 'MatchAction' in params ? params.MatchAction : null;
        this.MatchProcessPath = 'MatchProcessPath' in params ? params.MatchProcessPath : null;
        this.MatchFilePath = 'MatchFilePath' in params ? params.MatchFilePath : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.RuleExist = 'RuleExist' in params ? params.RuleExist : null;
        this.EventCount = 'EventCount' in params ? params.EventCount : null;
        this.LatestFoundTime = 'LatestFoundTime' in params ? params.LatestFoundTime : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.ContainerNetStatus = 'ContainerNetStatus' in params ? params.ContainerNetStatus : null;
        this.ContainerNetSubStatus = 'ContainerNetSubStatus' in params ? params.ContainerNetSubStatus : null;
        this.ContainerIsolateOperationSrc = 'ContainerIsolateOperationSrc' in params ? params.ContainerIsolateOperationSrc : null;

    }
}

/**
 * DescribeClusterSummary返回参数结构体
 * @class
 */
class DescribeClusterSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 有风险的集群数量
         * @type {number || null}
         */
        this.RiskClusterCount = null;

        /**
         * 未检查的集群数量
         * @type {number || null}
         */
        this.UncheckClusterCount = null;

        /**
         * 托管集群数量
         * @type {number || null}
         */
        this.ManagedClusterCount = null;

        /**
         * 独立集群数量
         * @type {number || null}
         */
        this.IndependentClusterCount = null;

        /**
         * 无风险的集群数量
         * @type {number || null}
         */
        this.NoRiskClusterCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RiskClusterCount = 'RiskClusterCount' in params ? params.RiskClusterCount : null;
        this.UncheckClusterCount = 'UncheckClusterCount' in params ? params.UncheckClusterCount : null;
        this.ManagedClusterCount = 'ManagedClusterCount' in params ? params.ManagedClusterCount : null;
        this.IndependentClusterCount = 'IndependentClusterCount' in params ? params.IndependentClusterCount : null;
        this.NoRiskClusterCount = 'NoRiskClusterCount' in params ? params.NoRiskClusterCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeValueAddedSrvInfo请求参数结构体
 * @class
 */
class DescribeValueAddedSrvInfoRequest extends  AbstractModel {
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
 * DescribeCompliancePolicyItemAffectedSummary返回参数结构体
 * @class
 */
class DescribeCompliancePolicyItemAffectedSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回各检测项影响的资产的汇总信息。
         * @type {CompliancePolicyItemSummary || null}
         */
        this.PolicyItemSummary = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PolicyItemSummary) {
            let obj = new CompliancePolicyItemSummary();
            obj.deserialize(params.PolicyItemSummary)
            this.PolicyItemSummary = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRiskSyscallStatus返回参数结构体
 * @class
 */
class ModifyRiskSyscallStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 运行时安全事件基本信息
 * @class
 */
class RunTimeEventBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件唯一ID
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 事件发现时间
         * @type {string || null}
         */
        this.FoundTime = null;

        /**
         * 容器id
         * @type {string || null}
         */
        this.ContainerId = null;

        /**
         * 容器名称
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 节点名称
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * Pod名称
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 状态， “EVENT_UNDEAL”:事件未处理
    "EVENT_DEALED":事件已经处理
    "EVENT_INGNORE"：事件已经忽略
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 事件名称：
宿主机文件访问逃逸、
Syscall逃逸、
MountNamespace逃逸、
程序提权逃逸、
特权容器启动逃逸、
敏感路径挂载
恶意进程启动
文件篡改
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * 事件类型
   ESCAPE_HOST_ACESS_FILE:宿主机文件访问逃逸
   ESCAPE_MOUNT_NAMESPACE:MountNamespace逃逸
   ESCAPE_PRIVILEDGE:程序提权逃逸
   ESCAPE_PRIVILEDGE_CONTAINER_START:特权容器启动逃逸
   ESCAPE_MOUNT_SENSITIVE_PTAH:敏感路径挂载
   ESCAPE_SYSCALL:Syscall逃逸
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * 事件数量
         * @type {number || null}
         */
        this.EventCount = null;

        /**
         * 最近生成时间
         * @type {string || null}
         */
        this.LatestFoundTime = null;

        /**
         * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostIP = null;

        /**
         * 外网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientIP = null;

        /**
         * 网络状态
未隔离  	NORMAL
已隔离		ISOLATED
隔离中		ISOLATING
隔离失败	ISOLATE_FAILED
解除隔离中  RESTORING
解除隔离失败 RESTORE_FAILED
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerNetStatus = null;

        /**
         * 容器子状态
"AGENT_OFFLINE"       //Agent离线
"NODE_DESTROYED"      //节点已销毁
"CONTAINER_EXITED"    //容器已退出
"CONTAINER_DESTROYED" //容器已销毁
"SHARED_HOST"         // 容器与主机共享网络
"RESOURCE_LIMIT"      //隔离操作资源超限
"UNKNOW"              // 原因未知
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerNetSubStatus = null;

        /**
         * 容器隔离操作来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerIsolateOperationSrc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.FoundTime = 'FoundTime' in params ? params.FoundTime : null;
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.EventCount = 'EventCount' in params ? params.EventCount : null;
        this.LatestFoundTime = 'LatestFoundTime' in params ? params.LatestFoundTime : null;
        this.HostIP = 'HostIP' in params ? params.HostIP : null;
        this.ClientIP = 'ClientIP' in params ? params.ClientIP : null;
        this.ContainerNetStatus = 'ContainerNetStatus' in params ? params.ContainerNetStatus : null;
        this.ContainerNetSubStatus = 'ContainerNetSubStatus' in params ? params.ContainerNetSubStatus : null;
        this.ContainerIsolateOperationSrc = 'ContainerIsolateOperationSrc' in params ? params.ContainerIsolateOperationSrc : null;

    }
}

/**
 * DescribeReverseShellWhiteLists返回参数结构体
 * @class
 */
class DescribeReverseShellWhiteListsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 白名单信息列表
         * @type {Array.<ReverseShellWhiteListBaseInfo> || null}
         */
        this.WhiteListSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.WhiteListSet) {
            this.WhiteListSet = new Array();
            for (let z in params.WhiteListSet) {
                let obj = new ReverseShellWhiteListBaseInfo();
                obj.deserialize(params.WhiteListSet[z]);
                this.WhiteListSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAssetImageRegistryScanStopOneKey请求参数结构体
 * @class
 */
class ModifyAssetImageRegistryScanStopOneKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否扫描全部镜像
         * @type {boolean || null}
         */
        this.All = null;

        /**
         * 扫描的镜像列表
         * @type {Array.<ImageInfo> || null}
         */
        this.Images = null;

        /**
         * 扫描的镜像列表Id
         * @type {Array.<number> || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.All = 'All' in params ? params.All : null;

        if (params.Images) {
            this.Images = new Array();
            for (let z in params.Images) {
                let obj = new ImageInfo();
                obj.deserialize(params.Images[z]);
                this.Images.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeExportJobResult请求参数结构体
 * @class
 */
class DescribeExportJobResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CreateExportComplianceStatusListJob返回的JobId字段的值
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * 基本镜像信息
 * @class
 */
class ImageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像tag
         * @type {string || null}
         */
        this.ImageTag = null;

        /**
         * 强制扫描
         * @type {string || null}
         */
        this.Force = null;

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageDigest = null;

        /**
         * 仓库类型
         * @type {string || null}
         */
        this.RegistryType = null;

        /**
         * 镜像仓库地址
         * @type {string || null}
         */
        this.ImageRepoAddress = null;

        /**
         * 实例id
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
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageTag = 'ImageTag' in params ? params.ImageTag : null;
        this.Force = 'Force' in params ? params.Force : null;
        this.ImageDigest = 'ImageDigest' in params ? params.ImageDigest : null;
        this.RegistryType = 'RegistryType' in params ? params.RegistryType : null;
        this.ImageRepoAddress = 'ImageRepoAddress' in params ? params.ImageRepoAddress : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeAffectedWorkloadList返回参数结构体
 * @class
 */
class DescribeAffectedWorkloadListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 受影响的workload列表数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 受影响的workload列表
         * @type {Array.<AffectedWorkloadItem> || null}
         */
        this.AffectedWorkloadList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.AffectedWorkloadList) {
            this.AffectedWorkloadList = new Array();
            for (let z in params.AffectedWorkloadList) {
                let obj = new AffectedWorkloadItem();
                obj.deserialize(params.AffectedWorkloadList[z]);
                this.AffectedWorkloadList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateComplianceTask返回参数结构体
 * @class
 */
class CreateComplianceTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回创建的合规检查任务的ID。
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
 * 运行时安全事件趋势信息
 * @class
 */
class ImageRiskTendencyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 趋势列表
         * @type {Array.<RunTimeTendencyInfo> || null}
         */
        this.ImageRiskSet = null;

        /**
         * 风险类型：
IRT_VULNERABILITY : 安全漏洞
IRT_MALWARE_VIRUS: 木马病毒
IRT_RISK:敏感信息
         * @type {string || null}
         */
        this.ImageRiskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageRiskSet) {
            this.ImageRiskSet = new Array();
            for (let z in params.ImageRiskSet) {
                let obj = new RunTimeTendencyInfo();
                obj.deserialize(params.ImageRiskSet[z]);
                this.ImageRiskSet.push(obj);
            }
        }
        this.ImageRiskType = 'ImageRiskType' in params ? params.ImageRiskType : null;

    }
}

/**
 * ModifyAsset请求参数结构体
 * @class
 */
class ModifyAssetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 全部同步
         * @type {boolean || null}
         */
        this.All = null;

        /**
         * 要同步的主机列表 两个参数必选一个 All优先
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.All = 'All' in params ? params.All : null;
        this.Hosts = 'Hosts' in params ? params.Hosts : null;

    }
}

/**
 * DescribeRiskList请求参数结构体
 * @class
 */
class DescribeRiskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询的集群ID，如果不指定，则查询用户所有的风险项
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每次查询的最大记录数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Name - String
Name 可取值：RiskLevel风险等级, RiskTarget检查对象，风险对象,RiskType风险类别,RiskAttribute检测项所属的风险类型,Name
         * @type {Array.<ComplianceFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式 asc,desc
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ComplianceFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * ModifyAccessControlStatus返回参数结构体
 * @class
 */
class ModifyAccessControlStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器网络信息
 * @class
 */
class ContainerNetwork extends  AbstractModel {
    constructor(){
        super();

        /**
         * endpoint id
         * @type {string || null}
         */
        this.EndpointID = null;

        /**
         * 模式:bridge
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 网络名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.NetworkID = null;

        /**
         * 网关
         * @type {string || null}
         */
        this.Gateway = null;

        /**
         * IPV4地址
         * @type {string || null}
         */
        this.Ipv4 = null;

        /**
         * IPV6地址
         * @type {string || null}
         */
        this.Ipv6 = null;

        /**
         * MAC 地址
         * @type {string || null}
         */
        this.MAC = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndpointID = 'EndpointID' in params ? params.EndpointID : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NetworkID = 'NetworkID' in params ? params.NetworkID : null;
        this.Gateway = 'Gateway' in params ? params.Gateway : null;
        this.Ipv4 = 'Ipv4' in params ? params.Ipv4 : null;
        this.Ipv6 = 'Ipv6' in params ? params.Ipv6 : null;
        this.MAC = 'MAC' in params ? params.MAC : null;

    }
}

/**
 * DescribeAssetAppServiceList请求参数结构体
 * @class
 */
class DescribeAssetAppServiceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Keywords- String - 是否必填：否 - 模糊查询可选字段</li>
         * @type {Array.<AssetFilters> || null}
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * RemoveAssetImageRegistryRegistryDetail请求参数结构体
 * @class
 */
class RemoveAssetImageRegistryRegistryDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库唯一id
         * @type {number || null}
         */
        this.RegistryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

    }
}

/**
 * ModifyVirusScanSetting请求参数结构体
 * @class
 */
class ModifyVirusScanSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启定期扫描
         * @type {boolean || null}
         */
        this.EnableScan = null;

        /**
         * 检测周期每隔多少天(1|3|7)
         * @type {number || null}
         */
        this.Cycle = null;

        /**
         * 扫描开始时间
         * @type {string || null}
         */
        this.BeginScanAt = null;

        /**
         * 扫描全部路径(true:全选,false:自选)
         * @type {boolean || null}
         */
        this.ScanPathAll = null;

        /**
         * 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径
         * @type {number || null}
         */
        this.ScanPathType = null;

        /**
         * 超时时长(5~24h)
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 扫描范围0容器1主机节点
         * @type {number || null}
         */
        this.ScanRangeType = null;

        /**
         * true 全选，false 自选
         * @type {boolean || null}
         */
        this.ScanRangeAll = null;

        /**
         * 自选扫描范围的容器id或者主机id 根据ScanRangeType决定
         * @type {Array.<string> || null}
         */
        this.ScanIds = null;

        /**
         * 扫描路径
         * @type {Array.<string> || null}
         */
        this.ScanPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableScan = 'EnableScan' in params ? params.EnableScan : null;
        this.Cycle = 'Cycle' in params ? params.Cycle : null;
        this.BeginScanAt = 'BeginScanAt' in params ? params.BeginScanAt : null;
        this.ScanPathAll = 'ScanPathAll' in params ? params.ScanPathAll : null;
        this.ScanPathType = 'ScanPathType' in params ? params.ScanPathType : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.ScanRangeType = 'ScanRangeType' in params ? params.ScanRangeType : null;
        this.ScanRangeAll = 'ScanRangeAll' in params ? params.ScanRangeAll : null;
        this.ScanIds = 'ScanIds' in params ? params.ScanIds : null;
        this.ScanPath = 'ScanPath' in params ? params.ScanPath : null;

    }
}

/**
 * DescribeAssetDBServiceList请求参数结构体
 * @class
 */
class DescribeAssetDBServiceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Keywords- String - 是否必填：否 - 模糊查询可选字段</li>
         * @type {Array.<AssetFilters> || null}
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeProVersionInfo返回参数结构体
 * @class
 */
class DescribeProVersionInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专业版开始时间，补充购买时才不为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 专业版结束时间，补充购买时才不为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 需购买的机器核数
         * @type {number || null}
         */
        this.CoresCnt = null;

        /**
         * 弹性计费上限
         * @type {number || null}
         */
        this.MaxPostPayCoresCnt = null;

        /**
         * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 购买状态
待购: Pending
已购: Normal
隔离: Isolate
         * @type {string || null}
         */
        this.BuyStatus = null;

        /**
         * 是否曾经购买过(false:未曾 true:曾经购买过)
         * @type {boolean || null}
         */
        this.IsPurchased = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.CoresCnt = 'CoresCnt' in params ? params.CoresCnt : null;
        this.MaxPostPayCoresCnt = 'MaxPostPayCoresCnt' in params ? params.MaxPostPayCoresCnt : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.BuyStatus = 'BuyStatus' in params ? params.BuyStatus : null;
        this.IsPurchased = 'IsPurchased' in params ? params.IsPurchased : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddEditAbnormalProcessRule返回参数结构体
 * @class
 */
class AddEditAbnormalProcessRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageRegistryList请求参数结构体
 * @class
 */
class DescribeAssetImageRegistryListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤字段
IsAuthorized是否授权，取值全部all，未授权0，已授权1
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式，asc，desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 是否仅展示各repository最新的镜像, 默认为false
         * @type {boolean || null}
         */
        this.OnlyShowLatest = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OnlyShowLatest = 'OnlyShowLatest' in params ? params.OnlyShowLatest : null;

    }
}

/**
 * CreateCheckComponent返回参数结构体
 * @class
 */
class CreateCheckComponentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * "InstallSucc"表示安装成功，"InstallFailed"表示安装失败
         * @type {string || null}
         */
        this.InstallResult = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstallResult = 'InstallResult' in params ? params.InstallResult : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImageRegistryTimingScanTask请求参数结构体
 * @class
 */
class DescribeImageRegistryTimingScanTaskRequest extends  AbstractModel {
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
 * DescribeRiskSyscallWhiteListDetail返回参数结构体
 * @class
 */
class DescribeRiskSyscallWhiteListDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单基本信息
         * @type {RiskSyscallWhiteListInfo || null}
         */
        this.WhiteListDetailInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WhiteListDetailInfo) {
            let obj = new RiskSyscallWhiteListInfo();
            obj.deserialize(params.WhiteListDetailInfo)
            this.WhiteListDetailInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReverseShellWhiteLists请求参数结构体
 * @class
 */
class DescribeReverseShellWhiteListsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * ScanComplianceAssets返回参数结构体
 * @class
 */
class ScanComplianceAssetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回重新检测任务的ID。
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
 * CreateComplianceTask请求参数结构体
 * @class
 */
class CreateComplianceTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定要扫描的资产类型列表。
ASSET_CONTAINER, 容器
ASSET_IMAGE, 镜像
ASSET_HOST, 主机
ASSET_K8S, K8S资产
AssetTypeSet, PolicySetId, PeriodTaskId三个参数，必须要给其中一个参数填写有效的值。
         * @type {Array.<string> || null}
         */
        this.AssetTypeSet = null;

        /**
         * 按照策略集ID指定的策略执行合规检查。
         * @type {number || null}
         */
        this.PolicySetId = null;

        /**
         * 按照定时任务ID指定的策略执行合规检查。
         * @type {number || null}
         */
        this.PeriodTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetTypeSet = 'AssetTypeSet' in params ? params.AssetTypeSet : null;
        this.PolicySetId = 'PolicySetId' in params ? params.PolicySetId : null;
        this.PeriodTaskId = 'PeriodTaskId' in params ? params.PeriodTaskId : null;

    }
}

/**
 * DescribeReverseShellWhiteListDetail返回参数结构体
 * @class
 */
class DescribeReverseShellWhiteListDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件基本信息
         * @type {ReverseShellWhiteListInfo || null}
         */
        this.WhiteListDetailInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WhiteListDetailInfo) {
            let obj = new ReverseShellWhiteListInfo();
            obj.deserialize(params.WhiteListDetailInfo)
            this.WhiteListDetailInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageVulListExport返回参数结构体
 * @class
 */
class DescribeAssetImageVulListExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * excel文件下载地址
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageRegistryRiskListExport请求参数结构体
 * @class
 */
class DescribeAssetImageRegistryRiskListExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Level- String - 是否必填：否 - 漏洞级别筛选，</li>
<li>Name - String - 是否必填：否 - 漏洞名称</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 镜像信息
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 镜像标识Id
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportField = 'ExportField' in params ? params.ExportField : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 运行时容器逃逸事件描述信息
 * @class
 */
class EscapeEventDescription extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件规则
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 解决方案
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 事件备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 事件最后一次处理的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperationTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.OperationTime = 'OperationTime' in params ? params.OperationTime : null;

    }
}

/**
 * DescribeAssetImageDetail返回参数结构体
 * @class
 */
class DescribeAssetImageDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID
         * @type {string || null}
         */
        this.ImageID = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 镜像大小
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 关联主机个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HostCnt = null;

        /**
         * 关联容器个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ContainerCnt = null;

        /**
         * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanTime = null;

        /**
         * 漏洞个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VulCnt = null;

        /**
         * 风险行为数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskCnt = null;

        /**
         * 敏感信息数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SensitiveInfoCnt = null;

        /**
         * 是否信任镜像
         * @type {boolean || null}
         */
        this.IsTrustImage = null;

        /**
         * 镜像系统
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * agent镜像扫描错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentError = null;

        /**
         * 后端镜像扫描错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanError = null;

        /**
         * 系统架构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Architecture = null;

        /**
         * 作者
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Author = null;

        /**
         * 构建历史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BuildHistory = null;

        /**
         * 木马扫描进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanVirusProgress = null;

        /**
         * 漏洞扫进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanVulProgress = null;

        /**
         * 敏感信息扫描进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanRiskProgress = null;

        /**
         * 木马扫描错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanVirusError = null;

        /**
         * 漏洞扫描错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanVulError = null;

        /**
         * 敏感信息错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanRiskError = null;

        /**
         * 镜像扫描状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanStatus = null;

        /**
         * 木马病毒数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VirusCnt = null;

        /**
         * 镜像扫描状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 剩余扫描时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RemainScanTime = null;

        /**
         * 授权为：1，未授权为：0
         * @type {number || null}
         */
        this.IsAuthorized = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageID = 'ImageID' in params ? params.ImageID : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.HostCnt = 'HostCnt' in params ? params.HostCnt : null;
        this.ContainerCnt = 'ContainerCnt' in params ? params.ContainerCnt : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;
        this.VulCnt = 'VulCnt' in params ? params.VulCnt : null;
        this.RiskCnt = 'RiskCnt' in params ? params.RiskCnt : null;
        this.SensitiveInfoCnt = 'SensitiveInfoCnt' in params ? params.SensitiveInfoCnt : null;
        this.IsTrustImage = 'IsTrustImage' in params ? params.IsTrustImage : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.AgentError = 'AgentError' in params ? params.AgentError : null;
        this.ScanError = 'ScanError' in params ? params.ScanError : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;
        this.Author = 'Author' in params ? params.Author : null;
        this.BuildHistory = 'BuildHistory' in params ? params.BuildHistory : null;
        this.ScanVirusProgress = 'ScanVirusProgress' in params ? params.ScanVirusProgress : null;
        this.ScanVulProgress = 'ScanVulProgress' in params ? params.ScanVulProgress : null;
        this.ScanRiskProgress = 'ScanRiskProgress' in params ? params.ScanRiskProgress : null;
        this.ScanVirusError = 'ScanVirusError' in params ? params.ScanVirusError : null;
        this.ScanVulError = 'ScanVulError' in params ? params.ScanVulError : null;
        this.ScanRiskError = 'ScanRiskError' in params ? params.ScanRiskError : null;
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;
        this.VirusCnt = 'VirusCnt' in params ? params.VirusCnt : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RemainScanTime = 'RemainScanTime' in params ? params.RemainScanTime : null;
        this.IsAuthorized = 'IsAuthorized' in params ? params.IsAuthorized : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAssetImageRegistryScanTaskOneKey返回参数结构体
 * @class
 */
class CreateAssetImageRegistryScanTaskOneKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 异常进程系统策略的子策略信息
 * @class
 */
class AbnormalProcessSystemChildRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子策略Id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 子策略状态，true为开启，false为关闭
         * @type {boolean || null}
         */
        this.IsEnable = null;

        /**
         * 策略模式,  RULE_MODE_RELEASE: 放行
   RULE_MODE_ALERT: 告警
   RULE_MODE_HOLDUP:拦截
         * @type {string || null}
         */
        this.RuleMode = null;

        /**
         * 子策略检测的行为类型
PROXY_TOOL： 代理软件
TRANSFER_CONTROL：横向渗透
ATTACK_CMD： 恶意命令
REVERSE_SHELL：反弹shell
FILELESS：无文件程序执行
RISK_CMD：高危命令
ABNORMAL_CHILD_PROC: 敏感服务异常子进程启动
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * 威胁等级，HIGH:高，MIDDLE:中，LOW:低
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.IsEnable = 'IsEnable' in params ? params.IsEnable : null;
        this.RuleMode = 'RuleMode' in params ? params.RuleMode : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RuleLevel = 'RuleLevel' in params ? params.RuleLevel : null;

    }
}

/**
 * DescribeAssetImageVulListExport请求参数结构体
 * @class
 */
class DescribeAssetImageVulListExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageID = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Name- String - 是否必填：否 - 漏洞名称名称筛选，</li>
<li>Level - String - 是否必填：否 - 风险等级  1,2,3,4</li>
         * @type {Array.<AssetFilters> || null}
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
        this.ExportField = 'ExportField' in params ? params.ExportField : null;
        this.ImageID = 'ImageID' in params ? params.ImageID : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeExportJobResult返回参数结构体
 * @class
 */
class DescribeExportJobResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出的状态。取值为, SUCCESS:成功、FAILURE:失败，RUNNING: 进行中。
         * @type {string || null}
         */
        this.ExportStatus = null;

        /**
         * 返回下载URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadURL = null;

        /**
         * 当ExportStatus为RUNNING时，返回导出进度。0~100范围的浮点数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExportProgress = null;

        /**
         * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailureMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportStatus = 'ExportStatus' in params ? params.ExportStatus : null;
        this.DownloadURL = 'DownloadURL' in params ? params.DownloadURL : null;
        this.ExportProgress = 'ExportProgress' in params ? params.ExportProgress : null;
        this.FailureMsg = 'FailureMsg' in params ? params.FailureMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 反弹shell白名单信息
 * @class
 */
class ReverseShellWhiteListBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 镜像数量
         * @type {number || null}
         */
        this.ImageCount = null;

        /**
         * 连接进程名字
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 目标地址ip
         * @type {string || null}
         */
        this.DstIp = null;

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

        /**
         * 目标端口
         * @type {string || null}
         */
        this.DstPort = null;

        /**
         * 是否是全局白名单，true全局
         * @type {boolean || null}
         */
        this.IsGlobal = null;

        /**
         * 镜像id数组，为空代表全部
         * @type {Array.<string> || null}
         */
        this.ImageIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ImageCount = 'ImageCount' in params ? params.ImageCount : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.DstIp = 'DstIp' in params ? params.DstIp : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.DstPort = 'DstPort' in params ? params.DstPort : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.ImageIds = 'ImageIds' in params ? params.ImageIds : null;

    }
}

/**
 * 容器运行时，访问控制策略信息
 * @class
 */
class AccessControlRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关,true:开启，false:禁用
         * @type {boolean || null}
         */
        this.IsEnable = null;

        /**
         * 生效惊现id，空数组代表全部镜像
         * @type {Array.<string> || null}
         */
        this.ImageIds = null;

        /**
         * 用户策略的子策略数组
         * @type {Array.<AccessControlChildRuleInfo> || null}
         */
        this.ChildRules = null;

        /**
         * 策略名字
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 策略id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 系统策略的子策略数组
         * @type {Array.<AccessControlSystemChildRuleInfo> || null}
         */
        this.SystemChildRules = null;

        /**
         * 是否是系统默认策略
         * @type {boolean || null}
         */
        this.IsDefault = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsEnable = 'IsEnable' in params ? params.IsEnable : null;
        this.ImageIds = 'ImageIds' in params ? params.ImageIds : null;

        if (params.ChildRules) {
            this.ChildRules = new Array();
            for (let z in params.ChildRules) {
                let obj = new AccessControlChildRuleInfo();
                obj.deserialize(params.ChildRules[z]);
                this.ChildRules.push(obj);
            }
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.SystemChildRules) {
            this.SystemChildRules = new Array();
            for (let z in params.SystemChildRules) {
                let obj = new AccessControlSystemChildRuleInfo();
                obj.deserialize(params.SystemChildRules[z]);
                this.SystemChildRules.push(obj);
            }
        }
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

    }
}

/**
 * DescribeAssetHostList返回参数结构体
 * @class
 */
class DescribeAssetHostListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机列表
         * @type {Array.<HostInfo> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new HostInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器安全镜像仓库列表
 * @class
 */
class ImageRepoInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像Digest
         * @type {string || null}
         */
        this.ImageDigest = null;

        /**
         * 镜像仓库地址
         * @type {string || null}
         */
        this.ImageRepoAddress = null;

        /**
         * 仓库类型
         * @type {string || null}
         */
        this.RegistryType = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像版本
         * @type {string || null}
         */
        this.ImageTag = null;

        /**
         * 镜像大小
         * @type {number || null}
         */
        this.ImageSize = null;

        /**
         * 最近扫描时间
         * @type {string || null}
         */
        this.ScanTime = null;

        /**
         * 扫描状态
         * @type {string || null}
         */
        this.ScanStatus = null;

        /**
         * 安全漏洞数
         * @type {number || null}
         */
        this.VulCnt = null;

        /**
         * 木马病毒数
         * @type {number || null}
         */
        this.VirusCnt = null;

        /**
         * 风险行为数
         * @type {number || null}
         */
        this.RiskCnt = null;

        /**
         * 敏感信息数
         * @type {number || null}
         */
        this.SentiveInfoCnt = null;

        /**
         * 是否可信镜像
         * @type {boolean || null}
         */
        this.IsTrustImage = null;

        /**
         * 镜像系统
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 木马扫描错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanVirusError = null;

        /**
         * 漏洞扫描错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanVulError = null;

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 高危扫描错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanRiskError = null;

        /**
         * 敏感信息扫描进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanVirusProgress = null;

        /**
         * 木马扫描进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanVulProgress = null;

        /**
         * 漏洞扫描进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanRiskProgress = null;

        /**
         * 剩余扫描时间秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanRemainTime = null;

        /**
         * cve扫描状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CveStatus = null;

        /**
         * 高危扫描状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskStatus = null;

        /**
         * 木马扫描状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VirusStatus = null;

        /**
         * 总进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 授权状态
         * @type {number || null}
         */
        this.IsAuthorized = null;

        /**
         * 仓库区域
         * @type {string || null}
         */
        this.RegistryRegion = null;

        /**
         * 列表id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 镜像Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 镜像创建的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageCreateTime = null;

        /**
         * 是否为镜像的最新版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsLatestImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageDigest = 'ImageDigest' in params ? params.ImageDigest : null;
        this.ImageRepoAddress = 'ImageRepoAddress' in params ? params.ImageRepoAddress : null;
        this.RegistryType = 'RegistryType' in params ? params.RegistryType : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageTag = 'ImageTag' in params ? params.ImageTag : null;
        this.ImageSize = 'ImageSize' in params ? params.ImageSize : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;
        this.VulCnt = 'VulCnt' in params ? params.VulCnt : null;
        this.VirusCnt = 'VirusCnt' in params ? params.VirusCnt : null;
        this.RiskCnt = 'RiskCnt' in params ? params.RiskCnt : null;
        this.SentiveInfoCnt = 'SentiveInfoCnt' in params ? params.SentiveInfoCnt : null;
        this.IsTrustImage = 'IsTrustImage' in params ? params.IsTrustImage : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.ScanVirusError = 'ScanVirusError' in params ? params.ScanVirusError : null;
        this.ScanVulError = 'ScanVulError' in params ? params.ScanVulError : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ScanRiskError = 'ScanRiskError' in params ? params.ScanRiskError : null;
        this.ScanVirusProgress = 'ScanVirusProgress' in params ? params.ScanVirusProgress : null;
        this.ScanVulProgress = 'ScanVulProgress' in params ? params.ScanVulProgress : null;
        this.ScanRiskProgress = 'ScanRiskProgress' in params ? params.ScanRiskProgress : null;
        this.ScanRemainTime = 'ScanRemainTime' in params ? params.ScanRemainTime : null;
        this.CveStatus = 'CveStatus' in params ? params.CveStatus : null;
        this.RiskStatus = 'RiskStatus' in params ? params.RiskStatus : null;
        this.VirusStatus = 'VirusStatus' in params ? params.VirusStatus : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.IsAuthorized = 'IsAuthorized' in params ? params.IsAuthorized : null;
        this.RegistryRegion = 'RegistryRegion' in params ? params.RegistryRegion : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageCreateTime = 'ImageCreateTime' in params ? params.ImageCreateTime : null;
        this.IsLatestImage = 'IsLatestImage' in params ? params.IsLatestImage : null;

    }
}

/**
 * CreateAssetImageRegistryScanTask返回参数结构体
 * @class
 */
class CreateAssetImageRegistryScanTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器安全端口信息列表
 * @class
 */
class PortInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 对外ip
         * @type {string || null}
         */
        this.PublicIP = null;

        /**
         * 主机端口
         * @type {number || null}
         */
        this.PublicPort = null;

        /**
         * 容器端口
         * @type {number || null}
         */
        this.ContainerPort = null;

        /**
         * 容器Pid
         * @type {number || null}
         */
        this.ContainerPID = null;

        /**
         * 容器名
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 主机id
         * @type {string || null}
         */
        this.HostID = null;

        /**
         * 主机ip
         * @type {string || null}
         */
        this.HostIP = null;

        /**
         * 进程名称
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 容器内监听地址
         * @type {string || null}
         */
        this.ListenContainer = null;

        /**
         * 容器外监听地址
         * @type {string || null}
         */
        this.ListenHost = null;

        /**
         * 运行账号
         * @type {string || null}
         */
        this.RunAs = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 外网ip
         * @type {string || null}
         */
        this.PublicIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.PublicIP = 'PublicIP' in params ? params.PublicIP : null;
        this.PublicPort = 'PublicPort' in params ? params.PublicPort : null;
        this.ContainerPort = 'ContainerPort' in params ? params.ContainerPort : null;
        this.ContainerPID = 'ContainerPID' in params ? params.ContainerPID : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.HostID = 'HostID' in params ? params.HostID : null;
        this.HostIP = 'HostIP' in params ? params.HostIP : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.ListenContainer = 'ListenContainer' in params ? params.ListenContainer : null;
        this.ListenHost = 'ListenHost' in params ? params.ListenHost : null;
        this.RunAs = 'RunAs' in params ? params.RunAs : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;

    }
}

/**
 * DescribeAssetImageRegistrySummary请求参数结构体
 * @class
 */
class DescribeAssetImageRegistrySummaryRequest extends  AbstractModel {
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
 * DescribeTaskResultSummary返回参数结构体
 * @class
 */
class DescribeTaskResultSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 严重风险影响的节点数量,返回7天数据
         * @type {Array.<number> || null}
         */
        this.SeriousRiskNodeCount = null;

        /**
         * 高风险影响的节点的数量,返回7天数据
         * @type {Array.<number> || null}
         */
        this.HighRiskNodeCount = null;

        /**
         * 中风险检查项的节点数量,返回7天数据
         * @type {Array.<number> || null}
         */
        this.MiddleRiskNodeCount = null;

        /**
         * 提示风险检查项的节点数量,返回7天数据
         * @type {Array.<number> || null}
         */
        this.HintRiskNodeCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SeriousRiskNodeCount = 'SeriousRiskNodeCount' in params ? params.SeriousRiskNodeCount : null;
        this.HighRiskNodeCount = 'HighRiskNodeCount' in params ? params.HighRiskNodeCount : null;
        this.MiddleRiskNodeCount = 'MiddleRiskNodeCount' in params ? params.MiddleRiskNodeCount : null;
        this.HintRiskNodeCount = 'HintRiskNodeCount' in params ? params.HintRiskNodeCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器安全主机列表
 * @class
 */
class HostInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机id
         * @type {string || null}
         */
        this.HostID = null;

        /**
         * 主机ip即内网ip
         * @type {string || null}
         */
        this.HostIP = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 业务组
         * @type {string || null}
         */
        this.Group = null;

        /**
         * docker 版本
         * @type {string || null}
         */
        this.DockerVersion = null;

        /**
         * docker 文件系统类型
         * @type {string || null}
         */
        this.DockerFileSystemDriver = null;

        /**
         * 镜像个数
         * @type {number || null}
         */
        this.ImageCnt = null;

        /**
         * 容器个数
         * @type {number || null}
         */
        this.ContainerCnt = null;

        /**
         * agent运行状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 是否是Containerd
         * @type {boolean || null}
         */
        this.IsContainerd = null;

        /**
         * 主机来源：["CVM", "ECM", "LH", "BM"]  中的之一为腾讯云服务器；["Other"]之一非腾讯云服务器；
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 外网ip
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * 主机uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 主机实例ID
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * 地域ID
         * @type {number || null}
         */
        this.RegionID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostID = 'HostID' in params ? params.HostID : null;
        this.HostIP = 'HostIP' in params ? params.HostIP : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.DockerVersion = 'DockerVersion' in params ? params.DockerVersion : null;
        this.DockerFileSystemDriver = 'DockerFileSystemDriver' in params ? params.DockerFileSystemDriver : null;
        this.ImageCnt = 'ImageCnt' in params ? params.ImageCnt : null;
        this.ContainerCnt = 'ContainerCnt' in params ? params.ContainerCnt : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsContainerd = 'IsContainerd' in params ? params.IsContainerd : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.RegionID = 'RegionID' in params ? params.RegionID : null;

    }
}

/**
 * DescribeVirusScanTimeoutSetting请求参数结构体
 * @class
 */
class DescribeVirusScanTimeoutSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设置类型0一键检测，1定时检测
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
        this.ScanType = 'ScanType' in params ? params.ScanType : null;

    }
}

/**
 * ModifyAssetImageScanStop请求参数结构体
 * @class
 */
class ModifyAssetImageScanStopRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id；任务id，镜像id和根据过滤条件筛选三选一。
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 镜像id；任务id，镜像id和根据过滤条件筛选三选一。
         * @type {Array.<string> || null}
         */
        this.Images = null;

        /**
         * 根据过滤条件筛选出镜像；任务id，镜像id和根据过滤条件筛选三选一。
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 根据过滤条件筛选出镜像，再排除个别镜像
         * @type {string || null}
         */
        this.ExcludeImageIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.Images = 'Images' in params ? params.Images : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ExcludeImageIds = 'ExcludeImageIds' in params ? params.ExcludeImageIds : null;

    }
}

/**
 * CreateRefreshTask请求参数结构体
 * @class
 */
class CreateRefreshTaskRequest extends  AbstractModel {
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
 * DescribeAssetImageRiskListExport返回参数结构体
 * @class
 */
class DescribeAssetImageRiskListExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * excel文件下载地址
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessControlEvents请求参数结构体
 * @class
 */
class DescribeAccessControlEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeAccessControlRuleDetail请求参数结构体
 * @class
 */
class DescribeAccessControlRuleDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略唯一id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 镜像id, 仅仅在事件加白的时候使用
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ExportVirusList请求参数结构体
 * @class
 */
class ExportVirusListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li>FileName - String - 是否必填：否 - 文件名称</li>
<li>FilePath - String - 是否必填：否 - 文件路径</li>
<li>VirusName - String - 是否必填：否 - 病毒名称</li>
<li>ContainerName- String - 是否必填：是 - 容器名称</li>
<li>ContainerId- string - 是否必填：否 - 容器id</li>
<li>ImageName- string - 是否必填：否 - 镜像名称</li>
<li>ImageId- string - 是否必填：否 - 镜像id</li>
<li>IsRealTime- int - 是否必填：否 - 过滤是否实时监控数据</li>
<li>TaskId- string - 是否必填：否 - 任务ID</li>
<li>NetStatus - String -是否必填: 否 -  容器网络状态筛选 NORMAL ISOLATED ISOLATING RESTORING RESTORE_FAILED</li>
<li>TimeRange - string -是否必填: 否 - 时间范围筛选 ["2022-03-31 16:55:00", "2022-03-31 17:00:00"]</li>
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序方式
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

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
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.ExportField = 'ExportField' in params ? params.ExportField : null;

    }
}

/**
 * 镜像风险详情
 * @class
 */
class ImageRiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 行为
         * @type {number || null}
         */
        this.Behavior = null;

        /**
         * 类型
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 级别
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 详情
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 解决方案
         * @type {string || null}
         */
        this.InstructionContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Behavior = 'Behavior' in params ? params.Behavior : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.InstructionContent = 'InstructionContent' in params ? params.InstructionContent : null;

    }
}

/**
 * DeleteReverseShellWhiteLists返回参数结构体
 * @class
 */
class DeleteReverseShellWhiteListsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表示主机资产专属的详情。
 * @class
 */
class ComplianceHostDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机上的Docker版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DockerVersion = null;

        /**
         * 主机上的K8S的版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.K8SVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DockerVersion = 'DockerVersion' in params ? params.DockerVersion : null;
        this.K8SVersion = 'K8SVersion' in params ? params.K8SVersion : null;

    }
}

/**
 * 容器运行时安全，访问控制子策略信息
 * @class
 */
class AccessControlChildRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略模式,  RULE_MODE_RELEASE: 放行
   RULE_MODE_ALERT: 告警
   RULE_MODE_HOLDUP:拦截
         * @type {string || null}
         */
        this.RuleMode = null;

        /**
         * 进程路径
         * @type {string || null}
         */
        this.ProcessPath = null;

        /**
         * 被访问文件路径，仅仅在访问控制生效
         * @type {string || null}
         */
        this.TargetFilePath = null;

        /**
         * 子策略id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleMode = 'RuleMode' in params ? params.RuleMode : null;
        this.ProcessPath = 'ProcessPath' in params ? params.ProcessPath : null;
        this.TargetFilePath = 'TargetFilePath' in params ? params.TargetFilePath : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DescribeRiskSyscallNames返回参数结构体
 * @class
 */
class DescribeRiskSyscallNamesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 系统调用名称列表
         * @type {Array.<string> || null}
         */
        this.SyscallNames = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.SyscallNames = 'SyscallNames' in params ? params.SyscallNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddEditReverseShellWhiteList返回参数结构体
 * @class
 */
class AddEditReverseShellWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAbnormalProcessEvents返回参数结构体
 * @class
 */
class DescribeAbnormalProcessEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 异常进程数组
         * @type {Array.<AbnormalProcessEventInfo> || null}
         */
        this.EventSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.EventSet) {
            this.EventSet = new Array();
            for (let z in params.EventSet) {
                let obj = new AbnormalProcessEventInfo();
                obj.deserialize(params.EventSet[z]);
                this.EventSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InitializeUserComplianceEnvironment返回参数结构体
 * @class
 */
class InitializeUserComplianceEnvironmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetCheckMode请求参数结构体
 * @class
 */
class SetCheckModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要设置的集群ID列表
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * 集群检查模式(正常模式"Cluster_Normal"、主动模式"Cluster_Actived"、不设置"Cluster_Unset")
         * @type {string || null}
         */
        this.ClusterCheckMode = null;

        /**
         * 0不设置 1打开 2关闭
         * @type {number || null}
         */
        this.ClusterAutoCheck = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
        this.ClusterCheckMode = 'ClusterCheckMode' in params ? params.ClusterCheckMode : null;
        this.ClusterAutoCheck = 'ClusterAutoCheck' in params ? params.ClusterAutoCheck : null;

    }
}

/**
 * DescribeVirusTaskList返回参数结构体
 * @class
 */
class DescribeVirusTaskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件查杀列表
         * @type {Array.<VirusTaskInfo> || null}
         */
        this.List = null;

        /**
         * 总数量(容器任务数量)
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new VirusTaskInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetHostDetail返回参数结构体
 * @class
 */
class DescribeAssetHostDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜uuid
         * @type {string || null}
         */
        this.UUID = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 主机名
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 主机分组
         * @type {string || null}
         */
        this.Group = null;

        /**
         * 主机IP
         * @type {string || null}
         */
        this.HostIP = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * agent版本
         * @type {string || null}
         */
        this.AgentVersion = null;

        /**
         * 内核版本
         * @type {string || null}
         */
        this.KernelVersion = null;

        /**
         * docker版本
         * @type {string || null}
         */
        this.DockerVersion = null;

        /**
         * docker api版本
         * @type {string || null}
         */
        this.DockerAPIVersion = null;

        /**
         * docker go 版本
         * @type {string || null}
         */
        this.DockerGoVersion = null;

        /**
         * docker 文件系统类型
         * @type {string || null}
         */
        this.DockerFileSystemDriver = null;

        /**
         * docker root 目录
         * @type {string || null}
         */
        this.DockerRootDir = null;

        /**
         * 镜像数
         * @type {number || null}
         */
        this.ImageCnt = null;

        /**
         * 容器数
         * @type {number || null}
         */
        this.ContainerCnt = null;

        /**
         * k8s IP
         * @type {string || null}
         */
        this.K8sMasterIP = null;

        /**
         * k8s version
         * @type {string || null}
         */
        this.K8sVersion = null;

        /**
         * kube proxy
         * @type {string || null}
         */
        this.KubeProxyVersion = null;

        /**
         * "UNINSTALL"："未安装","OFFLINE"："离线", "ONLINE"："防护中
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 是否Containerd
         * @type {boolean || null}
         */
        this.IsContainerd = null;

        /**
         * 主机来源;"TENCENTCLOUD":"腾讯云服务器","OTHERCLOUD":"非腾讯云服务器"
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 外网ip
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * 主机实例ID
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * 地域ID
         * @type {number || null}
         */
        this.RegionID = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UUID = 'UUID' in params ? params.UUID : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.HostIP = 'HostIP' in params ? params.HostIP : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.AgentVersion = 'AgentVersion' in params ? params.AgentVersion : null;
        this.KernelVersion = 'KernelVersion' in params ? params.KernelVersion : null;
        this.DockerVersion = 'DockerVersion' in params ? params.DockerVersion : null;
        this.DockerAPIVersion = 'DockerAPIVersion' in params ? params.DockerAPIVersion : null;
        this.DockerGoVersion = 'DockerGoVersion' in params ? params.DockerGoVersion : null;
        this.DockerFileSystemDriver = 'DockerFileSystemDriver' in params ? params.DockerFileSystemDriver : null;
        this.DockerRootDir = 'DockerRootDir' in params ? params.DockerRootDir : null;
        this.ImageCnt = 'ImageCnt' in params ? params.ImageCnt : null;
        this.ContainerCnt = 'ContainerCnt' in params ? params.ContainerCnt : null;
        this.K8sMasterIP = 'K8sMasterIP' in params ? params.K8sMasterIP : null;
        this.K8sVersion = 'K8sVersion' in params ? params.K8sVersion : null;
        this.KubeProxyVersion = 'KubeProxyVersion' in params ? params.KubeProxyVersion : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsContainerd = 'IsContainerd' in params ? params.IsContainerd : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.RegionID = 'RegionID' in params ? params.RegionID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAffectedNodeList返回参数结构体
 * @class
 */
class DescribeAffectedNodeListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 受影响的节点总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 受影响的节点列表
         * @type {Array.<AffectedNodeItem> || null}
         */
        this.AffectedNodeList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.AffectedNodeList) {
            this.AffectedNodeList = new Array();
            for (let z in params.AffectedNodeList) {
                let obj = new AffectedNodeItem();
                obj.deserialize(params.AffectedNodeList[z]);
                this.AffectedNodeList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterSummary请求参数结构体
 * @class
 */
class DescribeClusterSummaryRequest extends  AbstractModel {
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
 * DescribeAbnormalProcessRulesExport返回参数结构体
 * @class
 */
class DescribeAbnormalProcessRulesExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * execle下载地址
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEscapeEventDetail返回参数结构体
 * @class
 */
class DescribeEscapeEventDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件基本信息
         * @type {RunTimeEventBaseInfo || null}
         */
        this.EventBaseInfo = null;

        /**
         * 进程信息
         * @type {ProcessDetailInfo || null}
         */
        this.ProcessInfo = null;

        /**
         * 事件描述
         * @type {EscapeEventDescription || null}
         */
        this.EventDetail = null;

        /**
         * 父进程信息
         * @type {ProcessBaseInfo || null}
         */
        this.ParentProcessInfo = null;

        /**
         * 祖先进程信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProcessBaseInfo || null}
         */
        this.AncestorProcessInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventBaseInfo) {
            let obj = new RunTimeEventBaseInfo();
            obj.deserialize(params.EventBaseInfo)
            this.EventBaseInfo = obj;
        }

        if (params.ProcessInfo) {
            let obj = new ProcessDetailInfo();
            obj.deserialize(params.ProcessInfo)
            this.ProcessInfo = obj;
        }

        if (params.EventDetail) {
            let obj = new EscapeEventDescription();
            obj.deserialize(params.EventDetail)
            this.EventDetail = obj;
        }

        if (params.ParentProcessInfo) {
            let obj = new ProcessBaseInfo();
            obj.deserialize(params.ParentProcessInfo)
            this.ParentProcessInfo = obj;
        }

        if (params.AncestorProcessInfo) {
            let obj = new ProcessBaseInfo();
            obj.deserialize(params.AncestorProcessInfo)
            this.AncestorProcessInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAccessControlRules返回参数结构体
 * @class
 */
class DeleteAccessControlRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RenewImageAuthorizeState返回参数结构体
 * @class
 */
class RenewImageAuthorizeStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEscapeRuleInfo请求参数结构体
 * @class
 */
class DescribeEscapeRuleInfoRequest extends  AbstractModel {
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
 * DescribeComplianceWhitelistItemList返回参数结构体
 * @class
 */
class DescribeComplianceWhitelistItemListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单项的列表。
         * @type {Array.<ComplianceWhitelistItem> || null}
         */
        this.WhitelistItemSet = null;

        /**
         * 白名单项的总数。
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

        if (params.WhitelistItemSet) {
            this.WhitelistItemSet = new Array();
            for (let z in params.WhitelistItemSet) {
                let obj = new ComplianceWhitelistItem();
                obj.deserialize(params.WhitelistItemSet[z]);
                this.WhitelistItemSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVirusSummary返回参数结构体
 * @class
 */
class DescribeVirusSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最近的一次扫描任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 木马影响容器个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskContainerCnt = null;

        /**
         * 待处理风险个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskCnt = null;

        /**
         * 病毒库更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VirusDataBaseModifyTime = null;

        /**
         * 木马影响容器个数较昨日增长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskContainerIncrease = null;

        /**
         * 待处理风险个数较昨日增长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskIncrease = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RiskContainerCnt = 'RiskContainerCnt' in params ? params.RiskContainerCnt : null;
        this.RiskCnt = 'RiskCnt' in params ? params.RiskCnt : null;
        this.VirusDataBaseModifyTime = 'VirusDataBaseModifyTime' in params ? params.VirusDataBaseModifyTime : null;
        this.RiskContainerIncrease = 'RiskContainerIncrease' in params ? params.RiskContainerIncrease : null;
        this.RiskIncrease = 'RiskIncrease' in params ? params.RiskIncrease : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateImageRegistryTimingScanTask请求参数结构体
 * @class
 */
class UpdateImageRegistryTimingScanTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时扫描周期
         * @type {number || null}
         */
        this.ScanPeriod = null;

        /**
         * 定时扫描开关
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 定时扫描的时间
         * @type {string || null}
         */
        this.ScanTime = null;

        /**
         * 扫描木马类型数组
         * @type {Array.<string> || null}
         */
        this.ScanType = null;

        /**
         * 扫描镜像
         * @type {Array.<ImageInfo> || null}
         */
        this.Images = null;

        /**
         * 是否扫描所有
         * @type {boolean || null}
         */
        this.All = null;

        /**
         * 扫描镜像Id
         * @type {Array.<number> || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScanPeriod = 'ScanPeriod' in params ? params.ScanPeriod : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;
        this.ScanType = 'ScanType' in params ? params.ScanType : null;

        if (params.Images) {
            this.Images = new Array();
            for (let z in params.Images) {
                let obj = new ImageInfo();
                obj.deserialize(params.Images[z]);
                this.Images.push(obj);
            }
        }
        this.All = 'All' in params ? params.All : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeSecEventsTendency请求参数结构体
 * @class
 */
class DescribeSecEventsTendencyRequest extends  AbstractModel {
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

    }
}

/**
 * DescribeContainerSecEventSummary返回参数结构体
 * @class
 */
class DescribeContainerSecEventSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 未处理逃逸事件
         * @type {number || null}
         */
        this.UnhandledEscapeCnt = null;

        /**
         * 未处理反弹shell事件
         * @type {number || null}
         */
        this.UnhandledReverseShellCnt = null;

        /**
         * 未处理高危系统调用
         * @type {number || null}
         */
        this.UnhandledRiskSyscallCnt = null;

        /**
         * 未处理异常进程
         * @type {number || null}
         */
        this.UnhandledAbnormalProcessCnt = null;

        /**
         * 未处理文件篡改
         * @type {number || null}
         */
        this.UnhandledFileCnt = null;

        /**
         * 未处理木马事件
         * @type {number || null}
         */
        this.UnhandledVirusEventCnt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnhandledEscapeCnt = 'UnhandledEscapeCnt' in params ? params.UnhandledEscapeCnt : null;
        this.UnhandledReverseShellCnt = 'UnhandledReverseShellCnt' in params ? params.UnhandledReverseShellCnt : null;
        this.UnhandledRiskSyscallCnt = 'UnhandledRiskSyscallCnt' in params ? params.UnhandledRiskSyscallCnt : null;
        this.UnhandledAbnormalProcessCnt = 'UnhandledAbnormalProcessCnt' in params ? params.UnhandledAbnormalProcessCnt : null;
        this.UnhandledFileCnt = 'UnhandledFileCnt' in params ? params.UnhandledFileCnt : null;
        this.UnhandledVirusEventCnt = 'UnhandledVirusEventCnt' in params ? params.UnhandledVirusEventCnt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetContainerDetail请求参数结构体
 * @class
 */
class DescribeAssetContainerDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器id
         * @type {string || null}
         */
        this.ContainerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;

    }
}

/**
 * ModifyAccessControlStatus请求参数结构体
 * @class
 */
class ModifyAccessControlStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理事件ids
         * @type {Array.<string> || null}
         */
        this.EventIdSet = null;

        /**
         * 标记事件的状态，     
EVENT_DEALED:事件已经处理
     EVENT_INGNORE：事件忽略
     EVENT_DEL:事件删除
     EVENT_ADD_WHITE:事件加白
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 备注事件信息
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
        this.EventIdSet = 'EventIdSet' in params ? params.EventIdSet : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * ScanComplianceScanFailedAssets请求参数结构体
 * @class
 */
class ScanComplianceScanFailedAssetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要重新扫描的客户资产项ID的列表。
         * @type {Array.<number> || null}
         */
        this.CustomerAssetIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerAssetIdSet = 'CustomerAssetIdSet' in params ? params.CustomerAssetIdSet : null;

    }
}

/**
 * ModifyCompliancePeriodTask返回参数结构体
 * @class
 */
class ModifyCompliancePeriodTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器安全运行时高危系统调用信息
 * @class
 */
class RiskSyscallEventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进程名称
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 进程路径
         * @type {string || null}
         */
        this.ProcessPath = null;

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 容器id
         * @type {string || null}
         */
        this.ContainerId = null;

        /**
         * 镜像名
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 容器名
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 生成时间
         * @type {string || null}
         */
        this.FoundTime = null;

        /**
         * 事件解决方案
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 事件详细描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 系统调用名称
         * @type {string || null}
         */
        this.SyscallName = null;

        /**
         * 状态，EVENT_UNDEAL:事件未处理
    EVENT_DEALED:事件已经处理
    EVENT_INGNORE：事件已经忽略
    EVENT_ADD_WHITE：时间已经加白
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 事件id
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 节点名称
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * pod(实例)的名字
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 系统监控名称是否存在
         * @type {boolean || null}
         */
        this.RuleExist = null;

        /**
         * 事件数量
         * @type {number || null}
         */
        this.EventCount = null;

        /**
         * 最近生成时间
         * @type {string || null}
         */
        this.LatestFoundTime = null;

        /**
         * 网络状态
未隔离  	NORMAL
已隔离		ISOLATED
隔离中		ISOLATING
隔离失败	ISOLATE_FAILED
解除隔离中  RESTORING
解除隔离失败 RESTORE_FAILED
         * @type {string || null}
         */
        this.ContainerNetStatus = null;

        /**
         * 容器子状态
"AGENT_OFFLINE"       //Agent离线
"NODE_DESTROYED"      //节点已销毁
"CONTAINER_EXITED"    //容器已退出
"CONTAINER_DESTROYED" //容器已销毁
"SHARED_HOST"         // 容器与主机共享网络
"RESOURCE_LIMIT"      //隔离操作资源超限
"UNKNOW"              // 原因未知
         * @type {string || null}
         */
        this.ContainerNetSubStatus = null;

        /**
         * 容器隔离操作来源
         * @type {string || null}
         */
        this.ContainerIsolateOperationSrc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.ProcessPath = 'ProcessPath' in params ? params.ProcessPath : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.FoundTime = 'FoundTime' in params ? params.FoundTime : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SyscallName = 'SyscallName' in params ? params.SyscallName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RuleExist = 'RuleExist' in params ? params.RuleExist : null;
        this.EventCount = 'EventCount' in params ? params.EventCount : null;
        this.LatestFoundTime = 'LatestFoundTime' in params ? params.LatestFoundTime : null;
        this.ContainerNetStatus = 'ContainerNetStatus' in params ? params.ContainerNetStatus : null;
        this.ContainerNetSubStatus = 'ContainerNetSubStatus' in params ? params.ContainerNetSubStatus : null;
        this.ContainerIsolateOperationSrc = 'ContainerIsolateOperationSrc' in params ? params.ContainerIsolateOperationSrc : null;

    }
}

/**
 * 表示一条集群安全检测项的详细信息
 * @class
 */
class ClusterCheckItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一的检测项的ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CheckItemId = null;

        /**
         * 风险项的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 检测项详细描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ItemDetail = null;

        /**
         * 威胁等级。严重Serious,高危High,中危Middle,提示Hint
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * 检查对象、风险对象.Runc,Kubelet,Containerd,Pods
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskTarget = null;

        /**
         * 风险类别,漏洞风险CVERisk,配置风险ConfigRisk
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskType = null;

        /**
         * 检测项所属的风险类型,权限提升:PrivilegePromotion,拒绝服务:RefuseService,目录穿越:DirectoryEscape,未授权访问:UnauthorizedAccess,权限许可和访问控制问题:PrivilegeAndAccessControl,敏感信息泄露:SensitiveInfoLeak
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskAttribute = null;

        /**
         * 风险特征,Tag.存在EXP:ExistEXP,存在POD:ExistPOC,无需重启:NoNeedReboot, 服务重启:ServerRestart,远程信息泄露:RemoteInfoLeak,远程拒绝服务:RemoteRefuseService,远程利用:RemoteExploit,远程执行:RemoteExecute
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskProperty = null;

        /**
         * CVE编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CVENumber = null;

        /**
         * 披露时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiscoverTime = null;

        /**
         * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * CVSS信息,用于画图
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CVSS = null;

        /**
         * CVSS分数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CVSSScore = null;

        /**
         * 参考连接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelateLink = null;

        /**
         * 影响类型，为Node或者Workload
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AffectedType = null;

        /**
         * 受影响的版本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AffectedVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckItemId = 'CheckItemId' in params ? params.CheckItemId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ItemDetail = 'ItemDetail' in params ? params.ItemDetail : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.RiskTarget = 'RiskTarget' in params ? params.RiskTarget : null;
        this.RiskType = 'RiskType' in params ? params.RiskType : null;
        this.RiskAttribute = 'RiskAttribute' in params ? params.RiskAttribute : null;
        this.RiskProperty = 'RiskProperty' in params ? params.RiskProperty : null;
        this.CVENumber = 'CVENumber' in params ? params.CVENumber : null;
        this.DiscoverTime = 'DiscoverTime' in params ? params.DiscoverTime : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.CVSS = 'CVSS' in params ? params.CVSS : null;
        this.CVSSScore = 'CVSSScore' in params ? params.CVSSScore : null;
        this.RelateLink = 'RelateLink' in params ? params.RelateLink : null;
        this.AffectedType = 'AffectedType' in params ? params.AffectedType : null;
        this.AffectedVersion = 'AffectedVersion' in params ? params.AffectedVersion : null;

    }
}

/**
 * DescribeAssetImageVulList返回参数结构体
 * @class
 */
class DescribeAssetImageVulListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像漏洞列表
         * @type {Array.<ImagesVul> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ImagesVul();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器安全镜像漏洞信息
 * @class
 */
class ImageVul extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CVEID = null;

        /**
         * 观点验证程序id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.POCID = null;

        /**
         * 漏洞名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 涉及组件信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ComponentsInfo> || null}
         */
        this.Components = null;

        /**
         * 分类
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 分类2
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CategoryType = null;

        /**
         * 风险等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Des = null;

        /**
         * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OfficialSolution = null;

        /**
         * 引用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reference = null;

        /**
         * 防御方案
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DefenseSolution = null;

        /**
         * 提交时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubmitTime = null;

        /**
         * Cvss分数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CvssScore = null;

        /**
         * Cvss信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CvssVector = null;

        /**
         * 是否建议修复
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsSuggest = null;

        /**
         * 修复版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FixedVersions = null;

        /**
         * 漏洞标签:"CanBeFixed","DynamicLevelPoc","DynamicLevelExp"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Tag = null;

        /**
         * 组件名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Component = null;

        /**
         * 组件版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CVEID = 'CVEID' in params ? params.CVEID : null;
        this.POCID = 'POCID' in params ? params.POCID : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Components) {
            this.Components = new Array();
            for (let z in params.Components) {
                let obj = new ComponentsInfo();
                obj.deserialize(params.Components[z]);
                this.Components.push(obj);
            }
        }
        this.Category = 'Category' in params ? params.Category : null;
        this.CategoryType = 'CategoryType' in params ? params.CategoryType : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Des = 'Des' in params ? params.Des : null;
        this.OfficialSolution = 'OfficialSolution' in params ? params.OfficialSolution : null;
        this.Reference = 'Reference' in params ? params.Reference : null;
        this.DefenseSolution = 'DefenseSolution' in params ? params.DefenseSolution : null;
        this.SubmitTime = 'SubmitTime' in params ? params.SubmitTime : null;
        this.CvssScore = 'CvssScore' in params ? params.CvssScore : null;
        this.CvssVector = 'CvssVector' in params ? params.CvssVector : null;
        this.IsSuggest = 'IsSuggest' in params ? params.IsSuggest : null;
        this.FixedVersions = 'FixedVersions' in params ? params.FixedVersions : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Component = 'Component' in params ? params.Component : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * 容器安全
描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 * @class
 */
class AssetFilters extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤键的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 一个或者多个过滤值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否模糊查询
         * @type {boolean || null}
         */
        this.ExactMatch = null;

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
        this.ExactMatch = 'ExactMatch' in params ? params.ExactMatch : null;

    }
}

/**
 * DescribePostPayDetail返回参数结构体
 * @class
 */
class DescribePostPayDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性计费扣费详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SoftQuotaDayInfo> || null}
         */
        this.SoftQuotaDayDetail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SoftQuotaDayDetail) {
            this.SoftQuotaDayDetail = new Array();
            for (let z in params.SoftQuotaDayDetail) {
                let obj = new SoftQuotaDayInfo();
                obj.deserialize(params.SoftQuotaDayDetail[z]);
                this.SoftQuotaDayDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageScanStatus请求参数结构体
 * @class
 */
class DescribeAssetImageScanStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskID = 'TaskID' in params ? params.TaskID : null;

    }
}

/**
 * DescribeCheckItemList返回参数结构体
 * @class
 */
class DescribeCheckItemListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项详情数组
         * @type {Array.<ClusterCheckItem> || null}
         */
        this.ClusterCheckItems = null;

        /**
         * 检查项总数
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

        if (params.ClusterCheckItems) {
            this.ClusterCheckItems = new Array();
            for (let z in params.ClusterCheckItems) {
                let obj = new ClusterCheckItem();
                obj.deserialize(params.ClusterCheckItems[z]);
                this.ClusterCheckItems.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表示检测失败的资产的信息。
 * @class
 */
class ComplianceScanFailedAsset extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户资产的ID。
         * @type {number || null}
         */
        this.CustomerAssetId = null;

        /**
         * 资产类别。
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 检测状态
CHECK_INIT, 待检测
CHECK_RUNNING, 检测中
CHECK_FINISHED, 检测完成
CHECK_FAILED, 检测失败
         * @type {string || null}
         */
        this.CheckStatus = null;

        /**
         * 资产的名称。
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * 资产检测失败的原因。
         * @type {string || null}
         */
        this.FailureReason = null;

        /**
         * 检测失败的处理建议。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 检测的时间。
         * @type {string || null}
         */
        this.CheckTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerAssetId = 'CustomerAssetId' in params ? params.CustomerAssetId : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.CheckStatus = 'CheckStatus' in params ? params.CheckStatus : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.FailureReason = 'FailureReason' in params ? params.FailureReason : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.CheckTime = 'CheckTime' in params ? params.CheckTime : null;

    }
}

/**
 * ScanComplianceAssets请求参数结构体
 * @class
 */
class ScanComplianceAssetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要重新扫描的客户资产项ID的列表。
         * @type {Array.<number> || null}
         */
        this.CustomerAssetIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerAssetIdSet = 'CustomerAssetIdSet' in params ? params.CustomerAssetIdSet : null;

    }
}

/**
 * DescribeAbnormalProcessRuleDetail返回参数结构体
 * @class
 */
class DescribeAbnormalProcessRuleDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异常进程策略详细信息
         * @type {AbnormalProcessRuleInfo || null}
         */
        this.RuleDetail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleDetail) {
            let obj = new AbnormalProcessRuleInfo();
            obj.deserialize(params.RuleDetail)
            this.RuleDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyVirusFileStatus请求参数结构体
 * @class
 */
class ModifyVirusFileStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理事件id
         * @type {Array.<string> || null}
         */
        this.EventIdSet = null;

        /**
         * 标记事件的状态，   
    EVENT_DEALED:事件处理
    EVENT_INGNORE"：事件忽略
    EVENT_DEL:事件删除
    EVENT_ADD_WHITE:事件加白
    EVENT_PENDING: 事件待处理
	EVENT_ISOLATE_CONTAINER: 隔离容器
	EVENT_RESOTRE_CONTAINER: 恢复容器
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 事件备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 是否后续自动隔离相同MD5文件
         * @type {boolean || null}
         */
        this.AutoIsolate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventIdSet = 'EventIdSet' in params ? params.EventIdSet : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.AutoIsolate = 'AutoIsolate' in params ? params.AutoIsolate : null;

    }
}

/**
 * DescribeAssetImageRegistryListExport请求参数结构体
 * @class
 */
class DescribeAssetImageRegistryListExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序字段
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式，asc，desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 是否仅展示repository版本最新的镜像，默认为false
         * @type {boolean || null}
         */
        this.OnlyShowLatest = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportField = 'ExportField' in params ? params.ExportField : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OnlyShowLatest = 'OnlyShowLatest' in params ? params.OnlyShowLatest : null;

    }
}

/**
 * DescribeAssetImageRegistryRiskListExport返回参数结构体
 * @class
 */
class DescribeAssetImageRegistryRiskListExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * excel文件下载地址
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyEscapeRule请求参数结构体
 * @class
 */
class ModifyEscapeRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改的数组
         * @type {Array.<EscapeRuleEnabled> || null}
         */
        this.RuleSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new EscapeRuleEnabled();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }

    }
}

/**
 * DescribeAbnormalProcessRules返回参数结构体
 * @class
 */
class DescribeAbnormalProcessRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 异常进程策略信息列表
         * @type {Array.<RuleBaseInfo> || null}
         */
        this.RuleSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new RuleBaseInfo();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCheckItemList请求参数结构体
 * @class
 */
class DescribeCheckItemListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每次查询的最大记录数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Name 可取值：risk_level风险等级, risk_target检查对象，风险对象,risk_type风险类别,risk_attri检测项所属的风险类型
         * @type {Array.<ComplianceFilters> || null}
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
                let obj = new ComplianceFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeVirusScanSetting返回参数结构体
 * @class
 */
class DescribeVirusScanSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启定期扫描
         * @type {boolean || null}
         */
        this.EnableScan = null;

        /**
         * 检测周期每隔多少天
         * @type {number || null}
         */
        this.Cycle = null;

        /**
         * 扫描开始时间
         * @type {string || null}
         */
        this.BeginScanAt = null;

        /**
         * 扫描全部路径
         * @type {boolean || null}
         */
        this.ScanPathAll = null;

        /**
         * 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径
         * @type {number || null}
         */
        this.ScanPathType = null;

        /**
         * 超时时长，单位小时
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 扫描范围0容器1主机节点
         * @type {number || null}
         */
        this.ScanRangeType = null;

        /**
         * true 全选，false 自选
         * @type {boolean || null}
         */
        this.ScanRangeAll = null;

        /**
         * 自选扫描范围的容器id或者主机id 根据ScanRangeType决定
         * @type {Array.<string> || null}
         */
        this.ScanIds = null;

        /**
         * 自选排除或扫描的地址
         * @type {Array.<string> || null}
         */
        this.ScanPath = null;

        /**
         * 一键检测的超时设置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClickTimeout = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableScan = 'EnableScan' in params ? params.EnableScan : null;
        this.Cycle = 'Cycle' in params ? params.Cycle : null;
        this.BeginScanAt = 'BeginScanAt' in params ? params.BeginScanAt : null;
        this.ScanPathAll = 'ScanPathAll' in params ? params.ScanPathAll : null;
        this.ScanPathType = 'ScanPathType' in params ? params.ScanPathType : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.ScanRangeType = 'ScanRangeType' in params ? params.ScanRangeType : null;
        this.ScanRangeAll = 'ScanRangeAll' in params ? params.ScanRangeAll : null;
        this.ScanIds = 'ScanIds' in params ? params.ScanIds : null;
        this.ScanPath = 'ScanPath' in params ? params.ScanPath : null;
        this.ClickTimeout = 'ClickTimeout' in params ? params.ClickTimeout : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessControlRuleDetail返回参数结构体
 * @class
 */
class DescribeAccessControlRuleDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行时策略详细信息
         * @type {AccessControlRuleInfo || null}
         */
        this.RuleDetail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleDetail) {
            let obj = new AccessControlRuleInfo();
            obj.deserialize(params.RuleDetail)
            this.RuleDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateOrModifyPostPayCores请求参数结构体
 * @class
 */
class CreateOrModifyPostPayCoresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性计费上限，最小值500
         * @type {number || null}
         */
        this.CoresCnt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CoresCnt = 'CoresCnt' in params ? params.CoresCnt : null;

    }
}

/**
 * DescribeAssetImageScanTask请求参数结构体
 * @class
 */
class DescribeAssetImageScanTaskRequest extends  AbstractModel {
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
 * DescribeValueAddedSrvInfo返回参数结构体
 * @class
 */
class DescribeValueAddedSrvInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库镜像未授权数量
         * @type {number || null}
         */
        this.RegistryImageCnt = null;

        /**
         * 本地镜像未授权数量
         * @type {number || null}
         */
        this.LocalImageCnt = null;

        /**
         * 未使用的镜像安全扫描授权数
         * @type {number || null}
         */
        this.UnusedAuthorizedCnt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryImageCnt = 'RegistryImageCnt' in params ? params.RegistryImageCnt : null;
        this.LocalImageCnt = 'LocalImageCnt' in params ? params.LocalImageCnt : null;
        this.UnusedAuthorizedCnt = 'UnusedAuthorizedCnt' in params ? params.UnusedAuthorizedCnt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateVirusScanTask返回参数结构体
 * @class
 */
class CreateVirusScanTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetProcessList请求参数结构体
 * @class
 */
class DescribeAssetProcessListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>RunAs - String - 是否必填：否 - 运行用户筛选，</li>
<li>ContainerID - String - 是否必填：否 - 容器id</li>
<li>HostID- String - 是否必填：是 - 主机id</li>
<li>HostIP- string - 是否必填：否 - 主机ip搜索</li>
<li>ProcessName- string - 是否必填：否 - 进程名搜索</li>
<li>Pid- string - 是否必填：否 - 进程id搜索(关联进程)</li>
         * @type {Array.<AssetFilters> || null}
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeAssetProcessList返回参数结构体
 * @class
 */
class DescribeAssetProcessListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 端口列表
         * @type {Array.<ProcessInfo> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ProcessInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器逃逸事件列表
 * @class
 */
class EscapeEventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件类型
   ESCAPE_HOST_ACESS_FILE:宿主机文件访问逃逸
   ESCAPE_MOUNT_NAMESPACE:MountNamespace逃逸
   ESCAPE_PRIVILEDGE:程序提权逃逸
   ESCAPE_PRIVILEDGE_CONTAINER_START:特权容器启动逃逸
   ESCAPE_MOUNT_SENSITIVE_PTAH:敏感路径挂载
   ESCAPE_SYSCALL:Syscall逃逸
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * 容器名
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 镜像名
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 状态，EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 事件记录的唯一id
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 节点名称
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * pod(实例)的名字
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 生成时间
         * @type {string || null}
         */
        this.FoundTime = null;

        /**
         * 事件名字，
宿主机文件访问逃逸、
Syscall逃逸、
MountNamespace逃逸、
程序提权逃逸、
特权容器启动逃逸、
敏感路径挂载
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * 镜像id，用于跳转
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 容器id，用于跳转
         * @type {string || null}
         */
        this.ContainerId = null;

        /**
         * 事件解决方案
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 事件描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 事件数量
         * @type {number || null}
         */
        this.EventCount = null;

        /**
         * 最近生成时间
         * @type {string || null}
         */
        this.LatestFoundTime = null;

        /**
         * 节点IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeIP = null;

        /**
         * 主机IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostID = null;

        /**
         * 网络状态
未隔离  	NORMAL
已隔离		ISOLATED
隔离中		ISOLATING
隔离失败	ISOLATE_FAILED
解除隔离中  RESTORING
解除隔离失败 RESTORE_FAILED
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerNetStatus = null;

        /**
         * 容器子状态
"AGENT_OFFLINE"       //Agent离线
"NODE_DESTROYED"      //节点已销毁
"CONTAINER_EXITED"    //容器已退出
"CONTAINER_DESTROYED" //容器已销毁
"SHARED_HOST"         // 容器与主机共享网络
"RESOURCE_LIMIT"      //隔离操作资源超限
"UNKNOW"              // 原因未知
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerNetSubStatus = null;

        /**
         * 容器隔离操作来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerIsolateOperationSrc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.FoundTime = 'FoundTime' in params ? params.FoundTime : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.EventCount = 'EventCount' in params ? params.EventCount : null;
        this.LatestFoundTime = 'LatestFoundTime' in params ? params.LatestFoundTime : null;
        this.NodeIP = 'NodeIP' in params ? params.NodeIP : null;
        this.HostID = 'HostID' in params ? params.HostID : null;
        this.ContainerNetStatus = 'ContainerNetStatus' in params ? params.ContainerNetStatus : null;
        this.ContainerNetSubStatus = 'ContainerNetSubStatus' in params ? params.ContainerNetSubStatus : null;
        this.ContainerIsolateOperationSrc = 'ContainerIsolateOperationSrc' in params ? params.ContainerIsolateOperationSrc : null;

    }
}

/**
 * ModifyVirusScanTimeoutSetting返回参数结构体
 * @class
 */
class ModifyVirusScanTimeoutSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageRegistryDetail请求参数结构体
 * @class
 */
class DescribeAssetImageRegistryDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库列表id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 镜像ID
         * @type {string || null}
         */
        this.ImageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

    }
}

/**
 * CreateAssetImageRegistryScanTask请求参数结构体
 * @class
 */
class CreateAssetImageRegistryScanTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否扫描全部镜像
         * @type {boolean || null}
         */
        this.All = null;

        /**
         * 扫描的镜像列表
         * @type {Array.<ImageInfo> || null}
         */
        this.Images = null;

        /**
         * 扫描类型数组
         * @type {Array.<string> || null}
         */
        this.ScanType = null;

        /**
         * 扫描的镜像列表
         * @type {Array.<number> || null}
         */
        this.Id = null;

        /**
         * 过滤条件
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 不需要扫描的镜像列表, 与Filters配合使用
         * @type {Array.<number> || null}
         */
        this.ExcludeImageList = null;

        /**
         * 是否仅扫描各repository最新版的镜像, 与Filters配合使用
         * @type {boolean || null}
         */
        this.OnlyScanLatest = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.All = 'All' in params ? params.All : null;

        if (params.Images) {
            this.Images = new Array();
            for (let z in params.Images) {
                let obj = new ImageInfo();
                obj.deserialize(params.Images[z]);
                this.Images.push(obj);
            }
        }
        this.ScanType = 'ScanType' in params ? params.ScanType : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ExcludeImageList = 'ExcludeImageList' in params ? params.ExcludeImageList : null;
        this.OnlyScanLatest = 'OnlyScanLatest' in params ? params.OnlyScanLatest : null;

    }
}

/**
 * DescribeAssetImageListExport返回参数结构体
 * @class
 */
class DescribeAssetImageListExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * excel文件下载地址
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetContainerDetail返回参数结构体
 * @class
 */
class DescribeAssetContainerDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机id
         * @type {string || null}
         */
        this.HostID = null;

        /**
         * 主机ip
         * @type {string || null}
         */
        this.HostIP = null;

        /**
         * 容器名称
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 运行状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 运行账户
         * @type {string || null}
         */
        this.RunAs = null;

        /**
         * 命令行
         * @type {string || null}
         */
        this.Cmd = null;

        /**
         * CPU使用率 * 1000
         * @type {number || null}
         */
        this.CPUUsage = null;

        /**
         * 内存使用 KB
         * @type {number || null}
         */
        this.RamUsage = null;

        /**
         * 镜像名
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像ID
         * @type {string || null}
         */
        this.ImageID = null;

        /**
         * 归属POD
         * @type {string || null}
         */
        this.POD = null;

        /**
         * k8s 主节点
         * @type {string || null}
         */
        this.K8sMaster = null;

        /**
         * 容器内进程数
         * @type {number || null}
         */
        this.ProcessCnt = null;

        /**
         * 容器内端口数
         * @type {number || null}
         */
        this.PortCnt = null;

        /**
         * 组件数
         * @type {number || null}
         */
        this.ComponentCnt = null;

        /**
         * app数
         * @type {number || null}
         */
        this.AppCnt = null;

        /**
         * websvc数
         * @type {number || null}
         */
        this.WebServiceCnt = null;

        /**
         * 挂载
         * @type {Array.<ContainerMount> || null}
         */
        this.Mounts = null;

        /**
         * 容器网络信息
         * @type {ContainerNetwork || null}
         */
        this.Network = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 镜像创建时间
         * @type {string || null}
         */
        this.ImageCreateTime = null;

        /**
         * 镜像大小
         * @type {number || null}
         */
        this.ImageSize = null;

        /**
         * 主机状态 offline,online,pause
         * @type {string || null}
         */
        this.HostStatus = null;

        /**
         * 网络状态
未隔离  	NORMAL
已隔离		ISOLATED
隔离中		ISOLATING
隔离失败	ISOLATE_FAILED
解除隔离中  RESTORING
解除隔离失败 RESTORE_FAILED
         * @type {string || null}
         */
        this.NetStatus = null;

        /**
         * 网络子状态
         * @type {string || null}
         */
        this.NetSubStatus = null;

        /**
         * 隔离来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolateSource = null;

        /**
         * 隔离时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostID = 'HostID' in params ? params.HostID : null;
        this.HostIP = 'HostIP' in params ? params.HostIP : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RunAs = 'RunAs' in params ? params.RunAs : null;
        this.Cmd = 'Cmd' in params ? params.Cmd : null;
        this.CPUUsage = 'CPUUsage' in params ? params.CPUUsage : null;
        this.RamUsage = 'RamUsage' in params ? params.RamUsage : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageID = 'ImageID' in params ? params.ImageID : null;
        this.POD = 'POD' in params ? params.POD : null;
        this.K8sMaster = 'K8sMaster' in params ? params.K8sMaster : null;
        this.ProcessCnt = 'ProcessCnt' in params ? params.ProcessCnt : null;
        this.PortCnt = 'PortCnt' in params ? params.PortCnt : null;
        this.ComponentCnt = 'ComponentCnt' in params ? params.ComponentCnt : null;
        this.AppCnt = 'AppCnt' in params ? params.AppCnt : null;
        this.WebServiceCnt = 'WebServiceCnt' in params ? params.WebServiceCnt : null;

        if (params.Mounts) {
            this.Mounts = new Array();
            for (let z in params.Mounts) {
                let obj = new ContainerMount();
                obj.deserialize(params.Mounts[z]);
                this.Mounts.push(obj);
            }
        }

        if (params.Network) {
            let obj = new ContainerNetwork();
            obj.deserialize(params.Network)
            this.Network = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ImageCreateTime = 'ImageCreateTime' in params ? params.ImageCreateTime : null;
        this.ImageSize = 'ImageSize' in params ? params.ImageSize : null;
        this.HostStatus = 'HostStatus' in params ? params.HostStatus : null;
        this.NetStatus = 'NetStatus' in params ? params.NetStatus : null;
        this.NetSubStatus = 'NetSubStatus' in params ? params.NetSubStatus : null;
        this.IsolateSource = 'IsolateSource' in params ? params.IsolateSource : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器运行时安全，子策略信息
 * @class
 */
class AbnormalProcessChildRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略模式，   RULE_MODE_RELEASE: 放行
   RULE_MODE_ALERT: 告警
   RULE_MODE_HOLDUP:拦截
         * @type {string || null}
         */
        this.RuleMode = null;

        /**
         * 进程路径
         * @type {string || null}
         */
        this.ProcessPath = null;

        /**
         * 子策略id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 威胁等级，HIGH:高，MIDDLE:中，LOW:低
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleMode = 'RuleMode' in params ? params.RuleMode : null;
        this.ProcessPath = 'ProcessPath' in params ? params.ProcessPath : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleLevel = 'RuleLevel' in params ? params.RuleLevel : null;

    }
}

/**
 * ScanComplianceScanFailedAssets返回参数结构体
 * @class
 */
class ScanComplianceScanFailedAssetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回重新检测任务的ID。
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
 * DescribeAssetImageVirusListExport返回参数结构体
 * @class
 */
class DescribeAssetImageVirusListExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * excel文件下载地址
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 运行时安全事件趋势信息
 * @class
 */
class SecTendencyEventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 趋势列表
         * @type {Array.<RunTimeTendencyInfo> || null}
         */
        this.EventSet = null;

        /**
         * 事件类型：
ET_ESCAPE : 容器逃逸
ET_REVERSE_SHELL: 反弹shell
ET_RISK_SYSCALL:高危系统调用
ET_ABNORMAL_PROCESS: 异常进程
ET_ACCESS_CONTROL 文件篡改
         * @type {string || null}
         */
        this.EventType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventSet) {
            this.EventSet = new Array();
            for (let z in params.EventSet) {
                let obj = new RunTimeTendencyInfo();
                obj.deserialize(params.EventSet[z]);
                this.EventSet.push(obj);
            }
        }
        this.EventType = 'EventType' in params ? params.EventType : null;

    }
}

/**
 * DescribeAssetPortList返回参数结构体
 * @class
 */
class DescribeAssetPortListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 端口列表
         * @type {Array.<PortInfo> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new PortInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRefreshTask请求参数结构体
 * @class
 */
class DescribeRefreshTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
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
 * CreateClusterCheckTask返回参数结构体
 * @class
 */
class CreateClusterCheckTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回创建的集群检查任务的ID，为0表示创建失败。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 创建检查任务的结果，"Succ"为成功，其他的为失败原因
         * @type {string || null}
         */
        this.CreateResult = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.CreateResult = 'CreateResult' in params ? params.CreateResult : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCompliancePolicyItemAffectedAssetList请求参数结构体
 * @class
 */
class DescribeCompliancePolicyItemAffectedAssetListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * DescribeComplianceTaskPolicyItemSummaryList返回的CustomerPolicyItemId，表示检测项的ID。
         * @type {number || null}
         */
        this.CustomerPolicyItemId = null;

        /**
         * 起始偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 需要返回的数量，默认为10，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件。
Name - String
Name 可取值：NodeName, CheckResult
         * @type {Array.<ComplianceFilters> || null}
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
        this.CustomerPolicyItemId = 'CustomerPolicyItemId' in params ? params.CustomerPolicyItemId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ComplianceFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeImageRiskTendency请求参数结构体
 * @class
 */
class DescribeImageRiskTendencyRequest extends  AbstractModel {
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

    }
}

/**
 * CreateOrModifyPostPayCores返回参数结构体
 * @class
 */
class CreateOrModifyPostPayCoresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表示检测项所影响的资产的信息。
 * @class
 */
class ComplianceAffectedAsset extends  AbstractModel {
    constructor(){
        super();

        /**
         * 为客户分配的唯一的资产项的ID。
         * @type {number || null}
         */
        this.CustomerAssetId = null;

        /**
         * 资产项的名称。
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * 资产项的类型
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 检测状态

CHECK_INIT, 待检测

CHECK_RUNNING, 检测中

CHECK_FINISHED, 检测完成

CHECK_FAILED, 检测失败
         * @type {string || null}
         */
        this.CheckStatus = null;

        /**
         * 节点名称。
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 上次检测的时间，格式为”YYYY-MM-DD HH:m::SS“。

如果没有检测过，此处为”0000-00-00 00:00:00“。
         * @type {string || null}
         */
        this.LastCheckTime = null;

        /**
         * 检测结果。取值为：

RESULT_FAILED: 未通过

RESULT_PASSED: 通过
         * @type {string || null}
         */
        this.CheckResult = null;

        /**
         * 主机IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostIP = null;

        /**
         * 镜像的tag
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerAssetId = 'CustomerAssetId' in params ? params.CustomerAssetId : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.CheckStatus = 'CheckStatus' in params ? params.CheckStatus : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.LastCheckTime = 'LastCheckTime' in params ? params.LastCheckTime : null;
        this.CheckResult = 'CheckResult' in params ? params.CheckResult : null;
        this.HostIP = 'HostIP' in params ? params.HostIP : null;
        this.ImageTag = 'ImageTag' in params ? params.ImageTag : null;

    }
}

/**
 * DescribeVirusMonitorSetting请求参数结构体
 * @class
 */
class DescribeVirusMonitorSettingRequest extends  AbstractModel {
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
 * DescribeAssetImageHostList返回参数结构体
 * @class
 */
class DescribeAssetImageHostListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像列表
         * @type {Array.<ImageHost> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ImageHost();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImageRiskTendency返回参数结构体
 * @class
 */
class DescribeImageRiskTendencyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本地镜像新增风险趋势信息列表
         * @type {Array.<ImageRiskTendencyInfo> || null}
         */
        this.ImageRiskTendencySet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageRiskTendencySet) {
            this.ImageRiskTendencySet = new Array();
            for (let z in params.ImageRiskTendencySet) {
                let obj = new ImageRiskTendencyInfo();
                obj.deserialize(params.ImageRiskTendencySet[z]);
                this.ImageRiskTendencySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeComplianceScanFailedAssetList请求参数结构体
 * @class
 */
class DescribeComplianceScanFailedAssetListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产类型列表。
ASSET_CONTAINER, 容器
ASSET_IMAGE, 镜像
ASSET_HOST, 主机
ASSET_K8S, K8S资产
         * @type {Array.<string> || null}
         */
        this.AssetTypeSet = null;

        /**
         * 起始偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回的数据量，默认为10，最大为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询过滤器
         * @type {Array.<ComplianceFilters> || null}
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
        this.AssetTypeSet = 'AssetTypeSet' in params ? params.AssetTypeSet : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ComplianceFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeAssetImageRegistryVulList请求参数结构体
 * @class
 */
class DescribeAssetImageRegistryVulListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Level- String - 是否必填：否 - 漏洞级别筛选，</li>
<li>Name - String - 是否必填：否 - 漏洞名称</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 镜像信息
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 镜像标识Id
         * @type {number || null}
         */
        this.Id = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeImageSimpleList返回参数结构体
 * @class
 */
class DescribeImageSimpleListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像列表
         * @type {Array.<ImageSimpleInfo> || null}
         */
        this.ImageList = null;

        /**
         * 镜像数
         * @type {number || null}
         */
        this.ImageCnt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageList) {
            this.ImageList = new Array();
            for (let z in params.ImageList) {
                let obj = new ImageSimpleInfo();
                obj.deserialize(params.ImageList[z]);
                this.ImageList.push(obj);
            }
        }
        this.ImageCnt = 'ImageCnt' in params ? params.ImageCnt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVirusScanSetting请求参数结构体
 * @class
 */
class DescribeVirusScanSettingRequest extends  AbstractModel {
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
 * DescribeUserCluster返回参数结构体
 * @class
 */
class DescribeUserClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群的详细信息
         * @type {Array.<ClusterInfoItem> || null}
         */
        this.ClusterInfoList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ClusterInfoList) {
            this.ClusterInfoList = new Array();
            for (let z in params.ClusterInfoList) {
                let obj = new ClusterInfoItem();
                obj.deserialize(params.ClusterInfoList[z]);
                this.ClusterInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageRegistryRegistryList请求参数结构体
 * @class
 */
class DescribeAssetImageRegistryRegistryListRequest extends  AbstractModel {
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
 * DescribeVirusScanTaskStatus返回参数结构体
 * @class
 */
class DescribeVirusScanTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查杀容器个数
         * @type {number || null}
         */
        this.ContainerTotal = null;

        /**
         * 风险容器个数
         * @type {number || null}
         */
        this.RiskContainerCnt = null;

        /**
         * 扫描状态 任务状态:
SCAN_NONE:无， 
SCAN_SCANNING:正在扫描中，
SCAN_FINISH：扫描完成， 
SCAN_TIMEOUT：扫描超时
SCAN_CANCELING: 取消中
SCAN_CANCELED:已取消
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 扫描进度 I
         * @type {number || null}
         */
        this.Schedule = null;

        /**
         * 已经扫描了的容器个数
         * @type {number || null}
         */
        this.ContainerScanCnt = null;

        /**
         * 风险个数
         * @type {number || null}
         */
        this.RiskCnt = null;

        /**
         * 剩余扫描时间
         * @type {number || null}
         */
        this.LeftSeconds = null;

        /**
         * 扫描开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 扫描结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 扫描类型，"CYCLE"：周期扫描， "MANUAL"：手动扫描
         * @type {string || null}
         */
        this.ScanType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ContainerTotal = 'ContainerTotal' in params ? params.ContainerTotal : null;
        this.RiskContainerCnt = 'RiskContainerCnt' in params ? params.RiskContainerCnt : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Schedule = 'Schedule' in params ? params.Schedule : null;
        this.ContainerScanCnt = 'ContainerScanCnt' in params ? params.ContainerScanCnt : null;
        this.RiskCnt = 'RiskCnt' in params ? params.RiskCnt : null;
        this.LeftSeconds = 'LeftSeconds' in params ? params.LeftSeconds : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ScanType = 'ScanType' in params ? params.ScanType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEscapeEventsExport返回参数结构体
 * @class
 */
class DescribeEscapeEventsExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * execle下载地址
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表示镜像资产专属的详情。
 * @class
 */
class ComplianceImageDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像在主机上的ID。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 镜像的名称。
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像的Tag。
         * @type {string || null}
         */
        this.ImageTag = null;

        /**
         * 镜像所在远程仓库的路径。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Repository = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageTag = 'ImageTag' in params ? params.ImageTag : null;
        this.Repository = 'Repository' in params ? params.Repository : null;

    }
}

/**
 * DescribeComplianceWhitelistItemList请求参数结构体
 * @class
 */
class DescribeComplianceWhitelistItemListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 要获取的数量，默认为10，最大为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资产类型列表。
         * @type {Array.<string> || null}
         */
        this.AssetTypeSet = null;

        /**
         * 查询过滤器
         * @type {Array.<ComplianceFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式 desc asc
         * @type {string || null}
         */
        this.Order = null;

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
        this.AssetTypeSet = 'AssetTypeSet' in params ? params.AssetTypeSet : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ComplianceFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeAccessControlDetail请求参数结构体
 * @class
 */
class DescribeAccessControlDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件唯一id
         * @type {string || null}
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * 风险项是检查完之后，有问题的检测项，并且加了一些检查结果信息。
 * @class
 */
class ClusterRiskItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测项相关信息
         * @type {ClusterCheckItem || null}
         */
        this.CheckItem = null;

        /**
         * 验证信息
         * @type {string || null}
         */
        this.VerifyInfo = null;

        /**
         * 事件描述,检查的错误信息
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 受影响的集群数量
         * @type {number || null}
         */
        this.AffectedClusterCount = null;

        /**
         * 受影响的节点数量
         * @type {number || null}
         */
        this.AffectedNodeCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CheckItem) {
            let obj = new ClusterCheckItem();
            obj.deserialize(params.CheckItem)
            this.CheckItem = obj;
        }
        this.VerifyInfo = 'VerifyInfo' in params ? params.VerifyInfo : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.AffectedClusterCount = 'AffectedClusterCount' in params ? params.AffectedClusterCount : null;
        this.AffectedNodeCount = 'AffectedNodeCount' in params ? params.AffectedNodeCount : null;

    }
}

/**
 * DescribeVirusList返回参数结构体
 * @class
 */
class DescribeVirusListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马列表
         * @type {Array.<VirusInfo> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new VirusInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAbnormalProcessEventsExport请求参数结构体
 * @class
 */
class DescribeAbnormalProcessEventsExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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
        this.ExportField = 'ExportField' in params ? params.ExportField : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeAssetComponentList请求参数结构体
 * @class
 */
class DescribeAssetComponentListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器id
         * @type {string || null}
         */
        this.ContainerID = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件
         * @type {Array.<AssetFilters> || null}
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
        this.ContainerID = 'ContainerID' in params ? params.ContainerID : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeUserCluster请求参数结构体
 * @class
 */
class DescribeUserClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每次查询的最大记录数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Name - String
Name 可取值：ClusterName,ClusterId,ClusterType,Region,ClusterCheckMode,ClusterAutoCheck
         * @type {Array.<ComplianceFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式 asc,desc
         * @type {string || null}
         */
        this.Order = null;

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
                let obj = new ComplianceFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeAbnormalProcessDetail返回参数结构体
 * @class
 */
class DescribeAbnormalProcessDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件基本信息
         * @type {RunTimeEventBaseInfo || null}
         */
        this.EventBaseInfo = null;

        /**
         * 进程信息
         * @type {ProcessDetailInfo || null}
         */
        this.ProcessInfo = null;

        /**
         * 父进程信息
         * @type {ProcessDetailBaseInfo || null}
         */
        this.ParentProcessInfo = null;

        /**
         * 事件描述
         * @type {AbnormalProcessEventDescription || null}
         */
        this.EventDetail = null;

        /**
         * 祖先进程信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProcessBaseInfo || null}
         */
        this.AncestorProcessInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventBaseInfo) {
            let obj = new RunTimeEventBaseInfo();
            obj.deserialize(params.EventBaseInfo)
            this.EventBaseInfo = obj;
        }

        if (params.ProcessInfo) {
            let obj = new ProcessDetailInfo();
            obj.deserialize(params.ProcessInfo)
            this.ProcessInfo = obj;
        }

        if (params.ParentProcessInfo) {
            let obj = new ProcessDetailBaseInfo();
            obj.deserialize(params.ParentProcessInfo)
            this.ParentProcessInfo = obj;
        }

        if (params.EventDetail) {
            let obj = new AbnormalProcessEventDescription();
            obj.deserialize(params.EventDetail)
            this.EventDetail = obj;
        }

        if (params.AncestorProcessInfo) {
            let obj = new ProcessBaseInfo();
            obj.deserialize(params.AncestorProcessInfo)
            this.AncestorProcessInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageListExport请求参数结构体
 * @class
 */
class DescribeAssetImageListExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>ImageName- String - 是否必填：否 - 镜像名称筛选，</li>
<li>ScanStatus - String - 是否必填：否 - 镜像扫描状态notScan，scanning，scanned，scanErr</li>
<li>ImageID- String - 是否必填：否 - 镜像ID筛选，</li>
<li>SecurityRisk- String - 是否必填：否 - 安全风险，VulCnt 、VirusCnt、RiskCnt、IsTrustImage</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式 asc,desc
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportField = 'ExportField' in params ? params.ExportField : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * ModifyAssetImageRegistryScanStopOneKey返回参数结构体
 * @class
 */
class ModifyAssetImageRegistryScanStopOneKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRiskSyscallNames请求参数结构体
 * @class
 */
class DescribeRiskSyscallNamesRequest extends  AbstractModel {
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
 * 后付费详情
 * @class
 */
class SoftQuotaDayInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扣费时间
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * 计费核数
         * @type {number || null}
         */
        this.CoresCnt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.CoresCnt = 'CoresCnt' in params ? params.CoresCnt : null;

    }
}

/**
 * DescribeAssetImageRegistryVirusList返回参数结构体
 * @class
 */
class DescribeAssetImageRegistryVirusListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像漏洞列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageVirus> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ImageVirus();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageSimpleList请求参数结构体
 * @class
 */
class DescribeAssetImageSimpleListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Keywords- String - 是否必填：否 - 镜像名、镜像id 称筛选，</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式 asc,desc
         * @type {string || null}
         */
        this.Order = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeAssetDBServiceList返回参数结构体
 * @class
 */
class DescribeAssetDBServiceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * db服务列表
         * @type {Array.<ServiceInfo> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ServiceInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImageSimpleList请求参数结构体
 * @class
 */
class DescribeImageSimpleListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IsAuthorized 是否已经授权, 0:否 1:是 无:全部
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序方式
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeAssetWebServiceList返回参数结构体
 * @class
 */
class DescribeAssetWebServiceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机列表
         * @type {Array.<ServiceInfo> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ServiceInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeComplianceTaskPolicyItemSummaryList请求参数结构体
 * @class
 */
class DescribeComplianceTaskPolicyItemSummaryListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产类型。仅查询与指定资产类型相关的检测项。

ASSET_CONTAINER, 容器

ASSET_IMAGE, 镜像

ASSET_HOST, 主机

ASSET_K8S, K8S资产
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 起始偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 需要返回的数量，默认为10，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件。
Name - String
Name 可取值：ItemType, StandardId,  RiskLevel。
当为K8S资产时，还可取ClusterName。
         * @type {Array.<ComplianceFilters> || null}
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
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ComplianceFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 表示一条检测项对应的汇总信息。
 * @class
 */
class CompliancePolicyItemSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 为客户分配的唯一的检测项的ID。
         * @type {number || null}
         */
        this.CustomerPolicyItemId = null;

        /**
         * 检测项的原始ID。
         * @type {number || null}
         */
        this.BasePolicyItemId = null;

        /**
         * 检测项的名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 检测项所属的类型，枚举字符串。
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 所属的合规标准
         * @type {string || null}
         */
        this.BenchmarkStandardName = null;

        /**
         * 威胁等级。RISK_CRITICAL, RISK_HIGH, RISK_MEDIUM, RISK_LOW, RISK_NOTICE。
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * 检测项所属的资产类型
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 最近检测的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastCheckTime = null;

        /**
         * 检测状态

CHECK_INIT, 待检测

CHECK_RUNNING, 检测中

CHECK_FINISHED, 检测完成

CHECK_FAILED, 检测失败
         * @type {string || null}
         */
        this.CheckStatus = null;

        /**
         * 检测结果。RESULT_PASSED: 通过

RESULT_FAILED: 未通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckResult = null;

        /**
         * 通过检测的资产的数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PassedAssetCount = null;

        /**
         * 未通过检测的资产的数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailedAssetCount = null;

        /**
         * 检测项对应的白名单项的ID。如果存在且非0，表示检测项被用户忽略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WhitelistId = null;

        /**
         * 处理建议。
         * @type {string || null}
         */
        this.FixSuggestion = null;

        /**
         * 所属的合规标准的ID
         * @type {number || null}
         */
        this.BenchmarkStandardId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerPolicyItemId = 'CustomerPolicyItemId' in params ? params.CustomerPolicyItemId : null;
        this.BasePolicyItemId = 'BasePolicyItemId' in params ? params.BasePolicyItemId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.BenchmarkStandardName = 'BenchmarkStandardName' in params ? params.BenchmarkStandardName : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.LastCheckTime = 'LastCheckTime' in params ? params.LastCheckTime : null;
        this.CheckStatus = 'CheckStatus' in params ? params.CheckStatus : null;
        this.CheckResult = 'CheckResult' in params ? params.CheckResult : null;
        this.PassedAssetCount = 'PassedAssetCount' in params ? params.PassedAssetCount : null;
        this.FailedAssetCount = 'FailedAssetCount' in params ? params.FailedAssetCount : null;
        this.WhitelistId = 'WhitelistId' in params ? params.WhitelistId : null;
        this.FixSuggestion = 'FixSuggestion' in params ? params.FixSuggestion : null;
        this.BenchmarkStandardId = 'BenchmarkStandardId' in params ? params.BenchmarkStandardId : null;

    }
}

/**
 * DescribeAssetImageVulList请求参数结构体
 * @class
 */
class DescribeAssetImageVulListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageID = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Name- String - 是否必填：否 - 漏洞名称名称筛选，</li>
<li>Level - String - 是否必填：否 - 风险等级  1,2,3,4</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段（Level）
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式 + -
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageID = 'ImageID' in params ? params.ImageID : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * ModifyRiskSyscallStatus请求参数结构体
 * @class
 */
class ModifyRiskSyscallStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理事件ids
         * @type {Array.<string> || null}
         */
        this.EventIdSet = null;

        /**
         * 标记事件的状态，   
    EVENT_DEALED:事件处理
    EVENT_INGNORE"：事件忽略
     EVENT_DEL:事件删除
     EVENT_ADD_WHITE:事件加白
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 事件备注
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
        this.EventIdSet = 'EventIdSet' in params ? params.EventIdSet : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * 运行时风险信息
 * @class
 */
class RunTimeRiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量
         * @type {number || null}
         */
        this.Cnt = null;

        /**
         * 风险等级：
CRITICAL: 严重
HIGH: 高
MEDIUM：中
LOW: 低
         * @type {string || null}
         */
        this.Level = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cnt = 'Cnt' in params ? params.Cnt : null;
        this.Level = 'Level' in params ? params.Level : null;

    }
}

/**
 * CreateVirusScanTask请求参数结构体
 * @class
 */
class CreateVirusScanTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否扫描所有路径
         * @type {boolean || null}
         */
        this.ScanPathAll = null;

        /**
         * 扫描范围0容器1主机节点
         * @type {number || null}
         */
        this.ScanRangeType = null;

        /**
         * true 全选，false 自选
         * @type {boolean || null}
         */
        this.ScanRangeAll = null;

        /**
         * 超时时长，单位小时
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 当ScanPathAll为false生效 0扫描以下路径 1、扫描除以下路径
         * @type {number || null}
         */
        this.ScanPathType = null;

        /**
         * 自选扫描范围的容器id或者主机id 根据ScanRangeType决定
         * @type {Array.<string> || null}
         */
        this.ScanIds = null;

        /**
         * 自选排除或扫描的地址
         * @type {Array.<string> || null}
         */
        this.ScanPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScanPathAll = 'ScanPathAll' in params ? params.ScanPathAll : null;
        this.ScanRangeType = 'ScanRangeType' in params ? params.ScanRangeType : null;
        this.ScanRangeAll = 'ScanRangeAll' in params ? params.ScanRangeAll : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.ScanPathType = 'ScanPathType' in params ? params.ScanPathType : null;
        this.ScanIds = 'ScanIds' in params ? params.ScanIds : null;
        this.ScanPath = 'ScanPath' in params ? params.ScanPath : null;

    }
}

/**
 * DescribeAssetImageScanTask返回参数结构体
 * @class
 */
class DescribeAssetImageScanTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddEditAccessControlRule请求参数结构体
 * @class
 */
class AddEditAccessControlRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 增加策略信息，策略id为空，编辑策略是id不能为空
         * @type {AccessControlRuleInfo || null}
         */
        this.RuleInfo = null;

        /**
         * 仅在白名单时候使用
         * @type {string || null}
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleInfo) {
            let obj = new AccessControlRuleInfo();
            obj.deserialize(params.RuleInfo)
            this.RuleInfo = obj;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * 容器挂载信息
 * @class
 */
class ContainerMount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 挂载类型 bind
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 宿主机路径
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 容器内路径
         * @type {string || null}
         */
        this.Destination = null;

        /**
         * 模式
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 读写权限
         * @type {boolean || null}
         */
        this.RW = null;

        /**
         * 传播类型
         * @type {string || null}
         */
        this.Propagation = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 驱动
         * @type {string || null}
         */
        this.Driver = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Destination = 'Destination' in params ? params.Destination : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.RW = 'RW' in params ? params.RW : null;
        this.Propagation = 'Propagation' in params ? params.Propagation : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Driver = 'Driver' in params ? params.Driver : null;

    }
}

/**
 * DescribeAssetImageSimpleList返回参数结构体
 * @class
 */
class DescribeAssetImageSimpleListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像列表
         * @type {Array.<AssetSimpleImageInfo> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new AssetSimpleImageInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeComplianceAssetPolicyItemList返回参数结构体
 * @class
 */
class DescribeComplianceAssetPolicyItemListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回检测项的总数。如果用户未启用基线检查，此处返回0。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回某个资产下的检测项的列表。
         * @type {Array.<ComplianceAssetPolicyItem> || null}
         */
        this.AssetPolicyItemList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.AssetPolicyItemList) {
            this.AssetPolicyItemList = new Array();
            for (let z in params.AssetPolicyItemList) {
                let obj = new ComplianceAssetPolicyItem();
                obj.deserialize(params.AssetPolicyItemList[z]);
                this.AssetPolicyItemList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 * @class
 */
class ComplianceFilters extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤键的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 一个或者多个过滤值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否模糊查询。默认为是。
         * @type {boolean || null}
         */
        this.ExactMatch = null;

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
        this.ExactMatch = 'ExactMatch' in params ? params.ExactMatch : null;

    }
}

/**
 * 容器安全镜像列表
 * @class
 */
class ImagesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageID = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 镜像大小
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 主机个数
         * @type {number || null}
         */
        this.HostCnt = null;

        /**
         * 容器个数
         * @type {number || null}
         */
        this.ContainerCnt = null;

        /**
         * 扫描时间
         * @type {string || null}
         */
        this.ScanTime = null;

        /**
         * 漏洞个数
         * @type {number || null}
         */
        this.VulCnt = null;

        /**
         * 病毒个数
         * @type {number || null}
         */
        this.VirusCnt = null;

        /**
         * 敏感信息个数
         * @type {number || null}
         */
        this.RiskCnt = null;

        /**
         * 是否信任镜像
         * @type {boolean || null}
         */
        this.IsTrustImage = null;

        /**
         * 镜像系统
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * agent镜像扫描错误
         * @type {string || null}
         */
        this.AgentError = null;

        /**
         * 后端镜像扫描错误
         * @type {string || null}
         */
        this.ScanError = null;

        /**
         * 扫描状态
         * @type {string || null}
         */
        this.ScanStatus = null;

        /**
         * 木马扫描错误信息
         * @type {string || null}
         */
        this.ScanVirusError = null;

        /**
         * 漏洞扫描错误信息
         * @type {string || null}
         */
        this.ScanVulError = null;

        /**
         * 风险扫描错误信息
         * @type {string || null}
         */
        this.ScanRiskError = null;

        /**
         * 是否是重点关注镜像，为0不是，非0是
         * @type {number || null}
         */
        this.IsSuggest = null;

        /**
         * 是否授权，1是0否
         * @type {number || null}
         */
        this.IsAuthorized = null;

        /**
         * 组件个数
         * @type {number || null}
         */
        this.ComponentCnt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageID = 'ImageID' in params ? params.ImageID : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.HostCnt = 'HostCnt' in params ? params.HostCnt : null;
        this.ContainerCnt = 'ContainerCnt' in params ? params.ContainerCnt : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;
        this.VulCnt = 'VulCnt' in params ? params.VulCnt : null;
        this.VirusCnt = 'VirusCnt' in params ? params.VirusCnt : null;
        this.RiskCnt = 'RiskCnt' in params ? params.RiskCnt : null;
        this.IsTrustImage = 'IsTrustImage' in params ? params.IsTrustImage : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.AgentError = 'AgentError' in params ? params.AgentError : null;
        this.ScanError = 'ScanError' in params ? params.ScanError : null;
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;
        this.ScanVirusError = 'ScanVirusError' in params ? params.ScanVirusError : null;
        this.ScanVulError = 'ScanVulError' in params ? params.ScanVulError : null;
        this.ScanRiskError = 'ScanRiskError' in params ? params.ScanRiskError : null;
        this.IsSuggest = 'IsSuggest' in params ? params.IsSuggest : null;
        this.IsAuthorized = 'IsAuthorized' in params ? params.IsAuthorized : null;
        this.ComponentCnt = 'ComponentCnt' in params ? params.ComponentCnt : null;

    }
}

/**
 * DescribeReverseShellEventsExport请求参数结构体
 * @class
 */
class DescribeReverseShellEventsExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.ExportField = 'ExportField' in params ? params.ExportField : null;

    }
}

/**
 * 告警配置策略
 * @class
 */
class WarningRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警事件类型：
镜像仓库安全-木马：IMG_REG_VIRUS
镜像仓库安全-漏洞：IMG_REG_VUL
镜像仓库安全-敏感信息：IMG_REG_RISK
镜像安全-木马：IMG_VIRUS
镜像安全-漏洞：IMG_VUL
镜像安全-敏感信息：IMG_RISK
镜像安全-镜像拦截：IMG_INTERCEPT
运行时安全-容器逃逸：RUNTIME_ESCAPE
运行时安全-异常进程：RUNTIME_FILE
运行时安全-异常文件访问：RUNTIME_PROCESS
运行时安全-高危系统调用：RUNTIME_SYSCALL
运行时安全-反弹Shell：RUNTIME_REVERSE_SHELL
运行时安全-木马：RUNTIME_VIRUS
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 开关状态：
打开：ON
关闭：OFF
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 告警开始时间，格式: HH:mm
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 告警结束时间，格式: HH:mm
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 告警等级策略控制，二进制位每位代表一个含义，值以字符串类型传递
控制开关分为高、中、低，则二进制位分别为：第1位:低，第2位:中，第3位:高，0表示关闭、1表示打开。
如：高危和中危打开告警，低危关闭告警，则二进制值为：110
告警类型不区分等级控制，则传1。
         * @type {string || null}
         */
        this.ControlBits = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ControlBits = 'ControlBits' in params ? params.ControlBits : null;

    }
}

/**
 * DescribeAccessControlDetail返回参数结构体
 * @class
 */
class DescribeAccessControlDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件基本信息
         * @type {RunTimeEventBaseInfo || null}
         */
        this.EventBaseInfo = null;

        /**
         * 进程信息
         * @type {ProcessDetailInfo || null}
         */
        this.ProcessInfo = null;

        /**
         * 被篡改信息
         * @type {FileAttributeInfo || null}
         */
        this.TamperedFileInfo = null;

        /**
         * 事件描述
         * @type {AccessControlEventDescription || null}
         */
        this.EventDetail = null;

        /**
         * 父进程信息
         * @type {ProcessBaseInfo || null}
         */
        this.ParentProcessInfo = null;

        /**
         * 祖先进程信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProcessBaseInfo || null}
         */
        this.AncestorProcessInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventBaseInfo) {
            let obj = new RunTimeEventBaseInfo();
            obj.deserialize(params.EventBaseInfo)
            this.EventBaseInfo = obj;
        }

        if (params.ProcessInfo) {
            let obj = new ProcessDetailInfo();
            obj.deserialize(params.ProcessInfo)
            this.ProcessInfo = obj;
        }

        if (params.TamperedFileInfo) {
            let obj = new FileAttributeInfo();
            obj.deserialize(params.TamperedFileInfo)
            this.TamperedFileInfo = obj;
        }

        if (params.EventDetail) {
            let obj = new AccessControlEventDescription();
            obj.deserialize(params.EventDetail)
            this.EventDetail = obj;
        }

        if (params.ParentProcessInfo) {
            let obj = new ProcessBaseInfo();
            obj.deserialize(params.ParentProcessInfo)
            this.ParentProcessInfo = obj;
        }

        if (params.AncestorProcessInfo) {
            let obj = new ProcessBaseInfo();
            obj.deserialize(params.AncestorProcessInfo)
            this.AncestorProcessInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAffectedNodeList请求参数结构体
 * @class
 */
class DescribeAffectedNodeListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一的检测项的ID
         * @type {number || null}
         */
        this.CheckItemId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每次查询的最大记录数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Name - String
Name 可取值：ClusterName, ClusterId,InstanceId,PrivateIpAddresses
         * @type {Array.<ComplianceFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式 asc,desc
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckItemId = 'CheckItemId' in params ? params.CheckItemId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ComplianceFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeAssetImageRegistryAssetStatus返回参数结构体
 * @class
 */
class DescribeAssetImageRegistryAssetStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新进度状态,doing更新中，success更新成功，failed失败
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Err = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Err = 'Err' in params ? params.Err : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteReverseShellWhiteLists请求参数结构体
 * @class
 */
class DeleteReverseShellWhiteListsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单ids
         * @type {Array.<string> || null}
         */
        this.WhiteListIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WhiteListIdSet = 'WhiteListIdSet' in params ? params.WhiteListIdSet : null;

    }
}

/**
 * AddEditRiskSyscallWhiteList返回参数结构体
 * @class
 */
class AddEditRiskSyscallWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAbnormalProcessStatus请求参数结构体
 * @class
 */
class ModifyAbnormalProcessStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理事件ids
         * @type {Array.<string> || null}
         */
        this.EventIdSet = null;

        /**
         * 标记事件的状态，   
    EVENT_DEALED:事件处理
    EVENT_INGNORE"：事件忽略
     EVENT_DEL:事件删除
     EVENT_ADD_WHITE:事件加白
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 事件备注
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
        this.EventIdSet = 'EventIdSet' in params ? params.EventIdSet : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * ModifyAccessControlRuleStatus返回参数结构体
 * @class
 */
class ModifyAccessControlRuleStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器安全镜像高危行为信息
 * @class
 */
class ImageRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 高危行为
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Behavior = null;

        /**
         * 种类
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 风险等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstructionContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Behavior = 'Behavior' in params ? params.Behavior : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.InstructionContent = 'InstructionContent' in params ? params.InstructionContent : null;

    }
}

/**
 * DescribeClusterDetail返回参数结构体
 * @class
 */
class DescribeClusterDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名字
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 当前集群扫描任务的进度，100表示扫描完成.
         * @type {number || null}
         */
        this.ScanTaskProgress = null;

        /**
         * 集群版本
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * 运行时组件
         * @type {string || null}
         */
        this.ContainerRuntime = null;

        /**
         * 集群节点数
         * @type {number || null}
         */
        this.ClusterNodeNum = null;

        /**
         * 集群状态 (Running 运行中 Creating 创建中 Abnormal 异常 )
         * @type {string || null}
         */
        this.ClusterStatus = null;

        /**
         * 集群类型：为托管集群MANAGED_CLUSTER、独立集群INDEPENDENT_CLUSTER
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群区域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 严重风险检查项的数量
         * @type {number || null}
         */
        this.SeriousRiskCount = null;

        /**
         * 高风险检查项的数量
         * @type {number || null}
         */
        this.HighRiskCount = null;

        /**
         * 中风险检查项的数量
         * @type {number || null}
         */
        this.MiddleRiskCount = null;

        /**
         * 提示风险检查项的数量
         * @type {number || null}
         */
        this.HintRiskCount = null;

        /**
         * 检查任务的状态
         * @type {string || null}
         */
        this.CheckStatus = null;

        /**
         * 防御容器状态
         * @type {string || null}
         */
        this.DefenderStatus = null;

        /**
         * 扫描任务创建时间
         * @type {string || null}
         */
        this.TaskCreateTime = null;

        /**
         * 网络类型.PublicNetwork为公网类型,VPCNetwork为VPC网络
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * API Server地址
         * @type {string || null}
         */
        this.ApiServerAddress = null;

        /**
         * 节点数
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 命名空间数
         * @type {number || null}
         */
        this.NamespaceCount = null;

        /**
         * 工作负载数
         * @type {number || null}
         */
        this.WorkloadCount = null;

        /**
         * Pod数量
         * @type {number || null}
         */
        this.PodCount = null;

        /**
         * Service数量
         * @type {number || null}
         */
        this.ServiceCount = null;

        /**
         * Ingress数量
         * @type {number || null}
         */
        this.IngressCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ScanTaskProgress = 'ScanTaskProgress' in params ? params.ScanTaskProgress : null;
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;
        this.ContainerRuntime = 'ContainerRuntime' in params ? params.ContainerRuntime : null;
        this.ClusterNodeNum = 'ClusterNodeNum' in params ? params.ClusterNodeNum : null;
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.SeriousRiskCount = 'SeriousRiskCount' in params ? params.SeriousRiskCount : null;
        this.HighRiskCount = 'HighRiskCount' in params ? params.HighRiskCount : null;
        this.MiddleRiskCount = 'MiddleRiskCount' in params ? params.MiddleRiskCount : null;
        this.HintRiskCount = 'HintRiskCount' in params ? params.HintRiskCount : null;
        this.CheckStatus = 'CheckStatus' in params ? params.CheckStatus : null;
        this.DefenderStatus = 'DefenderStatus' in params ? params.DefenderStatus : null;
        this.TaskCreateTime = 'TaskCreateTime' in params ? params.TaskCreateTime : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.ApiServerAddress = 'ApiServerAddress' in params ? params.ApiServerAddress : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.NamespaceCount = 'NamespaceCount' in params ? params.NamespaceCount : null;
        this.WorkloadCount = 'WorkloadCount' in params ? params.WorkloadCount : null;
        this.PodCount = 'PodCount' in params ? params.PodCount : null;
        this.ServiceCount = 'ServiceCount' in params ? params.ServiceCount : null;
        this.IngressCount = 'IngressCount' in params ? params.IngressCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表示一条检测项的信息。
 * @class
 */
class ComplianceAssetPolicyItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 为客户分配的唯一的检测项的ID。
         * @type {number || null}
         */
        this.CustomerPolicyItemId = null;

        /**
         * 检测项的原始ID
         * @type {number || null}
         */
        this.BasePolicyItemId = null;

        /**
         * 检测项的名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 检测项所属的类型的名称
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 所属的合规标准的ID
         * @type {number || null}
         */
        this.BenchmarkStandardId = null;

        /**
         * 所属的合规标准的名称
         * @type {string || null}
         */
        this.BenchmarkStandardName = null;

        /**
         * 威胁等级
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * 检测状态
CHECK_INIT, 待检测
CHECK_RUNNING, 检测中
CHECK_FINISHED, 检测完成
CHECK_FAILED, 检测失败
         * @type {string || null}
         */
        this.CheckStatus = null;

        /**
         * 检测结果
RESULT_PASSED: 通过
RESULT_FAILED: 未通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckResult = null;

        /**
         * 检测项对应的白名单项的ID。如果存在且非0，表示检测项被用户忽略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WhitelistId = null;

        /**
         * 处理建议。
         * @type {string || null}
         */
        this.FixSuggestion = null;

        /**
         * 最近检测的时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastCheckTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerPolicyItemId = 'CustomerPolicyItemId' in params ? params.CustomerPolicyItemId : null;
        this.BasePolicyItemId = 'BasePolicyItemId' in params ? params.BasePolicyItemId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.BenchmarkStandardId = 'BenchmarkStandardId' in params ? params.BenchmarkStandardId : null;
        this.BenchmarkStandardName = 'BenchmarkStandardName' in params ? params.BenchmarkStandardName : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.CheckStatus = 'CheckStatus' in params ? params.CheckStatus : null;
        this.CheckResult = 'CheckResult' in params ? params.CheckResult : null;
        this.WhitelistId = 'WhitelistId' in params ? params.WhitelistId : null;
        this.FixSuggestion = 'FixSuggestion' in params ? params.FixSuggestion : null;
        this.LastCheckTime = 'LastCheckTime' in params ? params.LastCheckTime : null;

    }
}

/**
 * InitializeUserComplianceEnvironment请求参数结构体
 * @class
 */
class InitializeUserComplianceEnvironmentRequest extends  AbstractModel {
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
 * DescribeAssetImageRiskList请求参数结构体
 * @class
 */
class DescribeAssetImageRiskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageID = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Level- String - 是否必填：否 - 风险级别 1,2,3,4，</li>
<li>Behavior - String - 是否必填：否 - 风险行为 1,2,3,4</li>
<li>Type - String - 是否必填：否 - 风险类型  1,2,</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageID = 'ImageID' in params ? params.ImageID : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeEscapeSafeState请求参数结构体
 * @class
 */
class DescribeEscapeSafeStateRequest extends  AbstractModel {
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
 * StopVirusScanTask请求参数结构体
 * @class
 */
class StopVirusScanTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 需要停止的容器id 为空默认停止整个任务
         * @type {Array.<string> || null}
         */
        this.ContainerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ContainerIds = 'ContainerIds' in params ? params.ContainerIds : null;

    }
}

/**
 * DescribeEscapeEventDetail请求参数结构体
 * @class
 */
class DescribeEscapeEventDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件唯一id
         * @type {string || null}
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * DescribeVirusSummary请求参数结构体
 * @class
 */
class DescribeVirusSummaryRequest extends  AbstractModel {
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
 * 高危系统调用白名单信息
 * @class
 */
class RiskSyscallWhiteListBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 镜像数量
         * @type {number || null}
         */
        this.ImageCount = null;

        /**
         * 连接进程路径
         * @type {string || null}
         */
        this.ProcessPath = null;

        /**
         * 系统调用名称列表
         * @type {Array.<string> || null}
         */
        this.SyscallNames = null;

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

        /**
         * 是否是全局白名单，true全局
         * @type {boolean || null}
         */
        this.IsGlobal = null;

        /**
         * 镜像id数组
         * @type {Array.<string> || null}
         */
        this.ImageIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ImageCount = 'ImageCount' in params ? params.ImageCount : null;
        this.ProcessPath = 'ProcessPath' in params ? params.ProcessPath : null;
        this.SyscallNames = 'SyscallNames' in params ? params.SyscallNames : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.ImageIds = 'ImageIds' in params ? params.ImageIds : null;

    }
}

/**
 * DeleteAbnormalProcessRules请求参数结构体
 * @class
 */
class DeleteAbnormalProcessRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略的ids
         * @type {Array.<string> || null}
         */
        this.RuleIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleIdSet = 'RuleIdSet' in params ? params.RuleIdSet : null;

    }
}

/**
 * ModifyCompliancePeriodTask请求参数结构体
 * @class
 */
class ModifyCompliancePeriodTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要修改的定时任务的ID，由DescribeCompliancePeriodTaskList接口返回。
         * @type {number || null}
         */
        this.PeriodTaskId = null;

        /**
         * 定时任务的周期规则。不填时，不修改。
         * @type {CompliancePeriodTaskRule || null}
         */
        this.PeriodRule = null;

        /**
         * 设置合规标准。不填时，不修改。
         * @type {Array.<ComplianceBenchmarkStandardEnable> || null}
         */
        this.StandardSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PeriodTaskId = 'PeriodTaskId' in params ? params.PeriodTaskId : null;

        if (params.PeriodRule) {
            let obj = new CompliancePeriodTaskRule();
            obj.deserialize(params.PeriodRule)
            this.PeriodRule = obj;
        }

        if (params.StandardSettings) {
            this.StandardSettings = new Array();
            for (let z in params.StandardSettings) {
                let obj = new ComplianceBenchmarkStandardEnable();
                obj.deserialize(params.StandardSettings[z]);
                this.StandardSettings.push(obj);
            }
        }

    }
}

/**
 * DescribeRiskSyscallEvents请求参数结构体
 * @class
 */
class DescribeRiskSyscallEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeRiskList返回参数结构体
 * @class
 */
class DescribeRiskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 风险详情数组
         * @type {Array.<ClusterRiskItem> || null}
         */
        this.ClusterRiskItems = null;

        /**
         * 风险项的总数
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

        if (params.ClusterRiskItems) {
            this.ClusterRiskItems = new Array();
            for (let z in params.ClusterRiskItems) {
                let obj = new ClusterRiskItem();
                obj.deserialize(params.ClusterRiskItems[z]);
                this.ClusterRiskItems.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器组件信息
 * @class
 */
class ComponentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * DescribeAssetSummary请求参数结构体
 * @class
 */
class DescribeAssetSummaryRequest extends  AbstractModel {
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
 * CreateClusterCheckTask请求参数结构体
 * @class
 */
class CreateClusterCheckTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定要扫描的集群信息
         * @type {Array.<ClusterCheckTaskItem> || null}
         */
        this.ClusterCheckTaskList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClusterCheckTaskList) {
            this.ClusterCheckTaskList = new Array();
            for (let z in params.ClusterCheckTaskList) {
                let obj = new ClusterCheckTaskItem();
                obj.deserialize(params.ClusterCheckTaskList[z]);
                this.ClusterCheckTaskList.push(obj);
            }
        }

    }
}

/**
 * DescribeAbnormalProcessDetail请求参数结构体
 * @class
 */
class DescribeAbnormalProcessDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件唯一id
         * @type {string || null}
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * CreateExportComplianceStatusListJob请求参数结构体
 * @class
 */
class CreateExportComplianceStatusListJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要导出信息的资产类型
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 按照检测项导出，还是按照资产导出。true: 按照资产导出；false: 按照检测项导出。
         * @type {boolean || null}
         */
        this.ExportByAsset = null;

        /**
         * true, 全部导出；false, 根据IdList来导出数据。
         * @type {boolean || null}
         */
        this.ExportAll = null;

        /**
         * 要导出的资产ID列表或检测项ID列表，由ExportByAsset的取值决定。
         * @type {Array.<number> || null}
         */
        this.IdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.ExportByAsset = 'ExportByAsset' in params ? params.ExportByAsset : null;
        this.ExportAll = 'ExportAll' in params ? params.ExportAll : null;
        this.IdList = 'IdList' in params ? params.IdList : null;

    }
}

/**
 * 容器安全镜像病毒信息
 * @class
 */
class ImageVirus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 风险等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * 分类
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 病毒名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VirusName = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 文件路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件md5
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileMd5 = null;

        /**
         * 大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 首次发现时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FirstScanTime = null;

        /**
         * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestScanTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.VirusName = 'VirusName' in params ? params.VirusName : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileMd5 = 'FileMd5' in params ? params.FileMd5 : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FirstScanTime = 'FirstScanTime' in params ? params.FirstScanTime : null;
        this.LatestScanTime = 'LatestScanTime' in params ? params.LatestScanTime : null;

    }
}

/**
 * DescribeEscapeEventInfo请求参数结构体
 * @class
 */
class DescribeEscapeEventInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,Status：EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeRiskSyscallEventsExport返回参数结构体
 * @class
 */
class DescribeRiskSyscallEventsExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Excel下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器列表集合
 * @class
 */
class ContainerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器id
         * @type {string || null}
         */
        this.ContainerID = null;

        /**
         * 容器名称
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 容器运行状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 运行用户
         * @type {string || null}
         */
        this.RunAs = null;

        /**
         * 命令行
         * @type {string || null}
         */
        this.Cmd = null;

        /**
         * CPU使用率 *1000
         * @type {number || null}
         */
        this.CPUUsage = null;

        /**
         * 内存使用 kb
         * @type {number || null}
         */
        this.RamUsage = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageID = null;

        /**
         * 镜像id
         * @type {string || null}
         */
        this.POD = null;

        /**
         * 主机id
         * @type {string || null}
         */
        this.HostID = null;

        /**
         * 主机ip
         * @type {string || null}
         */
        this.HostIP = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 外网ip
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * 网络状态
未隔离  	NORMAL
已隔离		ISOLATED
隔离中		ISOLATING
隔离失败	ISOLATE_FAILED
解除隔离中  RESTORING
解除隔离失败 RESTORE_FAILED
         * @type {string || null}
         */
        this.NetStatus = null;

        /**
         * 网络子状态
         * @type {string || null}
         */
        this.NetSubStatus = null;

        /**
         * 隔离来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolateSource = null;

        /**
         * 隔离时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ContainerID = 'ContainerID' in params ? params.ContainerID : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RunAs = 'RunAs' in params ? params.RunAs : null;
        this.Cmd = 'Cmd' in params ? params.Cmd : null;
        this.CPUUsage = 'CPUUsage' in params ? params.CPUUsage : null;
        this.RamUsage = 'RamUsage' in params ? params.RamUsage : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageID = 'ImageID' in params ? params.ImageID : null;
        this.POD = 'POD' in params ? params.POD : null;
        this.HostID = 'HostID' in params ? params.HostID : null;
        this.HostIP = 'HostIP' in params ? params.HostIP : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.NetStatus = 'NetStatus' in params ? params.NetStatus : null;
        this.NetSubStatus = 'NetSubStatus' in params ? params.NetSubStatus : null;
        this.IsolateSource = 'IsolateSource' in params ? params.IsolateSource : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;

    }
}

/**
 * DescribeAssetImageRegistryRiskInfoList请求参数结构体
 * @class
 */
class DescribeAssetImageRegistryRiskInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Level- String - 是否必填：否 - 漏洞级别筛选，</li>
<li>Name - String - 是否必填：否 - 漏洞名称</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 镜像id
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 排序字段（Level）
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式 + -
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 镜像标识Id
         * @type {number || null}
         */
        this.Id = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeAssetImageRegistryScanStatusOneKey请求参数结构体
 * @class
 */
class DescribeAssetImageRegistryScanStatusOneKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要获取进度的镜像列表
         * @type {Array.<ImageInfo> || null}
         */
        this.Images = null;

        /**
         * 是否获取全部镜像
         * @type {boolean || null}
         */
        this.All = null;

        /**
         * 需要获取进度的镜像列表Id
         * @type {Array.<number> || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Images) {
            this.Images = new Array();
            for (let z in params.Images) {
                let obj = new ImageInfo();
                obj.deserialize(params.Images[z]);
                this.Images.push(obj);
            }
        }
        this.All = 'All' in params ? params.All : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ModifyAccessControlRuleStatus请求参数结构体
 * @class
 */
class ModifyAccessControlRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略的ids
         * @type {Array.<string> || null}
         */
        this.RuleIdSet = null;

        /**
         * 策略开关，true:代表开启， false代表关闭
         * @type {boolean || null}
         */
        this.IsEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleIdSet = 'RuleIdSet' in params ? params.RuleIdSet : null;
        this.IsEnable = 'IsEnable' in params ? params.IsEnable : null;

    }
}

/**
 * DescribeWarningRules请求参数结构体
 * @class
 */
class DescribeWarningRulesRequest extends  AbstractModel {
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
 * 运行时趋势信息
 * @class
 */
class RunTimeTendencyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当天时间
         * @type {string || null}
         */
        this.CurTime = null;

        /**
         * 当前数量
         * @type {number || null}
         */
        this.Cnt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurTime = 'CurTime' in params ? params.CurTime : null;
        this.Cnt = 'Cnt' in params ? params.Cnt : null;

    }
}

/**
 * DescribeContainerAssetSummary请求参数结构体
 * @class
 */
class DescribeContainerAssetSummaryRequest extends  AbstractModel {
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
 * 组件信息
 * @class
 */
class ComponentsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Component = null;

        /**
         * 组件版本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Component = 'Component' in params ? params.Component : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * DeleteRiskSyscallWhiteLists返回参数结构体
 * @class
 */
class DeleteRiskSyscallWhiteListsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageVirusList请求参数结构体
 * @class
 */
class DescribeAssetImageVirusListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageID = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Name- String - 是否必填：否 - 镜像名称筛选，</li>
<li>RiskLevel - String - 是否必填：否 - 风险等级  1,2,3,4</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序 asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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
        this.ImageID = 'ImageID' in params ? params.ImageID : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeAssetImageScanSetting返回参数结构体
 * @class
 */
class DescribeAssetImageScanSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 扫描时刻(完整时间;后端按0时区解析时分秒)
         * @type {string || null}
         */
        this.ScanTime = null;

        /**
         * 扫描间隔
         * @type {number || null}
         */
        this.ScanPeriod = null;

        /**
         * 扫描木马
         * @type {boolean || null}
         */
        this.ScanVirus = null;

        /**
         * 扫描敏感信息
         * @type {boolean || null}
         */
        this.ScanRisk = null;

        /**
         * 扫描漏洞
         * @type {boolean || null}
         */
        this.ScanVul = null;

        /**
         * 扫描全部镜像
         * @type {boolean || null}
         */
        this.All = null;

        /**
         * 自定义扫描镜像
         * @type {Array.<string> || null}
         */
        this.Images = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;
        this.ScanPeriod = 'ScanPeriod' in params ? params.ScanPeriod : null;
        this.ScanVirus = 'ScanVirus' in params ? params.ScanVirus : null;
        this.ScanRisk = 'ScanRisk' in params ? params.ScanRisk : null;
        this.ScanVul = 'ScanVul' in params ? params.ScanVul : null;
        this.All = 'All' in params ? params.All : null;
        this.Images = 'Images' in params ? params.Images : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReverseShellDetail返回参数结构体
 * @class
 */
class DescribeReverseShellDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件基本信息
         * @type {RunTimeEventBaseInfo || null}
         */
        this.EventBaseInfo = null;

        /**
         * 进程信息
         * @type {ProcessDetailInfo || null}
         */
        this.ProcessInfo = null;

        /**
         * 父进程信息
         * @type {ProcessDetailBaseInfo || null}
         */
        this.ParentProcessInfo = null;

        /**
         * 事件描述
         * @type {ReverseShellEventDescription || null}
         */
        this.EventDetail = null;

        /**
         * 祖先进程信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProcessBaseInfo || null}
         */
        this.AncestorProcessInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventBaseInfo) {
            let obj = new RunTimeEventBaseInfo();
            obj.deserialize(params.EventBaseInfo)
            this.EventBaseInfo = obj;
        }

        if (params.ProcessInfo) {
            let obj = new ProcessDetailInfo();
            obj.deserialize(params.ProcessInfo)
            this.ProcessInfo = obj;
        }

        if (params.ParentProcessInfo) {
            let obj = new ProcessDetailBaseInfo();
            obj.deserialize(params.ParentProcessInfo)
            this.ParentProcessInfo = obj;
        }

        if (params.EventDetail) {
            let obj = new ReverseShellEventDescription();
            obj.deserialize(params.EventDetail)
            this.EventDetail = obj;
        }

        if (params.AncestorProcessInfo) {
            let obj = new ProcessBaseInfo();
            obj.deserialize(params.AncestorProcessInfo)
            this.AncestorProcessInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessControlRulesExport返回参数结构体
 * @class
 */
class DescribeAccessControlRulesExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * execle下载地址
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAbnormalProcessStatus返回参数结构体
 * @class
 */
class ModifyAbnormalProcessStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAbnormalProcessEventsExport返回参数结构体
 * @class
 */
class DescribeAbnormalProcessEventsExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * execle下载地址
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeContainerAssetSummary返回参数结构体
 * @class
 */
class DescribeContainerAssetSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器总数
         * @type {number || null}
         */
        this.ContainerTotalCnt = null;

        /**
         * 正在运行容器数量
         * @type {number || null}
         */
        this.ContainerRunningCnt = null;

        /**
         * 暂停运行容器数量
         * @type {number || null}
         */
        this.ContainerPauseCnt = null;

        /**
         * 停止运行容器数量
         * @type {number || null}
         */
        this.ContainerStopped = null;

        /**
         * 本地镜像数量
         * @type {number || null}
         */
        this.ImageCnt = null;

        /**
         * 主机节点数量
         * @type {number || null}
         */
        this.HostCnt = null;

        /**
         * 主机正在运行节点数量
         * @type {number || null}
         */
        this.HostRunningCnt = null;

        /**
         * 主机离线节点数量
         * @type {number || null}
         */
        this.HostOfflineCnt = null;

        /**
         * 镜像仓库数量
         * @type {number || null}
         */
        this.ImageRegistryCnt = null;

        /**
         * 镜像总数
         * @type {number || null}
         */
        this.ImageTotalCnt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ContainerTotalCnt = 'ContainerTotalCnt' in params ? params.ContainerTotalCnt : null;
        this.ContainerRunningCnt = 'ContainerRunningCnt' in params ? params.ContainerRunningCnt : null;
        this.ContainerPauseCnt = 'ContainerPauseCnt' in params ? params.ContainerPauseCnt : null;
        this.ContainerStopped = 'ContainerStopped' in params ? params.ContainerStopped : null;
        this.ImageCnt = 'ImageCnt' in params ? params.ImageCnt : null;
        this.HostCnt = 'HostCnt' in params ? params.HostCnt : null;
        this.HostRunningCnt = 'HostRunningCnt' in params ? params.HostRunningCnt : null;
        this.HostOfflineCnt = 'HostOfflineCnt' in params ? params.HostOfflineCnt : null;
        this.ImageRegistryCnt = 'ImageRegistryCnt' in params ? params.ImageRegistryCnt : null;
        this.ImageTotalCnt = 'ImageTotalCnt' in params ? params.ImageTotalCnt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAssetImageScanTask请求参数结构体
 * @class
 */
class CreateAssetImageScanTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否扫描全部镜像；全部镜像，镜像列表和根据过滤条件筛选三选一。
         * @type {boolean || null}
         */
        this.All = null;

        /**
         * 需要扫描的镜像列表；全部镜像，镜像列表和根据过滤条件筛选三选一。
         * @type {Array.<string> || null}
         */
        this.Images = null;

        /**
         * 扫描漏洞；漏洞，木马和风险需选其一
         * @type {boolean || null}
         */
        this.ScanVul = null;

        /**
         * 扫描木马；漏洞，木马和风险需选其一
         * @type {boolean || null}
         */
        this.ScanVirus = null;

        /**
         * 扫描风险；漏洞，木马和风险需选其一
         * @type {boolean || null}
         */
        this.ScanRisk = null;

        /**
         * 根据过滤条件筛选出镜像；全部镜像，镜像列表和根据过滤条件筛选三选一。
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 根据过滤条件筛选出镜像，再排除个别镜像
         * @type {Array.<string> || null}
         */
        this.ExcludeImageIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.All = 'All' in params ? params.All : null;
        this.Images = 'Images' in params ? params.Images : null;
        this.ScanVul = 'ScanVul' in params ? params.ScanVul : null;
        this.ScanVirus = 'ScanVirus' in params ? params.ScanVirus : null;
        this.ScanRisk = 'ScanRisk' in params ? params.ScanRisk : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ExcludeImageIds = 'ExcludeImageIds' in params ? params.ExcludeImageIds : null;

    }
}

/**
 * DescribeEscapeEventsExport请求参数结构体
 * @class
 */
class DescribeEscapeEventsExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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
        this.ExportField = 'ExportField' in params ? params.ExportField : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeImageRiskSummary返回参数结构体
 * @class
 */
class DescribeImageRiskSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全漏洞
         * @type {Array.<RunTimeRiskInfo> || null}
         */
        this.VulnerabilityCnt = null;

        /**
         * 木马病毒
         * @type {Array.<RunTimeRiskInfo> || null}
         */
        this.MalwareVirusCnt = null;

        /**
         * 敏感信息
         * @type {Array.<RunTimeRiskInfo> || null}
         */
        this.RiskCnt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VulnerabilityCnt) {
            this.VulnerabilityCnt = new Array();
            for (let z in params.VulnerabilityCnt) {
                let obj = new RunTimeRiskInfo();
                obj.deserialize(params.VulnerabilityCnt[z]);
                this.VulnerabilityCnt.push(obj);
            }
        }

        if (params.MalwareVirusCnt) {
            this.MalwareVirusCnt = new Array();
            for (let z in params.MalwareVirusCnt) {
                let obj = new RunTimeRiskInfo();
                obj.deserialize(params.MalwareVirusCnt[z]);
                this.MalwareVirusCnt.push(obj);
            }
        }

        if (params.RiskCnt) {
            this.RiskCnt = new Array();
            for (let z in params.RiskCnt) {
                let obj = new RunTimeRiskInfo();
                obj.deserialize(params.RiskCnt[z]);
                this.RiskCnt.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckRepeatAssetImageRegistry请求参数结构体
 * @class
 */
class CheckRepeatAssetImageRegistryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名
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
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 受影响的节点类型结构体
 * @class
 */
class AffectedNodeItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名字
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 内网ip地址
         * @type {string || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 节点的角色，Master、Work等
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * k8s版本
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * 运行时组件,docker或者containerd
         * @type {string || null}
         */
        this.ContainerRuntime = null;

        /**
         * 区域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 检查结果的验证信息
         * @type {string || null}
         */
        this.VerifyInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;
        this.ContainerRuntime = 'ContainerRuntime' in params ? params.ContainerRuntime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.VerifyInfo = 'VerifyInfo' in params ? params.VerifyInfo : null;

    }
}

/**
 * CreateCheckComponent请求参数结构体
 * @class
 */
class CreateCheckComponentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要安装的集群列表信息
         * @type {Array.<ClusterCreateComponentItem> || null}
         */
        this.ClusterInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClusterInfoList) {
            this.ClusterInfoList = new Array();
            for (let z in params.ClusterInfoList) {
                let obj = new ClusterCreateComponentItem();
                obj.deserialize(params.ClusterInfoList[z]);
                this.ClusterInfoList.push(obj);
            }
        }

    }
}

/**
 * DeleteRiskSyscallWhiteLists请求参数结构体
 * @class
 */
class DeleteRiskSyscallWhiteListsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单ids
         * @type {Array.<string> || null}
         */
        this.WhiteListIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WhiteListIdSet = 'WhiteListIdSet' in params ? params.WhiteListIdSet : null;

    }
}

/**
 * DescribeImageAuthorizedInfo请求参数结构体
 * @class
 */
class DescribeImageAuthorizedInfoRequest extends  AbstractModel {
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
 * DescribeAssetImageRegistryRiskInfoList返回参数结构体
 * @class
 */
class DescribeAssetImageRegistryRiskInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像漏洞列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageRisk> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ImageRisk();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageRegistryDetail返回参数结构体
 * @class
 */
class DescribeAssetImageRegistryDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像Digest
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageDigest = null;

        /**
         * 镜像地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageRepoAddress = null;

        /**
         * 镜像类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegistryType = null;

        /**
         * 仓库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageTag = null;

        /**
         * 扫描时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanTime = null;

        /**
         * 扫描状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanStatus = null;

        /**
         * 安全漏洞数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VulCnt = null;

        /**
         * 木马病毒数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VirusCnt = null;

        /**
         * 风险行为数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskCnt = null;

        /**
         * 敏感信息数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SentiveInfoCnt = null;

        /**
         * 镜像系统
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 木马扫描错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanVirusError = null;

        /**
         * 漏洞扫描错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanVulError = null;

        /**
         * 层文件信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LayerInfo = null;

        /**
         * 实例id
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
         * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 高危扫描错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanRiskError = null;

        /**
         * 木马信息扫描进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanVirusProgress = null;

        /**
         * 漏洞扫描进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanVulProgress = null;

        /**
         * 敏感扫描进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanRiskProgress = null;

        /**
         * 剩余扫描时间秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanRemainTime = null;

        /**
         * cve扫描状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CveStatus = null;

        /**
         * 高危扫描状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskStatus = null;

        /**
         * 木马扫描状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VirusStatus = null;

        /**
         * 总进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 授权状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsAuthorized = null;

        /**
         * 镜像大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ImageSize = null;

        /**
         * 镜像Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 镜像区域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegistryRegion = null;

        /**
         * 镜像创建的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageCreateTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageDigest = 'ImageDigest' in params ? params.ImageDigest : null;
        this.ImageRepoAddress = 'ImageRepoAddress' in params ? params.ImageRepoAddress : null;
        this.RegistryType = 'RegistryType' in params ? params.RegistryType : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageTag = 'ImageTag' in params ? params.ImageTag : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;
        this.VulCnt = 'VulCnt' in params ? params.VulCnt : null;
        this.VirusCnt = 'VirusCnt' in params ? params.VirusCnt : null;
        this.RiskCnt = 'RiskCnt' in params ? params.RiskCnt : null;
        this.SentiveInfoCnt = 'SentiveInfoCnt' in params ? params.SentiveInfoCnt : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.ScanVirusError = 'ScanVirusError' in params ? params.ScanVirusError : null;
        this.ScanVulError = 'ScanVulError' in params ? params.ScanVulError : null;
        this.LayerInfo = 'LayerInfo' in params ? params.LayerInfo : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ScanRiskError = 'ScanRiskError' in params ? params.ScanRiskError : null;
        this.ScanVirusProgress = 'ScanVirusProgress' in params ? params.ScanVirusProgress : null;
        this.ScanVulProgress = 'ScanVulProgress' in params ? params.ScanVulProgress : null;
        this.ScanRiskProgress = 'ScanRiskProgress' in params ? params.ScanRiskProgress : null;
        this.ScanRemainTime = 'ScanRemainTime' in params ? params.ScanRemainTime : null;
        this.CveStatus = 'CveStatus' in params ? params.CveStatus : null;
        this.RiskStatus = 'RiskStatus' in params ? params.RiskStatus : null;
        this.VirusStatus = 'VirusStatus' in params ? params.VirusStatus : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.IsAuthorized = 'IsAuthorized' in params ? params.IsAuthorized : null;
        this.ImageSize = 'ImageSize' in params ? params.ImageSize : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.RegistryRegion = 'RegistryRegion' in params ? params.RegistryRegion : null;
        this.ImageCreateTime = 'ImageCreateTime' in params ? params.ImageCreateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddCompliancePolicyItemToWhitelist返回参数结构体
 * @class
 */
class AddCompliancePolicyItemToWhitelistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessControlRules请求参数结构体
 * @class
 */
class DescribeAccessControlRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * StopVirusScanTask返回参数结构体
 * @class
 */
class StopVirusScanTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddEditWarningRules请求参数结构体
 * @class
 */
class AddEditWarningRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警开关策略
         * @type {Array.<WarningRule> || null}
         */
        this.WarningRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WarningRules) {
            this.WarningRules = new Array();
            for (let z in params.WarningRules) {
                let obj = new WarningRule();
                obj.deserialize(params.WarningRules[z]);
                this.WarningRules.push(obj);
            }
        }

    }
}

/**
 * ModifyAsset返回参数结构体
 * @class
 */
class ModifyAssetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步任务发送结果
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
 * DescribeReverseShellEventsExport返回参数结构体
 * @class
 */
class DescribeReverseShellEventsExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * execle下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询镜像绑定的运行时规则信息
 * @class
 */
class ImagesBindRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 关联容器数量
         * @type {number || null}
         */
        this.ContainerCnt = null;

        /**
         * 绑定规则id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 规则名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 镜像大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ImageSize = null;

        /**
         * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ContainerCnt = 'ContainerCnt' in params ? params.ContainerCnt : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.ImageSize = 'ImageSize' in params ? params.ImageSize : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;

    }
}

/**
 * DescribeAssetImageList返回参数结构体
 * @class
 */
class DescribeAssetImageListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像列表
         * @type {Array.<ImagesInfo> || null}
         */
        this.List = null;

        /**
         * 总数量
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ImagesInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表示一项资产的信息。
 * @class
 */
class ComplianceAssetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户资产的ID。
         * @type {number || null}
         */
        this.CustomerAssetId = null;

        /**
         * 资产类别。
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 资产的名称。
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * 当资产为镜像时，这个字段为镜像Tag。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageTag = null;

        /**
         * 资产所在的主机IP。
         * @type {string || null}
         */
        this.HostIP = null;

        /**
         * 资产所属的节点的名称
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 检测状态

CHECK_INIT, 待检测

CHECK_RUNNING, 检测中

CHECK_FINISHED, 检测完成

CHECK_FAILED, 检测失败
         * @type {string || null}
         */
        this.CheckStatus = null;

        /**
         * 此类资产通过的检测项的数目。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PassedPolicyItemCount = null;

        /**
         * 此类资产未通过的检测的数目。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailedPolicyItemCount = null;

        /**
         * 上次检测的时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastCheckTime = null;

        /**
         * 检测结果：
RESULT_FAILED: 未通过。
RESULT_PASSED: 通过。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerAssetId = 'CustomerAssetId' in params ? params.CustomerAssetId : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.ImageTag = 'ImageTag' in params ? params.ImageTag : null;
        this.HostIP = 'HostIP' in params ? params.HostIP : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.CheckStatus = 'CheckStatus' in params ? params.CheckStatus : null;
        this.PassedPolicyItemCount = 'PassedPolicyItemCount' in params ? params.PassedPolicyItemCount : null;
        this.FailedPolicyItemCount = 'FailedPolicyItemCount' in params ? params.FailedPolicyItemCount : null;
        this.LastCheckTime = 'LastCheckTime' in params ? params.LastCheckTime : null;
        this.CheckResult = 'CheckResult' in params ? params.CheckResult : null;

    }
}

/**
 * DescribeAssetImageRegistryVirusList请求参数结构体
 * @class
 */
class DescribeAssetImageRegistryVirusListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Level- String - 是否必填：否 - 漏洞级别筛选，</li>
<li>Name - String - 是否必填：否 - 漏洞名称</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 镜像信息
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 镜像标识Id
         * @type {number || null}
         */
        this.Id = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeReverseShellWhiteListDetail请求参数结构体
 * @class
 */
class DescribeReverseShellWhiteListDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单id
         * @type {string || null}
         */
        this.WhiteListId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WhiteListId = 'WhiteListId' in params ? params.WhiteListId : null;

    }
}

/**
 * ModifyVirusMonitorSetting返回参数结构体
 * @class
 */
class ModifyVirusMonitorSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeComplianceTaskAssetSummary返回参数结构体
 * @class
 */
class DescribeComplianceTaskAssetSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回用户的状态，

USER_UNINIT: 用户未初始化。
USER_INITIALIZING，表示用户正在初始化环境。
USER_NORMAL: 正常状态。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 返回各类资产的汇总信息的列表。
         * @type {Array.<ComplianceAssetSummary> || null}
         */
        this.AssetSummaryList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.AssetSummaryList) {
            this.AssetSummaryList = new Array();
            for (let z in params.AssetSummaryList) {
                let obj = new ComplianceAssetSummary();
                obj.deserialize(params.AssetSummaryList[z]);
                this.AssetSummaryList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWarningRules返回参数结构体
 * @class
 */
class DescribeWarningRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警策略列表
         * @type {Array.<WarningRule> || null}
         */
        this.WarningRules = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WarningRules) {
            this.WarningRules = new Array();
            for (let z in params.WarningRules) {
                let obj = new WarningRule();
                obj.deserialize(params.WarningRules[z]);
                this.WarningRules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 运行时文件查杀任务容器列表信息
 * @class
 */
class VirusTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器名称
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 容器id
         * @type {string || null}
         */
        this.ContainerId = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像Id
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 主机ip
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 扫描状态：
WAIT: 等待扫描
FAILED: 失败
SCANNING: 扫描中
FINISHED: 结束
CANCELING: 取消中
CANCELED: 已取消
CANCEL_FAILED： 取消失败
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 检测开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 检测结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 风险个数
         * @type {number || null}
         */
        this.RiskCnt = null;

        /**
         * 事件id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 错误原因:
SEND_SUCCESSED: 下发成功
SCAN_WAIT: agent排队扫描等待中
OFFLINE: 离线
SEND_FAILED:下发失败
TIMEOUT: 超时
LOW_AGENT_VERSION: 客户端版本过低
AGENT_NOT_FOUND: 镜像所属客户端版不存在
TOO_MANY: 任务过多
VALIDATION: 参数非法
INTERNAL: 服务内部错误
MISC: 其他错误
UNAUTH: 所在镜像未授权
SEND_CANCEL_SUCCESSED:下发成功
         * @type {string || null}
         */
        this.ErrorMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RiskCnt = 'RiskCnt' in params ? params.RiskCnt : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;

    }
}

/**
 * 集群安全检查受影响的工作负载Item
 * @class
 */
class AffectedWorkloadItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名字
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 工作负载名称
         * @type {string || null}
         */
        this.WorkloadName = null;

        /**
         * 工作负载类型
         * @type {string || null}
         */
        this.WorkloadType = null;

        /**
         * 区域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 检测结果的验证信息
         * @type {string || null}
         */
        this.VerifyInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.WorkloadName = 'WorkloadName' in params ? params.WorkloadName : null;
        this.WorkloadType = 'WorkloadType' in params ? params.WorkloadType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.VerifyInfo = 'VerifyInfo' in params ? params.VerifyInfo : null;

    }
}

/**
 * DescribeCompliancePeriodTaskList请求参数结构体
 * @class
 */
class DescribeCompliancePeriodTaskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产的类型，取值为：
ASSET_CONTAINER, 容器
ASSET_IMAGE, 镜像
ASSET_HOST, 主机
ASSET_K8S, K8S资产
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 需要返回的数量，默认为10，最大值为100。
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
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeAccessControlRulesExport请求参数结构体
 * @class
 */
class DescribeAccessControlRulesExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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
        this.ExportField = 'ExportField' in params ? params.ExportField : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * 运行时容器高危系统调用事件描述信息
 * @class
 */
class RiskSyscallEventDescription extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 解决方案
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 事件备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 系统调用名称
         * @type {string || null}
         */
        this.SyscallName = null;

        /**
         * 事件最后一次处理的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperationTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.SyscallName = 'SyscallName' in params ? params.SyscallName : null;
        this.OperationTime = 'OperationTime' in params ? params.OperationTime : null;

    }
}

/**
 * AddEditWarningRules返回参数结构体
 * @class
 */
class AddEditWarningRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageRegistryRegistryList返回参数结构体
 * @class
 */
class DescribeAssetImageRegistryRegistryListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageRegistryAssetStatus请求参数结构体
 * @class
 */
class DescribeAssetImageRegistryAssetStatusRequest extends  AbstractModel {
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
 * 基本镜像信息
 * @class
 */
class ImageProgress extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 仓库类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegistryType = null;

        /**
         * 镜像仓库地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageRepoAddress = null;

        /**
         * 实例id
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
         * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 仓库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像tag
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageTag = null;

        /**
         * 镜像扫描状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanStatus = null;

        /**
         * 镜像cve扫描进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CveProgress = null;

        /**
         * 镜像敏感扫描进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskProgress = null;

        /**
         * 镜像木马扫描进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VirusProgress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.RegistryType = 'RegistryType' in params ? params.RegistryType : null;
        this.ImageRepoAddress = 'ImageRepoAddress' in params ? params.ImageRepoAddress : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageTag = 'ImageTag' in params ? params.ImageTag : null;
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;
        this.CveProgress = 'CveProgress' in params ? params.CveProgress : null;
        this.RiskProgress = 'RiskProgress' in params ? params.RiskProgress : null;
        this.VirusProgress = 'VirusProgress' in params ? params.VirusProgress : null;

    }
}

/**
 * ModifyVirusScanTimeoutSetting请求参数结构体
 * @class
 */
class ModifyVirusScanTimeoutSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 超时时长单位小时(5~24h)
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 设置类型0一键检测，1定时检测
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
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.ScanType = 'ScanType' in params ? params.ScanType : null;

    }
}

/**
 * CreateVirusScanAgain返回参数结构体
 * @class
 */
class CreateVirusScanAgainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddEditAccessControlRule返回参数结构体
 * @class
 */
class AddEditAccessControlRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCompliancePolicyItemFromWhitelist返回参数结构体
 * @class
 */
class DeleteCompliancePolicyItemFromWhitelistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAssetImageScanSetting返回参数结构体
 * @class
 */
class CreateAssetImageScanSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessControlRules返回参数结构体
 * @class
 */
class DescribeAccessControlRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 访问控制策略信息列表
         * @type {Array.<RuleBaseInfo> || null}
         */
        this.RuleSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new RuleBaseInfo();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyEscapeRule返回参数结构体
 * @class
 */
class ModifyEscapeRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器安全资产镜像简略信息
 * @class
 */
class AssetSimpleImageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID
         * @type {string || null}
         */
        this.ImageID = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 关联容器个数
         * @type {number || null}
         */
        this.ContainerCnt = null;

        /**
         * 最后扫描时间
         * @type {string || null}
         */
        this.ScanTime = null;

        /**
         * 镜像大小
         * @type {number || null}
         */
        this.Size = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageID = 'ImageID' in params ? params.ImageID : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ContainerCnt = 'ContainerCnt' in params ? params.ContainerCnt : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * DescribeCompliancePolicyItemAffectedSummary请求参数结构体
 * @class
 */
class DescribeCompliancePolicyItemAffectedSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * DescribeComplianceTaskPolicyItemSummaryList返回的CustomerPolicyItemId，表示检测项的ID。
         * @type {number || null}
         */
        this.CustomerPolicyItemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerPolicyItemId = 'CustomerPolicyItemId' in params ? params.CustomerPolicyItemId : null;

    }
}

/**
 * DescribeVirusDetail返回参数结构体
 * @class
 */
class DescribeVirusDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 镜像名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 木马文件大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 木马文件路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * 最近生成时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 病毒名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VirusName = null;

        /**
         * 风险等级 RISK_CRITICAL, RISK_HIGH, RISK_MEDIUM, RISK_LOW, RISK_NOTICE。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * 容器名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 容器id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerId = null;

        /**
         * 主机名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 主机id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostId = null;

        /**
         * 进程名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 进程路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessPath = null;

        /**
         * 进程md5
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessMd5 = null;

        /**
         * 进程id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProcessId = null;

        /**
         * 进程参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessArgv = null;

        /**
         * 进程链
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessChan = null;

        /**
         * 进程组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessAccountGroup = null;

        /**
         * 进程启动用户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessStartAccount = null;

        /**
         * 进程文件权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessFileAuthority = null;

        /**
         * 来源：0：一键扫描， 1：定时扫描 2：实时监控
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 事件描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HarmDescribe = null;

        /**
         * 建议方案
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SuggestScheme = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mark = null;

        /**
         * 风险文件名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件MD5
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileMd5 = null;

        /**
         * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * DEAL_NONE:文件待处理
DEAL_IGNORE:已经忽略
DEAL_ADD_WHITELIST:加白
DEAL_DEL:文件已经删除
DEAL_ISOLATE:已经隔离
DEAL_ISOLATING:隔离中
DEAL_ISOLATE_FAILED:隔离失败
DEAL_RECOVERING:恢复中
DEAL_RECOVER_FAILED: 恢复失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 失败子状态:
FILE_NOT_FOUND:文件不存在
FILE_ABNORMAL:文件异常
FILE_ABNORMAL_DEAL_RECOVER:恢复文件时，文件异常
BACKUP_FILE_NOT_FOUND:备份文件不存在
CONTAINER_NOT_FOUND_DEAL_ISOLATE:隔离时，容器不存在
CONTAINER_NOT_FOUND_DEAL_RECOVER:恢复时，容器不存在
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubStatus = null;

        /**
         * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostIP = null;

        /**
         * 外网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientIP = null;

        /**
         * 父进程启动用户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PProcessStartUser = null;

        /**
         * 父进程用户组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PProcessUserGroup = null;

        /**
         * 父进程路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PProcessPath = null;

        /**
         * 父进程命令行参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PProcessParam = null;

        /**
         * 祖先进程启动用户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AncestorProcessStartUser = null;

        /**
         * 祖先进程用户组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AncestorProcessUserGroup = null;

        /**
         * 祖先进程路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AncestorProcessPath = null;

        /**
         * 祖先进程命令行参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AncestorProcessParam = null;

        /**
         * 事件最后一次处理的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperationTime = null;

        /**
         * 容器隔离状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerNetStatus = null;

        /**
         * 容器隔离子状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerNetSubStatus = null;

        /**
         * 容器隔离操作来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerIsolateOperationSrc = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.VirusName = 'VirusName' in params ? params.VirusName : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostId = 'HostId' in params ? params.HostId : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.ProcessPath = 'ProcessPath' in params ? params.ProcessPath : null;
        this.ProcessMd5 = 'ProcessMd5' in params ? params.ProcessMd5 : null;
        this.ProcessId = 'ProcessId' in params ? params.ProcessId : null;
        this.ProcessArgv = 'ProcessArgv' in params ? params.ProcessArgv : null;
        this.ProcessChan = 'ProcessChan' in params ? params.ProcessChan : null;
        this.ProcessAccountGroup = 'ProcessAccountGroup' in params ? params.ProcessAccountGroup : null;
        this.ProcessStartAccount = 'ProcessStartAccount' in params ? params.ProcessStartAccount : null;
        this.ProcessFileAuthority = 'ProcessFileAuthority' in params ? params.ProcessFileAuthority : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.HarmDescribe = 'HarmDescribe' in params ? params.HarmDescribe : null;
        this.SuggestScheme = 'SuggestScheme' in params ? params.SuggestScheme : null;
        this.Mark = 'Mark' in params ? params.Mark : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileMd5 = 'FileMd5' in params ? params.FileMd5 : null;
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SubStatus = 'SubStatus' in params ? params.SubStatus : null;
        this.HostIP = 'HostIP' in params ? params.HostIP : null;
        this.ClientIP = 'ClientIP' in params ? params.ClientIP : null;
        this.PProcessStartUser = 'PProcessStartUser' in params ? params.PProcessStartUser : null;
        this.PProcessUserGroup = 'PProcessUserGroup' in params ? params.PProcessUserGroup : null;
        this.PProcessPath = 'PProcessPath' in params ? params.PProcessPath : null;
        this.PProcessParam = 'PProcessParam' in params ? params.PProcessParam : null;
        this.AncestorProcessStartUser = 'AncestorProcessStartUser' in params ? params.AncestorProcessStartUser : null;
        this.AncestorProcessUserGroup = 'AncestorProcessUserGroup' in params ? params.AncestorProcessUserGroup : null;
        this.AncestorProcessPath = 'AncestorProcessPath' in params ? params.AncestorProcessPath : null;
        this.AncestorProcessParam = 'AncestorProcessParam' in params ? params.AncestorProcessParam : null;
        this.OperationTime = 'OperationTime' in params ? params.OperationTime : null;
        this.ContainerNetStatus = 'ContainerNetStatus' in params ? params.ContainerNetStatus : null;
        this.ContainerNetSubStatus = 'ContainerNetSubStatus' in params ? params.ContainerNetSubStatus : null;
        this.ContainerIsolateOperationSrc = 'ContainerIsolateOperationSrc' in params ? params.ContainerIsolateOperationSrc : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeComplianceAssetList返回参数结构体
 * @class
 */
class DescribeComplianceAssetListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回资产的总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回各类资产的列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ComplianceAssetInfo> || null}
         */
        this.AssetInfoList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.AssetInfoList) {
            this.AssetInfoList = new Array();
            for (let z in params.AssetInfoList) {
                let obj = new ComplianceAssetInfo();
                obj.deserialize(params.AssetInfoList[z]);
                this.AssetInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeComplianceAssetDetailInfo返回参数结构体
 * @class
 */
class DescribeComplianceAssetDetailInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 某资产的详情。
         * @type {ComplianceAssetDetailInfo || null}
         */
        this.AssetDetailInfo = null;

        /**
         * 当资产为容器时，返回此字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ComplianceContainerDetailInfo || null}
         */
        this.ContainerDetailInfo = null;

        /**
         * 当资产为镜像时，返回此字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ComplianceImageDetailInfo || null}
         */
        this.ImageDetailInfo = null;

        /**
         * 当资产为主机时，返回此字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ComplianceHostDetailInfo || null}
         */
        this.HostDetailInfo = null;

        /**
         * 当资产为K8S时，返回此字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ComplianceK8SDetailInfo || null}
         */
        this.K8SDetailInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AssetDetailInfo) {
            let obj = new ComplianceAssetDetailInfo();
            obj.deserialize(params.AssetDetailInfo)
            this.AssetDetailInfo = obj;
        }

        if (params.ContainerDetailInfo) {
            let obj = new ComplianceContainerDetailInfo();
            obj.deserialize(params.ContainerDetailInfo)
            this.ContainerDetailInfo = obj;
        }

        if (params.ImageDetailInfo) {
            let obj = new ComplianceImageDetailInfo();
            obj.deserialize(params.ImageDetailInfo)
            this.ImageDetailInfo = obj;
        }

        if (params.HostDetailInfo) {
            let obj = new ComplianceHostDetailInfo();
            obj.deserialize(params.HostDetailInfo)
            this.HostDetailInfo = obj;
        }

        if (params.K8SDetailInfo) {
            let obj = new ComplianceK8SDetailInfo();
            obj.deserialize(params.K8SDetailInfo)
            this.K8SDetailInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAssetImageRegistryScanStop请求参数结构体
 * @class
 */
class ModifyAssetImageRegistryScanStopRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否扫描全部镜像
         * @type {boolean || null}
         */
        this.All = null;

        /**
         * 扫描的镜像列表
         * @type {Array.<ImageInfo> || null}
         */
        this.Images = null;

        /**
         * 扫描的镜像列表
         * @type {Array.<number> || null}
         */
        this.Id = null;

        /**
         * 过滤条件
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 不要扫描的镜像列表，与Filters配合使用
         * @type {Array.<number> || null}
         */
        this.ExcludeImageList = null;

        /**
         * 是否仅扫描各repository最新版本的镜像
         * @type {boolean || null}
         */
        this.OnlyScanLatest = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.All = 'All' in params ? params.All : null;

        if (params.Images) {
            this.Images = new Array();
            for (let z in params.Images) {
                let obj = new ImageInfo();
                obj.deserialize(params.Images[z]);
                this.Images.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ExcludeImageList = 'ExcludeImageList' in params ? params.ExcludeImageList : null;
        this.OnlyScanLatest = 'OnlyScanLatest' in params ? params.OnlyScanLatest : null;

    }
}

/**
 * DescribeVirusScanTaskStatus请求参数结构体
 * @class
 */
class DescribeVirusScanTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskID = 'TaskID' in params ? params.TaskID : null;

    }
}

/**
 * 高危系统调用白名单信息
 * @class
 */
class RiskSyscallWhiteListInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像id数组，为空代表全部
         * @type {Array.<string> || null}
         */
        this.ImageIds = null;

        /**
         * 系统调用名称，通过DescribeRiskSyscallNames接口获取枚举列表
         * @type {Array.<string> || null}
         */
        this.SyscallNames = null;

        /**
         * 目标进程
         * @type {string || null}
         */
        this.ProcessPath = null;

        /**
         * 白名单id，如果新建则id为空
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageIds = 'ImageIds' in params ? params.ImageIds : null;
        this.SyscallNames = 'SyscallNames' in params ? params.SyscallNames : null;
        this.ProcessPath = 'ProcessPath' in params ? params.ProcessPath : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeCompliancePolicyItemAffectedAssetList返回参数结构体
 * @class
 */
class DescribeCompliancePolicyItemAffectedAssetListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回各检测项所影响的资产的列表。
         * @type {Array.<ComplianceAffectedAsset> || null}
         */
        this.AffectedAssetList = null;

        /**
         * 检测项影响的资产的总数。
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

        if (params.AffectedAssetList) {
            this.AffectedAssetList = new Array();
            for (let z in params.AffectedAssetList) {
                let obj = new ComplianceAffectedAsset();
                obj.deserialize(params.AffectedAssetList[z]);
                this.AffectedAssetList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeComplianceAssetPolicyItemList请求参数结构体
 * @class
 */
class DescribeComplianceAssetPolicyItemListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户资产的ID。
         * @type {number || null}
         */
        this.CustomerAssetId = null;

        /**
         * 起始偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 要获取的数据量，默认为10，最大为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤器列表。Name字段支持
RiskLevel
         * @type {Array.<ComplianceFilters> || null}
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
        this.CustomerAssetId = 'CustomerAssetId' in params ? params.CustomerAssetId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ComplianceFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeAssetImageRegistryVulListExport返回参数结构体
 * @class
 */
class DescribeAssetImageRegistryVulListExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * excel文件下载地址
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 运行是安全详情，进程基础信息
 * @class
 */
class ProcessDetailBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进程名称
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 进程pid
         * @type {number || null}
         */
        this.ProcessId = null;

        /**
         * 进程启动用户
         * @type {string || null}
         */
        this.ProcessStartUser = null;

        /**
         * 进程用户组
         * @type {string || null}
         */
        this.ProcessUserGroup = null;

        /**
         * 进程路径
         * @type {string || null}
         */
        this.ProcessPath = null;

        /**
         * 进程命令行参数
         * @type {string || null}
         */
        this.ProcessParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.ProcessId = 'ProcessId' in params ? params.ProcessId : null;
        this.ProcessStartUser = 'ProcessStartUser' in params ? params.ProcessStartUser : null;
        this.ProcessUserGroup = 'ProcessUserGroup' in params ? params.ProcessUserGroup : null;
        this.ProcessPath = 'ProcessPath' in params ? params.ProcessPath : null;
        this.ProcessParam = 'ProcessParam' in params ? params.ProcessParam : null;

    }
}

/**
 * DescribeAssetHostList请求参数结构体
 * @class
 */
class DescribeAssetHostListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Status - String - 是否必填：否 - agent状态筛选，"ALL":"全部"(或不传该字段),"UNINSTALL"："未安装","OFFLINE"："离线", "ONLINE"："防护中"</li>
<li>HostName - String - 是否必填：否 - 主机名筛选</li>
<li>Group- String - 是否必填：否 - 主机群组搜索</li>
<li>HostIP- string - 是否必填：否 - 主机ip搜索</li>
<li>HostID- string - 是否必填：否 - 主机id搜索</li>
<li>DockerVersion- string - 是否必填：否 - docker版本搜索</li>
<li>MachineType- string - 是否必填：否 - 主机来源MachineType搜索，"ALL":"全部"(或不传该字段),主机来源：["CVM", "ECM", "LH", "BM"]  中的之一为腾讯云服务器；["Other"]之一非腾讯云服务器；</li>
<li>DockerStatus- string - 是否必填：否 - docker安装状态，"ALL":"全部"(或不传该字段),"INSTALL":"已安装","UNINSTALL":"未安装"</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式 asc,desc
         * @type {string || null}
         */
        this.Order = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeRiskSyscallEventsExport请求参数结构体
 * @class
 */
class DescribeRiskSyscallEventsExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.ExportField = 'ExportField' in params ? params.ExportField : null;

    }
}

/**
 * DescribeRiskSyscallWhiteLists请求参数结构体
 * @class
 */
class DescribeRiskSyscallWhiteListsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}]
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 升序降序,asc desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeUnfinishRefreshTask请求参数结构体
 * @class
 */
class DescribeUnfinishRefreshTaskRequest extends  AbstractModel {
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
 * DescribeAssetImageRegistryScanStatusOneKey返回参数结构体
 * @class
 */
class DescribeAssetImageRegistryScanStatusOneKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像个数
         * @type {number || null}
         */
        this.ImageTotal = null;

        /**
         * 扫描镜像个数
         * @type {number || null}
         */
        this.ImageScanCnt = null;

        /**
         * 扫描进度列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageProgress> || null}
         */
        this.ImageStatus = null;

        /**
         * 安全个数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 风险个数
         * @type {number || null}
         */
        this.RiskCount = null;

        /**
         * 总的扫描进度
         * @type {number || null}
         */
        this.Schedule = null;

        /**
         * 总的扫描状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 扫描剩余时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanRemainTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageTotal = 'ImageTotal' in params ? params.ImageTotal : null;
        this.ImageScanCnt = 'ImageScanCnt' in params ? params.ImageScanCnt : null;

        if (params.ImageStatus) {
            this.ImageStatus = new Array();
            for (let z in params.ImageStatus) {
                let obj = new ImageProgress();
                obj.deserialize(params.ImageStatus[z]);
                this.ImageStatus.push(obj);
            }
        }
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.RiskCount = 'RiskCount' in params ? params.RiskCount : null;
        this.Schedule = 'Schedule' in params ? params.Schedule : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ScanRemainTime = 'ScanRemainTime' in params ? params.ScanRemainTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetImageRegistryRegistryDetail请求参数结构体
 * @class
 */
class DescribeAssetImageRegistryRegistryDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库唯一id
         * @type {number || null}
         */
        this.RegistryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

    }
}

/**
 * UpdateAssetImageRegistryRegistryDetail请求参数结构体
 * @class
 */
class UpdateAssetImageRegistryRegistryDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 仓库url
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 仓库类型，列表：harbor
         * @type {string || null}
         */
        this.RegistryType = null;

        /**
         * 网络类型，列表：public（公网）
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 仓库版本
         * @type {string || null}
         */
        this.RegistryVersion = null;

        /**
         * 区域，列表：default（默认）
         * @type {string || null}
         */
        this.RegistryRegion = null;

        /**
         * 限速
         * @type {number || null}
         */
        this.SpeedLimit = null;

        /**
         * 安全模式（证书校验）：0（默认） 非安全模式（跳过证书校验）：1
         * @type {number || null}
         */
        this.Insecure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.RegistryType = 'RegistryType' in params ? params.RegistryType : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.RegistryVersion = 'RegistryVersion' in params ? params.RegistryVersion : null;
        this.RegistryRegion = 'RegistryRegion' in params ? params.RegistryRegion : null;
        this.SpeedLimit = 'SpeedLimit' in params ? params.SpeedLimit : null;
        this.Insecure = 'Insecure' in params ? params.Insecure : null;

    }
}

/**
 * 容器安全服务信息列表
 * @class
 */
class ServiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务id
         * @type {string || null}
         */
        this.ServiceID = null;

        /**
         * 主机id
         * @type {string || null}
         */
        this.HostID = null;

        /**
         * 主机ip
         * @type {string || null}
         */
        this.HostIP = null;

        /**
         * 容器名
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 服务名 例如nginx/redis
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 账号
         * @type {string || null}
         */
        this.RunAs = null;

        /**
         * 监听端口
         * @type {Array.<string> || null}
         */
        this.Listen = null;

        /**
         * 配置
         * @type {string || null}
         */
        this.Config = null;

        /**
         * 关联进程数
         * @type {number || null}
         */
        this.ProcessCnt = null;

        /**
         * 访问日志
         * @type {string || null}
         */
        this.AccessLog = null;

        /**
         * 错误日志
         * @type {string || null}
         */
        this.ErrorLog = null;

        /**
         * 数据目录
         * @type {string || null}
         */
        this.DataPath = null;

        /**
         * web目录
         * @type {string || null}
         */
        this.WebRoot = null;

        /**
         * 关联的进程id
         * @type {Array.<number> || null}
         */
        this.Pids = null;

        /**
         * 服务类型 app,web,db
         * @type {string || null}
         */
        this.MainType = null;

        /**
         * 执行文件
         * @type {string || null}
         */
        this.Exe = null;

        /**
         * 服务命令行参数
         * @type {string || null}
         */
        this.Parameter = null;

        /**
         * 容器id
         * @type {string || null}
         */
        this.ContainerId = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 外网ip
         * @type {string || null}
         */
        this.PublicIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceID = 'ServiceID' in params ? params.ServiceID : null;
        this.HostID = 'HostID' in params ? params.HostID : null;
        this.HostIP = 'HostIP' in params ? params.HostIP : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.RunAs = 'RunAs' in params ? params.RunAs : null;
        this.Listen = 'Listen' in params ? params.Listen : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.ProcessCnt = 'ProcessCnt' in params ? params.ProcessCnt : null;
        this.AccessLog = 'AccessLog' in params ? params.AccessLog : null;
        this.ErrorLog = 'ErrorLog' in params ? params.ErrorLog : null;
        this.DataPath = 'DataPath' in params ? params.DataPath : null;
        this.WebRoot = 'WebRoot' in params ? params.WebRoot : null;
        this.Pids = 'Pids' in params ? params.Pids : null;
        this.MainType = 'MainType' in params ? params.MainType : null;
        this.Exe = 'Exe' in params ? params.Exe : null;
        this.Parameter = 'Parameter' in params ? params.Parameter : null;
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;

    }
}

/**
 * AddEditReverseShellWhiteList请求参数结构体
 * @class
 */
class AddEditReverseShellWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 增加或编辑白名单信息。新增白名单时WhiteListInfo.id为空，编辑白名单WhiteListInfo.id不能为空。
         * @type {ReverseShellWhiteListInfo || null}
         */
        this.WhiteListInfo = null;

        /**
         * 仅在添加事件白名单时候使用
         * @type {string || null}
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WhiteListInfo) {
            let obj = new ReverseShellWhiteListInfo();
            obj.deserialize(params.WhiteListInfo)
            this.WhiteListInfo = obj;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * DescribeVirusTaskList请求参数结构体
 * @class
 */
class DescribeVirusTaskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>ContainerName - String - 是否必填：否 - 容器名称</li>
<li>ContainerId - String - 是否必填：否 - 容器id</li>
<li>Hostname - String - 是否必填：否 - 主机名称</li>
<li>HostIp- String - 是否必填：是 - 容器名称</li>
         * @type {Array.<RunTimeFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RunTimeFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeAssetImageRegistryVirusListExport请求参数结构体
 * @class
 */
class DescribeAssetImageRegistryVirusListExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出字段
         * @type {Array.<string> || null}
         */
        this.ExportField = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Level- String - 是否必填：否 - 漏洞级别筛选，</li>
<li>Name - String - 是否必填：否 - 漏洞名称</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 镜像信息
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 镜像标识Id
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportField = 'ExportField' in params ? params.ExportField : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeAssetImageRegistryListExport返回参数结构体
 * @class
 */
class DescribeAssetImageRegistryListExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * excel文件下载地址
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器安全运行时，文件属性信息
 * @class
 */
class FileAttributeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件类型
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 文件大小(字节)
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 文件路径
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * 文件创建时间
         * @type {string || null}
         */
        this.FileCreateTime = null;

        /**
         * 最近被篡改文件创建时间
         * @type {string || null}
         */
        this.LatestTamperedFileMTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.FileCreateTime = 'FileCreateTime' in params ? params.FileCreateTime : null;
        this.LatestTamperedFileMTime = 'LatestTamperedFileMTime' in params ? params.LatestTamperedFileMTime : null;

    }
}

/**
 * DescribePostPayDetail请求参数结构体
 * @class
 */
class DescribePostPayDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeAssetHostDetail请求参数结构体
 * @class
 */
class DescribeAssetHostDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机id
         * @type {string || null}
         */
        this.HostId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostId = 'HostId' in params ? params.HostId : null;

    }
}

/**
 * DescribeRefreshTask返回参数结构体
 * @class
 */
class DescribeRefreshTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 刷新任务状态，可能为：Task_New,Task_Running,Task_Finish,Task_Error,Task_NoExist
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 反弹shell白名单信息
 * @class
 */
class ReverseShellWhiteListInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标IP
         * @type {string || null}
         */
        this.DstIp = null;

        /**
         * 目标端口
         * @type {string || null}
         */
        this.DstPort = null;

        /**
         * 目标进程
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 镜像id数组，为空代表全部
         * @type {Array.<string> || null}
         */
        this.ImageIds = null;

        /**
         * 白名单id，如果新建则id为空
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DstIp = 'DstIp' in params ? params.DstIp : null;
        this.DstPort = 'DstPort' in params ? params.DstPort : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.ImageIds = 'ImageIds' in params ? params.ImageIds : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 运行时木马列表信息
 * @class
 */
class VirusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件路径
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * 病毒名称
         * @type {string || null}
         */
        this.VirusName = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 容器名称
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 容器id
         * @type {string || null}
         */
        this.ContainerId = null;

        /**
         * 容器状态，CS_RUNING:运行， CS_PAUSE:暂停，CS_STOP:停止，
												       CS_CREATE:已经创建， CS_DESTORY:销毁
         * @type {string || null}
         */
        this.ContainerStatus = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * DEAL_NONE:文件待处理
DEAL_IGNORE:已经忽略
DEAL_ADD_WHITELIST:加白
DEAL_DEL:文件已经删除
DEAL_ISOLATE:已经隔离
DEAL_ISOLATING:隔离中
DEAL_ISOLATE_FAILED:隔离失败
DEAL_RECOVERING:恢复中
DEAL_RECOVER_FAILED: 恢复失败
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 事件id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 事件描述
         * @type {string || null}
         */
        this.HarmDescribe = null;

        /**
         * 建议方案
         * @type {string || null}
         */
        this.SuggestScheme = null;

        /**
         * 失败子状态:
FILE_NOT_FOUND:文件不存在
FILE_ABNORMAL:文件异常
FILE_ABNORMAL_DEAL_RECOVER:恢复文件时，文件异常
BACKUP_FILE_NOT_FOUND:备份文件不存在
CONTAINER_NOT_FOUND_DEAL_ISOLATE:隔离时，容器不存在
CONTAINER_NOT_FOUND_DEAL_RECOVER:恢复时，容器不存在
TIMEOUT: 超时
TOO_MANY: 任务过多
OFFLINE: 离线
INTERNAL: 服务内部错误
VALIDATION: 参数非法
         * @type {string || null}
         */
        this.SubStatus = null;

        /**
         * 网络状态
未隔离  	NORMAL
已隔离		ISOLATED
隔离中		ISOLATING
隔离失败	ISOLATE_FAILED
解除隔离中  RESTORING
解除隔离失败 RESTORE_FAILED
         * @type {string || null}
         */
        this.ContainerNetStatus = null;

        /**
         * 容器子状态
"AGENT_OFFLINE"       //Agent离线
	"NODE_DESTROYED"      //节点已销毁
	"CONTAINER_EXITED"    //容器已退出
	"CONTAINER_DESTROYED" //容器已销毁
	"SHARED_HOST"         // 容器与主机共享网络
	"RESOURCE_LIMIT"      //隔离操作资源超限
	"UNKNOW"              // 原因未知
         * @type {string || null}
         */
        this.ContainerNetSubStatus = null;

        /**
         * 容器隔离操作来源
         * @type {string || null}
         */
        this.ContainerIsolateOperationSrc = null;

        /**
         * md5值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MD5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.VirusName = 'VirusName' in params ? params.VirusName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;
        this.ContainerStatus = 'ContainerStatus' in params ? params.ContainerStatus : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.HarmDescribe = 'HarmDescribe' in params ? params.HarmDescribe : null;
        this.SuggestScheme = 'SuggestScheme' in params ? params.SuggestScheme : null;
        this.SubStatus = 'SubStatus' in params ? params.SubStatus : null;
        this.ContainerNetStatus = 'ContainerNetStatus' in params ? params.ContainerNetStatus : null;
        this.ContainerNetSubStatus = 'ContainerNetSubStatus' in params ? params.ContainerNetSubStatus : null;
        this.ContainerIsolateOperationSrc = 'ContainerIsolateOperationSrc' in params ? params.ContainerIsolateOperationSrc : null;
        this.MD5 = 'MD5' in params ? params.MD5 : null;

    }
}

/**
 * 修改容器逃逸扫描策略开关信息
 * @class
 */
class EscapeRuleEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则类型
   ESCAPE_HOST_ACESS_FILE:宿主机文件访问逃逸
   ESCAPE_MOUNT_NAMESPACE:MountNamespace逃逸
   ESCAPE_PRIVILEDGE:程序提权逃逸
   ESCAPE_PRIVILEDGE_CONTAINER_START:特权容器启动逃逸
   ESCAPE_MOUNT_SENSITIVE_PTAH:敏感路径挂载
   ESCAPE_SYSCALL:Syscall逃逸
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 是否打开：false否 ，true是
         * @type {boolean || null}
         */
        this.IsEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.IsEnable = 'IsEnable' in params ? params.IsEnable : null;

    }
}

module.exports = {
    CreateVirusScanAgainRequest: CreateVirusScanAgainRequest,
    UpdateImageRegistryTimingScanTaskResponse: UpdateImageRegistryTimingScanTaskResponse,
    DescribeUnfinishRefreshTaskResponse: DescribeUnfinishRefreshTaskResponse,
    ComplianceBenchmarkStandardEnable: ComplianceBenchmarkStandardEnable,
    DescribeRiskSyscallWhiteListsResponse: DescribeRiskSyscallWhiteListsResponse,
    CreateRefreshTaskResponse: CreateRefreshTaskResponse,
    ImageVirusInfo: ImageVirusInfo,
    AbnormalProcessEventDescription: AbnormalProcessEventDescription,
    CompliancePeriodTaskRule: CompliancePeriodTaskRule,
    DescribeVirusScanTimeoutSettingResponse: DescribeVirusScanTimeoutSettingResponse,
    ClusterCreateComponentItem: ClusterCreateComponentItem,
    DescribeAssetComponentListResponse: DescribeAssetComponentListResponse,
    DescribeAssetImageRegistryVulListResponse: DescribeAssetImageRegistryVulListResponse,
    AddAssetImageRegistryRegistryDetailResponse: AddAssetImageRegistryRegistryDetailResponse,
    DeleteCompliancePolicyItemFromWhitelistRequest: DeleteCompliancePolicyItemFromWhitelistRequest,
    DescribeAssetImageDetailRequest: DescribeAssetImageDetailRequest,
    ModifyAssetImageScanStopResponse: ModifyAssetImageScanStopResponse,
    DescribeComplianceScanFailedAssetListResponse: DescribeComplianceScanFailedAssetListResponse,
    SyncAssetImageRegistryAssetResponse: SyncAssetImageRegistryAssetResponse,
    DescribeAssetImageRegistryVirusListExportResponse: DescribeAssetImageRegistryVirusListExportResponse,
    DescribeSecEventsTendencyResponse: DescribeSecEventsTendencyResponse,
    DescribeAccessControlEventsExportResponse: DescribeAccessControlEventsExportResponse,
    AddEditAbnormalProcessRuleRequest: AddEditAbnormalProcessRuleRequest,
    DescribeComplianceTaskAssetSummaryRequest: DescribeComplianceTaskAssetSummaryRequest,
    ModifyAssetImageRegistryScanStopResponse: ModifyAssetImageRegistryScanStopResponse,
    DescribeProVersionInfoRequest: DescribeProVersionInfoRequest,
    SetCheckModeResponse: SetCheckModeResponse,
    DescribeAssetImageScanStatusResponse: DescribeAssetImageScanStatusResponse,
    DescribeAbnormalProcessRulesExportRequest: DescribeAbnormalProcessRulesExportRequest,
    DescribePurchaseStateInfoResponse: DescribePurchaseStateInfoResponse,
    ModifyVirusFileStatusResponse: ModifyVirusFileStatusResponse,
    DescribeAssetImageRegistryRegistryDetailResponse: DescribeAssetImageRegistryRegistryDetailResponse,
    RunTimeFilters: RunTimeFilters,
    DescribeVirusDetailRequest: DescribeVirusDetailRequest,
    DescribeClusterDetailRequest: DescribeClusterDetailRequest,
    DescribeAssetImageListRequest: DescribeAssetImageListRequest,
    DescribeRiskSyscallWhiteListDetailRequest: DescribeRiskSyscallWhiteListDetailRequest,
    ModifyAbnormalProcessRuleStatusRequest: ModifyAbnormalProcessRuleStatusRequest,
    ProcessDetailInfo: ProcessDetailInfo,
    ScanCompliancePolicyItemsRequest: ScanCompliancePolicyItemsRequest,
    DescribeAssetImageVirusListExportRequest: DescribeAssetImageVirusListExportRequest,
    CreateAssetImageScanTaskResponse: CreateAssetImageScanTaskResponse,
    DescribeTaskResultSummaryRequest: DescribeTaskResultSummaryRequest,
    DeleteAccessControlRulesRequest: DeleteAccessControlRulesRequest,
    ComplianceK8SDetailInfo: ComplianceK8SDetailInfo,
    AccessControlEventDescription: AccessControlEventDescription,
    DescribeAccessControlEventsResponse: DescribeAccessControlEventsResponse,
    ProcessBaseInfo: ProcessBaseInfo,
    ComplianceAssetDetailInfo: ComplianceAssetDetailInfo,
    DescribeRiskSyscallEventsResponse: DescribeRiskSyscallEventsResponse,
    DescribeAssetImageRiskListResponse: DescribeAssetImageRiskListResponse,
    DescribeReverseShellEventsResponse: DescribeReverseShellEventsResponse,
    ImageSimpleInfo: ImageSimpleInfo,
    DescribeComplianceAssetDetailInfoRequest: DescribeComplianceAssetDetailInfoRequest,
    CreateExportComplianceStatusListJobResponse: CreateExportComplianceStatusListJobResponse,
    DescribeAssetAppServiceListResponse: DescribeAssetAppServiceListResponse,
    ComplianceBenchmarkStandard: ComplianceBenchmarkStandard,
    DescribeEscapeRuleInfoResponse: DescribeEscapeRuleInfoResponse,
    DescribePurchaseStateInfoRequest: DescribePurchaseStateInfoRequest,
    AddCompliancePolicyItemToWhitelistRequest: AddCompliancePolicyItemToWhitelistRequest,
    ComplianceAssetSummary: ComplianceAssetSummary,
    EscapeRule: EscapeRule,
    CompliancePeriodTask: CompliancePeriodTask,
    RemoveAssetImageRegistryRegistryDetailResponse: RemoveAssetImageRegistryRegistryDetailResponse,
    UpdateAssetImageRegistryRegistryDetailResponse: UpdateAssetImageRegistryRegistryDetailResponse,
    DeleteAbnormalProcessRulesResponse: DeleteAbnormalProcessRulesResponse,
    RuleBaseInfo: RuleBaseInfo,
    ProcessInfo: ProcessInfo,
    DescribeReverseShellDetailRequest: DescribeReverseShellDetailRequest,
    ModifyReverseShellStatusRequest: ModifyReverseShellStatusRequest,
    DescribeAssetImageRiskListExportRequest: DescribeAssetImageRiskListExportRequest,
    DescribeAffectedWorkloadListRequest: DescribeAffectedWorkloadListRequest,
    DescribeAffectedClusterCountRequest: DescribeAffectedClusterCountRequest,
    DescribeAssetImageRegistryVulListExportRequest: DescribeAssetImageRegistryVulListExportRequest,
    AddEditRiskSyscallWhiteListRequest: AddEditRiskSyscallWhiteListRequest,
    ReverseShellEventInfo: ReverseShellEventInfo,
    DescribeRiskSyscallDetailRequest: DescribeRiskSyscallDetailRequest,
    DescribeAbnormalProcessRulesRequest: DescribeAbnormalProcessRulesRequest,
    DescribeAssetImageRegistryListResponse: DescribeAssetImageRegistryListResponse,
    ExportVirusListResponse: ExportVirusListResponse,
    DescribeAssetImageVirusListResponse: DescribeAssetImageVirusListResponse,
    DescribeImageRiskSummaryRequest: DescribeImageRiskSummaryRequest,
    ModifyReverseShellStatusResponse: ModifyReverseShellStatusResponse,
    CreateAssetImageScanSettingRequest: CreateAssetImageScanSettingRequest,
    DescribeAssetSummaryResponse: DescribeAssetSummaryResponse,
    DescribeImageRegistryTimingScanTaskResponse: DescribeImageRegistryTimingScanTaskResponse,
    DescribeAssetWebServiceListRequest: DescribeAssetWebServiceListRequest,
    ModifyEscapeEventStatusResponse: ModifyEscapeEventStatusResponse,
    CheckRepeatAssetImageRegistryResponse: CheckRepeatAssetImageRegistryResponse,
    DescribeAccessControlEventsExportRequest: DescribeAccessControlEventsExportRequest,
    DescribeRiskSyscallDetailResponse: DescribeRiskSyscallDetailResponse,
    ReverseShellEventDescription: ReverseShellEventDescription,
    DescribeAssetImageBindRuleInfoResponse: DescribeAssetImageBindRuleInfoResponse,
    ScanCompliancePolicyItemsResponse: ScanCompliancePolicyItemsResponse,
    DescribeAssetContainerListRequest: DescribeAssetContainerListRequest,
    DescribeEscapeSafeStateResponse: DescribeEscapeSafeStateResponse,
    AbnormalProcessRuleInfo: AbnormalProcessRuleInfo,
    ScanComplianceAssetsByPolicyItemResponse: ScanComplianceAssetsByPolicyItemResponse,
    ComplianceWhitelistItem: ComplianceWhitelistItem,
    DescribeAssetPortListRequest: DescribeAssetPortListRequest,
    DescribeComplianceTaskPolicyItemSummaryListResponse: DescribeComplianceTaskPolicyItemSummaryListResponse,
    ComplianceContainerDetailInfo: ComplianceContainerDetailInfo,
    DescribeReverseShellEventsRequest: DescribeReverseShellEventsRequest,
    DescribeAbnormalProcessRuleDetailRequest: DescribeAbnormalProcessRuleDetailRequest,
    SyncAssetImageRegistryAssetRequest: SyncAssetImageRegistryAssetRequest,
    ClusterCheckTaskItem: ClusterCheckTaskItem,
    DescribeAffectedClusterCountResponse: DescribeAffectedClusterCountResponse,
    RenewImageAuthorizeStateRequest: RenewImageAuthorizeStateRequest,
    CreateAssetImageRegistryScanTaskOneKeyRequest: CreateAssetImageRegistryScanTaskOneKeyRequest,
    ModifyEscapeEventStatusRequest: ModifyEscapeEventStatusRequest,
    DescribeAssetImageBindRuleInfoRequest: DescribeAssetImageBindRuleInfoRequest,
    ImageHost: ImageHost,
    DescribeAssetContainerListResponse: DescribeAssetContainerListResponse,
    DescribeVirusMonitorSettingResponse: DescribeVirusMonitorSettingResponse,
    DescribeContainerSecEventSummaryRequest: DescribeContainerSecEventSummaryRequest,
    DescribeAssetImageRegistrySummaryResponse: DescribeAssetImageRegistrySummaryResponse,
    DescribeImageAuthorizedInfoResponse: DescribeImageAuthorizedInfoResponse,
    DescribeAbnormalProcessEventsRequest: DescribeAbnormalProcessEventsRequest,
    ModifyAbnormalProcessRuleStatusResponse: ModifyAbnormalProcessRuleStatusResponse,
    DescribeVirusListRequest: DescribeVirusListRequest,
    DescribeComplianceAssetListRequest: DescribeComplianceAssetListRequest,
    ModifyVirusScanSettingResponse: ModifyVirusScanSettingResponse,
    ImagesVul: ImagesVul,
    ModifyVirusMonitorSettingRequest: ModifyVirusMonitorSettingRequest,
    ScanComplianceAssetsByPolicyItemRequest: ScanComplianceAssetsByPolicyItemRequest,
    DescribeEscapeEventInfoResponse: DescribeEscapeEventInfoResponse,
    ClusterInfoItem: ClusterInfoItem,
    AddAssetImageRegistryRegistryDetailRequest: AddAssetImageRegistryRegistryDetailRequest,
    DescribeAssetImageHostListRequest: DescribeAssetImageHostListRequest,
    AbnormalProcessEventInfo: AbnormalProcessEventInfo,
    DescribeCompliancePeriodTaskListResponse: DescribeCompliancePeriodTaskListResponse,
    DescribeAssetImageScanSettingRequest: DescribeAssetImageScanSettingRequest,
    AccessControlSystemChildRuleInfo: AccessControlSystemChildRuleInfo,
    AccessControlEventInfo: AccessControlEventInfo,
    DescribeClusterSummaryResponse: DescribeClusterSummaryResponse,
    DescribeValueAddedSrvInfoRequest: DescribeValueAddedSrvInfoRequest,
    DescribeCompliancePolicyItemAffectedSummaryResponse: DescribeCompliancePolicyItemAffectedSummaryResponse,
    ModifyRiskSyscallStatusResponse: ModifyRiskSyscallStatusResponse,
    RunTimeEventBaseInfo: RunTimeEventBaseInfo,
    DescribeReverseShellWhiteListsResponse: DescribeReverseShellWhiteListsResponse,
    ModifyAssetImageRegistryScanStopOneKeyRequest: ModifyAssetImageRegistryScanStopOneKeyRequest,
    DescribeExportJobResultRequest: DescribeExportJobResultRequest,
    ImageInfo: ImageInfo,
    DescribeAffectedWorkloadListResponse: DescribeAffectedWorkloadListResponse,
    CreateComplianceTaskResponse: CreateComplianceTaskResponse,
    ImageRiskTendencyInfo: ImageRiskTendencyInfo,
    ModifyAssetRequest: ModifyAssetRequest,
    DescribeRiskListRequest: DescribeRiskListRequest,
    ModifyAccessControlStatusResponse: ModifyAccessControlStatusResponse,
    ContainerNetwork: ContainerNetwork,
    DescribeAssetAppServiceListRequest: DescribeAssetAppServiceListRequest,
    RemoveAssetImageRegistryRegistryDetailRequest: RemoveAssetImageRegistryRegistryDetailRequest,
    ModifyVirusScanSettingRequest: ModifyVirusScanSettingRequest,
    DescribeAssetDBServiceListRequest: DescribeAssetDBServiceListRequest,
    DescribeProVersionInfoResponse: DescribeProVersionInfoResponse,
    AddEditAbnormalProcessRuleResponse: AddEditAbnormalProcessRuleResponse,
    DescribeAssetImageRegistryListRequest: DescribeAssetImageRegistryListRequest,
    CreateCheckComponentResponse: CreateCheckComponentResponse,
    DescribeImageRegistryTimingScanTaskRequest: DescribeImageRegistryTimingScanTaskRequest,
    DescribeRiskSyscallWhiteListDetailResponse: DescribeRiskSyscallWhiteListDetailResponse,
    DescribeReverseShellWhiteListsRequest: DescribeReverseShellWhiteListsRequest,
    ScanComplianceAssetsResponse: ScanComplianceAssetsResponse,
    CreateComplianceTaskRequest: CreateComplianceTaskRequest,
    DescribeReverseShellWhiteListDetailResponse: DescribeReverseShellWhiteListDetailResponse,
    DescribeAssetImageVulListExportResponse: DescribeAssetImageVulListExportResponse,
    DescribeAssetImageRegistryRiskListExportRequest: DescribeAssetImageRegistryRiskListExportRequest,
    EscapeEventDescription: EscapeEventDescription,
    DescribeAssetImageDetailResponse: DescribeAssetImageDetailResponse,
    CreateAssetImageRegistryScanTaskOneKeyResponse: CreateAssetImageRegistryScanTaskOneKeyResponse,
    AbnormalProcessSystemChildRuleInfo: AbnormalProcessSystemChildRuleInfo,
    DescribeAssetImageVulListExportRequest: DescribeAssetImageVulListExportRequest,
    DescribeExportJobResultResponse: DescribeExportJobResultResponse,
    ReverseShellWhiteListBaseInfo: ReverseShellWhiteListBaseInfo,
    AccessControlRuleInfo: AccessControlRuleInfo,
    DescribeAssetHostListResponse: DescribeAssetHostListResponse,
    ImageRepoInfo: ImageRepoInfo,
    CreateAssetImageRegistryScanTaskResponse: CreateAssetImageRegistryScanTaskResponse,
    PortInfo: PortInfo,
    DescribeAssetImageRegistrySummaryRequest: DescribeAssetImageRegistrySummaryRequest,
    DescribeTaskResultSummaryResponse: DescribeTaskResultSummaryResponse,
    HostInfo: HostInfo,
    DescribeVirusScanTimeoutSettingRequest: DescribeVirusScanTimeoutSettingRequest,
    ModifyAssetImageScanStopRequest: ModifyAssetImageScanStopRequest,
    CreateRefreshTaskRequest: CreateRefreshTaskRequest,
    DescribeAssetImageRiskListExportResponse: DescribeAssetImageRiskListExportResponse,
    DescribeAccessControlEventsRequest: DescribeAccessControlEventsRequest,
    DescribeAccessControlRuleDetailRequest: DescribeAccessControlRuleDetailRequest,
    ExportVirusListRequest: ExportVirusListRequest,
    ImageRiskInfo: ImageRiskInfo,
    DeleteReverseShellWhiteListsResponse: DeleteReverseShellWhiteListsResponse,
    ComplianceHostDetailInfo: ComplianceHostDetailInfo,
    AccessControlChildRuleInfo: AccessControlChildRuleInfo,
    DescribeRiskSyscallNamesResponse: DescribeRiskSyscallNamesResponse,
    AddEditReverseShellWhiteListResponse: AddEditReverseShellWhiteListResponse,
    DescribeAbnormalProcessEventsResponse: DescribeAbnormalProcessEventsResponse,
    InitializeUserComplianceEnvironmentResponse: InitializeUserComplianceEnvironmentResponse,
    SetCheckModeRequest: SetCheckModeRequest,
    DescribeVirusTaskListResponse: DescribeVirusTaskListResponse,
    DescribeAssetHostDetailResponse: DescribeAssetHostDetailResponse,
    DescribeAffectedNodeListResponse: DescribeAffectedNodeListResponse,
    DescribeClusterSummaryRequest: DescribeClusterSummaryRequest,
    DescribeAbnormalProcessRulesExportResponse: DescribeAbnormalProcessRulesExportResponse,
    DescribeEscapeEventDetailResponse: DescribeEscapeEventDetailResponse,
    DeleteAccessControlRulesResponse: DeleteAccessControlRulesResponse,
    RenewImageAuthorizeStateResponse: RenewImageAuthorizeStateResponse,
    DescribeEscapeRuleInfoRequest: DescribeEscapeRuleInfoRequest,
    DescribeComplianceWhitelistItemListResponse: DescribeComplianceWhitelistItemListResponse,
    DescribeVirusSummaryResponse: DescribeVirusSummaryResponse,
    UpdateImageRegistryTimingScanTaskRequest: UpdateImageRegistryTimingScanTaskRequest,
    DescribeSecEventsTendencyRequest: DescribeSecEventsTendencyRequest,
    DescribeContainerSecEventSummaryResponse: DescribeContainerSecEventSummaryResponse,
    DescribeAssetContainerDetailRequest: DescribeAssetContainerDetailRequest,
    ModifyAccessControlStatusRequest: ModifyAccessControlStatusRequest,
    ScanComplianceScanFailedAssetsRequest: ScanComplianceScanFailedAssetsRequest,
    ModifyCompliancePeriodTaskResponse: ModifyCompliancePeriodTaskResponse,
    RiskSyscallEventInfo: RiskSyscallEventInfo,
    ClusterCheckItem: ClusterCheckItem,
    DescribeAssetImageVulListResponse: DescribeAssetImageVulListResponse,
    ImageVul: ImageVul,
    AssetFilters: AssetFilters,
    DescribePostPayDetailResponse: DescribePostPayDetailResponse,
    DescribeAssetImageScanStatusRequest: DescribeAssetImageScanStatusRequest,
    DescribeCheckItemListResponse: DescribeCheckItemListResponse,
    ComplianceScanFailedAsset: ComplianceScanFailedAsset,
    ScanComplianceAssetsRequest: ScanComplianceAssetsRequest,
    DescribeAbnormalProcessRuleDetailResponse: DescribeAbnormalProcessRuleDetailResponse,
    ModifyVirusFileStatusRequest: ModifyVirusFileStatusRequest,
    DescribeAssetImageRegistryListExportRequest: DescribeAssetImageRegistryListExportRequest,
    DescribeAssetImageRegistryRiskListExportResponse: DescribeAssetImageRegistryRiskListExportResponse,
    ModifyEscapeRuleRequest: ModifyEscapeRuleRequest,
    DescribeAbnormalProcessRulesResponse: DescribeAbnormalProcessRulesResponse,
    DescribeCheckItemListRequest: DescribeCheckItemListRequest,
    DescribeVirusScanSettingResponse: DescribeVirusScanSettingResponse,
    DescribeAccessControlRuleDetailResponse: DescribeAccessControlRuleDetailResponse,
    CreateOrModifyPostPayCoresRequest: CreateOrModifyPostPayCoresRequest,
    DescribeAssetImageScanTaskRequest: DescribeAssetImageScanTaskRequest,
    DescribeValueAddedSrvInfoResponse: DescribeValueAddedSrvInfoResponse,
    CreateVirusScanTaskResponse: CreateVirusScanTaskResponse,
    DescribeAssetProcessListRequest: DescribeAssetProcessListRequest,
    DescribeAssetProcessListResponse: DescribeAssetProcessListResponse,
    EscapeEventInfo: EscapeEventInfo,
    ModifyVirusScanTimeoutSettingResponse: ModifyVirusScanTimeoutSettingResponse,
    DescribeAssetImageRegistryDetailRequest: DescribeAssetImageRegistryDetailRequest,
    CreateAssetImageRegistryScanTaskRequest: CreateAssetImageRegistryScanTaskRequest,
    DescribeAssetImageListExportResponse: DescribeAssetImageListExportResponse,
    DescribeAssetContainerDetailResponse: DescribeAssetContainerDetailResponse,
    AbnormalProcessChildRuleInfo: AbnormalProcessChildRuleInfo,
    ScanComplianceScanFailedAssetsResponse: ScanComplianceScanFailedAssetsResponse,
    DescribeAssetImageVirusListExportResponse: DescribeAssetImageVirusListExportResponse,
    SecTendencyEventInfo: SecTendencyEventInfo,
    DescribeAssetPortListResponse: DescribeAssetPortListResponse,
    DescribeRefreshTaskRequest: DescribeRefreshTaskRequest,
    CreateClusterCheckTaskResponse: CreateClusterCheckTaskResponse,
    DescribeCompliancePolicyItemAffectedAssetListRequest: DescribeCompliancePolicyItemAffectedAssetListRequest,
    DescribeImageRiskTendencyRequest: DescribeImageRiskTendencyRequest,
    CreateOrModifyPostPayCoresResponse: CreateOrModifyPostPayCoresResponse,
    ComplianceAffectedAsset: ComplianceAffectedAsset,
    DescribeVirusMonitorSettingRequest: DescribeVirusMonitorSettingRequest,
    DescribeAssetImageHostListResponse: DescribeAssetImageHostListResponse,
    DescribeImageRiskTendencyResponse: DescribeImageRiskTendencyResponse,
    DescribeComplianceScanFailedAssetListRequest: DescribeComplianceScanFailedAssetListRequest,
    DescribeAssetImageRegistryVulListRequest: DescribeAssetImageRegistryVulListRequest,
    DescribeImageSimpleListResponse: DescribeImageSimpleListResponse,
    DescribeVirusScanSettingRequest: DescribeVirusScanSettingRequest,
    DescribeUserClusterResponse: DescribeUserClusterResponse,
    DescribeAssetImageRegistryRegistryListRequest: DescribeAssetImageRegistryRegistryListRequest,
    DescribeVirusScanTaskStatusResponse: DescribeVirusScanTaskStatusResponse,
    DescribeEscapeEventsExportResponse: DescribeEscapeEventsExportResponse,
    ComplianceImageDetailInfo: ComplianceImageDetailInfo,
    DescribeComplianceWhitelistItemListRequest: DescribeComplianceWhitelistItemListRequest,
    DescribeAccessControlDetailRequest: DescribeAccessControlDetailRequest,
    ClusterRiskItem: ClusterRiskItem,
    DescribeVirusListResponse: DescribeVirusListResponse,
    DescribeAbnormalProcessEventsExportRequest: DescribeAbnormalProcessEventsExportRequest,
    DescribeAssetComponentListRequest: DescribeAssetComponentListRequest,
    DescribeUserClusterRequest: DescribeUserClusterRequest,
    DescribeAbnormalProcessDetailResponse: DescribeAbnormalProcessDetailResponse,
    DescribeAssetImageListExportRequest: DescribeAssetImageListExportRequest,
    ModifyAssetImageRegistryScanStopOneKeyResponse: ModifyAssetImageRegistryScanStopOneKeyResponse,
    DescribeRiskSyscallNamesRequest: DescribeRiskSyscallNamesRequest,
    SoftQuotaDayInfo: SoftQuotaDayInfo,
    DescribeAssetImageRegistryVirusListResponse: DescribeAssetImageRegistryVirusListResponse,
    DescribeAssetImageSimpleListRequest: DescribeAssetImageSimpleListRequest,
    DescribeAssetDBServiceListResponse: DescribeAssetDBServiceListResponse,
    DescribeImageSimpleListRequest: DescribeImageSimpleListRequest,
    DescribeAssetWebServiceListResponse: DescribeAssetWebServiceListResponse,
    DescribeComplianceTaskPolicyItemSummaryListRequest: DescribeComplianceTaskPolicyItemSummaryListRequest,
    CompliancePolicyItemSummary: CompliancePolicyItemSummary,
    DescribeAssetImageVulListRequest: DescribeAssetImageVulListRequest,
    ModifyRiskSyscallStatusRequest: ModifyRiskSyscallStatusRequest,
    RunTimeRiskInfo: RunTimeRiskInfo,
    CreateVirusScanTaskRequest: CreateVirusScanTaskRequest,
    DescribeAssetImageScanTaskResponse: DescribeAssetImageScanTaskResponse,
    AddEditAccessControlRuleRequest: AddEditAccessControlRuleRequest,
    ContainerMount: ContainerMount,
    DescribeAssetImageSimpleListResponse: DescribeAssetImageSimpleListResponse,
    DescribeComplianceAssetPolicyItemListResponse: DescribeComplianceAssetPolicyItemListResponse,
    ComplianceFilters: ComplianceFilters,
    ImagesInfo: ImagesInfo,
    DescribeReverseShellEventsExportRequest: DescribeReverseShellEventsExportRequest,
    WarningRule: WarningRule,
    DescribeAccessControlDetailResponse: DescribeAccessControlDetailResponse,
    DescribeAffectedNodeListRequest: DescribeAffectedNodeListRequest,
    DescribeAssetImageRegistryAssetStatusResponse: DescribeAssetImageRegistryAssetStatusResponse,
    DeleteReverseShellWhiteListsRequest: DeleteReverseShellWhiteListsRequest,
    AddEditRiskSyscallWhiteListResponse: AddEditRiskSyscallWhiteListResponse,
    ModifyAbnormalProcessStatusRequest: ModifyAbnormalProcessStatusRequest,
    ModifyAccessControlRuleStatusResponse: ModifyAccessControlRuleStatusResponse,
    ImageRisk: ImageRisk,
    DescribeClusterDetailResponse: DescribeClusterDetailResponse,
    ComplianceAssetPolicyItem: ComplianceAssetPolicyItem,
    InitializeUserComplianceEnvironmentRequest: InitializeUserComplianceEnvironmentRequest,
    DescribeAssetImageRiskListRequest: DescribeAssetImageRiskListRequest,
    DescribeEscapeSafeStateRequest: DescribeEscapeSafeStateRequest,
    StopVirusScanTaskRequest: StopVirusScanTaskRequest,
    DescribeEscapeEventDetailRequest: DescribeEscapeEventDetailRequest,
    DescribeVirusSummaryRequest: DescribeVirusSummaryRequest,
    RiskSyscallWhiteListBaseInfo: RiskSyscallWhiteListBaseInfo,
    DeleteAbnormalProcessRulesRequest: DeleteAbnormalProcessRulesRequest,
    ModifyCompliancePeriodTaskRequest: ModifyCompliancePeriodTaskRequest,
    DescribeRiskSyscallEventsRequest: DescribeRiskSyscallEventsRequest,
    DescribeRiskListResponse: DescribeRiskListResponse,
    ComponentInfo: ComponentInfo,
    DescribeAssetSummaryRequest: DescribeAssetSummaryRequest,
    CreateClusterCheckTaskRequest: CreateClusterCheckTaskRequest,
    DescribeAbnormalProcessDetailRequest: DescribeAbnormalProcessDetailRequest,
    CreateExportComplianceStatusListJobRequest: CreateExportComplianceStatusListJobRequest,
    ImageVirus: ImageVirus,
    DescribeEscapeEventInfoRequest: DescribeEscapeEventInfoRequest,
    DescribeRiskSyscallEventsExportResponse: DescribeRiskSyscallEventsExportResponse,
    ContainerInfo: ContainerInfo,
    DescribeAssetImageRegistryRiskInfoListRequest: DescribeAssetImageRegistryRiskInfoListRequest,
    DescribeAssetImageRegistryScanStatusOneKeyRequest: DescribeAssetImageRegistryScanStatusOneKeyRequest,
    ModifyAccessControlRuleStatusRequest: ModifyAccessControlRuleStatusRequest,
    DescribeWarningRulesRequest: DescribeWarningRulesRequest,
    RunTimeTendencyInfo: RunTimeTendencyInfo,
    DescribeContainerAssetSummaryRequest: DescribeContainerAssetSummaryRequest,
    ComponentsInfo: ComponentsInfo,
    DeleteRiskSyscallWhiteListsResponse: DeleteRiskSyscallWhiteListsResponse,
    DescribeAssetImageVirusListRequest: DescribeAssetImageVirusListRequest,
    DescribeAssetImageScanSettingResponse: DescribeAssetImageScanSettingResponse,
    DescribeReverseShellDetailResponse: DescribeReverseShellDetailResponse,
    DescribeAccessControlRulesExportResponse: DescribeAccessControlRulesExportResponse,
    ModifyAbnormalProcessStatusResponse: ModifyAbnormalProcessStatusResponse,
    DescribeAbnormalProcessEventsExportResponse: DescribeAbnormalProcessEventsExportResponse,
    DescribeContainerAssetSummaryResponse: DescribeContainerAssetSummaryResponse,
    CreateAssetImageScanTaskRequest: CreateAssetImageScanTaskRequest,
    DescribeEscapeEventsExportRequest: DescribeEscapeEventsExportRequest,
    DescribeImageRiskSummaryResponse: DescribeImageRiskSummaryResponse,
    CheckRepeatAssetImageRegistryRequest: CheckRepeatAssetImageRegistryRequest,
    AffectedNodeItem: AffectedNodeItem,
    CreateCheckComponentRequest: CreateCheckComponentRequest,
    DeleteRiskSyscallWhiteListsRequest: DeleteRiskSyscallWhiteListsRequest,
    DescribeImageAuthorizedInfoRequest: DescribeImageAuthorizedInfoRequest,
    DescribeAssetImageRegistryRiskInfoListResponse: DescribeAssetImageRegistryRiskInfoListResponse,
    DescribeAssetImageRegistryDetailResponse: DescribeAssetImageRegistryDetailResponse,
    AddCompliancePolicyItemToWhitelistResponse: AddCompliancePolicyItemToWhitelistResponse,
    DescribeAccessControlRulesRequest: DescribeAccessControlRulesRequest,
    StopVirusScanTaskResponse: StopVirusScanTaskResponse,
    AddEditWarningRulesRequest: AddEditWarningRulesRequest,
    ModifyAssetResponse: ModifyAssetResponse,
    DescribeReverseShellEventsExportResponse: DescribeReverseShellEventsExportResponse,
    ImagesBindRuleInfo: ImagesBindRuleInfo,
    DescribeAssetImageListResponse: DescribeAssetImageListResponse,
    ComplianceAssetInfo: ComplianceAssetInfo,
    DescribeAssetImageRegistryVirusListRequest: DescribeAssetImageRegistryVirusListRequest,
    DescribeReverseShellWhiteListDetailRequest: DescribeReverseShellWhiteListDetailRequest,
    ModifyVirusMonitorSettingResponse: ModifyVirusMonitorSettingResponse,
    DescribeComplianceTaskAssetSummaryResponse: DescribeComplianceTaskAssetSummaryResponse,
    DescribeWarningRulesResponse: DescribeWarningRulesResponse,
    VirusTaskInfo: VirusTaskInfo,
    AffectedWorkloadItem: AffectedWorkloadItem,
    DescribeCompliancePeriodTaskListRequest: DescribeCompliancePeriodTaskListRequest,
    DescribeAccessControlRulesExportRequest: DescribeAccessControlRulesExportRequest,
    RiskSyscallEventDescription: RiskSyscallEventDescription,
    AddEditWarningRulesResponse: AddEditWarningRulesResponse,
    DescribeAssetImageRegistryRegistryListResponse: DescribeAssetImageRegistryRegistryListResponse,
    DescribeAssetImageRegistryAssetStatusRequest: DescribeAssetImageRegistryAssetStatusRequest,
    ImageProgress: ImageProgress,
    ModifyVirusScanTimeoutSettingRequest: ModifyVirusScanTimeoutSettingRequest,
    CreateVirusScanAgainResponse: CreateVirusScanAgainResponse,
    AddEditAccessControlRuleResponse: AddEditAccessControlRuleResponse,
    DeleteCompliancePolicyItemFromWhitelistResponse: DeleteCompliancePolicyItemFromWhitelistResponse,
    CreateAssetImageScanSettingResponse: CreateAssetImageScanSettingResponse,
    DescribeAccessControlRulesResponse: DescribeAccessControlRulesResponse,
    ModifyEscapeRuleResponse: ModifyEscapeRuleResponse,
    AssetSimpleImageInfo: AssetSimpleImageInfo,
    DescribeCompliancePolicyItemAffectedSummaryRequest: DescribeCompliancePolicyItemAffectedSummaryRequest,
    DescribeVirusDetailResponse: DescribeVirusDetailResponse,
    DescribeComplianceAssetListResponse: DescribeComplianceAssetListResponse,
    DescribeComplianceAssetDetailInfoResponse: DescribeComplianceAssetDetailInfoResponse,
    ModifyAssetImageRegistryScanStopRequest: ModifyAssetImageRegistryScanStopRequest,
    DescribeVirusScanTaskStatusRequest: DescribeVirusScanTaskStatusRequest,
    RiskSyscallWhiteListInfo: RiskSyscallWhiteListInfo,
    DescribeCompliancePolicyItemAffectedAssetListResponse: DescribeCompliancePolicyItemAffectedAssetListResponse,
    DescribeComplianceAssetPolicyItemListRequest: DescribeComplianceAssetPolicyItemListRequest,
    DescribeAssetImageRegistryVulListExportResponse: DescribeAssetImageRegistryVulListExportResponse,
    ProcessDetailBaseInfo: ProcessDetailBaseInfo,
    DescribeAssetHostListRequest: DescribeAssetHostListRequest,
    DescribeRiskSyscallEventsExportRequest: DescribeRiskSyscallEventsExportRequest,
    DescribeRiskSyscallWhiteListsRequest: DescribeRiskSyscallWhiteListsRequest,
    DescribeUnfinishRefreshTaskRequest: DescribeUnfinishRefreshTaskRequest,
    DescribeAssetImageRegistryScanStatusOneKeyResponse: DescribeAssetImageRegistryScanStatusOneKeyResponse,
    DescribeAssetImageRegistryRegistryDetailRequest: DescribeAssetImageRegistryRegistryDetailRequest,
    UpdateAssetImageRegistryRegistryDetailRequest: UpdateAssetImageRegistryRegistryDetailRequest,
    ServiceInfo: ServiceInfo,
    AddEditReverseShellWhiteListRequest: AddEditReverseShellWhiteListRequest,
    DescribeVirusTaskListRequest: DescribeVirusTaskListRequest,
    DescribeAssetImageRegistryVirusListExportRequest: DescribeAssetImageRegistryVirusListExportRequest,
    DescribeAssetImageRegistryListExportResponse: DescribeAssetImageRegistryListExportResponse,
    FileAttributeInfo: FileAttributeInfo,
    DescribePostPayDetailRequest: DescribePostPayDetailRequest,
    DescribeAssetHostDetailRequest: DescribeAssetHostDetailRequest,
    DescribeRefreshTaskResponse: DescribeRefreshTaskResponse,
    ReverseShellWhiteListInfo: ReverseShellWhiteListInfo,
    VirusInfo: VirusInfo,
    EscapeRuleEnabled: EscapeRuleEnabled,

}
