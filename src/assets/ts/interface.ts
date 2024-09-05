import { langCodeType } from "./langCode";

//Surah
interface SurahName {
    arabic: string;
    pronunciation: string | null;
    translation_phrase: string | null;
    translation: string | null;
}
///List
export interface SurahInListProps {
    uuid: string;
    number: number;
    period: "makki" | "madani" | null;
    number_of_ayahs: number;
    name: SurahName[];
}
///View
export interface AyahInsideSurahViewProps {
    number: number;
    uuid: string;
    sajdeh: null | "vajib" | "mustahab";
    text: string;
}
export interface SurahViewProps {
    uuid: string;
    mushaf_uuid: string;
    mushaf_name: string;
    name: SurahName[];
    period: "makki" | "madani" | null;
    number: number;
    bismillah_status: boolean;
    bismillah_as_first_ayah: boolean;
    bismillah_text: string | null;
    number_of_ayahs: number;
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
