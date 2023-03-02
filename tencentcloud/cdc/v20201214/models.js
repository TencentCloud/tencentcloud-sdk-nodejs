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
 * DescribeDedicatedClusterInstanceTypes返回参数结构体
 * @class
 */
class DescribeDedicatedClusterInstanceTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持的实例规格列表
         * @type {Array.<DedicatedClusterInstanceType> || null}
         */
        this.DedicatedClusterInstanceTypeSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DedicatedClusterInstanceTypeSet) {
            this.DedicatedClusterInstanceTypeSet = new Array();
            for (let z in params.DedicatedClusterInstanceTypeSet) {
                let obj = new DedicatedClusterInstanceType();
                obj.deserialize(params.DedicatedClusterInstanceTypeSet[z]);
                this.DedicatedClusterInstanceTypeSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDedicatedClusters请求参数结构体
 * @class
 */
class DescribeDedicatedClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个实例ID查询。实例ID形如：`cluster-xxxxxxxx`
         * @type {Array.<string> || null}
         */
        this.DedicatedClusterIds = null;

        /**
         * 按照可用区名称过滤
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 按照站点id过滤
         * @type {Array.<string> || null}
         */
        this.SiteIds = null;

        /**
         * 按照专用集群生命周期过滤
         * @type {Array.<string> || null}
         */
        this.LifecycleStatuses = null;

        /**
         * 模糊匹配专用集群名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
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
        this.DedicatedClusterIds = 'DedicatedClusterIds' in params ? params.DedicatedClusterIds : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.SiteIds = 'SiteIds' in params ? params.SiteIds : null;
        this.LifecycleStatuses = 'LifecycleStatuses' in params ? params.LifecycleStatuses : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDedicatedClusterTypes返回参数结构体
 * @class
 */
class DescribeDedicatedClusterTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用集群配置列表
         * @type {Array.<DedicatedClusterType> || null}
         */
        this.DedicatedClusterTypeSet = null;

        /**
         * 符合条件的个数
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

        if (params.DedicatedClusterTypeSet) {
            this.DedicatedClusterTypeSet = new Array();
            for (let z in params.DedicatedClusterTypeSet) {
                let obj = new DedicatedClusterType();
                obj.deserialize(params.DedicatedClusterTypeSet[z]);
                this.DedicatedClusterTypeSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 专用宿主机支持的实例规格列表
 * @class
 */
class DedicatedClusterInstanceType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 规格名称
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 网卡类型，例如：25代表25G网卡
         * @type {number || null}
         */
        this.NetworkCard = null;

        /**
         * 实例的CPU核数，单位：核。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 实例内存容量，单位：`GB`。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例机型系列。
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * 机型名称。
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * 本地存储块数量。
         * @type {number || null}
         */
        this.StorageBlockAmount = null;

        /**
         * 内网带宽，单位Gbps。
         * @type {number || null}
         */
        this.InstanceBandwidth = null;

        /**
         * 网络收发包能力，单位万PPS。
         * @type {number || null}
         */
        this.InstancePps = null;

        /**
         * 处理器型号。
         * @type {string || null}
         */
        this.CpuType = null;

        /**
         * 实例的GPU数量。
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * 实例的FPGA数量。
         * @type {number || null}
         */
        this.Fpga = null;

        /**
         * 机型描述
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 实例是否售卖。取值范围： <br><li>SELL：表示实例可购买<br><li>SOLD_OUT：表示实例已售罄。
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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.NetworkCard = 'NetworkCard' in params ? params.NetworkCard : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.StorageBlockAmount = 'StorageBlockAmount' in params ? params.StorageBlockAmount : null;
        this.InstanceBandwidth = 'InstanceBandwidth' in params ? params.InstanceBandwidth : null;
        this.InstancePps = 'InstancePps' in params ? params.InstancePps : null;
        this.CpuType = 'CpuType' in params ? params.CpuType : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.Fpga = 'Fpga' in params ? params.Fpga : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 专用集群配置
 * @class
 */
class DedicatedClusterType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置id
         * @type {string || null}
         */
        this.DedicatedClusterTypeId = null;

        /**
         * 配置描述，对应描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 配置名称，对应计算资源类型
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 创建配置的时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 支持的存储类型列表
         * @type {Array.<string> || null}
         */
        this.SupportedStorageType = null;

        /**
         * 支持的上连交换机的链路传输速率
         * @type {Array.<number> || null}
         */
        this.SupportedUplinkGiB = null;

        /**
         * 支持的实例族列表
         * @type {Array.<string> || null}
         */
        this.SupportedInstanceFamily = null;

        /**
         * 地板承重要求(KG)
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 功率要求(KW)
         * @type {number || null}
         */
        this.PowerDrawKva = null;

        /**
         * 显示计算资源规格详情，存储等资源不显示；对应规格
         * @type {string || null}
         */
        this.ComputeFormatDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterTypeId = 'DedicatedClusterTypeId' in params ? params.DedicatedClusterTypeId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SupportedStorageType = 'SupportedStorageType' in params ? params.SupportedStorageType : null;
        this.SupportedUplinkGiB = 'SupportedUplinkGiB' in params ? params.SupportedUplinkGiB : null;
        this.SupportedInstanceFamily = 'SupportedInstanceFamily' in params ? params.SupportedInstanceFamily : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.PowerDrawKva = 'PowerDrawKva' in params ? params.PowerDrawKva : null;
        this.ComputeFormatDesc = 'ComputeFormatDesc' in params ? params.ComputeFormatDesc : null;

    }
}

/**
 * DeleteSites请求参数结构体
 * @class
 */
class DeleteSitesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的站点id列表
         * @type {Array.<string> || null}
         */
        this.SiteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SiteIds = 'SiteIds' in params ? params.SiteIds : null;

    }
}

/**
 * 用于购买页面添加cos信息
 * @class
 */
class CosInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS存储大小，单位TB
         * @type {number || null}
         */
        this.Size = null;

        /**
         * COS存储类型，默认为cos
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
        this.Size = 'Size' in params ? params.Size : null;
        this.Type = 'Type' in params ? params.Type : null;

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
        this.Zone = null;

        /**
         * 可用区描述
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 可用区ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 可用区状态，包含AVAILABLE和UNAVAILABLE。AVAILABLE代表可用，UNAVAILABLE代表不可用。
         * @type {string || null}
         */
        this.ZoneState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneState = 'ZoneState' in params ? params.ZoneState : null;

    }
}

/**
 * DescribeDedicatedClusterOverview返回参数结构体
 * @class
 */
class DescribeDedicatedClusterOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云服务器数量
         * @type {number || null}
         */
        this.CvmCount = null;

        /**
         * 宿主机数量
         * @type {number || null}
         */
        this.HostCount = null;

        /**
         * vpn通道状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpnConnectionState = null;

        /**
         * vpn网关监控数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VpngwBandwidthData || null}
         */
        this.VpngwBandwidthData = null;

        /**
         * 本地网关信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LocalNetInfo || null}
         */
        this.LocalNetInfo = null;

        /**
         * vpn网关通道监控数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VpngwBandwidthData> || null}
         */
        this.VpnConnectionBandwidthData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CvmCount = 'CvmCount' in params ? params.CvmCount : null;
        this.HostCount = 'HostCount' in params ? params.HostCount : null;
        this.VpnConnectionState = 'VpnConnectionState' in params ? params.VpnConnectionState : null;

        if (params.VpngwBandwidthData) {
            let obj = new VpngwBandwidthData();
            obj.deserialize(params.VpngwBandwidthData)
            this.VpngwBandwidthData = obj;
        }

        if (params.LocalNetInfo) {
            let obj = new LocalNetInfo();
            obj.deserialize(params.LocalNetInfo)
            this.LocalNetInfo = obj;
        }

        if (params.VpnConnectionBandwidthData) {
            this.VpnConnectionBandwidthData = new Array();
            for (let z in params.VpnConnectionBandwidthData) {
                let obj = new VpngwBandwidthData();
                obj.deserialize(params.VpnConnectionBandwidthData[z]);
                this.VpnConnectionBandwidthData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSites请求参数结构体
 * @class
 */
class DescribeSitesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照站点id过滤
         * @type {Array.<string> || null}
         */
        this.SiteIds = null;

        /**
         * 模糊匹配站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
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
        this.SiteIds = 'SiteIds' in params ? params.SiteIds : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CDC宿主机的详细信息
 * @class
 */
class HostInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 宿主机IP
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * 云服务类型
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 宿主机运行状态
         * @type {string || null}
         */
        this.HostStatus = null;

        /**
         * 宿主机类型
         * @type {string || null}
         */
        this.HostType = null;

        /**
         * cpu可用数
         * @type {number || null}
         */
        this.CpuAvailable = null;

        /**
         * cpu总数
         * @type {number || null}
         */
        this.CpuTotal = null;

        /**
         * 内存可用数
         * @type {number || null}
         */
        this.MemAvailable = null;

        /**
         * 内存总数
         * @type {number || null}
         */
        this.MemTotal = null;

        /**
         * 运行时间
         * @type {string || null}
         */
        this.RunTime = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 宿主机id
注意：此字段可能返回 null，表示取不到有效值。
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
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.HostStatus = 'HostStatus' in params ? params.HostStatus : null;
        this.HostType = 'HostType' in params ? params.HostType : null;
        this.CpuAvailable = 'CpuAvailable' in params ? params.CpuAvailable : null;
        this.CpuTotal = 'CpuTotal' in params ? params.CpuTotal : null;
        this.MemAvailable = 'MemAvailable' in params ? params.MemAvailable : null;
        this.MemTotal = 'MemTotal' in params ? params.MemTotal : null;
        this.RunTime = 'RunTime' in params ? params.RunTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.HostId = 'HostId' in params ? params.HostId : null;

    }
}

/**
 * CreateSite返回参数结构体
 * @class
 */
class CreateSiteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建Site生成的id
         * @type {string || null}
         */
        this.SiteId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDedicatedSupportedZones返回参数结构体
 * @class
 */
class DescribeDedicatedSupportedZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持的可用区列表
         * @type {Array.<RegionZoneInfo> || null}
         */
        this.ZoneSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new RegionZoneInfo();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySiteInfo返回参数结构体
 * @class
 */
class ModifySiteInfoResponse extends  AbstractModel {
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
 * CreateDedicatedClusterOrder请求参数结构体
 * @class
 */
class CreateDedicatedClusterOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用集群id
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

        /**
         * order关联的专用集群类型数组
         * @type {Array.<DedicatedClusterTypeInfo> || null}
         */
        this.DedicatedClusterTypes = null;

        /**
         * order关联的cos存储信息
         * @type {CosInfo || null}
         */
        this.CosInfo = null;

        /**
         * order关联的cbs存储信息
         * @type {CbsInfo || null}
         */
        this.CbsInfo = null;

        /**
         * 购买来源，默认为cloudApi
         * @type {string || null}
         */
        this.PurchaseSource = null;

        /**
         * 当调用API接口提交订单时，需要提交DedicatedClusterOrderId
         * @type {string || null}
         */
        this.DedicatedClusterOrderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;

        if (params.DedicatedClusterTypes) {
            this.DedicatedClusterTypes = new Array();
            for (let z in params.DedicatedClusterTypes) {
                let obj = new DedicatedClusterTypeInfo();
                obj.deserialize(params.DedicatedClusterTypes[z]);
                this.DedicatedClusterTypes.push(obj);
            }
        }

        if (params.CosInfo) {
            let obj = new CosInfo();
            obj.deserialize(params.CosInfo)
            this.CosInfo = obj;
        }

        if (params.CbsInfo) {
            let obj = new CbsInfo();
            obj.deserialize(params.CbsInfo)
            this.CbsInfo = obj;
        }
        this.PurchaseSource = 'PurchaseSource' in params ? params.PurchaseSource : null;
        this.DedicatedClusterOrderId = 'DedicatedClusterOrderId' in params ? params.DedicatedClusterOrderId : null;

    }
}

/**
 * ModifyOrderStatus请求参数结构体
 * @class
 */
class ModifyOrderStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要更新成的状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 大订单ID
         * @type {string || null}
         */
        this.DedicatedClusterOrderId = null;

        /**
         * 小订单ID
         * @type {Array.<string> || null}
         */
        this.SubOrderIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.DedicatedClusterOrderId = 'DedicatedClusterOrderId' in params ? params.DedicatedClusterOrderId : null;
        this.SubOrderIds = 'SubOrderIds' in params ? params.SubOrderIds : null;

    }
}

/**
 * 专用集群子订单
 * @class
 */
class DedicatedClusterOrderItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用集群类型id
         * @type {string || null}
         */
        this.DedicatedClusterTypeId = null;

        /**
         * 支持的存储类型列表
         * @type {Array.<string> || null}
         */
        this.SupportedStorageType = null;

        /**
         * 支持的上连交换机的链路传输速率(GiB)
         * @type {Array.<number> || null}
         */
        this.SupportedUplinkSpeed = null;

        /**
         * 支持的实例族列表
         * @type {Array.<string> || null}
         */
        this.SupportedInstanceFamily = null;

        /**
         * 地板承重要求(KG)
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 功率要求(KW)
         * @type {number || null}
         */
        this.PowerDraw = null;

        /**
         * 订单状态
         * @type {string || null}
         */
        this.SubOrderStatus = null;

        /**
         * 订单创建的时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 子订单ID
         * @type {string || null}
         */
        this.SubOrderId = null;

        /**
         * 关联的集群规格数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 规格简单描述
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规格详细描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * CPU数
         * @type {number || null}
         */
        this.TotalCpu = null;

        /**
         * 内存数
         * @type {number || null}
         */
        this.TotalMem = null;

        /**
         * GPU数
         * @type {number || null}
         */
        this.TotalGpu = null;

        /**
         * 规格英文名
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * 规格展示
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ComputeFormat = null;

        /**
         * 规格类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TypeFamily = null;

        /**
         * 0未支付，1已支付
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SubOrderPayStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterTypeId = 'DedicatedClusterTypeId' in params ? params.DedicatedClusterTypeId : null;
        this.SupportedStorageType = 'SupportedStorageType' in params ? params.SupportedStorageType : null;
        this.SupportedUplinkSpeed = 'SupportedUplinkSpeed' in params ? params.SupportedUplinkSpeed : null;
        this.SupportedInstanceFamily = 'SupportedInstanceFamily' in params ? params.SupportedInstanceFamily : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.PowerDraw = 'PowerDraw' in params ? params.PowerDraw : null;
        this.SubOrderStatus = 'SubOrderStatus' in params ? params.SubOrderStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SubOrderId = 'SubOrderId' in params ? params.SubOrderId : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.TotalCpu = 'TotalCpu' in params ? params.TotalCpu : null;
        this.TotalMem = 'TotalMem' in params ? params.TotalMem : null;
        this.TotalGpu = 'TotalGpu' in params ? params.TotalGpu : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.ComputeFormat = 'ComputeFormat' in params ? params.ComputeFormat : null;
        this.TypeFamily = 'TypeFamily' in params ? params.TypeFamily : null;
        this.SubOrderPayStatus = 'SubOrderPayStatus' in params ? params.SubOrderPayStatus : null;

    }
}

/**
 * CreateSite请求参数结构体
 * @class
 */
class CreateSiteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 站点所在国家
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 站点所在省份
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 站点所在城市
         * @type {string || null}
         */
        this.City = null;

        /**
         * 站点所在地区的详细地址信息
         * @type {string || null}
         */
        this.AddressLine = null;

        /**
         * 站点描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 注意事项
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 您将使用光纤类型将CDC设备连接到网络。有单模和多模两种选项。
         * @type {string || null}
         */
        this.FiberType = null;

        /**
         * 您将CDC连接到网络时采用的光学标准。此字段取决于上行链路速度、光纤类型和到上游设备的距离。
         * @type {string || null}
         */
        this.OpticalStandard = null;

        /**
         * 电源连接器类型
         * @type {string || null}
         */
        this.PowerConnectors = null;

        /**
         * 从机架上方还是下方供电。
         * @type {string || null}
         */
        this.PowerFeedDrop = null;

        /**
         * 最大承重(KG)
         * @type {number || null}
         */
        this.MaxWeight = null;

        /**
         * 功耗(KW)
         * @type {number || null}
         */
        this.PowerDrawKva = null;

        /**
         * 网络到腾讯云Region区域的上行链路速度
         * @type {number || null}
         */
        this.UplinkSpeedGbps = null;

        /**
         * 将CDC连接到网络时，每台CDC网络设备(每个机架 2 台设备)使用的上行链路数量。
         * @type {number || null}
         */
        this.UplinkCount = null;

        /**
         * 是否满足下面环境条件：
1、场地没有材料要求或验收标准会影响 CDC 设备配送和安装。
2、确定的机架位置包含:
温度范围为 41 到 104°F (5 到 40°C)。
湿度范围为 10°F (-12°C)和 8% RH (相对湿度)到 70°F(21°C)和 80% RH。
机架位置的气流方向为从前向后，且应具有足够的 CFM (每分钟立方英尺)。CFM 必须是 CDC 配置的 kVA 功耗值的 145.8 倍。
         * @type {boolean || null}
         */
        this.ConditionRequirement = null;

        /**
         * 是否满足下面的尺寸条件：
您的装货站台可以容纳一个机架箱(高 x 宽 x 深 = 94" x 54" x 48")。
您可以提供从机架(高 x 宽 x 深 = 80" x 24" x 48")交货地点到机架最终安置位置的明确通道。测量深度时，应包括站台、走廊通道、门、转弯、坡道、货梯，并将其他通道限制考虑在内。
在最终的 CDC安置位置，前部间隙可以为 48" 或更大，后部间隙可以为 24" 或更大。
         * @type {boolean || null}
         */
        this.DimensionRequirement = null;

        /**
         * 是否提供冗余的上游设备(交换机或路由器)，以便两台  网络设备都能连接到网络设备。
         * @type {boolean || null}
         */
        this.RedundantNetworking = null;

        /**
         * 站点所在地区的邮编
         * @type {number || null}
         */
        this.PostalCode = null;

        /**
         * 站点所在地区的详细地址信息（补充）
         * @type {string || null}
         */
        this.OptionalAddressLine = null;

        /**
         * 是否需要腾讯云团队协助完成机架支撑工作
         * @type {boolean || null}
         */
        this.NeedHelp = null;

        /**
         * 是否电源冗余
         * @type {boolean || null}
         */
        this.RedundantPower = null;

        /**
         * 上游断路器是否具备
         * @type {boolean || null}
         */
        this.BreakerRequirement = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.AddressLine = 'AddressLine' in params ? params.AddressLine : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.FiberType = 'FiberType' in params ? params.FiberType : null;
        this.OpticalStandard = 'OpticalStandard' in params ? params.OpticalStandard : null;
        this.PowerConnectors = 'PowerConnectors' in params ? params.PowerConnectors : null;
        this.PowerFeedDrop = 'PowerFeedDrop' in params ? params.PowerFeedDrop : null;
        this.MaxWeight = 'MaxWeight' in params ? params.MaxWeight : null;
        this.PowerDrawKva = 'PowerDrawKva' in params ? params.PowerDrawKva : null;
        this.UplinkSpeedGbps = 'UplinkSpeedGbps' in params ? params.UplinkSpeedGbps : null;
        this.UplinkCount = 'UplinkCount' in params ? params.UplinkCount : null;
        this.ConditionRequirement = 'ConditionRequirement' in params ? params.ConditionRequirement : null;
        this.DimensionRequirement = 'DimensionRequirement' in params ? params.DimensionRequirement : null;
        this.RedundantNetworking = 'RedundantNetworking' in params ? params.RedundantNetworking : null;
        this.PostalCode = 'PostalCode' in params ? params.PostalCode : null;
        this.OptionalAddressLine = 'OptionalAddressLine' in params ? params.OptionalAddressLine : null;
        this.NeedHelp = 'NeedHelp' in params ? params.NeedHelp : null;
        this.RedundantPower = 'RedundantPower' in params ? params.RedundantPower : null;
        this.BreakerRequirement = 'BreakerRequirement' in params ? params.BreakerRequirement : null;

    }
}

/**
 * DescribeDedicatedSupportedZones请求参数结构体
 * @class
 */
class DescribeDedicatedSupportedZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 传入region列表
         * @type {Array.<number> || null}
         */
        this.Regions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Regions = 'Regions' in params ? params.Regions : null;

    }
}

/**
 * DedicatedClusterType => (Id, Count)
 * @class
 */
class DedicatedClusterTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群类型Id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 集群类型个数
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
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * ModifyOrderStatus返回参数结构体
 * @class
 */
class ModifyOrderStatusResponse extends  AbstractModel {
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
 * 入带宽数据
 * @class
 */
class InBandwidth extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Timestamps = null;

        /**
         * 时间对应的值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
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
        this.Timestamps = 'Timestamps' in params ? params.Timestamps : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeDedicatedClusterCosCapacity请求参数结构体
 * @class
 */
class DescribeDedicatedClusterCosCapacityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的专用集群id
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;

    }
}

/**
 * DescribeSites返回参数结构体
 * @class
 */
class DescribeSitesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的站点列表
         * @type {Array.<Site> || null}
         */
        this.SiteSet = null;

        /**
         * 符合条件的站点数量。
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

        if (params.SiteSet) {
            this.SiteSet = new Array();
            for (let z in params.SiteSet) {
                let obj = new Site();
                obj.deserialize(params.SiteSet[z]);
                this.SiteSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSitesDetail请求参数结构体
 * @class
 */
class DescribeSitesDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照站点id过滤
         * @type {Array.<string> || null}
         */
        this.SiteIds = null;

        /**
         * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 按照站定名称模糊匹配
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
        this.SiteIds = 'SiteIds' in params ? params.SiteIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 专用集群订单
 * @class
 */
class DedicatedClusterOrder extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用集群id
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

        /**
         * 专用集群类型id（移到下一层级，已经废弃，后续将删除）
         * @type {string || null}
         */
        this.DedicatedClusterTypeId = null;

        /**
         * 支持的存储类型列表（移到下一层级，已经废弃，后续将删除）
         * @type {Array.<string> || null}
         */
        this.SupportedStorageType = null;

        /**
         * 支持的上连交换机的链路传输速率(GiB)（移到下一层级，已经废弃，后续将删除）
         * @type {Array.<number> || null}
         */
        this.SupportedUplinkSpeed = null;

        /**
         * 支持的实例族列表（移到下一层级，已经废弃，后续将删除）
         * @type {Array.<string> || null}
         */
        this.SupportedInstanceFamily = null;

        /**
         * 地板承重要求(KG)
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 功率要求(KW)
         * @type {number || null}
         */
        this.PowerDraw = null;

        /**
         * 订单状态
         * @type {string || null}
         */
        this.OrderStatus = null;

        /**
         * 订单创建的时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 大订单ID
         * @type {string || null}
         */
        this.DedicatedClusterOrderId = null;

        /**
         * 订单类型，创建CREATE或扩容EXTEND
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 子订单详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DedicatedClusterOrderItem> || null}
         */
        this.DedicatedClusterOrderItems = null;

        /**
         * cpu值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * mem值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * gpu值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * 0代表未支付，1代表已支付
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PayStatus = null;

        /**
         * 支付方式，一次性、按月、按年
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * 购买时长的单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 购买时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 订单类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;
        this.DedicatedClusterTypeId = 'DedicatedClusterTypeId' in params ? params.DedicatedClusterTypeId : null;
        this.SupportedStorageType = 'SupportedStorageType' in params ? params.SupportedStorageType : null;
        this.SupportedUplinkSpeed = 'SupportedUplinkSpeed' in params ? params.SupportedUplinkSpeed : null;
        this.SupportedInstanceFamily = 'SupportedInstanceFamily' in params ? params.SupportedInstanceFamily : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.PowerDraw = 'PowerDraw' in params ? params.PowerDraw : null;
        this.OrderStatus = 'OrderStatus' in params ? params.OrderStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DedicatedClusterOrderId = 'DedicatedClusterOrderId' in params ? params.DedicatedClusterOrderId : null;
        this.Action = 'Action' in params ? params.Action : null;

        if (params.DedicatedClusterOrderItems) {
            this.DedicatedClusterOrderItems = new Array();
            for (let z in params.DedicatedClusterOrderItems) {
                let obj = new DedicatedClusterOrderItem();
                obj.deserialize(params.DedicatedClusterOrderItems[z]);
                this.DedicatedClusterOrderItems.push(obj);
            }
        }
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.PayStatus = 'PayStatus' in params ? params.PayStatus : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;

    }
}

/**
 * ModifyDedicatedClusterInfo请求参数结构体
 * @class
 */
class ModifyDedicatedClusterInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本地专用集群ID
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

        /**
         * 集群的新名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 集群的新可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 集群的新描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 集群所在站点
         * @type {string || null}
         */
        this.SiteId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SiteId = 'SiteId' in params ? params.SiteId : null;

    }
}

/**
 * DescribeDedicatedClusterHosts请求参数结构体
 * @class
 */
class DescribeDedicatedClusterHostsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20
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
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateDedicatedClusterOrder返回参数结构体
 * @class
 */
class CreateDedicatedClusterOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用集群订单id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DedicatedClusterOrderId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterOrderId = 'DedicatedClusterOrderId' in params ? params.DedicatedClusterOrderId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDedicatedClusterCosCapacity返回参数结构体
 * @class
 */
class DescribeDedicatedClusterCosCapacityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本集群内cos容量信息，单位：‘GB’
         * @type {CosCapacity || null}
         */
        this.CosCapacity = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CosCapacity) {
            let obj = new CosCapacity();
            obj.deserialize(params.CosCapacity)
            this.CosCapacity = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RegionZoneInfo信息
 * @class
 */
class RegionZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region id
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * ZoneInfo数组
         * @type {Array.<ZoneInfo> || null}
         */
        this.Zones = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

        if (params.Zones) {
            this.Zones = new Array();
            for (let z in params.Zones) {
                let obj = new ZoneInfo();
                obj.deserialize(params.Zones[z]);
                this.Zones.push(obj);
            }
        }

    }
}

/**
 * CreateDedicatedCluster返回参数结构体
 * @class
 */
class CreateDedicatedClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的专用集群id
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 专用集群列表
 * @class
 */
class DedicatedCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用集群id。如"cluster-xxxxx"。
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

        /**
         * 专用集群所属可用区名称。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 专用集群的描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 专用集群的名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 专用集群的生命周期。如"PENDING"。
         * @type {string || null}
         */
        this.LifecycleStatus = null;

        /**
         * 专用集群的创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 专用集群所属的站点id。
         * @type {string || null}
         */
        this.SiteId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.LifecycleStatus = 'LifecycleStatus' in params ? params.LifecycleStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SiteId = 'SiteId' in params ? params.SiteId : null;

    }
}

/**
 * DescribeSitesDetail返回参数结构体
 * @class
 */
class DescribeSitesDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点详情
         * @type {Array.<SiteDetail> || null}
         */
        this.SiteDetailSet = null;

        /**
         * 符合条件的站点总数
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

        if (params.SiteDetailSet) {
            this.SiteDetailSet = new Array();
            for (let z in params.SiteDetailSet) {
                let obj = new SiteDetail();
                obj.deserialize(params.SiteDetailSet[z]);
                this.SiteDetailSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDedicatedClusterOrders请求参数结构体
 * @class
 */
class DescribeDedicatedClusterOrdersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照专用集群id过滤
         * @type {Array.<string> || null}
         */
        this.DedicatedClusterIds = null;

        /**
         * 按照专用集群订单id过滤
         * @type {string || null}
         */
        this.DedicatedClusterOrderIds = null;

        /**
         * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 订单状态为过滤条件：PENDING INCONSTRUCTION DELIVERING DELIVERED EXPIRED CANCELLED  OFFLINE
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 订单类型为过滤条件：CREATE  EXTEND
         * @type {string || null}
         */
        this.ActionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterIds = 'DedicatedClusterIds' in params ? params.DedicatedClusterIds : null;
        this.DedicatedClusterOrderIds = 'DedicatedClusterOrderIds' in params ? params.DedicatedClusterOrderIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

    }
}

/**
 * DescribeDedicatedClusters返回参数结构体
 * @class
 */
class DescribeDedicatedClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的专用集群列表
         * @type {Array.<DedicatedCluster> || null}
         */
        this.DedicatedClusterSet = null;

        /**
         * 符合条件的专用集群数量。
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

        if (params.DedicatedClusterSet) {
            this.DedicatedClusterSet = new Array();
            for (let z in params.DedicatedClusterSet) {
                let obj = new DedicatedCluster();
                obj.deserialize(params.DedicatedClusterSet[z]);
                this.DedicatedClusterSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CDC集群内宿主机的统计信息
 * @class
 */
class HostStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 宿主机规格
         * @type {string || null}
         */
        this.HostType = null;

        /**
         * 宿主机机型系列
         * @type {string || null}
         */
        this.HostFamily = null;

        /**
         * 宿主机的CPU核数，单位：核
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 宿主机内存大小，单位：GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 该规格宿主机的数量
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
        this.HostType = 'HostType' in params ? params.HostType : null;
        this.HostFamily = 'HostFamily' in params ? params.HostFamily : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * 购买的cbs信息
 * @class
 */
class CbsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * cbs存储大小，单位TB
         * @type {number || null}
         */
        this.Size = null;

        /**
         * cbs存储类型，默认为SSD
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
        this.Size = 'Size' in params ? params.Size : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * ModifySiteDeviceInfo返回参数结构体
 * @class
 */
class ModifySiteDeviceInfoResponse extends  AbstractModel {
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
 * CreateDedicatedCluster请求参数结构体
 * @class
 */
class CreateDedicatedClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用集群所属的SiteId
         * @type {string || null}
         */
        this.SiteId = null;

        /**
         * 专用集群的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 专用集群所属的可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 专用集群的描述
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
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeDedicatedClusterHosts返回参数结构体
 * @class
 */
class DescribeDedicatedClusterHostsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 宿主机信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<HostInfo> || null}
         */
        this.HostInfoSet = null;

        /**
         * 宿主机总数
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

        if (params.HostInfoSet) {
            this.HostInfoSet = new Array();
            for (let z in params.HostInfoSet) {
                let obj = new HostInfo();
                obj.deserialize(params.HostInfoSet[z]);
                this.HostInfoSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 本地网络信息
 * @class
 */
class LocalNetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 网络id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 路由信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BGPRoute = null;

        /**
         * 本地IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LocalIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.BGPRoute = 'BGPRoute' in params ? params.BGPRoute : null;
        this.LocalIp = 'LocalIp' in params ? params.LocalIp : null;

    }
}

/**
 * DescribeDedicatedClusterInstanceTypes请求参数结构体
 * @class
 */
class DescribeDedicatedClusterInstanceTypesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的专用集群id
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;

    }
}

/**
 * ModifyDedicatedClusterInfo返回参数结构体
 * @class
 */
class ModifyDedicatedClusterInfoResponse extends  AbstractModel {
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
 * ModifySiteInfo请求参数结构体
 * @class
 */
class ModifySiteInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机房ID
         * @type {string || null}
         */
        this.SiteId = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 站点描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 注意事项
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 站点所在国家
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 站点所在省份
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 站点所在城市
         * @type {string || null}
         */
        this.City = null;

        /**
         * 站点所在地区的邮编
         * @type {string || null}
         */
        this.PostalCode = null;

        /**
         * 站点所在地区的详细地址信息
         * @type {string || null}
         */
        this.AddressLine = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.PostalCode = 'PostalCode' in params ? params.PostalCode : null;
        this.AddressLine = 'AddressLine' in params ? params.AddressLine : null;

    }
}

/**
 * 站点详情
 * @class
 */
class SiteDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点id
         * @type {string || null}
         */
        this.SiteId = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 站点描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 站点创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 光纤类型
         * @type {string || null}
         */
        this.FiberType = null;

        /**
         * 网络到腾讯云Region区域的上行链路速度
         * @type {number || null}
         */
        this.UplinkSpeedGbps = null;

        /**
         * 将CDC连接到网络时，每台CDC网络设备(每个机架 2 台设备)使用的上行链路数量。
         * @type {number || null}
         */
        this.UplinkCount = null;

        /**
         * 将CDC连接到网络时采用的光学标准
         * @type {string || null}
         */
        this.OpticalStandard = null;

        /**
         * 是否提供冗余的上游设备(交换机或路由器)，以便两台  网络设备都能连接到网络设备。
         * @type {boolean || null}
         */
        this.RedundantNetworking = null;

        /**
         * 电源连接器类型
         * @type {string || null}
         */
        this.PowerConnectors = null;

        /**
         * 从机架上方还是下方供电。
         * @type {string || null}
         */
        this.PowerFeedDrop = null;

        /**
         * 功耗(KW)
         * @type {number || null}
         */
        this.PowerDrawKva = null;

        /**
         * 是否满足下面环境条件：
1、场地没有材料要求或验收标准会影响 CDC 设备配送和安装。
2、确定的机架位置包含:
温度范围为 41 到 104°F (5 到 40°C)。
湿度范围为 10°F (-12°C)和 8% RH (相对湿度)到 70°F(21°C)和 80% RH。
机架位置的气流方向为从前向后，且应具有足够的 CFM (每分钟立方英尺)。CFM 必须是 CDC 配置的 kVA 功耗值的 145.8 倍。
         * @type {boolean || null}
         */
        this.ConditionRequirement = null;

        /**
         * 是否满足下面的尺寸条件：
您的装货站台可以容纳一个机架箱(高 x 宽 x 深 = 94" x 54" x 48")。
您可以提供从机架(高 x 宽 x 深 = 80" x 24" x 48")交货地点到机架最终安置位置的明确通道。测量深度时，应包括站台、走廊通道、门、转弯、坡道、货梯，并将其他通道限制考虑在内。
在最终的 CDC安置位置，前部间隙可以为 48" 或更大，后部间隙可以为 24" 或更大。
         * @type {boolean || null}
         */
        this.DimensionRequirement = null;

        /**
         * 最大承重(KG)
         * @type {number || null}
         */
        this.MaxWeight = null;

        /**
         * 站点地址
         * @type {string || null}
         */
        this.AddressLine = null;

        /**
         * 站点所在地区的详细地址信息（补充）
         * @type {string || null}
         */
        this.OptionalAddressLine = null;

        /**
         * 是否需要腾讯云团队协助完成机架支撑工作
         * @type {boolean || null}
         */
        this.NeedHelp = null;

        /**
         * 上游断路器是否具备
         * @type {boolean || null}
         */
        this.BreakerRequirement = null;

        /**
         * 是否电源冗余
         * @type {boolean || null}
         */
        this.RedundantPower = null;

        /**
         * 站点所在国家
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 站点所在省份
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 站点所在城市
         * @type {string || null}
         */
        this.City = null;

        /**
         * 站点所在地区的邮编
         * @type {number || null}
         */
        this.PostalCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.FiberType = 'FiberType' in params ? params.FiberType : null;
        this.UplinkSpeedGbps = 'UplinkSpeedGbps' in params ? params.UplinkSpeedGbps : null;
        this.UplinkCount = 'UplinkCount' in params ? params.UplinkCount : null;
        this.OpticalStandard = 'OpticalStandard' in params ? params.OpticalStandard : null;
        this.RedundantNetworking = 'RedundantNetworking' in params ? params.RedundantNetworking : null;
        this.PowerConnectors = 'PowerConnectors' in params ? params.PowerConnectors : null;
        this.PowerFeedDrop = 'PowerFeedDrop' in params ? params.PowerFeedDrop : null;
        this.PowerDrawKva = 'PowerDrawKva' in params ? params.PowerDrawKva : null;
        this.ConditionRequirement = 'ConditionRequirement' in params ? params.ConditionRequirement : null;
        this.DimensionRequirement = 'DimensionRequirement' in params ? params.DimensionRequirement : null;
        this.MaxWeight = 'MaxWeight' in params ? params.MaxWeight : null;
        this.AddressLine = 'AddressLine' in params ? params.AddressLine : null;
        this.OptionalAddressLine = 'OptionalAddressLine' in params ? params.OptionalAddressLine : null;
        this.NeedHelp = 'NeedHelp' in params ? params.NeedHelp : null;
        this.BreakerRequirement = 'BreakerRequirement' in params ? params.BreakerRequirement : null;
        this.RedundantPower = 'RedundantPower' in params ? params.RedundantPower : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.PostalCode = 'PostalCode' in params ? params.PostalCode : null;

    }
}

/**
 * DeleteSites返回参数结构体
 * @class
 */
class DeleteSitesResponse extends  AbstractModel {
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
 * CDC集群内cos的容量信息
 * @class
 */
class CosCapacity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已购cos的总容量大小，单位GB
         * @type {number || null}
         */
        this.TotalCapacity = null;

        /**
         * 剩余可用cos的容量大小，单位GB
         * @type {number || null}
         */
        this.TotalFreeCapacity = null;

        /**
         * 已用cos的容量大小，单位GB
         * @type {number || null}
         */
        this.TotalUsedCapacity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCapacity = 'TotalCapacity' in params ? params.TotalCapacity : null;
        this.TotalFreeCapacity = 'TotalFreeCapacity' in params ? params.TotalFreeCapacity : null;
        this.TotalUsedCapacity = 'TotalUsedCapacity' in params ? params.TotalUsedCapacity : null;

    }
}

/**
 * VPN网关的流量监控数据。
 * @class
 */
class VpngwBandwidthData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出带宽流量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutBandwidth || null}
         */
        this.OutBandwidth = null;

        /**
         * 入带宽流量
         * @type {InBandwidth || null}
         */
        this.InBandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OutBandwidth) {
            let obj = new OutBandwidth();
            obj.deserialize(params.OutBandwidth)
            this.OutBandwidth = obj;
        }

        if (params.InBandwidth) {
            let obj = new InBandwidth();
            obj.deserialize(params.InBandwidth)
            this.InBandwidth = obj;
        }

    }
}

/**
 * ModifySiteDeviceInfo请求参数结构体
 * @class
 */
class ModifySiteDeviceInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机房ID
         * @type {string || null}
         */
        this.SiteId = null;

        /**
         * 您将使用光纤类型将CDC设备连接到网络。有单模和多模两种选项。
         * @type {string || null}
         */
        this.FiberType = null;

        /**
         * 您将CDC连接到网络时采用的光学标准。此字段取决于上行链路速度、光纤类型和到上游设备的距离。
         * @type {string || null}
         */
        this.OpticalStandard = null;

        /**
         * 电源连接器类型
         * @type {string || null}
         */
        this.PowerConnectors = null;

        /**
         * 从机架上方还是下方供电。
         * @type {string || null}
         */
        this.PowerFeedDrop = null;

        /**
         * 最大承重(KG)
         * @type {number || null}
         */
        this.MaxWeight = null;

        /**
         * 功耗(KW)
         * @type {number || null}
         */
        this.PowerDrawKva = null;

        /**
         * 网络到腾讯云Region区域的上行链路速度
         * @type {number || null}
         */
        this.UplinkSpeedGbps = null;

        /**
         * 将CDC连接到网络时，每台CDC网络设备(每个机架 2 台设备)使用的上行链路数量。
         * @type {number || null}
         */
        this.UplinkCount = null;

        /**
         * 是否满足下面环境条件：
1、场地没有材料要求或验收标准会影响 CDC 设备配送和安装。
2、确定的机架位置包含:
温度范围为 41 到 104°F (5 到 40°C)。
湿度范围为 10°F (-12°C)和 8% RH (相对湿度)到 70°F(21°C)和 80% RH。
机架位置的气流方向为从前向后，且应具有足够的 CFM (每分钟立方英尺)。CFM 必须是 CDC 配置的 kVA 功耗值的 145.8 倍。
         * @type {boolean || null}
         */
        this.ConditionRequirement = null;

        /**
         * 是否满足下面的尺寸条件：
您的装货站台可以容纳一个机架箱(高 x 宽 x 深 = 94" x 54" x 48")。
您可以提供从机架(高 x 宽 x 深 = 80" x 24" x 48")交货地点到机架最终安置位置的明确通道。测量深度时，应包括站台、走廊通道、门、转弯、坡道、货梯，并将其他通道限制考虑在内。
在最终的 CDC安置位置，前部间隙可以为 48" 或更大，后部间隙可以为 24" 或更大。
         * @type {boolean || null}
         */
        this.DimensionRequirement = null;

        /**
         * 是否提供冗余的上游设备(交换机或路由器)，以便两台  网络设备都能连接到网络设备。
         * @type {boolean || null}
         */
        this.RedundantNetworking = null;

        /**
         * 是否需要腾讯云团队协助完成机架支撑工作
         * @type {boolean || null}
         */
        this.NeedHelp = null;

        /**
         * 是否电源冗余
         * @type {boolean || null}
         */
        this.RedundantPower = null;

        /**
         * 上游断路器是否具备
         * @type {boolean || null}
         */
        this.BreakerRequirement = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.FiberType = 'FiberType' in params ? params.FiberType : null;
        this.OpticalStandard = 'OpticalStandard' in params ? params.OpticalStandard : null;
        this.PowerConnectors = 'PowerConnectors' in params ? params.PowerConnectors : null;
        this.PowerFeedDrop = 'PowerFeedDrop' in params ? params.PowerFeedDrop : null;
        this.MaxWeight = 'MaxWeight' in params ? params.MaxWeight : null;
        this.PowerDrawKva = 'PowerDrawKva' in params ? params.PowerDrawKva : null;
        this.UplinkSpeedGbps = 'UplinkSpeedGbps' in params ? params.UplinkSpeedGbps : null;
        this.UplinkCount = 'UplinkCount' in params ? params.UplinkCount : null;
        this.ConditionRequirement = 'ConditionRequirement' in params ? params.ConditionRequirement : null;
        this.DimensionRequirement = 'DimensionRequirement' in params ? params.DimensionRequirement : null;
        this.RedundantNetworking = 'RedundantNetworking' in params ? params.RedundantNetworking : null;
        this.NeedHelp = 'NeedHelp' in params ? params.NeedHelp : null;
        this.RedundantPower = 'RedundantPower' in params ? params.RedundantPower : null;
        this.BreakerRequirement = 'BreakerRequirement' in params ? params.BreakerRequirement : null;

    }
}

/**
 * DescribeDedicatedClusterHostStatistics返回参数结构体
 * @class
 */
class DescribeDedicatedClusterHostStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该集群内宿主机的统计信息列表
         * @type {Array.<HostStatistic> || null}
         */
        this.HostStatisticSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HostStatisticSet) {
            this.HostStatisticSet = new Array();
            for (let z in params.HostStatisticSet) {
                let obj = new HostStatistic();
                obj.deserialize(params.HostStatisticSet[z]);
                this.HostStatisticSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 客户站点信息
 * @class
 */
class Site extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 站点id
         * @type {string || null}
         */
        this.SiteId = null;

        /**
         * 站点描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 站点创建时间
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
        this.Name = 'Name' in params ? params.Name : null;
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeDedicatedClusterTypes请求参数结构体
 * @class
 */
class DescribeDedicatedClusterTypesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模糊匹配专用集群配置名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 待查询的专用集群配置id列表
         * @type {Array.<string> || null}
         */
        this.DedicatedClusterTypeIds = null;

        /**
         * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 是否只查询计算规格类型
         * @type {boolean || null}
         */
        this.IsCompute = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DedicatedClusterTypeIds = 'DedicatedClusterTypeIds' in params ? params.DedicatedClusterTypeIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.IsCompute = 'IsCompute' in params ? params.IsCompute : null;

    }
}

/**
 * DescribeDedicatedClusterOrders返回参数结构体
 * @class
 */
class DescribeDedicatedClusterOrdersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专用集群订单列表
         * @type {Array.<DedicatedClusterOrder> || null}
         */
        this.DedicatedClusterOrderSet = null;

        /**
         * 符合条件的专用集群订单总数
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

        if (params.DedicatedClusterOrderSet) {
            this.DedicatedClusterOrderSet = new Array();
            for (let z in params.DedicatedClusterOrderSet) {
                let obj = new DedicatedClusterOrder();
                obj.deserialize(params.DedicatedClusterOrderSet[z]);
                this.DedicatedClusterOrderSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDedicatedClusterHostStatistics请求参数结构体
 * @class
 */
class DescribeDedicatedClusterHostStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的专用集群id
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;

    }
}

/**
 * 出带宽数据。
 * @class
 */
class OutBandwidth extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Timestamps = null;

        /**
         * 对应时间的值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
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
        this.Timestamps = 'Timestamps' in params ? params.Timestamps : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeDedicatedClusterOverview请求参数结构体
 * @class
 */
class DescribeDedicatedClusterOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;

    }
}

/**
 * DeleteDedicatedClusters请求参数结构体
 * @class
 */
class DeleteDedicatedClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的专用集群id
         * @type {Array.<string> || null}
         */
        this.DedicatedClusterIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterIds = 'DedicatedClusterIds' in params ? params.DedicatedClusterIds : null;

    }
}

/**
 * DeleteDedicatedClusters返回参数结构体
 * @class
 */
class DeleteDedicatedClustersResponse extends  AbstractModel {
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
    DescribeDedicatedClusterInstanceTypesResponse: DescribeDedicatedClusterInstanceTypesResponse,
    DescribeDedicatedClustersRequest: DescribeDedicatedClustersRequest,
    DescribeDedicatedClusterTypesResponse: DescribeDedicatedClusterTypesResponse,
    DedicatedClusterInstanceType: DedicatedClusterInstanceType,
    DedicatedClusterType: DedicatedClusterType,
    DeleteSitesRequest: DeleteSitesRequest,
    CosInfo: CosInfo,
    ZoneInfo: ZoneInfo,
    DescribeDedicatedClusterOverviewResponse: DescribeDedicatedClusterOverviewResponse,
    DescribeSitesRequest: DescribeSitesRequest,
    HostInfo: HostInfo,
    CreateSiteResponse: CreateSiteResponse,
    DescribeDedicatedSupportedZonesResponse: DescribeDedicatedSupportedZonesResponse,
    ModifySiteInfoResponse: ModifySiteInfoResponse,
    CreateDedicatedClusterOrderRequest: CreateDedicatedClusterOrderRequest,
    ModifyOrderStatusRequest: ModifyOrderStatusRequest,
    DedicatedClusterOrderItem: DedicatedClusterOrderItem,
    CreateSiteRequest: CreateSiteRequest,
    DescribeDedicatedSupportedZonesRequest: DescribeDedicatedSupportedZonesRequest,
    DedicatedClusterTypeInfo: DedicatedClusterTypeInfo,
    ModifyOrderStatusResponse: ModifyOrderStatusResponse,
    InBandwidth: InBandwidth,
    DescribeDedicatedClusterCosCapacityRequest: DescribeDedicatedClusterCosCapacityRequest,
    DescribeSitesResponse: DescribeSitesResponse,
    DescribeSitesDetailRequest: DescribeSitesDetailRequest,
    DedicatedClusterOrder: DedicatedClusterOrder,
    ModifyDedicatedClusterInfoRequest: ModifyDedicatedClusterInfoRequest,
    DescribeDedicatedClusterHostsRequest: DescribeDedicatedClusterHostsRequest,
    CreateDedicatedClusterOrderResponse: CreateDedicatedClusterOrderResponse,
    DescribeDedicatedClusterCosCapacityResponse: DescribeDedicatedClusterCosCapacityResponse,
    RegionZoneInfo: RegionZoneInfo,
    CreateDedicatedClusterResponse: CreateDedicatedClusterResponse,
    DedicatedCluster: DedicatedCluster,
    DescribeSitesDetailResponse: DescribeSitesDetailResponse,
    DescribeDedicatedClusterOrdersRequest: DescribeDedicatedClusterOrdersRequest,
    DescribeDedicatedClustersResponse: DescribeDedicatedClustersResponse,
    HostStatistic: HostStatistic,
    CbsInfo: CbsInfo,
    ModifySiteDeviceInfoResponse: ModifySiteDeviceInfoResponse,
    CreateDedicatedClusterRequest: CreateDedicatedClusterRequest,
    DescribeDedicatedClusterHostsResponse: DescribeDedicatedClusterHostsResponse,
    LocalNetInfo: LocalNetInfo,
    DescribeDedicatedClusterInstanceTypesRequest: DescribeDedicatedClusterInstanceTypesRequest,
    ModifyDedicatedClusterInfoResponse: ModifyDedicatedClusterInfoResponse,
    ModifySiteInfoRequest: ModifySiteInfoRequest,
    SiteDetail: SiteDetail,
    DeleteSitesResponse: DeleteSitesResponse,
    CosCapacity: CosCapacity,
    VpngwBandwidthData: VpngwBandwidthData,
    ModifySiteDeviceInfoRequest: ModifySiteDeviceInfoRequest,
    DescribeDedicatedClusterHostStatisticsResponse: DescribeDedicatedClusterHostStatisticsResponse,
    Site: Site,
    DescribeDedicatedClusterTypesRequest: DescribeDedicatedClusterTypesRequest,
    DescribeDedicatedClusterOrdersResponse: DescribeDedicatedClusterOrdersResponse,
    DescribeDedicatedClusterHostStatisticsRequest: DescribeDedicatedClusterHostStatisticsRequest,
    OutBandwidth: OutBandwidth,
    DescribeDedicatedClusterOverviewRequest: DescribeDedicatedClusterOverviewRequest,
    DeleteDedicatedClustersRequest: DeleteDedicatedClustersRequest,
    DeleteDedicatedClustersResponse: DeleteDedicatedClustersResponse,

}
