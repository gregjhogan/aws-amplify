/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

/**
* Analytics instance options
*/
export interface AnalyticsOptions {
    appId: string;
    platform?: string;
    clientId?: string;
    region?: string;
    credentials?: AWS.Credentials & AWS.CognitoIdentityCredentials;
}

export interface EventAttributes {
    [key: string]: any
}

export interface EventMetrics {
    [key: string]: number
}

export enum SessionState {
    START = 'START',
    STOP = 'STOP'
}