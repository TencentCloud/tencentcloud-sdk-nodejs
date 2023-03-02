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
const ModifyCompareTaskResponse = models.ModifyCompareTaskResponse;
const DescribeSyncJobsResponse = models.DescribeSyncJobsResponse;
const ModifyMigrationJobResponse = models.ModifyMigrationJobResponse;
const ModifyMigrateJobSpecRequest = models.ModifyMigrateJobSpecRequest;
const StartMigrateJobRequest = models.StartMigrateJobRequest;
const StepTip = models.StepTip;
const DestroyMigrateJobRequest = models.DestroyMigrateJobRequest;
const SkipCheckItemResponse = models.SkipCheckItemResponse;
const ResizeSyncJobResponse = models.ResizeSyncJobResponse;
const ResumeMigrateJobResponse = models.ResumeMigrateJobResponse;
const DifferenceItem = models.DifferenceItem;
const IsolateSyncJobRequest = models.IsolateSyncJobRequest;
const PauseMigrateJobRequest = models.PauseMigrateJobRequest;
const ContinueMigrateJobRequest = models.ContinueMigrateJobRequest;
const DescribeCheckSyncJobResultRequest = models.DescribeCheckSyncJobResultRequest;
const DestroySyncJobResponse = models.DestroySyncJobResponse;
const DescribeCompareReportResponse = models.DescribeCompareReportResponse;
const IsolateMigrateJobRequest = models.IsolateMigrateJobRequest;
const StopMigrateJobResponse = models.StopMigrateJobResponse;
const TableItem = models.TableItem;
const ModifyCompareTaskNameRequest = models.ModifyCompareTaskNameRequest;
const CompleteMigrateJobResponse = models.CompleteMigrateJobResponse;
const DescribeMigrateDBInstancesResponse = models.DescribeMigrateDBInstancesResponse;
const KeyValuePairOption = models.KeyValuePairOption;
const CreateCheckSyncJobRequest = models.CreateCheckSyncJobRequest;
const StopSyncJobRequest = models.StopSyncJobRequest;
const DescribeMigrationDetailRequest = models.DescribeMigrationDetailRequest;
const DestroySyncJobRequest = models.DestroySyncJobRequest;
const ResizeSyncJobRequest = models.ResizeSyncJobRequest;
const DdlOption = models.DdlOption;
const ConflictHandleOption = models.ConflictHandleOption;
const ResumeSyncJobResponse = models.ResumeSyncJobResponse;
const ModifyCompareTaskNameResponse = models.ModifyCompareTaskNameResponse;
const PauseSyncJobRequest = models.PauseSyncJobRequest;
const CreateMigrateCheckJobResponse = models.CreateMigrateCheckJobResponse;
const ContinueMigrateJobResponse = models.ContinueMigrateJobResponse;
const CreateMigrationServiceRequest = models.CreateMigrationServiceRequest;
const DetailCheckItem = models.DetailCheckItem;
const DescribeCompareTasksRequest = models.DescribeCompareTasksRequest;
const CompareObject = models.CompareObject;
const ErrorInfoItem = models.ErrorInfoItem;
const RecoverSyncJobResponse = models.RecoverSyncJobResponse;
const MigrateAction = models.MigrateAction;
const DeleteCompareTaskResponse = models.DeleteCompareTaskResponse;
const DBEndpointInfo = models.DBEndpointInfo;
const ContinueSyncJobResponse = models.ContinueSyncJobResponse;
const Options = models.Options;
const CompleteMigrateJobRequest = models.CompleteMigrateJobRequest;
const DescribeCompareTasksResponse = models.DescribeCompareTasksResponse;
const StopCompareRequest = models.StopCompareRequest;
const DescribeCheckSyncJobResultResponse = models.DescribeCheckSyncJobResultResponse;
const StopSyncJobResponse = models.StopSyncJobResponse;
const SkippedDetail = models.SkippedDetail;
const MigrateOption = models.MigrateOption;
const ModifyMigrateNameResponse = models.ModifyMigrateNameResponse;
const DescribeMigrationJobsResponse = models.DescribeMigrationJobsResponse;
const SkippedItem = models.SkippedItem;
const DestroyMigrateJobResponse = models.DestroyMigrateJobResponse;
const ProcessProgress = models.ProcessProgress;
const SkipSyncCheckItemRequest = models.SkipSyncCheckItemRequest;
const SkipSyncCheckItemResponse = models.SkipSyncCheckItemResponse;
const IsolateSyncJobResponse = models.IsolateSyncJobResponse;
const CreateMigrateCheckJobRequest = models.CreateMigrateCheckJobRequest;
const DescribeMigrationJobsRequest = models.DescribeMigrationJobsRequest;
const CompareTaskInfo = models.CompareTaskInfo;
const ContinueSyncJobRequest = models.ContinueSyncJobRequest;
const CreateMigrationServiceResponse = models.CreateMigrationServiceResponse;
const StartSyncJobRequest = models.StartSyncJobRequest;
const DescribeMigrationCheckJobResponse = models.DescribeMigrationCheckJobResponse;
const DBInfo = models.DBInfo;
const Endpoint = models.Endpoint;
const DifferenceDetail = models.DifferenceDetail;
const CreateCheckSyncJobResponse = models.CreateCheckSyncJobResponse;
const CompareObjectItem = models.CompareObjectItem;
const ConfigureSyncJobRequest = models.ConfigureSyncJobRequest;
const MigrateDBItem = models.MigrateDBItem;
const DescribeMigrateDBInstancesRequest = models.DescribeMigrateDBInstancesRequest;
const CheckStepInfo = models.CheckStepInfo;
const ProcessStepTip = models.ProcessStepTip;
const ModifyCompareTaskRequest = models.ModifyCompareTaskRequest;
const RecoverSyncJobRequest = models.RecoverSyncJobRequest;
const Database = models.Database;
const ModifyMigrationJobRequest = models.ModifyMigrationJobRequest;
const DescribeSyncJobsRequest = models.DescribeSyncJobsRequest;
const SyncDetailInfo = models.SyncDetailInfo;
const ResumeSyncJobRequest = models.ResumeSyncJobRequest;
const CompareTableItem = models.CompareTableItem;
const ConfigureSyncJobResponse = models.ConfigureSyncJobResponse;
const CompareViewItem = models.CompareViewItem;
const StepInfo = models.StepInfo;
const ResumeMigrateJobRequest = models.ResumeMigrateJobRequest;
const PauseSyncJobResponse = models.PauseSyncJobResponse;
const TradeInfo = models.TradeInfo;
const StartCompareResponse = models.StartCompareResponse;
const CreateCompareTaskResponse = models.CreateCompareTaskResponse;
const StopCompareResponse = models.StopCompareResponse;
const SkipCheckItemRequest = models.SkipCheckItemRequest;
const CompareAbstractInfo = models.CompareAbstractInfo;
const CheckStep = models.CheckStep;
const CompareTaskItem = models.CompareTaskItem;
const ModifyMigrateJobSpecResponse = models.ModifyMigrateJobSpecResponse;
const CreateSyncJobResponse = models.CreateSyncJobResponse;
const CreateCompareTaskRequest = models.CreateCompareTaskRequest;
const StartCompareRequest = models.StartCompareRequest;
const DescribeMigrationCheckJobRequest = models.DescribeMigrationCheckJobRequest;
const DescribeMigrationDetailResponse = models.DescribeMigrationDetailResponse;
const ModifyMigrateNameRequest = models.ModifyMigrateNameRequest;
const JobItem = models.JobItem;
const StartSyncJobResponse = models.StartSyncJobResponse;
const Objects = models.Objects;
const RecoverMigrateJobResponse = models.RecoverMigrateJobResponse;
const DBItem = models.DBItem;
const DeleteCompareTaskRequest = models.DeleteCompareTaskRequest;
const MigrateDetailInfo = models.MigrateDetailInfo;
const StopMigrateJobRequest = models.StopMigrateJobRequest;
const IsolateMigrateJobResponse = models.IsolateMigrateJobResponse;
const SyncJobInfo = models.SyncJobInfo;
const CompareOptions = models.CompareOptions;
const RoleItem = models.RoleItem;
const TagFilter = models.TagFilter;
const StepDetailInfo = models.StepDetailInfo;
const CreateSyncJobRequest = models.CreateSyncJobRequest;
const ViewItem = models.ViewItem;
const DescribeCompareReportRequest = models.DescribeCompareReportRequest;
const View = models.View;
const TagItem = models.TagItem;
const RecoverMigrateJobRequest = models.RecoverMigrateJobRequest;
const OnlineDDL = models.OnlineDDL;
const DatabaseTableObject = models.DatabaseTableObject;
const PauseMigrateJobResponse = models.PauseMigrateJobResponse;
const Table = models.Table;
const CompareDetailInfo = models.CompareDetailInfo;
const StartMigrateJobResponse = models.StartMigrateJobResponse;
const ConsistencyOption = models.ConsistencyOption;


/**
 * dts client
 * @class
 */
class DtsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dts.tencentcloudapi.com", "2021-12-06", credential, region, profile);
    }
    
    /**
     * 配置迁移服务，配置成功后可通过`CreateMigrationCheckJob` 创建迁移校验任务接口发起校验任务，只有校验通过才能启动迁移任务。
     * @param {ModifyMigrationJobRequest} req
     * @param {function(string, ModifyMigrationJobResponse):void} cb
     * @public
     */
    ModifyMigrationJob(req, cb) {
        let resp = new ModifyMigrationJobResponse();
        this.request("ModifyMigrationJob", req, resp, cb);
    }

    /**
     * 查询同步任务信息
     * @param {DescribeSyncJobsRequest} req
     * @param {function(string, DescribeSyncJobsResponse):void} cb
     * @public
     */
    DescribeSyncJobs(req, cb) {
        let resp = new DescribeSyncJobsResponse();
        this.request("DescribeSyncJobs", req, resp, cb);
    }

    /**
     * 购买迁移任务。购买成功后会返回随机生成的迁移任务id列表，也可以通过查询迁移任务任务列表接口`DescribeMigrationJobs`看到购买成功的实例Id。注意，一旦购买成功后源及目标数据库类型，源及目标实例地域不可修改。
     * @param {CreateMigrationServiceRequest} req
     * @param {function(string, CreateMigrationServiceResponse):void} cb
     * @public
     */
    CreateMigrationService(req, cb) {
        let resp = new CreateMigrationServiceResponse();
        this.request("CreateMigrationService", req, resp, cb);
    }

    /**
     * 隔离同步任务，隔离后可通过查询同步任务信息接口DescribeSyncJobs获取隔离后状态。在任务隔离后可进行解除隔离(RecoverSyncJob)操作或直接进行下线操作。对于不计费任务，调用此接口后会直接删除任务，无法进行恢复操作。
     * @param {IsolateSyncJobRequest} req
     * @param {function(string, IsolateSyncJobResponse):void} cb
     * @public
     */
    IsolateSyncJob(req, cb) {
        let resp = new IsolateSyncJobResponse();
        this.request("IsolateSyncJob", req, resp, cb);
    }

    /**
     * 终止一致性校验任务
     * @param {StopCompareRequest} req
     * @param {function(string, StopCompareResponse):void} cb
     * @public
     */
    StopCompare(req, cb) {
        let resp = new StopCompareResponse();
        this.request("StopCompare", req, resp, cb);
    }

    /**
     * 创建一个同步任务
     * @param {CreateSyncJobRequest} req
     * @param {function(string, CreateSyncJobResponse):void} cb
     * @public
     */
    CreateSyncJob(req, cb) {
        let resp = new CreateSyncJobResponse();
        this.request("CreateSyncJob", req, resp, cb);
    }

    /**
     * 删除一致性校验任务。当一致性校验任务状态为success、failed、canceled 时可以执行此操作。
     * @param {DeleteCompareTaskRequest} req
     * @param {function(string, DeleteCompareTaskResponse):void} cb
     * @public
     */
    DeleteCompareTask(req, cb) {
        let resp = new DeleteCompareTaskResponse();
        this.request("DeleteCompareTask", req, resp, cb);
    }

    /**
     * 启动同步任务
     * @param {StartSyncJobRequest} req
     * @param {function(string, StartSyncJobResponse):void} cb
     * @public
     */
    StartSyncJob(req, cb) {
        let resp = new StartSyncJobResponse();
        this.request("StartSyncJob", req, resp, cb);
    }

    /**
     * 结束同步任务，操作后可通过查询同步任务信息接口DescribeSyncJobs，获取操作后的状态。
     * @param {StopSyncJobRequest} req
     * @param {function(string, StopSyncJobResponse):void} cb
     * @public
     */
    StopSyncJob(req, cb) {
        let resp = new StopSyncJobResponse();
        this.request("StopSyncJob", req, resp, cb);
    }

    /**
     * 校验同步任务，检查必要参数和周边配置。
     * @param {CreateCheckSyncJobRequest} req
     * @param {function(string, CreateCheckSyncJobResponse):void} cb
     * @public
     */
    CreateCheckSyncJob(req, cb) {
        let resp = new CreateCheckSyncJobResponse();
        this.request("CreateCheckSyncJob", req, resp, cb);
    }

    /**
     * 查询一致性校验任务详情
     * @param {DescribeCompareReportRequest} req
     * @param {function(string, DescribeCompareReportResponse):void} cb
     * @public
     */
    DescribeCompareReport(req, cb) {
        let resp = new DescribeCompareReportResponse();
        this.request("DescribeCompareReport", req, resp, cb);
    }

    /**
     * 恢复一个暂停中的迁移任务。
     * @param {ContinueMigrateJobRequest} req
     * @param {function(string, ContinueMigrateJobResponse):void} cb
     * @public
     */
    ContinueMigrateJob(req, cb) {
        let resp = new ContinueMigrateJobResponse();
        this.request("ContinueMigrateJob", req, resp, cb);
    }

    /**
     * 暂停一个迁移任务。
     * @param {PauseMigrateJobRequest} req
     * @param {function(string, PauseMigrateJobResponse):void} cb
     * @public
     */
    PauseMigrateJob(req, cb) {
        let resp = new PauseMigrateJobResponse();
        this.request("PauseMigrateJob", req, resp, cb);
    }

    /**
     * 本接口用于校验检查项不通过后，可进行跳过此校验项操作，后端将不再校验该项。任何校验步骤都是不应该跳过的，通过校验是能正确执行的前置条件。支持跳过的产品及链路的校验项可 [参考文档](https://cloud.tencent.com/document/product/571/61639)。
     * @param {SkipSyncCheckItemRequest} req
     * @param {function(string, SkipSyncCheckItemResponse):void} cb
     * @public
     */
    SkipSyncCheckItem(req, cb) {
        let resp = new SkipSyncCheckItemResponse();
        this.request("SkipSyncCheckItem", req, resp, cb);
    }

    /**
     * 配置一个同步任务
     * @param {ConfigureSyncJobRequest} req
     * @param {function(string, ConfigureSyncJobResponse):void} cb
     * @public
     */
    ConfigureSyncJob(req, cb) {
        let resp = new ConfigureSyncJobResponse();
        this.request("ConfigureSyncJob", req, resp, cb);
    }

    /**
     * 调整同步任务规格，此接口只支持按量计费任务的调整，调用此接口后不会立即生效，后台调整时间大概为3~5分钟。调用此接口后可通过查询同步任务信息接口DescribeSyncJobs，获取变配后的状态。
     * @param {ResizeSyncJobRequest} req
     * @param {function(string, ResizeSyncJobResponse):void} cb
     * @public
     */
    ResizeSyncJob(req, cb) {
        let resp = new ResizeSyncJobResponse();
        this.request("ResizeSyncJob", req, resp, cb);
    }

    /**
     * 启动一致性校验任务，启动之前需要先通过接口`CreateCompareTask` 创建一致性校验任务，启动后可通过接口`DescribeCompareTasks` 查询一致性校验任务列表来获得启动后的状态
     * @param {StartCompareRequest} req
     * @param {function(string, StartCompareResponse):void} cb
     * @public
     */
    StartCompare(req, cb) {
        let resp = new StartCompareResponse();
        this.request("StartCompare", req, resp, cb);
    }

    /**
     * 重试数据迁移任务，针对异常情况可进行重试，对于redis在失败时也可重试。注意：此操作跳过校验阶段，直接重新发起任务，相当于从StartMigrationJob开始执行。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     * @param {ResumeMigrateJobRequest} req
     * @param {function(string, ResumeMigrateJobResponse):void} cb
     * @public
     */
    ResumeMigrateJob(req, cb) {
        let resp = new ResumeMigrateJobResponse();
        this.request("ResumeMigrateJob", req, resp, cb);
    }

    /**
     * 本接口（StopMigrateJob）用于终止数据迁移任务。
调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     * @param {StopMigrateJobRequest} req
     * @param {function(string, StopMigrateJobResponse):void} cb
     * @public
     */
    StopMigrateJob(req, cb) {
        let resp = new StopMigrateJobResponse();
        this.request("StopMigrateJob", req, resp, cb);
    }

    /**
     * 暂停处于同步中的数据同步任务。
     * @param {PauseSyncJobRequest} req
     * @param {function(string, PauseSyncJobResponse):void} cb
     * @public
     */
    PauseSyncJob(req, cb) {
        let resp = new PauseSyncJobResponse();
        this.request("PauseSyncJob", req, resp, cb);
    }

    /**
     * 恢复处于已暂停状态的数据同步任务。
     * @param {ContinueSyncJobRequest} req
     * @param {function(string, ContinueSyncJobResponse):void} cb
     * @public
     */
    ContinueSyncJob(req, cb) {
        let resp = new ContinueSyncJobResponse();
        this.request("ContinueSyncJob", req, resp, cb);
    }

    /**
     * 下线同步任务，任务在已隔离状态下可以通过此操作进行任务下线，即彻底删除任务。下线操作后可通过查询同步任务信息接口DescribeSyncJobs获取任务列表查看状态，此操作成功后无法看到此任务表示下线成功。
     * @param {DestroySyncJobRequest} req
     * @param {function(string, DestroySyncJobResponse):void} cb
     * @public
     */
    DestroySyncJob(req, cb) {
        let resp = new DestroySyncJobResponse();
        this.request("DestroySyncJob", req, resp, cb);
    }

    /**
     * 本接口用于查询支持迁移的云数据库实例
     * @param {DescribeMigrateDBInstancesRequest} req
     * @param {function(string, DescribeMigrateDBInstancesResponse):void} cb
     * @public
     */
    DescribeMigrateDBInstances(req, cb) {
        let resp = new DescribeMigrateDBInstancesResponse();
        this.request("DescribeMigrateDBInstances", req, resp, cb);
    }

    /**
     * 本接口用于校验检查项不通过后，可进行跳过此校验项操作，后端将不再校验该项。任何校验步骤都是不应该跳过的，通过校验是能正确执行的前置条件。支持跳过的产品及链路的校验项可 [参考文档](https://cloud.tencent.com/document/product/571/61639)。
     * @param {SkipCheckItemRequest} req
     * @param {function(string, SkipCheckItemResponse):void} cb
     * @public
     */
    SkipCheckItem(req, cb) {
        let resp = new SkipCheckItemResponse();
        this.request("SkipCheckItem", req, resp, cb);
    }

    /**
     * 校验迁移任务，
在开始迁移前, 必须调用本接口创建校验迁移任务, 且校验成功后才能开始迁移. 校验的结果可以通过DescribeMigrationCheckJob查看，
校验成功后,迁移任务若有修改, 则必须重新校验并通过后, 才能开始迁移

     * @param {CreateMigrateCheckJobRequest} req
     * @param {function(string, CreateMigrateCheckJobResponse):void} cb
     * @public
     */
    CreateMigrateCheckJob(req, cb) {
        let resp = new CreateMigrateCheckJobResponse();
        this.request("CreateMigrateCheckJob", req, resp, cb);
    }

    /**
     * 查询同步校验任务结果
     * @param {DescribeCheckSyncJobResultRequest} req
     * @param {function(string, DescribeCheckSyncJobResultResponse):void} cb
     * @public
     */
    DescribeCheckSyncJobResult(req, cb) {
        let resp = new DescribeCheckSyncJobResultResponse();
        this.request("DescribeCheckSyncJobResult", req, resp, cb);
    }

    /**
     * 查询一致性校验任务列表，调用该接口后可通过接口`DescribeCompareTasks` 查询一致性校验任务列表来获得启动后的状态。
     * @param {DescribeCompareTasksRequest} req
     * @param {function(string, DescribeCompareTasksResponse):void} cb
     * @public
     */
    DescribeCompareTasks(req, cb) {
        let resp = new DescribeCompareTasksResponse();
        this.request("DescribeCompareTasks", req, resp, cb);
    }

    /**
     * 修改一致性校验任务，在任务创建后启动之前，可修改一致性校验参数
     * @param {ModifyCompareTaskRequest} req
     * @param {function(string, ModifyCompareTaskResponse):void} cb
     * @public
     */
    ModifyCompareTask(req, cb) {
        let resp = new ModifyCompareTaskResponse();
        this.request("ModifyCompareTask", req, resp, cb);
    }

    /**
     * 查询数据迁移任务列表
     * @param {DescribeMigrationJobsRequest} req
     * @param {function(string, DescribeMigrationJobsResponse):void} cb
     * @public
     */
    DescribeMigrationJobs(req, cb) {
        let resp = new DescribeMigrationJobsResponse();
        this.request("DescribeMigrationJobs", req, resp, cb);
    }

    /**
     * 解除隔离数据迁移任务，用户手动发起隔离后的手动解隔离，只有任务状态为已隔离(手动操作)状态下才能触发此操作。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     * @param {RecoverMigrateJobRequest} req
     * @param {function(string, RecoverMigrateJobResponse):void} cb
     * @public
     */
    RecoverMigrateJob(req, cb) {
        let resp = new RecoverMigrateJobResponse();
        this.request("RecoverMigrateJob", req, resp, cb);
    }

    /**
     * 解除隔离同步任务，任务在已隔离状态下可调用该接口解除隔离状态任务，同时可通过查询同步任务信息接口DescribeSyncJobs，获取操作后状态。
     * @param {RecoverSyncJobRequest} req
     * @param {function(string, RecoverSyncJobResponse):void} cb
     * @public
     */
    RecoverSyncJob(req, cb) {
        let resp = new RecoverSyncJobResponse();
        this.request("RecoverSyncJob", req, resp, cb);
    }

    /**
     * 本接口用于创建数据对比任务，创建成功后会返回数据对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9，创建成功后可通过StartCompare启动一致性校验任务
     * @param {CreateCompareTaskRequest} req
     * @param {function(string, CreateCompareTaskResponse):void} cb
     * @public
     */
    CreateCompareTask(req, cb) {
        let resp = new CreateCompareTaskResponse();
        this.request("CreateCompareTask", req, resp, cb);
    }

    /**
     * 下线数据迁移任务。计费任务必须先调用隔离(IsolateMigrateJob)接口，且只有是**已隔离**状态下，才能调用此接口销毁任务。对于不计费任务，调用隔离(IsolateMigrateJob)接口删除任务操作。
     * @param {DestroyMigrateJobRequest} req
     * @param {function(string, DestroyMigrateJobResponse):void} cb
     * @public
     */
    DestroyMigrateJob(req, cb) {
        let resp = new DestroyMigrateJobResponse();
        this.request("DestroyMigrateJob", req, resp, cb);
    }

    /**
     * 查询某个迁移任务详情
     * @param {DescribeMigrationDetailRequest} req
     * @param {function(string, DescribeMigrationDetailResponse):void} cb
     * @public
     */
    DescribeMigrationDetail(req, cb) {
        let resp = new DescribeMigrationDetailResponse();
        this.request("DescribeMigrationDetail", req, resp, cb);
    }

    /**
     * 重试同步任务，部分可恢复报错情况下，可通过该接口重试同步任务，可通过查询同步任务信息接口DescribeSyncJobs，获取操作后状态。
     * @param {ResumeSyncJobRequest} req
     * @param {function(string, ResumeSyncJobResponse):void} cb
     * @public
     */
    ResumeSyncJob(req, cb) {
        let resp = new ResumeSyncJobResponse();
        this.request("ResumeSyncJob", req, resp, cb);
    }

    /**
     * 本接口用于创建校验后,获取校验的结果. 能查询到当前校验的状态和进度. 
若通过校验, 则可调用'StartMigrateJob' 开始迁移.
若未通过校验, 则能查询到校验失败的原因. 请按照报错, 通过'ModifyMigrationJob'修改迁移配置或是调整源/目标实例的相关参数.
     * @param {DescribeMigrationCheckJobRequest} req
     * @param {function(string, DescribeMigrationCheckJobResponse):void} cb
     * @public
     */
    DescribeMigrationCheckJob(req, cb) {
        let resp = new DescribeMigrationCheckJobResponse();
        this.request("DescribeMigrationCheckJob", req, resp, cb);
    }

    /**
     * 本接口（StartMigrationJob）用于启动迁移任务。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     * @param {StartMigrateJobRequest} req
     * @param {function(string, StartMigrateJobResponse):void} cb
     * @public
     */
    StartMigrateJob(req, cb) {
        let resp = new StartMigrateJobResponse();
        this.request("StartMigrateJob", req, resp, cb);
    }

    /**
     * 调整实例规格，此接口只支持按量计费任务的调整。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     * @param {ModifyMigrateJobSpecRequest} req
     * @param {function(string, ModifyMigrateJobSpecResponse):void} cb
     * @public
     */
    ModifyMigrateJobSpec(req, cb) {
        let resp = new ModifyMigrateJobSpecResponse();
        this.request("ModifyMigrateJobSpec", req, resp, cb);
    }

    /**
     *  隔离退还数据迁移服务。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。对于计费任务，在任务隔离后可进行解除隔离(RecoverMigrationJob)操作或直接进行下线销毁(DestroyMigrateJob)操作。对于不计费任务，调用此接口会直接销毁任务，无法进行恢复操作。
     * @param {IsolateMigrateJobRequest} req
     * @param {function(string, IsolateMigrateJobResponse):void} cb
     * @public
     */
    IsolateMigrateJob(req, cb) {
        let resp = new IsolateMigrateJobResponse();
        this.request("IsolateMigrateJob", req, resp, cb);
    }

    /**
     * 修改一致性校验任务名称
     * @param {ModifyCompareTaskNameRequest} req
     * @param {function(string, ModifyCompareTaskNameResponse):void} cb
     * @public
     */
    ModifyCompareTaskName(req, cb) {
        let resp = new ModifyCompareTaskNameResponse();
        this.request("ModifyCompareTaskName", req, resp, cb);
    }

    /**
     * 修改迁移任务名
     * @param {ModifyMigrateNameRequest} req
     * @param {function(string, ModifyMigrateNameResponse):void} cb
     * @public
     */
    ModifyMigrateName(req, cb) {
        let resp = new ModifyMigrateNameResponse();
        this.request("ModifyMigrateName", req, resp, cb);
    }

    /**
     * 本接口（CompleteMigrateJob）用于完成数据迁移任务。
选择采用增量迁移方式的任务, 需要在迁移进度进入准备完成阶段后, 调用本接口, 停止迁移增量数据。
通过DescribeMigrationJobs接口查询到任务的状态为准备完成（Status="readyComplete"）时，此时可以调用本接口完成迁移任务。

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
