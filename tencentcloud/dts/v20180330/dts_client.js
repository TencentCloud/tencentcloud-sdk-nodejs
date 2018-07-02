const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeMigrateJobsResponse = models.DescribeMigrateJobsResponse;
const MigrateStepDetailInfo = models.MigrateStepDetailInfo;
const DeleteMigrateJobResponse = models.DeleteMigrateJobResponse;
const CreateMigrateCheckJobRequest = models.CreateMigrateCheckJobRequest;
const DescribeMigrateCheckJobRequest = models.DescribeMigrateCheckJobRequest;
const StartMigrateJobRequest = models.StartMigrateJobRequest;
const CreateMigrateJobRequest = models.CreateMigrateJobRequest;
const DstInfo = models.DstInfo;
const ModifyMigrateJobResponse = models.ModifyMigrateJobResponse;
const SrcInfo = models.SrcInfo;
const ConsistencyParams = models.ConsistencyParams;
const MigrateOption = models.MigrateOption;
const CreateMigrateCheckJobResponse = models.CreateMigrateCheckJobResponse;
const DescribeMigrateCheckJobResponse = models.DescribeMigrateCheckJobResponse;
const MigrateDetailInfo = models.MigrateDetailInfo;
const StopMigrateJobRequest = models.StopMigrateJobRequest;
const MigrateJobInfo = models.MigrateJobInfo;
const DescribeMigrateJobsRequest = models.DescribeMigrateJobsRequest;
const StopMigrateJobResponse = models.StopMigrateJobResponse;
const CompleteMigrateJobRequest = models.CompleteMigrateJobRequest;
const CompleteMigrateJobResponse = models.CompleteMigrateJobResponse;
const CreateMigrateJobResponse = models.CreateMigrateJobResponse;
const DeleteMigrateJobRequest = models.DeleteMigrateJobRequest;
const ModifyMigrateJobRequest = models.ModifyMigrateJobRequest;
const StartMigrateJobResponse = models.StartMigrateJobResponse;


/**
 * dts client
 * @class
 */
class DtsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dts.tencentcloudapi.com", "2018-03-30", credential, region, profile);
    }
    
    /**
     * 非定时任务会在调用后立即开始迁移，定时任务则会开始倒计时。
调用此接口前，请务必先校验数据迁移任务通过。
     * @param {StartMigrateJobRequest} req
     * @param {function(string, StartMigrateJobResponse):void} cb
     * @public
     */
    StartMigrateJob(req, cb) {
        let resp = new StartMigrateJobResponse();
        this.request("StartMigrateJob", req, resp, cb);
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
     * 修改数据迁移任务. 
当迁移任务处于下述状态时, 允许调用本接口: 迁移创建中, 创建完成, 校验成功, 校验失败, 迁移失败. 
源实例和目标实例类型不允许修改, 目标实例地域不允许修改。

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
     * 本接口用于创建数据迁移任务。

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
     * 删除数据迁移任务. 正在校验和正在迁移的任务不允许删除
     * @param {DeleteMigrateJobRequest} req
     * @param {function(string, DeleteMigrateJobResponse):void} cb
     * @public
     */
    DeleteMigrateJob(req, cb) {
        let resp = new DeleteMigrateJobResponse();
        this.request("DeleteMigrateJob", req, resp, cb);
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
     * 撤销数据迁移任务.
在迁移过程中允许调用该接口撤销迁移, 撤销迁移的任务会失败.
     * @param {StopMigrateJobRequest} req
     * @param {function(string, StopMigrateJobResponse):void} cb
     * @public
     */
    StopMigrateJob(req, cb) {
        let resp = new StopMigrateJobResponse();
        this.request("StopMigrateJob", req, resp, cb);
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
     * 完成数据迁移任务.
选择采用增量迁移方式的任务, 需要在迁移进度进入准备完成阶段后, 调用本接口, 停止迁移增量数据.
只有当正在迁移的任务, 进入了准备完成阶段, 才能调用本接口完成迁移.
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
