export interface SectionData {
    content?: string | null;
    places?: {
        place?: string | null;
        address?: string | null;
    };
    position?: {
        position?: string | null;
        duration?: string | null;
    };
    list?: string[] | null;
}