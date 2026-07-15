/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  CreateNativeNodePoolParam,
  DescribeClusterInstancesResponse,
  AutoscalingAdded,
  DescribeHealthCheckPolicyBindingsRequest,
  DescribeGPUInfoResponse,
  SuperNodeInfo,
  DescribeClusterMachinesResponse,
  Annotation,
  GPUConfig,
  DeleteClusterMachinesRequest,
  RebootMachinesRequest,
  IntOrString,
  CreateNodePoolRequest,
  DescribeHealthCheckPolicyBindingsResponse,
  DescribeNodePoolsRequest,
  NodePool,
  Instance,
  NativeNodeInfo,
  ManuallyAdded,
  Tag,
  ModifyHealthCheckPolicyResponse,
  StopMachinesResponse,
  HealthCheckTemplate,
  DescribeClustersRequest,
  Label,
  CreateHealthCheckPolicyRequest,
  MachineUpgradeSettings,
  DescribeZoneInstanceConfigInfosResponse,
  StartMachinesRequest,
  ModifyNodePoolRequest,
  ModifyClusterMachineResponse,
  SetMachineLoginRequest,
  ModifyNodePoolResponse,
  Taint,
  RegularNodeInfo,
  HealthCheckPolicyRule,
  NativeNodePoolInfo,
  Disk,
  DescribeHealthCheckTemplateRequest,
  TagSpecification,
  DescribeClustersResponse,
  SortBy,
  DataDisk,
  HealthCheckTemplateRule,
  CreateNodePoolResponse,
  ModifyHealthCheckPolicyRequest,
  ExternalNodeInfo,
  MachineSetScaling,
  StartMachinesResponse,
  RegularNodePoolInfo,
  InstanceExtraArgs,
  DescribeNodePoolsElasticityStrengthResponse,
  DeleteClusterMachinesResponse,
  DeleteNodePoolResponse,
  DescribeClusterInstancesRequest,
  DeleteHealthCheckPolicyResponse,
  DescribeGPUInfoRequest,
  Filter,
  ManagementConfig,
  DeleteNodePoolRequest,
  SetMachineLoginResponse,
  Machine,
  RuntimeConfig,
  DescribeZoneInstanceConfigInfosRequest,
  Cluster,
  DescribeNodePoolsElasticityStrengthRequest,
  ExternalNodePoolInfo,
  DescribeClusterMachinesRequest,
  DeleteHealthCheckPolicyRequest,
  DescribeNodePoolsResponse,
  AutoUpgradeOptions,
  SuperNodePoolInfo,
  InternetAccessible,
  ScaleNodePoolResponse,
  ModifyClusterMachineRequest,
  DescribeHealthCheckPoliciesResponse,
  RebootMachinesResponse,
  GPUParams,
  StopMachinesRequest,
  DescribeHealthCheckPoliciesRequest,
  DescribeHealthCheckTemplateResponse,
  ScaleNodePoolRequest,
  InstanceAdvancedSettings,
  LifecycleConfig,
  InstanceChargePrepaid,
  NodeCountSummary,
  UpdateNativeNodePoolParam,
  HealthCheckPolicy,
  HealthCheckPolicyBinding,
  CreateHealthCheckPolicyResponse,
} from "./tke_models"

/**
 * tke client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tke.tencentcloudapi.com", "2022-05-01", clientConfig)
  }

  /**
   * 设置是否开启节点登录
   */
  async SetMachineLogin(
    req: SetMachineLoginRequest,
    cb?: (error: string, rep: SetMachineLoginResponse) => void
  ): Promise<SetMachineLoginResponse> {
    return this.request("SetMachineLogin", req, cb)
  }

  /**
   * 删除 TKE 节点池
   */
  async DeleteNodePool(
    req: DeleteNodePoolRequest,
    cb?: (error: string, rep: DeleteNodePoolResponse) => void
  ): Promise<DeleteNodePoolResponse> {
    return this.request("DeleteNodePool", req, cb)
  }

  /**
   * 查询健康检测策略
   */
  async DescribeHealthCheckPolicies(
    req: DescribeHealthCheckPoliciesRequest,
    cb?: (error: string, rep: DescribeHealthCheckPoliciesResponse) => void
  ): Promise<DescribeHealthCheckPoliciesResponse> {
    return this.request("DescribeHealthCheckPolicies", req, cb)
  }

  /**
     * 本接口 (StartMachines) 用于启动一个或多个原生节点实例。

只有状态为 Stopped 的实例才可以进行此操作。
接口调用成功后，等待一分钟左右，实例会进入 Running 状态。
支持批量操作。每次请求批量实例的上限为100。
本接口为同步接口，启动实例请求发送成功后会返回一个RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeClusterInstances 接口查询，如果实例的状态为 Running，则代表启动实例操作成功。
     */
  async StartMachines(
    req: StartMachinesRequest,
    cb?: (error: string, rep: StartMachinesResponse) => void
  ): Promise<StartMachinesResponse> {
    return this.request("StartMachines", req, cb)
  }

  /**
     * **通过 CAM 策略强制节点池安全配置**

创建原生节点池（`CreateNodePool`）接口已接入 CAM 条件鉴权，会根据请求参数计算出一组**条件键（Condition Key）**并传入 CAM 鉴权。您可以在 CAM/SCP 策略中基于这些条件键配置 `deny` 规则，从而强制约束节点池的安全配置（如必须开启磁盘加密、安全加固等）。

**支持的条件键**

| 条件键 | 含义 | 取值 | 取值判定说明 |
|--------|------|------|-------------|
| `tke:NodePoolType` | 节点池类型 | `Native` / `External` | 取请求的节点池类型，未指定时默认为 `Native` |
| `tke:SystemDiskEncrypted` | 系统盘是否加密 | `true` / `false` | 系统盘加密属性为 `ENCRYPT`（大小写不敏感）时为 `true`，否则为 `false` |
| `tke:AllDataDisksEncrypted` | 所有数据盘是否都已加密 | `true` / `false` | 全部数据盘加密属性均为 `ENCRYPT` 时为 `true`；未配置数据盘时也为 `true`；只要有任一数据盘未加密即为 `false` |
| `tke:SecurityAgentEnabled` | 是否开启安全加固（Security Agent） | `true` / `false` | 开启安全加固时为 `true`，否则为 `false` |

> 说明：所有条件键的取值均为字符串 `"true"` / `"false"`，请在策略中使用字符串形式匹配。

**使用方式**

在 CAM 策略中使用 `bool_equal` 匹配条件键值为 `"false"`，配合 `effect: deny`，即可实现"未满足安全配置则拒绝创建节点池"的强制约束。

**示例一：强制开启安全加固**

创建节点池时若未开启安全加固（`tke:SecurityAgentEnabled = "false"`），则拒绝。

```json
{
    "version": "2.0",
    "statement": [
        {
            "effect": "deny",
            "action": ["tke:CreateNodePool"],
            "resource": ["*"],
            "condition": {
                "bool_equal": {
                    "tke:SecurityAgentEnabled": "false"
                }
            }
        }
    ]
}
```

**示例二：强制数据盘加密**

创建节点池时若存在未加密的数据盘（`tke:AllDataDisksEncrypted = "false"`），则拒绝。

```json
{
    "version": "2.0",
    "statement": [
        {
            "effect": "deny",
            "action": ["tke:CreateNodePool"],
            "resource": ["*"],
            "condition": {
                "bool_equal": {
                    "tke:AllDataDisksEncrypted": "false"
                }
            }
        }
    ]
}
```

**示例三：强制系统盘加密**

创建节点池时若系统盘未加密（`tke:SystemDiskEncrypted = "false"`），则拒绝。

```json
{
    "version": "2.0",
    "statement": [
        {
            "effect": "deny",
            "action": ["tke:CreateNodePool"],
            "resource": ["*"],
            "condition": {
                "bool_equal": {
                    "tke:SystemDiskEncrypted": "false"
                }
            }
        }
    ]
}
```

**注意事项**

- 上述条件键在**未配置任何 CAM 策略**时不会影响节点池创建，仅在您显式配置了对应 `deny` 策略时才生效。
- 如需同时强制多项安全配置，必须在同一策略的 `statement` 中配置多条 `deny` 规则，不能将多个条件键写入同一条 `condition`。
- `tke:AllDataDisksEncrypted` 在**无数据盘**场景下取值为 `true`（不存在未加密的数据盘），因此仅约束"已配置的数据盘必须加密"，不会强制要求必须挂载数据盘。
     */
  async CreateNodePool(
    req: CreateNodePoolRequest,
    cb?: (error: string, rep: CreateNodePoolResponse) => void
  ): Promise<CreateNodePoolResponse> {
    return this.request("CreateNodePool", req, cb)
  }

  /**
   * 查询健康检测策略绑定关系
   */
  async DescribeHealthCheckPolicyBindings(
    req: DescribeHealthCheckPolicyBindingsRequest,
    cb?: (error: string, rep: DescribeHealthCheckPolicyBindingsResponse) => void
  ): Promise<DescribeHealthCheckPolicyBindingsResponse> {
    return this.request("DescribeHealthCheckPolicyBindings", req, cb)
  }

  /**
   * 查询健康检测策略模板
   */
  async DescribeHealthCheckTemplate(
    req?: DescribeHealthCheckTemplateRequest,
    cb?: (error: string, rep: DescribeHealthCheckTemplateResponse) => void
  ): Promise<DescribeHealthCheckTemplateResponse> {
    return this.request("DescribeHealthCheckTemplate", req, cb)
  }

  /**
   * 删除原生节点池节点
   */
  async DeleteClusterMachines(
    req: DeleteClusterMachinesRequest,
    cb?: (error: string, rep: DeleteClusterMachinesResponse) => void
  ): Promise<DeleteClusterMachinesResponse> {
    return this.request("DeleteClusterMachines", req, cb)
  }

  /**
   * 设置 TKE 节点池期望节点数
   */
  async ScaleNodePool(
    req: ScaleNodePoolRequest,
    cb?: (error: string, rep: ScaleNodePoolResponse) => void
  ): Promise<ScaleNodePoolResponse> {
    return this.request("ScaleNodePool", req, cb)
  }

  /**
   * 查询集群列表
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
  }

  /**
   * 修改原生节点
   */
  async ModifyClusterMachine(
    req: ModifyClusterMachineRequest,
    cb?: (error: string, rep: ModifyClusterMachineResponse) => void
  ): Promise<ModifyClusterMachineResponse> {
    return this.request("ModifyClusterMachine", req, cb)
  }

  /**
   * 修改健康检测策略
   */
  async ModifyHealthCheckPolicy(
    req: ModifyHealthCheckPolicyRequest,
    cb?: (error: string, rep: ModifyHealthCheckPolicyResponse) => void
  ): Promise<ModifyHealthCheckPolicyResponse> {
    return this.request("ModifyHealthCheckPolicy", req, cb)
  }

  /**
   * 查询托原生点列表
   */
  async DescribeClusterMachines(
    req: DescribeClusterMachinesRequest,
    cb?: (error: string, rep: DescribeClusterMachinesResponse) => void
  ): Promise<DescribeClusterMachinesResponse> {
    return this.request("DescribeClusterMachines", req, cb)
  }

  /**
   * 重启原生节点实例
   */
  async RebootMachines(
    req: RebootMachinesRequest,
    cb?: (error: string, rep: RebootMachinesResponse) => void
  ): Promise<RebootMachinesResponse> {
    return this.request("RebootMachines", req, cb)
  }

  /**
   * 删除健康检测策略
   */
  async DeleteHealthCheckPolicy(
    req: DeleteHealthCheckPolicyRequest,
    cb?: (error: string, rep: DeleteHealthCheckPolicyResponse) => void
  ): Promise<DeleteHealthCheckPolicyResponse> {
    return this.request("DeleteHealthCheckPolicy", req, cb)
  }

  /**
   * 请求该接口，会返回所有适配该机型和操作系统组合的gpu驱动版本
   */
  async DescribeGPUInfo(
    req: DescribeGPUInfoRequest,
    cb?: (error: string, rep: DescribeGPUInfoResponse) => void
  ): Promise<DescribeGPUInfoResponse> {
    return this.request("DescribeGPUInfo", req, cb)
  }

  /**
   * 查询集群下节点实例信息
   */
  async DescribeClusterInstances(
    req: DescribeClusterInstancesRequest,
    cb?: (error: string, rep: DescribeClusterInstancesResponse) => void
  ): Promise<DescribeClusterInstancesResponse> {
    return this.request("DescribeClusterInstances", req, cb)
  }

  /**
   * 查询原生节点机型配置
   */
  async DescribeZoneInstanceConfigInfos(
    req: DescribeZoneInstanceConfigInfosRequest,
    cb?: (error: string, rep: DescribeZoneInstanceConfigInfosResponse) => void
  ): Promise<DescribeZoneInstanceConfigInfosResponse> {
    return this.request("DescribeZoneInstanceConfigInfos", req, cb)
  }

  /**
   * 查询 TKE 节点池列表
   */
  async DescribeNodePools(
    req: DescribeNodePoolsRequest,
    cb?: (error: string, rep: DescribeNodePoolsResponse) => void
  ): Promise<DescribeNodePoolsResponse> {
    return this.request("DescribeNodePools", req, cb)
  }

  /**
   * 更新 TKE 节点池
   */
  async ModifyNodePool(
    req: ModifyNodePoolRequest,
    cb?: (error: string, rep: ModifyNodePoolResponse) => void
  ): Promise<ModifyNodePoolResponse> {
    return this.request("ModifyNodePool", req, cb)
  }

  /**
   * 查询节点池健康度相关信息
   */
  async DescribeNodePoolsElasticityStrength(
    req?: DescribeNodePoolsElasticityStrengthRequest,
    cb?: (error: string, rep: DescribeNodePoolsElasticityStrengthResponse) => void
  ): Promise<DescribeNodePoolsElasticityStrengthResponse> {
    return this.request("DescribeNodePoolsElasticityStrength", req, cb)
  }

  /**
     * 本接口 (StopMachines) 用于关闭一个或多个原生节点实例。

只有状态为 Running 的实例才可以进行此操作。
接口调用成功时，实例会进入 Stopping 状态；关闭实例成功时，实例会进入 Stopped 状态。
支持强制关闭。强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
支持批量操作。每次请求批量实例的上限为 100。
本接口为同步接口，关闭实例请求发送成功后会返回一个RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeClusterInstances 接口查询，如果实例的状态为stopped_with_charging，则代表关闭实例操作成功。
     */
  async StopMachines(
    req: StopMachinesRequest,
    cb?: (error: string, rep: StopMachinesResponse) => void
  ): Promise<StopMachinesResponse> {
    return this.request("StopMachines", req, cb)
  }

  /**
   * 创建健康检测策略
   */
  async CreateHealthCheckPolicy(
    req: CreateHealthCheckPolicyRequest,
    cb?: (error: string, rep: CreateHealthCheckPolicyResponse) => void
  ): Promise<CreateHealthCheckPolicyResponse> {
    return this.request("CreateHealthCheckPolicy", req, cb)
  }
}
