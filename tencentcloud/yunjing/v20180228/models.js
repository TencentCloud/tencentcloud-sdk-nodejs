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
 * DescribeProcessTaskStatus返回参数结构体
 * @class
 */
class DescribeProcessTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态。
<li>COMPLETE：完成（此时可以调用DescribeProcesses接口获取实时进程列表）</li>
<li>AGENT_OFFLINE：云镜客户端离线</li>
<li>COLLECTING：进程获取中</li>
<li>FAILED：进程获取失败</li>
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
 * DescribeAlarmAttribute返回参数结构体
 * @class
 */
class DescribeAlarmAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防护软件离线告警状态：
<li>OPEN：告警已开启</li>
<li>CLOSE： 告警已关闭</li>
         * @type {string || null}
         */
        this.Offline = null;

        /**
         * 发现木马告警状态：
<li>OPEN：告警已开启</li>
<li>CLOSE： 告警已关闭</li>
         * @type {string || null}
         */
        this.Malware = null;

        /**
         * 发现异地登录告警状态：
<li>OPEN：告警已开启</li>
<li>CLOSE： 告警已关闭</li>
         * @type {string || null}
         */
        this.NonlocalLogin = null;

        /**
         * 被暴力破解成功告警状态：
<li>OPEN：告警已开启</li>
<li>CLOSE： 告警已关闭</li>
         * @type {string || null}
         */
        this.CrackSuccess = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offline = 'Offline' in params ? params.Offline : null;
        this.Malware = 'Malware' in params ? params.Malware : null;
        this.NonlocalLogin = 'NonlocalLogin' in params ? params.NonlocalLogin : null;
        this.CrackSuccess = 'CrackSuccess' in params ? params.CrackSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWeeklyReportBruteAttacks返回参数结构体
 * @class
 */
class DescribeWeeklyReportBruteAttacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专业周报密码破解数组。
         * @type {Array.<WeeklyReportBruteAttack> || null}
         */
        this.WeeklyReportBruteAttacks = null;

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

        if (params.WeeklyReportBruteAttacks) {
            this.WeeklyReportBruteAttacks = new Array();
            for (let z in params.WeeklyReportBruteAttacks) {
                let obj = new WeeklyReportBruteAttack();
                obj.deserialize(params.WeeklyReportBruteAttacks[z]);
                this.WeeklyReportBruteAttacks.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAgentVuls请求参数结构体
 * @class
 */
class DescribeAgentVulsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞类型。
<li>WEB: Web应用漏洞</li>
<li>SYSTEM：系统组件漏洞</li>
<li>BASELINE：安全基线</li>
         * @type {string || null}
         */
        this.VulType = null;

        /**
         * 客户端UUID。
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
<li>Status - String - 是否必填：否 - 状态筛选（UN_OPERATED: 待处理 | FIXED：已修复）
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
        this.VulType = 'VulType' in params ? params.VulType : null;
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
 * DescribeAccounts请求参数结构体
 * @class
 */
class DescribeAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜客户端唯一Uuid。Username和Uuid必填其一，使用Uuid表示，查询该主机下列表信息。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 云镜客户端唯一Uuid。Username和Uuid必填其一，使用Username表示，查询该用户名下列表信息。
         * @type {string || null}
         */
        this.Username = null;

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
<li>Privilege - String - 是否必填：否 - 帐号类型（ORDINARY: 普通帐号 | SUPPER: 超级管理员帐号）</li>
<li>MachineIp - String - 是否必填：否 - 主机内网IP</li>
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
        this.Username = 'Username' in params ? params.Username : null;
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
 * 专业版周报漏洞数据。
 * @class
 */
class WeeklyReportVul extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机内网IP。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 漏洞名称。
         * @type {string || null}
         */
        this.VulName = null;

        /**
         * 漏洞类型。
<li> WEB : WEB漏洞</li>
<li> SYSTEM :系统组件漏洞</li>
<li> BASELINE : 安全基线</li>
         * @type {string || null}
         */
        this.VulType = null;

        /**
         * 漏洞描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 漏洞状态。
<li> UN_OPERATED : 待处理</li>
<li> SCANING : 扫描中</li>
<li> FIXED : 已修复</li>
         * @type {string || null}
         */
        this.VulStatus = null;

        /**
         * 最后扫描时间。
         * @type {string || null}
         */
        this.LastScanTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.VulName = 'VulName' in params ? params.VulName : null;
        this.VulType = 'VulType' in params ? params.VulType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.VulStatus = 'VulStatus' in params ? params.VulStatus : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;

    }
}

/**
 * DescribeWeeklyReportBruteAttacks请求参数结构体
 * @class
 */
class DescribeWeeklyReportBruteAttacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专业周报开始时间。
         * @type {string || null}
         */
        this.BeginDate = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateUsualLoginPlaces请求参数结构体
 * @class
 */
class CreateUsualLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜客户端UUID数组。
         * @type {Array.<string> || null}
         */
        this.Uuids = null;

        /**
         * 登录地域信息数组。
         * @type {Array.<Place> || null}
         */
        this.Places = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuids = 'Uuids' in params ? params.Uuids : null;

        if (params.Places) {
            this.Places = new Array();
            for (let z in params.Places) {
                let obj = new Place();
                obj.deserialize(params.Places[z]);
                this.Places.push(obj);
            }
        }

    }
}

/**
 * DescribeProcessTaskStatus请求参数结构体
 * @class
 */
class DescribeProcessTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜客户端唯一Uuid。
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
 * ModifyAlarmAttribute请求参数结构体
 * @class
 */
class ModifyAlarmAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警项目。
<li>Offline：防护软件离线</li>
<li>Malware：发现木马文件</li>
<li>NonlocalLogin：发现异地登录行为</li>
<li>CrackSuccess：被暴力破解成功</li>
         * @type {string || null}
         */
        this.Attribute = null;

        /**
         * 告警项目属性。
<li>CLOSE：关闭</li>
<li>OPEN：打开</li>
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
        this.Attribute = 'Attribute' in params ? params.Attribute : null;
        this.Value = 'Value' in params ? params.Value : null;

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
<li>WEB：web组件</li>
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
 * InquiryPriceOpenProVersionPrepaid请求参数结构体
 * @class
 */
class InquiryPriceOpenProVersionPrepaidRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预付费模式(包年包月)参数设置。
         * @type {ChargePrepaid || null}
         */
        this.ChargePrepaid = null;

        /**
         * 需要开通专业版机器列表数组。
         * @type {Array.<ProVersionMachine> || null}
         */
        this.Machines = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ChargePrepaid) {
            let obj = new ChargePrepaid();
            obj.deserialize(params.ChargePrepaid)
            this.ChargePrepaid = obj;
        }

        if (params.Machines) {
            this.Machines = new Array();
            for (let z in params.Machines) {
                let obj = new ProVersionMachine();
                obj.deserialize(params.Machines[z]);
                this.Machines.push(obj);
            }
        }

    }
}

/**
 * DescribeBruteAttacks请求参数结构体
 * @class
 */
class DescribeBruteAttacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端唯一Uuid。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。
<li>Keywords - String - 是否必填：否 -  查询关键字</li>
<li>Status - String - 是否必填：否 -  查询状态（FAILED：破解失败 |SUCCESS：破解成功）</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * 帐号列表信息数据。
 * @class
 */
class Account extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 云镜客户端唯一Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 主机内网IP。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机名称。
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 帐号名。
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 帐号所属组。
         * @type {string || null}
         */
        this.Groups = null;

        /**
         * 帐号类型。
<li>ORDINARY：普通帐号</li>
<li>SUPPER：超级管理员帐号</li>
         * @type {string || null}
         */
        this.Privilege = null;

        /**
         * 帐号创建时间。
         * @type {string || null}
         */
        this.AccountCreateTime = null;

        /**
         * 帐号最后登录时间。
         * @type {string || null}
         */
        this.LastLoginTime = null;

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
        this.Groups = 'Groups' in params ? params.Groups : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.AccountCreateTime = 'AccountCreateTime' in params ? params.AccountCreateTime : null;
        this.LastLoginTime = 'LastLoginTime' in params ? params.LastLoginTime : null;

    }
}

/**
 * RescanImpactedHost请求参数结构体
 * @class
 */
class RescanImpactedHostRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞ID。
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
 * 暴力破解列表
 * @class
 */
class BruteAttack extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 主机IP。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 破解事件状态
<li>BRUTEATTACK_FAIL_ACCOUNT： 暴力破解事件-失败(存在帐号)  </li>
<li>BRUTEATTACK_FAIL_NOACCOUNT：暴力破解事件-失败(帐号不存在)</li>
<li>BRUTEATTACK_SUCCESS：暴力破解事件-成功</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 用户名称。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 城市ID。
         * @type {number || null}
         */
        this.City = null;

        /**
         * 国家ID。
         * @type {number || null}
         */
        this.Country = null;

        /**
         * 省份ID。
         * @type {number || null}
         */
        this.Province = null;

        /**
         * 来源IP。
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * 尝试破解次数。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 发生时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 主机名称。
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 云镜客户端唯一标识UUID。
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
        this.Id = 'Id' in params ? params.Id : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.City = 'City' in params ? params.City : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * DescribeOpenPorts请求参数结构体
 * @class
 */
class DescribeOpenPortsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜客户端唯一Uuid。Port和Uuid必填其一，使用Uuid表示，查询该主机列表信息。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 开放端口号。Port和Uuid必填其一，使用Port表示查询该端口的列表信息。
         * @type {number || null}
         */
        this.Port = null;

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
<li>ProcessName - String - 是否必填：否 - 进程名</li>
<li>MachineIp - String - 是否必填：否 - 主机内网IP</li>
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
        this.Port = 'Port' in params ? params.Port : null;
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
 * DescribeImpactedHosts请求参数结构体
 * @class
 */
class DescribeImpactedHostsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞种类ID。
         * @type {number || null}
         */
        this.VulId = null;

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
<li>Status - String - 是否必填：否 - 状态筛选（UN_OPERATED：待处理 | FIXED：已修复）</li>
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
 * DescribeMaliciousRequests返回参数结构体
 * @class
 */
class DescribeMaliciousRequestsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 恶意请求记录数组。
         * @type {Array.<MaliciousRequest> || null}
         */
        this.MaliciousRequests = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.MaliciousRequests) {
            this.MaliciousRequests = new Array();
            for (let z in params.MaliciousRequests) {
                let obj = new MaliciousRequest();
                obj.deserialize(params.MaliciousRequests[z]);
                this.MaliciousRequests.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 异地登录
 * @class
 */
class NonLocalLoginPlace extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 主机IP。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 登录状态
<li>NON_LOCAL_LOGIN：异地登录</li>
<li>NORMAL_LOGIN：正常登录</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 用户名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 城市ID。
         * @type {number || null}
         */
        this.City = null;

        /**
         * 国家ID。
         * @type {number || null}
         */
        this.Country = null;

        /**
         * 省份ID。
         * @type {number || null}
         */
        this.Province = null;

        /**
         * 登录IP。
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * 机器名称。
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 登录时间。
         * @type {string || null}
         */
        this.LoginTime = null;

        /**
         * 云镜客户端唯一标识Uuid。
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
        this.Id = 'Id' in params ? params.Id : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.City = 'City' in params ? params.City : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.LoginTime = 'LoginTime' in params ? params.LoginTime : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * CreateProcessTask返回参数结构体
 * @class
 */
class CreateProcessTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RenewProVersion请求参数结构体
 * @class
 */
class RenewProVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买相关参数。
         * @type {ChargePrepaid || null}
         */
        this.ChargePrepaid = null;

        /**
         * 主机唯一ID，对应CVM的uuid、BM的InstanceId。
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

        if (params.ChargePrepaid) {
            let obj = new ChargePrepaid();
            obj.deserialize(params.ChargePrepaid)
            this.ChargePrepaid = obj;
        }
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * DescribeComponents请求参数结构体
 * @class
 */
class DescribeComponentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜客户端唯一Uuid。Uuid和ComponentId必填其一，使用Uuid表示，查询该主机列表信息。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 组件ID。Uuid和ComponentId必填其一，使用ComponentId表示，查询该组件列表信息。
         * @type {number || null}
         */
        this.ComponentId = null;

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
<li>ComponentVersion - String - 是否必填：否 - 组件版本号</li>
<li>MachineIp - String - 是否必填：否 - 主机内网IP</li>
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
        this.ComponentId = 'ComponentId' in params ? params.ComponentId : null;
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
 * DescribeNonlocalLoginPlaces请求参数结构体
 * @class
 */
class DescribeNonlocalLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端唯一Uuid。
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
<li>Keywords - String - 是否必填：否 -  查询关键字</li>
<li>Status - String - 是否必填：否 -  登录状态（NON_LOCAL_LOGIN: 异地登录 | NORMAL_LOGIN : 正常登录）</li>
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
 * DescribeVulScanResult返回参数结构体
 * @class
 */
class DescribeVulScanResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞数量。
         * @type {number || null}
         */
        this.VulNum = null;

        /**
         * 专业版机器数。
         * @type {number || null}
         */
        this.ProVersionNum = null;

        /**
         * 受影响的专业版主机数。
         * @type {number || null}
         */
        this.ImpactedHostNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulNum = 'VulNum' in params ? params.VulNum : null;
        this.ProVersionNum = 'ProVersionNum' in params ? params.ProVersionNum : null;
        this.ImpactedHostNum = 'ImpactedHostNum' in params ? params.ImpactedHostNum : null;
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
         * 木马Id数组，单次最大处理不能超过200条。
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
 * DescribeWeeklyReportVuls请求参数结构体
 * @class
 */
class DescribeWeeklyReportVulsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专业版周报开始时间。
         * @type {string || null}
         */
        this.BeginDate = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * 木马ID数组。
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
 * UntrustMaliciousRequest请求参数结构体
 * @class
 */
class UntrustMaliciousRequestRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 受信任记录ID。
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
 * DescribeComponentInfo返回参数结构体
 * @class
 */
class DescribeComponentInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 组件名称。
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * 组件类型。
<li>WEB：web组件</li>
<li>SYSTEM：系统组件</li>
         * @type {string || null}
         */
        this.ComponentType = null;

        /**
         * 组件官网。
         * @type {string || null}
         */
        this.Homepage = null;

        /**
         * 组件描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.ComponentType = 'ComponentType' in params ? params.ComponentType : null;
        this.Homepage = 'Homepage' in params ? params.Homepage : null;
        this.Description = 'Description' in params ? params.Description : null;
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
 * OpenProVersionPrepaid请求参数结构体
 * @class
 */
class OpenProVersionPrepaidRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买相关参数。
         * @type {ChargePrepaid || null}
         */
        this.ChargePrepaid = null;

        /**
         * 需要开通专业版主机信息数组。
         * @type {Array.<ProVersionMachine> || null}
         */
        this.Machines = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ChargePrepaid) {
            let obj = new ChargePrepaid();
            obj.deserialize(params.ChargePrepaid)
            this.ChargePrepaid = obj;
        }

        if (params.Machines) {
            this.Machines = new Array();
            for (let z in params.Machines) {
                let obj = new ProVersionMachine();
                obj.deserialize(params.Machines[z]);
                this.Machines.push(obj);
            }
        }

    }
}

/**
 * 端口列表
 * @class
 */
class OpenPort extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 云镜客户端唯一UUID。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 开放端口号。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 主机IP。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机名。
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 端口对应进程名。
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 端口对应进程Pid。
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 记录创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 记录更新时间。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

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
 * CreateProcessTask请求参数结构体
 * @class
 */
class CreateProcessTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜客户端唯一Uuid。
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
 * MisAlarmNonlocalLoginPlaces返回参数结构体
 * @class
 */
class MisAlarmNonlocalLoginPlacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 专业周报异地登录数据。
 * @class
 */
class WeeklyReportNonlocalLoginPlace extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机IP。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 用户名。
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 源IP。
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * 国家ID。
         * @type {number || null}
         */
        this.Country = null;

        /**
         * 省份ID。
         * @type {number || null}
         */
        this.Province = null;

        /**
         * 城市ID。
         * @type {number || null}
         */
        this.City = null;

        /**
         * 登录时间。
         * @type {string || null}
         */
        this.LoginTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.LoginTime = 'LoginTime' in params ? params.LoginTime : null;

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
 * RecoverMalwares请求参数结构体
 * @class
 */
class RecoverMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马Id数组,单次最大删除不能超过200条
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
 * 恶意请求数据。
 * @class
 */
class MaliciousRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 云镜客户端UUID。
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
         * 恶意请求域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 恶意请求数。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 进程名。
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 记录状态。
<li>UN_OPERATED：待处理</li>
<li>TRUSTED：已信任</li>
<li>UN_TRUSTED：已取消信任</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 恶意请求域名描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 参考地址。
         * @type {string || null}
         */
        this.Reference = null;

        /**
         * 发现时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 记录合并时间。
         * @type {string || null}
         */
        this.MergeTime = null;

        /**
         * 进程MD5
值。
         * @type {string || null}
         */
        this.ProcessMd5 = null;

        /**
         * 执行命令行。
         * @type {string || null}
         */
        this.CmdLine = null;

        /**
         * 进程PID。
         * @type {number || null}
         */
        this.Pid = null;

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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Reference = 'Reference' in params ? params.Reference : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.MergeTime = 'MergeTime' in params ? params.MergeTime : null;
        this.ProcessMd5 = 'ProcessMd5' in params ? params.ProcessMd5 : null;
        this.CmdLine = 'CmdLine' in params ? params.CmdLine : null;
        this.Pid = 'Pid' in params ? params.Pid : null;

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
 * DescribeWeeklyReportInfo请求参数结构体
 * @class
 */
class DescribeWeeklyReportInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专业周报开始时间。
         * @type {string || null}
         */
        this.BeginDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;

    }
}

/**
 * DescribeProcesses返回参数结构体
 * @class
 */
class DescribeProcessesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进程列表记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 进程列表数据数组。
         * @type {Array.<Process> || null}
         */
        this.Processes = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Processes) {
            this.Processes = new Array();
            for (let z in params.Processes) {
                let obj = new Process();
                obj.deserialize(params.Processes[z]);
                this.Processes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 专业周报木马数据。
 * @class
 */
class WeeklyReportMalware extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机IP。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 木马文件路径。
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * 木马文件MD5值。
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 木马发现时间。
         * @type {string || null}
         */
        this.FindTime = null;

        /**
         * 当前木马状态。
<li>UN_OPERATED：未处理</li>
<li>SEGREGATED：已隔离</li>
<li>TRUSTED：已信任</li>
<li>SEPARATING：隔离中</li>
<li>RECOVERING：恢复中</li>
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
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.FindTime = 'FindTime' in params ? params.FindTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeWeeklyReports请求参数结构体
 * @class
 */
class DescribeWeeklyReportsRequest extends  AbstractModel {
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
 * DescribeVuls返回参数结构体
 * @class
 */
class DescribeVulsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 漏洞列表数组。
         * @type {Array.<Vul> || null}
         */
        this.Vuls = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Vuls) {
            this.Vuls = new Array();
            for (let z in params.Vuls) {
                let obj = new Vul();
                obj.deserialize(params.Vuls[z]);
                this.Vuls.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImpactedHosts返回参数结构体
 * @class
 */
class DescribeImpactedHostsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 漏洞影响机器列表数组
         * @type {Array.<ImpactedHost> || null}
         */
        this.ImpactedHosts = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ImpactedHosts) {
            this.ImpactedHosts = new Array();
            for (let z in params.ImpactedHosts) {
                let obj = new ImpactedHost();
                obj.deserialize(params.ImpactedHosts[z]);
                this.ImpactedHosts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 主机漏洞信息
 * @class
 */
class AgentVul extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 主机IP。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 漏洞名称。
         * @type {string || null}
         */
        this.VulName = null;

        /**
         * 漏洞危害等级。
<li>HIGH：高危</li>
<li>MIDDLE：中危</li>
<li>LOW：低危</li>
<li>NOTICE：提示</li>
         * @type {string || null}
         */
        this.VulLevel = null;

        /**
         * 最后扫描时间。
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * 漏洞描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 漏洞种类ID。
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * 漏洞状态。
<li>UN_OPERATED : 待处理</li>
<li>FIXED : 已修复</li>
         * @type {string || null}
         */
        this.VulStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.VulName = 'VulName' in params ? params.VulName : null;
        this.VulLevel = 'VulLevel' in params ? params.VulLevel : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.VulId = 'VulId' in params ? params.VulId : null;
        this.VulStatus = 'VulStatus' in params ? params.VulStatus : null;

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
 * DescribeVulInfo请求参数结构体
 * @class
 */
class DescribeVulInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞种类ID。
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

    }
}

/**
 * DeleteUsualLoginPlaces返回参数结构体
 * @class
 */
class DeleteUsualLoginPlacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
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
 * DescribeNonlocalLoginPlaces返回参数结构体
 * @class
 */
class DescribeNonlocalLoginPlacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 异地登录信息数组。
         * @type {Array.<NonLocalLoginPlace> || null}
         */
        this.NonLocalLoginPlaces = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.NonLocalLoginPlaces) {
            this.NonLocalLoginPlaces = new Array();
            for (let z in params.NonLocalLoginPlaces) {
                let obj = new NonLocalLoginPlace();
                obj.deserialize(params.NonLocalLoginPlaces[z]);
                this.NonLocalLoginPlaces.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWeeklyReportNonlocalLoginPlaces请求参数结构体
 * @class
 */
class DescribeWeeklyReportNonlocalLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专业周报开始时间。
         * @type {string || null}
         */
        this.BeginDate = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * InquiryPriceOpenProVersionPrepaid返回参数结构体
 * @class
 */
class InquiryPriceOpenProVersionPrepaidResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预支费用的原价，单位：元。
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 预支费用的折扣价，单位：元。
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
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
         * 云主机类型。
<li>CVM: 虚拟主机</li>
<li>BM: 黑石物理机</li>
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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
 * DescribeComponentInfo请求参数结构体
 * @class
 */
class DescribeComponentInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件ID。
         * @type {number || null}
         */
        this.ComponentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentId = 'ComponentId' in params ? params.ComponentId : null;

    }
}

/**
 * MisAlarmNonlocalLoginPlaces请求参数结构体
 * @class
 */
class MisAlarmNonlocalLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异地登录事件Id数组。
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
 * TrustMaliciousRequest请求参数结构体
 * @class
 */
class TrustMaliciousRequestRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意请求记录ID。
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
 * DescribeWeeklyReportMalwares请求参数结构体
 * @class
 */
class DescribeWeeklyReportMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专业周报开始时间。
         * @type {string || null}
         */
        this.BeginDate = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeBruteAttacks返回参数结构体
 * @class
 */
class DescribeBruteAttacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 暴力破解事件列表
         * @type {Array.<BruteAttack> || null}
         */
        this.BruteAttacks = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.BruteAttacks) {
            this.BruteAttacks = new Array();
            for (let z in params.BruteAttacks) {
                let obj = new BruteAttack();
                obj.deserialize(params.BruteAttacks[z]);
                this.BruteAttacks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * UntrustMaliciousRequest返回参数结构体
 * @class
 */
class UntrustMaliciousRequestResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
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
         * 安全事件发生事件。
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

    }
}

/**
 * DescribeVulInfo返回参数结构体
 * @class
 */
class DescribeVulInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞种类ID。
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * 漏洞名称。
         * @type {string || null}
         */
        this.VulName = null;

        /**
         * 漏洞等级。
         * @type {string || null}
         */
        this.VulLevel = null;

        /**
         * 漏洞类型。
         * @type {string || null}
         */
        this.VulType = null;

        /**
         * 漏洞描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 修复方案。
         * @type {string || null}
         */
        this.RepairPlan = null;

        /**
         * 漏洞CVE。
         * @type {string || null}
         */
        this.CveId = null;

        /**
         * 参考链接。
         * @type {string || null}
         */
        this.Reference = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteBruteAttacks请求参数结构体
 * @class
 */
class DeleteBruteAttacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 暴力破解事件Id数组。
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
 * DescribeWeeklyReportNonlocalLoginPlaces返回参数结构体
 * @class
 */
class DescribeWeeklyReportNonlocalLoginPlacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专业周报异地登录数据。
         * @type {Array.<WeeklyReportNonlocalLoginPlace> || null}
         */
        this.WeeklyReportNonlocalLoginPlaces = null;

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

        if (params.WeeklyReportNonlocalLoginPlaces) {
            this.WeeklyReportNonlocalLoginPlaces = new Array();
            for (let z in params.WeeklyReportNonlocalLoginPlaces) {
                let obj = new WeeklyReportNonlocalLoginPlace();
                obj.deserialize(params.WeeklyReportNonlocalLoginPlaces[z]);
                this.WeeklyReportNonlocalLoginPlaces.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 木马事件Id数组。
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
 * RenewProVersion返回参数结构体
 * @class
 */
class RenewProVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 需要开通专业版机器信息。
 * @class
 */
class ProVersionMachine extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机类型。
<li>CVM: 虚拟主机</li>
<li>BM: 黑石物理机</li>
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 主机所在地域。
如：ap-guangzhou、ap-beijing
         * @type {string || null}
         */
        this.MachineRegion = null;

        /**
         * 主机唯一标识Uuid。
黑石的InstanceId，CVM的Uuid
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
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineRegion = 'MachineRegion' in params ? params.MachineRegion : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
 * DescribeWeeklyReportInfo返回参数结构体
 * @class
 */
class DescribeWeeklyReportInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号所属公司或个人名称。
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * 机器总数。
         * @type {number || null}
         */
        this.MachineNum = null;

        /**
         * 云镜客户端在线数。
         * @type {number || null}
         */
        this.OnlineMachineNum = null;

        /**
         * 云镜客户端离线数。
         * @type {number || null}
         */
        this.OfflineMachineNum = null;

        /**
         * 开通云镜专业版数量。
         * @type {number || null}
         */
        this.ProVersionMachineNum = null;

        /**
         * 周报开始时间。
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * 周报结束时间。
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 安全等级。
<li>HIGH：高</li>
<li>MIDDLE：中</li>
<li>LOW：低</li>
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 木马记录数。
         * @type {number || null}
         */
        this.MalwareNum = null;

        /**
         * 异地登录数。
         * @type {number || null}
         */
        this.NonlocalLoginNum = null;

        /**
         * 密码破解成功数。
         * @type {number || null}
         */
        this.BruteAttackSuccessNum = null;

        /**
         * 漏洞数。
         * @type {number || null}
         */
        this.VulNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.MachineNum = 'MachineNum' in params ? params.MachineNum : null;
        this.OnlineMachineNum = 'OnlineMachineNum' in params ? params.OnlineMachineNum : null;
        this.OfflineMachineNum = 'OfflineMachineNum' in params ? params.OfflineMachineNum : null;
        this.ProVersionMachineNum = 'ProVersionMachineNum' in params ? params.ProVersionMachineNum : null;
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.MalwareNum = 'MalwareNum' in params ? params.MalwareNum : null;
        this.NonlocalLoginNum = 'NonlocalLoginNum' in params ? params.NonlocalLoginNum : null;
        this.BruteAttackSuccessNum = 'BruteAttackSuccessNum' in params ? params.BruteAttackSuccessNum : null;
        this.VulNum = 'VulNum' in params ? params.VulNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * TrustMaliciousRequest返回参数结构体
 * @class
 */
class TrustMaliciousRequestResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseProVersion返回参数结构体
 * @class
 */
class CloseProVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOpenPorts返回参数结构体
 * @class
 */
class DescribeOpenPortsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 端口列表记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 端口列表。
         * @type {Array.<OpenPort> || null}
         */
        this.OpenPorts = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.OpenPorts) {
            this.OpenPorts = new Array();
            for (let z in params.OpenPorts) {
                let obj = new OpenPort();
                obj.deserialize(params.OpenPorts[z]);
                this.OpenPorts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeMaliciousRequests请求参数结构体
 * @class
 */
class DescribeMaliciousRequestsRequest extends  AbstractModel {
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
<li>Status - String - 是否必填：否 - 状态筛选（UN_OPERATED: 待处理 | TRUSTED：已信任 | UN_TRUSTED：已取消信任）</li>
<li>Domain - String - 是否必填：否 - 恶意请求的域名</li>
<li>MachineIp - String - 是否必填：否 - 主机内网IP</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 云镜客户端唯一UUID。
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

    }
}

/**
 * DescribeProcesses请求参数结构体
 * @class
 */
class DescribeProcessesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜客户端唯一Uuid。Uuid和ProcessName必填其一，使用Uuid表示，查询该主机列表信息。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 进程名。Uuid和ProcessName必填其一，使用ProcessName表示，查询该进程列表信息。
         * @type {string || null}
         */
        this.ProcessName = null;

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
<li>MachineIp - String - 是否必填：否 - 主机内网IP</li>
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
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
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
 * DeleteUsualLoginPlaces请求参数结构体
 * @class
 */
class DeleteUsualLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云镜客户端Uuid
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 已添加常用登录地城市ID数组
         * @type {Array.<number> || null}
         */
        this.CityIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.CityIds = 'CityIds' in params ? params.CityIds : null;

    }
}

/**
 * 周报列表。
 * @class
 */
class WeeklyReport extends  AbstractModel {
    constructor(){
        super();

        /**
         * 周报开始时间。
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * 周报结束时间。
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
 * OpenProVersionPrepaid返回参数结构体
 * @class
 */
class OpenProVersionPrepaidResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单ID列表。
         * @type {Array.<string> || null}
         */
        this.DealIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealIds = 'DealIds' in params ? params.DealIds : null;
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
 * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。
 * @class
 */
class ChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 自动续费标识。取值范围：
<li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费</li>
<li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费</li>
<li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费</li>

默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
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
 * SeparateMalwares返回参数结构体
 * @class
 */
class SeparateMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 隔离成功的id数组。
         * @type {Array.<number> || null}
         */
        this.SuccessIds = null;

        /**
         * 隔离失败的id数组。
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
 * 进程信息数据。
 * @class
 */
class Process extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 云镜客户端唯一UUID。
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
         * 进程Pid。
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 进程Ppid。
         * @type {number || null}
         */
        this.Ppid = null;

        /**
         * 进程名。
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * 进程用户名。
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 所属平台。
<li>WIN32：windows32位</li>
<li>WIN64：windows64位</li>
<li>LINUX32：Linux32位</li>
<li>LINUX64：Linux64位</li>
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 进程路径。
         * @type {string || null}
         */
        this.FullPath = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Ppid = 'Ppid' in params ? params.Ppid : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.FullPath = 'FullPath' in params ? params.FullPath : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeVulScanResult请求参数结构体
 * @class
 */
class DescribeVulScanResultRequest extends  AbstractModel {
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
 * DescribeWeeklyReportMalwares返回参数结构体
 * @class
 */
class DescribeWeeklyReportMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专业周报木马数据。
         * @type {Array.<WeeklyReportMalware> || null}
         */
        this.WeeklyReportMalwares = null;

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

        if (params.WeeklyReportMalwares) {
            this.WeeklyReportMalwares = new Array();
            for (let z in params.WeeklyReportMalwares) {
                let obj = new WeeklyReportMalware();
                obj.deserialize(params.WeeklyReportMalwares[z]);
                this.WeeklyReportMalwares.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 返回数量，默认为10，最大值为100。
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
 * 受影响主机信息
 * @class
 */
class ImpactedHost extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 主机IP。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 主机名称。
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 最后检测时间。
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * 漏洞状态。
<li>UN_OPERATED ：待处理</li>
<li>SCANING : 扫描中</li>
<li>FIXED : 已修复</li>
         * @type {string || null}
         */
        this.VulStatus = null;

        /**
         * 云镜客户端唯一标识UUID。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 漏洞描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 漏洞种类ID。
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
        this.Id = 'Id' in params ? params.Id : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.VulStatus = 'VulStatus' in params ? params.VulStatus : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.VulId = 'VulId' in params ? params.VulId : null;

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
 * DeleteNonlocalLoginPlaces请求参数结构体
 * @class
 */
class DeleteNonlocalLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异地登录事件Id数组。
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
 * 木马相关信息
 * @class
 */
class Malware extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 主机IP。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 当前木马状态。
<li>UN_OPERATED：未处理</li><li>SEGREGATED：已隔离</li><li>TRUSTED：已信任</li>
<li>SEPARATING：隔离中</li><li>RECOVERING：恢复中</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 木马所在的路径。
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * 木马描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 主机名称。
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * 木马文件创建时间。
         * @type {string || null}
         */
        this.FileCreateTime = null;

        /**
         * 木马文件修改时间。
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 云镜客户端唯一标识UUID。
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
        this.Id = 'Id' in params ? params.Id : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.FileCreateTime = 'FileCreateTime' in params ? params.FileCreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * ExportMaliciousRequests请求参数结构体
 * @class
 */
class ExportMaliciousRequestsRequest extends  AbstractModel {
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
 * CreateUsualLoginPlaces返回参数结构体
 * @class
 */
class CreateUsualLoginPlacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProVersionRenewFlag返回参数结构体
 * @class
 */
class ModifyProVersionRenewFlagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
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
         * 漏洞数，非专业版将返回：0。
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

    }
}

/**
 * DescribeWeeklyReportVuls返回参数结构体
 * @class
 */
class DescribeWeeklyReportVulsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专业周报漏洞数据数组。
         * @type {Array.<WeeklyReportVul> || null}
         */
        this.WeeklyReportVuls = null;

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

        if (params.WeeklyReportVuls) {
            this.WeeklyReportVuls = new Array();
            for (let z in params.WeeklyReportVuls) {
                let obj = new WeeklyReportVul();
                obj.deserialize(params.WeeklyReportVuls[z]);
                this.WeeklyReportVuls.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 专业周报密码破解数据。
 * @class
 */
class WeeklyReportBruteAttack extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机IP。
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * 被破解用户名。
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 源IP。
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * 尝试次数。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 攻击时间。
         * @type {string || null}
         */
        this.AttackTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.AttackTime = 'AttackTime' in params ? params.AttackTime : null;

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
 * ModifyProVersionRenewFlag请求参数结构体
 * @class
 */
class ModifyProVersionRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动续费标识。取值范围：
<li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费</li>
<li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费</li>
<li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费</li>
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 主机唯一ID，对应CVM的uuid、BM的instanceId。
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
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

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
 * 组件列表数据。
 * @class
 */
class Component extends  AbstractModel {
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
         * 组件版本号。
         * @type {string || null}
         */
        this.ComponentVersion = null;

        /**
         * 组件类型。
<li>SYSTEM：系统组件</li>
<li>WEB：WEB组件</li>
         * @type {string || null}
         */
        this.ComponentType = null;

        /**
         * 组件名称。
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * 组件检测更新时间。
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
        this.ComponentVersion = 'ComponentVersion' in params ? params.ComponentVersion : null;
        this.ComponentType = 'ComponentType' in params ? params.ComponentType : null;
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DescribeVuls请求参数结构体
 * @class
 */
class DescribeVulsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞类型。
<li>WEB：Web应用漏洞</li>
<li>SYSTEM：系统组件漏洞</li>
<li>BASELINE：安全基线</li>
         * @type {string || null}
         */
        this.VulType = null;

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
<li>Status - String - 是否必填：否 - 状态筛选（UN_OPERATED: 待处理 | FIXED：已修复）

Status过滤条件值只能取其一，不能是“或”逻辑。
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
        this.VulType = 'VulType' in params ? params.VulType : null;
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
 * DescribeAgentVuls返回参数结构体
 * @class
 */
class DescribeAgentVulsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 主机漏洞信息
         * @type {Array.<AgentVul> || null}
         */
        this.AgentVuls = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.AgentVuls) {
            this.AgentVuls = new Array();
            for (let z in params.AgentVuls) {
                let obj = new AgentVul();
                obj.deserialize(params.AgentVuls[z]);
                this.AgentVuls.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CloseProVersion请求参数结构体
 * @class
 */
class CloseProVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机唯一标识Uuid。
黑石的InstanceId，CVM的Uuid
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
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * ModifyAlarmAttribute返回参数结构体
 * @class
 */
class ModifyAlarmAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
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
 * DescribeComponents返回参数结构体
 * @class
 */
class DescribeComponentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件列表记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 组件列表数据。
         * @type {Array.<Component> || null}
         */
        this.Components = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Components) {
            this.Components = new Array();
            for (let z in params.Components) {
                let obj = new Component();
                obj.deserialize(params.Components[z]);
                this.Components.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RescanImpactedHost返回参数结构体
 * @class
 */
class RescanImpactedHostResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 漏洞列表数据
 * @class
 */
class Vul extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞种类ID
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * 漏洞名称
         * @type {string || null}
         */
        this.VulName = null;

        /**
         * 漏洞危害等级:
HIGH：高危
MIDDLE：中危
LOW：低危
NOTICE：提示
         * @type {string || null}
         */
        this.VulLevel = null;

        /**
         * 最后扫描时间
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * 受影响机器数量
         * @type {number || null}
         */
        this.ImpactedHostNum = null;

        /**
         * 漏洞状态
* UN_OPERATED : 待处理
* FIXED : 已修复
         * @type {string || null}
         */
        this.VulStatus = null;

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
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.ImpactedHostNum = 'ImpactedHostNum' in params ? params.ImpactedHostNum : null;
        this.VulStatus = 'VulStatus' in params ? params.VulStatus : null;

    }
}

/**
 * DescribeWeeklyReports返回参数结构体
 * @class
 */
class DescribeWeeklyReportsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专业周报列表数组。
         * @type {Array.<WeeklyReport> || null}
         */
        this.WeeklyReports = null;

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

        if (params.WeeklyReports) {
            this.WeeklyReports = new Array();
            for (let z in params.WeeklyReports) {
                let obj = new WeeklyReport();
                obj.deserialize(params.WeeklyReports[z]);
                this.WeeklyReports.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccounts返回参数结构体
 * @class
 */
class DescribeAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 帐号列表记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 帐号数据列表。
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
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
 * RecoverMalwares返回参数结构体
 * @class
 */
class RecoverMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恢复成功id数组
         * @type {Array.<number> || null}
         */
        this.SuccessIds = null;

        /**
         * 恢复失败id数组
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
 * DescribeAlarmAttribute请求参数结构体
 * @class
 */
class DescribeAlarmAttributeRequest extends  AbstractModel {
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
 * DescribeMalwares请求参数结构体
 * @class
 */
class DescribeMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端唯一Uuid。
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
<li>Keywords - String - 是否必填：否 - 查询关键字 </li>
<li>Status - String - 是否必填：否 - 木马状态（UN_OPERATED: 未处理 | SEGREGATED: 已隔离|TRUSTED：信任）</li>
每个过滤条件只支持一个值，暂不支持多个值“或”关系查询。
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
 * DeleteMaliciousRequests请求参数结构体
 * @class
 */
class DeleteMaliciousRequestsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意请求记录ID数组，最大100条。
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
 * DescribeMachines请求参数结构体
 * @class
 */
class DescribeMachinesRequest extends  AbstractModel {
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
<li>Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线 | ONLINE: 在线）</li>
<li>Version - String  是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版）</li>
每个过滤条件只支持一个值，暂不支持多个值“或”关系查询
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
         * 木马记录ID数组
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
 * DescribeMalwares返回参数结构体
 * @class
 */
class DescribeMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 木马总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Malware数组。
         * @type {Array.<Malware> || null}
         */
        this.Malwares = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Malwares) {
            this.Malwares = new Array();
            for (let z in params.Malwares) {
                let obj = new Malware();
                obj.deserialize(params.Malwares[z]);
                this.Malwares.push(obj);
            }
        }
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

module.exports = {
    ModifyAutoOpenProVersionConfigRequest: ModifyAutoOpenProVersionConfigRequest,
    DescribeProcessTaskStatusResponse: DescribeProcessTaskStatusResponse,
    DescribeAlarmAttributeResponse: DescribeAlarmAttributeResponse,
    DescribeWeeklyReportBruteAttacksResponse: DescribeWeeklyReportBruteAttacksResponse,
    DescribeAgentVulsRequest: DescribeAgentVulsRequest,
    UsualPlace: UsualPlace,
    DescribeAccountsRequest: DescribeAccountsRequest,
    WeeklyReportVul: WeeklyReportVul,
    DescribeWeeklyReportBruteAttacksRequest: DescribeWeeklyReportBruteAttacksRequest,
    CreateUsualLoginPlacesRequest: CreateUsualLoginPlacesRequest,
    DescribeProcessTaskStatusRequest: DescribeProcessTaskStatusRequest,
    ModifyAlarmAttributeRequest: ModifyAlarmAttributeRequest,
    ComponentStatistics: ComponentStatistics,
    InquiryPriceOpenProVersionPrepaidRequest: InquiryPriceOpenProVersionPrepaidRequest,
    DescribeBruteAttacksRequest: DescribeBruteAttacksRequest,
    DescribeSecurityTrendsRequest: DescribeSecurityTrendsRequest,
    Account: Account,
    RescanImpactedHostRequest: RescanImpactedHostRequest,
    BruteAttack: BruteAttack,
    DescribeOpenPortsRequest: DescribeOpenPortsRequest,
    DescribeImpactedHostsRequest: DescribeImpactedHostsRequest,
    DescribeMaliciousRequestsResponse: DescribeMaliciousRequestsResponse,
    NonLocalLoginPlace: NonLocalLoginPlace,
    CreateProcessTaskResponse: CreateProcessTaskResponse,
    RenewProVersionRequest: RenewProVersionRequest,
    DescribeComponentsRequest: DescribeComponentsRequest,
    DescribeNonlocalLoginPlacesRequest: DescribeNonlocalLoginPlacesRequest,
    OpenPortStatistics: OpenPortStatistics,
    DescribeHistoryAccountsResponse: DescribeHistoryAccountsResponse,
    DescribeVulScanResultResponse: DescribeVulScanResultResponse,
    UntrustMalwaresRequest: UntrustMalwaresRequest,
    DescribeWeeklyReportVulsRequest: DescribeWeeklyReportVulsRequest,
    TrustMalwaresRequest: TrustMalwaresRequest,
    UntrustMalwaresResponse: UntrustMalwaresResponse,
    UntrustMaliciousRequestRequest: UntrustMaliciousRequestRequest,
    DescribeComponentInfoResponse: DescribeComponentInfoResponse,
    DescribeAccountStatisticsResponse: DescribeAccountStatisticsResponse,
    OpenProVersionPrepaidRequest: OpenProVersionPrepaidRequest,
    OpenPort: OpenPort,
    DescribeProVersionInfoRequest: DescribeProVersionInfoRequest,
    CreateProcessTaskRequest: CreateProcessTaskRequest,
    DeleteMaliciousRequestsResponse: DeleteMaliciousRequestsResponse,
    DeleteMachineResponse: DeleteMachineResponse,
    MisAlarmNonlocalLoginPlacesResponse: MisAlarmNonlocalLoginPlacesResponse,
    WeeklyReportNonlocalLoginPlace: WeeklyReportNonlocalLoginPlace,
    DescribeOverviewStatisticsResponse: DescribeOverviewStatisticsResponse,
    RecoverMalwaresRequest: RecoverMalwaresRequest,
    MaliciousRequest: MaliciousRequest,
    TrustMalwaresResponse: TrustMalwaresResponse,
    DescribeWeeklyReportInfoRequest: DescribeWeeklyReportInfoRequest,
    DescribeProcessesResponse: DescribeProcessesResponse,
    WeeklyReportMalware: WeeklyReportMalware,
    DescribeWeeklyReportsRequest: DescribeWeeklyReportsRequest,
    DescribeVulsResponse: DescribeVulsResponse,
    DescribeImpactedHostsResponse: DescribeImpactedHostsResponse,
    AgentVul: AgentVul,
    DescribeOpenPortStatisticsRequest: DescribeOpenPortStatisticsRequest,
    DeleteMachineRequest: DeleteMachineRequest,
    DescribeVulInfoRequest: DescribeVulInfoRequest,
    DescribeComponentStatisticsResponse: DescribeComponentStatisticsResponse,
    Place: Place,
    DeleteUsualLoginPlacesResponse: DeleteUsualLoginPlacesResponse,
    DeleteNonlocalLoginPlacesResponse: DeleteNonlocalLoginPlacesResponse,
    DescribeNonlocalLoginPlacesResponse: DescribeNonlocalLoginPlacesResponse,
    DescribeWeeklyReportNonlocalLoginPlacesRequest: DescribeWeeklyReportNonlocalLoginPlacesRequest,
    InquiryPriceOpenProVersionPrepaidResponse: InquiryPriceOpenProVersionPrepaidResponse,
    DescribeMachineInfoResponse: DescribeMachineInfoResponse,
    DescribeUsualLoginPlacesResponse: DescribeUsualLoginPlacesResponse,
    DescribeComponentInfoRequest: DescribeComponentInfoRequest,
    MisAlarmNonlocalLoginPlacesRequest: MisAlarmNonlocalLoginPlacesRequest,
    TrustMaliciousRequestRequest: TrustMaliciousRequestRequest,
    DescribeWeeklyReportMalwaresRequest: DescribeWeeklyReportMalwaresRequest,
    DescribeBruteAttacksResponse: DescribeBruteAttacksResponse,
    DescribeComponentStatisticsRequest: DescribeComponentStatisticsRequest,
    DescribeOverviewStatisticsRequest: DescribeOverviewStatisticsRequest,
    DescribeOpenPortStatisticsResponse: DescribeOpenPortStatisticsResponse,
    UntrustMaliciousRequestResponse: UntrustMaliciousRequestResponse,
    SecurityDynamic: SecurityDynamic,
    DescribeVulInfoResponse: DescribeVulInfoResponse,
    DescribeProVersionInfoResponse: DescribeProVersionInfoResponse,
    DeleteBruteAttacksRequest: DeleteBruteAttacksRequest,
    DescribeWeeklyReportNonlocalLoginPlacesResponse: DescribeWeeklyReportNonlocalLoginPlacesResponse,
    SeparateMalwaresRequest: SeparateMalwaresRequest,
    RenewProVersionResponse: RenewProVersionResponse,
    DescribeSecurityTrendsResponse: DescribeSecurityTrendsResponse,
    ProVersionMachine: ProVersionMachine,
    ExportMaliciousRequestsResponse: ExportMaliciousRequestsResponse,
    DescribeWeeklyReportInfoResponse: DescribeWeeklyReportInfoResponse,
    DescribeSecurityDynamicsResponse: DescribeSecurityDynamicsResponse,
    TrustMaliciousRequestResponse: TrustMaliciousRequestResponse,
    CloseProVersionResponse: CloseProVersionResponse,
    DescribeOpenPortsResponse: DescribeOpenPortsResponse,
    DescribeMachineInfoRequest: DescribeMachineInfoRequest,
    DescribeMaliciousRequestsRequest: DescribeMaliciousRequestsRequest,
    DescribeProcessesRequest: DescribeProcessesRequest,
    DeleteUsualLoginPlacesRequest: DeleteUsualLoginPlacesRequest,
    WeeklyReport: WeeklyReport,
    Filter: Filter,
    DescribeAccountStatisticsRequest: DescribeAccountStatisticsRequest,
    OpenProVersionPrepaidResponse: OpenProVersionPrepaidResponse,
    DeleteMalwaresResponse: DeleteMalwaresResponse,
    ChargePrepaid: ChargePrepaid,
    SeparateMalwaresResponse: SeparateMalwaresResponse,
    ProcessStatistics: ProcessStatistics,
    Process: Process,
    DescribeVulScanResultRequest: DescribeVulScanResultRequest,
    DescribeWeeklyReportMalwaresResponse: DescribeWeeklyReportMalwaresResponse,
    DescribeSecurityDynamicsRequest: DescribeSecurityDynamicsRequest,
    ImpactedHost: ImpactedHost,
    DescribeProcessStatisticsResponse: DescribeProcessStatisticsResponse,
    DeleteNonlocalLoginPlacesRequest: DeleteNonlocalLoginPlacesRequest,
    Malware: Malware,
    ExportMaliciousRequestsRequest: ExportMaliciousRequestsRequest,
    AccountStatistics: AccountStatistics,
    DescribeMachinesResponse: DescribeMachinesResponse,
    CreateUsualLoginPlacesResponse: CreateUsualLoginPlacesResponse,
    ModifyProVersionRenewFlagResponse: ModifyProVersionRenewFlagResponse,
    Machine: Machine,
    DescribeWeeklyReportVulsResponse: DescribeWeeklyReportVulsResponse,
    WeeklyReportBruteAttack: WeeklyReportBruteAttack,
    HistoryAccount: HistoryAccount,
    ModifyProVersionRenewFlagRequest: ModifyProVersionRenewFlagRequest,
    DescribeUsualLoginPlacesRequest: DescribeUsualLoginPlacesRequest,
    Component: Component,
    DescribeVulsRequest: DescribeVulsRequest,
    DescribeAgentVulsResponse: DescribeAgentVulsResponse,
    DescribeProcessStatisticsRequest: DescribeProcessStatisticsRequest,
    DescribeHistoryAccountsRequest: DescribeHistoryAccountsRequest,
    CloseProVersionRequest: CloseProVersionRequest,
    ModifyAlarmAttributeResponse: ModifyAlarmAttributeResponse,
    IgnoreImpactedHostsResponse: IgnoreImpactedHostsResponse,
    DescribeComponentsResponse: DescribeComponentsResponse,
    RescanImpactedHostResponse: RescanImpactedHostResponse,
    SecurityTrend: SecurityTrend,
    Vul: Vul,
    DescribeWeeklyReportsResponse: DescribeWeeklyReportsResponse,
    DescribeAccountsResponse: DescribeAccountsResponse,
    ModifyAutoOpenProVersionConfigResponse: ModifyAutoOpenProVersionConfigResponse,
    RecoverMalwaresResponse: RecoverMalwaresResponse,
    IgnoreImpactedHostsRequest: IgnoreImpactedHostsRequest,
    DescribeAlarmAttributeRequest: DescribeAlarmAttributeRequest,
    DescribeMalwaresRequest: DescribeMalwaresRequest,
    DeleteMaliciousRequestsRequest: DeleteMaliciousRequestsRequest,
    DescribeMachinesRequest: DescribeMachinesRequest,
    DeleteMalwaresRequest: DeleteMalwaresRequest,
    DescribeMalwaresResponse: DescribeMalwaresResponse,
    DeleteBruteAttacksResponse: DeleteBruteAttacksResponse,

}
