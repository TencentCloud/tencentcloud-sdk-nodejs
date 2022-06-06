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
const Service = models.Service;
const MeshConfig = models.MeshConfig;
const LoadBalancerStatus = models.LoadBalancerStatus;
const DescribeMeshResponse = models.DescribeMeshResponse;
const AutoInjectionNamespaceState = models.AutoInjectionNamespaceState;
const IngressGatewayStatus = models.IngressGatewayStatus;
const ResourceMetricSource = models.ResourceMetricSource;
const DescribeMeshListRequest = models.DescribeMeshListRequest;
const ClusterConfig = models.ClusterConfig;
const MetricSpec = models.MetricSpec;
const WorkloadConfig = models.WorkloadConfig;
const EgressGateway = models.EgressGateway;
const Mesh = models.Mesh;
const GrafanaInfo = models.GrafanaInfo;
const MeshStatus = models.MeshStatus;
const IstiodConfig = models.IstiodConfig;
const InjectConfig = models.InjectConfig;
const PodsMetricSource = models.PodsMetricSource;
const Resource = models.Resource;
const DeployConfig = models.DeployConfig;
const DescribeMeshRequest = models.DescribeMeshRequest;
const ActiveOperation = models.ActiveOperation;
const PrometheusStatus = models.PrometheusStatus;
const Filter = models.Filter;
const PrometheusConfig = models.PrometheusConfig;
const IstioConfig = models.IstioConfig;
const CLS = models.CLS;
const TracingConfig = models.TracingConfig;
const IngressGateway = models.IngressGateway;
const SelectedItems = models.SelectedItems;
const Cluster = models.Cluster;
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
     * 查询网格详情
     * @param {DescribeMeshRequest} req
     * @param {function(string, DescribeMeshResponse):void} cb
     * @public
     */
    DescribeMesh(req, cb) {
        let resp = new DescribeMeshResponse();
        this.request("DescribeMesh", req, resp, cb);
    }


}
module.exports = TcmClient;
