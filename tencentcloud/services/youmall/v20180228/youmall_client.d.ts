import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeClusterPersonArrivedMallResponse, DescribeShopTrafficInfoRequest, DescribeZoneFlowAndStayTimeResponse, DescribePersonArrivedMallResponse, ModifyPersonTypeResponse, DescribeZoneFlowDailyByZoneIdResponse, DescribeZoneFlowAgeInfoByZoneIdResponse, DescribeClusterPersonTraceResponse, DescribePersonInfoRequest, DescribePersonInfoByFacePictureResponse, DescribePersonTraceDetailRequest, CreateAccountRequest, DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse, DeletePersonFeatureResponse, DescribeCameraPersonResponse, ModifyPersonTagInfoResponse, DescribeShopHourTrafficInfoResponse, RegisterCallbackResponse, DescribeClusterPersonArrivedMallRequest, DescribeZoneFlowGenderInfoByZoneIdResponse, DescribeHistoryNetworkInfoRequest, DescribePersonTraceDetailResponse, DescribePersonInfoByFacePictureRequest, DescribePersonVisitInfoRequest, DescribeZoneTrafficInfoResponse, DeletePersonFeatureRequest, DescribeFaceIdByTempIdRequest, DescribePersonResponse, DescribeTrajectoryDataRequest, DescribeZoneTrafficInfoRequest, ModifyPersonFeatureInfoResponse, DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest, DescribePersonVisitInfoResponse, DescribeNetworkInfoRequest, DescribeZoneFlowAndStayTimeRequest, DescribeZoneFlowHourlyByZoneIdRequest, DescribeFaceIdByTempIdResponse, ModifyPersonTagInfoRequest, DescribePersonRequest, DescribePersonTraceResponse, DescribeNetworkInfoResponse, DescribeZoneFlowGenderInfoByZoneIdRequest, DescribeShopHourTrafficInfoRequest, RegisterCallbackRequest, DescribeShopInfoRequest, DescribeClusterPersonTraceRequest, ModifyPersonFeatureInfoRequest, DescribePersonTraceRequest, DescribeZoneFlowHourlyByZoneIdResponse, DescribeZoneFlowDailyByZoneIdRequest, DescribePersonInfoResponse, CreateAccountResponse, DescribeHistoryNetworkInfoResponse, CreateFacePictureResponse, DescribeShopInfoResponse, CreateFacePictureRequest, DescribeZoneFlowAgeInfoByZoneIdRequest, ModifyPersonTypeRequest, DescribePersonArrivedMallRequest, DescribeCameraPersonRequest, DescribeShopTrafficInfoResponse, DescribeTrajectoryDataResponse } from "./youmall_models";
/**
 * youmall client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 通过指定设备ID和指定时段，获取该时段内中收银台摄像设备抓取到顾客头像及身份ID
     */
    DescribeCameraPerson(req: DescribeCameraPersonRequest, cb?: (error: string, rep: DescribeCameraPersonResponse) => void): Promise<DescribeCameraPersonResponse>;
    /**
     * 指定门店获取所有顾客详情列表，包含客户ID、图片、年龄、性别
     */
    DescribePersonInfo(req: DescribePersonInfoRequest, cb?: (error: string, rep: DescribePersonInfoResponse) => void): Promise<DescribePersonInfoResponse>;
    /**
     * 按天提供查询日期范围内，客户指定门店下的所有区域（优Mall部署时已配置区域）的累计客流人次和平均停留时间。支持的时间范围：过去365天，含当天。
     */
    DescribeZoneTrafficInfo(req: DescribeZoneTrafficInfoRequest, cb?: (error: string, rep: DescribeZoneTrafficInfoResponse) => void): Promise<DescribeZoneTrafficInfoResponse>;
    /**
     * 获取指定区域人流各年龄占比
     */
    DescribeZoneFlowAgeInfoByZoneId(req: DescribeZoneFlowAgeInfoByZoneIdRequest, cb?: (error: string, rep: DescribeZoneFlowAgeInfoByZoneIdResponse) => void): Promise<DescribeZoneFlowAgeInfoByZoneIdResponse>;
    /**
     * 调用本接口在优Mall中注册自己集团的到店通知回调接口地址，接口协议为HTTP或HTTPS。注册后，若集团有特殊身份（例如老客）到店通知，优Mall后台将主动将到店信息push给该接口
     */
    RegisterCallback(req: RegisterCallbackRequest, cb?: (error: string, rep: RegisterCallbackResponse) => void): Promise<RegisterCallbackResponse>;
    /**
     * 获取指定区域不同年龄段男女平均停留时间
     */
    DescribeZoneFlowGenderAvrStayTimeByZoneId(req: DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest, cb?: (error: string, rep: DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse) => void): Promise<DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse>;
    /**
     * 获取区域人流和停留时间
     */
    DescribeZoneFlowAndStayTime(req: DescribeZoneFlowAndStayTimeRequest, cb?: (error: string, rep: DescribeZoneFlowAndStayTimeResponse) => void): Promise<DescribeZoneFlowAndStayTimeResponse>;
    /**
     * 获取门店指定时间范围内的所有用户到访信息记录，支持的时间范围：过去365天，含当天。
     */
    DescribePersonVisitInfo(req: DescribePersonVisitInfoRequest, cb?: (error: string, rep: DescribePersonVisitInfoResponse) => void): Promise<DescribePersonVisitInfoResponse>;
    /**
     * 获取指定区域分时客流量
     */
    DescribeZoneFlowHourlyByZoneId(req: DescribeZoneFlowHourlyByZoneIdRequest, cb?: (error: string, rep: DescribeZoneFlowHourlyByZoneIdResponse) => void): Promise<DescribeZoneFlowHourlyByZoneIdResponse>;
    /**
     * 根据客户身份标识获取客户下所有的门店信息列表
     */
    DescribeShopInfo(req: DescribeShopInfoRequest, cb?: (error: string, rep: DescribeShopInfoResponse) => void): Promise<DescribeShopInfoResponse>;
    /**
     * 通过DescribeCameraPerson接口上报的收银台身份ID查询顾客的FaceID。查询最佳时间为收银台上报的次日1点后。
     */
    DescribeFaceIdByTempId(req: DescribeFaceIdByTempIdRequest, cb?: (error: string, rep: DescribeFaceIdByTempIdResponse) => void): Promise<DescribeFaceIdByTempIdResponse>;
    /**
     * 获取指定区域性别占比
     */
    DescribeZoneFlowGenderInfoByZoneId(req: DescribeZoneFlowGenderInfoByZoneIdRequest, cb?: (error: string, rep: DescribeZoneFlowGenderInfoByZoneIdResponse) => void): Promise<DescribeZoneFlowGenderInfoByZoneIdResponse>;
    /**
     * 按天提供查询日期范围内门店的单日累计客流人数，支持的时间范围：过去365天，含当天。
     */
    DescribeShopTrafficInfo(req: DescribeShopTrafficInfoRequest, cb?: (error: string, rep: DescribeShopTrafficInfoResponse) => void): Promise<DescribeShopTrafficInfoResponse>;
    /**
     * 通过上传人脸图片检索系统face id、顾客身份信息及底图
     */
    DescribePersonInfoByFacePicture(req: DescribePersonInfoByFacePictureRequest, cb?: (error: string, rep: DescribePersonInfoByFacePictureResponse) => void): Promise<DescribePersonInfoByFacePictureResponse>;
    /**
     * 通过上传指定规格的人脸图片，创建黑名单用户或者白名单用户。
     */
    CreateFacePicture(req: CreateFacePictureRequest, cb?: (error: string, rep: CreateFacePictureResponse) => void): Promise<CreateFacePictureResponse>;
    /**
     * 创建集团门店管理员账号
     */
    CreateAccount(req: CreateAccountRequest, cb?: (error: string, rep: CreateAccountResponse) => void): Promise<CreateAccountResponse>;
    /**
     * 按小时提供查询日期范围内门店的每天每小时累计客流人数数据，支持的时间范围：过去365天，含当天。
     */
    DescribeShopHourTrafficInfo(req: DescribeShopHourTrafficInfoRequest, cb?: (error: string, rep: DescribeShopHourTrafficInfoResponse) => void): Promise<DescribeShopHourTrafficInfoResponse>;
    /**
     * 输出开始时间到结束时间段内的进出场数据。
     */
    DescribePersonTrace(req: DescribePersonTraceRequest, cb?: (error: string, rep: DescribePersonTraceResponse) => void): Promise<DescribePersonTraceResponse>;
    /**
     * 获取指定区域每日客流量
     */
    DescribeZoneFlowDailyByZoneId(req: DescribeZoneFlowDailyByZoneIdRequest, cb?: (error: string, rep: DescribeZoneFlowDailyByZoneIdResponse) => void): Promise<DescribeZoneFlowDailyByZoneIdResponse>;
    /**
     * 输出开始时间到结束时间段内的进出场数据。不做按天聚合的情况下，每次进出场，产生一条进出场数据。


     */
    DescribePersonArrivedMall(req: DescribePersonArrivedMallRequest, cb?: (error: string, rep: DescribePersonArrivedMallResponse) => void): Promise<DescribePersonArrivedMallResponse>;
    /**
     * 输出开始时间到结束时间段内的进出场数据。按天聚合的情况下，每天多次进出场算一次，以最初进场时间为进场时间，最后离场时间为离场时间。停留时间为多次进出场的停留时间之和。
     */
    DescribeClusterPersonArrivedMall(req: DescribeClusterPersonArrivedMallRequest, cb?: (error: string, rep: DescribeClusterPersonArrivedMallResponse) => void): Promise<DescribeClusterPersonArrivedMallResponse>;
    /**
     * 查询客户单次到场轨迹明细
     */
    DescribePersonTraceDetail(req: DescribePersonTraceDetailRequest, cb?: (error: string, rep: DescribePersonTraceDetailResponse) => void): Promise<DescribePersonTraceDetailResponse>;
    /**
     * 修改顾客身份类型接口
     */
    ModifyPersonType(req: ModifyPersonTypeRequest, cb?: (error: string, rep: ModifyPersonTypeResponse) => void): Promise<ModifyPersonTypeResponse>;
    /**
     * 支持修改黑白名单类型的顾客特征
     */
    ModifyPersonFeatureInfo(req: ModifyPersonFeatureInfoRequest, cb?: (error: string, rep: ModifyPersonFeatureInfoResponse) => void): Promise<ModifyPersonFeatureInfoResponse>;
    /**
     * 返回当前门店历史网络状态数据
     */
    DescribeHistoryNetworkInfo(req: DescribeHistoryNetworkInfoRequest, cb?: (error: string, rep: DescribeHistoryNetworkInfoResponse) => void): Promise<DescribeHistoryNetworkInfoResponse>;
    /**
     * 返回当前门店最新网络状态数据
     */
    DescribeNetworkInfo(req: DescribeNetworkInfoRequest, cb?: (error: string, rep: DescribeNetworkInfoResponse) => void): Promise<DescribeNetworkInfoResponse>;
    /**
     * 删除顾客特征，仅支持删除黑名单或者白名单用户特征。
     */
    DeletePersonFeature(req: DeletePersonFeatureRequest, cb?: (error: string, rep: DeletePersonFeatureResponse) => void): Promise<DeletePersonFeatureResponse>;
    /**
     * 标记到店顾客的身份类型，例如黑名单、白名单等

     */
    ModifyPersonTagInfo(req: ModifyPersonTagInfoRequest, cb?: (error: string, rep: ModifyPersonTagInfoResponse) => void): Promise<ModifyPersonTagInfoResponse>;
    /**
     * 查询指定某一卖场的用户信息
     */
    DescribePerson(req: DescribePersonRequest, cb?: (error: string, rep: DescribePersonResponse) => void): Promise<DescribePersonResponse>;
    /**
     * 输出开始时间到结束时间段内的进出场数据。按天聚合的情况下，每天多次进出场算一次，以最初进场时间为进场时间，最后离场时间为离场时间。
     */
    DescribeClusterPersonTrace(req: DescribeClusterPersonTraceRequest, cb?: (error: string, rep: DescribeClusterPersonTraceResponse) => void): Promise<DescribeClusterPersonTraceResponse>;
    /**
     * 获取动线轨迹信息
     */
    DescribeTrajectoryData(req: DescribeTrajectoryDataRequest, cb?: (error: string, rep: DescribeTrajectoryDataResponse) => void): Promise<DescribeTrajectoryDataResponse>;
}
