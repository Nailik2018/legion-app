
const baseUrl = window.location.protocol + '//' + window.location.hostname +
    (window.location.port ? ':' + window.location.port : '') + '/legion-webapp/';
export const environment = {
    production: true,
    baseUrl: baseUrl,
    ajaxUrl: baseUrl + 'ajax/',
    translate: baseUrl + '/assets/i18n/'
};
