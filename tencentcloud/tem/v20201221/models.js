/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const AbstractModel = require("../../common/abstract_model");

/**
 * CreateResource请求参数结构体
 * @class
 */
class CreateResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间 Id
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 资源类型，目前支持文件系统：CFS；日志服务：CLS；注册中心：TSE_SRE
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 资源 Id
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * CreateServiceV2返回参数结构体
 * @class
 */
class CreateServiceV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务code
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCosTokenV2请求参数结构体
 * @class
 */
class CreateCosTokenV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 包名
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * optType 1上传  2查询
         * @type {number || null}
         */
        this.OptType = null;

        /**
         * 来源 channel
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.OptType = 'OptType' in params ? params.OptType : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * DeployServiceV2返回参数结构体
 * @class
 */
class DeployServiceV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本ID（前端可忽略）
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ingress tls 配置
 * @class
 */
class IngressTls extends  AbstractModel {
    constructor(){
        super();

        /**
         * host 数组
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * secret name
         * @type {string || null}
         */
        this.SecretName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hosts = 'Hosts' in params ? params.Hosts : null;
        this.SecretName = 'SecretName' in params ? params.SecretName : null;

    }
}

/**
 * DescribeNamespaces返回参数结构体
 * @class
 */
class DescribeNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {NamespacePage || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new NamespacePage();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyIngress返回参数结构体
 * @class
 */
class ModifyIngressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteIngress请求参数结构体
 * @class
 */
class DeleteIngressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * tem NamespaceId
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * eks namespace 名
         * @type {string || null}
         */
        this.EksNamespace = null;

        /**
         * ingress 规则名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.EksNamespace = 'EksNamespace' in params ? params.EksNamespace : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * CreateNamespace返回参数结构体
 * @class
 */
class CreateNamespaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功时为命名空间ID，失败为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据卷挂载信息
 * @class
 */
class StorageMountConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据卷名
         * @type {string || null}
         */
        this.VolumeName = null;

        /**
         * 数据卷绑定路径
         * @type {string || null}
         */
        this.MountPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VolumeName = 'VolumeName' in params ? params.VolumeName : null;
        this.MountPath = 'MountPath' in params ? params.MountPath : null;

    }
}

/**
 * Cos token
 * @class
 */
class CosToken extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID
         * @type {string || null}
         */
        this.RequestId = null;

        /**
         * 存储桶桶名
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 存储桶所在区域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 临时密钥的SecretId
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * 临时密钥的SecretKey
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * 临时密钥的 sessionToken
         * @type {string || null}
         */
        this.SessionToken = null;

        /**
         * 临时密钥获取的开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 临时密钥的 expiredTime
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * 包完整路径
         * @type {string || null}
         */
        this.FullPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.SessionToken = 'SessionToken' in params ? params.SessionToken : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.FullPath = 'FullPath' in params ? params.FullPath : null;

    }
}

/**
 * DescribeNamespaces请求参数结构体
 * @class
 */
class DescribeNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页下标
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 来源source
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * CreateCosToken请求参数结构体
 * @class
 */
class CreateCosTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 服务版本ID
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * 包名
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * optType 1上传  2查询
         * @type {number || null}
         */
        this.OptType = null;

        /**
         * 来源 channel
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.OptType = 'OptType' in params ? params.OptType : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * DeployServiceV2请求参数结构体
 * @class
 */
class DeployServiceV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 容器端口
         * @type {number || null}
         */
        this.ContainerPort = null;

        /**
         * 初始化 pod 数
         * @type {number || null}
         */
        this.InitPodNum = null;

        /**
         * cpu规格
         * @type {number || null}
         */
        this.CpuSpec = null;

        /**
         * 内存规格
         * @type {number || null}
         */
        this.MemorySpec = null;

        /**
         * 环境ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 镜像仓库
         * @type {string || null}
         */
        this.ImgRepo = null;

        /**
         * 版本描述信息
         * @type {string || null}
         */
        this.VersionDesc = null;

        /**
         * 启动参数
         * @type {string || null}
         */
        this.JvmOpts = null;

        /**
         * 弹性伸缩配置，不传默认不启用弹性伸缩配置
         * @type {EsInfo || null}
         */
        this.EsInfo = null;

        /**
         * 环境变量配置
         * @type {Array.<Pair> || null}
         */
        this.EnvConf = null;

        /**
         * 日志配置
         * @type {Array.<string> || null}
         */
        this.LogConfs = null;

        /**
         * 数据卷配置
         * @type {Array.<StorageConf> || null}
         */
        this.StorageConfs = null;

        /**
         * 数据卷挂载配置
         * @type {Array.<StorageMountConf> || null}
         */
        this.StorageMountConfs = null;

        /**
         * 部署类型。
- JAR：通过 jar 包部署
- WAR：通过 war 包部署
- IMAGE：通过镜像部署
         * @type {string || null}
         */
        this.DeployMode = null;

        /**
         * 部署类型为 IMAGE 时，该参数表示镜像 tag。
部署类型为 JAR/WAR 时，该参数表示包版本号。
         * @type {string || null}
         */
        this.DeployVersion = null;

        /**
         * 包名。使用 JAR 包或者 WAR 包部署的时候必填。
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * JDK 版本。
- KONA：使用 kona jdk。
- OPEN：使用 open jdk。
         * @type {string || null}
         */
        this.JdkVersion = null;

        /**
         * 安全组ID s
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 日志输出配置
         * @type {LogOutputConf || null}
         */
        this.LogOutputConf = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * 版本描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 镜像命令
         * @type {string || null}
         */
        this.ImageCommand = null;

        /**
         * 镜像命令参数
         * @type {Array.<string> || null}
         */
        this.ImageArgs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ContainerPort = 'ContainerPort' in params ? params.ContainerPort : null;
        this.InitPodNum = 'InitPodNum' in params ? params.InitPodNum : null;
        this.CpuSpec = 'CpuSpec' in params ? params.CpuSpec : null;
        this.MemorySpec = 'MemorySpec' in params ? params.MemorySpec : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.ImgRepo = 'ImgRepo' in params ? params.ImgRepo : null;
        this.VersionDesc = 'VersionDesc' in params ? params.VersionDesc : null;
        this.JvmOpts = 'JvmOpts' in params ? params.JvmOpts : null;

        if (params.EsInfo) {
            let obj = new EsInfo();
            obj.deserialize(params.EsInfo)
            this.EsInfo = obj;
        }

        if (params.EnvConf) {
            this.EnvConf = new Array();
            for (let z in params.EnvConf) {
                let obj = new Pair();
                obj.deserialize(params.EnvConf[z]);
                this.EnvConf.push(obj);
            }
        }
        this.LogConfs = 'LogConfs' in params ? params.LogConfs : null;

        if (params.StorageConfs) {
            this.StorageConfs = new Array();
            for (let z in params.StorageConfs) {
                let obj = new StorageConf();
                obj.deserialize(params.StorageConfs[z]);
                this.StorageConfs.push(obj);
            }
        }

        if (params.StorageMountConfs) {
            this.StorageMountConfs = new Array();
            for (let z in params.StorageMountConfs) {
                let obj = new StorageMountConf();
                obj.deserialize(params.StorageMountConfs[z]);
                this.StorageMountConfs.push(obj);
            }
        }
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.DeployVersion = 'DeployVersion' in params ? params.DeployVersion : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.JdkVersion = 'JdkVersion' in params ? params.JdkVersion : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.LogOutputConf) {
            let obj = new LogOutputConf();
            obj.deserialize(params.LogOutputConf)
            this.LogOutputConf = obj;
        }
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ImageCommand = 'ImageCommand' in params ? params.ImageCommand : null;
        this.ImageArgs = 'ImageArgs' in params ? params.ImageArgs : null;

    }
}

/**
 * ModifyIngress请求参数结构体
 * @class
 */
class ModifyIngressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ingress 规则配置
         * @type {IngressInfo || null}
         */
        this.Ingress = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Ingress) {
            let obj = new IngressInfo();
            obj.deserialize(params.Ingress)
            this.Ingress = obj;
        }
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * 键值对
 * @class
 */
class Pair extends  AbstractModel {
    constructor(){
        super();

        /**
         * 建
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 值
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * CreateNamespace请求参数结构体
 * @class
 */
class CreateNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 私有网络名称
         * @type {string || null}
         */
        this.Vpc = null;

        /**
         * 子网列表
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 命名空间描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * K8s version
         * @type {string || null}
         */
        this.K8sVersion = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.K8sVersion = 'K8sVersion' in params ? params.K8sVersion : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * DescribeIngresses请求参数结构体
 * @class
 */
class DescribeIngressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * namespace id
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * namespace
         * @type {string || null}
         */
        this.EksNamespace = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.EksNamespace = 'EksNamespace' in params ? params.EksNamespace : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * 版本pod列表
 * @class
 */
class DescribeRunPodPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页下标
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 请求id
         * @type {string || null}
         */
        this.RequestId = null;

        /**
         * 条目
         * @type {Array.<RunVersionPod> || null}
         */
        this.PodList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

        if (params.PodList) {
            this.PodList = new Array();
            for (let z in params.PodList) {
                let obj = new RunVersionPod();
                obj.deserialize(params.PodList[z]);
                this.PodList.push(obj);
            }
        }

    }
}

/**
 * DescribeServiceRunPodListV2请求参数结构体
 * @class
 */
class DescribeServiceRunPodListV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 服务名id
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 单页条数，默认值20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页下标，默认值0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 实例状态 
- Running 
- Pending 
- Error
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 实例名字
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * 日志输出配置
 * @class
 */
class LogOutputConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志消费端类型
         * @type {string || null}
         */
        this.OutputType = null;

        /**
         * cls日志集
         * @type {string || null}
         */
        this.ClsLogsetName = null;

        /**
         * cls日志主题
         * @type {string || null}
         */
        this.ClsLogTopicId = null;

        /**
         * cls日志集id
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * cls日志名称
         * @type {string || null}
         */
        this.ClsLogTopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputType = 'OutputType' in params ? params.OutputType : null;
        this.ClsLogsetName = 'ClsLogsetName' in params ? params.ClsLogsetName : null;
        this.ClsLogTopicId = 'ClsLogTopicId' in params ? params.ClsLogTopicId : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsLogTopicName = 'ClsLogTopicName' in params ? params.ClsLogTopicName : null;

    }
}

/**
 * DescribeIngresses返回参数结构体
 * @class
 */
class DescribeIngressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ingress 数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IngressInfo> || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new IngressInfo();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Ingress 配置
 * @class
 */
class IngressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * tem namespaceId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * eks namespace
         * @type {string || null}
         */
        this.EksNamespace = null;

        /**
         * ip version
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * ingress name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * rules 配置
         * @type {Array.<IngressRule> || null}
         */
        this.Rules = null;

        /**
         * clb ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClbId = null;

        /**
         * tls 配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IngressTls> || null}
         */
        this.Tls = null;

        /**
         * eks clusterId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * clb ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.EksNamespace = 'EksNamespace' in params ? params.EksNamespace : null;
        this.AddressIPVersion = 'AddressIPVersion' in params ? params.AddressIPVersion : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new IngressRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.ClbId = 'ClbId' in params ? params.ClbId : null;

        if (params.Tls) {
            this.Tls = new Array();
            for (let z in params.Tls) {
                let obj = new IngressTls();
                obj.deserialize(params.Tls[z]);
                this.Tls.push(obj);
            }
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * DeleteIngress返回参数结构体
 * @class
 */
class DeleteIngressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否删除成功
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNamespace请求参数结构体
 * @class
 */
class ModifyNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 命名空间描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 私有网络名称
         * @type {string || null}
         */
        this.Vpc = null;

        /**
         * 子网网络
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * Ingress 规则 backend 配置
 * @class
 */
class IngressRuleBackend extends  AbstractModel {
    constructor(){
        super();

        /**
         * eks service 名
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * eks service 端口
         * @type {number || null}
         */
        this.ServicePort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ServicePort = 'ServicePort' in params ? params.ServicePort : null;

    }
}

/**
 * DescribeIngress返回参数结构体
 * @class
 */
class DescribeIngressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ingress 规则配置
         * @type {IngressInfo || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new IngressInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCosToken返回参数结构体
 * @class
 */
class CreateCosTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功时为CosToken对象，失败为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosToken || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new CosToken();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ingress rule 配置
 * @class
 */
class IngressRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * ingress rule value
         * @type {IngressRuleValue || null}
         */
        this.Http = null;

        /**
         * host 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Host = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Http) {
            let obj = new IngressRuleValue();
            obj.deserialize(params.Http)
            this.Http = obj;
        }
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * Ingress Rule Path 配置
 * @class
 */
class IngressRulePath extends  AbstractModel {
    constructor(){
        super();

        /**
         * path 信息
         * @type {string || null}
         */
        this.Path = null;

        /**
         * backend 配置
         * @type {IngressRuleBackend || null}
         */
        this.Backend = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;

        if (params.Backend) {
            let obj = new IngressRuleBackend();
            obj.deserialize(params.Backend)
            this.Backend = obj;
        }

    }
}

/**
 * 存储卷配置
 * @class
 */
class StorageConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储卷名称
         * @type {string || null}
         */
        this.StorageVolName = null;

        /**
         * 存储卷路径
         * @type {string || null}
         */
        this.StorageVolPath = null;

        /**
         * 存储卷IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StorageVolIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StorageVolName = 'StorageVolName' in params ? params.StorageVolName : null;
        this.StorageVolPath = 'StorageVolPath' in params ? params.StorageVolPath : null;
        this.StorageVolIp = 'StorageVolIp' in params ? params.StorageVolIp : null;

    }
}

/**
 * ModifyNamespace返回参数结构体
 * @class
 */
class ModifyNamespaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功时为命名空间ID，失败为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 版本pod
 * @class
 */
class RunVersionPod extends  AbstractModel {
    constructor(){
        super();

        /**
         * shell地址
         * @type {string || null}
         */
        this.Webshell = null;

        /**
         * pod的id
         * @type {string || null}
         */
        this.PodId = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * pod的ip
         * @type {string || null}
         */
        this.PodIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Webshell = 'Webshell' in params ? params.Webshell : null;
        this.PodId = 'PodId' in params ? params.PodId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PodIp = 'PodIp' in params ? params.PodIp : null;

    }
}

/**
 * Ingress Rule Value 配置
 * @class
 */
class IngressRuleValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * rule 整体配置
         * @type {Array.<IngressRulePath> || null}
         */
        this.Paths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Paths) {
            this.Paths = new Array();
            for (let z in params.Paths) {
                let obj = new IngressRulePath();
                obj.deserialize(params.Paths[z]);
                this.Paths.push(obj);
            }
        }

    }
}

/**
 * CreateResource返回参数结构体
 * @class
 */
class CreateResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功与否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeServiceRunPodListV2返回参数结构体
 * @class
 */
class DescribeServiceRunPodListV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {DescribeRunPodPage || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new DescribeRunPodPage();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 命名空间对象
 * @class
 */
class TemNamespaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间id
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 渠道
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 区域名称
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 命名空间描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 状态,1:已销毁;0:正常
         * @type {number || null}
         */
        this.Status = null;

        /**
         * vpc网络
         * @type {string || null}
         */
        this.Vpc = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyDate = null;

        /**
         * 修改人
         * @type {string || null}
         */
        this.Modifier = null;

        /**
         * 创建人
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * 服务数
         * @type {number || null}
         */
        this.ServiceNum = null;

        /**
         * 运行实例数
         * @type {number || null}
         */
        this.RunInstancesNum = null;

        /**
         * 子网络
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * tcb环境状态
         * @type {string || null}
         */
        this.TcbEnvStatus = null;

        /**
         * eks cluster status
         * @type {string || null}
         */
        this.ClusterStatus = null;

        /**
         * 是否开启tsw
         * @type {boolean || null}
         */
        this.EnableTswTraceService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.ModifyDate = 'ModifyDate' in params ? params.ModifyDate : null;
        this.Modifier = 'Modifier' in params ? params.Modifier : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.ServiceNum = 'ServiceNum' in params ? params.ServiceNum : null;
        this.RunInstancesNum = 'RunInstancesNum' in params ? params.RunInstancesNum : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.TcbEnvStatus = 'TcbEnvStatus' in params ? params.TcbEnvStatus : null;
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.EnableTswTraceService = 'EnableTswTraceService' in params ? params.EnableTswTraceService : null;

    }
}

/**
 * 命名空间分页
 * @class
 */
class NamespacePage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页内容
         * @type {Array.<TemNamespaceInfo> || null}
         */
        this.Records = null;

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 条目数
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.Pages = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new TemNamespaceInfo();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Pages = 'Pages' in params ? params.Pages : null;

    }
}

/**
 * CreateCosTokenV2返回参数结构体
 * @class
 */
class CreateCosTokenV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功时为CosToken对象，失败为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosToken || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new CosToken();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 弹性伸缩配置
 * @class
 */
class EsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最小实例数
         * @type {number || null}
         */
        this.MinAliveInstances = null;

        /**
         * 最大实例数
         * @type {number || null}
         */
        this.MaxAliveInstances = null;

        /**
         * 弹性策略,1:cpu，2:内存
         * @type {number || null}
         */
        this.EsStrategy = null;

        /**
         * 弹性扩缩容条件值
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * 版本Id
         * @type {string || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MinAliveInstances = 'MinAliveInstances' in params ? params.MinAliveInstances : null;
        this.MaxAliveInstances = 'MaxAliveInstances' in params ? params.MaxAliveInstances : null;
        this.EsStrategy = 'EsStrategy' in params ? params.EsStrategy : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * DescribeIngress请求参数结构体
 * @class
 */
class DescribeIngressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * tem namespaceId
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * eks namespace 名
         * @type {string || null}
         */
        this.EksNamespace = null;

        /**
         * ingress 规则名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.EksNamespace = 'EksNamespace' in params ? params.EksNamespace : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * CreateServiceV2请求参数结构体
 * @class
 */
class CreateServiceV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 是否使用默认镜像服务 1-是，0-否
         * @type {number || null}
         */
        this.UseDefaultImageService = null;

        /**
         * 如果是绑定仓库，绑定的仓库类型，0-个人版，1-企业版
         * @type {number || null}
         */
        this.RepoType = null;

        /**
         * 企业版镜像服务的实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 绑定镜像服务器地址
         * @type {string || null}
         */
        this.RepoServer = null;

        /**
         * 绑定镜像仓库名
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * 服务所在子网
         * @type {Array.<string> || null}
         */
        this.SubnetList = null;

        /**
         * 编程语言 
- JAVA
- OTHER
         * @type {string || null}
         */
        this.CodingLanguage = null;

        /**
         * 部署方式 
- IMAGE
- JAR
- WAR
         * @type {string || null}
         */
        this.DeployMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UseDefaultImageService = 'UseDefaultImageService' in params ? params.UseDefaultImageService : null;
        this.RepoType = 'RepoType' in params ? params.RepoType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RepoServer = 'RepoServer' in params ? params.RepoServer : null;
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.SubnetList = 'SubnetList' in params ? params.SubnetList : null;
        this.CodingLanguage = 'CodingLanguage' in params ? params.CodingLanguage : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;

    }
}

module.exports = {
    CreateResourceRequest: CreateResourceRequest,
    CreateServiceV2Response: CreateServiceV2Response,
    CreateCosTokenV2Request: CreateCosTokenV2Request,
    DeployServiceV2Response: DeployServiceV2Response,
    IngressTls: IngressTls,
    DescribeNamespacesResponse: DescribeNamespacesResponse,
    ModifyIngressResponse: ModifyIngressResponse,
    DeleteIngressRequest: DeleteIngressRequest,
    CreateNamespaceResponse: CreateNamespaceResponse,
    StorageMountConf: StorageMountConf,
    CosToken: CosToken,
    DescribeNamespacesRequest: DescribeNamespacesRequest,
    CreateCosTokenRequest: CreateCosTokenRequest,
    DeployServiceV2Request: DeployServiceV2Request,
    ModifyIngressRequest: ModifyIngressRequest,
    Pair: Pair,
    CreateNamespaceRequest: CreateNamespaceRequest,
    DescribeIngressesRequest: DescribeIngressesRequest,
    DescribeRunPodPage: DescribeRunPodPage,
    DescribeServiceRunPodListV2Request: DescribeServiceRunPodListV2Request,
    LogOutputConf: LogOutputConf,
    DescribeIngressesResponse: DescribeIngressesResponse,
    IngressInfo: IngressInfo,
    DeleteIngressResponse: DeleteIngressResponse,
    ModifyNamespaceRequest: ModifyNamespaceRequest,
    IngressRuleBackend: IngressRuleBackend,
    DescribeIngressResponse: DescribeIngressResponse,
    CreateCosTokenResponse: CreateCosTokenResponse,
    IngressRule: IngressRule,
    IngressRulePath: IngressRulePath,
    StorageConf: StorageConf,
    ModifyNamespaceResponse: ModifyNamespaceResponse,
    RunVersionPod: RunVersionPod,
    IngressRuleValue: IngressRuleValue,
    CreateResourceResponse: CreateResourceResponse,
    DescribeServiceRunPodListV2Response: DescribeServiceRunPodListV2Response,
    TemNamespaceInfo: TemNamespaceInfo,
    NamespacePage: NamespacePage,
    CreateCosTokenV2Response: CreateCosTokenV2Response,
    EsInfo: EsInfo,
    DescribeIngressRequest: DescribeIngressRequest,
    CreateServiceV2Request: CreateServiceV2Request,

}
