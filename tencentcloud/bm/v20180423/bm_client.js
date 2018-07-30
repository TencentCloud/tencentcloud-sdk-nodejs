const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeTaskOperationLogRequest = models.DescribeTaskOperationLogRequest;
const DescribeTaskOperationLogResponse = models.DescribeTaskOperationLogResponse;
const TaskOperationLog = models.TaskOperationLog;
const RepairTaskControlResponse = models.RepairTaskControlResponse;
const DescribeRepairTaskConstantResponse = models.DescribeRepairTaskConstantResponse;
const RepairTaskControlRequest = models.RepairTaskControlRequest;
const TaskType = models.TaskType;
const DescribeTaskInfoRequest = models.DescribeTaskInfoRequest;
const DescribeRepairTaskConstantRequest = models.DescribeRepairTaskConstantRequest;
const DescribeTaskInfoResponse = models.DescribeTaskInfoResponse;
const TaskInfo = models.TaskInfo;


/**
 * bm client
 * @class
 */
class BmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("bm.tencentcloudapi.com", "2018-04-23", credential, region, profile);
    }
    
    /**
     * 此接口用于操作维修任务<br>
入参TaskId为维修任务ID<br>
入参Operate表示对维修任务的操作，支持如下取值：<br>
AuthorizeRepair（授权维修）<br>
Ignore（暂不提醒）<br>
ConfirmRecovered（维修完成后，确认故障恢复）<br>
ConfirmUnRecovered（维修完成后，确认故障未恢复）<br>
<br>
操作约束（当前任务状态(TaskStatus)->对应可执行的操作）：<br>
未授权(1)->授权维修；暂不处理<br>
暂不处理(4)->授权维修<br>
待确认(3)->确认故障恢复；确认故障未恢复<br>
未恢复(6)->确认故障恢复<br>
<br>
对于Ping不可达故障的任务，还允许：<br>
未授权->确认故障恢复<br>
暂不处理->确认故障恢复<br>
<br>
处理中与已恢复状态的任务不允许进行操作。<br>
<br>
详细信息请访问：https://cloud.tencent.com/document/product/386/18190
     * @param {RepairTaskControlRequest} req
     * @param {function(string, RepairTaskControlResponse):void} cb
     * @public
     */
    RepairTaskControl(req, cb) {
        let resp = new RepairTaskControlResponse();
        this.request("RepairTaskControl", req, resp, cb);
    }

    /**
     * 获取用户维修任务列表及详细信息<br>
<br>
TaskStatus（任务状态ID）与状态中文名的对应关系如下：<br>
1：未授权<br>
2：处理中<br>
3：待确认<br>
4：未授权-暂不处理<br>
5：已恢复<br>
6：待确认-未恢复<br>
     * @param {DescribeTaskInfoRequest} req
     * @param {function(string, DescribeTaskInfoResponse):void} cb
     * @public
     */
    DescribeTaskInfo(req, cb) {
        let resp = new DescribeTaskInfoResponse();
        this.request("DescribeTaskInfo", req, resp, cb);
    }

    /**
     * 维修任务配置获取
     * @param {DescribeRepairTaskConstantRequest} req
     * @param {function(string, DescribeRepairTaskConstantResponse):void} cb
     * @public
     */
    DescribeRepairTaskConstant(req, cb) {
        let resp = new DescribeRepairTaskConstantResponse();
        this.request("DescribeRepairTaskConstant", req, resp, cb);
    }

    /**
     * 获取维修任务操作日志
     * @param {DescribeTaskOperationLogRequest} req
     * @param {function(string, DescribeTaskOperationLogResponse):void} cb
     * @public
     */
    DescribeTaskOperationLog(req, cb) {
        let resp = new DescribeTaskOperationLogResponse();
        this.request("DescribeTaskOperationLog", req, resp, cb);
    }


}
module.exports = BmClient;
