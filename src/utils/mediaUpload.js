import { createClient } from "@supabase/supabase-js"

const anon_key = "sb_publishable_YVS8QAiPk-iDM1QHIa9qFQ_yslPD0ka"
const supabase_url = "https://wzqkwvblzpxdxfmjstie.supabase.co"

const supabase = createClient(supabase_url, anon_key )