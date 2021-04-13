/**
 * ManageConfig请求参数结构体
 */
export interface ManageConfigRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 配置中心类型（consul、zookeeper、apollo等）
      */
    Type: string;
    /**
      * 请求命名 PUT GET DELETE
      */
    Command: string;
    /**
      * 配置的Key
      */
    Key: string;
    /**
      * 配置的Value
      */
    Value?: string;
}
/**
 * ManageConfig返回参数结构体
 */
export interface ManageConfigResponse {
    /**
      * 对配置中心操作配置之后的返回值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
