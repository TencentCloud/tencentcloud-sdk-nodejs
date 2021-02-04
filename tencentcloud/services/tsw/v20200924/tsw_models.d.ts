/**
 * DescribeAgentShell返回参数结构体
 */
export interface DescribeAgentShellResponse {
    /**
      * 接入信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: AgentShell;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * agent安装脚本串
 */
export interface AgentShell {
    /**
      * 鉴权token
注意：此字段可能返回 null，表示取不到有效值。
      */
    Token: string;
    /**
      * 数据接收Ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    EtlIp: string;
    /**
      * 数据接收port
注意：此字段可能返回 null，表示取不到有效值。
      */
    EtlPort: string;
    /**
      * 手动接入脚本串
注意：此字段可能返回 null，表示取不到有效值。
      */
    ByHandAccess: string;
    /**
      * 自动接入脚本串
注意：此字段可能返回 null，表示取不到有效值。
      */
    ByShellAccess: string;
    /**
      * SkyWalking数据接收port
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkyWalkingPort: string;
    /**
      * Zipkin数据接收port
注意：此字段可能返回 null，表示取不到有效值。
      */
    ZipkinPort: string;
    /**
      * Jaeger数据接收port
注意：此字段可能返回 null，表示取不到有效值。
      */
    JaegerPort: string;
}
/**
 * DescribeAgentShell请求参数结构体
 */
export declare type DescribeAgentShellRequest = null;
