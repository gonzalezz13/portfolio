import { store } from '../../store/store.js';
import { sendPost } from '../../api/sendPost.js';
import { buildOptions } from '../../utils/buildOptions/buildOptions.js';
import { validateForm } from '../../utils/validateForm/validateForm.js';
import { validateParams } from '../../utils/validateParams/validateParams.js';
import { isHeadless } from '../../utils/isHeadless/isHeadless.js';
import { headlessError } from '../../errors/headlessError/headlessError.js';
import { isBlockedValueInParams } from '../../utils/isBlockedValueInParams/isBlockedValueInParams.js';
import { blockedEmailError } from '../../errors/blockedEmailError/blockedEmailError.js';
import { isLimitRateHit } from '../../utils/isLimitRateHit/isLimitRateHit.js';
import { limitRateError } from '../../errors/limitRateError/limitRateError.js';
const findHTMLForm = (form) => {
    return typeof form === 'string' ? document.querySelector(form) : form;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
export const sendForm = async (serviceID, templateID, form, options) => {
    const opts = buildOptions(options);
    const publicKey = opts.publicKey || store.publicKey;
    const blockHeadless = opts.blockHeadless || store.blockHeadless;
    const storageProvider = store.storageProvider || opts.storageProvider;
    const blockList = { ...store.blockList, ...opts.blockList };
    const limitRate = { ...store.limitRate, ...opts.limitRate };
    if (blockHeadless && isHeadless(navigator)) {
        return Promise.reject(headlessError());
    }
    const currentForm = findHTMLForm(form);
    validateParams(publicKey, serviceID, templateID);
    validateForm(currentForm);
    const formData = new FormData(currentForm);
    if (isBlockedValueInParams(blockList, formData)) {
        return Promise.reject(blockedEmailError());
    }
    if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
        return Promise.reject(limitRateError());
    }
    formData.append('lib_version', '5.0.3');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', publicKey);
    return sendPost('/api/v1.0/email/send-form', formData);
};
