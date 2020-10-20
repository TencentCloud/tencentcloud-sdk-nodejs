/**
 * GetLocalEngine返回参数结构体
 */
export interface GetLocalEngineResponse {
    /**
      * 接口调用状态，成功返回200，失败返回400
      */
    Status?: number;
    /**
      * 接口调用描述信息，成功返回"scan success"，失败返回"scan error"
      */
    Info?: string;
    /**
      * 本地引擎下载地址
      */
    Data?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ScanFileHash返回参数结构体
 */
export interface ScanFileHashResponse {
    /**
      * 接口调用状态，成功返回200，失败返回400
      */
    Status?: number;
    /**
      * 接口调用描述信息，成功返回"scan success"，失败返回"scan error"
      */
    Info?: string;
    /**
      * 云查实际结果信息，包括md5、return_state、virus_state、virus_name字符逗号间隔；
return_state查询状态：-1/0代表失败、1/2代表成功；
virus_state文状件态：0文件不存在、1白、2黑、3未知、4感染性、5低可信白；
      */
    Data?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ScanFileHash请求参数结构体
 */
export interface ScanFileHashRequest {
    /**
      * 购买服务后获得的授权信息，用于保证请求有效性
      */
    Key: string;
    /**
      * 需要查询的md5值（支持单个和多个，多个md5间用逗号分格）
      */
    Md5s: string;
    /**
      * 保留字段默认填0
      */
    WithCategory: string;
    /**
      * 松严规则控制字段默认填10（5-松、10-标准、15-严）
      */
    SensitiveLevel: string;
}
/**
 * ScanFile返回参数结构体
 */
export interface ScanFileResponse {
    /**
      * 接口调用状态，成功返回200，失败返回400
      */
    Status?: number;
    /**
      * 接口调用描述信息，成功返回"success"，失败返回"invalid request"
      */
    Info?: string;
    /**
      * 异步扫描任务提交成功返回success
      */
    Data?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetScanResult返回参数结构体
 */
export interface GetScanResultResponse {
    /**
      * 接口调用状态，成功返回200，失败返回400
      */
    Status?: number;
    /**
      * 接口调用描述信息，成功返回"scan success"，失败返回"scan error"
      */
    Info?: string;
    /**
      * 实际结果信息，包括md5、scan_status、virus_name三个字段；virus_name报毒名："torjan.**":黑样本的报毒名、".":样本不报毒、"" :样本无检出信息，需上传扫描；
scan_status样本状态：-1无检出信息需上传扫描、0样本扫描中、1样本扫描结束且不报毒、2样本扫描结束且报黑、3样本下载失败；
      */
    Data?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetLocalEngine请求参数结构体
 */
export interface GetLocalEngineRequest {
    /**
      * 购买服务后获得的授权信息，用于保证请求有效性
      */
    Key: string;
}
/**
 * GetScanResult请求参数结构体
 */
export interface GetScanResultRequest {
    /**
      * 购买服务后获得的授权信息，用于保证请求有效性
      */
    Key: string;
    /**
      * 需要获取扫描接口的md5（只允许单个md5）
      */
    Md5: string;
}
/**
 * ScanFile请求参数结构体
 */
export interface ScanFileRequest {
    /**
      * 购买服务后获得的授权信息，用于保证请求有效性
      */
    Key: string;
    /**
      * 文件下载url地址
      */
    Sample: string;
    /**
      * 文件的md5值
      */
    Md5: string;
}
