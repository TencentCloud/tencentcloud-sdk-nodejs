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
 * 城市信息
 * @class
 */
class City extends  AbstractModel {
    constructor(){
        super();

        /**
         * 城市ID
         * @type {string || null}
         */
        this.CityId = null;

        /**
         * 城市名称
         * @type {string || null}
         */
        this.CityName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CityId = 'CityId' in params ? params.CityId : null;
        this.CityName = 'CityName' in params ? params.CityName : null;

    }
}

/**
 * 实例的内网ip相关信息。
 * @class
 */
class PrivateIPAddressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的内网ip。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivateIPAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrivateIPAddress = 'PrivateIPAddress' in params ? params.PrivateIPAddress : null;

    }
}

/**
 * ResetInstances请求参数结构体
 * @class
 */
class ResetInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待重装的实例ID列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 重装使用的镜像ID，若未指定，则使用各个实例当前的镜像进行重装。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 密码设置，若未指定，则后续将以站内信的形式通知密码。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 是否开启云监控和云镜服务，未指定时默认开启。
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }

    }
}

/**
 * ModifyModuleName返回参数结构体
 * @class
 */
class ModifyModuleNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 区域信息
 * @class
 */
class Area extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域ID
         * @type {string || null}
         */
        this.AreaId = null;

        /**
         * 区域名称
         * @type {string || null}
         */
        this.AreaName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AreaId = 'AreaId' in params ? params.AreaId : null;
        this.AreaName = 'AreaName' in params ? params.AreaName : null;

    }
}

/**
 * DescribeNode请求参数结构体
 * @class
 */
class DescribeNodeRequest extends  AbstractModel {
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
 * DescribeConfig请求参数结构体
 * @class
 */
class DescribeConfigRequest extends  AbstractModel {
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
 * Module的简要信息
 * @class
 */
class SimpleModule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块ID
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 模块名称
         * @type {string || null}
         */
        this.ModuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;

    }
}

/**
 * 运营商信息
 * @class
 */
class ISP extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运营商ID
         * @type {string || null}
         */
        this.ISPId = null;

        /**
         * 运营商名称
         * @type {string || null}
         */
        this.ISPName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ISPId = 'ISPId' in params ? params.ISPId : null;
        this.ISPName = 'ISPName' in params ? params.ISPName : null;

    }
}

/**
 * 运行商统计信息
 * @class
 */
class ISPCounter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运营商名称
         * @type {string || null}
         */
        this.ProviderName = null;

        /**
         * 节点数量
         * @type {number || null}
         */
        this.ProviderNodeNum = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.ProvederInstanceNum = null;

        /**
         * Zone实例信息结构体数组
         * @type {Array.<ZoneInstanceInfo> || null}
         */
        this.ZoneInstanceInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProviderName = 'ProviderName' in params ? params.ProviderName : null;
        this.ProviderNodeNum = 'ProviderNodeNum' in params ? params.ProviderNodeNum : null;
        this.ProvederInstanceNum = 'ProvederInstanceNum' in params ? params.ProvederInstanceNum : null;

        if (params.ZoneInstanceInfoSet) {
            this.ZoneInstanceInfoSet = new Array();
            for (let z in params.ZoneInstanceInfoSet) {
                let obj = new ZoneInstanceInfo();
                obj.deserialize(params.ZoneInstanceInfoSet[z]);
                this.ZoneInstanceInfoSet.push(obj);
            }
        }

    }
}

/**
 * 云镜服务；
 * @class
 */
class RunSecurityServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启。
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 云镜版本：0 基础版，1 专业版
         * @type {number || null}
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
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * DescribeModule返回参数结构体
 * @class
 */
class DescribeModuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的模块数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 模块详情信息的列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ModuleItem> || null}
         */
        this.ModuleItemSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ModuleItemSet) {
            this.ModuleItemSet = new Array();
            for (let z in params.ModuleItemSet) {
                let obj = new ModuleItem();
                obj.deserialize(params.ModuleItemSet[z]);
                this.ModuleItemSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePeakNetworkOverview请求参数结构体
 * @class
 */
class DescribePeakNetworkOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间（xxxx-xx-xx）如2019-08-14，默认为一周之前的日期。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间（xxxx-xx-xx）如2019-08-14，默认为昨天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 过滤条件。
region    String      是否必填：否     （过滤条件）按照region过滤,不支持模糊匹配。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
 * 增强服务
 * @class
 */
class EnhancedService extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启云镜服务。
         * @type {RunSecurityServiceEnabled || null}
         */
        this.SecurityService = null;

        /**
         * 是否开启云监控服务。
         * @type {RunMonitorServiceEnabled || null}
         */
        this.MonitorService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityService) {
            let obj = new RunSecurityServiceEnabled();
            obj.deserialize(params.SecurityService)
            this.SecurityService = obj;
        }

        if (params.MonitorService) {
            let obj = new RunMonitorServiceEnabled();
            obj.deserialize(params.MonitorService)
            this.MonitorService = obj;
        }

    }
}

/**
 * DescribeInstancesDeniedActions请求参数结构体
 * @class
 */
class DescribeInstancesDeniedActionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * 实例的网络相关信息。
 * @class
 */
class Internet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的内网相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrivateIPAddressInfo> || null}
         */
        this.PrivateIPAddressSet = null;

        /**
         * 实例的公网相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PublicIPAddressInfo> || null}
         */
        this.PublicIPAddressSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PrivateIPAddressSet) {
            this.PrivateIPAddressSet = new Array();
            for (let z in params.PrivateIPAddressSet) {
                let obj = new PrivateIPAddressInfo();
                obj.deserialize(params.PrivateIPAddressSet[z]);
                this.PrivateIPAddressSet.push(obj);
            }
        }

        if (params.PublicIPAddressSet) {
            this.PublicIPAddressSet = new Array();
            for (let z in params.PublicIPAddressSet) {
                let obj = new PublicIPAddressInfo();
                obj.deserialize(params.PublicIPAddressSet[z]);
                this.PublicIPAddressSet.push(obj);
            }
        }

    }
}

/**
 * DeleteModule返回参数结构体
 * @class
 */
class DeleteModuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceTypeConfig请求参数结构体
 * @class
 */
class DescribeInstanceTypeConfigRequest extends  AbstractModel {
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
 * RebootInstances返回参数结构体
 * @class
 */
class RebootInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstancesAttribute返回参数结构体
 * @class
 */
class ModifyInstancesAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeModuleDetail请求参数结构体
 * @class
 */
class DescribeModuleDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块ID，如em-qn46snq8。
         * @type {string || null}
         */
        this.ModuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

    }
}

/**
 * DescribeInstancesDeniedActions返回参数结构体
 * @class
 */
class DescribeInstancesDeniedActionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例对应的禁止操作
         * @type {Array.<InstanceOperator> || null}
         */
        this.InstanceOperatorSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceOperatorSet) {
            this.InstanceOperatorSet = new Array();
            for (let z in params.InstanceOperatorSet) {
                let obj = new InstanceOperator();
                obj.deserialize(params.InstanceOperatorSet[z]);
                this.InstanceOperatorSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PeakFamilyInfo 按机型类别分类的cpu等数据的峰值信息
 * @class
 */
class PeakFamilyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机型类别信息。
         * @type {InstanceFamilyTypeConfig || null}
         */
        this.InstanceFamily = null;

        /**
         * 基础数据峰值信息。
         * @type {Array.<PeakBase> || null}
         */
        this.PeakBaseSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceFamily) {
            let obj = new InstanceFamilyTypeConfig();
            obj.deserialize(params.InstanceFamily)
            this.InstanceFamily = obj;
        }

        if (params.PeakBaseSet) {
            this.PeakBaseSet = new Array();
            for (let z in params.PeakBaseSet) {
                let obj = new PeakBase();
                obj.deserialize(params.PeakBaseSet[z]);
                this.PeakBaseSet.push(obj);
            }
        }

    }
}

/**
 * DescribePeakNetworkOverview返回参数结构体
 * @class
 */
class DescribePeakNetworkOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络峰值数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PeakNetworkRegionInfo> || null}
         */
        this.PeakNetworkRegionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PeakNetworkRegionSet) {
            this.PeakNetworkRegionSet = new Array();
            for (let z in params.PeakNetworkRegionSet) {
                let obj = new PeakNetworkRegionInfo();
                obj.deserialize(params.PeakNetworkRegionSet[z]);
                this.PeakNetworkRegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 操作Action
 * @class
 */
class OperatorAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可执行操作
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 编码Code
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 具体信息
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Action = 'Action' in params ? params.Action : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DescribePeakBaseOverview返回参数结构体
 * @class
 */
class DescribePeakBaseOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基础峰值列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PeakFamilyInfo> || null}
         */
        this.PeakFamilyInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PeakFamilyInfoSet) {
            this.PeakFamilyInfoSet = new Array();
            for (let z in params.PeakFamilyInfoSet) {
                let obj = new PeakFamilyInfo();
                obj.deserialize(params.PeakFamilyInfoSet[z]);
                this.PeakFamilyInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateInstances请求参数结构体
 * @class
 */
class TerminateInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待销毁的实例ID列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 是否定时销毁，默认为否。
         * @type {boolean || null}
         */
        this.TerminateDelay = null;

        /**
         * 定时销毁的时间，格式形如："2019-08-05 12:01:30"，若非定时销毁，则此参数被忽略。
         * @type {string || null}
         */
        this.TerminateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.TerminateDelay = 'TerminateDelay' in params ? params.TerminateDelay : null;
        this.TerminateTime = 'TerminateTime' in params ? params.TerminateTime : null;

    }
}

/**
 * Region和RegionName
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * RegionID
         * @type {number || null}
         */
        this.RegionId = null;

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

    }
}

/**
 * DescribeImage返回参数结构体
 * @class
 */
class DescribeImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 镜像数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Image> || null}
         */
        this.ImageSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ImageSet) {
            this.ImageSet = new Array();
            for (let z in params.ImageSet) {
                let obj = new Image();
                obj.deserialize(params.ImageSet[z]);
                this.ImageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 节点统计数据
 * @class
 */
class ModuleCounter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运营商统计信息列表
         * @type {Array.<ISPCounter> || null}
         */
        this.ISPCounterSet = null;

        /**
         * 省份数量
         * @type {number || null}
         */
        this.ProvinceNum = null;

        /**
         * 城市数量
         * @type {number || null}
         */
        this.CityNum = null;

        /**
         * 节点数量
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.InstanceNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ISPCounterSet) {
            this.ISPCounterSet = new Array();
            for (let z in params.ISPCounterSet) {
                let obj = new ISPCounter();
                obj.deserialize(params.ISPCounterSet[z]);
                this.ISPCounterSet.push(obj);
            }
        }
        this.ProvinceNum = 'ProvinceNum' in params ? params.ProvinceNum : null;
        this.CityNum = 'CityNum' in params ? params.CityNum : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;

    }
}

/**
 * DescribePeakBaseOverview请求参数结构体
 * @class
 */
class DescribePeakBaseOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间（xxxx-xx-xx）如2019-08-14，默认为一周之前的日期。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间（xxxx-xx-xx）如2019-08-14，默认为昨天。
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
 * region维度的网络峰值信息
 * @class
 */
class PeakNetworkRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * region信息
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 网络峰值集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PeakNetwork> || null}
         */
        this.PeakNetworkSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;

        if (params.PeakNetworkSet) {
            this.PeakNetworkSet = new Array();
            for (let z in params.PeakNetworkSet) {
                let obj = new PeakNetwork();
                obj.deserialize(params.PeakNetworkSet[z]);
                this.PeakNetworkSet.push(obj);
            }
        }

    }
}

/**
 * DescribeBaseOverview请求参数结构体
 * @class
 */
class DescribeBaseOverviewRequest extends  AbstractModel {
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
 * DeleteImage返回参数结构体
 * @class
 */
class DeleteImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 磁盘信息
 * @class
 */
class DiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 磁盘类型：LOCAL_BASIC
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 磁盘ID
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * 磁盘大小（GB）
         * @type {number || null}
         */
        this.DiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * 机型配置
 * @class
 */
class InstanceTypeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机型族配置信息
         * @type {InstanceFamilyConfig || null}
         */
        this.InstanceFamilyConfig = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * CPU核数
         * @type {number || null}
         */
        this.Vcpu = null;

        /**
         * 内存大小
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 主频
         * @type {string || null}
         */
        this.Frequency = null;

        /**
         * 处理器型号
         * @type {string || null}
         */
        this.CpuModelName = null;

        /**
         * 机型族类别配置信息
         * @type {InstanceFamilyTypeConfig || null}
         */
        this.InstanceFamilyTypeConfig = null;

        /**
         * 机型额外信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceFamilyConfig) {
            let obj = new InstanceFamilyConfig();
            obj.deserialize(params.InstanceFamilyConfig)
            this.InstanceFamilyConfig = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Vcpu = 'Vcpu' in params ? params.Vcpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.CpuModelName = 'CpuModelName' in params ? params.CpuModelName : null;

        if (params.InstanceFamilyTypeConfig) {
            let obj = new InstanceFamilyTypeConfig();
            obj.deserialize(params.InstanceFamilyTypeConfig)
            this.InstanceFamilyTypeConfig = obj;
        }
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;

    }
}

/**
 * ResetInstancesMaxBandwidth返回参数结构体
 * @class
 */
class ResetInstancesMaxBandwidthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 节点实例数量信息
 * @class
 */
class NodeInstanceNum extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点数量
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.InstanceNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;

    }
}

/**
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的实例相关信息列表的长度。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的实例相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Instance> || null}
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
                let obj = new Instance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例的公网ip相关信息。
 * @class
 */
class PublicIPAddressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费模式。
         * @type {string || null}
         */
        this.ChargeMode = null;

        /**
         * 实例的公网ip。
         * @type {string || null}
         */
        this.PublicIPAddress = null;

        /**
         * 实例的公网ip所属的运营商。
         * @type {ISP || null}
         */
        this.ISP = null;

        /**
         * 实例的最大出带宽上限。
         * @type {number || null}
         */
        this.MaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChargeMode = 'ChargeMode' in params ? params.ChargeMode : null;
        this.PublicIPAddress = 'PublicIPAddress' in params ? params.PublicIPAddress : null;

        if (params.ISP) {
            let obj = new ISP();
            obj.deserialize(params.ISP)
            this.ISP = obj;
        }
        this.MaxBandwidthOut = 'MaxBandwidthOut' in params ? params.MaxBandwidthOut : null;

    }
}

/**
 * 节点信息
 * @class
 */
class Node extends  AbstractModel {
    constructor(){
        super();

        /**
         * zone信息
         * @type {ZoneInfo || null}
         */
        this.ZoneInfo = null;

        /**
         * 国家信息
         * @type {Country || null}
         */
        this.Country = null;

        /**
         * 区域信息
         * @type {Area || null}
         */
        this.Area = null;

        /**
         * 省份信息
         * @type {Province || null}
         */
        this.Province = null;

        /**
         * 城市信息
         * @type {City || null}
         */
        this.City = null;

        /**
         * Region信息
         * @type {RegionInfo || null}
         */
        this.RegionInfo = null;

        /**
         * 运营商列表
         * @type {Array.<ISP> || null}
         */
        this.ISPSet = null;

        /**
         * 运营商数量
         * @type {number || null}
         */
        this.ISPNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneInfo) {
            let obj = new ZoneInfo();
            obj.deserialize(params.ZoneInfo)
            this.ZoneInfo = obj;
        }

        if (params.Country) {
            let obj = new Country();
            obj.deserialize(params.Country)
            this.Country = obj;
        }

        if (params.Area) {
            let obj = new Area();
            obj.deserialize(params.Area)
            this.Area = obj;
        }

        if (params.Province) {
            let obj = new Province();
            obj.deserialize(params.Province)
            this.Province = obj;
        }

        if (params.City) {
            let obj = new City();
            obj.deserialize(params.City)
            this.City = obj;
        }

        if (params.RegionInfo) {
            let obj = new RegionInfo();
            obj.deserialize(params.RegionInfo)
            this.RegionInfo = obj;
        }

        if (params.ISPSet) {
            this.ISPSet = new Array();
            for (let z in params.ISPSet) {
                let obj = new ISP();
                obj.deserialize(params.ISPSet[z]);
                this.ISPSet.push(obj);
            }
        }
        this.ISPNum = 'ISPNum' in params ? params.ISPNum : null;

    }
}

/**
 * 网络硬盘上下限数据
 * @class
 */
class NetworkStorageRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络带宽上限
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * 数据盘上限
         * @type {number || null}
         */
        this.MaxSystemDiskSize = null;

        /**
         * 网络带宽下限
         * @type {number || null}
         */
        this.MinBandwidth = null;

        /**
         * 数据盘下限
         * @type {number || null}
         */
        this.MinSystemDiskSize = null;

        /**
         * 最大数据盘大小
         * @type {number || null}
         */
        this.MaxDataDiskSize = null;

        /**
         * 最小数据盘大小
         * @type {number || null}
         */
        this.MinDataDiskSize = null;

        /**
         * 建议带宽
         * @type {number || null}
         */
        this.SuggestBandwidth = null;

        /**
         * 建议硬盘大小
         * @type {number || null}
         */
        this.SuggestDataDiskSize = null;

        /**
         * 建议系统盘大小
         * @type {number || null}
         */
        this.SuggestSystemDiskSize = null;

        /**
         * Cpu核数峰值
         * @type {number || null}
         */
        this.MaxVcpu = null;

        /**
         * Cpu核最小值
         * @type {number || null}
         */
        this.MinVcpu = null;

        /**
         * 单次请求最大cpu核数
         * @type {number || null}
         */
        this.MaxVcpuPerReq = null;

        /**
         * 带宽步长
         * @type {number || null}
         */
        this.PerBandwidth = null;

        /**
         * 数据盘步长
         * @type {number || null}
         */
        this.PerDataDisk = null;

        /**
         * 总模块数量
         * @type {number || null}
         */
        this.MaxModuleNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;
        this.MaxSystemDiskSize = 'MaxSystemDiskSize' in params ? params.MaxSystemDiskSize : null;
        this.MinBandwidth = 'MinBandwidth' in params ? params.MinBandwidth : null;
        this.MinSystemDiskSize = 'MinSystemDiskSize' in params ? params.MinSystemDiskSize : null;
        this.MaxDataDiskSize = 'MaxDataDiskSize' in params ? params.MaxDataDiskSize : null;
        this.MinDataDiskSize = 'MinDataDiskSize' in params ? params.MinDataDiskSize : null;
        this.SuggestBandwidth = 'SuggestBandwidth' in params ? params.SuggestBandwidth : null;
        this.SuggestDataDiskSize = 'SuggestDataDiskSize' in params ? params.SuggestDataDiskSize : null;
        this.SuggestSystemDiskSize = 'SuggestSystemDiskSize' in params ? params.SuggestSystemDiskSize : null;
        this.MaxVcpu = 'MaxVcpu' in params ? params.MaxVcpu : null;
        this.MinVcpu = 'MinVcpu' in params ? params.MinVcpu : null;
        this.MaxVcpuPerReq = 'MaxVcpuPerReq' in params ? params.MaxVcpuPerReq : null;
        this.PerBandwidth = 'PerBandwidth' in params ? params.PerBandwidth : null;
        this.PerDataDisk = 'PerDataDisk' in params ? params.PerDataDisk : null;
        this.MaxModuleNum = 'MaxModuleNum' in params ? params.MaxModuleNum : null;

    }
}

/**
 * CreateModule请求参数结构体
 * @class
 */
class CreateModuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名称，如视频直播模块。限制：模块名称不得以空格开头，长度不得超过60个字符。
         * @type {string || null}
         */
        this.ModuleName = null;

        /**
         * 默认带宽，单位：M。范围不得超过带宽上下限，详看DescribeConfig。
         * @type {number || null}
         */
        this.DefaultBandWidth = null;

        /**
         * 默认镜像，如img-qsdf3ff2。
         * @type {string || null}
         */
        this.DefaultImageId = null;

        /**
         * 机型ID。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 默认系统盘大小，单位：G，默认大小为50G。范围不得超过系统盘上下限制，详看DescribeConfig。
         * @type {number || null}
         */
        this.DefaultSystemDiskSize = null;

        /**
         * 默认数据盘大小，单位：G。范围不得超过数据盘范围大小，详看DescribeConfig。
         * @type {number || null}
         */
        this.DefaultDataDiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;
        this.DefaultBandWidth = 'DefaultBandWidth' in params ? params.DefaultBandWidth : null;
        this.DefaultImageId = 'DefaultImageId' in params ? params.DefaultImageId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DefaultSystemDiskSize = 'DefaultSystemDiskSize' in params ? params.DefaultSystemDiskSize : null;
        this.DefaultDataDiskSize = 'DefaultDataDiskSize' in params ? params.DefaultDataDiskSize : null;

    }
}

/**
 * ModifyModuleName请求参数结构体
 * @class
 */
class ModifyModuleNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块ID。
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 模块名称。
         * @type {string || null}
         */
        this.ModuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;

    }
}

/**
 * 机型族配置
 * @class
 */
class InstanceFamilyConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机型名称
         * @type {string || null}
         */
        this.InstanceFamilyName = null;

        /**
         * 机型ID
         * @type {string || null}
         */
        this.InstanceFamily = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceFamilyName = 'InstanceFamilyName' in params ? params.InstanceFamilyName : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;

    }
}

/**
 * DescribeInstanceTypeConfig返回参数结构体
 * @class
 */
class DescribeInstanceTypeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 机型配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InstanceTypeConfig> || null}
         */
        this.InstanceTypeConfigSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.InstanceTypeConfigSet) {
            this.InstanceTypeConfigSet = new Array();
            for (let z in params.InstanceTypeConfigSet) {
                let obj = new InstanceTypeConfig();
                obj.deserialize(params.InstanceTypeConfigSet[z]);
                this.InstanceTypeConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
zone      String      是否必填：否     （过滤条件）按照可用区中文名过滤,支持模糊匹配。
module-id      String      是否必填：否     （过滤条件）按照模块ID过滤。
instance-id      String      是否必填：否      （过滤条件）按照实例ID过滤。
instance-name      String      是否必填：否      （过滤条件）按照实例名称过滤,支持模糊匹配。
ip-address      String      是否必填：否      （过滤条件）按照实例的内网/公网IP过滤。
instance-uuid   string 是否必填：否 （过滤条件）按照uuid过滤实例列表。
instance-state  string  是否必填：否 （过滤条件）按照实例状态更新实例列表。
internet-service-provider      String      是否必填：否      （过滤条件）按照实例公网IP所属的运营商进行过滤。
tag-key      String      是否必填：否      （过滤条件）按照标签键进行过滤。
tag:tag-key      String      是否必填：否      （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。
若不传Filters参数则表示查询所有相关的实例信息。
单次请求的Filter.Values的上限为5。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20(如果查询结果数目大于等于20)，最大值为100。
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
 * 国家信息
 * @class
 */
class Country extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国家ID
         * @type {string || null}
         */
        this.CountryId = null;

        /**
         * 国家名称
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
        this.CountryId = 'CountryId' in params ? params.CountryId : null;
        this.CountryName = 'CountryName' in params ? params.CountryName : null;

    }
}

/**
 * DescribeNode返回参数结构体
 * @class
 */
class DescribeNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点详细信息的列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Node> || null}
         */
        this.NodeSet = null;

        /**
         * 所有的节点数量。
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

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new Node();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyModuleImage返回参数结构体
 * @class
 */
class ModifyModuleImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 过滤器Filter;由Name和ValueSet组成，是string的key和字符串数组的value
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤字段内容数组
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
 * 标签信息。
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签的键。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签的值。
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
 * Zone信息
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ZoneId
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * ZoneName
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Zone
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * TerminateInstances返回参数结构体
 * @class
 */
class TerminateInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeModule请求参数结构体
 * @class
 */
class DescribeModuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
module-name - string - 是否必填：否 - （过滤条件）按照模块名称过滤。
module-id - string - 是否必填：否 - （过滤条件）按照模块ID过滤。
每次请求的Filters的上限为10，Filter.Values的上限为5。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
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
 * ModifyModuleImage请求参数结构体
 * @class
 */
class ModifyModuleImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认镜像ID
         * @type {string || null}
         */
        this.DefaultImageId = null;

        /**
         * 模块ID
         * @type {string || null}
         */
        this.ModuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DefaultImageId = 'DefaultImageId' in params ? params.DefaultImageId : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

    }
}

/**
 * 描述实例的位置相关信息。
 * @class
 */
class Position extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所在的Zone的信息。
         * @type {ZoneInfo || null}
         */
        this.ZoneInfo = null;

        /**
         * 实例所在的国家的信息。
         * @type {Country || null}
         */
        this.Country = null;

        /**
         * 实例所在的Area的信息。
         * @type {Area || null}
         */
        this.Area = null;

        /**
         * 实例所在的省份的信息。
         * @type {Province || null}
         */
        this.Province = null;

        /**
         * 实例所在的城市的信息。
         * @type {City || null}
         */
        this.City = null;

        /**
         * 实例所在的Region的信息。
         * @type {RegionInfo || null}
         */
        this.RegionInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneInfo) {
            let obj = new ZoneInfo();
            obj.deserialize(params.ZoneInfo)
            this.ZoneInfo = obj;
        }

        if (params.Country) {
            let obj = new Country();
            obj.deserialize(params.Country)
            this.Country = obj;
        }

        if (params.Area) {
            let obj = new Area();
            obj.deserialize(params.Area)
            this.Area = obj;
        }

        if (params.Province) {
            let obj = new Province();
            obj.deserialize(params.Province)
            this.Province = obj;
        }

        if (params.City) {
            let obj = new City();
            obj.deserialize(params.City)
            this.City = obj;
        }

        if (params.RegionInfo) {
            let obj = new RegionInfo();
            obj.deserialize(params.RegionInfo)
            this.RegionInfo = obj;
        }

    }
}

/**
 * DeleteModule请求参数结构体
 * @class
 */
class DeleteModuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块ID。如：es-qn46snq8
         * @type {string || null}
         */
        this.ModuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

    }
}

/**
 * CreateModule返回参数结构体
 * @class
 */
class CreateModuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块ID，创建模块成功后分配给该模块的ID。
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RebootInstances请求参数结构体
 * @class
 */
class RebootInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待重启的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 是否在正常重启失败后选择强制重启实例。取值范围：
TRUE：表示在正常重启失败后进行强制重启；
FALSE：表示在正常重启失败后不进行强制重启；
默认取值：FALSE。
         * @type {boolean || null}
         */
        this.ForceReboot = null;

        /**
         * 关机类型。取值范围：
SOFT：表示软关机
HARD：表示硬关机
SOFT_FIRST：表示优先软关机，失败再执行硬关机

默认取值：SOFT。
         * @type {string || null}
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
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.ForceReboot = 'ForceReboot' in params ? params.ForceReboot : null;
        this.StopType = 'StopType' in params ? params.StopType : null;

    }
}

/**
 * 省份信息
 * @class
 */
class Province extends  AbstractModel {
    constructor(){
        super();

        /**
         * 省份Id
         * @type {string || null}
         */
        this.ProvinceId = null;

        /**
         * 省份名称
         * @type {string || null}
         */
        this.ProvinceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProvinceId = 'ProvinceId' in params ? params.ProvinceId : null;
        this.ProvinceName = 'ProvinceName' in params ? params.ProvinceName : null;

    }
}

/**
 * ResetInstancesMaxBandwidth请求参数结构体
 * @class
 */
class ResetInstancesMaxBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待重置带宽上限的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 修改后的最大带宽上限。
         * @type {number || null}
         */
        this.MaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.MaxBandwidthOut = 'MaxBandwidthOut' in params ? params.MaxBandwidthOut : null;

    }
}

/**
 * 镜像来源信息
 * @class
 */
class SrcImage extends  AbstractModel {
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
         * 系统名称
         * @type {string || null}
         */
        this.ImageOsName = null;

        /**
         * 镜像描述
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * 区域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 区域ID
         * @type {number || null}
         */
        this.RegionID = null;

        /**
         * 区域名称
         * @type {string || null}
         */
        this.RegionName = null;

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
        this.ImageOsName = 'ImageOsName' in params ? params.ImageOsName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionID = 'RegionID' in params ? params.RegionID : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

    }
}

/**
 * 峰值信息
 * @class
 */
class PeakBase extends  AbstractModel {
    constructor(){
        super();

        /**
         * CPU峰值
         * @type {number || null}
         */
        this.PeakCpuNum = null;

        /**
         * 内存峰值
         * @type {number || null}
         */
        this.PeakMemoryNum = null;

        /**
         * 硬盘峰值
         * @type {number || null}
         */
        this.PeakStorageNum = null;

        /**
         * 记录时间
         * @type {string || null}
         */
        this.RecordTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PeakCpuNum = 'PeakCpuNum' in params ? params.PeakCpuNum : null;
        this.PeakMemoryNum = 'PeakMemoryNum' in params ? params.PeakMemoryNum : null;
        this.PeakStorageNum = 'PeakStorageNum' in params ? params.PeakStorageNum : null;
        this.RecordTime = 'RecordTime' in params ? params.RecordTime : null;

    }
}

/**
 * Zone的实例信息
 * @class
 */
class ZoneInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.InstanceNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;

    }
}

/**
 * ModifyModuleNetwork返回参数结构体
 * @class
 */
class ModifyModuleNetworkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 模块列表Item信息
 * @class
 */
class ModuleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点实例统计信息
         * @type {NodeInstanceNum || null}
         */
        this.NodeInstanceNum = null;

        /**
         * 模块信息
         * @type {Module || null}
         */
        this.Module = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NodeInstanceNum) {
            let obj = new NodeInstanceNum();
            obj.deserialize(params.NodeInstanceNum)
            this.NodeInstanceNum = obj;
        }

        if (params.Module) {
            let obj = new Module();
            obj.deserialize(params.Module)
            this.Module = obj;
        }

    }
}

/**
 * 用于描述实例相关的信息。
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称，如ens-34241f3s。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例状态。取值范围：
PENDING：表示创建中
LAUNCH_FAILED：表示创建失败
RUNNING：表示运行中
STOPPED：表示关机
STARTING：表示开机中
STOPPING：表示关机中
REBOOTING：表示重启中
SHUTDOWN：表示停止待销毁
TERMINATING：表示销毁中。
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * 实例当前使用的镜像的信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Image || null}
         */
        this.Image = null;

        /**
         * 实例当前所属的模块简要信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SimpleModule || null}
         */
        this.SimpleModule = null;

        /**
         * 实例所在的位置相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Position || null}
         */
        this.Position = null;

        /**
         * 实例的网络相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Internet || null}
         */
        this.Internet = null;

        /**
         * 实例的配置相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InstanceTypeConfig || null}
         */
        this.InstanceTypeConfig = null;

        /**
         * 实例的创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * 实例最后一次操作。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperation = null;

        /**
         * 实例最后一次操作结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperationState = null;

        /**
         * 实例业务状态。取值范围：
NORMAL：表示正常状态的实例
EXPIRED：表示过期的实例
PROTECTIVELY_ISOLATED：表示被安全隔离的实例。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RestrictState = null;

        /**
         * 系统盘大小，单位GB。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SystemDiskSize = null;

        /**
         * 数据盘大小，单位GB。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataDiskSize = null;

        /**
         * UUID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UUID = null;

        /**
         * 付费方式。
    0为后付费。
    1为预付费。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 过期时间。格式为yyyy-mm-dd HH:mm:ss。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 隔离时间。格式为yyyy-mm-dd HH:mm:ss。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * 是否自动续费。
      0为不自动续费。
      1为自动续费。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * 过期状态。
    NORMAL 表示机器运行正常。
    WILL_EXPIRE 表示即将过期。
    EXPIRED 表示已过期。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireState = null;

        /**
         * 系统盘信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiskInfo || null}
         */
        this.SystemDisk = null;

        /**
         * 数据盘信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DiskInfo> || null}
         */
        this.DataDisks = null;

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
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;

        if (params.Image) {
            let obj = new Image();
            obj.deserialize(params.Image)
            this.Image = obj;
        }

        if (params.SimpleModule) {
            let obj = new SimpleModule();
            obj.deserialize(params.SimpleModule)
            this.SimpleModule = obj;
        }

        if (params.Position) {
            let obj = new Position();
            obj.deserialize(params.Position)
            this.Position = obj;
        }

        if (params.Internet) {
            let obj = new Internet();
            obj.deserialize(params.Internet)
            this.Internet = obj;
        }

        if (params.InstanceTypeConfig) {
            let obj = new InstanceTypeConfig();
            obj.deserialize(params.InstanceTypeConfig)
            this.InstanceTypeConfig = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.LatestOperation = 'LatestOperation' in params ? params.LatestOperation : null;
        this.LatestOperationState = 'LatestOperationState' in params ? params.LatestOperationState : null;
        this.RestrictState = 'RestrictState' in params ? params.RestrictState : null;
        this.SystemDiskSize = 'SystemDiskSize' in params ? params.SystemDiskSize : null;
        this.DataDiskSize = 'DataDiskSize' in params ? params.DataDiskSize : null;
        this.UUID = 'UUID' in params ? params.UUID : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.ExpireState = 'ExpireState' in params ? params.ExpireState : null;

        if (params.SystemDisk) {
            let obj = new DiskInfo();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DiskInfo();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

    }
}

/**
 * DeleteImage请求参数结构体
 * @class
 */
class DeleteImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID列表。
         * @type {Array.<string> || null}
         */
        this.ImageIDSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageIDSet = 'ImageIDSet' in params ? params.ImageIDSet : null;

    }
}

/**
 * 镜像信息
 * @class
 */
class Image extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像状态
         * @type {string || null}
         */
        this.ImageState = null;

        /**
         * 镜像类型
         * @type {string || null}
         */
        this.ImageType = null;

        /**
         * 操作系统名称
         * @type {string || null}
         */
        this.ImageOsName = null;

        /**
         * 镜像描述
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * 镜像导入时间
         * @type {string || null}
         */
        this.ImageCreateTime = null;

        /**
         * 操作系统位数
         * @type {string || null}
         */
        this.Architecture = null;

        /**
         * 操作系统类型
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * 操作系统版本
         * @type {string || null}
         */
        this.OsVersion = null;

        /**
         * 操作系统平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 镜像所有者
         * @type {number || null}
         */
        this.ImageOwner = null;

        /**
         * 镜像大小。单位：GB
         * @type {number || null}
         */
        this.ImageSize = null;

        /**
         * 镜像来源信息
         * @type {SrcImage || null}
         */
        this.SrcImage = null;

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
        this.ImageState = 'ImageState' in params ? params.ImageState : null;
        this.ImageType = 'ImageType' in params ? params.ImageType : null;
        this.ImageOsName = 'ImageOsName' in params ? params.ImageOsName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.ImageCreateTime = 'ImageCreateTime' in params ? params.ImageCreateTime : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.OsVersion = 'OsVersion' in params ? params.OsVersion : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ImageOwner = 'ImageOwner' in params ? params.ImageOwner : null;
        this.ImageSize = 'ImageSize' in params ? params.ImageSize : null;

        if (params.SrcImage) {
            let obj = new SrcImage();
            obj.deserialize(params.SrcImage)
            this.SrcImage = obj;
        }

    }
}

/**
 * ModifyModuleNetwork请求参数结构体
 * @class
 */
class ModifyModuleNetworkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块Id
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 默认带宽上限
         * @type {number || null}
         */
        this.DefaultBandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.DefaultBandwidth = 'DefaultBandwidth' in params ? params.DefaultBandwidth : null;

    }
}

/**
 * 峰值网络数据
 * @class
 */
class PeakNetwork extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录时间。
         * @type {string || null}
         */
        this.RecordTime = null;

        /**
         * 入带宽数据。
         * @type {string || null}
         */
        this.PeakInNetwork = null;

        /**
         * 出带宽数据。
         * @type {string || null}
         */
        this.PeakOutNetwork = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordTime = 'RecordTime' in params ? params.RecordTime : null;
        this.PeakInNetwork = 'PeakInNetwork' in params ? params.PeakInNetwork : null;
        this.PeakOutNetwork = 'PeakOutNetwork' in params ? params.PeakOutNetwork : null;

    }
}

/**
 * DescribeConfig返回参数结构体
 * @class
 */
class DescribeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络带宽硬盘大小的范围信息。
         * @type {NetworkStorageRange || null}
         */
        this.NetworkStorageRange = null;

        /**
         * 镜像操作系统白名单
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ImageWhiteSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NetworkStorageRange) {
            let obj = new NetworkStorageRange();
            obj.deserialize(params.NetworkStorageRange)
            this.NetworkStorageRange = obj;
        }
        this.ImageWhiteSet = 'ImageWhiteSet' in params ? params.ImageWhiteSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaseOverview返回参数结构体
 * @class
 */
class DescribeBaseOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块数量，单位：个
         * @type {number || null}
         */
        this.ModuleNum = null;

        /**
         * 节点数量，单位：个
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * cpu核数，单位：个
         * @type {number || null}
         */
        this.VcpuNum = null;

        /**
         * 内存大小，单位：G
         * @type {number || null}
         */
        this.MemoryNum = null;

        /**
         * 硬盘大小，单位：G
         * @type {number || null}
         */
        this.StorageNum = null;

        /**
         * 昨日网络峰值,单位：M
         * @type {number || null}
         */
        this.NetworkNum = null;

        /**
         * 实例数量，单位：台
         * @type {number || null}
         */
        this.InstanceNum = null;

        /**
         * 运行中数量，单位：台
         * @type {number || null}
         */
        this.RunningNum = null;

        /**
         * 安全隔离数量，单位：台
         * @type {number || null}
         */
        this.IsolationNum = null;

        /**
         * 过期实例数量，单位：台
         * @type {number || null}
         */
        this.ExpiredNum = null;

        /**
         * 即将过期实例数量，单位：台
         * @type {number || null}
         */
        this.WillExpireNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleNum = 'ModuleNum' in params ? params.ModuleNum : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.VcpuNum = 'VcpuNum' in params ? params.VcpuNum : null;
        this.MemoryNum = 'MemoryNum' in params ? params.MemoryNum : null;
        this.StorageNum = 'StorageNum' in params ? params.StorageNum : null;
        this.NetworkNum = 'NetworkNum' in params ? params.NetworkNum : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;
        this.RunningNum = 'RunningNum' in params ? params.RunningNum : null;
        this.IsolationNum = 'IsolationNum' in params ? params.IsolationNum : null;
        this.ExpiredNum = 'ExpiredNum' in params ? params.ExpiredNum : null;
        this.WillExpireNum = 'WillExpireNum' in params ? params.WillExpireNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstancesAttribute请求参数结构体
 * @class
 */
class ModifyInstancesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的实例ID列表。在单次请求的过程中，请求实例数上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 修改成功后显示的实例名称，不得超过60个字符，不传则名称显示为空。
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
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * 实例系列类型配置
 * @class
 */
class InstanceFamilyTypeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例机型系列类型Id
         * @type {string || null}
         */
        this.InstanceFamilyType = null;

        /**
         * 实例机型系列类型名称
         * @type {string || null}
         */
        this.InstanceFamilyTypeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceFamilyType = 'InstanceFamilyType' in params ? params.InstanceFamilyType : null;
        this.InstanceFamilyTypeName = 'InstanceFamilyTypeName' in params ? params.InstanceFamilyTypeName : null;

    }
}

/**
 * ResetInstances返回参数结构体
 * @class
 */
class ResetInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImage请求参数结构体
 * @class
 */
class DescribeImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，每次请求的Filters的上限为10，详细的过滤条件如下：
image-id - String - 是否必填： 否 - （过滤条件）按照镜像ID进行过滤
image-type - String - 是否必填： 否 - （过滤条件）按照镜像类型进行过滤。取值范围：
PRIVATE_IMAGE: 私有镜像 (本帐户创建的镜像) 
PUBLIC_IMAGE: 公共镜像 (腾讯云官方镜像)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
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
 * 实例可执行操作
 * @class
 */
class InstanceOperator extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例禁止的操作
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OperatorAction> || null}
         */
        this.DeniedActions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DeniedActions) {
            this.DeniedActions = new Array();
            for (let z in params.DeniedActions) {
                let obj = new OperatorAction();
                obj.deserialize(params.DeniedActions[z]);
                this.DeniedActions.push(obj);
            }
        }

    }
}

/**
 * 模块信息
 * @class
 */
class Module extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块Id
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 模块名称
         * @type {string || null}
         */
        this.ModuleName = null;

        /**
         * 模块状态：
NORMAL：正常
DELETING：删除中 
DELETEFAILED：删除失败
         * @type {string || null}
         */
        this.ModuleState = null;

        /**
         * 默认系统盘大小
         * @type {number || null}
         */
        this.DefaultSystemDiskSize = null;

        /**
         * 默认数据盘大小
         * @type {number || null}
         */
        this.DefaultDataDiskSize = null;

        /**
         * 默认机型
         * @type {InstanceTypeConfig || null}
         */
        this.InstanceTypeConfig = null;

        /**
         * 默认镜像
         * @type {Image || null}
         */
        this.DefaultImage = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 默认带宽
         * @type {number || null}
         */
        this.DefaultBandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;
        this.ModuleState = 'ModuleState' in params ? params.ModuleState : null;
        this.DefaultSystemDiskSize = 'DefaultSystemDiskSize' in params ? params.DefaultSystemDiskSize : null;
        this.DefaultDataDiskSize = 'DefaultDataDiskSize' in params ? params.DefaultDataDiskSize : null;

        if (params.InstanceTypeConfig) {
            let obj = new InstanceTypeConfig();
            obj.deserialize(params.InstanceTypeConfig)
            this.InstanceTypeConfig = obj;
        }

        if (params.DefaultImage) {
            let obj = new Image();
            obj.deserialize(params.DefaultImage)
            this.DefaultImage = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DefaultBandwidth = 'DefaultBandwidth' in params ? params.DefaultBandwidth : null;

    }
}

/**
 * DescribeModuleDetail返回参数结构体
 * @class
 */
class DescribeModuleDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块的详细信息，详细见数据结构中的ModuleInfo。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Module || null}
         */
        this.Module = null;

        /**
         * 模块的统计信息，详细见数据结构中的ModuleCounterInfo。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ModuleCounter || null}
         */
        this.ModuleCounter = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
            let obj = new Module();
            obj.deserialize(params.Module)
            this.Module = obj;
        }

        if (params.ModuleCounter) {
            let obj = new ModuleCounter();
            obj.deserialize(params.ModuleCounter)
            this.ModuleCounter = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 云监控服务
 * @class
 */
class RunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启。
         * @type {boolean || null}
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
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

module.exports = {
    City: City,
    PrivateIPAddressInfo: PrivateIPAddressInfo,
    ResetInstancesRequest: ResetInstancesRequest,
    ModifyModuleNameResponse: ModifyModuleNameResponse,
    Area: Area,
    DescribeNodeRequest: DescribeNodeRequest,
    DescribeConfigRequest: DescribeConfigRequest,
    SimpleModule: SimpleModule,
    ISP: ISP,
    ISPCounter: ISPCounter,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    DescribeModuleResponse: DescribeModuleResponse,
    DescribePeakNetworkOverviewRequest: DescribePeakNetworkOverviewRequest,
    EnhancedService: EnhancedService,
    DescribeInstancesDeniedActionsRequest: DescribeInstancesDeniedActionsRequest,
    Internet: Internet,
    DeleteModuleResponse: DeleteModuleResponse,
    DescribeInstanceTypeConfigRequest: DescribeInstanceTypeConfigRequest,
    RebootInstancesResponse: RebootInstancesResponse,
    ModifyInstancesAttributeResponse: ModifyInstancesAttributeResponse,
    DescribeModuleDetailRequest: DescribeModuleDetailRequest,
    DescribeInstancesDeniedActionsResponse: DescribeInstancesDeniedActionsResponse,
    PeakFamilyInfo: PeakFamilyInfo,
    DescribePeakNetworkOverviewResponse: DescribePeakNetworkOverviewResponse,
    OperatorAction: OperatorAction,
    DescribePeakBaseOverviewResponse: DescribePeakBaseOverviewResponse,
    TerminateInstancesRequest: TerminateInstancesRequest,
    RegionInfo: RegionInfo,
    DescribeImageResponse: DescribeImageResponse,
    ModuleCounter: ModuleCounter,
    DescribePeakBaseOverviewRequest: DescribePeakBaseOverviewRequest,
    PeakNetworkRegionInfo: PeakNetworkRegionInfo,
    DescribeBaseOverviewRequest: DescribeBaseOverviewRequest,
    DeleteImageResponse: DeleteImageResponse,
    DiskInfo: DiskInfo,
    InstanceTypeConfig: InstanceTypeConfig,
    ResetInstancesMaxBandwidthResponse: ResetInstancesMaxBandwidthResponse,
    NodeInstanceNum: NodeInstanceNum,
    DescribeInstancesResponse: DescribeInstancesResponse,
    PublicIPAddressInfo: PublicIPAddressInfo,
    Node: Node,
    NetworkStorageRange: NetworkStorageRange,
    CreateModuleRequest: CreateModuleRequest,
    ModifyModuleNameRequest: ModifyModuleNameRequest,
    InstanceFamilyConfig: InstanceFamilyConfig,
    DescribeInstanceTypeConfigResponse: DescribeInstanceTypeConfigResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    Country: Country,
    DescribeNodeResponse: DescribeNodeResponse,
    ModifyModuleImageResponse: ModifyModuleImageResponse,
    Filter: Filter,
    Tag: Tag,
    ZoneInfo: ZoneInfo,
    TerminateInstancesResponse: TerminateInstancesResponse,
    DescribeModuleRequest: DescribeModuleRequest,
    ModifyModuleImageRequest: ModifyModuleImageRequest,
    Position: Position,
    DeleteModuleRequest: DeleteModuleRequest,
    CreateModuleResponse: CreateModuleResponse,
    RebootInstancesRequest: RebootInstancesRequest,
    Province: Province,
    ResetInstancesMaxBandwidthRequest: ResetInstancesMaxBandwidthRequest,
    SrcImage: SrcImage,
    PeakBase: PeakBase,
    ZoneInstanceInfo: ZoneInstanceInfo,
    ModifyModuleNetworkResponse: ModifyModuleNetworkResponse,
    ModuleItem: ModuleItem,
    Instance: Instance,
    DeleteImageRequest: DeleteImageRequest,
    Image: Image,
    ModifyModuleNetworkRequest: ModifyModuleNetworkRequest,
    PeakNetwork: PeakNetwork,
    DescribeConfigResponse: DescribeConfigResponse,
    DescribeBaseOverviewResponse: DescribeBaseOverviewResponse,
    ModifyInstancesAttributeRequest: ModifyInstancesAttributeRequest,
    InstanceFamilyTypeConfig: InstanceFamilyTypeConfig,
    ResetInstancesResponse: ResetInstancesResponse,
    DescribeImageRequest: DescribeImageRequest,
    InstanceOperator: InstanceOperator,
    Module: Module,
    DescribeModuleDetailResponse: DescribeModuleDetailResponse,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,

}
