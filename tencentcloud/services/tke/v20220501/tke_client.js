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
 * tke client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tke.tencentcloudapi.com", "2022-05-01", clientConfig);
    }
    /**
     * 查询 TKE 节点池列表
     */
    async DescribeNodePools(req, cb) {
        return this.request("DescribeNodePools", req, cb);
    }
    /**
     * 更新 TKE 节点池
     */
    async ModifyNodePool(req, cb) {
        return this.request("ModifyNodePool", req, cb);
    }
    /**
     * 重启原生节点实例
     */
    async RebootMachines(req, cb) {
        return this.request("RebootMachines", req, cb);
    }
    /**
     * 删除健康检测策略
     */
    async DeleteHealthCheckPolicy(req, cb) {
        return this.request("DeleteHealthCheckPolicy", req, cb);
    }
    /**
     * 删除 TKE 节点池
     */
    async DeleteNodePool(req, cb) {
        return this.request("DeleteNodePool", req, cb);
    }
    /**
     * 查询健康检测策略
     */
    async DescribeHealthCheckPolicies(req, cb) {
        return this.request("DescribeHealthCheckPolicies", req, cb);
    }
    /**
     * 修改健康检测策略
     */
    async ModifyHealthCheckPolicy(req, cb) {
        return this.request("ModifyHealthCheckPolicy", req, cb);
    }
    /**
     * 本接口 (StopMachines) 用于关闭一个或多个原生节点实例。

只有状态为 Running 的实例才可以进行此操作。
接口调用成功时，实例会进入 Stopping 状态；关闭实例成功时，实例会进入 Stopped 状态。
支持强制关闭。强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
支持批量操作。每次请求批量实例的上限为 100。
本接口为同步接口，关闭实例请求发送成功后会返回一个RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeClusterInstances 接口查询，如果实例的状态为stopped_with_charging，则代表关闭实例操作成功。
     */
    async StopMachines(req, cb) {
        return this.request("StopMachines", req, cb);
    }
    /**
     * 创建 TKE 节点池
     */
    async CreateNodePool(req, cb) {
        return this.request("CreateNodePool", req, cb);
    }
    /**
     * 查询健康检测策略模板
     */
    async DescribeHealthCheckTemplate(req, cb) {
        return this.request("DescribeHealthCheckTemplate", req, cb);
    }
    /**
     * 查询健康检测策略绑定关系
     */
    async DescribeHealthCheckPolicyBindings(req, cb) {
        return this.request("DescribeHealthCheckPolicyBindings", req, cb);
    }
    /**
     * 创建健康检测策略
     */
    async CreateHealthCheckPolicy(req, cb) {
        return this.request("CreateHealthCheckPolicy", req, cb);
    }
    /**
     * 本接口 (StartMachines) 用于启动一个或多个原生节点实例。

只有状态为 Stopped 的实例才可以进行此操作。
接口调用成功后，等待一分钟左右，实例会进入 Running 状态。
支持批量操作。每次请求批量实例的上限为100。
本接口为同步接口，启动实例请求发送成功后会返回一个RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeClusterInstances 接口查询，如果实例的状态为 Running，则代表启动实例操作成功。
     */
    async StartMachines(req, cb) {
        return this.request("StartMachines", req, cb);
    }
    /**
     * 查询集群下节点实例信息
     */
    async DescribeClusterInstances(req, cb) {
        return this.request("DescribeClusterInstances", req, cb);
    }
}
exports.Client = Client;
