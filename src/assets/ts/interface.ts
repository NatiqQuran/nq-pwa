//Surah

import { langCodeType } from "./langCode";

///List
export interface SurahInListProps {
    name: string;
    uuid: string;
    number: number;
    period: "makki" | "madani" | null;
    number_of_ayahs: number;
}
///View
export interface AyahInsideSurahViewProps {
    number: number;
    uuid: string;
    sajdeh: null | "vajib" | "mustahab";
    text: string;
}
export interface SurahViewProps {
    surah_uuid: string;
    surah_name: string;
    surah_period: "makki" | "madani" | null;
    surah_number: number;
    bismillah_status: boolean;
    bismillah_as_first_ayah: boolean;
    bismillah_text: string | null;
    ayahs: AyahInsideSurahViewProps[];
}

//Translation
export interface TranslatorInsideTranslationProps {
    account_uuid: string;
    username: string;
    first_name: string | null;
    last_name: string | null;
}
///List
export interface TranslationInListProps {
    uuid: string;
    language: langCodeType;
    release_date: string | null;
    source: string;
    approved: boolean;
    bismillah_text: string;
    translator: TranslatorInsideTranslationProps;
}
///View
export interface AyahInsideTranslationViewProps {
    uuid: string;
    text_uuid: string;
    number: number;
    surah_number: number;
    text: string;
}
export interface TranslationViewProps {
    mushaf_uuid: string;
    language: string;
    release_date: string | null;
    source: string;
    status: string;
    bismillah_text: string;
    translator: TranslatorInsideTranslationProps;
    ayahs: AyahInsideTranslationViewProps[];
}
