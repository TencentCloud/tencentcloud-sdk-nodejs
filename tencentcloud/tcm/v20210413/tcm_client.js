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
const HorizontalPodAutoscalerSpec = models.HorizontalPodAutoscalerSpec;
const CustomPromConfig = models.CustomPromConfig;
const Service = models.Service;
const MeshConfig = models.MeshConfig;
const UnlinkPrometheusResponse = models.UnlinkPrometheusResponse;
const LoadBalancerStatus = models.LoadBalancerStatus;
const ModifyTracingConfigResponse = models.ModifyTracingConfigResponse;
const PodsMetricSource = models.PodsMetricSource;
const DescribeMeshResponse = models.DescribeMeshResponse;
const ModifyAccessLogConfigRequest = models.ModifyAccessLogConfigRequest;
const AutoInjectionNamespaceState = models.AutoInjectionNamespaceState;
const UnlinkClusterResponse = models.UnlinkClusterResponse;
const LinkClusterListResponse = models.LinkClusterListResponse;
const ModifyAccessLogConfigResponse = models.ModifyAccessLogConfigResponse;
const IngressGatewayStatus = models.IngressGatewayStatus;
const ResourceMetricSource = models.ResourceMetricSource;
const CreateMeshResponse = models.CreateMeshResponse;
const LinkClusterListRequest = models.LinkClusterListRequest;
const ClusterConfig = models.ClusterConfig;
const UnlinkPrometheusRequest = models.UnlinkPrometheusRequest;
const MetricSpec = models.MetricSpec;
const WorkloadConfig = models.WorkloadConfig;
const EgressGateway = models.EgressGateway;
const DescribeMeshRequest = models.DescribeMeshRequest;
const IstioConfig = models.IstioConfig;
const Mesh = models.Mesh;
const DescribeAccessLogConfigResponse = models.DescribeAccessLogConfigResponse;
const LinkPrometheusRequest = models.LinkPrometheusRequest;
const GrafanaInfo = models.GrafanaInfo;
const DeleteMeshResponse = models.DeleteMeshResponse;
const MeshStatus = models.MeshStatus;
const IstiodConfig = models.IstiodConfig;
const InjectConfig = models.InjectConfig;
const DeleteMeshRequest = models.DeleteMeshRequest;
const LinkPrometheusResponse = models.LinkPrometheusResponse;
const Resource = models.Resource;
const DeployConfig = models.DeployConfig;
const DescribeAccessLogConfigRequest = models.DescribeAccessLogConfigRequest;
const ActiveOperation = models.ActiveOperation;
const CreateMeshRequest = models.CreateMeshRequest;
const PrometheusStatus = models.PrometheusStatus;
const CrossRegionConfig = models.CrossRegionConfig;
const Filter = models.Filter;
const PrometheusConfig = models.PrometheusConfig;
const ExtensiveCluster = models.ExtensiveCluster;
const SmartDNSConfig = models.SmartDNSConfig;
const DescribeMeshListRequest = models.DescribeMeshListRequest;
const ModifyMeshResponse = models.ModifyMeshResponse;
const UnlinkClusterRequest = models.UnlinkClusterRequest;
const CLS = models.CLS;
const TracingConfig = models.TracingConfig;
const IngressGateway = models.IngressGateway;
const EgressGatewayStatus = models.EgressGatewayStatus;
const ExtensiveClusters = models.ExtensiveClusters;
const SelectedItems = models.SelectedItems;
const ModifyTracingConfigRequest = models.ModifyTracingConfigRequest;
const ModifyMeshRequest = models.ModifyMeshRequest;
const Cluster = models.Cluster;
const Tag = models.Tag;
const DescribeMeshListResponse = models.DescribeMeshListResponse;
const TracingZipkin = models.TracingZipkin;
const APM = models.APM;
const ResourceRequirements = models.ResourceRequirements;
const ClusterStatus = models.ClusterStatus;
const SelectedRange = models.SelectedRange;
const AccessLogConfig = models.AccessLogConfig;
const LoadBalancer = models.LoadBalancer;


/**
 * tcm client
 * @class
 */
class TcmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcm.tencentcloudapi.com", "2021-04-13", credential, region, profile);
    }
    
    /**
     * 删除网格
     * @param {DeleteMeshRequest} req
     * @param {function(string, DeleteMeshResponse):void} cb
     * @public
     */
    DeleteMesh(req, cb) {
        let resp = new DeleteMeshResponse();
        this.request("DeleteMesh", req, resp, cb);
    }

    /**
     * 获取AccessLog配置
     * @param {DescribeAccessLogConfigRequest} req
     * @param {function(string, DescribeAccessLogConfigResponse):void} cb
     * @public
     */
    DescribeAccessLogConfig(req, cb) {
        let resp = new DescribeAccessLogConfigResponse();
        this.request("DescribeAccessLogConfig", req, resp, cb);
    }

    /**
     * 关联集群
     * @param {LinkClusterListRequest} req
     * @param {function(string, LinkClusterListResponse):void} cb
     * @public
     */
    LinkClusterList(req, cb) {
        let resp = new LinkClusterListResponse();
        this.request("LinkClusterList", req, resp, cb);
    }

    /**
     * 关联Prometheus
     * @param {LinkPrometheusRequest} req
     * @param {function(string, LinkPrometheusResponse):void} cb
     * @public
     */
    LinkPrometheus(req, cb) {
        let resp = new LinkPrometheusResponse();
        this.request("LinkPrometheus", req, resp, cb);
    }

    /**
     * 查询网格列表
     * @param {DescribeMeshListRequest} req
     * @param {function(string, DescribeMeshListResponse):void} cb
     * @public
     */
    DescribeMeshList(req, cb) {
        let resp = new DescribeMeshListResponse();
        this.request("DescribeMeshList", req, resp, cb);
    }

    /**
     * 修改网格
     * @param {ModifyMeshRequest} req
     * @param {function(string, ModifyMeshResponse):void} cb
     * @public
     */
    ModifyMesh(req, cb) {
        let resp = new ModifyMeshResponse();
        this.request("ModifyMesh", req, resp, cb);
    }

    /**
     * 解关联集群
     * @param {UnlinkClusterRequest} req
     * @param {function(string, UnlinkClusterResponse):void} cb
     * @public
     */
    UnlinkCluster(req, cb) {
        let resp = new UnlinkClusterResponse();
        this.request("UnlinkCluster", req, resp, cb);
    }

    /**
     * 修改 Tracing 配置
     * @param {ModifyTracingConfigRequest} req
     * @param {function(string, ModifyTracingConfigResponse):void} cb
     * @public
     */
    ModifyTracingConfig(req, cb) {
        let resp = new ModifyTracingConfigResponse();
        this.request("ModifyTracingConfig", req, resp, cb);
    }

    /**
     * 修改访问日志配置
     * @param {ModifyAccessLogConfigRequest} req
     * @param {function(string, ModifyAccessLogConfigResponse):void} cb
     * @public
     */
    ModifyAccessLogConfig(req, cb) {
        let resp = new ModifyAccessLogConfigResponse();
        this.request("ModifyAccessLogConfig", req, resp, cb);
    }

    /**
     * 创建网格
     * @param {CreateMeshRequest} req
     * @param {function(string, CreateMeshResponse):void} cb
     * @public
     */
    CreateMesh(req, cb) {
        let resp = new CreateMeshResponse();
        this.request("CreateMesh", req, resp, cb);
    }

    /**
     * 查询网格详情
     * @param {DescribeMeshRequest} req
     * @param {function(string, DescribeMeshResponse):void} cb
     * @public
     */
    DescribeMesh(req, cb) {
        let resp = new DescribeMeshResponse();
        this.request("DescribeMesh", req, resp, cb);
    }

    /**
     * 解除关联Prometheus
     * @param {UnlinkPrometheusRequest} req
     * @param {function(string, UnlinkPrometheusResponse):void} cb
     * @public
     */
    UnlinkPrometheus(req, cb) {
        let resp = new UnlinkPrometheusResponse();
        this.request("UnlinkPrometheus", req, resp, cb);
    }


}
module.exports = TcmClient;
