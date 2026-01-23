import { createClient } from "@supabase/supabase-js"

const anon_key = "sb_publishable_YVS8QAiPk-iDM1QHIa9qFQ_yslPD0ka"
const supabase_url = "https://wzqkwvblzpxdxfmjstie.supabase.co"

const supabase = createClient(supabase_url, anon_key )

export default function mediaUpload(file){
    supabase.storage.from("images").upload(file.name, file, { //images : bucket name ; "filr : parameter name from the funtion mediaUpload "
        cacheControl : '3600',
        upsert: false
    }).then( (res)=>{
        const publicUrl = supabase.storage.from("images").getPublicUrl(file.name)
    })
}