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
        this.Ids = params.Ids || null;

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
        this.Uuid = params.Uuid || null;

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

        if (params.BruteAttacks) {
            this.BruteAttacks = new Array();
            for (let z in params.BruteAttacks) {
                let obj = new BruteAttack();
                obj.deserialize(params.BruteAttacks[z]);
                this.BruteAttacks.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.Uuid = params.Uuid || null;
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;

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

        if (params.Machines) {
            this.Machines = new Array();
            for (let z in params.Machines) {
                let obj = new Machine();
                obj.deserialize(params.Machines[z]);
                this.Machines.push(obj);
            }
        }
        this.TotalCount = params.TotalCount || null;
        this.RequestId = params.RequestId || null;

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
        this.Offline = params.Offline || null;
        this.Malware = params.Malware || null;
        this.NonlocalLogin = params.NonlocalLogin || null;
        this.CrackSuccess = params.CrackSuccess || null;
        this.RequestId = params.RequestId || null;

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
        this.VulType = params.VulType || null;
        this.Uuid = params.Uuid || null;
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;

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
        this.MachineName = params.MachineName || null;
        this.MachineOs = params.MachineOs || null;
        this.MachineStatus = params.MachineStatus || null;
        this.Uuid = params.Uuid || null;
        this.Quuid = params.Quuid || null;
        this.VulNum = params.VulNum || null;
        this.MachineIp = params.MachineIp || null;
        this.IsProVersion = params.IsProVersion || null;
        this.MachineWanIp = params.MachineWanIp || null;
        this.PayMode = params.PayMode || null;

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
        this.Id = params.Id || null;
        this.Uuid = params.Uuid || null;
        this.CountryId = params.CountryId || null;
        this.ProvinceId = params.ProvinceId || null;
        this.CityId = params.CityId || null;

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
        this.VulId = params.VulId || null;
        this.VulName = params.VulName || null;
        this.VulLevel = params.VulLevel || null;
        this.VulType = params.VulType || null;
        this.Description = params.Description || null;
        this.RepairPlan = params.RepairPlan || null;
        this.CveId = params.CveId || null;
        this.Reference = params.Reference || null;
        this.RequestId = params.RequestId || null;

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
        this.Id = params.Id || null;
        this.MachineIp = params.MachineIp || null;
        this.Status = params.Status || null;
        this.FilePath = params.FilePath || null;
        this.Description = params.Description || null;
        this.MachineName = params.MachineName || null;
        this.FileCreateTime = params.FileCreateTime || null;
        this.ModifyTime = params.ModifyTime || null;
        this.Uuid = params.Uuid || null;

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
        this.PostPayCost = params.PostPayCost || null;
        this.IsAutoOpenProVersion = params.IsAutoOpenProVersion || null;
        this.ProVersionNum = params.ProVersionNum || null;
        this.RequestId = params.RequestId || null;

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
        this.Ids = params.Ids || null;

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
        this.Uuids = params.Uuids || null;

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
        this.VulId = params.VulId || null;
        this.VulName = params.VulName || null;
        this.VulLevel = params.VulLevel || null;
        this.LastScanTime = params.LastScanTime || null;
        this.ImpactedHostNum = params.ImpactedHostNum || null;
        this.VulStatus = params.VulStatus || null;

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
        this.VulNum = params.VulNum || null;
        this.ProVersionNum = params.ProVersionNum || null;
        this.ImpactedHostNum = params.ImpactedHostNum || null;
        this.RequestId = params.RequestId || null;

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
        this.Attribute = params.Attribute || null;
        this.Value = params.Value || null;

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
         * 服务器在线数
         * @type {number || null}
         */
        this.OnlineMachineNum = null;

        /**
         * 专业服务器数
         * @type {number || null}
         */
        this.ProVersionMachineNum = null;

        /**
         * 木马文件数
         * @type {number || null}
         */
        this.MalwareNum = null;

        /**
         * 异地登录数
         * @type {number || null}
         */
        this.NonlocalLoginNum = null;

        /**
         * 暴力破解成功数
         * @type {number || null}
         */
        this.BruteAttackSuccessNum = null;

        /**
         * 漏洞数
         * @type {number || null}
         */
        this.VulNum = null;

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
        this.OnlineMachineNum = params.OnlineMachineNum || null;
        this.ProVersionMachineNum = params.ProVersionMachineNum || null;
        this.MalwareNum = params.MalwareNum || null;
        this.NonlocalLoginNum = params.NonlocalLoginNum || null;
        this.BruteAttackSuccessNum = params.BruteAttackSuccessNum || null;
        this.VulNum = params.VulNum || null;
        this.RequestId = params.RequestId || null;

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
        this.Ids = params.Ids || null;

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
        this.Uuid = params.Uuid || null;

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
        this.Uuid = params.Uuid || null;

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
        this.VulType = params.VulType || null;
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;

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

        if (params.AgentVuls) {
            this.AgentVuls = new Array();
            for (let z in params.AgentVuls) {
                let obj = new AgentVul();
                obj.deserialize(params.AgentVuls[z]);
                this.AgentVuls.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.Status = params.Status || null;

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
        this.Id = params.Id || null;
        this.MachineIp = params.MachineIp || null;
        this.MachineName = params.MachineName || null;
        this.LastScanTime = params.LastScanTime || null;
        this.VulStatus = params.VulStatus || null;
        this.Uuid = params.Uuid || null;
        this.Description = params.Description || null;
        this.VulId = params.VulId || null;

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

        if (params.NonLocalLoginPlaces) {
            this.NonLocalLoginPlaces = new Array();
            for (let z in params.NonLocalLoginPlaces) {
                let obj = new NonLocalLoginPlace();
                obj.deserialize(params.NonLocalLoginPlaces[z]);
                this.NonLocalLoginPlaces.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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

        if (params.ImpactedHosts) {
            this.ImpactedHosts = new Array();
            for (let z in params.ImpactedHosts) {
                let obj = new ImpactedHost();
                obj.deserialize(params.ImpactedHosts[z]);
                this.ImpactedHosts.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.Ids = params.Ids || null;

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
        this.Uuid = params.Uuid || null;
        this.Offset = params.Offset || null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = params.Limit || null;

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
        this.VulId = params.VulId || null;
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;

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
 * IgnoreImpactedHosts返回参数结构体
 * @class
 */
class IgnoreImpactedHostsResponse extends  AbstractModel {
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
        this.Id = params.Id || null;

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
        this.MachineIp = params.MachineIp || null;
        this.ProtectDays = params.ProtectDays || null;
        this.MachineOs = params.MachineOs || null;
        this.MachineName = params.MachineName || null;
        this.MachineStatus = params.MachineStatus || null;
        this.InstanceId = params.InstanceId || null;
        this.MachineWanIp = params.MachineWanIp || null;
        this.Quuid = params.Quuid || null;
        this.Uuid = params.Uuid || null;
        this.IsProVersion = params.IsProVersion || null;
        this.ProVersionOpenDate = params.ProVersionOpenDate || null;
        this.MachineType = params.MachineType || null;
        this.MachineRegion = params.MachineRegion || null;
        this.PayMode = params.PayMode || null;
        this.RequestId = params.RequestId || null;

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
        this.Id = params.Id || null;
        this.MachineIp = params.MachineIp || null;
        this.Status = params.Status || null;
        this.UserName = params.UserName || null;
        this.City = params.City || null;
        this.Country = params.Country || null;
        this.Province = params.Province || null;
        this.SrcIp = params.SrcIp || null;
        this.Count = params.Count || null;
        this.CreateTime = params.CreateTime || null;
        this.MachineName = params.MachineName || null;
        this.Uuid = params.Uuid || null;

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
        this.Uuid = params.Uuid || null;
        this.CityIds = params.CityIds || null;

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
        this.VulId = params.VulId || null;

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

        if (params.Vuls) {
            this.Vuls = new Array();
            for (let z in params.Vuls) {
                let obj = new Vul();
                obj.deserialize(params.Vuls[z]);
                this.Vuls.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.Name = params.Name || null;
        this.Values = params.Values || null;

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
        this.CityId = params.CityId || null;
        this.ProvinceId = params.ProvinceId || null;
        this.CountryId = params.CountryId || null;

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
        this.Ids = params.Ids || null;

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
        this.Id = params.Id || null;
        this.MachineIp = params.MachineIp || null;
        this.Status = params.Status || null;
        this.UserName = params.UserName || null;
        this.City = params.City || null;
        this.Country = params.Country || null;
        this.Province = params.Province || null;
        this.SrcIp = params.SrcIp || null;
        this.MachineName = params.MachineName || null;
        this.LoginTime = params.LoginTime || null;
        this.Uuid = params.Uuid || null;

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
 * DeleteNonlocalLoginPlaces返回参数结构体
 * @class
 */
class DeleteNonlocalLoginPlacesResponse extends  AbstractModel {
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
        this.SuccessIds = params.SuccessIds || null;
        this.FailedIds = params.FailedIds || null;
        this.RequestId = params.RequestId || null;

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
        this.Ids = params.Ids || null;

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
        this.Id = params.Id || null;
        this.MachineIp = params.MachineIp || null;
        this.VulName = params.VulName || null;
        this.VulLevel = params.VulLevel || null;
        this.LastScanTime = params.LastScanTime || null;
        this.Description = params.Description || null;
        this.VulId = params.VulId || null;
        this.VulStatus = params.VulStatus || null;

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
        this.SuccessIds = params.SuccessIds || null;
        this.FailedIds = params.FailedIds || null;
        this.RequestId = params.RequestId || null;

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
        this.Uuid = params.Uuid || null;
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;

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
 * MisAlarmNonlocalLoginPlaces返回参数结构体
 * @class
 */
class MisAlarmNonlocalLoginPlacesResponse extends  AbstractModel {
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
        this.Ids = params.Ids || null;

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
        this.MachineType = params.MachineType || null;
        this.MachineRegion = params.MachineRegion || null;
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;

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
        this.Quuid = params.Quuid || null;

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
        this.Ids = params.Ids || null;

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

        if (params.UsualLoginPlaces) {
            this.UsualLoginPlaces = new Array();
            for (let z in params.UsualLoginPlaces) {
                let obj = new UsualPlace();
                obj.deserialize(params.UsualLoginPlaces[z]);
                this.UsualLoginPlaces.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.Ids = params.Ids || null;

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

        if (params.Malwares) {
            this.Malwares = new Array();
            for (let z in params.Malwares) {
                let obj = new Malware();
                obj.deserialize(params.Malwares[z]);
                this.Malwares.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
 * DeleteBruteAttacks返回参数结构体
 * @class
 */
class DeleteBruteAttacksResponse extends  AbstractModel {
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

module.exports = {
    DeleteNonlocalLoginPlacesRequest: DeleteNonlocalLoginPlacesRequest,
    DescribeMachineInfoRequest: DescribeMachineInfoRequest,
    DescribeBruteAttacksResponse: DescribeBruteAttacksResponse,
    DescribeNonlocalLoginPlacesRequest: DescribeNonlocalLoginPlacesRequest,
    DescribeMachinesResponse: DescribeMachinesResponse,
    DescribeAlarmAttributeResponse: DescribeAlarmAttributeResponse,
    CreateUsualLoginPlacesResponse: CreateUsualLoginPlacesResponse,
    DescribeOverviewStatisticsRequest: DescribeOverviewStatisticsRequest,
    DescribeAgentVulsRequest: DescribeAgentVulsRequest,
    Machine: Machine,
    UsualPlace: UsualPlace,
    DescribeVulInfoResponse: DescribeVulInfoResponse,
    Malware: Malware,
    DescribeProVersionInfoResponse: DescribeProVersionInfoResponse,
    DeleteMachineResponse: DeleteMachineResponse,
    DeleteBruteAttacksRequest: DeleteBruteAttacksRequest,
    CreateUsualLoginPlacesRequest: CreateUsualLoginPlacesRequest,
    Vul: Vul,
    DescribeVulScanResultResponse: DescribeVulScanResultResponse,
    ModifyAlarmAttributeRequest: ModifyAlarmAttributeRequest,
    DescribeOverviewStatisticsResponse: DescribeOverviewStatisticsResponse,
    RecoverMalwaresRequest: RecoverMalwaresRequest,
    TrustMalwaresResponse: TrustMalwaresResponse,
    DescribeUsualLoginPlacesRequest: DescribeUsualLoginPlacesRequest,
    DeleteMachineRequest: DeleteMachineRequest,
    DescribeVulsRequest: DescribeVulsRequest,
    DescribeAgentVulsResponse: DescribeAgentVulsResponse,
    ModifyAutoOpenProVersionConfigRequest: ModifyAutoOpenProVersionConfigRequest,
    ImpactedHost: ImpactedHost,
    DescribeNonlocalLoginPlacesResponse: DescribeNonlocalLoginPlacesResponse,
    DescribeProVersionInfoRequest: DescribeProVersionInfoRequest,
    DescribeImpactedHostsResponse: DescribeImpactedHostsResponse,
    TrustMalwaresRequest: TrustMalwaresRequest,
    CloseProVersionResponse: CloseProVersionResponse,
    DescribeBruteAttacksRequest: DescribeBruteAttacksRequest,
    DescribeImpactedHostsRequest: DescribeImpactedHostsRequest,
    IgnoreImpactedHostsResponse: IgnoreImpactedHostsResponse,
    RescanImpactedHostRequest: RescanImpactedHostRequest,
    RescanImpactedHostResponse: RescanImpactedHostResponse,
    DescribeMachineInfoResponse: DescribeMachineInfoResponse,
    BruteAttack: BruteAttack,
    DeleteUsualLoginPlacesRequest: DeleteUsualLoginPlacesRequest,
    ModifyAlarmAttributeResponse: ModifyAlarmAttributeResponse,
    DescribeVulInfoRequest: DescribeVulInfoRequest,
    DescribeVulsResponse: DescribeVulsResponse,
    Filter: Filter,
    Place: Place,
    MisAlarmNonlocalLoginPlacesRequest: MisAlarmNonlocalLoginPlacesRequest,
    DeleteUsualLoginPlacesResponse: DeleteUsualLoginPlacesResponse,
    NonLocalLoginPlace: NonLocalLoginPlace,
    ModifyAutoOpenProVersionConfigResponse: ModifyAutoOpenProVersionConfigResponse,
    DeleteNonlocalLoginPlacesResponse: DeleteNonlocalLoginPlacesResponse,
    RecoverMalwaresResponse: RecoverMalwaresResponse,
    DeleteMalwaresResponse: DeleteMalwaresResponse,
    SeparateMalwaresRequest: SeparateMalwaresRequest,
    AgentVul: AgentVul,
    SeparateMalwaresResponse: SeparateMalwaresResponse,
    DescribeAlarmAttributeRequest: DescribeAlarmAttributeRequest,
    DescribeMalwaresRequest: DescribeMalwaresRequest,
    DescribeVulScanResultRequest: DescribeVulScanResultRequest,
    MisAlarmNonlocalLoginPlacesResponse: MisAlarmNonlocalLoginPlacesResponse,
    IgnoreImpactedHostsRequest: IgnoreImpactedHostsRequest,
    DescribeMachinesRequest: DescribeMachinesRequest,
    CloseProVersionRequest: CloseProVersionRequest,
    UntrustMalwaresRequest: UntrustMalwaresRequest,
    DescribeUsualLoginPlacesResponse: DescribeUsualLoginPlacesResponse,
    DeleteMalwaresRequest: DeleteMalwaresRequest,
    DescribeMalwaresResponse: DescribeMalwaresResponse,
    UntrustMalwaresResponse: UntrustMalwaresResponse,
    DeleteBruteAttacksResponse: DeleteBruteAttacksResponse,

}
