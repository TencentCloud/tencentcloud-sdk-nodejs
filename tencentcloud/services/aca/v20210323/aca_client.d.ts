import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetDrugIndicationsResponse, SyncStandardDictResponse, SmartPredictResponse, SyncStandardDictRequest, SmartPredictRequest, GetDrugIndicationsRequest, SmartDrugInfoRequest, SyncDepartmentRequest, LoginHisToolResponse, UploadDrugsResponse, LoginOutHisToolResponse, SmartDrugInfoResponse, LoginOutHisToolRequest, SyncDepartmentResponse, LoginHisToolRequest, UploadDrugsRequest } from "./aca_models";
/**
 * aca client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 登录获取token
     */
    LoginHisTool(req: LoginHisToolRequest, cb?: (error: string, rep: LoginHisToolResponse) => void): Promise<LoginHisToolResponse>;
    /**
     * 药品适应症接口
     */
    GetDrugIndications(req: GetDrugIndicationsRequest, cb?: (error: string, rep: GetDrugIndicationsResponse) => void): Promise<GetDrugIndicationsResponse>;
    /**
     * 登出
     */
    LoginOutHisTool(req: LoginOutHisToolRequest, cb?: (error: string, rep: LoginOutHisToolResponse) => void): Promise<LoginOutHisToolResponse>;
    /**
     * 辅诊智能预测接口
     */
    SmartPredict(req: SmartPredictRequest, cb?: (error: string, rep: SmartPredictResponse) => void): Promise<SmartPredictResponse>;
    /**
     * 智能用药接口
     */
    SmartDrugInfo(req: SmartDrugInfoRequest, cb?: (error: string, rep: SmartDrugInfoResponse) => void): Promise<SmartDrugInfoResponse>;
    /**
     * 用于院方科室管理，获取科室列表和状态、新增或修改科室信息、删除科室。
     */
    SyncDepartment(req: SyncDepartmentRequest, cb?: (error: string, rep: SyncDepartmentResponse) => void): Promise<SyncDepartmentResponse>;
    /**
     * 同步标准字典，如给药频次、给药途径、科室、诊断等
     */
    SyncStandardDict(req: SyncStandardDictRequest, cb?: (error: string, rep: SyncStandardDictResponse) => void): Promise<SyncStandardDictResponse>;
    /**
     * 药品同步，一次同步数据不要超过500个
     */
    UploadDrugs(req: UploadDrugsRequest, cb?: (error: string, rep: UploadDrugsResponse) => void): Promise<UploadDrugsResponse>;
}
