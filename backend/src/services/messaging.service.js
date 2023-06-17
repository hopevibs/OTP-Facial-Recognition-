import dotenv from 'dotenv';
import {requestUtility} from '../utilities';
import {ErrorHelper} from '../helpers';

dotenv.config();
class  MessagingService{
    apiKey = process.env.ONE_SIGNAL_API_KEY;
    appId= process.env.ONE_SIGNAL_APP_ID;
    baseUrl = process.env.ONE_SIGNAL_API_BASE_URL;
    smsEndpoint = process.env.ONE_SIGNAL_SMS_ENDPOINT;
    smsFrom = process.env.SMS_FROM_NUMBER;
    headers = {
        'content-Type': 'application/json; charset=utf8',
        'Authorization': `Basic ${this.apiKey}`
    };
    async sendSms({payload}){
        try {
            const data ={
                app_id: this.appId,
                name: payload.name,
                sms_from: this.smsFrom,
                content: payload.content,
                include_phone_number: [payload.phoneNumber]
            };
           return await requestUtility.makeRequest(`${this.baseUrl}/${this.smsEndpoint}`, {
                headers: this.headers,
                data
            });
        }catch (e){
            return new ErrorHelper(
                `Error occurred: ${e}`,
                500
            );
        }
    }
}

export const messagingService = {
    sendSms: async (payload) => await new MessagingService().sendSms(payload),
};