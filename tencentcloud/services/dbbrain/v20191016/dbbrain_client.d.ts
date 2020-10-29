import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeSlowLogTopSqlsResponse, DescribeDBSpaceStatusRequest, DescribeTopSpaceTableTimeSeriesResponse, DescribeTopSpaceTablesRequest, DescribeSlowLogTimeSeriesStatsRequest, DescribeDBDiagHistoryResponse, DescribeDBDiagEventRequest, DescribeDBSpaceStatusResponse, DescribeDBDiagEventResponse, DescribeDBDiagHistoryRequest, DescribeSlowLogTimeSeriesStatsResponse, DescribeTopSpaceTablesResponse, DescribeTopSpaceTableTimeSeriesRequest, DescribeSlowLogTopSqlsRequest } from "./dbbrain_models";
/**
 * dbbrain client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取实例占用空间最大的前几张表在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
     */
    DescribeTopSpaceTableTimeSeries(req: DescribeTopSpaceTableTimeSeriesRequest, cb?: (error: string, rep: DescribeTopSpaceTableTimeSeriesResponse) => void): Promise<DescribeTopSpaceTableTimeSeriesResponse>;
    /**
     * 获取慢日志统计柱状图
     */
    DescribeSlowLogTimeSeriesStats(req: DescribeSlowLogTimeSeriesStatsRequest, cb?: (error: string, rep: DescribeSlowLogTimeSeriesStatsResponse) => void): Promise<DescribeSlowLogTimeSeriesStatsResponse>;
    /**
     * 获取实例诊断事件的列表。
     */
    DescribeDBDiagHistory(req: DescribeDBDiagHistoryRequest, cb?: (error: string, rep: DescribeDBDiagHistoryResponse) => void): Promise<DescribeDBDiagHistoryResponse>;
    /**
     * 获取指定时间段内的实例空间使用概览，包括磁盘增长量(MB)、磁盘剩余(MB)、磁盘总量(MB)及预计可用天数。
     */
    DescribeDBSpaceStatus(req: DescribeDBSpaceStatusRequest, cb?: (error: string, rep: DescribeDBSpaceStatusResponse) => void): Promise<DescribeDBSpaceStatusResponse>;
    /**
     * 获取实例异常诊断事件的详情信息。
     */
    DescribeDBDiagEvent(req: DescribeDBDiagEventRequest, cb?: (error: string, rep: DescribeDBDiagEventResponse) => void): Promise<DescribeDBDiagEventResponse>;
    /**
     * 获取实例Top表的实时空间统计信息，默认返回按大小排序。
     */
    DescribeTopSpaceTables(req: DescribeTopSpaceTablesRequest, cb?: (error: string, rep: DescribeTopSpaceTablesResponse) => void): Promise<DescribeTopSpaceTablesResponse>;
    /**
     * 按照Sql模板+schema的聚合方式，统计排序指定时间段内的top慢sql。
     */
    DescribeSlowLogTopSqls(req: DescribeSlowLogTopSqlsRequest, cb?: (error: string, rep: DescribeSlowLogTopSqlsResponse) => void): Promise<DescribeSlowLogTopSqlsResponse>;
}
