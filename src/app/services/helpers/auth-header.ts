const API_TOKEN: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTdlNDY3Y2YzNjczMzBkNTEzYWVhYTBjMzExYjdjMSIsIm5iZiI6MTcyMzI4NDg0My40OTY0ODcsInN1YiI6IjY2YjczYzJjMjk3ODVlY2VlYTU5NjM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CTFqYzkfoLbXf5a2Kv_Rrelw0VrVJhsrTPLGlZhOu10";

export const headerWithToken = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`,
}