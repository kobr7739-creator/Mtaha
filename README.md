# خطوات تشغيل المتجر

الموقع جاهز (`index.html` للزوار و `admin.html` لك أنت فقط). يبقى ربطه بقاعدة بيانات Supabase (مجانية) حتى يعمل.

## 1. إنشاء مشروع Supabase
1. افتح https://supabase.com وسجّل حساب مجاني.
2. أنشئ مشروعًا جديدًا (New Project) واختر كلمة مرور لقاعدة البيانات واحفظها.
3. انتظر حتى يجهز المشروع (دقيقة أو دقيقتين).

## 2. إنشاء جدول المنتجات
من القائمة الجانبية اذهب إلى **SQL Editor** → New query، والصق هذا الكود ثم اضغط Run:

```sql
create table products (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  price text not null,
  description text,
  image_url text,
  created_at timestamp with time zone default now()
);

alter table products enable row level security;

create policy "Public can view products"
on products for select
using (true);

create policy "Owner can insert products"
on products for insert
with check (auth.role() = 'authenticated');

create policy "Owner can update products"
on products for update
using (auth.role() = 'authenticated');

create policy "Owner can delete products"
on products for delete
using (auth.role() = 'authenticated');
```

هذا يعني: أي زائر يقدر يشاهد المنتجات فقط، وأنت وحدك (بعد تسجيل الدخول) تقدر تضيف أو تعدّل أو تحذف.

## 3. إنشاء مكان تخزين الصور
1. من القائمة الجانبية اذهب إلى **Storage** → Create a new bucket.
2. سمّه `product-images` واجعله **Public**.
3. بعد إنشائه، اذهب إلى تبويب Policies للـ bucket وأضف policy تسمح لـ authenticated users بالرفع (Insert) — عادة Supabase يعطيك زر جاهز "New Policy" مع قوالب سريعة، اختر "Allow authenticated users to upload".

## 4. إنشاء حسابك كمالك للمتجر
1. اذهب إلى **Authentication** → Users → Add user.
2. أدخل بريدك الإلكتروني وكلمة مرور. هذا هو الحساب الوحيد الذي يستطيع الدخول للوحة التحكم `admin.html`.
3. تأكد أن **Email confirmation** غير مفعّل إجباريًا، أو أكّد البريد يدويًا من نفس الصفحة، حتى تقدر تسجل الدخول فورًا.

## 5. ربط الموقع بمشروعك
1. من القائمة الجانبية اذهب إلى **Settings → API**.
2. انسخ **Project URL** و **anon public key**.
3. افتح ملف `config.js` والصقهما مكان:
   - `PUT_YOUR_SUPABASE_URL_HERE`
   - `PUT_YOUR_SUPABASE_ANON_KEY_HERE`

## 6. الرفع على GitHub Pages
1. ارفع الملفات الثلاثة (`index.html`, `admin.html`, `config.js`) إلى المستودع (repository) عندك على GitHub.
2. من إعدادات المستودع Settings → Pages، فعّل GitHub Pages على الفرع (branch) الرئيسي.
3. بعد دقيقة أو دقيقتين سيعطيك GitHub رابطًا مثل:
   `https://username.github.io/repo-name/`
   - هذا الرابط هو متجرك العام (`index.html`).
   - لوحة التحكم الخاصة بك تكون على:
   `https://username.github.io/repo-name/admin.html`

## ملاحظة أمان
ظهور `anon key` داخل الكود أمر طبيعي ومتوقع مع Supabase — الحماية الفعلية تأتي من صلاحيات Row Level Security التي أضفتها في الخطوة 2، فلا أحد يقدر يضيف أو يحذف منتجات إلا من سجّل دخوله بحسابك.
# Mtaha
