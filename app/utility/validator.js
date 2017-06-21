import Validator from 'validatorjs';
import lang from 'validatorjs/src/lang';
import messages from 'validatorjs/src/lang/zh';
lang._set('en', messages);

const ID_CARD_REGEXP_15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
const ID_CARD_REGEXP_18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}[X0-9]{1}$/i;
const MOBILE_REGEXP = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
const LICENSE_NUMBER_REGEXP = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[-]?[A-Z_0-9]{5}$/i;
const VERIFY_CODE_REGEXP = /^[0-9]{6}$/;
const USERNAME_REGEXP = /^[A-Z][A-Z0-9]{3,19}$/i;
const PASSWORD_REGEXP = /^[A-Z0-9]{6,20}$/i;
const NAME_REGEXP = /^[\u4e00-\u9fa5]{2,20}/;
const POSTAL_REGEXP = /^\d{6}$/;

Validator.register('mobile', function (value, requirement /* defaults to null */, attribute) {
  return value.match(MOBILE_REGEXP);
}, ':attribute是9位数字.');

Validator.register('password', function (value, requirement, attribute) {
  return value.match(PASSWORD_REGEXP);
}, ':attribute格式不正确.');

Validator.register('verifyCode', function (value, requirement, attribute) {
  return value.match(VERIFY_CODE_REGEXP);
}, ':attribute是6位数字.');


export default (label, value, rules, errMsg) => {
  const validation = new Validator({ [label]: value }, { [label]: rules }, errMsg);
  validation.passes();
  const error = validation.errors.get(label);
  return error == '' ? false : error;
};