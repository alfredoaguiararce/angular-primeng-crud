/**
 * Model for data 
 * @number id - 
 * @boolean isActive  - 
 * @string title -
 * @string category -
 * @string author -
 * @string dateCreated -
 * @string languaje -
 */
export interface Document{
    id: number;
    isActive: boolean;
    title: string;
    category: string;
    author: string;
    dateCreated: string;
    languaje: string;
}