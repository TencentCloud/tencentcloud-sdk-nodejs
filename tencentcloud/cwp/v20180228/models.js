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
 * ExportBashEvents请求参数结构体
 * @class
 */
class ExportBashEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤参数
         * @type {Array.<Filters> || null}
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
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeSearchTemplates返回参数结构体
 * @class
 */
class DescribeSearchTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 模板列表
         * @type {Array.<SearchTemplate> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new SearchTemplate();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportReverseShellEvents返回参数结构体
 * @class
 */
class ExportReverseShellEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出文件下载链接地址。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 任务id
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaselineTop返回参数结构体
 * @class
 */
class DescribeBaselineTopResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测项Top列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BaselineRuleTopInfo> || null}
         */
        this.RuleTopList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleTopList) {
            this.RuleTopList = new Array();
            for (let z in params.RuleTopList) {
                let obj = new BaselineRuleTopInfo();
                obj.deserialize(params.RuleTopList[z]);
                this.RuleTopList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetWebServiceInfoList返回参数结构体
 * @class
 */
class DescribeAssetWebServiceInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetWebServiceBaseInfo> || null}
         */
        this.WebServices = null;

        /**
         * 总数量
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

        if (params.WebServices) {
            this.WebServices = new Array();
            for (let z in params.WebServices) {
                let obj = new AssetWebServiceBaseInfo();
                obj.deserialize(params.WebServices[z]);
                this.WebServices.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetAppProcessList返回参数结构体
 * @class
 */
class DescribeAssetAppProcessListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进程列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetAppProcessInfo> || null}
         */
        this.Process = null;

        /**
         * 分区总数
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

        if (params.Process) {
            this.Process = new Array();
            for (let z in params.Process) {
                let obj = new AssetAppProcessInfo();
                obj.deserialize(params.Process[z]);
                this.Process.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScanVulAgain请求参数结构体
 * @class
 */
class ScanVulAgainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞事件id串，多个用英文逗号分隔
         * @type {string || null}
         */
        this.EventIds = null;

        /**
         * 重新检查的机器uuid,多个逗号分隔
         * @type {string || null}
         */
        this.Uuids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventIds = 'EventIds' in params ? params.EventIds : null;
        this.Uuids = 'Uuids' in params ? params.Uuids : null;

    }
}

/**
 * DeleteBaselineStrategy返回参数结构体
 * @class
 */
class DeleteBaselineStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportWebPageEventList返回参数结构体
 * @class
 */
class ExportWebPageEventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id 可通过 ExportTasks接口下载
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
 * DescribeUndoVulCounts返回参数结构体
 * @class
 */
class DescribeUndoVulCountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 未处理的漏洞数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UndoVulCount = null;

        /**
         * 未处理的主机数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UndoHostCount = null;

        /**
         * 普通版主机数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NotProfessionCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UndoVulCount = 'UndoVulCount' in params ? params.UndoVulCount : null;
        this.UndoHostCount = 'UndoHostCount' in params ? params.UndoHostCount : null;
        this.NotProfessionCount = 'NotProfessionCount' in params ? params.NotProfessionCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaselineScanSchedule返回参数结构体
 * @class
 */
class DescribeBaselineScanScheduleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测进度(百分比)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Schedule = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Schedule = 'Schedule' in params ? params.Schedule : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 恶意请求白名单列表信息
 * @class
 */
class MaliciousRequestWhiteListInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Mark = null;

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
        this.Mark = 'Mark' in params ? params.Mark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DeleteBashEvents返回参数结构体
 * @class
 */
class DeleteBashEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetProcessInfoList请求参数结构体
 * @class
 */
class DescribeAssetProcessInfoListRequest extends  AbstractModel {
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Name - String - 是否必填：否 - 进程名</li>
<li>User - String - 是否必填：否 - 进程用户</li>
<li>Group - String - 是否必填：否 - 进程用户组</li>
<li>Pid - uint64 - 是否必填：否 - 进程ID</li>
<li>Ppid - uint64 - 是否必填：否 - 父进程ID</li>
<li>OsType - uint64 - 是否必填：否 - windows/linux</li>
<li>Status - string - 是否必填：否 - 进程状态：
1:R 可执行
2:S 可中断
3:D 不可中断
4:T 暂停状态或跟踪状态
5:Z 僵尸状态
6:X 将被销毁</li>
<li>RunTimeStart - String - 是否必填：否 - 运行开始时间</li>
<li>RunTimeEnd - String - 是否必填：否 - 运行结束时间</li>
<li>InstallByPackage - uint64 - 是否必填：否 - 是否包安装：0否，1是</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询指定Quuid主机的信息
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 排序方式，asc升序 或 desc降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序方式：StartTime
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
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * ExportWebPageEventList请求参数结构体
 * @class
 */
class ExportWebPageEventListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>EventType - String - 是否必填：否 - 事件类型</li>
<li>EventStatus - String - 是否必填：否 - 事件状态</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序方式：CreateTime 或 RestoreTime，默认为CreateTime
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式，0降序，1升序，默认为0
         * @type {number || null}
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
 * 资产管理网卡信息
 * @class
 */
class AssetNetworkCardInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网卡名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Ipv4对应IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 网关
         * @type {string || null}
         */
        this.GateWay = null;

        /**
         * MAC地址
         * @type {string || null}
         */
        this.Mac = null;

        /**
         * Ipv6对应IP
         * @type {string || null}
         */
        this.Ipv6 = null;

        /**
         * DNS服务器
         * @type {string || null}
         */
        this.DnsServer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.GateWay = 'GateWay' in params ? params.GateWay : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
        this.Ipv6 = 'Ipv6' in params ? params.Ipv6 : null;
        this.DnsServer = 'DnsServer' in params ? params.DnsServer : null;

    }
}

/**
 * DescribeAssetWebFrameList请求参数结构体
 * @class
 */
class DescribeAssetWebFrameListRequest extends  AbstractModel {
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Name - String - 是否必填：否 - 框架名</li>
<li>NameStrict - String - 是否必填：否 - 框架名（严格匹配）</li>
<li>Lang - String - 是否必填：否 - 框架语言:java/python</li>
<li>Type - String - 是否必填：否 - 服务类型：
0：全部
1:Tomcat
2:Apache
3:Nginx
4:WebLogic
5:Websphere
6:JBoss
7:WildFly
8:Jetty
9:IHS
10:Tengine</li>
<li>OsType - String - 是否必填：否 - windows/linux</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序方式，asc升序 或 desc降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 可选排序：JarCount
         * @type {string || null}
         */
        this.By = null;

        /**
         * 查询指定Quuid主机的信息
         * @type {string || null}
         */
        this.Quuid = null;

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
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * DescribeMonthInspectionReport返回参数结构体
 * @class
 */
class DescribeMonthInspectionReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 巡检报告列表
         * @type {Array.<MonthInspectionReport> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new MonthInspectionReport();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSaveOrUpdateWarnings返回参数结构体
 * @class
 */
class DescribeSaveOrUpdateWarningsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaselineHostTop返回参数结构体
 * @class
 */
class DescribeBaselineHostTopResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机基线策略事件Top
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BaselineHostTopList> || null}
         */
        this.BaselineHostTopList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BaselineHostTopList) {
            this.BaselineHostTopList = new Array();
            for (let z in params.BaselineHostTopList) {
                let obj = new BaselineHostTopList();
                obj.deserialize(params.BaselineHostTopList[z]);
                this.BaselineHostTopList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteBashRules返回参数结构体
 * @class
 */
class DeleteBashRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportVulList返回参数结构体
 * @class
 */
class ExportVulListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出的文件下载url（已弃用！）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 导出文件Id 可通过ExportTasks接口下载
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHistoryService返回参数结构体
 * @class
 */
class DescribeHistoryServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1 可购买 2 只能升降配 3 只能跳到续费管理页
         * @type {number || null}
         */
        this.BuyStatus = null;

        /**
         * 用户已购容量 单位 G
         * @type {number || null}
         */
        this.InquireNum = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 是否自动续费,0 初始值, 1 开通 2 没开通
         * @type {number || null}
         */
        this.IsAutoOpenRenew = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 0 没开通 1 正常 2隔离 3销毁
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BuyStatus = 'BuyStatus' in params ? params.BuyStatus : null;
        this.InquireNum = 'InquireNum' in params ? params.InquireNum : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IsAutoOpenRenew = 'IsAutoOpenRenew' in params ? params.IsAutoOpenRenew : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 基线影响主机信息
 * @class
 */
class BaselineEffectHost extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通过项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PassCount = null;

        /**
         * 风险项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailCount = null;

        /**
         * 首次检测事件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FirstScanTime = null;

        /**
         * 最后检测时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * 风险项处理状态状态：0-未通过，1-通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 主机Quuid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 主机别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * 主机Uuid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 检测中状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PassCount = 'PassCount' in params ? params.PassCount : null;
        this.FailCount = 'FailCount' in params ? params.FailCount : null;
        this.FirstScanTime = 'FirstScanTime' in params ? params.FirstScanTime : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.MaxStatus = 'MaxStatus' in params ? params.MaxStatus : null;

    }
}

/**
 * ModifyWebPageProtectSetting返回参数结构体
 * @class
 */
class ModifyWebPageProtectSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVulInfoCvss返回参数结构体
 * @class
 */
class DescribeVulInfoCvssResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * 漏洞名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VulName = null;

        /**
         * 危害等级：1-低危；2-中危；3-高危；4-严重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VulLevel = null;

        /**
         * 漏洞分类 1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VulType = null;

        /**
         * 漏洞描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 修复方案
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RepairPlan = null;

        /**
         * 漏洞CVEID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CveId = null;

        /**
         * 参考链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reference = null;

        /**
         * CVSS信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CVSS = null;

        /**
         * 发布时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicDate = null;

        /**
         * Cvss分数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CvssScore = null;

        /**
         * cvss详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CveInfo = null;

        /**
         * cvss 分数 浮点型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CvssScoreFloat = null;

        /**
         * 漏洞标签 多个逗号分割
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Labels = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulId = 'VulId' in params ? params.VulId : null;
        this.VulName = 'VulName' in params ? params.VulName : null;
        this.VulLevel = 'VulLevel' in params ? params.VulLevel : null;
        this.VulType = 'VulType' in params ? params.VulType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RepairPlan = 'RepairPlan' in params ? params.RepairPlan : null;
        this.CveId = 'CveId' in params ? params.CveId : null;
        this.Reference = 'Reference' in params ? params.Reference : null;
        this.CVSS = 'CVSS' in params ? params.CVSS : null;
        this.PublicDate = 'PublicDate' in params ? params.PublicDate : null;
        this.CvssScore = 'CvssScore' in params ? params.CvssScore : null;
        this.CveInfo = 'CveInfo' in params ? params.CveInfo : null;
        this.CvssScoreFloat = 'CvssScoreFloat' in params ? params.CvssScoreFloat : null;
        this.Labels = 'Labels' in params ? params.Labels : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaselineStrategyDetail请求参数结构体
 * @class
 */
class DescribeBaselineStrategyDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户基线策略id
         * @type {number || null}
         */
        this.StrategyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;

    }
}

/**
 * 木马列表集合
 * @class
 */
class MalWareList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器ip
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 唯一UUID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 路径
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.VirusName = null;

        /**
         * 状态；4-:待处理，5-已信任，6-已隔离，8-文件已删除
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 唯一ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 主机别名
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 特性标签，已废弃字段，不会再返回标签，详情中才会返回标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 首次运行时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileCreateTime = null;

        /**
         * 最近运行时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileModifierTime = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最近扫描时间
         * @type {string || null}
         */
        this.LatestScanTime = null;

        /**
         * 风险等级 0未知、1低、2中、3高、4严重
         * @type {number || null}
         */
        this.Level = null;

        /**
         * '木马检测平台用,分割 1云查杀引擎、2TAV、3binaryAi、4异常行为、5威胁情报
         * @type {string || null}
         */
        this.CheckPlatform = null;

        /**
         * 木马进程是否存在 0:不存在，1:存在
         * @type {number || null}
         */
        this.ProcessExists = null;

        /**
         * 木马文件是否存在 0:不存在，1:存在
         * @type {number || null}
         */
        this.FileExists = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.VirusName = 'VirusName' in params ? params.VirusName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.FileCreateTime = 'FileCreateTime' in params ? params.FileCreateTime : null;
        this.FileModifierTime = 'FileModifierTime' in params ? params.FileModifierTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LatestScanTime = 'LatestScanTime' in params ? params.LatestScanTime : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.CheckPlatform = 'CheckPlatform' in params ? params.CheckPlatform : null;
        this.ProcessExists = 'ProcessExists' in params ? params.ProcessExists : null;
        this.FileExists = 'FileExists' in params ? params.FileExists : null;

    }
}

/**
 * DescribeAssetUserInfo返回参数结构体
 * @class
 */
class DescribeAssetUserInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户详细信息
         * @type {AssetUserDetail || null}
         */
        this.User = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.User) {
            let obj = new AssetUserDetail();
            obj.deserialize(params.User)
            this.User = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标签信息
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 标签名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 服务器数
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * ExportAttackLogs返回参数结构体
 * @class
 */
class ExportAttackLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已废弃
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 导出任务ID 可通过ExportTasks接口下载
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaselineEffectHostList返回参数结构体
 * @class
 */
class DescribeBaselineEffectHostListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 影响服务器列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BaselineEffectHost> || null}
         */
        this.EffectHostList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.EffectHostList) {
            this.EffectHostList = new Array();
            for (let z in params.EffectHostList) {
                let obj = new BaselineEffectHost();
                obj.deserialize(params.EffectHostList[z]);
                this.EffectHostList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TrustMalwares请求参数结构体
 * @class
 */
class TrustMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马ID数组（单次不超过的最大条数：100）
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * ExportVulEffectHostList请求参数结构体
 * @class
 */
class ExportVulEffectHostListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞id
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * 过滤条件。
<li>AliasName - String - 主机名筛选</li>
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
        this.VulId = 'VulId' in params ? params.VulId : null;

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
 * DescribeBaselineBasicInfo请求参数结构体
 * @class
 */
class DescribeBaselineBasicInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基线名称
         * @type {string || null}
         */
        this.BaselineName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BaselineName = 'BaselineName' in params ? params.BaselineName : null;

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
 * DescribeVulCountByDates请求参数结构体
 * @class
 */
class DescribeVulCountByDatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询最近几天的数据，需要都 -1后传入
         * @type {Array.<number> || null}
         */
        this.LastDays = null;

        /**
         * 漏洞的分类: 1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞
         * @type {number || null}
         */
        this.VulCategory = null;

        /**
         * 是否为应急漏洞筛选  是: yes
         * @type {string || null}
         */
        this.IfEmergency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LastDays = 'LastDays' in params ? params.LastDays : null;
        this.VulCategory = 'VulCategory' in params ? params.VulCategory : null;
        this.IfEmergency = 'IfEmergency' in params ? params.IfEmergency : null;

    }
}

/**
 * DescribeBaselineStrategyList返回参数结构体
 * @class
 */
class DescribeBaselineStrategyListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页查询记录的总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 用户策略信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Strategy> || null}
         */
        this.StrategyList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.StrategyList) {
            this.StrategyList = new Array();
            for (let z in params.StrategyList) {
                let obj = new Strategy();
                obj.deserialize(params.StrategyList[z]);
                this.StrategyList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 网络攻击日志
 * @class
 */
class DefendAttackLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 客户端ID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 来源IP
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * 来源端口
         * @type {number || null}
         */
        this.SrcPort = null;

        /**
         * 攻击方式
         * @type {string || null}
         */
        this.HttpMethod = null;

        /**
         * 攻击描述
         * @type {string || null}
         */
        this.HttpCgi = null;

        /**
         * 攻击参数
         * @type {string || null}
         */
        this.HttpParam = null;

        /**
         * 威胁类型
         * @type {string || null}
         */
        this.VulType = null;

        /**
         * 攻击时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 目标服务器IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 目标服务器名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 目标IP
         * @type {string || null}
         */
        this.DstIp = null;

        /**
         * 目标端口
         * @type {number || null}
         */
        this.DstPort = null;

        /**
         * 攻击内容
         * @type {string || null}
         */
        this.HttpContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.SrcPort = 'SrcPort' in params ? params.SrcPort : null;
        this.HttpMethod = 'HttpMethod' in params ? params.HttpMethod : null;
        this.HttpCgi = 'HttpCgi' in params ? params.HttpCgi : null;
        this.HttpParam = 'HttpParam' in params ? params.HttpParam : null;
        this.VulType = 'VulType' in params ? params.VulType : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.DstIp = 'DstIp' in params ? params.DstIp : null;
        this.DstPort = 'DstPort' in params ? params.DstPort : null;
        this.HttpContent = 'HttpContent' in params ? params.HttpContent : null;

    }
}

/**
 * DescribeAssetEnvList返回参数结构体
 * @class
 */
class DescribeAssetEnvListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetEnvBaseInfo> || null}
         */
        this.Envs = null;

        /**
         * 总数量
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

        if (params.Envs) {
            this.Envs = new Array();
            for (let z in params.Envs) {
                let obj = new AssetEnvBaseInfo();
                obj.deserialize(params.Envs[z]);
                this.Envs.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAttackLogInfo返回参数结构体
 * @class
 */
class DescribeAttackLogInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 主机ID
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 攻击来源端口
         * @type {number || null}
         */
        this.SrcPort = null;

        /**
         * 攻击来源IP
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * 攻击目标端口
         * @type {number || null}
         */
        this.DstPort = null;

        /**
         * 攻击目标IP
         * @type {string || null}
         */
        this.DstIp = null;

        /**
         * 攻击方法
         * @type {string || null}
         */
        this.HttpMethod = null;

        /**
         * 攻击目标主机
         * @type {string || null}
         */
        this.HttpHost = null;

        /**
         * 攻击头信息
         * @type {string || null}
         */
        this.HttpHead = null;

        /**
         * 攻击者浏览器标识
         * @type {string || null}
         */
        this.HttpUserAgent = null;

        /**
         * 请求源
         * @type {string || null}
         */
        this.HttpReferer = null;

        /**
         * 威胁类型
         * @type {string || null}
         */
        this.VulType = null;

        /**
         * 攻击路径
         * @type {string || null}
         */
        this.HttpCgi = null;

        /**
         * 攻击参数
         * @type {string || null}
         */
        this.HttpParam = null;

        /**
         * 攻击时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 攻击内容
         * @type {string || null}
         */
        this.HttpContent = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.SrcPort = 'SrcPort' in params ? params.SrcPort : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.DstPort = 'DstPort' in params ? params.DstPort : null;
        this.DstIp = 'DstIp' in params ? params.DstIp : null;
        this.HttpMethod = 'HttpMethod' in params ? params.HttpMethod : null;
        this.HttpHost = 'HttpHost' in params ? params.HttpHost : null;
        this.HttpHead = 'HttpHead' in params ? params.HttpHead : null;
        this.HttpUserAgent = 'HttpUserAgent' in params ? params.HttpUserAgent : null;
        this.HttpReferer = 'HttpReferer' in params ? params.HttpReferer : null;
        this.VulType = 'VulType' in params ? params.VulType : null;
        this.HttpCgi = 'HttpCgi' in params ? params.HttpCgi : null;
        this.HttpParam = 'HttpParam' in params ? params.HttpParam : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.HttpContent = 'HttpContent' in params ? params.HttpContent : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrivilegeEvents返回参数结构体
 * @class
 */
class DescribePrivilegeEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据列表
         * @type {Array.<PrivilegeEscalationProcess> || null}
         */
        this.List = null;

        /**
         * 总条数
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
                let obj = new PrivilegeEscalationProcess();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOverviewStatistics返回参数结构体
 * @class
 */
class DescribeOverviewStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器在线数。
         * @type {number || null}
         */
        this.OnlineMachineNum = null;

        /**
         * 专业服务器数。
         * @type {number || null}
         */
        this.ProVersionMachineNum = null;

        /**
         * 木马文件数。
         * @type {number || null}
         */
        this.MalwareNum = null;

        /**
         * 异地登录数。
         * @type {number || null}
         */
        this.NonlocalLoginNum = null;

        /**
         * 暴力破解成功数。
         * @type {number || null}
         */
        this.BruteAttackSuccessNum = null;

        /**
         * 漏洞数。
         * @type {number || null}
         */
        this.VulNum = null;

        /**
         * 安全基线数。
         * @type {number || null}
         */
        this.BaseLineNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OnlineMachineNum = 'OnlineMachineNum' in params ? params.OnlineMachineNum : null;
        this.ProVersionMachineNum = 'ProVersionMachineNum' in params ? params.ProVersionMachineNum : null;
        this.MalwareNum = 'MalwareNum' in params ? params.MalwareNum : null;
        this.NonlocalLoginNum = 'NonlocalLoginNum' in params ? params.NonlocalLoginNum : null;
        this.BruteAttackSuccessNum = 'BruteAttackSuccessNum' in params ? params.BruteAttackSuccessNum : null;
        this.VulNum = 'VulNum' in params ? params.VulNum : null;
        this.BaseLineNum = 'BaseLineNum' in params ? params.BaseLineNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMonthInspectionReport请求参数结构体
 * @class
 */
class DescribeMonthInspectionReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页步长
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
 * 专家服务-旗舰护网信息
 * @class
 */
class ProtectNetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 护网天数
         * @type {number || null}
         */
        this.ProtectDays = null;

        /**
         * 护网状态 0未启动，1护网中，2已完成
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 护网启动时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 护网完成时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 报告下载地址
         * @type {string || null}
         */
        this.ReportPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProtectDays = 'ProtectDays' in params ? params.ProtectDays : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ReportPath = 'ReportPath' in params ? params.ReportPath : null;

    }
}

/**
 * 反弹Shell规则
 * @class
 */
class ReverseShellRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 客户端ID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 进程名称
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 目标IP
         * @type {string || null}
         */
        this.DestIp = null;

        /**
         * 目标端口
         * @type {string || null}
         */
        this.DestPort = null;

        /**
         * 操作人
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 是否全局规则
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * 状态 (0: 有效 1: 无效)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 主机IP
         * @type {string || null}
         */
        this.Hostip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.DestIp = 'DestIp' in params ? params.DestIp : null;
        this.DestPort = 'DestPort' in params ? params.DestPort : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Hostip = 'Hostip' in params ? params.Hostip : null;

    }
}

/**
 * DescribeBashRules返回参数结构体
 * @class
 */
class DescribeBashRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表内容
         * @type {Array.<BashRule> || null}
         */
        this.List = null;

        /**
         * 总条数
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
                let obj = new BashRule();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAvailableExpertServiceDetail返回参数结构体
 * @class
 */
class DescribeAvailableExpertServiceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全管家订单
         * @type {Array.<ExpertServiceOrderInfo> || null}
         */
        this.ExpertService = null;

        /**
         * 应急响应可用次数
         * @type {number || null}
         */
        this.EmergencyResponse = null;

        /**
         * 旗舰护网可用次数
         * @type {number || null}
         */
        this.ProtectNet = null;

        /**
         * 是否购买过安全管家
         * @type {boolean || null}
         */
        this.ExpertServiceBuy = null;

        /**
         * 是否购买过应急响应
         * @type {boolean || null}
         */
        this.EmergencyResponseBuy = null;

        /**
         * 是否购买过旗舰护网
         * @type {boolean || null}
         */
        this.ProtectNetBuy = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ExpertService) {
            this.ExpertService = new Array();
            for (let z in params.ExpertService) {
                let obj = new ExpertServiceOrderInfo();
                obj.deserialize(params.ExpertService[z]);
                this.ExpertService.push(obj);
            }
        }
        this.EmergencyResponse = 'EmergencyResponse' in params ? params.EmergencyResponse : null;
        this.ProtectNet = 'ProtectNet' in params ? params.ProtectNet : null;
        this.ExpertServiceBuy = 'ExpertServiceBuy' in params ? params.ExpertServiceBuy : null;
        this.EmergencyResponseBuy = 'EmergencyResponseBuy' in params ? params.EmergencyResponseBuy : null;
        this.ProtectNetBuy = 'ProtectNetBuy' in params ? params.ProtectNetBuy : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChangeRuleEventsIgnoreStatus请求参数结构体
 * @class
 */
class ChangeRuleEventsIgnoreStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 忽略状态 0:取消忽略 ； 1:忽略
         * @type {number || null}
         */
        this.IgnoreStatus = null;

        /**
         * 检测项id数组
         * @type {Array.<number> || null}
         */
        this.RuleIdList = null;

        /**
         * 事件id数组
         * @type {Array.<number> || null}
         */
        this.EventIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IgnoreStatus = 'IgnoreStatus' in params ? params.IgnoreStatus : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;
        this.EventIdList = 'EventIdList' in params ? params.EventIdList : null;

    }
}

/**
 * DescribeWebPageEventList请求参数结构体
 * @class
 */
class DescribeWebPageEventListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>EventType - String - 是否必填：否 - 事件类型</li>
<li>EventStatus - String - 是否必填：否 - 事件状态</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为10，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序方式：CreateTime 或 RestoreTime，默认为CreateTime
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式，0降序，1升序，默认为0
         * @type {number || null}
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * ExportAssetCoreModuleList请求参数结构体
 * @class
 */
class ExportAssetCoreModuleListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li>Name- string - 是否必填：否 - 包名</li>
<li>User- string - 是否必填：否 - 用户</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序方式，asc升序 或 desc降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序依据:Size,ProcessCount,ModuleCount
         * @type {string || null}
         */
        this.By = null;

        /**
         * 服务器Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 服务器Quuid
         * @type {string || null}
         */
        this.Quuid = null;

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
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * DescribeComponentStatistics返回参数结构体
 * @class
 */
class DescribeComponentStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件统计列表记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 组件统计列表数据数组。
         * @type {Array.<ComponentStatistics> || null}
         */
        this.ComponentStatistics = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ComponentStatistics) {
            this.ComponentStatistics = new Array();
            for (let z in params.ComponentStatistics) {
                let obj = new ComponentStatistics();
                obj.deserialize(params.ComponentStatistics[z]);
                this.ComponentStatistics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMachineRegions请求参数结构体
 * @class
 */
class DescribeMachineRegionsRequest extends  AbstractModel {
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
 * DescribeSearchExportList返回参数结构体
 * @class
 */
class DescribeSearchExportListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出的任务号
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 下载地址
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标准阻断模式规则
 * @class
 */
class BruteAttackRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 爆破事件发生的时间范围，单位：秒
         * @type {number || null}
         */
        this.TimeRange = null;

        /**
         * 爆破事件失败次数
         * @type {number || null}
         */
        this.LoginFailTimes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeRange = 'TimeRange' in params ? params.TimeRange : null;
        this.LoginFailTimes = 'LoginFailTimes' in params ? params.LoginFailTimes : null;

    }
}

/**
 * DescribeAvailableExpertServiceDetail请求参数结构体
 * @class
 */
class DescribeAvailableExpertServiceDetailRequest extends  AbstractModel {
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
 * DescribeServerRelatedDirInfo返回参数结构体
 * @class
 */
class DescribeServerRelatedDirInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 服务器IP
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 防护目录数量
         * @type {number || null}
         */
        this.ProtectDirNum = null;

        /**
         * 防护文件数量
         * @type {number || null}
         */
        this.ProtectFileNum = null;

        /**
         * 防篡改数量
         * @type {number || null}
         */
        this.ProtectTamperNum = null;

        /**
         * 防护软链数量
         * @type {number || null}
         */
        this.ProtectLinkNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.ProtectDirNum = 'ProtectDirNum' in params ? params.ProtectDirNum : null;
        this.ProtectFileNum = 'ProtectFileNum' in params ? params.ProtectFileNum : null;
        this.ProtectTamperNum = 'ProtectTamperNum' in params ? params.ProtectTamperNum : null;
        this.ProtectLinkNum = 'ProtectLinkNum' in params ? params.ProtectLinkNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUsualLoginPlaces返回参数结构体
 * @class
 */
class DescribeUsualLoginPlacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 常用登录地数组
         * @type {Array.<UsualPlace> || null}
         */
        this.UsualLoginPlaces = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UsualLoginPlaces) {
            this.UsualLoginPlaces = new Array();
            for (let z in params.UsualLoginPlaces) {
                let obj = new UsualPlace();
                obj.deserialize(params.UsualLoginPlaces[z]);
                this.UsualLoginPlaces.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 忽略的基线检测项信息
 * @class
 */
class IgnoreBaselineRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基线检测项名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 基线检测项id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 修复建议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Fix = null;

        /**
         * 影响主机数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EffectHostCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Fix = 'Fix' in params ? params.Fix : null;
        this.EffectHostCount = 'EffectHostCount' in params ? params.EffectHostCount : null;

    }
}

/**
 * DescribeBaselineBasicInfo返回参数结构体
 * @class
 */
class DescribeBaselineBasicInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基线基础信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BaselineBasicInfo> || null}
         */
        this.BaselineBasicInfoList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BaselineBasicInfoList) {
            this.BaselineBasicInfoList = new Array();
            for (let z in params.BaselineBasicInfoList) {
                let obj = new BaselineBasicInfo();
                obj.deserialize(params.BaselineBasicInfoList[z]);
                this.BaselineBasicInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EditBashRules返回参数结构体
 * @class
 */
class EditBashRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 异地登录白名单
 * @class
 */
class LoginWhiteLists extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 云镜客户端ID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 白名单地域
         * @type {Array.<Place> || null}
         */
        this.Places = null;

        /**
         * 白名单用户（多个用户逗号隔开）
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 白名单IP（多个IP逗号隔开）
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * 是否为全局规则
         * @type {boolean || null}
         */
        this.IsGlobal = null;

        /**
         * 创建白名单时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改白名单时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 机器名
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 机器IP
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 起始时间
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

        if (params.Places) {
            this.Places = new Array();
            for (let z in params.Places) {
                let obj = new Place();
                obj.deserialize(params.Places[z]);
                this.Places.push(obj);
            }
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ScanVul返回参数结构体
 * @class
 */
class ScanVulResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeOverviewStatistics请求参数结构体
 * @class
 */
class DescribeOverviewStatisticsRequest extends  AbstractModel {
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
 * 操作系统名称
 * @class
 */
class OsName extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 操作系统类型枚举值
         * @type {number || null}
         */
        this.MachineOSType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.MachineOSType = 'MachineOSType' in params ? params.MachineOSType : null;

    }
}

/**
 * DescribeTagMachines请求参数结构体
 * @class
 */
class DescribeTagMachinesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签ID
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * key-val类型的通用数据结构
 * @class
 */
class AssetKeyVal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 数量
         * @type {number || null}
         */
        this.Value = null;

        /**
         * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Desc = null;

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
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * ModifyAutoOpenProVersionConfig请求参数结构体
 * @class
 */
class ModifyAutoOpenProVersionConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设置自动开通状态。
<li>CLOSE：关闭</li>
<li>OPEN：打开</li>
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
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeletePrivilegeEvents请求参数结构体
 * @class
 */
class DeletePrivilegeEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID数组. (最大100条)
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * ExportAttackLogs请求参数结构体
 * @class
 */
class ExportAttackLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li>HttpMethod - String - 是否必填：否 - 攻击方法(POST|GET)</li>
<li>DateRange - String - 是否必填：否 - 时间范围(存储最近3个月的数据)，如最近一个月["2019-11-17", "2019-12-17"]</li>
<li>VulType - String 威胁类型 - 是否必填: 否</li>
<li>SrcIp - String 攻击源IP - 是否必填: 否</li>
<li>DstIp - String 攻击目标IP - 是否必填: 否</li>
<li>SrcPort - String 攻击源端口 - 是否必填: 否</li>
<li>DstPort - String 攻击目标端口 - 是否必填: 否</li>
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 主机安全客户端ID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 云主机机器ID
         * @type {string || null}
         */
        this.Quuid = null;

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
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * 忽略检测项影响主机信息
 * @class
 */
class IgnoreRuleEffectHostInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 危害等级：1-低位，2-中危，3-高危，4-严重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 主机标签数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TagList = null;

        /**
         * 状态：0-未通过，1-忽略，3-已通过，5-检测中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 最后检测时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * 事件id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 主机quuid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Quuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.TagList = 'TagList' in params ? params.TagList : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * DescribeBanMode请求参数结构体
 * @class
 */
class DescribeBanModeRequest extends  AbstractModel {
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
 * DescribeSecurityEventStat请求参数结构体
 * @class
 */
class DescribeSecurityEventStatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该接口无过滤条件
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
 * DeleteSearchTemplate请求参数结构体
 * @class
 */
class DeleteSearchTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 应急漏洞信息
 * @class
 */
class EmergencyVul extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞id
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * 漏洞级别
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 漏洞名称
         * @type {string || null}
         */
        this.VulName = null;

        /**
         * 发布日期
         * @type {string || null}
         */
        this.PublishDate = null;

        /**
         * 漏洞分类
         * @type {number || null}
         */
        this.Category = null;

        /**
         * 漏洞状态 0未检测 1有风险 ，2无风险 ，3 检查中展示progress
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 最后扫描时间
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * 扫描进度
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * cve编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CveId = null;

        /**
         * CVSS评分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CvssScore = null;

        /**
         * 漏洞标签 多个逗号分割
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Labels = null;

        /**
         * 影响机器数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HostCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulId = 'VulId' in params ? params.VulId : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.VulName = 'VulName' in params ? params.VulName : null;
        this.PublishDate = 'PublishDate' in params ? params.PublishDate : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.CveId = 'CveId' in params ? params.CveId : null;
        this.CvssScore = 'CvssScore' in params ? params.CvssScore : null;
        this.Labels = 'Labels' in params ? params.Labels : null;
        this.HostCount = 'HostCount' in params ? params.HostCount : null;

    }
}

/**
 * ExportReverseShellEvents请求参数结构体
 * @class
 */
class ExportReverseShellEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤参数
         * @type {Array.<Filters> || null}
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
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DeleteLoginWhiteList返回参数结构体
 * @class
 */
class DeleteLoginWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAttackLogs返回参数结构体
 * @class
 */
class DescribeAttackLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DefendAttackLog> || null}
         */
        this.AttackLogs = null;

        /**
         * 总条数
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

        if (params.AttackLogs) {
            this.AttackLogs = new Array();
            for (let z in params.AttackLogs) {
                let obj = new DefendAttackLog();
                obj.deserialize(params.AttackLogs[z]);
                this.AttackLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMalwares返回参数结构体
 * @class
 */
class DeleteMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetInitServiceList请求参数结构体
 * @class
 */
class DescribeAssetInitServiceListRequest extends  AbstractModel {
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Name- string - 是否必填：否 - 包名</li>
<li>User- string - 是否必填：否 - 用户</li>
<li>Status- string - 是否必填：否 - 默认启用状态：0未启用， 1启用 仅linux</li>
<li>Type- string - 是否必填：否 - 类型：类型 仅windows：
1:编码器
2:IE插件
3:网络提供者
4:镜像劫持
5:LSA提供者
6:KnownDLLs
7:启动执行
8:WMI
9:计划任务
10:Winsock提供者
11:打印监控器
12:资源管理器
13:驱动服务
14:登录</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 服务器Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 服务器Quuid
         * @type {string || null}
         */
        this.Quuid = null;

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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * ScanVulAgain返回参数结构体
 * @class
 */
class ScanVulAgainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 漏洞top统计实体
 * @class
 */
class VulTopInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞 名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VulName = null;

        /**
         * 危害等级：1-低危；2-中危；3-高危；4-严重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VulLevel = null;

        /**
         * 漏洞数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VulCount = null;

        /**
         * 漏洞id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VulId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulName = 'VulName' in params ? params.VulName : null;
        this.VulLevel = 'VulLevel' in params ? params.VulLevel : null;
        this.VulCount = 'VulCount' in params ? params.VulCount : null;
        this.VulId = 'VulId' in params ? params.VulId : null;

    }
}

/**
 * SeparateMalwares返回参数结构体
 * @class
 */
class SeparateMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 隔离成功的id数组，若无则返回空数组
         * @type {Array.<number> || null}
         */
        this.SuccessIds = null;

        /**
         * 隔离失败的id数组，若无则返回空数组
         * @type {Array.<number> || null}
         */
        this.FailedIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessIds = 'SuccessIds' in params ? params.SuccessIds : null;
        this.FailedIds = 'FailedIds' in params ? params.FailedIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTags请求参数结构体
 * @class
 */
class DescribeTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云主机类型。
<li>CVM：表示云服务器</li>
<li>BM:  表示黑石物理机</li>
<li>ECM:  表示边缘计算服务器</li>
<li>LH:  表示轻量应用服务器</li>
<li>Other:  表示混合云服务器</li>
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 机器所属地域。如：ap-guangzhou
         * @type {string || null}
         */
        this.MachineRegion = null;

        /**
         * 过滤条件。
<li>Keywords - String - 是否必填：否 - 查询关键字(机器名称/机器IP </li>
<li>Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线 | ONLINE: 在线 | UNINSTALLED：未安装 | SHUTDOWN 已关机）</li>
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版）</li>
<li>Risk - String 是否必填: 否 - 风险主机( yes ) </li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )
每个过滤条件只支持一个值，暂不支持多个值“或”关系查询
         * @type {Array.<Filters> || null}
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
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineRegion = 'MachineRegion' in params ? params.MachineRegion : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeRiskDnsList请求参数结构体
 * @class
 */
class DescribeRiskDnsListRequest extends  AbstractModel {
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Url - String - 是否必填：否 - Url筛选</li>
<li>Status - String - 是否必填：否 - 状态筛选0:待处理；2:信任；3:不信任</li>
<li>MergeBeginTime - String - 是否必填：否 - 最近访问开始时间</li>
<li>MergeEndTime - String - 是否必填：否 - 最近访问结束时间</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序方式：根据请求次数排序：asc-升序/desc-降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段：AccessCount-请求次数
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
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeStrategyExist请求参数结构体
 * @class
 */
class DescribeStrategyExistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略名
         * @type {string || null}
         */
        this.StrategyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;

    }
}

/**
 * DescribeSecurityDynamics请求参数结构体
 * @class
 */
class DescribeSecurityDynamicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，最大值为100。
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
 * CheckBashRuleParams请求参数结构体
 * @class
 */
class CheckBashRuleParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 校验内容 Name或Rule ，两个都要校验时逗号分割
         * @type {string || null}
         */
        this.CheckField = null;

        /**
         * 在事件列表中新增白名时需要提交事件ID
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 填入的规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户填入的正则表达式："正则表达式" 需与 "提交EventId对应的命令内容" 相匹配
         * @type {string || null}
         */
        this.Rule = null;

        /**
         * 编辑时传的规则id
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
        this.CheckField = 'CheckField' in params ? params.CheckField : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Rule = 'Rule' in params ? params.Rule : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeIgnoreBaselineRule请求参数结构体
 * @class
 */
class DescribeIgnoreBaselineRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页参数 最大100条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 检测项名称
         * @type {string || null}
         */
        this.RuleName = null;

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
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * ExportNonlocalLoginPlaces返回参数结构体
 * @class
 */
class ExportNonlocalLoginPlacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出文件下载链接地址。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 导出任务ID
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetJarList返回参数结构体
 * @class
 */
class DescribeAssetJarListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetJarBaseInfo> || null}
         */
        this.Jars = null;

        /**
         * 总数量
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

        if (params.Jars) {
            this.Jars = new Array();
            for (let z in params.Jars) {
                let obj = new AssetJarBaseInfo();
                obj.deserialize(params.Jars[z]);
                this.Jars.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportMaliciousRequests请求参数结构体
 * @class
 */
class ExportMaliciousRequestsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤参数
         * @type {Array.<Filters> || null}
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
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 登录审计列表实体
 * @class
 */
class HostLoginList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Uuid串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 主机ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 来源ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * 1:正常登录；2异地登录； 5已加白； 14：已处理；15：已忽略。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 国家id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Country = null;

        /**
         * 城市id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.City = null;

        /**
         * 省份id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Province = null;

        /**
         * 登录时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoginTime = null;

        /**
         * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 是否命中异地登录异常  1表示命中此类异常, 0表示未命中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsRiskArea = null;

        /**
         * 是否命中异常用户异常 1表示命中此类异常, 0表示未命中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsRiskUser = null;

        /**
         * 是否命中异常时间异常 1表示命中此类异常, 0表示未命中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsRiskTime = null;

        /**
         * 是否命中异常IP异常 1表示命中此类异常, 0表示未命中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsRiskSrcIp = null;

        /**
         * 危险等级：
0 高危
1 可疑
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * 位置名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Location = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.City = 'City' in params ? params.City : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.LoginTime = 'LoginTime' in params ? params.LoginTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.IsRiskArea = 'IsRiskArea' in params ? params.IsRiskArea : null;
        this.IsRiskUser = 'IsRiskUser' in params ? params.IsRiskUser : null;
        this.IsRiskTime = 'IsRiskTime' in params ? params.IsRiskTime : null;
        this.IsRiskSrcIp = 'IsRiskSrcIp' in params ? params.IsRiskSrcIp : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.Location = 'Location' in params ? params.Location : null;

    }
}

/**
 * DescribeWebPageProtectStat请求参数结构体
 * @class
 */
class DescribeWebPageProtectStatRequest extends  AbstractModel {
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
 * 资产管理jar包详情
 * @class
 */
class AssetJarDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 类型：1应用程序，2系统类库，3Web服务自带库，8:其他，
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 是否可执行：0未知，1是，2否
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 服务器IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 服务器名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 引用进程列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetAppProcessInfo> || null}
         */
        this.Process = null;

        /**
         * Jar包Md5
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 数据更新时间
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;

        if (params.Process) {
            this.Process = new Array();
            for (let z in params.Process) {
                let obj = new AssetAppProcessInfo();
                obj.deserialize(params.Process[z]);
                this.Process.push(obj);
            }
        }
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ExportVulDetectionReport请求参数结构体
 * @class
 */
class ExportVulDetectionReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞扫描任务id（不同于出参的导出检测报告的任务Id）
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 过滤参数
         * @type {Array.<Filters> || null}
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ExportMalwares返回参数结构体
 * @class
 */
class ExportMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出文件下载链接地址。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 任务id
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScanVulSetting请求参数结构体
 * @class
 */
class DescribeScanVulSettingRequest extends  AbstractModel {
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
 * DescribeESHits请求参数结构体
 * @class
 */
class DescribeESHitsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES查询条件JSON
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，最大值为100。
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
        this.Query = 'Query' in params ? params.Query : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeAssetPlanTaskList返回参数结构体
 * @class
 */
class DescribeAssetPlanTaskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetPlanTask> || null}
         */
        this.Tasks = null;

        /**
         * 总数量
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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new AssetPlanTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaselineRule请求参数结构体
 * @class
 */
class DescribeBaselineRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基线id
         * @type {number || null}
         */
        this.BaselineId = null;

        /**
         * 分页参数 最大100条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 危害等级
         * @type {Array.<number> || null}
         */
        this.Level = null;

        /**
         * 状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 主机quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机uuid
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BaselineId = 'BaselineId' in params ? params.BaselineId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * DescribeHistoryAccounts请求参数结构体
 * @class
 */
class DescribeHistoryAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜客户端唯一Uuid。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 返回数量，默认为10，最大值为100。
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
<li>Username - String - 是否必填：否 - 帐号名</li>
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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeAssetMachineDetail请求参数结构体
 * @class
 */
class DescribeAssetMachineDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 服务器Uuid
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * CancelIgnoreVul返回参数结构体
 * @class
 */
class CancelIgnoreVulResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IgnoreImpactedHosts返回参数结构体
 * @class
 */
class IgnoreImpactedHostsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetMachineDetail返回参数结构体
 * @class
 */
class DescribeAssetMachineDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机详情
         * @type {AssetMachineDetail || null}
         */
        this.MachineDetail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MachineDetail) {
            let obj = new AssetMachineDetail();
            obj.deserialize(params.MachineDetail)
            this.MachineDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStrategyExist返回参数结构体
 * @class
 */
class DescribeStrategyExistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略是否存在, 1是 0否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IfExist = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IfExist = 'IfExist' in params ? params.IfExist : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteReverseShellEvents请求参数结构体
 * @class
 */
class DeleteReverseShellEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID数组. (最大100条)
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeBanRegions请求参数结构体
 * @class
 */
class DescribeBanRegionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * DescribeServersAndRiskAndFirstInfo请求参数结构体
 * @class
 */
class DescribeServersAndRiskAndFirstInfoRequest extends  AbstractModel {
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
 * DescribeAssetWebServiceProcessList返回参数结构体
 * @class
 */
class DescribeAssetWebServiceProcessListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进程列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetAppProcessInfo> || null}
         */
        this.Process = null;

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

        if (params.Process) {
            this.Process = new Array();
            for (let z in params.Process) {
                let obj = new AssetAppProcessInfo();
                obj.deserialize(params.Process[z]);
                this.Process.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IgnoreImpactedHosts请求参数结构体
 * @class
 */
class IgnoreImpactedHostsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞ID数组。
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * 资源管理账号基本信息
 * @class
 */
class AssetUserDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机内网IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 账号UID
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 账号GID
         * @type {string || null}
         */
        this.Gid = null;

        /**
         * 账号状态：0-禁用；1-启用
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 是否有root权限：0-否；1是，999为空: 仅linux
         * @type {number || null}
         */
        this.IsRoot = null;

        /**
         * 上次登录时间
         * @type {string || null}
         */
        this.LastLoginTime = null;

        /**
         * 账号名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 账号类型：0访客用户，1标准用户，2管理员用户 ,999为空,仅windows
         * @type {number || null}
         */
        this.UserType = null;

        /**
         * 是否域账号：0否， 1是, 999为空  仅windows
         * @type {number || null}
         */
        this.IsDomain = null;

        /**
         * 是否允许ssh登录，1是，0否, 999为空, 仅linux
         * @type {number || null}
         */
        this.IsSshLogin = null;

        /**
         * Home目录
         * @type {string || null}
         */
        this.HomePath = null;

        /**
         * Shell路径  仅linux
         * @type {string || null}
         */
        this.Shell = null;

        /**
         * 是否shell登录性，0不是；1是 仅linux
         * @type {number || null}
         */
        this.ShellLoginStatus = null;

        /**
         * 密码修改时间
         * @type {string || null}
         */
        this.PasswordChangeTime = null;

        /**
         * 密码过期时间  仅linux
         * @type {string || null}
         */
        this.PasswordDueTime = null;

        /**
         * 密码锁定时间：单位天, -1为永不锁定 999为空，仅linux
         * @type {number || null}
         */
        this.PasswordLockDays = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 用户组名
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 账号到期时间
         * @type {string || null}
         */
        this.DisableTime = null;

        /**
         * 最近登录终端
         * @type {string || null}
         */
        this.LastLoginTerminal = null;

        /**
         * 最近登录位置
         * @type {string || null}
         */
        this.LastLoginLoc = null;

        /**
         * 最近登录IP
         * @type {string || null}
         */
        this.LastLoginIp = null;

        /**
         * 密码过期提醒：单位天
         * @type {number || null}
         */
        this.PasswordWarnDays = null;

        /**
         * 密码修改设置：0-不可修改，1-可修改
         * @type {number || null}
         */
        this.PasswordChangeType = null;

        /**
         * 用户公钥列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetUserKeyInfo> || null}
         */
        this.Keys = null;

        /**
         * 数据更新时间
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
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Gid = 'Gid' in params ? params.Gid : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsRoot = 'IsRoot' in params ? params.IsRoot : null;
        this.LastLoginTime = 'LastLoginTime' in params ? params.LastLoginTime : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.IsDomain = 'IsDomain' in params ? params.IsDomain : null;
        this.IsSshLogin = 'IsSshLogin' in params ? params.IsSshLogin : null;
        this.HomePath = 'HomePath' in params ? params.HomePath : null;
        this.Shell = 'Shell' in params ? params.Shell : null;
        this.ShellLoginStatus = 'ShellLoginStatus' in params ? params.ShellLoginStatus : null;
        this.PasswordChangeTime = 'PasswordChangeTime' in params ? params.PasswordChangeTime : null;
        this.PasswordDueTime = 'PasswordDueTime' in params ? params.PasswordDueTime : null;
        this.PasswordLockDays = 'PasswordLockDays' in params ? params.PasswordLockDays : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.DisableTime = 'DisableTime' in params ? params.DisableTime : null;
        this.LastLoginTerminal = 'LastLoginTerminal' in params ? params.LastLoginTerminal : null;
        this.LastLoginLoc = 'LastLoginLoc' in params ? params.LastLoginLoc : null;
        this.LastLoginIp = 'LastLoginIp' in params ? params.LastLoginIp : null;
        this.PasswordWarnDays = 'PasswordWarnDays' in params ? params.PasswordWarnDays : null;
        this.PasswordChangeType = 'PasswordChangeType' in params ? params.PasswordChangeType : null;

        if (params.Keys) {
            this.Keys = new Array();
            for (let z in params.Keys) {
                let obj = new AssetUserKeyInfo();
                obj.deserialize(params.Keys[z]);
                this.Keys.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeMachines请求参数结构体
 * @class
 */
class DescribeMachinesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器所属专区类型 
CVM 云服务器
BM 黑石
ECM 边缘计算
LH 轻量应用服务器
Other 混合云专区
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 机器所属地域。如：ap-guangzhou，ap-shanghai
         * @type {string || null}
         */
        this.MachineRegion = null;

        /**
         * 返回数量，默认为10，最大值为100。
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
<li>Keywords - String - 是否必填：否 - 查询关键字 </li>
<li>Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线/关机 | ONLINE: 在线 | UNINSTALLED：未安装 | AGENT_OFFLINE 离线| AGENT_SHUTDOWN 已关机）</li>
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版 | Flagship : 旗舰版 | ProtectedMachines: 专业版+旗舰版）</li>
<li>Risk - String 是否必填: 否 - 风险主机( yes ) </li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )
每个过滤条件只支持一个值，暂不支持多个值“或”关系查询
<li>Quuid - String - 是否必填: 否 - 云服务器uuid  最大100条.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 机器所属业务ID列表
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineRegion = 'MachineRegion' in params ? params.MachineRegion : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;

    }
}

/**
 * DescribeVulEffectHostList请求参数结构体
 * @class
 */
class DescribeVulEffectHostListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页limit 最大100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 漏洞id
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * 过滤条件。
<li>AliasName - String - 主机名筛选</li>
<li>TagIds - String - 主机标签id串，多个用英文逗号分隔</li>
<li>Status - String - 状态,0: 待处理 1:忽略  3:已修复  5:检测中  6:修复中  8=:修复失败.</li>
<li>Uuid - String数组 - Uuid串数组</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.VulId = 'VulId' in params ? params.VulId : null;

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
 * 资产管理Web应用插件详情
 * @class
 */
class AssetWebAppPluginInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 链接
         * @type {string || null}
         */
        this.Link = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Link = 'Link' in params ? params.Link : null;

    }
}

/**
 * DeletePrivilegeRules请求参数结构体
 * @class
 */
class DeletePrivilegeRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID数组，最大100条。
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeMalwareInfo请求参数结构体
 * @class
 */
class DescribeMalwareInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一ID
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeVersionStatistics请求参数结构体
 * @class
 */
class DescribeVersionStatisticsRequest extends  AbstractModel {
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
 * ExportPrivilegeEvents返回参数结构体
 * @class
 */
class ExportPrivilegeEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出文件下载链接地址。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 导出任务ID
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 常用登录地
 * @class
 */
class UsualPlace extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 云镜客户端唯一标识UUID。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 国家 ID。
         * @type {number || null}
         */
        this.CountryId = null;

        /**
         * 省份 ID。
         * @type {number || null}
         */
        this.ProvinceId = null;

        /**
         * 城市 ID。
         * @type {number || null}
         */
        this.CityId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.CountryId = 'CountryId' in params ? params.CountryId : null;
        this.ProvinceId = 'ProvinceId' in params ? params.ProvinceId : null;
        this.CityId = 'CityId' in params ? params.CityId : null;

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
         * 返回数量，最大值为100。
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
<li>Keywords - String - 是否必填：否 - 关键字(主机内网IP|进程名)</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * 反弹Shell数据
 * @class
 */
class ReverseShell extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID 主键
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 云镜UUID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 主机ID
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机内网IP
         * @type {string || null}
         */
        this.Hostip = null;

        /**
         * 目标IP
         * @type {string || null}
         */
        this.DstIp = null;

        /**
         * 目标端口
         * @type {number || null}
         */
        this.DstPort = null;

        /**
         * 进程名
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 进程路径
         * @type {string || null}
         */
        this.FullPath = null;

        /**
         * 命令详情
         * @type {string || null}
         */
        this.CmdLine = null;

        /**
         * 执行用户
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 执行用户组
         * @type {string || null}
         */
        this.UserGroup = null;

        /**
         * 父进程名
         * @type {string || null}
         */
        this.ParentProcName = null;

        /**
         * 父进程用户
         * @type {string || null}
         */
        this.ParentProcUser = null;

        /**
         * 父进程用户组
         * @type {string || null}
         */
        this.ParentProcGroup = null;

        /**
         * 父进程路径
         * @type {string || null}
         */
        this.ParentProcPath = null;

        /**
         * 处理状态：0-待处理 2-白名单 3-已处理 4-已忽略
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 产生时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 主机名
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 进程树
         * @type {string || null}
         */
        this.ProcTree = null;

        /**
         * 检测方法
         * @type {number || null}
         */
        this.DetectBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Hostip = 'Hostip' in params ? params.Hostip : null;
        this.DstIp = 'DstIp' in params ? params.DstIp : null;
        this.DstPort = 'DstPort' in params ? params.DstPort : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.FullPath = 'FullPath' in params ? params.FullPath : null;
        this.CmdLine = 'CmdLine' in params ? params.CmdLine : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserGroup = 'UserGroup' in params ? params.UserGroup : null;
        this.ParentProcName = 'ParentProcName' in params ? params.ParentProcName : null;
        this.ParentProcUser = 'ParentProcUser' in params ? params.ParentProcUser : null;
        this.ParentProcGroup = 'ParentProcGroup' in params ? params.ParentProcGroup : null;
        this.ParentProcPath = 'ParentProcPath' in params ? params.ParentProcPath : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.ProcTree = 'ProcTree' in params ? params.ProcTree : null;
        this.DetectBy = 'DetectBy' in params ? params.DetectBy : null;

    }
}

/**
 * DescribeAttackVulTypeList请求参数结构体
 * @class
 */
class DescribeAttackVulTypeListRequest extends  AbstractModel {
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
 * DescribeLogStorageStatistic请求参数结构体
 * @class
 */
class DescribeLogStorageStatisticRequest extends  AbstractModel {
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
 * DescribeAssetRecentMachineInfo请求参数结构体
 * @class
 */
class DescribeAssetRecentMachineInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间，如：2020-09-22
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * 结束时间，如：2020-09-22
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

    }
}

/**
 * CheckBashRuleParams返回参数结构体
 * @class
 */
class CheckBashRuleParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0=校验通过  1=规则名称校验不通过 2=正则表达式校验不通过
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 校验信息
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportBaselineList请求参数结构体
 * @class
 */
class ExportBaselineListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件：
<li>StrategyId- Uint64 - 基线策略id</li>
<li>Status - Uint64 - 事件状态：0-未通过，1-忽略，3-通过，5-检测中</li>
<li>BaselineName  - String - 基线名称</li>
<li>AliasName- String - 服务器名称/服务器ip</li>
<li>Uuid- String - 主机uuid</li>
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 已废弃
         * @type {number || null}
         */
        this.IfDetail = null;

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
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.IfDetail = 'IfDetail' in params ? params.IfDetail : null;

    }
}

/**
 * DeleteProtectDir请求参数结构体
 * @class
 */
class DeleteProtectDirRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除的目录ID 最大100条
         * @type {Array.<string> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * ExportIgnoreBaselineRule返回参数结构体
 * @class
 */
class ExportIgnoreBaselineRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件下载地址
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 导出任务Id , 可通过ExportTasks 接口下载
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 暴力破解判定规则列表
 * @class
 */
class BruteAttackRuleList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 爆破事件发生的时间范围，单位：秒
         * @type {number || null}
         */
        this.TimeRange = null;

        /**
         * 爆破事件失败次数
         * @type {number || null}
         */
        this.LoginFailTimes = null;

        /**
         * 规则是否为空，为空则填充默认规则
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 爆破事件发生的时间范围，单位：秒（默认规则）
         * @type {number || null}
         */
        this.TimeRangeDefault = null;

        /**
         * 爆破事件失败次数（默认规则）
         * @type {number || null}
         */
        this.LoginFailTimesDefault = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeRange = 'TimeRange' in params ? params.TimeRange : null;
        this.LoginFailTimes = 'LoginFailTimes' in params ? params.LoginFailTimes : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.TimeRangeDefault = 'TimeRangeDefault' in params ? params.TimeRangeDefault : null;
        this.LoginFailTimesDefault = 'LoginFailTimesDefault' in params ? params.LoginFailTimesDefault : null;

    }
}

/**
 * DescribeBanStatus返回参数结构体
 * @class
 */
class DescribeBanStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 阻断开关状态 0:关闭 1:开启
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 是否弹窗提示信息 false: 关闭，true: 开启
         * @type {boolean || null}
         */
        this.ShowTips = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.ShowTips = 'ShowTips' in params ? params.ShowTips : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVulList请求参数结构体
 * @class
 */
class DescribeVulListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，最大值为100。
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
<li>Status - String - 是否必填：否 - 处理状态  0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略</li>
<li>ModifyTime - String - 是否必填：否 - 最近发生时间</li>
<li>Uuid- String - 是否必填：否 - 主机uuid查询</li>
<li>VulName- string -</li>
<li>VulCategory- string - 是否必填：否 - 漏洞类别 1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞</li>
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 可选排序字段 Level，LastTime，HostCount
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序顺序：desc  默认asc
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
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * 漏洞详细信息
 * @class
 */
class VulDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞ID
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * 漏洞级别
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 漏洞名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * cve编号
         * @type {string || null}
         */
        this.CveId = null;

        /**
         * 1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞 0= 应急漏洞
         * @type {number || null}
         */
        this.VulCategory = null;

        /**
         * 漏洞描述
         * @type {string || null}
         */
        this.Descript = null;

        /**
         * 修复建议
         * @type {string || null}
         */
        this.Fix = null;

        /**
         * 参考链接
         * @type {string || null}
         */
        this.Reference = null;

        /**
         * CVSS评分
         * @type {number || null}
         */
        this.CvssScore = null;

        /**
         * CVSS详情
         * @type {string || null}
         */
        this.Cvss = null;

        /**
         * 发布时间
         * @type {string || null}
         */
        this.PublishTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulId = 'VulId' in params ? params.VulId : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CveId = 'CveId' in params ? params.CveId : null;
        this.VulCategory = 'VulCategory' in params ? params.VulCategory : null;
        this.Descript = 'Descript' in params ? params.Descript : null;
        this.Fix = 'Fix' in params ? params.Fix : null;
        this.Reference = 'Reference' in params ? params.Reference : null;
        this.CvssScore = 'CvssScore' in params ? params.CvssScore : null;
        this.Cvss = 'Cvss' in params ? params.Cvss : null;
        this.PublishTime = 'PublishTime' in params ? params.PublishTime : null;

    }
}

/**
 * DescribeServersAndRiskAndFirstInfo返回参数结构体
 * @class
 */
class DescribeServersAndRiskAndFirstInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 风险文件数
         * @type {number || null}
         */
        this.RiskFileCount = null;

        /**
         * 今日新增风险文件数
         * @type {number || null}
         */
        this.AddRiskFileCount = null;

        /**
         * 受影响服务器台数
         * @type {number || null}
         */
        this.ServersCount = null;

        /**
         * 是否试用：true-是，false-否
         * @type {boolean || null}
         */
        this.IsFirstCheck = null;

        /**
         * 木马最近检测时间
         * @type {string || null}
         */
        this.ScanTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RiskFileCount = 'RiskFileCount' in params ? params.RiskFileCount : null;
        this.AddRiskFileCount = 'AddRiskFileCount' in params ? params.AddRiskFileCount : null;
        this.ServersCount = 'ServersCount' in params ? params.ServersCount : null;
        this.IsFirstCheck = 'IsFirstCheck' in params ? params.IsFirstCheck : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源管理进程基本信息
 * @class
 */
class AssetAppBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机内网IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机外网IP
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 操作系统信息
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 主机业务组ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MachineTag> || null}
         */
        this.Tag = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 应用类型	
1: 运维
2 : 数据库
3 : 安全
4 : 可疑应用
5 : 系统架构
6 : 系统应用
7 : WEB服务
99: 其他
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 二进制路径
         * @type {string || null}
         */
        this.BinPath = null;

        /**
         * 配置文件路径
         * @type {string || null}
         */
        this.ConfigPath = null;

        /**
         * 关联进程数
         * @type {number || null}
         */
        this.ProcessCount = null;

        /**
         * 应用描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 版本号
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 数据更新时间
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
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new MachineTag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.BinPath = 'BinPath' in params ? params.BinPath : null;
        this.ConfigPath = 'ConfigPath' in params ? params.ConfigPath : null;
        this.ProcessCount = 'ProcessCount' in params ? params.ProcessCount : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribePrivilegeRules请求参数结构体
 * @class
 */
class DescribePrivilegeRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，最大值为100。
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
<li>Keywords - String - 是否必填：否 - 关键字(进程名称)</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * 专家服务-月巡检报告
 * @class
 */
class MonthInspectionReport extends  AbstractModel {
    constructor(){
        super();

        /**
         * 巡检报告名称
         * @type {string || null}
         */
        this.ReportName = null;

        /**
         * 巡检报告下载地址
         * @type {string || null}
         */
        this.ReportPath = null;

        /**
         * 巡检报告更新时间
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
        this.ReportName = 'ReportName' in params ? params.ReportName : null;
        this.ReportPath = 'ReportPath' in params ? params.ReportPath : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DescribeAssetSystemPackageList返回参数结构体
 * @class
 */
class DescribeAssetSystemPackageListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetSystemPackageInfo> || null}
         */
        this.Packages = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Packages) {
            this.Packages = new Array();
            for (let z in params.Packages) {
                let obj = new AssetSystemPackageInfo();
                obj.deserialize(params.Packages[z]);
                this.Packages.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetMachineList返回参数结构体
 * @class
 */
class DescribeAssetMachineListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 记录列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetMachineBaseInfo> || null}
         */
        this.Machines = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Machines) {
            this.Machines = new Array();
            for (let z in params.Machines) {
                let obj = new AssetMachineBaseInfo();
                obj.deserialize(params.Machines[z]);
                this.Machines.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebPageGeneralize请求参数结构体
 * @class
 */
class DescribeWebPageGeneralizeRequest extends  AbstractModel {
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
 * 资产管理磁盘分区信息
 * @class
 */
class AssetDiskPartitionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分区名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分区大小：单位G
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 分区使用率
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * 文件系统类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 挂载目录
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 已使用空间：单位G
         * @type {number || null}
         */
        this.Used = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Used = 'Used' in params ? params.Used : null;

    }
}

/**
 * ModifyWarningSetting请求参数结构体
 * @class
 */
class ModifyWarningSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警设置的修改内容
         * @type {Array.<WarningObject> || null}
         */
        this.WarningObjects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WarningObjects) {
            this.WarningObjects = new Array();
            for (let z in params.WarningObjects) {
                let obj = new WarningObject();
                obj.deserialize(params.WarningObjects[z]);
                this.WarningObjects.push(obj);
            }
        }

    }
}

/**
 * DescribeMalwareRiskWarning请求参数结构体
 * @class
 */
class DescribeMalwareRiskWarningRequest extends  AbstractModel {
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
 * DescribeAssetInfo请求参数结构体
 * @class
 */
class DescribeAssetInfoRequest extends  AbstractModel {
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
 * DescribeVulTop返回参数结构体
 * @class
 */
class DescribeVulTopResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞top列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VulTopInfo> || null}
         */
        this.VulTopList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VulTopList) {
            this.VulTopList = new Array();
            for (let z in params.VulTopList) {
                let obj = new VulTopInfo();
                obj.deserialize(params.VulTopList[z]);
                this.VulTopList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UntrustMalwares请求参数结构体
 * @class
 */
class UntrustMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马ID数组 (最大100条)
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeAssetAppList请求参数结构体
 * @class
 */
class DescribeAssetAppListRequest extends  AbstractModel {
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
<li>AppName- string - 是否必填：否 - 应用名搜索</li>
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Type - int - 是否必填：否 - 类型	: 仅linux
0: 全部
1: 运维
2 : 数据库
3 : 安全
4 : 可疑应用
5 : 系统架构
6 : 系统应用
7 : WEB服务
99:其他</li>
<li>OsType - uint64 - 是否必填：否 - windows/linux</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序方式：ProcessCount
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式，asc升序 或 desc降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 查询指定Quuid主机的信息
         * @type {string || null}
         */
        this.Quuid = null;

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
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * UntrustMalwares返回参数结构体
 * @class
 */
class UntrustMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExpertServiceList返回参数结构体
 * @class
 */
class DescribeExpertServiceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 安全管家数据
         * @type {Array.<SecurityButlerInfo> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new SecurityButlerInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountStatistics返回参数结构体
 * @class
 */
class DescribeAccountStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 帐号统计列表记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 帐号统计列表。
         * @type {Array.<AccountStatistics> || null}
         */
        this.AccountStatistics = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.AccountStatistics) {
            this.AccountStatistics = new Array();
            for (let z in params.AccountStatistics) {
                let obj = new AccountStatistics();
                obj.deserialize(params.AccountStatistics[z]);
                this.AccountStatistics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSearchExportList请求参数结构体
 * @class
 */
class DescribeSearchExportListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES查询条件JSON
         * @type {string || null}
         */
        this.Query = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Query = 'Query' in params ? params.Query : null;

    }
}

/**
 * ScanAsset请求参数结构体
 * @class
 */
class ScanAssetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产指纹类型id列表
         * @type {Array.<number> || null}
         */
        this.AssetTypeIds = null;

        /**
         * Quuid列表
         * @type {Array.<string> || null}
         */
        this.Quuids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetTypeIds = 'AssetTypeIds' in params ? params.AssetTypeIds : null;
        this.Quuids = 'Quuids' in params ? params.Quuids : null;

    }
}

/**
 * DescribeBaselineRule返回参数结构体
 * @class
 */
class DescribeBaselineRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页查询记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 基线检测项列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BaselineRuleInfo> || null}
         */
        this.BaselineRuleList = null;

        /**
         * 是否显示说明列：true-是，false-否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ShowRuleRemark = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.BaselineRuleList) {
            this.BaselineRuleList = new Array();
            for (let z in params.BaselineRuleList) {
                let obj = new BaselineRuleInfo();
                obj.deserialize(params.BaselineRuleList[z]);
                this.BaselineRuleList.push(obj);
            }
        }
        this.ShowRuleRemark = 'ShowRuleRemark' in params ? params.ShowRuleRemark : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMaliciousRequests返回参数结构体
 * @class
 */
class DeleteMaliciousRequestsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeESHits返回参数结构体
 * @class
 */
class DescribeESHitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES查询结果JSON
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
 * 防护目录关联服务器列表信息
 * @class
 */
class ProtectDirRelatedServer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 服务器名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 服务器IP
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 服务器系统
         * @type {string || null}
         */
        this.MachineOs = null;

        /**
         * 关联目录数
         * @type {number || null}
         */
        this.RelateDirNum = null;

        /**
         * 防护状态
         * @type {number || null}
         */
        this.ProtectStatus = null;

        /**
         * 防护开关
         * @type {number || null}
         */
        this.ProtectSwitch = null;

        /**
         * 自动恢复开关
         * @type {number || null}
         */
        this.AutoRestoreSwitchStatus = null;

        /**
         * 服务器唯一ID
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 是否已经授权
         * @type {boolean || null}
         */
        this.Authorization = null;

        /**
         * 异常状态
         * @type {number || null}
         */
        this.Exception = null;

        /**
         * 过渡进度
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 异常信息
         * @type {string || null}
         */
        this.ExceptionMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.MachineOs = 'MachineOs' in params ? params.MachineOs : null;
        this.RelateDirNum = 'RelateDirNum' in params ? params.RelateDirNum : null;
        this.ProtectStatus = 'ProtectStatus' in params ? params.ProtectStatus : null;
        this.ProtectSwitch = 'ProtectSwitch' in params ? params.ProtectSwitch : null;
        this.AutoRestoreSwitchStatus = 'AutoRestoreSwitchStatus' in params ? params.AutoRestoreSwitchStatus : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Authorization = 'Authorization' in params ? params.Authorization : null;
        this.Exception = 'Exception' in params ? params.Exception : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.ExceptionMessage = 'ExceptionMessage' in params ? params.ExceptionMessage : null;

    }
}

/**
 * ExportBruteAttacks请求参数结构体
 * @class
 */
class ExportBruteAttacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤参数
         * @type {Array.<Filters> || null}
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
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DeleteMachine返回参数结构体
 * @class
 */
class DeleteMachineResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScanVul请求参数结构体
 * @class
 */
class ScanVulRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 危害等级：1-低危；2-中危；3-高危；4-严重 (多选英文;分隔)
         * @type {string || null}
         */
        this.VulLevels = null;

        /**
         * 服务器分类：1:专业版服务器；2:自选服务器
         * @type {number || null}
         */
        this.HostType = null;

        /**
         * 漏洞类型：1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞 (多选英文;分隔)
         * @type {string || null}
         */
        this.VulCategories = null;

        /**
         * 自选服务器时生效，主机quuid的string数组
         * @type {Array.<string> || null}
         */
        this.QuuidList = null;

        /**
         * 是否是应急漏洞 0 否 1 是
         * @type {number || null}
         */
        this.VulEmergency = null;

        /**
         * 超时时长 单位秒 默认 3600 秒
         * @type {number || null}
         */
        this.TimeoutPeriod = null;

        /**
         * 需要扫描的漏洞id
         * @type {Array.<number> || null}
         */
        this.VulIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulLevels = 'VulLevels' in params ? params.VulLevels : null;
        this.HostType = 'HostType' in params ? params.HostType : null;
        this.VulCategories = 'VulCategories' in params ? params.VulCategories : null;
        this.QuuidList = 'QuuidList' in params ? params.QuuidList : null;
        this.VulEmergency = 'VulEmergency' in params ? params.VulEmergency : null;
        this.TimeoutPeriod = 'TimeoutPeriod' in params ? params.TimeoutPeriod : null;
        this.VulIds = 'VulIds' in params ? params.VulIds : null;

    }
}

/**
 * RecoverMalwares请求参数结构体
 * @class
 */
class RecoverMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马Id数组（最大100条）
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * 标签相关服务器信息
 * @class
 */
class TagMachine extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 主机ID
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 主机内网IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机外网IP
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 主机区域
         * @type {string || null}
         */
        this.MachineRegion = null;

        /**
         * 主机区域类型
         * @type {string || null}
         */
        this.MachineType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.MachineRegion = 'MachineRegion' in params ? params.MachineRegion : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;

    }
}

/**
 * DescribeAssetCoreModuleInfo返回参数结构体
 * @class
 */
class DescribeAssetCoreModuleInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内核模块详情
         * @type {AssetCoreModuleDetail || null}
         */
        this.Module = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Module) {
            let obj = new AssetCoreModuleDetail();
            obj.deserialize(params.Module)
            this.Module = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetEnvList请求参数结构体
 * @class
 */
class DescribeAssetEnvListRequest extends  AbstractModel {
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
         * 该字段已废弃，由Filters代替
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 过滤条件。
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Name- string - 是否必填：否 - 环境变量名</li>
<li>Type- int - 是否必填：否 - 类型：0用户变量，1系统变量</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 服务器Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 服务器Quuid
         * @type {string || null}
         */
        this.Quuid = null;

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
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AssetFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * StopNoticeBanTips请求参数结构体
 * @class
 */
class StopNoticeBanTipsRequest extends  AbstractModel {
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
 * DescribeScanMalwareSchedule请求参数结构体
 * @class
 */
class DescribeScanMalwareScheduleRequest extends  AbstractModel {
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
 * 资产指纹中服务器列表的基本信息
 * @class
 */
class AssetMachineBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 服务器uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 服务器内网IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 服务器名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 操作系统名称
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * CPU信息
         * @type {string || null}
         */
        this.Cpu = null;

        /**
         * 内存容量：单位G
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 内存使用率百分比
         * @type {string || null}
         */
        this.MemLoad = null;

        /**
         * 硬盘容量：单位G
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 硬盘使用率百分比
         * @type {string || null}
         */
        this.DiskLoad = null;

        /**
         * 分区数
         * @type {number || null}
         */
        this.PartitionCount = null;

        /**
         * 主机外网IP
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 业务组ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Cpu数量
         * @type {number || null}
         */
        this.CpuSize = null;

        /**
         * Cpu使用率百分比
         * @type {string || null}
         */
        this.CpuLoad = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MachineTag> || null}
         */
        this.Tag = null;

        /**
         * 数据更新时间
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
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.MemLoad = 'MemLoad' in params ? params.MemLoad : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskLoad = 'DiskLoad' in params ? params.DiskLoad : null;
        this.PartitionCount = 'PartitionCount' in params ? params.PartitionCount : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CpuSize = 'CpuSize' in params ? params.CpuSize : null;
        this.CpuLoad = 'CpuLoad' in params ? params.CpuLoad : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new MachineTag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeBashEvents返回参数结构体
 * @class
 */
class DescribeBashEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 高危命令事件列表
         * @type {Array.<BashEvent> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new BashEvent();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateMachineTags返回参数结构体
 * @class
 */
class UpdateMachineTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBashEvents请求参数结构体
 * @class
 */
class DescribeBashEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为10，最大值为100。
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
<li>Keywords - String - 是否必填：否 - 关键词(主机内网IP)</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DeleteMachine请求参数结构体
 * @class
 */
class DeleteMachineRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜客户端Uuid。
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * DescribeAssetWebLocationList返回参数结构体
 * @class
 */
class DescribeAssetWebLocationListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 站点列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetWebLocationBaseInfo> || null}
         */
        this.Locations = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Locations) {
            this.Locations = new Array();
            for (let z in params.Locations) {
                let obj = new AssetWebLocationBaseInfo();
                obj.deserialize(params.Locations[z]);
                this.Locations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetJarList请求参数结构体
 * @class
 */
class DescribeAssetJarListRequest extends  AbstractModel {
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Name- string - 是否必填：否 - 包名</li>
<li>Type- uint - 是否必填：否 - 类型	
1: 应用程序
2 : 系统类库
3 : Web服务自带库
4 : 其他依赖包</li>
<li>Status- string - 是否必填：否 - 是否可执行：0否，1是</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 服务器Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 服务器Quuid
         * @type {string || null}
         */
        this.Quuid = null;

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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * 本地提权数据
 * @class
 */
class PrivilegeEscalationProcess extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 云镜ID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 主机ID
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机内网IP
         * @type {string || null}
         */
        this.Hostip = null;

        /**
         * 进程名
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 进程路径
         * @type {string || null}
         */
        this.FullPath = null;

        /**
         * 执行命令
         * @type {string || null}
         */
        this.CmdLine = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户组
         * @type {string || null}
         */
        this.UserGroup = null;

        /**
         * 进程文件权限
         * @type {string || null}
         */
        this.ProcFilePrivilege = null;

        /**
         * 父进程名
         * @type {string || null}
         */
        this.ParentProcName = null;

        /**
         * 父进程用户名
         * @type {string || null}
         */
        this.ParentProcUser = null;

        /**
         * 父进程用户组
         * @type {string || null}
         */
        this.ParentProcGroup = null;

        /**
         * 父进程路径
         * @type {string || null}
         */
        this.ParentProcPath = null;

        /**
         * 进程树
         * @type {string || null}
         */
        this.ProcTree = null;

        /**
         * 处理状态：0-待处理 2-白名单 3-已处理 4-已忽略
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 发生时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 机器名
         * @type {string || null}
         */
        this.MachineName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Hostip = 'Hostip' in params ? params.Hostip : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.FullPath = 'FullPath' in params ? params.FullPath : null;
        this.CmdLine = 'CmdLine' in params ? params.CmdLine : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserGroup = 'UserGroup' in params ? params.UserGroup : null;
        this.ProcFilePrivilege = 'ProcFilePrivilege' in params ? params.ProcFilePrivilege : null;
        this.ParentProcName = 'ParentProcName' in params ? params.ParentProcName : null;
        this.ParentProcUser = 'ParentProcUser' in params ? params.ParentProcUser : null;
        this.ParentProcGroup = 'ParentProcGroup' in params ? params.ParentProcGroup : null;
        this.ParentProcPath = 'ParentProcPath' in params ? params.ParentProcPath : null;
        this.ProcTree = 'ProcTree' in params ? params.ProcTree : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;

    }
}

/**
 * DescribeProtectNetList返回参数结构体
 * @class
 */
class DescribeProtectNetListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 安全管家数据
         * @type {Array.<ProtectNetInfo> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ProtectNetInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeESAggregations返回参数结构体
 * @class
 */
class DescribeESAggregationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES聚合结果JSON
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
 * 资产管理Web站点列表信息
 * @class
 */
class AssetWebLocationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 站点端口
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 站点协议
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 服务类型
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 安全模块状态：0未启用，1启用，999空，仅nginx
         * @type {number || null}
         */
        this.SafeStatus = null;

        /**
         * 运行用户
         * @type {string || null}
         */
        this.User = null;

        /**
         * 主目录
         * @type {string || null}
         */
        this.MainPath = null;

        /**
         * 启动命令
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 绑定IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 数据更新时间
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.SafeStatus = 'SafeStatus' in params ? params.SafeStatus : null;
        this.User = 'User' in params ? params.User : null;
        this.MainPath = 'MainPath' in params ? params.MainPath : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ChangeRuleEventsIgnoreStatus返回参数结构体
 * @class
 */
class ChangeRuleEventsIgnoreStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资产指纹中服务器列表的基本信息
 * @class
 */
class AssetMachineDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 服务器uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 服务器内网IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 服务器名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 操作系统名称
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * CPU信息
         * @type {string || null}
         */
        this.Cpu = null;

        /**
         * 内存容量：单位G
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 内存使用率百分比
         * @type {string || null}
         */
        this.MemLoad = null;

        /**
         * 硬盘容量：单位G
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 硬盘使用率百分比
         * @type {string || null}
         */
        this.DiskLoad = null;

        /**
         * 分区数
         * @type {number || null}
         */
        this.PartitionCount = null;

        /**
         * 主机外网IP
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * Cpu数量
         * @type {number || null}
         */
        this.CpuSize = null;

        /**
         * Cpu使用率百分比
         * @type {string || null}
         */
        this.CpuLoad = null;

        /**
         * 防护级别：0基础版，1专业版
         * @type {number || null}
         */
        this.ProtectLevel = null;

        /**
         * 风险状态：UNKNOW-未知，RISK-风险，SAFT-安全
         * @type {string || null}
         */
        this.RiskStatus = null;

        /**
         * 已防护天数
         * @type {number || null}
         */
        this.ProtectDays = null;

        /**
         * 专业版开通时间
         * @type {string || null}
         */
        this.BuyTime = null;

        /**
         * 专业版到期时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 内核版本
         * @type {string || null}
         */
        this.CoreVersion = null;

        /**
         * linux/windows
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * agent版本
         * @type {string || null}
         */
        this.AgentVersion = null;

        /**
         * 安装时间
         * @type {string || null}
         */
        this.InstallTime = null;

        /**
         * 系统启动时间
         * @type {string || null}
         */
        this.BootTime = null;

        /**
         * 最后上线时间
         * @type {string || null}
         */
        this.LastLiveTime = null;

        /**
         * 生产商
         * @type {string || null}
         */
        this.Producer = null;

        /**
         * 序列号
         * @type {string || null}
         */
        this.SerialNumber = null;

        /**
         * 网卡
         * @type {Array.<AssetNetworkCardInfo> || null}
         */
        this.NetCards = null;

        /**
         * 分区
         * @type {Array.<AssetDiskPartitionInfo> || null}
         */
        this.Disks = null;

        /**
         * 0在线，1已离线
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 业务组ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 设备型号
         * @type {string || null}
         */
        this.DeviceVersion = null;

        /**
         * 离线时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * 主机ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据更新时间
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
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.MemLoad = 'MemLoad' in params ? params.MemLoad : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskLoad = 'DiskLoad' in params ? params.DiskLoad : null;
        this.PartitionCount = 'PartitionCount' in params ? params.PartitionCount : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.CpuSize = 'CpuSize' in params ? params.CpuSize : null;
        this.CpuLoad = 'CpuLoad' in params ? params.CpuLoad : null;
        this.ProtectLevel = 'ProtectLevel' in params ? params.ProtectLevel : null;
        this.RiskStatus = 'RiskStatus' in params ? params.RiskStatus : null;
        this.ProtectDays = 'ProtectDays' in params ? params.ProtectDays : null;
        this.BuyTime = 'BuyTime' in params ? params.BuyTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CoreVersion = 'CoreVersion' in params ? params.CoreVersion : null;
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.AgentVersion = 'AgentVersion' in params ? params.AgentVersion : null;
        this.InstallTime = 'InstallTime' in params ? params.InstallTime : null;
        this.BootTime = 'BootTime' in params ? params.BootTime : null;
        this.LastLiveTime = 'LastLiveTime' in params ? params.LastLiveTime : null;
        this.Producer = 'Producer' in params ? params.Producer : null;
        this.SerialNumber = 'SerialNumber' in params ? params.SerialNumber : null;

        if (params.NetCards) {
            this.NetCards = new Array();
            for (let z in params.NetCards) {
                let obj = new AssetNetworkCardInfo();
                obj.deserialize(params.NetCards[z]);
                this.NetCards.push(obj);
            }
        }

        if (params.Disks) {
            this.Disks = new Array();
            for (let z in params.Disks) {
                let obj = new AssetDiskPartitionInfo();
                obj.deserialize(params.Disks[z]);
                this.Disks.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DeviceVersion = 'DeviceVersion' in params ? params.DeviceVersion : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 资源管理数据库列表信息
 * @class
 */
class AssetDatabaseBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机内网IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机外网IP
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 操作系统信息
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 主机业务组ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MachineTag> || null}
         */
        this.Tag = null;

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 监听端口
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 协议
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 运行用户
         * @type {string || null}
         */
        this.User = null;

        /**
         * 绑定IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 配置文件路径
         * @type {string || null}
         */
        this.ConfigPath = null;

        /**
         * 日志文件路径
         * @type {string || null}
         */
        this.LogPath = null;

        /**
         * 数据路径
         * @type {string || null}
         */
        this.DataPath = null;

        /**
         * 运行权限
         * @type {string || null}
         */
        this.Permission = null;

        /**
         * 错误日志路径
         * @type {string || null}
         */
        this.ErrorLogPath = null;

        /**
         * 插件路径
         * @type {string || null}
         */
        this.PlugInPath = null;

        /**
         * 二进制路径
         * @type {string || null}
         */
        this.BinPath = null;

        /**
         * 启动参数
         * @type {string || null}
         */
        this.Param = null;

        /**
         * 数据库ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 数据更新时间
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
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new MachineTag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.User = 'User' in params ? params.User : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.ConfigPath = 'ConfigPath' in params ? params.ConfigPath : null;
        this.LogPath = 'LogPath' in params ? params.LogPath : null;
        this.DataPath = 'DataPath' in params ? params.DataPath : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.ErrorLogPath = 'ErrorLogPath' in params ? params.ErrorLogPath : null;
        this.PlugInPath = 'PlugInPath' in params ? params.PlugInPath : null;
        this.BinPath = 'BinPath' in params ? params.BinPath : null;
        this.Param = 'Param' in params ? params.Param : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DeletePrivilegeRules返回参数结构体
 * @class
 */
class DeletePrivilegeRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProtectServer请求参数结构体
 * @class
 */
class CreateProtectServerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防护目录地址
         * @type {string || null}
         */
        this.ProtectDir = null;

        /**
         * 防护机器 信息
         * @type {Array.<ProtectHostConfig> || null}
         */
        this.ProtectHostConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectDir = 'ProtectDir' in params ? params.ProtectDir : null;

        if (params.ProtectHostConfig) {
            this.ProtectHostConfig = new Array();
            for (let z in params.ProtectHostConfig) {
                let obj = new ProtectHostConfig();
                obj.deserialize(params.ProtectHostConfig[z]);
                this.ProtectHostConfig.push(obj);
            }
        }

    }
}

/**
 * DescribeMachineList请求参数结构体
 * @class
 */
class DescribeMachineListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云主机类型。
<li>CVM：表示虚拟主机</li>
<li>BM:  表示黑石物理机</li>
<li>ECM:  表示边缘计算服务器</li>
<li>LH:  表示轻量应用服务器</li>
<li>Other:  表示混合云机器</li>
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 机器所属地域。如：ap-guangzhou，ap-shanghai
         * @type {string || null}
         */
        this.MachineRegion = null;

        /**
         * 返回数量，默认为10，最大值为100。
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
<li>Keywords - String - 是否必填：否 - 查询关键字 </li>
<li>Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线 | ONLINE: 在线 | UNINSTALLED：未安装）</li>
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版）</li>
每个过滤条件只支持一个值，暂不支持多个值“或”关系查询
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
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineRegion = 'MachineRegion' in params ? params.MachineRegion : null;
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
 * CreateEmergencyVulScan返回参数结构体
 * @class
 */
class CreateEmergencyVulScanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetCoreModuleInfo请求参数结构体
 * @class
 */
class DescribeAssetCoreModuleInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 服务器Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 内核模块ID
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
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeIndexList返回参数结构体
 * @class
 */
class DescribeIndexListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES 索引信息
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
 * ModifyWebPageProtectDir请求参数结构体
 * @class
 */
class ModifyWebPageProtectDirRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网站防护目录地址
         * @type {string || null}
         */
        this.ProtectDirAddr = null;

        /**
         * 网站防护目录名称
         * @type {string || null}
         */
        this.ProtectDirName = null;

        /**
         * 防护文件类型,分号分割 ;
         * @type {string || null}
         */
        this.ProtectFileType = null;

        /**
         * 防护机器列表信息
         * @type {Array.<ProtectHostConfig> || null}
         */
        this.HostConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectDirAddr = 'ProtectDirAddr' in params ? params.ProtectDirAddr : null;
        this.ProtectDirName = 'ProtectDirName' in params ? params.ProtectDirName : null;
        this.ProtectFileType = 'ProtectFileType' in params ? params.ProtectFileType : null;

        if (params.HostConfig) {
            this.HostConfig = new Array();
            for (let z in params.HostConfig) {
                let obj = new ProtectHostConfig();
                obj.deserialize(params.HostConfig[z]);
                this.HostConfig.push(obj);
            }
        }

    }
}

/**
 * DescribeWebPageGeneralize返回参数结构体
 * @class
 */
class DescribeWebPageGeneralizeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防护监测 0 未开启 1 已开启 2 异常
         * @type {number || null}
         */
        this.ProtectMonitor = null;

        /**
         * 防护目录数
         * @type {number || null}
         */
        this.ProtectDirNum = null;

        /**
         * 防护文件数
         * @type {number || null}
         */
        this.ProtectFileNum = null;

        /**
         * 篡改文件数
         * @type {number || null}
         */
        this.TamperFileNum = null;

        /**
         * 篡改数
         * @type {number || null}
         */
        this.TamperNum = null;

        /**
         * 今日防护数
         * @type {number || null}
         */
        this.ProtectToday = null;

        /**
         * 防护主机数
         * @type {number || null}
         */
        this.ProtectHostNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectMonitor = 'ProtectMonitor' in params ? params.ProtectMonitor : null;
        this.ProtectDirNum = 'ProtectDirNum' in params ? params.ProtectDirNum : null;
        this.ProtectFileNum = 'ProtectFileNum' in params ? params.ProtectFileNum : null;
        this.TamperFileNum = 'TamperFileNum' in params ? params.TamperFileNum : null;
        this.TamperNum = 'TamperNum' in params ? params.TamperNum : null;
        this.ProtectToday = 'ProtectToday' in params ? params.ProtectToday : null;
        this.ProtectHostNum = 'ProtectHostNum' in params ? params.ProtectHostNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBanWhiteList返回参数结构体
 * @class
 */
class DescribeBanWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 白名单列表
         * @type {Array.<BanWhiteListDetail> || null}
         */
        this.WhiteList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.WhiteList) {
            this.WhiteList = new Array();
            for (let z in params.WhiteList) {
                let obj = new BanWhiteListDetail();
                obj.deserialize(params.WhiteList[z]);
                this.WhiteList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 专家服务-应急响应信息
 * @class
 */
class EmergencyResponseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 主机个数
         * @type {number || null}
         */
        this.HostNum = null;

        /**
         * 服务状态 0未启动，·响应中，2响应完成
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 服务开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 服务结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 报告下载地址
         * @type {string || null}
         */
        this.ReportPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.HostNum = 'HostNum' in params ? params.HostNum : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ReportPath = 'ReportPath' in params ? params.ReportPath : null;

    }
}

/**
 * DescribeOpenPortStatistics返回参数结构体
 * @class
 */
class DescribeOpenPortStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 端口统计列表总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 端口统计数据列表
         * @type {Array.<OpenPortStatistics> || null}
         */
        this.OpenPortStatistics = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.OpenPortStatistics) {
            this.OpenPortStatistics = new Array();
            for (let z in params.OpenPortStatistics) {
                let obj = new OpenPortStatistics();
                obj.deserialize(params.OpenPortStatistics[z]);
                this.OpenPortStatistics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAttackLogs返回参数结构体
 * @class
 */
class DeleteAttackLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全事件消息数据。
 * @class
 */
class SecurityDynamic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜客户端UUID。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 安全事件发生时间。
         * @type {string || null}
         */
        this.EventTime = null;

        /**
         * 安全事件类型。
<li>MALWARE：木马事件</li>
<li>NON_LOCAL_LOGIN：异地登录</li>
<li>BRUTEATTACK_SUCCESS：密码破解成功</li>
<li>VUL：漏洞</li>
<li>BASELINE：安全基线</li>
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * 安全事件消息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 安全事件等级。
<li>RISK: 严重</li>
<li>HIGH: 高危</li>
<li>NORMAL: 中危</li>
<li>LOW: 低危</li>
         * @type {string || null}
         */
        this.SecurityLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.EventTime = 'EventTime' in params ? params.EventTime : null;
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.SecurityLevel = 'SecurityLevel' in params ? params.SecurityLevel : null;

    }
}

/**
 * DescribeMalWareList请求参数结构体
 * @class
 */
class DescribeMalWareListRequest extends  AbstractModel {
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>FilePath - String - 是否必填：否 - 路径筛选</li>
<li>VirusName - String - 是否必填：否 - 描述筛选</li>
<li>CreateBeginTime - String - 是否必填：否 - 创建时间筛选-开始时间</li>
<li>CreateEndTime - String - 是否必填：否 - 创建时间筛选-结束时间</li>
<li>Status - String - 是否必填：否 - 状态筛选 4待处理,5信任,6已隔离,10隔离中,11恢复隔离中</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 检测排序 CreateTime
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式 ASC,DESC
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
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

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
         * 后付费昨日扣费
         * @type {number || null}
         */
        this.PostPayCost = null;

        /**
         * 新增主机是否自动开通专业版
         * @type {boolean || null}
         */
        this.IsAutoOpenProVersion = null;

        /**
         * 开通专业版主机数
         * @type {number || null}
         */
        this.ProVersionNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PostPayCost = 'PostPayCost' in params ? params.PostPayCost : null;
        this.IsAutoOpenProVersion = 'IsAutoOpenProVersion' in params ? params.IsAutoOpenProVersion : null;
        this.ProVersionNum = 'ProVersionNum' in params ? params.ProVersionNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTags返回参数结构体
 * @class
 */
class DeleteTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityEventsCnt请求参数结构体
 * @class
 */
class DescribeSecurityEventsCntRequest extends  AbstractModel {
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
 * 资源管理账号基本信息
 * @class
 */
class AssetUserBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机内网IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机外网IP
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 操作系统信息
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 账号UID
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 账号GID
         * @type {string || null}
         */
        this.Gid = null;

        /**
         * 账号状态：0-禁用；1-启用
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 是否有root权限：0-否；1是，999为空: 仅linux
         * @type {number || null}
         */
        this.IsRoot = null;

        /**
         * 登录方式：0-不可登录；1-只允许key登录；2只允许密码登录；3-允许key和密码，999为空，仅linux
         * @type {number || null}
         */
        this.LoginType = null;

        /**
         * 上次登录时间
         * @type {string || null}
         */
        this.LastLoginTime = null;

        /**
         * 账号名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 主机业务组ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 账号类型：0访客用户，1标准用户，2管理员用户 ,999为空,仅windows
         * @type {number || null}
         */
        this.UserType = null;

        /**
         * 是否域账号：0否， 1是，2否, 999为空  仅windows
         * @type {number || null}
         */
        this.IsDomain = null;

        /**
         * 是否有sudo权限，1是，0否, 999为空, 仅linux
         * @type {number || null}
         */
        this.IsSudo = null;

        /**
         * 是否允许ssh登录，1是，0否, 999为空, 仅linux
         * @type {number || null}
         */
        this.IsSshLogin = null;

        /**
         * Home目录
         * @type {string || null}
         */
        this.HomePath = null;

        /**
         * Shell路径  仅linux
         * @type {string || null}
         */
        this.Shell = null;

        /**
         * 是否shell登录性，0不是；1是 仅linux
         * @type {number || null}
         */
        this.ShellLoginStatus = null;

        /**
         * 密码修改时间
         * @type {string || null}
         */
        this.PasswordChangeTime = null;

        /**
         * 密码过期时间  仅linux
         * @type {string || null}
         */
        this.PasswordDueTime = null;

        /**
         * 密码锁定时间：单位天, -1为永不锁定 999为空，仅linux
         * @type {number || null}
         */
        this.PasswordLockDays = null;

        /**
         * 密码状态：1正常 2即将过期 3已过期 4已锁定 999为空 仅linux
         * @type {number || null}
         */
        this.PasswordStatus = null;

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
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Gid = 'Gid' in params ? params.Gid : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsRoot = 'IsRoot' in params ? params.IsRoot : null;
        this.LoginType = 'LoginType' in params ? params.LoginType : null;
        this.LastLoginTime = 'LastLoginTime' in params ? params.LastLoginTime : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.IsDomain = 'IsDomain' in params ? params.IsDomain : null;
        this.IsSudo = 'IsSudo' in params ? params.IsSudo : null;
        this.IsSshLogin = 'IsSshLogin' in params ? params.IsSshLogin : null;
        this.HomePath = 'HomePath' in params ? params.HomePath : null;
        this.Shell = 'Shell' in params ? params.Shell : null;
        this.ShellLoginStatus = 'ShellLoginStatus' in params ? params.ShellLoginStatus : null;
        this.PasswordChangeTime = 'PasswordChangeTime' in params ? params.PasswordChangeTime : null;
        this.PasswordDueTime = 'PasswordDueTime' in params ? params.PasswordDueTime : null;
        this.PasswordLockDays = 'PasswordLockDays' in params ? params.PasswordLockDays : null;
        this.PasswordStatus = 'PasswordStatus' in params ? params.PasswordStatus : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeMachineOsList返回参数结构体
 * @class
 */
class DescribeMachineOsListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作系统列表
         * @type {Array.<OsName> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new OsName();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportMaliciousRequests返回参数结构体
 * @class
 */
class ExportMaliciousRequestsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出文件下载链接地址。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 导出任务Id , 可通过ExportTasks 接口下载
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 批量导入机器信息.
 * @class
 */
class EffectiveMachineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 机器公网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MachinePublicIp = null;

        /**
         * 机器内网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MachinePrivateIp = null;

        /**
         * 机器标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MachineTag> || null}
         */
        this.MachineTag = null;

        /**
         * 机器Quuid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 云镜Uuid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 内核版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KernelVersion = null;

        /**
         * 在线状态 OFFLINE，ONLINE
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MachineStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.MachinePublicIp = 'MachinePublicIp' in params ? params.MachinePublicIp : null;
        this.MachinePrivateIp = 'MachinePrivateIp' in params ? params.MachinePrivateIp : null;

        if (params.MachineTag) {
            this.MachineTag = new Array();
            for (let z in params.MachineTag) {
                let obj = new MachineTag();
                obj.deserialize(params.MachineTag[z]);
                this.MachineTag.push(obj);
            }
        }
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.KernelVersion = 'KernelVersion' in params ? params.KernelVersion : null;
        this.MachineStatus = 'MachineStatus' in params ? params.MachineStatus : null;

    }
}

/**
 * DescribeVulCountByDates返回参数结构体
 * @class
 */
class DescribeVulCountByDatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量获得对应天数的漏洞数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.VulCount = null;

        /**
         * 批量获得对应天数的主机数量
         * @type {Array.<number> || null}
         */
        this.HostCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulCount = 'VulCount' in params ? params.VulCount : null;
        this.HostCount = 'HostCount' in params ? params.HostCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTagMachines返回参数结构体
 * @class
 */
class DescribeTagMachinesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表数据
         * @type {Array.<TagMachine> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new TagMachine();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIndexList请求参数结构体
 * @class
 */
class DescribeIndexListRequest extends  AbstractModel {
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
 * 防护目录列表集
 * @class
 */
class ProtectDirInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网站名称
         * @type {string || null}
         */
        this.DirName = null;

        /**
         * 网站防护目录地址
         * @type {string || null}
         */
        this.DirPath = null;

        /**
         * 关联服务器数
         * @type {number || null}
         */
        this.RelatedServerNum = null;

        /**
         * 防护服务器数
         * @type {number || null}
         */
        this.ProtectServerNum = null;

        /**
         * 未防护服务器数
         * @type {number || null}
         */
        this.NoProtectServerNum = null;

        /**
         * 唯一ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 防护状态
         * @type {number || null}
         */
        this.ProtectStatus = null;

        /**
         * 防护异常
         * @type {number || null}
         */
        this.ProtectException = null;

        /**
         * 自动恢复开关 (Filters 过滤Quuid 时 返回) 默认0
         * @type {number || null}
         */
        this.AutoRestoreSwitchStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirName = 'DirName' in params ? params.DirName : null;
        this.DirPath = 'DirPath' in params ? params.DirPath : null;
        this.RelatedServerNum = 'RelatedServerNum' in params ? params.RelatedServerNum : null;
        this.ProtectServerNum = 'ProtectServerNum' in params ? params.ProtectServerNum : null;
        this.NoProtectServerNum = 'NoProtectServerNum' in params ? params.NoProtectServerNum : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.ProtectStatus = 'ProtectStatus' in params ? params.ProtectStatus : null;
        this.ProtectException = 'ProtectException' in params ? params.ProtectException : null;
        this.AutoRestoreSwitchStatus = 'AutoRestoreSwitchStatus' in params ? params.AutoRestoreSwitchStatus : null;

    }
}

/**
 * DeleteBashRules请求参数结构体
 * @class
 */
class DeleteBashRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID数组，最大100条。
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * CreateProtectServer返回参数结构体
 * @class
 */
class CreateProtectServerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExpertServiceList请求参数结构体
 * @class
 */
class DescribeExpertServiceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li>Keyword- String - 是否必填：否 - 关键词过滤，</li>
<li>Uuids - String - 是否必填：否 - 主机id过滤</li>
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 需要返回的数量，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序步长
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序方法
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段 StartTime，EndTime
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
                let obj = new Filters();
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
 * DescribeBaselineHostTop请求参数结构体
 * @class
 */
class DescribeBaselineHostTopRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动态top值
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 策略id
         * @type {number || null}
         */
        this.StrategyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Top = 'Top' in params ? params.Top : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;

    }
}

/**
 * ExportBaselineEffectHostList返回参数结构体
 * @class
 */
class ExportBaselineEffectHostListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 导出任务id 可通过 ExportTasks接口下载
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVulHostTop返回参数结构体
 * @class
 */
class DescribeVulHostTopResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器风险top列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VulHostTopInfo> || null}
         */
        this.VulHostTopList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VulHostTopList) {
            this.VulHostTopList = new Array();
            for (let z in params.VulHostTopList) {
                let obj = new VulHostTopInfo();
                obj.deserialize(params.VulHostTopList[z]);
                this.VulHostTopList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TrustMalwares返回参数结构体
 * @class
 */
class TrustMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHistoryService请求参数结构体
 * @class
 */
class DescribeHistoryServiceRequest extends  AbstractModel {
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
 * DescribeWarningList请求参数结构体
 * @class
 */
class DescribeWarningListRequest extends  AbstractModel {
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
 * SyncAssetScan请求参数结构体
 * @class
 */
class SyncAssetScanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否同步：true-是 false-否；默认false
         * @type {boolean || null}
         */
        this.Sync = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Sync = 'Sync' in params ? params.Sync : null;

    }
}

/**
 * 漏洞影响主机列表
 * @class
 */
class VulEffectHostList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 状态：0: 待处理 1:忽略  3:已修复  5:检测中 6:修复中 7: 回滚中 8:修复失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 最后检测时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastTime = null;

        /**
         * 危害等级：1-低危；2-中危；3-高危；4-严重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 主机Quuid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机Uuid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 主机HostIp
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 主机别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 版本信息 0=普通版本 1=专业版 2=旗舰版
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HostVersion = null;

        /**
         * 是否能自动修复 0 :漏洞不可自动修复，  1：可自动修复， 2：客户端已离线， 3：主机不是旗舰版只能手动修复， 4：机型不允许 ，5：修复中 ，6：已修复， 7：检测中  9:修复失败，10:已忽略 11:漏洞只支持linux不支持Windows 12：漏洞只支持Windows不支持linux，13:修复失败但此时主机已离线，14:修复失败但此时主机不是旗舰版， 15:已手动修复
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsSupportAutoFix = null;

        /**
         * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FixStatusMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.HostVersion = 'HostVersion' in params ? params.HostVersion : null;
        this.IsSupportAutoFix = 'IsSupportAutoFix' in params ? params.IsSupportAutoFix : null;
        this.FixStatusMsg = 'FixStatusMsg' in params ? params.FixStatusMsg : null;

    }
}

/**
 * DescribeServerRelatedDirInfo请求参数结构体
 * @class
 */
class DescribeServerRelatedDirInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一ID
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeESAggregations请求参数结构体
 * @class
 */
class DescribeESAggregationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES聚合条件JSON
         * @type {string || null}
         */
        this.Query = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Query = 'Query' in params ? params.Query : null;

    }
}

/**
 * 基线影响服务器列表数据
 * @class
 */
class BaselineHostTopList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件等级与次数列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BaselineEventLevelInfo> || null}
         */
        this.EventLevelList = null;

        /**
         * 主机名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 主机Quuid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 计算权重的分数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventLevelList) {
            this.EventLevelList = new Array();
            for (let z in params.EventLevelList) {
                let obj = new BaselineEventLevelInfo();
                obj.deserialize(params.EventLevelList[z]);
                this.EventLevelList.push(obj);
            }
        }
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * DescribeReverseShellRules返回参数结构体
 * @class
 */
class DescribeReverseShellRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表内容
         * @type {Array.<ReverseShellRule> || null}
         */
        this.List = null;

        /**
         * 总条数
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
                let obj = new ReverseShellRule();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBruteAttackList请求参数结构体
 * @class
 */
class DescribeBruteAttackListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，最大值为100
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Uuid - String - 是否必填：否 - 云镜唯一Uuid</li>
<li>Quuid - String - 是否必填：否 - 云服务器uuid</li>
<li>Status - String - 是否必填：否 - 状态筛选：失败：FAILED 成功：SUCCESS</li>
<li>UserName - String - 是否必填：否 - UserName筛选</li>
<li>SrcIp - String - 是否必填：否 - 来源ip筛选</li>
<li>CreateBeginTime - String - 是否必填：否 - 首次攻击时间筛选，开始时间</li>
<li>CreateEndTime - String - 是否必填：否 - 首次攻击时间筛选，结束时间</li>
<li>ModifyBeginTime - String - 是否必填：否 - 最近攻击时间筛选，开始时间</li>
<li>ModifyEndTime - String - 是否必填：否 - 最近攻击时间筛选，结束时间</li>
<li>Banned - String - 是否必填：否 - 阻断状态筛选，多个用","分割：0-未阻断（全局ZK开关关闭），82-未阻断(非专业版)，83-未阻断(已加白名单)，1-已阻断，2-未阻断-程序异常，3-未阻断-内网攻击暂不支持阻断，4-未阻断-安平暂不支持阻断</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeVulList返回参数结构体
 * @class
 */
class DescribeVulListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VulInfoList> || null}
         */
        this.VulInfoList = null;

        /**
         * 漏洞总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 重点关注漏洞总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FollowVulCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VulInfoList) {
            this.VulInfoList = new Array();
            for (let z in params.VulInfoList) {
                let obj = new VulInfoList();
                obj.deserialize(params.VulInfoList[z]);
                this.VulInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.FollowVulCount = 'FollowVulCount' in params ? params.FollowVulCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUndoVulCounts请求参数结构体
 * @class
 */
class DescribeUndoVulCountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞分类，1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞
         * @type {number || null}
         */
        this.VulCategory = null;

        /**
         * 是否应急漏洞筛选, 是 : yes
         * @type {string || null}
         */
        this.IfEmergency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulCategory = 'VulCategory' in params ? params.VulCategory : null;
        this.IfEmergency = 'IfEmergency' in params ? params.IfEmergency : null;

    }
}

/**
 * ScanAsset返回参数结构体
 * @class
 */
class ScanAssetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
注意：此字段可能返回 null，表示取不到有效值。
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
 * 主机列表
 * @class
 */
class Machine extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机名称。
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 主机系统。
         * @type {string || null}
         */
        this.MachineOs = null;

        /**
         * 主机状态。
<li>OFFLINE: 离线  </li>
<li>ONLINE: 在线</li>
<li>SHUTDOWN: 已关机</li>
<li>UNINSTALLED: 未防护</li>
         * @type {string || null}
         */
        this.MachineStatus = null;

        /**
         * 云镜客户端唯一Uuid，若客户端长时间不在线将返回空字符。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * CVM或BM机器唯一Uuid。
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 漏洞数。
         * @type {number || null}
         */
        this.VulNum = null;

        /**
         * 主机IP。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 是否是专业版。
<li>true： 是</li>
<li>false：否</li>
         * @type {boolean || null}
         */
        this.IsProVersion = null;

        /**
         * 主机外网IP。
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 主机状态。
<li>POSTPAY: 表示后付费，即按量计费  </li>
<li>PREPAY: 表示预付费，即包年包月</li>
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 木马数。
         * @type {number || null}
         */
        this.MalwareNum = null;

        /**
         * 标签信息
         * @type {Array.<MachineTag> || null}
         */
        this.Tag = null;

        /**
         * 基线风险数。
         * @type {number || null}
         */
        this.BaselineNum = null;

        /**
         * 网络风险数。
         * @type {number || null}
         */
        this.CyberAttackNum = null;

        /**
         * 风险状态。
<li>SAFE：安全</li>
<li>RISK：风险</li>
<li>UNKNOWN：未知</li>
         * @type {string || null}
         */
        this.SecurityStatus = null;

        /**
         * 入侵事件数
         * @type {number || null}
         */
        this.InvasionNum = null;

        /**
         * 地域信息
         * @type {RegionInfo || null}
         */
        this.RegionInfo = null;

        /**
         * 实例状态 TERMINATED_PRO_VERSION 已销毁
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * 防篡改 授权状态 1 授权 0 未授权
         * @type {number || null}
         */
        this.LicenseStatus = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 是否有资产扫描接口，0无，1有
         * @type {number || null}
         */
        this.HasAssetScan = null;

        /**
         * 机器所属专区类型 CVM 云服务器, BM 黑石, ECM 边缘计算, LH 轻量应用服务器 ,Other 混合云专区
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 内核版本
         * @type {string || null}
         */
        this.KernelVersion = null;

        /**
         * 防护版本 BASIC_VERSION 基础版, PRO_VERSION 专业版 Flagship 旗舰版.
         * @type {string || null}
         */
        this.ProtectType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.MachineOs = 'MachineOs' in params ? params.MachineOs : null;
        this.MachineStatus = 'MachineStatus' in params ? params.MachineStatus : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.VulNum = 'VulNum' in params ? params.VulNum : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.IsProVersion = 'IsProVersion' in params ? params.IsProVersion : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.MalwareNum = 'MalwareNum' in params ? params.MalwareNum : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new MachineTag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.BaselineNum = 'BaselineNum' in params ? params.BaselineNum : null;
        this.CyberAttackNum = 'CyberAttackNum' in params ? params.CyberAttackNum : null;
        this.SecurityStatus = 'SecurityStatus' in params ? params.SecurityStatus : null;
        this.InvasionNum = 'InvasionNum' in params ? params.InvasionNum : null;

        if (params.RegionInfo) {
            let obj = new RegionInfo();
            obj.deserialize(params.RegionInfo)
            this.RegionInfo = obj;
        }
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;
        this.LicenseStatus = 'LicenseStatus' in params ? params.LicenseStatus : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.HasAssetScan = 'HasAssetScan' in params ? params.HasAssetScan : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.KernelVersion = 'KernelVersion' in params ? params.KernelVersion : null;
        this.ProtectType = 'ProtectType' in params ? params.ProtectType : null;

    }
}

/**
 * 授权机器信息
 * @class
 */
class ProtectMachineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 机器IP
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 开通时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * DescribeMalwareFile请求参数结构体
 * @class
 */
class DescribeMalwareFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马记录ID
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteMaliciousRequests请求参数结构体
 * @class
 */
class DeleteMaliciousRequestsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意请求记录ID数组，(最大100条)
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeBanWhiteList请求参数结构体
 * @class
 */
class DescribeBanWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件。
<li>Keywords - String - 是否必填：否 - 查询关键字 </li>
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
 * DescribeWebPageServiceInfo返回参数结构体
 * @class
 */
class DescribeWebPageServiceInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否已购服务：true-是，false-否
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 已使用授权数
         * @type {number || null}
         */
        this.UsedNum = null;

        /**
         * 剩余授权数
         * @type {number || null}
         */
        this.ResidueNum = null;

        /**
         * 已购授权数
         * @type {number || null}
         */
        this.BuyNum = null;

        /**
         * 临近到期数量
         * @type {number || null}
         */
        this.ExpireNum = null;

        /**
         * 所有授权机器信息
         * @type {Array.<ProtectMachineInfo> || null}
         */
        this.AllAuthorizedMachines = null;

        /**
         * 临近到期授权机器信息
         * @type {Array.<ProtectMachine> || null}
         */
        this.ExpireAuthorizedMachines = null;

        /**
         * 已过期授权数
         * @type {number || null}
         */
        this.ExpiredNum = null;

        /**
         * 防护目录数
         * @type {number || null}
         */
        this.ProtectDirNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.UsedNum = 'UsedNum' in params ? params.UsedNum : null;
        this.ResidueNum = 'ResidueNum' in params ? params.ResidueNum : null;
        this.BuyNum = 'BuyNum' in params ? params.BuyNum : null;
        this.ExpireNum = 'ExpireNum' in params ? params.ExpireNum : null;

        if (params.AllAuthorizedMachines) {
            this.AllAuthorizedMachines = new Array();
            for (let z in params.AllAuthorizedMachines) {
                let obj = new ProtectMachineInfo();
                obj.deserialize(params.AllAuthorizedMachines[z]);
                this.AllAuthorizedMachines.push(obj);
            }
        }

        if (params.ExpireAuthorizedMachines) {
            this.ExpireAuthorizedMachines = new Array();
            for (let z in params.ExpireAuthorizedMachines) {
                let obj = new ProtectMachine();
                obj.deserialize(params.ExpireAuthorizedMachines[z]);
                this.ExpireAuthorizedMachines.push(obj);
            }
        }
        this.ExpiredNum = 'ExpiredNum' in params ? params.ExpiredNum : null;
        this.ProtectDirNum = 'ProtectDirNum' in params ? params.ProtectDirNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUsualLoginPlaces请求参数结构体
 * @class
 */
class DescribeUsualLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜客户端UUID
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * 防护事件列表信息
 * @class
 */
class ProtectEventLists extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 服务器ip
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 事件地址
         * @type {string || null}
         */
        this.EventDir = null;

        /**
         * 事件类型 0-内容被修改恢复；1-权限被修改恢复；2-归属被修改恢复；3-被删除恢复；4-新增删除
         * @type {number || null}
         */
        this.EventType = null;

        /**
         * 事件状态 1 已恢复 0 未恢复
         * @type {number || null}
         */
        this.EventStatus = null;

        /**
         * 发现时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 恢复时间
         * @type {string || null}
         */
        this.RestoreTime = null;

        /**
         * 唯一ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 文件类型 0-常规文件；1-目录；2-软链
         * @type {number || null}
         */
        this.FileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.EventDir = 'EventDir' in params ? params.EventDir : null;
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.EventStatus = 'EventStatus' in params ? params.EventStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RestoreTime = 'RestoreTime' in params ? params.RestoreTime : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

    }
}

/**
 * SwitchBashRules请求参数结构体
 * @class
 */
class SwitchBashRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 是否禁用
         * @type {number || null}
         */
        this.Disabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;

    }
}

/**
 * DescribeProcessStatistics请求参数结构体
 * @class
 */
class DescribeProcessStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为10，最大值为100。
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
<li>ProcessName - String - 是否必填：否 - 进程名</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeAssetInfo返回参数结构体
 * @class
 */
class DescribeAssetInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机数
         * @type {number || null}
         */
        this.MachineCount = null;

        /**
         * 账号数
         * @type {number || null}
         */
        this.AccountCount = null;

        /**
         * 端口数
         * @type {number || null}
         */
        this.PortCount = null;

        /**
         * 进程数
         * @type {number || null}
         */
        this.ProcessCount = null;

        /**
         * 软件数
         * @type {number || null}
         */
        this.SoftwareCount = null;

        /**
         * 数据库数
         * @type {number || null}
         */
        this.DatabaseCount = null;

        /**
         * Web应用数
         * @type {number || null}
         */
        this.WebAppCount = null;

        /**
         * Web框架数
         * @type {number || null}
         */
        this.WebFrameCount = null;

        /**
         * Web服务数
         * @type {number || null}
         */
        this.WebServiceCount = null;

        /**
         * Web站点数
         * @type {number || null}
         */
        this.WebLocationCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineCount = 'MachineCount' in params ? params.MachineCount : null;
        this.AccountCount = 'AccountCount' in params ? params.AccountCount : null;
        this.PortCount = 'PortCount' in params ? params.PortCount : null;
        this.ProcessCount = 'ProcessCount' in params ? params.ProcessCount : null;
        this.SoftwareCount = 'SoftwareCount' in params ? params.SoftwareCount : null;
        this.DatabaseCount = 'DatabaseCount' in params ? params.DatabaseCount : null;
        this.WebAppCount = 'WebAppCount' in params ? params.WebAppCount : null;
        this.WebFrameCount = 'WebFrameCount' in params ? params.WebFrameCount : null;
        this.WebServiceCount = 'WebServiceCount' in params ? params.WebServiceCount : null;
        this.WebLocationCount = 'WebLocationCount' in params ? params.WebLocationCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 恶意文件风险提示列表信息
 * @class
 */
class MalwareRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 病毒名
         * @type {string || null}
         */
        this.VirusName = null;

        /**
         * 发现时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 唯一ID
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
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.VirusName = 'VirusName' in params ? params.VirusName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ExportProtectDirList返回参数结构体
 * @class
 */
class ExportProtectDirListResponse extends  AbstractModel {
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
 * 资源管理Web应用列表信息
 * @class
 */
class AssetWebFrameBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机内网IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机外网IP
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 操作系统信息
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 主机业务组ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MachineTag> || null}
         */
        this.Tag = null;

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 语言
         * @type {string || null}
         */
        this.Lang = null;

        /**
         * 服务类型
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 数据更新时间
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
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new MachineTag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ExportTasks请求参数结构体
 * @class
 */
class ExportTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
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
 * DescribeAssetWebLocationInfo返回参数结构体
 * @class
 */
class DescribeAssetWebLocationInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AssetWebLocationInfo || null}
         */
        this.WebLocation = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WebLocation) {
            let obj = new AssetWebLocationInfo();
            obj.deserialize(params.WebLocation)
            this.WebLocation = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBruteAttackRules请求参数结构体
 * @class
 */
class ModifyBruteAttackRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 暴力破解判断规则
         * @type {Array.<BruteAttackRule> || null}
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
                let obj = new BruteAttackRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * ExportVulList请求参数结构体
 * @class
 */
class ExportVulListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li>VulCategory - int - 是否必填：否 - 漏洞分类筛选1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞</li>
<li>IfEmergency - String - 是否必填：否 - 是否为应急漏洞，查询应急漏洞传:yes</li>
<li>Status - String - 是否必填：是 - 漏洞状态筛选，0: 待处理 1:忽略  3:已修复  5:检测中， 控制台仅处理0,1,3,5四种状态</li>
<li>Level - String - 是否必填：否 - 漏洞等级筛选 1:低 2:中 3:高 4:提示</li>
<li>VulName- String - 是否必填：否 - 漏洞名称搜索</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 是否导出详情,1是 0不是
         * @type {number || null}
         */
        this.IfDetail = null;

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
        this.IfDetail = 'IfDetail' in params ? params.IfDetail : null;

    }
}

/**
 * DescribeBaselineScanSchedule请求参数结构体
 * @class
 */
class DescribeBaselineScanScheduleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
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
 * DescribeEmergencyVulList返回参数结构体
 * @class
 */
class DescribeEmergencyVulListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EmergencyVul> || null}
         */
        this.List = null;

        /**
         * 漏洞总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 是否存在风险
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ExistsRisk = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new EmergencyVul();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ExistsRisk = 'ExistsRisk' in params ? params.ExistsRisk : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetUserList返回参数结构体
 * @class
 */
class DescribeAssetUserListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 账号列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetUserBaseInfo> || null}
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
                let obj = new AssetUserBaseInfo();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标准模式阻断配置
 * @class
 */
class StandardModeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 阻断时长，单位：秒
         * @type {number || null}
         */
        this.Ttl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ttl = 'Ttl' in params ? params.Ttl : null;

    }
}

/**
 * 高危命令数据
 * @class
 */
class BashEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 云镜ID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 主机ID
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机内网IP
         * @type {string || null}
         */
        this.Hostip = null;

        /**
         * 执行用户名
         * @type {string || null}
         */
        this.User = null;

        /**
         * 平台类型
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * 执行命令
         * @type {string || null}
         */
        this.BashCmd = null;

        /**
         * 规则ID
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则等级：1-高 2-中 3-低
         * @type {number || null}
         */
        this.RuleLevel = null;

        /**
         * 处理状态： 0 = 待处理 1= 已处理, 2 = 已加白， 3 = 已忽略
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 发生时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 主机名
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 0: bash日志 1: 实时监控(雷霆版)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DetectBy = null;

        /**
         * 进程id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Pid = null;

        /**
         * 进程名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Exe = null;

        /**
         * 处理时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 规则类别  0=系统规则，1=用户规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleCategory = null;

        /**
         * 自动生成的正则表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegexBashCmd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Hostip = 'Hostip' in params ? params.Hostip : null;
        this.User = 'User' in params ? params.User : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.BashCmd = 'BashCmd' in params ? params.BashCmd : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleLevel = 'RuleLevel' in params ? params.RuleLevel : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.DetectBy = 'DetectBy' in params ? params.DetectBy : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Exe = 'Exe' in params ? params.Exe : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.RuleCategory = 'RuleCategory' in params ? params.RuleCategory : null;
        this.RegexBashCmd = 'RegexBashCmd' in params ? params.RegexBashCmd : null;

    }
}

/**
 * DeleteMalwares请求参数结构体
 * @class
 */
class DeleteMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马记录ID数组 (最大100条)
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * RecoverMalwares返回参数结构体
 * @class
 */
class RecoverMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恢复成功id数组，若无则返回空数组
         * @type {Array.<number> || null}
         */
        this.SuccessIds = null;

        /**
         * 恢复失败id数组，若无则返回空数组
         * @type {Array.<number> || null}
         */
        this.FailedIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessIds = 'SuccessIds' in params ? params.SuccessIds : null;
        this.FailedIds = 'FailedIds' in params ? params.FailedIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 地域信息
 * @class
 */
class RegionSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 可用区信息
         * @type {Array.<ZoneInfo> || null}
         */
        this.ZoneSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }

    }
}

/**
 * DescribeReverseShellRules请求参数结构体
 * @class
 */
class DescribeReverseShellRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为10，最大值为100。
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
<li>Keywords - String - 是否必填：否 - 关键字(进程名称)</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeScanVulSetting返回参数结构体
 * @class
 */
class DescribeScanVulSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞类型：1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞
         * @type {string || null}
         */
        this.VulCategories = null;

        /**
         * 危害等级：1-低危；2-中危；3-高危；4-严重 (多选英文逗号分隔)
         * @type {string || null}
         */
        this.VulLevels = null;

        /**
         * 定期检测间隔时间（天）
         * @type {number || null}
         */
        this.TimerInterval = null;

        /**
         * 定期检测时间，如：00:00
         * @type {string || null}
         */
        this.TimerTime = null;

        /**
         * 是否紧急漏洞：0-否 1-是
         * @type {number || null}
         */
        this.VulEmergency = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 是否开启
         * @type {number || null}
         */
        this.EnableScan = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 一键扫描超时时长，如：1800秒（s）
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
        this.VulCategories = 'VulCategories' in params ? params.VulCategories : null;
        this.VulLevels = 'VulLevels' in params ? params.VulLevels : null;
        this.TimerInterval = 'TimerInterval' in params ? params.TimerInterval : null;
        this.TimerTime = 'TimerTime' in params ? params.TimerTime : null;
        this.VulEmergency = 'VulEmergency' in params ? params.VulEmergency : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EnableScan = 'EnableScan' in params ? params.EnableScan : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ClickTimeout = 'ClickTimeout' in params ? params.ClickTimeout : null;
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
class AssetFilters extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤键的名称。
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
 * DescribeAssetDatabaseInfo返回参数结构体
 * @class
 */
class DescribeAssetDatabaseInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库详情
         * @type {AssetDatabaseDetail || null}
         */
        this.Database = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Database) {
            let obj = new AssetDatabaseDetail();
            obj.deserialize(params.Database)
            this.Database = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetBashEventsStatus请求参数结构体
 * @class
 */
class SetBashEventsStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID数组，最大100条。
         * @type {Array.<number> || null}
         */
        this.Ids = null;

        /**
         * 新状态(0-待处理 1-高危 2-正常)
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
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 软件应用关联进程信息
 * @class
 */
class AssetAppProcessInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 进程状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 进程版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 用户
         * @type {string || null}
         */
        this.User = null;

        /**
         * 启动时间
         * @type {string || null}
         */
        this.StartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.User = 'User' in params ? params.User : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

    }
}

/**
 * DescribeBaselineStrategyList请求参数结构体
 * @class
 */
class DescribeBaselineStrategyListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页参数 最大100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 规则开关，1：打开 0：关闭  2:全部
         * @type {number || null}
         */
        this.Enabled = null;

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
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * 地域信息
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域标志，如 ap-guangzhou，ap-shanghai，ap-beijing
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域中文名，如华南地区（广州），华东地区（上海金融），华北地区（北京）
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地域ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地域代码，如 gz，sh，bj
         * @type {string || null}
         */
        this.RegionCode = null;

        /**
         * 地域英文名
         * @type {string || null}
         */
        this.RegionNameEn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionCode = 'RegionCode' in params ? params.RegionCode : null;
        this.RegionNameEn = 'RegionNameEn' in params ? params.RegionNameEn : null;

    }
}

/**
 * DescribeAttackLogs请求参数结构体
 * @class
 */
class DescribeAttackLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，最大值为100。
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
<li>HttpMethod - String - 是否必填：否 - 攻击方法(POST|GET)</li>
<li>DateRange - String - 是否必填：否 - 时间范围(存储最近3个月的数据)，如最近一个月["2019-11-17", "2019-12-17"]</li>
<li>VulType - String 威胁类型 - 是否必填: 否</li>
<li>SrcIp - String 攻击源IP - 是否必填: 否</li>
<li>DstIp - String 攻击目标IP - 是否必填: 否</li>
<li>SrcPort - String 攻击源端口 - 是否必填: 否</li>
<li>DstPort - String 攻击目标端口 - 是否必填: 否</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 主机安全客户端ID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 云主机机器ID
         * @type {string || null}
         */
        this.Quuid = null;

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
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * 组件统计数据。
 * @class
 */
class ComponentStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 主机数量。
         * @type {number || null}
         */
        this.MachineNum = null;

        /**
         * 组件名称。
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * 组件类型。
<li>WEB：Web组件</li>
<li>SYSTEM：系统组件</li>
         * @type {string || null}
         */
        this.ComponentType = null;

        /**
         * 组件描述。
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
        this.Id = 'Id' in params ? params.Id : null;
        this.MachineNum = 'MachineNum' in params ? params.MachineNum : null;
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.ComponentType = 'ComponentType' in params ? params.ComponentType : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ExportAssetWebServiceInfoList请求参数结构体
 * @class
 */
class ExportAssetWebServiceInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li>User- string - 是否必填：否 - 运行用户</li>
<li>Name- string - 是否必填：否 - Web服务名：
1:Tomcat
2:Apache
3:Nginx
4:WebLogic
5:Websphere
6:JBoss
7:WildFly
8:Jetty
9:IHS
10:Tengine</li>
<li>OsType- string - 是否必填：否 - Windows/linux</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序方式，asc升序 或 desc降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 可选排序：ProcessCount
         * @type {string || null}
         */
        this.By = null;

        /**
         * 查询指定Quuid主机的信息
         * @type {string || null}
         */
        this.Quuid = null;

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
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * SetBashEventsStatus返回参数结构体
 * @class
 */
class SetBashEventsStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 机器授权到期信息
 * @class
 */
class ProtectMachine extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 机器IP
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 防护目录数
         * @type {number || null}
         */
        this.SafeguardDirNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.SafeguardDirNum = 'SafeguardDirNum' in params ? params.SafeguardDirNum : null;

    }
}

/**
 * DescribeAssetUserInfo请求参数结构体
 * @class
 */
class DescribeAssetUserInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 服务器Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 账户名
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
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeProtectDirList请求参数结构体
 * @class
 */
class DescribeProtectDirListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页条数 最大100条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * DirName 网站名称
DirPath 网站防护目录地址
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * asc：升序/desc：降序
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
 * ExportPrivilegeEvents请求参数结构体
 * @class
 */
class ExportPrivilegeEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤参数
         * @type {Array.<Filters> || null}
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
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeMalwareFile返回参数结构体
 * @class
 */
class DescribeMalwareFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马文件下载地址
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务扫描状态列表
 * @class
 */
class TaskStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扫描中（包含初始化）
         * @type {string || null}
         */
        this.Scanning = null;

        /**
         * 扫描终止（包含终止中）
         * @type {string || null}
         */
        this.Ok = null;

        /**
         * 扫描失败
         * @type {string || null}
         */
        this.Fail = null;

        /**
         * 扫描失败（提示具体原因：扫描超时、客户端版本低、客户端离线）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Stop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scanning = 'Scanning' in params ? params.Scanning : null;
        this.Ok = 'Ok' in params ? params.Ok : null;
        this.Fail = 'Fail' in params ? params.Fail : null;
        this.Stop = 'Stop' in params ? params.Stop : null;

    }
}

/**
 * DescribeRiskDnsList返回参数结构体
 * @class
 */
class DescribeRiskDnsListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意请求列表数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RiskDnsList> || null}
         */
        this.RiskDnsList = null;

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

        if (params.RiskDnsList) {
            this.RiskDnsList = new Array();
            for (let z in params.RiskDnsList) {
                let obj = new RiskDnsList();
                obj.deserialize(params.RiskDnsList[z]);
                this.RiskDnsList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetWebAppList返回参数结构体
 * @class
 */
class DescribeAssetWebAppListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetWebAppBaseInfo> || null}
         */
        this.WebApps = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.WebApps) {
            this.WebApps = new Array();
            for (let z in params.WebApps) {
                let obj = new AssetWebAppBaseInfo();
                obj.deserialize(params.WebApps[z]);
                this.WebApps.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 扫描任务详情列表信息
 * @class
 */
class ScanTaskDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器IP
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 服务器名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 风险数量
         * @type {number || null}
         */
        this.RiskNum = null;

        /**
         * 扫描开始时间
         * @type {string || null}
         */
        this.ScanBeginTime = null;

        /**
         * 扫描结束时间
         * @type {string || null}
         */
        this.ScanEndTime = null;

        /**
         * 唯一Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 唯一Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 状态码
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * id唯一
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 失败详情
         * @type {number || null}
         */
        this.FailType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.RiskNum = 'RiskNum' in params ? params.RiskNum : null;
        this.ScanBeginTime = 'ScanBeginTime' in params ? params.ScanBeginTime : null;
        this.ScanEndTime = 'ScanEndTime' in params ? params.ScanEndTime : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.FailType = 'FailType' in params ? params.FailType : null;

    }
}

/**
 * 资源管理数据库列表信息
 * @class
 */
class AssetDatabaseDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机内网IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机外网IP
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 操作系统信息
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 监听端口
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 协议
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 运行用户
         * @type {string || null}
         */
        this.User = null;

        /**
         * 绑定IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 配置文件路径
         * @type {string || null}
         */
        this.ConfigPath = null;

        /**
         * 日志文件路径
         * @type {string || null}
         */
        this.LogPath = null;

        /**
         * 数据路径
         * @type {string || null}
         */
        this.DataPath = null;

        /**
         * 运行权限
         * @type {string || null}
         */
        this.Permission = null;

        /**
         * 错误日志路径
         * @type {string || null}
         */
        this.ErrorLogPath = null;

        /**
         * 插件路径
         * @type {string || null}
         */
        this.PlugInPath = null;

        /**
         * 二进制路径
         * @type {string || null}
         */
        this.BinPath = null;

        /**
         * 启动参数
         * @type {string || null}
         */
        this.Param = null;

        /**
         * 数据更新时间
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
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.User = 'User' in params ? params.User : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.ConfigPath = 'ConfigPath' in params ? params.ConfigPath : null;
        this.LogPath = 'LogPath' in params ? params.LogPath : null;
        this.DataPath = 'DataPath' in params ? params.DataPath : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.ErrorLogPath = 'ErrorLogPath' in params ? params.ErrorLogPath : null;
        this.PlugInPath = 'PlugInPath' in params ? params.PlugInPath : null;
        this.BinPath = 'BinPath' in params ? params.BinPath : null;
        this.Param = 'Param' in params ? params.Param : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeScanTaskStatus请求参数结构体
 * @class
 */
class DescribeScanTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块类型 当前提供 Malware 木马 , Vul 漏洞 , Baseline 基线
         * @type {string || null}
         */
        this.ModuleType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleType = 'ModuleType' in params ? params.ModuleType : null;

    }
}

/**
 * ExportIgnoreBaselineRule请求参数结构体
 * @class
 */
class ExportIgnoreBaselineRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测项名称
         * @type {string || null}
         */
        this.RuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * DeleteMachineTag请求参数结构体
 * @class
 */
class DeleteMachineTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关联的标签ID
         * @type {number || null}
         */
        this.Rid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Rid = 'Rid' in params ? params.Rid : null;

    }
}

/**
 * DescribeBaselineDetail请求参数结构体
 * @class
 */
class DescribeBaselineDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基线id
         * @type {number || null}
         */
        this.BaselineId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BaselineId = 'BaselineId' in params ? params.BaselineId : null;

    }
}

/**
 * 可用区信息
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区名称
         * @type {string || null}
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * 基线检测信息
 * @class
 */
class BaselineRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测项名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 检测项描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 修复建议
         * @type {string || null}
         */
        this.FixMessage = null;

        /**
         * 危害等级
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 检测项id
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 最后检测时间
         * @type {string || null}
         */
        this.LastScanAt = null;

        /**
         * 具体原因说明
         * @type {string || null}
         */
        this.RuleRemark = null;

        /**
         * 唯一Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 唯一事件ID
         * @type {number || null}
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
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.FixMessage = 'FixMessage' in params ? params.FixMessage : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.LastScanAt = 'LastScanAt' in params ? params.LastScanAt : null;
        this.RuleRemark = 'RuleRemark' in params ? params.RuleRemark : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * DescribeExportMachines返回参数结构体
 * @class
 */
class DescribeExportMachinesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
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
 * DescribeScanTaskStatus返回参数结构体
 * @class
 */
class DescribeScanTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务扫描状态列表
         * @type {TaskStatus || null}
         */
        this.State = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.State) {
            let obj = new TaskStatus();
            obj.deserialize(params.State)
            this.State = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProtectNetList请求参数结构体
 * @class
 */
class DescribeProtectNetListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li>Keyword- String - 是否必填：否 - 关键词过滤，</li>
<li>Uuids - String - 是否必填：否 - 主机id过滤</li>
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 需要返回的数量，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序步长
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序方法
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段 StartTime，EndTime
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
                let obj = new Filters();
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
 * DescribeWebPageEventList返回参数结构体
 * @class
 */
class DescribeWebPageEventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防护事件列表信息
         * @type {Array.<ProtectEventLists> || null}
         */
        this.List = null;

        /**
         * 总数
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
                let obj = new ProtectEventLists();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteProtectDir返回参数结构体
 * @class
 */
class DeleteProtectDirResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBanStatus请求参数结构体
 * @class
 */
class ModifyBanStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 阻断状态 0:关闭 1:开启
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
 * DescribeWebPageServiceInfo请求参数结构体
 * @class
 */
class DescribeWebPageServiceInfoRequest extends  AbstractModel {
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
 * DescribeLogStorageStatistic返回参数结构体
 * @class
 */
class DescribeLogStorageStatisticResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总容量（单位：GB）
         * @type {number || null}
         */
        this.TotalSize = null;

        /**
         * 已使用容量（单位：GB）
         * @type {number || null}
         */
        this.UsedSize = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.UsedSize = 'UsedSize' in params ? params.UsedSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEmergencyResponseList请求参数结构体
 * @class
 */
class DescribeEmergencyResponseListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li>Keyword- String - 是否必填：否 - 关键词过滤，</li>
<li>Uuids - String - 是否必填：否 - 主机id过滤</li>
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 需要返回的数量，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序步长
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序方法
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段 StartTime，EndTime
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
                let obj = new Filters();
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
 * DescribeScanState返回参数结构体
 * @class
 */
class DescribeScanStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0 从未扫描过、 1 扫描中、 2扫描完成、 3停止中、 4停止完成
         * @type {number || null}
         */
        this.ScanState = null;

        /**
         * 扫描进度
         * @type {number || null}
         */
        this.Schedule = null;

        /**
         * 任务Id
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 任务扫描的漏洞id
         * @type {Array.<number> || null}
         */
        this.VulId = null;

        /**
         * 0一键检测 1定时检测
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 开始扫描时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanBeginTime = null;

        /**
         * 扫描漏洞数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskEventCount = null;

        /**
         * 扫描结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanEndTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScanState = 'ScanState' in params ? params.ScanState : null;
        this.Schedule = 'Schedule' in params ? params.Schedule : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.VulId = 'VulId' in params ? params.VulId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ScanBeginTime = 'ScanBeginTime' in params ? params.ScanBeginTime : null;
        this.RiskEventCount = 'RiskEventCount' in params ? params.RiskEventCount : null;
        this.ScanEndTime = 'ScanEndTime' in params ? params.ScanEndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EditTags请求参数结构体
 * @class
 */
class EditTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 标签ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Quuid
         * @type {Array.<string> || null}
         */
        this.Quuids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Quuids = 'Quuids' in params ? params.Quuids : null;

    }
}

/**
 * DeleteReverseShellRules请求参数结构体
 * @class
 */
class DeleteReverseShellRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID数组. (最大100条)
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeBaselineEffectHostList请求参数结构体
 * @class
 */
class DescribeBaselineEffectHostListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页参数 最大100条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 基线id
         * @type {number || null}
         */
        this.BaselineId = null;

        /**
         * 过滤条件。
<li>AliasName- String- 主机别名</li>
<li>Status- Uint- 1已通过  0未通过 5检测中</li>
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 策略id
         * @type {number || null}
         */
        this.StrategyId = null;

        /**
         * 主机uuid数组
         * @type {Array.<string> || null}
         */
        this.UuidList = null;

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
        this.BaselineId = 'BaselineId' in params ? params.BaselineId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.UuidList = 'UuidList' in params ? params.UuidList : null;

    }
}

/**
 * ExportSecurityTrends请求参数结构体
 * @class
 */
class ExportSecurityTrendsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

    }
}

/**
 * DescribeAssetDatabaseInfo请求参数结构体
 * @class
 */
class DescribeAssetDatabaseInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 服务器Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 数据库ID
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
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeOpenPortStatistics请求参数结构体
 * @class
 */
class DescribeOpenPortStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为10，最大值为100。
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
<li>Port - Uint64 - 是否必填：否 - 端口号</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * ExportAssetWebServiceInfoList返回参数结构体
 * @class
 */
class ExportAssetWebServiceInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步下载任务ID，需要配合ExportTasks接口使用
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
 * ExportSecurityTrends返回参数结构体
 * @class
 */
class ExportSecurityTrendsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出文件下载链接地址。
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
 * ModifyMalwareTimingScanSettings返回参数结构体
 * @class
 */
class ModifyMalwareTimingScanSettingsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteNonlocalLoginPlaces返回参数结构体
 * @class
 */
class DeleteNonlocalLoginPlacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyWebPageProtectSetting请求参数结构体
 * @class
 */
class ModifyWebPageProtectSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要操作的类型1 目录名称 2 防护文件类型
         * @type {number || null}
         */
        this.ModifyType = null;

        /**
         * 提交值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 配置对应的protect_path
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
        this.ModifyType = 'ModifyType' in params ? params.ModifyType : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteMalwareScanTask返回参数结构体
 * @class
 */
class DeleteMalwareScanTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaselineDetail返回参数结构体
 * @class
 */
class DescribeBaselineDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基线详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaselineDetail || null}
         */
        this.BaselineDetail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BaselineDetail) {
            let obj = new BaselineDetail();
            obj.deserialize(params.BaselineDetail)
            this.BaselineDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportIgnoreRuleEffectHostList返回参数结构体
 * @class
 */
class ExportIgnoreRuleEffectHostListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出文件下载地址
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 导出任务Id , 可通过ExportTasks 接口下载
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetWebAppPluginList请求参数结构体
 * @class
 */
class DescribeAssetWebAppPluginListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Web应用ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
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
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeletePrivilegeEvents返回参数结构体
 * @class
 */
class DeletePrivilegeEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMachineInfo返回参数结构体
 * @class
 */
class DescribeMachineInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器ip。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 受云镜保护天数。
         * @type {number || null}
         */
        this.ProtectDays = null;

        /**
         * 操作系统。
         * @type {string || null}
         */
        this.MachineOs = null;

        /**
         * 主机名称。
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 在线状态。
<li>ONLINE： 在线</li>
<li>OFFLINE：离线</li>
         * @type {string || null}
         */
        this.MachineStatus = null;

        /**
         * CVM或BM主机唯一标识。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主机外网IP。
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * CVM或BM主机唯一Uuid。
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 云镜客户端唯一Uuid。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 是否开通专业版。
<li>true：是</li>
<li>false：否</li>
         * @type {boolean || null}
         */
        this.IsProVersion = null;

        /**
         * 专业版开通时间。
         * @type {string || null}
         */
        this.ProVersionOpenDate = null;

        /**
         * 云服务器类型。
<li>CVM: 腾讯云服务器</li>
<li>BM: 黑石物理机</li>
<li>ECM: 边缘计算服务器</li>
<li>LH: 轻量应用服务器</li>
<li>Other: 混合云机器</li>
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 机器所属地域。如：ap-guangzhou，ap-shanghai
         * @type {string || null}
         */
        this.MachineRegion = null;

        /**
         * 主机状态。
<li>POSTPAY: 表示后付费，即按量计费  </li>
<li>PREPAY: 表示预付费，即包年包月</li>
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 免费木马剩余检测数量。
         * @type {number || null}
         */
        this.FreeMalwaresLeft = null;

        /**
         * 免费漏洞剩余检测数量。
         * @type {number || null}
         */
        this.FreeVulsLeft = null;

        /**
         * agent版本号
         * @type {string || null}
         */
        this.AgentVersion = null;

        /**
         * 专业版到期时间(仅预付费)
         * @type {string || null}
         */
        this.ProVersionDeadline = null;

        /**
         * 是否有资产扫描记录，0无，1有
         * @type {number || null}
         */
        this.HasAssetScan = null;

        /**
         * 防护版本 BASIC_VERSION 基础版, PRO_VERSION 专业版 Flagship 旗舰版.
         * @type {string || null}
         */
        this.ProtectType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.ProtectDays = 'ProtectDays' in params ? params.ProtectDays : null;
        this.MachineOs = 'MachineOs' in params ? params.MachineOs : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.MachineStatus = 'MachineStatus' in params ? params.MachineStatus : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.IsProVersion = 'IsProVersion' in params ? params.IsProVersion : null;
        this.ProVersionOpenDate = 'ProVersionOpenDate' in params ? params.ProVersionOpenDate : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineRegion = 'MachineRegion' in params ? params.MachineRegion : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.FreeMalwaresLeft = 'FreeMalwaresLeft' in params ? params.FreeMalwaresLeft : null;
        this.FreeVulsLeft = 'FreeVulsLeft' in params ? params.FreeVulsLeft : null;
        this.AgentVersion = 'AgentVersion' in params ? params.AgentVersion : null;
        this.ProVersionDeadline = 'ProVersionDeadline' in params ? params.ProVersionDeadline : null;
        this.HasAssetScan = 'HasAssetScan' in params ? params.HasAssetScan : null;
        this.ProtectType = 'ProtectType' in params ? params.ProtectType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 服务器风险top5实体
 * @class
 */
class VulHostTopInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 漏洞等级与数量统计列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VulLevelCountInfo> || null}
         */
        this.VulLevelList = null;

        /**
         * 主机Quuid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * top评分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostName = 'HostName' in params ? params.HostName : null;

        if (params.VulLevelList) {
            this.VulLevelList = new Array();
            for (let z in params.VulLevelList) {
                let obj = new VulLevelCountInfo();
                obj.deserialize(params.VulLevelList[z]);
                this.VulLevelList.push(obj);
            }
        }
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * DescribeImportMachineInfo请求参数结构体
 * @class
 */
class DescribeImportMachineInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器内网IP（默认）/ 服务器名称 / 服务器ID 数组 (最大 1000条)
         * @type {Array.<string> || null}
         */
        this.MachineList = null;

        /**
         * 批量导入的数据类型：Ip、Name、Id 三选一
         * @type {string || null}
         */
        this.ImportType = null;

        /**
         * 该参数已作废.
         * @type {boolean || null}
         */
        this.IsQueryProMachine = null;

        /**
         * 过滤条件。
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版 | Flagship : 旗舰版 | ProtectedMachines: 专业版+旗舰版）</li>
         * @type {Array.<Filters> || null}
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
        this.MachineList = 'MachineList' in params ? params.MachineList : null;
        this.ImportType = 'ImportType' in params ? params.ImportType : null;
        this.IsQueryProMachine = 'IsQueryProMachine' in params ? params.IsQueryProMachine : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 漏洞数量按等级分布统计结果实体
 * @class
 */
class VulLevelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * // 危害等级：1-低危；2-中危；3-高危；4-严重
         * @type {number || null}
         */
        this.VulLevel = null;

        /**
         * 数量
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulLevel = 'VulLevel' in params ? params.VulLevel : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * 防护信息统计
 * @class
 */
class ProtectStat extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数量
         * @type {number || null}
         */
        this.Num = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Num = 'Num' in params ? params.Num : null;

    }
}

/**
 * DescribeVulEffectHostList返回参数结构体
 * @class
 */
class DescribeVulEffectHostListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 影响主机列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VulEffectHostList> || null}
         */
        this.VulEffectHostList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.VulEffectHostList) {
            this.VulEffectHostList = new Array();
            for (let z in params.VulEffectHostList) {
                let obj = new VulEffectHostList();
                obj.deserialize(params.VulEffectHostList[z]);
                this.VulEffectHostList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SwitchBashRules返回参数结构体
 * @class
 */
class SwitchBashRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSearchLogs请求参数结构体
 * @class
 */
class DescribeSearchLogsRequest extends  AbstractModel {
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
 * DescribeAttackLogInfo请求参数结构体
 * @class
 */
class DescribeAttackLogInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志ID
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ScanVulSetting返回参数结构体
 * @class
 */
class ScanVulSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetJarInfo返回参数结构体
 * @class
 */
class DescribeAssetJarInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Jar包详情
         * @type {AssetJarDetail || null}
         */
        this.Jar = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Jar) {
            let obj = new AssetJarDetail();
            obj.deserialize(params.Jar)
            this.Jar = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVulInfoCvss请求参数结构体
 * @class
 */
class DescribeVulInfoCvssRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞id
         * @type {number || null}
         */
        this.VulId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulId = 'VulId' in params ? params.VulId : null;

    }
}

/**
 * DescribeComponentStatistics请求参数结构体
 * @class
 */
class DescribeComponentStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为10，最大值为100。
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
ComponentName - String - 是否必填：否 - 组件名称
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeMaliciousRequestWhiteList请求参数结构体
 * @class
 */
class DescribeMaliciousRequestWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为10，最大值为100。
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

<li>Domain  - String - 基线名称</li>
         * @type {Array.<Filters> || null}
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
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * ModifyBanStatus返回参数结构体
 * @class
 */
class ModifyBanStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLoginWhiteList返回参数结构体
 * @class
 */
class DescribeLoginWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 异地登录白名单数组
         * @type {Array.<LoginWhiteLists> || null}
         */
        this.LoginWhiteLists = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.LoginWhiteLists) {
            this.LoginWhiteLists = new Array();
            for (let z in params.LoginWhiteLists) {
                let obj = new LoginWhiteLists();
                obj.deserialize(params.LoginWhiteLists[z]);
                this.LoginWhiteLists.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopNoticeBanTips返回参数结构体
 * @class
 */
class StopNoticeBanTipsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScanMalwareSchedule返回参数结构体
 * @class
 */
class DescribeScanMalwareScheduleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扫描进度（单位：%）
         * @type {number || null}
         */
        this.Schedule = null;

        /**
         * 风险文件数,当进度满了以后才有该值
         * @type {number || null}
         */
        this.RiskFileNumber = null;

        /**
         * 是否正在扫描中
         * @type {boolean || null}
         */
        this.IsSchedule = null;

        /**
         * 0 从未扫描过、 1 扫描中、 2扫描完成、 3停止中、 4停止完成
         * @type {number || null}
         */
        this.ScanStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Schedule = 'Schedule' in params ? params.Schedule : null;
        this.RiskFileNumber = 'RiskFileNumber' in params ? params.RiskFileNumber : null;
        this.IsSchedule = 'IsSchedule' in params ? params.IsSchedule : null;
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资产管理Web站点列表信息
 * @class
 */
class AssetWebLocationBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 内网IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 外网IP
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 站点端口
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 站点协议
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 服务类型
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 站点路经数
         * @type {number || null}
         */
        this.PathCount = null;

        /**
         * 运行用户
         * @type {string || null}
         */
        this.User = null;

        /**
         * 主目录
         * @type {string || null}
         */
        this.MainPath = null;

        /**
         * 主目录所有者
         * @type {string || null}
         */
        this.MainPathOwner = null;

        /**
         * 拥有者权限
         * @type {string || null}
         */
        this.Permission = null;

        /**
         * 主机业务组ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 主机标签
         * @type {Array.<MachineTag> || null}
         */
        this.Tag = null;

        /**
         * Web站点Id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 数据更新时间
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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.PathCount = 'PathCount' in params ? params.PathCount : null;
        this.User = 'User' in params ? params.User : null;
        this.MainPath = 'MainPath' in params ? params.MainPath : null;
        this.MainPathOwner = 'MainPathOwner' in params ? params.MainPathOwner : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new MachineTag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeMalwareTimingScanSetting请求参数结构体
 * @class
 */
class DescribeMalwareTimingScanSettingRequest extends  AbstractModel {
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
 * 高危命令规则
 * @class
 */
class BashRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 客户端ID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 危险等级(0 ：无 1: 高危 2:中危 3: 低危)
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 正则表达式
         * @type {string || null}
         */
        this.Rule = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.Decription = null;

        /**
         * 操作人
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 是否全局规则
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * 状态 (0: 有效 1: 无效)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 主机IP
         * @type {string || null}
         */
        this.Hostip = null;

        /**
         * 生效服务器的uuid数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Uuids = null;

        /**
         * 0=黑名单 1=白名单
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.White = null;

        /**
         * 是否处理之前的事件 0: 不处理 1:处理
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DealOldEvents = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Rule = 'Rule' in params ? params.Rule : null;
        this.Decription = 'Decription' in params ? params.Decription : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Hostip = 'Hostip' in params ? params.Hostip : null;
        this.Uuids = 'Uuids' in params ? params.Uuids : null;
        this.White = 'White' in params ? params.White : null;
        this.DealOldEvents = 'DealOldEvents' in params ? params.DealOldEvents : null;

    }
}

/**
 * CreateSearchLog返回参数结构体
 * @class
 */
class CreateSearchLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：成功，非0：失败
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
 * DescribeSecurityTrends返回参数结构体
 * @class
 */
class DescribeSecurityTrendsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马事件统计数据数组。
         * @type {Array.<SecurityTrend> || null}
         */
        this.Malwares = null;

        /**
         * 异地登录事件统计数据数组。
         * @type {Array.<SecurityTrend> || null}
         */
        this.NonLocalLoginPlaces = null;

        /**
         * 密码破解事件统计数据数组。
         * @type {Array.<SecurityTrend> || null}
         */
        this.BruteAttacks = null;

        /**
         * 漏洞统计数据数组。
         * @type {Array.<SecurityTrend> || null}
         */
        this.Vuls = null;

        /**
         * 基线统计数据数组。
         * @type {Array.<SecurityTrend> || null}
         */
        this.BaseLines = null;

        /**
         * 恶意请求统计数据数组。
         * @type {Array.<SecurityTrend> || null}
         */
        this.MaliciousRequests = null;

        /**
         * 高危命令统计数据数组。
         * @type {Array.<SecurityTrend> || null}
         */
        this.HighRiskBashs = null;

        /**
         * 反弹shell统计数据数组。
         * @type {Array.<SecurityTrend> || null}
         */
        this.ReverseShells = null;

        /**
         * 本地提权统计数据数组。
         * @type {Array.<SecurityTrend> || null}
         */
        this.PrivilegeEscalations = null;

        /**
         * 网络攻击统计数据数组。
         * @type {Array.<SecurityTrend> || null}
         */
        this.CyberAttacks = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Malwares) {
            this.Malwares = new Array();
            for (let z in params.Malwares) {
                let obj = new SecurityTrend();
                obj.deserialize(params.Malwares[z]);
                this.Malwares.push(obj);
            }
        }

        if (params.NonLocalLoginPlaces) {
            this.NonLocalLoginPlaces = new Array();
            for (let z in params.NonLocalLoginPlaces) {
                let obj = new SecurityTrend();
                obj.deserialize(params.NonLocalLoginPlaces[z]);
                this.NonLocalLoginPlaces.push(obj);
            }
        }

        if (params.BruteAttacks) {
            this.BruteAttacks = new Array();
            for (let z in params.BruteAttacks) {
                let obj = new SecurityTrend();
                obj.deserialize(params.BruteAttacks[z]);
                this.BruteAttacks.push(obj);
            }
        }

        if (params.Vuls) {
            this.Vuls = new Array();
            for (let z in params.Vuls) {
                let obj = new SecurityTrend();
                obj.deserialize(params.Vuls[z]);
                this.Vuls.push(obj);
            }
        }

        if (params.BaseLines) {
            this.BaseLines = new Array();
            for (let z in params.BaseLines) {
                let obj = new SecurityTrend();
                obj.deserialize(params.BaseLines[z]);
                this.BaseLines.push(obj);
            }
        }

        if (params.MaliciousRequests) {
            this.MaliciousRequests = new Array();
            for (let z in params.MaliciousRequests) {
                let obj = new SecurityTrend();
                obj.deserialize(params.MaliciousRequests[z]);
                this.MaliciousRequests.push(obj);
            }
        }

        if (params.HighRiskBashs) {
            this.HighRiskBashs = new Array();
            for (let z in params.HighRiskBashs) {
                let obj = new SecurityTrend();
                obj.deserialize(params.HighRiskBashs[z]);
                this.HighRiskBashs.push(obj);
            }
        }

        if (params.ReverseShells) {
            this.ReverseShells = new Array();
            for (let z in params.ReverseShells) {
                let obj = new SecurityTrend();
                obj.deserialize(params.ReverseShells[z]);
                this.ReverseShells.push(obj);
            }
        }

        if (params.PrivilegeEscalations) {
            this.PrivilegeEscalations = new Array();
            for (let z in params.PrivilegeEscalations) {
                let obj = new SecurityTrend();
                obj.deserialize(params.PrivilegeEscalations[z]);
                this.PrivilegeEscalations.push(obj);
            }
        }

        if (params.CyberAttacks) {
            this.CyberAttacks = new Array();
            for (let z in params.CyberAttacks) {
                let obj = new SecurityTrend();
                obj.deserialize(params.CyberAttacks[z]);
                this.CyberAttacks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源管理系统安装包列表信息
 * @class
 */
class AssetSystemPackageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 安装时间
         * @type {string || null}
         */
        this.InstallTime = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 主机IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 数据更新时间
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.InstallTime = 'InstallTime' in params ? params.InstallTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeEmergencyVulList请求参数结构体
 * @class
 */
class DescribeEmergencyVulListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，最大值为100。
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
<li>Status - String - 是否必填：是 - 漏洞状态筛选，0//未检测 1有风险 ，2无风险 ，3 检查中展示progress</li>
<li>Level - String - 是否必填：否 - 漏洞等级筛选 1:低 2:中 3:高 4:提示</li>
<li>VulName- String - 是否必填：否 - 漏洞名称搜索</li>
<li>Uuids- String - 是否必填：否 - 主机uuid</li>
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 排序方式 desc , asc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段 PublishDate
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
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeSecurityDynamics返回参数结构体
 * @class
 */
class DescribeSecurityDynamicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全事件消息数组。
         * @type {Array.<SecurityDynamic> || null}
         */
        this.SecurityDynamics = null;

        /**
         * 记录总数。
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

        if (params.SecurityDynamics) {
            this.SecurityDynamics = new Array();
            for (let z in params.SecurityDynamics) {
                let obj = new SecurityDynamic();
                obj.deserialize(params.SecurityDynamics[z]);
                this.SecurityDynamics.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteReverseShellEvents返回参数结构体
 * @class
 */
class DeleteReverseShellEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源管理Web服务列表信息
 * @class
 */
class AssetWebServiceBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机内网IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机外网IP
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 操作系统信息
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 主机业务组ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MachineTag> || null}
         */
        this.Tag = null;

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 二进制路径
         * @type {string || null}
         */
        this.BinPath = null;

        /**
         * 启动用户
         * @type {string || null}
         */
        this.User = null;

        /**
         * 安装路径
         * @type {string || null}
         */
        this.InstallPath = null;

        /**
         * 配置路径
         * @type {string || null}
         */
        this.ConfigPath = null;

        /**
         * 关联进程数
         * @type {number || null}
         */
        this.ProcessCount = null;

        /**
         * Web服务ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 数据更新时间
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
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new MachineTag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.BinPath = 'BinPath' in params ? params.BinPath : null;
        this.User = 'User' in params ? params.User : null;
        this.InstallPath = 'InstallPath' in params ? params.InstallPath : null;
        this.ConfigPath = 'ConfigPath' in params ? params.ConfigPath : null;
        this.ProcessCount = 'ProcessCount' in params ? params.ProcessCount : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeProVersionStatus返回参数结构体
 * @class
 */
class DescribeProVersionStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScanTaskDetails返回参数结构体
 * @class
 */
class DescribeScanTaskDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扫描任务信息列表
         * @type {Array.<ScanTaskDetails> || null}
         */
        this.ScanTaskDetailList = null;

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 扫描机器总数
         * @type {number || null}
         */
        this.ScanMachineCount = null;

        /**
         * 发现风险机器数
         * @type {number || null}
         */
        this.RiskMachineCount = null;

        /**
         * 扫描开始时间
         * @type {string || null}
         */
        this.ScanBeginTime = null;

        /**
         * 扫描结束时间
         * @type {string || null}
         */
        this.ScanEndTime = null;

        /**
         * 检测时间
         * @type {number || null}
         */
        this.ScanTime = null;

        /**
         * 扫描进度
         * @type {number || null}
         */
        this.ScanProgress = null;

        /**
         * 扫描剩余时间
         * @type {number || null}
         */
        this.ScanLeftTime = null;

        /**
         * 扫描内容
         * @type {Array.<string> || null}
         */
        this.ScanContent = null;

        /**
         * 漏洞信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VulDetailInfo> || null}
         */
        this.VulInfo = null;

        /**
         * 风险事件个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskEventCount = null;

        /**
         * 0一键检测 1定时检测
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 任务是否全部正在被停止 ture是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.StoppingAll = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ScanTaskDetailList) {
            this.ScanTaskDetailList = new Array();
            for (let z in params.ScanTaskDetailList) {
                let obj = new ScanTaskDetails();
                obj.deserialize(params.ScanTaskDetailList[z]);
                this.ScanTaskDetailList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ScanMachineCount = 'ScanMachineCount' in params ? params.ScanMachineCount : null;
        this.RiskMachineCount = 'RiskMachineCount' in params ? params.RiskMachineCount : null;
        this.ScanBeginTime = 'ScanBeginTime' in params ? params.ScanBeginTime : null;
        this.ScanEndTime = 'ScanEndTime' in params ? params.ScanEndTime : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;
        this.ScanProgress = 'ScanProgress' in params ? params.ScanProgress : null;
        this.ScanLeftTime = 'ScanLeftTime' in params ? params.ScanLeftTime : null;
        this.ScanContent = 'ScanContent' in params ? params.ScanContent : null;

        if (params.VulInfo) {
            this.VulInfo = new Array();
            for (let z in params.VulInfo) {
                let obj = new VulDetailInfo();
                obj.deserialize(params.VulInfo[z]);
                this.VulInfo.push(obj);
            }
        }
        this.RiskEventCount = 'RiskEventCount' in params ? params.RiskEventCount : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StoppingAll = 'StoppingAll' in params ? params.StoppingAll : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGeneralStat请求参数结构体
 * @class
 */
class DescribeGeneralStatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云主机类型。
<li>CVM：表示腾讯云服务器</li>
<li>BM:  表示黑石物理机</li>
<li>ECM:  表示边缘计算服务器</li>
<li>LH:  表示轻量应用服务器</li>
<li>Other:  表示混合云机器</li>
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 机器所属地域。如：ap-guangzhou，ap-shanghai
         * @type {string || null}
         */
        this.MachineRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineRegion = 'MachineRegion' in params ? params.MachineRegion : null;

    }
}

/**
 * UpdateBaselineStrategy返回参数结构体
 * @class
 */
class UpdateBaselineStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资产管理启动服务列表
 * @class
 */
class AssetInitServiceBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 类型：
1:编码器
2:IE插件
3:网络提供者
4:镜像劫持
5:LSA提供者
6:KnownDLLs
7:启动执行
8:WMI
9:计划任务
10:Winsock提供者
11:打印监控器
12:资源管理器
13:驱动服务
14:登录
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 默认启用状态：0未启用，1启用
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 启动用户
         * @type {string || null}
         */
        this.User = null;

        /**
         * 路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 服务器IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 服务器名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 数据更新时间
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.User = 'User' in params ? params.User : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeVulHostTop请求参数结构体
 * @class
 */
class DescribeVulHostTopRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取top值，1-100
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 1:web-cms 漏洞，2.应用漏洞 3:安全基线 4: Linux软件漏洞 5: windows系统漏洞 6:应急漏洞
         * @type {number || null}
         */
        this.VulCategory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Top = 'Top' in params ? params.Top : null;
        this.VulCategory = 'VulCategory' in params ? params.VulCategory : null;

    }
}

/**
 * DescribeIgnoreRuleEffectHostList请求参数结构体
 * @class
 */
class DescribeIgnoreRuleEffectHostListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页参数 最大100条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 检测项id
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 过滤条件。
<li>AliasName- String- 主机别名</li>
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 主机标签名
         * @type {Array.<string> || null}
         */
        this.TagNames = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.TagNames = 'TagNames' in params ? params.TagNames : null;

    }
}

/**
 * ModifyWarningSetting返回参数结构体
 * @class
 */
class ModifyWarningSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 异地登录合并后白名单
 * @class
 */
class LoginWhiteCombinedInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Place> || null}
         */
        this.Places = null;

        /**
         * 白名单用户（多个用户逗号隔开）
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 白名单IP（多个IP逗号隔开）
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * 地域字符串
         * @type {string || null}
         */
        this.Locale = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

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
         * 是否对全局生效, 1：全局有效 0: 对指定主机列表生效'
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * 白名单名字：IsLocal=1时固定为：全部服务器；单台机器时为机器内网IP，多台服务器时为服务器数量，如：11台
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 仅在单台服务器时，返回服务器名称
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 白名单ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最近修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 服务器Uuid
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Places) {
            this.Places = new Array();
            for (let z in params.Places) {
                let obj = new Place();
                obj.deserialize(params.Places[z]);
                this.Places.push(obj);
            }
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.Locale = 'Locale' in params ? params.Locale : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * DescribeMalwareInfo返回参数结构体
 * @class
 */
class DescribeMalwareInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意文件详情信息
         * @type {MalwareInfo || null}
         */
        this.MalwareInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MalwareInfo) {
            let obj = new MalwareInfo();
            obj.deserialize(params.MalwareInfo)
            this.MalwareInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetJarInfo请求参数结构体
 * @class
 */
class DescribeAssetJarInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 服务器Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Jar包ID
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
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribePrivilegeEvents请求参数结构体
 * @class
 */
class DescribePrivilegeEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，最大值为100。
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
<li>Keywords - String - 是否必填：否 - 关键词(主机IP)</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * 基线信息
 * @class
 */
class BaselineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基线名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 危害等级：1-低危；2-中危；3-高危；4-严重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 检测项数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleCount = null;

        /**
         * 影响服务器数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HostCount = null;

        /**
         * 通过状态:0:未通过,1:已通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 基线id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CategoryId = null;

        /**
         * 最后检测时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * 检测中状态: 5
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxStatus = null;

        /**
         * 基线风险项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BaselineFailCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.RuleCount = 'RuleCount' in params ? params.RuleCount : null;
        this.HostCount = 'HostCount' in params ? params.HostCount : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.MaxStatus = 'MaxStatus' in params ? params.MaxStatus : null;
        this.BaselineFailCount = 'BaselineFailCount' in params ? params.BaselineFailCount : null;

    }
}

/**
 * DescribeVulHostCountScanTime请求参数结构体
 * @class
 */
class DescribeVulHostCountScanTimeRequest extends  AbstractModel {
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
 * ExportScanTaskDetails返回参数结构体
 * @class
 */
class ExportScanTaskDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出本次检测Excel的任务Id（不同于入参的本次检测任务id）
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
 * ExportBashEvents返回参数结构体
 * @class
 */
class ExportBashEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出文件下载链接地址。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 导出任务ID
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 未处理的安全事件统计信息
 * @class
 */
class EventStat extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件数
         * @type {number || null}
         */
        this.EventsNum = null;

        /**
         * 受影响的主机数
         * @type {number || null}
         */
        this.MachineAffectNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventsNum = 'EventsNum' in params ? params.EventsNum : null;
        this.MachineAffectNum = 'MachineAffectNum' in params ? params.MachineAffectNum : null;

    }
}

/**
 * DeleteLoginWhiteList请求参数结构体
 * @class
 */
class DeleteLoginWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单ID (最大 100 条)
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DeleteWebPageEventLog返回参数结构体
 * @class
 */
class DeleteWebPageEventLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVulLevelCount返回参数结构体
 * @class
 */
class DescribeVulLevelCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VulLevelInfo> || null}
         */
        this.VulLevelList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VulLevelList) {
            this.VulLevelList = new Array();
            for (let z in params.VulLevelList) {
                let obj = new VulLevelInfo();
                obj.deserialize(params.VulLevelList[z]);
                this.VulLevelList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVersionStatistics返回参数结构体
 * @class
 */
class DescribeVersionStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基础版数量
         * @type {number || null}
         */
        this.BasicVersionNum = null;

        /**
         * 专业版数量
         * @type {number || null}
         */
        this.ProVersionNum = null;

        /**
         * 旗舰版数量
         * @type {number || null}
         */
        this.UltimateVersionNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BasicVersionNum = 'BasicVersionNum' in params ? params.BasicVersionNum : null;
        this.ProVersionNum = 'ProVersionNum' in params ? params.ProVersionNum : null;
        this.UltimateVersionNum = 'UltimateVersionNum' in params ? params.UltimateVersionNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBruteAttackRules请求参数结构体
 * @class
 */
class DescribeBruteAttackRulesRequest extends  AbstractModel {
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
 * DescribeProcessStatistics返回参数结构体
 * @class
 */
class DescribeProcessStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进程统计列表记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 进程统计列表数据数组。
         * @type {Array.<ProcessStatistics> || null}
         */
        this.ProcessStatistics = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ProcessStatistics) {
            this.ProcessStatistics = new Array();
            for (let z in params.ProcessStatistics) {
                let obj = new ProcessStatistics();
                obj.deserialize(params.ProcessStatistics[z]);
                this.ProcessStatistics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBruteAttackRules返回参数结构体
 * @class
 */
class ModifyBruteAttackRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteNonlocalLoginPlaces请求参数结构体
 * @class
 */
class DeleteNonlocalLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除异地登录事件的方式，可选值："Ids"、"Ip"、"All"，默认为Ids
         * @type {string || null}
         */
        this.DelType = null;

        /**
         * 异地登录事件ID数组。DelType为Ids或DelType未填时此项必填
         * @type {Array.<number> || null}
         */
        this.Ids = null;

        /**
         * 异地登录事件的Ip。DelType为Ip时必填
         * @type {Array.<string> || null}
         */
        this.Ip = null;

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DelType = 'DelType' in params ? params.DelType : null;
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * DescribeAssetWebAppPluginList返回参数结构体
 * @class
 */
class DescribeAssetWebAppPluginListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetWebAppPluginInfo> || null}
         */
        this.Plugins = null;

        /**
         * 分区总数
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

        if (params.Plugins) {
            this.Plugins = new Array();
            for (let z in params.Plugins) {
                let obj = new AssetWebAppPluginInfo();
                obj.deserialize(params.Plugins[z]);
                this.Plugins.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTags返回参数结构体
 * @class
 */
class DescribeTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表信息
         * @type {Array.<Tag> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new Tag();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 服务器风险Top的主机信息
 * @class
 */
class BaselineEventLevelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 危害等级：1-低危；2-中危；3-高危；4-严重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventLevel = null;

        /**
         * 漏洞数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventLevel = 'EventLevel' in params ? params.EventLevel : null;
        this.EventCount = 'EventCount' in params ? params.EventCount : null;

    }
}

/**
 * DescribeLoginWhiteCombinedList请求参数结构体
 * @class
 */
class DescribeLoginWhiteCombinedListRequest extends  AbstractModel {
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>UserName - String - 是否必填：否 - 用户名筛选</li>
<li>ModifyBeginTime - String - 是否必填：否 - 按照修改时间段筛选，开始时间</li>
<li>ModifyEndTime - String - 是否必填：否 - 按照修改时间段筛选，结束时间</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * 基线安全用户策略信息
 * @class
 */
class Strategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StrategyName = null;

        /**
         * 策略id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StrategyId = null;

        /**
         * 基线检测项总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleCount = null;

        /**
         * 主机数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HostCount = null;

        /**
         * 扫描周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanCycle = null;

        /**
         * 扫描时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanAt = null;

        /**
         * 是否可用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Enabled = null;

        /**
         * 通过率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PassRate = null;

        /**
         * 基线id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CategoryIds = null;

        /**
         * 是否默认策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.RuleCount = 'RuleCount' in params ? params.RuleCount : null;
        this.HostCount = 'HostCount' in params ? params.HostCount : null;
        this.ScanCycle = 'ScanCycle' in params ? params.ScanCycle : null;
        this.ScanAt = 'ScanAt' in params ? params.ScanAt : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.PassRate = 'PassRate' in params ? params.PassRate : null;
        this.CategoryIds = 'CategoryIds' in params ? params.CategoryIds : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

    }
}

/**
 * DeleteSearchTemplate返回参数结构体
 * @class
 */
class DeleteSearchTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：成功，非0：失败
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
 * DescribeBanRegions返回参数结构体
 * @class
 */
class DescribeBanRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域信息列表
         * @type {Array.<RegionSet> || null}
         */
        this.RegionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionSet();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEmergencyResponseList返回参数结构体
 * @class
 */
class DescribeEmergencyResponseListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 应急响应列表
         * @type {Array.<EmergencyResponseInfo> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new EmergencyResponseInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 防护机器信息
 * @class
 */
class ProtectHostConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器唯一ID
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 防护开关 0  关闭 1开启
         * @type {number || null}
         */
        this.ProtectSwitch = null;

        /**
         * 自动恢复开关 0 关闭 1开启
         * @type {number || null}
         */
        this.AutoRecovery = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.ProtectSwitch = 'ProtectSwitch' in params ? params.ProtectSwitch : null;
        this.AutoRecovery = 'AutoRecovery' in params ? params.AutoRecovery : null;

    }
}

/**
 * 资产管理计划任务列表
 * @class
 */
class AssetPlanTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认启用状态：1启用，2未启用
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 执行周期
         * @type {string || null}
         */
        this.Cycle = null;

        /**
         * 执行命令或脚本
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 启动用户
         * @type {string || null}
         */
        this.User = null;

        /**
         * 配置文件路径
         * @type {string || null}
         */
        this.ConfigPath = null;

        /**
         * 服务器IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 服务器名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 数据更新时间
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
        this.Status = 'Status' in params ? params.Status : null;
        this.Cycle = 'Cycle' in params ? params.Cycle : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.User = 'User' in params ? params.User : null;
        this.ConfigPath = 'ConfigPath' in params ? params.ConfigPath : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 账号变更历史数据。
 * @class
 */
class HistoryAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 云镜客户端唯一Uuid。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 主机内网IP。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机名。
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 帐号名。
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 帐号变更类型。
<li>CREATE：表示新增帐号</li>
<li>MODIFY：表示修改帐号</li>
<li>DELETE：表示删除帐号</li>
         * @type {string || null}
         */
        this.ModifyType = null;

        /**
         * 变更时间。
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.ModifyType = 'ModifyType' in params ? params.ModifyType : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DescribeAssetAppList返回参数结构体
 * @class
 */
class DescribeAssetAppListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetAppBaseInfo> || null}
         */
        this.Apps = null;

        /**
         * 总数量
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

        if (params.Apps) {
            this.Apps = new Array();
            for (let z in params.Apps) {
                let obj = new AssetAppBaseInfo();
                obj.deserialize(params.Apps[z]);
                this.Apps.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyWebPageProtectSwitch请求参数结构体
 * @class
 */
class ModifyWebPageProtectSwitchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关类型 1 防护开关  2 自动恢复开关 3 移除防护目录
         * @type {number || null}
         */
        this.SwitchType = null;

        /**
         * 需要操作开关的网站 最大100条
         * @type {Array.<string> || null}
         */
        this.Ids = null;

        /**
         * 1 开启 0 关闭 SwitchType 为 1 | 2 必填;
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
        this.SwitchType = 'SwitchType' in params ? params.SwitchType : null;
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateScanMalwareSetting请求参数结构体
 * @class
 */
class CreateScanMalwareSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扫描模式 0 全盘扫描, 1 快速扫描
         * @type {number || null}
         */
        this.ScanPattern = null;

        /**
         * 服务器分类：1:专业版服务器；2:自选服务器
         * @type {number || null}
         */
        this.HostType = null;

        /**
         * 自选服务器时生效，主机quuid的string数组
         * @type {Array.<string> || null}
         */
        this.QuuidList = null;

        /**
         * 超时时间单位 秒 默认3600 秒
         * @type {number || null}
         */
        this.TimeoutPeriod = null;

        /**
         * 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示）
         * @type {number || null}
         */
        this.EngineType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScanPattern = 'ScanPattern' in params ? params.ScanPattern : null;
        this.HostType = 'HostType' in params ? params.HostType : null;
        this.QuuidList = 'QuuidList' in params ? params.QuuidList : null;
        this.TimeoutPeriod = 'TimeoutPeriod' in params ? params.TimeoutPeriod : null;
        this.EngineType = 'EngineType' in params ? params.EngineType : null;

    }
}

/**
 * DescribeMalwareTimingScanSetting返回参数结构体
 * @class
 */
class DescribeMalwareTimingScanSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测模式 0 全盘检测  1快速检测
         * @type {number || null}
         */
        this.CheckPattern = null;

        /**
         * 检测周期 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 检测周期 超时结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 是否全部服务器 1 全部 2 自选
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * 自选服务器时必须 主机quuid的string数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.QuuidList = null;

        /**
         * 监控模式 0 标准 1深度
         * @type {number || null}
         */
        this.MonitoringPattern = null;

        /**
         * 周期 1每天
         * @type {number || null}
         */
        this.Cycle = null;

        /**
         * 定时检测开关 0 关闭1 开启
         * @type {number || null}
         */
        this.EnableScan = null;

        /**
         * 唯一ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 实时监控0 关闭 1开启
         * @type {number || null}
         */
        this.RealTimeMonitoring = null;

        /**
         * 是否自动隔离：1-是，0-否
         * @type {number || null}
         */
        this.AutoIsolation = null;

        /**
         * 一键扫描超时时长，如：1800秒（s）
         * @type {number || null}
         */
        this.ClickTimeout = null;

        /**
         * 是否杀掉进程 1杀掉 0不杀掉 只有开启自动隔离才生效
         * @type {number || null}
         */
        this.KillProcess = null;

        /**
         * 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示）
         * @type {number || null}
         */
        this.EngineType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckPattern = 'CheckPattern' in params ? params.CheckPattern : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.QuuidList = 'QuuidList' in params ? params.QuuidList : null;
        this.MonitoringPattern = 'MonitoringPattern' in params ? params.MonitoringPattern : null;
        this.Cycle = 'Cycle' in params ? params.Cycle : null;
        this.EnableScan = 'EnableScan' in params ? params.EnableScan : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RealTimeMonitoring = 'RealTimeMonitoring' in params ? params.RealTimeMonitoring : null;
        this.AutoIsolation = 'AutoIsolation' in params ? params.AutoIsolation : null;
        this.ClickTimeout = 'ClickTimeout' in params ? params.ClickTimeout : null;
        this.KillProcess = 'KillProcess' in params ? params.KillProcess : null;
        this.EngineType = 'EngineType' in params ? params.EngineType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHostLoginList请求参数结构体
 * @class
 */
class DescribeHostLoginListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，最大值为100
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Uuid - String - 是否必填：否 - 云镜唯一Uuid</li>
<li>Quuid - String - 是否必填：否 - 云服务器uuid</li>
<li>UserName - String - 是否必填：否 - 用户名筛选</li>
<li>LoginTimeBegin - String - 是否必填：否 - 按照修改时间段筛选，开始时间</li>
<li>LoginTimeEnd - String - 是否必填：否 - 按照修改时间段筛选，结束时间</li>
<li>SrcIp - String - 是否必填：否 - 来源ip筛选</li>
<li>Status - int - 是否必填：否 - 状态筛选1:正常登录；5：已加白,14:已处理，15：已忽略</li>
<li>RiskLevel - int - 是否必填：否 - 状态筛选0:高危；1：可疑</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * 安全趋势统计数据。
 * @class
 */
class SecurityTrend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件时间。
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 事件数量。
         * @type {number || null}
         */
        this.EventNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.EventNum = 'EventNum' in params ? params.EventNum : null;

    }
}

/**
 * DescribeAssetWebServiceProcessList请求参数结构体
 * @class
 */
class DescribeAssetWebServiceProcessListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Web服务ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
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
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 本地提权规则
 * @class
 */
class PrivilegeRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 客户端ID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 进程名
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 是否S权限
         * @type {number || null}
         */
        this.SMode = null;

        /**
         * 操作人
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 是否全局规则
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * 状态(0: 有效 1: 无效)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 主机IP
         * @type {string || null}
         */
        this.Hostip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.SMode = 'SMode' in params ? params.SMode : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Hostip = 'Hostip' in params ? params.Hostip : null;

    }
}

/**
 * ExportVulDetectionExcel请求参数结构体
 * @class
 */
class ExportVulDetectionExcelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次漏洞检测任务id（不同于出参的导出本次漏洞检测Excel的任务Id）
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
 * CreateEmergencyVulScan请求参数结构体
 * @class
 */
class CreateEmergencyVulScanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞id
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * 自选服务器时生效，主机uuid的string数组
         * @type {Array.<string> || null}
         */
        this.Uuids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulId = 'VulId' in params ? params.VulId : null;
        this.Uuids = 'Uuids' in params ? params.Uuids : null;

    }
}

/**
 * DescribeProtectDirRelatedServer返回参数结构体
 * @class
 */
class DescribeProtectDirRelatedServerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网站关联服务器列表信息
         * @type {Array.<ProtectDirRelatedServer> || null}
         */
        this.List = null;

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 已开启防护总数
         * @type {number || null}
         */
        this.ProtectServerCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new ProtectDirRelatedServer();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ProtectServerCount = 'ProtectServerCount' in params ? params.ProtectServerCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAutoOpenProVersionConfig返回参数结构体
 * @class
 */
class ModifyAutoOpenProVersionConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportBaselineEffectHostList请求参数结构体
 * @class
 */
class ExportBaselineEffectHostListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基线id
         * @type {number || null}
         */
        this.BaselineId = null;

        /**
         * 筛选条件
<li>AliasName- String- 主机别名</li>
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 策略id
         * @type {number || null}
         */
        this.StrategyId = null;

        /**
         * 主机uuid数组
         * @type {Array.<string> || null}
         */
        this.UuidList = null;

        /**
         * 基线名称
         * @type {string || null}
         */
        this.BaselineName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BaselineId = 'BaselineId' in params ? params.BaselineId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.UuidList = 'UuidList' in params ? params.UuidList : null;
        this.BaselineName = 'BaselineName' in params ? params.BaselineName : null;

    }
}

/**
 * 资产管理内核模块详情
 * @class
 */
class AssetCoreModuleDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 大小
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 依赖进程
         * @type {string || null}
         */
        this.Processes = null;

        /**
         * 被依赖模块
         * @type {string || null}
         */
        this.Modules = null;

        /**
         * 参数信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetCoreModuleParam> || null}
         */
        this.Params = null;

        /**
         * 数据更新时间
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Processes = 'Processes' in params ? params.Processes : null;
        this.Modules = 'Modules' in params ? params.Modules : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new AssetCoreModuleParam();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeBanStatus请求参数结构体
 * @class
 */
class DescribeBanStatusRequest extends  AbstractModel {
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
 * DescribeAssetRecentMachineInfo返回参数结构体
 * @class
 */
class DescribeAssetRecentMachineInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数量列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetKeyVal> || null}
         */
        this.TotalList = null;

        /**
         * 在线数量列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetKeyVal> || null}
         */
        this.LiveList = null;

        /**
         * 离线数量列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetKeyVal> || null}
         */
        this.OfflineList = null;

        /**
         * 风险数量列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetKeyVal> || null}
         */
        this.RiskList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TotalList) {
            this.TotalList = new Array();
            for (let z in params.TotalList) {
                let obj = new AssetKeyVal();
                obj.deserialize(params.TotalList[z]);
                this.TotalList.push(obj);
            }
        }

        if (params.LiveList) {
            this.LiveList = new Array();
            for (let z in params.LiveList) {
                let obj = new AssetKeyVal();
                obj.deserialize(params.LiveList[z]);
                this.LiveList.push(obj);
            }
        }

        if (params.OfflineList) {
            this.OfflineList = new Array();
            for (let z in params.OfflineList) {
                let obj = new AssetKeyVal();
                obj.deserialize(params.OfflineList[z]);
                this.OfflineList.push(obj);
            }
        }

        if (params.RiskList) {
            this.RiskList = new Array();
            for (let z in params.RiskList) {
                let obj = new AssetKeyVal();
                obj.deserialize(params.RiskList[z]);
                this.RiskList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMalWareList返回参数结构体
 * @class
 */
class DescribeMalWareListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MalWareList> || null}
         */
        this.MalWareList = null;

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

        if (params.MalWareList) {
            this.MalWareList = new Array();
            for (let z in params.MalWareList) {
                let obj = new MalWareList();
                obj.deserialize(params.MalWareList[z]);
                this.MalWareList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetPortInfoList返回参数结构体
 * @class
 */
class DescribeAssetPortInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetPortBaseInfo> || null}
         */
        this.Ports = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Ports) {
            this.Ports = new Array();
            for (let z in params.Ports) {
                let obj = new AssetPortBaseInfo();
                obj.deserialize(params.Ports[z]);
                this.Ports.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProtectDirList返回参数结构体
 * @class
 */
class DescribeProtectDirListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 防护目录列表信息
         * @type {Array.<ProtectDirInfo> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ProtectDirInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMaliciousRequestWhiteList返回参数结构体
 * @class
 */
class DescribeMaliciousRequestWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MaliciousRequestWhiteListInfo> || null}
         */
        this.List = null;

        /**
         * 分页查询记录总数
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
                let obj = new MaliciousRequestWhiteListInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteBruteAttacks返回参数结构体
 * @class
 */
class DeleteBruteAttacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportTasks返回参数结构体
 * @class
 */
class ExportTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * PENDING：正在生成下载链接，FINISHED：下载链接已生成，ERROR：网络异常等异常情况
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 下载链接
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
        this.Status = 'Status' in params ? params.Status : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIgnoreBaselineRule返回参数结构体
 * @class
 */
class DescribeIgnoreBaselineRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 忽略基线检测项列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IgnoreBaselineRule> || null}
         */
        this.IgnoreBaselineRuleList = null;

        /**
         * 分页查询记录总数
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

        if (params.IgnoreBaselineRuleList) {
            this.IgnoreBaselineRuleList = new Array();
            for (let z in params.IgnoreBaselineRuleList) {
                let obj = new IgnoreBaselineRule();
                obj.deserialize(params.IgnoreBaselineRuleList[z]);
                this.IgnoreBaselineRuleList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMachineOsList请求参数结构体
 * @class
 */
class DescribeMachineOsListRequest extends  AbstractModel {
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
 * DescribeMalwareRiskWarning返回参数结构体
 * @class
 */
class DescribeMalwareRiskWarningResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启自动扫描：true-开启，false-未开启
         * @type {boolean || null}
         */
        this.IsCheckRisk = null;

        /**
         * 风险文件列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MalwareRisk> || null}
         */
        this.List = null;

        /**
         * 是否弹出提示 true 弹出, false不弹
         * @type {boolean || null}
         */
        this.IsPop = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsCheckRisk = 'IsCheckRisk' in params ? params.IsCheckRisk : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new MalwareRisk();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.IsPop = 'IsPop' in params ? params.IsPop : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBashRules请求参数结构体
 * @class
 */
class DescribeBashRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0-系统规则; 1-用户规则
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 返回数量，最大值为100。
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
<li>Keywords - String - 是否必填：否 - 关键字(规则名称)</li>
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * 基线基础信息
 * @class
 */
class BaselineBasicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基线名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 基线id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BaselineId = null;

        /**
         * 父级id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.BaselineId = 'BaselineId' in params ? params.BaselineId : null;
        this.ParentId = 'ParentId' in params ? params.ParentId : null;

    }
}

/**
 * DescribeBanMode返回参数结构体
 * @class
 */
class DescribeBanModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 标准阻断模式的配置
         * @type {StandardModeConfig || null}
         */
        this.StandardModeConfig = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.StandardModeConfig) {
            let obj = new StandardModeConfig();
            obj.deserialize(params.StandardModeConfig)
            this.StandardModeConfig = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImportMachineInfo返回参数结构体
 * @class
 */
class DescribeImportMachineInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 有效的机器信息列表：机器名称、机器公网/内网ip、机器标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EffectiveMachineInfo> || null}
         */
        this.EffectiveMachineInfoList = null;

        /**
         * 用户批量导入失败的机器列表（例如机器不存在等...）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.InvalidMachineList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EffectiveMachineInfoList) {
            this.EffectiveMachineInfoList = new Array();
            for (let z in params.EffectiveMachineInfoList) {
                let obj = new EffectiveMachineInfo();
                obj.deserialize(params.EffectiveMachineInfoList[z]);
                this.EffectiveMachineInfoList.push(obj);
            }
        }
        this.InvalidMachineList = 'InvalidMachineList' in params ? params.InvalidMachineList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityEventStat返回参数结构体
 * @class
 */
class DescribeSecurityEventStatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马事件统计
         * @type {EventStat || null}
         */
        this.MalwareStat = null;

        /**
         * 异地事件统计
         * @type {EventStat || null}
         */
        this.HostLoginStat = null;

        /**
         * 爆破事件统计
         * @type {EventStat || null}
         */
        this.BruteAttackStat = null;

        /**
         * 恶意请求事件统计
         * @type {EventStat || null}
         */
        this.MaliciousRequestStat = null;

        /**
         * 本地提权事件统计
         * @type {EventStat || null}
         */
        this.PrivilegeStat = null;

        /**
         * 反弹Shell事件统计
         * @type {EventStat || null}
         */
        this.ReverseShellStat = null;

        /**
         * 高危命令事件统计
         * @type {EventStat || null}
         */
        this.HighRiskBashStat = null;

        /**
         * 网络攻击事件统计
         * @type {EventStat || null}
         */
        this.AttackLogsStat = null;

        /**
         * 高危漏洞事件统计
         * @type {EventStat || null}
         */
        this.VulHighStat = null;

        /**
         * 中危漏洞事件统计
         * @type {EventStat || null}
         */
        this.VulNormalStat = null;

        /**
         * 低危漏洞事件统计
         * @type {EventStat || null}
         */
        this.VulLowStat = null;

        /**
         * 高危基线漏洞事件统计
         * @type {EventStat || null}
         */
        this.BaselineHighStat = null;

        /**
         * 中危基线漏事件统计
         * @type {EventStat || null}
         */
        this.BaselineNormalStat = null;

        /**
         * 低危基线漏事件统计
         * @type {EventStat || null}
         */
        this.BaselineLowStat = null;

        /**
         * 有未处理安全事件的机器总数
         * @type {number || null}
         */
        this.MachineTotalAffectNum = null;

        /**
         * 有未处理入侵安全事件的机器总数
         * @type {number || null}
         */
        this.InvasionTotalAffectNum = null;

        /**
         * 有未处理漏洞安全事件的机器总数
         * @type {number || null}
         */
        this.VulTotalAffectNum = null;

        /**
         * 有未处理基线安全事件的机器总数
         * @type {number || null}
         */
        this.BaseLineTotalAffectNum = null;

        /**
         * 有未处理网络攻击安全事件的机器总数
         * @type {number || null}
         */
        this.CyberAttackTotalAffectNum = null;

        /**
         * 严重漏洞事件统计
         * @type {EventStat || null}
         */
        this.VulRiskStat = null;

        /**
         * 严重基线漏洞事件统计
         * @type {EventStat || null}
         */
        this.BaselineRiskStat = null;

        /**
         * 漏洞数统计
         * @type {EventStat || null}
         */
        this.VulStat = null;

        /**
         * 安全得分
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MalwareStat) {
            let obj = new EventStat();
            obj.deserialize(params.MalwareStat)
            this.MalwareStat = obj;
        }

        if (params.HostLoginStat) {
            let obj = new EventStat();
            obj.deserialize(params.HostLoginStat)
            this.HostLoginStat = obj;
        }

        if (params.BruteAttackStat) {
            let obj = new EventStat();
            obj.deserialize(params.BruteAttackStat)
            this.BruteAttackStat = obj;
        }

        if (params.MaliciousRequestStat) {
            let obj = new EventStat();
            obj.deserialize(params.MaliciousRequestStat)
            this.MaliciousRequestStat = obj;
        }

        if (params.PrivilegeStat) {
            let obj = new EventStat();
            obj.deserialize(params.PrivilegeStat)
            this.PrivilegeStat = obj;
        }

        if (params.ReverseShellStat) {
            let obj = new EventStat();
            obj.deserialize(params.ReverseShellStat)
            this.ReverseShellStat = obj;
        }

        if (params.HighRiskBashStat) {
            let obj = new EventStat();
            obj.deserialize(params.HighRiskBashStat)
            this.HighRiskBashStat = obj;
        }

        if (params.AttackLogsStat) {
            let obj = new EventStat();
            obj.deserialize(params.AttackLogsStat)
            this.AttackLogsStat = obj;
        }

        if (params.VulHighStat) {
            let obj = new EventStat();
            obj.deserialize(params.VulHighStat)
            this.VulHighStat = obj;
        }

        if (params.VulNormalStat) {
            let obj = new EventStat();
            obj.deserialize(params.VulNormalStat)
            this.VulNormalStat = obj;
        }

        if (params.VulLowStat) {
            let obj = new EventStat();
            obj.deserialize(params.VulLowStat)
            this.VulLowStat = obj;
        }

        if (params.BaselineHighStat) {
            let obj = new EventStat();
            obj.deserialize(params.BaselineHighStat)
            this.BaselineHighStat = obj;
        }

        if (params.BaselineNormalStat) {
            let obj = new EventStat();
            obj.deserialize(params.BaselineNormalStat)
            this.BaselineNormalStat = obj;
        }

        if (params.BaselineLowStat) {
            let obj = new EventStat();
            obj.deserialize(params.BaselineLowStat)
            this.BaselineLowStat = obj;
        }
        this.MachineTotalAffectNum = 'MachineTotalAffectNum' in params ? params.MachineTotalAffectNum : null;
        this.InvasionTotalAffectNum = 'InvasionTotalAffectNum' in params ? params.InvasionTotalAffectNum : null;
        this.VulTotalAffectNum = 'VulTotalAffectNum' in params ? params.VulTotalAffectNum : null;
        this.BaseLineTotalAffectNum = 'BaseLineTotalAffectNum' in params ? params.BaseLineTotalAffectNum : null;
        this.CyberAttackTotalAffectNum = 'CyberAttackTotalAffectNum' in params ? params.CyberAttackTotalAffectNum : null;

        if (params.VulRiskStat) {
            let obj = new EventStat();
            obj.deserialize(params.VulRiskStat)
            this.VulRiskStat = obj;
        }

        if (params.BaselineRiskStat) {
            let obj = new EventStat();
            obj.deserialize(params.BaselineRiskStat)
            this.BaselineRiskStat = obj;
        }

        if (params.VulStat) {
            let obj = new EventStat();
            obj.deserialize(params.VulStat)
            this.VulStat = obj;
        }
        this.Score = 'Score' in params ? params.Score : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetDatabaseList请求参数结构体
 * @class
 */
class DescribeAssetDatabaseListRequest extends  AbstractModel {
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>User- string - 是否必填：否 - 运行用户</li>
<li>Ip - String - 是否必填：否 - 绑定IP</li>
<li>Port - Int - 是否必填：否 - 端口</li>
<li>Name - Int - 是否必填：否 - 数据库名称
0:全部
1:MySQL
2:Redis
3:Oracle
4:MongoDB
5:MemCache
6:PostgreSQL
7:HBase
8:DB2
9:Sybase
10:TiDB</li>
<li>Proto - String - 是否必填：否 - 协议：1:TCP, 2:UDP, 3:未知</li>
<li>OsType - String - 是否必填：否 - 操作系统: linux/windows</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 查询指定Quuid主机的信息
         * @type {string || null}
         */
        this.Quuid = null;

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
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * ModifyWebPageProtectSwitch返回参数结构体
 * @class
 */
class ModifyWebPageProtectSwitchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetMachineList请求参数结构体
 * @class
 */
class DescribeAssetMachineListRequest extends  AbstractModel {
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>OsType - String - 是否必填：否 - windows或linux</li>
<li>CpuLoad - Int - 是否必填：否 - 
0: 未知  1: 低负载
2: 中负载  3: 高负载</li>
<li>DiskLoad - Int - 是否必填：否 - 
0: 0%或未知  1: 0%～20%
2: 20%～50%  3: 50%～80%
4: 80%～100%</li>
<li>MemLoad - Int - 是否必填：否 - 
0: 0%或未知  1: 0%～20%
2: 20%～50%  3: 50%～80%
4: 80%～100%</li>
<li>Quuid：主机Quuid</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 可选排序：PartitionCount
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序方式，asc升序 或 desc降序
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
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * CreateSearchTemplate返回参数结构体
 * @class
 */
class CreateSearchTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：成功，非0：失败
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
 * DescribeAssetDatabaseList返回参数结构体
 * @class
 */
class DescribeAssetDatabaseListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetDatabaseBaseInfo> || null}
         */
        this.Databases = null;

        /**
         * 总数量
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

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new AssetDatabaseBaseInfo();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportMalwares请求参数结构体
 * @class
 */
class ExportMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 限制条数,默认10
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量 默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数。
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>FilePath - String - 是否必填：否 - 路径筛选</li>
<li>VirusName - String - 是否必填：否 - 描述筛选</li>
<li>CreateBeginTime - String - 是否必填：否 - 创建时间筛选-开始时间</li>
<li>CreateEndTime - String - 是否必填：否 - 创建时间筛选-结束时间</li>
<li>Status - String - 是否必填：否 - 状态筛选</li>
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 排序值 CreateTime
         * @type {string || null}
         */
        this.By = null;

        /**
         * 排序 方式 ，ASC，DESC
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
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * ExportNonlocalLoginPlaces请求参数结构体
 * @class
 */
class ExportNonlocalLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <li>Status - int - 是否必填：否 - 状态筛选1:正常登录；2：异地登录</li>
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
 * SyncAssetScan返回参数结构体
 * @class
 */
class SyncAssetScanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 枚举值有(大写)：NOTASK（没有同步任务），SYNCING（同步中），FINISHED（同步完成）
         * @type {string || null}
         */
        this.State = null;

        /**
         * 最新开始同步时间
         * @type {string || null}
         */
        this.LatestStartTime = null;

        /**
         * 最新结束同步时间
         * @type {string || null}
         */
        this.LatestEndTime = null;

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
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
        this.State = 'State' in params ? params.State : null;
        this.LatestStartTime = 'LatestStartTime' in params ? params.LatestStartTime : null;
        this.LatestEndTime = 'LatestEndTime' in params ? params.LatestEndTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资产管理内核模块列表
 * @class
 */
class AssetCoreModuleBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 服务器IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 服务器名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 模块大小
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 依赖进程数
         * @type {number || null}
         */
        this.ProcessCount = null;

        /**
         * 依赖模块数
         * @type {number || null}
         */
        this.ModuleCount = null;

        /**
         * 模块ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 数据更新时间
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.ProcessCount = 'ProcessCount' in params ? params.ProcessCount : null;
        this.ModuleCount = 'ModuleCount' in params ? params.ModuleCount : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateBaselineStrategy请求参数结构体
 * @class
 */
class CreateBaselineStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略名称
         * @type {string || null}
         */
        this.StrategyName = null;

        /**
         * 检测周期, 表示每隔多少天进行检测.示例: 2, 表示每2天进行检测一次.
         * @type {number || null}
         */
        this.ScanCycle = null;

        /**
         * 定期检测时间，该时间下发扫描. 示例:“22:00”, 表示在22:00下发检测
         * @type {string || null}
         */
        this.ScanAt = null;

        /**
         * 该策略下选择的基线id数组. 示例: [1,3,5,7]
         * @type {Array.<number> || null}
         */
        this.CategoryIds = null;

        /**
         * 扫描范围是否全部服务器, 1:是  0:否, 为1则为全部专业版主机
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * 云主机类型：
CVM：虚拟主机
BM：裸金属
ECM：边缘计算主机
LH：轻量应用服务器
Other：混合云机器
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 主机地域. 示例: "ap-guangzhou"
         * @type {string || null}
         */
        this.RegionCode = null;

        /**
         * 主机id数组. 示例: ["quuid1","quuid2"]
         * @type {Array.<string> || null}
         */
        this.Quuids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;
        this.ScanCycle = 'ScanCycle' in params ? params.ScanCycle : null;
        this.ScanAt = 'ScanAt' in params ? params.ScanAt : null;
        this.CategoryIds = 'CategoryIds' in params ? params.CategoryIds : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.RegionCode = 'RegionCode' in params ? params.RegionCode : null;
        this.Quuids = 'Quuids' in params ? params.Quuids : null;

    }
}

/**
 * DescribeSecurityTrends请求参数结构体
 * @class
 */
class DescribeSecurityTrendsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间，如：2021-07-10
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * 结束时间，如：2021-07-10
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

    }
}

/**
 * DescribeAttackVulTypeList返回参数结构体
 * @class
 */
class DescribeAttackVulTypeListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 威胁类型列表
         * @type {Array.<string> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.List = 'List' in params ? params.List : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrivilegeRules返回参数结构体
 * @class
 */
class DescribePrivilegeRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表内容
         * @type {Array.<PrivilegeRule> || null}
         */
        this.List = null;

        /**
         * 总条数
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
                let obj = new PrivilegeRule();
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
         * 列表内容
         * @type {Array.<ReverseShell> || null}
         */
        this.List = null;

        /**
         * 总条数
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
                let obj = new ReverseShell();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 密码破解列表实体
 * @class
 */
class BruteAttackInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 云镜客户端唯一标识UUID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 主机ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 来源ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * SUCCESS：破解成功；FAILED：破解失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 国家id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Country = null;

        /**
         * 城市id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.City = null;

        /**
         * 省份id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Province = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 阻断状态：1-阻断成功；非1-阻断失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BanStatus = null;

        /**
         * 事件类型：200-暴力破解事件，300-暴力破解成功事件（页面展示），400-暴力破解不存在的帐号事件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventType = null;

        /**
         * 发生次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 机器UUID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 是否为专业版（true/false）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsProVersion = null;

        /**
         * 被攻击的服务的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 最近攻击时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 0：待处理，1：忽略，5：已处理，6：加入白名单
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.City = 'City' in params ? params.City : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BanStatus = 'BanStatus' in params ? params.BanStatus : null;
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.IsProVersion = 'IsProVersion' in params ? params.IsProVersion : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DataStatus = 'DataStatus' in params ? params.DataStatus : null;

    }
}

/**
 * DescribeWebPageProtectStat返回参数结构体
 * @class
 */
class DescribeWebPageProtectStatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件篡改信息
         * @type {Array.<ProtectStat> || null}
         */
        this.FileTamperNum = null;

        /**
         * 防护文件分类信息
         * @type {Array.<ProtectStat> || null}
         */
        this.ProtectFileType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FileTamperNum) {
            this.FileTamperNum = new Array();
            for (let z in params.FileTamperNum) {
                let obj = new ProtectStat();
                obj.deserialize(params.FileTamperNum[z]);
                this.FileTamperNum.push(obj);
            }
        }

        if (params.ProtectFileType) {
            this.ProtectFileType = new Array();
            for (let z in params.ProtectFileType) {
                let obj = new ProtectStat();
                obj.deserialize(params.ProtectFileType[z]);
                this.ProtectFileType.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetPortInfoList请求参数结构体
 * @class
 */
class DescribeAssetPortInfoListRequest extends  AbstractModel {
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
<li>Port - uint64 - 是否必填：否 - 端口</li>
<li>Ip - String - 是否必填：否 - 绑定IP</li>
<li>ProcessName - String - 是否必填：否 - 监听进程</li>
<li>Pid - uint64 - 是否必填：否 - PID</li>
<li>User - String - 是否必填：否 - 运行用户</li>
<li>Group - String - 是否必填：否 - 所属用户组</li>
<li>Ppid - uint64 - 是否必填：否 - PPID</li>
<li>Proto - string - 是否必填：否 - tcp/udp或“”(空字符串筛选未知状态)</li>
<li>OsType - uint64 - 是否必填：否 - windows/linux</li>
<li>RunTimeStart - String - 是否必填：否 - 运行开始时间</li>
<li>RunTimeEnd - String - 是否必填：否 - 运行结束时间</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序方式，asc升序 或 desc降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序方式：StartTime
         * @type {string || null}
         */
        this.By = null;

        /**
         * 查询指定Quuid主机的信息
         * @type {string || null}
         */
        this.Quuid = null;

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
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * 漏洞等级数量实体
 * @class
 */
class VulLevelCountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞等级
         * @type {number || null}
         */
        this.VulLevel = null;

        /**
         * 漏洞数量
         * @type {number || null}
         */
        this.VulCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulLevel = 'VulLevel' in params ? params.VulLevel : null;
        this.VulCount = 'VulCount' in params ? params.VulCount : null;

    }
}

/**
 * DescribeExportMachines请求参数结构体
 * @class
 */
class DescribeExportMachinesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云主机类型。
<li>CVM：表示虚拟主机</li>
<li>BM:  表示黑石物理机</li>
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 机器所属地域。如：ap-guangzhou，ap-shanghai
         * @type {string || null}
         */
        this.MachineRegion = null;

        /**
         * 返回数量，默认为10，最大值为100。
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
<li>Keywords - String - 是否必填：否 - 查询关键字 </li>
<li>Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线 | ONLINE: 在线 | UNINSTALLED：未安装）</li>
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版）</li>
每个过滤条件只支持一个值，暂不支持多个值“或”关系查询
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 机器所属业务ID列表
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineRegion = 'MachineRegion' in params ? params.MachineRegion : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;

    }
}

/**
 * CreateScanMalwareSetting返回参数结构体
 * @class
 */
class CreateScanMalwareSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 告警更新或插入的参数
 * @class
 */
class WarningObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件告警类型；1：离线，2：木马，3：异常登录，4：爆破，5：漏洞（已拆分为9-12四种类型）6：高位命令，7：反弹sell，8：本地提权，9：系统组件漏洞，10：web应用漏洞，11：应急漏洞，12：安全基线
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 1: 关闭告警 0: 开启告警
         * @type {number || null}
         */
        this.DisablePhoneWarning = null;

        /**
         * 开始时间，格式: HH:mm
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间，格式: HH:mm
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 漏洞等级控制位二进制，每一位对应页面漏洞等级的开启关闭：低中高（0:关闭；1：开启），例如：101 → 同时勾选低+高；01→(登录审计)疑似不告警，高危告警
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
        this.DisablePhoneWarning = 'DisablePhoneWarning' in params ? params.DisablePhoneWarning : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ControlBits = 'ControlBits' in params ? params.ControlBits : null;

    }
}

/**
 * 恶意请求列表
 * @class
 */
class RiskDnsList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对外访问域名
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 访问次数
         * @type {number || null}
         */
        this.AccessCount = null;

        /**
         * 进程名
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 进程MD5
         * @type {string || null}
         */
        this.ProcessMd5 = null;

        /**
         * 是否为全局规则，0否，1是
         * @type {number || null}
         */
        this.GlobalRuleId = null;

        /**
         * 用户规则id
         * @type {number || null}
         */
        this.UserRuleId = null;

        /**
         * 状态；0-待处理，2-已加白，3-非信任状态，4-已处理，5-已忽略
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 首次访问时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最近访问时间
         * @type {string || null}
         */
        this.MergeTime = null;

        /**
         * 唯一 Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机ip
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 别名
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 唯一ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 参考
         * @type {string || null}
         */
        this.Reference = null;

        /**
         * 命令行
         * @type {string || null}
         */
        this.CmdLine = null;

        /**
         * 进程号
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 唯一UUID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 建议方案
         * @type {string || null}
         */
        this.SuggestScheme = null;

        /**
         * 标签特性
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 外网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 主机在线状态 OFFLINE  ONLINE
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MachineStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.AccessCount = 'AccessCount' in params ? params.AccessCount : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.ProcessMd5 = 'ProcessMd5' in params ? params.ProcessMd5 : null;
        this.GlobalRuleId = 'GlobalRuleId' in params ? params.GlobalRuleId : null;
        this.UserRuleId = 'UserRuleId' in params ? params.UserRuleId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.MergeTime = 'MergeTime' in params ? params.MergeTime : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Reference = 'Reference' in params ? params.Reference : null;
        this.CmdLine = 'CmdLine' in params ? params.CmdLine : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.SuggestScheme = 'SuggestScheme' in params ? params.SuggestScheme : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.MachineStatus = 'MachineStatus' in params ? params.MachineStatus : null;

    }
}

/**
 * DeleteMalwareScanTask请求参数结构体
 * @class
 */
class DeleteMalwareScanTaskRequest extends  AbstractModel {
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
 * DescribeIgnoreRuleEffectHostList返回参数结构体
 * @class
 */
class DescribeIgnoreRuleEffectHostListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 忽略检测项影响主机列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IgnoreRuleEffectHostInfo> || null}
         */
        this.IgnoreRuleEffectHostList = null;

        /**
         * 分页查询记录总数
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

        if (params.IgnoreRuleEffectHostList) {
            this.IgnoreRuleEffectHostList = new Array();
            for (let z in params.IgnoreRuleEffectHostList) {
                let obj = new IgnoreRuleEffectHostInfo();
                obj.deserialize(params.IgnoreRuleEffectHostList[z]);
                this.IgnoreRuleEffectHostList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportProtectDirList请求参数结构体
 * @class
 */
class ExportProtectDirListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * DirName 网站名称
DirPath 网站防护目录地址
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * asc：升序/desc：降序
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
 * CreateBaselineStrategy返回参数结构体
 * @class
 */
class CreateBaselineStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportAssetCoreModuleList返回参数结构体
 * @class
 */
class ExportAssetCoreModuleListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步下载任务ID，需要配合ExportTasks接口使用
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
 * DescribeHistoryAccounts返回参数结构体
 * @class
 */
class DescribeHistoryAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 帐号变更历史列表记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 帐号变更历史数据数组。
         * @type {Array.<HistoryAccount> || null}
         */
        this.HistoryAccounts = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.HistoryAccounts) {
            this.HistoryAccounts = new Array();
            for (let z in params.HistoryAccounts) {
                let obj = new HistoryAccount();
                obj.deserialize(params.HistoryAccounts[z]);
                this.HistoryAccounts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLoginWhiteList请求参数结构体
 * @class
 */
class DescribeLoginWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，最大值为100。
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
<li>IpOrAlias - String - 是否必填：否 - 查询关键字 </li>
<li>UserName - String - 是否必填：否 - 用户名筛选 </li>
<li>ModifyBeginTime - String - 是否必填：否 - 按照修改时间段筛选，开始时间 </li>
<li>ModifyEndTime - String - 是否必填：否 - 按照修改时间段筛选，结束时间 </li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * 端口统计列表
 * @class
 */
class OpenPortStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 端口号
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 主机数量
         * @type {number || null}
         */
        this.MachineNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.MachineNum = 'MachineNum' in params ? params.MachineNum : null;

    }
}

/**
 * ExportVulDetectionReport返回参数结构体
 * @class
 */
class ExportVulDetectionReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出文件下载链接地址
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 导出检测报告的任务Id（不同于入参的漏洞扫描任务id）
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScanSchedule请求参数结构体
 * @class
 */
class DescribeScanScheduleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
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
 * EditBashRules请求参数结构体
 * @class
 */
class EditBashRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID（新增时不填）
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 客户端ID数组
         * @type {Array.<string> || null}
         */
        this.Uuids = null;

        /**
         * 主机IP
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 规则名称，编辑时不可修改规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 危险等级(0:无，1: 高危 2:中危 3: 低危)
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 正则表达式 ，编辑时不可修改正则表达式，需要对内容QueryEscape后再base64
         * @type {string || null}
         */
        this.Rule = null;

        /**
         * 是否全局规则(默认否)：1-全局，0-非全局
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * 0=黑名单， 1=白名单
         * @type {number || null}
         */
        this.White = null;

        /**
         * 事件列表点击“加入白名单”时,需要传EventId 事件的id
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 是否处理旧事件为白名单 0=不处理 1=处理
         * @type {number || null}
         */
        this.DealOldEvents = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuids = 'Uuids' in params ? params.Uuids : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Rule = 'Rule' in params ? params.Rule : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.White = 'White' in params ? params.White : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.DealOldEvents = 'DealOldEvents' in params ? params.DealOldEvents : null;

    }
}

/**
 * DescribeBruteAttackList返回参数结构体
 * @class
 */
class DescribeBruteAttackListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 密码破解列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BruteAttackInfo> || null}
         */
        this.BruteAttackList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.BruteAttackList) {
            this.BruteAttackList = new Array();
            for (let z in params.BruteAttackList) {
                let obj = new BruteAttackInfo();
                obj.deserialize(params.BruteAttackList[z]);
                this.BruteAttackList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScanVulSetting请求参数结构体
 * @class
 */
class ScanVulSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定期检测间隔时间（天）
         * @type {number || null}
         */
        this.TimerInterval = null;

        /**
         * 漏洞类型：1: web-cms漏洞 2:应用漏洞  4: Linux软件漏洞 5: Windows系统漏洞, 以数组方式传参[1,2]
         * @type {Array.<number> || null}
         */
        this.VulCategories = null;

        /**
         * 危害等级：1-低危；2-中危；3-高危；4-严重,以数组方式传参[1,2,3]
         * @type {Array.<number> || null}
         */
        this.VulLevels = null;

        /**
         * 定期检测时间，如：02:10:50
         * @type {string || null}
         */
        this.TimerTime = null;

        /**
         * 是否是应急漏洞 0 否 1 是
         * @type {number || null}
         */
        this.VulEmergency = null;

        /**
         * 扫描开始时间，如：00:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 扫描结束时间，如：08:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 是否开启扫描 1开启 0不开启
         * @type {number || null}
         */
        this.EnableScan = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimerInterval = 'TimerInterval' in params ? params.TimerInterval : null;
        this.VulCategories = 'VulCategories' in params ? params.VulCategories : null;
        this.VulLevels = 'VulLevels' in params ? params.VulLevels : null;
        this.TimerTime = 'TimerTime' in params ? params.TimerTime : null;
        this.VulEmergency = 'VulEmergency' in params ? params.VulEmergency : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.EnableScan = 'EnableScan' in params ? params.EnableScan : null;

    }
}

/**
 * ExportScanTaskDetails请求参数结构体
 * @class
 */
class ExportScanTaskDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次检测的任务id（不同于出参的导出本次检测Excel的任务Id）
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 模块类型，当前提供：Malware 木马 , Vul 漏洞 , Baseline 基线
         * @type {string || null}
         */
        this.ModuleType = null;

        /**
         * 过滤参数：ipOrAlias（服务器名/ip）
         * @type {Array.<Filters> || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ModuleType = 'ModuleType' in params ? params.ModuleType : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * ExportBaselineList返回参数结构体
 * @class
 */
class ExportBaselineListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出文件下载地址（已弃用）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 导出文件Id 可通过ExportTasks接口下载
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBruteAttackRules返回参数结构体
 * @class
 */
class DescribeBruteAttackRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 爆破阻断规则列表
         * @type {Array.<BruteAttackRuleList> || null}
         */
        this.Rules = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

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
                let obj = new BruteAttackRuleList();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBanMode返回参数结构体
 * @class
 */
class ModifyBanModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 基线检测项TOP信息
 * @class
 */
class BaselineRuleTopInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基线检测项名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 检测项危害等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 事件总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventCount = null;

        /**
         * 检测项id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.EventCount = 'EventCount' in params ? params.EventCount : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * 资源管理进程基本信息
 * @class
 */
class AssetProcessBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机内网IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机外网IP
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 操作系统信息
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 主机业务组ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MachineTag> || null}
         */
        this.Tag = null;

        /**
         * 进程名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 进程说明
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 进程路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 进程ID
         * @type {string || null}
         */
        this.Pid = null;

        /**
         * 运行用户
         * @type {string || null}
         */
        this.User = null;

        /**
         * 启动时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 启动参数
         * @type {string || null}
         */
        this.Param = null;

        /**
         * 进程TTY
         * @type {string || null}
         */
        this.Tty = null;

        /**
         * 进程版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 进程用户组
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 进程MD5
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 父进程ID
         * @type {string || null}
         */
        this.Ppid = null;

        /**
         * 父进程名称
         * @type {string || null}
         */
        this.ParentProcessName = null;

        /**
         * 进程状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 数字签名:0无，1有， 999 空，仅windows
         * @type {number || null}
         */
        this.HasSign = null;

        /**
         * 是否通过安装包安装：:0否，1是， 999 空，仅linux
         * @type {number || null}
         */
        this.InstallByPackage = null;

        /**
         * 软件包名
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 数据更新时间
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
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new MachineTag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.User = 'User' in params ? params.User : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Param = 'Param' in params ? params.Param : null;
        this.Tty = 'Tty' in params ? params.Tty : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.Ppid = 'Ppid' in params ? params.Ppid : null;
        this.ParentProcessName = 'ParentProcessName' in params ? params.ParentProcessName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.HasSign = 'HasSign' in params ? params.HasSign : null;
        this.InstallByPackage = 'InstallByPackage' in params ? params.InstallByPackage : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DeleteBruteAttacks请求参数结构体
 * @class
 */
class DeleteBruteAttacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 暴力破解事件Id数组。(最大 100条)
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeAssetCoreModuleList返回参数结构体
 * @class
 */
class DescribeAssetCoreModuleListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetCoreModuleBaseInfo> || null}
         */
        this.Modules = null;

        /**
         * 总数量
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

        if (params.Modules) {
            this.Modules = new Array();
            for (let z in params.Modules) {
                let obj = new AssetCoreModuleBaseInfo();
                obj.deserialize(params.Modules[z]);
                this.Modules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLoginWhiteCombinedList返回参数结构体
 * @class
 */
class DescribeLoginWhiteCombinedListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 合并后的白名单列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LoginWhiteCombinedInfo> || null}
         */
        this.LoginWhiteCombinedInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.LoginWhiteCombinedInfos) {
            this.LoginWhiteCombinedInfos = new Array();
            for (let z in params.LoginWhiteCombinedInfos) {
                let obj = new LoginWhiteCombinedInfo();
                obj.deserialize(params.LoginWhiteCombinedInfos[z]);
                this.LoginWhiteCombinedInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportVulDetectionExcel返回参数结构体
 * @class
 */
class ExportVulDetectionExcelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出文件下载链接地址
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 导出本次漏洞检测Excel的任务Id（不同于入参的本次漏洞检测任务id）
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWarningList返回参数结构体
 * @class
 */
class DescribeWarningListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取告警列表
         * @type {Array.<WarningInfoObj> || null}
         */
        this.WarningInfoList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WarningInfoList) {
            this.WarningInfoList = new Array();
            for (let z in params.WarningInfoList) {
                let obj = new WarningInfoObj();
                obj.deserialize(params.WarningInfoList[z]);
                this.WarningInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSearchTemplate请求参数结构体
 * @class
 */
class CreateSearchTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索模板
         * @type {SearchTemplate || null}
         */
        this.SearchTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SearchTemplate) {
            let obj = new SearchTemplate();
            obj.deserialize(params.SearchTemplate)
            this.SearchTemplate = obj;
        }

    }
}

/**
 * DeleteTags请求参数结构体
 * @class
 */
class DeleteTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签ID (最大100 条)
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeScanState请求参数结构体
 * @class
 */
class DescribeScanStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块类型 当前提供 Malware 木马 , Vul 漏洞 , Baseline 基线
         * @type {string || null}
         */
        this.ModuleType = null;

        /**
         * 过滤参数;
<li>StrategyId 基线策略ID ,仅ModuleType 为 Baseline 时需要<li/>
         * @type {Array.<Filters> || null}
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
        this.ModuleType = 'ModuleType' in params ? params.ModuleType : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * ModifyMalwareTimingScanSettings请求参数结构体
 * @class
 */
class ModifyMalwareTimingScanSettingsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测模式 0 全盘检测  1快速检测
         * @type {number || null}
         */
        this.CheckPattern = null;

        /**
         * 检测周期 开始时间，如：02:00:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 检测周期 超时结束时间，如：04:00:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 是否全部服务器 1 全部 2 自选
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * 定时检测开关 0 关闭 1开启
         * @type {number || null}
         */
        this.EnableScan = null;

        /**
         * 监控模式 0 标准 1深度
         * @type {number || null}
         */
        this.MonitoringPattern = null;

        /**
         * 扫描周期 默认每天 1
         * @type {number || null}
         */
        this.Cycle = null;

        /**
         * 实时监控 0 关闭 1开启
         * @type {number || null}
         */
        this.RealTimeMonitoring = null;

        /**
         * 自选服务器时必须 主机quuid的string数组
         * @type {Array.<string> || null}
         */
        this.QuuidList = null;

        /**
         * 是否自动隔离 1隔离 0 不隔离
         * @type {number || null}
         */
        this.AutoIsolation = null;

        /**
         * 是否杀掉进程 1杀掉 0不杀掉
         * @type {number || null}
         */
        this.KillProcess = null;

        /**
         * 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示）
         * @type {number || null}
         */
        this.EngineType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckPattern = 'CheckPattern' in params ? params.CheckPattern : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.EnableScan = 'EnableScan' in params ? params.EnableScan : null;
        this.MonitoringPattern = 'MonitoringPattern' in params ? params.MonitoringPattern : null;
        this.Cycle = 'Cycle' in params ? params.Cycle : null;
        this.RealTimeMonitoring = 'RealTimeMonitoring' in params ? params.RealTimeMonitoring : null;
        this.QuuidList = 'QuuidList' in params ? params.QuuidList : null;
        this.AutoIsolation = 'AutoIsolation' in params ? params.AutoIsolation : null;
        this.KillProcess = 'KillProcess' in params ? params.KillProcess : null;
        this.EngineType = 'EngineType' in params ? params.EngineType : null;

    }
}

/**
 * 资产管理环境变量列表
 * @class
 */
class AssetEnvBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 类型：
0:用户变量
1:系统变量
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 启动用户
         * @type {string || null}
         */
        this.User = null;

        /**
         * 环境变量值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 服务器IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 服务器名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 数据更新时间
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.User = 'User' in params ? params.User : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeMachineList返回参数结构体
 * @class
 */
class DescribeMachineListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机列表
         * @type {Array.<Machine> || null}
         */
        this.Machines = null;

        /**
         * 主机数量
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

        if (params.Machines) {
            this.Machines = new Array();
            for (let z in params.Machines) {
                let obj = new Machine();
                obj.deserialize(params.Machines[z]);
                this.Machines.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 恶意文件详情
 * @class
 */
class MalwareInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 病毒名称
         * @type {string || null}
         */
        this.VirusName = null;

        /**
         * 文件大小
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 文件MD5
         * @type {string || null}
         */
        this.MD5 = null;

        /**
         * 文件地址
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * 首次运行时间
         * @type {string || null}
         */
        this.FileCreateTime = null;

        /**
         * 最近一次运行时间
         * @type {string || null}
         */
        this.FileModifierTime = null;

        /**
         * 危害描述
         * @type {string || null}
         */
        this.HarmDescribe = null;

        /**
         * 建议方案
         * @type {string || null}
         */
        this.SuggestScheme = null;

        /**
         * 服务器名称
         * @type {string || null}
         */
        this.ServersName = null;

        /**
         * 服务器IP
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 进程名称
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 进程ID
         * @type {string || null}
         */
        this.ProcessID = null;

        /**
         * 标签特性
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 影响广度 // 暂时不提供
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Breadth = null;

        /**
         * 查询热度 // 暂时不提供
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Heat = null;

        /**
         * 唯一ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 首次发现时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最近扫描时间
         * @type {string || null}
         */
        this.LatestScanTime = null;

        /**
         * 参考链接
         * @type {string || null}
         */
        this.Reference = null;

        /**
         * 外网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 进程树 json  pid:进程id，exe:文件路径 ，account:进程所属用组和用户 ,cmdline:执行命令，ssh_service: SSH服务ip, ssh_soure:登录源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PsTree = null;

        /**
         * 主机在线状态 OFFLINE  ONLINE
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MachineStatus = null;

        /**
         * 状态；4-:待处理，5-已信任，6-已隔离
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 风险等级 0提示、1低、2中、3高、4严重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 木马检测平台用,分割 1云查杀引擎、2TAV、3binaryAi、4异常行为、5威胁情报
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckPlatform = null;

        /**
         * 主机uuid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VirusName = 'VirusName' in params ? params.VirusName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.MD5 = 'MD5' in params ? params.MD5 : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.FileCreateTime = 'FileCreateTime' in params ? params.FileCreateTime : null;
        this.FileModifierTime = 'FileModifierTime' in params ? params.FileModifierTime : null;
        this.HarmDescribe = 'HarmDescribe' in params ? params.HarmDescribe : null;
        this.SuggestScheme = 'SuggestScheme' in params ? params.SuggestScheme : null;
        this.ServersName = 'ServersName' in params ? params.ServersName : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.ProcessID = 'ProcessID' in params ? params.ProcessID : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Breadth = 'Breadth' in params ? params.Breadth : null;
        this.Heat = 'Heat' in params ? params.Heat : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LatestScanTime = 'LatestScanTime' in params ? params.LatestScanTime : null;
        this.Reference = 'Reference' in params ? params.Reference : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.PsTree = 'PsTree' in params ? params.PsTree : null;
        this.MachineStatus = 'MachineStatus' in params ? params.MachineStatus : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.CheckPlatform = 'CheckPlatform' in params ? params.CheckPlatform : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * 登录地信息
 * @class
 */
class Place extends  AbstractModel {
    constructor(){
        super();

        /**
         * 城市 ID。
         * @type {number || null}
         */
        this.CityId = null;

        /**
         * 省份 ID。
         * @type {number || null}
         */
        this.ProvinceId = null;

        /**
         * 国家ID，暂只支持国内：1。
         * @type {number || null}
         */
        this.CountryId = null;

        /**
         * 位置名称
         * @type {string || null}
         */
        this.Location = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CityId = 'CityId' in params ? params.CityId : null;
        this.ProvinceId = 'ProvinceId' in params ? params.ProvinceId : null;
        this.CountryId = 'CountryId' in params ? params.CountryId : null;
        this.Location = 'Location' in params ? params.Location : null;

    }
}

/**
 * DescribeExpertServiceOrderList返回参数结构体
 * @class
 */
class DescribeExpertServiceOrderListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 订单列表
         * @type {Array.<ExpertServiceOrderInfo> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ExpertServiceOrderInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteReverseShellRules返回参数结构体
 * @class
 */
class DeleteReverseShellRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetPlanTaskList请求参数结构体
 * @class
 */
class DescribeAssetPlanTaskListRequest extends  AbstractModel {
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>User- string - 是否必填：否 - 用户</li>
<li>Status- int - 是否必填：否 - 默认启用状态：0未启用， 1启用 </li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 服务器Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 服务器Quuid
         * @type {string || null}
         */
        this.Quuid = null;

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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * DescribeScanTaskDetails请求参数结构体
 * @class
 */
class DescribeScanTaskDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块类型 当前提供 Malware 木马 , Vul 漏洞 , Baseline 基线
         * @type {string || null}
         */
        this.ModuleType = null;

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 过滤参数
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 需要返回的数量，最大值为100
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
        this.ModuleType = 'ModuleType' in params ? params.ModuleType : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeProtectDirRelatedServer请求参数结构体
 * @class
 */
class DescribeProtectDirRelatedServerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 分页条数 最大100条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数 ProtectStatus
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序方式
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序值
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeSearchLogs返回参数结构体
 * @class
 */
class DescribeSearchLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 历史搜索记录 保留最新的10条
         * @type {Array.<string> || null}
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
 * 安全事件统计列表
 * @class
 */
class SecurityEventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全事件数
         * @type {number || null}
         */
        this.EventCnt = null;

        /**
         * 受影响机器数
         * @type {number || null}
         */
        this.UuidCnt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventCnt = 'EventCnt' in params ? params.EventCnt : null;
        this.UuidCnt = 'UuidCnt' in params ? params.UuidCnt : null;

    }
}

/**
 * DescribeBaselineAnalysisData返回参数结构体
 * @class
 */
class DescribeBaselineAnalysisDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最后检测时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestScanTime = null;

        /**
         * 是否全部服务器：1-是 0-否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * 服务器总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanHostCount = null;

        /**
         * 检测项总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanRuleCount = null;

        /**
         * 是否是第一次检测  1是 0不是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IfFirstScan = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LatestScanTime = 'LatestScanTime' in params ? params.LatestScanTime : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.ScanHostCount = 'ScanHostCount' in params ? params.ScanHostCount : null;
        this.ScanRuleCount = 'ScanRuleCount' in params ? params.ScanRuleCount : null;
        this.IfFirstScan = 'IfFirstScan' in params ? params.IfFirstScan : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBanMode请求参数结构体
 * @class
 */
class ModifyBanModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 阻断时间，用于标准阻断模式
         * @type {number || null}
         */
        this.Ttl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;

    }
}

/**
 * 阻断白名单展示列表，包含了机器的信息
 * @class
 */
class BanWhiteListDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 白名单别名
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 阻断来源IP
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * 修改白名单时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 创建白名单时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 白名单是否全局
         * @type {boolean || null}
         */
        this.IsGlobal = null;

        /**
         * 机器的UUID
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机安全程序的UUID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 机器IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 机器名称
         * @type {string || null}
         */
        this.MachineName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;

    }
}

/**
 * DescribeMachineRegions返回参数结构体
 * @class
 */
class DescribeMachineRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVM 云服务器地域列表
         * @type {Array.<RegionInfo> || null}
         */
        this.CVM = null;

        /**
         * BM 黑石机器地域列表
         * @type {Array.<RegionInfo> || null}
         */
        this.BM = null;

        /**
         * LH 轻量应用服务器地域列表
         * @type {Array.<RegionInfo> || null}
         */
        this.LH = null;

        /**
         * ECM 边缘计算服务器地域列表
         * @type {Array.<RegionInfo> || null}
         */
        this.ECM = null;

        /**
         * Other 混合云地域列表
         * @type {Array.<RegionInfo> || null}
         */
        this.Other = null;

        /**
         * 所有地域列表(包含以上所有地域)
         * @type {Array.<RegionInfo> || null}
         */
        this.ALL = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CVM) {
            this.CVM = new Array();
            for (let z in params.CVM) {
                let obj = new RegionInfo();
                obj.deserialize(params.CVM[z]);
                this.CVM.push(obj);
            }
        }

        if (params.BM) {
            this.BM = new Array();
            for (let z in params.BM) {
                let obj = new RegionInfo();
                obj.deserialize(params.BM[z]);
                this.BM.push(obj);
            }
        }

        if (params.LH) {
            this.LH = new Array();
            for (let z in params.LH) {
                let obj = new RegionInfo();
                obj.deserialize(params.LH[z]);
                this.LH.push(obj);
            }
        }

        if (params.ECM) {
            this.ECM = new Array();
            for (let z in params.ECM) {
                let obj = new RegionInfo();
                obj.deserialize(params.ECM[z]);
                this.ECM.push(obj);
            }
        }

        if (params.Other) {
            this.Other = new Array();
            for (let z in params.Other) {
                let obj = new RegionInfo();
                obj.deserialize(params.Other[z]);
                this.Other.push(obj);
            }
        }

        if (params.ALL) {
            this.ALL = new Array();
            for (let z in params.ALL) {
                let obj = new RegionInfo();
                obj.deserialize(params.ALL[z]);
                this.ALL.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源管理Web应用列表信息
 * @class
 */
class AssetWebAppBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机内网IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机外网IP
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 操作系统信息
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 主机业务组ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MachineTag> || null}
         */
        this.Tag = null;

        /**
         * 应用名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 根路径
         * @type {string || null}
         */
        this.RootPath = null;

        /**
         * 服务类型
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 站点域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 虚拟路径
         * @type {string || null}
         */
        this.VirtualPath = null;

        /**
         * 插件数
         * @type {number || null}
         */
        this.PluginCount = null;

        /**
         * 应用ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 应用描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 数据更新时间
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
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new MachineTag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.RootPath = 'RootPath' in params ? params.RootPath : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.VirtualPath = 'VirtualPath' in params ? params.VirtualPath : null;
        this.PluginCount = 'PluginCount' in params ? params.PluginCount : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 资产管理内核模块参数
 * @class
 */
class AssetCoreModuleParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据
         * @type {string || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * DeleteBashEvents请求参数结构体
 * @class
 */
class DeleteBashEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID数组，最大100条。
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * 资产管理jar包列表
 * @class
 */
class AssetJarBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 类型：1应用程序，2系统类库，3Web服务自带库，8:其他，
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 是否可执行：0未知，1是，2否
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 服务器IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 服务器名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * Jar包ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Jar包Md5
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 数据更新时间
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * SeparateMalwares请求参数结构体
 * @class
 */
class SeparateMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马事件ID数组。(最大100条)
         * @type {Array.<number> || null}
         */
        this.Ids = null;

        /**
         * 是否杀掉进程
         * @type {boolean || null}
         */
        this.KillProcess = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.KillProcess = 'KillProcess' in params ? params.KillProcess : null;

    }
}

/**
 * 主机安全-漏洞管理-漏洞列表
 * @class
 */
class VulInfoList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞包含的事件id串，多个用“,”分割
         * @type {string || null}
         */
        this.Ids = null;

        /**
         * 漏洞名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 0: 待处理 1:忽略  3:已修复  5:检测中 6:修复中  8:修复失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 漏洞id
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * 漏洞披露事件
         * @type {string || null}
         */
        this.PublishTime = null;

        /**
         * 最后检测时间
         * @type {string || null}
         */
        this.LastTime = null;

        /**
         * 影响主机数
         * @type {number || null}
         */
        this.HostCount = null;

        /**
         * 漏洞等级 1:低 2:中 3:高 4:提示
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 废弃字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.From = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Descript = null;

        /**
         * 废弃字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublishTimeWisteria = null;

        /**
         * 废弃字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NameWisteria = null;

        /**
         * 废弃字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DescriptWisteria = null;

        /**
         * 聚合后事件状态串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusStr = null;

        /**
         * cve编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CveId = null;

        /**
         * CVSS评分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CvssScore = null;

        /**
         * 漏洞标签 多个逗号分割
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Labels = null;

        /**
         * 是否能自动修复且包含能自动修复的主机， 0=否  1=是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FixSwitch = null;

        /**
         * 最后扫描任务的id
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VulId = 'VulId' in params ? params.VulId : null;
        this.PublishTime = 'PublishTime' in params ? params.PublishTime : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;
        this.HostCount = 'HostCount' in params ? params.HostCount : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.From = 'From' in params ? params.From : null;
        this.Descript = 'Descript' in params ? params.Descript : null;
        this.PublishTimeWisteria = 'PublishTimeWisteria' in params ? params.PublishTimeWisteria : null;
        this.NameWisteria = 'NameWisteria' in params ? params.NameWisteria : null;
        this.DescriptWisteria = 'DescriptWisteria' in params ? params.DescriptWisteria : null;
        this.StatusStr = 'StatusStr' in params ? params.StatusStr : null;
        this.CveId = 'CveId' in params ? params.CveId : null;
        this.CvssScore = 'CvssScore' in params ? params.CvssScore : null;
        this.Labels = 'Labels' in params ? params.Labels : null;
        this.FixSwitch = 'FixSwitch' in params ? params.FixSwitch : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * ExportIgnoreRuleEffectHostList请求参数结构体
 * @class
 */
class ExportIgnoreRuleEffectHostListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测项id
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 过滤条件。
<li>AliasName- String- 主机别名</li>
         * @type {Array.<Filters> || null}
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeVulHostCountScanTime返回参数结构体
 * @class
 */
class DescribeVulHostCountScanTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总漏洞数
         * @type {number || null}
         */
        this.TotalVulCount = null;

        /**
         * 漏洞影响主机数
         * @type {number || null}
         */
        this.VulHostCount = null;

        /**
         * 扫描时间
         * @type {string || null}
         */
        this.ScanTime = null;

        /**
         * 是否第一次检测
         * @type {boolean || null}
         */
        this.IfFirstScan = null;

        /**
         * 运行中的任务号, 没有任务则为0
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
        this.TotalVulCount = 'TotalVulCount' in params ? params.TotalVulCount : null;
        this.VulHostCount = 'VulHostCount' in params ? params.VulHostCount : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;
        this.IfFirstScan = 'IfFirstScan' in params ? params.IfFirstScan : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetCoreModuleList请求参数结构体
 * @class
 */
class DescribeAssetCoreModuleListRequest extends  AbstractModel {
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Name- string - 是否必填：否 - 包名</li>
<li>User- string - 是否必填：否 - 用户</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序方式，asc升序 或 desc降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序依据:Size,ProcessCount,ModuleCount
         * @type {string || null}
         */
        this.By = null;

        /**
         * 服务器Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 服务器Quuid
         * @type {string || null}
         */
        this.Quuid = null;

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
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * DeleteAttackLogs请求参数结构体
 * @class
 */
class DeleteAttackLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志ID数组，最大100条。
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeBaselineStrategyDetail返回参数结构体
 * @class
 */
class DescribeBaselineStrategyDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略扫描通过率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PassRate = null;

        /**
         * 策略名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StrategyName = null;

        /**
         * 策略扫描周期(天)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanCycle = null;

        /**
         * 定期检测时间, 该时间下发扫描
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanAt = null;

        /**
         * 扫描范围是否全部服务器, 1:是  0:否, 为1则为全部专业版主机
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * 云服务器类型：
cvm：腾讯云服务器
bm：裸金属
ecm：边缘计算主机
lh: 轻量应用服务器
ohter: 混合云机器
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 主机地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 用户该策略下的所有主机id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Quuids = null;

        /**
         * 用户该策略下所有的基线id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.CategoryIds = null;

        /**
         * 1 表示扫描过, 0没扫描过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IfScanned = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PassRate = 'PassRate' in params ? params.PassRate : null;
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;
        this.ScanCycle = 'ScanCycle' in params ? params.ScanCycle : null;
        this.ScanAt = 'ScanAt' in params ? params.ScanAt : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Quuids = 'Quuids' in params ? params.Quuids : null;
        this.CategoryIds = 'CategoryIds' in params ? params.CategoryIds : null;
        this.IfScanned = 'IfScanned' in params ? params.IfScanned : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaselineList请求参数结构体
 * @class
 */
class DescribeBaselineListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页参数 最大100条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>StrategyId- Uint64 - 基线策略id</li>
<li>Status - Uint64 - 处理状态1已通过 0未通过</li>
<li>Level - Uint64[] - 处理状态1已通过 0未通过</li>BaselineName 
<li>BaselineName  - String - 基线名称</li>
<li>Quuid- String - 主机quuid</li>
<li>Uuid- String - 主机uuid</li>
         * @type {Array.<Filters> || null}
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
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeBaselineTop请求参数结构体
 * @class
 */
class DescribeBaselineTopRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动态top值
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 策略id
         * @type {number || null}
         */
        this.StrategyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Top = 'Top' in params ? params.Top : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;

    }
}

/**
 * DescribeAssetAppProcessList请求参数结构体
 * @class
 */
class DescribeAssetAppProcessListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * App名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 需要返回的数量，默认为10，最大值为100
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
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。

* 最多只能有5个Filter
* 同一个Filter存在多个Values，Values值数量最多不能超过5个。

 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤键的名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 一个或者多个过滤值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 模糊搜索
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
 * DescribeAccountStatistics请求参数结构体
 * @class
 */
class DescribeAccountStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为10，最大值为100。
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
<li>Username - String - 是否必填：否 - 帐号用户名</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * ExportBruteAttacks返回参数结构体
 * @class
 */
class ExportBruteAttacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出文件下载链接地址。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 导出任务ID
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全管家列表信息
 * @class
 */
class SecurityButlerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 订单id
         * @type {number || null}
         */
        this.OrderId = null;

        /**
         * cvm id
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 服务状态 0-服务中,1-已到期 2已销毁
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 服务开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 服务结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 主机Ip
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 主机 uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 主机风险数
         * @type {number || null}
         */
        this.RiskCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.RiskCount = 'RiskCount' in params ? params.RiskCount : null;

    }
}

/**
 * DescribeSaveOrUpdateWarnings请求参数结构体
 * @class
 */
class DescribeSaveOrUpdateWarningsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警设置的修改内容
         * @type {Array.<WarningObject> || null}
         */
        this.WarningObjects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WarningObjects) {
            this.WarningObjects = new Array();
            for (let z in params.WarningObjects) {
                let obj = new WarningObject();
                obj.deserialize(params.WarningObjects[z]);
                this.WarningObjects.push(obj);
            }
        }

    }
}

/**
 * DescribeAssetProcessInfoList返回参数结构体
 * @class
 */
class DescribeAssetProcessInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetProcessBaseInfo> || null}
         */
        this.Process = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Process) {
            this.Process = new Array();
            for (let z in params.Process) {
                let obj = new AssetProcessBaseInfo();
                obj.deserialize(params.Process[z]);
                this.Process.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 进程数据统计数据。
 * @class
 */
class ProcessStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进程名。
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 主机数量。
         * @type {number || null}
         */
        this.MachineNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.MachineNum = 'MachineNum' in params ? params.MachineNum : null;

    }
}

/**
 * DescribeScanSchedule返回参数结构体
 * @class
 */
class DescribeScanScheduleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Schedule = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Schedule = 'Schedule' in params ? params.Schedule : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 基线详情
 * @class
 */
class BaselineDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基线描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 危害等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * package名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 父级id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ParentId = null;

        /**
         * 基线名
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
        this.Description = 'Description' in params ? params.Description : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * ModifyWebPageProtectDir返回参数结构体
 * @class
 */
class ModifyWebPageProtectDirResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetWebAppList请求参数结构体
 * @class
 */
class DescribeAssetWebAppListRequest extends  AbstractModel {
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Name - String - 是否必填：否 - 应用名</li>
<li>Domain - String - 是否必填：否 - 站点域名</li>
<li>Type - int - 是否必填：否 - 服务类型：
0：全部
1:Tomcat
2:Apache
3:Nginx
4:WebLogic
5:Websphere
6:JBoss
7:Jetty
8:IHS
9:Tengine</li>
<li>OsType - String - 是否必填：否 - windows/linux</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序方式，asc升序 或 desc降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 可选排序：PluginCount
         * @type {string || null}
         */
        this.By = null;

        /**
         * 查询指定Quuid主机的信息
         * @type {string || null}
         */
        this.Quuid = null;

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
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * 专家服务订单信息
 * @class
 */
class ExpertServiceOrderInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单id
         * @type {number || null}
         */
        this.OrderId = null;

        /**
         * 订单类型 1应急 2 旗舰重保 3 安全管家
         * @type {number || null}
         */
        this.InquireType = null;

        /**
         * 服务数量
         * @type {number || null}
         */
        this.InquireNum = null;

        /**
         * 服务开始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 服务结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 服务时长几个月
         * @type {number || null}
         */
        this.ServiceTime = null;

        /**
         * 订单状态 0 未启动 1 服务中 2已过期 3完成，4退费销毁
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
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.InquireType = 'InquireType' in params ? params.InquireType : null;
        this.InquireNum = 'InquireNum' in params ? params.InquireNum : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ServiceTime = 'ServiceTime' in params ? params.ServiceTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 帐号统计数据。
 * @class
 */
class AccountStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名。
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 主机数量。
         * @type {number || null}
         */
        this.MachineNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Username = 'Username' in params ? params.Username : null;
        this.MachineNum = 'MachineNum' in params ? params.MachineNum : null;

    }
}

/**
 * 资产管理账号key详情
 * @class
 */
class AssetUserKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公钥值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 公钥备注
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 加密方式
         * @type {string || null}
         */
        this.EncryptType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Value = 'Value' in params ? params.Value : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.EncryptType = 'EncryptType' in params ? params.EncryptType : null;

    }
}

/**
 * DescribeMachines返回参数结构体
 * @class
 */
class DescribeMachinesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机列表
         * @type {Array.<Machine> || null}
         */
        this.Machines = null;

        /**
         * 主机数量
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

        if (params.Machines) {
            this.Machines = new Array();
            for (let z in params.Machines) {
                let obj = new Machine();
                obj.deserialize(params.Machines[z]);
                this.Machines.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetWebLocationList请求参数结构体
 * @class
 */
class DescribeAssetWebLocationListRequest extends  AbstractModel {
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Name - String - 是否必填：否 - 域名</li>
<li>User - String - 是否必填：否 - 运行用户</li>
<li>Port - uint64 - 是否必填：否 - 站点端口</li>
<li>Proto - uint64 - 是否必填：否 - 站点协议：1:HTTP,2:HTTPS</li>
<li>ServiceType - uint64 - 是否必填：否 - 服务类型：
1:Tomcat
2：Apache
3:Nginx
4:WebLogic
5:Websphere
6:JBoss
7:WildFly
8:Jetty
9:IHS
10:Tengine</li>
<li>OsType - String - 是否必填：否 - windows/linux</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序方式，asc升序 或 desc降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 可选排序：PathCount
         * @type {string || null}
         */
        this.By = null;

        /**
         * 查询指定Quuid主机的信息
         * @type {string || null}
         */
        this.Quuid = null;

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
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * DescribeVulLevelCount请求参数结构体
 * @class
 */
class DescribeVulLevelCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1:web-cms 漏洞，2.应用漏洞 3:安全基线 4: Linux软件漏洞 5: windows系统漏洞 6:应急漏洞
         * @type {number || null}
         */
        this.VulCategory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulCategory = 'VulCategory' in params ? params.VulCategory : null;

    }
}

/**
 * DeleteWebPageEventLog请求参数结构体
 * @class
 */
class DeleteWebPageEventLogRequest extends  AbstractModel {
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
 * DescribeProVersionStatus请求参数结构体
 * @class
 */
class DescribeProVersionStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜客户端UUID、填写"all"表示所有主机。
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * DescribeBaselineList返回参数结构体
 * @class
 */
class DescribeBaselineListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基线信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BaselineInfo> || null}
         */
        this.BaselineList = null;

        /**
         * 分页查询记录总数
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

        if (params.BaselineList) {
            this.BaselineList = new Array();
            for (let z in params.BaselineList) {
                let obj = new BaselineInfo();
                obj.deserialize(params.BaselineList[z]);
                this.BaselineList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExpertServiceOrderList请求参数结构体
 * @class
 */
class DescribeExpertServiceOrderListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <li>InquireType- String - 是否必填：否 - 订单类型过滤，</li>
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 分页条数 最大100条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页步长
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ExportVulEffectHostList返回参数结构体
 * @class
 */
class ExportVulEffectHostListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已废弃
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 导出任务Id , 可通过ExportTasks 接口下载
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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVulTop请求参数结构体
 * @class
 */
class DescribeVulTopRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞风险服务器top，1-100
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 1:web-cms 漏洞，2.应用漏洞 3:安全基线 4: Linux软件漏洞 5: windows系统漏洞 6:应急漏洞
         * @type {number || null}
         */
        this.VulCategory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Top = 'Top' in params ? params.Top : null;
        this.VulCategory = 'VulCategory' in params ? params.VulCategory : null;

    }
}

/**
 * DescribeMachineInfo请求参数结构体
 * @class
 */
class DescribeMachineInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜客户端唯一Uuid。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Quuid , Uuid 必填一项
         * @type {string || null}
         */
        this.Quuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * 快速搜索模板
 * @class
 */
class SearchTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检索名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 检索索引类型
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * 检索语句
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * 时间范围
         * @type {string || null}
         */
        this.TimeRange = null;

        /**
         * 转换的检索语句内容
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 检索方式。输入框检索：standard,过滤，检索：simple
         * @type {string || null}
         */
        this.Flag = null;

        /**
         * 展示数据
         * @type {string || null}
         */
        this.DisplayData = null;

        /**
         * 规则ID
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
        this.Name = 'Name' in params ? params.Name : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.TimeRange = 'TimeRange' in params ? params.TimeRange : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.DisplayData = 'DisplayData' in params ? params.DisplayData : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeGeneralStat返回参数结构体
 * @class
 */
class DescribeGeneralStatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云主机总数
         * @type {number || null}
         */
        this.MachinesAll = null;

        /**
         * 云主机没有安装主机安全客户端的总数
         * @type {number || null}
         */
        this.MachinesUninstalled = null;

        /**
         * 主机安全客户端总数的总数
         * @type {number || null}
         */
        this.AgentsAll = null;

        /**
         * 主机安全客户端在线的总数
         * @type {number || null}
         */
        this.AgentsOnline = null;

        /**
         * 主机安全客户端 离线+关机 的总数
         * @type {number || null}
         */
        this.AgentsOffline = null;

        /**
         * 主机安全客户端专业版的总数
         * @type {number || null}
         */
        this.AgentsPro = null;

        /**
         * 主机安全客户端基础版的总数
         * @type {number || null}
         */
        this.AgentsBasic = null;

        /**
         * 7天内到期的预付费专业版总数
         * @type {number || null}
         */
        this.AgentsProExpireWithInSevenDays = null;

        /**
         * 风险主机总数
         * @type {number || null}
         */
        this.RiskMachine = null;

        /**
         * 已关机总数
         * @type {number || null}
         */
        this.Shutdown = null;

        /**
         * 已离线总数
         * @type {number || null}
         */
        this.Offline = null;

        /**
         * 旗舰版主机数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlagshipMachineCnt = null;

        /**
         * 保护天数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProtectDays = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachinesAll = 'MachinesAll' in params ? params.MachinesAll : null;
        this.MachinesUninstalled = 'MachinesUninstalled' in params ? params.MachinesUninstalled : null;
        this.AgentsAll = 'AgentsAll' in params ? params.AgentsAll : null;
        this.AgentsOnline = 'AgentsOnline' in params ? params.AgentsOnline : null;
        this.AgentsOffline = 'AgentsOffline' in params ? params.AgentsOffline : null;
        this.AgentsPro = 'AgentsPro' in params ? params.AgentsPro : null;
        this.AgentsBasic = 'AgentsBasic' in params ? params.AgentsBasic : null;
        this.AgentsProExpireWithInSevenDays = 'AgentsProExpireWithInSevenDays' in params ? params.AgentsProExpireWithInSevenDays : null;
        this.RiskMachine = 'RiskMachine' in params ? params.RiskMachine : null;
        this.Shutdown = 'Shutdown' in params ? params.Shutdown : null;
        this.Offline = 'Offline' in params ? params.Offline : null;
        this.FlagshipMachineCnt = 'FlagshipMachineCnt' in params ? params.FlagshipMachineCnt : null;
        this.ProtectDays = 'ProtectDays' in params ? params.ProtectDays : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EditTags返回参数结构体
 * @class
 */
class EditTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMachineTag返回参数结构体
 * @class
 */
class DeleteMachineTagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityEventsCnt返回参数结构体
 * @class
 */
class DescribeSecurityEventsCntResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马文件相关风险事件
         * @type {SecurityEventInfo || null}
         */
        this.Malware = null;

        /**
         * 登录审计相关风险事件
         * @type {SecurityEventInfo || null}
         */
        this.HostLogin = null;

        /**
         * 密码破解相关风险事件
         * @type {SecurityEventInfo || null}
         */
        this.BruteAttack = null;

        /**
         * 恶意请求相关风险事件
         * @type {SecurityEventInfo || null}
         */
        this.RiskDns = null;

        /**
         * 高危命令相关风险事件
         * @type {SecurityEventInfo || null}
         */
        this.Bash = null;

        /**
         * 本地提权相关风险事件
         * @type {SecurityEventInfo || null}
         */
        this.PrivilegeRules = null;

        /**
         * 反弹Shell相关风险事件
         * @type {SecurityEventInfo || null}
         */
        this.ReverseShell = null;

        /**
         * 应用漏洞风险事件
         * @type {SecurityEventInfo || null}
         */
        this.SysVul = null;

        /**
         * Web应用漏洞相关风险事件
         * @type {SecurityEventInfo || null}
         */
        this.WebVul = null;

        /**
         * 应急漏洞相关风险事件
         * @type {SecurityEventInfo || null}
         */
        this.EmergencyVul = null;

        /**
         * 安全基线相关风险事件
         * @type {SecurityEventInfo || null}
         */
        this.BaseLine = null;

        /**
         * 攻击检测相关风险事件
         * @type {SecurityEventInfo || null}
         */
        this.AttackLogs = null;

        /**
         * 受影响机器数
         * @type {number || null}
         */
        this.EffectMachineCount = null;

        /**
         * 所有事件总数
         * @type {number || null}
         */
        this.EventsCount = null;

        /**
         * window 系统漏洞事件总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SecurityEventInfo || null}
         */
        this.WindowVul = null;

        /**
         * linux系统漏洞事件总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SecurityEventInfo || null}
         */
        this.LinuxVul = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Malware) {
            let obj = new SecurityEventInfo();
            obj.deserialize(params.Malware)
            this.Malware = obj;
        }

        if (params.HostLogin) {
            let obj = new SecurityEventInfo();
            obj.deserialize(params.HostLogin)
            this.HostLogin = obj;
        }

        if (params.BruteAttack) {
            let obj = new SecurityEventInfo();
            obj.deserialize(params.BruteAttack)
            this.BruteAttack = obj;
        }

        if (params.RiskDns) {
            let obj = new SecurityEventInfo();
            obj.deserialize(params.RiskDns)
            this.RiskDns = obj;
        }

        if (params.Bash) {
            let obj = new SecurityEventInfo();
            obj.deserialize(params.Bash)
            this.Bash = obj;
        }

        if (params.PrivilegeRules) {
            let obj = new SecurityEventInfo();
            obj.deserialize(params.PrivilegeRules)
            this.PrivilegeRules = obj;
        }

        if (params.ReverseShell) {
            let obj = new SecurityEventInfo();
            obj.deserialize(params.ReverseShell)
            this.ReverseShell = obj;
        }

        if (params.SysVul) {
            let obj = new SecurityEventInfo();
            obj.deserialize(params.SysVul)
            this.SysVul = obj;
        }

        if (params.WebVul) {
            let obj = new SecurityEventInfo();
            obj.deserialize(params.WebVul)
            this.WebVul = obj;
        }

        if (params.EmergencyVul) {
            let obj = new SecurityEventInfo();
            obj.deserialize(params.EmergencyVul)
            this.EmergencyVul = obj;
        }

        if (params.BaseLine) {
            let obj = new SecurityEventInfo();
            obj.deserialize(params.BaseLine)
            this.BaseLine = obj;
        }

        if (params.AttackLogs) {
            let obj = new SecurityEventInfo();
            obj.deserialize(params.AttackLogs)
            this.AttackLogs = obj;
        }
        this.EffectMachineCount = 'EffectMachineCount' in params ? params.EffectMachineCount : null;
        this.EventsCount = 'EventsCount' in params ? params.EventsCount : null;

        if (params.WindowVul) {
            let obj = new SecurityEventInfo();
            obj.deserialize(params.WindowVul)
            this.WindowVul = obj;
        }

        if (params.LinuxVul) {
            let obj = new SecurityEventInfo();
            obj.deserialize(params.LinuxVul)
            this.LinuxVul = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 告警设置列表
 * @class
 */
class WarningInfoObj extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件告警类型；1：离线，2：木马，3：异常登录，4：爆破，5：漏洞（已拆分为9-12四种类型）6：高危命令，7：反弹sell，8：本地提权，9：应用漏洞，10：web-cms漏洞，11：应急漏洞，12：安全基线 ,13: 防篡改，14：恶意请求，15: 网络攻击，16：Windows系统漏洞，17：Linux软件漏洞，18：核心文件监控告警，19：客户端卸载告警。20：客户端离线告警
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 1: 关闭告警 0: 开启告警
         * @type {number || null}
         */
        this.DisablePhoneWarning = null;

        /**
         * 开始时间，格式: HH:mm
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间，格式: HH:mm
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 时区信息
         * @type {string || null}
         */
        this.TimeZone = null;

        /**
         * 漏洞等级控制位（对应DB的十进制存储）
         * @type {number || null}
         */
        this.ControlBit = null;

        /**
         * 漏洞等级控制位二进制，每一位对应页面漏洞等级的开启关闭：低中高（0:关闭；1：开启），例如：101 → 同时勾选低+高
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
        this.DisablePhoneWarning = 'DisablePhoneWarning' in params ? params.DisablePhoneWarning : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TimeZone = 'TimeZone' in params ? params.TimeZone : null;
        this.ControlBit = 'ControlBit' in params ? params.ControlBit : null;
        this.ControlBits = 'ControlBits' in params ? params.ControlBits : null;

    }
}

/**
 * UpdateMachineTags请求参数结构体
 * @class
 */
class UpdateMachineTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器 Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 服务器地区 如: ap-guangzhou
         * @type {string || null}
         */
        this.MachineRegion = null;

        /**
         * 服务器类型(CVM|BM|ECM|LH|Other)
         * @type {string || null}
         */
        this.MachineArea = null;

        /**
         * 标签ID，该操作会覆盖原有的标签列表
         * @type {Array.<number> || null}
         */
        this.TagIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.MachineRegion = 'MachineRegion' in params ? params.MachineRegion : null;
        this.MachineArea = 'MachineArea' in params ? params.MachineArea : null;
        this.TagIds = 'TagIds' in params ? params.TagIds : null;

    }
}

/**
 * UpdateBaselineStrategy请求参数结构体
 * @class
 */
class UpdateBaselineStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略id
         * @type {number || null}
         */
        this.StrategyId = null;

        /**
         * 策略名称
         * @type {string || null}
         */
        this.StrategyName = null;

        /**
         * 检测周期
         * @type {number || null}
         */
        this.ScanCycle = null;

        /**
         * 定期检测时间，该时间下发扫描
         * @type {string || null}
         */
        this.ScanAt = null;

        /**
         * 该策略下选择的基线id数组
         * @type {Array.<string> || null}
         */
        this.CategoryIds = null;

        /**
         * 扫描范围是否全部服务器, 1:是  0:否, 为1则为全部专业版主机
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * 云主机类型：
cvm：腾讯云服务器
bm：裸金属
ecm：边缘计算主机
lh:轻量应用服务器
other:混合云机器
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 主机地域 ap-guangzhou
         * @type {string || null}
         */
        this.RegionCode = null;

        /**
         * 主机id数组
         * @type {Array.<string> || null}
         */
        this.Quuids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;
        this.ScanCycle = 'ScanCycle' in params ? params.ScanCycle : null;
        this.ScanAt = 'ScanAt' in params ? params.ScanAt : null;
        this.CategoryIds = 'CategoryIds' in params ? params.CategoryIds : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.RegionCode = 'RegionCode' in params ? params.RegionCode : null;
        this.Quuids = 'Quuids' in params ? params.Quuids : null;

    }
}

/**
 * DescribeHostLoginList返回参数结构体
 * @class
 */
class DescribeHostLoginListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 登录审计列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<HostLoginList> || null}
         */
        this.HostLoginList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.HostLoginList) {
            this.HostLoginList = new Array();
            for (let z in params.HostLoginList) {
                let obj = new HostLoginList();
                obj.deserialize(params.HostLoginList[z]);
                this.HostLoginList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaselineAnalysisData请求参数结构体
 * @class
 */
class DescribeBaselineAnalysisDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基线策略id
         * @type {number || null}
         */
        this.StrategyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;

    }
}

/**
 * 资源管理账号基本信息
 * @class
 */
class AssetPortBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机内网IP
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机外网IP
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 操作系统信息
         * @type {string || null}
         */
        this.OsInfo = null;

        /**
         * 主机业务组ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 主机标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MachineTag> || null}
         */
        this.Tag = null;

        /**
         * 进程名称
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 进程版本
         * @type {string || null}
         */
        this.ProcessVersion = null;

        /**
         * 进程路径
         * @type {string || null}
         */
        this.ProcessPath = null;

        /**
         * 进程ID
         * @type {string || null}
         */
        this.Pid = null;

        /**
         * 运行用户
         * @type {string || null}
         */
        this.User = null;

        /**
         * 启动时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 启动参数
         * @type {string || null}
         */
        this.Param = null;

        /**
         * 进程TTY
         * @type {string || null}
         */
        this.Teletype = null;

        /**
         * 端口
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 所属用户组
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 进程MD5
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 父进程ID
         * @type {string || null}
         */
        this.Ppid = null;

        /**
         * 父进程名称
         * @type {string || null}
         */
        this.ParentProcessName = null;

        /**
         * 端口协议
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 绑定IP
         * @type {string || null}
         */
        this.BindIp = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 数据更新时间
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
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.OsInfo = 'OsInfo' in params ? params.OsInfo : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new MachineTag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.ProcessVersion = 'ProcessVersion' in params ? params.ProcessVersion : null;
        this.ProcessPath = 'ProcessPath' in params ? params.ProcessPath : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.User = 'User' in params ? params.User : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Param = 'Param' in params ? params.Param : null;
        this.Teletype = 'Teletype' in params ? params.Teletype : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.Ppid = 'Ppid' in params ? params.Ppid : null;
        this.ParentProcessName = 'ParentProcessName' in params ? params.ParentProcessName : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.BindIp = 'BindIp' in params ? params.BindIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeAssetWebLocationInfo请求参数结构体
 * @class
 */
class DescribeAssetWebLocationInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器Quuid
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * 服务器Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 站点Id
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
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeAssetInitServiceList返回参数结构体
 * @class
 */
class DescribeAssetInitServiceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetInitServiceBaseInfo> || null}
         */
        this.Services = null;

        /**
         * 总数量
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

        if (params.Services) {
            this.Services = new Array();
            for (let z in params.Services) {
                let obj = new AssetInitServiceBaseInfo();
                obj.deserialize(params.Services[z]);
                this.Services.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetWebFrameList返回参数结构体
 * @class
 */
class DescribeAssetWebFrameListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetWebFrameBaseInfo> || null}
         */
        this.WebFrames = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.WebFrames) {
            this.WebFrames = new Array();
            for (let z in params.WebFrames) {
                let obj = new AssetWebFrameBaseInfo();
                obj.deserialize(params.WebFrames[z]);
                this.WebFrames.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetUserList请求参数结构体
 * @class
 */
class DescribeAssetUserListRequest extends  AbstractModel {
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
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
<li>Name - String - 是否必填：否 - 账户名（模糊匹配）</li>
<li>NameStrict - String - 是否必填：否 - 账户名（严格匹配）</li>
<li>Uid - uint64 - 是否必填：否 - Uid</li>
<li>Guid - uint64 - 是否必填：否 - Guid</li>
<li>LoginTimeStart - String - 是否必填：否 - 开始时间，如：2021-01-11</li>
<li>LoginTimeEnd - String - 是否必填：否 - 结束时间，如：2021-01-11</li>
<li>LoginType - uint64 - 是否必填：否 - 0-不可登录；1-只允许key登录；2只允许密码登录；3-允许key和密码 仅linux</li>
<li>OsType - String - 是否必填：否 - windows或linux</li>
<li>Status - uint64 - 是否必填：否 - 账号状态：0-禁用；1-启用</li>
<li>UserType - uint64 - 是否必填：否 - 账号类型：0访客用户，1标准用户，2管理员用户 仅windows</li>
<li>IsDomain - uint64 - 是否必填：否 - 是否域账号：0 不是，1是 仅windows
<li>IsRoot - uint64 - 是否必填：否 - 是否Root权限：0 不是，1是 仅linux
<li>IsSudo - uint64 - 是否必填：否 - 是否Sudo权限：0 不是，1是 仅linux</li>
<li>IsSshLogin - uint64 - 是否必填：否 - 是否ssh登录：0 不是，1是 仅linux</li>
<li>ShellLoginStatus - uint64 - 是否必填：否 - 是否shell登录性，0不是；1是 仅linux</li>
<li>PasswordStatus - uint64 - 是否必填：否 - 密码状态：1正常 2即将过期 3已过期 4已锁定 仅linux</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序方式，asc升序 或 desc降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 可选排序：
LoginTime
PasswordChangeTime
PasswordDuaTime
PasswordLockDays
         * @type {string || null}
         */
        this.By = null;

        /**
         * 查询指定Quuid主机的信息
         * @type {string || null}
         */
        this.Quuid = null;

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
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * DeleteBaselineStrategy请求参数结构体
 * @class
 */
class DeleteBaselineStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基线策略id
         * @type {number || null}
         */
        this.StrategyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;

    }
}

/**
 * DescribeAssetSystemPackageList请求参数结构体
 * @class
 */
class DescribeAssetSystemPackageListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 主机Quuid
         * @type {string || null}
         */
        this.Quuid = null;

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
<li>Name - String - 是否必填：否 - 包 名</li>
<li>StartTime - String - 是否必填：否 - 安装开始时间</li>
<li>EndTime - String - 是否必填：否 - 安装开始时间</li>
<li>Type - int - 是否必填：否 - 安装包类型：
1:rmp
2:dpkg
3:java
4:system</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序方式，asc-升序 或 desc-降序。默认：desc-降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序方式可选：InstallTime 安装时间
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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * 服务器标签信息
 * @class
 */
class MachineTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关联标签ID
         * @type {number || null}
         */
        this.Rid = null;

        /**
         * 标签名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 标签ID
         * @type {number || null}
         */
        this.TagId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Rid = 'Rid' in params ? params.Rid : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TagId = 'TagId' in params ? params.TagId : null;

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 * @class
 */
class Filters extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤键的名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 一个或者多个过滤值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否模糊匹配，前端框架会带上，可以不管
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
 * DescribeAssetWebServiceInfoList请求参数结构体
 * @class
 */
class DescribeAssetWebServiceInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要返回的数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
<li>IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选</li>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>User- string - 是否必填：否 - 运行用户</li>
<li>Name- string - 是否必填：否 - Web服务名：
1:Tomcat
2:Apache
3:Nginx
4:WebLogic
5:Websphere
6:JBoss
7:WildFly
8:Jetty
9:IHS
10:Tengine</li>
<li>OsType- string - 是否必填：否 - Windows/linux</li>
<li>Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )</li>
         * @type {Array.<AssetFilters> || null}
         */
        this.Filters = null;

        /**
         * 排序方式，asc升序 或 desc降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 可选排序：ProcessCount
         * @type {string || null}
         */
        this.By = null;

        /**
         * 查询指定Quuid主机的信息
         * @type {string || null}
         */
        this.Quuid = null;

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
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * CreateSearchLog请求参数结构体
 * @class
 */
class CreateSearchLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索内容
         * @type {string || null}
         */
        this.SearchContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SearchContent = 'SearchContent' in params ? params.SearchContent : null;

    }
}

/**
 * DescribeSearchTemplates请求参数结构体
 * @class
 */
class DescribeSearchTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为10，最大值为100。
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CancelIgnoreVul请求参数结构体
 * @class
 */
class CancelIgnoreVulRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞事件id串，多个用英文逗号分隔
         * @type {string || null}
         */
        this.EventIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventIds = 'EventIds' in params ? params.EventIds : null;

    }
}

module.exports = {
    ExportBashEventsRequest: ExportBashEventsRequest,
    DescribeSearchTemplatesResponse: DescribeSearchTemplatesResponse,
    ExportReverseShellEventsResponse: ExportReverseShellEventsResponse,
    DescribeBaselineTopResponse: DescribeBaselineTopResponse,
    DescribeAssetWebServiceInfoListResponse: DescribeAssetWebServiceInfoListResponse,
    DescribeAssetAppProcessListResponse: DescribeAssetAppProcessListResponse,
    ScanVulAgainRequest: ScanVulAgainRequest,
    DeleteBaselineStrategyResponse: DeleteBaselineStrategyResponse,
    ExportWebPageEventListResponse: ExportWebPageEventListResponse,
    DescribeUndoVulCountsResponse: DescribeUndoVulCountsResponse,
    DescribeBaselineScanScheduleResponse: DescribeBaselineScanScheduleResponse,
    MaliciousRequestWhiteListInfo: MaliciousRequestWhiteListInfo,
    DeleteBashEventsResponse: DeleteBashEventsResponse,
    DescribeAssetProcessInfoListRequest: DescribeAssetProcessInfoListRequest,
    ExportWebPageEventListRequest: ExportWebPageEventListRequest,
    AssetNetworkCardInfo: AssetNetworkCardInfo,
    DescribeAssetWebFrameListRequest: DescribeAssetWebFrameListRequest,
    DescribeMonthInspectionReportResponse: DescribeMonthInspectionReportResponse,
    DescribeSaveOrUpdateWarningsResponse: DescribeSaveOrUpdateWarningsResponse,
    DescribeBaselineHostTopResponse: DescribeBaselineHostTopResponse,
    DeleteBashRulesResponse: DeleteBashRulesResponse,
    ExportVulListResponse: ExportVulListResponse,
    DescribeHistoryServiceResponse: DescribeHistoryServiceResponse,
    BaselineEffectHost: BaselineEffectHost,
    ModifyWebPageProtectSettingResponse: ModifyWebPageProtectSettingResponse,
    DescribeVulInfoCvssResponse: DescribeVulInfoCvssResponse,
    DescribeBaselineStrategyDetailRequest: DescribeBaselineStrategyDetailRequest,
    MalWareList: MalWareList,
    DescribeAssetUserInfoResponse: DescribeAssetUserInfoResponse,
    Tag: Tag,
    ExportAttackLogsResponse: ExportAttackLogsResponse,
    DescribeBaselineEffectHostListResponse: DescribeBaselineEffectHostListResponse,
    TrustMalwaresRequest: TrustMalwaresRequest,
    ExportVulEffectHostListRequest: ExportVulEffectHostListRequest,
    DescribeBaselineBasicInfoRequest: DescribeBaselineBasicInfoRequest,
    DescribeProVersionInfoRequest: DescribeProVersionInfoRequest,
    DescribeVulCountByDatesRequest: DescribeVulCountByDatesRequest,
    DescribeBaselineStrategyListResponse: DescribeBaselineStrategyListResponse,
    DefendAttackLog: DefendAttackLog,
    DescribeAssetEnvListResponse: DescribeAssetEnvListResponse,
    DescribeAttackLogInfoResponse: DescribeAttackLogInfoResponse,
    DescribePrivilegeEventsResponse: DescribePrivilegeEventsResponse,
    DescribeOverviewStatisticsResponse: DescribeOverviewStatisticsResponse,
    DescribeMonthInspectionReportRequest: DescribeMonthInspectionReportRequest,
    ProtectNetInfo: ProtectNetInfo,
    ReverseShellRule: ReverseShellRule,
    DescribeBashRulesResponse: DescribeBashRulesResponse,
    DescribeAvailableExpertServiceDetailResponse: DescribeAvailableExpertServiceDetailResponse,
    ChangeRuleEventsIgnoreStatusRequest: ChangeRuleEventsIgnoreStatusRequest,
    DescribeWebPageEventListRequest: DescribeWebPageEventListRequest,
    ExportAssetCoreModuleListRequest: ExportAssetCoreModuleListRequest,
    DescribeComponentStatisticsResponse: DescribeComponentStatisticsResponse,
    DescribeMachineRegionsRequest: DescribeMachineRegionsRequest,
    DescribeSearchExportListResponse: DescribeSearchExportListResponse,
    BruteAttackRule: BruteAttackRule,
    DescribeAvailableExpertServiceDetailRequest: DescribeAvailableExpertServiceDetailRequest,
    DescribeServerRelatedDirInfoResponse: DescribeServerRelatedDirInfoResponse,
    DescribeUsualLoginPlacesResponse: DescribeUsualLoginPlacesResponse,
    IgnoreBaselineRule: IgnoreBaselineRule,
    DescribeBaselineBasicInfoResponse: DescribeBaselineBasicInfoResponse,
    EditBashRulesResponse: EditBashRulesResponse,
    LoginWhiteLists: LoginWhiteLists,
    ScanVulResponse: ScanVulResponse,
    DescribeOverviewStatisticsRequest: DescribeOverviewStatisticsRequest,
    OsName: OsName,
    DescribeTagMachinesRequest: DescribeTagMachinesRequest,
    AssetKeyVal: AssetKeyVal,
    ModifyAutoOpenProVersionConfigRequest: ModifyAutoOpenProVersionConfigRequest,
    DeletePrivilegeEventsRequest: DeletePrivilegeEventsRequest,
    ExportAttackLogsRequest: ExportAttackLogsRequest,
    IgnoreRuleEffectHostInfo: IgnoreRuleEffectHostInfo,
    DescribeBanModeRequest: DescribeBanModeRequest,
    DescribeSecurityEventStatRequest: DescribeSecurityEventStatRequest,
    DeleteSearchTemplateRequest: DeleteSearchTemplateRequest,
    EmergencyVul: EmergencyVul,
    ExportReverseShellEventsRequest: ExportReverseShellEventsRequest,
    DeleteLoginWhiteListResponse: DeleteLoginWhiteListResponse,
    DescribeAttackLogsResponse: DescribeAttackLogsResponse,
    DeleteMalwaresResponse: DeleteMalwaresResponse,
    DescribeAssetInitServiceListRequest: DescribeAssetInitServiceListRequest,
    ScanVulAgainResponse: ScanVulAgainResponse,
    VulTopInfo: VulTopInfo,
    SeparateMalwaresResponse: SeparateMalwaresResponse,
    DescribeTagsRequest: DescribeTagsRequest,
    DescribeRiskDnsListRequest: DescribeRiskDnsListRequest,
    DescribeStrategyExistRequest: DescribeStrategyExistRequest,
    DescribeSecurityDynamicsRequest: DescribeSecurityDynamicsRequest,
    CheckBashRuleParamsRequest: CheckBashRuleParamsRequest,
    DescribeIgnoreBaselineRuleRequest: DescribeIgnoreBaselineRuleRequest,
    ExportNonlocalLoginPlacesResponse: ExportNonlocalLoginPlacesResponse,
    DescribeAssetJarListResponse: DescribeAssetJarListResponse,
    ExportMaliciousRequestsRequest: ExportMaliciousRequestsRequest,
    HostLoginList: HostLoginList,
    DescribeWebPageProtectStatRequest: DescribeWebPageProtectStatRequest,
    AssetJarDetail: AssetJarDetail,
    ExportVulDetectionReportRequest: ExportVulDetectionReportRequest,
    ExportMalwaresResponse: ExportMalwaresResponse,
    DescribeScanVulSettingRequest: DescribeScanVulSettingRequest,
    DescribeESHitsRequest: DescribeESHitsRequest,
    DescribeAssetPlanTaskListResponse: DescribeAssetPlanTaskListResponse,
    DescribeBaselineRuleRequest: DescribeBaselineRuleRequest,
    DescribeHistoryAccountsRequest: DescribeHistoryAccountsRequest,
    DescribeAssetMachineDetailRequest: DescribeAssetMachineDetailRequest,
    CancelIgnoreVulResponse: CancelIgnoreVulResponse,
    IgnoreImpactedHostsResponse: IgnoreImpactedHostsResponse,
    DescribeAssetMachineDetailResponse: DescribeAssetMachineDetailResponse,
    DescribeStrategyExistResponse: DescribeStrategyExistResponse,
    DeleteReverseShellEventsRequest: DeleteReverseShellEventsRequest,
    DescribeBanRegionsRequest: DescribeBanRegionsRequest,
    DescribeServersAndRiskAndFirstInfoRequest: DescribeServersAndRiskAndFirstInfoRequest,
    DescribeAssetWebServiceProcessListResponse: DescribeAssetWebServiceProcessListResponse,
    IgnoreImpactedHostsRequest: IgnoreImpactedHostsRequest,
    AssetUserDetail: AssetUserDetail,
    DescribeMachinesRequest: DescribeMachinesRequest,
    DescribeVulEffectHostListRequest: DescribeVulEffectHostListRequest,
    AssetWebAppPluginInfo: AssetWebAppPluginInfo,
    DeletePrivilegeRulesRequest: DeletePrivilegeRulesRequest,
    DescribeMalwareInfoRequest: DescribeMalwareInfoRequest,
    DescribeVersionStatisticsRequest: DescribeVersionStatisticsRequest,
    ExportPrivilegeEventsResponse: ExportPrivilegeEventsResponse,
    UsualPlace: UsualPlace,
    DescribeReverseShellEventsRequest: DescribeReverseShellEventsRequest,
    ReverseShell: ReverseShell,
    DescribeAttackVulTypeListRequest: DescribeAttackVulTypeListRequest,
    DescribeLogStorageStatisticRequest: DescribeLogStorageStatisticRequest,
    DescribeAssetRecentMachineInfoRequest: DescribeAssetRecentMachineInfoRequest,
    CheckBashRuleParamsResponse: CheckBashRuleParamsResponse,
    ExportBaselineListRequest: ExportBaselineListRequest,
    DeleteProtectDirRequest: DeleteProtectDirRequest,
    ExportIgnoreBaselineRuleResponse: ExportIgnoreBaselineRuleResponse,
    BruteAttackRuleList: BruteAttackRuleList,
    DescribeBanStatusResponse: DescribeBanStatusResponse,
    DescribeVulListRequest: DescribeVulListRequest,
    VulDetailInfo: VulDetailInfo,
    DescribeServersAndRiskAndFirstInfoResponse: DescribeServersAndRiskAndFirstInfoResponse,
    AssetAppBaseInfo: AssetAppBaseInfo,
    DescribePrivilegeRulesRequest: DescribePrivilegeRulesRequest,
    MonthInspectionReport: MonthInspectionReport,
    DescribeAssetSystemPackageListResponse: DescribeAssetSystemPackageListResponse,
    DescribeAssetMachineListResponse: DescribeAssetMachineListResponse,
    DescribeWebPageGeneralizeRequest: DescribeWebPageGeneralizeRequest,
    AssetDiskPartitionInfo: AssetDiskPartitionInfo,
    ModifyWarningSettingRequest: ModifyWarningSettingRequest,
    DescribeMalwareRiskWarningRequest: DescribeMalwareRiskWarningRequest,
    DescribeAssetInfoRequest: DescribeAssetInfoRequest,
    DescribeVulTopResponse: DescribeVulTopResponse,
    UntrustMalwaresRequest: UntrustMalwaresRequest,
    DescribeAssetAppListRequest: DescribeAssetAppListRequest,
    UntrustMalwaresResponse: UntrustMalwaresResponse,
    DescribeExpertServiceListResponse: DescribeExpertServiceListResponse,
    DescribeAccountStatisticsResponse: DescribeAccountStatisticsResponse,
    DescribeSearchExportListRequest: DescribeSearchExportListRequest,
    ScanAssetRequest: ScanAssetRequest,
    DescribeBaselineRuleResponse: DescribeBaselineRuleResponse,
    DeleteMaliciousRequestsResponse: DeleteMaliciousRequestsResponse,
    DescribeESHitsResponse: DescribeESHitsResponse,
    ProtectDirRelatedServer: ProtectDirRelatedServer,
    ExportBruteAttacksRequest: ExportBruteAttacksRequest,
    DeleteMachineResponse: DeleteMachineResponse,
    ScanVulRequest: ScanVulRequest,
    RecoverMalwaresRequest: RecoverMalwaresRequest,
    TagMachine: TagMachine,
    DescribeAssetCoreModuleInfoResponse: DescribeAssetCoreModuleInfoResponse,
    DescribeAssetEnvListRequest: DescribeAssetEnvListRequest,
    StopNoticeBanTipsRequest: StopNoticeBanTipsRequest,
    DescribeScanMalwareScheduleRequest: DescribeScanMalwareScheduleRequest,
    AssetMachineBaseInfo: AssetMachineBaseInfo,
    DescribeBashEventsResponse: DescribeBashEventsResponse,
    UpdateMachineTagsResponse: UpdateMachineTagsResponse,
    DescribeBashEventsRequest: DescribeBashEventsRequest,
    DeleteMachineRequest: DeleteMachineRequest,
    DescribeAssetWebLocationListResponse: DescribeAssetWebLocationListResponse,
    DescribeAssetJarListRequest: DescribeAssetJarListRequest,
    PrivilegeEscalationProcess: PrivilegeEscalationProcess,
    DescribeProtectNetListResponse: DescribeProtectNetListResponse,
    DescribeESAggregationsResponse: DescribeESAggregationsResponse,
    AssetWebLocationInfo: AssetWebLocationInfo,
    ChangeRuleEventsIgnoreStatusResponse: ChangeRuleEventsIgnoreStatusResponse,
    AssetMachineDetail: AssetMachineDetail,
    AssetDatabaseBaseInfo: AssetDatabaseBaseInfo,
    DeletePrivilegeRulesResponse: DeletePrivilegeRulesResponse,
    CreateProtectServerRequest: CreateProtectServerRequest,
    DescribeMachineListRequest: DescribeMachineListRequest,
    CreateEmergencyVulScanResponse: CreateEmergencyVulScanResponse,
    DescribeAssetCoreModuleInfoRequest: DescribeAssetCoreModuleInfoRequest,
    DescribeIndexListResponse: DescribeIndexListResponse,
    ModifyWebPageProtectDirRequest: ModifyWebPageProtectDirRequest,
    DescribeWebPageGeneralizeResponse: DescribeWebPageGeneralizeResponse,
    DescribeBanWhiteListResponse: DescribeBanWhiteListResponse,
    EmergencyResponseInfo: EmergencyResponseInfo,
    DescribeOpenPortStatisticsResponse: DescribeOpenPortStatisticsResponse,
    DeleteAttackLogsResponse: DeleteAttackLogsResponse,
    SecurityDynamic: SecurityDynamic,
    DescribeMalWareListRequest: DescribeMalWareListRequest,
    DescribeProVersionInfoResponse: DescribeProVersionInfoResponse,
    DeleteTagsResponse: DeleteTagsResponse,
    DescribeSecurityEventsCntRequest: DescribeSecurityEventsCntRequest,
    AssetUserBaseInfo: AssetUserBaseInfo,
    DescribeMachineOsListResponse: DescribeMachineOsListResponse,
    ExportMaliciousRequestsResponse: ExportMaliciousRequestsResponse,
    EffectiveMachineInfo: EffectiveMachineInfo,
    DescribeVulCountByDatesResponse: DescribeVulCountByDatesResponse,
    DescribeTagMachinesResponse: DescribeTagMachinesResponse,
    DescribeIndexListRequest: DescribeIndexListRequest,
    ProtectDirInfo: ProtectDirInfo,
    DeleteBashRulesRequest: DeleteBashRulesRequest,
    CreateProtectServerResponse: CreateProtectServerResponse,
    DescribeExpertServiceListRequest: DescribeExpertServiceListRequest,
    DescribeBaselineHostTopRequest: DescribeBaselineHostTopRequest,
    ExportBaselineEffectHostListResponse: ExportBaselineEffectHostListResponse,
    DescribeVulHostTopResponse: DescribeVulHostTopResponse,
    TrustMalwaresResponse: TrustMalwaresResponse,
    DescribeHistoryServiceRequest: DescribeHistoryServiceRequest,
    DescribeWarningListRequest: DescribeWarningListRequest,
    SyncAssetScanRequest: SyncAssetScanRequest,
    VulEffectHostList: VulEffectHostList,
    DescribeServerRelatedDirInfoRequest: DescribeServerRelatedDirInfoRequest,
    DescribeESAggregationsRequest: DescribeESAggregationsRequest,
    BaselineHostTopList: BaselineHostTopList,
    DescribeReverseShellRulesResponse: DescribeReverseShellRulesResponse,
    DescribeBruteAttackListRequest: DescribeBruteAttackListRequest,
    DescribeVulListResponse: DescribeVulListResponse,
    DescribeUndoVulCountsRequest: DescribeUndoVulCountsRequest,
    ScanAssetResponse: ScanAssetResponse,
    Machine: Machine,
    ProtectMachineInfo: ProtectMachineInfo,
    DescribeMalwareFileRequest: DescribeMalwareFileRequest,
    DeleteMaliciousRequestsRequest: DeleteMaliciousRequestsRequest,
    DescribeBanWhiteListRequest: DescribeBanWhiteListRequest,
    DescribeWebPageServiceInfoResponse: DescribeWebPageServiceInfoResponse,
    DescribeUsualLoginPlacesRequest: DescribeUsualLoginPlacesRequest,
    ProtectEventLists: ProtectEventLists,
    SwitchBashRulesRequest: SwitchBashRulesRequest,
    DescribeProcessStatisticsRequest: DescribeProcessStatisticsRequest,
    DescribeAssetInfoResponse: DescribeAssetInfoResponse,
    MalwareRisk: MalwareRisk,
    ExportProtectDirListResponse: ExportProtectDirListResponse,
    AssetWebFrameBaseInfo: AssetWebFrameBaseInfo,
    ExportTasksRequest: ExportTasksRequest,
    DescribeAssetWebLocationInfoResponse: DescribeAssetWebLocationInfoResponse,
    ModifyBruteAttackRulesRequest: ModifyBruteAttackRulesRequest,
    ExportVulListRequest: ExportVulListRequest,
    DescribeBaselineScanScheduleRequest: DescribeBaselineScanScheduleRequest,
    DescribeEmergencyVulListResponse: DescribeEmergencyVulListResponse,
    DescribeAssetUserListResponse: DescribeAssetUserListResponse,
    StandardModeConfig: StandardModeConfig,
    BashEvent: BashEvent,
    DeleteMalwaresRequest: DeleteMalwaresRequest,
    RecoverMalwaresResponse: RecoverMalwaresResponse,
    RegionSet: RegionSet,
    DescribeReverseShellRulesRequest: DescribeReverseShellRulesRequest,
    DescribeScanVulSettingResponse: DescribeScanVulSettingResponse,
    AssetFilters: AssetFilters,
    DescribeAssetDatabaseInfoResponse: DescribeAssetDatabaseInfoResponse,
    SetBashEventsStatusRequest: SetBashEventsStatusRequest,
    AssetAppProcessInfo: AssetAppProcessInfo,
    DescribeBaselineStrategyListRequest: DescribeBaselineStrategyListRequest,
    RegionInfo: RegionInfo,
    DescribeAttackLogsRequest: DescribeAttackLogsRequest,
    ComponentStatistics: ComponentStatistics,
    ExportAssetWebServiceInfoListRequest: ExportAssetWebServiceInfoListRequest,
    SetBashEventsStatusResponse: SetBashEventsStatusResponse,
    ProtectMachine: ProtectMachine,
    DescribeAssetUserInfoRequest: DescribeAssetUserInfoRequest,
    DescribeProtectDirListRequest: DescribeProtectDirListRequest,
    ExportPrivilegeEventsRequest: ExportPrivilegeEventsRequest,
    DescribeMalwareFileResponse: DescribeMalwareFileResponse,
    TaskStatus: TaskStatus,
    DescribeRiskDnsListResponse: DescribeRiskDnsListResponse,
    DescribeAssetWebAppListResponse: DescribeAssetWebAppListResponse,
    ScanTaskDetails: ScanTaskDetails,
    AssetDatabaseDetail: AssetDatabaseDetail,
    DescribeScanTaskStatusRequest: DescribeScanTaskStatusRequest,
    ExportIgnoreBaselineRuleRequest: ExportIgnoreBaselineRuleRequest,
    DeleteMachineTagRequest: DeleteMachineTagRequest,
    DescribeBaselineDetailRequest: DescribeBaselineDetailRequest,
    ZoneInfo: ZoneInfo,
    BaselineRuleInfo: BaselineRuleInfo,
    DescribeExportMachinesResponse: DescribeExportMachinesResponse,
    DescribeScanTaskStatusResponse: DescribeScanTaskStatusResponse,
    DescribeProtectNetListRequest: DescribeProtectNetListRequest,
    DescribeWebPageEventListResponse: DescribeWebPageEventListResponse,
    DeleteProtectDirResponse: DeleteProtectDirResponse,
    ModifyBanStatusRequest: ModifyBanStatusRequest,
    DescribeWebPageServiceInfoRequest: DescribeWebPageServiceInfoRequest,
    DescribeLogStorageStatisticResponse: DescribeLogStorageStatisticResponse,
    DescribeEmergencyResponseListRequest: DescribeEmergencyResponseListRequest,
    DescribeScanStateResponse: DescribeScanStateResponse,
    EditTagsRequest: EditTagsRequest,
    DeleteReverseShellRulesRequest: DeleteReverseShellRulesRequest,
    DescribeBaselineEffectHostListRequest: DescribeBaselineEffectHostListRequest,
    ExportSecurityTrendsRequest: ExportSecurityTrendsRequest,
    DescribeAssetDatabaseInfoRequest: DescribeAssetDatabaseInfoRequest,
    DescribeOpenPortStatisticsRequest: DescribeOpenPortStatisticsRequest,
    ExportAssetWebServiceInfoListResponse: ExportAssetWebServiceInfoListResponse,
    ExportSecurityTrendsResponse: ExportSecurityTrendsResponse,
    ModifyMalwareTimingScanSettingsResponse: ModifyMalwareTimingScanSettingsResponse,
    DeleteNonlocalLoginPlacesResponse: DeleteNonlocalLoginPlacesResponse,
    ModifyWebPageProtectSettingRequest: ModifyWebPageProtectSettingRequest,
    DeleteMalwareScanTaskResponse: DeleteMalwareScanTaskResponse,
    DescribeBaselineDetailResponse: DescribeBaselineDetailResponse,
    ExportIgnoreRuleEffectHostListResponse: ExportIgnoreRuleEffectHostListResponse,
    DescribeAssetWebAppPluginListRequest: DescribeAssetWebAppPluginListRequest,
    DeletePrivilegeEventsResponse: DeletePrivilegeEventsResponse,
    DescribeMachineInfoResponse: DescribeMachineInfoResponse,
    VulHostTopInfo: VulHostTopInfo,
    DescribeImportMachineInfoRequest: DescribeImportMachineInfoRequest,
    VulLevelInfo: VulLevelInfo,
    ProtectStat: ProtectStat,
    DescribeVulEffectHostListResponse: DescribeVulEffectHostListResponse,
    SwitchBashRulesResponse: SwitchBashRulesResponse,
    DescribeSearchLogsRequest: DescribeSearchLogsRequest,
    DescribeAttackLogInfoRequest: DescribeAttackLogInfoRequest,
    ScanVulSettingResponse: ScanVulSettingResponse,
    DescribeAssetJarInfoResponse: DescribeAssetJarInfoResponse,
    DescribeVulInfoCvssRequest: DescribeVulInfoCvssRequest,
    DescribeComponentStatisticsRequest: DescribeComponentStatisticsRequest,
    DescribeMaliciousRequestWhiteListRequest: DescribeMaliciousRequestWhiteListRequest,
    ModifyBanStatusResponse: ModifyBanStatusResponse,
    DescribeLoginWhiteListResponse: DescribeLoginWhiteListResponse,
    StopNoticeBanTipsResponse: StopNoticeBanTipsResponse,
    DescribeScanMalwareScheduleResponse: DescribeScanMalwareScheduleResponse,
    AssetWebLocationBaseInfo: AssetWebLocationBaseInfo,
    DescribeMalwareTimingScanSettingRequest: DescribeMalwareTimingScanSettingRequest,
    BashRule: BashRule,
    CreateSearchLogResponse: CreateSearchLogResponse,
    DescribeSecurityTrendsResponse: DescribeSecurityTrendsResponse,
    AssetSystemPackageInfo: AssetSystemPackageInfo,
    DescribeEmergencyVulListRequest: DescribeEmergencyVulListRequest,
    DescribeSecurityDynamicsResponse: DescribeSecurityDynamicsResponse,
    DeleteReverseShellEventsResponse: DeleteReverseShellEventsResponse,
    AssetWebServiceBaseInfo: AssetWebServiceBaseInfo,
    DescribeProVersionStatusResponse: DescribeProVersionStatusResponse,
    DescribeScanTaskDetailsResponse: DescribeScanTaskDetailsResponse,
    DescribeGeneralStatRequest: DescribeGeneralStatRequest,
    UpdateBaselineStrategyResponse: UpdateBaselineStrategyResponse,
    AssetInitServiceBaseInfo: AssetInitServiceBaseInfo,
    DescribeVulHostTopRequest: DescribeVulHostTopRequest,
    DescribeIgnoreRuleEffectHostListRequest: DescribeIgnoreRuleEffectHostListRequest,
    ModifyWarningSettingResponse: ModifyWarningSettingResponse,
    LoginWhiteCombinedInfo: LoginWhiteCombinedInfo,
    DescribeMalwareInfoResponse: DescribeMalwareInfoResponse,
    DescribeAssetJarInfoRequest: DescribeAssetJarInfoRequest,
    DescribePrivilegeEventsRequest: DescribePrivilegeEventsRequest,
    BaselineInfo: BaselineInfo,
    DescribeVulHostCountScanTimeRequest: DescribeVulHostCountScanTimeRequest,
    ExportScanTaskDetailsResponse: ExportScanTaskDetailsResponse,
    ExportBashEventsResponse: ExportBashEventsResponse,
    EventStat: EventStat,
    DeleteLoginWhiteListRequest: DeleteLoginWhiteListRequest,
    DeleteWebPageEventLogResponse: DeleteWebPageEventLogResponse,
    DescribeVulLevelCountResponse: DescribeVulLevelCountResponse,
    DescribeVersionStatisticsResponse: DescribeVersionStatisticsResponse,
    DescribeBruteAttackRulesRequest: DescribeBruteAttackRulesRequest,
    DescribeProcessStatisticsResponse: DescribeProcessStatisticsResponse,
    ModifyBruteAttackRulesResponse: ModifyBruteAttackRulesResponse,
    DeleteNonlocalLoginPlacesRequest: DeleteNonlocalLoginPlacesRequest,
    DescribeAssetWebAppPluginListResponse: DescribeAssetWebAppPluginListResponse,
    DescribeTagsResponse: DescribeTagsResponse,
    BaselineEventLevelInfo: BaselineEventLevelInfo,
    DescribeLoginWhiteCombinedListRequest: DescribeLoginWhiteCombinedListRequest,
    Strategy: Strategy,
    DeleteSearchTemplateResponse: DeleteSearchTemplateResponse,
    DescribeBanRegionsResponse: DescribeBanRegionsResponse,
    DescribeEmergencyResponseListResponse: DescribeEmergencyResponseListResponse,
    ProtectHostConfig: ProtectHostConfig,
    AssetPlanTask: AssetPlanTask,
    HistoryAccount: HistoryAccount,
    DescribeAssetAppListResponse: DescribeAssetAppListResponse,
    ModifyWebPageProtectSwitchRequest: ModifyWebPageProtectSwitchRequest,
    CreateScanMalwareSettingRequest: CreateScanMalwareSettingRequest,
    DescribeMalwareTimingScanSettingResponse: DescribeMalwareTimingScanSettingResponse,
    DescribeHostLoginListRequest: DescribeHostLoginListRequest,
    SecurityTrend: SecurityTrend,
    DescribeAssetWebServiceProcessListRequest: DescribeAssetWebServiceProcessListRequest,
    PrivilegeRule: PrivilegeRule,
    ExportVulDetectionExcelRequest: ExportVulDetectionExcelRequest,
    CreateEmergencyVulScanRequest: CreateEmergencyVulScanRequest,
    DescribeProtectDirRelatedServerResponse: DescribeProtectDirRelatedServerResponse,
    ModifyAutoOpenProVersionConfigResponse: ModifyAutoOpenProVersionConfigResponse,
    ExportBaselineEffectHostListRequest: ExportBaselineEffectHostListRequest,
    AssetCoreModuleDetail: AssetCoreModuleDetail,
    DescribeBanStatusRequest: DescribeBanStatusRequest,
    DescribeAssetRecentMachineInfoResponse: DescribeAssetRecentMachineInfoResponse,
    DescribeMalWareListResponse: DescribeMalWareListResponse,
    DescribeAssetPortInfoListResponse: DescribeAssetPortInfoListResponse,
    DescribeProtectDirListResponse: DescribeProtectDirListResponse,
    DescribeMaliciousRequestWhiteListResponse: DescribeMaliciousRequestWhiteListResponse,
    DeleteBruteAttacksResponse: DeleteBruteAttacksResponse,
    ExportTasksResponse: ExportTasksResponse,
    DescribeIgnoreBaselineRuleResponse: DescribeIgnoreBaselineRuleResponse,
    DescribeMachineOsListRequest: DescribeMachineOsListRequest,
    DescribeMalwareRiskWarningResponse: DescribeMalwareRiskWarningResponse,
    DescribeBashRulesRequest: DescribeBashRulesRequest,
    BaselineBasicInfo: BaselineBasicInfo,
    DescribeBanModeResponse: DescribeBanModeResponse,
    DescribeImportMachineInfoResponse: DescribeImportMachineInfoResponse,
    DescribeSecurityEventStatResponse: DescribeSecurityEventStatResponse,
    DescribeAssetDatabaseListRequest: DescribeAssetDatabaseListRequest,
    ModifyWebPageProtectSwitchResponse: ModifyWebPageProtectSwitchResponse,
    DescribeAssetMachineListRequest: DescribeAssetMachineListRequest,
    CreateSearchTemplateResponse: CreateSearchTemplateResponse,
    DescribeAssetDatabaseListResponse: DescribeAssetDatabaseListResponse,
    ExportMalwaresRequest: ExportMalwaresRequest,
    ExportNonlocalLoginPlacesRequest: ExportNonlocalLoginPlacesRequest,
    SyncAssetScanResponse: SyncAssetScanResponse,
    AssetCoreModuleBaseInfo: AssetCoreModuleBaseInfo,
    CreateBaselineStrategyRequest: CreateBaselineStrategyRequest,
    DescribeSecurityTrendsRequest: DescribeSecurityTrendsRequest,
    DescribeAttackVulTypeListResponse: DescribeAttackVulTypeListResponse,
    DescribePrivilegeRulesResponse: DescribePrivilegeRulesResponse,
    DescribeReverseShellEventsResponse: DescribeReverseShellEventsResponse,
    BruteAttackInfo: BruteAttackInfo,
    DescribeWebPageProtectStatResponse: DescribeWebPageProtectStatResponse,
    DescribeAssetPortInfoListRequest: DescribeAssetPortInfoListRequest,
    VulLevelCountInfo: VulLevelCountInfo,
    DescribeExportMachinesRequest: DescribeExportMachinesRequest,
    CreateScanMalwareSettingResponse: CreateScanMalwareSettingResponse,
    WarningObject: WarningObject,
    RiskDnsList: RiskDnsList,
    DeleteMalwareScanTaskRequest: DeleteMalwareScanTaskRequest,
    DescribeIgnoreRuleEffectHostListResponse: DescribeIgnoreRuleEffectHostListResponse,
    ExportProtectDirListRequest: ExportProtectDirListRequest,
    CreateBaselineStrategyResponse: CreateBaselineStrategyResponse,
    ExportAssetCoreModuleListResponse: ExportAssetCoreModuleListResponse,
    DescribeHistoryAccountsResponse: DescribeHistoryAccountsResponse,
    DescribeLoginWhiteListRequest: DescribeLoginWhiteListRequest,
    OpenPortStatistics: OpenPortStatistics,
    ExportVulDetectionReportResponse: ExportVulDetectionReportResponse,
    DescribeScanScheduleRequest: DescribeScanScheduleRequest,
    EditBashRulesRequest: EditBashRulesRequest,
    DescribeBruteAttackListResponse: DescribeBruteAttackListResponse,
    ScanVulSettingRequest: ScanVulSettingRequest,
    ExportScanTaskDetailsRequest: ExportScanTaskDetailsRequest,
    ExportBaselineListResponse: ExportBaselineListResponse,
    DescribeBruteAttackRulesResponse: DescribeBruteAttackRulesResponse,
    ModifyBanModeResponse: ModifyBanModeResponse,
    BaselineRuleTopInfo: BaselineRuleTopInfo,
    AssetProcessBaseInfo: AssetProcessBaseInfo,
    DeleteBruteAttacksRequest: DeleteBruteAttacksRequest,
    DescribeAssetCoreModuleListResponse: DescribeAssetCoreModuleListResponse,
    DescribeLoginWhiteCombinedListResponse: DescribeLoginWhiteCombinedListResponse,
    ExportVulDetectionExcelResponse: ExportVulDetectionExcelResponse,
    DescribeWarningListResponse: DescribeWarningListResponse,
    CreateSearchTemplateRequest: CreateSearchTemplateRequest,
    DeleteTagsRequest: DeleteTagsRequest,
    DescribeScanStateRequest: DescribeScanStateRequest,
    ModifyMalwareTimingScanSettingsRequest: ModifyMalwareTimingScanSettingsRequest,
    AssetEnvBaseInfo: AssetEnvBaseInfo,
    DescribeMachineListResponse: DescribeMachineListResponse,
    MalwareInfo: MalwareInfo,
    Place: Place,
    DescribeExpertServiceOrderListResponse: DescribeExpertServiceOrderListResponse,
    DeleteReverseShellRulesResponse: DeleteReverseShellRulesResponse,
    DescribeAssetPlanTaskListRequest: DescribeAssetPlanTaskListRequest,
    DescribeScanTaskDetailsRequest: DescribeScanTaskDetailsRequest,
    DescribeProtectDirRelatedServerRequest: DescribeProtectDirRelatedServerRequest,
    DescribeSearchLogsResponse: DescribeSearchLogsResponse,
    SecurityEventInfo: SecurityEventInfo,
    DescribeBaselineAnalysisDataResponse: DescribeBaselineAnalysisDataResponse,
    ModifyBanModeRequest: ModifyBanModeRequest,
    BanWhiteListDetail: BanWhiteListDetail,
    DescribeMachineRegionsResponse: DescribeMachineRegionsResponse,
    AssetWebAppBaseInfo: AssetWebAppBaseInfo,
    AssetCoreModuleParam: AssetCoreModuleParam,
    DeleteBashEventsRequest: DeleteBashEventsRequest,
    AssetJarBaseInfo: AssetJarBaseInfo,
    SeparateMalwaresRequest: SeparateMalwaresRequest,
    VulInfoList: VulInfoList,
    ExportIgnoreRuleEffectHostListRequest: ExportIgnoreRuleEffectHostListRequest,
    DescribeVulHostCountScanTimeResponse: DescribeVulHostCountScanTimeResponse,
    DescribeAssetCoreModuleListRequest: DescribeAssetCoreModuleListRequest,
    DeleteAttackLogsRequest: DeleteAttackLogsRequest,
    DescribeBaselineStrategyDetailResponse: DescribeBaselineStrategyDetailResponse,
    DescribeBaselineListRequest: DescribeBaselineListRequest,
    DescribeBaselineTopRequest: DescribeBaselineTopRequest,
    DescribeAssetAppProcessListRequest: DescribeAssetAppProcessListRequest,
    Filter: Filter,
    DescribeAccountStatisticsRequest: DescribeAccountStatisticsRequest,
    ExportBruteAttacksResponse: ExportBruteAttacksResponse,
    SecurityButlerInfo: SecurityButlerInfo,
    DescribeSaveOrUpdateWarningsRequest: DescribeSaveOrUpdateWarningsRequest,
    DescribeAssetProcessInfoListResponse: DescribeAssetProcessInfoListResponse,
    ProcessStatistics: ProcessStatistics,
    DescribeScanScheduleResponse: DescribeScanScheduleResponse,
    BaselineDetail: BaselineDetail,
    ModifyWebPageProtectDirResponse: ModifyWebPageProtectDirResponse,
    DescribeAssetWebAppListRequest: DescribeAssetWebAppListRequest,
    ExpertServiceOrderInfo: ExpertServiceOrderInfo,
    AccountStatistics: AccountStatistics,
    AssetUserKeyInfo: AssetUserKeyInfo,
    DescribeMachinesResponse: DescribeMachinesResponse,
    DescribeAssetWebLocationListRequest: DescribeAssetWebLocationListRequest,
    DescribeVulLevelCountRequest: DescribeVulLevelCountRequest,
    DeleteWebPageEventLogRequest: DeleteWebPageEventLogRequest,
    DescribeProVersionStatusRequest: DescribeProVersionStatusRequest,
    DescribeBaselineListResponse: DescribeBaselineListResponse,
    DescribeExpertServiceOrderListRequest: DescribeExpertServiceOrderListRequest,
    ExportVulEffectHostListResponse: ExportVulEffectHostListResponse,
    DescribeVulTopRequest: DescribeVulTopRequest,
    DescribeMachineInfoRequest: DescribeMachineInfoRequest,
    SearchTemplate: SearchTemplate,
    DescribeGeneralStatResponse: DescribeGeneralStatResponse,
    EditTagsResponse: EditTagsResponse,
    DeleteMachineTagResponse: DeleteMachineTagResponse,
    DescribeSecurityEventsCntResponse: DescribeSecurityEventsCntResponse,
    WarningInfoObj: WarningInfoObj,
    UpdateMachineTagsRequest: UpdateMachineTagsRequest,
    UpdateBaselineStrategyRequest: UpdateBaselineStrategyRequest,
    DescribeHostLoginListResponse: DescribeHostLoginListResponse,
    DescribeBaselineAnalysisDataRequest: DescribeBaselineAnalysisDataRequest,
    AssetPortBaseInfo: AssetPortBaseInfo,
    DescribeAssetWebLocationInfoRequest: DescribeAssetWebLocationInfoRequest,
    DescribeAssetInitServiceListResponse: DescribeAssetInitServiceListResponse,
    DescribeAssetWebFrameListResponse: DescribeAssetWebFrameListResponse,
    DescribeAssetUserListRequest: DescribeAssetUserListRequest,
    DeleteBaselineStrategyRequest: DeleteBaselineStrategyRequest,
    DescribeAssetSystemPackageListRequest: DescribeAssetSystemPackageListRequest,
    MachineTag: MachineTag,
    Filters: Filters,
    DescribeAssetWebServiceInfoListRequest: DescribeAssetWebServiceInfoListRequest,
    CreateSearchLogRequest: CreateSearchLogRequest,
    DescribeSearchTemplatesRequest: DescribeSearchTemplatesRequest,
    CancelIgnoreVulRequest: CancelIgnoreVulRequest,

}
