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
 * cdwch client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cdwch.tencentcloudapi.com", "2020-09-15", clientConfig);
    }
    /**
     * 创建或者修改备份策略
     */
    async CreateBackUpSchedule(req, cb) {
        return this.request("CreateBackUpSchedule", req, cb);
    }
    /**
     * 查询集群用户、集群表，数据库等相关信息
     */
    async DescribeCkSqlApis(req, cb) {
        return this.request("DescribeCkSqlApis", req, cb);
    }
    /**
     * 新增和修改用户接口
     */
    async ActionAlterCkUser(req, cb) {
        return this.request("ActionAlterCkUser", req, cb);
    }
    /**
     * 开启或者关闭策略
     */
    async OpenBackUp(req, cb) {
        return this.request("OpenBackUp", req, cb);
    }
    /**
     * 在集群配置页面修改集群配置文件接口，xml模式
     */
    async ModifyClusterConfigs(req, cb) {
        return this.request("ModifyClusterConfigs", req, cb);
    }
    /**
     * 购买页拉取集群的数据节点和zookeeper节点的规格列表
     */
    async DescribeSpec(req, cb) {
        return this.request("DescribeSpec", req, cb);
    }
    /**
     * 针对ck账号的权限做管控（新版）
     */
    async ModifyUserNewPrivilege(req, cb) {
        return this.request("ModifyUserNewPrivilege", req, cb);
    }
    /**
     * 获取实例shard信息列表
     */
    async DescribeInstanceShards(req, cb) {
        return this.request("DescribeInstanceShards", req, cb);
    }
}
exports.Client = Client;
