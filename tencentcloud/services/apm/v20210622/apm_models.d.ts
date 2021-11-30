/**
 * DescribeApmAgent请求参数结构体
 */
export interface DescribeApmAgentRequest {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 接入方式
      */
    AgentType?: string;
    /**
      * 环境
      */
    NetworkMode?: string;
    /**
      * 语言
      */
    LanguageEnvironment?: string;
}
/**
 * DescribeApmAgent返回参数结构体
 */
export interface DescribeApmAgentResponse {
    /**
      * Agent信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApmAgent: ApmAgentInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * apm Agent信息
 */
export interface ApmAgentInfo {
    /**
      * Agent下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    AgentDownloadURL: string;
    /**
      * Collector上报地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    CollectorURL: string;
    /**
      * Token信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Token: string;
    /**
      * 外网上报地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicCollectorURL: string;
    /**
      * 自研VPC上报地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerCollectorURL: string;
    /**
      * 内网上报地址(Private Link上报地址)
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateLinkCollectorURL: string;
}
