declare global {
    interface locationSchema {
        "latitude": 43.61428,
        "longitude": 7.05464
    }

    interface HotelSchema {
        term: string;
        moresuggestions: number;
        autoSuggestInstance: null;
        trackingID:number;
        misspellingfallback:boolean;
        suggestions:Suggestions[];
        geocodeFallback:boolean;
    }

    interface Suggestions{
        name:string;
        entities:Entities[];
    }

    interface Entities{
        geoId:string;
        destinationId:string;
        landmarkCityDestinationId:null;
        type:string;
        redirectPage:string;
        latitude:number;
        longitude:number;
        searchDetail:string;
        caption:string;
        name:string;
    }
    export interface StateInterface{
        hotelsGeo:Array<any>;
        hotels: HotelSchema[];
        adHotels: any;
        hotel: object;
        Buscket: Array<any>;
        total: number;
        test:any;
    }
    export interface SearchHotel{
        adults:number;
        childs:number;
        rooms:number;
        date:string;
        hotel:string;
    }
}

export {}