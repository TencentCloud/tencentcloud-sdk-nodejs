/**
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
    /**
      * 项目 id
      */
    ID: number;
    /**
      * 项目唯一key
      */
    Key: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateProject请求参数结构体
 */
export interface CreateProjectRequest {
    /**
      * 创建的项目名(不为空且最长为 200)
      */
    Name: string;
    /**
      * 项目对应实例 id
      */
    InstanceID: string;
    /**
      * 项目抽样率(大于等于 0)
      */
    Rate: string;
    /**
      * 是否开启聚类
      */
    EnableURLGroup: number;
    /**
      * 项目类型("web", "mp", "android", "ios", "node", "hippy", "weex", "viola", "rn")
      */
    Type: string;
    /**
      * 项目对应仓库地址(可选，最长为 256)
      */
    Repo?: string;
    /**
      * 项目对应网页地址(可选，最长为 256)
      */
    URL?: string;
    /**
      * 创建的项目描述(可选，最长为 1000)
      */
    Desc?: string;
}
