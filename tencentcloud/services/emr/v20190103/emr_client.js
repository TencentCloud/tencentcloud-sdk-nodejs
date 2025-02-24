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
 * emr client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("emr.tencentcloudapi.com", "2019-01-03", clientConfig);
    }
    /**
     * 查询待续费节点信息
     */
    async DescribeInstanceRenewNodes(req, cb) {
        return this.request("DescribeInstanceRenewNodes", req, cb);
    }
    /**
     * 强制修改标签
     */
    async ModifyResourcesTags(req, cb) {
        return this.request("ModifyResourcesTags", req, cb);
    }
    /**
     * 变配询价
     */
    async InquiryPriceUpdateInstance(req, cb) {
        return this.request("InquiryPriceUpdateInstance", req, cb);
    }
    /**
     * 创建EMR集群实例
     */
    async CreateCluster(req, cb) {
        return this.request("CreateCluster", req, cb);
    }
    /**
     * 续费询价。
     */
    async InquiryPriceRenewInstance(req, cb) {
        return this.request("InquiryPriceRenewInstance", req, cb);
    }
    /**
     * DescribeImpalaQueries
     */
    async DescribeImpalaQueries(req, cb) {
        return this.request("DescribeImpalaQueries", req, cb);
    }
    /**
     * 获取资源调度中的队列信息
     */
    async DescribeYarnQueue(req, cb) {
        return this.request("DescribeYarnQueue", req, cb);
    }
    /**
     * 修改资源调度中队列信息
     */
    async ModifyYarnQueueV2(req, cb) {
        return this.request("ModifyYarnQueueV2", req, cb);
    }
    /**
     * 创建EMR容器集群实例
     */
    async CreateCloudInstance(req, cb) {
        return this.request("CreateCloudInstance", req, cb);
    }
    /**
     * yarn资源调度-部署生效
     */
    async DeployYarnConf(req, cb) {
        return this.request("DeployYarnConf", req, cb);
    }
    /**
     * 查询EMR任务运行详情状态
     */
    async DescribeClusterFlowStatusDetail(req, cb) {
        return this.request("DescribeClusterFlowStatusDetail", req, cb);
    }
    /**
     * EMR同步TKE中POD状态
     */
    async SyncPodState(req, cb) {
        return this.request("SyncPodState", req, cb);
    }
    /**
     * 扩容询价. 当扩容时候，请通过该接口查询价格。
     */
    async InquiryPriceScaleOutInstance(req, cb) {
        return this.request("InquiryPriceScaleOutInstance", req, cb);
    }
    /**
     * 获取集群的自动扩缩容的详细记录
     */
    async DescribeAutoScaleRecords(req, cb) {
        return this.request("DescribeAutoScaleRecords", req, cb);
    }
    /**
     * 获取账户的CVM配额
     */
    async DescribeCvmQuota(req, cb) {
        return this.request("DescribeCvmQuota", req, cb);
    }
    /**
     * DescribeYarnApplications
     */
    async DescribeYarnApplications(req, cb) {
        return this.request("DescribeYarnApplications", req, cb);
    }
    /**
     * 修改YARN资源调度的全局配置
     */
    async ModifyGlobalConfig(req, cb) {
        return this.request("ModifyGlobalConfig", req, cb);
    }
    /**
     * 扩容节点
     */
    async ScaleOutInstance(req, cb) {
        return this.request("ScaleOutInstance", req, cb);
    }
    /**
     * 云盘挂载
     */
    async AttachDisks(req, cb) {
        return this.request("AttachDisks", req, cb);
    }
    /**
     * 设置当前集群的某个节点规格配置为默认或取消默认
     */
    async SetNodeResourceConfigDefault(req, cb) {
        return this.request("SetNodeResourceConfigDefault", req, cb);
    }
    /**
     * 查询YARN资源调度数据信息。已废弃，请使用`DescribeYarnQueue`去查询队列信息。
     */
    async DescribeResourceSchedule(req, cb) {
        return this.request("DescribeResourceSchedule", req, cb);
    }
    /**
     * 查询StarRocks查询信息
     */
    async DescribeStarRocksQueryInfo(req, cb) {
        return this.request("DescribeStarRocksQueryInfo", req, cb);
    }
    /**
     * 获取Hbase表级监控数据概览接口
     */
    async DescribeHBaseTableOverview(req, cb) {
        return this.request("DescribeHBaseTableOverview", req, cb);
    }
    /**
     * 查询服务进程信息
     */
    async DescribeServiceNodeInfos(req, cb) {
        return this.request("DescribeServiceNodeInfos", req, cb);
    }
    /**
     * 查询集群实例信息
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 部署生效。已废弃，请使用`DeployYarnConf`接口进行部署生效
     */
    async ModifyYarnDeploy(req, cb) {
        return this.request("ModifyYarnDeploy", req, cb);
    }
    /**
     * 查询DAG信息
     */
    async DescribeDAGInfo(req, cb) {
        return this.request("DescribeDAGInfo", req, cb);
    }
    /**
     * 销毁EMR实例。此接口仅支持弹性MapReduce正式计费版本。
     */
    async TerminateInstance(req, cb) {
        return this.request("TerminateInstance", req, cb);
    }
    /**
     * 销毁集群节点
     */
    async TerminateClusterNodes(req, cb) {
        return this.request("TerminateClusterNodes", req, cb);
    }
    /**
     * 修改YARN资源调度的资源配置
     */
    async ResetYarnConfig(req, cb) {
        return this.request("ResetYarnConfig", req, cb);
    }
    /**
     * 该接口支持安装了OpenLdap组件的集群。
批量导出用户。对于kerberos集群，如果需要kertab文件下载地址，可以将NeedKeytabInfo设置为true；注意SupportDownLoadKeyTab为true，但是DownLoadKeyTabUrl为空字符串，表示keytab文件在后台没有准备好（正在生成）。
     */
    async DescribeUsersForUserManager(req, cb) {
        return this.request("DescribeUsersForUserManager", req, cb);
    }
    /**
     * 修改用户密码（用户管理）
     */
    async ModifyUserManagerPwd(req, cb) {
        return this.request("ModifyUserManagerPwd", req, cb);
    }
    /**
     * 删除用户列表（用户管理）
     */
    async DeleteUserManagerUserList(req, cb) {
        return this.request("DeleteUserManagerUserList", req, cb);
    }
    /**
     * 本接口（TerminateSLInstance）用于销毁Serverless HBase实例
     */
    async TerminateSLInstance(req, cb) {
        return this.request("TerminateSLInstance", req, cb);
    }
    /**
     * 该接口支持安装了OpenLdap组件的集群。
新增用户列表（用户管理）。
     */
    async AddUsersForUserManager(req, cb) {
        return this.request("AddUsersForUserManager", req, cb);
    }
    /**
     * 缩容Task节点
     */
    async TerminateTasks(req, cb) {
        return this.request("TerminateTasks", req, cb);
    }
    /**
     * 前提：预付费集群
资源级别开启或关闭自动续费
     */
    async ModifyAutoRenewFlag(req, cb) {
        return this.request("ModifyAutoRenewFlag", req, cb);
    }
    /**
     * 本接口（CreateSLInstance）用于创建Serverless HBase实例
- 接口调用成功，会创建Serverless HBase实例，创建实例请求成功会返回创建实例的InstaceId和请求的 RequestID。
- 接口为异步接口，接口返回时操作并未立即完成，实例操作结果可以通过调用DescribeInstancesList查看当前实例的StatusDesc状态。
     */
    async CreateSLInstance(req, cb) {
        return this.request("CreateSLInstance", req, cb);
    }
    /**
     * 本接口（DescribeSLInstanceList）用于查询Serverless HBase实例列表详细信息
     */
    async DescribeSLInstanceList(req, cb) {
        return this.request("DescribeSLInstanceList", req, cb);
    }
    /**
     * 云盘扩容
     */
    async ResizeDataDisks(req, cb) {
        return this.request("ResizeDataDisks", req, cb);
    }
    /**
     * 修改自动扩缩容规则
     */
    async ModifyAutoScaleStrategy(req, cb) {
        return this.request("ModifyAutoScaleStrategy", req, cb);
    }
    /**
     * 查询Kyuubi查询信息
     */
    async DescribeKyuubiQueryInfo(req, cb) {
        return this.request("DescribeKyuubiQueryInfo", req, cb);
    }
    /**
     * 删除自动扩缩容规则，后台销毁根据该规则扩缩容出来的节点
     */
    async DeleteAutoScaleStrategy(req, cb) {
        return this.request("DeleteAutoScaleStrategy", req, cb);
    }
    /**
     * yarn application 统计接口查询
     */
    async DescribeEmrApplicationStatics(req, cb) {
        return this.request("DescribeEmrApplicationStatics", req, cb);
    }
    /**
     * 查询HDFS存储文件信息
     */
    async DescribeHDFSStorageInfo(req, cb) {
        return this.request("DescribeHDFSStorageInfo", req, cb);
    }
    /**
     * 用于启停服务 重启服务等功能
     */
    async StartStopServiceOrMonitor(req, cb) {
        return this.request("StartStopServiceOrMonitor", req, cb);
    }
    /**
     * 修改了yarn的资源调度器，点击部署生效。
     */
    async ModifyResourceScheduler(req, cb) {
        return this.request("ModifyResourceScheduler", req, cb);
    }
    /**
     * 快速获取当前集群的节点规格配置
     */
    async DescribeNodeResourceConfigFast(req, cb) {
        return this.request("DescribeNodeResourceConfigFast", req, cb);
    }
    /**
     * YARN资源调度-变更详情
     */
    async DescribeResourceScheduleDiffDetail(req, cb) {
        return this.request("DescribeResourceScheduleDiffDetail", req, cb);
    }
    /**
     * 本接口（DescribeSLInstance）用于查询 Serverless HBase实例基本信息
     */
    async DescribeSLInstance(req, cb) {
        return this.request("DescribeSLInstance", req, cb);
    }
    /**
     * 查询Spark查询信息列表
     */
    async DescribeSparkQueries(req, cb) {
        return this.request("DescribeSparkQueries", req, cb);
    }
    /**
     * 创建EMR集群实例
     */
    async CreateInstance(req, cb) {
        return this.request("CreateInstance", req, cb);
    }
    /**
     * 创建实例询价
     */
    async InquiryPriceCreateInstance(req, cb) {
        return this.request("InquiryPriceCreateInstance", req, cb);
    }
    /**
     * 查询YARN资源调度的全局配置
     */
    async DescribeGlobalConfig(req, cb) {
        return this.request("DescribeGlobalConfig", req, cb);
    }
    /**
     * 查看yarn资源调度的调度历史。废弃，请使用流程中心查看历史记录。
     */
    async DescribeYarnScheduleHistory(req, cb) {
        return this.request("DescribeYarnScheduleHistory", req, cb);
    }
    /**
     * 修改YARN资源调度的资源配置。已废弃，请使用`ModifyYarnQueueV2`来修改队列配置
     */
    async ModifyResourceScheduleConfig(req, cb) {
        return this.request("ModifyResourceScheduleConfig", req, cb);
    }
    /**
     * 查询流程任务
     */
    async DescribeJobFlow(req, cb) {
        return this.request("DescribeJobFlow", req, cb);
    }
    /**
     * 获取hive查询信息
     */
    async DescribeHiveQueries(req, cb) {
        return this.request("DescribeHiveQueries", req, cb);
    }
    /**
     * 查询监控概览页指标数据
     */
    async DescribeEmrOverviewMetrics(req, cb) {
        return this.request("DescribeEmrOverviewMetrics", req, cb);
    }
    /**
     * 增加当前集群的节点规格配置
     */
    async AddNodeResourceConfig(req, cb) {
        return this.request("AddNodeResourceConfig", req, cb);
    }
    /**
     * 集群续费询价。
     */
    async InquirePriceRenewEmr(req, cb) {
        return this.request("InquirePriceRenewEmr", req, cb);
    }
    /**
     * 变配实例
     */
    async ModifyResource(req, cb) {
        return this.request("ModifyResource", req, cb);
    }
    /**
     * 本接口（ModifySLInstance）用于Serverless HBase变配实例。
- 接口调用成功，会创建Serverless HBase实例，创建实例请求成功会返回请求的 RequestID。
- 接口为异步接口，接口返回时操作并未立即完成，实例操作结果可以通过调用DescribeInstancesList查看当前实例的StatusDesc状态。
     */
    async ModifySLInstance(req, cb) {
        return this.request("ModifySLInstance", req, cb);
    }
    /**
     * 查询节点数据盘信息
     */
    async DescribeNodeDataDisks(req, cb) {
        return this.request("DescribeNodeDataDisks", req, cb);
    }
    /**
     * 获取自动扩缩容规则
     */
    async DescribeAutoScaleStrategies(req, cb) {
        return this.request("DescribeAutoScaleStrategies", req, cb);
    }
    /**
     * 添加扩缩容规则，按负载和时间
     */
    async AddMetricScaleStrategy(req, cb) {
        return this.request("AddMetricScaleStrategy", req, cb);
    }
    /**
     * 获取自动扩缩容全局配置
     */
    async DescribeAutoScaleGroupGlobalConf(req, cb) {
        return this.request("DescribeAutoScaleGroupGlobalConf", req, cb);
    }
    /**
     * 查询集群节点信息
     */
    async DescribeClusterNodes(req, cb) {
        return this.request("DescribeClusterNodes", req, cb);
    }
    /**
     * 查询Trino(PrestoSQL)查询信息
     */
    async DescribeTrinoQueryInfo(req, cb) {
        return this.request("DescribeTrinoQueryInfo", req, cb);
    }
    /**
     * 查询集群列表
     */
    async DescribeInstancesList(req, cb) {
        return this.request("DescribeInstancesList", req, cb);
    }
    /**
     * 刷新YARN的动态资源池。已废弃，请使用`DeployYarnConf`
     */
    async ModifyResourcePools(req, cb) {
        return this.request("ModifyResourcePools", req, cb);
    }
    /**
     * 获取洞察结果信息
     */
    async DescribeInsightList(req, cb) {
        return this.request("DescribeInsightList", req, cb);
    }
    /**
     * 删除当前集群的节点规格配置
     */
    async DeleteNodeResourceConfig(req, cb) {
        return this.request("DeleteNodeResourceConfig", req, cb);
    }
    /**
     * 修改集群名称
     */
    async ModifyInstanceBasic(req, cb) {
        return this.request("ModifyInstanceBasic", req, cb);
    }
    /**
     * 调整Pod数量
     */
    async ModifyPodNum(req, cb) {
        return this.request("ModifyPodNum", req, cb);
    }
    /**
     * 扩容集群节点
     */
    async ScaleOutCluster(req, cb) {
        return this.request("ScaleOutCluster", req, cb);
    }
    /**
     * 创建流程作业
     */
    async RunJobFlow(req, cb) {
        return this.request("RunJobFlow", req, cb);
    }
}
exports.Client = Client;
