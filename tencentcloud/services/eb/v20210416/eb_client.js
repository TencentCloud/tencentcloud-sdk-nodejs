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
 * eb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("eb.tencentcloudapi.com", "2021-04-16", clientConfig);
    }
    /**
     * 删除事件集
     */
    async DeleteEventBus(req, cb) {
        return this.request("DeleteEventBus", req, cb);
    }
    /**
     * 用于创建转换器
     */
    async CreateTransformation(req, cb) {
        return this.request("CreateTransformation", req, cb);
    }
    /**
     * 用于创建事件集
     */
    async CreateEventBus(req, cb) {
        return this.request("CreateEventBus", req, cb);
    }
    /**
     * 创建事件规则
     */
    async CreateRule(req, cb) {
        return this.request("CreateRule", req, cb);
    }
    /**
     * 删除事件目标
     */
    async DeleteTarget(req, cb) {
        return this.request("DeleteTarget", req, cb);
    }
    /**
     * 获取事件目标列表
     */
    async ListTargets(req, cb) {
        return this.request("ListTargets", req, cb);
    }
    /**
     * 检验规则
     */
    async CheckRule(req, cb) {
        return this.request("CheckRule", req, cb);
    }
    /**
     * （已废弃）用于Event事件投递
     */
    async PublishEvent(req, cb) {
        return this.request("PublishEvent", req, cb);
    }
    /**
     * 用于Event事件投递
     */
    async PutEvents(req, cb) {
        return this.request("PutEvents", req, cb);
    }
    /**
     * 更新事件目标
     */
    async UpdateTarget(req, cb) {
        return this.request("UpdateTarget", req, cb);
    }
    /**
     * 用于获取转换器详情
     */
    async GetTransformation(req, cb) {
        return this.request("GetTransformation", req, cb);
    }
    /**
     * 获取事件规则列表
     */
    async ListRules(req, cb) {
        return this.request("ListRules", req, cb);
    }
    /**
     * 删除事件规则
     */
    async DeleteRule(req, cb) {
        return this.request("DeleteRule", req, cb);
    }
    /**
     * 更新事件集
     */
    async UpdateEventBus(req, cb) {
        return this.request("UpdateEventBus", req, cb);
    }
    /**
     * 创建事件目标
     */
    async CreateTarget(req, cb) {
        return this.request("CreateTarget", req, cb);
    }
    /**
     * 更新事件规则
     */
    async UpdateRule(req, cb) {
        return this.request("UpdateRule", req, cb);
    }
    /**
     * 用于删除转换器
     */
    async DeleteTransformation(req, cb) {
        return this.request("DeleteTransformation", req, cb);
    }
    /**
     * 创建事件连接器
     */
    async CreateConnection(req, cb) {
        return this.request("CreateConnection", req, cb);
    }
    /**
     * 获取事件规则详情
     */
    async GetRule(req, cb) {
        return this.request("GetRule", req, cb);
    }
    /**
     * 删除事件连接器
     */
    async DeleteConnection(req, cb) {
        return this.request("DeleteConnection", req, cb);
    }
    /**
     * 获取事件集列表
     */
    async ListEventBuses(req, cb) {
        return this.request("ListEventBuses", req, cb);
    }
    /**
     * 获取事件集详情
     */
    async GetEventBus(req, cb) {
        return this.request("GetEventBus", req, cb);
    }
    /**
     * 用于更新转换器
     */
    async UpdateTransformation(req, cb) {
        return this.request("UpdateTransformation", req, cb);
    }
    /**
     * 用于在ETL配置页面, 测试规则和数据.
     */
    async CheckTransformation(req, cb) {
        return this.request("CheckTransformation", req, cb);
    }
    /**
     * 获取事件连接器列表
     */
    async ListConnections(req, cb) {
        return this.request("ListConnections", req, cb);
    }
    /**
     * 更新事件连接器
     */
    async UpdateConnection(req, cb) {
        return this.request("UpdateConnection", req, cb);
    }
}
exports.Client = Client;
