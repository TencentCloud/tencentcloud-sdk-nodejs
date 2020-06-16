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
const DescribeSyncJobsResponse = models.DescribeSyncJobsResponse;
const DescribeMigrateJobsResponse = models.DescribeMigrateJobsResponse;
const MigrateDetailInfo = models.MigrateDetailInfo;
const DeleteMigrateJobResponse = models.DeleteMigrateJobResponse;
const CreateMigrateCheckJobRequest = models.CreateMigrateCheckJobRequest;
const ModifySubscribeVipVportRequest = models.ModifySubscribeVipVportRequest;
const SyncInstanceInfo = models.SyncInstanceInfo;
const ModifySubscribeNameResponse = models.ModifySubscribeNameResponse;
const CreateSyncJobResponse = models.CreateSyncJobResponse;
const DescribeMigrateCheckJobRequest = models.DescribeMigrateCheckJobRequest;
const IsolateSubscribeResponse = models.IsolateSubscribeResponse;
const ModifySubscribeObjectsResponse = models.ModifySubscribeObjectsResponse;
const SwitchDrToMasterRequest = models.SwitchDrToMasterRequest;
const StartSyncJobRequest = models.StartSyncJobRequest;
const CreateMigrateJobRequest = models.CreateMigrateJobRequest;
const SubscribeInfo = models.SubscribeInfo;
const ModifySubscribeNameRequest = models.ModifySubscribeNameRequest;
const SyncJobInfo = models.SyncJobInfo;
const ModifySubscribeConsumeTimeResponse = models.ModifySubscribeConsumeTimeResponse;
const DstInfo = models.DstInfo;
const DescribeSubscribeConfResponse = models.DescribeSubscribeConfResponse;
const DescribeAsyncRequestInfoRequest = models.DescribeAsyncRequestInfoRequest;
const SrcInfo = models.SrcInfo;
const ConsistencyParams = models.ConsistencyParams;
const ModifyMigrateJobRequest = models.ModifyMigrateJobRequest;
const CreateSubscribeRequest = models.CreateSubscribeRequest;
const CreateMigrateCheckJobResponse = models.CreateMigrateCheckJobResponse;
const MigrateStepDetailInfo = models.MigrateStepDetailInfo;
const ModifySubscribeObjectsRequest = models.ModifySubscribeObjectsRequest;
const DescribeMigrateCheckJobResponse = models.DescribeMigrateCheckJobResponse;
const SubscribeRegionConf = models.SubscribeRegionConf;
const ActivateSubscribeRequest = models.ActivateSubscribeRequest;
const OfflineIsolatedSubscribeRequest = models.OfflineIsolatedSubscribeRequest;
const DescribeSubscribesRequest = models.DescribeSubscribesRequest;
const ResetSubscribeResponse = models.ResetSubscribeResponse;
const StartSyncJobResponse = models.StartSyncJobResponse;
const DescribeSubscribesResponse = models.DescribeSubscribesResponse;
const SyncCheckStepInfo = models.SyncCheckStepInfo;
const CreateSyncCheckJobResponse = models.CreateSyncCheckJobResponse;
const StopMigrateJobRequest = models.StopMigrateJobRequest;
const DescribeSyncCheckJobRequest = models.DescribeSyncCheckJobRequest;
const DescribeRegionConfResponse = models.DescribeRegionConfResponse;
const ModifySyncJobResponse = models.ModifySyncJobResponse;
const DescribeAsyncRequestInfoResponse = models.DescribeAsyncRequestInfoResponse;
const CompleteMigrateJobRequest = models.CompleteMigrateJobRequest;
const ResetSubscribeRequest = models.ResetSubscribeRequest;
const ModifySubscribeConsumeTimeRequest = models.ModifySubscribeConsumeTimeRequest;
const SwitchDrToMasterResponse = models.SwitchDrToMasterResponse;
const ModifyMigrateJobResponse = models.ModifyMigrateJobResponse;
const CreateSyncJobRequest = models.CreateSyncJobRequest;
const DescribeSyncJobsRequest = models.DescribeSyncJobsRequest;
const DescribeMigrateJobsRequest = models.DescribeMigrateJobsRequest;
const SyncDetailInfo = models.SyncDetailInfo;
const StopMigrateJobResponse = models.StopMigrateJobResponse;
const SyncOption = models.SyncOption;
const OfflineIsolatedSubscribeResponse = models.OfflineIsolatedSubscribeResponse;
const SyncStepDetailInfo = models.SyncStepDetailInfo;
const IsolateSubscribeRequest = models.IsolateSubscribeRequest;
const DeleteSyncJobResponse = models.DeleteSyncJobResponse;
const CreateSyncCheckJobRequest = models.CreateSyncCheckJobRequest;
const ModifySyncJobRequest = models.ModifySyncJobRequest;
const DescribeRegionConfRequest = models.DescribeRegionConfRequest;
const CompleteMigrateJobResponse = models.CompleteMigrateJobResponse;
const StartMigrateJobResponse = models.StartMigrateJobResponse;
const SubscribeObject = models.SubscribeObject;
const CreateMigrateJobResponse = models.CreateMigrateJobResponse;
const DescribeSubscribeConfRequest = models.DescribeSubscribeConfRequest;
const ModifySubscribeVipVportResponse = models.ModifySubscribeVipVportResponse;
const MigrateJobInfo = models.MigrateJobInfo;
const DeleteMigrateJobRequest = models.DeleteMigrateJobRequest;
const DeleteSyncJobRequest = models.DeleteSyncJobRequest;
const ActivateSubscribeResponse = models.ActivateSubscribeResponse;
const CreateSubscribeResponse = models.CreateSubscribeResponse;
const MigrateOption = models.MigrateOption;
const ErrorInfo = models.ErrorInfo;
const DescribeSyncCheckJobResponse = models.DescribeSyncCheckJobResponse;
const StartMigrateJobRequest = models.StartMigrateJobRequest;


/**
 * dts client
 * @class
 */
class DtsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dts.tencentcloudapi.com", "2018-03-30", credential, region, profile);
    }
    
    /**
     * 删除灾备同步任务 （运行中的同步任务不能删除）。
     * @param {DeleteSyncJobRequest} req
     * @param {function(string, DeleteSyncJobResponse):void} cb
     * @public
     */
    DeleteSyncJob(req, cb) {
        let resp = new DeleteSyncJobResponse();
        this.request("DeleteSyncJob", req, resp, cb);
    }

    /**
     * 查询在迁移平台发起的灾备同步任务
     * @param {DescribeSyncJobsRequest} req
     * @param {function(string, DescribeSyncJobsResponse):void} cb
     * @public
     */
    DescribeSyncJobs(req, cb) {
        let resp = new DescribeSyncJobsResponse();
        this.request("DescribeSyncJobs", req, resp, cb);
    }

    /**
     * 本接口用于配置数据订阅，只有在未配置状态的订阅实例才能调用此接口。
     * @param {ActivateSubscribeRequest} req
     * @param {function(string, ActivateSubscribeResponse):void} cb
     * @public
     */
    ActivateSubscribe(req, cb) {
        let resp = new ActivateSubscribeResponse();
        this.request("ActivateSubscribe", req, resp, cb);
    }

    /**
     * 修改灾备同步任务. 
当同步任务处于下述状态时, 允许调用本接口: 同步任务创建中, 创建完成, 校验成功, 校验失败. 
源实例和目标实例信息不允许修改，可以修改任务名、需要同步的库表。
     * @param {ModifySyncJobRequest} req
     * @param {function(string, ModifySyncJobResponse):void} cb
     * @public
     */
    ModifySyncJob(req, cb) {
        let resp = new ModifySyncJobResponse();
        this.request("ModifySyncJob", req, resp, cb);
    }

    /**
     * 本接口(CreateSyncJob)用于创建灾备同步任务。
创建同步任务后，可以通过 CreateSyncCheckJob 接口发起校验任务。校验成功后才可以通过 StartSyncJob 接口启动同步任务。
     * @param {CreateSyncJobRequest} req
     * @param {function(string, CreateSyncJobResponse):void} cb
     * @public
     */
    CreateSyncJob(req, cb) {
        let resp = new CreateSyncJobResponse();
        this.request("CreateSyncJob", req, resp, cb);
    }

    /**
     * 本接口(ModifySubscribeObjects)用于修改数据订阅通道的订阅规则
     * @param {ModifySubscribeObjectsRequest} req
     * @param {function(string, ModifySubscribeObjectsResponse):void} cb
     * @public
     */
    ModifySubscribeObjects(req, cb) {
        let resp = new ModifySubscribeObjectsResponse();
        this.request("ModifySubscribeObjects", req, resp, cb);
    }

    /**
     * 创建的灾备同步任务在通过 CreateSyncCheckJob 和 DescribeSyncCheckJob 确定校验成功后，可以调用该接口启动同步
     * @param {StartSyncJobRequest} req
     * @param {function(string, StartSyncJobResponse):void} cb
     * @public
     */
    StartSyncJob(req, cb) {
        let resp = new StartSyncJobResponse();
        this.request("StartSyncJob", req, resp, cb);
    }

    /**
     * 本接口用于创建校验后,获取校验的结果. 能查询到当前校验的状态和进度. 
若通过校验, 则可调用'StartMigrateJob' 开始迁移.
若未通过校验, 则能查询到校验失败的原因. 请按照报错, 通过'ModifyMigrateJob'修改迁移配置或是调整源/目标实例的相关参数.
     * @param {DescribeMigrateCheckJobRequest} req
     * @param {function(string, DescribeMigrateCheckJobResponse):void} cb
     * @public
     */
    DescribeMigrateCheckJob(req, cb) {
        let resp = new DescribeMigrateCheckJobResponse();
        this.request("DescribeMigrateCheckJob", req, resp, cb);
    }

    /**
     * 本接口（DescribeAsyncRequestInfo）用于查询任务执行结果
     * @param {DescribeAsyncRequestInfoRequest} req
     * @param {function(string, DescribeAsyncRequestInfoResponse):void} cb
     * @public
     */
    DescribeAsyncRequestInfo(req, cb) {
        let resp = new DescribeAsyncRequestInfoResponse();
        this.request("DescribeAsyncRequestInfo", req, resp, cb);
    }

    /**
     * 将灾备升级为主实例，停止从原来所属主实例的同步，断开主备关系。
     * @param {SwitchDrToMasterRequest} req
     * @param {function(string, SwitchDrToMasterResponse):void} cb
     * @public
     */
    SwitchDrToMaster(req, cb) {
        let resp = new SwitchDrToMasterResponse();
        this.request("SwitchDrToMaster", req, resp, cb);
    }

    /**
     * 本接口（StopMigrateJob）用于撤销数据迁移任务。
在迁移过程中允许调用该接口撤销迁移, 撤销迁移的任务会失败。通过DescribeMigrateJobs接口查询到任务状态为运行中（status=7）或准备完成（status=8）时，才能撤销数据迁移任务。
     * @param {StopMigrateJobRequest} req
     * @param {function(string, StopMigrateJobResponse):void} cb
     * @public
     */
    StopMigrateJob(req, cb) {
        let resp = new StopMigrateJobResponse();
        this.request("StopMigrateJob", req, resp, cb);
    }

    /**
     * 本接口（DescribeRegionConf）用于查询可售卖订阅实例的地域
     * @param {DescribeRegionConfRequest} req
     * @param {function(string, DescribeRegionConfResponse):void} cb
     * @public
     */
    DescribeRegionConf(req, cb) {
        let resp = new DescribeRegionConfResponse();
        this.request("DescribeRegionConf", req, resp, cb);
    }

    /**
     * 查询数据迁移任务.
如果是金融区链路, 请使用域名: https://dts.ap-shenzhen-fsi.tencentcloudapi.com
     * @param {DescribeMigrateJobsRequest} req
     * @param {function(string, DescribeMigrateJobsResponse):void} cb
     * @public
     */
    DescribeMigrateJobs(req, cb) {
        let resp = new DescribeMigrateJobsResponse();
        this.request("DescribeMigrateJobs", req, resp, cb);
    }

    /**
     * 本接口(DescribeSubscribes)获取数据订阅实例信息列表，默认分页，每次返回20条
     * @param {DescribeSubscribesRequest} req
     * @param {function(string, DescribeSubscribesResponse):void} cb
     * @public
     */
    DescribeSubscribes(req, cb) {
        let resp = new DescribeSubscribesResponse();
        this.request("DescribeSubscribes", req, resp, cb);
    }

    /**
     * 本接口用于在通过 CreateSyncCheckJob 接口创建灾备同步校验任务后，获取校验的结果。能查询到当前校验的状态和进度。
若通过校验, 则可调用 StartSyncJob 启动同步任务。
若未通过校验, 则会返回校验失败的原因。 可通过 ModifySyncJob 修改配置，然后再次发起校验。
校验任务需要大概约30秒，当返回的 Status 不为 finished 时表示尚未校验完成，需要轮询该接口。
如果 Status=finished 且 CheckFlag=1 时表示校验成功。
如果 Status=finished 且 CheckFlag !=1 时表示校验失败。
     * @param {DescribeSyncCheckJobRequest} req
     * @param {function(string, DescribeSyncCheckJobResponse):void} cb
     * @public
     */
    DescribeSyncCheckJob(req, cb) {
        let resp = new DescribeSyncCheckJobResponse();
        this.request("DescribeSyncCheckJob", req, resp, cb);
    }

    /**
     * 本接口（CreateMigrateJob）用于创建数据迁移任务。

如果是金融区链路, 请使用域名: dts.ap-shenzhen-fsi.tencentcloudapi.com
     * @param {CreateMigrateJobRequest} req
     * @param {function(string, CreateMigrateJobResponse):void} cb
     * @public
     */
    CreateMigrateJob(req, cb) {
        let resp = new CreateMigrateJobResponse();
        this.request("CreateMigrateJob", req, resp, cb);
    }

    /**
     * 本接口(ModifySubscribeVipVport)用于修改数据订阅实例的IP和端口号
     * @param {ModifySubscribeVipVportRequest} req
     * @param {function(string, ModifySubscribeVipVportResponse):void} cb
     * @public
     */
    ModifySubscribeVipVport(req, cb) {
        let resp = new ModifySubscribeVipVportResponse();
        this.request("ModifySubscribeVipVport", req, resp, cb);
    }

    /**
     * 创建校验迁移任务
在开始迁移前, 必须调用本接口创建校验, 且校验成功后才能开始迁移. 校验的结果可以通过DescribeMigrateCheckJob查看.
校验成功后,迁移任务若有修改, 则必须重新创建校验并通过后, 才能开始迁移.
     * @param {CreateMigrateCheckJobRequest} req
     * @param {function(string, CreateMigrateCheckJobResponse):void} cb
     * @public
     */
    CreateMigrateCheckJob(req, cb) {
        let resp = new CreateMigrateCheckJobResponse();
        this.request("CreateMigrateCheckJob", req, resp, cb);
    }

    /**
     * 本接口(ModifySubscribeConsumeTime)用于修改数据订阅通道的消费时间点
     * @param {ModifySubscribeConsumeTimeRequest} req
     * @param {function(string, ModifySubscribeConsumeTimeResponse):void} cb
     * @public
     */
    ModifySubscribeConsumeTime(req, cb) {
        let resp = new ModifySubscribeConsumeTimeResponse();
        this.request("ModifySubscribeConsumeTime", req, resp, cb);
    }

    /**
     * 本接口(ModifySubscribeName)用于修改数据订阅实例的名称
     * @param {ModifySubscribeNameRequest} req
     * @param {function(string, ModifySubscribeNameResponse):void} cb
     * @public
     */
    ModifySubscribeName(req, cb) {
        let resp = new ModifySubscribeNameResponse();
        this.request("ModifySubscribeName", req, resp, cb);
    }

    /**
     * 在调用 StartSyncJob 接口启动灾备同步前, 必须调用本接口创建校验, 且校验成功后才能开始同步数据. 校验的结果可以通过 DescribeSyncCheckJob 查看.
校验成功后才能启动同步.
     * @param {CreateSyncCheckJobRequest} req
     * @param {function(string, CreateSyncCheckJobResponse):void} cb
     * @public
     */
    CreateSyncCheckJob(req, cb) {
        let resp = new CreateSyncCheckJobResponse();
        this.request("CreateSyncCheckJob", req, resp, cb);
    }

    /**
     * 本接口(CreateSubscribe)用于创建一个数据订阅实例。
     * @param {CreateSubscribeRequest} req
     * @param {function(string, CreateSubscribeResponse):void} cb
     * @public
     */
    CreateSubscribe(req, cb) {
        let resp = new CreateSubscribeResponse();
        this.request("CreateSubscribe", req, resp, cb);
    }

    /**
     * 本接口(ResetSubscribe)用于重置数据订阅实例，已经激活的数据订阅实例，重置后可以使用ActivateSubscribe接口绑定其他的数据库实例
     * @param {ResetSubscribeRequest} req
     * @param {function(string, ResetSubscribeResponse):void} cb
     * @public
     */
    ResetSubscribe(req, cb) {
        let resp = new ResetSubscribeResponse();
        this.request("ResetSubscribe", req, resp, cb);
    }

    /**
     * 本接口（StartMigrationJob）用于启动迁移任务。非定时迁移任务会在调用后立即开始迁移，定时任务则会开始倒计时。
调用此接口前，请务必先使用CreateMigrateCheckJob校验数据迁移任务，并通过DescribeMigrateJobs接口查询到任务状态为校验通过（status=4）时，才能启动数据迁移任务。
     * @param {StartMigrateJobRequest} req
     * @param {function(string, StartMigrateJobResponse):void} cb
     * @public
     */
    StartMigrateJob(req, cb) {
        let resp = new StartMigrateJobResponse();
        this.request("StartMigrateJob", req, resp, cb);
    }

    /**
     * 本接口（ModifyMigrateJob）用于修改数据迁移任务。
当迁移任务处于下述状态时，允许调用本接口修改迁移任务：迁移创建中（status=1）、 校验成功(status=4)、校验失败(status=5)、迁移失败(status=10)。但源实例、目标实例类型和目标实例地域不允许修改。

如果是金融区链路, 请使用域名: dts.ap-shenzhen-fsi.tencentcloudapi.com
     * @param {ModifyMigrateJobRequest} req
     * @param {function(string, ModifyMigrateJobResponse):void} cb
     * @public
     */
    ModifyMigrateJob(req, cb) {
        let resp = new ModifyMigrateJobResponse();
        this.request("ModifyMigrateJob", req, resp, cb);
    }

    /**
     * 本接口（OfflineIsolatedSubscribe）用于下线已隔离的数据订阅实例
     * @param {OfflineIsolatedSubscribeRequest} req
     * @param {function(string, OfflineIsolatedSubscribeResponse):void} cb
     * @public
     */
    OfflineIsolatedSubscribe(req, cb) {
        let resp = new OfflineIsolatedSubscribeResponse();
        this.request("OfflineIsolatedSubscribe", req, resp, cb);
    }

    /**
     * 本接口（IsolateSubscribe）用于隔离小时计费的订阅实例。调用后，订阅实例将不能使用，同时停止计费。
     * @param {IsolateSubscribeRequest} req
     * @param {function(string, IsolateSubscribeResponse):void} cb
     * @public
     */
    IsolateSubscribe(req, cb) {
        let resp = new IsolateSubscribeResponse();
        this.request("IsolateSubscribe", req, resp, cb);
    }

    /**
     * 本接口（DescribeSubscribeConf）用于查询订阅实例配置
     * @param {DescribeSubscribeConfRequest} req
     * @param {function(string, DescribeSubscribeConfResponse):void} cb
     * @public
     */
    DescribeSubscribeConf(req, cb) {
        let resp = new DescribeSubscribeConfResponse();
        this.request("DescribeSubscribeConf", req, resp, cb);
    }

    /**
     * 本接口（DeleteMigrationJob）用于删除数据迁移任务。当通过DescribeMigrateJobs接口查询到任务的状态为：检验中（status=3）、运行中（status=7）、准备完成（status=8）、撤销中（status=11）或者完成中（status=12）时，不允许删除任务。
     * @param {DeleteMigrateJobRequest} req
     * @param {function(string, DeleteMigrateJobResponse):void} cb
     * @public
     */
    DeleteMigrateJob(req, cb) {
        let resp = new DeleteMigrateJobResponse();
        this.request("DeleteMigrateJob", req, resp, cb);
    }

    /**
     * 本接口（CompleteMigrateJob）用于完成数据迁移任务。
选择采用增量迁移方式的任务, 需要在迁移进度进入准备完成阶段后, 调用本接口, 停止迁移增量数据。
通过DescribeMigrateJobs接口查询到任务的状态为准备完成（status=8）时，此时可以调用本接口完成迁移任务。

     * @param {CompleteMigrateJobRequest} req
     * @param {function(string, CompleteMigrateJobResponse):void} cb
     * @public
     */
    CompleteMigrateJob(req, cb) {
        let resp = new CompleteMigrateJobResponse();
        this.request("CompleteMigrateJob", req, resp, cb);
    }


}
module.exports = DtsClient;
