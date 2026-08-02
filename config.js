// عبّي هذين القيمتين من لوحة Supabase الخاصة بك:
// Settings > API > Project URL و anon public key
// آمن أن تكون هذه القيم ظاهرة في الكود لأن الحماية الحقيقية تتم عبر
// صلاحيات Row Level Security في قاعدة البيانات (موضحة في README)

const SUPABASE_URL = "https://sutuegsidwidlnvzwogb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1dHVlZ3NpZHdpZGxudnp3b2diIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU2NTYwNTEsImV4cCI6MjEwMTIzMjA1MX0.QU2BgJV6yfkdlCbSrIOei07F2ITAvUbDyUXyGWc5Olo";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
