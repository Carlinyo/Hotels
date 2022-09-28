declare global {
 interface packageSummaryDetailsModel {
        title: string;
        items: Array<number>
        k:number
    }
    interface PackageHighlights{
        items:number[]
    }
    interface Hotel{
        stars:Array<any>;
        image:string;
        title:string;
        description:string;
        items:Array<any>;
        lastPrice:string;
        price:string;
    }
    interface HotelStandart{
        k:number;
        image:string;
        title:string;
        items:Array<any>;
        lastPrice:string;
        price:string
    }
    interface feedBacks{
        image:string;
        name:string;
        date:string;
        rate:Array<any>;
        description:string;
    }
    interface Main5Body{
        k:number;
        image:string;
        name:string;
    }
    interface FooterDiv{
        k:number;
        title:string;
        items:string[];
    }
    interface Buscket{
        count:number;
    }
    interface flashoffer{
        title:string
    }
    interface Rate{
        rate:number
    }
}

export {}