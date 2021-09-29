import {Context} from "semantic-release";
import {Config} from "./Config";

export function verifyConditions(config: Config, context: Context) {
    const {env, options, logger} = context;
    const errors: string[] = [];
    if (!options.plugins.find(p => p === '@semantic-release/release-notes-generator'
        || p?.[0] === '@semantic-release/release-notes-generator')) {
        logger.error("The plugin @semantic-release/release-notes-generator was not found.");
        errors.push('missing-release-notes-generator');
    }
    if (!env.MATTERMOST_WEBHOOK && !config.webhook) {
        logger.error("No webhook found in config or env environment variable \"MATTERMOST_WEBHOOK\".", 'no-webhook');
        errors.push('missing-hook');
    }

    if (errors.length > 0) {
        throw new Error(errors.join('\n'));
    }
}