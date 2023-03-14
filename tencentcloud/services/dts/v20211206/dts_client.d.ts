import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyCompareTaskResponse, DescribeSyncJobsResponse, ModifyMigrationJobResponse, ModifyMigrateJobSpecRequest, StartMigrateJobRequest, DestroyMigrateJobRequest, SkipCheckItemResponse, ResizeSyncJobResponse, ResumeMigrateJobResponse, IsolateSyncJobRequest, PauseMigrateJobRequest, ContinueMigrateJobRequest, DescribeCheckSyncJobResultRequest, DestroySyncJobResponse, DescribeCompareReportResponse, IsolateMigrateJobRequest, StopMigrateJobResponse, ModifyCompareTaskNameRequest, CompleteMigrateJobResponse, DescribeMigrateDBInstancesResponse, CreateCheckSyncJobRequest, StopSyncJobRequest, DescribeMigrationDetailRequest, DestroySyncJobRequest, ResizeSyncJobRequest, ResumeSyncJobResponse, ModifyCompareTaskNameResponse, StartSyncJobRequest, PauseSyncJobRequest, CreateMigrateCheckJobResponse, ContinueMigrateJobResponse, CreateMigrationServiceRequest, DescribeCompareTasksRequest, RecoverSyncJobResponse, DeleteCompareTaskResponse, ContinueSyncJobResponse, CompleteMigrateJobRequest, DescribeCompareTasksResponse, StopCompareRequest, DescribeCheckSyncJobResultResponse, StopSyncJobResponse, ModifyMigrateNameResponse, DescribeMigrationJobsResponse, DestroyMigrateJobResponse, SkipSyncCheckItemRequest, SkipSyncCheckItemResponse, IsolateSyncJobResponse, CreateMigrateCheckJobRequest, DescribeMigrationJobsRequest, ContinueSyncJobRequest, CreateMigrationServiceResponse, DescribeMigrationCheckJobResponse, CreateCheckSyncJobResponse, ConfigureSyncJobRequest, DescribeMigrateDBInstancesRequest, ModifyCompareTaskRequest, RecoverSyncJobRequest, ModifyMigrationJobRequest, DescribeSyncJobsRequest, ResumeSyncJobRequest, ConfigureSyncJobResponse, ResumeMigrateJobRequest, PauseSyncJobResponse, StartCompareResponse, CreateCompareTaskResponse, StopCompareResponse, SkipCheckItemRequest, ModifyMigrateJobSpecResponse, CreateSyncJobResponse, CreateCompareTaskRequest, StartCompareRequest, DescribeMigrationCheckJobRequest, DescribeMigrationDetailResponse, ModifyMigrateNameRequest, StartSyncJobResponse, RecoverMigrateJobResponse, DeleteCompareTaskRequest, StopMigrateJobRequest, IsolateMigrateJobResponse, CreateSyncJobRequest, DescribeCompareReportRequest, RecoverMigrateJobRequest, PauseMigrateJobResponse, StartMigrateJobResponse } from "./dts_models";
/**
 * dts client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 配置迁移服务，配置成功后可通过`CreateMigrationCheckJob` 创建迁移校验任务接口发起校验任务，只有校验通过才能启动迁移任务。
     */
    ModifyMigrationJob(req: ModifyMigrationJobRequest, cb?: (error: string, rep: ModifyMigrationJobResponse) => void): Promise<ModifyMigrationJobResponse>;
    /**
     * 查询同步任务信息
     */
    DescribeSyncJobs(req: DescribeSyncJobsRequest, cb?: (error: string, rep: DescribeSyncJobsResponse) => void): Promise<DescribeSyncJobsResponse>;
    /**
     * 购买迁移任务。购买成功后会返回随机生成的迁移任务id列表，也可以通过查询迁移任务任务列表接口`DescribeMigrationJobs`看到购买成功的实例Id。注意，一旦购买成功后源及目标数据库类型，源及目标实例地域不可修改。
     */
    CreateMigrationService(req: CreateMigrationServiceRequest, cb?: (error: string, rep: CreateMigrationServiceResponse) => void): Promise<CreateMigrationServiceResponse>;
    /**
     * 隔离同步任务，隔离后可通过查询同步任务信息接口DescribeSyncJobs获取隔离后状态。在任务隔离后可进行解除隔离(RecoverSyncJob)操作或直接进行下线操作。对于不计费任务，调用此接口后会直接删除任务，无法进行恢复操作。
     */
    IsolateSyncJob(req: IsolateSyncJobRequest, cb?: (error: string, rep: IsolateSyncJobResponse) => void): Promise<IsolateSyncJobResponse>;
    /**
     * 终止一致性校验任务
     */
    StopCompare(req: StopCompareRequest, cb?: (error: string, rep: StopCompareResponse) => void): Promise<StopCompareResponse>;
    /**
     * 创建一个同步任务
     */
    CreateSyncJob(req: CreateSyncJobRequest, cb?: (error: string, rep: CreateSyncJobResponse) => void): Promise<CreateSyncJobResponse>;
    /**
     * 删除一致性校验任务。当一致性校验任务状态为success、failed、canceled 时可以执行此操作。
     */
    DeleteCompareTask(req: DeleteCompareTaskRequest, cb?: (error: string, rep: DeleteCompareTaskResponse) => void): Promise<DeleteCompareTaskResponse>;
    /**
     * 启动同步任务
     */
    StartSyncJob(req: StartSyncJobRequest, cb?: (error: string, rep: StartSyncJobResponse) => void): Promise<StartSyncJobResponse>;
    /**
     * 结束同步任务，操作后可通过查询同步任务信息接口DescribeSyncJobs，获取操作后的状态。
     */
    StopSyncJob(req: StopSyncJobRequest, cb?: (error: string, rep: StopSyncJobResponse) => void): Promise<StopSyncJobResponse>;
    /**
     * 校验同步任务，检查必要参数和周边配置。
     */
    CreateCheckSyncJob(req: CreateCheckSyncJobRequest, cb?: (error: string, rep: CreateCheckSyncJobResponse) => void): Promise<CreateCheckSyncJobResponse>;
    /**
     * 查询一致性校验任务详情
     */
    DescribeCompareReport(req: DescribeCompareReportRequest, cb?: (error: string, rep: DescribeCompareReportResponse) => void): Promise<DescribeCompareReportResponse>;
    /**
     * 恢复一个暂停中的迁移任务。
     */
    ContinueMigrateJob(req: ContinueMigrateJobRequest, cb?: (error: string, rep: ContinueMigrateJobResponse) => void): Promise<ContinueMigrateJobResponse>;
    /**
     * 暂停一个迁移任务。
     */
    PauseMigrateJob(req: PauseMigrateJobRequest, cb?: (error: string, rep: PauseMigrateJobResponse) => void): Promise<PauseMigrateJobResponse>;
    /**
     * 本接口用于校验检查项不通过后，可进行跳过此校验项操作，后端将不再校验该项。任何校验步骤都是不应该跳过的，通过校验是能正确执行的前置条件。支持跳过的产品及链路的校验项可 [参考文档](https://cloud.tencent.com/document/product/571/61639)。
     */
    SkipSyncCheckItem(req: SkipSyncCheckItemRequest, cb?: (error: string, rep: SkipSyncCheckItemResponse) => void): Promise<SkipSyncCheckItemResponse>;
    /**
     * 配置一个同步任务
     */
    ConfigureSyncJob(req: ConfigureSyncJobRequest, cb?: (error: string, rep: ConfigureSyncJobResponse) => void): Promise<ConfigureSyncJobResponse>;
    /**
     * 调整同步任务规格，此接口只支持按量计费任务的调整，调用此接口后不会立即生效，后台调整时间大概为3~5分钟。调用此接口后可通过查询同步任务信息接口DescribeSyncJobs，获取变配后的状态。
     */
    ResizeSyncJob(req: ResizeSyncJobRequest, cb?: (error: string, rep: ResizeSyncJobResponse) => void): Promise<ResizeSyncJobResponse>;
    /**
     * 启动一致性校验任务，启动之前需要先通过接口`CreateCompareTask` 创建一致性校验任务，启动后可通过接口`DescribeCompareTasks` 查询一致性校验任务列表来获得启动后的状态
     */
    StartCompare(req: StartCompareRequest, cb?: (error: string, rep: StartCompareResponse) => void): Promise<StartCompareResponse>;
    /**
     * 重试数据迁移任务，针对异常情况可进行重试，对于redis在失败时也可重试。注意：此操作跳过校验阶段，直接重新发起任务，相当于从StartMigrationJob开始执行。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     */
    ResumeMigrateJob(req: ResumeMigrateJobRequest, cb?: (error: string, rep: ResumeMigrateJobResponse) => void): Promise<ResumeMigrateJobResponse>;
    /**
     * 本接口（StopMigrateJob）用于终止数据迁移任务。
调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     */
    StopMigrateJob(req: StopMigrateJobRequest, cb?: (error: string, rep: StopMigrateJobResponse) => void): Promise<StopMigrateJobResponse>;
    /**
     * 暂停处于同步中的数据同步任务。
     */
    PauseSyncJob(req: PauseSyncJobRequest, cb?: (error: string, rep: PauseSyncJobResponse) => void): Promise<PauseSyncJobResponse>;
    /**
     * 恢复处于已暂停状态的数据同步任务。
     */
    ContinueSyncJob(req: ContinueSyncJobRequest, cb?: (error: string, rep: ContinueSyncJobResponse) => void): Promise<ContinueSyncJobResponse>;
    /**
     * 下线同步任务，任务在已隔离状态下可以通过此操作进行任务下线，即彻底删除任务。下线操作后可通过查询同步任务信息接口DescribeSyncJobs获取任务列表查看状态，此操作成功后无法看到此任务表示下线成功。
     */
    DestroySyncJob(req: DestroySyncJobRequest, cb?: (error: string, rep: DestroySyncJobResponse) => void): Promise<DestroySyncJobResponse>;
    /**
     * 本接口用于查询支持迁移的云数据库实例
     */
    DescribeMigrateDBInstances(req: DescribeMigrateDBInstancesRequest, cb?: (error: string, rep: DescribeMigrateDBInstancesResponse) => void): Promise<DescribeMigrateDBInstancesResponse>;
    /**
     * 本接口用于校验检查项不通过后，可进行跳过此校验项操作，后端将不再校验该项。任何校验步骤都是不应该跳过的，通过校验是能正确执行的前置条件。支持跳过的产品及链路的校验项可 [参考文档](https://cloud.tencent.com/document/product/571/61639)。
     */
    SkipCheckItem(req: SkipCheckItemRequest, cb?: (error: string, rep: SkipCheckItemResponse) => void): Promise<SkipCheckItemResponse>;
    /**
     * 校验迁移任务，
在开始迁移前, 必须调用本接口创建校验迁移任务, 且校验成功后才能开始迁移. 校验的结果可以通过DescribeMigrationCheckJob查看，
校验成功后,迁移任务若有修改, 则必须重新校验并通过后, 才能开始迁移

     */
    CreateMigrateCheckJob(req: CreateMigrateCheckJobRequest, cb?: (error: string, rep: CreateMigrateCheckJobResponse) => void): Promise<CreateMigrateCheckJobResponse>;
    /**
     * 查询同步校验任务结果，检查必要参数和周边配置
     */
    DescribeCheckSyncJobResult(req: DescribeCheckSyncJobResultRequest, cb?: (error: string, rep: DescribeCheckSyncJobResultResponse) => void): Promise<DescribeCheckSyncJobResultResponse>;
    /**
     * 查询一致性校验任务列表，调用该接口后可通过接口`DescribeCompareTasks` 查询一致性校验任务列表来获得启动后的状态。
     */
    DescribeCompareTasks(req: DescribeCompareTasksRequest, cb?: (error: string, rep: DescribeCompareTasksResponse) => void): Promise<DescribeCompareTasksResponse>;
    /**
     * 修改一致性校验任务，在任务创建后启动之前，可修改一致性校验参数
     */
    ModifyCompareTask(req: ModifyCompareTaskRequest, cb?: (error: string, rep: ModifyCompareTaskResponse) => void): Promise<ModifyCompareTaskResponse>;
    /**
     * 查询数据迁移任务列表
     */
    DescribeMigrationJobs(req: DescribeMigrationJobsRequest, cb?: (error: string, rep: DescribeMigrationJobsResponse) => void): Promise<DescribeMigrationJobsResponse>;
    /**
     * 解除隔离数据迁移任务，用户手动发起隔离后的手动解隔离，只有任务状态为已隔离(手动操作)状态下才能触发此操作。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     */
    RecoverMigrateJob(req: RecoverMigrateJobRequest, cb?: (error: string, rep: RecoverMigrateJobResponse) => void): Promise<RecoverMigrateJobResponse>;
    /**
     * 解除隔离同步任务，任务在已隔离状态下可调用该接口解除隔离状态任务，同时可通过查询同步任务信息接口DescribeSyncJobs，获取操作后状态。
     */
    RecoverSyncJob(req: RecoverSyncJobRequest, cb?: (error: string, rep: RecoverSyncJobResponse) => void): Promise<RecoverSyncJobResponse>;
    /**
     * 本接口用于创建数据对比任务，创建成功后会返回数据对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9，创建成功后可通过StartCompare启动一致性校验任务
     */
    CreateCompareTask(req: CreateCompareTaskRequest, cb?: (error: string, rep: CreateCompareTaskResponse) => void): Promise<CreateCompareTaskResponse>;
    /**
     * 下线数据迁移任务。计费任务必须先调用隔离(IsolateMigrateJob)接口，且只有是**已隔离**状态下，才能调用此接口销毁任务。对于不计费任务，调用隔离(IsolateMigrateJob)接口删除任务操作。
     */
    DestroyMigrateJob(req: DestroyMigrateJobRequest, cb?: (error: string, rep: DestroyMigrateJobResponse) => void): Promise<DestroyMigrateJobResponse>;
    /**
     * 查询某个迁移任务详情
     */
    DescribeMigrationDetail(req: DescribeMigrationDetailRequest, cb?: (error: string, rep: DescribeMigrationDetailResponse) => void): Promise<DescribeMigrationDetailResponse>;
    /**
     * 重试同步任务，部分可恢复报错情况下，可通过该接口重试同步任务，可通过查询同步任务信息接口DescribeSyncJobs，获取操作后状态。
     */
    ResumeSyncJob(req: ResumeSyncJobRequest, cb?: (error: string, rep: ResumeSyncJobResponse) => void): Promise<ResumeSyncJobResponse>;
    /**
     * 本接口用于创建校验后,获取校验的结果. 能查询到当前校验的状态和进度.
若通过校验, 则可调用'StartMigrateJob' 开始迁移.
若未通过校验, 则能查询到校验失败的原因. 请按照报错, 通过'ModifyMigrationJob'修改迁移配置或是调整源/目标实例的相关参数.
     */
    DescribeMigrationCheckJob(req: DescribeMigrationCheckJobRequest, cb?: (error: string, rep: DescribeMigrationCheckJobResponse) => void): Promise<DescribeMigrationCheckJobResponse>;
    /**
     * 本接口（StartMigrationJob）用于启动迁移任务。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     */
    StartMigrateJob(req: StartMigrateJobRequest, cb?: (error: string, rep: StartMigrateJobResponse) => void): Promise<StartMigrateJobResponse>;
    /**
     * 调整实例规格，此接口只支持按量计费任务的调整。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。
     */
    ModifyMigrateJobSpec(req: ModifyMigrateJobSpecRequest, cb?: (error: string, rep: ModifyMigrateJobSpecResponse) => void): Promise<ModifyMigrateJobSpecResponse>;
    /**
     *  隔离退还数据迁移服务。调用此接口后可通过查询迁移服务列表接口`DescribeMigrationJobs`来查询当前任务状态。对于计费任务，在任务隔离后可进行解除隔离(RecoverMigrationJob)操作或直接进行下线销毁(DestroyMigrateJob)操作。对于不计费任务，调用此接口会直接销毁任务，无法进行恢复操作。
     */
    IsolateMigrateJob(req: IsolateMigrateJobRequest, cb?: (error: string, rep: IsolateMigrateJobResponse) => void): Promise<IsolateMigrateJobResponse>;
    /**
     * 修改一致性校验任务名称
     */
    ModifyCompareTaskName(req: ModifyCompareTaskNameRequest, cb?: (error: string, rep: ModifyCompareTaskNameResponse) => void): Promise<ModifyCompareTaskNameResponse>;
    /**
     * 修改迁移任务名
     */
    ModifyMigrateName(req: ModifyMigrateNameRequest, cb?: (error: string, rep: ModifyMigrateNameResponse) => void): Promise<ModifyMigrateNameResponse>;
    /**
     * 本接口（CompleteMigrateJob）用于完成数据迁移任务。
选择采用增量迁移方式的任务, 需要在迁移进度进入准备完成阶段后, 调用本接口, 停止迁移增量数据。
通过DescribeMigrationJobs接口查询到任务的状态为准备完成（Status="readyComplete"）时，此时可以调用本接口完成迁移任务。

     */
    CompleteMigrateJob(req: CompleteMigrateJobRequest, cb?: (error: string, rep: CompleteMigrateJobResponse) => void): Promise<CompleteMigrateJobResponse>;
}
