"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * cdc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cdc.tencentcloudapi.com", "2020-12-14", clientConfig);
    }
    /**
     * 修改机房设备信息
     */
    async ModifySiteDeviceInfo(req, cb) {
        return this.request("ModifySiteDeviceInfo", req, cb);
    }
    /**
     * 创建专用集群订单
     */
    async CreateDedicatedClusterOrder(req, cb) {
        return this.request("CreateDedicatedClusterOrder", req, cb);
    }
    /**
     * 删除专用集群
     */
    async DeleteDedicatedClusters(req, cb) {
        return this.request("DeleteDedicatedClusters", req, cb);
    }
    /**
     * 修改机房信息
     */
    async ModifySiteInfo(req, cb) {
        return this.request("ModifySiteInfo", req, cb);
    }
    /**
     * 查询专用集群内宿主机的统计信息
     */
    async DescribeDedicatedClusterHostStatistics(req, cb) {
        return this.request("DescribeDedicatedClusterHostStatistics", req, cb);
    }
    /**
     * 修改本地专用集群信息
     */
    async ModifyDedicatedClusterInfo(req, cb) {
        return this.request("ModifyDedicatedClusterInfo", req, cb);
    }
    /**
     * 查询站点列表
     */
    async DescribeSites(req, cb) {
        return this.request("DescribeSites", req, cb);
    }
    /**
     * 查询专用集群订单列表
     */
    async DescribeDedicatedClusterOrders(req, cb) {
        return this.request("DescribeDedicatedClusterOrders", req, cb);
    }
    /**
     * 修改大订单、小订单的状态
     */
    async ModifyOrderStatus(req, cb) {
        return this.request("ModifyOrderStatus", req, cb);
    }
    /**
     * 创建专用集群
     */
    async CreateDedicatedCluster(req, cb) {
        return this.request("CreateDedicatedCluster", req, cb);
    }
    /**
     * 查询专用集群列表
     */
    async DescribeDedicatedClusters(req, cb) {
        return this.request("DescribeDedicatedClusters", req, cb);
    }
    /**
     * 查询专用集群宿主机信息
     */
    async DescribeDedicatedClusterHosts(req, cb) {
        return this.request("DescribeDedicatedClusterHosts", req, cb);
    }
    /**
     * 查询专用集群支持的可用区列表
     */
    async DescribeDedicatedSupportedZones(req, cb) {
        return this.request("DescribeDedicatedSupportedZones", req, cb);
    }
    /**
     * 查询本地专用集群云硬盘仓库信息
     */
    async DescribeDedicatedClusterCbsStatistics(req, cb) {
        return this.request("DescribeDedicatedClusterCbsStatistics", req, cb);
    }
    /**
     * 查询专用集群概览信息
     */
    async DescribeDedicatedClusterOverview(req, cb) {
        return this.request("DescribeDedicatedClusterOverview", req, cb);
    }
    /**
     * 删除站点
     */
    async DeleteSites(req, cb) {
        return this.request("DeleteSites", req, cb);
    }
    /**
     * 查询站点详情
     */
    async DescribeSitesDetail(req, cb) {
        return this.request("DescribeSitesDetail", req, cb);
    }
    /**
     * 查询专用集群内cos的容量信息
     */
    async DescribeDedicatedClusterCosCapacity(req, cb) {
        return this.request("DescribeDedicatedClusterCosCapacity", req, cb);
    }
    /**
     * 查询专用集群支持的实例规格列表
     */
    async DescribeDedicatedClusterInstanceTypes(req, cb) {
        return this.request("DescribeDedicatedClusterInstanceTypes", req, cb);
    }
    /**
     * 查询专有集群配置列表
     */
    async DescribeDedicatedClusterTypes(req, cb) {
        return this.request("DescribeDedicatedClusterTypes", req, cb);
    }
    /**
     * 创建站点
     */
    async CreateSite(req, cb) {
        return this.request("CreateSite", req, cb);
    }
}
exports.Client = Client;
