import { Connection, ControllerSurah, ControllerTranslation } from "@ntq/sdk";

const connection = new Connection([
    new URL(process.env.REACT_APP_API_URL || "https://api.natiq.net"),
]);

export const controllerSurah = new ControllerSurah(connection);
export const controllerTranslation = new ControllerTranslation(connection);
