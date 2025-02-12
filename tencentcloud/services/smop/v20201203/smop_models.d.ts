/**
 * 后端提交任务事件返回Data复杂类型
 */
export interface TaskEventData {
    /**
     * 状态码，0为成功，-1为失败
     */
    Code?: number;
    /**
     * 提示信息
     */
    Message?: string;
    /**
     * 任务ID
     */
    TaskId?: number;
    /**
     * 当前完成或正在完成的安心用户运营平台的任务订单ID
     */
    TaskOrderId?: string;
    /**
     * 当前任务订单状态码。1代表未完成；2代表已完成但未提交任务；3表示已完成，且已提交获得积分任务；4表示过期任务，提交后不获得积分。
     */
    TaskCode?: number;
    /**
     * 获得积分数
     */
    TaskCoinNumber?: number;
    /**
     * 任务类型后台代码
     */
    TaskType?: number;
    /**
     * 用户的当前积分
     */
    TotalCoin?: number;
    /**
     * 用户透传的附加数据
     */
    Attach?: string;
    /**
     * 计次任务当前完成次数
     */
    DoneTimes?: number;
    /**
     * 计次任务当前所需完成次数
     */
    TotalTimes?: number;
    /**
     * 任务名称
     */
    TaskName?: string;
    /**
     * 用户当前成长值
     */
    GrowScore?: number;
}
/**
 * SubmitTaskEvent返回参数结构体
 */
export interface SubmitTaskEventResponse {
    /**
     * 任务的唯一订单号
     */
    OrderId?: string;
    /**
     * 信息码。0表示成功，-1标识失败
     */
    Code?: number;
    /**
     * 提示信息
     */
    Message?: string;
    /**
     * 任务处理结果列表
     */
    Data?: Array<TaskEventData>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SubmitTaskEvent请求参数结构体
 */
export interface SubmitTaskEventRequest {
    /**
     * 用户唯一标识，最大长度为64
     */
    AccountId: string;
    /**
     * 用户设备ID，最大长度为64
     */
    DeviceId: string;
    /**
     * 任务的唯一订单号，只能是数字、大小写字母，且在同一个产品ID下唯一，最大长度为64
     */
    OrderId: string;
    /**
     * 任务事件Code，在腾讯安心用户运营平台下的任务事件列表中设置并获取
     */
    Code: string;
    /**
     * 任务结果是否异步通知。0表示任务结果在返回信息中同步返回；1表示任务结果通过回调结果异步通知。
     */
    Async: number;
    /**
     * 产品ID，可在腾讯安心用户运营平台的企业管理中获取
     */
    ProductId: number;
    /**
     * 异步接收任务结果通知的回调地址。在Async为1的时候，会将任务结果通过该回调地址进行通知。
     */
    NotifyURL?: string;
}
