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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const WebNodeTypeInfo = models.WebNodeTypeInfo;
const InstanceLog = models.InstanceLog;
const LocalDiskInfo = models.LocalDiskInfo;
const IndexPolicyField = models.IndexPolicyField;
const NodeInfo = models.NodeInfo;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const UpdateJdkRequest = models.UpdateJdkRequest;
const DescribeIndexMetaResponse = models.DescribeIndexMetaResponse;
const UpdateInstanceResponse = models.UpdateInstanceResponse;
const DescribeInstanceOperationsRequest = models.DescribeInstanceOperationsRequest;
const CreateIndexResponse = models.CreateIndexResponse;
const OperationDetail = models.OperationDetail;
const DiagnoseInstanceResponse = models.DiagnoseInstanceResponse;
const KibanaView = models.KibanaView;
const EsPublicAcl = models.EsPublicAcl;
const BackingIndexMetaField = models.BackingIndexMetaField;
const DictInfo = models.DictInfo;
const RestartInstanceResponse = models.RestartInstanceResponse;
const RestartKibanaRequest = models.RestartKibanaRequest;
const CreateInstanceResponse = models.CreateInstanceResponse;
const IndexSettingsField = models.IndexSettingsField;
const DescribeInstanceLogsRequest = models.DescribeInstanceLogsRequest;
const UpdateDictionariesRequest = models.UpdateDictionariesRequest;
const ZoneDetail = models.ZoneDetail;
const UpdateRequestTargetNodeTypesRequest = models.UpdateRequestTargetNodeTypesRequest;
const NodeView = models.NodeView;
const DescribeIndexListRequest = models.DescribeIndexListRequest;
const CosBackup = models.CosBackup;
const TagInfo = models.TagInfo;
const KeyValue = models.KeyValue;
const CreateInstanceRequest = models.CreateInstanceRequest;
const UpdateDictionariesResponse = models.UpdateDictionariesResponse;
const InstanceInfo = models.InstanceInfo;
const DeleteInstanceResponse = models.DeleteInstanceResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeInstanceLogsResponse = models.DescribeInstanceLogsResponse;
const IndexMetaField = models.IndexMetaField;
const UpdatePluginsResponse = models.UpdatePluginsResponse;
const DiagnoseInstanceRequest = models.DiagnoseInstanceRequest;
const RestartInstanceRequest = models.RestartInstanceRequest;
const RestartKibanaResponse = models.RestartKibanaResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const CreateIndexRequest = models.CreateIndexRequest;
const ClusterView = models.ClusterView;
const UpdateInstanceRequest = models.UpdateInstanceRequest;
const EsDictionaryInfo = models.EsDictionaryInfo;
const DescribeInstanceOperationsResponse = models.DescribeInstanceOperationsResponse;
const RestartNodesRequest = models.RestartNodesRequest;
const UpdatePluginsRequest = models.UpdatePluginsRequest;
const GetRequestTargetNodeTypesRequest = models.GetRequestTargetNodeTypesRequest;
const KibanaNodeInfo = models.KibanaNodeInfo;
const UpdateDiagnoseSettingsResponse = models.UpdateDiagnoseSettingsResponse;
const UpgradeLicenseResponse = models.UpgradeLicenseResponse;
const EsAcl = models.EsAcl;
const UpdateIndexRequest = models.UpdateIndexRequest;
const MasterNodeInfo = models.MasterNodeInfo;
const IndexOptionsField = models.IndexOptionsField;
const TaskDetail = models.TaskDetail;
const DeleteInstanceRequest = models.DeleteInstanceRequest;
const DescribeViewsResponse = models.DescribeViewsResponse;
const UpdateJdkResponse = models.UpdateJdkResponse;
const RestartNodesResponse = models.RestartNodesResponse;
const SubTaskDetail = models.SubTaskDetail;
const DescribeIndexMetaRequest = models.DescribeIndexMetaRequest;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const DeleteIndexResponse = models.DeleteIndexResponse;
const DeleteIndexRequest = models.DeleteIndexRequest;
const EsConfigSetInfo = models.EsConfigSetInfo;
const DescribeViewsRequest = models.DescribeViewsRequest;
const GetRequestTargetNodeTypesResponse = models.GetRequestTargetNodeTypesResponse;
const UpdateDiagnoseSettingsRequest = models.UpdateDiagnoseSettingsRequest;
const DescribeIndexListResponse = models.DescribeIndexListResponse;
const Operation = models.Operation;
const UpdateIndexResponse = models.UpdateIndexResponse;
const UpgradeLicenseRequest = models.UpgradeLicenseRequest;
const UpdateRequestTargetNodeTypesResponse = models.UpdateRequestTargetNodeTypesResponse;


/**
 * es client
 * @class
 */
class EsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("es.tencentcloudapi.com", "2018-04-16", credential, region, profile);
    }
    
    /**
     * 智能运维诊断集群
     * @param {DiagnoseInstanceRequest} req
     * @param {function(string, DiagnoseInstanceResponse):void} cb
     * @public
     */
    DiagnoseInstance(req, cb) {
        let resp = new DiagnoseInstanceResponse();
        this.request("DiagnoseInstance", req, resp, cb);
    }

    /**
     * 获取接收客户端请求的节点类型
     * @param {GetRequestTargetNodeTypesRequest} req
     * @param {function(string, GetRequestTargetNodeTypesResponse):void} cb
     * @public
     */
    GetRequestTargetNodeTypes(req, cb) {
        let resp = new GetRequestTargetNodeTypesResponse();
        this.request("GetRequestTargetNodeTypes", req, resp, cb);
    }

    /**
     * 获取索引列表
     * @param {DescribeIndexListRequest} req
     * @param {function(string, DescribeIndexListResponse):void} cb
     * @public
     */
    DescribeIndexList(req, cb) {
        let resp = new DescribeIndexListResponse();
        this.request("DescribeIndexList", req, resp, cb);
    }

    /**
     * 销毁集群实例 
     * @param {DeleteInstanceRequest} req
     * @param {function(string, DeleteInstanceResponse):void} cb
     * @public
     */
    DeleteInstance(req, cb) {
        let resp = new DeleteInstanceResponse();
        this.request("DeleteInstance", req, resp, cb);
    }

    /**
     * 创建索引
     * @param {CreateIndexRequest} req
     * @param {function(string, CreateIndexResponse):void} cb
     * @public
     */
    CreateIndex(req, cb) {
        let resp = new CreateIndexResponse();
        this.request("CreateIndex", req, resp, cb);
    }

    /**
     * 更新智能运维配置
     * @param {UpdateDiagnoseSettingsRequest} req
     * @param {function(string, UpdateDiagnoseSettingsResponse):void} cb
     * @public
     */
    UpdateDiagnoseSettings(req, cb) {
        let resp = new UpdateDiagnoseSettingsResponse();
        this.request("UpdateDiagnoseSettings", req, resp, cb);
    }

    /**
     * 查询用户该地域下符合条件的所有实例
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 变更插件列表
     * @param {UpdatePluginsRequest} req
     * @param {function(string, UpdatePluginsResponse):void} cb
     * @public
     */
    UpdatePlugins(req, cb) {
        let resp = new UpdatePluginsResponse();
        this.request("UpdatePlugins", req, resp, cb);
    }

    /**
     * 更新实例Jdk配置
     * @param {UpdateJdkRequest} req
     * @param {function(string, UpdateJdkResponse):void} cb
     * @public
     */
    UpdateJdk(req, cb) {
        let resp = new UpdateJdkResponse();
        this.request("UpdateJdk", req, resp, cb);
    }

    /**
     * 对集群进行节点规格变更，修改实例名称，修改配置，重置密码， 添加Kibana黑白名单等操作。参数中InstanceId为必传参数，ForceRestart为选填参数，剩余参数传递组合及含义如下：
- InstanceName：修改实例名称(仅用于标识实例)
- NodeInfoList: 修改节点配置（节点横向扩缩容，纵向扩缩容，增加主节点，增加冷节点等）
- EsConfig：修改集群配置
- Password：修改默认用户elastic的密码
- EsAcl：修改访问控制列表
- CosBackUp: 设置集群COS自动备份信息
以上参数组合只能传递一种，多传或少传均会导致请求失败
     * @param {UpdateInstanceRequest} req
     * @param {function(string, UpdateInstanceResponse):void} cb
     * @public
     */
    UpdateInstance(req, cb) {
        let resp = new UpdateInstanceResponse();
        this.request("UpdateInstance", req, resp, cb);
    }

    /**
     * 重启ES集群实例(用于系统版本更新等操作) 
     * @param {RestartInstanceRequest} req
     * @param {function(string, RestartInstanceResponse):void} cb
     * @public
     */
    RestartInstance(req, cb) {
        let resp = new RestartInstanceResponse();
        this.request("RestartInstance", req, resp, cb);
    }

    /**
     * 查询用户该地域下符合条件的ES集群的日志
     * @param {DescribeInstanceLogsRequest} req
     * @param {function(string, DescribeInstanceLogsResponse):void} cb
     * @public
     */
    DescribeInstanceLogs(req, cb) {
        let resp = new DescribeInstanceLogsResponse();
        this.request("DescribeInstanceLogs", req, resp, cb);
    }

    /**
     * 重启Kibana 
     * @param {RestartKibanaRequest} req
     * @param {function(string, RestartKibanaResponse):void} cb
     * @public
     */
    RestartKibana(req, cb) {
        let resp = new RestartKibanaResponse();
        this.request("RestartKibana", req, resp, cb);
    }

    /**
     * 更新ES集群词典
     * @param {UpdateDictionariesRequest} req
     * @param {function(string, UpdateDictionariesResponse):void} cb
     * @public
     */
    UpdateDictionaries(req, cb) {
        let resp = new UpdateDictionariesResponse();
        this.request("UpdateDictionaries", req, resp, cb);
    }

    /**
     * 更新接收客户端请求的节点类型
     * @param {UpdateRequestTargetNodeTypesRequest} req
     * @param {function(string, UpdateRequestTargetNodeTypesResponse):void} cb
     * @public
     */
    UpdateRequestTargetNodeTypes(req, cb) {
        let resp = new UpdateRequestTargetNodeTypesResponse();
        this.request("UpdateRequestTargetNodeTypes", req, resp, cb);
    }

    /**
     * 查询实例指定条件下的操作记录
     * @param {DescribeInstanceOperationsRequest} req
     * @param {function(string, DescribeInstanceOperationsResponse):void} cb
     * @public
     */
    DescribeInstanceOperations(req, cb) {
        let resp = new DescribeInstanceOperationsResponse();
        this.request("DescribeInstanceOperations", req, resp, cb);
    }

    /**
     * 查询集群各视图数据，包括集群维度、节点维度、Kibana维度
     * @param {DescribeViewsRequest} req
     * @param {function(string, DescribeViewsResponse):void} cb
     * @public
     */
    DescribeViews(req, cb) {
        let resp = new DescribeViewsResponse();
        this.request("DescribeViews", req, resp, cb);
    }

    /**
     * 创建指定规格的ES集群实例
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        let resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }

    /**
     * 更新索引
     * @param {UpdateIndexRequest} req
     * @param {function(string, UpdateIndexResponse):void} cb
     * @public
     */
    UpdateIndex(req, cb) {
        let resp = new UpdateIndexResponse();
        this.request("UpdateIndex", req, resp, cb);
    }

    /**
     * 用于重启集群节点
     * @param {RestartNodesRequest} req
     * @param {function(string, RestartNodesResponse):void} cb
     * @public
     */
    RestartNodes(req, cb) {
        let resp = new RestartNodesResponse();
        this.request("RestartNodes", req, resp, cb);
    }

    /**
     * 删除索引
     * @param {DeleteIndexRequest} req
     * @param {function(string, DeleteIndexResponse):void} cb
     * @public
     */
    DeleteIndex(req, cb) {
        let resp = new DeleteIndexResponse();
        this.request("DeleteIndex", req, resp, cb);
    }

    /**
     * 升级ES集群版本
     * @param {UpgradeInstanceRequest} req
     * @param {function(string, UpgradeInstanceResponse):void} cb
     * @public
     */
    UpgradeInstance(req, cb) {
        let resp = new UpgradeInstanceResponse();
        this.request("UpgradeInstance", req, resp, cb);
    }

    /**
     * 升级ES商业特性
     * @param {UpgradeLicenseRequest} req
     * @param {function(string, UpgradeLicenseResponse):void} cb
     * @public
     */
    UpgradeLicense(req, cb) {
        let resp = new UpgradeLicenseResponse();
        this.request("UpgradeLicense", req, resp, cb);
    }

    /**
     * 获取索引元数据
     * @param {DescribeIndexMetaRequest} req
     * @param {function(string, DescribeIndexMetaResponse):void} cb
     * @public
     */
    DescribeIndexMeta(req, cb) {
        let resp = new DescribeIndexMetaResponse();
        this.request("DescribeIndexMeta", req, resp, cb);
    }


}
module.exports = EsClient;
