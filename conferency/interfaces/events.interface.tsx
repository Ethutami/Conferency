export interface Speaker {
    img: string | null;
    job_title: string;
    speaker_name: string;
}

export interface EventCategory {
    event_id: string;
    category_id: number;
}

export interface EventVoucher {
    event_id: string;
    voucher_id: number;
}

export interface Event {
    id: string;
    event_name: string;
    start_date: string; // ISO date string
    end_date: string;   // ISO date string
    price: string;      // Bisa juga number jika ingin parse
    img: string | null;
    tagline: string;
    description: string;
    location_type: "online" | "offline"; // lebih aman pakai union
    meeting_link: string | null;
    address: string | null;
    latitude: number | null;
    longitude: number | null;
    speakers: Speaker[];
    organizer_id: string;
    created_at: string; // ISO date string
    event_categories: EventCategory[];
    event_vouchers: EventVoucher[];
}
