import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zxytiocfkbyxkvksvwqc.supabase.co";
const supabaseKey = "sb_publishable_vqsPv5Oh1xdqKklPpsPBRg_MP6bFEFY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
