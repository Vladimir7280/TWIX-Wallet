/*
 * (C) Symbol Contributors 2021
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

import { NetworkType } from 'twix-sdk';

/**
 * Stored POJO that holds node information.
 *
 * The stored data is cached from rest.
 *
 * The object is serialized and deserialized to/from JSON. no method or complex attributes can be fined.
 *
 */
export class NodeModel {
    constructor(
        public readonly url: string,
        public readonly friendlyName: string,
        public readonly isDefault: boolean,
        public readonly networkType: NetworkType,
        public readonly publicKey?: string,
        public nodePublicKey?: string,
        public readonly wsUrl?: string,
    ) {}
}
