/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow
import {createToken} from 'fusion-core';

import serverPlugin, {I18nLoaderToken} from './node';
import clientPlugin, {HydrationStateToken} from './browser';
import createI18nLoader from './loader';

const I18nToken = createToken('I18nToken');

declare var __NODE__: Boolean;
export default (__NODE__ ? serverPlugin : clientPlugin);
export {I18nToken, I18nLoaderToken, HydrationStateToken, createI18nLoader};
