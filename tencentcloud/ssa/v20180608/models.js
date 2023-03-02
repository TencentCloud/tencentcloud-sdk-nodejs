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
 * DescribeMappingResults返回参数结构体
 * @class
 */
class DescribeMappingResultsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Results || null}
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
            let obj = new Results();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetDetail请求参数结构体
 * @class
 */
class DescribeAssetDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询过滤参数
         * @type {string || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Params = 'Params' in params ? params.Params : null;

    }
}

/**
 * DescribeSocCheckItemList返回参数结构体
 * @class
 */
class DescribeSocCheckItemListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeSocCheckItemListRspRsp || null}
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
            let obj = new DescribeSocCheckItemListRspRsp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * @type {VulList || null}
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
            let obj = new VulList();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSocAlertDetails请求参数结构体
 * @class
 */
class DescribeSocAlertDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警id
         * @type {string || null}
         */
        this.AlertId = null;

        /**
         * 告警时间，取Timestamp字段
         * @type {string || null}
         */
        this.AlertTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlertId = 'AlertId' in params ? params.AlertId : null;
        this.AlertTimestamp = 'AlertTimestamp' in params ? params.AlertTimestamp : null;

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
         * 资产组列表
         * @type {Array.<CheckAssetItem> || null}
         */
        this.CheckAssetsList = null;

        /**
         * 资产组列表总数
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

        if (params.CheckAssetsList) {
            this.CheckAssetsList = new Array();
            for (let z in params.CheckAssetsList) {
                let obj = new CheckAssetItem();
                obj.deserialize(params.CheckAssetsList[z]);
                this.CheckAssetsList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 检查项详情对象
 * @class
 */
class DataCheck extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项唯一标识符uuid
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 检查项名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 检查项类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 最近一次检查时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastCheckTime = null;

        /**
         * 初始未检测状态0, 已通过为1，未通过为2
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 0-未忽略,1-已忽略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsIgnored = null;

        /**
         * 有风险的资源总数，未通过数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskCount = null;

        /**
         * 0-检测中,1-结束检测
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsChecked = null;

        /**
         * 总资产数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AssetTotal = null;

        /**
         * 备注内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remarks = null;

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
        this.Type = 'Type' in params ? params.Type : null;
        this.LastCheckTime = 'LastCheckTime' in params ? params.LastCheckTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsIgnored = 'IsIgnored' in params ? params.IsIgnored : null;
        this.RiskCount = 'RiskCount' in params ? params.RiskCount : null;
        this.IsChecked = 'IsChecked' in params ? params.IsChecked : null;
        this.AssetTotal = 'AssetTotal' in params ? params.AssetTotal : null;
        this.Remarks = 'Remarks' in params ? params.Remarks : null;

    }
}

/**
 * DescribeSocCheckResultList返回参数结构体
 * @class
 */
class DescribeSocCheckResultListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeSocCheckResultListRspRsp || null}
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
            let obj = new DescribeSocCheckResultListRspRsp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SocCheckItem类型
 * @class
 */
class SocCheckItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 唯一id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LevelId = null;

        /**
         * 成功数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 失败数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.LevelId = 'LevelId' in params ? params.LevelId : null;
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailCount = 'FailCount' in params ? params.FailCount : null;

    }
}

/**
 * DescribeVulDetail返回参数结构体
 * @class
 */
class DescribeVulDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VulType = null;

        /**
         * 漏洞子类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubVulType = null;

        /**
         * cvss分数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CvssScore = null;

        /**
         * cvss值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cvss = null;

        /**
         * cve编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cve = null;

        /**
         * cnvd编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cnvd = null;

        /**
         * cnnvd编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cnnvd = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 参考
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reference = null;

        /**
         * 修复意见
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Repair = null;

        /**
         * 披露时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReleaseTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 漏洞名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 受影响资产唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImpactAsset = null;

        /**
         * 受影响资产名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImpactAssetName = null;

        /**
         * 受影响资产是否已删除
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsAssetDeleted = null;

        /**
         * 漏洞来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 漏洞URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VulUrl = null;

        /**
         * 资产归属
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SsaAssetCategory = null;

        /**
         * 资产文件路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VulPath = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulType = 'VulType' in params ? params.VulType : null;
        this.SubVulType = 'SubVulType' in params ? params.SubVulType : null;
        this.CvssScore = 'CvssScore' in params ? params.CvssScore : null;
        this.Cvss = 'Cvss' in params ? params.Cvss : null;
        this.Cve = 'Cve' in params ? params.Cve : null;
        this.Cnvd = 'Cnvd' in params ? params.Cnvd : null;
        this.Cnnvd = 'Cnnvd' in params ? params.Cnnvd : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Reference = 'Reference' in params ? params.Reference : null;
        this.Repair = 'Repair' in params ? params.Repair : null;
        this.ReleaseTime = 'ReleaseTime' in params ? params.ReleaseTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ImpactAsset = 'ImpactAsset' in params ? params.ImpactAsset : null;
        this.ImpactAssetName = 'ImpactAssetName' in params ? params.ImpactAssetName : null;
        this.IsAssetDeleted = 'IsAssetDeleted' in params ? params.IsAssetDeleted : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.VulUrl = 'VulUrl' in params ? params.VulUrl : null;
        this.SsaAssetCategory = 'SsaAssetCategory' in params ? params.SsaAssetCategory : null;
        this.VulPath = 'VulPath' in params ? params.VulPath : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 测绘记录
 * @class
 */
class MappingResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * 公网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetIp = null;

        /**
         * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * 资产id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetId = null;

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
         * 服务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Service = null;

        /**
         * 组件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Component = null;

        /**
         * 进程
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Process = null;

        /**
         * 操作系统
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OS = null;

        /**
         * 测绘时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastMappingTime = null;

        /**
         * 处置建议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisposalRecommendations = null;

        /**
         * 处置建议详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisposalRecommendationDetails = null;

        /**
         * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 测绘状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MappingStatus = null;

        /**
         * 区域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 安全防护状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecurityStatus> || null}
         */
        this.SecurityStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.AssetIp = 'AssetIp' in params ? params.AssetIp : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Service = 'Service' in params ? params.Service : null;
        this.Component = 'Component' in params ? params.Component : null;
        this.Process = 'Process' in params ? params.Process : null;
        this.OS = 'OS' in params ? params.OS : null;
        this.LastMappingTime = 'LastMappingTime' in params ? params.LastMappingTime : null;
        this.DisposalRecommendations = 'DisposalRecommendations' in params ? params.DisposalRecommendations : null;
        this.DisposalRecommendationDetails = 'DisposalRecommendationDetails' in params ? params.DisposalRecommendationDetails : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.MappingStatus = 'MappingStatus' in params ? params.MappingStatus : null;
        this.Region = 'Region' in params ? params.Region : null;

        if (params.SecurityStatus) {
            this.SecurityStatus = new Array();
            for (let z in params.SecurityStatus) {
                let obj = new SecurityStatus();
                obj.deserialize(params.SecurityStatus[z]);
                this.SecurityStatus.push(obj);
            }
        }

    }
}

/**
 * DescribeCheckConfigAssetList请求参数结构体
 * @class
 */
class DescribeCheckConfigAssetListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项UUID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页列表数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * db搜索条件
         * @type {Array.<Filter> || null}
         */
        this.Search = null;

        /**
         * ES过滤条件
         * @type {Array.<Filter> || null}
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Search) {
            this.Search = new Array();
            for (let z in params.Search) {
                let obj = new Filter();
                obj.deserialize(params.Search[z]);
                this.Search.push(obj);
            }
        }

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new Filter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }

    }
}

/**
 * 资产类型
 * @class
 */
class Asset extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产类型
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 区域
         * @type {string || null}
         */
        this.AssetRegionName = null;

        /**
         * 所属网络
         * @type {string || null}
         */
        this.AssetVpcid = null;

        /**
         * 主机类型
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 主机状态
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * 引擎版本
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 数据库标识
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 标签
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * 配置风险统计数
         * @type {number || null}
         */
        this.AssetCspmRiskNum = null;

        /**
         * 主机IP
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * 资产唯一标识
         * @type {string || null}
         */
        this.AssetUniqid = null;

        /**
         * 付费类型
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 安全事件统计数
         * @type {number || null}
         */
        this.AssetEventNum = null;

        /**
         * 漏洞统计数
         * @type {number || null}
         */
        this.AssetVulNum = null;

        /**
         * 主机IP内网
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 所属分组
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 发现时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SsaAssetDiscoverTime = null;

        /**
         * 下线时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SsaAssetDeleteTime = null;

        /**
         * 是否是新增资产
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsNew = null;

        /**
         * 所属子网
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetSubnetId = null;

        /**
         * 子网名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetSubnetName = null;

        /**
         * vpc名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetVpcName = null;

        /**
         * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NameSpace = null;

        /**
         * 负载均衡实例的网络类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * 负载均衡实例的vip列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * ipv6信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AssetIpv6 = null;

        /**
         * ssh端口暴露风险
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SSHRisk = null;

        /**
         * rdp端口暴露风险
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RDPRisk = null;

        /**
         * 资产失陷事件风险
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventRisk = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AssetRegionName = 'AssetRegionName' in params ? params.AssetRegionName : null;
        this.AssetVpcid = 'AssetVpcid' in params ? params.AssetVpcid : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.AssetCspmRiskNum = 'AssetCspmRiskNum' in params ? params.AssetCspmRiskNum : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.AssetUniqid = 'AssetUniqid' in params ? params.AssetUniqid : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.AssetEventNum = 'AssetEventNum' in params ? params.AssetEventNum : null;
        this.AssetVulNum = 'AssetVulNum' in params ? params.AssetVulNum : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.SsaAssetDiscoverTime = 'SsaAssetDiscoverTime' in params ? params.SsaAssetDiscoverTime : null;
        this.SsaAssetDeleteTime = 'SsaAssetDeleteTime' in params ? params.SsaAssetDeleteTime : null;
        this.IsNew = 'IsNew' in params ? params.IsNew : null;
        this.AssetSubnetId = 'AssetSubnetId' in params ? params.AssetSubnetId : null;
        this.AssetSubnetName = 'AssetSubnetName' in params ? params.AssetSubnetName : null;
        this.AssetVpcName = 'AssetVpcName' in params ? params.AssetVpcName : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.NameSpace = 'NameSpace' in params ? params.NameSpace : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.AssetIpv6 = 'AssetIpv6' in params ? params.AssetIpv6 : null;
        this.SSHRisk = 'SSHRisk' in params ? params.SSHRisk : null;
        this.RDPRisk = 'RDPRisk' in params ? params.RDPRisk : null;
        this.EventRisk = 'EventRisk' in params ? params.EventRisk : null;

    }
}

/**
 * SaDivulgeDataQueryPub请求参数结构体
 * @class
 */
class SaDivulgeDataQueryPubRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模糊查询字段(针对appid或者uin)
         * @type {string || null}
         */
        this.QueryKey = null;

        /**
         * 安全事件名称
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * 监控源  0:全部 1:GitHub 2:暗网 默认值1
         * @type {string || null}
         */
        this.DivulgeSoure = null;

        /**
         * 受影响资产
         * @type {string || null}
         */
        this.Asset = null;

        /**
         * 命中主题集下的规则topic名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 命中主题集下的规则topic唯一id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 风险等级 -1:未知 1:低危 2:中危 3:高危 4:严重
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 安全事件处理状态 -1:未知 1:待处理 2:已处理 3:误报 4:已忽略 5:已知晓 6:已信任
         * @type {string || null}
         */
        this.Status = null;

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

        /**
         * 查询起始地址
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 查询个数
         * @type {string || null}
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
        this.QueryKey = 'QueryKey' in params ? params.QueryKey : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.DivulgeSoure = 'DivulgeSoure' in params ? params.DivulgeSoure : null;
        this.Asset = 'Asset' in params ? params.Asset : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeComplianceList返回参数结构体
 * @class
 */
class DescribeComplianceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项列表
         * @type {Array.<DataCompliance> || null}
         */
        this.Data = null;

        /**
         * 总检查资产数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AssetTotalNum = null;

        /**
         * 总检查项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConfigTotalNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new DataCompliance();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.AssetTotalNum = 'AssetTotalNum' in params ? params.AssetTotalNum : null;
        this.ConfigTotalNum = 'ConfigTotalNum' in params ? params.ConfigTotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfigList返回参数结构体
 * @class
 */
class DescribeConfigListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项列表
         * @type {Array.<DataCheck> || null}
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
                let obj = new DataCheck();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 聚合类型
 * @class
 */
class AggregationObj extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 数组
         * @type {Array.<Bucket> || null}
         */
        this.Bucket = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Bucket) {
            this.Bucket = new Array();
            for (let z in params.Bucket) {
                let obj = new Bucket();
                obj.deserialize(params.Bucket[z]);
                this.Bucket.push(obj);
            }
        }

    }
}

/**
 * DescribeCheckConfigDetail返回参数结构体
 * @class
 */
class DescribeCheckConfigDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项详情
         * @type {CheckConfigDetail || null}
         */
        this.CheckConfigDetail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CheckConfigDetail) {
            let obj = new CheckConfigDetail();
            obj.deserialize(params.CheckConfigDetail)
            this.CheckConfigDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetList返回参数结构体
 * @class
 */
class DescribeAssetListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产列表
         * @type {AssetList || null}
         */
        this.AssetList = null;

        /**
         * 聚合数据
         * @type {Array.<AggregationObj> || null}
         */
        this.AggregationData = null;

        /**
         * 命名空间数据
         * @type {Array.<string> || null}
         */
        this.NamespaceData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AssetList) {
            let obj = new AssetList();
            obj.deserialize(params.AssetList)
            this.AssetList = obj;
        }

        if (params.AggregationData) {
            this.AggregationData = new Array();
            for (let z in params.AggregationData) {
                let obj = new AggregationObj();
                obj.deserialize(params.AggregationData[z]);
                this.AggregationData.push(obj);
            }
        }
        this.NamespaceData = 'NamespaceData' in params ? params.NamespaceData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSocAlertDetails返回参数结构体
 * @class
 */
class DescribeSocAlertDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回详情数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AlertDetail || null}
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
            let obj = new AlertDetail();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 漏洞管理漏洞数据
 * @class
 */
class VulItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标识
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 漏洞名称
         * @type {string || null}
         */
        this.VulName = null;

        /**
         * 漏洞类型
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 风险等级
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 处理状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 发现时间
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 影响资产数
         * @type {number || null}
         */
        this.ImpactAssetNum = null;

        /**
         * 影响资产id
         * @type {string || null}
         */
        this.ImpactAsset = null;

        /**
         * 影响资产名称
         * @type {string || null}
         */
        this.ImpactAssetName = null;

        /**
         * 漏洞描述
         * @type {string || null}
         */
        this.VulDetail = null;

        /**
         * 参考链接
         * @type {string || null}
         */
        this.VulRefLink = null;

        /**
         * Md5值
         * @type {string || null}
         */
        this.OldIdMd5 = null;

        /**
         * 漏洞唯一标识
         * @type {string || null}
         */
        this.UniqId = null;

        /**
         * 忽略时间
         * @type {string || null}
         */
        this.OperateTime = null;

        /**
         * 受影响资产是否下线
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsAssetDeleted = null;

        /**
         * 漏洞首次发现时间
         * @type {string || null}
         */
        this.DiscoverTime = null;

        /**
         * 主机源信息标识符
         * @type {number || null}
         */
        this.OriginId = null;

        /**
         * 资产区域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 资产所属网络
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vpcid = null;

        /**
         * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 资产子类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetSubType = null;

        /**
         * 资产IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AssetIpAll = null;

        /**
         * cvm类型的公网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * cvm类型的内网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 漏洞来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VulSource = null;

        /**
         * 影响URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AffectedUrl = null;

        /**
         * 资产归属
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SsaAssetCategory = null;

        /**
         * 影响url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VulUrl = null;

        /**
         * 是否扫描
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsOpen = null;

        /**
         * 御知主机id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.YzHostId = null;

        /**
         * 漏洞描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VulRepairPlan = null;

        /**
         * 漏洞文件路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VulPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.VulName = 'VulName' in params ? params.VulName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.ImpactAssetNum = 'ImpactAssetNum' in params ? params.ImpactAssetNum : null;
        this.ImpactAsset = 'ImpactAsset' in params ? params.ImpactAsset : null;
        this.ImpactAssetName = 'ImpactAssetName' in params ? params.ImpactAssetName : null;
        this.VulDetail = 'VulDetail' in params ? params.VulDetail : null;
        this.VulRefLink = 'VulRefLink' in params ? params.VulRefLink : null;
        this.OldIdMd5 = 'OldIdMd5' in params ? params.OldIdMd5 : null;
        this.UniqId = 'UniqId' in params ? params.UniqId : null;
        this.OperateTime = 'OperateTime' in params ? params.OperateTime : null;
        this.IsAssetDeleted = 'IsAssetDeleted' in params ? params.IsAssetDeleted : null;
        this.DiscoverTime = 'DiscoverTime' in params ? params.DiscoverTime : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Vpcid = 'Vpcid' in params ? params.Vpcid : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.AssetSubType = 'AssetSubType' in params ? params.AssetSubType : null;
        this.AssetIpAll = 'AssetIpAll' in params ? params.AssetIpAll : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.VulSource = 'VulSource' in params ? params.VulSource : null;
        this.AffectedUrl = 'AffectedUrl' in params ? params.AffectedUrl : null;
        this.SsaAssetCategory = 'SsaAssetCategory' in params ? params.SsaAssetCategory : null;
        this.VulUrl = 'VulUrl' in params ? params.VulUrl : null;
        this.IsOpen = 'IsOpen' in params ? params.IsOpen : null;
        this.YzHostId = 'YzHostId' in params ? params.YzHostId : null;
        this.VulRepairPlan = 'VulRepairPlan' in params ? params.VulRepairPlan : null;
        this.VulPath = 'VulPath' in params ? params.VulPath : null;

    }
}

/**
 * DescribeCheckConfigAssetList返回参数结构体
 * @class
 */
class DescribeCheckConfigAssetListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产列表总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 资产列表项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CheckAssetItem> || null}
         */
        this.CheckAssetsList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.CheckAssetsList) {
            this.CheckAssetsList = new Array();
            for (let z in params.CheckAssetsList) {
                let obj = new CheckAssetItem();
                obj.deserialize(params.CheckAssetsList[z]);
                this.CheckAssetsList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标签
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库标识
         * @type {number || null}
         */
        this.Fid = null;

        /**
         * 标签名称
         * @type {string || null}
         */
        this.Fname = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Fid = 'Fid' in params ? params.Fid : null;
        this.Fname = 'Fname' in params ? params.Fname : null;

    }
}

/**
 * 云安全配置检测结果
 * @class
 */
class SocCheckResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项的uuid
         * @type {string || null}
         */
        this.CheckId = null;

        /**
         * 配置要求
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 检查项的类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 检查对象
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 策略名
         * @type {string || null}
         */
        this.PloyName = null;

        /**
         * 策略id
         * @type {number || null}
         */
        this.PloyId = null;

        /**
         * 正常,低危,中危,高危
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 不符合数
         * @type {number || null}
         */
        this.FailAssetNum = null;

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalAssetNum = null;

        /**
         * 处置建议url链接
         * @type {string || null}
         */
        this.DealUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckId = 'CheckId' in params ? params.CheckId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.PloyName = 'PloyName' in params ? params.PloyName : null;
        this.PloyId = 'PloyId' in params ? params.PloyId : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.FailAssetNum = 'FailAssetNum' in params ? params.FailAssetNum : null;
        this.TotalAssetNum = 'TotalAssetNum' in params ? params.TotalAssetNum : null;
        this.DealUrl = 'DealUrl' in params ? params.DealUrl : null;

    }
}

/**
 * 告警列表响应数据
 * @class
 */
class AlertListData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 返回列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AlertType> || null}
         */
        this.AlertList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.AlertList) {
            this.AlertList = new Array();
            for (let z in params.AlertList) {
                let obj = new AlertType();
                obj.deserialize(params.AlertList[z]);
                this.AlertList.push(obj);
            }
        }

    }
}

/**
 * 查询_通用字段
 * @class
 */
class SaDivulgeDataQueryPub extends  AbstractModel {
    constructor(){
        super();

        /**
         * Id信息
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 用户Uin
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 用户AppId
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 事件名称
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * 监控源 0:全部 1:GitHub 2:暗网 默认值1
         * @type {string || null}
         */
        this.DivulgeSoure = null;

        /**
         * 受影响资产
         * @type {string || null}
         */
        this.Asset = null;

        /**
         * 命中主题集下的规则topic名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 命中主题集下的规则topic唯一id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 命中主题集下的自定义规则策略
         * @type {string || null}
         */
        this.RuleWord = null;

        /**
         * 扫描监测url
         * @type {string || null}
         */
        this.ScanUrl = null;

        /**
         * 扫描监测命中次数
         * @type {string || null}
         */
        this.ScanCount = null;

        /**
         * 风险等级 -1:未知 1:低危 2:中危 3:高危 4:严重
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 安全事件处理状态 -1:未知 1:待处理 2:已处理 3:误报 4:已忽略 5:已知晓 6:已信任
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 安全事件发生时间
         * @type {string || null}
         */
        this.EventTime = null;

        /**
         * 事件插入时间
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * 事件更新时间
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.DivulgeSoure = 'DivulgeSoure' in params ? params.DivulgeSoure : null;
        this.Asset = 'Asset' in params ? params.Asset : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleWord = 'RuleWord' in params ? params.RuleWord : null;
        this.ScanUrl = 'ScanUrl' in params ? params.ScanUrl : null;
        this.ScanCount = 'ScanCount' in params ? params.ScanCount : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EventTime = 'EventTime' in params ? params.EventTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 返回结构
 * @class
 */
class SocComplianceInfoResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合格项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SocComplianceItem> || null}
         */
        this.Items = null;

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
                let obj = new SocComplianceItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * DescribeAssetList请求参数结构体
 * @class
 */
class DescribeAssetListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询过滤参数
         * @type {string || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Params = 'Params' in params ? params.Params : null;

    }
}

/**
 * DescribeComplianceDetail返回参数结构体
 * @class
 */
class DescribeComplianceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合规管理检查项详情
         * @type {ComplianceCheckDetail || null}
         */
        this.CheckConfigDetail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CheckConfigDetail) {
            let obj = new ComplianceCheckDetail();
            obj.deserialize(params.CheckConfigDetail)
            this.CheckConfigDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * soc产品购买信息
 * @class
 */
class SocProductionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Index = null;

        /**
         * 状态
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeAssetsMappingList返回参数结构体
 * @class
 */
class DescribeAssetsMappingListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产测绘列表
         * @type {Array.<DataAssetMapping> || null}
         */
        this.Data = null;

        /**
         * 资产测绘总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 类型分类统计数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CountByType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new DataAssetMapping();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.CountByType = 'CountByType' in params ? params.CountByType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSocAlertList返回参数结构体
 * @class
 */
class DescribeSocAlertListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务数据
         * @type {AlertListData || null}
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
            let obj = new AlertListData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * soc合规信息
 * @class
 */
class SocComplianceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Item = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 分类
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StandardItem = null;

        /**
         * 结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 建议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 产品字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProStr = null;

        /**
         * 产品数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SocProductionItem> || null}
         */
        this.Production = null;

        /**
         * 配置项数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SocCheckItem> || null}
         */
        this.CheckItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Item = 'Item' in params ? params.Item : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.StandardItem = 'StandardItem' in params ? params.StandardItem : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.ProStr = 'ProStr' in params ? params.ProStr : null;

        if (params.Production) {
            this.Production = new Array();
            for (let z in params.Production) {
                let obj = new SocProductionItem();
                obj.deserialize(params.Production[z]);
                this.Production.push(obj);
            }
        }

        if (params.CheckItems) {
            this.CheckItems = new Array();
            for (let z in params.CheckItems) {
                let obj = new SocCheckItem();
                obj.deserialize(params.CheckItems[z]);
                this.CheckItems.push(obj);
            }
        }

    }
}

/**
 * 过滤条件
 * @class
 */
class QueryFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤key
         * @type {string || null}
         */
        this.FilterKey = null;

        /**
         * 操作符(只支持32位)
         * @type {number || null}
         */
        this.FilterOperatorType = null;

        /**
         * 过滤value
         * @type {string || null}
         */
        this.FilterValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FilterKey = 'FilterKey' in params ? params.FilterKey : null;
        this.FilterOperatorType = 'FilterOperatorType' in params ? params.FilterOperatorType : null;
        this.FilterValue = 'FilterValue' in params ? params.FilterValue : null;

    }
}

/**
 * 安全放回状态
 * @class
 */
class SecurityStatus extends  AbstractModel {
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
 * 排序的字段
 * @class
 */
class QuerySort extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段
         * @type {string || null}
         */
        this.SortKey = null;

        /**
         * 顺序，1升序2降序
         * @type {number || null}
         */
        this.SortType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SortKey = 'SortKey' in params ? params.SortKey : null;
        this.SortType = 'SortType' in params ? params.SortType : null;

    }
}

/**
 * DescribeComplianceList请求参数结构体
 * @class
 */
class DescribeComplianceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索过滤条件
         * @type {string || null}
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
        this.Filter = 'Filter' in params ? params.Filter : null;

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
         * 查询过滤参数
         * @type {string || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Params = 'Params' in params ? params.Params : null;

    }
}

/**
 * DescribeLeakDetectionList请求参数结构体
 * @class
 */
class DescribeLeakDetectionListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 筛选条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 每页数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.Page = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 检查项相关信息
 * @class
 */
class SocCheckItemV1 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckId = null;

        /**
         * 配置要求
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 检查项类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 检查对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 默认风险等级 2:低危 3:中危 4:高危
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 相关规范
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Standard = null;

        /**
         * 检查项是否付费 1:免费 2:付费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsFree = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckId = 'CheckId' in params ? params.CheckId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Standard = 'Standard' in params ? params.Standard : null;
        this.IsFree = 'IsFree' in params ? params.IsFree : null;

    }
}

/**
 * DescribeEventDetail返回参数结构体
 * @class
 */
class DescribeEventDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件详情
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
 * DescribeSafetyEventList返回参数结构体
 * @class
 */
class DescribeSafetyEventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件列表
         * @type {Array.<DataEvent> || null}
         */
        this.List = null;

        /**
         * 事件总条数
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new DataEvent();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 自定义泄露事件列表
 * @class
 */
class SaDivulgeDataQueryPubList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据条数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 自定义泄露事件列表
         * @type {Array.<SaDivulgeDataQueryPub> || null}
         */
        this.List = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new SaDivulgeDataQueryPub();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }

    }
}

/**
 * DescribeSocCheckResultList请求参数结构体
 * @class
 */
class DescribeSocCheckResultListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询参数,可支持的查询参数：
Name,Type,AssetType,Result,PloyName,PloyId
         * @type {Array.<QueryFilter> || null}
         */
        this.Filter = null;

        /**
         * 排序参数,可支持的排序参数：CheckStatus,RiskCount
         * @type {Array.<QuerySort> || null}
         */
        this.Sorter = null;

        /**
         * 当前页码数据，默认值为10
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 当前页面索引，默认值为0
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 资产id
         * @type {string || null}
         */
        this.AssetId = null;

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
                let obj = new QueryFilter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }

        if (params.Sorter) {
            this.Sorter = new Array();
            for (let z in params.Sorter) {
                let obj = new QuerySort();
                obj.deserialize(params.Sorter[z]);
                this.Sorter.push(obj);
            }
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.AssetId = 'AssetId' in params ? params.AssetId : null;

    }
}

/**
 * DescribeSafetyEventList请求参数结构体
 * @class
 */
class DescribeSafetyEventListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索过滤查询参数
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * 限制数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序列名
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序升降：desc-降序 asc-升序
         * @type {string || null}
         */
        this.By = null;

        /**
         * 开始查询时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束查询时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 是否过滤响应时间
         * @type {boolean || null}
         */
        this.IsFilterResponseTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IsFilterResponseTime = 'IsFilterResponseTime' in params ? params.IsFilterResponseTime : null;

    }
}

/**
 * 资产查询过滤参数
 * @class
 */
class AssetQueryFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询参数
         * @type {Array.<QueryFilter> || null}
         */
        this.Filter = null;

        /**
         * 查询连接符，1 and  ，2 or
         * @type {number || null}
         */
        this.Logic = null;

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
                let obj = new QueryFilter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }
        this.Logic = 'Logic' in params ? params.Logic : null;

    }
}

/**
 * 告警字段
 * @class
 */
class AlertType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标准时间格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlertTime = null;

        /**
         * 唯一id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlertId = null;

        /**
         * 资产id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AssetPrivateIp = null;

        /**
         * 名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlertName = null;

        /**
         * 告警级别  0:未知 1:低危 2:中危 3:高危 4:严重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 攻击字段1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttackChain = null;

        /**
         * 攻击字段2
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttackId = null;

        /**
         * 关注点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConcernInfo> || null}
         */
        this.Concerns = null;

        /**
         * 1：已防御，0,2：仅检测(0:告警类 1:拦截类 2:放行类 )
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Action = null;

        /**
         * 0/空：未知，1：未成功，2：成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AttackResult = null;

        /**
         * //调查状态  0/空：未启用，1：调查中，2：完成调查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventStatus = null;

        /**
         * //关联事件ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * //处置状态  0：未关闭，1：已关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 资产名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * 恶意实体
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConcernMaliciousCount = null;

        /**
         * 受害者实体
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConcernVictimCount = null;

        /**
         * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VictimAssetType = null;

        /**
         * 告警子类
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * 攻击技术名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttackName = null;

        /**
         * 外网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AssetPublicIp = null;

        /**
         * 攻击战术名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttackTactic = null;

        /**
         * 资产子网
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VictimAssetSub = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlertTime = 'AlertTime' in params ? params.AlertTime : null;
        this.AlertId = 'AlertId' in params ? params.AlertId : null;
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.AssetPrivateIp = 'AssetPrivateIp' in params ? params.AssetPrivateIp : null;
        this.AlertName = 'AlertName' in params ? params.AlertName : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.AttackChain = 'AttackChain' in params ? params.AttackChain : null;
        this.AttackId = 'AttackId' in params ? params.AttackId : null;

        if (params.Concerns) {
            this.Concerns = new Array();
            for (let z in params.Concerns) {
                let obj = new ConcernInfo();
                obj.deserialize(params.Concerns[z]);
                this.Concerns.push(obj);
            }
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.AttackResult = 'AttackResult' in params ? params.AttackResult : null;
        this.EventStatus = 'EventStatus' in params ? params.EventStatus : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.ConcernMaliciousCount = 'ConcernMaliciousCount' in params ? params.ConcernMaliciousCount : null;
        this.ConcernVictimCount = 'ConcernVictimCount' in params ? params.ConcernVictimCount : null;
        this.VictimAssetType = 'VictimAssetType' in params ? params.VictimAssetType : null;
        this.SubType = 'SubType' in params ? params.SubType : null;
        this.AttackName = 'AttackName' in params ? params.AttackName : null;
        this.AssetPublicIp = 'AssetPublicIp' in params ? params.AssetPublicIp : null;
        this.AttackTactic = 'AttackTactic' in params ? params.AttackTactic : null;
        this.VictimAssetSub = 'VictimAssetSub' in params ? params.VictimAssetSub : null;

    }
}

/**
 * SaEventPub请求参数结构体
 * @class
 */
class SaEventPubRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 受影响资产
         * @type {string || null}
         */
        this.Asset = null;

        /**
         * 安全事件名称
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * 安全事件1级分类，-1:未知 0:全部 1:攻击事件 2:侦查事件 3:僵木蠕毒 4:违规策略
         * @type {number || null}
         */
        this.EventType1 = null;

        /**
         * 安全事件2级分类，-1:未知 0:全部 1:DDOS事件 2:Web攻击 3:木马 4:异地登录 5:密码破解
         * @type {number || null}
         */
        this.EventType2 = null;

        /**
         * 风险等级，-1:未知 0:全部 1:低危 2:中危 3:高危 4:严重，可多选，如：1,2
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 安全事件状态，-1:未知 0:全部 1:待处理 2:已处理 3:误报 4:已忽略 5:已知晓 6:已信任
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询起始地址
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询个数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 私有字段和公有字段映射的原始采集数据唯一标识的MD5值
         * @type {string || null}
         */
        this.OldIdMd5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Asset = 'Asset' in params ? params.Asset : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.EventType1 = 'EventType1' in params ? params.EventType1 : null;
        this.EventType2 = 'EventType2' in params ? params.EventType2 : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.OldIdMd5 = 'OldIdMd5' in params ? params.OldIdMd5 : null;

    }
}

/**
 * DescribeSocAlertList请求参数结构体
 * @class
 */
class DescribeSocAlertListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 1:急需关注 2.重保监控 3.全量告警
         * @type {number || null}
         */
        this.Scenes = null;

        /**
         * 查询参数
         * @type {Array.<QueryFilter> || null}
         */
        this.Filter = null;

        /**
         * 排序参数
         * @type {Array.<QuerySort> || null}
         */
        this.Sorter = null;

        /**
         * 是否导出
         * @type {boolean || null}
         */
        this.ExportFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.Scenes = 'Scenes' in params ? params.Scenes : null;

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new QueryFilter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }

        if (params.Sorter) {
            this.Sorter = new Array();
            for (let z in params.Sorter) {
                let obj = new QuerySort();
                obj.deserialize(params.Sorter[z]);
                this.Sorter.push(obj);
            }
        }
        this.ExportFlag = 'ExportFlag' in params ? params.ExportFlag : null;

    }
}

/**
 * 等保资产组记录
 * @class
 */
class ComplianceCheckDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 检查项类别
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 检查项类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 不通过总数
         * @type {number || null}
         */
        this.ErrorCount = null;

        /**
         * 检查项英文名
         * @type {string || null}
         */
        this.NameEn = null;

        /**
         * 检查项名称
         * @type {string || null}
         */
        this.CheckName = null;

        /**
         * 检查项处置方式
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 帮助文档
         * @type {string || null}
         */
        this.Doc = null;

        /**
         * 通过总数
         * @type {number || null}
         */
        this.SafeCount = null;

        /**
         * 检查项检查内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 是否通过检测
         * @type {number || null}
         */
        this.IsPass = null;

        /**
         * 忽略总数
         * @type {number || null}
         */
        this.IgnoreCount = null;

        /**
         * 风险总数
         * @type {number || null}
         */
        this.RiskCount = null;

        /**
         * 最近一次检测时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastCheckTime = null;

        /**
         * 资产组类型
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * res_count
         * @type {number || null}
         */
        this.ResCount = null;

        /**
         * 检查项UUID
         * @type {string || null}
         */
        this.UUID = null;

        /**
         * 标准项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StandardItem = null;

        /**
         * 章节
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Chapter = null;

        /**
         * 资产类型描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetTypeDesc = null;

        /**
         * 是否忽略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsIgnore = null;

        /**
         * 风险项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskItem = null;

        /**
         * 合规检查项完整名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Title = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ErrorCount = 'ErrorCount' in params ? params.ErrorCount : null;
        this.NameEn = 'NameEn' in params ? params.NameEn : null;
        this.CheckName = 'CheckName' in params ? params.CheckName : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Doc = 'Doc' in params ? params.Doc : null;
        this.SafeCount = 'SafeCount' in params ? params.SafeCount : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.IsPass = 'IsPass' in params ? params.IsPass : null;
        this.IgnoreCount = 'IgnoreCount' in params ? params.IgnoreCount : null;
        this.RiskCount = 'RiskCount' in params ? params.RiskCount : null;
        this.LastCheckTime = 'LastCheckTime' in params ? params.LastCheckTime : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.ResCount = 'ResCount' in params ? params.ResCount : null;
        this.UUID = 'UUID' in params ? params.UUID : null;
        this.StandardItem = 'StandardItem' in params ? params.StandardItem : null;
        this.Chapter = 'Chapter' in params ? params.Chapter : null;
        this.AssetTypeDesc = 'AssetTypeDesc' in params ? params.AssetTypeDesc : null;
        this.IsIgnore = 'IsIgnore' in params ? params.IsIgnore : null;
        this.RiskItem = 'RiskItem' in params ? params.RiskItem : null;
        this.Title = 'Title' in params ? params.Title : null;

    }
}

/**
 * SaDivulgeDataQueryPub返回参数结构体
 * @class
 */
class SaDivulgeDataQueryPubResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义泄露事件列表
         * @type {SaDivulgeDataQueryPubList || null}
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
            let obj = new SaDivulgeDataQueryPubList();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * es聚合数据类型
 * @class
 */
class Bucket extends  AbstractModel {
    constructor(){
        super();

        /**
         * key
         * @type {string || null}
         */
        this.Key = null;

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
        this.Key = 'Key' in params ? params.Key : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DescribeConfigList请求参数结构体
 * @class
 */
class DescribeConfigListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索过滤条件
         * @type {string || null}
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
        this.Filter = 'Filter' in params ? params.Filter : null;

    }
}

/**
 * DescribeSocCspmCompliance返回参数结构体
 * @class
 */
class DescribeSocCspmComplianceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SocComplianceInfoResp || null}
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
            let obj = new SocComplianceInfoResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMappingResults请求参数结构体
 * @class
 */
class DescribeMappingResultsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，FilterKey 取值范围：AssetId，AssetIp，PrivateIp，Protocol，Service，OS，Process，Component，AssetType，Domain，Port，LastMappingTime，MappingType，Disposal，Vpc
         * @type {Array.<AssetQueryFilter> || null}
         */
        this.Filter = null;

        /**
         * 排序条件，SortKey取值范围：CreateTime，LastMappingTime
         * @type {Array.<QuerySort> || null}
         */
        this.Sorter = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 页大小，默认大小20
         * @type {number || null}
         */
        this.PageSize = null;

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
                let obj = new AssetQueryFilter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }

        if (params.Sorter) {
            this.Sorter = new Array();
            for (let z in params.Sorter) {
                let obj = new QuerySort();
                obj.deserialize(params.Sorter[z]);
                this.Sorter.push(obj);
            }
        }
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
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
         * 是否需要精确匹配
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
 * 资产列表
 * @class
 */
class AssetList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 资产数组
         * @type {Array.<Asset> || null}
         */
        this.List = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new Asset();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }

    }
}

/**
 * 资产测绘对象
 * @class
 */
class DataAssetMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产主IP地址(公网IP)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetIp = null;

        /**
         * 资产名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * 资产ID(各模块间通用)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Instid = null;

        /**
         * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 资产可用区(英文)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetRegionEn = null;

        /**
         * 资产可用区(中文)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetRegionCn = null;

        /**
         * 资产所属网络
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetNetwork = null;

        /**
         * 资产运行状态(英文)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetStatusEn = null;

        /**
         * 资产运行状态(中文)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetStatusCn = null;

        /**
         * 是否白名单：“True”为白名单不测绘，默认“False”正常测绘
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsWhite = null;

        /**
         * 资产测绘状态(“unstart”未开始/“running”测绘中/“finish”已完成/“abandoned”任务中止)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 最近更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 资产标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * 资产组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Group = null;

        /**
         * 端口和服务信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 组件信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Component = null;

        /**
         * 资产实例类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetInstanceType = null;

        /**
         * 资产是否是内网类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsIntranet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetIp = 'AssetIp' in params ? params.AssetIp : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.Instid = 'Instid' in params ? params.Instid : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.AssetRegionEn = 'AssetRegionEn' in params ? params.AssetRegionEn : null;
        this.AssetRegionCn = 'AssetRegionCn' in params ? params.AssetRegionCn : null;
        this.AssetNetwork = 'AssetNetwork' in params ? params.AssetNetwork : null;
        this.AssetStatusEn = 'AssetStatusEn' in params ? params.AssetStatusEn : null;
        this.AssetStatusCn = 'AssetStatusCn' in params ? params.AssetStatusCn : null;
        this.IsWhite = 'IsWhite' in params ? params.IsWhite : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Time = 'Time' in params ? params.Time : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.Group = 'Group' in params ? params.Group : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Component = 'Component' in params ? params.Component : null;
        this.AssetInstanceType = 'AssetInstanceType' in params ? params.AssetInstanceType : null;
        this.IsIntranet = 'IsIntranet' in params ? params.IsIntranet : null;

    }
}

/**
 * DescribeCheckConfigDetail请求参数结构体
 * @class
 */
class DescribeCheckConfigDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项ID
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
 * 漏洞管理漏洞列表
 * @class
 */
class VulList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表
         * @type {Array.<VulItem> || null}
         */
        this.List = null;

        /**
         * 总数
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new VulItem();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * DescribeLeakDetectionList返回参数结构体
 * @class
 */
class DescribeLeakDetectionListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据列表
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.List = 'List' in params ? params.List : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetDetailList返回参数结构体
 * @class
 */
class DescribeAssetDetailListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetDetail> || null}
         */
        this.Data = null;

        /**
         * 总数
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new AssetDetail();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 事件列表对象
 * @class
 */
class DataEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Md5值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OldIdMd5 = null;

        /**
         * 事件名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * 事件类型一级分类
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventType1 = null;

        /**
         * 事件类型二级分类
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventType2 = null;

        /**
         * 事件等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 处理状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 源ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * 目的ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DstIp = null;

        /**
         * 事件发生时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 目的端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Dstport = null;

        /**
         * 资产ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetIp = null;

        /**
         * 资产名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * 安全事件唯一标识符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SsaEventUniqid = null;

        /**
         * 资产id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * 事件来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 索引
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Index = null;

        /**
         * 索引中的唯一标识符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 受影响资产是否已下线
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsAssetDeleted = null;

        /**
         * 源ip所属地
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SsaSrcCountry = null;

        /**
         * 目的ip所属地
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SsaDstCountry = null;

        /**
         * 木马类型的描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SsaDescription = null;

        /**
         * 供给链类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SsaAttackChain = null;

        /**
         * 受影响组件
         * @type {string || null}
         */
        this.RuleComponents = null;

        /**
         * 资产ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AssetIpAll = null;

        /**
         * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * cvm类型资产的公网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * cvm类型资产的内网ip
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 事件响应状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SoarResponseStatus = null;

        /**
         * 事件最近响应时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SoarResponseTime = null;

        /**
         * 事件建议处理状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SoarSuggestStatus = null;

        /**
         * 事件剧本类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SoarPlaybookType = null;

        /**
         * 剧本任务Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SoarRunId = null;

        /**
         * 事件Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SsaEventId = null;

        /**
         * 是否新接入的云防事件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsNewCfwEvent = null;

        /**
         * 出入站方向
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.OldIdMd5 = 'OldIdMd5' in params ? params.OldIdMd5 : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.EventType1 = 'EventType1' in params ? params.EventType1 : null;
        this.EventType2 = 'EventType2' in params ? params.EventType2 : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.DstIp = 'DstIp' in params ? params.DstIp : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Dstport = 'Dstport' in params ? params.Dstport : null;
        this.AssetIp = 'AssetIp' in params ? params.AssetIp : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.SsaEventUniqid = 'SsaEventUniqid' in params ? params.SsaEventUniqid : null;
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.IsAssetDeleted = 'IsAssetDeleted' in params ? params.IsAssetDeleted : null;
        this.SsaSrcCountry = 'SsaSrcCountry' in params ? params.SsaSrcCountry : null;
        this.SsaDstCountry = 'SsaDstCountry' in params ? params.SsaDstCountry : null;
        this.SsaDescription = 'SsaDescription' in params ? params.SsaDescription : null;
        this.SsaAttackChain = 'SsaAttackChain' in params ? params.SsaAttackChain : null;
        this.RuleComponents = 'RuleComponents' in params ? params.RuleComponents : null;
        this.AssetIpAll = 'AssetIpAll' in params ? params.AssetIpAll : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.SoarResponseStatus = 'SoarResponseStatus' in params ? params.SoarResponseStatus : null;
        this.SoarResponseTime = 'SoarResponseTime' in params ? params.SoarResponseTime : null;
        this.SoarSuggestStatus = 'SoarSuggestStatus' in params ? params.SoarSuggestStatus : null;
        this.SoarPlaybookType = 'SoarPlaybookType' in params ? params.SoarPlaybookType : null;
        this.SoarRunId = 'SoarRunId' in params ? params.SoarRunId : null;
        this.SsaEventId = 'SsaEventId' in params ? params.SsaEventId : null;
        this.IsNewCfwEvent = 'IsNewCfwEvent' in params ? params.IsNewCfwEvent : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * DescribeSocCheckItemList请求参数结构体
 * @class
 */
class DescribeSocCheckItemListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询参数,可支持的排序字段:Name,Type,AssetType,Level,Standard,IsFree
         * @type {Array.<QueryFilter> || null}
         */
        this.Filter = null;

        /**
         * 排序参数:无
         * @type {Array.<QuerySort> || null}
         */
        this.Sorter = null;

        /**
         * 当前页码数据，默认值为10
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 当前页面索引，默认值为0
         * @type {number || null}
         */
        this.PageIndex = null;

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
                let obj = new QueryFilter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }

        if (params.Sorter) {
            this.Sorter = new Array();
            for (let z in params.Sorter) {
                let obj = new QuerySort();
                obj.deserialize(params.Sorter[z]);
                this.Sorter.push(obj);
            }
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;

    }
}

/**
 * 云安全配置检查项详情
 * @class
 */
class CheckConfigDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项Id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 检查项名称
         * @type {string || null}
         */
        this.CheckName = null;

        /**
         * 检查项内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 检查项处置方案
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 检查项帮助文档
         * @type {string || null}
         */
        this.Doc = null;

        /**
         * 未通过总数
         * @type {number || null}
         */
        this.ErrorCount = null;

        /**
         * 是否通过检查
         * @type {number || null}
         */
        this.IsPass = null;

        /**
         * 通过检查项
         * @type {number || null}
         */
        this.SafeCount = null;

        /**
         * 忽略检查项
         * @type {number || null}
         */
        this.IgnoreCount = null;

        /**
         * 风险检查项
         * @type {number || null}
         */
        this.RiskCount = null;

        /**
         * 检查项英文
         * @type {string || null}
         */
        this.NameEn = null;

        /**
         * 检查项类型
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * res_count
         * @type {number || null}
         */
        this.ResCount = null;

        /**
         * 是否忽略
         * @type {number || null}
         */
        this.IsIgnore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.CheckName = 'CheckName' in params ? params.CheckName : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Doc = 'Doc' in params ? params.Doc : null;
        this.ErrorCount = 'ErrorCount' in params ? params.ErrorCount : null;
        this.IsPass = 'IsPass' in params ? params.IsPass : null;
        this.SafeCount = 'SafeCount' in params ? params.SafeCount : null;
        this.IgnoreCount = 'IgnoreCount' in params ? params.IgnoreCount : null;
        this.RiskCount = 'RiskCount' in params ? params.RiskCount : null;
        this.NameEn = 'NameEn' in params ? params.NameEn : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.ResCount = 'ResCount' in params ? params.ResCount : null;
        this.IsIgnore = 'IsIgnore' in params ? params.IsIgnore : null;

    }
}

/**
 * 云安全配置检查项列表
 * @class
 */
class DescribeSocCheckItemListRspRsp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SocCheckItemV1> || null}
         */
        this.List = null;

        /**
         * 检查项总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new SocCheckItemV1();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * SaEventPub返回参数结构体
 * @class
 */
class SaEventPubResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DataSaEventPub
         * @type {ObjDataSaEventPub || null}
         */
        this.DataSaEventPub = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DataSaEventPub) {
            let obj = new ObjDataSaEventPub();
            obj.deserialize(params.DataSaEventPub)
            this.DataSaEventPub = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEventDetail请求参数结构体
 * @class
 */
class DescribeEventDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件索引名
         * @type {string || null}
         */
        this.Index = null;

        /**
         * 事件id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 事件来源
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 事件子类型
         * @type {number || null}
         */
        this.SubEventType = null;

        /**
         * 事件名称
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
        this.Index = 'Index' in params ? params.Index : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.SubEventType = 'SubEventType' in params ? params.SubEventType : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 检查项资产组每一项
 * @class
 */
class CheckAssetItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项下资产组ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 资产组实例id
         * @type {string || null}
         */
        this.Instid = null;

        /**
         * 处置跳转URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 检查任务id
         * @type {string || null}
         */
        this.Taskid = null;

        /**
         * 检查结果
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.Updatetime = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 是否忽略
         * @type {number || null}
         */
        this.IsIgnore = null;

        /**
         * 检查状态
         * @type {number || null}
         */
        this.IsChecked = null;

        /**
         * 资产组信息
         * @type {string || null}
         */
        this.AssetInfo = null;

        /**
         * 资产组ES的_id
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * 详情
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * 备注内容
         * @type {string || null}
         */
        this.Remarks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Instid = 'Instid' in params ? params.Instid : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Taskid = 'Taskid' in params ? params.Taskid : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.IsIgnore = 'IsIgnore' in params ? params.IsIgnore : null;
        this.IsChecked = 'IsChecked' in params ? params.IsChecked : null;
        this.AssetInfo = 'AssetInfo' in params ? params.AssetInfo : null;
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Remarks = 'Remarks' in params ? params.Remarks : null;

    }
}

/**
 * 资产测绘结果统计
 * @class
 */
class AssetTypeStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 统计计数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AssetCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.AssetCount = 'AssetCount' in params ? params.AssetCount : null;

    }
}

/**
 * 检查项结果详情列表
 * @class
 */
class DescribeSocCheckResultListRspRsp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 具体检查项详情
         * @type {Array.<SocCheckResult> || null}
         */
        this.List = null;

        /**
         * 检查结果总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 低危个数
         * @type {number || null}
         */
        this.LowTotal = null;

        /**
         * 中危个数
         * @type {number || null}
         */
        this.MiddleTotal = null;

        /**
         * 高危个数
         * @type {number || null}
         */
        this.HighTotal = null;

        /**
         * 正常个数
         * @type {number || null}
         */
        this.NormalTotal = null;

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
                let obj = new SocCheckResult();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.LowTotal = 'LowTotal' in params ? params.LowTotal : null;
        this.MiddleTotal = 'MiddleTotal' in params ? params.MiddleTotal : null;
        this.HighTotal = 'HighTotal' in params ? params.HighTotal : null;
        this.NormalTotal = 'NormalTotal' in params ? params.NormalTotal : null;

    }
}

/**
 * DescribeVulDetail请求参数结构体
 * @class
 */
class DescribeVulDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞唯一标识符
         * @type {string || null}
         */
        this.UniqId = null;

        /**
         * 查看详情来源
         * @type {string || null}
         */
        this.Source = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UniqId = 'UniqId' in params ? params.UniqId : null;
        this.Source = 'Source' in params ? params.Source : null;

    }
}

/**
 * 关注点类型
 * @class
 */
class ConcernInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关注点类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConcernType = null;

        /**
         * 实体类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EntityType = null;

        /**
         * 关注点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Concern = null;

        /**
         * 最近数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StatisticsCount = null;

        /**
         * 可疑关注点字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SearchData = null;

        /**
         * 可疑关注点字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IpCountryIso = null;

        /**
         * 可疑关注点字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IpProvinceIso = null;

        /**
         * 可疑关注点字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IpCity = null;

        /**
         * 可疑关注点字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventSubType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConcernType = 'ConcernType' in params ? params.ConcernType : null;
        this.EntityType = 'EntityType' in params ? params.EntityType : null;
        this.Concern = 'Concern' in params ? params.Concern : null;
        this.StatisticsCount = 'StatisticsCount' in params ? params.StatisticsCount : null;
        this.SearchData = 'SearchData' in params ? params.SearchData : null;
        this.IpCountryIso = 'IpCountryIso' in params ? params.IpCountryIso : null;
        this.IpProvinceIso = 'IpProvinceIso' in params ? params.IpProvinceIso : null;
        this.IpCity = 'IpCity' in params ? params.IpCity : null;
        this.EventSubType = 'EventSubType' in params ? params.EventSubType : null;

    }
}

/**
 * DescribeAssetsMappingList请求参数结构体
 * @class
 */
class DescribeAssetsMappingListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求参数
         * @type {string || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Params = 'Params' in params ? params.Params : null;

    }
}

/**
 * 合规检查项详情对象
 * @class
 */
class DataCompliance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 等保唯一标识符
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 检查项唯一标识符
         * @type {string || null}
         */
        this.CheckItemId = null;

        /**
         * 检查项名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 检查项资产类型
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 检查项类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 检查项类别
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 检查项标准项
         * @type {string || null}
         */
        this.StandardItem = null;

        /**
         * 检查项章节号
         * @type {string || null}
         */
        this.Chapter = null;

        /**
         * 最近一次检查时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastCheckTime = null;

        /**
         * 初始未检测状态0, 已通过为1，未通过为2
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 有风险的资源总数，未通过数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskCount = null;

        /**
         * 0-检测中,1-结束检测
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsChecked = null;

        /**
         * 检查项风险项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskItem = null;

        /**
         * 0-未忽略,1-已忽略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsIgnored = null;

        /**
         * 等保检查项完整名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 资产总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AssetTotal = null;

        /**
         * 忽略内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remarks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.CheckItemId = 'CheckItemId' in params ? params.CheckItemId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.StandardItem = 'StandardItem' in params ? params.StandardItem : null;
        this.Chapter = 'Chapter' in params ? params.Chapter : null;
        this.LastCheckTime = 'LastCheckTime' in params ? params.LastCheckTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RiskCount = 'RiskCount' in params ? params.RiskCount : null;
        this.IsChecked = 'IsChecked' in params ? params.IsChecked : null;
        this.RiskItem = 'RiskItem' in params ? params.RiskItem : null;
        this.IsIgnored = 'IsIgnored' in params ? params.IsIgnored : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.AssetTotal = 'AssetTotal' in params ? params.AssetTotal : null;
        this.Remarks = 'Remarks' in params ? params.Remarks : null;

    }
}

/**
 * 测绘结果
 * @class
 */
class Results extends  AbstractModel {
    constructor(){
        super();

        /**
         * 测绘类型统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssetTypeStatistic> || null}
         */
        this.Statistics = null;

        /**
         * 测绘结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MappingResult> || null}
         */
        this.Result = null;

        /**
         * 测绘任务数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * 最大测绘任务数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskMaxCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Statistics) {
            this.Statistics = new Array();
            for (let z in params.Statistics) {
                let obj = new AssetTypeStatistic();
                obj.deserialize(params.Statistics[z]);
                this.Statistics.push(obj);
            }
        }

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new MappingResult();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;
        this.TaskMaxCount = 'TaskMaxCount' in params ? params.TaskMaxCount : null;

    }
}

/**
 * DataSaEventPub
 * @class
 */
class ListDataSaEventPub extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 安全事件1级分类
         * @type {number || null}
         */
        this.EventType1 = null;

        /**
         * 安全事件2级分类
         * @type {number || null}
         */
        this.EventType2 = null;

        /**
         * 安全事件名称
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * 风险等级
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 安全事件状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 攻击源ip
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * 攻击目标ip
         * @type {string || null}
         */
        this.DstIp = null;

        /**
         * 攻击目标端口
         * @type {number || null}
         */
        this.DstPort = null;

        /**
         * 受影响资产
         * @type {string || null}
         */
        this.Asset = null;

        /**
         * 私有字段和公有字段映射的原始采集数据唯一标识的MD5值
         * @type {string || null}
         */
        this.OldIdMd5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.EventType1 = 'EventType1' in params ? params.EventType1 : null;
        this.EventType2 = 'EventType2' in params ? params.EventType2 : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.DstIp = 'DstIp' in params ? params.DstIp : null;
        this.DstPort = 'DstPort' in params ? params.DstPort : null;
        this.Asset = 'Asset' in params ? params.Asset : null;
        this.OldIdMd5 = 'OldIdMd5' in params ? params.OldIdMd5 : null;

    }
}

/**
 * 资产详情信息
 * @class
 */
class AssetDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产类型
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 区域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 所属网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 主机类型
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 主机状态
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * 主机IP-公网
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * 引擎版本
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 标识
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 标签
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * 内网IP地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 负载均衡示例的vip列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * 账号ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreationDate = null;

        /**
         * 访问域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 资产唯一id
         * @type {string || null}
         */
        this.AssetUniqid = null;

        /**
         * 关联实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 配置硬盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 配置硬盘大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 云硬盘/证书状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetStatus = null;

        /**
         * 证书类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertType = null;

        /**
         * 所属项目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 到期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertEndTime = null;

        /**
         * nosql引擎/版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * 主机IP-内网
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 证书有效期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ValidityPeriod = null;

        /**
         * 分组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 端口服务数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * 配置风险数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.RiskConfig = null;

        /**
         * 相关待处理事件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Event = null;

        /**
         * 相关待处理漏洞
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vul = null;

        /**
         * 资产发现时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SsaAssetDiscoverTime = null;

        /**
         * 所属子网
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetSubnetId = null;

        /**
         * 子网名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetSubnetName = null;

        /**
         * vpc名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetVpcName = null;

        /**
         * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NameSpace = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssetCreateTime = null;

        /**
         * 负载均衡网络类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * ipv6信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AssetIpv6 = null;

        /**
         * ssh风险
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SSHRisk = null;

        /**
         * rdp风险
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RDPRisk = null;

        /**
         * 安全事件风险
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventRisk = null;

        /**
         * 漏洞数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AssetVulNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.CreationDate = 'CreationDate' in params ? params.CreationDate : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.AssetUniqid = 'AssetUniqid' in params ? params.AssetUniqid : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.AssetStatus = 'AssetStatus' in params ? params.AssetStatus : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.CertEndTime = 'CertEndTime' in params ? params.CertEndTime : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.ValidityPeriod = 'ValidityPeriod' in params ? params.ValidityPeriod : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.RiskConfig = 'RiskConfig' in params ? params.RiskConfig : null;
        this.Event = 'Event' in params ? params.Event : null;
        this.Vul = 'Vul' in params ? params.Vul : null;
        this.SsaAssetDiscoverTime = 'SsaAssetDiscoverTime' in params ? params.SsaAssetDiscoverTime : null;
        this.AssetSubnetId = 'AssetSubnetId' in params ? params.AssetSubnetId : null;
        this.AssetSubnetName = 'AssetSubnetName' in params ? params.AssetSubnetName : null;
        this.AssetVpcName = 'AssetVpcName' in params ? params.AssetVpcName : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.NameSpace = 'NameSpace' in params ? params.NameSpace : null;
        this.AssetCreateTime = 'AssetCreateTime' in params ? params.AssetCreateTime : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.AssetIpv6 = 'AssetIpv6' in params ? params.AssetIpv6 : null;
        this.SSHRisk = 'SSHRisk' in params ? params.SSHRisk : null;
        this.RDPRisk = 'RDPRisk' in params ? params.RDPRisk : null;
        this.EventRisk = 'EventRisk' in params ? params.EventRisk : null;
        this.AssetVulNum = 'AssetVulNum' in params ? params.AssetVulNum : null;

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
         * 页码
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 检查项uuid
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filter = null;

        /**
         * 查询条件
         * @type {Array.<Filter> || null}
         */
        this.Search = null;

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
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new Filter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }

        if (params.Search) {
            this.Search = new Array();
            for (let z in params.Search) {
                let obj = new Filter();
                obj.deserialize(params.Search[z]);
                this.Search.push(obj);
            }
        }

    }
}

/**
 * DataSaEventPub
 * @class
 */
class ObjDataSaEventPub extends  AbstractModel {
    constructor(){
        super();

        /**
         * Count
         * @type {number || null}
         */
        this.Count = null;

        /**
         * List
         * @type {Array.<ListDataSaEventPub> || null}
         */
        this.List = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ListDataSaEventPub();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }

    }
}

/**
 * DescribeAssetDetail返回参数结构体
 * @class
 */
class DescribeAssetDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AssetDetail || null}
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
            let obj = new AssetDetail();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAssetDetailList请求参数结构体
 * @class
 */
class DescribeAssetDetailListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询条件，可支持的查询字段：AssetUniqid,AssetName,AssetIpAll,AssetVpcid,Tag
         * @type {Array.<AssetQueryFilter> || null}
         */
        this.Filter = null;

        /**
         * 排序条件，可支持的排序字段：
AssetCspmRiskNum,AssetVulNum,AssetEventNum,SsaAssetDiscoverTime
         * @type {Array.<QuerySort> || null}
         */
        this.Sorter = null;

        /**
         * 风险标签
         * @type {Array.<string> || null}
         */
        this.RiskTags = null;

        /**
         * 标签
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 页
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 页大小
         * @type {number || null}
         */
        this.PageSize = null;

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
                let obj = new AssetQueryFilter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }

        if (params.Sorter) {
            this.Sorter = new Array();
            for (let z in params.Sorter) {
                let obj = new QuerySort();
                obj.deserialize(params.Sorter[z]);
                this.Sorter.push(obj);
            }
        }
        this.RiskTags = 'RiskTags' in params ? params.RiskTags : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeSocCspmCompliance请求参数结构体
 * @class
 */
class DescribeSocCspmComplianceRequest extends  AbstractModel {
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
 * 告警详情
 * @class
 */
class AlertDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警基础信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AlertType || null}
         */
        this.BaseInfo = null;

        /**
         * 告警详情，json序列化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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

        if (params.BaseInfo) {
            let obj = new AlertType();
            obj.deserialize(params.BaseInfo)
            this.BaseInfo = obj;
        }
        this.Detail = 'Detail' in params ? params.Detail : null;

    }
}

/**
 * DescribeComplianceDetail请求参数结构体
 * @class
 */
class DescribeComplianceDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项uuid
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

module.exports = {
    DescribeMappingResultsResponse: DescribeMappingResultsResponse,
    DescribeAssetDetailRequest: DescribeAssetDetailRequest,
    DescribeSocCheckItemListResponse: DescribeSocCheckItemListResponse,
    DescribeVulListResponse: DescribeVulListResponse,
    DescribeSocAlertDetailsRequest: DescribeSocAlertDetailsRequest,
    DescribeComplianceAssetListResponse: DescribeComplianceAssetListResponse,
    DataCheck: DataCheck,
    DescribeSocCheckResultListResponse: DescribeSocCheckResultListResponse,
    SocCheckItem: SocCheckItem,
    DescribeVulDetailResponse: DescribeVulDetailResponse,
    MappingResult: MappingResult,
    DescribeCheckConfigAssetListRequest: DescribeCheckConfigAssetListRequest,
    Asset: Asset,
    SaDivulgeDataQueryPubRequest: SaDivulgeDataQueryPubRequest,
    DescribeComplianceListResponse: DescribeComplianceListResponse,
    DescribeConfigListResponse: DescribeConfigListResponse,
    AggregationObj: AggregationObj,
    DescribeCheckConfigDetailResponse: DescribeCheckConfigDetailResponse,
    DescribeAssetListResponse: DescribeAssetListResponse,
    DescribeSocAlertDetailsResponse: DescribeSocAlertDetailsResponse,
    VulItem: VulItem,
    DescribeCheckConfigAssetListResponse: DescribeCheckConfigAssetListResponse,
    Tag: Tag,
    SocCheckResult: SocCheckResult,
    AlertListData: AlertListData,
    SaDivulgeDataQueryPub: SaDivulgeDataQueryPub,
    SocComplianceInfoResp: SocComplianceInfoResp,
    DescribeAssetListRequest: DescribeAssetListRequest,
    DescribeComplianceDetailResponse: DescribeComplianceDetailResponse,
    SocProductionItem: SocProductionItem,
    DescribeAssetsMappingListResponse: DescribeAssetsMappingListResponse,
    DescribeSocAlertListResponse: DescribeSocAlertListResponse,
    SocComplianceItem: SocComplianceItem,
    QueryFilter: QueryFilter,
    SecurityStatus: SecurityStatus,
    QuerySort: QuerySort,
    DescribeComplianceListRequest: DescribeComplianceListRequest,
    DescribeVulListRequest: DescribeVulListRequest,
    DescribeLeakDetectionListRequest: DescribeLeakDetectionListRequest,
    SocCheckItemV1: SocCheckItemV1,
    DescribeEventDetailResponse: DescribeEventDetailResponse,
    DescribeSafetyEventListResponse: DescribeSafetyEventListResponse,
    SaDivulgeDataQueryPubList: SaDivulgeDataQueryPubList,
    DescribeSocCheckResultListRequest: DescribeSocCheckResultListRequest,
    DescribeSafetyEventListRequest: DescribeSafetyEventListRequest,
    AssetQueryFilter: AssetQueryFilter,
    AlertType: AlertType,
    SaEventPubRequest: SaEventPubRequest,
    DescribeSocAlertListRequest: DescribeSocAlertListRequest,
    ComplianceCheckDetail: ComplianceCheckDetail,
    SaDivulgeDataQueryPubResponse: SaDivulgeDataQueryPubResponse,
    Bucket: Bucket,
    DescribeConfigListRequest: DescribeConfigListRequest,
    DescribeSocCspmComplianceResponse: DescribeSocCspmComplianceResponse,
    DescribeMappingResultsRequest: DescribeMappingResultsRequest,
    Filter: Filter,
    AssetList: AssetList,
    DataAssetMapping: DataAssetMapping,
    DescribeCheckConfigDetailRequest: DescribeCheckConfigDetailRequest,
    VulList: VulList,
    DescribeLeakDetectionListResponse: DescribeLeakDetectionListResponse,
    DescribeAssetDetailListResponse: DescribeAssetDetailListResponse,
    DataEvent: DataEvent,
    DescribeSocCheckItemListRequest: DescribeSocCheckItemListRequest,
    CheckConfigDetail: CheckConfigDetail,
    DescribeSocCheckItemListRspRsp: DescribeSocCheckItemListRspRsp,
    SaEventPubResponse: SaEventPubResponse,
    DescribeEventDetailRequest: DescribeEventDetailRequest,
    CheckAssetItem: CheckAssetItem,
    AssetTypeStatistic: AssetTypeStatistic,
    DescribeSocCheckResultListRspRsp: DescribeSocCheckResultListRspRsp,
    DescribeVulDetailRequest: DescribeVulDetailRequest,
    ConcernInfo: ConcernInfo,
    DescribeAssetsMappingListRequest: DescribeAssetsMappingListRequest,
    DataCompliance: DataCompliance,
    Results: Results,
    ListDataSaEventPub: ListDataSaEventPub,
    AssetDetail: AssetDetail,
    DescribeComplianceAssetListRequest: DescribeComplianceAssetListRequest,
    ObjDataSaEventPub: ObjDataSaEventPub,
    DescribeAssetDetailResponse: DescribeAssetDetailResponse,
    DescribeAssetDetailListRequest: DescribeAssetDetailListRequest,
    DescribeSocCspmComplianceRequest: DescribeSocCspmComplianceRequest,
    AlertDetail: AlertDetail,
    DescribeComplianceDetailRequest: DescribeComplianceDetailRequest,

}
