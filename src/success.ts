import {Config} from "./Config";
import {Context} from "semantic-release";

import { webhook } from './webhook';

export async function success(config: Config, context: Context) {
    const {nextRelease, logger} = context;
    logger.log('Executing webhook.');

    const hook = context.env.MATTERMOST_WEBHOOK || config.webhook;
    const projectName = context.env.CI_PROJECT_NAME || config.name;
    const message = {
        text: `${projectName ? (projectName + ': ') : ''}The ${nextRelease.type} version "${nextRelease.version}" has been released.\n\n${nextRelease.notes}`,
        channel: config.channel,
        username: config.username
    }

    await webhook({
        hook,
        message,
        logger
    })
}
