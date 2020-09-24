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
const DescribeBlueprintsResponse = models.DescribeBlueprintsResponse;
const DescribeInstancesTrafficPackagesRequest = models.DescribeInstancesTrafficPackagesRequest;
const DeleteFirewallRulesRequest = models.DeleteFirewallRulesRequest;
const LoginSettings = models.LoginSettings;
const InstanceTrafficPackage = models.InstanceTrafficPackage;
const StartInstancesResponse = models.StartInstancesResponse;
const Instance = models.Instance;
const DescribeInstancesTrafficPackagesResponse = models.DescribeInstancesTrafficPackagesResponse;
const TrafficPackage = models.TrafficPackage;
const RebootInstancesResponse = models.RebootInstancesResponse;
const DescribeBundlesRequest = models.DescribeBundlesRequest;
const Blueprint = models.Blueprint;
const Price = models.Price;
const Bundle = models.Bundle;
const StartInstancesRequest = models.StartInstancesRequest;
const DeleteFirewallRulesResponse = models.DeleteFirewallRulesResponse;
const RebootInstancesRequest = models.RebootInstancesRequest;
const DescribeBlueprintsRequest = models.DescribeBlueprintsRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const InstancePrice = models.InstancePrice;
const SystemDisk = models.SystemDisk;
const ResetInstanceRequest = models.ResetInstanceRequest;
const DescribeBundlesResponse = models.DescribeBundlesResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const Filter = models.Filter;
const ResetInstanceResponse = models.ResetInstanceResponse;
const CreateFirewallRulesRequest = models.CreateFirewallRulesRequest;
const DescribeFirewallRulesRequest = models.DescribeFirewallRulesRequest;
const DescribeFirewallRulesResponse = models.DescribeFirewallRulesResponse;
const FirewallRule = models.FirewallRule;
const FirewallRuleInfo = models.FirewallRuleInfo;
const CreateFirewallRulesResponse = models.CreateFirewallRulesResponse;
const StopInstancesResponse = models.StopInstancesResponse;
const InternetAccessible = models.InternetAccessible;
const StopInstancesRequest = models.StopInstancesRequest;


/**
 * lighthouse client
 * @class
 */
class LighthouseClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("lighthouse.tencentcloudapi.com", "2020-03-24", credential, region, profile);
    }
    
    /**
     * 本接口（StopInstances）用于关闭一个或多个实例。
* 只有状态为 RUNNING 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 STOPPING 状态；关闭实例成功时，实例会进入 STOPPED 状态。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     * @param {StopInstancesRequest} req
     * @param {function(string, StopInstancesResponse):void} cb
     * @public
     */
    StopInstances(req, cb) {
        let resp = new StopInstancesResponse();
        this.request("StopInstances", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstances）用于查询一个或多个实例的详细信息。

* 可以根据实例 ID、实例名称或者实例的内网 IP 查询实例的详细信息。
* 过滤信息详细请见过滤器 [Filters](https://cloud.tencent.com/document/product/1207/47576#Filter) 。
* 如果参数为空，返回当前用户一定数量（Limit 所指定的数量，默认为 20）的实例。
* 支持查询实例的最新操作（LatestOperation）以及最新操作状态（LatestOperationState）。
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstancesTrafficPackages）用于查询一个或多个实例的流量包详情。
     * @param {DescribeInstancesTrafficPackagesRequest} req
     * @param {function(string, DescribeInstancesTrafficPackagesResponse):void} cb
     * @public
     */
    DescribeInstancesTrafficPackages(req, cb) {
        let resp = new DescribeInstancesTrafficPackagesResponse();
        this.request("DescribeInstancesTrafficPackages", req, resp, cb);
    }

    /**
     * 本接口（RebootInstances）用于重启实例。

* 只有状态为 RUNNING 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 REBOOTING 状态；重启实例成功时，实例会进入 RUNNING 状态。
* 支持批量操作，每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     * @param {RebootInstancesRequest} req
     * @param {function(string, RebootInstancesResponse):void} cb
     * @public
     */
    RebootInstances(req, cb) {
        let resp = new RebootInstancesResponse();
        this.request("RebootInstances", req, resp, cb);
    }

    /**
     * 本接口（StartInstances）用于启动一个或多个实例。

* 只有状态为 STOPPED 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 STARTING 状态；启动实例成功时，实例会进入 RUNNING 状态。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     * @param {StartInstancesRequest} req
     * @param {function(string, StartInstancesResponse):void} cb
     * @public
     */
    StartInstances(req, cb) {
        let resp = new StartInstancesResponse();
        this.request("StartInstances", req, resp, cb);
    }

    /**
     * 本接口（DeleteFirewallRules）用于删除实例的防火墙规则。

* Protocol 字段支持输入 TCP，UDP，或 ALL。

* Port 字段允许输入 ALL，或者一个单独的端口号，或者用逗号分隔的离散端口号，或者用减号分隔的两个端口号代表的端口范围。当 Port 为范围时，减号分隔的第一个端口号小于第二个端口号。当 Protocol 字段不是 TCP 或 UDP 时，Port 字段只能为空或 ALL。Port 字段长度不得超过 64。
     * @param {DeleteFirewallRulesRequest} req
     * @param {function(string, DeleteFirewallRulesResponse):void} cb
     * @public
     */
    DeleteFirewallRules(req, cb) {
        let resp = new DeleteFirewallRulesResponse();
        this.request("DeleteFirewallRules", req, resp, cb);
    }

    /**
     * 本接口（DescribeBundles）用于查询套餐信息。
     * @param {DescribeBundlesRequest} req
     * @param {function(string, DescribeBundlesResponse):void} cb
     * @public
     */
    DescribeBundles(req, cb) {
        let resp = new DescribeBundlesResponse();
        this.request("DescribeBundles", req, resp, cb);
    }

    /**
     * 本接口（CreateFirewallRules）用于在实例上添加防火墙规则。

* Protocol 字段支持输入 TCP，UDP，或 ALL。

* Port 字段允许输入 ALL，或者一个单独的端口号，或者用逗号分隔的离散端口号，或者用减号分隔的两个端口号代表的端口范围。当 Port 为范围时，减号分隔的第一个端口号小于第二个端口号。当 Protocol 字段不是 TCP 或 UDP 时，Port 字段只能为空或 ALL。Port 字段长度不得超过 64。
     * @param {CreateFirewallRulesRequest} req
     * @param {function(string, CreateFirewallRulesResponse):void} cb
     * @public
     */
    CreateFirewallRules(req, cb) {
        let resp = new CreateFirewallRulesResponse();
        this.request("CreateFirewallRules", req, resp, cb);
    }

    /**
     * 本接口（DescribeBlueprints）用于查询镜像信息。
     * @param {DescribeBlueprintsRequest} req
     * @param {function(string, DescribeBlueprintsResponse):void} cb
     * @public
     */
    DescribeBlueprints(req, cb) {
        let resp = new DescribeBlueprintsResponse();
        this.request("DescribeBlueprints", req, resp, cb);
    }

    /**
     * 本接口（ResetInstance）用于重装指定实例上的镜像。

* 如果指定了 BlueprintId 参数，则使用指定的镜像重装；否则按照当前实例使用的镜像进行重装。
* 系统盘将会被格式化，并重置；请确保系统盘中无重要文件。
* 目前不支持实例使用该接口实现 LINUX_UNIX 和 WINDOWS 操作系统切换。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     * @param {ResetInstanceRequest} req
     * @param {function(string, ResetInstanceResponse):void} cb
     * @public
     */
    ResetInstance(req, cb) {
        let resp = new ResetInstanceResponse();
        this.request("ResetInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeFirewallRules）用于查询实例的防火墙规则。
     * @param {DescribeFirewallRulesRequest} req
     * @param {function(string, DescribeFirewallRulesResponse):void} cb
     * @public
     */
    DescribeFirewallRules(req, cb) {
        let resp = new DescribeFirewallRulesResponse();
        this.request("DescribeFirewallRules", req, resp, cb);
    }


}
module.exports = LighthouseClient;
