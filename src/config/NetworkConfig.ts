/*
 * Copyright 2020 NEM (https://nem.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */

export interface NodeConfig {
    roles: number;
    friendlyName: string;
    url: string;
}

export interface NetworkConfigurationDefaults {
    maxTransactionsPerAggregate: number;
    maxMosaicDuration: number;
    lockedFundsPerAggregate: string;
    maxNamespaceDuration: number;
    maxCosignatoriesPerAccount: number;
    maxMosaicAtomicUnits: number;
    blockGenerationTargetTime: number;
    currencyMosaicId: string;
    namespaceGracePeriodDuration: number;
    harvestingMosaicId: string;
    minNamespaceDuration: number;
    maxCosignedAccountsPerAccount: number;
    maxNamespaceDepth: number;
    defaultDynamicFeeMultiplier: number;
    maxMosaicDivisibility: number;
    maxMessageSize: number;
    epochAdjustment: number;
    totalChainImportance: number;
    generationHash: string;
}

export interface NetworkConfig {
    faucetUrl: string;
    nodes: NodeConfig[];
    defaultNetworkType: number;
    explorerUrl: string;
    networkConfigurationDefaults: NetworkConfigurationDefaults;
}

export const defaultTestnetNetworkConfig: NetworkConfig = {
    explorerUrl: 'http://159.69.211.60:8080',
    faucetUrl: 'http://159.69.211.60:8080',
    defaultNetworkType: 152,
    networkConfigurationDefaults: {
        maxMosaicDivisibility: 4,
        namespaceGracePeriodDuration: 60,
        lockedFundsPerAggregate: '100000',
        maxCosignatoriesPerAccount: 25,
        blockGenerationTargetTime: 15,
        maxNamespaceDepth: 3,
        maxMosaicDuration: 315360000,
        minNamespaceDuration: 60,
        maxNamespaceDuration: 6307200,
        maxTransactionsPerAggregate: 100,
        maxCosignedAccountsPerAccount: 25,
        maxMessageSize: 4096,
        maxMosaicAtomicUnits: 1000000000000000,
        currencyMosaicId: '553961D2F0B6A6A7',
        harvestingMosaicId: '553961D2F0B6A6A7',
        defaultDynamicFeeMultiplier: 100,
        epochAdjustment: 1573430400,
        totalChainImportance: 108000000000000,
        generationHash: 'A4331E1C2E22455E112A066B0647D71CE0F7B15CF89CB131D7B9208EF4E1DA86',
    },
    nodes: [
        { friendlyName: 'seed0.twix.live', roles: 7, url: 'http://95.217.7.18:3000' },
        { friendlyName: 'seed1.twix.live', roles: 7, url: 'http://95.217.56.171:3000' },
    ],
};

export const defaultMainnetNetworkConfig: NetworkConfig = {
    explorerUrl: 'http://159.69.211.60:8080',
    faucetUrl: 'http://159.69.211.60:8080/',
    defaultNetworkType: 104,
    networkConfigurationDefaults: {
        maxMosaicDivisibility: 4,
        namespaceGracePeriodDuration: 60,
        lockedFundsPerAggregate: '100000',
        maxCosignatoriesPerAccount: 25,
        blockGenerationTargetTime: 15,
        maxNamespaceDepth: 3,
        maxMosaicDuration: 315360000,
        minNamespaceDuration: 60,
        maxNamespaceDuration: 6307200,
        maxTransactionsPerAggregate: 100,
        maxCosignedAccountsPerAccount: 25,
        maxMessageSize: 4096,
        maxMosaicAtomicUnits: 1000000000000000,
        currencyMosaicId: '553961D2F0B6A6A7',
        harvestingMosaicId: '553961D2F0B6A6A7',
        defaultDynamicFeeMultiplier: 100,
        epochAdjustment: 1573430400,
        totalChainImportance: 108000000000000,
        generationHash: 'A4331E1C2E22455E112A066B0647D71CE0F7B15CF89CB131D7B9208EF4E1DA86',
    },
    nodes: [
        { friendlyName: 'seed0.twix.live', roles: 7, url: 'http://95.217.7.18:3000' },
        { friendlyName: 'seed1.twix.live', roles: 7, url: 'http://95.217.56.171:3000' },
    ],
};


const defaultNetworkConfig: Record<number, NetworkConfig> = {
    152: defaultTestnetNetworkConfig,
    104: defaultMainnetNetworkConfig,
};

const resolvedNetworkConfig: NetworkConfig = window['networkConfig'] || defaultNetworkConfig;
console.log('networkConfig resolved!', resolvedNetworkConfig);
export const networkConfig = resolvedNetworkConfig;
