export interface Review {
    id: string;                // UUID atau string unik
    user_name: string;         // Nama pengguna
    user_avatar?: string;      // URL avatar (opsional)
    rating: number;            // Rating 1-5
    comment: string;           // Review text
    date: string;              // Tanggal review ISO string
}

export const reviewsDummy: Review[] = [
    {
        id: "1",
        user_name: "Alice Johnson",
        user_avatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        comment: "Acara ini sangat luar biasa! Materi lengkap dan pembicara profesional.",
        date: "2025-05-01T10:30:00Z"
    },
    {
        id: "2",
        user_name: "Bob Smith",
        user_avatar: "https://i.pravatar.cc/150?img=2",
        rating: 4,
        comment: "Seru dan banyak ilmu baru, tapi tempat sedikit terlalu ramai.",
        date: "2025-05-02T12:15:00Z"
    },
    {
        id: "3",
        user_name: "Catherine Lee",
        user_avatar: "https://i.pravatar.cc/150?img=3",
        rating: 3,
        comment: "Kontennya bagus, tapi ada beberapa sesi yang terasa terburu-buru.",
        date: "2025-05-03T08:45:00Z"
    },
    {
        id: "4",
        user_name: "David Brown",
        user_avatar: "https://i.pravatar.cc/150?img=4",
        rating: 5,
        comment: "Sangat membantu untuk network dan belajar teknologi terbaru!",
        date: "2025-05-04T14:00:00Z"
    },
    {
        id: "5",
        user_name: "Emma Wilson",
        user_avatar: "https://i.pravatar.cc/150?img=5",
        rating: 4,
        comment: "Materi bagus, tapi sedikit kesulitan dengan parkir di lokasi.",
        date: "2025-05-05T09:20:00Z"
    }
];
