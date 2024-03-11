/**
 * CreateBlockNodeRecords请求参数结构体
 */
export interface CreateBlockNodeRecordsRequest {
    /**
     * 盘查组id，可在“盘查组概览”功能中获取。
     */
    GroupId: string;
    /**
     * 节点id，可在“数据接入管理”中获取。
     */
    NodeId: string;
    /**
     * 节点数据json，具体demo请参考输入示例，其中key为数据接入管理中节点内创建的属性变量名，value为期望的推送值。
     */
    Records: string;
}
/**
 * CreateBlockNodeRecords返回参数结构体
 */
export interface CreateBlockNodeRecordsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
