import { createClient } from "@supabase/supabase-js"

const anon_key = "sb_publishable_YVS8QAiPk-iDM1QHIa9qFQ_yslPD0ka"
const supabase_url = "https://wzqkwvblzpxdxfmjstie.supabase.co"

const supabase = createClient(supabase_url, anon_key )

export default function mediaUpload(file){
    const timesStamp = new Date().getTime(); //get the current time
    const fileName = timesStamp+file.name; //in supabase we cant save files with the same name so we add currentTime infront of the file name

    supabase.storage.from("images").upload(fileName, file, { //images : bucket name ; "filr : parameter name from the funtion mediaUpload; wendiya name"
        cacheControl : '3600',
        upsert: false
    }).then( (res)=>{

        const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl; //images : buacket name ; file.name: related file/image name;   upload ahina image in Url ei eduththal 
        console.log(publicUrl)
    })
}