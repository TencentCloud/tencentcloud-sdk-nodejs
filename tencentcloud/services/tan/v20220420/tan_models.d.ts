/**
 * CreateBlockNodeRecords请求参数结构体
 */
export interface CreateBlockNodeRecordsRequest {
    /**
      * 盘查实例id
      */
    GroupId: string;
    /**
      * 节点id
      */
    NodeId: string;
    /**
      * 节点记录-json
      */
    Records: string;
}
/**
 * CreateBlockNodeRecords返回参数结构体
 */
export interface CreateBlockNodeRecordsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
