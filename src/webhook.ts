import axios from "axios";
import {Context} from "semantic-release";

type WebhookProps = {
    hook: string;
    message: {
        text: string;
        channel?: string;
        username?: string;
    };
    logger: Context['logger'];
};

export async function webhook(props: WebhookProps) {
    props.logger.log(`Sending webhook to "${props.hook}" with content:\n${props.message}`)
    try {
        await axios.post(props.hook, props.message);
        props.logger.log(`Webhook sent.`);
    } catch (e) {
        props.logger.log(`Failed to send webhook.`);
    }
}
