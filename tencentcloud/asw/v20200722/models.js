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
 * DescribeExecutions请求参数结构体
 * @class
 */
class DescribeExecutionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态机资源名
         * @type {string || null}
         */
        this.StateMachineResourceName = null;

        /**
         * 页大小，最大100
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页序号，从1开始
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 按状态过滤条件，INIT，RUNNING，SUCCEED，FAILED，TERMINATED
         * @type {string || null}
         */
        this.FilterExecutionStatus = null;

        /**
         * 按执行名过滤条件
         * @type {string || null}
         */
        this.FilterExecutionResourceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StateMachineResourceName = 'StateMachineResourceName' in params ? params.StateMachineResourceName : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.FilterExecutionStatus = 'FilterExecutionStatus' in params ? params.FilterExecutionStatus : null;
        this.FilterExecutionResourceName = 'FilterExecutionResourceName' in params ? params.FilterExecutionResourceName : null;

    }
}

/**
 * DescribeExecution返回参数结构体
 * @class
 */
class DescribeExecutionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行资源名
         * @type {string || null}
         */
        this.ExecutionResourceName = null;

        /**
         * 资源名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 执行开始时间，毫秒
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 执行结束时间，毫秒
         * @type {string || null}
         */
        this.StopDate = null;

        /**
         * 状态机资源名
         * @type {string || null}
         */
        this.StateMachineResourceName = null;

        /**
         * 执行状态。INIT，RUNNING，SUCCEED，FAILED，TERMINATED
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 执行的输入
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Input = null;

        /**
         * 执行的输出
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Output = null;

        /**
         * 启动执行时，状态机的定义
         * @type {string || null}
         */
        this.ExecutionDefinition = null;

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
        this.ExecutionResourceName = 'ExecutionResourceName' in params ? params.ExecutionResourceName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.StopDate = 'StopDate' in params ? params.StopDate : null;
        this.StateMachineResourceName = 'StateMachineResourceName' in params ? params.StateMachineResourceName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Input = 'Input' in params ? params.Input : null;
        this.Output = 'Output' in params ? params.Output : null;
        this.ExecutionDefinition = 'ExecutionDefinition' in params ? params.ExecutionDefinition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartExecution返回参数结构体
 * @class
 */
class StartExecutionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行资源名
         * @type {string || null}
         */
        this.ExecutionResourceName = null;

        /**
         * 执行开始时间
         * @type {string || null}
         */
        this.StartDate = null;

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
        this.ExecutionResourceName = 'ExecutionResourceName' in params ? params.ExecutionResourceName : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExecution请求参数结构体
 * @class
 */
class DescribeExecutionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行资源名
         * @type {string || null}
         */
        this.ExecutionResourceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecutionResourceName = 'ExecutionResourceName' in params ? params.ExecutionResourceName : null;

    }
}

/**
 * DescribeFlowServiceDetail返回参数结构体
 * @class
 */
class DescribeFlowServiceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态机所属服务名
         * @type {string || null}
         */
        this.FlowServiceName = null;

        /**
         * 状态机状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 定义文本（JSON格式）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Definition = null;

        /**
         * 角色资源名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoleResource = null;

        /**
         * 状态机的类型，可以为 （EXPRESS/STANDARD）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 生成时间
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 状态机所属服务中文名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowServiceChineseName = null;

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
        this.FlowServiceName = 'FlowServiceName' in params ? params.FlowServiceName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RoleResource = 'RoleResource' in params ? params.RoleResource : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.FlowServiceChineseName = 'FlowServiceChineseName' in params ? params.FlowServiceChineseName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateFlowService返回参数结构体
 * @class
 */
class CreateFlowServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态机所属服务资源
         * @type {string || null}
         */
        this.FlowServiceResource = null;

        /**
         * 生成日期
         * @type {string || null}
         */
        this.CreateDate = null;

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
        this.FlowServiceResource = 'FlowServiceResource' in params ? params.FlowServiceResource : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartExecution请求参数结构体
 * @class
 */
class StartExecutionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态机资源名
         * @type {string || null}
         */
        this.StateMachineResourceName = null;

        /**
         * 输入参数
         * @type {string || null}
         */
        this.Input = null;

        /**
         * 本次执行名。如果不填，系统会自动生成。如果填，应保证状态机下唯一
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StateMachineResourceName = 'StateMachineResourceName' in params ? params.StateMachineResourceName : null;
        this.Input = 'Input' in params ? params.Input : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * ModifyFlowService返回参数结构体
 * @class
 */
class ModifyFlowServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态机资源名
         * @type {string || null}
         */
        this.FlowServiceResource = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateDate = null;

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
        this.FlowServiceResource = 'FlowServiceResource' in params ? params.FlowServiceResource : null;
        this.UpdateDate = 'UpdateDate' in params ? params.UpdateDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateFlowService请求参数结构体
 * @class
 */
class CreateFlowServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定义文本（JSON格式）
         * @type {string || null}
         */
        this.Definition = null;

        /**
         * 状态机所属服务名
         * @type {string || null}
         */
        this.FlowServiceName = null;

        /**
         * 是不是新的角色
         * @type {boolean || null}
         */
        this.IsNewRole = null;

        /**
         * 状态机类型（EXPRESS，STANDARD）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 状态机所属服务中文名
         * @type {string || null}
         */
        this.FlowServiceChineseName = null;

        /**
         * 角色资源名
         * @type {string || null}
         */
        this.RoleResource = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.FlowServiceName = 'FlowServiceName' in params ? params.FlowServiceName : null;
        this.IsNewRole = 'IsNewRole' in params ? params.IsNewRole : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.FlowServiceChineseName = 'FlowServiceChineseName' in params ? params.FlowServiceChineseName : null;
        this.RoleResource = 'RoleResource' in params ? params.RoleResource : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeExecutions返回参数结构体
 * @class
 */
class DescribeExecutionsResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyFlowService请求参数结构体
 * @class
 */
class ModifyFlowServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态机资源名
         * @type {string || null}
         */
        this.FlowServiceResource = null;

        /**
         * 定义JSON
         * @type {string || null}
         */
        this.Definition = null;

        /**
         * 状态机所属服务名
         * @type {string || null}
         */
        this.FlowServiceName = null;

        /**
         * 状态机所属服务中文名
         * @type {string || null}
         */
        this.FlowServiceChineseName = null;

        /**
         * 是否是新角色
         * @type {boolean || null}
         */
        this.IsNewRole = null;

        /**
         * 状态机类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 角色资源名
         * @type {string || null}
         */
        this.RoleResource = null;

        /**
         * 状态机备注
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowServiceResource = 'FlowServiceResource' in params ? params.FlowServiceResource : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.FlowServiceName = 'FlowServiceName' in params ? params.FlowServiceName : null;
        this.FlowServiceChineseName = 'FlowServiceChineseName' in params ? params.FlowServiceChineseName : null;
        this.IsNewRole = 'IsNewRole' in params ? params.IsNewRole : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RoleResource = 'RoleResource' in params ? params.RoleResource : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeFlowServiceDetail请求参数结构体
 * @class
 */
class DescribeFlowServiceDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态机所属服务资源名
         * @type {string || null}
         */
        this.FlowServiceResource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowServiceResource = 'FlowServiceResource' in params ? params.FlowServiceResource : null;

    }
}

module.exports = {
    DescribeExecutionsRequest: DescribeExecutionsRequest,
    DescribeExecutionResponse: DescribeExecutionResponse,
    StartExecutionResponse: StartExecutionResponse,
    DescribeExecutionRequest: DescribeExecutionRequest,
    DescribeFlowServiceDetailResponse: DescribeFlowServiceDetailResponse,
    CreateFlowServiceResponse: CreateFlowServiceResponse,
    StartExecutionRequest: StartExecutionRequest,
    ModifyFlowServiceResponse: ModifyFlowServiceResponse,
    CreateFlowServiceRequest: CreateFlowServiceRequest,
    DescribeExecutionsResponse: DescribeExecutionsResponse,
    ModifyFlowServiceRequest: ModifyFlowServiceRequest,
    DescribeFlowServiceDetailRequest: DescribeFlowServiceDetailRequest,

}
