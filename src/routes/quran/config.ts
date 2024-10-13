import { TranslationListResponseData } from "@ntq/sdk";
import { QuranConfigProps } from ".";

export function defaultConfigData(id: string | undefined): QuranConfigProps {
    const configFromLocalStorageString: string | null =
        localStorage.getItem("config");
    const configFromLocalStorage: QuranConfigProps =
        configFromLocalStorageString
            ? JSON.parse(configFromLocalStorageString)
            : false;

    return configFromLocalStorage
        ? {
              surahUUID: id as string,
              translationView: configFromLocalStorage.translationView,
              translationUUID: configFromLocalStorage.translationUUID,
          }
        : {
              surahUUID: id as string,
              translationView: true,
              translationUUID: undefined,
          };
}

export function selectDefaultTranslationUUIDFromList(
    translationList: TranslationListResponseData
): string {
    const language = "en";
    const defaultTranslation = translationList.find(
        (translation) => translation.language === language
    );
    return defaultTranslation ? defaultTranslation.uuid : "No Translation Find";
}
