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
        this.TypeName = params.TypeName || null;
        this.EngineVersion = params.EngineVersion || null;

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
 * CreateDBInstance请求参数结构体
 * @class
 */
class CreateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例内存大小，单位：MB，请使用[获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229)接口获取可创建的内存规格
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例硬盘大小，单位：GB，请使用[获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229)接口获取可创建的硬盘范围
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 实例时长，单位：月，可选值包括[1,2,3,4,5,6,7,8,9,10,11,12,24,36]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 实例数量，默认值为1, 最小值1，最大值为100
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 可用区信息，该参数缺省时，系统会自动选择一个可用区，请使用[获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229)接口获取可创建的可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 私有网络ID，如果不传则默认选择基础网络，请使用[查询私有网络列表](/document/api/215/15778)
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 私有网络下的子网ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用[查询子网列表](/document/api/215/15784)
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 项目ID，不填为默认项目。请使用[查询项目列表](https://cloud.tencent.com/document/product/378/4400)接口获取项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 自定义端口，端口支持范围：[ 1024-65535 ]
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 实例类型，默认为 master，支持值包括：master-表示主实例，dr-表示灾备实例，ro-表示只读实例
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * 实例ID，购买只读实例时必填，该字段表示只读实例的主实例ID，请使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872)接口查询云数据库实例ID
         * @type {string || null}
         */
        this.MasterInstanceId = null;

        /**
         * MySQL版本，值包括：5.5、5.6和5.7，请使用[获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229)接口获取可创建的实例版本
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 设置root帐号密码，密码规则：8-64个字符，至少包含字母、数字、字符（支持的字符：_+-&=!@#$%^*()）中的两种，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 数据复制方式，默认为0，支持值包括：0-表示异步复制，1-表示半同步复制，2-表示强同步复制
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * 多可用区域，默认为0，支持值包括：0-表示单可用区，1-表示多可用区
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * 备库1的可用区信息，默认为zone的值
         * @type {string || null}
         */
        this.SlaveZone = null;

        /**
         * 参数列表，参数格式如ParamList.0.Name=auto_increment&ParamList.0.Value=1。可通过[查询参数列表](/document/product/236/6369)查询支持设置的参数
         * @type {Array.<ParamInfo> || null}
         */
        this.ParamList = null;

        /**
         * 备库2的可用区ID，默认为0，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义
         * @type {string || null}
         */
        this.BackupZone = null;

        /**
         * 自动续费标记，可选值为：0-不自动续费；1-自动续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 主实例地域信息，购买灾备实例时，该字段必填
         * @type {string || null}
         */
        this.MasterRegion = null;

        /**
         * 安全组参数，可使用[查询项目安全组信息](https://cloud.tencent.com/document/api/236/15850)接口查询某个项目的安全组详情
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * 只读实例参数
         * @type {RoGroup || null}
         */
        this.RoGroup = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例要绑定的标签
         * @type {Array.<TagInfo> || null}
         */
        this.ResourceTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Memory = params.Memory || null;
        this.Volume = params.Volume || null;
        this.Period = params.Period || null;
        this.GoodsNum = params.GoodsNum || null;
        this.Zone = params.Zone || null;
        this.UniqVpcId = params.UniqVpcId || null;
        this.UniqSubnetId = params.UniqSubnetId || null;
        this.ProjectId = params.ProjectId || null;
        this.Port = params.Port || null;
        this.InstanceRole = params.InstanceRole || null;
        this.MasterInstanceId = params.MasterInstanceId || null;
        this.EngineVersion = params.EngineVersion || null;
        this.Password = params.Password || null;
        this.ProtectMode = params.ProtectMode || null;
        this.DeployMode = params.DeployMode || null;
        this.SlaveZone = params.SlaveZone || null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new ParamInfo();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }
        this.BackupZone = params.BackupZone || null;
        this.AutoRenewFlag = params.AutoRenewFlag || null;
        this.MasterRegion = params.MasterRegion || null;
        this.SecurityGroup = params.SecurityGroup || null;

        if (params.RoGroup) {
            let obj = new RoGroup();
            obj.deserialize(params.RoGroup)
            this.RoGroup = obj;
        }
        this.InstanceName = params.InstanceName || null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfo();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

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
        this.GlobalPrivileges = params.GlobalPrivileges || null;

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
        this.RequestId = params.RequestId || null;

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
         * 实例的ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
         * 云数据库实例User账号的密码。
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
        this.InstanceId = params.InstanceId || null;
        this.FileName = params.FileName || null;
        this.User = params.User || null;
        this.Password = params.Password || null;
        this.DbName = params.DbName || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
         * 匹配数据库库名的正则表达式，规则同MySQL官网
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
        this.InstanceId = params.InstanceId || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.DatabaseRegexp = params.DatabaseRegexp || null;

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
         * 实例短实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
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
        this.RoVipStatus = params.RoVipStatus || null;
        this.RoSubnetId = params.RoSubnetId || null;
        this.RoVpcId = params.RoVpcId || null;
        this.RoVport = params.RoVport || null;
        this.RoVip = params.RoVip || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
         * 异步任务的请求ID。
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
        this.AsyncRequestId = params.AsyncRequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.Name = params.Name || null;
        this.CurrentValue = params.CurrentValue || null;

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
         * 实例的ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
        this.InstanceIds = params.InstanceIds || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
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
        this.InstanceId = params.InstanceId || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
         * 策略，ACCEPT或者DROP
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 来源Ip或Ip段，例如192.168.0.0/16
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * 端口
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * 网络协议，支持udp、tcp等
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 规则限定的方向，进站规则为INPUT
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
        this.Action = params.Action || null;
        this.CidrIp = params.CidrIp || null;
        this.PortRange = params.PortRange || null;
        this.IpProtocol = params.IpProtocol || null;
        this.Dir = params.Dir || null;

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
         * 安全组Id。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 实例ID列表，一个或者多个实例Id组成的数组。
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
        this.SecurityGroupId = params.SecurityGroupId || null;
        this.InstanceIds = params.InstanceIds || null;

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
         * 异步任务的请求ID，可使用此ID查询异步任务的执行结果。
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
        this.RegionName = params.RegionName || null;
        this.Area = params.Area || null;
        this.IsDefaultRegion = params.IsDefaultRegion || null;
        this.Region = params.Region || null;

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
        this.Code = params.Code || null;
        this.Message = params.Message || null;
        this.InstanceId = params.InstanceId || null;

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
        this.UploadTime = params.UploadTime || null;

        if (params.UploadInfo) {
            let obj = new UploadInfo();
            obj.deserialize(params.UploadInfo)
            this.UploadInfo = obj;
        }
        this.FileName = params.FileName || null;
        this.FileSize = params.FileSize || null;
        this.IsUploadFinished = params.IsUploadFinished || null;
        this.FileId = params.FileId || null;

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
        this.TotalCount = params.TotalCount || null;
        this.Items = params.Items || null;
        this.RequestId = params.RequestId || null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Device = params.Device || null;
        this.Type = params.Type || null;
        this.CdbType = params.CdbType || null;
        this.Memory = params.Memory || null;
        this.Cpu = params.Cpu || null;
        this.VolumeMin = params.VolumeMin || null;
        this.VolumeMax = params.VolumeMax || null;
        this.VolumeStep = params.VolumeStep || null;
        this.Connection = params.Connection || null;
        this.Qps = params.Qps || null;
        this.Iops = params.Iops || null;
        this.Info = params.Info || null;
        this.Status = params.Status || null;

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
        this.RequestId = params.RequestId || null;

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
        this.Region = params.Region || null;
        this.RegionId = params.RegionId || null;
        this.ZoneId = params.ZoneId || null;
        this.Zone = params.Zone || null;
        this.InstanceId = params.InstanceId || null;
        this.ResourceId = params.ResourceId || null;
        this.Status = params.Status || null;
        this.InstanceName = params.InstanceName || null;
        this.InstanceType = params.InstanceType || null;
        this.TaskStatus = params.TaskStatus || null;
        this.Memory = params.Memory || null;
        this.Volume = params.Volume || null;
        this.DeviceType = params.DeviceType || null;
        this.Qps = params.Qps || null;
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;
        this.ExClusterId = params.ExClusterId || null;
        this.ExClusterName = params.ExClusterName || null;

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
         * 符合查询条件的日志文件总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合查询条件的二进制日志文件详情
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
        this.TotalCount = params.TotalCount || null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new BinlogInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.SwitchTime = params.SwitchTime || null;
        this.SwitchType = params.SwitchType || null;

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
         * 实例价格，单位：分（人民币）
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 实例原价，单位：分（人民币）
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
        this.Price = params.Price || null;
        this.OriginalPrice = params.OriginalPrice || null;
        this.RequestId = params.RequestId || null;

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
         * 符合查询条件的实例总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的实例任务信息
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
        this.TotalCount = params.TotalCount || null;
        this.Items = params.Items || null;
        this.RequestId = params.RequestId || null;

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
         * 实例ID列表，单个实例Id的格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
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
        this.InstanceIds = params.InstanceIds || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
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
        this.InstanceId = params.InstanceId || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.RequestId = params.RequestId || null;

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
         * 异步任务的请求ID，可使用此ID查询异步任务的执行结果
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
         * GTID是否开通的标记：0-未开通，1-已开通。
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
        this.IsGTIDOpen = params.IsGTIDOpen || null;
        this.RequestId = params.RequestId || null;

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
         * 异步任务的请求ID，可使用此ID查询异步任务的执行结果。
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceRebootTime();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
         * 实例同步状态
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
        this.Status = params.Status || null;
        this.Zone = params.Zone || null;
        this.InstanceId = params.InstanceId || null;
        this.Region = params.Region || null;
        this.SyncStatus = params.SyncStatus || null;
        this.InstanceName = params.InstanceName || null;
        this.InstanceType = params.InstanceType || null;

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
         * 只读组模式，可选值为：alone-系统自动分配只读组；allinone-新建只读组；join-使用现有只读组
         * @type {string || null}
         */
        this.RoGroupMode = null;

        /**
         * 只读组ID
         * @type {string || null}
         */
        this.RoGroupId = null;

        /**
         * 只读组名称
         * @type {string || null}
         */
        this.RoGroupName = null;

        /**
         * 是否启用延迟超限剔除功能，启用该功能后，只读实例与主实例的延迟超过延迟阈值值，只读实例将被隔离。可选值：1-启用；0-不启用
         * @type {number || null}
         */
        this.RoOfflineDelay = null;

        /**
         * 延迟阀值
         * @type {number || null}
         */
        this.RoMaxDelayTime = null;

        /**
         * 最少实例保留个数，若购买只读实例数量小于设置数量将不做剔除
         * @type {number || null}
         */
        this.MinRoInGroup = null;

        /**
         * 读写权重分配模式，可选值：system-系统自动分配；custom-自定义
         * @type {string || null}
         */
        this.WeightMode = null;

        /**
         * 权重值
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 只读组中的只读实例详情
         * @type {Array.<RoInstanceInfo> || null}
         */
        this.RoInstances = null;

        /**
         * 只读组的内网IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 只读组的内网端口号
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
        this.RoGroupMode = params.RoGroupMode || null;
        this.RoGroupId = params.RoGroupId || null;
        this.RoGroupName = params.RoGroupName || null;
        this.RoOfflineDelay = params.RoOfflineDelay || null;
        this.RoMaxDelayTime = params.RoMaxDelayTime || null;
        this.MinRoInGroup = params.MinRoInGroup || null;
        this.WeightMode = params.WeightMode || null;
        this.Weight = params.Weight || null;

        if (params.RoInstances) {
            this.RoInstances = new Array();
            for (let z in params.RoInstances) {
                let obj = new RoInstanceInfo();
                obj.deserialize(params.RoInstances[z]);
                this.RoInstances.push(obj);
            }
        }
        this.Vip = params.Vip || null;
        this.Vport = params.Vport || null;

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
        this.Name = params.Name || null;
        this.ParamType = params.ParamType || null;
        this.Default = params.Default || null;
        this.Description = params.Description || null;
        this.CurrentValue = params.CurrentValue || null;
        this.NeedReboot = params.NeedReboot || null;
        this.Max = params.Max || null;
        this.Min = params.Min || null;
        this.EnumValue = params.EnumValue || null;

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
         * 异步任务的请求ID，可使用此ID查询异步任务的执行结果。
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同
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
 * ModifyInstanceParam请求参数结构体
 * @class
 */
class ModifyInstanceParamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例短Id列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 要修改的参数列表。每一个元素是name和currentValue的组合。name是参数名，currentValue是要修改成的值。
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
        this.InstanceIds = params.InstanceIds || null;

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
 * CreateDBInstanceHour返回参数结构体
 * @class
 */
class CreateDBInstanceHourResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短订单ID
         * @type {Array.<string> || null}
         */
        this.DealIds = null;

        /**
         * 实例ID列表
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
        this.DealIds = params.DealIds || null;
        this.InstanceIds = params.InstanceIds || null;
        this.RequestId = params.RequestId || null;

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
         * 日志具体类型，可能的值有：binlog - 二进制日志
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
        this.Name = params.Name || null;
        this.Size = params.Size || null;
        this.Date = params.Date || null;
        this.IntranetUrl = params.IntranetUrl || null;
        this.InternetUrl = params.InternetUrl || null;
        this.Type = params.Type || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 异步任务请求ID，执行 CDB 相关操作返回的 AsyncRequestId
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * 任务类型，不传值则查询所有任务类型，可能的值：1-数据库回档；2-SQL操作；3-数据导入；5-参数设置；6-初始化；7-重启；8-开启GTID；9-只读实例升级；10-数据库批量回档；11-主实例升级；12-删除库表；13-切换为主实例；
         * @type {Array.<number> || null}
         */
        this.TaskTypes = null;

        /**
         * 任务状态，不传值则查询所有任务状态，可能的值：-1-未定义；0-初始化; 1-运行中；2-执行成功；3-执行失败；4-已终止；5-已删除；6-已暂停；
         * @type {Array.<number> || null}
         */
        this.TaskStatus = null;

        /**
         * 第一个任务的开始时间，用于范围查询，时间格式如：2017-12-31 10:40:01
         * @type {string || null}
         */
        this.StartTimeBegin = null;

        /**
         * 最后一个任务的开始时间，用于范围查询，时间格式如：2017-12-31 10:40:01
         * @type {string || null}
         */
        this.StartTimeEnd = null;

        /**
         * 记录偏移量，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单次请求返回的数量，默认值为20，最大值为100
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
        this.InstanceId = params.InstanceId || null;
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.TaskTypes = params.TaskTypes || null;
        this.TaskStatus = params.TaskStatus || null;
        this.StartTimeBegin = params.StartTimeBegin || null;
        this.StartTimeEnd = params.StartTimeEnd || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
        this.Status = params.Status || null;
        this.Code = params.Code || null;
        this.CostTime = params.CostTime || null;
        this.InstanceId = params.InstanceId || null;
        this.WorkId = params.WorkId || null;
        this.FileName = params.FileName || null;
        this.Process = params.Process || null;
        this.CreateTime = params.CreateTime || null;
        this.FileSize = params.FileSize || null;
        this.Message = params.Message || null;
        this.JobId = params.JobId || null;
        this.DbName = params.DbName || null;
        this.AsyncRequestId = params.AsyncRequestId || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
        this.InstanceId = params.InstanceId || null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.Password = params.Password || null;
        this.Description = params.Description || null;

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
         * 实例数量，默认值为1, 最小值1，最大值为100
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 实例内存大小，单位：MB，请使用[获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229)接口获取可创建的内存规格
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例硬盘大小，单位：GB，请使用[获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229)接口获取可创建的硬盘范围
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * MySQL版本，值包括：5.5、5.6和5.7，请使用[获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229)接口获取可创建的实例版本
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 私有网络ID，如果不传则默认选择基础网络，请使用[查询私有网络列表](/document/api/215/15778)
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 私有网络下的子网ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用[查询子网列表](/document/api/215/15784)
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 项目ID，不填为默认项目。请使用[查询项目列表](https://cloud.tencent.com/document/product/378/4400)接口获取项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 可用区信息，该参数缺省时，系统会自动选择一个可用区，请使用[获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229)接口获取可创建的可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例ID，购买只读实例或者灾备实例时必填，该字段表示只读实例或者灾备实例的主实例ID，请使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872)接口查询云数据库实例ID
         * @type {string || null}
         */
        this.MasterInstanceId = null;

        /**
         * 实例类型，默认为 master，支持值包括：master-表示主实例，dr-表示灾备实例，ro-表示只读实例
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * 主实例的可用区信息，购买灾备实例时必填
         * @type {string || null}
         */
        this.MasterRegion = null;

        /**
         * 自定义端口，端口支持范围：[ 1024-65535 ]
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 设置root帐号密码，密码规则：8-64个字符，至少包含字母、数字、字符（支持的字符：_+-&=!@#$%^*()）中的两种，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 参数列表，参数格式如ParamList.0.Name=auto_increment_increment&ParamList.0.Value=1。可通过[查询参数列表](/document/product/236/6369)查询支持设置的参数
         * @type {Array.<ParamInfo> || null}
         */
        this.ParamList = null;

        /**
         * 数据复制方式，默认为0，支持值包括：0-表示异步复制，1-表示半同步复制，2-表示强同步复制，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * 多可用区域，默认为0，支持值包括：0-表示单可用区，1-表示多可用区，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * 备库1的可用区ID，默认为zoneId的值，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义
         * @type {string || null}
         */
        this.SlaveZone = null;

        /**
         * 备库2的可用区ID，默认为0，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义
         * @type {string || null}
         */
        this.BackupZone = null;

        /**
         * 安全组参数，可使用[查询项目安全组信息](https://cloud.tencent.com/document/api/236/15850)接口查询某个项目的安全组详情
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * 只读实例信息
         * @type {RoGroup || null}
         */
        this.RoGroup = null;

        /**
         * 自动续费标记，值为0或1。购买按量计费实例该字段无意义
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例标签
         * @type {Array.<TagInfo> || null}
         */
        this.ResourceTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GoodsNum = params.GoodsNum || null;
        this.Memory = params.Memory || null;
        this.Volume = params.Volume || null;
        this.EngineVersion = params.EngineVersion || null;
        this.UniqVpcId = params.UniqVpcId || null;
        this.UniqSubnetId = params.UniqSubnetId || null;
        this.ProjectId = params.ProjectId || null;
        this.Zone = params.Zone || null;
        this.MasterInstanceId = params.MasterInstanceId || null;
        this.InstanceRole = params.InstanceRole || null;
        this.MasterRegion = params.MasterRegion || null;
        this.Port = params.Port || null;
        this.Password = params.Password || null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new ParamInfo();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }
        this.ProtectMode = params.ProtectMode || null;
        this.DeployMode = params.DeployMode || null;
        this.SlaveZone = params.SlaveZone || null;
        this.BackupZone = params.BackupZone || null;
        this.SecurityGroup = params.SecurityGroup || null;

        if (params.RoGroup) {
            let obj = new RoGroup();
            obj.deserialize(params.RoGroup)
            this.RoGroup = obj;
        }
        this.AutoRenewFlag = params.AutoRenewFlag || null;
        this.InstanceName = params.InstanceName || null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfo();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

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
         * 符合查询条件的慢查询日志总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合查询条件的慢查询日志详情
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
        this.TotalCount = params.TotalCount || null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SlowLogInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
         * @type {Array.<RollbackDBName> || null}
         */
        this.Databases = null;

        /**
         * 待回档的数据库表信息，表示按表回档
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
        this.InstanceId = params.InstanceId || null;
        this.Strategy = params.Strategy || null;
        this.RollbackTime = params.RollbackTime || null;

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
         * 日志具体类型，可能的值有：logic - 逻辑冷备，physical - 物理冷备
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 备份子任务的ID，删除备份文件时使用
         * @type {number || null}
         */
        this.BackupId = null;

        /**
         * 备份任务状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 备份任务的完成时间
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * 备份的创建者，可能的值：SYSTEM - 系统创建，Uin - 发起者Uin值
         * @type {string || null}
         */
        this.Creator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = params.Name || null;
        this.Size = params.Size || null;
        this.Date = params.Date || null;
        this.IntranetUrl = params.IntranetUrl || null;
        this.InternetUrl = params.InternetUrl || null;
        this.Type = params.Type || null;
        this.BackupId = params.BackupId || null;
        this.Status = params.Status || null;
        this.FinishTime = params.FinishTime || null;
        this.Creator = params.Creator || null;

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
         * 异步任务的请求ID，可使用此ID查询异步任务的执行结果。
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
         * 项目ID，可使用[查询项目列表](https://cloud.tencent.com/document/product/378/4400)接口查询项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例类型，可取值：1-主实例，2-灾备实例，3-只读实例
         * @type {Array.<number> || null}
         */
        this.InstanceTypes = null;

        /**
         * 实例的内网IP地址
         * @type {Array.<string> || null}
         */
        this.Vips = null;

        /**
         * 实例状态，可取值：0-创建中，1-运行中，4-隔离中，5-已隔离
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 偏移量，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单次请求返回的数量，默认值为20，最大值为2000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 安全组ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 付费类型，可取值：0-包年包月，1-小时计费
         * @type {Array.<number> || null}
         */
        this.PayTypes = null;

        /**
         * 实例名称
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * 实例任务状态，可能取值：<br>0-没有任务<br>1-升级中<br>2-数据导入中<br>3-开放Slave中<br>4-外网访问开通中<br>5-批量操作执行中<br>6-回档中<br>7-外网访问关闭中<br>8-密码修改中<br>9-实例名修改中<br>10-重启中<br>12-自建迁移中<br>13-删除库表中<br>14-灾备实例创建同步中<br>15-升级待切换<br>16-升级切换中<br>17-升级切换完成
         * @type {Array.<number> || null}
         */
        this.TaskStatus = null;

        /**
         * 实例数据库引擎版本，可能取值：5.1、5.5、5.6和5.7
         * @type {Array.<string> || null}
         */
        this.EngineVersions = null;

        /**
         * 私有网络的ID
         * @type {Array.<number> || null}
         */
        this.VpcIds = null;

        /**
         * 可用区的ID
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

        /**
         * 子网ID
         * @type {Array.<number> || null}
         */
        this.SubnetIds = null;

        /**
         * 是否锁定标记
         * @type {Array.<number> || null}
         */
        this.CdbErrors = null;

        /**
         * 返回结果集排序的字段，目前支持："InstanceId", "InstanceName", "CreateTime", "DeadlineTime"
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 返回结果集排序方式，目前支持："ASC"或者"DESC"
         * @type {string || null}
         */
        this.OrderDirection = null;

        /**
         * 是否包含安全组详细信息，可取值：0-不包含，1-包含
         * @type {number || null}
         */
        this.WithSecurityGroup = null;

        /**
         * 是否包含独享集群详细信息，可取值：0-不包含，1-包含
         * @type {number || null}
         */
        this.WithExCluster = null;

        /**
         * 独享集群ID
         * @type {string || null}
         */
        this.ExClusterId = null;

        /**
         * 实例ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 初始化标记，可取值：0-未初始化，1-初始化
         * @type {number || null}
         */
        this.InitFlag = null;

        /**
         * 是否包含灾备实例，可取值：0-不包含，1-包含
         * @type {number || null}
         */
        this.WithDr = null;

        /**
         * 是否包含只读实例，可取值：0-不包含，1-包含
         * @type {number || null}
         */
        this.WithRo = null;

        /**
         * 是否包含主实例，可取值：0-不包含，1-包含
         * @type {number || null}
         */
        this.WithMaster = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = params.ProjectId || null;
        this.InstanceTypes = params.InstanceTypes || null;
        this.Vips = params.Vips || null;
        this.Status = params.Status || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.SecurityGroupId = params.SecurityGroupId || null;
        this.PayTypes = params.PayTypes || null;
        this.InstanceNames = params.InstanceNames || null;
        this.TaskStatus = params.TaskStatus || null;
        this.EngineVersions = params.EngineVersions || null;
        this.VpcIds = params.VpcIds || null;
        this.ZoneIds = params.ZoneIds || null;
        this.SubnetIds = params.SubnetIds || null;
        this.CdbErrors = params.CdbErrors || null;
        this.OrderBy = params.OrderBy || null;
        this.OrderDirection = params.OrderDirection || null;
        this.WithSecurityGroup = params.WithSecurityGroup || null;
        this.WithExCluster = params.WithExCluster || null;
        this.ExClusterId = params.ExClusterId || null;
        this.InstanceIds = params.InstanceIds || null;
        this.InitFlag = params.InitFlag || null;
        this.WithDr = params.WithDr || null;
        this.WithRo = params.WithRo || null;
        this.WithMaster = params.WithMaster || null;

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
        this.InstanceId = params.InstanceId || null;

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
         * 异步任务ID，可使用[查询任务列表](https://cloud.tencent.com/document/api/236/8010)获取其执行情况。
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new DBSwitchInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.TableName = params.TableName || null;

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
         * 待续费的实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872)
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 续费时长，单位：月，可选值包括[1,2,3,4,5,6,7,8,9,10,11,12,24,36]
         * @type {number || null}
         */
        this.TimeSpan = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.TimeSpan = params.TimeSpan || null;

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
        this.Name = params.Name || null;
        this.Size = params.Size || null;
        this.Date = params.Date || null;
        this.IntranetUrl = params.IntranetUrl || null;
        this.InternetUrl = params.InternetUrl || null;
        this.Type = params.Type || null;

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
        this.RequestId = params.RequestId || null;

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
        this.Database = params.Database || null;
        this.Table = params.Table || null;
        this.Privileges = params.Privileges || null;

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
        this.RequestId = params.RequestId || null;

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
        this.AllSliceNum = params.AllSliceNum || null;
        this.CompleteNum = params.CompleteNum || null;

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
         * 异步任务的请求ID，可使用此ID查询异步任务的执行结果。
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，默认值为50，最小值为1，最大值为2000。
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
        this.InstanceId = params.InstanceId || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务执行信息描述。
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
        this.Status = params.Status || null;
        this.Info = params.Info || null;
        this.RequestId = params.RequestId || null;

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
         * 短订单ID
         * @type {Array.<string> || null}
         */
        this.DealIds = null;

        /**
         * 实例ID列表
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
        this.DealIds = params.DealIds || null;
        this.InstanceIds = params.InstanceIds || null;
        this.RequestId = params.RequestId || null;

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
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 回档后的新数据库表名
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
        this.TableName = params.TableName || null;
        this.NewTableName = params.NewTableName || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
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
 * DeleteAccounts返回参数结构体
 * @class
 */
class DeleteAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求ID，可使用此ID查询异步任务的执行结果。
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
         * 实例的默认字符集，如"latin1", "utf8"等。
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
        this.Charset = params.Charset || null;
        this.RequestId = params.RequestId || null;

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
         * 异步任务的请求ID，可使用此ID查询异步任务的执行结果。
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
         * 返回的数据个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合查询条件的数据库数组
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
        this.TotalCount = params.TotalCount || null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new DatabaseName();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
         * 符合查询条件的实例总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合查询条件的备份信息详情
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
        this.TotalCount = params.TotalCount || null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new BackupInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ImportRecord();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值
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
        this.DatabaseName = params.DatabaseName || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值
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
 * ModifyDBInstanceSecurityGroups请求参数结构体
 * @class
 */
class ModifyDBInstanceSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 要修改的安全组ID列表，一个或者多个安全组Id组成的数组。
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
        this.InstanceId = params.InstanceId || null;
        this.SecurityGroupIds = params.SecurityGroupIds || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new TableName();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
         * 策略，ACCEPT或者DROP
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 目的Ip或Ip段，例如172.16.0.0/12
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * 端口或者端口范围
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * 网络协议，支持udp、tcp等
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 规则限定的方向，进站规则为OUTPUT
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
        this.Action = params.Action || null;
        this.CidrIp = params.CidrIp || null;
        this.PortRange = params.PortRange || null;
        this.IpProtocol = params.IpProtocol || null;
        this.Dir = params.Dir || null;

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
         * 虚拟Ip信息
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
        this.Vport = params.Vport || null;
        this.Region = params.Region || null;
        this.Vip = params.Vip || null;
        this.Zone = params.Zone || null;

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
        this.Name = params.Name || null;
        this.Value = params.Value || null;

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
        this.ProjectId = params.ProjectId || null;

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
         * 用于回档的实例详情信息
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
        this.ProjectId = params.ProjectId || null;
        this.CreateTime = params.CreateTime || null;

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
        this.SecurityGroupId = params.SecurityGroupId || null;
        this.SecurityGroupName = params.SecurityGroupName || null;
        this.SecurityGroupRemark = params.SecurityGroupRemark || null;

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
        this.DeployMode = params.DeployMode || null;
        this.MasterZone = params.MasterZone || null;
        this.SlaveZone = params.SlaveZone || null;
        this.BackupZone = params.BackupZone || null;

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
 * ModifyDBInstanceName请求参数结构体
 * @class
 */
class ModifyDBInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
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
        this.InstanceId = params.InstanceId || null;
        this.InstanceName = params.InstanceName || null;

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
         * 异步任务ID，可使用[查询任务列表](https://cloud.tencent.com/document/api/236/8010)获取其执行情况
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
         * 异步任务的请求ID。
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
        this.AsyncRequestId = params.AsyncRequestId || null;

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
         * 异步任务Id，可用于查询任务进度。
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 升级后的内存大小，单位：MB，为保证传入 Memory 值有效，请使用[查询可创建规格（支持可用区、配置自定义）](https://cloud.tencent.com/document/api/253/6109)接口获取可升级的内存规格
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 升级后的硬盘大小，单位：GB，为保证传入 Volume 值有效，请使用[查询可创建规格（支持可用区、配置自定义）](https://cloud.tencent.com/document/api/253/6109)接口获取可升级的硬盘范围
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 数据复制方式，支持值包括：0-异步复制，1-半同步复制，2-强同步复制，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * 部署模式，默认为0，支持值包括：0-单可用区部署，1-多可用区部署，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * 备库1的可用区信息，默认为实例的Zone，升级主实例为多可用区部署时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。可通过<a href='/document/product/236/6921' title='查询云数据库可售卖规格'>查询云数据库可售卖规格</a>查询支持的可用区
         * @type {string || null}
         */
        this.SlaveZone = null;

        /**
         * 主实例数据库引擎版本，支持值包括：5.5、5.6和5.7
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 切换访问新实例的方式，默认为0，升级主实例时，可指定该参数，升级只读实例或者灾备实例时指定该参数无意义，支持值包括：0-立刻切换，1-时间窗切换；当该值为1时，升级中过程中，切换访问新实例的流程将会在时间窗内进行，或者用户主动调用接口[切换访问新实例](https://cloud.tencent.com/document/api/403/4392)触发该流程
         * @type {number || null}
         */
        this.WaitSwitch = null;

        /**
         * 备库2的可用区ID，默认为0，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义
         * @type {string || null}
         */
        this.BackupZone = null;

        /**
         * 实例类型，默认为 master，支持值包括：master-表示主实例，dr-表示灾备实例，ro-表示只读实例
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
        this.InstanceId = params.InstanceId || null;
        this.Memory = params.Memory || null;
        this.Volume = params.Volume || null;
        this.ProtectMode = params.ProtectMode || null;
        this.DeployMode = params.DeployMode || null;
        this.SlaveZone = params.SlaveZone || null;
        this.EngineVersion = params.EngineVersion || null;
        this.WaitSwitch = params.WaitSwitch || null;
        this.BackupZone = params.BackupZone || null;
        this.InstanceRole = params.InstanceRole || null;

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
        this.Database = params.Database || null;
        this.Table = params.Table || null;
        this.Column = params.Column || null;
        this.Privileges = params.Privileges || null;

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
        this.Path = params.Path || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SqlFileInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.InstanceIds = params.InstanceIds || null;
        this.NewPassword = params.NewPassword || null;

        if (params.Parameters) {
            this.Parameters = new Array();
            for (let z in params.Parameters) {
                let obj = new ParamInfo();
                obj.deserialize(params.Parameters[z]);
                this.Parameters.push(obj);
            }
        }
        this.Vport = params.Vport || null;

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
        this.RequestId = params.RequestId || null;

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
         * @type {RoVipInfo || null}
         */
        this.RoVipInfo = null;

        /**
         * 内存容量，单位为MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例状态，可能的返回值：0-创建中；1-运行中；4-隔离中；5-已隔离
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 私有网络ID，例如：51102
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * 备机信息
         * @type {SlaveInfo || null}
         */
        this.SlaveInfo = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 硬盘容量，单位为GB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 自动续费标志，可能的返回值：0-未开通自动续费；1-已开通自动续费；2-已关闭自动续费
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 数据复制方式
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * 只读组详细信息
         * @type {Array.<RoGroup> || null}
         */
        this.RoGroups = null;

        /**
         * 子网ID，例如：2333
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * 实例类型，可能的返回值：1-主实例；2-灾备实例；3-只读实例
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * 项目ID
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
         * 可用区部署方式
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * 实例任务状态
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 主实例详细信息
         * @type {MasterInfo || null}
         */
        this.MasterInfo = null;

        /**
         * 实例类型，可能的返回值：“HA”-高可用版；“BASIC”-基础版
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
         * 实例IP
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
         * 物理ID
         * @type {string || null}
         */
        this.PhysicalId = null;

        /**
         * 核心数
         * @type {number || null}
         */
        this.Cpu = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WanStatus = params.WanStatus || null;
        this.Zone = params.Zone || null;
        this.InitFlag = params.InitFlag || null;

        if (params.RoVipInfo) {
            let obj = new RoVipInfo();
            obj.deserialize(params.RoVipInfo)
            this.RoVipInfo = obj;
        }
        this.Memory = params.Memory || null;
        this.Status = params.Status || null;
        this.VpcId = params.VpcId || null;

        if (params.SlaveInfo) {
            let obj = new SlaveInfo();
            obj.deserialize(params.SlaveInfo)
            this.SlaveInfo = obj;
        }
        this.InstanceId = params.InstanceId || null;
        this.Volume = params.Volume || null;
        this.AutoRenew = params.AutoRenew || null;
        this.ProtectMode = params.ProtectMode || null;

        if (params.RoGroups) {
            this.RoGroups = new Array();
            for (let z in params.RoGroups) {
                let obj = new RoGroup();
                obj.deserialize(params.RoGroups[z]);
                this.RoGroups.push(obj);
            }
        }
        this.SubnetId = params.SubnetId || null;
        this.InstanceType = params.InstanceType || null;
        this.ProjectId = params.ProjectId || null;
        this.Region = params.Region || null;
        this.DeadlineTime = params.DeadlineTime || null;
        this.DeployMode = params.DeployMode || null;
        this.TaskStatus = params.TaskStatus || null;

        if (params.MasterInfo) {
            let obj = new MasterInfo();
            obj.deserialize(params.MasterInfo)
            this.MasterInfo = obj;
        }
        this.DeviceType = params.DeviceType || null;
        this.EngineVersion = params.EngineVersion || null;
        this.InstanceName = params.InstanceName || null;

        if (params.DrInfo) {
            this.DrInfo = new Array();
            for (let z in params.DrInfo) {
                let obj = new DrInfo();
                obj.deserialize(params.DrInfo[z]);
                this.DrInfo.push(obj);
            }
        }
        this.WanDomain = params.WanDomain || null;
        this.WanPort = params.WanPort || null;
        this.PayType = params.PayType || null;
        this.CreateTime = params.CreateTime || null;
        this.Vip = params.Vip || null;
        this.Vport = params.Vport || null;
        this.CdbError = params.CdbError || null;
        this.UniqVpcId = params.UniqVpcId || null;
        this.UniqSubnetId = params.UniqSubnetId || null;
        this.PhysicalId = params.PhysicalId || null;
        this.Cpu = params.Cpu || null;

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
         * 备份任务ID。
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
        this.BackupId = params.BackupId || null;
        this.RequestId = params.RequestId || null;

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
         * 可用区信息，格式如"ap-guangzhou-1"
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例数量，默认值为1, 最小值1，最大值为100
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 实例内存大小，单位：MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例硬盘大小，单位：GB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 付费类型，支持值包括：PRE_PAID - 包年包月，HOUR_PAID - 按量计费
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * 实例时长，单位：月，最小值1，最大值为36；查询按量计费价格时，该字段无效
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 实例类型，默认为 master，支持值包括：master-表示主实例，ro-表示只读实例，dr-表示灾备实例
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * 数据复制方式，默认为0，支持值包括：0-表示异步复制，1-表示半同步复制，2-表示强同步复制
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
        this.Zone = params.Zone || null;
        this.GoodsNum = params.GoodsNum || null;
        this.Memory = params.Memory || null;
        this.Volume = params.Volume || null;
        this.PayType = params.PayType || null;
        this.Period = params.Period || null;
        this.InstanceRole = params.InstanceRole || null;
        this.ProtectMode = params.ProtectMode || null;

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
        this.ReplicationMode = params.ReplicationMode || null;
        this.Zone = params.Zone || null;

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
         * 异步任务的请求ID，可使用此ID查询异步任务的执行结果。
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
         * @type {string || null}
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
        this.ReplicationMode = params.ReplicationMode || null;
        this.Zone = params.Zone || null;
        this.Vip = params.Vip || null;
        this.Vport = params.Vport || null;

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
         * 异步任务的请求ID，可使用此ID查询异步任务的执行结果
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
        this.InstanceId = params.InstanceId || null;
        this.StartTime = params.StartTime || null;
        this.DatabaseName = params.DatabaseName || null;
        this.SearchTable = params.SearchTable || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.Privileges = params.Privileges || null;
        this.Database = params.Database || null;

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
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
        this.InstanceId = params.InstanceId || null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.Description = params.Description || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库账号的新密码。
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
        this.InstanceId = params.InstanceId || null;
        this.NewPassword = params.NewPassword || null;

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
 * DescribeTables请求参数结构体
 * @class
 */
class DescribeTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
         * 匹配数据库表名的正则表达式，规则同MySQL官网
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
        this.InstanceId = params.InstanceId || null;
        this.Database = params.Database || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.TableRegexp = params.TableRegexp || null;

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
        this.InstanceId = params.InstanceId || null;
        this.TimeInSeconds = params.TimeInSeconds || null;

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
         * 订单ID
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
        this.DealId = params.DealId || null;
        this.RequestId = params.RequestId || null;

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
        this.TotalCount = params.TotalCount || null;
        this.Items = params.Items || null;
        this.RequestId = params.RequestId || null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = params.Status || null;
        this.ZoneName = params.ZoneName || null;
        this.IsCustom = params.IsCustom || null;
        this.IsSupportDr = params.IsSupportDr || null;
        this.IsSupportVpc = params.IsSupportVpc || null;
        this.HourInstanceSaleMaxNum = params.HourInstanceSaleMaxNum || null;
        this.IsDefaultZone = params.IsDefaultZone || null;
        this.IsBm = params.IsBm || null;
        this.PayType = params.PayType || null;
        this.ProtectMode = params.ProtectMode || null;
        this.Zone = params.Zone || null;

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
         * 主库数据保护方式，主实例属性，可能的返回值：0-异步复制方式，1-半同步复制方式，2-强同步复制方式。
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * 主库部署方式，主实例属性，可能的返回值：0-单可用部署，1-多可用区部署。
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * 主库可用区的正式名称，如ap-shanghai-1。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 从库的配置信息。
         * @type {SlaveConfig || null}
         */
        this.SlaveConfig = null;

        /**
         * ECDB第二个从库的配置信息，只有ECDB实例才有这个字段。
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
        this.ProtectMode = params.ProtectMode || null;
        this.DeployMode = params.DeployMode || null;
        this.Zone = params.Zone || null;

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
        this.RequestId = params.RequestId || null;

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
        this.MasterInstanceId = params.MasterInstanceId || null;
        this.RoStatus = params.RoStatus || null;
        this.OfflineTime = params.OfflineTime || null;
        this.Weight = params.Weight || null;
        this.Region = params.Region || null;
        this.Zone = params.Zone || null;
        this.InstanceId = params.InstanceId || null;
        this.Status = params.Status || null;
        this.InstanceType = params.InstanceType || null;
        this.InstanceName = params.InstanceName || null;
        this.HourFeeStatus = params.HourFeeStatus || null;
        this.TaskStatus = params.TaskStatus || null;
        this.Memory = params.Memory || null;
        this.Volume = params.Volume || null;
        this.Qps = params.Qps || null;
        this.Vip = params.Vip || null;
        this.Vport = params.Vport || null;
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;
        this.DeviceType = params.DeviceType || null;
        this.EngineVersion = params.EngineVersion || null;
        this.DeadlineTime = params.DeadlineTime || null;
        this.PayType = params.PayType || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值
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
 * ModifyAccountPrivileges请求参数结构体
 * @class
 */
class ModifyAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库的账号，包括用户名和域名。
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * 全局权限。其中，GlobalPrivileges 中权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE",	"DROP","REFERENCES","INDEX","ALTER","SHOW DATABASES","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。
         * @type {Array.<string> || null}
         */
        this.GlobalPrivileges = null;

        /**
         * 数据库的权限。Privileges权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE",	"DROP","REFERENCES","INDEX","ALTER","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。
         * @type {Array.<DatabasePrivilege> || null}
         */
        this.DatabasePrivileges = null;

        /**
         * 数据库中表的权限。Privileges权限的可选值为：权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE",	"DROP","REFERENCES","INDEX","ALTER","CREATE VIEW","SHOW VIEW", "TRIGGER"。
         * @type {Array.<TablePrivilege> || null}
         */
        this.TablePrivileges = null;

        /**
         * 数据库表中列的权限。Privileges权限的可选值为："SELECT","INSERT","UPDATE","REFERENCES"。
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
        this.InstanceId = params.InstanceId || null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.GlobalPrivileges = params.GlobalPrivileges || null;

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
        this.User = params.User || null;
        this.Host = params.Host || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 目标备份方法，可选的值：logical - 逻辑冷备，physical - 物理冷备。
         * @type {string || null}
         */
        this.BackupMethod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.BackupMethod = params.BackupMethod || null;

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
        this.Notes = params.Notes || null;
        this.Host = params.Host || null;
        this.User = params.User || null;
        this.ModifyTime = params.ModifyTime || null;
        this.ModifyPasswordTime = params.ModifyPasswordTime || null;
        this.CreateTime = params.CreateTime || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
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
 * 用于回档的数据库表详情
 * @class
 */
class RollbackTables extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 数据库表详情
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
        this.Database = params.Database || null;

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
 * DescribeBackupDatabases请求参数结构体
 * @class
 */
class DescribeBackupDatabasesRequest extends  AbstractModel {
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
        this.InstanceId = params.InstanceId || null;
        this.StartTime = params.StartTime || null;
        this.SearchDatabase = params.SearchDatabase || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
         * 实例的ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 自动续费标记，可取值的有：0-不自动续费，1-自动续费。
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
        this.InstanceIds = params.InstanceIds || null;
        this.AutoRenew = params.AutoRenew || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主实例数据库引擎版本，支持值包括：5.6和5.7
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 切换访问新实例的方式，默认为0，升级主实例时，可指定该参数，升级只读实例或者灾备实例时指定该参数无意义，支持值包括：0-立刻切换，1-时间窗切换；当该值为1时，升级中过程中，切换访问新实例的流程将会在时间窗内进行，或者用户主动调用接口[切换访问新实例](https://cloud.tencent.com/document/api/403/4392)触发该流程
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
        this.InstanceId = params.InstanceId || null;
        this.EngineVersion = params.EngineVersion || null;
        this.WaitSwitch = params.WaitSwitch || null;

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
         * 订单ID，用于调用云API相关接口，如[获取订单信息](https://cloud.tencent.com/document/api/403/4392)
         * @type {Array.<string> || null}
         */
        this.DealIds = null;

        /**
         * 异步任务的请求ID，可使用此ID查询异步任务的执行结果
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
        this.DealIds = params.DealIds || null;
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 目标IP。该参数和DstPort参数，两者必传一个。
         * @type {string || null}
         */
        this.DstIp = null;

        /**
         * 目标端口，支持范围为：[1024-65535]。该参数和DstIp参数，两者必传一个。
         * @type {number || null}
         */
        this.DstPort = null;

        /**
         * 私有网络统一ID。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 子网统一ID。
         * @type {string || null}
         */
        this.UniqSubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.DstIp = params.DstIp || null;
        this.DstPort = params.DstPort || null;
        this.UniqVpcId = params.UniqVpcId || null;
        this.UniqSubnetId = params.UniqSubnetId || null;

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
        this.RequestId = params.RequestId || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
         * 分页参数 , 偏移量 , 默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页参数 , 单次请求返回的数量 , 默认值为20，最小值为1，最大值为100。
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
        this.InstanceId = params.InstanceId || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
         * 异步任务的请求ID，可使用此ID查询异步任务的执行结果
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
        this.TagKey = params.TagKey || null;
        this.TagValue = params.TagValue || null;

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
         * 符合查询条件的实例总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息
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
        this.TotalCount = params.TotalCount || null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.AsyncRequestIds = params.AsyncRequestIds || null;
        this.RequestId = params.RequestId || null;

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
         * 实例ID数组，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
        this.InstanceIds = params.InstanceIds || null;

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
         * 实例的参数总数
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
        this.TotalCount = params.TotalCount || null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParameterDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new RegionSellConf();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
         * 实例ID数组，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 项目的ID。
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
        this.InstanceIds = params.InstanceIds || null;
        this.NewProjectId = params.NewProjectId || null;

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
         * 安全组Id。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 实例ID列表，一个或者多个实例Id组成的数组。
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
        this.SecurityGroupId = params.SecurityGroupId || null;
        this.InstanceIds = params.InstanceIds || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
        this.InstanceId = params.InstanceId || null;

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
        this.RequestId = params.RequestId || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
        this.InstanceId = params.InstanceId || null;
        this.User = params.User || null;
        this.Host = params.Host || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new AccountInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.Begin = params.Begin || null;
        this.End = params.End || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 备份任务ID。该任务ID为[创建云数据库备份](https://cloud.tencent.com/document/api/236/15844)接口返回的任务ID。
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
        this.InstanceId = params.InstanceId || null;
        this.BackupId = params.BackupId || null;

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
         * 备份开始的最早时间点，单位为时刻。例如，2 - 凌晨2:00
         * @type {number || null}
         */
        this.StartTimeMin = null;

        /**
         * 备份开始的最晚时间点，单位为时刻。例如，6 - 凌晨6:00
         * @type {number || null}
         */
        this.StartTimeMax = null;

        /**
         * 备份过期时间，单位为天
         * @type {number || null}
         */
        this.BackupExpireDays = null;

        /**
         * 备份方式，可能的值为：physical - 物理备份，logical - 逻辑备份
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * Binlog过期时间，单位为天
         * @type {number || null}
         */
        this.BinlogExpireDays = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeMin = params.StartTimeMin || null;
        this.StartTimeMax = params.StartTimeMax || null;
        this.BackupExpireDays = params.BackupExpireDays || null;
        this.BackupMethod = params.BackupMethod || null;
        this.BinlogExpireDays = params.BinlogExpireDays || null;
        this.RequestId = params.RequestId || null;

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
         * 异步任务的请求ID，可使用此ID查询异步任务的执行结果
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceRollbackRangeTime();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例ROOT账号的密码。
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
        this.InstanceId = params.InstanceId || null;
        this.Password = params.Password || null;

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
         * 异步任务的请求ID，可使用此ID查询异步任务的执行结果
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
        this.AsyncRequestId = params.AsyncRequestId || null;
        this.RequestId = params.RequestId || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 备份过期时间，单位为天，最小值为7天，最大值为732天。
         * @type {number || null}
         */
        this.ExpireDays = null;

        /**
         * 备份时间范围，格式为：02:00-06:00，起点和终点时间目前限制为整点，目前可以选择的范围为： 02:00-06:00，06：00-10：00，10:00-14:00，14:00-18:00，18:00-22:00，22:00-02:00。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 目标备份方法，可选的值：logical - 逻辑冷备，physical - 物理冷备；默认备份方法为 逻辑冷备。
         * @type {string || null}
         */
        this.BackupMethod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.ExpireDays = params.ExpireDays || null;
        this.StartTime = params.StartTime || null;
        this.BackupMethod = params.BackupMethod || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。
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
        this.InstanceId = params.InstanceId || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.RequestId = params.RequestId || null;

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
         * 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。
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
 * 用于回档的数据库名
 * @class
 */
class RollbackDBName extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回档前的原数据库名
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 回档后的新数据库名
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
        this.DatabaseName = params.DatabaseName || null;
        this.NewDatabaseName = params.NewDatabaseName || null;

    }
}

module.exports = {
    SellType: SellType,
    CreateDBInstanceRequest: CreateDBInstanceRequest,
    DescribeAccountPrivilegesResponse: DescribeAccountPrivilegesResponse,
    CreateDBImportJobRequest: CreateDBImportJobRequest,
    DescribeDatabasesRequest: DescribeDatabasesRequest,
    DescribeBackupConfigRequest: DescribeBackupConfigRequest,
    RoVipInfo: RoVipInfo,
    DescribeAccountsRequest: DescribeAccountsRequest,
    StopDBImportJobRequest: StopDBImportJobRequest,
    StopDBImportJobResponse: StopDBImportJobResponse,
    Parameter: Parameter,
    DescribeDBInstanceRebootTimeRequest: DescribeDBInstanceRebootTimeRequest,
    DescribeSlowLogsRequest: DescribeSlowLogsRequest,
    Inbound: Inbound,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    CreateAccountsResponse: CreateAccountsResponse,
    RegionSellConf: RegionSellConf,
    InstanceRollbackRangeTime: InstanceRollbackRangeTime,
    SqlFileInfo: SqlFileInfo,
    DescribeTablesResponse: DescribeTablesResponse,
    SellConfig: SellConfig,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    MasterInfo: MasterInfo,
    DescribeBinlogsResponse: DescribeBinlogsResponse,
    DBSwitchInfo: DBSwitchInfo,
    DescribeDBPriceResponse: DescribeDBPriceResponse,
    DescribeTasksResponse: DescribeTasksResponse,
    DescribeRollbackRangeTimeRequest: DescribeRollbackRangeTimeRequest,
    DescribeBackupsRequest: DescribeBackupsRequest,
    ModifyDBInstanceProjectResponse: ModifyDBInstanceProjectResponse,
    IsolateDBInstanceResponse: IsolateDBInstanceResponse,
    DescribeDBInstanceGTIDResponse: DescribeDBInstanceGTIDResponse,
    OpenDBInstanceGTIDResponse: OpenDBInstanceGTIDResponse,
    DescribeDBZoneConfigRequest: DescribeDBZoneConfigRequest,
    DescribeDBInstanceRebootTimeResponse: DescribeDBInstanceRebootTimeResponse,
    DrInfo: DrInfo,
    RoGroup: RoGroup,
    ParameterDetail: ParameterDetail,
    ModifyAccountDescriptionResponse: ModifyAccountDescriptionResponse,
    SwitchForUpgradeRequest: SwitchForUpgradeRequest,
    ModifyInstanceParamRequest: ModifyInstanceParamRequest,
    CreateDBInstanceHourResponse: CreateDBInstanceHourResponse,
    BinlogInfo: BinlogInfo,
    DescribeTasksRequest: DescribeTasksRequest,
    OpenDBInstanceGTIDRequest: OpenDBInstanceGTIDRequest,
    ImportRecord: ImportRecord,
    CreateAccountsRequest: CreateAccountsRequest,
    CreateDBInstanceHourRequest: CreateDBInstanceHourRequest,
    DescribeSlowLogsResponse: DescribeSlowLogsResponse,
    RollbackInstancesInfo: RollbackInstancesInfo,
    BackupInfo: BackupInfo,
    CloseWanServiceResponse: CloseWanServiceResponse,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    ModifyDBInstanceVipVportResponse: ModifyDBInstanceVipVportResponse,
    DescribeDBSwitchRecordsResponse: DescribeDBSwitchRecordsResponse,
    TableName: TableName,
    RenewDBInstanceRequest: RenewDBInstanceRequest,
    SlowLogInfo: SlowLogInfo,
    DeleteBackupResponse: DeleteBackupResponse,
    TablePrivilege: TablePrivilege,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    UploadInfo: UploadInfo,
    ModifyAccountPasswordResponse: ModifyAccountPasswordResponse,
    DescribeDBSwitchRecordsRequest: DescribeDBSwitchRecordsRequest,
    DescribeAsyncRequestInfoResponse: DescribeAsyncRequestInfoResponse,
    CreateDBInstanceResponse: CreateDBInstanceResponse,
    RollbackTableName: RollbackTableName,
    CloseWanServiceRequest: CloseWanServiceRequest,
    DeleteAccountsResponse: DeleteAccountsResponse,
    DescribeDBInstanceCharsetResponse: DescribeDBInstanceCharsetResponse,
    RestartDBInstancesResponse: RestartDBInstancesResponse,
    DescribeBackupDatabasesResponse: DescribeBackupDatabasesResponse,
    ModifyAutoRenewFlagResponse: ModifyAutoRenewFlagResponse,
    DescribeBackupsResponse: DescribeBackupsResponse,
    DescribeDBImportRecordsResponse: DescribeDBImportRecordsResponse,
    OpenWanServiceRequest: OpenWanServiceRequest,
    DatabaseName: DatabaseName,
    DescribeInstanceParamsRequest: DescribeInstanceParamsRequest,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    DescribeBackupTablesResponse: DescribeBackupTablesResponse,
    Outbound: Outbound,
    SlaveInstanceInfo: SlaveInstanceInfo,
    ParamInfo: ParamInfo,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    StartBatchRollbackRequest: StartBatchRollbackRequest,
    SecurityGroup: SecurityGroup,
    ZoneConf: ZoneConf,
    SlaveInfo: SlaveInfo,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    UpgradeDBInstanceEngineVersionResponse: UpgradeDBInstanceEngineVersionResponse,
    DescribeAsyncRequestInfoRequest: DescribeAsyncRequestInfoRequest,
    ModifyInstanceParamResponse: ModifyInstanceParamResponse,
    UpgradeDBInstanceRequest: UpgradeDBInstanceRequest,
    ColumnPrivilege: ColumnPrivilege,
    DescribeUploadedFilesRequest: DescribeUploadedFilesRequest,
    DescribeUploadedFilesResponse: DescribeUploadedFilesResponse,
    InitDBInstancesRequest: InitDBInstancesRequest,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    InstanceInfo: InstanceInfo,
    CreateBackupResponse: CreateBackupResponse,
    DescribeDBPriceRequest: DescribeDBPriceRequest,
    SlaveConfig: SlaveConfig,
    ModifyAccountPrivilegesResponse: ModifyAccountPrivilegesResponse,
    BackupConfig: BackupConfig,
    VerifyRootAccountResponse: VerifyRootAccountResponse,
    DescribeDBInstanceConfigRequest: DescribeDBInstanceConfigRequest,
    DescribeBackupTablesRequest: DescribeBackupTablesRequest,
    DatabasePrivilege: DatabasePrivilege,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    ModifyAccountDescriptionRequest: ModifyAccountDescriptionRequest,
    ModifyAccountPasswordRequest: ModifyAccountPasswordRequest,
    DescribeTablesRequest: DescribeTablesRequest,
    InstanceRebootTime: InstanceRebootTime,
    RenewDBInstanceResponse: RenewDBInstanceResponse,
    DescribeDatabasesResponse: DescribeDatabasesResponse,
    ZoneSellConf: ZoneSellConf,
    DescribeDBInstanceConfigResponse: DescribeDBInstanceConfigResponse,
    RoInstanceInfo: RoInstanceInfo,
    IsolateDBInstanceRequest: IsolateDBInstanceRequest,
    ModifyAccountPrivilegesRequest: ModifyAccountPrivilegesRequest,
    Account: Account,
    CreateBackupRequest: CreateBackupRequest,
    AccountInfo: AccountInfo,
    DescribeDBInstanceCharsetRequest: DescribeDBInstanceCharsetRequest,
    RollbackTables: RollbackTables,
    DescribeBackupDatabasesRequest: DescribeBackupDatabasesRequest,
    ModifyAutoRenewFlagRequest: ModifyAutoRenewFlagRequest,
    UpgradeDBInstanceEngineVersionRequest: UpgradeDBInstanceEngineVersionRequest,
    UpgradeDBInstanceResponse: UpgradeDBInstanceResponse,
    ModifyDBInstanceVipVportRequest: ModifyDBInstanceVipVportRequest,
    ModifyBackupConfigResponse: ModifyBackupConfigResponse,
    DescribeDBImportRecordsRequest: DescribeDBImportRecordsRequest,
    CreateDBImportJobResponse: CreateDBImportJobResponse,
    TagInfo: TagInfo,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    InitDBInstancesResponse: InitDBInstancesResponse,
    RestartDBInstancesRequest: RestartDBInstancesRequest,
    DescribeInstanceParamsResponse: DescribeInstanceParamsResponse,
    DescribeDBZoneConfigResponse: DescribeDBZoneConfigResponse,
    ModifyDBInstanceProjectRequest: ModifyDBInstanceProjectRequest,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    DeleteAccountsRequest: DeleteAccountsRequest,
    SwitchForUpgradeResponse: SwitchForUpgradeResponse,
    DescribeAccountPrivilegesRequest: DescribeAccountPrivilegesRequest,
    DescribeAccountsResponse: DescribeAccountsResponse,
    RollbackTimeRange: RollbackTimeRange,
    DeleteBackupRequest: DeleteBackupRequest,
    DescribeBackupConfigResponse: DescribeBackupConfigResponse,
    StartBatchRollbackResponse: StartBatchRollbackResponse,
    DescribeRollbackRangeTimeResponse: DescribeRollbackRangeTimeResponse,
    VerifyRootAccountRequest: VerifyRootAccountRequest,
    OpenWanServiceResponse: OpenWanServiceResponse,
    ModifyBackupConfigRequest: ModifyBackupConfigRequest,
    DescribeBinlogsRequest: DescribeBinlogsRequest,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    DescribeDBInstanceGTIDRequest: DescribeDBInstanceGTIDRequest,
    RollbackDBName: RollbackDBName,

}
