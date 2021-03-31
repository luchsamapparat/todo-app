import { IncomingMessage } from "http";
import { Locales } from "locale";

export function getLanguage(request: IncomingMessage): string {
    const supportedLocales = new Locales(['en', 'de']);
    const acceptedLocales = new Locales(request.headers['accept-language']);
    return acceptedLocales.best(supportedLocales).language;
}
