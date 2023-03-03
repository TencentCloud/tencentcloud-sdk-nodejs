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
 * dts client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("dts.tencentcloudapi.com", "2021-12-06", clientConfig);
    }
    /**
     * 配置迁移服务，配置成功后可通过`CreateMigrationCheckJob` 创建迁移校验任务接口发起校验任务，只有校验通过才能启动迁移任务。
     */
    async ModifyMigrationJob(req, cb) {
        return this.request("ModifyMigrationJob", req, cb);
    }
    /**
     * 查询同步任务信息
     */
    async DescribeSyncJobs(req, cb) {
        return this.request("DescribeSyncJobs", req, cb);
    }
    /**
     * 购买迁移任务。购买成功后会返回随机生成的迁移任务id列表，也可以通过查询迁移任务任务列表接口`DescribeMigrationJobs`看到购买成功的实例Id。注意，一旦购买成功后源及目标数据库类型，源及目标实例地域不可修改。
     */
    async CreateMigrationService(req, cb) {
        return this.request("CreateMigrationService", req, cb);
    }
    /**
     * 隔离同步任务，隔离后可通过查询同步任务信息接口DescribeSyncJobs获取隔离后状态。在任务隔离后可进行解除隔离(RecoverSyncJob)操作或直接进行下线操作。对于不计费任务，调用此接口后会直接删除任务，无法进行恢复操作。
     */
    async IsolateSyncJob(req, cb) {
        return this.request("IsolateSyncJob", req, cb);
    }
    /**
     * 终止一致性校验任务
     */
    async StopCompare(req, cb) {
        return this.request("StopCompare", req, cb);
    }
    /**
     * 创建一个同步任务
     */
    async CreateSyncJob(req, cb) {
        return this.request("CreateSyncJob", req, cb);
    }
    /**
     * 删除一致性校验任务。当一致性校验任务状态为success、failed、canceled 时可以执行此操作。
     */
    async DeleteCompareTask(req, cb) {
        return this.request("DeleteCompareTask", req, cb);
    }
    /**
     * 启动同步任务
     */
    async StartSyncJob(req, cb) {
        return this.request("StartSyncJob", req, cb);
    }
    /**
     * 结束同步任务，操作后可通过查询同步任务信息接口DescribeSyncJobs，获取操作后的状态。
     */
    async StopSyncJob(req, cb) {
        return this.request("StopSyncJob", req, cb);
    }
    /**
     * 校验同步任务，检查必要参数和周边配置。
     */
    async CreateCheckSyncJob(req, cb) {
        return this.request("CreateCheckSyncJob", req, cb);
    }
    /**
     * 查询一致性校验任务详情
     */
    async DescribeCompareReport(req, cb) {
        return this.request("DescribeCompareReport", req, cb);
    }
    /**
     * 恢复一个暂停中的迁移任务。
     */
    async ContinueMigrateJob(req, cb) {
        return this.request("ContinueMigrateJob", req, cb);
    }
    /**
     * 暂停一个迁移任务。
     */
    async PauseMigrateJob(req, cb) {
        return this.request("PauseMigrateJob", req, cb);
    }
    /**
     * 本接口用于校验检查项不通过后，可进行跳过此校验项操作，后端将不再校验该项。任何校验步骤都是不应该跳过的，通过校验是能正确执行的前置条件。支持跳过的产品及链路的校验项可 [参考文档](https://cloud.tencent.com/document/product/571/61639)。
     */
    async SkipSyncCheckItem(req, cb) {
        return this.request("SkipSyncCheckItem", req, cb);
    }
    /**
     * 配置一个同步任务
     */
    async ConfigureSyncJob(req, cb) {
        return this.request("ConfigureSyncJob", req, cb);
    }
    /**
     * 调整同步任务规格，此接口只支持按量计费任务的调整，调用此接口后不会立即生效，后台调整时间大概为3~5分钟。调用此接口后可通过查询同步任务信息接口DescribeSyncJobs，获取变配后的状态。
     */
    async ResizeSyncJob(req, cb) {
        return this.request("ResizeSyncJob", req, cb);
    }
    /**
     * 启动一致性校验任务，启动之前需要先通过接口`CreateCompareTask` 创建一致性校验任务，启动后可通过接口`DescribeCompareTasks` 查询一致性校验任务列表来获得启动后的状态
     */
    async StartCompare(req, cb) {
        return this.request("StartCompare", req, cb);
    }
    /**
     * 重试数据迁移任务，针对异常情况可进行重试，对于redis在失败时也可重试。注意：此操作跳过校验阶段，直接重新发起任务，相当于从StartMigrationJob开始执行。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     */
    async ResumeMigrateJob(req, cb) {
        return this.request("ResumeMigrateJob", req, cb);
    }
    /**
     * 本接口（StopMigrateJob）用于终止数据迁移任务。
调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     */
    async StopMigrateJob(req, cb) {
        return this.request("StopMigrateJob", req, cb);
    }
    /**
     * 暂停处于同步中的数据同步任务。
     */
    async PauseSyncJob(req, cb) {
        return this.request("PauseSyncJob", req, cb);
    }
    /**
     * 恢复处于已暂停状态的数据同步任务。
     */
    async ContinueSyncJob(req, cb) {
        return this.request("ContinueSyncJob", req, cb);
    }
    /**
     * 下线同步任务，任务在已隔离状态下可以通过此操作进行任务下线，即彻底删除任务。下线操作后可通过查询同步任务信息接口DescribeSyncJobs获取任务列表查看状态，此操作成功后无法看到此任务表示下线成功。
     */
    async DestroySyncJob(req, cb) {
        return this.request("DestroySyncJob", req, cb);
    }
    /**
     * 本接口用于查询支持迁移的云数据库实例
     */
    async DescribeMigrateDBInstances(req, cb) {
        return this.request("DescribeMigrateDBInstances", req, cb);
    }
    /**
     * 本接口用于校验检查项不通过后，可进行跳过此校验项操作，后端将不再校验该项。任何校验步骤都是不应该跳过的，通过校验是能正确执行的前置条件。支持跳过的产品及链路的校验项可 [参考文档](https://cloud.tencent.com/document/product/571/61639)。
     */
    async SkipCheckItem(req, cb) {
        return this.request("SkipCheckItem", req, cb);
    }
    /**
     * 校验迁移任务，
在开始迁移前, 必须调用本接口创建校验迁移任务, 且校验成功后才能开始迁移. 校验的结果可以通过DescribeMigrationCheckJob查看，
校验成功后,迁移任务若有修改, 则必须重新校验并通过后, 才能开始迁移

     */
    async CreateMigrateCheckJob(req, cb) {
        return this.request("CreateMigrateCheckJob", req, cb);
    }
    /**
     * 查询同步校验任务结果，检查必要参数和周边配置
     */
    async DescribeCheckSyncJobResult(req, cb) {
        return this.request("DescribeCheckSyncJobResult", req, cb);
    }
    /**
     * 查询一致性校验任务列表，调用该接口后可通过接口`DescribeCompareTasks` 查询一致性校验任务列表来获得启动后的状态。
     */
    async DescribeCompareTasks(req, cb) {
        return this.request("DescribeCompareTasks", req, cb);
    }
    /**
     * 修改一致性校验任务，在任务创建后启动之前，可修改一致性校验参数
     */
    async ModifyCompareTask(req, cb) {
        return this.request("ModifyCompareTask", req, cb);
    }
    /**
     * 查询数据迁移任务列表
     */
    async DescribeMigrationJobs(req, cb) {
        return this.request("DescribeMigrationJobs", req, cb);
    }
    /**
     * 解除隔离数据迁移任务，用户手动发起隔离后的手动解隔离，只有任务状态为已隔离(手动操作)状态下才能触发此操作。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     */
    async RecoverMigrateJob(req, cb) {
        return this.request("RecoverMigrateJob", req, cb);
    }
    /**
     * 解除隔离同步任务，任务在已隔离状态下可调用该接口解除隔离状态任务，同时可通过查询同步任务信息接口DescribeSyncJobs，获取操作后状态。
     */
    async RecoverSyncJob(req, cb) {
        return this.request("RecoverSyncJob", req, cb);
    }
    /**
     * 本接口用于创建数据对比任务，创建成功后会返回数据对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9，创建成功后可通过StartCompare启动一致性校验任务
     */
    async CreateCompareTask(req, cb) {
        return this.request("CreateCompareTask", req, cb);
    }
    /**
     * 下线数据迁移任务。计费任务必须先调用隔离(IsolateMigrateJob)接口，且只有是**已隔离**状态下，才能调用此接口销毁任务。对于不计费任务，调用隔离(IsolateMigrateJob)接口删除任务操作。
     */
    async DestroyMigrateJob(req, cb) {
        return this.request("DestroyMigrateJob", req, cb);
    }
    /**
     * 查询某个迁移任务详情
     */
    async DescribeMigrationDetail(req, cb) {
        return this.request("DescribeMigrationDetail", req, cb);
    }
    /**
     * 重试同步任务，部分可恢复报错情况下，可通过该接口重试同步任务，可通过查询同步任务信息接口DescribeSyncJobs，获取操作后状态。
     */
    async ResumeSyncJob(req, cb) {
        return this.request("ResumeSyncJob", req, cb);
    }
    /**
     * 本接口用于创建校验后,获取校验的结果. 能查询到当前校验的状态和进度.
若通过校验, 则可调用'StartMigrateJob' 开始迁移.
若未通过校验, 则能查询到校验失败的原因. 请按照报错, 通过'ModifyMigrationJob'修改迁移配置或是调整源/目标实例的相关参数.
     */
    async DescribeMigrationCheckJob(req, cb) {
        return this.request("DescribeMigrationCheckJob", req, cb);
    }
    /**
     * 本接口（StartMigrationJob）用于启动迁移任务。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     */
    async StartMigrateJob(req, cb) {
        return this.request("StartMigrateJob", req, cb);
    }
    /**
     * 调整实例规格，此接口只支持按量计费任务的调整。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     */
    async ModifyMigrateJobSpec(req, cb) {
        return this.request("ModifyMigrateJobSpec", req, cb);
    }
    /**
     *  隔离退还数据迁移服务。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。对于计费任务，在任务隔离后可进行解除隔离(RecoverMigrationJob)操作或直接进行下线销毁(DestroyMigrateJob)操作。对于不计费任务，调用此接口会直接销毁任务，无法进行恢复操作。
     */
    async IsolateMigrateJob(req, cb) {
        return this.request("IsolateMigrateJob", req, cb);
    }
    /**
     * 修改一致性校验任务名称
     */
    async ModifyCompareTaskName(req, cb) {
        return this.request("ModifyCompareTaskName", req, cb);
    }
    /**
     * 修改迁移任务名
     */
    async ModifyMigrateName(req, cb) {
        return this.request("ModifyMigrateName", req, cb);
    }
    /**
     * 本接口（CompleteMigrateJob）用于完成数据迁移任务。
选择采用增量迁移方式的任务, 需要在迁移进度进入准备完成阶段后, 调用本接口, 停止迁移增量数据。
通过DescribeMigrationJobs接口查询到任务的状态为准备完成（Status="readyComplete"）时，此时可以调用本接口完成迁移任务。

     */
    async CompleteMigrateJob(req, cb) {
        return this.request("CompleteMigrateJob", req, cb);
    }
}
exports.Client = Client;
