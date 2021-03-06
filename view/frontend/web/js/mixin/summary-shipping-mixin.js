/**
 * Copyright © 2019 O2TI. All rights reserved.
 * See LICENSE.txt for license details.
 */
define([
'mage/translate'
], function ($t) {
    'use strict';
    return function (targetModule) {
        return targetModule.extend({
            getShippingMethodTitle: function () {
                return '';
            },
            getValue: function(){
               var price;
                if (!this.isCalculated()) {
                    return this.notCalculatedMessage;
                }
                price =  this.totals()['shipping_amount'];
                if(price > 0) {
                    return this.getFormattedPrice(price);
                } else {
                    return $t('Free');
                }
            }
        });
    };
});