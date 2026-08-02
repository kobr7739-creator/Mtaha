// عبّي هذين القيمتين من لوحة Supabase الخاصة بك:
// Settings > API > Project URL و anon public key
// آمن أن تكون هذه القيم ظاهرة في الكود لأن الحماية الحقيقية تتم عبر
// صلاحيات Row Level Security في قاعدة البيانات (موضحة في README)

const SUPABASE_URL = "https://sutuegsidwidlnvzwogb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1dHVlZ3NpZHdpZGxudnp3b2diIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU2NTYwNTEsImV4cCI6MjEwMTIzMjA1MX0.QU2BgJV6yfkdlCbSrIOei07F2ITAvUbDyUXyGWc5Olo";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ⚠️ تحذير أمني مهم: خلافًا لمفتاح Supabase أعلاه، توكن بوت تيليجرام هذا
// ليس آمنًا ليكون ظاهرًا للعامة. أي شخص يفتح "عرض مصدر الصفحة" يقدر يسرقه
// ويستخدم بوتك بالكامل (يرسل رسائل باسمه لأي شخص). هذا حل سريع للتجربة فقط.
// يُنصح بشدة إما بإعادة توليد التوكن من BotFather بعد التجربة، أو نقل هذا
// الاتصال لاحقًا إلى وسيط (مثل Cloudflare Worker) يخفي التوكن عن الزوار.
const TELEGRAM_BOT_TOKEN = "8761007014:AAE8bHJ4eCHfWxLOtRR7xtS7fx7Tgo1mjAA";
const TELEGRAM_CHAT_ID = "8791147370";
