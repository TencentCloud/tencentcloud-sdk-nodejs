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
const NacosReplica = models.NacosReplica;
const DescribeNacosReplicasRequest = models.DescribeNacosReplicasRequest;
const UpdateEngineInternetAccessRequest = models.UpdateEngineInternetAccessRequest;
const ApolloEnvParam = models.ApolloEnvParam;
const UpdateEngineInternetAccessResponse = models.UpdateEngineInternetAccessResponse;
const KVPair = models.KVPair;
const DeleteEngineResponse = models.DeleteEngineResponse;
const CreateEngineResponse = models.CreateEngineResponse;
const DescribeZookeeperReplicasRequest = models.DescribeZookeeperReplicasRequest;
const DeleteEngineRequest = models.DeleteEngineRequest;
const DescribeCloudNativeAPIGatewayNodesRequest = models.DescribeCloudNativeAPIGatewayNodesRequest;
const DescribeCloudNativeAPIGatewayNodesResult = models.DescribeCloudNativeAPIGatewayNodesResult;
const ZookeeperReplica = models.ZookeeperReplica;
const DescribeNacosServerInterfacesRequest = models.DescribeNacosServerInterfacesRequest;
const SREInstance = models.SREInstance;
const DescribeSREInstanceAccessAddressResponse = models.DescribeSREInstanceAccessAddressResponse;
const DescribeSREInstancesResponse = models.DescribeSREInstancesResponse;
const ZookeeperServerInterface = models.ZookeeperServerInterface;
const ServiceGovernanceInfo = models.ServiceGovernanceInfo;
const CloudNativeAPIGatewayNode = models.CloudNativeAPIGatewayNode;
const DescribeNacosReplicasResponse = models.DescribeNacosReplicasResponse;
const DescribeZookeeperServerInterfacesResponse = models.DescribeZookeeperServerInterfacesResponse;
const BoundK8SInfo = models.BoundK8SInfo;
const DescribeSREInstancesRequest = models.DescribeSREInstancesRequest;
const DescribeCloudNativeAPIGatewayNodesResponse = models.DescribeCloudNativeAPIGatewayNodesResponse;
const DescribeZookeeperReplicasResponse = models.DescribeZookeeperReplicasResponse;
const VpcInfo = models.VpcInfo;
const EngineAdmin = models.EngineAdmin;
const PolarisLimiterAddress = models.PolarisLimiterAddress;
const CreateEngineRequest = models.CreateEngineRequest;
const DescribeInstanceRegionInfo = models.DescribeInstanceRegionInfo;
const DescribeSREInstanceAccessAddressRequest = models.DescribeSREInstanceAccessAddressRequest;
const DescribeNacosServerInterfacesResponse = models.DescribeNacosServerInterfacesResponse;
const Filter = models.Filter;
const NacosServerInterface = models.NacosServerInterface;
const DescribeZookeeperServerInterfacesRequest = models.DescribeZookeeperServerInterfacesRequest;
const EnvInfo = models.EnvInfo;
const EnvAddressInfo = models.EnvAddressInfo;
const InstanceTagInfo = models.InstanceTagInfo;


/**
 * tse client
 * @class
 */
class TseClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tse.tencentcloudapi.com", "2020-12-07", credential, region, profile);
    }
    
    /**
     * 查询Zookeeper类型注册引擎实例副本信息
     * @param {DescribeZookeeperReplicasRequest} req
     * @param {function(string, DescribeZookeeperReplicasResponse):void} cb
     * @public
     */
    DescribeZookeeperReplicas(req, cb) {
        let resp = new DescribeZookeeperReplicasResponse();
        this.request("DescribeZookeeperReplicas", req, resp, cb);
    }

    /**
     * 删除引擎实例
     * @param {DeleteEngineRequest} req
     * @param {function(string, DeleteEngineResponse):void} cb
     * @public
     */
    DeleteEngine(req, cb) {
        let resp = new DeleteEngineResponse();
        this.request("DeleteEngine", req, resp, cb);
    }

    /**
     * 用于查询引擎实例列表
     * @param {DescribeSREInstancesRequest} req
     * @param {function(string, DescribeSREInstancesResponse):void} cb
     * @public
     */
    DescribeSREInstances(req, cb) {
        let resp = new DescribeSREInstancesResponse();
        this.request("DescribeSREInstances", req, resp, cb);
    }

    /**
     * 查询Nacos类型引擎实例副本信息
     * @param {DescribeNacosReplicasRequest} req
     * @param {function(string, DescribeNacosReplicasResponse):void} cb
     * @public
     */
    DescribeNacosReplicas(req, cb) {
        let resp = new DescribeNacosReplicasResponse();
        this.request("DescribeNacosReplicas", req, resp, cb);
    }

    /**
     * 获取云原生网关节点列表
     * @param {DescribeCloudNativeAPIGatewayNodesRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayNodesResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayNodes(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayNodesResponse();
        this.request("DescribeCloudNativeAPIGatewayNodes", req, resp, cb);
    }

    /**
     * 查询zookeeper服务接口列表
     * @param {DescribeZookeeperServerInterfacesRequest} req
     * @param {function(string, DescribeZookeeperServerInterfacesResponse):void} cb
     * @public
     */
    DescribeZookeeperServerInterfaces(req, cb) {
        let resp = new DescribeZookeeperServerInterfacesResponse();
        this.request("DescribeZookeeperServerInterfaces", req, resp, cb);
    }

    /**
     * 修改引擎公网访问配置
     * @param {UpdateEngineInternetAccessRequest} req
     * @param {function(string, UpdateEngineInternetAccessResponse):void} cb
     * @public
     */
    UpdateEngineInternetAccess(req, cb) {
        let resp = new UpdateEngineInternetAccessResponse();
        this.request("UpdateEngineInternetAccess", req, resp, cb);
    }

    /**
     * 创建引擎实例
     * @param {CreateEngineRequest} req
     * @param {function(string, CreateEngineResponse):void} cb
     * @public
     */
    CreateEngine(req, cb) {
        let resp = new CreateEngineResponse();
        this.request("CreateEngine", req, resp, cb);
    }

    /**
     * 查询nacos服务接口列表
     * @param {DescribeNacosServerInterfacesRequest} req
     * @param {function(string, DescribeNacosServerInterfacesResponse):void} cb
     * @public
     */
    DescribeNacosServerInterfaces(req, cb) {
        let resp = new DescribeNacosServerInterfacesResponse();
        this.request("DescribeNacosServerInterfaces", req, resp, cb);
    }

    /**
     * 查询引擎实例访问地址
     * @param {DescribeSREInstanceAccessAddressRequest} req
     * @param {function(string, DescribeSREInstanceAccessAddressResponse):void} cb
     * @public
     */
    DescribeSREInstanceAccessAddress(req, cb) {
        let resp = new DescribeSREInstanceAccessAddressResponse();
        this.request("DescribeSREInstanceAccessAddress", req, resp, cb);
    }


}
module.exports = TseClient;
