import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeSyncJobsResponse, DescribeMigrateJobsResponse, DeleteMigrateJobResponse, CreateMigrateCheckJobRequest, ModifySubscribeVipVportRequest, ModifySubscribeNameResponse, CreateSyncJobResponse, DescribeMigrateCheckJobRequest, IsolateSubscribeResponse, ModifySubscribeObjectsResponse, SwitchDrToMasterRequest, StartSyncJobRequest, CreateMigrateJobRequest, ModifySubscribeNameRequest, ModifySubscribeConsumeTimeResponse, DescribeSubscribeConfResponse, DescribeAsyncRequestInfoRequest, ModifyMigrateJobRequest, CreateSubscribeRequest, CreateMigrateCheckJobResponse, ModifySubscribeObjectsRequest, DescribeMigrateCheckJobResponse, ActivateSubscribeRequest, OfflineIsolatedSubscribeRequest, DescribeSubscribesRequest, ResetSubscribeResponse, StartSyncJobResponse, DescribeSubscribesResponse, CreateSyncCheckJobResponse, StopMigrateJobRequest, DescribeSyncCheckJobRequest, DescribeRegionConfResponse, ModifySyncJobResponse, DescribeAsyncRequestInfoResponse, CompleteMigrateJobRequest, ResetSubscribeRequest, ModifySubscribeConsumeTimeRequest, SwitchDrToMasterResponse, ModifyMigrateJobResponse, CreateSyncJobRequest, DescribeSyncJobsRequest, DescribeMigrateJobsRequest, ModifySubscribeAutoRenewFlagResponse, StopMigrateJobResponse, OfflineIsolatedSubscribeResponse, IsolateSubscribeRequest, ModifySubscribeAutoRenewFlagRequest, DeleteSyncJobResponse, CreateSyncCheckJobRequest, ModifySyncJobRequest, DescribeRegionConfRequest, CompleteMigrateJobResponse, StartMigrateJobResponse, CreateMigrateJobResponse, DescribeSubscribeConfRequest, ModifySubscribeVipVportResponse, DeleteMigrateJobRequest, DeleteSyncJobRequest, ActivateSubscribeResponse, CreateSubscribeResponse, DescribeSyncCheckJobResponse, StartMigrateJobRequest } from "./dts_models";
/**
 * dts client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除灾备同步任务 （运行中的同步任务不能删除）。
     */
    DeleteSyncJob(req: DeleteSyncJobRequest, cb?: (error: string, rep: DeleteSyncJobResponse) => void): Promise<DeleteSyncJobResponse>;
    /**
     * 查询在迁移平台发起的灾备同步任务
     */
    DescribeSyncJobs(req: DescribeSyncJobsRequest, cb?: (error: string, rep: DescribeSyncJobsResponse) => void): Promise<DescribeSyncJobsResponse>;
    /**
     * 本接口用于配置数据订阅，只有在未配置状态的订阅实例才能调用此接口。
     */
    ActivateSubscribe(req: ActivateSubscribeRequest, cb?: (error: string, rep: ActivateSubscribeResponse) => void): Promise<ActivateSubscribeResponse>;
    /**
     * 修改灾备同步任务.
当同步任务处于下述状态时, 允许调用本接口: 同步任务创建中, 创建完成, 校验成功, 校验失败.
源实例和目标实例信息不允许修改，可以修改任务名、需要同步的库表。
     */
    ModifySyncJob(req: ModifySyncJobRequest, cb?: (error: string, rep: ModifySyncJobResponse) => void): Promise<ModifySyncJobResponse>;
    /**
     * 本接口(CreateSyncJob)用于创建灾备同步任务。
创建同步任务后，可以通过 CreateSyncCheckJob 接口发起校验任务。校验成功后才可以通过 StartSyncJob 接口启动同步任务。
     */
    CreateSyncJob(req: CreateSyncJobRequest, cb?: (error: string, rep: CreateSyncJobResponse) => void): Promise<CreateSyncJobResponse>;
    /**
     * 本接口(ModifySubscribeObjects)用于修改数据订阅通道的订阅规则
     */
    ModifySubscribeObjects(req: ModifySubscribeObjectsRequest, cb?: (error: string, rep: ModifySubscribeObjectsResponse) => void): Promise<ModifySubscribeObjectsResponse>;
    /**
     * 创建的灾备同步任务在通过 CreateSyncCheckJob 和 DescribeSyncCheckJob 确定校验成功后，可以调用该接口启动同步
     */
    StartSyncJob(req: StartSyncJobRequest, cb?: (error: string, rep: StartSyncJobResponse) => void): Promise<StartSyncJobResponse>;
    /**
     * 本接口用于创建校验后,获取校验的结果. 能查询到当前校验的状态和进度.
若通过校验, 则可调用'StartMigrateJob' 开始迁移.
若未通过校验, 则能查询到校验失败的原因. 请按照报错, 通过'ModifyMigrateJob'修改迁移配置或是调整源/目标实例的相关参数.
     */
    DescribeMigrateCheckJob(req: DescribeMigrateCheckJobRequest, cb?: (error: string, rep: DescribeMigrateCheckJobResponse) => void): Promise<DescribeMigrateCheckJobResponse>;
    /**
     * 本接口（DescribeAsyncRequestInfo）用于查询任务执行结果
     */
    DescribeAsyncRequestInfo(req: DescribeAsyncRequestInfoRequest, cb?: (error: string, rep: DescribeAsyncRequestInfoResponse) => void): Promise<DescribeAsyncRequestInfoResponse>;
    /**
     * 将灾备升级为主实例，停止从原来所属主实例的同步，断开主备关系。
     */
    SwitchDrToMaster(req: SwitchDrToMasterRequest, cb?: (error: string, rep: SwitchDrToMasterResponse) => void): Promise<SwitchDrToMasterResponse>;
    /**
     * 修改订阅实例自动续费标识
     */
    ModifySubscribeAutoRenewFlag(req: ModifySubscribeAutoRenewFlagRequest, cb?: (error: string, rep: ModifySubscribeAutoRenewFlagResponse) => void): Promise<ModifySubscribeAutoRenewFlagResponse>;
    /**
     * 本接口（StopMigrateJob）用于撤销数据迁移任务。
在迁移过程中允许调用该接口撤销迁移, 撤销迁移的任务会失败。通过DescribeMigrateJobs接口查询到任务状态为运行中（status=7）或准备完成（status=8）时，才能撤销数据迁移任务。
     */
    StopMigrateJob(req: StopMigrateJobRequest, cb?: (error: string, rep: StopMigrateJobResponse) => void): Promise<StopMigrateJobResponse>;
    /**
     * 本接口（DescribeRegionConf）用于查询可售卖订阅实例的地域
     */
    DescribeRegionConf(req?: DescribeRegionConfRequest, cb?: (error: string, rep: DescribeRegionConfResponse) => void): Promise<DescribeRegionConfResponse>;
    /**
     * 查询数据迁移任务.
如果是金融区链路, 请使用域名: https://dts.ap-shenzhen-fsi.tencentcloudapi.com
     */
    DescribeMigrateJobs(req: DescribeMigrateJobsRequest, cb?: (error: string, rep: DescribeMigrateJobsResponse) => void): Promise<DescribeMigrateJobsResponse>;
    /**
     * 本接口(DescribeSubscribes)获取数据订阅实例信息列表，默认分页，每次返回20条
     */
    DescribeSubscribes(req: DescribeSubscribesRequest, cb?: (error: string, rep: DescribeSubscribesResponse) => void): Promise<DescribeSubscribesResponse>;
    /**
     * 本接口用于在通过 CreateSyncCheckJob 接口创建灾备同步校验任务后，获取校验的结果。能查询到当前校验的状态和进度。
若通过校验, 则可调用 StartSyncJob 启动同步任务。
若未通过校验, 则会返回校验失败的原因。 可通过 ModifySyncJob 修改配置，然后再次发起校验。
校验任务需要大概约30秒，当返回的 Status 不为 finished 时表示尚未校验完成，需要轮询该接口。
如果 Status=finished 且 CheckFlag=1 时表示校验成功。
如果 Status=finished 且 CheckFlag !=1 时表示校验失败。
     */
    DescribeSyncCheckJob(req: DescribeSyncCheckJobRequest, cb?: (error: string, rep: DescribeSyncCheckJobResponse) => void): Promise<DescribeSyncCheckJobResponse>;
    /**
     * 本接口（CreateMigrateJob）用于创建数据迁移任务。

如果是金融区链路, 请使用域名: dts.ap-shenzhen-fsi.tencentcloudapi.com
     */
    CreateMigrateJob(req: CreateMigrateJobRequest, cb?: (error: string, rep: CreateMigrateJobResponse) => void): Promise<CreateMigrateJobResponse>;
    /**
     * 本接口(ModifySubscribeVipVport)用于修改数据订阅实例的IP和端口号
     */
    ModifySubscribeVipVport(req: ModifySubscribeVipVportRequest, cb?: (error: string, rep: ModifySubscribeVipVportResponse) => void): Promise<ModifySubscribeVipVportResponse>;
    /**
     * 创建校验迁移任务
在开始迁移前, 必须调用本接口创建校验, 且校验成功后才能开始迁移. 校验的结果可以通过DescribeMigrateCheckJob查看.
校验成功后,迁移任务若有修改, 则必须重新创建校验并通过后, 才能开始迁移.
     */
    CreateMigrateCheckJob(req: CreateMigrateCheckJobRequest, cb?: (error: string, rep: CreateMigrateCheckJobResponse) => void): Promise<CreateMigrateCheckJobResponse>;
    /**
     * 本接口(ModifySubscribeConsumeTime)用于修改数据订阅通道的消费时间点
     */
    ModifySubscribeConsumeTime(req: ModifySubscribeConsumeTimeRequest, cb?: (error: string, rep: ModifySubscribeConsumeTimeResponse) => void): Promise<ModifySubscribeConsumeTimeResponse>;
    /**
     * 本接口(ModifySubscribeName)用于修改数据订阅实例的名称
     */
    ModifySubscribeName(req: ModifySubscribeNameRequest, cb?: (error: string, rep: ModifySubscribeNameResponse) => void): Promise<ModifySubscribeNameResponse>;
    /**
     * 在调用 StartSyncJob 接口启动灾备同步前, 必须调用本接口创建校验, 且校验成功后才能开始同步数据. 校验的结果可以通过 DescribeSyncCheckJob 查看.
校验成功后才能启动同步.
     */
    CreateSyncCheckJob(req: CreateSyncCheckJobRequest, cb?: (error: string, rep: CreateSyncCheckJobResponse) => void): Promise<CreateSyncCheckJobResponse>;
    /**
     * 本接口(CreateSubscribe)用于创建一个数据订阅实例。
     */
    CreateSubscribe(req: CreateSubscribeRequest, cb?: (error: string, rep: CreateSubscribeResponse) => void): Promise<CreateSubscribeResponse>;
    /**
     * 本接口(ResetSubscribe)用于重置数据订阅实例，已经激活的数据订阅实例，重置后可以使用ActivateSubscribe接口绑定其他的数据库实例
     */
    ResetSubscribe(req: ResetSubscribeRequest, cb?: (error: string, rep: ResetSubscribeResponse) => void): Promise<ResetSubscribeResponse>;
    /**
     * 本接口（StartMigrationJob）用于启动迁移任务。非定时迁移任务会在调用后立即开始迁移，定时任务则会开始倒计时。
调用此接口前，请务必先使用CreateMigrateCheckJob校验数据迁移任务，并通过DescribeMigrateJobs接口查询到任务状态为校验通过（status=4）时，才能启动数据迁移任务。
     */
    StartMigrateJob(req: StartMigrateJobRequest, cb?: (error: string, rep: StartMigrateJobResponse) => void): Promise<StartMigrateJobResponse>;
    /**
     * 本接口（ModifyMigrateJob）用于修改数据迁移任务。
当迁移任务处于下述状态时，允许调用本接口修改迁移任务：迁移创建中（status=1）、 校验成功(status=4)、校验失败(status=5)、迁移失败(status=10)。但源实例、目标实例类型和目标实例地域不允许修改。

如果是金融区链路, 请使用域名: dts.ap-shenzhen-fsi.tencentcloudapi.com
     */
    ModifyMigrateJob(req: ModifyMigrateJobRequest, cb?: (error: string, rep: ModifyMigrateJobResponse) => void): Promise<ModifyMigrateJobResponse>;
    /**
     * 本接口（OfflineIsolatedSubscribe）用于下线已隔离的数据订阅实例
     */
    OfflineIsolatedSubscribe(req: OfflineIsolatedSubscribeRequest, cb?: (error: string, rep: OfflineIsolatedSubscribeResponse) => void): Promise<OfflineIsolatedSubscribeResponse>;
    /**
     * 本接口（IsolateSubscribe）用于隔离小时计费的订阅实例。调用后，订阅实例将不能使用，同时停止计费。
     */
    IsolateSubscribe(req: IsolateSubscribeRequest, cb?: (error: string, rep: IsolateSubscribeResponse) => void): Promise<IsolateSubscribeResponse>;
    /**
     * 本接口（DescribeSubscribeConf）用于查询订阅实例配置
     */
    DescribeSubscribeConf(req: DescribeSubscribeConfRequest, cb?: (error: string, rep: DescribeSubscribeConfResponse) => void): Promise<DescribeSubscribeConfResponse>;
    /**
     * 本接口（DeleteMigrationJob）用于删除数据迁移任务。当通过DescribeMigrateJobs接口查询到任务的状态为：检验中（status=3）、运行中（status=7）、准备完成（status=8）、撤销中（status=11）或者完成中（status=12）时，不允许删除任务。
     */
    DeleteMigrateJob(req: DeleteMigrateJobRequest, cb?: (error: string, rep: DeleteMigrateJobResponse) => void): Promise<DeleteMigrateJobResponse>;
    /**
     * 本接口（CompleteMigrateJob）用于完成数据迁移任务。
选择采用增量迁移方式的任务, 需要在迁移进度进入准备完成阶段后, 调用本接口, 停止迁移增量数据。
通过DescribeMigrateJobs接口查询到任务的状态为准备完成（status=8）时，此时可以调用本接口完成迁移任务。

     */
    CompleteMigrateJob(req: CompleteMigrateJobRequest, cb?: (error: string, rep: CompleteMigrateJobResponse) => void): Promise<CompleteMigrateJobResponse>;
}
