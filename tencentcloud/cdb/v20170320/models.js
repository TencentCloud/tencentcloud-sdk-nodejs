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
 * ModifyAuditConfig请求参数结构体
 * @class
 */
class ModifyAuditConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 审计日志保存时长。支持值包括：
30 - 一个月；
180 - 六个月；
365 - 一年；
1095 - 三年；
1825 - 五年；
         * @type {number || null}
         */
        this.LogExpireDay = null;

        /**
         * 是否关闭审计服务。可选值：true - 关闭审计服务；false - 不关闭审计服务。默认值为 false。
当关闭审计服务时，会删除用户的审计日志和文件，并删除该实例的所有审计策略。
         * @type {boolean || null}
         */
        this.CloseAudit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogExpireDay = 'LogExpireDay' in params ? params.LogExpireDay : null;
        this.CloseAudit = 'CloseAudit' in params ? params.CloseAudit : null;

    }
}

/**
 * CreateDBInstance请求参数结构体
 * @class
 */
class CreateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例内存大小，单位：MB，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的内存规格。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例硬盘大小，单位：GB，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的硬盘范围。
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 实例时长，单位：月，可选值包括 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 实例数量，默认值为1, 最小值1，最大值为100。
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 可用区信息，该参数缺省时，系统会自动选择一个可用区，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的可用区。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 私有网络 ID，如果不传则默认选择基础网络，请使用 [查询私有网络列表](/document/api/215/15778) 。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 私有网络下的子网 ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用 [查询子网列表](/document/api/215/15784)。
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 项目 ID，不填为默认项目。请使用 [查询项目列表](https://cloud.tencent.com/document/product/378/4400) 接口获取项目 ID。购买只读实例和灾备实例时，项目 ID 默认和主实例保持一致。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 自定义端口，端口支持范围：[ 1024-65535 ]。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 实例类型，默认为 master，支持值包括：master - 表示主实例，dr - 表示灾备实例，ro - 表示只读实例。
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * 实例 ID，购买只读实例时必填，该字段表示只读实例的主实例ID，请使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询云数据库实例 ID。
         * @type {string || null}
         */
        this.MasterInstanceId = null;

        /**
         * MySQL 版本，值包括：5.5、5.6 和 5.7，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的实例版本。
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 设置 root 帐号密码，密码规则：8 - 64 个字符，至少包含字母、数字、字符（支持的字符：_+-&=!@#$%^*()）中的两种，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 数据复制方式，默认为 0，支持值包括：0 - 表示异步复制，1 - 表示半同步复制，2 - 表示强同步复制。
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * 多可用区域，默认为 0，支持值包括：0 - 表示单可用区，1 - 表示多可用区。
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * 备库 1 的可用区信息，默认为 Zone 的值。
         * @type {string || null}
         */
        this.SlaveZone = null;

        /**
         * 参数列表，参数格式如 ParamList.0.Name=auto_increment&ParamList.0.Value=1。可通过 [查询默认的可设置参数列表](https://cloud.tencent.com/document/api/236/32662) 查询支持设置的参数。
         * @type {Array.<ParamInfo> || null}
         */
        this.ParamList = null;

        /**
         * 备库 2 的可用区信息，默认为空，购买强同步主实例时可指定该参数，购买其他类型实例时指定该参数无意义。
         * @type {string || null}
         */
        this.BackupZone = null;

        /**
         * 自动续费标记，可选值为：0 - 不自动续费；1 - 自动续费。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 主实例地域信息，购买灾备实例时，该字段必填。
         * @type {string || null}
         */
        this.MasterRegion = null;

        /**
         * 安全组参数，可使用 [查询项目安全组信息](https://cloud.tencent.com/document/api/236/15850) 接口查询某个项目的安全组详情。
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * 只读实例参数。购买只读实例时，该参数必传。
         * @type {RoGroup || null}
         */
        this.RoGroup = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例标签信息。
         * @type {Array.<TagInfo> || null}
         */
        this.ResourceTags = null;

        /**
         * 置放群组 ID。
         * @type {string || null}
         */
        this.DeployGroupId = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间在当天内唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 实例类型。支持值包括： "HA" - 高可用版实例， "BASIC" - 基础版实例。 不指定则默认为高可用版。
         * @type {string || null}
         */
        this.DeviceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.MasterInstanceId = 'MasterInstanceId' in params ? params.MasterInstanceId : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new ParamInfo();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }
        this.BackupZone = 'BackupZone' in params ? params.BackupZone : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.MasterRegion = 'MasterRegion' in params ? params.MasterRegion : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;

        if (params.RoGroup) {
            let obj = new RoGroup();
            obj.deserialize(params.RoGroup)
            this.RoGroup = obj;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfo();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.DeployGroupId = 'DeployGroupId' in params ? params.DeployGroupId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;

    }
}

/**
 * 实例任务详情
 * @class
 */
class TaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 实例任务 ID。
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 实例任务进度。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 实例任务状态，可能的值包括：
"UNDEFINED" - 未定义；
"INITIAL" - 初始化；
"RUNNING" - 运行中；
"SUCCEED" - 执行成功；
"FAILED" - 执行失败；
"KILLED" - 已终止；
"REMOVED" - 已删除；
"PAUSED" - 已暂停。
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * 实例任务类型，可能的值包括：
"ROLLBACK" - 数据库回档；
"SQL OPERATION" - SQL操作；
"IMPORT DATA" - 数据导入；
"MODIFY PARAM" - 参数设置；
"INITIAL" - 初始化云数据库实例；
"REBOOT" - 重启云数据库实例；
"OPEN GTID" - 开启云数据库实例GTID；
"UPGRADE RO" - 只读实例升级；
"BATCH ROLLBACK" - 数据库批量回档；
"UPGRADE MASTER" - 主实例升级；
"DROP TABLES" - 删除云数据库库表；
"SWITCH DR TO MASTER" - 灾备实例提升为主。
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 实例任务开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 实例任务结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务关联的实例 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 异步任务的请求 ID。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;

    }
}

/**
 * 实例磁盘监控数据
 * @class
 */
class DeviceDiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平均每秒有百分之几的时间用于IO操作
         * @type {Array.<number> || null}
         */
        this.IoRatioPerSec = null;

        /**
         * 平均每次设备I/O操作的等待时间*100，单位为毫秒。例如：该值为201，表示平均每次I/O操作等待时间为：201/100=2.1毫秒
         * @type {Array.<number> || null}
         */
        this.IoWaitTime = null;

        /**
         * 磁盘平均每秒完成的读操作次数总和*100。例如：该值为2002，表示磁盘平均每秒完成读操作为：2002/100=20.2次
         * @type {Array.<number> || null}
         */
        this.Read = null;

        /**
         * 磁盘平均每秒完成的写操作次数总和*100。例如：该值为30001，表示磁盘平均每秒完成写操作为：30001/100=300.01次
         * @type {Array.<number> || null}
         */
        this.Write = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IoRatioPerSec = 'IoRatioPerSec' in params ? params.IoRatioPerSec : null;
        this.IoWaitTime = 'IoWaitTime' in params ? params.IoWaitTime : null;
        this.Read = 'Read' in params ? params.Read : null;
        this.Write = 'Write' in params ? params.Write : null;

    }
}

/**
 * DescribeAccountPrivileges返回参数结构体
 * @class
 */
class DescribeAccountPrivilegesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 全局权限数组。
         * @type {Array.<string> || null}
         */
        this.GlobalPrivileges = null;

        /**
         * 数据库权限数组。
         * @type {Array.<DatabasePrivilege> || null}
         */
        this.DatabasePrivileges = null;

        /**
         * 数据库中的表权限数组。
         * @type {Array.<TablePrivilege> || null}
         */
        this.TablePrivileges = null;

        /**
         * 数据库表中的列权限数组。
         * @type {Array.<ColumnPrivilege> || null}
         */
        this.ColumnPrivileges = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GlobalPrivileges = 'GlobalPrivileges' in params ? params.GlobalPrivileges : null;

        if (params.DatabasePrivileges) {
            this.DatabasePrivileges = new Array();
            for (let z in params.DatabasePrivileges) {
                let obj = new DatabasePrivilege();
                obj.deserialize(params.DatabasePrivileges[z]);
                this.DatabasePrivileges.push(obj);
            }
        }

        if (params.TablePrivileges) {
            this.TablePrivileges = new Array();
            for (let z in params.TablePrivileges) {
                let obj = new TablePrivilege();
                obj.deserialize(params.TablePrivileges[z]);
                this.TablePrivileges.push(obj);
            }
        }

        if (params.ColumnPrivileges) {
            this.ColumnPrivileges = new Array();
            for (let z in params.ColumnPrivileges) {
                let obj = new ColumnPrivilege();
                obj.deserialize(params.ColumnPrivileges[z]);
                this.ColumnPrivileges.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBImportJob请求参数结构体
 * @class
 */
class CreateDBImportJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 文件名称。该文件是指用户已上传到腾讯云的文件。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 云数据库的用户名。
         * @type {string || null}
         */
        this.User = null;

        /**
         * 云数据库实例 User 账号的密码。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 导入的目标数据库名，不传表示不指定数据库。
         * @type {string || null}
         */
        this.DbName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.User = 'User' in params ? params.User : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.DbName = 'DbName' in params ? params.DbName : null;

    }
}

/**
 * DescribeDatabases请求参数结构体
 * @class
 */
class DescribeDatabasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 偏移量，最小值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单次请求数量，默认值为20，最小值为1，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 匹配数据库库名的正则表达式。
         * @type {string || null}
         */
        this.DatabaseRegexp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.DatabaseRegexp = 'DatabaseRegexp' in params ? params.DatabaseRegexp : null;

    }
}

/**
 * DescribeBackupConfig请求参数结构体
 * @class
 */
class DescribeBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
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
 * DescribeRoMinScale返回参数结构体
 * @class
 */
class DescribeRoMinScaleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内存规格大小, 单位为：MB。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 磁盘规格大小, 单位为：GB。
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAuditRule返回参数结构体
 * @class
 */
class CreateAuditRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计规则 ID。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopDBImportJob请求参数结构体
 * @class
 */
class StopDBImportJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;

    }
}

/**
 * RO 实例的权重值
 * @class
 */
class RoWeightValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 权重值。取值范围为 [0, 100]。
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * DescribeSlowLogData返回参数结构体
 * @class
 */
class DescribeSlowLogDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 查询到的记录。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlowLogItem> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SlowLogItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 售卖实例类型
 * @class
 */
class SellType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 售卖实例名称
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * 内核版本号
         * @type {Array.<string> || null}
         */
        this.EngineVersion = null;

        /**
         * 售卖规格详细配置
         * @type {Array.<SellConfig> || null}
         */
        this.Configs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;

        if (params.Configs) {
            this.Configs = new Array();
            for (let z in params.Configs) {
                let obj = new SellConfig();
                obj.deserialize(params.Configs[z]);
                this.Configs.push(obj);
            }
        }

    }
}

/**
 * DescribeDBInstanceInfo返回参数结构体
 * @class
 */
class DescribeDBInstanceInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 是否开通加密，YES 已开通，NO 未开通。
         * @type {string || null}
         */
        this.Encryption = null;

        /**
         * 加密使用的密钥 ID 。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 密钥所在地域。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyRegion = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Encryption = 'Encryption' in params ? params.Encryption : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyRegion = 'KeyRegion' in params ? params.KeyRegion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeErrorLogData请求参数结构体
 * @class
 */
class DescribeErrorLogDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间戳。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间戳。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 要匹配的关键字列表，最多支持15个关键字。
         * @type {Array.<string> || null}
         */
        this.KeyWords = null;

        /**
         * 分页的返回数量，最大为400。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.KeyWords = 'KeyWords' in params ? params.KeyWords : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 数据库实例参数
 * @class
 */
class Parameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数值
         * @type {string || null}
         */
        this.CurrentValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;

    }
}

/**
 * DescribeAuditLogFiles返回参数结构体
 * @class
 */
class DescribeAuditLogFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的审计日志文件个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 审计日志文件详情。
         * @type {Array.<AuditLogFile> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new AuditLogFile();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceRebootTime请求参数结构体
 * @class
 */
class DescribeDBInstanceRebootTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeSlowLogs请求参数结构体
 * @class
 */
class DescribeSlowLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 偏移量，最小值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，默认值为20，最小值为1，最大值为100。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 安全组入站规则
 * @class
 */
class Inbound extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略，ACCEPT 或者 DROP
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 来源 IP 或 IP 段，例如192.168.0.0/16
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * 端口
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * 网络协议，支持 UDP、TCP 等
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 规则限定的方向，进站规则为 INPUT
         * @type {string || null}
         */
        this.Dir = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.Dir = 'Dir' in params ? params.Dir : null;

    }
}

/**
 * AssociateSecurityGroups请求参数结构体
 * @class
 */
class AssociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组 ID。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 实例 ID 列表，一个或者多个实例 ID 组成的数组。
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
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * CreateAccounts返回参数结构体
 * @class
 */
class CreateAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 地域售卖配置
 * @class
 */
class RegionSellConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域中文名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 所属大区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 是否为默认地域
         * @type {number || null}
         */
        this.IsDefaultRegion = null;

        /**
         * 地域名称
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区售卖配置
         * @type {Array.<ZoneSellConf> || null}
         */
        this.ZonesConf = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.IsDefaultRegion = 'IsDefaultRegion' in params ? params.IsDefaultRegion : null;
        this.Region = 'Region' in params ? params.Region : null;

        if (params.ZonesConf) {
            this.ZonesConf = new Array();
            for (let z in params.ZonesConf) {
                let obj = new ZoneSellConf();
                obj.deserialize(params.ZonesConf[z]);
                this.ZonesConf.push(obj);
            }
        }

    }
}

/**
 * 实例可回档时间范围
 * @class
 */
class InstanceRollbackRangeTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询数据库错误码
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 查询数据库错误信息
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 实例ID列表，单个实例Id的格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 可回档时间范围
         * @type {Array.<RollbackTimeRange> || null}
         */
        this.Times = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Times) {
            this.Times = new Array();
            for (let z in params.Times) {
                let obj = new RollbackTimeRange();
                obj.deserialize(params.Times[z]);
                this.Times.push(obj);
            }
        }

    }
}

/**
 * sql文件信息
 * @class
 */
class SqlFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 上传时间
         * @type {string || null}
         */
        this.UploadTime = null;

        /**
         * 上传进度
         * @type {UploadInfo || null}
         */
        this.UploadInfo = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件大小，单位为Bytes
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 上传是否完成标志，可选值：0 - 未完成，1 - 已完成
         * @type {number || null}
         */
        this.IsUploadFinished = null;

        /**
         * 文件ID
         * @type {string || null}
         */
        this.FileId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UploadTime = 'UploadTime' in params ? params.UploadTime : null;

        if (params.UploadInfo) {
            let obj = new UploadInfo();
            obj.deserialize(params.UploadInfo)
            this.UploadInfo = obj;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.IsUploadFinished = 'IsUploadFinished' in params ? params.IsUploadFinished : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

    }
}

/**
 * CreateDeployGroup返回参数结构体
 * @class
 */
class CreateDeployGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 置放群组ID。
         * @type {string || null}
         */
        this.DeployGroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeployGroupId = 'DeployGroupId' in params ? params.DeployGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTables返回参数结构体
 * @class
 */
class DescribeTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的数据库表总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的数据库表信息。
         * @type {Array.<string> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Items = 'Items' in params ? params.Items : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 售卖配置详情
 * @class
 */
class SellConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备类型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 售卖规格描述
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 实例类型
         * @type {string || null}
         */
        this.CdbType = null;

        /**
         * 内存大小，单位为MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * CPU核心数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 磁盘最小规格，单位为GB
         * @type {number || null}
         */
        this.VolumeMin = null;

        /**
         * 磁盘最大规格，单位为GB
         * @type {number || null}
         */
        this.VolumeMax = null;

        /**
         * 磁盘步长，单位为GB
         * @type {number || null}
         */
        this.VolumeStep = null;

        /**
         * 链接数
         * @type {number || null}
         */
        this.Connection = null;

        /**
         * 每秒查询数量
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 每秒IO数量
         * @type {number || null}
         */
        this.Iops = null;

        /**
         * 应用场景描述
         * @type {string || null}
         */
        this.Info = null;

        /**
         * 状态值
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 标签值
         * @type {number || null}
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
        this.Device = 'Device' in params ? params.Device : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CdbType = 'CdbType' in params ? params.CdbType : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.VolumeMin = 'VolumeMin' in params ? params.VolumeMin : null;
        this.VolumeMax = 'VolumeMax' in params ? params.VolumeMax : null;
        this.VolumeStep = 'VolumeStep' in params ? params.VolumeStep : null;
        this.Connection = 'Connection' in params ? params.Connection : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Iops = 'Iops' in params ? params.Iops : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Tag = 'Tag' in params ? params.Tag : null;

    }
}

/**
 * DescribeDBSecurityGroups返回参数结构体
 * @class
 */
class DescribeDBSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组详情。
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 主实例信息
 * @class
 */
class MasterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域信息
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 可用区ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 可用区信息
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例长ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 实例状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例类型
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * 任务状态
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 内存容量
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 硬盘容量
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 实例机型
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * 每秒查询数
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 私有网络ID
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * 独享集群ID
         * @type {string || null}
         */
        this.ExClusterId = null;

        /**
         * 独享集群名称
         * @type {string || null}
         */
        this.ExClusterName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ExClusterId = 'ExClusterId' in params ? params.ExClusterId : null;
        this.ExClusterName = 'ExClusterName' in params ? params.ExClusterName : null;

    }
}

/**
 * DeleteAuditRule请求参数结构体
 * @class
 */
class DeleteAuditRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计规则 ID。
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DeleteParamTemplate返回参数结构体
 * @class
 */
class DeleteParamTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例参数信息
 * @class
 */
class ParamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数值
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeRoMinScale请求参数结构体
 * @class
 */
class DescribeRoMinScaleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读实例ID，格式如：cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，该参数与MasterInstanceId参数不能同时为空。
         * @type {string || null}
         */
        this.RoInstanceId = null;

        /**
         * 主实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，该参数与RoInstanceId参数不能同时为空。注意，当传入参数包含RoInstanceId时，返回值为只读实例升级时的最小规格；当传入参数只包含MasterInstanceId时，返回值为只读实例购买时的最小规格。
         * @type {string || null}
         */
        this.MasterInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoInstanceId = 'RoInstanceId' in params ? params.RoInstanceId : null;
        this.MasterInstanceId = 'MasterInstanceId' in params ? params.MasterInstanceId : null;

    }
}

/**
 * DescribeDefaultParams请求参数结构体
 * @class
 */
class DescribeDefaultParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * mysql版本，目前支持 ["5.1", "5.5", "5.6", "5.7"]。
         * @type {string || null}
         */
        this.EngineVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;

    }
}

/**
 * 云数据库切换记录
 * @class
 */
class DBSwitchInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 切换时间，格式为：2017-09-03 01:34:31
         * @type {string || null}
         */
        this.SwitchTime = null;

        /**
         * 切换类型，可能的返回值为：TRANSFER - 数据迁移；MASTER2SLAVE - 主备切换；RECOVERY - 主从恢复
         * @type {string || null}
         */
        this.SwitchType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SwitchTime = 'SwitchTime' in params ? params.SwitchTime : null;
        this.SwitchType = 'SwitchType' in params ? params.SwitchType : null;

    }
}

/**
 * ModifyNameOrDescByDpId返回参数结构体
 * @class
 */
class ModifyNameOrDescByDpIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopDBImportJob返回参数结构体
 * @class
 */
class StopDBImportJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBPrice返回参数结构体
 * @class
 */
class DescribeDBPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例价格，单位：分（人民币）。
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 实例原价，单位：分（人民币）。
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Price = 'Price' in params ? params.Price : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTasks返回参数结构体
 * @class
 */
class DescribeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的实例总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的实例任务信息。
         * @type {Array.<TaskDetail> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new TaskDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReleaseIsolatedDBInstances返回参数结构体
 * @class
 */
class ReleaseIsolatedDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解隔离操作的结果集。
         * @type {Array.<ReleaseResult> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ReleaseResult();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 审计日志过滤条件。查询审计日志时，用户过滤返回的审计日志。
 * @class
 */
class AuditLogFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端地址。
         * @type {Array.<string> || null}
         */
        this.Host = null;

        /**
         * 用户名。
         * @type {Array.<string> || null}
         */
        this.User = null;

        /**
         * 数据库名称。
         * @type {Array.<string> || null}
         */
        this.DBName = null;

        /**
         * 表名称。
         * @type {Array.<string> || null}
         */
        this.TableName = null;

        /**
         * 审计策略名称。
         * @type {Array.<string> || null}
         */
        this.PolicyName = null;

        /**
         * SQL 语句。支持模糊匹配。
         * @type {string || null}
         */
        this.Sql = null;

        /**
         * SQL 类型。目前支持："SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "SET", "REPLACE", "EXECUTE"。
         * @type {string || null}
         */
        this.SqlType = null;

        /**
         * 执行时间。单位为：ms。表示筛选执行时间大于该值的审计日志。
         * @type {number || null}
         */
        this.ExecTime = null;

        /**
         * 影响行数。表示筛选影响行数大于该值的审计日志。
         * @type {number || null}
         */
        this.AffectRows = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.User = 'User' in params ? params.User : null;
        this.DBName = 'DBName' in params ? params.DBName : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Sql = 'Sql' in params ? params.Sql : null;
        this.SqlType = 'SqlType' in params ? params.SqlType : null;
        this.ExecTime = 'ExecTime' in params ? params.ExecTime : null;
        this.AffectRows = 'AffectRows' in params ? params.AffectRows : null;

    }
}

/**
 * DescribeParamTemplates请求参数结构体
 * @class
 */
class DescribeParamTemplatesRequest extends  AbstractModel {
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
 * DescribeRollbackRangeTime请求参数结构体
 * @class
 */
class DescribeRollbackRangeTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 列表，单个实例 ID 的格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeBackupOverview请求参数结构体
 * @class
 */
class DescribeBackupOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的云数据库产品类型，目前仅支持 "mysql"。
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
 * DescribeBackups请求参数结构体
 * @class
 */
class DescribeBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 偏移量，最小值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，默认值为20，最小值为1，最大值为100。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeAuditPolicies返回参数结构体
 * @class
 */
class DescribeAuditPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的审计策略个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 审计策略详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AuditPolicy> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new AuditPolicy();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceParamRecords返回参数结构体
 * @class
 */
class DescribeInstanceParamRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的记录数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 参数修改记录。
         * @type {Array.<ParamRecord> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParamRecord();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceGTID返回参数结构体
 * @class
 */
class DescribeDBInstanceGTIDResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * GTID 是否开通的标记，可能的取值为：0 - 未开通，1 - 已开通。
         * @type {number || null}
         */
        this.IsGTIDOpen = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsGTIDOpen = 'IsGTIDOpen' in params ? params.IsGTIDOpen : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenDBInstanceGTID返回参数结构体
 * @class
 */
class OpenDBInstanceGTIDResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBZoneConfig请求参数结构体
 * @class
 */
class DescribeDBZoneConfigRequest extends  AbstractModel {
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
 * DescribeDBInstanceRebootTime返回参数结构体
 * @class
 */
class DescribeDBInstanceRebootTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的实例总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的参数信息。
         * @type {Array.<InstanceRebootTime> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceRebootTime();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteParamTemplate请求参数结构体
 * @class
 */
class DeleteParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板ID。
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * 灾备实例信息
 * @class
 */
class DrInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 灾备实例状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 可用区信息
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 地域信息
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 实例同步状态。可能的返回值为：
0 - 灾备未同步；
1 - 灾备同步中；
2 - 灾备同步成功；
3 - 灾备同步失败；
4 - 灾备同步修复中。
         * @type {number || null}
         */
        this.SyncStatus = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例类型
         * @type {number || null}
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
        this.Status = 'Status' in params ? params.Status : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.SyncStatus = 'SyncStatus' in params ? params.SyncStatus : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * 只读组参数
 * @class
 */
class RoGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读组模式，可选值为：alone-系统自动分配只读组；allinone-新建只读组；join-使用现有只读组。
         * @type {string || null}
         */
        this.RoGroupMode = null;

        /**
         * 只读组 ID。
         * @type {string || null}
         */
        this.RoGroupId = null;

        /**
         * 只读组名称。
         * @type {string || null}
         */
        this.RoGroupName = null;

        /**
         * 是否启用延迟超限剔除功能，启用该功能后，只读实例与主实例的延迟超过延迟阈值，只读实例将被隔离。可选值：1-启用；0-不启用。
         * @type {number || null}
         */
        this.RoOfflineDelay = null;

        /**
         * 延迟阈值。
         * @type {number || null}
         */
        this.RoMaxDelayTime = null;

        /**
         * 最少实例保留个数，若购买只读实例数量小于设置数量将不做剔除。
         * @type {number || null}
         */
        this.MinRoInGroup = null;

        /**
         * 读写权重分配模式，可选值：system-系统自动分配；custom-自定义。
         * @type {string || null}
         */
        this.WeightMode = null;

        /**
         * 权重值。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 只读组中的只读实例详情。
         * @type {Array.<RoInstanceInfo> || null}
         */
        this.RoInstances = null;

        /**
         * 只读组的内网 IP。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 只读组的内网端口号。
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 私有网络 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 子网 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 只读组所在的地域。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoGroupRegion = null;

        /**
         * 只读组所在的可用区。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoGroupZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoGroupMode = 'RoGroupMode' in params ? params.RoGroupMode : null;
        this.RoGroupId = 'RoGroupId' in params ? params.RoGroupId : null;
        this.RoGroupName = 'RoGroupName' in params ? params.RoGroupName : null;
        this.RoOfflineDelay = 'RoOfflineDelay' in params ? params.RoOfflineDelay : null;
        this.RoMaxDelayTime = 'RoMaxDelayTime' in params ? params.RoMaxDelayTime : null;
        this.MinRoInGroup = 'MinRoInGroup' in params ? params.MinRoInGroup : null;
        this.WeightMode = 'WeightMode' in params ? params.WeightMode : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

        if (params.RoInstances) {
            this.RoInstances = new Array();
            for (let z in params.RoInstances) {
                let obj = new RoInstanceInfo();
                obj.deserialize(params.RoInstances[z]);
                this.RoInstances.push(obj);
            }
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.RoGroupRegion = 'RoGroupRegion' in params ? params.RoGroupRegion : null;
        this.RoGroupZone = 'RoGroupZone' in params ? params.RoGroupZone : null;

    }
}

/**
 * DescribeDataBackupOverview返回参数结构体
 * @class
 */
class DescribeDataBackupOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前地域的数据备份总容量（包含自动备份和手动备份，单位为字节）。
         * @type {number || null}
         */
        this.DataBackupVolume = null;

        /**
         * 当前地域的数据备份总个数。
         * @type {number || null}
         */
        this.DataBackupCount = null;

        /**
         * 当前地域的自动备份总容量。
         * @type {number || null}
         */
        this.AutoBackupVolume = null;

        /**
         * 当前地域的自动备份总个数。
         * @type {number || null}
         */
        this.AutoBackupCount = null;

        /**
         * 当前地域的手动备份总容量。
         * @type {number || null}
         */
        this.ManualBackupVolume = null;

        /**
         * 当前地域的手动备份总个数。
         * @type {number || null}
         */
        this.ManualBackupCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataBackupVolume = 'DataBackupVolume' in params ? params.DataBackupVolume : null;
        this.DataBackupCount = 'DataBackupCount' in params ? params.DataBackupCount : null;
        this.AutoBackupVolume = 'AutoBackupVolume' in params ? params.AutoBackupVolume : null;
        this.AutoBackupCount = 'AutoBackupCount' in params ? params.AutoBackupCount : null;
        this.ManualBackupVolume = 'ManualBackupVolume' in params ? params.ManualBackupVolume : null;
        this.ManualBackupCount = 'ManualBackupCount' in params ? params.ManualBackupCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例参数的详细描述
 * @class
 */
class ParameterDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数类型
         * @type {string || null}
         */
        this.ParamType = null;

        /**
         * 参数默认值
         * @type {string || null}
         */
        this.Default = null;

        /**
         * 参数描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 参数当前值
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 修改参数后，是否需要重启数据库以使参数生效。可能的值包括：0-不需要重启；1-需要重启
         * @type {number || null}
         */
        this.NeedReboot = null;

        /**
         * 参数允许的最大值
         * @type {number || null}
         */
        this.Max = null;

        /**
         * 参数允许的最小值
         * @type {number || null}
         */
        this.Min = null;

        /**
         * 参数的可选枚举值。如果为非枚举参数，则为空
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ParamType = 'ParamType' in params ? params.ParamType : null;
        this.Default = 'Default' in params ? params.Default : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.NeedReboot = 'NeedReboot' in params ? params.NeedReboot : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;

    }
}

/**
 * DeleteAuditPolicy请求参数结构体
 * @class
 */
class DeleteAuditPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计策略 ID。
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 实例 ID。
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 实例备份统计项
 * @class
 */
class BackupSummaryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 该实例自动数据备份的个数。
         * @type {number || null}
         */
        this.AutoBackupCount = null;

        /**
         * 该实例自动数据备份的容量。
         * @type {number || null}
         */
        this.AutoBackupVolume = null;

        /**
         * 该实例手动数据备份的个数。
         * @type {number || null}
         */
        this.ManualBackupCount = null;

        /**
         * 该实例手动数据备份的容量。
         * @type {number || null}
         */
        this.ManualBackupVolume = null;

        /**
         * 该实例总的数据备份（包含自动备份和手动备份）个数。
         * @type {number || null}
         */
        this.DataBackupCount = null;

        /**
         * 该实例总的数据备份容量。
         * @type {number || null}
         */
        this.DataBackupVolume = null;

        /**
         * 该实例日志备份的个数。
         * @type {number || null}
         */
        this.BinlogBackupCount = null;

        /**
         * 该实例日志备份的容量。
         * @type {number || null}
         */
        this.BinlogBackupVolume = null;

        /**
         * 该实例的总备份（包含数据备份和日志备份）占用容量。
         * @type {number || null}
         */
        this.BackupVolume = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AutoBackupCount = 'AutoBackupCount' in params ? params.AutoBackupCount : null;
        this.AutoBackupVolume = 'AutoBackupVolume' in params ? params.AutoBackupVolume : null;
        this.ManualBackupCount = 'ManualBackupCount' in params ? params.ManualBackupCount : null;
        this.ManualBackupVolume = 'ManualBackupVolume' in params ? params.ManualBackupVolume : null;
        this.DataBackupCount = 'DataBackupCount' in params ? params.DataBackupCount : null;
        this.DataBackupVolume = 'DataBackupVolume' in params ? params.DataBackupVolume : null;
        this.BinlogBackupCount = 'BinlogBackupCount' in params ? params.BinlogBackupCount : null;
        this.BinlogBackupVolume = 'BinlogBackupVolume' in params ? params.BinlogBackupVolume : null;
        this.BackupVolume = 'BackupVolume' in params ? params.BackupVolume : null;

    }
}

/**
 * SwitchForUpgrade请求参数结构体
 * @class
 */
class SwitchForUpgradeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
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
 * ModifyInstanceTag返回参数结构体
 * @class
 */
class ModifyInstanceTagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateParamTemplate返回参数结构体
 * @class
 */
class CreateParamTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板 ID。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBInstanceHour返回参数结构体
 * @class
 */
class CreateDBInstanceHourResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短订单 ID。
         * @type {Array.<string> || null}
         */
        this.DealIds = null;

        /**
         * 实例 ID 列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReleaseIsolatedDBInstances请求参数结构体
 * @class
 */
class ReleaseIsolatedDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 数组，单个实例 ID 格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * 二进制日志信息
 * @class
 */
class BinlogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * binlog 日志备份文件名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备份文件大小，单位：Byte
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 文件存储时间，时间格式：2016-03-17 02:10:37
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 内网下载地址
         * @type {string || null}
         */
        this.IntranetUrl = null;

        /**
         * 外网下载地址
         * @type {string || null}
         */
        this.InternetUrl = null;

        /**
         * 日志具体类型，可能的值有：binlog - 二进制日志
         * @type {string || null}
         */
        this.Type = null;

        /**
         * binlog 文件起始时间
         * @type {string || null}
         */
        this.BinlogStartTime = null;

        /**
         * binlog 文件截止时间
         * @type {string || null}
         */
        this.BinlogFinishTime = null;

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
        this.Date = 'Date' in params ? params.Date : null;
        this.IntranetUrl = 'IntranetUrl' in params ? params.IntranetUrl : null;
        this.InternetUrl = 'InternetUrl' in params ? params.InternetUrl : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.BinlogStartTime = 'BinlogStartTime' in params ? params.BinlogStartTime : null;
        this.BinlogFinishTime = 'BinlogFinishTime' in params ? params.BinlogFinishTime : null;

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
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 记录偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单次请求返回的数量，默认值为20，最小值为1，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 匹配账号名的正则表达式，规则同 MySQL 官网。
         * @type {string || null}
         */
        this.AccountRegexp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.AccountRegexp = 'AccountRegexp' in params ? params.AccountRegexp : null;

    }
}

/**
 * DescribeTasks请求参数结构体
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 异步任务请求 ID，执行云数据库相关操作返回的 AsyncRequestId。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 任务类型，不传值则查询所有任务类型，支持的值包括：
1 - 数据库回档；
2 - SQL操作；
3 - 数据导入；
5 - 参数设置；
6 - 初始化云数据库实例；
7 - 重启云数据库实例；
8 - 开启云数据库实例GTID；
9 - 只读实例升级；
10 - 数据库批量回档；
11 - 主实例升级；
12 - 删除云数据库库表；
13 - 灾备实例提升为主。
         * @type {Array.<number> || null}
         */
        this.TaskTypes = null;

        /**
         * 任务状态，不传值则查询所有任务状态，支持的值包括：
-1 - 未定义；
0 - 初始化；
1 - 运行中；
2 - 执行成功；
3 - 执行失败；
4 - 已终止；
5 - 已删除；
6 - 已暂停。
         * @type {Array.<number> || null}
         */
        this.TaskStatus = null;

        /**
         * 第一个任务的开始时间，用于范围查询，时间格式如：2017-12-31 10:40:01。
         * @type {string || null}
         */
        this.StartTimeBegin = null;

        /**
         * 最后一个任务的开始时间，用于范围查询，时间格式如：2017-12-31 10:40:01。
         * @type {string || null}
         */
        this.StartTimeEnd = null;

        /**
         * 记录偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单次请求返回的数量，默认值为20，最大值为100。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.TaskTypes = 'TaskTypes' in params ? params.TaskTypes : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.StartTimeBegin = 'StartTimeBegin' in params ? params.StartTimeBegin : null;
        this.StartTimeEnd = 'StartTimeEnd' in params ? params.StartTimeEnd : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * IsolateDBInstance返回参数结构体
 * @class
 */
class IsolateDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。(该返回字段目前已废弃，可以通过 DescribeDBInstances 接口查询实例的隔离状态)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 从库的配置信息
 * @class
 */
class SlaveConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 从库复制方式，可能的返回值：aysnc-异步，semisync-半同步
         * @type {string || null}
         */
        this.ReplicationMode = null;

        /**
         * 从库可用区的正式名称，如ap-shanghai-1
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
        this.ReplicationMode = 'ReplicationMode' in params ? params.ReplicationMode : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * DescribeErrorLogData返回参数结构体
 * @class
 */
class DescribeErrorLogDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的记录。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ErrlogItem> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ErrlogItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddTimeWindow请求参数结构体
 * @class
 */
class AddTimeWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 星期一的可维护时间段，其中每一个时间段的格式形如：10:00-12:00；起始时间按半个小时对齐；最短半个小时，最长三个小时；最多设置两个时间段；下同。
         * @type {Array.<string> || null}
         */
        this.Monday = null;

        /**
         * 星期二的可维护时间窗口。
         * @type {Array.<string> || null}
         */
        this.Tuesday = null;

        /**
         * 星期三的可维护时间窗口。
         * @type {Array.<string> || null}
         */
        this.Wednesday = null;

        /**
         * 星期四的可维护时间窗口。
         * @type {Array.<string> || null}
         */
        this.Thursday = null;

        /**
         * 星期五的可维护时间窗口。
         * @type {Array.<string> || null}
         */
        this.Friday = null;

        /**
         * 星期六的可维护时间窗口。
         * @type {Array.<string> || null}
         */
        this.Saturday = null;

        /**
         * 星期日的可维护时间窗口。
         * @type {Array.<string> || null}
         */
        this.Sunday = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Monday = 'Monday' in params ? params.Monday : null;
        this.Tuesday = 'Tuesday' in params ? params.Tuesday : null;
        this.Wednesday = 'Wednesday' in params ? params.Wednesday : null;
        this.Thursday = 'Thursday' in params ? params.Thursday : null;
        this.Friday = 'Friday' in params ? params.Friday : null;
        this.Saturday = 'Saturday' in params ? params.Saturday : null;
        this.Sunday = 'Sunday' in params ? params.Sunday : null;

    }
}

/**
 * 导入任务记录
 * @class
 */
class ImportRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 状态值
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 执行时间
         * @type {number || null}
         */
        this.CostTime = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 后端任务ID
         * @type {string || null}
         */
        this.WorkId = null;

        /**
         * 导入文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 执行进度
         * @type {number || null}
         */
        this.Process = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 文件大小
         * @type {string || null}
         */
        this.FileSize = null;

        /**
         * 任务执行信息
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 任务ID
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 导入库表名
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 异步任务的请求ID
         * @type {string || null}
         */
        this.AsyncRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Process = 'Process' in params ? params.Process : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;

    }
}

/**
 * DeleteAuditLogFile返回参数结构体
 * @class
 */
class DeleteAuditLogFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRollbackTaskDetail返回参数结构体
 * @class
 */
class DescribeRollbackTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 回档任务详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RollbackTask> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new RollbackTask();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAccounts请求参数结构体
 * @class
 */
class CreateAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 云数据库账号。
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * 新账户的密码。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 备注信息。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * CreateDBInstanceHour请求参数结构体
 * @class
 */
class CreateDBInstanceHourRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例数量，默认值为 1，最小值 1，最大值为 100。
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 实例内存大小，单位：MB，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的内存规格。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例硬盘大小，单位：GB，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的硬盘范围。
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * MySQL 版本，值包括：5.5、5.6 和 5.7，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的实例版本。
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 私有网络 ID，如果不传则默认选择基础网络，请使用 [查询私有网络列表](/document/api/215/15778) 。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 私有网络下的子网 ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用[查询子网列表](/document/api/215/15784)。
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 项目 ID，不填为默认项目。请使用 [查询项目列表](https://cloud.tencent.com/document/product/378/4400) 接口获取项目 ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 可用区信息，该参数缺省时，系统会自动选择一个可用区，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的可用区。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例 ID，购买只读实例或者灾备实例时必填，该字段表示只读实例或者灾备实例的主实例 ID，请使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询云数据库实例 ID。
         * @type {string || null}
         */
        this.MasterInstanceId = null;

        /**
         * 实例类型，默认为 master，支持值包括：master - 表示主实例，dr - 表示灾备实例，ro - 表示只读实例。
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * 主实例的可用区信息，购买灾备实例时必填。
         * @type {string || null}
         */
        this.MasterRegion = null;

        /**
         * 自定义端口，端口支持范围：[ 1024-65535 ] 。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 设置 root 帐号密码，密码规则：8 - 64 个字符，至少包含字母、数字、字符（支持的字符：_+-&=!@#$%^*()）中的两种，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 参数列表，参数格式如 ParamList.0.Name=auto_increment&ParamList.0.Value=1。可通过 [查询默认的可设置参数列表](https://cloud.tencent.com/document/api/236/32662) 查询支持设置的参数。
         * @type {Array.<ParamInfo> || null}
         */
        this.ParamList = null;

        /**
         * 数据复制方式，默认为 0，支持值包括：0 - 表示异步复制，1 - 表示半同步复制，2 - 表示强同步复制，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * 多可用区域，默认为 0，支持值包括：0 - 表示单可用区，1 - 表示多可用区，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * 备库 1 的可用区信息，默认为 Zone 的值，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。
         * @type {string || null}
         */
        this.SlaveZone = null;

        /**
         * 备库 2 的可用区信息，默认为空，购买强同步主实例时可指定该参数，购买其他类型实例时指定该参数无意义。
         * @type {string || null}
         */
        this.BackupZone = null;

        /**
         * 安全组参数，可使用 [查询项目安全组信息](https://cloud.tencent.com/document/api/236/15850) 接口查询某个项目的安全组详情。
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * 只读实例信息。购买只读实例时，该参数必传。
         * @type {RoGroup || null}
         */
        this.RoGroup = null;

        /**
         * 购买按量计费实例该字段无意义。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例标签信息。
         * @type {Array.<TagInfo> || null}
         */
        this.ResourceTags = null;

        /**
         * 置放群组 ID。
         * @type {string || null}
         */
        this.DeployGroupId = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间在当天内唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 实例类型。支持值包括： "HA" - 高可用版实例， "BASIC" - 基础版实例。 不指定则默认为高可用版。
         * @type {string || null}
         */
        this.DeviceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.MasterInstanceId = 'MasterInstanceId' in params ? params.MasterInstanceId : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.MasterRegion = 'MasterRegion' in params ? params.MasterRegion : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new ParamInfo();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;
        this.BackupZone = 'BackupZone' in params ? params.BackupZone : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;

        if (params.RoGroup) {
            let obj = new RoGroup();
            obj.deserialize(params.RoGroup)
            this.RoGroup = obj;
        }
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfo();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.DeployGroupId = 'DeployGroupId' in params ? params.DeployGroupId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;

    }
}

/**
 * DescribeDeployGroupList请求参数结构体
 * @class
 */
class DescribeDeployGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 置放群组 ID。
         * @type {string || null}
         */
        this.DeployGroupId = null;

        /**
         * 置放群组名称。
         * @type {string || null}
         */
        this.DeployGroupName = null;

        /**
         * 返回数量，默认为20，最大值为100。
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
        this.DeployGroupId = 'DeployGroupId' in params ? params.DeployGroupId : null;
        this.DeployGroupName = 'DeployGroupName' in params ? params.DeployGroupName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 用于回档的实例详情
 * @class
 */
class RollbackInstancesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云数据库实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 回档策略。可选值为：table、db、full；默认值为full。table - 急速回档模式，仅导入所选中表级别的备份和binlog，如有跨表操作，且关联表未被同时选中，将会导致回档失败，该模式下参数Databases必须为空；db - 快速模式，仅导入所选中库级别的备份和binlog，如有跨库操作，且关联库未被同时选中，将会导致回档失败；full - 普通回档模式，将导入整个实例的备份和binlog，速度较慢。
         * @type {string || null}
         */
        this.Strategy = null;

        /**
         * 数据库回档时间，时间格式为：yyyy-mm-dd hh:mm:ss
         * @type {string || null}
         */
        this.RollbackTime = null;

        /**
         * 待回档的数据库信息，表示整库回档
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RollbackDBName> || null}
         */
        this.Databases = null;

        /**
         * 待回档的数据库表信息，表示按表回档
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RollbackTables> || null}
         */
        this.Tables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.RollbackTime = 'RollbackTime' in params ? params.RollbackTime : null;

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new RollbackDBName();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }

        if (params.Tables) {
            this.Tables = new Array();
            for (let z in params.Tables) {
                let obj = new RollbackTables();
                obj.deserialize(params.Tables[z]);
                this.Tables.push(obj);
            }
        }

    }
}

/**
 * DescribeParamTemplateInfo请求参数结构体
 * @class
 */
class DescribeParamTemplateInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板 ID。
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * 备份详细信息
 * @class
 */
class BackupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份文件名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备份文件大小，单位：Byte
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 备份快照时间，时间格式：2016-03-17 02:10:37
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 内网下载地址
         * @type {string || null}
         */
        this.IntranetUrl = null;

        /**
         * 外网下载地址
         * @type {string || null}
         */
        this.InternetUrl = null;

        /**
         * 日志具体类型。可能的值有 "logical": 逻辑冷备， "physical": 物理冷备。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 备份子任务的ID，删除备份文件时使用
         * @type {number || null}
         */
        this.BackupId = null;

        /**
         * 备份任务状态。可能的值有 "SUCCESS": 备份成功， "FAILED": 备份失败， "RUNNING": 备份进行中。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 备份任务的完成时间
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * （该值将废弃，不建议使用）备份的创建者，可能的值：SYSTEM - 系统创建，Uin - 发起者Uin值。
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * 备份任务的开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 备份方法。可能的值有 "full": 全量备份， "partial": 部分备份。
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 备份方式。可能的值有 "manual": 手动备份， "automatic": 自动备份。
         * @type {string || null}
         */
        this.Way = null;

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
        this.Date = 'Date' in params ? params.Date : null;
        this.IntranetUrl = 'IntranetUrl' in params ? params.IntranetUrl : null;
        this.InternetUrl = 'InternetUrl' in params ? params.InternetUrl : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Way = 'Way' in params ? params.Way : null;

    }
}

/**
 * CloseWanService返回参数结构体
 * @class
 */
class CloseWanServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstances请求参数结构体
 * @class
 */
class DescribeDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 ID，可使用 [查询项目列表](https://cloud.tencent.com/document/product/378/4400) 接口查询项目 ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例类型，可取值：1 - 主实例，2 - 灾备实例，3 - 只读实例。
         * @type {Array.<number> || null}
         */
        this.InstanceTypes = null;

        /**
         * 实例的内网 IP 地址。
         * @type {Array.<string> || null}
         */
        this.Vips = null;

        /**
         * 实例状态，可取值：<br>0 - 创建中<br>1 - 运行中<br>4 - 正在进行隔离操作<br>5 - 隔离中（可在回收站恢复开机）
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 偏移量，默认值为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单次请求返回的数量，默认值为 20，最大值为 2000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 安全组 ID。当使用安全组 ID 为过滤条件时，需指定 WithSecurityGroup 参数为 1。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 付费类型，可取值：0 - 包年包月，1 - 小时计费。
         * @type {Array.<number> || null}
         */
        this.PayTypes = null;

        /**
         * 实例名称。
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * 实例任务状态，可能取值：<br>0 - 没有任务<br>1 - 升级中<br>2 - 数据导入中<br>3 - 开放Slave中<br>4 - 外网访问开通中<br>5 - 批量操作执行中<br>6 - 回档中<br>7 - 外网访问关闭中<br>8 - 密码修改中<br>9 - 实例名修改中<br>10 - 重启中<br>12 - 自建迁移中<br>13 - 删除库表中<br>14 - 灾备实例创建同步中<br>15 - 升级待切换<br>16 - 升级切换中<br>17 - 升级切换完成<br>19 - 参数设置待执行
         * @type {Array.<number> || null}
         */
        this.TaskStatus = null;

        /**
         * 实例数据库引擎版本，可能取值：5.1、5.5、5.6 和 5.7。
         * @type {Array.<string> || null}
         */
        this.EngineVersions = null;

        /**
         * 私有网络的 ID。
         * @type {Array.<number> || null}
         */
        this.VpcIds = null;

        /**
         * 可用区的 ID。
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

        /**
         * 子网 ID。
         * @type {Array.<number> || null}
         */
        this.SubnetIds = null;

        /**
         * 是否锁定标记。
         * @type {Array.<number> || null}
         */
        this.CdbErrors = null;

        /**
         * 返回结果集排序的字段，目前支持："InstanceId"，"InstanceName"，"CreateTime"，"DeadlineTime"。
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 返回结果集排序方式，目前支持："ASC" 或者 "DESC"。
         * @type {string || null}
         */
        this.OrderDirection = null;

        /**
         * 是否以安全组 ID 为过滤条件。
         * @type {number || null}
         */
        this.WithSecurityGroup = null;

        /**
         * 是否包含独享集群详细信息，可取值：0 - 不包含，1 - 包含。
         * @type {number || null}
         */
        this.WithExCluster = null;

        /**
         * 独享集群 ID。
         * @type {string || null}
         */
        this.ExClusterId = null;

        /**
         * 实例 ID。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 初始化标记，可取值：0 - 未初始化，1 - 初始化。
         * @type {number || null}
         */
        this.InitFlag = null;

        /**
         * 是否包含灾备关系对应的实例，可取值：0 - 不包含，1 - 包含。默认取值为1。如果拉取主实例，则灾备关系的数据在DrInfo字段中， 如果拉取灾备实例， 则灾备关系的数据在MasterInfo字段中。灾备关系中只包含部分基本的数据，详细的数据需要自行调接口拉取。
         * @type {number || null}
         */
        this.WithDr = null;

        /**
         * 是否包含只读实例，可取值：0 - 不包含，1 - 包含。默认取值为1。
         * @type {number || null}
         */
        this.WithRo = null;

        /**
         * 是否包含主实例，可取值：0 - 不包含，1 - 包含。默认取值为1。
         * @type {number || null}
         */
        this.WithMaster = null;

        /**
         * 置放群组ID列表。
         * @type {Array.<string> || null}
         */
        this.DeployGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;
        this.Vips = 'Vips' in params ? params.Vips : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.PayTypes = 'PayTypes' in params ? params.PayTypes : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.EngineVersions = 'EngineVersions' in params ? params.EngineVersions : null;
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.CdbErrors = 'CdbErrors' in params ? params.CdbErrors : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;
        this.WithSecurityGroup = 'WithSecurityGroup' in params ? params.WithSecurityGroup : null;
        this.WithExCluster = 'WithExCluster' in params ? params.WithExCluster : null;
        this.ExClusterId = 'ExClusterId' in params ? params.ExClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InitFlag = 'InitFlag' in params ? params.InitFlag : null;
        this.WithDr = 'WithDr' in params ? params.WithDr : null;
        this.WithRo = 'WithRo' in params ? params.WithRo : null;
        this.WithMaster = 'WithMaster' in params ? params.WithMaster : null;
        this.DeployGroupIds = 'DeployGroupIds' in params ? params.DeployGroupIds : null;

    }
}

/**
 * DescribeDBSecurityGroups请求参数结构体
 * @class
 */
class DescribeDBSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
 * ModifyDBInstanceVipVport返回参数结构体
 * @class
 */
class ModifyDBInstanceVipVportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID。(该返回字段目前已废弃)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSwitchRecords返回参数结构体
 * @class
 */
class DescribeDBSwitchRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例切换记录的总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例切换记录详情。
         * @type {Array.<DBSwitchInfo> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new DBSwitchInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表名
 * @class
 */
class TableName extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表名
         * @type {string || null}
         */
        this.TableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;

    }
}

/**
 * RenewDBInstance请求参数结构体
 * @class
 */
class RenewDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待续费的实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872)。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 续费时长，单位：月，可选值包括 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 如果需要将按量计费实例续费为包年包月的实例，该入参的值需要指定为 "PREPAID" 。
         * @type {string || null}
         */
        this.ModifyPayType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.ModifyPayType = 'ModifyPayType' in params ? params.ModifyPayType : null;

    }
}

/**
 * 用于回档的数据库表名
 * @class
 */
class RollbackTableName extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回档前的原数据库表名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 回档后的新数据库表名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewTableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.NewTableName = 'NewTableName' in params ? params.NewTableName : null;

    }
}

/**
 * DeleteBackup返回参数结构体
 * @class
 */
class DeleteBackupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceParam请求参数结构体
 * @class
 */
class ModifyInstanceParamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例短 ID 列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 要修改的参数列表。每一个元素是 Name 和 CurrentValue 的组合。Name 是参数名，CurrentValue 是要修改成的值。
         * @type {Array.<Parameter> || null}
         */
        this.ParamList = null;

        /**
         * 模板id，ParamList和TemplateId必须至少传其中之一
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 执行参数调整任务的方式，默认为 0。支持值包括：0 - 立刻执行，1 - 时间窗执行；当该值为 1 时，每次只能传一个实例（InstanceIds数量为1）
         * @type {number || null}
         */
        this.WaitSwitch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new Parameter();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.WaitSwitch = 'WaitSwitch' in params ? params.WaitSwitch : null;

    }
}

/**
 * DescribeProjectSecurityGroups返回参数结构体
 * @class
 */
class DescribeProjectSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组详情。
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceProject请求参数结构体
 * @class
 */
class ModifyDBInstanceProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 数组，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 项目的 ID。
         * @type {number || null}
         */
        this.NewProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.NewProjectId = 'NewProjectId' in params ? params.NewProjectId : null;

    }
}

/**
 * CreateAuditLogFile返回参数结构体
 * @class
 */
class CreateAuditLogFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计日志文件名称。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupSummaries请求参数结构体
 * @class
 */
class DescribeBackupSummariesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的云数据库产品类型，目前仅支持 "mysql"。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 分页查询数据的偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询数据的条目限制，默认值为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 指定按某一项排序，可选值包括： BackupVolume: 备份容量， DataBackupVolume: 数据备份容量， BinlogBackupVolume: 日志备份容量， AutoBackupVolume: 自动备份容量， ManualBackupVolume: 手动备份容量。
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 指定排序方向，可选值包括： ASC: 正序， DESC: 逆序。
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
        this.Product = 'Product' in params ? params.Product : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * StartBatchRollback返回参数结构体
 * @class
 */
class StartBatchRollbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoGroups请求参数结构体
 * @class
 */
class DescribeRoGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cdb-c1nl9rpv或者cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
 * DescribeDBSwitchRecords请求参数结构体
 * @class
 */
class DescribeDBSwitchRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，默认值为 50，最小值为 1，最大值为 2000。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyBackupConfig返回参数结构体
 * @class
 */
class ModifyBackupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSupportedPrivileges请求参数结构体
 * @class
 */
class DescribeSupportedPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
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
 * DescribeAsyncRequestInfo返回参数结构体
 * @class
 */
class DescribeAsyncRequestInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行结果。可能的取值：INITIAL - 初始化，RUNNING - 运行中，SUCCESS - 执行成功，FAILED - 执行失败，KILLED - 已终止，REMOVED - 已删除，PAUSED - 终止中。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务执行信息描述。
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
 * CreateDBInstance返回参数结构体
 * @class
 */
class CreateDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短订单 ID。
         * @type {Array.<string> || null}
         */
        this.DealIds = null;

        /**
         * 实例 ID 列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceTag请求参数结构体
 * @class
 */
class ModifyInstanceTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 要增加或修改的标签。
         * @type {Array.<TagInfo> || null}
         */
        this.ReplaceTags = null;

        /**
         * 要删除的标签。
         * @type {Array.<TagInfo> || null}
         */
        this.DeleteTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.ReplaceTags) {
            this.ReplaceTags = new Array();
            for (let z in params.ReplaceTags) {
                let obj = new TagInfo();
                obj.deserialize(params.ReplaceTags[z]);
                this.ReplaceTags.push(obj);
            }
        }

        if (params.DeleteTags) {
            this.DeleteTags = new Array();
            for (let z in params.DeleteTags) {
                let obj = new TagInfo();
                obj.deserialize(params.DeleteTags[z]);
                this.DeleteTags.push(obj);
            }
        }

    }
}

/**
 * DescribeDBInstanceCharset返回参数结构体
 * @class
 */
class DescribeDBInstanceCharsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的默认字符集，如 "latin1"，"utf8" 等。
         * @type {string || null}
         */
        this.Charset = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Charset = 'Charset' in params ? params.Charset : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAccounts返回参数结构体
 * @class
 */
class DeleteAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoGroups返回参数结构体
 * @class
 */
class DescribeRoGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO组信息数组，一个实例可关联多个RO组。
         * @type {Array.<RoGroup> || null}
         */
        this.RoGroups = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RoGroups) {
            this.RoGroups = new Array();
            for (let z in params.RoGroups) {
                let obj = new RoGroup();
                obj.deserialize(params.RoGroups[z]);
                this.RoGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseWanService请求参数结构体
 * @class
 */
class CloseWanServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
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
 * RestartDBInstances返回参数结构体
 * @class
 */
class RestartDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRoInstanceIp返回参数结构体
 * @class
 */
class CreateRoInstanceIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读实例的私有网络的ID。
         * @type {number || null}
         */
        this.RoVpcId = null;

        /**
         * 只读实例的子网ID。
         * @type {number || null}
         */
        this.RoSubnetId = null;

        /**
         * 只读实例的内网IP地址。
         * @type {string || null}
         */
        this.RoVip = null;

        /**
         * 只读实例的内网端口号。
         * @type {number || null}
         */
        this.RoVport = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoVpcId = 'RoVpcId' in params ? params.RoVpcId : null;
        this.RoSubnetId = 'RoSubnetId' in params ? params.RoSubnetId : null;
        this.RoVip = 'RoVip' in params ? params.RoVip : null;
        this.RoVport = 'RoVport' in params ? params.RoVport : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupDatabases返回参数结构体
 * @class
 */
class DescribeBackupDatabasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的数据个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合查询条件的数据库数组。
         * @type {Array.<DatabaseName> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new DatabaseName();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupSummaries返回参数结构体
 * @class
 */
class DescribeBackupSummariesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例备份统计条目。
         * @type {Array.<BackupSummaryItem> || null}
         */
        this.Items = null;

        /**
         * 实例备份统计总条目数。
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new BackupSummaryItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceParamRecords请求参数结构体
 * @class
 */
class DescribeInstanceParamRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 参数模板信息
 * @class
 */
class ParamTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 参数模板名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数模板描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 实例引擎版本
         * @type {string || null}
         */
        this.EngineVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;

    }
}

/**
 * ModifyAutoRenewFlag返回参数结构体
 * @class
 */
class ModifyAutoRenewFlagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTimeWindow返回参数结构体
 * @class
 */
class DeleteTimeWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBinlogBackupOverview请求参数结构体
 * @class
 */
class DescribeBinlogBackupOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的云数据库产品类型，目前仅支持 "mysql"。
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
 * 回档任务详情
 * @class
 */
class RollbackTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行信息描述。
         * @type {string || null}
         */
        this.Info = null;

        /**
         * 任务执行结果。可能的取值：INITIAL - 初始化，RUNNING - 运行中，SUCCESS - 执行成功，FAILED - 执行失败，KILLED - 已终止，REMOVED - 已删除，PAUSED - 终止中。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务执行进度。取值范围为[0, 100]。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 任务开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 回档任务详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RollbackInstancesInfo> || null}
         */
        this.Detail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Info = 'Info' in params ? params.Info : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new RollbackInstancesInfo();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }

    }
}

/**
 * DescribeBackups返回参数结构体
 * @class
 */
class DescribeBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的实例总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合查询条件的备份信息详情。
         * @type {Array.<BackupInfo> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new BackupInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAuditPolicy请求参数结构体
 * @class
 */
class CreateAuditPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计策略名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 审计规则 ID。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 审计日志保存时长。支持值包括：
30 - 一个月；
180 - 六个月；
365 - 一年；
1095 - 三年；
1825 - 五年；
实例首次开通审计策略时，可传该值，用于设置存储日志保存天数，默认为 30 天。若实例已存在审计策略，则此参数无效，可使用 更改审计服务配置 接口修改日志存储时长。
         * @type {number || null}
         */
        this.LogExpireDay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogExpireDay = 'LogExpireDay' in params ? params.LogExpireDay : null;

    }
}

/**
 * CreateRoInstanceIp请求参数结构体
 * @class
 */
class CreateRoInstanceIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读实例ID，格式如：cdbro-3i70uj0k，与云数据库控制台页面中显示的只读实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 子网描述符，例如：subnet-1typ0s7d。
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * vpc描述符，例如：vpc-xxx,如果传了该字段则UniqSubnetId必传
         * @type {string || null}
         */
        this.UniqVpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;

    }
}

/**
 * ModifyInstanceParam返回参数结构体
 * @class
 */
class ModifyInstanceParamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务 ID，可用于查询任务进度。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBImportRecords返回参数结构体
 * @class
 */
class DescribeDBImportRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的导入任务操作日志总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的导入操作记录列表。
         * @type {Array.<ImportRecord> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ImportRecord();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAuditPolicy返回参数结构体
 * @class
 */
class CreateAuditPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计策略 ID。
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建备份时，指定需要备份的库表信息
 * @class
 */
class BackupItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要备份的库名
         * @type {string || null}
         */
        this.Db = null;

        /**
         * 需要备份的表名。 如果传该参数，表示备份该库中的指定表。如果不传该参数则备份该db库
         * @type {string || null}
         */
        this.Table = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Db = 'Db' in params ? params.Db : null;
        this.Table = 'Table' in params ? params.Table : null;

    }
}

/**
 * 数据库表名
 * @class
 */
class DatabaseName extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库表名
         * @type {string || null}
         */
        this.DatabaseName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;

    }
}

/**
 * 审计规则过滤条件
 * @class
 */
class AuditFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件参数名称。目前支持：
SrcIp – 客户端 IP；
User – 数据库账户；
DB – 数据库名称；
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 过滤条件匹配类型。目前支持：
INC – 包含；
EXC – 不包含；
EQ – 等于；
NEQ – 不等于；
         * @type {string || null}
         */
        this.Compare = null;

        /**
         * 过滤条件匹配值。
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Compare = 'Compare' in params ? params.Compare : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeBackupConfig返回参数结构体
 * @class
 */
class DescribeBackupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动备份开始的最早时间点，单位为时刻。例如，2 - 凌晨 2:00。（该字段已废弃，建议使用 BackupTimeWindow 字段）
         * @type {number || null}
         */
        this.StartTimeMin = null;

        /**
         * 自动备份开始的最晚时间点，单位为时刻。例如，6 - 凌晨 6:00。（该字段已废弃，建议使用 BackupTimeWindow 字段）
         * @type {number || null}
         */
        this.StartTimeMax = null;

        /**
         * 备份文件保留时间，单位为天。
         * @type {number || null}
         */
        this.BackupExpireDays = null;

        /**
         * 备份方式，可能的值为：physical - 物理备份，logical - 逻辑备份。
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * Binlog 文件保留时间，单位为天。
         * @type {number || null}
         */
        this.BinlogExpireDays = null;

        /**
         * 实例自动备份的时间窗。
         * @type {CommonTimeWindow || null}
         */
        this.BackupTimeWindow = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeMin = 'StartTimeMin' in params ? params.StartTimeMin : null;
        this.StartTimeMax = 'StartTimeMax' in params ? params.StartTimeMax : null;
        this.BackupExpireDays = 'BackupExpireDays' in params ? params.BackupExpireDays : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BinlogExpireDays = 'BinlogExpireDays' in params ? params.BinlogExpireDays : null;

        if (params.BackupTimeWindow) {
            let obj = new CommonTimeWindow();
            obj.deserialize(params.BackupTimeWindow)
            this.BackupTimeWindow = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDeployGroups返回参数结构体
 * @class
 */
class DeleteDeployGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 * @class
 */
class ModifyDBInstanceSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeParamTemplates返回参数结构体
 * @class
 */
class DescribeParamTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该用户的参数模板数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 参数模板详情。
         * @type {Array.<ParamTemplateInfo> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParamTemplateInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupTables返回参数结构体
 * @class
 */
class DescribeBackupTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的数据个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合条件的数据表数组。
         * @type {Array.<TableName> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new TableName();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全组出站规则
 * @class
 */
class Outbound extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略，ACCEPT 或者 DROP
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 目的 IP 或 IP 段，例如172.16.0.0/12
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * 端口或者端口范围
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * 网络协议，支持 UDP、TCP等
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 规则限定的方向，进站规则为 OUTPUT
         * @type {string || null}
         */
        this.Dir = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.Dir = 'Dir' in params ? params.Dir : null;

    }
}

/**
 * 备机信息
 * @class
 */
class SlaveInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 端口号
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 地域信息
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 虚拟 IP 信息
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 可用区信息
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
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * ModifyDBInstanceVipVport请求参数结构体
 * @class
 */
class ModifyDBInstanceVipVportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 目标 IP。该参数和 DstPort 参数，两者必传一个。
         * @type {string || null}
         */
        this.DstIp = null;

        /**
         * 目标端口，支持范围为：[1024-65535]。该参数和 DstIp 参数，两者必传一个。
         * @type {number || null}
         */
        this.DstPort = null;

        /**
         * 私有网络统一 ID。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 子网统一 ID。
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 进行基础网络转 VPC 网络和 VPC 网络下的子网变更时，原网络中旧IP的回收时间，单位为小时，取值范围为0-168，默认值为24小时。
         * @type {number || null}
         */
        this.ReleaseDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DstIp = 'DstIp' in params ? params.DstIp : null;
        this.DstPort = 'DstPort' in params ? params.DstPort : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.ReleaseDuration = 'ReleaseDuration' in params ? params.ReleaseDuration : null;

    }
}

/**
 * ModifyParamTemplate返回参数结构体
 * @class
 */
class ModifyParamTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups返回参数结构体
 * @class
 */
class ModifyDBInstanceSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProjectSecurityGroups请求参数结构体
 * @class
 */
class DescribeProjectSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID。
         * @type {number || null}
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
 * StartBatchRollback请求参数结构体
 * @class
 */
class StartBatchRollbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于回档的实例详情信息。
         * @type {Array.<RollbackInstancesInfo> || null}
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new RollbackInstancesInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

    }
}

/**
 * 安全组详情
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 入站规则
         * @type {Array.<Inbound> || null}
         */
        this.Inbound = null;

        /**
         * 出站规则
         * @type {Array.<Outbound> || null}
         */
        this.Outbound = null;

        /**
         * 安全组ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组名称
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * 安全组备注
         * @type {string || null}
         */
        this.SecurityGroupRemark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.Inbound) {
            this.Inbound = new Array();
            for (let z in params.Inbound) {
                let obj = new Inbound();
                obj.deserialize(params.Inbound[z]);
                this.Inbound.push(obj);
            }
        }

        if (params.Outbound) {
            this.Outbound = new Array();
            for (let z in params.Outbound) {
                let obj = new Outbound();
                obj.deserialize(params.Outbound[z]);
                this.Outbound.push(obj);
            }
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

    }
}

/**
 * 多可用区信息
 * @class
 */
class ZoneConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区部署方式，可能的值为：0-单可用区；1-多可用区
         * @type {Array.<number> || null}
         */
        this.DeployMode = null;

        /**
         * 主实例所在的可用区
         * @type {Array.<string> || null}
         */
        this.MasterZone = null;

        /**
         * 实例为多可用区部署时，备库1所在的可用区
         * @type {Array.<string> || null}
         */
        this.SlaveZone = null;

        /**
         * 实例为多可用区部署时，备库2所在的可用区
         * @type {Array.<string> || null}
         */
        this.BackupZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.MasterZone = 'MasterZone' in params ? params.MasterZone : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;
        this.BackupZone = 'BackupZone' in params ? params.BackupZone : null;

    }
}

/**
 * BalanceRoGroupLoad返回参数结构体
 * @class
 */
class BalanceRoGroupLoadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例所在物理机网络监控信息
 * @class
 */
class DeviceNetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * tcp连接数
         * @type {Array.<number> || null}
         */
        this.Conn = null;

        /**
         * 网卡入包量，单位：个/秒
         * @type {Array.<number> || null}
         */
        this.PackageIn = null;

        /**
         * 网卡出包量，单位：个/秒
         * @type {Array.<number> || null}
         */
        this.PackageOut = null;

        /**
         * 入流量，单位：kbps
         * @type {Array.<number> || null}
         */
        this.FlowIn = null;

        /**
         * 出流量，单位：kbps
         * @type {Array.<number> || null}
         */
        this.FlowOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Conn = 'Conn' in params ? params.Conn : null;
        this.PackageIn = 'PackageIn' in params ? params.PackageIn : null;
        this.PackageOut = 'PackageOut' in params ? params.PackageOut : null;
        this.FlowIn = 'FlowIn' in params ? params.FlowIn : null;
        this.FlowOut = 'FlowOut' in params ? params.FlowOut : null;

    }
}

/**
 * 备机信息
 * @class
 */
class SlaveInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第一备机信息
         * @type {SlaveInstanceInfo || null}
         */
        this.First = null;

        /**
         * 第二备机信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SlaveInstanceInfo || null}
         */
        this.Second = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.First) {
            let obj = new SlaveInstanceInfo();
            obj.deserialize(params.First)
            this.First = obj;
        }

        if (params.Second) {
            let obj = new SlaveInstanceInfo();
            obj.deserialize(params.Second)
            this.Second = obj;
        }

    }
}

/**
 * 标签信息
 * @class
 */
class TagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
         * @type {Array.<string> || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * 可回档时间范围
 * @class
 */
class RollbackTimeRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例可回档开始时间，时间格式：2016-10-29 01:06:04
         * @type {string || null}
         */
        this.Begin = null;

        /**
         * 实例可回档结束时间，时间格式：2016-11-02 11:44:47
         * @type {string || null}
         */
        this.End = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Begin = 'Begin' in params ? params.Begin : null;
        this.End = 'End' in params ? params.End : null;

    }
}

/**
 * DescribeSupportedPrivileges返回参数结构体
 * @class
 */
class DescribeSupportedPrivilegesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例支持的全局权限。
         * @type {Array.<string> || null}
         */
        this.GlobalSupportedPrivileges = null;

        /**
         * 实例支持的数据库权限。
         * @type {Array.<string> || null}
         */
        this.DatabaseSupportedPrivileges = null;

        /**
         * 实例支持的数据库表权限。
         * @type {Array.<string> || null}
         */
        this.TableSupportedPrivileges = null;

        /**
         * 实例支持的数据库列权限。
         * @type {Array.<string> || null}
         */
        this.ColumnSupportedPrivileges = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GlobalSupportedPrivileges = 'GlobalSupportedPrivileges' in params ? params.GlobalSupportedPrivileges : null;
        this.DatabaseSupportedPrivileges = 'DatabaseSupportedPrivileges' in params ? params.DatabaseSupportedPrivileges : null;
        this.TableSupportedPrivileges = 'TableSupportedPrivileges' in params ? params.TableSupportedPrivileges : null;
        this.ColumnSupportedPrivileges = 'ColumnSupportedPrivileges' in params ? params.ColumnSupportedPrivileges : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OfflineIsolatedInstances请求参数结构体
 * @class
 */
class OfflineIsolatedInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * ModifyDBInstanceProject返回参数结构体
 * @class
 */
class ModifyDBInstanceProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceName请求参数结构体
 * @class
 */
class ModifyDBInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

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

    }
}

/**
 * tag信息单元
 * @class
 */
class TagInfoUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * OpenDBInstanceGTID请求参数结构体
 * @class
 */
class OpenDBInstanceGTIDRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
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
 * UpgradeDBInstanceEngineVersion返回参数结构体
 * @class
 */
class UpgradeDBInstanceEngineVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务 ID，可使用 [查询异步任务的执行结果](https://cloud.tencent.com/document/api/236/20410) 获取其执行情况。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceUpgradeInstances请求参数结构体
 * @class
 */
class InquiryPriceUpgradeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 升级后的内存大小，单位：MB，为保证传入 Memory 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的内存规格。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 升级后的硬盘大小，单位：GB，为保证传入 Volume 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的硬盘范围。
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 升级后的核心数目，单位：核，为保证传入 CPU 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的核心数目，当未指定该值时，将按照 Memory 大小补全一个默认值。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 数据复制方式，支持值包括：0 - 异步复制，1 - 半同步复制，2 - 强同步复制，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。
         * @type {number || null}
         */
        this.ProtectMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;

    }
}

/**
 * ModifyAuditRule返回参数结构体
 * @class
 */
class ModifyAuditRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAsyncRequestInfo请求参数结构体
 * @class
 */
class DescribeAsyncRequestInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;

    }
}

/**
 * VerifyRootAccount请求参数结构体
 * @class
 */
class VerifyRootAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例 ROOT 账号的密码。
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * BalanceRoGroupLoad请求参数结构体
 * @class
 */
class BalanceRoGroupLoadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO 组的 ID，格式如：cdbrg-c1nl9rpv。
         * @type {string || null}
         */
        this.RoGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoGroupId = 'RoGroupId' in params ? params.RoGroupId : null;

    }
}

/**
 * DescribeAuditRules请求参数结构体
 * @class
 */
class DescribeAuditRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计规则 ID。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 审计规则名称。支持按审计规则名称进行模糊匹配查询。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 分页大小参数。默认值为 20，最小值为 1，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量。
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
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeBackupOverview返回参数结构体
 * @class
 */
class DescribeBackupOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户在当前地域备份的总个数（包含数据备份和日志备份）。
         * @type {number || null}
         */
        this.BackupCount = null;

        /**
         * 用户在当前地域备份的总容量
         * @type {number || null}
         */
        this.BackupVolume = null;

        /**
         * 用户在当前地域备份的计费容量，即超出赠送容量的部分。
         * @type {number || null}
         */
        this.BillingVolume = null;

        /**
         * 用户在当前地域获得的赠送备份容量。
         * @type {number || null}
         */
        this.FreeVolume = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupCount = 'BackupCount' in params ? params.BackupCount : null;
        this.BackupVolume = 'BackupVolume' in params ? params.BackupVolume : null;
        this.BillingVolume = 'BillingVolume' in params ? params.BillingVolume : null;
        this.FreeVolume = 'FreeVolume' in params ? params.FreeVolume : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 列权限信息
 * @class
 */
class ColumnPrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 数据库表名
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 数据库列名
         * @type {string || null}
         */
        this.Column = null;

        /**
         * 权限信息
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Column = 'Column' in params ? params.Column : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

    }
}

/**
 * DescribeUploadedFiles请求参数结构体
 * @class
 */
class DescribeUploadedFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件路径。该字段应填用户主账号的OwnerUin信息。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 记录偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单次请求返回的数量，默认值为20。
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
        this.Path = 'Path' in params ? params.Path : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 结构化的错误日志详情
 * @class
 */
class ErrlogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误发生时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 错误详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DescribeDeviceMonitorInfo请求参数结构体
 * @class
 */
class DescribeDeviceMonitorInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 返回当天最近Count个5分钟粒度的监控数据。最小值1，最大值288，不传该参数默认返回当天所有5分钟粒度监控数据。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DescribeDBPrice请求参数结构体
 * @class
 */
class DescribeDBPriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区信息，格式如 "ap-guangzhou-2"。具体能设置的值请通过 <a href="https://cloud.tencent.com/document/api/236/17229">DescribeDBZoneConfig</a> 接口查询。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例数量，默认值为 1，最小值 1，最大值为 100。
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 实例内存大小，单位：MB。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例硬盘大小，单位：GB。
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 付费类型，支持值包括：PRE_PAID - 包年包月，HOUR_PAID - 按量计费。
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * 实例时长，单位：月，最小值 1，最大值为 36；查询按量计费价格时，该字段无效。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 实例类型，默认为 master，支持值包括：master - 表示主实例，ro - 表示只读实例，dr - 表示灾备实例。
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * 数据复制方式，默认为 0，支持值包括：0 - 表示异步复制，1 - 表示半同步复制，2 - 表示强同步复制。
         * @type {number || null}
         */
        this.ProtectMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;

    }
}

/**
 * AssociateSecurityGroups返回参数结构体
 * @class
 */
class AssociateSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例的标签信息
 * @class
 */
class TagsInfoOfInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 标签信息
         * @type {Array.<TagInfoUnit> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeUploadedFiles返回参数结构体
 * @class
 */
class DescribeUploadedFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的SQL文件总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的SQL文件列表。
         * @type {Array.<SqlFileInfo> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SqlFileInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBackup返回参数结构体
 * @class
 */
class CreateBackupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份任务 ID。
         * @type {number || null}
         */
        this.BackupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceConfig返回参数结构体
 * @class
 */
class DescribeDBInstanceConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例数据保护方式，可能的返回值：0 - 异步复制方式，1 - 半同步复制方式，2 - 强同步复制方式。
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * 主实例部署方式，可能的返回值：0 - 单可用部署，1 - 多可用区部署。
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * 实例可用区信息，格式如 "ap-shanghai-1"。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 备库的配置信息。
         * @type {SlaveConfig || null}
         */
        this.SlaveConfig = null;

        /**
         * 强同步实例第二备库的配置信息。
         * @type {BackupConfig || null}
         */
        this.BackupConfig = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.SlaveConfig) {
            let obj = new SlaveConfig();
            obj.deserialize(params.SlaveConfig)
            this.SlaveConfig = obj;
        }

        if (params.BackupConfig) {
            let obj = new BackupConfig();
            obj.deserialize(params.BackupConfig)
            this.BackupConfig = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDefaultParams返回参数结构体
 * @class
 */
class DescribeDefaultParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 参数详情。
         * @type {Array.<ParameterDetail> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParameterDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountPrivileges返回参数结构体
 * @class
 */
class ModifyAccountPrivilegesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例CPU平均使用率
 * @class
 */
class DeviceCpuRateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cpu核编号
         * @type {number || null}
         */
        this.CpuCore = null;

        /**
         * Cpu使用率
         * @type {Array.<number> || null}
         */
        this.Rate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CpuCore = 'CpuCore' in params ? params.CpuCore : null;
        this.Rate = 'Rate' in params ? params.Rate : null;

    }
}

/**
 * ECDB第二个从库的配置信息，只有ECDB实例才有这个字段
 * @class
 */
class BackupConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第二个从库复制方式，可能的返回值：async-异步，semisync-半同步
         * @type {string || null}
         */
        this.ReplicationMode = null;

        /**
         * 第二个从库可用区的正式名称，如ap-shanghai-1
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 第二个从库内网IP地址
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 第二个从库访问端口
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
        this.ReplicationMode = 'ReplicationMode' in params ? params.ReplicationMode : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

/**
 * ModifyAuditRule请求参数结构体
 * @class
 */
class ModifyAuditRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计规则 ID。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 审计规则名称。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 审计规则描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 审计规则过滤条件。若设置了过滤条件，则不会开启全审计。
         * @type {Array.<AuditFilter> || null}
         */
        this.RuleFilters = null;

        /**
         * 是否开启全审计。支持值包括：false – 不开启全审计，true – 开启全审计。用户未设置审计规则过滤条件时，默认开启全审计。
         * @type {boolean || null}
         */
        this.AuditAll = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.RuleFilters) {
            this.RuleFilters = new Array();
            for (let z in params.RuleFilters) {
                let obj = new AuditFilter();
                obj.deserialize(params.RuleFilters[z]);
                this.RuleFilters.push(obj);
            }
        }
        this.AuditAll = 'AuditAll' in params ? params.AuditAll : null;

    }
}

/**
 * VerifyRootAccount返回参数结构体
 * @class
 */
class VerifyRootAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 *  CPU负载
 * @class
 */
class DeviceCpuInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例CPU平均使用率
         * @type {Array.<DeviceCpuRateInfo> || null}
         */
        this.Rate = null;

        /**
         * 实例CPU监控数据
         * @type {Array.<number> || null}
         */
        this.Load = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Rate) {
            this.Rate = new Array();
            for (let z in params.Rate) {
                let obj = new DeviceCpuRateInfo();
                obj.deserialize(params.Rate[z]);
                this.Rate.push(obj);
            }
        }
        this.Load = 'Load' in params ? params.Load : null;

    }
}

/**
 * 审计策略
 * @class
 */
class AuditPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计策略 ID。
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 审计策略的状态。可能返回的值为：
"creating" - 创建中;
"running" - 运行中;
"paused" - 暂停中;
"failed" - 创建失败。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 数据库实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 审计策略创建时间。格式为 : "2019-03-20 17:09:13"。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 审计策略最后修改时间。格式为 : "2019-03-20 17:09:13"。
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 审计策略名称。
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 审计规则 ID。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 审计规则名称。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * DescribeDeployGroupList返回参数结构体
 * @class
 */
class DescribeDeployGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 返回列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeployGroupInfo> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new DeployGroupInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceConfig请求参数结构体
 * @class
 */
class DescribeDBInstanceConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
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
 * DescribeBackupTables请求参数结构体
 * @class
 */
class DescribeBackupTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间，格式为：2017-07-12 10:29:20。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 指定的数据库名。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 要查询的数据表名前缀。
         * @type {string || null}
         */
        this.SearchTable = null;

        /**
         * 分页偏移。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，最小值为1，最大值为2000。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.SearchTable = 'SearchTable' in params ? params.SearchTable : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeBinlogs返回参数结构体
 * @class
 */
class DescribeBinlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的日志文件总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合查询条件的二进制日志文件详情。
         * @type {Array.<BinlogInfo> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new BinlogInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OfflineIsolatedInstances返回参数结构体
 * @class
 */
class OfflineIsolatedInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库权限
 * @class
 */
class DatabasePrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限信息
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
        this.Database = 'Database' in params ? params.Database : null;

    }
}

/**
 * RO 组的配置信息
 * @class
 */
class RoGroupAttr extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO 组名称。
         * @type {string || null}
         */
        this.RoGroupName = null;

        /**
         * RO 实例最大延迟阈值。单位为秒，最小值为 1。注意，RO 组必须设置了开启实例延迟剔除策略，该值才有效。
         * @type {number || null}
         */
        this.RoMaxDelayTime = null;

        /**
         * 是否开启实例延迟剔除。支持的值包括：1 - 开启；0 - 不开启。注意，若设置开启实例延迟剔除，则必须设置延迟阈值（RoMaxDelayTime）参数。
         * @type {number || null}
         */
        this.RoOfflineDelay = null;

        /**
         * 最少保留实例数。可设置为小于或等于该 RO 组下 RO 实例个数的任意值。注意，若设置值大于 RO 实例数量将不做剔除；若设置为 0，所有实例延迟超限都会被剔除。
         * @type {number || null}
         */
        this.MinRoInGroup = null;

        /**
         * 权重模式。支持值包括："system" - 系统自动分配； "custom" - 用户自定义设置。注意，若设置 "custom" 模式，则必须设置 RO 实例权重配置（RoWeightValues）参数。
         * @type {string || null}
         */
        this.WeightMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoGroupName = 'RoGroupName' in params ? params.RoGroupName : null;
        this.RoMaxDelayTime = 'RoMaxDelayTime' in params ? params.RoMaxDelayTime : null;
        this.RoOfflineDelay = 'RoOfflineDelay' in params ? params.RoOfflineDelay : null;
        this.MinRoInGroup = 'MinRoInGroup' in params ? params.MinRoInGroup : null;
        this.WeightMode = 'WeightMode' in params ? params.WeightMode : null;

    }
}

/**
 * ModifyAuditConfig返回参数结构体
 * @class
 */
class ModifyAuditConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 只读vip信息
 * @class
 */
class RoVipInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读vip状态
         * @type {number || null}
         */
        this.RoVipStatus = null;

        /**
         * 只读vip的子网
         * @type {number || null}
         */
        this.RoSubnetId = null;

        /**
         * 只读vip的私有网络
         * @type {number || null}
         */
        this.RoVpcId = null;

        /**
         * 只读vip的端口号
         * @type {number || null}
         */
        this.RoVport = null;

        /**
         * 只读vip
         * @type {string || null}
         */
        this.RoVip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoVipStatus = 'RoVipStatus' in params ? params.RoVipStatus : null;
        this.RoSubnetId = 'RoSubnetId' in params ? params.RoSubnetId : null;
        this.RoVpcId = 'RoVpcId' in params ? params.RoVpcId : null;
        this.RoVport = 'RoVport' in params ? params.RoVport : null;
        this.RoVip = 'RoVip' in params ? params.RoVip : null;

    }
}

/**
 * ModifyDBInstanceName返回参数结构体
 * @class
 */
class ModifyDBInstanceNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountDescription请求参数结构体
 * @class
 */
class ModifyAccountDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 云数据库账号。
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * 数据库账号的备注信息。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ModifyAccountPassword请求参数结构体
 * @class
 */
class ModifyAccountPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库账号的新密码。密码应至少包含字母、数字和字符（_+-&=!@#$%^*()）中的两种，长度为8-64个字符。
         * @type {string || null}
         */
        this.NewPassword = null;

        /**
         * 云数据库账号。
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NewPassword = 'NewPassword' in params ? params.NewPassword : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

    }
}

/**
 * DescribeAuditPolicies请求参数结构体
 * @class
 */
class DescribeAuditPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 审计策略 ID。
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 审计策略名称。支持按审计策略名称进行模糊匹配查询。
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 分页大小参数。默认值为 20，最小值为 1，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 审计规则 ID。可使用该审计规则 ID 查询到其关联的审计策略。
注意，参数 RuleId，InstanceId，PolicyId，PolicyName 必须至少传一个。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DescribeTables请求参数结构体
 * @class
 */
class DescribeTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库的名称。
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 记录偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单次请求返回的数量，默认值为20，最大值为2000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 匹配数据库表名的正则表达式，规则同 MySQL 官网
         * @type {string || null}
         */
        this.TableRegexp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TableRegexp = 'TableRegexp' in params ? params.TableRegexp : null;

    }
}

/**
 * 实例预期重启时间
 * @class
 */
class InstanceRebootTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 预期重启时间
         * @type {number || null}
         */
        this.TimeInSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TimeInSeconds = 'TimeInSeconds' in params ? params.TimeInSeconds : null;

    }
}

/**
 * RenewDBInstance返回参数结构体
 * @class
 */
class RenewDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单 ID。
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatabases返回参数结构体
 * @class
 */
class DescribeDatabasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的实例总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的实例信息。
         * @type {Array.<string> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Items = 'Items' in params ? params.Items : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyParamTemplate请求参数结构体
 * @class
 */
class ModifyParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板 ID。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 参数列表。
         * @type {Array.<Parameter> || null}
         */
        this.ParamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new Parameter();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }

    }
}

/**
 * AddTimeWindow返回参数结构体
 * @class
 */
class AddTimeWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAuditConfig请求参数结构体
 * @class
 */
class DescribeAuditConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
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
 * 可用区售卖配置
 * @class
 */
class ZoneSellConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区状态。可能的返回值为：0-未上线；1-上线；2-开放；3-停售；4-不展示
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 可用区中文名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 实例类型是否为自定义类型
         * @type {boolean || null}
         */
        this.IsCustom = null;

        /**
         * 是否支持灾备
         * @type {boolean || null}
         */
        this.IsSupportDr = null;

        /**
         * 是否支持私有网络
         * @type {boolean || null}
         */
        this.IsSupportVpc = null;

        /**
         * 小时计费实例最大售卖数量
         * @type {number || null}
         */
        this.HourInstanceSaleMaxNum = null;

        /**
         * 是否为默认可用区
         * @type {boolean || null}
         */
        this.IsDefaultZone = null;

        /**
         * 是否为黑石区
         * @type {boolean || null}
         */
        this.IsBm = null;

        /**
         * 支持的付费类型。可能的返回值为：0-包年包月；1-小时计费；2-后付费
         * @type {Array.<string> || null}
         */
        this.PayType = null;

        /**
         * 数据复制类型。0-异步复制；1-半同步复制；2-强同步复制
         * @type {Array.<string> || null}
         */
        this.ProtectMode = null;

        /**
         * 可用区名称
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 售卖实例类型数组
         * @type {Array.<SellType> || null}
         */
        this.SellType = null;

        /**
         * 多可用区信息
         * @type {ZoneConf || null}
         */
        this.ZoneConf = null;

        /**
         * 可支持的灾备可用区信息
         * @type {Array.<string> || null}
         */
        this.DrZone = null;

        /**
         * 是否支持跨可用区只读
         * @type {boolean || null}
         */
        this.IsSupportRemoteRo = null;

        /**
         * 可支持的跨可用区只读区信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.RemoteRoZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.IsCustom = 'IsCustom' in params ? params.IsCustom : null;
        this.IsSupportDr = 'IsSupportDr' in params ? params.IsSupportDr : null;
        this.IsSupportVpc = 'IsSupportVpc' in params ? params.IsSupportVpc : null;
        this.HourInstanceSaleMaxNum = 'HourInstanceSaleMaxNum' in params ? params.HourInstanceSaleMaxNum : null;
        this.IsDefaultZone = 'IsDefaultZone' in params ? params.IsDefaultZone : null;
        this.IsBm = 'IsBm' in params ? params.IsBm : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.SellType) {
            this.SellType = new Array();
            for (let z in params.SellType) {
                let obj = new SellType();
                obj.deserialize(params.SellType[z]);
                this.SellType.push(obj);
            }
        }

        if (params.ZoneConf) {
            let obj = new ZoneConf();
            obj.deserialize(params.ZoneConf)
            this.ZoneConf = obj;
        }
        this.DrZone = 'DrZone' in params ? params.DrZone : null;
        this.IsSupportRemoteRo = 'IsSupportRemoteRo' in params ? params.IsSupportRemoteRo : null;
        this.RemoteRoZone = 'RemoteRoZone' in params ? params.RemoteRoZone : null;

    }
}

/**
 * DescribeAuditRules返回参数结构体
 * @class
 */
class DescribeAuditRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的审计规则个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 审计规则详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AuditRule> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new AuditRule();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBinlogBackupOverview返回参数结构体
 * @class
 */
class DescribeBinlogBackupOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总的日志备份容量（单位为字节）。
         * @type {number || null}
         */
        this.BinlogBackupVolume = null;

        /**
         * 总的日志备份个数。
         * @type {number || null}
         */
        this.BinlogBackupCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BinlogBackupVolume = 'BinlogBackupVolume' in params ? params.BinlogBackupVolume : null;
        this.BinlogBackupCount = 'BinlogBackupCount' in params ? params.BinlogBackupCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用于回档的数据库表详情
 * @class
 */
class RollbackTables extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 数据库表详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RollbackTableName> || null}
         */
        this.Table = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;

        if (params.Table) {
            this.Table = new Array();
            for (let z in params.Table) {
                let obj = new RollbackTableName();
                obj.deserialize(params.Table[z]);
                this.Table.push(obj);
            }
        }

    }
}

/**
 * InitDBInstances请求参数结构体
 * @class
 */
class InitDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例新的密码，密码规则：8-64个字符，至少包含字母、数字、字符（支持的字符：!@#$%^*()）中的两种。
         * @type {string || null}
         */
        this.NewPassword = null;

        /**
         * 实例的参数列表，目前支持设置“character_set_server”、“lower_case_table_names”参数。其中，“character_set_server”参数可选值为["utf8","latin1","gbk","utf8mb4"]；“lower_case_table_names”可选值为[“0”,“1”]。
         * @type {Array.<ParamInfo> || null}
         */
        this.Parameters = null;

        /**
         * 实例的端口，取值范围为[1024, 65535]
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.NewPassword = 'NewPassword' in params ? params.NewPassword : null;

        if (params.Parameters) {
            this.Parameters = new Array();
            for (let z in params.Parameters) {
                let obj = new ParamInfo();
                obj.deserialize(params.Parameters[z]);
                this.Parameters.push(obj);
            }
        }
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

/**
 * RO实例的详细信息
 * @class
 */
class RoInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO组对应的主实例的ID
         * @type {string || null}
         */
        this.MasterInstanceId = null;

        /**
         * RO实例在RO组内的状态，可能的值：online-在线，offline-下线
         * @type {string || null}
         */
        this.RoStatus = null;

        /**
         * RO实例在RO组内上一次下线的时间
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * RO实例在RO组内的权重
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * RO实例所在区域名称，如ap-shanghai
         * @type {string || null}
         */
        this.Region = null;

        /**
         * RO可用区的正式名称，如ap-shanghai-1
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * RO实例ID，格式如：cdbro-c1nl9rpv
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * RO实例状态，可能返回值：0-创建中，1-运行中，4-删除中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例类型，可能返回值：1-主实例，2-灾备实例，3-只读实例
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * RO实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 按量计费状态，可能的取值：1-正常，2-欠费
         * @type {number || null}
         */
        this.HourFeeStatus = null;

        /**
         * RO实例任务状态，可能返回值：<br>0-没有任务<br>1-升级中<br>2-数据导入中<br>3-开放Slave中<br>4-外网访问开通中<br>5-批量操作执行中<br>6-回档中<br>7-外网访问关闭中<br>8-密码修改中<br>9-实例名修改中<br>10-重启中<br>12-自建迁移中<br>13-删除库表中<br>14-灾备实例创建同步中
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * RO实例内存大小，单位：MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * RO实例硬盘大小，单位：GB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 每次查询数量
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * RO实例的内网IP地址
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * RO实例访问端口
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * RO实例所在私有网络ID
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * RO实例所在私有网络子网ID
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * RO实例规格描述，目前可取值 CUSTOM
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * RO实例数据库引擎版本，可能返回值：5.1、5.5、5.6和5.7
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * RO实例到期时间，时间格式：yyyy-mm-dd hh:mm:ss，如实例为按量计费模式，则此字段值为0000-00-00 00:00:00
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * RO实例计费类型，可能返回值：0-包年包月，1-按量计费，2-后付费月结
         * @type {number || null}
         */
        this.PayType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MasterInstanceId = 'MasterInstanceId' in params ? params.MasterInstanceId : null;
        this.RoStatus = 'RoStatus' in params ? params.RoStatus : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.HourFeeStatus = 'HourFeeStatus' in params ? params.HourFeeStatus : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.PayType = 'PayType' in params ? params.PayType : null;

    }
}

/**
 * 用于回档的数据库名
 * @class
 */
class RollbackDBName extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回档前的原数据库名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 回档后的新数据库名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewDatabaseName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.NewDatabaseName = 'NewDatabaseName' in params ? params.NewDatabaseName : null;

    }
}

/**
 * CreateParamTemplate请求参数结构体
 * @class
 */
class CreateParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数模板描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * MySQL 版本号。
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 源参数模板 ID。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 参数列表。
         * @type {Array.<Parameter> || null}
         */
        this.ParamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new Parameter();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }

    }
}

/**
 * DeleteAuditRule返回参数结构体
 * @class
 */
class DeleteAuditRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IsolateDBInstance请求参数结构体
 * @class
 */
class IsolateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
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
 * CreateAuditRule请求参数结构体
 * @class
 */
class CreateAuditRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计规则名称。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 审计规则描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 审计规则过滤条件。若设置了过滤条件，则不会开启全审计。
         * @type {Array.<AuditFilter> || null}
         */
        this.RuleFilters = null;

        /**
         * 是否开启全审计。支持值包括：false – 不开启全审计，true – 开启全审计。用户未设置审计规则过滤条件时，默认开启全审计。
         * @type {boolean || null}
         */
        this.AuditAll = null;

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

        if (params.RuleFilters) {
            this.RuleFilters = new Array();
            for (let z in params.RuleFilters) {
                let obj = new AuditFilter();
                obj.deserialize(params.RuleFilters[z]);
                this.RuleFilters.push(obj);
            }
        }
        this.AuditAll = 'AuditAll' in params ? params.AuditAll : null;

    }
}

/**
 * ModifyTimeWindow请求参数结构体
 * @class
 */
class ModifyTimeWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 修改后的可维护时间段，其中每一个时间段的格式形如：10:00-12:00；起止时间按半个小时对齐；最短半个小时，最长三个小时；最多设置两个时间段；起止时间范围为：[00:00, 24:00]。
         * @type {Array.<string> || null}
         */
        this.TimeRanges = null;

        /**
         * 指定修改哪一天的客户时间段，可能的取值为：monday，tuesday，wednesday，thursday，friday，saturday，sunday。如果不指定该值或者为空，则默认一周七天都修改。
         * @type {Array.<string> || null}
         */
        this.Weekdays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TimeRanges = 'TimeRanges' in params ? params.TimeRanges : null;
        this.Weekdays = 'Weekdays' in params ? params.Weekdays : null;

    }
}

/**
 * 审计日志文件
 * @class
 */
class AuditLogFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计日志文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 审计日志文件创建时间。格式为 : "2019-03-20 17:09:13"。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 文件状态值。可能返回的值为：
"creating" - 生成中;
"failed" - 创建失败;
"success" - 已生成;
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 文件大小，单位为 KB。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 审计日志下载地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * ModifyAccountPrivileges请求参数结构体
 * @class
 */
class ModifyAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库的账号，包括用户名和域名。
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * 全局权限。其中，GlobalPrivileges 中权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "PROCESS", "DROP","REFERENCES","INDEX","ALTER","SHOW DATABASES","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。
注意，不传该参数表示清除该权限。
         * @type {Array.<string> || null}
         */
        this.GlobalPrivileges = null;

        /**
         * 数据库的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE",	"DROP","REFERENCES","INDEX","ALTER","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。
注意，不传该参数表示清除该权限。
         * @type {Array.<DatabasePrivilege> || null}
         */
        this.DatabasePrivileges = null;

        /**
         * 数据库中表的权限。Privileges 权限的可选值为：权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE",	"DROP","REFERENCES","INDEX","ALTER","CREATE VIEW","SHOW VIEW", "TRIGGER"。
注意，不传该参数表示清除该权限。
         * @type {Array.<TablePrivilege> || null}
         */
        this.TablePrivileges = null;

        /**
         * 数据库表中列的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","REFERENCES"。
注意，不传该参数表示清除该权限。
         * @type {Array.<ColumnPrivilege> || null}
         */
        this.ColumnPrivileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.GlobalPrivileges = 'GlobalPrivileges' in params ? params.GlobalPrivileges : null;

        if (params.DatabasePrivileges) {
            this.DatabasePrivileges = new Array();
            for (let z in params.DatabasePrivileges) {
                let obj = new DatabasePrivilege();
                obj.deserialize(params.DatabasePrivileges[z]);
                this.DatabasePrivileges.push(obj);
            }
        }

        if (params.TablePrivileges) {
            this.TablePrivileges = new Array();
            for (let z in params.TablePrivileges) {
                let obj = new TablePrivilege();
                obj.deserialize(params.TablePrivileges[z]);
                this.TablePrivileges.push(obj);
            }
        }

        if (params.ColumnPrivileges) {
            this.ColumnPrivileges = new Array();
            for (let z in params.ColumnPrivileges) {
                let obj = new ColumnPrivilege();
                obj.deserialize(params.ColumnPrivileges[z]);
                this.ColumnPrivileges.push(obj);
            }
        }

    }
}

/**
 * 数据库账号信息
 * @class
 */
class Account extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新账户的名称
         * @type {string || null}
         */
        this.User = null;

        /**
         * 新账户的域名
         * @type {string || null}
         */
        this.Host = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.User = 'User' in params ? params.User : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * CreateBackup请求参数结构体
 * @class
 */
class CreateBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 目标备份方法，可选的值：logical - 逻辑冷备，physical - 物理冷备。
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * 需要备份的库表信息，如果不设置该参数，则默认整实例备份。在 BackupMethod=logical 逻辑备份中才可设置该参数。指定的库表必须存在，否则可能导致备份失败。
例：如果需要备份 db1 库的 tb1、tb2 表 和 db2 库。则该参数设置为 [{"Db": "db1", "Table": "tb1"}, {"Db": "db1", "Table": "tb2"}, {"Db": "db2"} ]。
         * @type {Array.<BackupItem> || null}
         */
        this.BackupDBTableList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;

        if (params.BackupDBTableList) {
            this.BackupDBTableList = new Array();
            for (let z in params.BackupDBTableList) {
                let obj = new BackupItem();
                obj.deserialize(params.BackupDBTableList[z]);
                this.BackupDBTableList.push(obj);
            }
        }

    }
}

/**
 * ModifyRoGroupInfo返回参数结构体
 * @class
 */
class ModifyRoGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 通用时间窗
 * @class
 */
class CommonTimeWindow extends  AbstractModel {
    constructor(){
        super();

        /**
         * 周一的时间窗，格式如： 02:00-06:00
         * @type {string || null}
         */
        this.Monday = null;

        /**
         * 周二的时间窗，格式如： 02:00-06:00
         * @type {string || null}
         */
        this.Tuesday = null;

        /**
         * 周三的时间窗，格式如： 02:00-06:00
         * @type {string || null}
         */
        this.Wednesday = null;

        /**
         * 周四的时间窗，格式如： 02:00-06:00
         * @type {string || null}
         */
        this.Thursday = null;

        /**
         * 周五的时间窗，格式如： 02:00-06:00
         * @type {string || null}
         */
        this.Friday = null;

        /**
         * 周六的时间窗，格式如： 02:00-06:00
         * @type {string || null}
         */
        this.Saturday = null;

        /**
         * 周日的时间窗，格式如： 02:00-06:00
         * @type {string || null}
         */
        this.Sunday = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Monday = 'Monday' in params ? params.Monday : null;
        this.Tuesday = 'Tuesday' in params ? params.Tuesday : null;
        this.Wednesday = 'Wednesday' in params ? params.Wednesday : null;
        this.Thursday = 'Thursday' in params ? params.Thursday : null;
        this.Friday = 'Friday' in params ? params.Friday : null;
        this.Saturday = 'Saturday' in params ? params.Saturday : null;
        this.Sunday = 'Sunday' in params ? params.Sunday : null;

    }
}

/**
 * 账号详细信息
 * @class
 */
class AccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号备注信息
         * @type {string || null}
         */
        this.Notes = null;

        /**
         * 账号的域名
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 账号的名称
         * @type {string || null}
         */
        this.User = null;

        /**
         * 账号信息修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 修改密码的时间
         * @type {string || null}
         */
        this.ModifyPasswordTime = null;

        /**
         * 账号的创建时间
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
        this.Notes = 'Notes' in params ? params.Notes : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.User = 'User' in params ? params.User : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.ModifyPasswordTime = 'ModifyPasswordTime' in params ? params.ModifyPasswordTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeDBInstanceCharset请求参数结构体
 * @class
 */
class DescribeDBInstanceCharsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
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
 * DescribeTimeWindow请求参数结构体
 * @class
 */
class DescribeTimeWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
 * DescribeBackupDatabases请求参数结构体
 * @class
 */
class DescribeBackupDatabasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间，格式为：2017-07-12 10:29:20。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 要查询的数据库名前缀。
         * @type {string || null}
         */
        this.SearchDatabase = null;

        /**
         * 分页偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，最小值为1，最大值为2000。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.SearchDatabase = 'SearchDatabase' in params ? params.SearchDatabase : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyTimeWindow返回参数结构体
 * @class
 */
class ModifyTimeWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例所在物理机内存监控信息
 * @class
 */
class DeviceMemInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总内存大小。free命令中Mem:一行total的值,单位：KB
         * @type {Array.<number> || null}
         */
        this.Total = null;

        /**
         * 已使用内存。free命令中Mem:一行used的值,单位：KB
         * @type {Array.<number> || null}
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
        this.Total = 'Total' in params ? params.Total : null;
        this.Used = 'Used' in params ? params.Used : null;

    }
}

/**
 * ModifyAutoRenewFlag请求参数结构体
 * @class
 */
class ModifyAutoRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 自动续费标记，可取值的有：0 - 不自动续费，1 - 自动续费。
         * @type {number || null}
         */
        this.AutoRenew = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

    }
}

/**
 * UpgradeDBInstanceEngineVersion请求参数结构体
 * @class
 */
class UpgradeDBInstanceEngineVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主实例数据库引擎版本，支持值包括：5.6 和 5.7。
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 切换访问新实例的方式，默认为 0。支持值包括：0 - 立刻切换，1 - 时间窗切换；当该值为 1 时，升级中过程中，切换访问新实例的流程将会在时间窗内进行，或者用户主动调用接口 [切换访问新实例](https://cloud.tencent.com/document/product/236/15864) 触发该流程。
         * @type {number || null}
         */
        this.WaitSwitch = null;

        /**
         * 是否是内核子版本升级，支持的值：1 - 升级内核子版本；0 - 升级数据库引擎版本。
         * @type {number || null}
         */
        this.UpgradeSubversion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.WaitSwitch = 'WaitSwitch' in params ? params.WaitSwitch : null;
        this.UpgradeSubversion = 'UpgradeSubversion' in params ? params.UpgradeSubversion : null;

    }
}

/**
 * ModifyBackupConfig请求参数结构体
 * @class
 */
class ModifyBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 备份文件的保留时间，单位为天。最小值为7天，最大值为732天。
         * @type {number || null}
         */
        this.ExpireDays = null;

        /**
         * (将废弃，建议使用 BackupTimeWindow 参数) 备份时间范围，格式为：02:00-06:00，起点和终点时间目前限制为整点，目前可以选择的范围为： 00:00-12:00，02:00-06:00，06：00-10：00，10:00-14:00，14:00-18:00，18:00-22:00，22:00-02:00。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 自动备份方式，仅支持：physical - 物理冷备
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * binlog的保留时间，单位为天。最小值为7天，最大值为732天。该值的设置不能大于备份文件的保留时间。
         * @type {number || null}
         */
        this.BinlogExpireDays = null;

        /**
         * 备份时间窗，比如要设置每周二和周日 10:00-14:00之间备份，该参数如下：{"Monday": "", "Tuesday": "10:00-14:00", "Wednesday": "", "Thursday": "", "Friday": "", "Saturday": "", "Sunday": "10:00-14:00"}    （注：可以设置一周的某几天备份，但是每天的备份时间需要设置为相同的时间段。 如果设置了该字段，将忽略StartTime字段的设置）
         * @type {CommonTimeWindow || null}
         */
        this.BackupTimeWindow = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ExpireDays = 'ExpireDays' in params ? params.ExpireDays : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BinlogExpireDays = 'BinlogExpireDays' in params ? params.BinlogExpireDays : null;

        if (params.BackupTimeWindow) {
            let obj = new CommonTimeWindow();
            obj.deserialize(params.BackupTimeWindow)
            this.BackupTimeWindow = obj;
        }

    }
}

/**
 * DeleteDeployGroups请求参数结构体
 * @class
 */
class DeleteDeployGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的置放群组 ID 列表。
         * @type {Array.<string> || null}
         */
        this.DeployGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeployGroupIds = 'DeployGroupIds' in params ? params.DeployGroupIds : null;

    }
}

/**
 * DescribeSlowLogData请求参数结构体
 * @class
 */
class DescribeSlowLogDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间戳。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间戳。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 客户端 Host 列表。
         * @type {Array.<string> || null}
         */
        this.UserHosts = null;

        /**
         * 客户端 用户名 列表。
         * @type {Array.<string> || null}
         */
        this.UserNames = null;

        /**
         * 访问的 数据库 列表。
         * @type {Array.<string> || null}
         */
        this.DataBases = null;

        /**
         * 排序字段。当前支持：Timestamp,QueryTime,LockTime,RowsExamined,RowsSent 。
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 升序还是降序排列。当前支持：ASC,DESC 。
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一次性返回的记录数量，最大为400。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.UserHosts = 'UserHosts' in params ? params.UserHosts : null;
        this.UserNames = 'UserNames' in params ? params.UserNames : null;
        this.DataBases = 'DataBases' in params ? params.DataBases : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeAuditConfig返回参数结构体
 * @class
 */
class DescribeAuditConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计日志保存时长。目前支持的值包括：[0，30，180，365，1095，1825]。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LogExpireDay = null;

        /**
         * 审计日志存储类型。目前支持的值包括："storage" - 存储型。
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogExpireDay = 'LogExpireDay' in params ? params.LogExpireDay : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountDescription返回参数结构体
 * @class
 */
class ModifyAccountDescriptionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeDBInstance返回参数结构体
 * @class
 */
class UpgradeDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单 ID。
         * @type {Array.<string> || null}
         */
        this.DealIds = null;

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAuditLogFile请求参数结构体
 * @class
 */
class CreateAuditLogFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间，格式为："2017-07-12 10:29:20"。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，格式为："2017-07-12 10:29:20"。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 排序方式。支持值包括："ASC" - 升序，"DESC" - 降序。
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段。支持值包括：
"timestamp" - 时间戳；
"affectRows" - 影响行数；
"execTime" - 执行时间。
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 过滤条件。可按设置的过滤条件过滤日志。
         * @type {AuditLogFilter || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

        if (params.Filter) {
            let obj = new AuditLogFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

    }
}

/**
 * DeleteAuditLogFile请求参数结构体
 * @class
 */
class DeleteAuditLogFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计日志文件名称。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 实例 ID。
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
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeSlowLogs返回参数结构体
 * @class
 */
class DescribeSlowLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的慢查询日志总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合查询条件的慢查询日志详情。
         * @type {Array.<SlowLogInfo> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SlowLogInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBImportRecords请求参数结构体
 * @class
 */
class DescribeDBImportRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间，时间格式如：2016-01-01 00:00:01。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，时间格式如：2016-01-01 23:59:59。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 分页参数，偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页参数，单次请求返回的数量，默认值为20，最小值为1，最大值为100。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateDBImportJob返回参数结构体
 * @class
 */
class CreateDBImportJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTagsOfInstanceIds请求参数结构体
 * @class
 */
class DescribeTagsOfInstanceIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 分页偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * UpgradeDBInstance请求参数结构体
 * @class
 */
class UpgradeDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 升级后的内存大小，单位：MB，为保证传入 Memory 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的内存规格。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 升级后的硬盘大小，单位：GB，为保证传入 Volume 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的硬盘范围。
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 数据复制方式，支持值包括：0 - 异步复制，1 - 半同步复制，2 - 强同步复制，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * 部署模式，默认为 0，支持值包括：0 - 单可用区部署，1 - 多可用区部署，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * 备库1的可用区信息，默认和实例的 Zone 参数一致，升级主实例为多可用区部署时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。可通过 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口查询支持的可用区。
         * @type {string || null}
         */
        this.SlaveZone = null;

        /**
         * 主实例数据库引擎版本，支持值包括：5.5、5.6 和 5.7。
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 切换访问新实例的方式，默认为 0。支持值包括：0 - 立刻切换，1 - 时间窗切换；当该值为 1 时，升级中过程中，切换访问新实例的流程将会在时间窗内进行，或者用户主动调用接口 [切换访问新实例](https://cloud.tencent.com/document/product/236/15864) 触发该流程。
         * @type {number || null}
         */
        this.WaitSwitch = null;

        /**
         * 备库 2 的可用区信息，默认为空，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。
         * @type {string || null}
         */
        this.BackupZone = null;

        /**
         * 实例类型，默认为 master，支持值包括：master - 表示主实例，dr - 表示灾备实例，ro - 表示只读实例。
         * @type {string || null}
         */
        this.InstanceRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.WaitSwitch = 'WaitSwitch' in params ? params.WaitSwitch : null;
        this.BackupZone = 'BackupZone' in params ? params.BackupZone : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;

    }
}

/**
 * DescribeTimeWindow返回参数结构体
 * @class
 */
class DescribeTimeWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 星期一的可维护时间列表。
         * @type {Array.<string> || null}
         */
        this.Monday = null;

        /**
         * 星期二的可维护时间列表。
         * @type {Array.<string> || null}
         */
        this.Tuesday = null;

        /**
         * 星期三的可维护时间列表。
         * @type {Array.<string> || null}
         */
        this.Wednesday = null;

        /**
         * 星期四的可维护时间列表。
         * @type {Array.<string> || null}
         */
        this.Thursday = null;

        /**
         * 星期五的可维护时间列表。
         * @type {Array.<string> || null}
         */
        this.Friday = null;

        /**
         * 星期六的可维护时间列表。
         * @type {Array.<string> || null}
         */
        this.Saturday = null;

        /**
         * 星期日的可维护时间列表。
         * @type {Array.<string> || null}
         */
        this.Sunday = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Monday = 'Monday' in params ? params.Monday : null;
        this.Tuesday = 'Tuesday' in params ? params.Tuesday : null;
        this.Wednesday = 'Wednesday' in params ? params.Wednesday : null;
        this.Thursday = 'Thursday' in params ? params.Thursday : null;
        this.Friday = 'Friday' in params ? params.Friday : null;
        this.Saturday = 'Saturday' in params ? params.Saturday : null;
        this.Sunday = 'Sunday' in params ? params.Sunday : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTimeWindow请求参数结构体
 * @class
 */
class DeleteTimeWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
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
 * DeleteAuditPolicy返回参数结构体
 * @class
 */
class DeleteAuditPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstances返回参数结构体
 * @class
 */
class DescribeDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的实例总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息。
         * @type {Array.<InstanceInfo> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库表权限
 * @class
 */
class TablePrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 数据库表名
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 权限信息
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

    }
}

/**
 * 慢查询日志详情
 * @class
 */
class SlowLogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份文件名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备份文件大小，单位：Byte
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 备份快照时间，时间格式：2016-03-17 02:10:37
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 内网下载地址
         * @type {string || null}
         */
        this.IntranetUrl = null;

        /**
         * 外网下载地址
         * @type {string || null}
         */
        this.InternetUrl = null;

        /**
         * 日志具体类型，可能的值：slowlog - 慢日志
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.IntranetUrl = 'IntranetUrl' in params ? params.IntranetUrl : null;
        this.InternetUrl = 'InternetUrl' in params ? params.InternetUrl : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * InitDBInstances返回参数结构体
 * @class
 */
class InitDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求ID数组，可使用此ID查询异步任务的执行结果
         * @type {Array.<string> || null}
         */
        this.AsyncRequestIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestIds = 'AsyncRequestIds' in params ? params.AsyncRequestIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataBackupOverview请求参数结构体
 * @class
 */
class DescribeDataBackupOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的云数据库产品类型，目前仅支持 "mysql"。
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
 * DescribeParamTemplateInfo返回参数结构体
 * @class
 */
class DescribeParamTemplateInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板 ID。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 参数模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数模板描述
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 参数模板中的参数数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 参数详情
         * @type {Array.<ParameterDetail> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParameterDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 参数修改记录
 * @class
 */
class ParamRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 参数名称
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 参数修改前的值
         * @type {string || null}
         */
        this.OldValue = null;

        /**
         * 参数修改后的值
         * @type {string || null}
         */
        this.NewValue = null;

        /**
         * 参数是否修改成功
         * @type {boolean || null}
         */
        this.IsSucess = null;

        /**
         * 修改时间
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.OldValue = 'OldValue' in params ? params.OldValue : null;
        this.NewValue = 'NewValue' in params ? params.NewValue : null;
        this.IsSucess = 'IsSucess' in params ? params.IsSucess : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * RestartDBInstances请求参数结构体
 * @class
 */
class RestartDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 数组，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeDBInstanceInfo请求参数结构体
 * @class
 */
class DescribeDBInstanceInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 。
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
 * DescribeInstanceParams返回参数结构体
 * @class
 */
class DescribeInstanceParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的参数总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 参数详情。
         * @type {Array.<ParameterDetail> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParameterDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBZoneConfig返回参数结构体
 * @class
 */
class DescribeDBZoneConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可售卖地域配置数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 可售卖地域配置详情
         * @type {Array.<RegionSellConf> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new RegionSellConf();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDeployGroup请求参数结构体
 * @class
 */
class CreateDeployGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 置放群组名称，最长不能超过60个字符。
         * @type {string || null}
         */
        this.DeployGroupName = null;

        /**
         * 置放群组描述，最长不能超过200个字符。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 置放群组的亲和性策略，目前仅支持取值为1，策略1表示同台物理机上限制实例的个数。
         * @type {Array.<number> || null}
         */
        this.Affinity = null;

        /**
         * 置放群组亲和性策略1中同台物理机上实例的限制个数。
         * @type {number || null}
         */
        this.LimitNum = null;

        /**
         * 置放群组机型属性，可选参数：SH12+SH02、TS85。
         * @type {Array.<string> || null}
         */
        this.DevClass = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeployGroupName = 'DeployGroupName' in params ? params.DeployGroupName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Affinity = 'Affinity' in params ? params.Affinity : null;
        this.LimitNum = 'LimitNum' in params ? params.LimitNum : null;
        this.DevClass = 'DevClass' in params ? params.DevClass : null;

    }
}

/**
 * DisassociateSecurityGroups请求参数结构体
 * @class
 */
class DisassociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组 ID。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 实例 ID 列表，一个或者多个实例 ID 组成的数组。
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
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DeleteAccounts请求参数结构体
 * @class
 */
class DeleteAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 云数据库账号。
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

    }
}

/**
 * SwitchForUpgrade返回参数结构体
 * @class
 */
class SwitchForUpgradeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountPrivileges请求参数结构体
 * @class
 */
class DescribeAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库的账号名称。
         * @type {string || null}
         */
        this.User = null;

        /**
         * 数据库的账号域名。
         * @type {string || null}
         */
        this.Host = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.User = 'User' in params ? params.User : null;
        this.Host = 'Host' in params ? params.Host : null;

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
         * 符合查询条件的账号数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合查询条件的账号详细信息。
         * @type {Array.<AccountInfo> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new AccountInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenWanService请求参数结构体
 * @class
 */
class OpenWanServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
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
 * DeleteBackup请求参数结构体
 * @class
 */
class DeleteBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 备份任务 ID。该任务 ID 为 [创建云数据库备份](https://cloud.tencent.com/document/api/236/15844) 接口返回的任务 ID。
         * @type {number || null}
         */
        this.BackupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;

    }
}

/**
 * ModifyNameOrDescByDpId请求参数结构体
 * @class
 */
class ModifyNameOrDescByDpIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 置放群组 ID。
         * @type {string || null}
         */
        this.DeployGroupId = null;

        /**
         * 置放群组名称，最长不能超过60个字符。置放群组名和置放群组描述不能都为空。
         * @type {string || null}
         */
        this.DeployGroupName = null;

        /**
         * 置放群组描述，最长不能超过200个字符。置放群组名和置放群组描述不能都为空。
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
        this.DeployGroupId = 'DeployGroupId' in params ? params.DeployGroupId : null;
        this.DeployGroupName = 'DeployGroupName' in params ? params.DeployGroupName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeInstanceParams请求参数结构体
 * @class
 */
class DescribeInstanceParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
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
 * 结构化的慢日志详情
 * @class
 */
class SlowLogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sql的执行时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Sql的执行时长。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.QueryTime = null;

        /**
         * Sql语句。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * 客户端地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserHost = null;

        /**
         * 用户名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 数据库名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 锁时长。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LockTime = null;

        /**
         * 扫描行数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RowsExamined = null;

        /**
         * 结果集行数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RowsSent = null;

        /**
         * Sql模板。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SqlTemplate = null;

        /**
         * Sql语句的md5。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Md5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.QueryTime = 'QueryTime' in params ? params.QueryTime : null;
        this.SqlText = 'SqlText' in params ? params.SqlText : null;
        this.UserHost = 'UserHost' in params ? params.UserHost : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.LockTime = 'LockTime' in params ? params.LockTime : null;
        this.RowsExamined = 'RowsExamined' in params ? params.RowsExamined : null;
        this.RowsSent = 'RowsSent' in params ? params.RowsSent : null;
        this.SqlTemplate = 'SqlTemplate' in params ? params.SqlTemplate : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;

    }
}

/**
 * DescribeDeviceMonitorInfo返回参数结构体
 * @class
 */
class DescribeDeviceMonitorInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例CPU监控数据
         * @type {DeviceCpuInfo || null}
         */
        this.Cpu = null;

        /**
         * 实例内存监控数据
         * @type {DeviceMemInfo || null}
         */
        this.Mem = null;

        /**
         * 实例网络监控数据
         * @type {DeviceNetInfo || null}
         */
        this.Net = null;

        /**
         * 实例磁盘监控数据
         * @type {DeviceDiskInfo || null}
         */
        this.Disk = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Cpu) {
            let obj = new DeviceCpuInfo();
            obj.deserialize(params.Cpu)
            this.Cpu = obj;
        }

        if (params.Mem) {
            let obj = new DeviceMemInfo();
            obj.deserialize(params.Mem)
            this.Mem = obj;
        }

        if (params.Net) {
            let obj = new DeviceNetInfo();
            obj.deserialize(params.Net)
            this.Net = obj;
        }

        if (params.Disk) {
            let obj = new DeviceDiskInfo();
            obj.deserialize(params.Disk)
            this.Disk = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 文件上传描述
 * @class
 */
class UploadInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件所有分片数
         * @type {number || null}
         */
        this.AllSliceNum = null;

        /**
         * 已完成分片数
         * @type {number || null}
         */
        this.CompleteNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllSliceNum = 'AllSliceNum' in params ? params.AllSliceNum : null;
        this.CompleteNum = 'CompleteNum' in params ? params.CompleteNum : null;

    }
}

/**
 * DescribeRollbackTaskDetail请求参数结构体
 * @class
 */
class DescribeRollbackTaskDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872)。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 异步任务 ID。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 分页参数，每次请求返回的记录数。默认值为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量。默认为 0。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeRollbackRangeTime返回参数结构体
 * @class
 */
class DescribeRollbackRangeTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的实例总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的参数信息。
         * @type {Array.<InstanceRollbackRangeTime> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceRollbackRangeTime();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRoGroupInfo请求参数结构体
 * @class
 */
class ModifyRoGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO 组的 ID。
         * @type {string || null}
         */
        this.RoGroupId = null;

        /**
         * RO 组的详细信息。
         * @type {RoGroupAttr || null}
         */
        this.RoGroupInfo = null;

        /**
         * RO 组内实例的权重。若修改 RO 组的权重模式为用户自定义模式（custom），则必须设置该参数，且需要设置每个 RO 实例的权重值。
         * @type {Array.<RoWeightValue> || null}
         */
        this.RoWeightValues = null;

        /**
         * 是否重新均衡 RO 组内的 RO 实例的负载。支持值包括：1 - 重新均衡负载；0 - 不重新均衡负载。默认值为 0。注意，设置为重新均衡负载是，RO 组内 RO 实例会有一次数据库连接瞬断，请确保应用程序能重连数据库。
         * @type {number || null}
         */
        this.IsBalanceRoLoad = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoGroupId = 'RoGroupId' in params ? params.RoGroupId : null;

        if (params.RoGroupInfo) {
            let obj = new RoGroupAttr();
            obj.deserialize(params.RoGroupInfo)
            this.RoGroupInfo = obj;
        }

        if (params.RoWeightValues) {
            this.RoWeightValues = new Array();
            for (let z in params.RoWeightValues) {
                let obj = new RoWeightValue();
                obj.deserialize(params.RoWeightValues[z]);
                this.RoWeightValues.push(obj);
            }
        }
        this.IsBalanceRoLoad = 'IsBalanceRoLoad' in params ? params.IsBalanceRoLoad : null;

    }
}

/**
 * 解隔离任务结果
 * @class
 */
class ReleaseResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例解隔离操作的结果值。返回值为0表示成功。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 实例解隔离操作的错误信息。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * 实例详细信息
 * @class
 */
class InstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外网状态，可能的返回值为：0-未开通外网；1-已开通外网；2-已关闭外网
         * @type {number || null}
         */
        this.WanStatus = null;

        /**
         * 可用区信息
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 初始化标志，可能的返回值为：0-未初始化；1-已初始化
         * @type {number || null}
         */
        this.InitFlag = null;

        /**
         * 只读vip信息。单独开通只读实例访问的只读实例才有该字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RoVipInfo || null}
         */
        this.RoVipInfo = null;

        /**
         * 内存容量，单位为 MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例状态，可能的返回值：0-创建中；1-运行中；4-隔离中；5-已隔离
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 私有网络 ID，例如：51102
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * 备机信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SlaveInfo || null}
         */
        this.SlaveInfo = null;

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 硬盘容量，单位为 GB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 自动续费标志，可能的返回值：0-未开通自动续费；1-已开通自动续费；2-已关闭自动续费
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 数据复制方式。0 - 异步复制；1 - 半同步复制；2 - 强同步复制
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * 只读组详细信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RoGroup> || null}
         */
        this.RoGroups = null;

        /**
         * 子网 ID，例如：2333
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * 实例类型，可能的返回值：1-主实例；2-灾备实例；3-只读实例
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * 项目 ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 地域信息
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 实例到期时间
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * 可用区部署方式。可能的值为：0 - 单可用区；1 - 多可用区
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * 实例任务状态。0 - 没有任务 ,1 - 升级中,2 - 数据导入中,3 - 开放Slave中,4 - 外网访问开通中,5 - 批量操作执行中,6 - 回档中,7 - 外网访问关闭中,8 - 密码修改中,9 - 实例名修改中,10 - 重启中,12 - 自建迁移中,13 - 删除库表中,14 - 灾备实例创建同步中,15 - 升级待切换,16 - 升级切换中,17 - 升级切换完成
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 主实例详细信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MasterInfo || null}
         */
        this.MasterInfo = null;

        /**
         * 实例类型，可能的返回值：“HA”-高可用版；“FE”-金融版；“BASIC”-基础版
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * 内核版本
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 灾备实例详细信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DrInfo> || null}
         */
        this.DrInfo = null;

        /**
         * 外网域名
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * 外网端口号
         * @type {number || null}
         */
        this.WanPort = null;

        /**
         * 付费类型，可能的返回值：0-包年包月；1-按量计费
         * @type {number || null}
         */
        this.PayType = null;

        /**
         * 实例创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例 IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 端口号
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 是否锁定标记
         * @type {number || null}
         */
        this.CdbError = null;

        /**
         * 私有网络描述符，例如：“vpc-5v8wn9mg”
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 子网描述符，例如：“subnet-1typ0s7d”
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 物理 ID
         * @type {string || null}
         */
        this.PhysicalId = null;

        /**
         * 核心数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 每秒查询数量
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 可用区中文名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 物理机型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceClass = null;

        /**
         * 置放群组 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeployGroupId = null;

        /**
         * 可用区 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InitFlag = 'InitFlag' in params ? params.InitFlag : null;

        if (params.RoVipInfo) {
            let obj = new RoVipInfo();
            obj.deserialize(params.RoVipInfo)
            this.RoVipInfo = obj;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.SlaveInfo) {
            let obj = new SlaveInfo();
            obj.deserialize(params.SlaveInfo)
            this.SlaveInfo = obj;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;

        if (params.RoGroups) {
            this.RoGroups = new Array();
            for (let z in params.RoGroups) {
                let obj = new RoGroup();
                obj.deserialize(params.RoGroups[z]);
                this.RoGroups.push(obj);
            }
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;

        if (params.MasterInfo) {
            let obj = new MasterInfo();
            obj.deserialize(params.MasterInfo)
            this.MasterInfo = obj;
        }
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.DrInfo) {
            this.DrInfo = new Array();
            for (let z in params.DrInfo) {
                let obj = new DrInfo();
                obj.deserialize(params.DrInfo[z]);
                this.DrInfo.push(obj);
            }
        }
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.CdbError = 'CdbError' in params ? params.CdbError : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.PhysicalId = 'PhysicalId' in params ? params.PhysicalId : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.DeviceClass = 'DeviceClass' in params ? params.DeviceClass : null;
        this.DeployGroupId = 'DeployGroupId' in params ? params.DeployGroupId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * OpenWanService返回参数结构体
 * @class
 */
class OpenWanServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAuditLogFiles请求参数结构体
 * @class
 */
class DescribeAuditLogFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页大小参数。默认值为 20，最小值为 1，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 审计日志文件名。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

    }
}

/**
 * DescribeTagsOfInstanceIds返回参数结构体
 * @class
 */
class DescribeTagsOfInstanceIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 实例标签信息。
         * @type {Array.<TagsInfoOfInstance> || null}
         */
        this.Rows = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

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

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new TagsInfoOfInstance();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountPassword返回参数结构体
 * @class
 */
class ModifyAccountPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 审计规则
 * @class
 */
class AuditRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计规则 Id。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 审计规则创建时间。格式为 : "2019-03-20 17:09:13"。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 审计规则最后修改时间。格式为 : "2019-03-20 17:09:13"。
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 审计规则名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 审计规则描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 审计规则过滤条件。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AuditFilter> || null}
         */
        this.RuleFilters = null;

        /**
         * 是否开启全审计。
         * @type {boolean || null}
         */
        this.AuditAll = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.RuleFilters) {
            this.RuleFilters = new Array();
            for (let z in params.RuleFilters) {
                let obj = new AuditFilter();
                obj.deserialize(params.RuleFilters[z]);
                this.RuleFilters.push(obj);
            }
        }
        this.AuditAll = 'AuditAll' in params ? params.AuditAll : null;

    }
}

/**
 * DescribeBinlogs请求参数结构体
 * @class
 */
class DescribeBinlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 偏移量，最小值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，默认值为20，最小值为1，最大值为100。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DisassociateSecurityGroups返回参数结构体
 * @class
 */
class DisassociateSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceGTID请求参数结构体
 * @class
 */
class DescribeDBInstanceGTIDRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
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
 * 置放群组信息
 * @class
 */
class DeployGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 置放群组 ID。
         * @type {string || null}
         */
        this.DeployGroupId = null;

        /**
         * 置放群组名称。
         * @type {string || null}
         */
        this.DeployGroupName = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 置放群组实例配额，表示一个置放群组中可容纳的最大实例数目。
         * @type {number || null}
         */
        this.Quota = null;

        /**
         * 置放群组亲和性策略，目前仅支持策略1，即在物理机纬度打散实例的分布。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Affinity = null;

        /**
         * 置放群组亲和性策略1中，同台物理机上同个置放群组实例的限制个数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LimitNum = null;

        /**
         * 置放群组详细信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 置放群组物理机型属性。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DevClass = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeployGroupId = 'DeployGroupId' in params ? params.DeployGroupId : null;
        this.DeployGroupName = 'DeployGroupName' in params ? params.DeployGroupName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Quota = 'Quota' in params ? params.Quota : null;
        this.Affinity = 'Affinity' in params ? params.Affinity : null;
        this.LimitNum = 'LimitNum' in params ? params.LimitNum : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.DevClass = 'DevClass' in params ? params.DevClass : null;

    }
}

/**
 * InquiryPriceUpgradeInstances返回参数结构体
 * @class
 */
class InquiryPriceUpgradeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例价格，单位：分（人民币）。
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 实例原价，单位：分（人民币）。
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Price = 'Price' in params ? params.Price : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    ModifyAuditConfigRequest: ModifyAuditConfigRequest,
    CreateDBInstanceRequest: CreateDBInstanceRequest,
    TaskDetail: TaskDetail,
    DeviceDiskInfo: DeviceDiskInfo,
    DescribeAccountPrivilegesResponse: DescribeAccountPrivilegesResponse,
    CreateDBImportJobRequest: CreateDBImportJobRequest,
    DescribeDatabasesRequest: DescribeDatabasesRequest,
    DescribeBackupConfigRequest: DescribeBackupConfigRequest,
    DescribeRoMinScaleResponse: DescribeRoMinScaleResponse,
    CreateAuditRuleResponse: CreateAuditRuleResponse,
    StopDBImportJobRequest: StopDBImportJobRequest,
    RoWeightValue: RoWeightValue,
    DescribeSlowLogDataResponse: DescribeSlowLogDataResponse,
    SellType: SellType,
    DescribeDBInstanceInfoResponse: DescribeDBInstanceInfoResponse,
    DescribeErrorLogDataRequest: DescribeErrorLogDataRequest,
    Parameter: Parameter,
    DescribeAuditLogFilesResponse: DescribeAuditLogFilesResponse,
    DescribeDBInstanceRebootTimeRequest: DescribeDBInstanceRebootTimeRequest,
    DescribeSlowLogsRequest: DescribeSlowLogsRequest,
    Inbound: Inbound,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    CreateAccountsResponse: CreateAccountsResponse,
    RegionSellConf: RegionSellConf,
    InstanceRollbackRangeTime: InstanceRollbackRangeTime,
    SqlFileInfo: SqlFileInfo,
    CreateDeployGroupResponse: CreateDeployGroupResponse,
    DescribeTablesResponse: DescribeTablesResponse,
    SellConfig: SellConfig,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    MasterInfo: MasterInfo,
    DeleteAuditRuleRequest: DeleteAuditRuleRequest,
    DeleteParamTemplateResponse: DeleteParamTemplateResponse,
    ParamInfo: ParamInfo,
    DescribeRoMinScaleRequest: DescribeRoMinScaleRequest,
    DescribeDefaultParamsRequest: DescribeDefaultParamsRequest,
    DBSwitchInfo: DBSwitchInfo,
    ModifyNameOrDescByDpIdResponse: ModifyNameOrDescByDpIdResponse,
    StopDBImportJobResponse: StopDBImportJobResponse,
    DescribeDBPriceResponse: DescribeDBPriceResponse,
    DescribeTasksResponse: DescribeTasksResponse,
    ReleaseIsolatedDBInstancesResponse: ReleaseIsolatedDBInstancesResponse,
    AuditLogFilter: AuditLogFilter,
    DescribeParamTemplatesRequest: DescribeParamTemplatesRequest,
    DescribeRollbackRangeTimeRequest: DescribeRollbackRangeTimeRequest,
    DescribeBackupOverviewRequest: DescribeBackupOverviewRequest,
    DescribeBackupsRequest: DescribeBackupsRequest,
    DescribeAuditPoliciesResponse: DescribeAuditPoliciesResponse,
    DescribeInstanceParamRecordsResponse: DescribeInstanceParamRecordsResponse,
    DescribeDBInstanceGTIDResponse: DescribeDBInstanceGTIDResponse,
    OpenDBInstanceGTIDResponse: OpenDBInstanceGTIDResponse,
    DescribeDBZoneConfigRequest: DescribeDBZoneConfigRequest,
    DescribeDBInstanceRebootTimeResponse: DescribeDBInstanceRebootTimeResponse,
    DeleteParamTemplateRequest: DeleteParamTemplateRequest,
    DrInfo: DrInfo,
    RoGroup: RoGroup,
    DescribeDataBackupOverviewResponse: DescribeDataBackupOverviewResponse,
    ParameterDetail: ParameterDetail,
    DeleteAuditPolicyRequest: DeleteAuditPolicyRequest,
    BackupSummaryItem: BackupSummaryItem,
    SwitchForUpgradeRequest: SwitchForUpgradeRequest,
    ModifyInstanceTagResponse: ModifyInstanceTagResponse,
    CreateParamTemplateResponse: CreateParamTemplateResponse,
    CreateDBInstanceHourResponse: CreateDBInstanceHourResponse,
    ReleaseIsolatedDBInstancesRequest: ReleaseIsolatedDBInstancesRequest,
    BinlogInfo: BinlogInfo,
    DescribeAccountsRequest: DescribeAccountsRequest,
    DescribeTasksRequest: DescribeTasksRequest,
    IsolateDBInstanceResponse: IsolateDBInstanceResponse,
    SlaveConfig: SlaveConfig,
    DescribeErrorLogDataResponse: DescribeErrorLogDataResponse,
    AddTimeWindowRequest: AddTimeWindowRequest,
    ImportRecord: ImportRecord,
    DeleteAuditLogFileResponse: DeleteAuditLogFileResponse,
    DescribeRollbackTaskDetailResponse: DescribeRollbackTaskDetailResponse,
    CreateAccountsRequest: CreateAccountsRequest,
    CreateDBInstanceHourRequest: CreateDBInstanceHourRequest,
    DescribeDeployGroupListRequest: DescribeDeployGroupListRequest,
    RollbackInstancesInfo: RollbackInstancesInfo,
    DescribeParamTemplateInfoRequest: DescribeParamTemplateInfoRequest,
    BackupInfo: BackupInfo,
    CloseWanServiceResponse: CloseWanServiceResponse,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    ModifyDBInstanceVipVportResponse: ModifyDBInstanceVipVportResponse,
    DescribeDBSwitchRecordsResponse: DescribeDBSwitchRecordsResponse,
    TableName: TableName,
    RenewDBInstanceRequest: RenewDBInstanceRequest,
    RollbackTableName: RollbackTableName,
    DeleteBackupResponse: DeleteBackupResponse,
    ModifyInstanceParamRequest: ModifyInstanceParamRequest,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    ModifyDBInstanceProjectRequest: ModifyDBInstanceProjectRequest,
    CreateAuditLogFileResponse: CreateAuditLogFileResponse,
    DescribeBackupSummariesRequest: DescribeBackupSummariesRequest,
    StartBatchRollbackResponse: StartBatchRollbackResponse,
    DescribeRoGroupsRequest: DescribeRoGroupsRequest,
    DescribeDBSwitchRecordsRequest: DescribeDBSwitchRecordsRequest,
    ModifyBackupConfigResponse: ModifyBackupConfigResponse,
    DescribeSupportedPrivilegesRequest: DescribeSupportedPrivilegesRequest,
    DescribeAsyncRequestInfoResponse: DescribeAsyncRequestInfoResponse,
    CreateDBInstanceResponse: CreateDBInstanceResponse,
    ModifyInstanceTagRequest: ModifyInstanceTagRequest,
    DescribeDBInstanceCharsetResponse: DescribeDBInstanceCharsetResponse,
    DeleteAccountsResponse: DeleteAccountsResponse,
    DescribeRoGroupsResponse: DescribeRoGroupsResponse,
    CloseWanServiceRequest: CloseWanServiceRequest,
    RestartDBInstancesResponse: RestartDBInstancesResponse,
    CreateRoInstanceIpResponse: CreateRoInstanceIpResponse,
    DescribeBackupDatabasesResponse: DescribeBackupDatabasesResponse,
    DescribeBackupSummariesResponse: DescribeBackupSummariesResponse,
    DescribeInstanceParamRecordsRequest: DescribeInstanceParamRecordsRequest,
    ParamTemplateInfo: ParamTemplateInfo,
    ModifyAutoRenewFlagResponse: ModifyAutoRenewFlagResponse,
    DeleteTimeWindowResponse: DeleteTimeWindowResponse,
    DescribeBinlogBackupOverviewRequest: DescribeBinlogBackupOverviewRequest,
    RollbackTask: RollbackTask,
    DescribeBackupsResponse: DescribeBackupsResponse,
    CreateAuditPolicyRequest: CreateAuditPolicyRequest,
    CreateRoInstanceIpRequest: CreateRoInstanceIpRequest,
    ModifyInstanceParamResponse: ModifyInstanceParamResponse,
    DescribeDBImportRecordsResponse: DescribeDBImportRecordsResponse,
    CreateAuditPolicyResponse: CreateAuditPolicyResponse,
    BackupItem: BackupItem,
    DatabaseName: DatabaseName,
    AuditFilter: AuditFilter,
    DescribeBackupConfigResponse: DescribeBackupConfigResponse,
    DeleteDeployGroupsResponse: DeleteDeployGroupsResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    DescribeParamTemplatesResponse: DescribeParamTemplatesResponse,
    DescribeBackupTablesResponse: DescribeBackupTablesResponse,
    Outbound: Outbound,
    SlaveInstanceInfo: SlaveInstanceInfo,
    ModifyDBInstanceVipVportRequest: ModifyDBInstanceVipVportRequest,
    ModifyParamTemplateResponse: ModifyParamTemplateResponse,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    StartBatchRollbackRequest: StartBatchRollbackRequest,
    SecurityGroup: SecurityGroup,
    ZoneConf: ZoneConf,
    BalanceRoGroupLoadResponse: BalanceRoGroupLoadResponse,
    DeviceNetInfo: DeviceNetInfo,
    SlaveInfo: SlaveInfo,
    TagInfo: TagInfo,
    RollbackTimeRange: RollbackTimeRange,
    DescribeSupportedPrivilegesResponse: DescribeSupportedPrivilegesResponse,
    OfflineIsolatedInstancesRequest: OfflineIsolatedInstancesRequest,
    ModifyDBInstanceProjectResponse: ModifyDBInstanceProjectResponse,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    TagInfoUnit: TagInfoUnit,
    OpenDBInstanceGTIDRequest: OpenDBInstanceGTIDRequest,
    UpgradeDBInstanceEngineVersionResponse: UpgradeDBInstanceEngineVersionResponse,
    InquiryPriceUpgradeInstancesRequest: InquiryPriceUpgradeInstancesRequest,
    ModifyAuditRuleResponse: ModifyAuditRuleResponse,
    DescribeAsyncRequestInfoRequest: DescribeAsyncRequestInfoRequest,
    VerifyRootAccountRequest: VerifyRootAccountRequest,
    BalanceRoGroupLoadRequest: BalanceRoGroupLoadRequest,
    DescribeAuditRulesRequest: DescribeAuditRulesRequest,
    DescribeBackupOverviewResponse: DescribeBackupOverviewResponse,
    ColumnPrivilege: ColumnPrivilege,
    DescribeUploadedFilesRequest: DescribeUploadedFilesRequest,
    ErrlogItem: ErrlogItem,
    DescribeDeviceMonitorInfoRequest: DescribeDeviceMonitorInfoRequest,
    DescribeDBPriceRequest: DescribeDBPriceRequest,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    TagsInfoOfInstance: TagsInfoOfInstance,
    DescribeUploadedFilesResponse: DescribeUploadedFilesResponse,
    CreateBackupResponse: CreateBackupResponse,
    DescribeDBInstanceConfigResponse: DescribeDBInstanceConfigResponse,
    DescribeDefaultParamsResponse: DescribeDefaultParamsResponse,
    ModifyAccountPrivilegesResponse: ModifyAccountPrivilegesResponse,
    DeviceCpuRateInfo: DeviceCpuRateInfo,
    BackupConfig: BackupConfig,
    ModifyAuditRuleRequest: ModifyAuditRuleRequest,
    VerifyRootAccountResponse: VerifyRootAccountResponse,
    DeviceCpuInfo: DeviceCpuInfo,
    AuditPolicy: AuditPolicy,
    DescribeDeployGroupListResponse: DescribeDeployGroupListResponse,
    DescribeDBInstanceConfigRequest: DescribeDBInstanceConfigRequest,
    DescribeBackupTablesRequest: DescribeBackupTablesRequest,
    DescribeBinlogsResponse: DescribeBinlogsResponse,
    OfflineIsolatedInstancesResponse: OfflineIsolatedInstancesResponse,
    DatabasePrivilege: DatabasePrivilege,
    RoGroupAttr: RoGroupAttr,
    ModifyAuditConfigResponse: ModifyAuditConfigResponse,
    RoVipInfo: RoVipInfo,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    ModifyAccountDescriptionRequest: ModifyAccountDescriptionRequest,
    ModifyAccountPasswordRequest: ModifyAccountPasswordRequest,
    DescribeAuditPoliciesRequest: DescribeAuditPoliciesRequest,
    DescribeTablesRequest: DescribeTablesRequest,
    InstanceRebootTime: InstanceRebootTime,
    RenewDBInstanceResponse: RenewDBInstanceResponse,
    DescribeDatabasesResponse: DescribeDatabasesResponse,
    ModifyParamTemplateRequest: ModifyParamTemplateRequest,
    AddTimeWindowResponse: AddTimeWindowResponse,
    DescribeAuditConfigRequest: DescribeAuditConfigRequest,
    ZoneSellConf: ZoneSellConf,
    DescribeAuditRulesResponse: DescribeAuditRulesResponse,
    DescribeBinlogBackupOverviewResponse: DescribeBinlogBackupOverviewResponse,
    RollbackTables: RollbackTables,
    InitDBInstancesRequest: InitDBInstancesRequest,
    RoInstanceInfo: RoInstanceInfo,
    RollbackDBName: RollbackDBName,
    CreateParamTemplateRequest: CreateParamTemplateRequest,
    DeleteAuditRuleResponse: DeleteAuditRuleResponse,
    IsolateDBInstanceRequest: IsolateDBInstanceRequest,
    CreateAuditRuleRequest: CreateAuditRuleRequest,
    ModifyTimeWindowRequest: ModifyTimeWindowRequest,
    AuditLogFile: AuditLogFile,
    ModifyAccountPrivilegesRequest: ModifyAccountPrivilegesRequest,
    Account: Account,
    CreateBackupRequest: CreateBackupRequest,
    ModifyRoGroupInfoResponse: ModifyRoGroupInfoResponse,
    CommonTimeWindow: CommonTimeWindow,
    AccountInfo: AccountInfo,
    DescribeDBInstanceCharsetRequest: DescribeDBInstanceCharsetRequest,
    DescribeTimeWindowRequest: DescribeTimeWindowRequest,
    DescribeBackupDatabasesRequest: DescribeBackupDatabasesRequest,
    ModifyTimeWindowResponse: ModifyTimeWindowResponse,
    DeviceMemInfo: DeviceMemInfo,
    ModifyAutoRenewFlagRequest: ModifyAutoRenewFlagRequest,
    UpgradeDBInstanceEngineVersionRequest: UpgradeDBInstanceEngineVersionRequest,
    ModifyBackupConfigRequest: ModifyBackupConfigRequest,
    DeleteDeployGroupsRequest: DeleteDeployGroupsRequest,
    DescribeSlowLogDataRequest: DescribeSlowLogDataRequest,
    DescribeAuditConfigResponse: DescribeAuditConfigResponse,
    ModifyAccountDescriptionResponse: ModifyAccountDescriptionResponse,
    UpgradeDBInstanceResponse: UpgradeDBInstanceResponse,
    CreateAuditLogFileRequest: CreateAuditLogFileRequest,
    DeleteAuditLogFileRequest: DeleteAuditLogFileRequest,
    DescribeSlowLogsResponse: DescribeSlowLogsResponse,
    DescribeDBImportRecordsRequest: DescribeDBImportRecordsRequest,
    CreateDBImportJobResponse: CreateDBImportJobResponse,
    DescribeTagsOfInstanceIdsRequest: DescribeTagsOfInstanceIdsRequest,
    UpgradeDBInstanceRequest: UpgradeDBInstanceRequest,
    DescribeTimeWindowResponse: DescribeTimeWindowResponse,
    DeleteTimeWindowRequest: DeleteTimeWindowRequest,
    DeleteAuditPolicyResponse: DeleteAuditPolicyResponse,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    TablePrivilege: TablePrivilege,
    SlowLogInfo: SlowLogInfo,
    InitDBInstancesResponse: InitDBInstancesResponse,
    DescribeDataBackupOverviewRequest: DescribeDataBackupOverviewRequest,
    DescribeParamTemplateInfoResponse: DescribeParamTemplateInfoResponse,
    ParamRecord: ParamRecord,
    RestartDBInstancesRequest: RestartDBInstancesRequest,
    DescribeDBInstanceInfoRequest: DescribeDBInstanceInfoRequest,
    DescribeInstanceParamsResponse: DescribeInstanceParamsResponse,
    DescribeDBZoneConfigResponse: DescribeDBZoneConfigResponse,
    CreateDeployGroupRequest: CreateDeployGroupRequest,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    DeleteAccountsRequest: DeleteAccountsRequest,
    SwitchForUpgradeResponse: SwitchForUpgradeResponse,
    DescribeAccountPrivilegesRequest: DescribeAccountPrivilegesRequest,
    DescribeAccountsResponse: DescribeAccountsResponse,
    OpenWanServiceRequest: OpenWanServiceRequest,
    DeleteBackupRequest: DeleteBackupRequest,
    ModifyNameOrDescByDpIdRequest: ModifyNameOrDescByDpIdRequest,
    DescribeInstanceParamsRequest: DescribeInstanceParamsRequest,
    SlowLogItem: SlowLogItem,
    DescribeDeviceMonitorInfoResponse: DescribeDeviceMonitorInfoResponse,
    UploadInfo: UploadInfo,
    DescribeRollbackTaskDetailRequest: DescribeRollbackTaskDetailRequest,
    DescribeRollbackRangeTimeResponse: DescribeRollbackRangeTimeResponse,
    ModifyRoGroupInfoRequest: ModifyRoGroupInfoRequest,
    ReleaseResult: ReleaseResult,
    InstanceInfo: InstanceInfo,
    OpenWanServiceResponse: OpenWanServiceResponse,
    DescribeAuditLogFilesRequest: DescribeAuditLogFilesRequest,
    DescribeTagsOfInstanceIdsResponse: DescribeTagsOfInstanceIdsResponse,
    ModifyAccountPasswordResponse: ModifyAccountPasswordResponse,
    AuditRule: AuditRule,
    DescribeBinlogsRequest: DescribeBinlogsRequest,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    DescribeDBInstanceGTIDRequest: DescribeDBInstanceGTIDRequest,
    DeployGroupInfo: DeployGroupInfo,
    InquiryPriceUpgradeInstancesResponse: InquiryPriceUpgradeInstancesResponse,

}
