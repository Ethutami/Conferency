export interface Voucher {
    id: number;
    voucher_code: string;
    voucher_name: string;
    short_info?: string | null;
    organizer_id: string;
    discount_amount?: number | null;
    discount_percent?: number | null;
    quota: number;
    usage_count: number;
    available_from?: string | null;
    available_until?: string | null;
    terms_conditions?: string | null;
    created_at: string;
    updated_at: string;
}

export const voucherDummy: Voucher[] = [
    {
        id: 1,
        voucher_code: "ORG01-EARLY10",
        voucher_name: "Early Bird 10%",
        short_info: "Diskon early bird",
        organizer_id: "11111111-1111-1111-1111-111111111111",
        discount_amount: null,
        discount_percent: 10.0,
        quota: 100,
        usage_count: 12,
        available_from: "2025-01-01T00:00:00Z",
        available_until: "2025-03-01T23:59:59Z",
        terms_conditions: `• Berlaku untuk semua tiket
• Tidak dapat digabung promo lain
• 1 voucher untuk 1 transaksi`,
        created_at: "2025-01-01T00:00:00Z",
        updated_at: "2025-01-20T10:15:00Z"
    },
    {
        id: 2,
        voucher_code: "ORG01-FLAT50K",
        voucher_name: "Flat 50K Off",
        short_info: "Diskon nominal 50 ribu",
        organizer_id: "11111111-1111-1111-1111-111111111111",
        discount_amount: 50000,
        discount_percent: null,
        quota: 50,
        usage_count: 5,
        available_from: "2025-02-01T00:00:00Z",
        available_until: "2025-04-01T23:59:59Z",
        terms_conditions: `• Minimum transaksi Rp200.000
• Berlaku untuk kategori General Admission
• Tidak refund apabila transaksi dibatalkan`,
        created_at: "2025-02-01T00:00:00Z",
        updated_at: "2025-02-10T12:00:00Z"
    },
];
