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
 * bmeip client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("bmeip.tencentcloudapi.com", "2018-06-25", clientConfig);
    }
    /**
     * 解绑黑石EIP
     */
    async UnbindRs(req, cb) {
        return this.request("UnbindRs", req, cb);
    }
    /**
     * BindHosted接口用于绑定黑石弹性公网IP到黑石托管机器上
     */
    async BindHosted(req, cb) {
        return this.request("BindHosted", req, cb);
    }
    /**
     * 创建黑石弹性公网 EIP ACL
     */
    async CreateEipAcl(req, cb) {
        return this.request("CreateEipAcl", req, cb);
    }
    /**
     * 创建黑石弹性公网IP
     */
    async CreateEip(req, cb) {
        return this.request("CreateEip", req, cb);
    }
    /**
     * 修改弹性公网IP ACL
     */
    async ModifyEipAcl(req, cb) {
        return this.request("ModifyEipAcl", req, cb);
    }
    /**
     * 查询黑石EIP 限额
     */
    async DescribeEipQuota(req, cb) {
        return this.request("DescribeEipQuota", req, cb);
    }
    /**
     * 绑定黑石EIP
     */
    async BindRs(req, cb) {
        return this.request("BindRs", req, cb);
    }
    /**
     * 黑石EIP查询任务状态
     */
    async DescribeEipTask(req, cb) {
        return this.request("DescribeEipTask", req, cb);
    }
    /**
     * UnbindHosted接口用于解绑托管机器上的EIP
     */
    async UnbindHosted(req, cb) {
        return this.request("UnbindHosted", req, cb);
    }
    /**
     * 黑石EIP解绑VPCIP
     */
    async UnbindVpcIp(req, cb) {
        return this.request("UnbindVpcIp", req, cb);
    }
    /**
     * 释放黑石弹性公网IP
     */
    async DeleteEip(req, cb) {
        return this.request("DeleteEip", req, cb);
    }
    /**
     * 黑石EIP修改计费方式
     */
    async ModifyEipCharge(req, cb) {
        return this.request("ModifyEipCharge", req, cb);
    }
    /**
     * 更新黑石EIP名称
     */
    async ModifyEipName(req, cb) {
        return this.request("ModifyEipName", req, cb);
    }
    /**
     * 此接口用于为某个 EIP 关联 ACL。
     */
    async BindEipAcls(req, cb) {
        return this.request("BindEipAcls", req, cb);
    }
    /**
     * 删除弹性公网IP ACL
     */
    async DeleteEipAcl(req, cb) {
        return this.request("DeleteEipAcl", req, cb);
    }
    /**
     * 解绑弹性公网IP ACL
     */
    async UnbindEipAcls(req, cb) {
        return this.request("UnbindEipAcls", req, cb);
    }
    /**
     * 黑石EIP查询接口
     */
    async DescribeEips(req, cb) {
        return this.request("DescribeEips", req, cb);
    }
    /**
     * 黑石EIP绑定VPC IP
     */
    async BindVpcIp(req, cb) {
        return this.request("BindVpcIp", req, cb);
    }
    /**
     * 批量解绑物理机弹性公网IP接口
     */
    async UnbindRsList(req, cb) {
        return this.request("UnbindRsList", req, cb);
    }
    /**
     * 查询弹性公网IP ACL
     */
    async DescribeEipAcls(req, cb) {
        return this.request("DescribeEipAcls", req, cb);
    }
}
exports.Client = Client;
