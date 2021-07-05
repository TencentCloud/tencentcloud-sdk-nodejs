/**
 * 分页主事务
 */
export interface PagedTransaction {
    /**
      * 总条数，特定在该接口中总是会返回null
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 主事务分组列表
      */
    Content: Array<Transaction>;
}
/**
 * 主事务
 */
export interface Transaction {
    /**
      * 主事务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransactionId?: number;
    /**
      * 主事务开始时间戳，UTC，精确到毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransactionBegin?: number;
    /**
      * 主事务结束时间戳，UTC，精确到毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransactionEnd?: number;
    /**
      * 主事务提交时间戳，UTC，精确到毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransactionCommit?: number;
    /**
      * 主事务回滚时间戳，UTC，精确到毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransactionRollback?: number;
    /**
      * 主事务异常停止时间戳，UTC，精确到毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransactionError?: number;
    /**
      * 主事务超时时长，单位毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timeout?: number;
    /**
      * 主事务状态：0:Trying, 1:Confirming, 2: Confirmed, 3:Canceling, 4: Canceled
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 主事务结束标识：0:运行中, 1: 已结束
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndFlag?: number;
    /**
      * 主事务超时标识：0:运行中, 1: 已超时
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeoutFlag?: number;
    /**
      * 异常信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Comment?: string;
    /**
      * 事务分组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId?: string;
    /**
      * 主事务来源服务标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    Server?: string;
    /**
      * 分支事务数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    BranchQuantity?: number;
    /**
      * 重试标识：true：可以重试；false：不可重试
注意：此字段可能返回 null，表示取不到有效值。
      */
    RetryFlag?: boolean;
}
/**
 * DescribeTransactions请求参数结构体
 */
export interface DescribeTransactionsRequest {
    /**
      * 事务分组ID
      */
    GroupId: string;
    /**
      * 事务开始时间查询起始时间戳，UTC，精确到毫秒
      */
    TransactionBeginFrom?: number;
    /**
      * 事务开始时间查询截止时间戳，UTC，精确到毫秒
      */
    TransactionBeginTo?: number;
    /**
      * 仅查询异常状态的事务，true：仅查询异常，false或不传入：查询所有
      */
    SearchError?: boolean;
    /**
      * 主事务ID，不传入时查询全量，高优先级
      */
    TransactionId?: number;
    /**
      * 主事务ID列表，不传入时查询全量，低优先级
      */
    TransactionIdList?: Array<number>;
    /**
      * 每页数量
      */
    Limit?: number;
    /**
      * 起始偏移量
      */
    Offset?: number;
}
/**
 * DescribeTransactions返回参数结构体
 */
export interface DescribeTransactionsResponse {
    /**
      * 主事务分页列表
      */
    Result: PagedTransaction;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
