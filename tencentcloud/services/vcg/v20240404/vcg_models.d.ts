/**
 * DescribeVideoStylizationJob返回参数结构体
 */
export interface DescribeVideoStylizationJobResponse {
    /**
     * 任务ID。
     */
    JobId?: string;
    /**
     * 任务状态码：
  JobInit:  "初始化中"
  JobModerationFailed: "审核失败",
  JobRunning: "处理中",
  JobFailed: "处理失败",
  JobSuccess: "处理完成"。
     */
    StatusCode?: string;
    /**
     * 任务状态描述。
     */
    StatusMsg?: string;
    /**
     * 处理结果视频Url。URL有效期为24小时。
     */
    ResultVideoUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SubmitVideoStylizationJob返回参数结构体
 */
export interface SubmitVideoStylizationJobResponse {
    /**
     * 任务ID
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVideoStylizationJob请求参数结构体
 */
export interface DescribeVideoStylizationJobRequest {
    /**
     * 任务ID
     */
    JobId: string;
}
/**
 * SubmitVideoStylizationJob请求参数结构体
 */
export interface SubmitVideoStylizationJobRequest {
    /**
     * 风格ID，取值说明：2d_anime 2D动漫；3d_cartoon 3D卡通；3d_china 3D国潮；pixel_art	像素风。
     */
    StyleId: string;
    /**
     * 输入视频URL。视频要求：
  - 视频格式：mp4、mov；
  - 视频时长：1～60秒；
  - 视频分辨率：540P~2056P，即长宽像素数均在540px～2056px范围内；
  - 视频大小：不超过200M；
  - 视频FPS：15～60fps。
     */
    VideoUrl: string;
}
