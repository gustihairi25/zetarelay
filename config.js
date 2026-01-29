// Konfigurasi Terpusat ZetaChain Pro Terminal
const APP_CONFIG = {
    // Data Firebase (Pastikan sesuai dengan Project Settings di Firebase Console)
    firebase: {
        apiKey: "AIzaSyDrpBJTtankyLgimtOwuriFpiyuC5K10OI",
        authDomain: "studio-727777898-40aea.firebaseapp.com",
        projectId: "studio-727777898-40aea",
        storageBucket: "studio-727777898-40aea.appspot.com",
        messagingSenderId: "351263967108",
        appId: "1:351263967108:web:a0c01af41422903cc17fd1"
    },

    // Daftar Alamat Wallet Resmi (Update Berdasarkan 54568.jpg)
    depositAddresses: {
        "BTC": "bc1q6al6pkdkwt7vpgujwr7fvnjxvkdaet64q5rvnj",
        "ETH": "0x4c51175cdf9b6311ce152694f146d29be8911432",
        "SOL": "5iShtcHj9sAGXoRwbCb5f51ew9B3Rjtn9yM5CXABLgi2",
        "TRX": "TBgjd7vYBzFzoUkhtmYtFQvTxhdjcF36E2",
        "BNB": "0x4c51175cdf9b6311ce152694f146d29be8911432",
        "MATIC": "0x4c51175cdf9b6311ce152694f146d29be8911432",
        "LINEA": "0x4c51175cdf9b6311ce152694f146d29be8911432",
        "ARB": "0x4c51175cdf9b6311ce152694f146d29be8911432",
        "BASE": "0x4c51175cdf9b6311ce152694f146d29be8911432",
        "OP": "0x4c51175cdf9b6311ce152694f146d29be8911432"
    },

    // Pengaturan Trading
    tradeSettings: {
        minDeposit: 50000, // Minimal Rp 50.000
        profitPercentage: 85, // Profit 85% untuk Future Trade
        durations: [30, 60] // Pilihan durasi trade dalam detik
    }
};
