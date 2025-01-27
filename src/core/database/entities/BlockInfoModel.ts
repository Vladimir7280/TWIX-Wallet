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

import { BlockInfo } from 'twix-sdk';

export class BlockInfoModel {
    public readonly height: string;
    public readonly feeMultiplier: number;
    public readonly blockTransactionsHash: string;
    public readonly blockReceiptsHash: string;
    public readonly stateHash: string;
    public readonly generationHash: string;
    constructor(blockInfo: BlockInfo) {
        this.height = blockInfo.height.toString();
        this.feeMultiplier = blockInfo.feeMultiplier;
        this.blockTransactionsHash = blockInfo.blockTransactionsHash;
        this.blockReceiptsHash = blockInfo.blockReceiptsHash;
        this.stateHash = blockInfo.stateHash;
        this.generationHash = blockInfo.generationHash;
    }
}
